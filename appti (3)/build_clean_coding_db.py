import sys, os, json
sys.stdout.reconfigure(encoding='utf-8')

# Read NEW_DSA_CHALLENGES from batch1 text
with open('c:/Users/sanja/Downloads/aptitude/appti (3)/generate_dsa_batch1.py', 'r', encoding='utf-8') as f:
    code1 = f.read()

# Extract the list literal NEW_DSA_CHALLENGES
start1 = code1.find("NEW_DSA_CHALLENGES = [") + len("NEW_DSA_CHALLENGES = ")
end1 = code1.find("\n]\n\n# Write JSON to coding_data.js") + 2
list1_str = code1[start1:end1]

import ast
batch1_data = ast.literal_eval(list1_str)
print(f"Parsed Batch 1: {len(batch1_data)} challenges")

# Read NEW_DSA_CHALLENGES_BATCH2 from batch2 text
with open('c:/Users/sanja/Downloads/aptitude/appti (3)/generate_dsa_batch2.py', 'r', encoding='utf-8') as f:
    code2 = f.read()

start2 = code2.find("NEW_DSA_CHALLENGES_BATCH2 = [") + len("NEW_DSA_CHALLENGES_BATCH2 = ")
end2 = code2.find("\n]\n\n# Write to coding_data.js") + 2
list2_str = code2[start2:end2]

batch2_data = ast.literal_eval(list2_str)
print(f"Parsed Batch 2: {len(batch2_data)} challenges")

all_dsa = batch1_data + batch2_data
print(f"Total New DSA Challenges: {len(all_dsa)}")

# Now read base 161 challenges
js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    js_text = f.read()

pat_20_idx = js_text.find('"id": "pat_20"')
end_of_pat_20 = js_text.find('},', pat_20_idx)
start_raw = js_text.find('const RAW_CHALLENGES = [') + len('const RAW_CHALLENGES = ')
base_str = js_text[start_raw:end_of_pat_20 + 1] + "\n]"

base_data = ast.literal_eval(base_str)
print(f"Parsed Base Challenges: {len(base_data)}")

# Extract helpers
helper_start = js_text.find("// Dynamic Problem Formatter")
if helper_start == -1:
    helper_start = js_text.find("function getDynamicFormats")
helpers_text = js_text[helper_start:]

# Combine everything
combined = []
seen_ids = set()

for item in base_data:
    if item['id'] not in seen_ids:
        clean_tests = []
        for t in item.get('tests', []):
            inp = t.get('input', [])
            clean_inp = [str(x) for x in inp]
            clean_tests.append({
                "input": clean_inp,
                "output": str(t.get('output', '')),
                "explanation": t.get('explanation', '')
            })
        item['tests'] = clean_tests
        combined.append(item)
        seen_ids.add(item['id'])

for item in all_dsa:
    if item['id'] not in seen_ids:
        clean_tests = []
        for t in item.get('tests', []):
            inp = t.get('input', [])
            clean_inp = [str(x) for x in inp]
            clean_tests.append({
                "input": clean_inp,
                "output": str(t.get('output', '')),
                "explanation": t.get('explanation', '')
            })
        item['tests'] = clean_tests
        combined.append(item)
        seen_ids.add(item['id'])

print(f"\nTotal Combined Challenges: {len(combined)}")

# Category breakdown
cats = {}
for c in combined:
    cat = c.get('cat', 'other')
    cats[cat] = cats.get(cat, 0) + 1

for cat, count in sorted(cats.items()):
    print(f"  - {cat:15s}: {count:3d} problems")

# Serialize to valid JS
raw_json = json.dumps(combined, indent=4, ensure_ascii=False)

full_js_content = f"""/* ==========================================================================
   CODING_DATA.JS - Centralized Placement & LeetCode Coding Challenges Database ({len(combined)} Problems)
   ========================================================================== */

const RAW_CHALLENGES = {raw_json};

{helpers_text}
"""

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(full_js_content)

print(f"\n🎉 Successfully created full coding_data.js with {len(combined)} challenges!")
