import os
import math
from PIL import Image, ImageDraw, ImageFont

img_dir = r"c:\Users\sanja\Downloads\appti (2) (1)\appti (3)\appti\images\mca"
os.makedirs(img_dir, exist_ok=True)

def draw_arrow(draw, start, end, arrow_size=16, width=3, color=(30, 41, 59)):
    x1, y1 = start
    x2, y2 = end
    draw.line([x1, y1, x2, y2], fill=color, width=width)
    dx = x2 - x1
    dy = y2 - y1
    angle = math.atan2(dy, dx)
    p1 = (x2 - arrow_size * math.cos(angle - math.pi/6), y2 - arrow_size * math.sin(angle - math.pi/6))
    p2 = (x2 - arrow_size * math.cos(angle + math.pi/6), y2 - arrow_size * math.sin(angle + math.pi/6))
    draw.polygon([end, p1, p2], fill=color)

def draw_centered_text(draw, text, x, y, font, fill=(30, 41, 59)):
    lines = text.split('\n')
    line_heights = []
    line_widths = []
    for l in lines:
        try:
            bbox = font.getbbox(l)
            w = bbox[2] - bbox[0]
            h = bbox[3] - bbox[1]
        except AttributeError:
            w, h = len(l) * 12, 24
        line_widths.append(w)
        line_heights.append(h)
        
    total_height = sum(line_heights) + 8 * (len(lines) - 1)
    current_y = y - total_height / 2
    for idx, l in enumerate(lines):
        w = line_widths[idx]
        h = line_heights[idx]
        draw.text((x - w/2, current_y), l, fill=fill, font=font)
        current_y += h + 8

def get_fonts():
    try:
        font_title = ImageFont.truetype("arial.ttf", 36)
        font_header = ImageFont.truetype("arial.ttf", 24)
        font_body = ImageFont.truetype("arial.ttf", 20)
        font_sm = ImageFont.truetype("arial.ttf", 16)
    except IOError:
        font_title = font_header = font_body = font_sm = ImageFont.load_default()
    return font_title, font_header, font_body, font_sm

def generate_use_case():
    width, height = 1800, 1200
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - USE CASE DIAGRAM", width/2, 50, f_title, (124, 58, 237))
    draw.rectangle([350, 120, 1450, 1150], outline=(124, 58, 237), width=4)
    draw.text((370, 135), "VetriPath Learn System Boundary", fill=(124, 58, 237), font=f_hdr)
    
    # Actors
    # Student (Left)
    draw.ellipse([120, 300, 180, 360], outline=(30, 41, 59), width=3) # Head
    draw.line([150, 360, 150, 480], fill=(30, 41, 59), width=4) # Body
    draw.line([100, 400, 200, 400], fill=(30, 41, 59), width=4) # Arms
    draw.line([150, 480, 100, 580], fill=(30, 41, 59), width=4) # Left leg
    draw.line([150, 480, 200, 580], fill=(30, 41, 59), width=4) # Right leg
    draw_centered_text(draw, "Student / Job Seeker\n(Primary Actor)", 150, 620, f_body)
    
    # Admin (Right)
    draw.ellipse([1620, 300, 1680, 360], outline=(30, 41, 59), width=3)
    draw.line([1650, 360, 1650, 480], fill=(30, 41, 59), width=4)
    draw.line([1600, 400, 1700, 400], fill=(30, 41, 59), width=4)
    draw.line([1650, 480, 1600, 580], fill=(30, 41, 59), width=4)
    draw.line([1650, 480, 1700, 580], fill=(30, 41, 59), width=4)
    draw_centered_text(draw, "System Administrator\n(Secondary Actor)", 1650, 620, f_body)
    
    use_cases_left = [
        ("UC-1: Register & Authenticate", 550, 220),
        ("UC-2: Access Dashboard", 550, 320),
        ("UC-3: Aptitude & Reasoning Practice", 550, 420),
        ("UC-4: Coding Workstation Practice", 550, 520),
        ("UC-5: AI Career Guidance", 550, 620),
        ("UC-6: AI Resume Analyzer & Builder", 550, 720),
        ("UC-7: Mock Interview Simulator", 550, 820),
        ("UC-8: Company Preparation Modules", 550, 920),
        ("UC-9: Progress & Performance Tracking", 550, 1020),
    ]
    
    use_cases_right = [
        ("UC-10: Manage Questions & Courses", 1250, 320),
        ("UC-11: Manage User Profiles & Roles", 1250, 480),
        ("UC-12: System Analytics & Reports", 1250, 640),
        ("UC-13: Broadcast Notifications", 1250, 800),
        ("UC-14: Review Feedback & Logs", 1250, 960),
    ]
    
    for uc, x, y in use_cases_left:
        draw.ellipse([x - 170, y - 35, x + 170, y + 35], outline=(16, 185, 129), fill=(236, 253, 245), width=3)
        draw_centered_text(draw, uc, x, y, f_sm, (6, 78, 59))
        draw.line([200, 440, x - 170, y], fill=(148, 163, 184), width=2)
        
    for uc, x, y in use_cases_right:
        draw.ellipse([x - 170, y - 35, x + 170, y + 35], outline=(59, 130, 246), fill=(239, 246, 255), width=3)
        draw_centered_text(draw, uc, x, y, f_sm, (30, 58, 138))
        draw.line([1600, 440, x + 170, y], fill=(148, 163, 184), width=2)
        
    img.save(os.path.join(img_dir, "use_case_diagram.png"))

