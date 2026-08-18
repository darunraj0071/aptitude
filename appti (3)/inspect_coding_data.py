import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("📦 COMPILING FULL CODING DATA & RUNNER INTEGRATION")
print("=" * 65)

# First read the original base challenges up to line 2800 before batch1 was appended, or parse cleanly.
js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's inspect where RAW_CHALLENGES begins and ends
match = re.search(r'const\s+RAW_CHALLENGES\s*=\s*\[(.*?)\];\s*// Dynamic Problem Formatter', text, re.DOTALL)
if not match:
    match = re.search(r'const\s+RAW_CHALLENGES\s*=\s*\[(.*?)\];\s*function getDynamicFormats', text, re.DOTALL)

print(f"Found match: {bool(match)}")
