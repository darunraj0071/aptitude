/* ==========================================================================
   CHEATING_PROTECTION.JS - Client-Side Exam Focus & Interaction Helper

   DISCLAIMER:
   This module provides UX deterrents (copy/paste prevention, shortcut blocking,
   and window focus monitoring) to help maintain user focus during tests.
   Because these restrictions are enforced entirely client-side, they can be
   bypassed via browser DevTools, script blockers, or disabling JavaScript.
   This component does NOT provide cryptographically secure or tamper-proof
   proctoring guarantees.
   ========================================================================== */

const CheatingProtection = (() => {
    let active = false;
    let warningCount = 0;
    let limitReachedCallback = null;

    function blockInteractions(e) {
        e.preventDefault();
        PlacementPrepState.dispatchToast("⚠️ Action restricted for exam focus!", "warning");
    }

    function handleKeyDown(e) {
        const isCtrl = e.ctrlKey || e.metaKey;
        const key = e.key.toLowerCase();
        
        if (
            (isCtrl && (key === 'c' || key === 'v' || key === 'x' || key === 'u' || key === 's')) ||
            e.key === 'F12' ||
            e.key === 'PrintScreen' ||
            (isCtrl && e.shiftKey && (key === 'i' || key === 'j'))
        ) {
            e.preventDefault();
            e.stopPropagation();
            PlacementPrepState.dispatchToast("⚠️ Keyboard shortcuts are disabled during tests!", "danger");
            return false;
        }
    }

    function handleVisibilityChange() {
        if (document.hidden) {
            triggerFocusLossWarning();
        }
    }

    function handleWindowBlur() {
        triggerFocusLossWarning();
    }

    function triggerFocusLossWarning() {
        if (!active) return;
        
        PlacementPrepState.dispatchToast("🚨 Focus loss/Tab switch detected! Exam auto-submitted.", "danger");
        disable();
        if (limitReachedCallback) {
            limitReachedCallback();
        }
    }

    function enable(options = {}) {
        if (active) return;
        active = true;
        warningCount = 0;
        limitReachedCallback = options.onViolationLimitReached || null;

        document.addEventListener('contextmenu', blockInteractions);
        document.addEventListener('copy', blockInteractions);
        document.addEventListener('cut', blockInteractions);
        document.addEventListener('paste', blockInteractions);
        document.addEventListener('selectstart', blockInteractions);
        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleWindowBlur);
        
        const style = document.createElement('style');
        style.id = 'cheat-protection-styles';
        style.innerHTML = `
            body {
                user-select: none !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
            }
        `;
        document.head.appendChild(style);
        
        console.log("Cheating protection enabled.");
    }

    function disable() {
        if (!active) return;
        active = false;

        document.removeEventListener('contextmenu', blockInteractions);
        document.removeEventListener('copy', blockInteractions);
        document.removeEventListener('cut', blockInteractions);
        document.removeEventListener('paste', blockInteractions);
        document.removeEventListener('selectstart', blockInteractions);
        document.removeEventListener('keydown', handleKeyDown, true);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('blur', handleWindowBlur);

        const style = document.getElementById('cheat-protection-styles');
        if (style) style.remove();

        console.log("Cheating protection disabled.");
    }

    function showSecurityConsent(onConfirm) {
        const existing = document.getElementById('secure-exam-consent-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'secure-exam-consent-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(10, 14, 26, 0.9);
            z-index: 200000;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(12px);
            padding: 1.5rem;
            box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 500px; border-radius: 16px; padding: 2.5rem; border: 1px solid rgba(255,255,255,0.08); background: radial-gradient(circle at 0% 0%, rgba(127, 90, 240, 0.15) 0%, rgba(15, 14, 23, 0.95) 75%); box-shadow: 0 20px 50px rgba(0,0,0,0.6); display: flex; flex-direction: column; gap: 1.5rem; text-align: center; animation: fadeInUp 0.4s ease;">
                <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(239, 71, 111, 0.15); color: #ef476f; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto;">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                    <h3 style="margin: 0 0 0.5rem; font-size: 1.4rem; font-family: sans-serif; font-weight: 800; color: #ffffff;">Examination Focus Mode</h3>
                    <p style="margin: 0; color: #94a1b2; font-size: 0.9rem; line-height: 1.5;">
                        To help maintain focus during the test, standard interaction rules apply. Please review them below:
                    </p>
                </div>

                <div style="text-align: left; background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.8rem; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #ef476f; font-weight: 600;">
                        <i class="fa-solid fa-triangle-exclamation" style="margin-top: 0.2rem;"></i>
                        <span>Tab switching, window resizing, or losing browser window focus is strictly prohibited.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #ef476f; font-weight: 600;">
                        <i class="fa-solid fa-triangle-exclamation" style="margin-top: 0.2rem;"></i>
                        <span>Copying, pasting, right-clicks, and developer shortcut keys are disabled.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #ef476f; font-weight: 600;">
                        <i class="fa-solid fa-triangle-exclamation" style="margin-top: 0.2rem;"></i>
                        <span>Taking screen captures or screenshots is not permitted.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #ef476f; font-weight: 700; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 0.6rem;">
                        <i class="fa-solid fa-circle-xmark" style="margin-top: 0.2rem;"></i>
                        <span>If you switch tabs or click outside this page, the exam will AUTO-SUBMIT immediately without warning!</span>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button id="cancel-btn" style="flex: 1; padding: 0.8rem; border-radius: 30px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: #ffffff; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">Cancel</button>
                    <button id="agree-btn" style="flex: 1.5; padding: 0.8rem; border-radius: 30px; font-weight: 700; cursor: pointer; border: none; background: #7f5af0; color: #ffffff; transition: 0.2s;" onmouseover="this.style.background='#6b46c1'" onmouseout="this.style.background='#7f5af0'">Understand & Start</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('#cancel-btn').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('#agree-btn').addEventListener('click', () => {
            modal.remove();
            onConfirm();
        });
    }

    return {
        enable,
        disable,
        showSecurityConsent,
        isActive: () => active
    };
})();
