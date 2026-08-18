import sys, os, glob, re, json
sys.stdout.reconfigure(encoding='utf-8')

js_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions'
js_files = glob.glob(os.path.join(js_dir, '*.js'))

print("=" * 65)
print("🔍 AUDITING SHORTCUTS, FORMULAS, TRICKS & EXPLANATIONS ACROSS ALL QUESTIONS")
print("=" * 65)

empty_fields = {'formula': 0, 'shortcut': 0, 'commonMistakes': 0, 'solution': 0}
total_q = 0

for jf in sorted(js_files):
    fname = os.path.basename(jf)
    topic_key = fname.replace('.js', '')
    
    with open(jf, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    prefix = f"window.TOPIC_QUESTIONS['{topic_key}'] = "
    if prefix not in content:
        continue
        
    json_str = content.split(prefix)[1].strip().rstrip(';')
    data = json.loads(json_str)
    
    file_empty = {'formula': 0, 'shortcut': 0, 'commonMistakes': 0, 'solution': 0}
    for q in data:
        total_q += 1
        for field in ['formula', 'shortcut', 'commonMistakes', 'solution']:
            val = q.get(field, '').strip()
            if not val or val == 'N/A' or val == 'Basic principles apply.':
                empty_fields[field] += 1
                file_empty[field] += 1
                
    print(f"File {fname:38s} ({len(data):3d} Qs) -> Empty: Formula={file_empty['formula']}, Shortcut={file_empty['shortcut']}, Mistakes={file_empty['commonMistakes']}")

print("=" * 65)
print(f"Total Questions: {total_q}")
print(f"Total with empty Formula        : {empty_fields['formula']}")
print(f"Total with empty Shortcut       : {empty_fields['shortcut']}")
print(f"Total with empty Common Mistakes: {empty_fields['commonMistakes']}")
print(f"Total with empty Solutions      : {empty_fields['solution']}")
print("=" * 65)
