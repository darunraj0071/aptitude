/* ==========================================================================
   CHEATING_PROTECTION.JS - Seamless Anti-Copy, Anti-Screenshot & Coding Editor Support
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
    let blackoutTimer = null;

    function isEditableElement(el) {
        if (!el) return false;
        const tag = el.tagName ? el.tagName.toLowerCase() : '';
        return tag === 'textarea' || tag === 'input' || el.isContentEditable || el.classList.contains('editor-textarea') || el.id === 'code-editor';
    }

    // --- Global Protection (Active across website without breaking UX) ---
    function initGlobalProtection() {
        if (globalProtectionInitialized) return;
        globalProtectionInitialized = true;

        // 1. Create Privacy Screen Curtain DOM
        createScreenCurtain();

        // 2. Interaction locks: Block Copy, Cut, Paste, Right-click, Drag-Drop, Selection
        const options = { capture: true, passive: false };
        document.addEventListener('contextmenu', blockInteractionGlobal, options);
        document.addEventListener('copy', handleCopyGlobal, options);
        document.addEventListener('cut', handleCopyGlobal, options);
        document.addEventListener('paste', blockInteractionGlobal, options);
        document.addEventListener('selectstart', blockInteractionGlobal, options);
        document.addEventListener('dragstart', blockInteractionGlobal, options);
        document.addEventListener('drop', blockInteractionGlobal, options);

        // Mobile Selection Clearer (Stops long-press selection handles on question text)
        document.addEventListener('selectionchange', clearMobileSelection, true);
        document.addEventListener('touchstart', handleTouchStartMobile, options);
        document.addEventListener('touchend', clearMobileSelection, options);

        // 3. Mobile Phone & Browser Screenshot Detection (Page Lifecycle API & Focus Loss)
        window.addEventListener('pagehide', handleMobileScreenshotShield, true);
        document.addEventListener('freeze', handleMobileScreenshotShield, true);
        document.addEventListener('visibilitychange', handleVisibilityChangeMobile, true);

        // 4. Screenshot Keys & Shortcut Interception (keydown & keyup)
        window.addEventListener('keydown', handleGlobalKeydown, options);
        window.addEventListener('keyup', handleGlobalKeyup, options);

        // 5. Anti-OCR Noise Obfuscator
        setupAntiOCRObserver();

        console.log("[CheatingProtection]: Mobile & Desktop Anti-Copy, Anti-Screenshot Shield active (Code Editor Editable).");
    }

    function clearMobileSelection(e) {
        const activeEl = document.activeElement;
        const target = e ? e.target : null;
        if (isEditableElement(activeEl) || isEditableElement(target)) {
            return; // Allow cursor and text selection inside coding workstation editor & inputs!
        }
        if (window.getSelection) {
            const sel = window.getSelection();
            if (sel && sel.rangeCount > 0) {
                sel.removeAllRanges();
            }
        }
    }

    function handleTouchStartMobile(e) {
        if (isEditableElement(e.target)) {
            return; // Allow typing & touch focus in code editor!
        }
        // Prevent multi-touch screenshot gestures (3-finger swipe down)
        if (e.touches && e.touches.length > 2) {
            e.preventDefault();
            triggerInstantScreenshotBlackout("🚨 Multi-touch Screenshot Gesture Blocked");
        }
        clearMobileSelection(e);
    }

    function handleMobileScreenshotShield() {
        document.documentElement.classList.add('mobile-screenshot-blackout');
    }

    function handleVisibilityChangeMobile() {
        if (document.hidden) {
            document.documentElement.classList.add('mobile-screenshot-blackout');
        } else {
            setTimeout(() => {
                document.documentElement.classList.remove('mobile-screenshot-blackout');
            }, 400);
        }
    }

    function blockInteractionGlobal(e) {
        const target = e.target;
        if (isEditableElement(target)) {
            if (e.type === 'selectstart' || e.type === 'contextmenu') {
                return true; // Allow selecting & clicking inside code editor!
            }
            if (e.type === 'paste') {
                e.preventDefault();
                dispatchToast("⚠️ Paste is disabled in the Coding editor. Type your solution!", "warning");
                return false;
            }
            return true;
        }

        e.preventDefault();
        e.stopPropagation();

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }

        if (e.type === 'paste') {
            dispatchToast("⚠️ Copy/Paste is disabled on this workstation.", "warning");
        } else if (e.type === 'contextmenu') {
            dispatchToast("⚠️ Right-click context menu is restricted.", "warning");
        }
        return false;
    }

    function handleCopyGlobal(e) {
        if (isEditableElement(e.target)) {
            // Allow selecting text inside code editor if student wants to review code
            return true;
        }

        e.preventDefault();
        e.stopPropagation();

        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }

        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', '');
        }

        dispatchToast("⚠️ Copying text is restricted on VetriPathLearn.", "warning");
        return false;
    }

    function handleGlobalKeydown(e) {
        const target = e.target;
        const isEditing = isEditableElement(target);

        const isCtrl = e.ctrlKey || e.metaKey;
        const key = e.key ? e.key.toLowerCase() : '';
        const code = e.code ? e.code.toLowerCase() : '';

        // Detect PrintScreen / OS Screenshot / Snipping Tool / Save / Print Shortcuts
        const isPrintScreen = e.key === 'PrintScreen' || key === 'printscreen' || code === 'snapshot' || e.keyCode === 44;
        const isSnippingTool = (isCtrl && e.shiftKey && (key === 's' || key === 'i' || key === 'j' || key === 'c')) || (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(key));
        const isRestrictedCombo = (isCtrl && (key === 'p' || key === 'u' || key === 's')) || e.key === 'F12';

        if (isPrintScreen || isSnippingTool || isRestrictedCombo) {
            e.preventDefault();
            e.stopPropagation();
            if (e.stopImmediatePropagation) e.stopImmediatePropagation();

            if (isPrintScreen || isSnippingTool || (isCtrl && key === 'p')) {
                triggerInstantScreenshotBlackout("🚨 SCREENSHOT / SCREEN CAPTURE RESTRICTED");
            } else {
                dispatchToast("⚠️ Restricted shortcut key.", "warning");
            }
            return false;
        }

        // Allow normal typing inside code editor & input fields!
        if (isEditing) {
            if (isCtrl && key === 'v') {
                e.preventDefault();
                dispatchToast("⚠️ Paste is disabled in the Coding editor. Please type your code!", "warning");
                return false;
            }
            return true; // 100% UNLOCKED TYPING IN EDITOR!
        }

        // Outside code editor: restrict copy/paste key combos
        if (isCtrl && ['c', 'v', 'x', 'u', 's', 'p', 'a'].includes(key)) {
            e.preventDefault();
            e.stopPropagation();
            dispatchToast("⚠️ Copying text is restricted on VetriPathLearn.", "warning");
            return false;
        }
    }

    function handleGlobalKeyup(e) {
        const key = e.key ? e.key.toLowerCase() : '';
        if (e.key === 'PrintScreen' || key === 'printscreen' || e.keyCode === 44) {
            triggerInstantScreenshotBlackout("🚨 SCREENSHOT ATTEMPT BLOCKED");
        }
    }

    function triggerInstantScreenshotBlackout(reason = "SCREENSHOT BLOCKED") {
        document.documentElement.classList.add('screenshot-blocked', 'screen-shield-active');
        document.body.classList.add('screenshot-blocked', 'screen-shield-active');
        
        const curtainReason = document.getElementById('security-curtain-reason');
        if (curtainReason) {
            curtainReason.textContent = reason;
        }

        if (blackoutTimer) clearTimeout(blackoutTimer);
        blackoutTimer = setTimeout(() => {
            restoreScreenNormal();
        }, 2000);
    }

    function restoreScreenNormal() {
        document.documentElement.classList.remove('screenshot-blocked', 'screen-shield-active');
        document.body.classList.remove('screenshot-blocked', 'screen-shield-active');
    }

    function createScreenCurtain() {
        let curtain = document.getElementById('security-screen-curtain');
        if (!curtain) {
            curtain = document.createElement('div');
            curtain.id = 'security-screen-curtain';
            curtain.innerHTML = `
                <div style="width:70px; height:70px; border-radius:50%; background:rgba(239,68,68,0.2); color:#ef4444; display:flex; align-items:center; justify-content:center; font-size:2.5rem; margin-bottom:1.2rem; border:2px solid rgba(239,68,68,0.5); box-shadow:0 0 35px rgba(239,68,68,0.4);">
                    <i class="fa-solid fa-camera-slash"></i>
                </div>
                <h2 style="font-size:1.8rem; margin-bottom:0.6rem; color:#ffffff; font-weight:800; font-family:sans-serif;">SCREENSHOT RESTRICTED</h2>
                <p id="security-curtain-reason" style="color:#f87171; font-weight:700; font-size:1rem; margin-bottom:1.5rem; font-family:sans-serif;">
                    Screen captures, printing, and copying are disabled.
                </p>
                <button id="btn-restore-screen" style="padding:0.75rem 2rem; border-radius:30px; font-weight:700; cursor:pointer; border:none; background:#7f5af0; color:#ffffff; font-size:0.9rem; transition:0.2s;" onmouseover="this.style.background='#6b46c1'" onmouseout="this.style.background='#7f5af0'">
                    Resume Workstation
                </button>
            `;
            document.body.appendChild(curtain);

            curtain.querySelector('#btn-restore-screen').addEventListener('click', restoreScreenNormal);
        }
    }

    const HOMOGLYPH_MAP = {
        'a': 'а', 'e': 'е', 'o': 'о', 'p': 'р', 'c': 'с', 'y': 'у', 'x': 'х', 'i': 'і', 'u': 'υ', 'n': 'ո',
        'A': 'А', 'B': 'В', 'E': 'Е', 'K': 'К', 'M': 'М', 'H': 'Н', 'O': 'О', 'P': 'Р', 'C': 'С', 'T': 'Т', 'X': 'Х'
    };

    function scrambleTextForAntiOCR(text) {
        if (!text || text.length < 2) return text;
        return text.split('').map((ch) => {
            return HOMOGLYPH_MAP[ch] || ch;
        }).join('\u200B');
    }

    function renderAntiLensCanvasText(container, text, options = {}) {
        if (!container || !text) return;
        
        container.innerHTML = '';
        container.setAttribute('data-anti-lens', 'true');

        const dpr = window.devicePixelRatio || 1;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const fontSize = options.fontSize || 16;
        const fontFamily = options.fontFamily || "'Outfit', 'Inter', sans-serif";
        const color = options.color || '#f8fafc';
        const maxWidth = Math.max(container.clientWidth || 550, 300);
        const lineHeight = fontSize * 1.55;

        // Wrap text
        ctx.font = `600 ${fontSize}px ${fontFamily}`;
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0] || '';

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth - 15) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);

        canvas.width = maxWidth * dpr;
        canvas.height = (lines.length * lineHeight + 15) * dpr;
        canvas.style.width = `${maxWidth}px`;
        canvas.style.height = `${lines.length * lineHeight + 15}px`;
        canvas.style.display = 'block';

        ctx.scale(dpr, dpr);
        ctx.font = `600 ${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textBaseline = 'top';

        // Draw text with 0.25px Anti-OCR bounding box micro-jitter
        lines.forEach((line, lineIdx) => {
            const y = lineIdx * lineHeight + 8;
            let x = 0;

            for (let c = 0; c < line.length; c++) {
                const char = line[c];
                const displayChar = HOMOGLYPH_MAP[char] || char;
                const jitterY = (c % 2 === 0 ? 0.25 : -0.25);
                ctx.fillText(displayChar, x, y + jitterY);
                x += ctx.measureText(char).width;
            }
        });

        // Anti-OCR scan mesh
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        for (let py = 0; py < canvas.height / dpr; py += 3) {
            ctx.fillRect(0, py, maxWidth, 1);
        }

        container.appendChild(canvas);
    }

    function setupAntiOCRObserver() {
        const obfuscateNodes = (container) => {
            if (!container) return;
            const targetNodes = container.querySelectorAll('.question-text, .question-body, .problem-desc, .option-text, .solution-subcard p, #sol-explanation, #ws-topic-title');
            
            targetNodes.forEach(node => {
                if (node.getAttribute('data-anti-lens') === 'true' || isEditableElement(node) || node.querySelector('canvas')) return;
                node.setAttribute('data-anti-lens', 'true');
                
                const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
                let textNode;
                const nodesToProcess = [];
                while (textNode = walker.nextNode()) {
                    if (textNode.nodeValue && textNode.nodeValue.trim().length > 2) {
                        nodesToProcess.push(textNode);
                    }
                }
                
                nodesToProcess.forEach(tNode => {
                    tNode.nodeValue = scrambleTextForAntiOCR(tNode.nodeValue);
                });
            });
        };

        const observer = new MutationObserver(() => {
            obfuscateNodes(document.body);
        });

        observer.observe(document.body, { childList: true, subtree: true });
        obfuscateNodes(document.body);
    }

    // --- Timed Examination Focus Engine (Active during Tests/Mocks) ---
    function handleVisibilityChange() {
        if (document.hidden && active) {
            recordViolation("Tab switch / Window minimized detected");
        }
    }

    function handleWindowBlur() {
        if (active) {
            recordViolation("Exam window lost focus");
        }
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
        if (warningCount === 1) {
            statusColor = '#f59e0b'; // Yellow
        } else if (warningCount >= 2) {
            statusColor = '#ef4444'; // Red
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

        gracePeriodActive = true;
        if (gracePeriodTimer) clearTimeout(gracePeriodTimer);
        gracePeriodTimer = setTimeout(() => {
            gracePeriodActive = false;
        }, 2000);

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleWindowBlur);

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
        console.log(`[CheatingProtection]: Timed exam focus mode enabled.`);
    }

    function disable() {
        if (!active) return;
        active = false;
        warningCount = 0;
        gracePeriodActive = false;
        if (gracePeriodTimer) clearTimeout(gracePeriodTimer);

        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('blur', handleWindowBlur);

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

        console.log("[CheatingProtection]: Timed exam focus mode disabled.");
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
                        <i class="fa-solid fa-camera-slash" style="color:#ef476f; margin-top: 0.2rem;"></i>
                        <span>Screenshots, copy/paste, and screen capture tools are disabled.</span>
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
        triggerInstantScreenshotBlackout,
        restoreScreenNormal,
        renderAntiLensCanvasText,
        scrambleTextForAntiOCR,
        isActive: () => active,
        getViolationCount: () => warningCount
    };
})();

if (typeof window !== 'undefined') {
    window.CheatingProtection = CheatingProtection;
}
