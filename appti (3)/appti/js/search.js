/* ==========================================================================
   SEARCH.JS - Global Search Indexer & Filter Router
   ========================================================================== */

let searchResultsPool = [];

document.addEventListener('DOMContentLoaded', () => {
    loadGlobalLayout('search');

    // Setup input triggers with 250ms debouncing for peak smoothness
    const searchBar = document.getElementById('search-view-input');
    const searchBtn = document.getElementById('search-view-btn');

    let debounceTimeout = null;

    if (searchBar) {
        searchBar.addEventListener('input', () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                if (searchBar.value.trim().length >= 2) {
                    executeGlobalSearch();
                }
            }, 250);
        });

        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                clearTimeout(debounceTimeout);
                executeGlobalSearch();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            clearTimeout(debounceTimeout);
            executeGlobalSearch();
        });
    }

    // Check for query parameters in URL (e.g. redirected from home hero)
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q && searchBar) {
        searchBar.value = q;
        executeGlobalSearch();
    }
});

// --- Main Search Execution ---
async function executeGlobalSearch() {
    const input = document.getElementById('search-view-input');
    const query = input.value.trim().toLowerCase();
    const resultsContainer = document.getElementById('search-results-list');

    if (!query) {
        PlacementPrepState.dispatchToast('Please enter a keyword to execute search!', 'warning');
        return;
    }

    // Display skeleton loader
    resultsContainer.innerHTML = `
        <div class="skeleton glass-card" style="height: 100px; margin-bottom: 1rem;"></div>
        <div class="skeleton glass-card" style="height: 100px; margin-bottom: 1rem;"></div>
        <div class="skeleton glass-card" style="height: 100px; margin-bottom: 1rem;"></div>
    `;

    // Collect question sets across all subjects
    const subjects = {
        aptitude: ['numbers', 'percentage', 'profit_loss', 'ratio_proportion', 'average', 'time_work', 'time_distance', 'speed_distance', 'probability', 'permutation_combination', 'data_interpretation', 'simplification', 'algebra', 'geometry'],
        reasoning: ['puzzles', 'seating_arrangement', 'blood_relations', 'coding_decoding', 'syllogism', 'direction_sense', 'statement_conclusion', 'series', 'analogy', 'non_verbal'],
        verbal: ['grammar', 'vocabulary', 'reading_comprehension', 'sentence_correction', 'error_spotting', 'fill_blanks', 'para_jumbles']
    };

    const loadPromises = [];

    for (const [sub, topics] of Object.entries(subjects)) {
        topics.forEach(t => {
            loadPromises.push(loadTopicScript(sub, t));
        });
    }

    try {
        await Promise.all(loadPromises);
    } catch (e) {
        console.error("Failed loading search scripts", e);
    }

    const tempDatabase = [];
    if (window.TOPIC_QUESTIONS) {
        for (const list of Object.values(window.TOPIC_QUESTIONS)) {
            tempDatabase.push(...list);
        }
    }

    // Apply filters
    searchResultsPool = tempDatabase.filter(q => {
        const topicMeta = MockDataGen.getTopicMetadata(q.subject, q.topic);
        const matchesText = q.text.toLowerCase().includes(query);
        const matchesFormula = (q.formula && q.formula.toLowerCase().includes(query));
        const matchesTopic = (q.topic.toLowerCase().includes(query) || topicMeta.title.toLowerCase().includes(query));
        const matchesTags = q.tags ? q.tags.some(tag => tag.toLowerCase().includes(query)) : false;
        
        return matchesText || matchesFormula || matchesTopic || matchesTags;
    });

    renderSearchResults();
}

// --- Render Results ---
function renderSearchResults() {
    const resultsContainer = document.getElementById('search-results-list');
    
    if (searchResultsPool.length === 0) {
        resultsContainer.innerHTML = `
            <div class="glass-card" style="text-align: center; padding: 4rem 2rem;">
                <i class="fa-solid fa-file-circle-xmark" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1.5rem;"></i>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No matching questions found</h3>
                <p style="color: var(--text-secondary); max-width: 500px; margin-left: auto; margin-right: auto;">
                    We couldn't find matches for that key. Verify your spelling or try searching generic terms like 'Formula', 'Percentage', 'Average', or 'Coding'.
                </p>
            </div>
        `;
        return;
    }

    resultsContainer.innerHTML = searchResultsPool.map(q => {
        const topicMeta = MockDataGen.getTopicMetadata(q.subject, q.topic);
        return `
            <div class="glass-card bookmark-card-item pulse-on-hover" onclick="previewSearchQuestion('${q.id}')">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <span class="badge badge-${q.difficulty}">${q.difficulty}</span>
                        <span style="font-size: 0.85rem; color: var(--primary); margin-left: 0.5rem; font-weight: 700;">
                            ${q.subject.toUpperCase()} &raquo; ${topicMeta.title}
                        </span>
                    </div>
                </div>
                <div style="font-weight: 600; color: var(--text-primary); line-height: 1.4;">
                    ${q.text.substring(0, 200)}${q.text.length > 200 ? '...' : ''}
                </div>
                ${q.formula ? `<div style="margin-top: 0.8rem; font-family: monospace; font-size: 0.85rem; color: var(--text-secondary); background: var(--border-color); padding: 0.3rem 0.6rem; border-radius: 4px; display: inline-block;">Formula: ${q.formula}</div>` : ''}
            </div>
        `;
    }).join('');
}

// --- Preview Modal ---
function previewSearchQuestion(id) {
    const q = searchResultsPool.find(item => item.id === id);
    if (!q) return;

    document.getElementById('search-modal-q-id').innerHTML = `<span class="badge badge-${q.difficulty}">${q.difficulty}</span>`;
    document.getElementById('search-modal-q-text').innerHTML = q.text;

    document.getElementById('search-modal-correct-ans').textContent = q.answer;
    document.getElementById('search-modal-solution').textContent = q.solution;
    document.getElementById('search-modal-formula').textContent = q.formula || "Basic principles apply.";
    document.getElementById('search-modal-shortcut').textContent = q.shortcut || "N/A";

    const optionsBox = document.getElementById('search-modal-options');
    optionsBox.innerHTML = q.options.map((opt, index) => {
        const isCorrect = opt === q.answer;
        const statusClass = isCorrect ? 'correct' : '';
        return `
            <div class="option-btn ${statusClass}" style="pointer-events: none;">
                <span class="option-index">${String.fromCharCode(65 + index)}</span>
                <span>${opt}</span>
            </div>
        `;
    }).join('');

    document.getElementById('search-modal-container').classList.add('active');
}

function closeSearchModal() {
    document.getElementById('search-modal-container').classList.remove('active');
}

window.executeGlobalSearch = executeGlobalSearch;
window.previewSearchQuestion = previewSearchQuestion;
window.closeSearchModal = closeSearchModal;
