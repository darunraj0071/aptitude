import sys, zipfile, xml.etree.ElementTree as ET, re, json
sys.stdout.reconfigure(encoding='utf-8')

doc_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/Verbal & Non-Verbal Reasoning for Competitive Exams(LearnGuide.in).docx'
with zipfile.ZipFile(doc_path, 'r') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)

w_namespace = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

# Let's inspect the top-level children of w:body
body = root.find(f'{w_namespace}body')
print(f"Body children count: {len(body)}")
elem_types = {}
for child in body:
    tag = child.tag.replace(w_namespace, '')
    elem_types[tag] = elem_types.get(tag, 0) + 1
print(f"Element types in body: {elem_types}")
