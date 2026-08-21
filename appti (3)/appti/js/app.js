/* ==========================================================================
   APP.JS - Global UI Controller & Futuristic Learning Lab Engine (VetriPathLearn 2.0)
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
    // 1. Fast loading screen transition
    setTimeout(hideLoadingScreen, 250);

    // 2. Register Global Toast Listener
    window.addEventListener('showToast', (e) => {
        showToast(e.detail.message, e.detail.type);
    });

    // 3. Global listener for APK download links
    document.addEventListener('click', (e) => {
        const apkBtn = e.target.closest('a[download*=".apk"], a[href*=".apk"], .btn-download-cyber, .btn-download-glossy');
        if (apkBtn) {
            const targetUrl = apkBtn.getAttribute('href') || 'VetriPathLearn.apk';
            const filename = targetUrl.substring(targetUrl.lastIndexOf('/') + 1) || 'VetriPathLearn.apk';
            
            if (typeof showToast === 'function') {
                showToast(`📥 Starting ${filename} download...`, "success");
            } else if (window.PlacementPrepState && typeof window.PlacementPrepState.dispatchToast === 'function') {
                window.PlacementPrepState.dispatchToast(`📥 Starting ${filename} download...`, "success");
            }
        }
    });

    // 4. Initialize APK promo modal
    initApkPromoModal();
});

// --- Theme Settings (Dark Mode Standard) ---
function initTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
}

function updateThemeIcon(theme) {}

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
        }, 400);
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

// --- Number Count-Up Animation Utility ---
function animateCounter(element, target, duration = 1200, suffix = '') {
    if (!element) return;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(start + (target - start) * easeOutQuad);
        element.textContent = currentVal.toLocaleString() + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString() + suffix;
        }
    }
    requestAnimationFrame(update);
}
window.animateCounter = animateCounter;

// --- Inject Navigation and Footer (Global Layout) ---
function loadGlobalLayout(activeLink = 'home') {
    const headerHTML = `
        <header class="header-nav">
            <div class="nav-container">
                <div class="nav-brand" style="cursor: default; user-select: none; pointer-events: none;">
                    <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                    <span>VetriPathLearn</span>
                </div>
                
                <nav class="nav-links">
                    <a href="index.html" class="nav-link ${activeLink === 'home' ? 'active' : ''}">Home</a>
                    <a href="aptitude.html" class="nav-link ${activeLink === 'aptitude' ? 'active' : ''}">Aptitude</a>
                    <a href="reasoning.html" class="nav-link ${activeLink === 'reasoning' ? 'active' : ''}">Reasoning</a>
                    <a href="verbal.html" class="nav-link ${activeLink === 'verbal' ? 'active' : ''}">Verbal</a>
                    <a href="practice.html" class="nav-link ${activeLink === 'practice' ? 'active' : ''}">Practice</a>
                    <a href="coding.html" class="nav-link ${activeLink === 'coding' ? 'active' : ''}">Coding</a>
                    <a href="mocktest.html" class="nav-link ${activeLink === 'mocktest' ? 'active' : ''}">Mock Tests</a>
                    <a href="roadmap.html" class="nav-link ${activeLink === 'roadmap' ? 'active' : ''}">Roadmaps</a>
                </nav>

                <div class="nav-actions">
                    <a href="bookmarks.html" class="theme-toggle-btn ${activeLink === 'bookmarks' ? 'active' : ''}" aria-label="Bookmarks Library" title="Saved Bookmarks Library">
                        <i class="fa-solid fa-bookmark"></i>
                    </a>
                    <a href="search.html" class="theme-toggle-btn ${activeLink === 'search' ? 'active' : ''}" aria-label="Search Engine" title="Search Formulas & Concepts">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <button id="menu-toggle" class="menu-toggle-btn" aria-label="Open Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>

        <div id="mobile-overlay" class="mobile-overlay"></div>
        <div id="mobile-nav-drawer" class="mobile-nav-drawer" id="mobile-drawer">
            <div class="drawer-header">
                <span class="nav-brand">
                    <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                    <span>VetriPathLearn</span>
                </span>
                <button id="drawer-close" class="drawer-close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <nav class="drawer-links">
                <a href="index.html" class="drawer-link ${activeLink === 'home' ? 'active' : ''}"><i class="fa-solid fa-house" style="color:var(--primary);"></i> Home</a>
                <a href="aptitude.html" class="drawer-link ${activeLink === 'aptitude' ? 'active' : ''}"><i class="fa-solid fa-calculator" style="color:var(--primary);"></i> Aptitude Hub</a>
                <a href="reasoning.html" class="drawer-link ${activeLink === 'reasoning' ? 'active' : ''}"><i class="fa-solid fa-puzzle-piece" style="color:var(--secondary);"></i> Logical Reasoning</a>
                <a href="verbal.html" class="drawer-link ${activeLink === 'verbal' ? 'active' : ''}"><i class="fa-solid fa-spell-check" style="color:var(--warning);"></i> Verbal Ability</a>
                <a href="practice.html" class="drawer-link ${activeLink === 'practice' ? 'active' : ''}"><i class="fa-solid fa-sliders" style="color:var(--info);"></i> Practice Workstation</a>
                <a href="coding.html" class="drawer-link ${activeLink === 'coding' ? 'active' : ''}"><i class="fa-solid fa-laptop-code" style="color:var(--success);"></i> Coding Portal</a>
                <a href="mocktest.html" class="drawer-link ${activeLink === 'mocktest' ? 'active' : ''}"><i class="fa-solid fa-stopwatch" style="color:var(--danger);"></i> Mock Tests</a>
                <a href="roadmap.html" class="drawer-link ${activeLink === 'roadmap' ? 'active' : ''}"><i class="fa-solid fa-map" style="color:var(--warning);"></i> Roadmaps</a>
                <a href="bookmarks.html" class="drawer-link ${activeLink === 'bookmarks' ? 'active' : ''}"><i class="fa-solid fa-bookmark" style="color:var(--primary);"></i> Saved Bookmarks</a>
                <a href="search.html" class="drawer-link ${activeLink === 'search' ? 'active' : ''}"><i class="fa-solid fa-magnifying-glass" style="color:var(--primary);"></i> Search Formulas</a>
                <a href="about.html" class="drawer-link ${activeLink === 'about' ? 'active' : ''}"><i class="fa-solid fa-circle-info" style="color:var(--text-muted);"></i> About Us</a>
                
                <div class="web-only" style="padding: 1rem 0.5rem;">
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" class="btn-download-cyber">
                        <div class="cyber-btn-badge"><i class="fa-solid fa-download"></i></div>
                        <div class="cyber-btn-content">
                            <span class="cyber-btn-sub">Official Android APK</span>
                            <span class="cyber-btn-title">Download APK</span>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    `;

    const isAndroidApp = navigator.userAgent.includes('VetriPathLearnApp') || 
                         window.location.href.includes('android_asset');

    const isCodingPage = window.location.pathname.includes('coding') || 
                         window.location.href.includes('coding.html');

    if (isAndroidApp || isCodingPage) {
        document.body.classList.add('is-native-app');
        document.querySelectorAll('amp-auto-ads, ins.adsbygoogle, .ad-section-wrapper, .ad-section-box').forEach(el => el.remove());
    }

    const adsHTML = (isAndroidApp || isCodingPage) ? '' : `
        <div class="container ad-section-wrapper" style="margin: 2rem auto 1.5rem auto;">
            <div class="ad-section-box" style="background: rgba(12, 20, 39, 0.5); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
                <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 0.6rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                    <i class="fa-solid fa-rectangle-ad" style="color: var(--primary);"></i> Sponsored Advertisement
                </div>
                <div class="adsense-container" style="overflow: hidden;">
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="ca-pub-7971777206323143"
                         data-ad-slot="8157337944"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>
            </div>
        </div>
    `;

    const footerHTML = `
        ${adsHTML}
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-about">
                    <div class="brand" style="display:flex;align-items:center;gap:0.6rem;">
                        <img src="images/logo.png" alt="VetriPathLearn Logo" class="nav-logo-img">
                        <span>VetriPathLearn</span>
                    </div>
                    <p>Next-generation campus placement preparation lab. Master Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Coding Challenges with interactive offline-ready workstations.</p>
                    
                </div>
                <div>
                    <h4 class="footer-title">Preparation Modules</h4>
                    <ul class="footer-links">
                        <li><a href="aptitude.html"><i class="fa-solid fa-calculator" style="margin-right:0.3rem;"></i> Aptitude Hub</a></li>
                        <li><a href="reasoning.html"><i class="fa-solid fa-puzzle-piece" style="margin-right:0.3rem;"></i> Logical Reasoning</a></li>
                        <li><a href="verbal.html"><i class="fa-solid fa-spell-check" style="margin-right:0.3rem;"></i> Verbal Ability</a></li>
                        <li><a href="practice.html"><i class="fa-solid fa-sliders" style="margin-right:0.3rem;"></i> Mixed Practice</a></li>
                        <li><a href="coding.html"><i class="fa-solid fa-laptop-code" style="margin-right:0.3rem;"></i> Coding Workstation</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-title">Evaluation Engines</h4>
                    <ul class="footer-links">
                        <li><a href="mocktest.html"><i class="fa-solid fa-stopwatch" style="margin-right:0.3rem;"></i> Placement Mocks</a></li>
                        <li><a href="roadmap.html"><i class="fa-solid fa-map" style="margin-right:0.3rem;"></i> 30-Day Roadmaps</a></li>
                        <li><a href="bookmarks.html"><i class="fa-solid fa-bookmark" style="margin-right:0.3rem;"></i> Saved Revision</a></li>
                        <li><a href="search.html"><i class="fa-solid fa-magnifying-glass" style="margin-right:0.3rem;"></i> Formula Search</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="footer-title">Platform &amp; Legal</h4>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                        <li><a href="disclaimer.html">Disclaimer</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">User Feedback &amp; Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 VetriPathLearn. Built for ambitious students worldwide.</p>
                <div style="display:flex; gap:1.5rem; flex-wrap:wrap; justify-content:center; font-size:0.85rem; margin-top:0.6rem;">
                    <a href="privacy.html" style="color:var(--text-muted);">Privacy Policy</a>
                    <a href="terms.html" style="color:var(--text-muted);">Terms &amp; Conditions</a>
                    <a href="disclaimer.html" style="color:var(--text-muted);">Disclaimer</a>
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
            } catch (err) {}
        }
    }

    initTheme();
    initMobileNav();
}
window.loadGlobalLayout = loadGlobalLayout;

// --- Topic Script Dynamic Loader ---
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

// --- Live Dashboard Initializer (For index.html) ---
function initDashboard() {
    const stats = PlacementPrepState.getStatistics();
    const weakTopics = PlacementPrepState.getWeakTopics(3);
    const achievements = PlacementPrepState.checkAchievements();

    // 1. Update Terminal Greeting
    const greetingEl = document.getElementById('dash-greeting');
    if (greetingEl) {
        const hours = new Date().getHours();
        let timeGreeting = "Welcome Back 👋";
        if (hours < 12) timeGreeting = "Good Morning ☀️";
        else if (hours < 17) timeGreeting = "Good Afternoon 🌤️";
        else timeGreeting = "Good Evening 🌙";
        greetingEl.textContent = timeGreeting;
    }

    // 2. Animated Stats Counters
    const solvedEl = document.getElementById('dash-solved-count');
    const accuracyEl = document.getElementById('dash-accuracy-val');
    const streakEl = document.getElementById('dash-streak-count');
    const bookmarksEl = document.getElementById('dash-bookmarks-count');

    if (solvedEl) animateCounter(solvedEl, stats.totalAttempted || 0, 1000);
    if (accuracyEl) animateCounter(accuracyEl, stats.overallAccuracy || 0, 1000, '%');
    if (streakEl) animateCounter(streakEl, stats.streak || 1, 800, ' Days');
    if (bookmarksEl) animateCounter(bookmarksEl, stats.bookmarksCount || 0, 800);

    // 3. Subject Progress Bars
    const updateSubjectProgress = (prefix, data, defaultGoal = 50) => {
        const fillEl = document.getElementById(`dash-${prefix}-fill`);
        const textEl = document.getElementById(`dash-${prefix}-txt`);
        if (fillEl && textEl) {
            const attempted = data ? data.attempted : 0;
            const pct = Math.min(Math.round((attempted / defaultGoal) * 100), 100);
            fillEl.style.width = `${Math.max(pct, 5)}%`;
            textEl.textContent = `${attempted} solved (${pct}%)`;
        }
    };

    updateSubjectProgress('apt', stats.subjectStats.aptitude, 60);
    updateSubjectProgress('reas', stats.subjectStats.reasoning, 50);
    updateSubjectProgress('verb', stats.subjectStats.verbal, 40);
    updateSubjectProgress('code', stats.subjectStats.coding, 30);

    // 4. Continue Learning Widget
    const continueContainer = document.getElementById('dash-continue-container');
    if (continueContainer) {
        const last = stats.lastPracticed || {
            subject: 'aptitude',
            topic: 'percentage',
            title: 'Percentages & Multipliers'
        };

        continueContainer.innerHTML = `
            <div class="glass-card" style="border-left: 4px solid var(--primary); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; height: 100%;">
                <div>
                    <span class="badge badge-cyan" style="margin-bottom: 0.6rem;">
                        <i class="fa-solid fa-clock-rotate-left"></i> Continue Learning
                    </span>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.4rem; color: var(--text-primary); font-family: var(--font-heading);">
                        ${last.title}
                    </h3>
                    <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 0;">
                        Jump straight back into your latest practice set or theory review.
                    </p>
                </div>
                <div>
                    <a href="${last.subject}.html?topic=${last.topic}" class="btn btn-primary" style="width: 100%; padding: 0.7rem; font-size: 0.9rem;">
                        <span>Continue Practice</span> <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }

    // 5. Weak Topics / Recommended Practice Widget
    const weakContainer = document.getElementById('dash-weak-container');
    if (weakContainer) {
        weakContainer.innerHTML = `
            <div class="glass-card" style="border-left: 4px solid var(--warning); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; height: 100%;">
                <div>
                    <span class="badge badge-amber" style="margin-bottom: 0.6rem;">
                        <i class="fa-solid fa-bullseye"></i> Improve Your Skills
                    </span>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--text-primary); font-family: var(--font-heading);">
                        Recommended Topics
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                        ${weakTopics.map(t => `
                            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 0.5rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--glass-border);">
                                <div>
                                    <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary);">${t.title}</span>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block; text-transform: uppercase;">${t.subject}</span>
                                </div>
                                <a href="${t.subject}.html?topic=${t.topic}" class="btn btn-secondary btn-sm" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
                                    Practice
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <a href="practice.html" class="btn btn-secondary" style="width: 100%; padding: 0.6rem; font-size: 0.85rem; text-align: center;">
                    <i class="fa-solid fa-shuffle"></i> Launch Mixed Practice Drill
                </a>
            </div>
        `;
    }

    // 6. Achievements Matrix
    const achContainer = document.getElementById('dash-achievements-container');
    if (achContainer) {
        achContainer.innerHTML = achievements.slice(0, 4).map(ach => `
            <div class="glass-card" style="padding: 1.2rem; display: flex; align-items: center; gap: 1rem; ${ach.unlocked ? 'border-color: rgba(0, 240, 255, 0.3); background: rgba(0, 240, 255, 0.04);' : 'opacity: 0.5;'}">
                <div style="width: 44px; height: 44px; border-radius: 12px; background: ${ach.unlocked ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.05)'}; color: ${ach.unlocked ? '#030712' : 'var(--text-muted)'}; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0;">
                    <i class="fa-solid ${ach.icon}"></i>
                </div>
                <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-size: 0.95rem; margin: 0; color: ${ach.unlocked ? 'var(--text-primary)' : 'var(--text-muted)'};">${ach.title}</h4>
                        ${ach.unlocked ? '<span class="badge badge-emerald" style="font-size: 0.65rem; padding: 0.15rem 0.5rem;">Unlocked</span>' : '<span style="font-size: 0.72rem; color: var(--text-muted);"><i class="fa-solid fa-lock"></i></span>'}
                    </div>
                    <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0.2rem 0 0 0; line-height: 1.3;">${ach.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 7. Setup Progress Data Actions (Export / Import / Reset)
    setupDataManagementListeners();
}
window.initDashboard = initDashboard;

// --- Progress Data Management Modal & Controller ---
function setupDataManagementListeners() {
    const exportBtn = document.getElementById('dash-btn-export');
    if (exportBtn) {
        exportBtn.onclick = () => PlacementPrepState.exportProgress();
    }

    const resetBtn = document.getElementById('dash-btn-reset');
    if (resetBtn) {
        resetBtn.onclick = () => {
            if (confirm("Are you sure you want to reset your practice progress? Your bookmarked questions and theme preference will be preserved.")) {
                PlacementPrepState.resetProgress(true);
                initDashboard();
            }
        };
    }

    const importInput = document.getElementById('dash-file-import');
    if (importInput) {
        importInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const success = PlacementPrepState.importProgress(event.target.result);
                if (success) initDashboard();
            };
            reader.readAsText(file);
        };
    }
}

// --- Global Score Summary Modal Controller ---
function showScoreModal(options = {}) {
    const existing = document.getElementById('score-summary-modal');
    if (existing) existing.remove();

    const {
        title = "Practice Set Completed!",
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
        badgeColor = "#f43f5e";
        feedbackMsg = "Review the step-by-step breakdown below and try again to improve.";
    }

    const modal = document.createElement('div');
    modal.id = 'score-summary-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(2, 4, 10, 0.88); z-index: 250000;
        display: flex; align-items: center; justify-content: center;
        backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
        padding: 1.2rem; box-sizing: border-box;
    `;

    modal.innerHTML = `
        <div class="glass-panel" style="width: 100%; max-width: 480px; border-radius: var(--radius-lg); padding: 2.2rem 1.8rem; background: radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.15) 0%, rgba(8, 14, 28, 0.96) 75%); border: 1px solid var(--border-highlight); box-shadow: 0 30px 70px rgba(0,0,0,0.8); text-align: center; display: flex; flex-direction: column; gap: 1.2rem;">
            
            <div style="width: 76px; height: 76px; border-radius: 50%; background: ${badgeColor}20; color: ${badgeColor}; display: flex; align-items: center; justify-content: center; font-size: 2.4rem; margin: 0 auto; border: 2px solid ${badgeColor}50; box-shadow: 0 0 25px ${badgeColor}40;">
                <i class="fa-solid ${badgeIcon}"></i>
            </div>

            <div>
                <h2 style="margin: 0 0 0.3rem; font-size: 1.65rem; font-family: var(--font-heading); font-weight: 800; color: #ffffff;">${title}</h2>
                <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">${feedbackMsg}</p>
            </div>

            <!-- Metric Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; margin: 0.4rem 0;">
                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary); font-family: var(--font-mono);">${scoreCorrect}/${totalQuestions}</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Score</div>
                </div>
                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--success); font-family: var(--font-mono);">${accuracy}%</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Accuracy</div>
                </div>
                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); padding: 0.9rem 0.4rem;">
                    <div style="font-size: 1.4rem; font-weight: 800; color: var(--secondary); font-family: var(--font-mono);">${timeStr}</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-top: 0.2rem;">Time</div>
                </div>
            </div>

            <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem;">
                ${onRetry ? `<button id="modal-retry-btn" class="btn btn-secondary" style="flex: 1;">Retry Set</button>` : ''}
                <button id="modal-close-btn" class="btn btn-primary" style="flex: 1.3;">Review Solutions</button>
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
    if (window.location.href.includes('android_asset') || navigator.userAgent.includes('VetriPathLearnApp')) {
        return;
    }
    if (sessionStorage.getItem('apk_promo_dismissed') === 'true') {
        return;
    }

    setTimeout(() => {
        if (document.getElementById('apk-promo-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'apk-promo-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(2, 4, 10, 0.85); z-index: 999990;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(12px); padding: 1.5rem; box-sizing: border-box;
            animation: fadeIn 0.4s ease;
        `;

        modal.innerHTML = `
            <div class="glass-panel" style="width: 100%; max-width: 460px; border-radius: var(--radius-lg); padding: 2.2rem; border: 1.5px solid var(--border-highlight); background: radial-gradient(circle at top right, rgba(0, 240, 255, 0.18) 0%, rgba(8, 14, 28, 0.98) 80%); box-shadow: 0 25px 60px rgba(0,0,0,0.8); display: flex; flex-direction: column; gap: 1.4rem; text-align: center; position: relative;">
                <button id="apk-modal-close-x" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.06); border: none; color: var(--text-secondary); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1rem; transition: 0.2s;">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div style="width: 68px; height: 68px; border-radius: 20px; background: var(--gradient-primary); color: #030712; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto; box-shadow: 0 0 25px var(--primary-glow-strong);">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>

                <div>
                    <span class="badge badge-cyan" style="margin-bottom: 0.5rem;">Official Android Release</span>
                    <h3 style="margin: 0.4rem 0 0.5rem; font-size: 1.45rem; font-family: var(--font-heading); font-weight: 800; color: #ffffff;">Unlock 100% Offline Access!</h3>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
                        Download the official <strong>VetriPathLearn Android App</strong> for offline practice, instant formula sheets, and zero-distraction preparation.
                    </p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 0.3rem;">
                    <a href="VetriPathLearn.apk" download="VetriPathLearn.apk" id="apk-modal-download-btn" class="btn btn-primary" style="padding: 0.9rem 1.5rem; border-radius: var(--radius-full); font-weight: 800; font-size: 0.98rem; text-decoration: none;">
                        <i class="fa-solid fa-download"></i> Download Android APK
                    </a>
                    <button id="apk-modal-dismiss-btn" style="background: transparent; border: none; color: var(--text-muted); font-size: 0.85rem; cursor: pointer; padding: 0.3rem;">
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
    }, 2000);
}
window.initApkPromoModal = initApkPromoModal;
