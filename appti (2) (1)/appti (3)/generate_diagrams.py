import os
import math
from PIL import Image, ImageDraw, ImageFont

img_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti\images"
os.makedirs(img_dir, exist_ok=True)

def draw_arrow(draw, start, end, arrow_size=16, width=3, color=(0, 0, 0)):
    x1, y1 = start
    x2, y2 = end
    draw.line([x1, y1, x2, y2], fill=color, width=width)
    
    dx = x2 - x1
    dy = y2 - y1
    angle = math.atan2(dy, dx)
    
    p1 = (x2 - arrow_size * math.cos(angle - math.pi/6), y2 - arrow_size * math.sin(angle - math.pi/6))
    p2 = (x2 - arrow_size * math.cos(angle + math.pi/6), y2 - arrow_size * math.sin(angle + math.pi/6))
    
    draw.polygon([end, p1, p2], fill=color)

def draw_centered_text(draw, text, x, y, font, fill=(0, 0, 0)):
    lines = text.split('\n')
    line_heights = []
    line_widths = []
    
    for l in lines:
        try:
            bbox = font.getbbox(l)
            w = bbox[2] - bbox[0]
            h = bbox[3] - bbox[1]
        except AttributeError:
            try:
                w, h = font.getsize(l)
            except AttributeError:
                w, h = len(l) * 14, 28
        line_widths.append(w)
        line_heights.append(h)
        
    total_height = sum(line_heights) + 12 * (len(lines) - 1)
    current_y = y - total_height / 2
    
    for idx, l in enumerate(lines):
        w = line_widths[idx]
        h = line_heights[idx]
        draw.text((x - w/2, current_y), l, fill=fill, font=font)
        current_y += h + 12

def generate_dfd():
    width, height = 2400, 1600
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    try:
        font_title = ImageFont.truetype("arial.ttf", 48)
        font_body = ImageFont.truetype("arial.ttf", 26)
        font_label = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font_title = font_body = font_label = ImageFont.load_default()
    
    title_text = "VETRIPATH LEVEL 1 DATA FLOW DIAGRAM (DFD)"
    draw_centered_text(draw, title_text, 1200, 60, font_title)
    draw.line([600, 100, 1800, 100], fill=(0, 0, 0), width=4)
    
    draw.rectangle([100, 600, 400, 800], outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "EXTERNAL ENTITY\nCandidate (User)", 250, 700, font_body)
    
    processes = [
        ("1.0", "Validate Biometric\nCredentials", 750, 350),
        ("2.0", "Access WebView\nWorkstation", 1350, 350),
        ("3.0", "Execute Practice\n& Test Simulator", 1950, 350),
        ("4.0", "Enforce Exam\nIntegrity Suite", 1950, 950),
        ("5.0", "Synchronize\nUser Logs", 1350, 950)
    ]
    
    for num, text, x, y in processes:
        draw.ellipse([x - 170, y - 170, x + 170, y + 170], outline=(0, 0, 0), width=6)
        draw_centered_text(draw, f"Process {num}\n\n{text}", x, y, font_body)
        
    draw.line([600, 870, 900, 870], fill=(0, 0, 0), width=6)
    draw.line([600, 1030, 900, 1030], fill=(0, 0, 0), width=6)
    draw.line([600, 870, 600, 1030], fill=(0, 0, 0), width=6)
    draw_centered_text(draw, "DATA STORE D1\nLocalStorage State", 750, 950, font_body)
    
    draw_arrow(draw, (400, 650), (750 - 120, 350 + 120), arrow_size=32, width=4)
    draw_centered_text(draw, "1. Initiate Launch", 510, 520, font_label)
    
    draw_arrow(draw, (750 + 170, 350), (1350 - 170, 350), arrow_size=32, width=4)
    draw_centered_text(draw, "2. Load WebView", 1050, 300, font_label)
    
    draw_arrow(draw, (1350 + 170, 350), (1950 - 170, 350), arrow_size=32, width=4)
    draw_centered_text(draw, "3. Read HTML/JS Assets", 1650, 300, font_label)
    
    draw_arrow(draw, (1950, 350 + 170), (1950, 950 - 170), arrow_size=32, width=4)
    draw_centered_text(draw, "4. Monitor Focus &\nKey Events", 2130, 650, font_label)
    
    draw_arrow(draw, (1950 - 170, 950), (1350 + 170, 950), arrow_size=32, width=4)
    draw_centered_text(draw, "5. Submit Violations", 1650, 900, font_label)
    
    draw_arrow(draw, (1350 - 170, 950), (900, 950), arrow_size=32, width=4)
    draw_centered_text(draw, "6. Write State logs", 1120, 900, font_label)
    
    draw.line([(750, 870), (750, 680), (1750, 680)], fill=(0, 0, 0), width=4)
    draw_arrow(draw, (1750, 680), (1950 - 120, 350 + 120), arrow_size=32, width=4)
    draw_centered_text(draw, "7. Load History & Bookmarks", 1250, 720, font_label)
    
    draw.line([(250, 600), (250, 140), (1950, 140)], fill=(0, 0, 0), width=4)
    draw_arrow(draw, (1950, 140), (1950, 350 - 170), arrow_size=32, width=4)
    draw_centered_text(draw, "8. Select modules & submit answers", 1100, 160, font_label)
    
    img_resized = img.resize((1200, 800), Image.Resampling.LANCZOS)
    img_resized.save(os.path.join(img_dir, "dfd_diagram.png"))
    print("Clean Level-1 DFD diagram generated successfully.")

