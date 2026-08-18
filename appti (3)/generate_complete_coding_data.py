import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("📦 COMPILING FULL DSA CODING DATABASE & UPDATING SELECTORS")
print("=" * 65)

# First let's extract the clean 161 base challenges from coding_data.js (before pat_20 ends)
js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's find pat_20 end
pat_20_idx = text.find('"id": "pat_20"')
if pat_20_idx != -1:
    end_of_pat_20 = text.find('},', pat_20_idx)
    if end_of_pat_20 != -1:
        base_raw_part = text[:end_of_pat_20 + 1] + "\n]"
        # Extract RAW_CHALLENGES substring
        start_raw = base_raw_part.find('const RAW_CHALLENGES = [') + len('const RAW_CHALLENGES = ')
        base_json_str = base_raw_part[start_raw:]
        
        # Parse cleanly using ast or json
        # Replace unescaped newlines in strings if any
        base_data = []
        try:
            base_data = json.loads(base_json_str, strict=False)
        except Exception as e:
            import ast
            base_data = ast.literal_eval(base_json_str)
            
        print(f"Base Challenges successfully extracted: {len(base_data)}")

# Let's extract helper functions after RAW_CHALLENGES
helper_start = text.find("// Dynamic Problem Formatter")
if helper_start == -1:
    helper_start = text.find("function getDynamicFormats")
helpers_text = text[helper_start:] if helper_start != -1 else ""

print(f"Helper functions found length: {len(helpers_text)}")

# Read batch 1 and batch 2 items
from generate_dsa_batch1 import NEW_DSA_CHALLENGES
from generate_dsa_batch2 import NEW_DSA_CHALLENGES_BATCH2

all_new_dsa = NEW_DSA_CHALLENGES + NEW_DSA_CHALLENGES_BATCH2
print(f"New DSA Challenges to add: {len(all_new_dsa)}")

# Combine without duplicate IDs
combined = []
seen_ids = set()

for item in base_data:
    if item['id'] not in seen_ids:
        # Standardize input formatting
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

for item in all_new_dsa:
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

print(f"Total Challenges in Combined Database: {len(combined)}")

# Category map check
cat_counts = {}
for c in combined:
    cat = c.get('cat', 'other')
    cat_counts[cat] = cat_counts.get(cat, 0) + 1

for cat, count in sorted(cat_counts.items()):
    print(f"  - {cat:15s}: {count:3d} problems")

# Serialize to clean JS
raw_json = json.dumps(combined, indent=4, ensure_ascii=False)

full_js_content = f"""/* ==========================================================================
   CODING_DATA.JS - Centralized Placement & LeetCode Coding Challenges Database ({len(combined)} Problems)
   ========================================================================== */

const RAW_CHALLENGES = {raw_json};

{helpers_text}
"""

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(full_js_content)

print(f"✅ Successfully wrote clean coding_data.js ({len(combined)} challenges)!")
print("=" * 65)
