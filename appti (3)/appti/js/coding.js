/* ==========================================================================
   CODING.JS - UI Controller for Coding Workstation
   ========================================================================== */

let currentLang = 'python';
let currentQuestion = null;

document.addEventListener('DOMContentLoaded', () => {
    loadGlobalLayout('coding');
    initTheme();
    initMobileNav();
    
    // Fill category select
    populateCategories();
    
    // Set initial listeners
    document.getElementById('select-category').addEventListener('change', (e) => {
        populateQuestions(e.target.value);
    });
    
    document.getElementById('select-question').addEventListener('change', (e) => {
        loadQuestion(e.target.value);
    });

    // Add search listener
    document.getElementById('search-challenge').addEventListener('input', (e) => {
        const catVal = document.getElementById('select-category').value;
        populateQuestions(catVal, e.target.value);
    });

    // Disable Copy-Paste on Editor
    setupEditorRestrictions();
    
    // Set Python as initial language choice
    setLanguage('python');
    
    // Initialize progress tracking
    updateProgressLabel();
    
    // Hide loader
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 500);
    }
});

function isQuestionSolved(qId) {
    return localStorage.getItem(`code_solved_${qId}`) === 'true';
}

function updateProgressLabel() {
    const total = window.CODING_DATABASE.length;
    let solvedCount = 0;
    window.CODING_DATABASE.forEach(q => {
        if (isQuestionSolved(q.id)) {
            solvedCount++;
        }
    });
    const lbl = document.getElementById('solved-progress-lbl');
    if (lbl) {
        lbl.textContent = `Solved: ${solvedCount} / ${total}`;
    }
}

function updateQuestionSolvedMark(qId) {
    const qSelect = document.getElementById('select-question');
    if (qSelect) {
        const option = qSelect.querySelector(`option[value="${qId}"]`);
        if (option && !option.textContent.startsWith("✓")) {
            option.textContent = "✓ " + option.textContent;
        }
    }
}

function populateCategories() {
    const catSelect = document.getElementById('select-category');
    catSelect.innerHTML = `
        <option value="arrays">Array Operations & Two Pointers (47)</option>
        <option value="binary">Binary & Bit Manipulation (5)</option>
        <option value="dp">Dynamic Programming (12)</option>
        <option value="graph">Graph Algorithms & Traversal (8)</option>
        <option value="intervals">Intervals & Scheduling (5)</option>
        <option value="linkedlist">Linked List Operations (6)</option>
        <option value="matrices">Matrix & 2D Grids (9)</option>
        <option value="strings">String Algorithms & Patterns (29)</option>
        <option value="trees">Binary Trees, BST & Tries (14)</option>
        <option value="heaps">Heaps & Priority Queues (3)</option>
        <option value="numbers">Working with Numbers (46)</option>
        <option value="recursion">Recursion & Backtracking (19)</option>
        <option value="sorting">Sorting Algorithms (6)</option>
        <option value="numsystem">Number Systems (8)</option>
        <option value="patterns">Pattern Printing (20)</option>
    `;
    populateQuestions('arrays');
}

function populateQuestions(category, searchQuery = "") {
    const qSelect = document.getElementById('select-question');
    let filtered = [];
    
    const query = searchQuery.toLowerCase().trim();
    if (query !== "") {
        filtered = window.CODING_DATABASE.filter(q => 
            q.title.toLowerCase().includes(query) || 
            q.description.toLowerCase().includes(query)
        );
    } else {
        filtered = window.CODING_DATABASE.filter(q => q.category === category);
    }
    
    qSelect.innerHTML = filtered.map(q => {
        const prefix = isQuestionSolved(q.id) ? "✓ " : "";
        return `<option value="${q.id}">${prefix}${q.title} (${q.difficulty.toUpperCase()})</option>`;
    }).join('');
    
    if (filtered.length > 0) {
        loadQuestion(filtered[0].id);
    } else {
        qSelect.innerHTML = `<option value="">No matching challenges</option>`;
        document.getElementById('question-body').innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 2rem 0;">No matching challenges found. Try another search query.</p>`;
        document.getElementById('question-title').textContent = "Empty Workspace";
        document.getElementById('question-diff-badge').className = "diff-badge diff-beginner";
        document.getElementById('question-diff-badge').textContent = "NONE";
    }
}

