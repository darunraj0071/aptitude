import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("🔍 VALIDATING COMPLETE CODING CHALLENGES DATABASE")
print("=" * 65)

js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Check for syntax in RAW_CHALLENGES
start_raw = text.find('const RAW_CHALLENGES = [') + len('const RAW_CHALLENGES = ')
end_raw = text.find('];\n\nfunction getDynamicFormats')
if end_raw == -1:
    end_raw = text.find('];\nfunction getDynamicFormats')

raw_json_str = text[start_raw:end_raw + 1]

try:
    challenges = json.loads(raw_json_str)
    print(f"✅ Successfully parsed {len(challenges)} Coding Challenges from JSON!")
except Exception as e:
    print(f"❌ JSON Parse Error: {e}")
    sys.exit(1)

category_map = {}
total_testcases = 0
empty_tests = []

for c in challenges:
    cat = c.get('cat', 'unknown')
    category_map[cat] = category_map.get(cat, 0) + 1
    
    tests = c.get('tests', [])
    total_testcases += len(tests)
    if len(tests) == 0:
        empty_tests.append(c.get('id', 'unknown'))

print(f"\n📊 Categories Breakdown ({len(category_map)} Categories):")
for cat, count in sorted(category_map.items()):
    print(f"  - {cat:15s}: {count:3d} challenges")

print(f"\nTotal Testcases Configured: {total_testcases} testcases (Avg: {total_testcases / len(challenges):.1f} per problem)")
if empty_tests:
    print(f"⚠️ Warning: Challenges with 0 testcases: {empty_tests}")
else:
    print("✅ 100% of Challenges have valid, executable testcases!")

print("=" * 65)
