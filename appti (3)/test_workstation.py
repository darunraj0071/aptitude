import sys, os, glob, re, json
sys.stdout.reconfigure(encoding='utf-8')

reasoning_topics = [
    'series', 'coding_decoding', 'seating_arrangement', 'blood_relations',
    'puzzles', 'direction_sense', 'analogy', 'statement_conclusion',
    'syllogism', 'non_verbal'
]

print("=" * 65)
print("🔍 TESTING WORKSTATION QUESTION AVAILABILITY FOR ALL REASONING TOPICS")
print("=" * 65)

total_loaded = 0
for t in reasoning_topics:
    fpath = f"c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions/reasoning_{t}.js"
    if not os.path.exists(fpath):
        print(f"❌ Missing file: {fpath}")
        continue
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    prefix = f"window.TOPIC_QUESTIONS['reasoning_{t}'] = "
    json_str = content.split(prefix)[1].strip().rstrip(';')
    data = json.loads(json_str)
    
    total_loaded += len(data)
    # Check sample question
    sample = data[0]
    print(f"✅ Topic: reasoning_{t:<22s} | Questions: {len(data):3d} | Sample ID: {sample['id']}")

print("=" * 65)
print(f"🌟 ALL {total_loaded} REASONING QUESTIONS ARE ACCESSIBLE TO THE PRACTICE WORKSTATION!")
print("=" * 65)
