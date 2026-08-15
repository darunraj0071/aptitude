/* ==========================================================================
   APP.JS - Global UI Controller & Navigation Injections (Simplified)
   ========================================================================== */

// Hide download links/sections immediately if running inside Android WebView
(function() {
    if (window.location.href.includes('android_asset') || navigator.userAgent.includes('VetriPathLearnApp')) {
        const style = document.createElement('style');
        style.innerHTML = '.web-only { display: none !important; }';
        document.head.appendChild(style);
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Themes & Layouts
    // Delay hiding the loading screen by 2.0 seconds to allow the quote entry animation to play fully
    setTimeout(hideLoadingScreen, 2000);



    // 2. Register Global Event Handlers
    window.addEventListener('showToast', (e) => {
        showToast(e.detail.message, e.detail.type);
    });

    // Global listener for APK download links
    document.addEventListener('click', (e) => {
        const apkBtn = e.target.closest('a[download*=".apk"], a[href*=".apk"], .btn-download-glossy, .btn-download-glossy-circle-red');
        if (apkBtn) {
            const targetUrl = apkBtn.getAttribute('href') || 'VetriPathLearn.apk';
            const filename = targetUrl.substring(targetUrl.lastIndexOf('/') + 1) || 'VetriPathLearn.apk';
            
            // Display feedback toast
            if (typeof showToast === 'function') {
                showToast(`📥 Starting ${filename} download...`, "success");
            } else if (window.PlacementPrepState && typeof window.PlacementPrepState.dispatchToast === 'function') {
                window.PlacementPrepState.dispatchToast(`📥 Starting ${filename} download...`, "success");
            }
        }
    });

    // Initialize APK promotion popup modal for website visitors
    initApkPromoModal();
});

// --- Theme Settings ---
function initTheme() {
    const savedTheme = PlacementPrepState.getState().theme || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);


    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            PlacementPrepState.updateState({ theme: nextTheme });
            updateThemeIcon(nextTheme);
            showToast(`🌓 Switched to ${nextTheme} mode!`, 'info');
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }
}

// --- Mobile Navigation ---
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-overlay');
    const closeBtn = document.getElementById('drawer-close');

    if (menuToggle && drawer && overlay && closeBtn) {
        menuToggle.addEventListener('click', () => {
            drawer.classList.add('open');
            overlay.classList.add('active');
        });

        const closeDrawer = () => {
            drawer.classList.remove('open');
            overlay.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);
    }
}

// --- Loading Panel Overlay ---
function hideLoadingScreen() {
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
}

// --- Global Toast Notification Dispatcher ---
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} glass-panel`;

    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    else if (type === 'warning') iconClass = 'fa-exclamation-triangle';
    else if (type === 'danger') iconClass = 'fa-circle-xmark';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <span>${message}</span>
        <i class="fa-solid fa-xmark toast-close"></i>
    `;

    container.appendChild(toast);

    // Auto remove after 4 seconds
    const selfRemove = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(selfRemove);
        toast.remove();
    });
}

