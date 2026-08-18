import sys, os, glob, re, json, zipfile, xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

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

print("=== Syllogism Builder lines 14500 to 14550 ===")
for i in range(14500, 14550):
    print(f"[{i:5d}] {paragraphs[i]}")
