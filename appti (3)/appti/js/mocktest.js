/* ==========================================================================
   MOCKTEST.JS - Examination Engine & Results Compiler
   ========================================================================== */

let mockQuestions = [];
let mockState = []; // Array of { index, visited, answered, selectedIndex, marked }
let activeMockIndex = 0;
let examTimerSeconds = 0;
let examTimerInterval = null;
let examTotalSeconds = 0;
let autoNextEnabled = true;

document.addEventListener('DOMContentLoaded', () => {
    loadGlobalLayout('mocktest');
});

// --- Start Mock Test Session ---
async function startExam(level, consented = false) {
    if (!consented) {
        CheatingProtection.showSecurityConsent(() => {
            startExam(level, true);
        });
        return;
    }
    mockQuestions = [];
    mockState = [];
    activeMockIndex = 0;
    
    // Set parameters based on tier choice
    let qCount = 20;
    let durationMins = 30;

    if (level === 'intermediate') {
        qCount = 30;
        durationMins = 45;
    } else if (level === 'advanced') {
        qCount = 40;
        durationMins = 60;
    } else if (level === 'full') {
        qCount = 60;
        durationMins = 90;
    }

    // Show loader while loading files
    let loader = document.getElementById('global-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'loading-screen';
        loader.innerHTML = '<div class="loader-spinner"></div><div class="loader-logo">VetriPathLearn</div>';
        document.body.appendChild(loader);
    }
    loader.classList.remove('fade-out');

    // Pool questions across all subjects
    const subjects = ['aptitude', 'reasoning', 'verbal'];
    const topicsMap = {
        aptitude: ['numbers', 'percentage', 'profit_loss', 'ratio_proportion', 'average', 'time_work', 'time_distance', 'speed_distance', 'probability', 'permutation_combination', 'data_interpretation', 'simplification', 'algebra', 'geometry'],
        reasoning: ['puzzles', 'seating_arrangement', 'blood_relations', 'coding_decoding', 'syllogism', 'direction_sense', 'statement_conclusion', 'series', 'analogy', 'non_verbal'],
        verbal: ['grammar', 'vocabulary', 'reading_comprehension', 'sentence_correction', 'error_spotting', 'fill_blanks', 'para_jumbles']
    };

    const loadPromises = [];
    subjects.forEach(sub => {
        const topics = topicsMap[sub];
        topics.forEach(t => {
            loadPromises.push(loadTopicScript(sub, t));
        });
    });

    try {
        await Promise.all(loadPromises);
    } catch (e) {
        console.error("Failed loading mock test scripts", e);
    }

    // Hide loader
    loader.classList.add('fade-out');

    let aggregatedPool = [];
    subjects.forEach(sub => {
        const topics = topicsMap[sub];
        topics.forEach(t => {
            const list = MockDataGen.getQuestions(sub, t, 40);
            aggregatedPool = aggregatedPool.concat(list);
        });
    });

    // Deduplicate by question text to guarantee NO repeat questions appear
    const seenTexts = new Set();
    const uniquePool = [];
    aggregatedPool.forEach(q => {
        const textKey = (q.text || "").trim();
        if (textKey && !seenTexts.has(textKey)) {
            seenTexts.add(textKey);
            uniquePool.push(q);
        }
    });

    // Fisher-Yates shuffle
    for (let i = uniquePool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniquePool[i], uniquePool[j]] = [uniquePool[j], uniquePool[i]];
    }

    mockQuestions = uniquePool.slice(0, qCount);

    // Initialize mock state track
    mockQuestions.forEach((q, idx) => {
        mockState.push({
            index: idx,
            visited: idx === 0, // First is visited initially
            answered: false,
            selectedIndex: null,
            marked: false
        });
    });

    // Hide config page, show test sheet
    document.getElementById('mock-config-card').style.display = 'none';
    document.getElementById('mock-exam-workspace').style.display = 'grid';

    // Set duration
    examTotalSeconds = durationMins * 60;
    examTimerSeconds = examTotalSeconds;
    
    // Render
    renderPalette();
    renderExamQuestion();
    startExamTimer();

    // Enable secure exam window monitoring with 3-violation limit & Fullscreen mode
    CheatingProtection.enable({
        maxViolations: 3,
        enableFullscreen: true,
        onViolationLimitReached: () => {
            submitExam();
        }
    });
}

