/* ==========================================================================
   TEACH.JS - AI Teach Mode Controller & Multilingual Explanation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    window.teachApp = new TeachModeController();
    window.teachApp.init();
});

class TeachModeController {
    constructor() {
        this.selectedLanguage = 'ta'; // 'ta', 'en', 'hi'
        this.selectedSubject = 'aptitude';
        this.selectedTopic = 'percentage';
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.whiteboard = null;
        this.voiceTeacher = null;
    }

    init() {
        this.whiteboard = new DigitalWhiteboard('whiteboard-canvas');
        this.voiceTeacher = new AIVoiceTeacher();

        this.bindEvents();
        this.parseUrlParams();
        this.loadTopics();
    }

    bindEvents() {
        // Language Buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedLanguage = btn.dataset.lang;
                this.voiceTeacher.setLanguage(this.selectedLanguage);
                this.renderCurrentQuestionTeaching();
            });
        });

        // Subject Tabs
        document.querySelectorAll('.subject-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.selectedSubject = tab.dataset.subject;
                this.loadTopics();
            });
        });

        // Question Navigation
        const prevBtn = document.getElementById('teach-prev-btn');
        const nextBtn = document.getElementById('teach-next-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.renderCurrentQuestionTeaching();
                }
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                    this.currentQuestionIndex++;
                    this.renderCurrentQuestionTeaching();
                }
            });
        }

        // Voice Controls
        const playBtn = document.getElementById('voice-play-btn');
        const pauseBtn = document.getElementById('voice-pause-btn');
        const stopBtn = document.getElementById('voice-stop-btn');
        const rateSelect = document.getElementById('voice-rate-select');

        if (playBtn) {
            playBtn.addEventListener('click', () => {
                const text = this.getVoiceScript();
                this.voiceTeacher.speak(text);
                this.whiteboard.playAllSteps();
            });
        }
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => this.voiceTeacher.pause());
        }
        if (stopBtn) {
            stopBtn.addEventListener('click', () => this.voiceTeacher.stop());
        }
        if (rateSelect) {
            rateSelect.addEventListener('change', (e) => this.voiceTeacher.setRate(e.target.value));
        }

        // Whiteboard Tool Controls
        document.querySelectorAll('.wb-tool-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.wb-tool-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.whiteboard.setTool(btn.dataset.tool);
            });
        });

        const wbClear = document.getElementById('wb-clear-btn');
        const wbUndo = document.getElementById('wb-undo-btn');
        const wbRedo = document.getElementById('wb-redo-btn');
        if (wbClear) wbClear.addEventListener('click', () => this.whiteboard.clearBoard());
        if (wbUndo) wbUndo.addEventListener('click', () => this.whiteboard.undo());
        if (wbRedo) wbRedo.addEventListener('click', () => this.whiteboard.redo());
    }

    parseUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        const subject = params.get('subject');
        const topic = params.get('topic');

        if (lang) this.selectedLanguage = lang;
        if (subject) this.selectedSubject = subject;
        if (topic) this.selectedTopic = topic;

        // Sync UI state
        const langBtn = document.querySelector(`.lang-btn[data-lang="${this.selectedLanguage}"]`);
        if (langBtn) {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            langBtn.classList.add('active');
        }
        const subjTab = document.querySelector(`.subject-tab[data-subject="${this.selectedSubject}"]`);
        if (subjTab) {
            document.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
            subjTab.classList.add('active');
        }
    }

    loadTopics() {
        const topicGrid = document.getElementById('teach-topic-grid');
        if (!topicGrid) return;

        const topicList = {
            aptitude: ['numbers', 'percentage', 'profit_loss', 'ratio_proportion', 'average', 'time_work', 'time_distance', 'speed_distance', 'probability', 'permutation_combination', 'data_interpretation', 'simplification', 'algebra', 'geometry'],
            reasoning: ['puzzles', 'seating_arrangement', 'blood_relations', 'coding_decoding', 'syllogism', 'direction_sense', 'statement_conclusion', 'series', 'analogy'],
            verbal: ['grammar', 'vocabulary', 'reading_comprehension', 'sentence_correction', 'error_spotting', 'fill_blanks', 'para_jumbles']
        };

        const activeTopics = topicList[this.selectedSubject] || [];
        topicGrid.innerHTML = activeTopics.map(tKey => {
            const meta = MockDataGen.getTopicMetadata(this.selectedSubject, tKey);
            const isSelected = tKey === this.selectedTopic;
            return `
                <div class="glass-card topic-card ${isSelected ? 'active-topic' : ''}" onclick="window.teachApp.selectTopic('${tKey}')" style="cursor: pointer; padding: 1rem; border-radius: 12px; transition: transform 0.2s;">
                    <div style="font-weight: 700; font-size: 1rem; color: var(--primary); margin-bottom: 0.3rem;"><i class="fa-solid fa-graduation-cap"></i> ${meta.title}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.3;">${meta.desc}</div>
                </div>
            `;
        }).join('');

        this.loadQuestionsForTopic();
    }

    selectTopic(topicKey) {
        this.selectedTopic = topicKey;
        this.currentQuestionIndex = 0;
        this.loadTopics();
    }

    loadQuestionsForTopic() {
        this.currentQuestions = MockDataGen.getQuestions(this.selectedSubject, this.selectedTopic, 50);
        this.renderCurrentQuestionTeaching();
    }

    renderCurrentQuestionTeaching() {
        if (!this.currentQuestions || this.currentQuestions.length === 0) return;
        const q = this.currentQuestions[this.currentQuestionIndex];

        // Question Info
        document.getElementById('teach-q-index').textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuestions.length}`;
        document.getElementById('teach-q-diff').textContent = (q.difficulty || 'Medium').toUpperCase();
        document.getElementById('teach-q-text').textContent = q.text;

        // Generate Multilingual Steps
        const stepsData = this.generateMultilingualSteps(q, this.selectedLanguage);

        // Render AI Teacher Explanation Sections
        const explanationContainer = document.getElementById('teach-explanation-content');
        if (explanationContainer) {
            explanationContainer.innerHTML = `
                <div class="teach-step-card">
                    <div class="teach-step-title">🎯 Step 1: Understand Question</div>
                    <div class="teach-step-body">${stepsData.step1}</div>
                </div>
                <div class="teach-step-card">
                    <div class="teach-step-title">💡 Step 2: Concept & Formula</div>
                    <div class="teach-step-body">${stepsData.step2}</div>
                    <div class="teach-formula-box">${q.formula || 'Core Mathematical Relation'}</div>
                </div>
                <div class="teach-step-card">
                    <div class="teach-step-title">📝 Step 3: Normal Method Solution</div>
                    <div class="teach-step-body">${stepsData.step3}</div>
                </div>
                <div class="teach-step-card highlight">
                    <div class="teach-step-title">⚡ Step 4: Easy Method & Shortcut</div>
                    <div class="teach-step-body">${stepsData.step4}</div>
                </div>
                <div class="teach-step-card warning">
                    <div class="teach-step-title">⚠️ Common Mistake & Speed Trick</div>
                    <div class="teach-step-body">${stepsData.step5}</div>
                </div>
            `;
        }

        // Render Whiteboard Steps
        const wbSteps = [
            { badge: 'Step 1', text: `Concept: ${this.selectedTopic.toUpperCase()}`, color: '#7F5AF0' },
            { badge: 'Step 2', text: `Formula: ${q.formula || 'Standard Solution Path'}`, color: '#2CB67D' },
            { badge: 'Step 3', text: `Solution: Answer = ${q.answer}`, highlight: true, color: '#FFD166' }
        ];

        // Include diagram for reasoning questions
        if (this.selectedSubject === 'reasoning') {
            if (this.selectedTopic === 'blood_relations') {
                wbSteps.push({ badge: 'Diagram', text: 'Family Tree Diagram', diagram: { type: 'blood_relation', gen1: 'Grandfather', gen2: 'Father' } });
            } else if (this.selectedTopic === 'direction_sense') {
                wbSteps.push({ badge: 'Diagram', text: 'Direction Compass Path', diagram: { type: 'direction' } });
            } else if (this.selectedTopic === 'syllogism') {
                wbSteps.push({ badge: 'Diagram', text: 'Venn Diagram Representation', diagram: { type: 'venn' } });
            }
        }

        this.whiteboard.setSteps(wbSteps);
        this.whiteboard.playAllSteps();

        // Save progress to state controller
        PlacementPrepState.logSolvedQuestion(q.id, this.selectedTopic, this.selectedSubject, true, 30);
    }

    generateMultilingualSteps(q, lang) {
        if (lang === 'ta') {
            return {
                step1: `Intha kelvi ${q.topic} patriyadhu. Kelvi-la keturukuradhu: "${q.text.substring(0, 70)}..."`,
                step2: `Idhukana main concept: ${q.formula || 'Base formula concept'}. Percentage & ratios-na 100 base-ah eduthukonga.`,
                step3: `Normal method-la step-by-step calculate panna: ${q.solution || 'Formula-la values substitute panni evaluate pannunga.'}`,
                step4: `⚡ Short-cut trick: ${q.shortcut || 'Direct multiplication or ratio reduction method use panna 5 seconds-la answer varum.'}`,
                step5: `⚠️ Common mistake: ${q.commonMistakes || 'Calculation-la base value marandhidaadhinga. Direct answer option: ' + q.answer}`
            };
        } else if (lang === 'hi') {
            return {
                step1: `यह प्रश्न ${q.topic} से संबंधित है। प्रश्न का मुख्य भाग: "${q.text.substring(0, 70)}..."`,
                step2: `मुख्य अवधारणा: ${q.formula || 'मूल सूत्र'}. हमेशा 100 को आधार मानकर आसानी से हल करें।`,
                step3: `सामान्य विधि: ${q.solution || 'चरण-दर-चरण मान रखकर उत्तर निकालें।'}`,
                step4: `⚡ आसान ट्रिक: ${q.shortcut || 'अनुपात विधि से उत्तर सीधे 5 सेकंड में प्राप्त करें।'}`,
                step5: `⚠️ सामान्य गलती: ${q.commonMistakes || 'गणना में आधार मान गलत न लें। उत्तर: ' + q.answer}`
            };
        } else {
            return {
                step1: `This question evaluates your core understanding of ${q.topic}. Problem: "${q.text.substring(0, 70)}..."`,
                step2: `Primary Concept: ${q.formula || 'Standard equation'}. Identify known variables and solve sequentially.`,
                step3: `Detailed Solution: ${q.solution || 'Substitute given values into the standard relation.'}`,
                step4: `⚡ Exam Shortcut: ${q.shortcut || 'Use unit digit or ratio scaling for instant verification.'}`,
                step5: `⚠️ Speed Trick & Common Mistake: ${q.commonMistakes || 'Watch out for percentage base shifts. Correct Answer = ' + q.answer}`
            };
        }
    }

    getVoiceScript() {
        const q = this.currentQuestions[this.currentQuestionIndex];
        const steps = this.generateMultilingualSteps(q, this.selectedLanguage);
        return `${steps.step1}. ${steps.step2}. ${steps.step4}. Answer is ${q.answer}`;
    }
}
