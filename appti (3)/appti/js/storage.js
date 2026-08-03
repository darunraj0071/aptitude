/* ==========================================================================
   STORAGE.JS - Centralized LocalStorage State Controller (Simplified)
   ========================================================================== */

const PlacementPrepState = {
    // Default Empty State (No XP/Streak/Badges)
    defaultState: {
        theme: 'dark',
        bookmarks: [], // Array of question data objects
        wrongAnswers: [], // Array of question IDs
        history: [] // Array of solved logs: { questionId, topic, subject, correct, timeSpent, timestamp }
    },


    memoryState: null,

    // Load state from LocalStorage
    getState() {
        if (this.memoryState) return this.memoryState;
        try {
            const rawState = localStorage.getItem('placement_prep_state');
            if (!rawState) {
                this.saveState(this.defaultState);
                return this.defaultState;
            }
            const parsed = JSON.parse(rawState);
            return { ...this.defaultState, ...parsed };
        } catch (e) {
            console.warn("Storage access failed or blocked. Using in-memory state fallback.", e);
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
        const state = this.getState();
        const alreadyBookmarked = state.bookmarks.some(b => b.id === question.id);
        if (!alreadyBookmarked) {
            const updatedBookmarks = [...state.bookmarks, question];
            this.updateState({ bookmarks: updatedBookmarks });
            this.dispatchToast("\uD83D\uDD16 Question Bookmarked!", "info");
        }
    },

    removeBookmark(questionId) {
        const state = this.getState();
        const updatedBookmarks = state.bookmarks.filter(b => b.id !== questionId);
        this.updateState({ bookmarks: updatedBookmarks });
        this.dispatchToast("\uD83D\uDD16 Bookmark Removed", "info");
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

    // --- Solved Practice History & Stats ---
    logSolvedQuestion(questionId, topic, subject, correct, timeSpent) {
        const state = this.getState();
        const log = {
            questionId,
            topic,
            subject,
            correct,
            timeSpent,
            timestamp: Date.now()
        };
        const updatedHistory = [...state.history, log];
        
        // Remove from wrong answers list if answered correctly now
        let updatedWrong = [...state.wrongAnswers];
        if (correct) {
            updatedWrong = updatedWrong.filter(id => id !== questionId);
        } else {
            if (!updatedWrong.includes(questionId)) {
                updatedWrong.push(questionId);
            }
        }
        
        this.updateState({
            history: updatedHistory,
            wrongAnswers: updatedWrong
        });
    },

    // --- Toast Dispatch Utility ---
    dispatchToast(message, type = 'info') {
        const event = new CustomEvent('showToast', { detail: { message, type } });
        window.dispatchEvent(event);
    }
};
window.PlacementPrepState = PlacementPrepState;