def generate_activity():
    width, height = 1600, 1200
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - ACTIVITY DIAGRAM (AI CAREER & PREPARATION FLOW)", width/2, 50, f_title, (124, 58, 237))
    
    # Start Node
    draw.ellipse([770, 120, 830, 180], fill=(30, 41, 59))
    draw_centered_text(draw, "Start", 800, 100, f_sm)
    
    steps = [
        ("User Logs in / Accesses Portal", 800, 240, "rect"),
        ("Select Preparation Mode", 800, 360, "rect"),
        ("Is AI Guidance Selected?", 800, 490, "diamond"),
    ]
    
    draw_arrow(draw, (800, 180), (800, 210))
    draw.rectangle([650, 210, 950, 270], outline=(124, 58, 237), fill=(245, 243, 255), width=3)
    draw_centered_text(draw, "User Logs in / Selects Portal", 800, 240, f_body)
    
    draw_arrow(draw, (800, 270), (800, 330))
    draw.rectangle([650, 330, 950, 390], outline=(124, 58, 237), fill=(245, 243, 255), width=3)
    draw_centered_text(draw, "Select Module / Mode", 800, 360, f_body)
    
    draw_arrow(draw, (800, 390), (800, 440))
    # Decision Diamond
    draw.polygon([(800, 440), (960, 490), (800, 540), (640, 490)], outline=(245, 158, 11), fill=(254, 243, 199), width=3)
    draw_centered_text(draw, "AI Career Guidance?", 800, 490, f_sm)
    
    # YES Branch (Left) -> AI Flow
    draw_arrow(draw, (640, 490), (450, 490))
    draw_centered_text(draw, "Yes", 540, 470, f_sm)
    draw_arrow(draw, (450, 490), (450, 570))
    draw.rectangle([300, 570, 600, 630], outline=(16, 185, 129), fill=(236, 253, 245), width=3)
    draw_centered_text(draw, "Input Skills & Academics", 450, 600, f_body)
    
    draw_arrow(draw, (450, 630), (450, 690))
    draw.rectangle([300, 690, 600, 750], outline=(16, 185, 129), fill=(236, 253, 245), width=3)
    draw_centered_text(draw, "Scikit-Learn Model Inference", 450, 720, f_body)
    
    draw_arrow(draw, (450, 750), (450, 810))
    draw.rectangle([300, 810, 600, 870], outline=(16, 185, 129), fill=(236, 253, 245), width=3)
    draw_centered_text(draw, "Render Career Roadmap & Recommendations", 450, 840, f_sm)
    
    # NO Branch (Right) -> Aptitude / Coding / Resume Flow
    draw_arrow(draw, (960, 490), (1150, 490))
    draw_centered_text(draw, "No (Practice / Resume)", 1050, 470, f_sm)
    draw_arrow(draw, (1150, 490), (1150, 570))
    draw.rectangle([1000, 570, 1300, 630], outline=(59, 130, 246), fill=(239, 246, 255), width=3)
    draw_centered_text(draw, "Practice Aptitude / Coding / Resume", 1150, 600, f_sm)
    
    draw_arrow(draw, (1150, 630), (1150, 690))
    draw.rectangle([1000, 690, 1300, 750], outline=(59, 130, 246), fill=(239, 246, 255), width=3)
    draw_centered_text(draw, "Submit Answers / Evaluate Code", 1150, 720, f_body)
    
    draw_arrow(draw, (1150, 750), (1150, 810))
    draw.rectangle([1000, 810, 1300, 870], outline=(59, 130, 246), fill=(239, 246, 255), width=3)
    draw_centered_text(draw, "Calculate Score & Store Results", 1150, 840, f_body)
    
    # Merge
    draw.line([450, 870, 450, 930], fill=(30, 41, 59), width=3)
    draw.line([1150, 870, 1150, 930], fill=(30, 41, 59), width=3)
    draw.line([450, 930, 1150, 930], fill=(30, 41, 59), width=3)
    draw_arrow(draw, (800, 930), (800, 980))
    
    draw.rectangle([650, 980, 950, 1040], outline=(124, 58, 237), fill=(245, 243, 255), width=3)
    draw_centered_text(draw, "Update Analytics Dashboard", 800, 1010, f_body)
    
    draw_arrow(draw, (800, 1040), (800, 1090))
    # End Node
    draw.ellipse([770, 1090, 830, 1150], outline=(30, 41, 59), width=3)
    draw.ellipse([780, 1100, 820, 1140], fill=(30, 41, 59))
    draw_centered_text(draw, "End", 800, 1165, f_sm)
    
    img.save(os.path.join(img_dir, "activity_diagram.png"))

