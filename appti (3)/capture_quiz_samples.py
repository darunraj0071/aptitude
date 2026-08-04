import os
import subprocess
import time

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
appti_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti"
output_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\screenshots"
anim_css_path = os.path.join(appti_dir, "css", "animations.css")
quiz_js_path = os.path.join(appti_dir, "js", "quiz.js")
coding_js_path = os.path.join(appti_dir, "js", "coding.js")

os.makedirs(output_dir, exist_ok=True)

# 1. Backup original files
with open(anim_css_path, "r", encoding="utf-8") as f:
    original_css = f.read()

with open(quiz_js_path, "r", encoding="utf-8") as f:
    original_quiz_js = f.read()

# 2. Append temporary rule to hide loading screen overlay
override_css = "\n\n/* TEMPORARY SCREENSHOT OVERRIDE */\n.loading-screen { display: none !important; opacity: 0 !important; visibility: hidden !important; }\n"

# 3. Inject auto-attend quiz logic into quiz.js: auto switch to practice tab & select option choice
auto_attend_js = """

/* AUTO ATTEND QUIZ FOR SCREENSHOT CAPTURE */
window.addEventListener('load', () => {
    setTimeout(() => {
        const tabPractice = document.getElementById('tab-practice');
        if (tabPractice) {
            tabPractice.click();
            setTimeout(() => {
                const optionBtns = document.querySelectorAll('.option-card, .option-btn, input[type="radio"]');
                if (optionBtns.length > 1) {
                    optionBtns[1].click();
                }
                const checkBtn = document.getElementById('check-ans-btn') || document.querySelector('.btn-check-answer');
                if (checkBtn) checkBtn.click();
                const solBtn = document.getElementById('show-sol-btn') || document.querySelector('.btn-solution');
                if (solBtn) solBtn.click();
            }, 400);
        }
    }, 300);
});
"""

try:
    with open(anim_css_path, "w", encoding="utf-8") as f:
        f.write(original_css + override_css)

    with open(quiz_js_path, "w", encoding="utf-8") as f:
        f.write(original_quiz_js + auto_attend_js)

    quiz_samples = [
        ("aptitude.html?topic=percentage", "quiz_sample_aptitude.png", "Quantitative Aptitude Active Quiz Sample"),
        ("reasoning.html?topic=blood_relations", "quiz_sample_reasoning.png", "Logical Reasoning Active Quiz Sample"),
        ("verbal.html?topic=grammar", "quiz_sample_verbal.png", "Verbal Ability Active Quiz Sample"),
        ("coding.html", "quiz_sample_coding.png", "Interactive JavaScript Coding Workstation Active Sample"),
        ("mocktest.html", "quiz_sample_mocktest.png", "Full-Length Timed Exam Simulator Active Quiz Sample")
    ]

    print("Capturing 5 ACTIVE QUIZ ATTENDING Screenshots with selected answers & solutions...")

    for rel_url, filename, title in quiz_samples:
        out_png = os.path.join(output_dir, filename)
        full_path = os.path.join(appti_dir, rel_url)
        file_url = "file:///" + full_path.replace("\\", "/")
        
        cmd = [
            edge_path,
            "--headless=new",
            "--disable-gpu",
            f"--screenshot={out_png}",
            "--window-size=1280,850",
            file_url
        ]
        
        print(f"Capturing: {title} ({filename})...")
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        time.sleep(1.0)

    print("All 5 Active Quiz Attending screenshots captured successfully!")

finally:
    with open(anim_css_path, "w", encoding="utf-8") as f:
        f.write(original_css)

    with open(quiz_js_path, "w", encoding="utf-8") as f:
        f.write(original_quiz_js)
        
    print("Restored original source files.")
