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

    // Global listener for APK download links with multi-strategy fallback
    document.addEventListener('click', (e) => {
        const apkBtn = e.target.closest('a[download*=".apk"], a[href*=".apk"], .btn-download-glossy, .btn-download-glossy-circle-red');
        if (apkBtn) {
            e.preventDefault();

            const targetUrl = apkBtn.getAttribute('href') || 'VetriPathLearn.apk';
            const filename = targetUrl.substring(targetUrl.lastIndexOf('/') + 1) || 'VetriPathLearn.apk';
            
            // 1. Display feedback toast
            if (typeof showToast === 'function') {
                showToast(`📥 Starting ${filename} download...`, "success");
            } else if (window.PlacementPrepState && typeof window.PlacementPrepState.dispatchToast === 'function') {
                window.PlacementPrepState.dispatchToast(`📥 Starting ${filename} download...`, "success");
            }

            // 2. Strategy A: Direct anchor download click
            const link = document.createElement('a');
            link.href = targetUrl;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                if (link.parentNode) link.parentNode.removeChild(link);
            }, 1000);

            // 3. Strategy B: Hidden Iframe Stream (Guarantees trigger on Android Chrome / Desktop browsers)
            setTimeout(() => {
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = targetUrl;
                document.body.appendChild(iframe);
                setTimeout(() => {
                    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
                }, 15000);
            }, 300);
        }
    });
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
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" type="application/vnd.android.package-archive" class="btn-download-glossy-circle-red web-only" aria-label="Download Android App" title="Download VetriPathLearn APK">
                        <i class="fa-solid fa-download" style="font-size: 1.15rem;"></i>
                    </a>
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
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" target="_blank" rel="noopener noreferrer" type="application/vnd.android.package-archive" class="btn-download-glossy" style="width: 100%; justify-content: center; box-sizing: border-box;">
                        <i class="fa-solid fa-arrow-down" style="font-size: 1.1rem;"></i> Download Android App
                    </a>
                </div>
            </nav>
        </div>
    `;

    const footerHTML = `
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
                    <h4 class="footer-title">Evaluations</h4>
                    <ul class="footer-links">
                        <li><a href="mocktest.html">Full-Length Mocks</a></li>
                        <li><a href="bookmarks.html">Bookmarks Portal</a></li>
                        <li><a href="roadmap.html">Syllabus Roadmaps</a></li>
                        <li><a href="search.html">Formula Search</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 VetriPathLearn. All Rights Reserved.</p>
                
            </div>
        </footer>
    `;

    const headerContainer = document.getElementById('nav-placeholder');
    const footerContainer = document.getElementById('footer-placeholder');

    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

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


