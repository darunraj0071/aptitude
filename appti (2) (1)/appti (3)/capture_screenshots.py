import os
import subprocess
import time

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
appti_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti"
output_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\screenshots"
anim_css_path = os.path.join(appti_dir, "css", "animations.css")

os.makedirs(output_dir, exist_ok=True)

# 1. Read animations.css content
with open(anim_css_path, "r", encoding="utf-8") as f:
    original_css = f.read()

# 2. Append temporary rule to hide loading screen overlay during screenshot capture
override_rule = "\n\n/* TEMPORARY SCREENSHOT OVERRIDE */\n.loading-screen { display: none !important; opacity: 0 !important; visibility: hidden !important; }\n"

try:
    with open(anim_css_path, "w", encoding="utf-8") as f:
        f.write(original_css + override_rule)
    print("Temporarily disabled .loading-screen overlay for full UI capture.")

    pages = [
        "index.html",
        "aptitude.html",
        "reasoning.html",
        "verbal.html",
        "coding.html",
        "practice.html",
        "mocktest.html",
        "bookmarks.html",
        "roadmap.html",
        "search.html",
        "about.html",
        "contact.html"
    ]

    print("Capturing full website screenshots for all 12 web pages...")

    for page in pages:
        page_name = os.path.splitext(page)[0]
        html_file = os.path.join(appti_dir, page)
        out_png = os.path.join(output_dir, f"snap_{page_name}.png")
        
        file_url = "file:///" + html_file.replace("\\", "/")
        
        cmd = [
            edge_path,
            "--headless=new",
            "--disable-gpu",
            f"--screenshot={out_png}",
            "--window-size=1280,850",
            file_url
        ]
        
        print(f"Capturing screenshot for {page}...")
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        time.sleep(0.5)

    print("All 12 full page screenshots captured successfully!")

finally:
    # Restoring original animations.css
    with open(anim_css_path, "w", encoding="utf-8") as f:
        f.write(original_css)
    print("Restored original animations.css successfully.")
