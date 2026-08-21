/* ==========================================================================
   STORAGE.JS - Centralized LocalStorage State Controller (VetriPathLearn 2.0)
   Tracks progress, streaks, weak topics, achievements, bookmarks, & stats offline
   ========================================================================== */

const PlacementPrepState = {
    // Default State with extended progress metrics
    defaultState: {
        theme: 'dark',
        bookmarks: [], // Array of question data objects
        wrongAnswers: [], // Array of question IDs
        history: [], // Array of solved logs: { questionId, topic, subject, correct, timeSpent, timestamp }
        streak: { count: 1, lastActiveDate: new Date().toDateString() },
        lastPracticed: null, // { subject, topic, title, timestamp, accuracy }
        achievements: ['first_step'], // Unlocked achievement IDs
        customNotes: {} // Per-question or per-topic scratchpad notes
    },

    memoryState: null,

    // Load state from LocalStorage
    getState() {
        if (this.memoryState) return this.memoryState;
        try {
            const rawState = localStorage.getItem('placement_prep_state');
            if (!rawState) {
                const initial = { ...this.defaultState, streak: { count: 1, lastActiveDate: new Date().toDateString() } };
                this.saveState(initial);
                return initial;
            }
            const parsed = JSON.parse(rawState);
            const merged = { ...this.defaultState, ...parsed };
            // Ensure array fields exist
            merged.bookmarks = Array.isArray(merged.bookmarks) ? merged.bookmarks : [];
            merged.wrongAnswers = Array.isArray(merged.wrongAnswers) ? merged.wrongAnswers : [];
            merged.history = Array.isArray(merged.history) ? merged.history : [];
            merged.achievements = Array.isArray(merged.achievements) ? merged.achievements : ['first_step'];
            merged.streak = merged.streak && typeof merged.streak.count === 'number' ? merged.streak : { count: 1, lastActiveDate: new Date().toDateString() };
            return merged;
        } catch (e) {
            console.warn("Storage access failed or blocked. Using in-memory fallback.", e);
            if (!this.memoryState) {
                this.memoryState = { ...this.defaultState };
            }
            return this.memoryState;
        }
    },

    // Save state to LocalStorage
    saveState(state) {
        try {
            localStorage.setItem('placement_prep_state', JSON.stringify(state));
        } catch (e) {
            console.warn("Saving to localStorage failed or blocked.", e);
            this.memoryState = state;
        }
    },

    // Update state fields safely
    updateState(updates) {
        const currentState = this.getState();
        const updated = { ...currentState, ...updates };
        this.saveState(updated);
        
        try {
            window.dispatchEvent(new CustomEvent('stateUpdated', { detail: updated }));
        } catch (e) {
            console.warn("dispatchEvent failed.", e);
        }
        return updated;
    },

    // --- Bookmarks Controller ---
    addBookmark(question) {
        if (!question || !question.id) return;
        const state = this.getState();
        const alreadyBookmarked = state.bookmarks.some(b => b.id === question.id);
        if (!alreadyBookmarked) {
            const updatedBookmarks = [...state.bookmarks, question];
            this.updateState({ bookmarks: updatedBookmarks });
            this.dispatchToast("🔖 Question Bookmarked for Revision!", "success");
            this.checkAchievements();
        }
    },

    removeBookmark(questionId) {
        const state = this.getState();
        const updatedBookmarks = state.bookmarks.filter(b => b.id !== questionId);
        this.updateState({ bookmarks: updatedBookmarks });
        this.dispatchToast("🔖 Bookmark Removed", "info");
    },

    isBookmarked(questionId) {
        return this.getState().bookmarks.some(b => b.id === questionId);
    },

    // --- Wrong Answers / Retry Hub ---
    logWrongAnswer(questionId) {
        const state = this.getState();
        if (!state.wrongAnswers.includes(questionId)) {
            const updated = [...state.wrongAnswers, questionId];
            this.updateState({ wrongAnswers: updated });
        }
    },

    removeWrongAnswer(questionId) {
        const state = this.getState();
        const updated = state.wrongAnswers.filter(id => id !== questionId);
        this.updateState({ wrongAnswers: updated });
    },

    // --- Solved Practice History & Stats Engine ---
    logSolvedQuestion(questionId, topic, subject, correct, timeSpent = 0) {
        const state = this.getState();
        const now = Date.now();
        const log = {
            questionId,
            topic: topic || 'general',
            subject: subject || 'aptitude',
            correct: Boolean(correct),
            timeSpent: Number(timeSpent) || 0,
            timestamp: now
        };
        const updatedHistory = [...state.history, log];
        
        // Remove from wrong answers if now correct, otherwise record it
        let updatedWrong = [...state.wrongAnswers];
        if (correct) {
            updatedWrong = updatedWrong.filter(id => id !== questionId);
        } else {
            if (!updatedWrong.includes(questionId)) {
                updatedWrong.push(questionId);
            }
        }

        // Calculate and update daily streak
        const updatedStreak = this.calculateStreak(state.streak);

        // Update last practiced topic info
        const topicTitle = (typeof MockDataGen !== 'undefined' && MockDataGen.getTopicMetadata) 
            ? MockDataGen.getTopicMetadata(subject, topic).title 
            : (topic ? topic.replace('_', ' ').toUpperCase() : 'General Practice');

        const updatedLastPracticed = {
            subject: subject || 'aptitude',
            topic: topic || 'numbers',
            title: topicTitle,
            timestamp: now
        };

        const updatedState = {
            history: updatedHistory,
            wrongAnswers: updatedWrong,
            streak: updatedStreak,
            lastPracticed: updatedLastPracticed
        };

        this.updateState(updatedState);
        this.checkAchievements();
    },

    // --- Daily Streak Calculator ---
    calculateStreak(currentStreak) {
        const today = new Date();
        const todayStr = today.toDateString();
        
        if (!currentStreak || !currentStreak.lastActiveDate) {
            return { count: 1, lastActiveDate: todayStr };
        }

        if (currentStreak.lastActiveDate === todayStr) {
            return currentStreak; // Already updated today
        }

        const lastDate = new Date(currentStreak.lastActiveDate);
        const diffTime = Math.abs(today - lastDate);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            // Consecutive day active!
            const newCount = (currentStreak.count || 0) + 1;
            return { count: newCount, lastActiveDate: todayStr };
        } else if (diffDays > 1) {
            // Streak broken, reset to 1
            return { count: 1, lastActiveDate: todayStr };
        }

        return currentStreak;
    },

    // --- Dynamic Stats Aggregator ---
    getStatistics() {
        const state = this.getState();
        const history = state.history || [];
        const totalAttempted = history.length;
        const totalCorrect = history.filter(h => h.correct).length;
        const totalWrong = totalAttempted - totalCorrect;
        const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
        const totalTimeSeconds = history.reduce((sum, h) => sum + (h.timeSpent || 0), 0);

        // Subject-specific breakdowns
        const subjectStats = {
            aptitude: { attempted: 0, correct: 0 },
            reasoning: { attempted: 0, correct: 0 },
            verbal: { attempted: 0, correct: 0 },
            coding: { attempted: 0, correct: 0 }
        };

        history.forEach(h => {
            const subj = (h.subject || 'aptitude').toLowerCase();
            if (subjectStats[subj]) {
                subjectStats[subj].attempted += 1;
                if (h.correct) subjectStats[subj].correct += 1;
            }
        });

        // Add coding solved count from localStorage keys
        let codingSolved = 0;
        try {
            if (window.CODING_DATABASE) {
                window.CODING_DATABASE.forEach(q => {
                    if (localStorage.getItem(`code_solved_${q.id}`) === 'true') {
                        codingSolved++;
                    }
                });
            }
        } catch (e) {}
        if (codingSolved > 0) {
            subjectStats.coding.attempted = Math.max(subjectStats.coding.attempted, codingSolved);
            subjectStats.coding.correct = Math.max(subjectStats.coding.correct, codingSolved);
        }

        return {
            totalAttempted,
            totalCorrect,
            totalWrong,
            overallAccuracy,
            totalTimeSeconds,
            streak: state.streak ? state.streak.count : 1,
            subjectStats,
            bookmarksCount: (state.bookmarks || []).length,
            wrongCount: (state.wrongAnswers || []).length,
            lastPracticed: state.lastPracticed
        };
    },

    // --- Dynamic Weak Topics Identification ---
    getWeakTopics(limit = 4) {
        const state = this.getState();
        const history = state.history || [];
        const topicMap = {};

        history.forEach(h => {
            const key = `${h.subject || 'aptitude'}:${h.topic || 'general'}`;
            if (!topicMap[key]) {
                topicMap[key] = { subject: h.subject, topic: h.topic, attempted: 0, correct: 0 };
            }
            topicMap[key].attempted += 1;
            if (h.correct) topicMap[key].correct += 1;
        });

        const analyzed = Object.values(topicMap).map(item => {
            const acc = item.attempted > 0 ? Math.round((item.correct / item.attempted) * 100) : 0;
            const meta = (typeof MockDataGen !== 'undefined' && MockDataGen.getTopicMetadata) 
                ? MockDataGen.getTopicMetadata(item.subject, item.topic) 
                : { title: item.topic.replace('_', ' ').toUpperCase() };
            return {
                ...item,
                accuracy: acc,
                title: meta.title || item.topic
            };
        });

        // Sort by accuracy ascending (lowest accuracy first), filtering topics with at least 1 attempt
        const weakList = analyzed
            .filter(t => t.attempted >= 2 && t.accuracy < 75)
            .sort((a, b) => a.accuracy - b.accuracy)
            .slice(0, limit);

        // If user is brand new or has no weak topics yet, provide smart starter recommendations
        if (weakList.length === 0) {
            return [
                { subject: 'aptitude', topic: 'percentage', title: 'Percentages & Applications', accuracy: 0, attempted: 0, isStarter: true },
                { subject: 'aptitude', topic: 'time_work', title: 'Time & Work Efficiency', accuracy: 0, attempted: 0, isStarter: true },
                { subject: 'reasoning', topic: 'coding_decoding', title: 'Coding & Decoding', accuracy: 0, attempted: 0, isStarter: true },
                { subject: 'verbal', topic: 'error_spotting', title: 'Error Spotting & Grammar', accuracy: 0, attempted: 0, isStarter: true }
            ];
        }

        return weakList;
    },

    // --- Achievements & Gamification Engine ---
    checkAchievements() {
        const state = this.getState();
        const history = state.history || [];
        const unlocked = new Set(state.achievements || []);
        const newlyUnlocked = [];

        const stats = this.getStatistics();

        const achievementRules = [
            { id: 'first_step', title: 'First Milestone', desc: 'Started your placement preparation journey', icon: 'fa-flag-checkered', cond: () => true },
            { id: 'first_question', title: 'First Solve', desc: 'Answered your first practice problem', icon: 'fa-lightbulb', cond: () => history.length >= 1 },
            { id: 'ten_solved', title: 'Problem Solver', desc: 'Solved 10 practice questions', icon: 'fa-dumbbell', cond: () => history.length >= 10 },
            { id: 'fifty_solved', title: 'Placement Warrior', desc: 'Solved 50 practice questions', icon: 'fa-award', cond: () => history.length >= 50 },
            { id: 'hundred_solved', title: 'Grandmaster', desc: 'Solved 100+ questions across topics', icon: 'fa-crown', cond: () => history.length >= 100 },
            { id: 'accuracy_ace', title: 'Accuracy Ace', desc: 'Maintained 85%+ accuracy over 20+ questions', icon: 'fa-bullseye', cond: () => stats.totalAttempted >= 20 && stats.overallAccuracy >= 85 },
            { id: 'streak_flame', title: 'Consistency Flame', desc: 'Achieved a 3-day active preparation streak', icon: 'fa-fire', cond: () => (state.streak && state.streak.count >= 3) },
            { id: 'bookmark_pro', title: 'Curator', desc: 'Saved 5+ questions to revision bookmarks', icon: 'fa-bookmark', cond: () => (state.bookmarks && state.bookmarks.length >= 5) }
        ];

        achievementRules.forEach(ach => {
            if (!unlocked.has(ach.id) && ach.cond()) {
                unlocked.add(ach.id);
                newlyUnlocked.push(ach);
            }
        });

        if (newlyUnlocked.length > 0) {
            this.updateState({ achievements: Array.from(unlocked) });
            newlyUnlocked.forEach(ach => {
                this.dispatchToast(`🏆 Achievement Unlocked: ${ach.title}!`, 'success');
            });
        }

        return achievementRules.map(ach => ({
            ...ach,
            unlocked: unlocked.has(ach.id)
        }));
    },

    // --- Scratchpad & Notes Controller ---
    saveNote(key, noteText) {
        const state = this.getState();
        const customNotes = { ...(state.customNotes || {}) };
        customNotes[key] = noteText;
        this.updateState({ customNotes });
    },

    getNote(key) {
        const state = this.getState();
        return (state.customNotes && state.customNotes[key]) ? state.customNotes[key] : '';
    },

    // --- Export Progress (JSON) ---
    exportProgress() {
        const state = this.getState();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `vetripathlearn_progress_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        this.dispatchToast("📥 Progress successfully exported to JSON!", "success");
    },

    // --- Import Progress (JSON) ---
    importProgress(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (!parsed || typeof parsed !== 'object') {
                throw new Error("Invalid progress JSON file format.");
            }
            // Ensure essential arrays exist
            const validated = {
                ...this.defaultState,
                ...parsed,
                bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
                history: Array.isArray(parsed.history) ? parsed.history : [],
                wrongAnswers: Array.isArray(parsed.wrongAnswers) ? parsed.wrongAnswers : [],
                achievements: Array.isArray(parsed.achievements) ? parsed.achievements : ['first_step']
            };
            this.saveState(validated);
            this.memoryState = validated;
            window.dispatchEvent(new CustomEvent('stateUpdated', { detail: validated }));
            this.dispatchToast("✅ Progress successfully imported and restored!", "success");
            return true;
        } catch (e) {
            console.error("Progress import failed:", e);
            this.dispatchToast("❌ Failed to import progress. Invalid file structure.", "danger");
            return false;
        }
    },

    // --- Reset Progress with Safety ---
    resetProgress(keepThemeAndBookmarks = true) {
        const state = this.getState();
        const resetState = {
            ...this.defaultState,
            theme: state.theme || 'dark',
            bookmarks: keepThemeAndBookmarks ? (state.bookmarks || []) : [],
            streak: { count: 1, lastActiveDate: new Date().toDateString() },
            achievements: ['first_step']
        };
        this.saveState(resetState);
        this.memoryState = resetState;
        window.dispatchEvent(new CustomEvent('stateUpdated', { detail: resetState }));
        this.dispatchToast("🔄 Learning progress has been reset.", "info");
    },

    // --- Toast Dispatch Utility ---
    dispatchToast(message, type = 'info') {
        const event = new CustomEvent('showToast', { detail: { message, type } });
        window.dispatchEvent(event);
    }
};

window.PlacementPrepState = PlacementPrepState;