// --- Timer Management ---
function startExamTimer() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    
    updateTimerDisplay();

    examTimerInterval = setInterval(() => {
        examTimerSeconds -= 1;
        updateTimerDisplay();

        // Warn when 2 minutes remain
        if (examTimerSeconds === 120) {
            PlacementPrepState.dispatchToast('\u26A0\uFE0F Warning: 2 minutes remaining!', 'warning');
        }

        if (examTimerSeconds <= 0) {
            clearInterval(examTimerInterval);
            PlacementPrepState.dispatchToast('\u231B Time is up! Submitting exam.', 'warning');
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(examTimerSeconds / 60);
    const secs = examTimerSeconds % 60;
    const padM = mins < 10 ? '0' + mins : mins;
    const padS = secs < 10 ? '0' + secs : secs;
    
    const timerElem = document.getElementById('exam-countdown');
    if (timerElem) {
        timerElem.textContent = `${padM}:${padS}`;
        // Apply warning styling
        if (examTimerSeconds < 300) {
            timerElem.style.color = 'var(--danger)';
        } else {
            timerElem.style.color = '';
        }
    }
}

// --- Palette Grid compilation ---
function renderPalette() {
    const paletteGrid = document.getElementById('palette-numbers-grid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = mockState.map(s => {
        let statusClass = 'palette-not-visited';
        if (s.marked) {
            statusClass = 'palette-marked';
        } else if (s.answered) {
            statusClass = 'palette-answered';
        } else if (s.visited) {
            statusClass = 'palette-not-answered';
        }

        const isActive = s.index === activeMockIndex ? 'palette-active' : '';

        return `
            <button class="palette-num-btn ${statusClass} ${isActive}" onclick="jumpToExamQuestion(${s.index})">
                ${s.index + 1}
            </button>
        `;
    }).join('');
}

// --- Question Renderer ---
function renderExamQuestion() {
    if (mockQuestions.length === 0) return;

    const q = mockQuestions[activeMockIndex];
    const state = mockState[activeMockIndex];
    state.visited = true;

    // Renders question statement
    const displayArea = document.getElementById('exam-q-box');
    displayArea.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <span class="badge badge-${q.difficulty}">${q.difficulty}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 600;">Subject: ${q.subject.toUpperCase()} &raquo; ${q.topic.toUpperCase().replace('_', ' ')}</span>
        </div>
        <div class="question-text" style="margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 600; line-height: 1.5;">${q.text}</div>
        <div class="options-list">
            ${q.options.map((opt, idx) => {
                const selected = state.selectedIndex === idx ? 'selected' : '';
                return `
                    <button class="option-btn ${selected}" onclick="selectExamOption(${idx})">
                        <span class="option-index">${String.fromCharCode(65 + idx)}</span>
                        <span>${opt}</span>
                    </button>
                `;
            }).join('')}
        </div>
    `;

    // Sync button visibilities
    document.getElementById('btn-prev-exam').disabled = activeMockIndex === 0;
    
    const nextBtn = document.getElementById('btn-next-exam');
    if (activeMockIndex === mockQuestions.length - 1) {
        nextBtn.innerHTML = `Save & Review <i class="fa-solid fa-flag"></i>`;
    } else {
        nextBtn.innerHTML = `Save & Next <i class="fa-solid fa-arrow-right"></i>`;
    }

    renderPalette();
}

// --- Interaction Handlers ---
function selectExamOption(idx) {
    const state = mockState[activeMockIndex];
    state.selectedIndex = idx;
    state.answered = true;

    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((btn, index) => {
        if (index === idx) btn.classList.add('selected');
        else btn.classList.remove('selected');
    });

    renderPalette();

    // Auto next logic
    if (autoNextEnabled && activeMockIndex < mockQuestions.length - 1) {
        setTimeout(() => {
            nextExamQuestion();
        }, 300);
    }
}

function nextExamQuestion() {
    if (activeMockIndex + 1 < mockQuestions.length) {
        activeMockIndex += 1;
        renderExamQuestion();
    } else {
        PlacementPrepState.dispatchToast('You have reached the final card. Review your choices or click Submit.', 'info');
    }
}

function prevExamQuestion() {
    if (activeMockIndex - 1 >= 0) {
        activeMockIndex -= 1;
        renderExamQuestion();
    }
}

function jumpToExamQuestion(idx) {
    activeMockIndex = idx;
    renderExamQuestion();
}

function markQuestionForReview() {
    const state = mockState[activeMockIndex];
    state.marked = !state.marked; // Toggle review state
    renderPalette();
}

function clearExamAnswer() {
    const state = mockState[activeMockIndex];
    state.selectedIndex = null;
    state.answered = false;
    state.marked = false;
    renderExamQuestion();
}

// --- Submit and Compile Results ---
function submitExamPrompt() {
    const answeredCount = mockState.filter(s => s.answered).length;
    const unansweredCount = mockQuestions.length - answeredCount;

    const existing = document.getElementById('submit-confirm-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'submit-confirm-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(4, 6, 14, 0.88);
        z-index: 250000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 1.2rem;
        box-sizing: border-box;
    `;

    modal.innerHTML = `
        <div style="width: 100%; max-width: 440px; border-radius: 24px; padding: 2rem 1.6rem; background: radial-gradient(circle at 50% 0%, rgba(127, 90, 240, 0.22) 0%, rgba(8, 10, 20, 0.96) 75%); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 25px 60px rgba(0,0,0,0.8); text-align: center; display: flex; flex-direction: column; gap: 1.2rem; box-sizing: border-box;">
            <div style="width: 68px; height: 68px; border-radius: 50%; background: rgba(127, 90, 240, 0.2); color: #7f5af0; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto; border: 2px solid rgba(127, 90, 240, 0.4);">
                <i class="fa-solid fa-file-signature"></i>
            </div>
            <div>
                <h3 style="margin: 0 0 0.4rem; font-size: 1.5rem; color: #ffffff; font-family: sans-serif; font-weight: 800;">Submit Examination?</h3>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem; line-height: 1.4;">Are you sure you want to finish and submit your mock test session?</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin: 0.2rem 0;">
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 0.8rem;">
                    <div style="font-size: 1.5rem; font-weight: 800; color: #10b981;">${answeredCount}</div>
                    <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Answered</div>
                </div>
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 14px; padding: 0.8rem;">
                    <div style="font-size: 1.5rem; font-weight: 800; color: #ef4444;">${unansweredCount}</div>
                    <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Skipped</div>
                </div>
            </div>

            <div style="display: flex; gap: 0.8rem; margin-top: 0.4rem;">
                <button id="btn-cancel-submit" style="flex: 1; padding: 0.85rem; border-radius: 30px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #ffffff; cursor: pointer;">Continue Test</button>
                <button id="btn-confirm-submit" style="flex: 1.3; padding: 0.85rem; border-radius: 30px; font-weight: 700; border: none; background: #7f5af0; color: #ffffff; cursor: pointer; box-shadow: 0 6px 20px rgba(127, 90, 240, 0.4);">Yes, Submit</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#btn-cancel-submit').addEventListener('click', () => {
        modal.remove();
    });

    modal.querySelector('#btn-confirm-submit').addEventListener('click', () => {
        modal.remove();
        submitExam();
    });
}

function submitExam() {
    if (examTimerInterval) clearInterval(examTimerInterval);

    // Disable secure exam window monitoring
    CheatingProtection.disable();

    // Calculate metrics
    let scoreCorrect = 0;
    let scoreWrong = 0;
    const topicStats = {};
    const wrongAnswersList = [];

    mockState.forEach((state) => {
        const q = mockQuestions[state.index];
        const isAnswered = state.selectedIndex !== null;
        let isCorrect = false;

        if (isAnswered) {
            const selectedText = q.options[state.selectedIndex];
            isCorrect = selectedText === q.answer;
        }

        if (isAnswered) {
            if (isCorrect) {
                scoreCorrect += 1;
            } else {
                scoreWrong += 1;
                wrongAnswersList.push({ question: q, selectedIdx: state.selectedIndex });
            }
        }

        // Aggregate topic stats
        if (!topicStats[q.topic]) {
            topicStats[q.topic] = { solved: 0, correct: 0, subject: q.subject };
        }
        topicStats[q.topic].solved += 1;
        if (isAnswered && isCorrect) topicStats[q.topic].correct += 1;

        // Log results in centralized LocalStorage history
        // Treat unattempted questions in exam as incorrect solves (logged in system) or skip logging to protect history.
        // We log only attempted ones to keep accuracy calculations valid.
        if (isAnswered) {
            PlacementPrepState.logSolvedQuestion(q.id, q.topic, q.subject, isCorrect, Math.round(examTotalSeconds / mockQuestions.length));
        }
    });

    // Hide workspace, show results
    document.getElementById('mock-exam-workspace').style.display = 'none';
    document.getElementById('mock-results-card').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Renders statistics UI
    const totalAttempted = scoreCorrect + scoreWrong;
    const accuracy = totalAttempted > 0 ? Math.round((scoreCorrect / totalAttempted) * 100) : 0;

    document.getElementById('res-score').textContent = `${scoreCorrect} / ${mockQuestions.length}`;
    document.getElementById('res-accuracy').textContent = `${accuracy}%`;

    // Popup prominent score modal overlay for immediate visual feedback on both web & mobile app
    if (typeof showScoreModal === 'function') {
        showScoreModal({
            title: "Mock Exam Completed!",
            scoreCorrect: scoreCorrect,
            scoreWrong: scoreWrong,
            totalQuestions: mockQuestions.length,
            accuracy: accuracy,
            timeSeconds: examTotalSeconds,
            onClose: () => {
                document.getElementById('mock-results-card').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Topic-wise breakdown
    const breakdownBox = document.getElementById('res-topic-analysis');
    breakdownBox.innerHTML = Object.entries(topicStats).map(([topicKey, data]) => {
        const acc = data.solved > 0 ? Math.round((data.correct / data.solved) * 100) : 0;
        const meta = MockDataGen.getTopicMetadata(data.subject, topicKey);
        
        let indicatorClass = 'indicator-weak';
        if (acc >= 75) indicatorClass = 'indicator-strong';
        
        return `
            <div class="topic-analytics-row">
                <span class="topic-tag">${meta.title} (${data.solved} Qs)</span>
                <span class="strength-indicator ${indicatorClass}">${acc}% Accuracy (${data.correct} Correct)</span>
            </div>
        `;
    }).join('');

    // Detailed wrong answers review
    const reviewBox = document.getElementById('res-wrong-review');
    if (wrongAnswersList.length === 0) {
        reviewBox.innerHTML = `
            <div class="glass-panel" style="text-align: center; padding: 2rem; border-color: var(--success); background: hsla(145, 80%, 42%, 0.05); color: var(--success);">
                <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; margin-bottom: 0.8rem;"></i>
                <h4>Flawless Session!</h4>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">You answered every attempted question correctly in this test.</p>
            </div>
        `;
    } else {
        reviewBox.innerHTML = wrongAnswersList.map(({ question, selectedIdx }) => {
            const chosenOption = question.options[selectedIdx];
            return `
                <div class="glass-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--danger);">
                    <div style="font-weight: 700; color: var(--danger); font-size: 0.95rem; margin-bottom: 0.5rem;">
                        Incorrect choice: Option ${String.fromCharCode(65 + selectedIdx)} (${chosenOption})
                    </div>
                    <div style="font-weight: 600; margin-bottom: 1rem; color: var(--text-primary);">${question.text}</div>
                    
                    <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <div style="font-weight: 700; color: var(--primary); margin-bottom: 0.5rem;"><i class="fa-solid fa-lightbulb"></i> Walkthrough Solution</div>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; white-space: pre-line;">${question.solution}</p>
                    </div>
                    ${question.formula ? `
                    <div style="margin-top: 0.8rem; font-family: monospace; font-size: 0.85rem; color: var(--success);">
                        Formula: ${question.formula}
                    </div>` : ''}
                </div>
            `;
        }).join('');
    }
}

function exitMockTest() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    CheatingProtection.disable();
    document.getElementById('mock-results-card').style.display = 'none';
    document.getElementById('mock-exam-workspace').style.display = 'none';
    document.getElementById('mock-config-card').style.display = 'block';
}

function toggleAutoNext() {
    autoNextEnabled = !autoNextEnabled;
    const btn = document.getElementById('btn-auto-next');
    if (autoNextEnabled) {
        btn.innerHTML = `<i class="fa-solid fa-toggle-on"></i> Auto Next`;
        btn.style.color = 'var(--primary)';
    } else {
        btn.innerHTML = `<i class="fa-solid fa-toggle-off"></i> Auto Next`;
        btn.style.color = '';
    }
}

window.startExam = startExam;
window.selectExamOption = selectExamOption;
window.nextExamQuestion = nextExamQuestion;
window.prevExamQuestion = prevExamQuestion;
window.jumpToExamQuestion = jumpToExamQuestion;
window.markQuestionForReview = markQuestionForReview;
window.clearExamAnswer = clearExamAnswer;
window.submitExamPrompt = submitExamPrompt;
window.exitMockTest = exitMockTest;
window.toggleAutoNext = toggleAutoNext;