def generate_sequence():
    width, height = 1600, 1100
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - SEQUENCE DIAGRAM (AI PREDICTION & EVALUATION)", width/2, 50, f_title, (124, 58, 237))
    
    lifelines = [
        ("User (Client UI)", 250),
        ("Flask API Controller", 600),
        ("Scikit-Learn ML Engine", 950),
        ("SQLite Database", 1300),
    ]
    
    for title, x in lifelines:
        draw.rectangle([x - 120, 120, x + 120, 170], outline=(124, 58, 237), fill=(245, 243, 255), width=3)
        draw_centered_text(draw, title, x, 145, f_body)
        draw.line([x, 170, x, 1000], fill=(148, 163, 184), width=2)
        
    messages = [
        (1, 250, 600, 240, "1. POST /api/ai/career-predict (skills, gpa, domain)"),
        (2, 600, 950, 320, "2. Pass Feature Vector (Pandas/NumPy)"),
        (3, 950, 950, 400, "3. Joblib Model Load & Predict()"),
        (4, 950, 600, 480, "4. Return Career Stream & Match %", True),
        (5, 600, 1300, 560, "5. INSERT INTO Results (user_id, stream, score)"),
        (6, 1300, 600, 640, "6. DB Commit & Return Row ID", True),
        (7, 600, 250, 720, "7. HTTP 200 OK JSON Response", True),
        (8, 250, 250, 800, "8. Render Interactive Visual Chart & Roadmap"),
    ]
    
    for idx, x1, x2, y, label, *is_dashed in messages:
        color = (16, 185, 129) if is_dashed else (30, 41, 59)
        if x1 == x2: # Self call
            draw.rectangle([x1, y, x1 + 180, y + 40], outline=(59, 130, 246), fill=(239, 246, 255), width=2)
            draw_centered_text(draw, label, x1 + 90, y + 20, f_sm)
        else:
            if is_dashed and is_dashed[0]:
                # Dashed line
                for dx in range(min(x1, x2), max(x1, x2), 15):
                    draw.line([dx, y, min(dx+8, max(x1, x2)), y], fill=color, width=3)
                draw_arrow(draw, (x1 + 20 if x1 < x2 else x1 - 20, y), (x2, y), color=color)
            else:
                draw_arrow(draw, (x1, y), (x2, y), color=color)
            draw_centered_text(draw, label, (x1 + x2)/2, y - 18, f_sm, fill=color)
            
    img.save(os.path.join(img_dir, "sequence_diagram.png"))

