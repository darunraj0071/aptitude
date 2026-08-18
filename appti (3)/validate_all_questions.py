import sys, os, glob, re, json
sys.stdout.reconfigure(encoding='utf-8')

js_files = glob.glob('c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions/*.js')

print("=" * 65)
print("🔍 VALIDATING ALL JAVASCRIPT QUESTION FILES")
print("=" * 65)

total_valid_q = 0
all_errors = []

for jf in sorted(js_files):
    fname = os.path.basename(jf)
    topic_key = fname.replace('.js', '')
    
    with open(jf, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    # Extract JSON part
    prefix = f"window.TOPIC_QUESTIONS['{topic_key}'] = "
    if prefix not in content:
        all_errors.append(f"Missing prefix in {fname}")
        continue
        
    json_str = content.split(prefix)[1].strip().rstrip(';')
    try:
        data = json.loads(json_str)
    except Exception as e:
        all_errors.append(f"JSON Parse Error in {fname}: {e}")
        continue
        
    # Validate each item
    diff_counts = {}
    for idx, item in enumerate(data):
        d = item.get('difficulty', 'unknown')
        diff_counts[d] = diff_counts.get(d, 0) + 1
        
        if not item.get('id'):
            all_errors.append(f"Missing ID in {fname} item #{idx}")
        if not item.get('text'):
            all_errors.append(f"Missing Text in {fname} item #{idx}")
        if not item.get('options') or len(item['options']) < 2:
            all_errors.append(f"Invalid options in {fname} item #{idx}: {item.get('options')}")
        if not item.get('answer'):
            all_errors.append(f"Missing answer in {fname} item #{idx}")
            
    total_valid_q += len(data)
    print(f"✅ {fname:40s} : {len(data):4d} valid questions ({diff_counts})")

print("=" * 65)
if all_errors:
    print(f"❌ FOUND {len(all_errors)} ERRORS:")
    for err in all_errors[:10]:
        print(f"  - {err}")
else:
    print(f"🌟 ALL QUESTION FILES VALIDATED CLEANLY! Total Questions: {total_valid_q}")
print("=" * 65)
