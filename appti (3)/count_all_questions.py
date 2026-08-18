import sys, os, glob, json, re, zipfile, xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

# 1. Count questions in current website JS files
js_files = glob.glob('c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions/*.js')
site_counts = {}
total_site_questions = 0

for jf in sorted(js_files):
    name = os.path.basename(jf).replace('.js', '')
    with open(jf, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    # Find all question objects
    # Match `"id":` or count array items
    q_matches = re.findall(r'"id"\s*:\s*"([^"]+)"', content)
    site_counts[name] = len(q_matches)
    total_site_questions += len(q_matches)

print("=== CURRENT QUESTIONS IN WEBSITE (appti/js/questions) ===")
sub_totals = {'aptitude': 0, 'reasoning': 0, 'verbal': 0}
for k, v in site_counts.items():
    prefix = k.split('_')[0]
    if prefix in sub_totals:
        sub_totals[prefix] += v
    print(f"{k:40s} : {v:4d} questions")

print("-" * 50)
print(f"Total Quantitative Aptitude Questions : {sub_totals['aptitude']}")
print(f"Total Logical Reasoning Questions     : {sub_totals['reasoning']}")
print(f"Total Verbal Ability Questions        : {sub_totals['verbal']}")
print(f"TOTAL QUESTIONS CURRENTLY ON SITE      : {total_site_questions}")
print("=" * 50)

# 2. Count questions in DOCX book
doc_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/Verbal & Non-Verbal Reasoning for Competitive Exams(LearnGuide.in).docx'
with zipfile.ZipFile(doc_path, 'r') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
    line = ''.join(texts).strip()
    if line:
        paragraphs.append(line)

print("\n=== QUESTIONS IN DOCX BOOK (Verbal & Non-Verbal Reasoning) ===")

# In the book, every chapter lists:
# Concept Applicator: N
# Concept Builder: N
# Concept Cracker: N
# Concept Deviator: N
# Let's extract the chapter tables and question counts directly from the docx!

chapter_counts = []
i = 0
while i < len(paragraphs):
    p = paragraphs[i]
    if (p.startswith('Chapter') or 'Part A :' in p or 'Part B :' in p) and i + 10 < len(paragraphs):
        # Look ahead for Section Level No. of Questions
        window = paragraphs[i:i+30]
        # find title
        title = ""
        for w in window[:8]:
            if any(t in w for t in ['Completion', 'Arrangement', 'Relation', 'Output', 'Test', 'Direction', 'Analogy', 'Sufficiency', 'Inequality', 'Statement', 'Syllogism', 'Clocks', 'Cubes', 'Calender', 'Tournament', 'Connectivity', 'Classification', 'Image', 'Folding', 'Pattern', 'Figures', 'Dices']):
                title = w
                break
        if title:
            # Look for numbers after Concept Applicator, Builder, Cracker, Deviator
            counts = {}
            for j in range(len(window)-1):
                wj = window[j].lower()
                if 'applicator' in wj and j+2 < len(window) and window[j+2].isdigit():
                    counts['Applicator'] = int(window[j+2])
                elif 'builder' in wj and j+2 < len(window) and window[j+2].isdigit():
                    counts['Builder'] = int(window[j+2])
                elif 'cracker' in wj and j+2 < len(window) and window[j+2].isdigit():
                    counts['Cracker'] = int(window[j+2])
                elif 'deviator' in wj and j+2 < len(window) and window[j+2].isdigit():
                    counts['Deviator'] = int(window[j+2])
            if counts:
                chapter_counts.append((title, counts))
                i += 20
                continue
    i += 1

print(f"Found {len(chapter_counts)} structured chapter syllabus tables:")
total_doc_q = 0
for title, c in chapter_counts:
    tot = sum(c.values())
    total_doc_q += tot
    details = ", ".join([f"{k}: {v}" for k, v in c.items()])
    print(f"{title:45s} -> Total: {tot:3d} ({details})")

print(f"\n+ Miscellaneous Question Bank (500+ Questions) + 8 Speed Practice Sets (150+ Questions)")