def generate_dfd_level0():
    width, height = 1400, 900
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - LEVEL 0 CONTEXT DFD", width/2, 50, f_title, (124, 58, 237))
    
    # External Entities
    # Student
    draw.rectangle([100, 380, 320, 520], outline=(30, 41, 59), fill=(241, 245, 249), width=4)
    draw_centered_text(draw, "EXTERNAL ENTITY\nStudent / Candidate", 210, 450, f_hdr)
    
    # Central Process
    draw.ellipse([500, 300, 900, 600], outline=(124, 58, 237), fill=(245, 243, 255), width=5)
    draw_centered_text(draw, "0.0\nVetriPath Learn\nAI Placement & Guidance\nPlatform System", 700, 450, f_hdr)
    
    # Admin
    draw.rectangle([1080, 380, 1300, 520], outline=(30, 41, 59), fill=(241, 245, 249), width=4)
    draw_centered_text(draw, "EXTERNAL ENTITY\nAdministrator", 1190, 450, f_hdr)
    
    # Flows Student <-> Central
    draw_arrow(draw, (320, 410), (500, 410))
    draw_centered_text(draw, "Login Data, Quiz Responses, Resume, Skills", 410, 390, f_sm)
    
    draw_arrow(draw, (500, 490), (320, 490))
    draw_centered_text(draw, "Career Insights, Resume Score, Test Results", 410, 510, f_sm)
    
    # Flows Admin <-> Central
    draw_arrow(draw, (1080, 410), (900, 410))
    draw_centered_text(draw, "Course Content, Questions, User Management", 990, 390, f_sm)
    
    draw_arrow(draw, (900, 490), (1080, 490))
    draw_centered_text(draw, "Analytics Reports, System Logs", 990, 510, f_sm)
    
    img.save(os.path.join(img_dir, "dfd_level0.png"))

def generate_dfd_level1():
    width, height = 1800, 1200
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - LEVEL 1 DATA FLOW DIAGRAM (DFD)", width/2, 50, f_title, (124, 58, 237))
    
    # Entities
    draw.rectangle([50, 500, 250, 620], outline=(30, 41, 59), fill=(241, 245, 249), width=4)
    draw_centered_text(draw, "Student", 150, 560, f_hdr)
    
    processes = [
        ("1.0", "User Authentication &\nSession Management", 500, 200),
        ("2.0", "Aptitude & Coding\nEvaluation Engine", 500, 440),
        ("3.0", "AI Career Guidance &\nRecommendation System", 500, 680),
        ("4.0", "AI Resume Analyzer &\nATS Scoring Engine", 500, 920),
        ("5.0", "Admin Management &\nSystem Analytics", 1200, 560),
    ]
    
    for num, title, x, y in processes:
        draw.ellipse([x - 140, y - 90, x + 140, y + 90], outline=(124, 58, 237), fill=(245, 243, 255), width=4)
        draw_centered_text(draw, f"Process {num}\n{title}", x, y, f_body)
        
    # Data Stores
    datastores = [
        ("D1: Users Table", 900, 200),
        ("D2: Questions & Courses", 900, 440),
        ("D3: Results & Analytics", 900, 680),
        ("D4: Resume Data", 900, 920),
    ]
    
    for ds, x, y in datastores:
        draw.rectangle([x - 120, y - 35, x + 120, y + 35], outline=(16, 185, 129), fill=(236, 253, 245), width=3)
        draw_centered_text(draw, ds, x, y, f_body, (6, 78, 59))
        
    # Student connections
    draw_arrow(draw, (250, 530), (360, 200))
    draw_arrow(draw, (250, 550), (360, 440))
    draw_arrow(draw, (250, 570), (360, 680))
    draw_arrow(draw, (250, 590), (360, 920))
    
    # Process to Data Store connections
    draw_arrow(draw, (640, 200), (780, 200))
    draw_arrow(draw, (640, 440), (780, 440))
    draw_arrow(draw, (640, 680), (780, 680))
    draw_arrow(draw, (640, 920), (780, 920))
    
    # Admin to P5.0
    draw.rectangle([1550, 500, 1750, 620], outline=(30, 41, 59), fill=(241, 245, 249), width=4)
    draw_centered_text(draw, "Admin", 1650, 560, f_hdr)
    draw_arrow(draw, (1550, 560), (1340, 560))
    draw_arrow(draw, (1200, 470), (1020, 230))
    draw_arrow(draw, (1200, 500), (1020, 440))
    
    img.save(os.path.join(img_dir, "dfd_level1.png"))