def generate_er():
    width, height = 2400, 1600
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    try:
        font_title = ImageFont.truetype("arial.ttf", 48)
        font_body = ImageFont.truetype("arial.ttf", 26)
        font_label = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font_title = font_body = font_label = ImageFont.load_default()
    
    title_text = "VETRIPATH LOCALSTORAGE ENTITY-RELATIONSHIP (ER) DIAGRAM"
    draw_centered_text(draw, title_text, 1200, 60, font_title)
    draw.line([400, 100, 2000, 100], fill=(0, 0, 0), width=4)
    
    draw.rectangle([1000, 700, 1400, 900], outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "ENTITY\nUSER STATE DB\n(LocalStorage)", 1200, 800, font_body)
    
    attributes = [
        ("theme", 400, 350),
        ("bookmarks", 1200, 300),
        ("wrongAnswers", 2000, 350),
        ("history", 2000, 1250),
        ("roadmapProgress", 1200, 1300),
        ("feedbackLogs", 400, 1250)
    ]
    
    for name, x, y in attributes:
        draw.ellipse([x - 180, y - 90, x + 180, y + 90], outline=(0, 0, 0), width=5)
        draw_centered_text(draw, f"Attribute:\n{name}", x, y, font_label)
        
        dx = 1200 - x
        dy = 800 - y
        angle = math.atan2(dy, dx)
        
        rx = x + 180 * math.cos(angle)
        ry = y + 90 * math.sin(angle)
        
        ex = 1200 - 200 * math.cos(angle)
        ey = 800 - 100 * math.sin(angle)
        
        draw.line([rx, ry, ex, ey], fill=(0, 0, 0), width=4)
        
    img_resized = img.resize((1200, 800), Image.Resampling.LANCZOS)
    img_resized.save(os.path.join(img_dir, "er_diagram.png"))
    print("Clean ER database schema diagram generated successfully.")

def generate_architecture():
    width, height = 2400, 1600
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    try:
        font_title = ImageFont.truetype("arial.ttf", 48)
        font_body = ImageFont.truetype("arial.ttf", 26)
        font_label = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font_title = font_body = font_label = ImageFont.load_default()
    
    title_text = "VETRIPATH HYBRID NATIVE SYSTEM ARCHITECTURE DIAGRAM"
    draw_centered_text(draw, title_text, 1200, 60, font_title)
    draw.line([400, 100, 2000, 100], fill=(0, 0, 0), width=4)

    # Layer 1: Client UI Layer
    draw.rectangle([200, 250, 2200, 500], outline=(127, 90, 240), width=6)
    draw_centered_text(draw, "USER INTERFACE CLIENT LAYER\nAndroid Screen Viewports (5.0\" to 10.1\") | Touch Gestures | Keyboard Listener", 1200, 375, font_body)

    # Layer 2: Native Android Shell & Biometrics
    draw.rectangle([200, 600, 2200, 850], outline=(44, 182, 125), width=6)
    draw_centered_text(draw, "NATIVE ANDROID CONTAINER LAYER (Kotlin 1.9 & Jetpack Compose)\nMainActivity Shell | BiometricPrompt Sensor Lock | FLAG_SECURE Window Protection | BackHandler Router", 1200, 725, font_body)

    # Layer 3: WebView Web Engine Sandbox
    draw.rectangle([200, 950, 2200, 1200], outline=(56, 189, 248), width=6)
    draw_centered_text(draw, "WEBVIEW HOST & JAVASCRIPT SANDBOX ENGINE\nHTML5 UI Templates | Vanilla CSS3 Glassmorphism | Local JS Evaluator | Anti-Cheating Blur Monitor", 1200, 1075, font_body)

    # Layer 4: Offline State Database
    draw.rectangle([200, 1300, 2200, 1500], outline=(127, 90, 240), width=6)
    draw_centered_text(draw, "OFFLINE LOCALSTORAGE DATABASE LAYER\nplacement_prep_state JSON Schema | Bookmarks | Wrong Answers Queue | Solved Question Logs", 1200, 1400, font_body)

    # Arrows connecting layers
    draw_arrow(draw, (1200, 500), (1200, 600), arrow_size=32, width=5)
    draw_arrow(draw, (1200, 850), (1200, 950), arrow_size=32, width=5)
    draw_arrow(draw, (1200, 1200), (1200, 1300), arrow_size=32, width=5)

    img_resized = img.resize((1200, 800), Image.Resampling.LANCZOS)
    img_resized.save(os.path.join(img_dir, "architecture_diagram.png"))
    print("Clean Architecture diagram generated successfully.")

if __name__ == "__main__":
    generate_dfd()
    generate_er()
    generate_architecture()
