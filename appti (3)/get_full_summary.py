import sys, os, glob, re, json
sys.stdout.reconfigure(encoding='utf-8')

js_dir = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions'

subjects = {
    'aptitude': {
        'name': 'Quantitative Aptitude (14 Topics)',
        'topics': [
            ('numbers', 'Numbers & Number Systems'),
            ('percentage', 'Percentages'),
            ('profit_loss', 'Profit & Loss'),
            ('ratio_proportion', 'Ratio & Proportion'),
            ('average', 'Averages'),
            ('time_work', 'Time & Work'),
            ('time_distance', 'Time & Distance'),
            ('speed_distance', 'Speed & Distance (Boats/Streams)'),
            ('probability', 'Probability'),
            ('permutation_combination', 'Permutation & Combination'),
            ('data_interpretation', 'Data Interpretation'),
            ('simplification', 'Simplification & Indices'),
            ('algebra', 'Algebra & Equations'),
            ('geometry', 'Geometry & Mensuration')
        ]
    },
    'reasoning': {
        'name': 'Logical Reasoning (10 Topics)',
        'topics': [
            ('analogy', 'Analogy & Classification'),
            ('seating_arrangement', 'Seating Arrangement (Linear/Circular/Matrix)'),
            ('coding_decoding', 'Coding & Decoding'),
            ('puzzles', 'Puzzles (Input-Output, Clocks, Cubes, Calender)'),
            ('series', 'Number & Alpha Series'),
            ('non_verbal', 'Non-Verbal & Visual Reasoning'),
            ('statement_conclusion', 'Statement, Assumptions & Conclusions'),
            ('blood_relations', 'Blood Relations'),
            ('direction_sense', 'Distance & Direction Sense'),
            ('syllogism', 'Syllogisms & Deductions')
        ]
    },
    'verbal': {
        'name': 'Verbal Ability (7 Topics)',
        'topics': [
            ('grammar', 'English Grammar'),
            ('vocabulary', 'Vocabulary & Synonyms/Antonyms'),
            ('reading_comprehension', 'Reading Comprehension'),
            ('sentence_correction', 'Sentence Correction'),
            ('error_spotting', 'Error Spotting'),
            ('fill_blanks', 'Fill in the Blanks'),
            ('para_jumbles', 'Para Jumbles')
        ]
    }
}

grand_total = 0

for sub_key, sub_info in subjects.items():
    print(f"\n### {sub_info['name']}")
    print("| # | Topic Code | Topic Name | Question File | Questions in Workstation |")
    print("|---|---|---|---|:---:|")
    sub_total = 0
    for idx, (t_code, t_name) in enumerate(sub_info['topics'], 1):
        fpath = os.path.join(js_dir, f"{sub_key}_{t_code}.js")
        count = 0
        if os.path.exists(fpath):
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            prefix = f"window.TOPIC_QUESTIONS['{sub_key}_{t_code}'] = "
            if prefix in content:
                json_str = content.split(prefix)[1].strip().rstrip(';')
                data = json.loads(json_str)
                count = len(data)
        sub_total += count
        grand_total += count
        print(f"| {idx} | `{t_code}` | **{t_name}** | `{sub_key}_{t_code}.js` | **{count}** |")
    print(f"| | | **Subtotal ({sub_info['name']})** | | **{sub_total} Questions** |")

print(f"\n\n=======================================================")
print(f"🌟 GRAND TOTAL QUESTIONS ACROSS ALL 31 PRACTICE WORKSTATIONS: {grand_total} Questions")
print(f"=======================================================")
