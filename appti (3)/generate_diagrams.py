import os
import math
from PIL import Image, ImageDraw, ImageFont

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
        font_header = ImageFont.truetype("arial.ttf", 36)
        font_body = ImageFont.truetype("arial.ttf", 26)
        font_label = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font_title = font_header = font_body = font_label = ImageFont.load_default()
    
    # 1. Draw Title & Underline (Y=60 and Y=100)
    title_text = "VETRIPATH LEVEL 1 DATA FLOW DIAGRAM (DFD)"
    draw_centered_text(draw, title_text, 1200, 60, font_title)
    draw.line([600, 100, 1800, 100], fill=(0, 0, 0), width=4)
    
    # Coordinates of Layout:
    # Candidate (External Entity) -> Y: 600-800, X: 100-400
    # Process 1.0 (Validate Biometrics) -> X: 750, Y: 350
    # Process 2.0 (Access WebView Shell) -> X: 1350, Y: 350
    # Process 3.0 (Load Web Workspace) -> X: 1950, Y: 350
    # Process 4.0 (Enforce Integrity Suite) -> X: 1950, Y: 950
    # Process 5.0 (Synchronize User Logs) -> X: 1350, Y: 950
    # Data Store D1 (LocalStorage DB) -> X: 750, Y: 950
    
    # Draw Candidate Entity (Rectangle) - Using font_body to prevent boundary spill
    draw.rectangle([100, 600, 400, 800], outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "EXTERNAL ENTITY\nCandidate (User)", 250, 700, font_body)
    
    # Draw Process Nodes (Circles)
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
        
    # Draw Data Store D1 (Parallel Lines)
    draw.line([600, 870, 900, 870], fill=(0, 0, 0), width=6)
    draw.line([600, 1030, 900, 1030], fill=(0, 0, 0), width=6)
    draw.line([600, 870, 600, 1030], fill=(0, 0, 0), width=6)
    draw_centered_text(draw, "DATA STORE D1\nLocalStorage State", 750, 950, font_body)
    
    # Route Arrows
    # 1. Candidate -> Process 1.0 (Launch request)
    draw_arrow(draw, (400, 650), (750 - 120, 350 + 120), arrow_size=32, width=4)
    draw_centered_text(draw, "1. Initiate Launch", 510, 520, font_label)
    
    # 2. Process 1.0 -> Process 2.0 (Session ready)
    draw_arrow(draw, (750 + 170, 350), (1350 - 170, 350), arrow_size=32, width=4)
    draw_centered_text(draw, "2. Load WebView", 1050, 300, font_label)
    
    # 3. Process 2.0 -> Process 3.0 (Render Workspace UI)
    draw_arrow(draw, (1350 + 170, 350), (1950 - 170, 350), arrow_size=32, width=4)
    draw_centered_text(draw, "3. Read HTML/JS Assets", 1650, 300, font_label)
    
    # 4. Process 3.0 -> Process 4.0 (Active quiz monitoring)
    draw_arrow(draw, (1950, 350 + 170), (1950, 950 - 170), arrow_size=32, width=4)
    draw_centered_text(draw, "4. Monitor Focus &\nKey Events", 2130, 650, font_label)
    
    # 5. Process 4.0 -> Process 5.0 (Score / violation log submit)
    draw_arrow(draw, (1950 - 170, 950), (1350 + 170, 950), arrow_size=32, width=4)
    draw_centered_text(draw, "5. Submit Violations", 1650, 900, font_label)
    
    # 6. Process 5.0 -> Data Store D1 (Update state)
    draw_arrow(draw, (1350 - 170, 950), (900, 950), arrow_size=32, width=4)
    draw_centered_text(draw, "6. Write State logs", 1120, 900, font_label)
    
    # 7. Data Store D1 -> Process 3.0 (Fetch bookmarks & history)
    # Routed cleanly through bottom/center corridor Y=680 without crossing processes
    draw.line([(750, 870), (750, 680), (1750, 680)], fill=(0, 0, 0), width=4)
    draw_arrow(draw, (1750, 680), (1950 - 120, 350 + 120), arrow_size=32, width=4)
    draw_centered_text(draw, "7. Load History & Bookmarks", 1250, 720, font_label)
    
    # 8. Candidate -> Process 3.0 (User practice/test choices)
    # Routed through top corridor Y=140, completely above all circles (top = 180) and below title line (Y=100)
    # This prevents any vertical overlap with the title line and circles
    draw.line([(250, 600), (250, 140), (1950, 140)], fill=(0, 0, 0), width=4)
    draw_arrow(draw, (1950, 140), (1950, 350 - 170), arrow_size=32, width=4)
    # Centered at Y=160 (exactly in the gap between the corridor line and circles top)
    draw_centered_text(draw, "8. Select modules & submit answers", 1100, 160, font_label)
    
    # Resize to final 1200x800
    img_resized = img.resize((1200, 800), Image.Resampling.LANCZOS)
    os.makedirs(r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti\images", exist_ok=True)
    img_resized.save(r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti\images\dfd_diagram.png")
    print("Clean Level-1 DFD diagram generated successfully.")

def generate_er():
    width, height = 2400, 1600
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    try:
        font_title = ImageFont.truetype("arial.ttf", 48)
        font_header = ImageFont.truetype("arial.ttf", 28)
        font_body = ImageFont.truetype("arial.ttf", 26)
        font_label = ImageFont.truetype("arial.ttf", 24)
    except IOError:
        font_title = font_header = font_body = font_label = ImageFont.load_default()
        
    # Draw Title
    title_text = "VETRIPATH LOCAL STORAGE DATABASE SCHEMA (ER DIAGRAM)"
    draw_centered_text(draw, title_text, 1200, 80, font_title)
    draw.line([600, 120, 1800, 120], fill=(0, 0, 0), width=4)
    
    # 1. USER_STATE (ROOT) -> X: 100-650, Y: 250-500
    draw.rectangle([100, 250, 650, 500], outline=(0, 0, 0), width=6)
    draw.rectangle([100, 250, 650, 310], fill=(230, 230, 230), outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "placement_prep_state (ROOT)", 375, 280, font_header)
    
    draw.text((120, 340), "• theme : String ('dark' | 'light')", fill=(0, 0, 0), font=font_body)
    draw.text((120, 390), "• bookmarks : Array<JSON_Object>", fill=(0, 0, 0), font=font_body)
    draw.text((120, 440), "• wrongAnswers : Array<String>", fill=(0, 0, 0), font=font_body)
    
    # 2. BOOKMARK_ITEM (JSON) -> X: 850-1400, Y: 250-650
    draw.rectangle([850, 250, 1400, 650], outline=(0, 0, 0), width=6)
    draw.rectangle([850, 250, 1400, 310], fill=(230, 230, 230), outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "BOOKMARK_ITEM (JSON)", 1125, 280, font_header)
    
    fields_bookmark = [
        "• id : String (PK)",
        "• subject : String",
        "• topic : String",
        "• question : String",
        "• options : Array<String>",
        "• answer : String",
        "• explanation : String"
    ]
    for idx, f in enumerate(fields_bookmark):
        draw.text((870, 340 + idx * 40), f, fill=(0, 0, 0), font=font_body)
        
    # 3. WRONG_ANSWER (Retry Queue) -> X: 100-650, Y: 800-1050
    draw.rectangle([100, 800, 650, 1050], outline=(0, 0, 0), width=6)
    draw.rectangle([100, 800, 650, 860], fill=(230, 230, 230), outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "WRONG_ANSWER (Retry Queue)", 375, 830, font_header)
    
    draw.text((120, 890), "• questionId : String (FK, PK)", fill=(0, 0, 0), font=font_body)
    draw.text((120, 940), "• topic : String", fill=(0, 0, 0), font=font_body)
    draw.text((120, 990), "• timestamp : Long", fill=(0, 0, 0), font=font_body)

    # 4. HISTORY_LOG (Solved Queue) -> X: 850-1400, Y: 800-1150
    draw.rectangle([850, 800, 1400, 1150], outline=(0, 0, 0), width=6)
    draw.rectangle([850, 800, 1400, 860], fill=(230, 230, 230), outline=(0, 0, 0), width=6)
    draw_centered_text(draw, "HISTORY_LOG (Solved Queue)", 1125, 830, font_header)
    
    fields_history = [
        "• questionId : String (FK)",
        "• subject : String",
        "• topic : String",
        "• correct : Boolean",
        "• timeSpent : Int (Seconds)",
        "• timestamp : Long"
    ]
    for idx, f in enumerate(fields_history):
        draw.text((870, 890 + idx * 40), f, fill=(0, 0, 0), font=font_body)
        
    # Relationship Connectors
    # 1. Root -> Bookmarks (1 to N)
    draw.line([650, 375, 850, 375], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "1", 670, 345, font_label)
    draw.line([830, 360, 850, 375], fill=(0, 0, 0), width=4)
    draw.line([830, 390, 850, 375], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "0..N", 800, 345, font_label)
    draw_centered_text(draw, "embeds", 750, 330, font_label)
    
    # 2. Root -> Wrong Answers (1 to N)
    draw.line([375, 500, 375, 800], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "1", 400, 525, font_label)
    draw.line([360, 780, 375, 800], fill=(0, 0, 0), width=4)
    draw.line([390, 780, 375, 800], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "0..N", 410, 765, font_label)
    draw_centered_text(draw, "stores IDs", 280, 650, font_label)

    # 3. Root -> History Log (1 to N)
    draw.line([650, 437, 750, 437], fill=(0, 0, 0), width=4)
    draw.line([750, 437, 750, 975], fill=(0, 0, 0), width=4)
    draw.line([750, 975, 850, 975], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "1", 670, 407, font_label)
    draw.line([830, 960, 850, 975], fill=(0, 0, 0), width=4)
    draw.line([830, 990, 850, 975], fill=(0, 0, 0), width=4)
    draw_centered_text(draw, "0..N", 800, 945, font_label)
    draw_centered_text(draw, "appends logs", 790, 680, font_label)
    
    # Resize to final 1200x800
    img_resized = img.resize((1200, 800), Image.Resampling.LANCZOS)
    img_resized.save(r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti\images\er_diagram.png")
    print("Clean ER database schema diagram generated successfully.")

if __name__ == "__main__":
    generate_dfd()
    generate_er()
