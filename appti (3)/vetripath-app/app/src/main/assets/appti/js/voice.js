/* ==========================================================================
   VOICE.JS - AI Voice Teacher Engine (Speech Synthesis with Multilingual Support)
   ========================================================================== */

class AIVoiceTeacher {
    constructor() {
        this.synth = window.speechSynthesis;
        this.currentUtterance = null;
        this.selectedLanguage = 'en'; // 'ta', 'en', 'hi'
        this.speechRate = 1.0;
        this.isPlaying = false;
        this.isPaused = false;
        this.voices = [];
        this.onStepHighlight = null;

        this.initVoices();
    }

    initVoices() {
        if (!this.synth) return;
        const loadVoices = () => {
            this.voices = this.synth.getVoices();
        };
        loadVoices();
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = loadVoices;
        }
    }

    setLanguage(lang) {
        this.selectedLanguage = lang;
    }

    setRate(rate) {
        this.speechRate = parseFloat(rate) || 1.0;
        if (this.isPlaying && this.currentUtterance) {
            // Re-speak with new rate from current text
        }
    }

    getVoiceForLanguage(lang) {
        if (!this.voices || this.voices.length === 0) return null;
        const targetLangCode = lang === 'ta' ? 'ta' : lang === 'hi' ? 'hi' : 'en';
        return this.voices.find(v => v.lang.toLowerCase().includes(targetLangCode)) || this.voices[0];
    }

    speak(text, onEndCallback) {
        if (!this.synth) return;
        this.stop();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = this.speechRate;
        utterance.pitch = 1.0;

        const voice = this.getVoiceForLanguage(this.selectedLanguage);
        if (voice) utterance.voice = voice;

        utterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            if (onEndCallback) onEndCallback();
        };

        utterance.onerror = (e) => {
            console.warn("Speech error:", e);
            this.isPlaying = false;
            this.isPaused = false;
            if (onEndCallback) onEndCallback();
        };

        this.currentUtterance = utterance;
        this.isPlaying = true;
        this.isPaused = false;
        this.synth.speak(utterance);
    }

    pause() {
        if (this.synth && this.isPlaying && !this.isPaused) {
            this.synth.pause();
            this.isPaused = true;
        }
    }

    resume() {
        if (this.synth && this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
        }
    }

    stop() {
        if (this.synth) {
            this.synth.cancel();
            this.isPlaying = false;
            this.isPaused = false;
        }
    }
}

window.AIVoiceTeacher = AIVoiceTeacher;
