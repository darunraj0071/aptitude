import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

# Import batch 1 and batch 2
from generate_dsa_batch1 import NEW_DSA_CHALLENGES
from generate_dsa_batch2 import NEW_DSA_CHALLENGES_BATCH2

all_new_dsa = NEW_DSA_CHALLENGES + NEW_DSA_CHALLENGES_BATCH2
print(f"Total New DSA Challenges Prepared: {len(all_new_dsa)}")

js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Parse using strict=False or regex
start_marker = "const RAW_CHALLENGES = ["
end_marker = "\n];\n"

idx_start = content.find(start_marker)
idx_end = content.find("];\n\n// Dynamic Problem Formatter")
if idx_end == -1:
    idx_end = content.find("];\n// Dynamic Problem Formatter")

if idx_start != -1 and idx_end != -1:
    raw_array_str = content[idx_start + len("const RAW_CHALLENGES = "):idx_end + 1]
    
    try:
        existing_data = json.loads(raw_array_str, strict=False)
    except Exception as e:
        print(f"Standard JSON parse error: {e}, trying ast/eval fallback...")
        import ast
        existing_data = ast.literal_eval(raw_array_str)
        
    print(f"Loaded {len(existing_data)} existing challenges.")
    existing_ids = {item['id'] for item in existing_data}
    
    added_count = 0
    for item in all_new_dsa:
        if item['id'] not in existing_ids:
            existing_data.append(item)
            existing_ids.add(item['id'])
            added_count += 1
            
    print(f"Added {added_count} new DSA problems. Total Challenges: {len(existing_data)}")
    
    # Re-serialize cleanly
    clean_json_str = json.dumps(existing_data, indent=4, ensure_ascii=False)
    
    new_content = content[:idx_start + len("const RAW_CHALLENGES = ")] + clean_json_str + content[idx_end + 1:]
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("🎉 Successfully integrated ALL 65+ DSA Placement Challenges into coding_data.js!")
else:
    print("❌ Markers not found in coding_data.js")
