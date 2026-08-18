import sys, zipfile, xml.etree.ElementTree as ET, re, json
sys.stdout.reconfigure(encoding='utf-8')

doc = 'c:/Users/sanja/Downloads/aptitude/appti (3)/Verbal & Non-Verbal Reasoning for Competitive Exams(LearnGuide.in).docx'
with zipfile.ZipFile(doc, 'r') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
    line = ''.join(texts).strip()
    if line:
        paragraphs.append(line)

toc_titles = [
    "Number Series Completion",
    "Alpha Series Completion",
    "Linear Arrangement",
    "Matrix Arrangement",
    "Circular Arrangement",
    "Blood Relation",
    "Input Output",
    "Eligibility Test",
    "Distance and Direction",
    "Analogy",
    "Data Sufficiency",
    "Inequality",
    "Statement and Assumptions",
    "Statement and Arguments",
    "Statement and Course of Action",
    "Syllogism",
    "Clocks",
    "Cubes",
    "Calender",
    "Games and Tournament",
    "Logical Connectivity",
    "Classification",
    "Series Completion",
    "Analogy and Classification",
    "Mirror Image and Water Image",
    "Paper Cutting and Folding",
    "Completion of Incompletion Pattern",
    "Counting of Figures and Hidden Embedded Figures",
    "Cubes and Dices",
    "MISCELLANEOUS QUESTION BANK",
    "SPEED TEST"
]

print(f"Total paragraphs: {len(paragraphs)}")

found_chapters = []
for i, p in enumerate(paragraphs[90:], start=90):
    for title in toc_titles:
        if title.lower() == p.lower() or (len(title) > 8 and title.lower() in p.lower() and ('Chapter' in paragraphs[max(0, i-3):i+1] or 'Section' in paragraphs[i:i+4] or 'Part' in paragraphs[max(0, i-3):i+1])):
            ctx = " // ".join(paragraphs[i:i+4])
            print(f"[{i:5d}] Found: {title:30s} -> {ctx[:80]}")
            found_chapters.append((i, title))
            break
