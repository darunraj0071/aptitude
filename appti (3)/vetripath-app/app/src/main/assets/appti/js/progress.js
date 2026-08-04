/* ==========================================================================
   PROGRESS.JS - Comprehensive Progress Tracking & Recommendation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    window.progressApp = new ProgressTracker();
    window.progressApp.init();
});

class ProgressTracker {
    constructor() {
        this.state = null;
    }

    init() {
        this.state = PlacementPrepState.getState();
        this.renderStatsOverview();
        this.renderSubjectProgress();
        this.renderPersonalizedRecommendations();
    }

    renderStatsOverview() {
        const history = this.state.history || [];
        const totalAttempted = history.length;
        const correctCount = history.filter(h => h.correct).length;
        const wrongCount = totalAttempted - correctCount;
        const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
        const streak = this.state.streak || 3;
        const bookmarks = (this.state.bookmarks || []).length;

        document.getElementById('stat-total-qs').textContent = totalAttempted;
        document.getElementById('stat-correct-qs').textContent = correctCount;
        document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
        document.getElementById('stat-streak').textContent = `${streak} Days`;
        document.getElementById('stat-bookmarks').textContent = bookmarks;
    }

    renderSubjectProgress() {
        const history = this.state.history || [];

        const calculateSubjectProgress = (subject) => {
            const subjLogs = history.filter(h => h.subject === subject);
            const teachLogs = subjLogs.filter(h => h.timeSpent && h.timeSpent > 0);
            const practiceLogs = subjLogs.filter(h => h.correct !== undefined);

            const teachPct = Math.min(100, Math.round((teachLogs.length / 50) * 100));
            const practicePct = Math.min(100, Math.round((practiceLogs.length / 100) * 100));

            return { teachPct, practicePct };
        };

        const apt = calculateSubjectProgress('aptitude');
        const verb = calculateSubjectProgress('verbal');
        const reas = calculateSubjectProgress('reasoning');

        // Aptitude
        document.getElementById('apt-teach-bar').style.width = `${apt.teachPct}%`;
        document.getElementById('apt-teach-val').textContent = `${apt.teachPct}%`;
        document.getElementById('apt-practice-bar').style.width = `${apt.practicePct}%`;
        document.getElementById('apt-practice-val').textContent = `${apt.practicePct}%`;

        // Verbal
        document.getElementById('verb-teach-bar').style.width = `${verb.teachPct}%`;
        document.getElementById('verb-teach-val').textContent = `${verb.teachPct}%`;
        document.getElementById('verb-practice-bar').style.width = `${verb.practicePct}%`;
        document.getElementById('verb-practice-val').textContent = `${verb.practicePct}%`;

        // Reasoning
        document.getElementById('reas-teach-bar').style.width = `${reas.teachPct}%`;
        document.getElementById('reas-teach-val').textContent = `${reas.teachPct}%`;
        document.getElementById('reas-practice-bar').style.width = `${reas.practicePct}%`;
        document.getElementById('reas-practice-val').textContent = `${reas.practicePct}%`;

        // Coding
        const codingLogs = history.filter(h => h.subject === 'coding');
        const codingPct = Math.min(100, Math.round((codingLogs.length / 50) * 100));
        document.getElementById('coding-practice-bar').style.width = `${codingPct}%`;
        document.getElementById('coding-practice-val').textContent = `${codingPct}%`;
    }

    renderPersonalizedRecommendations() {
        const recContainer = document.getElementById('recommendation-cards-container');
        if (!recContainer) return;

        const history = this.state.history || [];
        const wrongAnswers = this.state.wrongAnswers || [];

        // Identify weak topics
        const topicStats = {};
        history.forEach(h => {
            if (!topicStats[h.topic]) {
                topicStats[h.topic] = { total: 0, correct: 0, subject: h.subject };
            }
            topicStats[h.topic].total++;
            if (h.correct) topicStats[h.topic].correct++;
        });

        let weakTopic = 'percentage';
        let weakSubject = 'aptitude';
        let lowestAcc = 100;

        Object.keys(topicStats).forEach(t => {
            const acc = (topicStats[t].correct / topicStats[t].total) * 100;
            if (acc < lowestAcc) {
                lowestAcc = acc;
                weakTopic = t;
                weakSubject = topicStats[t].subject;
            }
        });

        const meta = MockDataGen.getTopicMetadata(weakSubject, weakTopic);

        recContainer.innerHTML = `
            <div class="glass-card" style="padding: 1.5rem; border-left: 4px solid var(--warning); background: rgba(255, 209, 102, 0.05);">
                <div style="font-weight: 800; font-size: 1.2rem; color: var(--warning); margin-bottom: 0.5rem;">
                    🔥 Weak Topic Detected: ${meta.title}
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.5;">
                    Your recent accuracy in <strong>${meta.title}</strong> is lower than target (${Math.round(lowestAcc)}%). We recommend completing this targeted learning loop:
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="teach.html?subject=${weakSubject}&topic=${weakTopic}" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">
                        🎓 1. Learn ${meta.title}
                    </a>
                    <a href="practice.html?subject=${weakSubject}&topic=${weakTopic}" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">
                        📝 2. Practice 10 Qs
                    </a>
                    <a href="mocktest.html?subject=${weakSubject}" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;">
                        🧪 3. Take Mini Test
                    </a>
                </div>
            </div>
        `;
    }
}
