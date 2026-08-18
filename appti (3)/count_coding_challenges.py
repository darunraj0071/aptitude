import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract RAW_CHALLENGES
match = re.search(r'const\s+RAW_CHALLENGES\s*=\s*(\[.*?\]);', content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    print(f"Total Coding Challenges in RAW_CHALLENGES: {len(data)}")
    
    categories = {}
    difficulties = {}
    for item in data:
        cat = item.get('cat', 'other')
        diff = item.get('diff', 'other')
        categories[cat] = categories.get(cat, 0) + 1
        difficulties[diff] = difficulties.get(diff, 0) + 1
        
    print("\nCategory Breakdown in coding.html:")
    for cat, count in sorted(categories.items()):
        print(f"  - {cat:20s}: {count:3d} challenges")
        
    print("\nDifficulty Breakdown:")
    for diff, count in sorted(difficulties.items()):
        print(f"  - {diff:20s}: {count:3d} challenges")
else:
    print("Could not parse RAW_CHALLENGES")