def generate_architecture():
    width, height = 1600, 1100
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - SYSTEM ARCHITECTURE DIAGRAM", width/2, 50, f_title, (124, 58, 237))
    
    layers = [
        ("1. Presentation Layer (Frontend)", 150, (239, 246, 255), (59, 130, 246), "HTML5 | CSS3 | JavaScript ES6 | Tailwind CSS | Responsive UI Components"),
        ("2. Application Layer (Backend API)", 380, (245, 243, 255), (124, 58, 237), "Python 3.11 | Flask Framework | REST Controllers | Authentication & Session Guard"),
        ("3. AI & ML Inference Layer", 610, (236, 253, 245), (16, 185, 129), "Scikit-Learn ML Models | Pandas & NumPy Pipelines | Joblib Serialization | Resume Parser"),
        ("4. Persistence & Database Layer", 840, (254, 243, 199), (245, 158, 11), "SQLite Database | SQLAlchemy ORM | Relational Schemas | File Storage Assets"),
    ]
    
    for title, y, bg, border, content in layers:
        draw.rectangle([200, y, 1400, y + 160], outline=border, fill=bg, width=4)
        draw.text((220, y + 15), title, fill=border, font=f_hdr)
        draw.text((220, y + 65), content, fill=(30, 41, 59), font=f_body)
        
        if y < 840:
            draw_arrow(draw, (800, y + 160), (800, y + 230), color=border)
            draw_arrow(draw, (820, y + 230), (820, y + 160), color=border)
            
    img.save(os.path.join(img_dir, "architecture_diagram.png"))

def generate_er():
    width, height = 1800, 1200
    img = Image.new("RGB", (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    f_title, f_hdr, f_body, f_sm = get_fonts()
    
    draw_centered_text(draw, "VETRIPATH LEARN - ENTITY RELATIONSHIP (ER) DIAGRAM", width/2, 50, f_title, (124, 58, 237))
    
    entities = [
        ("USERS", 300, 200, ["user_id (PK)", "name", "email", "password_hash", "role", "created_at"]),
        ("COURSES", 900, 200, ["course_id (PK)", "title", "category", "description", "level"]),
        ("QUESTIONS", 1500, 200, ["question_id (PK)", "course_id (FK)", "question_text", "options", "answer"]),
        ("RESULTS", 300, 600, ["result_id (PK)", "user_id (FK)", "test_type", "score", "total", "date"]),
        ("PROGRESS", 900, 600, ["progress_id (PK)", "user_id (FK)", "topic", "completed_count", "percentage"]),
        ("RESUME", 1500, 600, ["resume_id (PK)", "user_id (FK)", "ats_score", "skills", "parsed_content"]),
        ("INTERVIEW", 600, 950, ["interview_id (PK)", "user_id (FK)", "role", "feedback", "rating"]),
        ("FEEDBACK", 1200, 950, ["feedback_id (PK)", "user_id (FK)", "category", "message", "submitted_at"]),
    ]
    
    for name, x, y, attrs in entities:
        draw.rectangle([x - 150, y - 30, x + 150, y + 160], outline=(124, 58, 237), fill=(245, 243, 255), width=3)
        draw.rectangle([x - 150, y - 30, x + 150, y + 15], outline=(124, 58, 237), fill=(124, 58, 237), width=3)
        draw_centered_text(draw, name, x, y - 8, f_hdr, fill=(255, 255, 255))
        
        ay = y + 30
        for attr in attrs:
            color = (220, 38, 38) if "(PK)" in attr else ((59, 130, 246) if "(FK)" in attr else (30, 41, 59))
            draw.text((x - 130, ay), attr, fill=color, font=f_sm)
            ay += 20
            
    # Relationships
    draw_arrow(draw, (450, 250), (750, 250)) # User -> Course enrollment
    draw_arrow(draw, (1050, 250), (1350, 250)) # Course -> Questions
    draw_arrow(draw, (300, 360), (300, 570)) # User -> Results
    draw_arrow(draw, (900, 360), (900, 570)) # User -> Progress
    draw_arrow(draw, (1500, 360), (1500, 570)) # User -> Resume
    draw_arrow(draw, (300, 760), (450, 950)) # User -> Interview
    draw_arrow(draw, (1500, 760), (1350, 950)) # User -> Feedback

    img.save(os.path.join(img_dir, "er_diagram.png"))

if __name__ == "__main__":
    print("Generating MCA Project Report Diagrams...")
    generate_use_case()
    generate_activity()
    generate_sequence()
    generate_dfd_level0()
    generate_dfd_level1()
    generate_architecture()
    generate_er()
    print("All MCA diagrams generated successfully in:", img_dir)
