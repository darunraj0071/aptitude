/* ==========================================================================
   CHEATING_PROTECTION.JS - Proctored Anti-Cheating & Exam Integrity Engine
   Protects against screenshots, copy/paste, Google Lens OCR, and screen snipping
   ========================================================================== */

const CheatingProtection = (() => {
    let active = false;
    let warningCount = 0;
    let maxViolations = 3;
    let limitReachedCallback = null;
    let violationCallback = null;
    let isFullscreenEnforced = false;
    let globalInitialized = false;
    let blurOverlay = null;

    function isEditableElement(el) {
        if (!el) return false;
        const tag = el.tagName ? el.tagName.toLowerCase() : '';
        return tag === 'textarea' || tag === 'input' || el.isContentEditable || 
               el.classList.contains('editor-textarea') || el.id === 'code-editor' ||
               el.classList.contains('scratchpad-textarea') || el.closest('#code-editor');
    }

    function dispatchToast(msg, type = 'warning') {
        if (window.PlacementPrepState && typeof window.PlacementPrepState.dispatchToast === 'function') {
            window.PlacementPrepState.dispatchToast(msg, type);
        } else if (typeof showToast === 'function') {
            showToast(msg, type);
        }
    }

    // --- Show Anti-Screenshot & Screen Capture Protection Curtain ---
    function triggerScreenshotBlockShield(reason = "Screenshot attempt intercepted") {
        let shield = document.getElementById('screenshot-security-shield');
        if (!shield) {
            shield = document.createElement('div');
            shield.id = 'screenshot-security-shield';
            shield.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(3, 7, 18, 0.98); z-index: 9999999;
                display: flex; align-items: center; justify-content: center;
                backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
                padding: 1.5rem; box-sizing: border-box;
                animation: fadeIn 0.15s ease;
            `;

            shield.innerHTML = `
                <div class="glass-panel" style="width: 100%; max-width: 480px; padding: 2.5rem 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--danger); box-shadow: 0 0 50px rgba(244, 63, 94, 0.35); background: radial-gradient(circle at top, rgba(244, 63, 94, 0.15) 0%, rgba(8, 12, 24, 0.98) 70%);">
                    <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(244, 63, 94, 0.15); color: var(--danger); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 1.2rem; border: 2px solid rgba(244, 63, 94, 0.4);">
                        <i class="fa-solid fa-camera-slash"></i>
                    </div>
                    <span class="badge badge-danger" style="margin-bottom: 0.6rem;">Security Shield Active</span>
                    <h3 style="font-size: 1.45rem; font-family: var(--font-heading); margin: 0 0 0.5rem; color: #ffffff;">SCREENSHOT / SCAN RESTRICTED</h3>
                    <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.8rem;">
                        Screenshots, screen recordings, text extraction, and Google Lens scans are strictly restricted to safeguard question content.
                    </p>
                    <button id="btn-resume-shield" class="btn btn-primary" style="width: 100%; padding: 0.85rem; border-radius: 30px; font-weight: 700;">
                        <i class="fa-solid fa-arrow-rotate-left"></i> Resume Workstation
                    </button>
                </div>
            `;
            document.body.appendChild(shield);

            shield.querySelector('#btn-resume-shield').addEventListener('click', () => {
                shield.remove();
            });
        }

        // Clear clipboard immediately so captured screenshot or image buffer is wiped
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText('').catch(() => {});
            }
        } catch (e) {}

        dispatchToast("🚨 Screenshot / Capture attempt blocked by security engine.", "danger");
    }

    // --- Create Background Focus Guard Overlay (Obscures content during Snipping Tool or Tab Switch) ---
    function ensureFocusGuard() {
        if (!blurOverlay) {
            blurOverlay = document.createElement('div');
            blurOverlay.id = 'security-defocus-guard';
            blurOverlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: #030712; z-index: 999990;
                display: none; opacity: 0; transition: opacity 0.15s ease;
                pointer-events: none;
            `;
            document.body.appendChild(blurOverlay);
        }
    }

    // --- 1. Global Content, Anti-Copy, Anti-Paste & Anti-Google Lens Protection ---
    function initGlobalProtection() {
        if (globalInitialized) return;
        globalInitialized = true;

        ensureFocusGuard();

        const options = { capture: true, passive: false };

        // 1. Block Right-Click Context Menu & Mobile Long-Press Menu (Google Lens Trigger)
        document.addEventListener('contextmenu', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            dispatchToast("⚠️ Right-click context menu and Google Lens scan are restricted.", "warning");
            return false;
        }, options);

        // 2. Block Text Selection (selectstart & selectionchange) outside inputs
        document.addEventListener('selectstart', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            return false;
        }, options);

        document.addEventListener('selectionchange', () => {
            const activeEl = document.activeElement;
            if (!isEditableElement(activeEl)) {
                const sel = window.getSelection();
                if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
                    sel.removeAllRanges();
                }
            }
        });

        // 3. Block Copy, Cut, and Paste outside editable input elements
        document.addEventListener('copy', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            if (e.clipboardData) e.clipboardData.setData('text/plain', '');
            dispatchToast("⚠️ Content copying is disabled.", "warning");
            return false;
        }, options);

        document.addEventListener('cut', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, options);

        document.addEventListener('paste', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, options);

        // 4. Block Dragging (Prevents dragging images or text to Google Lens or search bars)
        document.addEventListener('dragstart', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, options);

        document.addEventListener('drop', (e) => {
            if (isEditableElement(e.target)) return true;
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, options);

        // 5. Intercept Mobile Long-Press on Images and Content Cards
        let touchTimer = null;
        document.addEventListener('touchstart', (e) => {
            if (isEditableElement(e.target)) return;
            // Clear any lingering timer
            if (touchTimer) clearTimeout(touchTimer);
            // Cancel native callout on long press
            touchTimer = setTimeout(() => {
                if (window.getSelection) {
                    const sel = window.getSelection();
                    if (sel) sel.removeAllRanges();
                }
            }, 300);
        }, { passive: true });

        document.addEventListener('touchend', () => {
            if (touchTimer) clearTimeout(touchTimer);
        }, { passive: true });

        document.addEventListener('touchcancel', () => {
            if (touchTimer) clearTimeout(touchTimer);
        }, { passive: true });

        // 6. Screenshot & Screen Capture Keyboard Shortcuts
        window.addEventListener('keyup', (e) => {
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                triggerScreenshotBlockShield("PrintScreen capture detected");
            }
        });

        window.addEventListener('keydown', (e) => {
            // PrintScreen keydown detection
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                e.stopPropagation();
                triggerScreenshotBlockShield("PrintScreen capture detected");
                return false;
            }

            if (isEditableElement(e.target)) {
                return true; // Allowed inside code editor & scratchpad!
            }

            const isCtrl = e.ctrlKey || e.metaKey;
            const key = e.key ? e.key.toLowerCase() : '';

            // Screenshot shortcuts: Win+Shift+S, Ctrl+Shift+S, Cmd+Shift+3/4/5
            if ((isCtrl && e.shiftKey && (key === 's' || key === '3' || key === '4' || key === '5')) ||
                (e.metaKey && e.shiftKey && (key === 's' || key === '3' || key === '4' || key === '5'))) {
                e.preventDefault();
                e.stopPropagation();
                triggerScreenshotBlockShield("Screenshot shortcut detected");
                return false;
            }

            // Developer Tools Combos (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
            if (e.key === 'F12' || (isCtrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))) {
                e.preventDefault();
                e.stopPropagation();
                dispatchToast("⚠️ Developer tools shortcuts are restricted.", "danger");
                return false;
            }

            // View Source (Ctrl+U), Save Page (Ctrl+S), Print (Ctrl+P)
            if (isCtrl && (key === 'u' || key === 's' || key === 'p')) {
                e.preventDefault();
                e.stopPropagation();
                triggerScreenshotBlockShield("Print / Save attempt intercepted");
                return false;
            }

            // Copy shortcut (Ctrl+C) outside editor
            if (isCtrl && key === 'c') {
                e.preventDefault();
                e.stopPropagation();
                dispatchToast("⚠️ Content copying is disabled.", "warning");
                return false;
            }
        }, options);

        // 7. Print Shield Interceptor
        window.addEventListener('beforeprint', () => {
            triggerScreenshotBlockShield("Print command intercepted");
        });

        // 8. Focus Defocus Guard during Active Proctoring
        window.addEventListener('blur', () => {
            if (active) {
                recordViolation("Window focus lost / Application switched");
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (active && document.hidden) {
                recordViolation("Tab switch or browser minimize detected");
            }
        });

        console.log("[CheatingProtection]: Comprehensive Anti-Screenshot, Anti-Copy & Anti-Lens engine active.");
    }

    // --- 2. Active Test Proctored Mode ---
    function enable(options = {}) {
        active = true;
        warningCount = 0;
        maxViolations = options.maxViolations || 3;
        limitReachedCallback = options.onViolationLimitReached || null;
        violationCallback = options.onViolation || null;
        isFullscreenEnforced = options.enableFullscreen || false;

        if (isFullscreenEnforced && document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }

        dispatchToast("🛡️ Proctoring Security Active: Do not switch tabs or capture screens!", "info");
    }

    function disable() {
        active = false;
        warningCount = 0;
        limitReachedCallback = null;
        violationCallback = null;

        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
    }

    function recordViolation(reason = "Proctoring violation detected") {
        if (!active) return;
        warningCount += 1;

        dispatchToast(`🚨 Violation (${warningCount}/${maxViolations}): ${reason}!`, "danger");

        if (typeof violationCallback === 'function') {
            violationCallback(warningCount, maxViolations, reason);
        }

        if (warningCount >= maxViolations) {
            dispatchToast("⛔ Security violation limit reached. Submitting assessment.", "danger");
            if (typeof limitReachedCallback === 'function') {
                setTimeout(() => {
                    limitReachedCallback();
                }, 800);
            }
        }
    }

    // --- 3. Security Consent Modal ---
    function showSecurityConsent(onAccept) {
        const existing = document.getElementById('security-consent-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'security-consent-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(2, 4, 10, 0.88); z-index: 999995;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
            padding: 1.5rem; box-sizing: border-box;
            animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 480px; border-radius: var(--radius-lg); padding: 2.2rem; background: radial-gradient(circle at top right, rgba(0, 240, 255, 0.12) 0%, rgba(8, 14, 28, 0.98) 75%); border: 1px solid var(--border-highlight); box-shadow: 0 30px 70px rgba(0,0,0,0.8); text-align: center; display: flex; flex-direction: column; gap: 1.2rem;">
                <div style="width: 68px; height: 68px; border-radius: 20px; background: rgba(0, 240, 255, 0.12); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto; border: 1px solid rgba(0, 240, 255, 0.3); box-shadow: 0 0 25px rgba(0, 240, 255, 0.25);">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>

                <div>
                    <span class="badge badge-cyan" style="margin-bottom: 0.4rem;">Assessment Integrity</span>
                    <h3 style="margin: 0.4rem 0 0.3rem; font-size: 1.45rem; font-family: var(--font-heading); font-weight: 800; color: #ffffff;">Assessment Security Guidelines</h3>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">
                        To ensure genuine placement readiness, this assessment runs under exam security guidelines.
                    </p>
                </div>

                <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 1rem; text-align: left; font-size: 0.85rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.6rem;">
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <i class="fa-solid fa-camera-slash" style="color: var(--danger);"></i> <span>Screenshotting, screen recording & Google Lens are prohibited</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <i class="fa-solid fa-ban" style="color: var(--danger);"></i> <span>No tab switching or browser minimizing</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <i class="fa-solid fa-copy" style="color: var(--warning);"></i> <span>Copy, paste, and inspect tools are disabled</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <i class="fa-solid fa-triangle-exclamation" style="color: var(--danger);"></i> <span>Exceeding 3 violation warnings will auto-submit</span>
                    </div>
                </div>

                <div style="display: flex; gap: 0.8rem; margin-top: 0.4rem;">
                    <button id="btn-security-cancel" class="btn btn-secondary" style="flex: 1;">Cancel</button>
                    <button id="btn-security-accept" class="btn btn-primary" style="flex: 1.4;">Start Assessment</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('#btn-security-cancel').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('#btn-security-accept').addEventListener('click', () => {
            modal.remove();
            if (typeof onAccept === 'function') {
                onAccept();
            }
        });
    }

    function getWarningCount() {
        return warningCount;
    }

    function isSecurityActive() {
        return active;
    }

    // Auto-init protection immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalProtection);
    } else {
        initGlobalProtection();
    }

    return {
        initGlobalProtection,
        enable,
        disable,
        recordViolation,
        triggerScreenshotBlockShield,
        showSecurityConsent,
        getWarningCount,
        isSecurityActive
    };
})();

window.CheatingProtection = CheatingProtection;
