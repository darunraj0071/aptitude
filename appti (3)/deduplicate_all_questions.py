import sys, os, glob, re, json
from collections import defaultdict
sys.stdout.reconfigure(encoding='utf-8')

js_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions'
js_files = glob.glob(os.path.join(js_dir, '*.js'))

print("=" * 65)
print("🧹 DEDUPLICATING QUESTIONS TO ENSURE 100% UNIQUE QUESTIONS")
print("=" * 65)

def normalize_text(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'\s+', ' ', t).strip().lower()
    return t

time_map = {
    'beginner': '30s',
    'easy': '45s',
    'medium': '60s',
    'hard': '90s',
    'expert': '120s'
}

seen_texts = set()
total_before = 0
total_after = 0
removed_count = 0

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
        print(f"Error reading {fname}: {e}")
        continue
        
    total_before += len(data)
    
    unique_items = []
    diff_counters = {'beginner': 0, 'easy': 0, 'medium': 0, 'hard': 0, 'expert': 0}
    
    for item in data:
        norm = normalize_text(item.get('text', ''))
        if not norm or norm in seen_texts:
            removed_count += 1
            continue
            
        seen_texts.add(norm)
        
        diff = item.get('difficulty', 'medium')
        diff_counters[diff] = diff_counters.get(diff, 0) + 1
        cnt = diff_counters[diff]
        
        # Clean ID
        item['id'] = f"{topic_key}_{diff}_{cnt}"
        item['timeRequired'] = time_map.get(diff, '45s')
        item['patternType'] = (cnt % 6) + 1
        unique_items.append(item)
        
    total_after += len(unique_items)
    
    # Save back clean file
    js_content = "if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};\n"
    js_content += f"window.TOPIC_QUESTIONS['{topic_key}'] = "
    js_content += json.dumps(unique_items, indent=4, ensure_ascii=False)
    js_content += ";\n"
    
    with open(jf, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"✅ {fname:38s}: {len(data):4d} -> {len(unique_items):4d} unique questions")

print("=" * 65)
print(f"Total Questions Before : {total_before}")
print(f"Duplicates Removed     : {removed_count}")
print(f"Total 100% Unique Left : {total_after}")
print("=" * 65)