// --- Inject Navigation and Footer (Templating Helper) ---
function loadGlobalLayout(activeLink = 'home') {
    const headerHTML = `
        <header class="header-nav glass-panel">
            <div class="nav-container">
                <a href="index.html" class="nav-brand" style="gap:0;">
                    <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                    VetriPathLearn
                </a>
                
                <nav class="nav-links">
                    <a href="index.html" class="nav-link ${activeLink === 'home' ? 'active' : ''}">Home</a>
                    <a href="aptitude.html" class="nav-link ${activeLink === 'aptitude' ? 'active' : ''}">Aptitude</a>
                    <a href="reasoning.html" class="nav-link ${activeLink === 'reasoning' ? 'active' : ''}">Reasoning</a>
                    <a href="verbal.html" class="nav-link ${activeLink === 'verbal' ? 'active' : ''}">Verbal</a>
                    <a href="practice.html" class="nav-link ${activeLink === 'practice' ? 'active' : ''}">Practice</a>
                    <a href="coding.html" class="nav-link ${activeLink === 'coding' ? 'active' : ''}">Coding</a>
                    <a href="mocktest.html" class="nav-link ${activeLink === 'mocktest' ? 'active' : ''}">Mock Tests</a>
                    <a href="roadmap.html" class="nav-link ${activeLink === 'roadmap' ? 'active' : ''}">Roadmaps</a>
                    <a href="about.html" class="nav-link ${activeLink === 'about' ? 'active' : ''}">About</a>
                </nav>

                <div class="nav-actions">
                    <a href="search.html" class="theme-toggle-btn" aria-label="Search Engine" style="display: flex; text-decoration:none;">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <button id="menu-toggle" class="menu-toggle-btn" aria-label="Open Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>

        <div id="mobile-overlay" class="mobile-overlay"></div>
        <div id="mobile-drawer" class="mobile-nav-drawer">
            <div class="drawer-header">
                <span class="nav-brand" style="gap:0;">
                    <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                    VetriPathLearn
                </span>
                <button id="drawer-close" class="drawer-close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <nav class="drawer-links">
                <a href="index.html" class="drawer-link ${activeLink === 'home' ? 'active' : ''}">Home</a>
                <a href="aptitude.html" class="drawer-link ${activeLink === 'aptitude' ? 'active' : ''}">Aptitude</a>
                <a href="reasoning.html" class="drawer-link ${activeLink === 'reasoning' ? 'active' : ''}">Reasoning</a>
                <a href="verbal.html" class="drawer-link ${activeLink === 'verbal' ? 'active' : ''}">Verbal</a>
                <a href="practice.html" class="drawer-link ${activeLink === 'practice' ? 'active' : ''}">Practice</a>
                <a href="coding.html" class="drawer-link ${activeLink === 'coding' ? 'active' : ''}">Coding</a>
                <a href="mocktest.html" class="drawer-link ${activeLink === 'mocktest' ? 'active' : ''}">Mock Tests</a>
                <a href="roadmap.html" class="drawer-link ${activeLink === 'roadmap' ? 'active' : ''}">Roadmaps</a>
                <a href="bookmarks.html" class="drawer-link ${activeLink === 'bookmarks' ? 'active' : ''}">Bookmarks</a>
                <a href="about.html" class="drawer-link ${activeLink === 'about' ? 'active' : ''}">About Us</a>
                <div class="web-only" style="padding: 1rem 1rem 0.5rem 1rem;">
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" target="_blank" rel="noopener noreferrer" type="application/vnd.android.package-archive" class="btn-download-cyber">
                        <div class="cyber-btn-badge">
                            <i class="fa-solid fa-download"></i>
                        </div>
                        <div class="cyber-btn-content">
                            <span class="cyber-btn-sub">Direct APK Download</span>
                            <span class="cyber-btn-title">Download APK</span>
                        </div>
                        <div class="cyber-btn-arrow">
                            <i class="fa-solid fa-arrow-down"></i>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    `;

    const isAndroidApp = navigator.userAgent.includes('VetriPathLearnApp') || 
                         window.location.protocol === 'file:' || 
                         window.location.hostname === '' || 
                         window.location.href.includes('android_asset');

    const isCodingPage = window.location.pathname.includes('coding') || 
                         window.location.href.includes('coding.html');

    if (isAndroidApp || isCodingPage) {
        document.body.classList.add('is-native-app');
        // Remove AMP auto ads elements in APK app & coding page
        document.querySelectorAll('amp-auto-ads, ins.adsbygoogle, .ad-section-wrapper, .ad-section-box').forEach(el => el.remove());
    }

    const adsHTML = (isAndroidApp || isCodingPage) ? '' : `
        <div class="container ad-section-wrapper" style="margin: 2rem auto 1.5rem auto;">
            <div class="ad-section-box" style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 1.2rem 1rem; text-align: center; position: relative;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                    <i class="fa-solid fa-rectangle-ad" style="color: var(--primary);"></i> Sponsored Advertisement
                </div>
                <div class="adsense-container" style="overflow: hidden;">
                    <!-- Vetripathlearn Display Ad Unit -->
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-7971777206323143"
                         data-ad-slot="8157337944"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>
                <div class="adsense-infeed-container" style="margin-top: 1rem; overflow: hidden;">
                    <!-- Vetripathlearn In-Feed Fluid Ad Unit -->
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-format="fluid"
                         data-ad-layout-key="-6t+ed+2i-1n-4w"
                         data-ad-client="ca-pub-7971777206323143"
                         data-ad-slot="3824889423"></ins>
                </div>
            </div>
        </div>
    `;

    const footerHTML = `
        ${adsHTML}
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="brand" style="display:flex;align-items:center;gap:0;">
                        <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                        VetriPathLearn
                    </div>
                    <p>Unlock your dream career with our comprehensive placement preparation engine. Fully customizable quizzes, deep theoretical breakdowns, and analytical tools.</p>
                    <div class="footer-socials">
                        <a href="https://github.com/darunraj0071" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub Profile" title="GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/darun-raj-b05151293/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn Profile" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://darun-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Developer Portfolio" title="Portfolio"><i class="fa-solid fa-globe"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="footer-title">Preparation Topics</h4>
                    <ul class="footer-links">
                        <li><a href="aptitude.html">Aptitude Prep</a></li>
                        <li><a href="reasoning.html">Logical Reasoning</a></li>
                        <li><a href="verbal.html">Verbal Ability</a></li>
                        <li><a href="practice.html">Mixed Practice</a></li>
                        <li><a href="coding.html">Coding Portal</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-title">Evaluations &amp; Tools</h4>
                    <ul class="footer-links">
                        <li><a href="mocktest.html">Full-Length Mocks</a></li>
                        <li><a href="bookmarks.html">Bookmarks Portal</a></li>
                        <li><a href="roadmap.html">Syllabus Roadmaps</a></li>
                        <li><a href="search.html">Formula Search</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-title">Legal &amp; Support</h4>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms &amp; Conditions</a></li>
                        <li><a href="disclaimer.html">Disclaimer</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 VetriPathLearn. All Rights Reserved.</p>
                <div style="display:flex; gap:1.2rem; flex-wrap:wrap; justify-content:center; font-size:0.85rem; margin-top:0.4rem;">
                    <a href="privacy.html" style="color:var(--text-secondary); text-decoration:none;">Privacy Policy</a>
                    <a href="terms.html" style="color:var(--text-secondary); text-decoration:none;">Terms &amp; Conditions</a>
                    <a href="disclaimer.html" style="color:var(--text-secondary); text-decoration:none;">Disclaimer</a>
                </div>
            </div>
        </footer>
    `;

    const headerContainer = document.getElementById('nav-placeholder');
    const footerContainer = document.getElementById('footer-placeholder');

    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        if (!isAndroidApp) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {}
        }
    }

    // Initialize global theme and mobile navigation handlers now that they are in the DOM
    initTheme();
    initMobileNav();
}