function loadQuestion(qId) {
    if (!qId) return;
    currentQuestion = window.CODING_DATABASE.find(q => q.id === qId);
    
    if (!currentQuestion) return;
    
    // Render description
    document.getElementById('question-title').textContent = currentQuestion.title;
    document.getElementById('question-diff-badge').className = `diff-badge diff-${currentQuestion.difficulty}`;
    document.getElementById('question-diff-badge').textContent = currentQuestion.difficulty.toUpperCase();
    document.getElementById('question-body').innerHTML = currentQuestion.description;
    
    // Reset output panel
    document.getElementById('run-status-panel').style.display = 'none';
    document.getElementById('testcase-list').innerHTML = '';
    
    // Hide and reset hint panel
    const panel = document.getElementById('hint-panel');
    if (panel) panel.style.display = 'none';
    const btn = document.getElementById('btn-toggle-hint');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: var(--warning);"></i> <span>Concept & Hint</span>`;

    // Load boilerplate
    loadBoilerplate();
}

function toggleHint() {
    const panel = document.getElementById('hint-panel');
    const btn = document.getElementById('btn-toggle-hint');
    if (!panel || !currentQuestion) return;
    
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        document.getElementById('hint-body').textContent = currentQuestion.solution || "No conceptual guide available.";
        btn.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: var(--text-muted);"></i> <span>Hide Hint</span>`;
    } else {
        panel.style.display = 'none';
        btn.innerHTML = `<i class="fa-solid fa-lightbulb" style="color: var(--warning);"></i> <span>Concept & Hint</span>`;
    }
}

function loadBoilerplate() {
    if (!currentQuestion) return;
    const editor = document.getElementById('code-editor');
    
    // Check if user has saved code in localStorage, else load default boilerplate
    const key = `code_save_${currentQuestion.id}_${currentLang}`;
    const saved = localStorage.getItem(key);
    
    if (saved) {
        editor.value = saved;
    } else {
        editor.value = currentQuestion.boilerplates[currentLang] || '';
    }
    updateLineNumbers();
}

function saveCurrentCode() {
    if (!currentQuestion) return;
    const editor = document.getElementById('code-editor');
    const key = `code_save_${currentQuestion.id}_${currentLang}`;
    localStorage.setItem(key, editor.value);
}

