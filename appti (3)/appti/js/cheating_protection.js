/* ==========================================================================
   CHEATING_PROTECTION.JS - Global Anti-Copy, Anti-Screenshot & Anti-Google Lens System
   ========================================================================== */

const CheatingProtection = (() => {
    let active = false;
    let warningCount = 0;
    let maxViolations = 3;
    let limitReachedCallback = null;
    let violationCallback = null;
    let lastViolationTime = 0;
    let gracePeriodActive = false;
    let gracePeriodTimer = null;
    let webcamStream = null;
    let isFullscreenEnforced = false;
    let globalProtectionInitialized = false;

    // --- Global Protection (Runs on ALL Workstations & Pages) ---
    function initGlobalProtection() {
        if (globalProtectionInitialized) return;
        globalProtectionInitialized = true;

        // 1. Create Privacy Screen Curtain DOM element
        createScreenCurtain();

        // 2. Block Copy, Cut, Paste, Right Click, Selection, Drag & Drop globally
        document.addEventListener('contextmenu', blockInteractionGlobal, true);
        document.addEventListener('copy', blockInteractionGlobal, true);
        document.addEventListener('cut', blockInteractionGlobal, true);
        document.addEventListener('paste', blockInteractionGlobal, true);
        document.addEventListener('selectstart', blockInteractionGlobal, true);
        document.addEventListener('dragstart', blockInteractionGlobal, true);
        document.addEventListener('drop', blockInteractionGlobal, true);

        // 3. Monitor Keyboard Shortcuts & Screenshot Keys
        document.addEventListener('keydown', handleGlobalKeydown, true);
        document.addEventListener('keyup', handleGlobalKeyup, true);

        // 4. Clear Clipboard on copy attempts
        document.addEventListener('copy', sanitizeClipboard, true);

        // 5. Anti-Lens / Anti-Screenshot Window Focus Curtain
        window.addEventListener('blur', handleGlobalBlur);
        window.addEventListener('focus', handleGlobalFocus);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                activateScreenShield("Tab switched or Screen capture initiated");
            } else {
                deactivateScreenShield();
            }
        });

        // 6. Anti-OCR Mutation Observer for Question Rendering
        setupAntiOCRObserver();

        console.log("[CheatingProtection]: Global Anti-Copy, Anti-Screenshot & Anti-Google Lens Shield active.");
    }

    function blockInteractionGlobal(e) {
        // Prevent default copy/paste/select/contextmenu
        e.preventDefault();
        
        // Sanitize selection
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        
        // Show brief security notice if attempted
        if (e.type === 'copy' || e.type === 'cut' || e.type === 'paste') {
            sanitizeClipboard();
            dispatchToast("⚠️ Copy/Paste is disabled on VetriPathLearn to protect exam integrity.", "warning");
        } else if (e.type === 'contextmenu') {
            dispatchToast("⚠️ Right-click context menu is disabled on this workstation.", "warning");
        }
        return false;
    }

    function sanitizeClipboard() {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText("🔒 Content protected on VetriPathLearn.");
            }
        } catch (err) {}
    }

    function handleGlobalKeydown(e) {
        const isCtrl = e.ctrlKey || e.metaKey;
        const key = e.key ? e.key.toLowerCase() : '';

        // Block PrintScreen / Snipping tool shortcuts / DevTools / Copy-Paste / Save / Print
        if (
            e.key === 'PrintScreen' ||
            (isCtrl && ['c', 'v', 'x', 'u', 's', 'p', 'a'].includes(key)) ||
            e.key === 'F12' ||
            (isCtrl && e.shiftKey && ['i', 'j', 'c', 'k', 's'].includes(key)) ||
            (e.altKey && e.key === 'Tab')
        ) {
            e.preventDefault();
            e.stopPropagation();
            sanitizeClipboard();

            if (e.key === 'PrintScreen' || (isCtrl && e.shiftKey && key === 's') || (isCtrl && key === 'p')) {
                activateScreenShield("Screen Capture or Screenshot Attempt Detected");
                setTimeout(deactivateScreenShield, 2500);
                dispatchToast("🚨 Screen capture and screenshots are strictly restricted!", "danger");
            } else {
                dispatchToast("⚠️ Keyboard shortcut disabled for security.", "warning");
            }
            return false;
        }
    }

    function handleGlobalKeyup(e) {
        if (e.key === 'PrintScreen') {
            sanitizeClipboard();
            activateScreenShield("Screenshot Trigger Detected");
            setTimeout(deactivateScreenShield, 2500);
        }
    }

    function handleGlobalBlur() {
        // Blur activates privacy screen curtain to prevent Snipping tool / Google Lens overlays
        if (active) {
            recordViolation("Exam window lost focus");
        } else {
            activateScreenShield("Window focus lost / Lens overlay active");
        }
    }

    function handleGlobalFocus() {
        if (!active) {
            deactivateScreenShield();
        }
    }

    function createScreenCurtain() {
        let curtain = document.getElementById('security-screen-curtain');
        if (!curtain) {
            curtain = document.createElement('div');
            curtain.id = 'security-screen-curtain';
            curtain.innerHTML = `
                <div style="width:75px; height:75px; border-radius:50%; background:rgba(239,68,68,0.2); color:#ef4444; display:flex; align-items:center; justify-content:center; font-size:2.5rem; margin-bottom:1.5rem; border:1px solid rgba(239,68,68,0.4); box-shadow:0 0 30px rgba(239,68,68,0.4);">
                    <i class="fa-solid fa-user-shield"></i>
                </div>
                <h2 style="font-size:1.8rem; margin-bottom:0.6rem; color:#ffffff; font-weight:800;">Security Content Shield</h2>
                <p id="security-curtain-reason" style="color:#f87171; font-weight:600; font-size:1.05rem; margin-bottom:1rem;">
                    Screen Capture / Google Lens Scan Restricted
                </p>
                <div style="background:rgba(255,255,255,0.05); padding:1rem 1.8rem; border-radius:30px; font-size:0.88rem; color:#cbd5e1; border:1px solid rgba(255,255,255,0.1);">
                    Click back inside the VetriPathLearn workspace window to restore content.
                </div>
            `;
            document.body.appendChild(curtain);
        }
    }

    function activateScreenShield(reason = "Content Protected") {
        document.body.classList.add('screen-shield-active');
        const reasonEl = document.getElementById('security-curtain-reason');
        if (reasonEl) reasonEl.textContent = reason;
    }

    function deactivateScreenShield() {
        document.body.classList.remove('screen-shield-active');
    }

    // Anti-Google Lens / OCR Scrambler logic:
    // Injects zero-width space noise (\u200B) into text nodes of questions to corrupt OCR matrix text parsing without altering human presentation.
    function setupAntiOCRObserver() {
        const injectOCRNoise = (container) => {
            if (!container) return;
            const targetNodes = container.querySelectorAll('.question-text, .question-body, .problem-desc, .option-text, #sol-explanation');
            targetNodes.forEach(node => {
                if (node.getAttribute('data-anti-ocr') === 'true') return;
                node.setAttribute('data-anti-ocr', 'true');
                
                // Add hidden zero-width spaces in text child nodes
                const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
                let textNode;
                while (textNode = walker.nextNode()) {
                    if (textNode.nodeValue && textNode.nodeValue.length > 5) {
                        // Inject zero width non-breaking space between characters
                        textNode.nodeValue = textNode.nodeValue.split('').join('\u200B');
                    }
                }
            });
        };

        const observer = new MutationObserver(() => {
            const quizContainer = document.getElementById('quiz-question-area') || 
                                  document.getElementById('mock-exam-workspace') || 
                                  document.getElementById('quiz-panel') ||
                                  document.querySelector('.coding-container');
            if (quizContainer) {
                injectOCRNoise(quizContainer);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // --- Examination Focus Proctoring Engine ---
    function handleVisibilityChange() {
        if (document.hidden) {
            recordViolation("Tab switch / Window minimized detected");
        }
    }

    function handleWindowBlur() {
        recordViolation("Exam window lost focus");
    }

    function handleFullscreenChange() {
        if (!active || !isFullscreenEnforced) return;
        const isFS = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (!isFS) {
            recordViolation("Exited Fullscreen mode");
        }
    }

    function recordViolation(reason) {
        if (!active || gracePeriodActive) return;

        const now = Date.now();
        // Debounce violation triggers within 1.2s
        if (now - lastViolationTime < 1200) {
            return;
        }
        lastViolationTime = now;

        warningCount++;
        updateSecurityBadge();

        if (warningCount < maxViolations) {
            showViolationModal(reason, warningCount, maxViolations);
            dispatchToast(`🚨 Security Violation (${warningCount}/${maxViolations}): ${reason}!`, "danger");
            if (violationCallback) {
                violationCallback(warningCount, maxViolations, reason);
            }
        } else {
            dispatchToast(`🚨 Maximum Security Violations (${maxViolations}/${maxViolations}) reached! Submitting exam...`, "danger");
            disable();
            if (limitReachedCallback) {
                limitReachedCallback();
            }
        }
    }

    function dispatchToast(msg, type = "info") {
        if (window.PlacementPrepState && typeof window.PlacementPrepState.dispatchToast === 'function') {
            window.PlacementPrepState.dispatchToast(msg, type);
        } else console.log(`[AntiCheat Toast - ${type}]: ${msg}`);
    }

    function createSecurityBadge() {
        let badge = document.getElementById('cheat-security-badge');
        if (!badge) {
            badge = document.createElement('div');
            badge.id = 'cheat-security-badge';
            document.body.appendChild(badge);
        }
        updateSecurityBadge();
    }

    function updateSecurityBadge() {
        const badge = document.getElementById('cheat-security-badge');
        if (!badge || !active) return;

        let statusColor = '#10b981'; // Green
        let statusText = 'SECURE';
        if (warningCount === 1) {
            statusColor = '#f59e0b'; // Yellow
            statusText = 'WARNING (1/3)';
        } else if (warningCount >= 2) {
            statusColor = '#ef4444'; // Red
            statusText = 'CRITICAL (2/3)';
        }

        badge.innerHTML = `
            <div style="display:flex; align-items:center; gap:0.6rem; background:rgba(15, 23, 42, 0.9); border:1px solid ${statusColor}; border-radius:30px; padding:0.4rem 0.9rem; font-family:sans-serif; font-size:0.8rem; font-weight:700; color:#ffffff; backdrop-filter:blur(10px); box-shadow:0 4px 15px rgba(0,0,0,0.4); z-index:99999; position:fixed; top:15px; right:15px;">
                <span style="width:10px; height:10px; border-radius:50%; background:${statusColor}; display:inline-block; box-shadow:0 0 8px ${statusColor}; animation: pulseDot 1.5s infinite;"></span>
                <i class="fa-solid fa-shield-halved" style="color:${statusColor}"></i>
                <span>Proctor Active</span>
                <span style="background:rgba(255,255,255,0.1); padding:0.15rem 0.45rem; border-radius:12px; font-size:0.75rem; color:${statusColor};">Violations: ${warningCount}/${maxViolations}</span>
            </div>
        `;
    }

    function showViolationModal(reason, current, max) {
        const existing = document.getElementById('cheat-violation-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'cheat-violation-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(10, 14, 26, 0.85); z-index: 200005;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(10px); padding: 1.5rem; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 460px; border-radius: 16px; padding: 2rem; border: 1px solid rgba(239, 68, 68, 0.4); background: radial-gradient(circle at top, rgba(239, 68, 68, 0.15) 0%, rgba(15, 14, 23, 0.95) 80%); box-shadow: 0 25px 60px rgba(0,0,0,0.7); text-align: center; animation: fadeInUp 0.3s ease;">
                <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(239, 68, 68, 0.2); color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem;">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <h3 style="margin: 0 0 0.5rem; font-size: 1.3rem; color: #ffffff; font-weight: 800;">Security Violation Warning</h3>
                <p style="color: #f87171; font-weight: 600; font-size: 0.95rem; margin-bottom: 1rem;">
                    Reason: ${reason}
                </p>
                <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem; font-size: 0.85rem; color: #cbd5e1; border: 1px solid rgba(255,255,255,0.08);">
                    You have <strong style="color: #ef4444;">${max - current}</strong> warning(s) remaining. Reaching <strong style="color: #ef4444;">${max} violations</strong> will automatically terminate and submit your exam session immediately.
                </div>
                ${isFullscreenEnforced ? `
                <button id="btn-reenter-fs" style="width: 100%; padding: 0.8rem; border-radius: 30px; font-weight: 700; cursor: pointer; border: none; background: #ef4444; color: #ffffff; font-size: 0.9rem; transition: 0.2s;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">
                    <i class="fa-solid fa-expand"></i> Re-enter Fullscreen & Continue
                </button>` : `
                <button id="btn-resume-exam" style="width: 100%; padding: 0.8rem; border-radius: 30px; font-weight: 700; cursor: pointer; border: none; background: #7f5af0; color: #ffffff; font-size: 0.9rem; transition: 0.2s;" onmouseover="this.style.background='#6b46c1'" onmouseout="this.style.background='#7f5af0'">
                    <i class="fa-solid fa-check"></i> Resume Exam Focus
                </button>`}
            </div>
        `;

        document.body.appendChild(modal);

        const btnFs = modal.querySelector('#btn-reenter-fs');
        if (btnFs) {
            btnFs.addEventListener('click', () => {
                requestFullscreenMode();
                modal.remove();
            });
        }

        const btnResume = modal.querySelector('#btn-resume-exam');
        if (btnResume) {
            btnResume.addEventListener('click', () => {
                modal.remove();
            });
        }
    }

    function requestFullscreenMode() {
        const docEl = document.documentElement;
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen().catch(err => console.log("Fullscreen request declined or blocked:", err));
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen();
        }
    }

    function exitFullscreenMode() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(err => {});
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    async function initWebcamProctoring() {
        try {
            webcamStream = await navigator.mediaDevices.getUserMedia({ video: { width: 160, height: 120 } });
            let pipWidget = document.getElementById('proctor-webcam-pip');
            if (!pipWidget) {
                pipWidget = document.createElement('div');
                pipWidget.id = 'proctor-webcam-pip';
                pipWidget.style.cssText = `
                    position: fixed; bottom: 20px; right: 20px; width: 140px; height: 105px;
                    border-radius: 12px; overflow: hidden; border: 2px solid #7f5af0;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.5); z-index: 99998; background: #000;
                `;
                pipWidget.innerHTML = `
                    <video id="proctor-webcam-video" autoplay playsinline muted style="width:100%; height:100%; object-fit:cover;"></video>
                    <div style="position:absolute; bottom:4px; left:4px; background:rgba(0,0,0,0.7); padding:2px 6px; border-radius:6px; font-size:0.65rem; color:#10b981; font-weight:700; display:flex; align-items:center; gap:4px;">
                        <span style="width:6px; height:6px; background:#10b981; border-radius:50%; display:inline-block;"></span> CAM ACTIVE
                    </div>
                `;
                document.body.appendChild(pipWidget);
            }
            const videoEl = document.getElementById('proctor-webcam-video');
            if (videoEl) videoEl.srcObject = webcamStream;
        } catch (e) {
            console.log("Webcam access declined or unavailable for proctoring:", e);
        }
    }

    function stopWebcamProctoring() {
        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop());
            webcamStream = null;
        }
        const pipWidget = document.getElementById('proctor-webcam-pip');
        if (pipWidget) pipWidget.remove();
    }

    function enable(options = {}) {
        if (active) return;
        active = true;
        warningCount = 0;
        maxViolations = options.maxViolations || 3;
        limitReachedCallback = options.onViolationLimitReached || null;
        violationCallback = options.onViolation || null;
        isFullscreenEnforced = !!options.enableFullscreen;

        // Activate Grace Period (2.0 seconds) so starting clicks/modals don't trigger false positives
        gracePeriodActive = true;
        if (gracePeriodTimer) clearTimeout(gracePeriodTimer);
        gracePeriodTimer = setTimeout(() => {
            gracePeriodActive = false;
        }, 2000);

        if (isFullscreenEnforced) {
            requestFullscreenMode();
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        }

        if (options.enableWebcam) {
            initWebcamProctoring();
        }

        createSecurityBadge();
        console.log(`[CheatingProtection]: Exam focus active with max ${maxViolations} allowed violations.`);
    }

    function disable() {
        if (!active) return;
        active = false;
        warningCount = 0;
        gracePeriodActive = false;
        if (gracePeriodTimer) clearTimeout(gracePeriodTimer);

        if (isFullscreenEnforced) {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            exitFullscreenMode();
        }

        stopWebcamProctoring();

        const badge = document.getElementById('cheat-security-badge');
        if (badge) badge.remove();

        const violationModal = document.getElementById('cheat-violation-modal');
        if (violationModal) violationModal.remove();

        console.log("[CheatingProtection]: Exam focus disabled cleanly.");
    }

    function showSecurityConsent(onConfirm, options = {}) {
        const existing = document.getElementById('secure-exam-consent-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'secure-exam-consent-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(10, 14, 26, 0.9); z-index: 200000;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(12px); padding: 1.5rem; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 520px; border-radius: 16px; padding: 2.5rem; border: 1px solid rgba(127, 90, 240, 0.3); background: radial-gradient(circle at 0% 0%, rgba(127, 90, 240, 0.18) 0%, rgba(15, 14, 23, 0.96) 75%); box-shadow: 0 20px 50px rgba(0,0,0,0.7); display: flex; flex-direction: column; gap: 1.5rem; text-align: center; animation: fadeInUp 0.4s ease;">
                <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(127, 90, 240, 0.2); color: #7f5af0; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto; box-shadow:0 0 20px rgba(127, 90, 240, 0.4);">
                    <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                    <h3 style="margin: 0 0 0.5rem; font-size: 1.5rem; font-family: sans-serif; font-weight: 800; color: #ffffff;">Secure Examination Proctoring</h3>
                    <p style="margin: 0; color: #94a1b2; font-size: 0.9rem; line-height: 1.5;">
                        To ensure test integrity, this examination operates under secure proctoring focus mode.
                    </p>
                </div>

                <div style="text-align: left; background: rgba(255,255,255,0.03); border-radius: 10px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.8rem; border: 1px solid rgba(255,255,255,0.08);">
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #cbd5e1;">
                        <i class="fa-solid fa-expand" style="color:#7f5af0; margin-top: 0.2rem;"></i>
                        <span>The test will launch in <strong>Fullscreen Mode</strong> for focus.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #cbd5e1;">
                        <i class="fa-solid fa-copy" style="color:#ef476f; margin-top: 0.2rem;"></i>
                        <span>Copying, pasting, right-clicks, and keyboard shortcuts are disabled.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #cbd5e1;">
                        <i class="fa-solid fa-layer-group" style="color:#f59e0b; margin-top: 0.2rem;"></i>
                        <span>Tab switching and focus loss are strictly monitored with a <strong>3-Violation limit</strong>.</span>
                    </div>
                    <div style="display: flex; align-items: start; gap: 0.8rem; font-size: 0.85rem; color: #ef476f; font-weight: 700; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 0.6rem;">
                        <i class="fa-solid fa-circle-xmark" style="margin-top: 0.2rem;"></i>
                        <span>Exceeding 3 security violations will immediately auto-submit your exam session!</span>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                    <button id="cancel-btn" style="flex: 1; padding: 0.85rem; border-radius: 30px; font-weight: 600; cursor: pointer; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: #ffffff; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='transparent'">Cancel</button>
                    <button id="agree-btn" style="flex: 1.5; padding: 0.85rem; border-radius: 30px; font-weight: 700; cursor: pointer; border: none; background: #7f5af0; color: #ffffff; transition: 0.2s; box-shadow: 0 8px 20px rgba(127, 90, 240, 0.4);" onmouseover="this.style.background='#6b46c1'" onmouseout="this.style.background='#7f5af0'">
                        <i class="fa-solid fa-lock"></i> Agree & Start Exam
                    </button>
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

    // Auto-initiate global security protection when DOM is ready
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initGlobalProtection);
        } else {
            initGlobalProtection();
        }
    }

    return {
        enable,
        disable,
        showSecurityConsent,
        initGlobalProtection,
        isActive: () => active,
        getViolationCount: () => warningCount
    };
})();

if (typeof window !== 'undefined') {
    window.CheatingProtection = CheatingProtection;
}
