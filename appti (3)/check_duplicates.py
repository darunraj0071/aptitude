import sys, os, glob, re, json
from collections import defaultdict
sys.stdout.reconfigure(encoding='utf-8')

js_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions'
js_files = glob.glob(os.path.join(js_dir, '*.js'))

print("=" * 65)
print("🔍 CHECKING FOR REPEATED / DUPLICATE QUESTIONS")
print("=" * 65)

def normalize_text(t):
    t = re.sub(r'<[^>]+>', ' ', t) # remove html tags like <b>...</b>
    t = re.sub(r'\s+', ' ', t).strip().lower()
    return t

all_questions = []
file_question_map = defaultdict(list)
seen_normalized = defaultdict(list)

for jf in sorted(js_files):
    fname = os.path.basename(jf)
    topic_key = fname.replace('.js', '')
    
    with open(jf, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    prefix = f"window.TOPIC_QUESTIONS['{topic_key}'] = "
    if prefix not in content:
        continue
        
    json_str = content.split(prefix)[1].strip().rstrip(';')
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"Error parsing {fname}: {e}")
        continue
        
    for q in data:
        q_item = {
            'file': fname,
            'id': q.get('id', ''),
            'text': q.get('text', ''),
            'answer': q.get('answer', ''),
            'difficulty': q.get('difficulty', '')
        }
        all_questions.append(q_item)
        file_question_map[fname].append(q_item)
        
        norm = normalize_text(q['text'])
        seen_normalized[norm].append(q_item)

# Count duplicates
duplicate_groups = {k: v for k, v in seen_normalized.items() if len(v) > 1}
total_duplicates = sum(len(v) - 1 for v in duplicate_groups.values())

print(f"Total Questions Analyzed: {len(all_questions)}")
print(f"Unique Question Texts: {len(seen_normalized)}")
print(f"Duplicate Question Instances Found: {total_duplicates}")

if duplicate_groups:
    print("\n--- SAMPLE DUPLICATES ---")
    for idx, (norm_txt, items) in enumerate(list(duplicate_groups.items())[:10], 1):
        print(f"\nDuplicate Group {idx} (Repeated {len(items)} times):")
        print(f"  Text: {items[0]['text'][:100]}...")
        for it in items:
            print(f"    - File: {it['file']} | ID: {it['id']}")
else:
    print("\n✅ ZERO REPEATED QUESTIONS FOUND! Every question is 100% unique.")

print("=" * 65)