function setLanguage(lang) {
    // Save current code before switching
    saveCurrentCode();
    
    currentLang = lang;
    
    // Update active tabs
    document.querySelectorAll('.lang-tab').forEach(tab => {
        if (tab.getAttribute('data-lang') === lang) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Reload boilerplate
    loadBoilerplate();
}

function updateLineNumbers() {
    const editor = document.getElementById('code-editor');
    const lines = editor.value.split('\n');
    const count = lines.length;
    let numberDiv = document.getElementById('line-numbers');
    
    let numbers = '';
    for (let i = 1; i <= count; i++) {
        numbers += i + '\n';
    }
    numberDiv.value = numbers;
}

function handleEditorScroll() {
    const editor = document.getElementById('code-editor');
    const lineNumbers = document.getElementById('line-numbers');
    lineNumbers.scrollTop = editor.scrollTop;
}

function setupEditorRestrictions() {
    const editor = document.getElementById('code-editor');
    
    // Keep line numbers synced
    editor.addEventListener('input', () => {
        updateLineNumbers();
        saveCurrentCode();
    });
    editor.addEventListener('scroll', handleEditorScroll);
    
    // Anti copy-paste listeners
    const blockEvent = (e) => {
        e.preventDefault();
        showToast("⚠️ Copy-paste is disabled for Coding practice! Type your solution.", "warning");
        return false;
    };
    
    editor.addEventListener('paste', blockEvent);
    editor.addEventListener('copy', blockEvent);
    editor.addEventListener('cut', blockEvent);
}

function executeCode() {
    if (!currentQuestion) return;
    
    const code = document.getElementById('code-editor').value;
    const statusPanel = document.getElementById('run-status-panel');
    const testcaseList = document.getElementById('testcase-list');
    
    statusPanel.style.display = 'block';
    testcaseList.innerHTML = `<p style="color:var(--text-secondary); text-align:center;">Evaluating tests...</p>`;
    
    let allPassed = true;
    let resultsHTML = '';
    
    // Run against each test case
    currentQuestion.testCases.forEach((tc, idx) => {
        const result = CodingRunner.run(code, currentLang, tc.input);
        
        let passed = false;
        let finalOut = "";
        
        if (result.success) {
            finalOut = result.output.trim();
            // Standardize comparison by trimming and stripping carriages
            const expected = tc.output.trim().replace(/\r/g, "");
            const actual = finalOut.replace(/\r/g, "");
            
            passed = (actual === expected);
        } else {
            finalOut = `COMPILATION/RUNTIME ERROR: ${result.error}`;
        }
        
        if (!passed) allPassed = false;
        
        resultsHTML += `
            <div class="testcase-item ${passed ? 'passed' : 'failed'}">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
                    <div style="font-weight:700;">Test Case ${idx + 1}</div>
                    <div class="testcase-badge ${passed ? 'badge-pass' : 'badge-fail'}">
                        <i class="fa-solid ${passed ? 'fa-check' : 'fa-times'}"></i> ${passed ? 'Passed' : 'Failed'}
                    </div>
                </div>
                <div style="font-size:0.85rem; font-family:monospace; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:0.5rem; border-radius:4px;">
                    <div><strong>Input:</strong> ${tc.input.join(" ")}</div>
                    <div><strong>Expected:</strong> ${tc.output.replace(/\n/g, " \\n ")}</div>
                    <div style="color: ${passed ? 'var(--success)' : 'var(--danger)'}"><strong>Your Output:</strong> ${finalOut.replace(/\n/g, " \\n ")}</div>
                </div>
            </div>
        `;
    });
    
    testcaseList.innerHTML = resultsHTML;
    
    const statusTitle = document.getElementById('run-status-title');
    const statusDesc = document.getElementById('run-status-desc');
    
    if (allPassed) {
        statusTitle.textContent = "All Test Cases Passed!";
        statusTitle.style.color = "var(--success)";
        statusDesc.textContent = "Excellent work! Your solution is fully correct and optimized.";
        showToast("🎉 Great Job! All tests passed successfully.", "success");
        
        // Save progress
        localStorage.setItem(`code_solved_${currentQuestion.id}`, 'true');
        updateProgressLabel();
        updateQuestionSolvedMark(currentQuestion.id);
    } else {
        statusTitle.textContent = "Some Test Cases Failed";
        statusTitle.style.color = "var(--danger)";
        statusDesc.textContent = "Review your logic and double-check outputs against inputs.";
        showToast("⚠️ Some test cases failed. Debug your logic.", "warning");
    }
}

function resetCode() {
    if (!currentQuestion) return;
    
    if (confirm("Are you sure you want to reset the editor to starter code?")) {
        const key = `code_save_${currentQuestion.id}_${currentLang}`;
        localStorage.removeItem(key);
        loadBoilerplate();
        showToast("Editor reset successfully.", "info");
    }
}

function toggleCodingAntiCheat() {
    const btn = document.getElementById('btn-anti-cheat-toggle');
    if (!window.CheatingProtection) return;

    if (window.CheatingProtection.isActive()) {
        window.CheatingProtection.disable();
        if (btn) {
            btn.innerHTML = `<i class="fa-solid fa-shield-halved" style="color:var(--text-muted);"></i> Proctored Mode`;
            btn.style.borderColor = 'rgba(255,255,255,0.15)';
            btn.style.color = '';
        }
        showToast("Proctored exam mode disabled.", "info");
    } else {
        window.CheatingProtection.showSecurityConsent(() => {
            window.CheatingProtection.enable({
                maxViolations: 3,
                enableFullscreen: true,
                onViolationLimitReached: () => {
                    if (btn) {
                        btn.innerHTML = `<i class="fa-solid fa-shield-halved" style="color:var(--text-muted);"></i> Proctored Mode`;
                        btn.style.borderColor = 'rgba(255,255,255,0.15)';
                        btn.style.color = '';
                    }
                    showToast("Proctored session auto-ended due to maximum security violations.", "danger");
                }
            });
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-shield-halved" style="color:#10b981;"></i> Proctored (Active)`;
                btn.style.borderColor = '#10b981';
                btn.style.color = '#10b981';
            }
        });
    }
}

window.toggleCodingAntiCheat = toggleCodingAntiCheat;