window.loadGlobalLayout = loadGlobalLayout;

function loadTopicScript(subject, topic) {
    return new Promise((resolve, reject) => {
        const key = `${subject}_${topic}`;
        if (window.TOPIC_QUESTIONS && window.TOPIC_QUESTIONS[key]) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = `js/questions/${subject}_${topic}.js`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script for ${key}`));
        document.body.appendChild(script);
    });
}
window.loadTopicScript = loadTopicScript;

// --- Global Score Summary Modal Controller ---
function showScoreModal(options = {}) {
    const existing = document.getElementById('score-summary-modal');
    if (existing) existing.remove();

    const {
        title = "Exam Score Summary",
        scoreCorrect = 0,
        scoreWrong = 0,
        totalQuestions = 0,
        accuracy = 0,
        timeSeconds = 0,
        onRetry = null,
        onClose = null
    } = options;

    const mins = Math.floor(timeSeconds / 60);
    const secs = timeSeconds % 60;
    const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

    let badgeIcon = "fa-trophy";
    let badgeColor = "#f59e0b";
    let feedbackMsg = "Great effort! Keep practicing to master these topics.";
    if (accuracy >= 80) {
        badgeIcon = "fa-crown";
        badgeColor = "#10b981";
        feedbackMsg = "Outstanding Performance! You've mastered this assessment.";
    } else if (accuracy < 50) {
        badgeIcon = "fa-chart-line";
        badgeColor = "#ef4444";
        feedbackMsg = "Review your incorrect answers below and try again to improve!";
    }

    const modal = document.createElement('div');
    modal.id = 'score-summary-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(4, 6, 14, 0.88);
        z-index: 250000;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        padding: 1.2rem;
        box-sizing: border-box;
    `;

    modal.innerHTML = `
        <div style="width: 100%; max-width: 460px; border-radius: 24px; padding: 2.2rem 1.8rem; background: radial-gradient(circle at 50% 0%, rgba(127, 90, 240, 0.22) 0%, rgba(8, 10, 20, 0.96) 75%); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 30px 70px rgba(0,0,0,0.8); text-align: center; display: flex; flex-direction: column; gap: 1.2rem; box-sizing: border-box;">
            
            <div style="width: 76px; height: 76px; border-radius: 50%; background: ${badgeColor}20; color: ${badgeColor}; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto; border: 2px solid ${badgeColor}50;">
                <i class="fa-solid ${badgeIcon}"></i>
            </div>

            <div>
                <h2 style="margin: 0 0 0.3rem; font-size: 1.6rem; font-family: sans-serif; font-weight: 800; color: #ffffff;">${title}</h2>
                <p style="margin: 0; color: #94a3b8; font-size: 0.88rem; line-height: 1.4;">${feedbackMsg}</p>
            </div>

            <!-- Metric Grid -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; margin: 0.4rem 0;">
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: #7f5af0;">${scoreCorrect}/${totalQuestions}</div>
                    <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Score</div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: #10b981;">${accuracy}%</div>
                    <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Accuracy</div>
                </div>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: #2cb67d;">${timeStr}</div>
                    <div style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Time Spent</div>
                </div>
            </div>

            <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem;">
                ${onRetry ? `<button id="modal-retry-btn" style="flex: 1; padding: 0.85rem; border-radius: 30px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #ffffff; cursor: pointer;">Retry Set</button>` : ''}
                <button id="modal-close-btn" style="flex: 1.3; padding: 0.85rem; border-radius: 30px; font-weight: 700; border: none; background: #7f5af0; color: #ffffff; cursor: pointer; box-shadow: 0 6px 20px rgba(127, 90, 240, 0.4);">Review Results</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#modal-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.remove();
            if (onClose) onClose();
        });
    }

    const retryBtn = modal.querySelector('#modal-retry-btn');
    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            modal.remove();
            if (onRetry) onRetry();
        });
    }
}
window.showScoreModal = showScoreModal;

// --- APK Download Promotion Modal ---
function initApkPromoModal() {
    // Skip if running inside the Android WebView app itself
    if (window.location.href.includes('android_asset') || navigator.userAgent.includes('VetriPathLearnApp')) {
        return;
    }

    // Skip if user already dismissed modal in current session
    if (sessionStorage.getItem('apk_promo_dismissed') === 'true') {
        return;
    }

    // Show popup 1.8 seconds after landing on website
    setTimeout(() => {
        if (document.getElementById('apk-promo-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'apk-promo-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(4, 6, 16, 0.85); z-index: 999990;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(12px); padding: 1.5rem; box-sizing: border-box;
            animation: fadeIn 0.4s ease;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 460px; border-radius: 22px; padding: 2.2rem; border: 1.5px solid rgba(127, 90, 240, 0.4); background: radial-gradient(circle at top right, rgba(127, 90, 240, 0.22) 0%, rgba(15, 14, 23, 0.96) 80%); box-shadow: 0 25px 60px rgba(0,0,0,0.8); display: flex; flex-direction: column; gap: 1.4rem; text-align: center; position: relative; animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
                <button id="apk-modal-close-x" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.08); border: none; color: #94a1b2; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1rem; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'; this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,0.08)'; this.style.color='#94a1b2'">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div style="width: 72px; height: 72px; border-radius: 20px; background: radial-gradient(circle, rgba(127, 90, 240, 0.4) 0%, rgba(127, 90, 240, 0.1) 100%); color: #7f5af0; display: flex; align-items: center; justify-content: center; font-size: 2.4rem; margin: 0 auto; border: 1px solid rgba(127, 90, 240, 0.5); box-shadow: 0 0 25px rgba(127, 90, 240, 0.4);">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>

                <div>
                    <span style="background: rgba(127, 90, 240, 0.2); color: #a78bfa; padding: 0.25rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(127, 90, 240, 0.3);">Official App Notice</span>
                    <h3 style="margin: 0.6rem 0 0.5rem; font-size: 1.5rem; font-family: var(--font-heading); font-weight: 800; color: #ffffff;">Try High-End Features in APK!</h3>
                    <p style="margin: 0; color: #94a1b2; font-size: 0.93rem; line-height: 1.6;">
                        Some features are not available on the website. Download the official <strong>VetriPathLearn Android APK</strong> to experience high-end features and full performance!
                    </p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 0.5rem;">
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" id="apk-modal-download-btn" class="btn btn-primary" style="padding: 0.95rem 1.5rem; border-radius: 30px; font-weight: 800; font-size: 1rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem; background: linear-gradient(135deg, #7f5af0 0%, #2cb67d 100%); border: none; box-shadow: 0 10px 25px rgba(127, 90, 240, 0.4);">
                        <i class="fa-solid fa-download"></i> Download Android APK
                    </a>
                    <button id="apk-modal-dismiss-btn" style="background: transparent; border: none; color: #94a1b2; font-size: 0.85rem; cursor: pointer; padding: 0.4rem; transition: 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#94a1b2'">
                        Continue Browsing Web Version
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => {
            sessionStorage.setItem('apk_promo_dismissed', 'true');
            modal.remove();
        };

        modal.querySelector('#apk-modal-close-x').addEventListener('click', closeModal);
        modal.querySelector('#apk-modal-dismiss-btn').addEventListener('click', closeModal);
        modal.querySelector('#apk-modal-download-btn').addEventListener('click', () => {
            if (typeof showToast === 'function') {
                showToast("📥 Starting VetriPathLearn.apk download...", "success");
            }
            closeModal();
        });
    }, 1800);
}
window.initApkPromoModal = initApkPromoModal;


