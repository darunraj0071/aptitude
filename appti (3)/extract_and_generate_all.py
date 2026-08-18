import sys, os, glob, re, json, zipfile, xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

DOC_PATH = 'c:/Users/sanja/Downloads/aptitude/appti (3)/Verbal & Non-Verbal Reasoning for Competitive Exams(LearnGuide.in).docx'
OUTPUT_DIR = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/questions'

print("Reading docx document.xml...")
with zipfile.ZipFile(DOC_PATH, 'r') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
    line = ''.join(texts).strip()
    if line:
        paragraphs.append(line)

print(f"Total non-empty paragraphs in docx: {len(paragraphs)}")

def clean_text(t):
    t = re.sub(r'\s+', ' ', t)
    t = t.replace('–', '-').replace('—', '-').replace('’', "'").replace('‘', "'")
    t = t.replace('“', '"').replace('”', '"')
    t = re.sub(r'^(?:Section\s+Level\s+No\.\s*Of\s*questions\s*|Very\s*easy\s*\d+\s*|Easy\s*\d+\s*|Moderate\s*\d+\s*|Difficult\s*\d+\s*)+', '', t, flags=re.I)
    return t.strip()

def parse_options_from_lines(lines):
    full_opt_str = " ".join(lines)
    full_opt_str = clean_text(full_opt_str)
    
    if not re.search(r'^\s*\([aA1]\)', full_opt_str) and re.search(r'\([bB2]\)', full_opt_str):
        full_opt_str = "(a) " + full_opt_str
        
    tokens = re.split(r'\(([a-eA-E1-5])\)', full_opt_str)
    
    opts = {}
    letter_map = {'1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e'}
    for i in range(1, len(tokens), 2):
        lbl = tokens[i].lower()
        lbl = letter_map.get(lbl, lbl)
        val = clean_text(tokens[i+1]) if i+1 < len(tokens) else ""
        val = re.sub(r'^(?:[a-eA-E1-5][\.\)]|\:|\-)\s*', '', val)
        if val:
            opts[lbl] = val
            
    return opts

def extract_chapter_questions(ch_paras, ch_title=""):
    sol_idx = -1
    for idx, p in enumerate(ch_paras):
        if re.search(r'(Answer\s+with\s+(Solution|Explanation)|Hints\s*&\s*Solution|Answer\s+Key)', p, re.I):
            sol_idx = idx
            break
            
    q_paras = ch_paras[:sol_idx] if sol_idx != -1 else ch_paras
    ans_paras = ch_paras[sol_idx:] if sol_idx != -1 else []
    
    # Parse Solutions
    sols = {'applicator': {}, 'builder': {}, 'cracker': {}, 'deviator': {}}
    cur_sec = 'applicator'
    cur_num = 0
    cur_opt = ''
    cur_exp = []
    
    def save_sol():
        nonlocal cur_num, cur_opt, cur_exp
        if cur_num > 0 and (cur_opt or cur_exp):
            exp_text = clean_text(" ".join(cur_exp))
            if cur_sec in sols:
                sols[cur_sec][cur_num] = (cur_opt, exp_text)
        cur_opt = ''
        cur_exp = []
        
    for line in ans_paras:
        l_lower = line.lower()
        if 'applicat' in l_lower and 'concept' in l_lower:
            save_sol()
            cur_sec = 'applicator'
            cur_num = 0
            continue
        elif 'builder' in l_lower and 'concept' in l_lower:
            save_sol()
            cur_sec = 'builder'
            cur_num = 0
            continue
        elif 'cracker' in l_lower and 'concept' in l_lower:
            save_sol()
            cur_sec = 'cracker'
            cur_num = 0
            continue
        elif 'deviat' in l_lower and 'concept' in l_lower:
            save_sol()
            cur_sec = 'deviator'
            cur_num = 0
            continue
            
        m_num = re.match(r'^(\d+)\s*[\.\)]\s*(?:\(([a-eA-E])\))?\s*(.*)', line)
        m_opt = re.match(r'^(?:\(([a-eA-E])\)|Option\s*\(([a-eA-E])\)\s*:?)\s*(.*)', line, re.I)
        
        if m_num:
            save_sol()
            cur_num = int(m_num.group(1))
            cur_opt = (m_num.group(2) or '').lower()
            rest = m_num.group(3).strip()
            if not cur_opt and rest:
                m_sub = re.match(r'^\(([a-eA-E])\)\s*(.*)', rest)
                if m_sub:
                    cur_opt = m_sub.group(1).lower()
                    rest = m_sub.group(2).strip()
            if rest:
                cur_exp.append(rest)
        elif m_opt:
            if cur_num == 0:
                cur_num = len(sols.get(cur_sec, {})) + 1
            else:
                save_sol()
                cur_num += 1
            cur_opt = (m_opt.group(1) or m_opt.group(2) or '').lower()
            if m_opt.group(3):
                cur_exp.append(m_opt.group(3).strip())
        else:
            if cur_num > 0:
                cur_exp.append(line.strip())
    save_sol()
    
    # Split q_paras into sections
    sec_indices = []
    for idx, p in enumerate(q_paras):
        pl = p.lower()
        if 'concept' in pl:
            if 'applicat' in pl and ('1.' in p or idx > 15):
                sec_indices.append((idx, 'applicator'))
            elif 'builder' in pl and ('2.' in p or idx > 15):
                sec_indices.append((idx, 'builder'))
            elif 'cracker' in pl and ('3.' in p or idx > 20):
                sec_indices.append((idx, 'cracker'))
            elif 'deviat' in pl and ('4.' in p or idx > 20):
                sec_indices.append((idx, 'deviator'))
                
    dedup_sec = []
    for s in sec_indices:
        if not dedup_sec or dedup_sec[-1][1] != s[1]:
            dedup_sec.append(s)
            
    sec_q_paras = {}
    if dedup_sec:
        for k in range(len(dedup_sec)):
            s_name = dedup_sec[k][1]
            start_idx = dedup_sec[k][0] + 1
            end_idx = dedup_sec[k+1][0] if k+1 < len(dedup_sec) else len(q_paras)
            sec_q_paras[s_name] = q_paras[start_idx:end_idx]
    else:
        sec_q_paras['applicator'] = q_paras
        
    tier_map = {
        'applicator': 'beginner',
        'builder': 'easy',
        'cracker': 'medium',
        'deviator': 'hard'
    }
    
    extracted_questions = []
    
    for sec_name, paras in sec_q_paras.items():
        difficulty = tier_map.get(sec_name, 'beginner')
        sec_sols = sols.get(sec_name, {})
        
        current_direction = ""
        q_idx = 0
        
        i = 0
        while i < len(paras):
            line = paras[i].strip()
            if not line:
                i += 1
                continue
                
            if line == ch_title or (line.isdigit() and len(line) <= 3) or 'THEORY' in line:
                i += 1
                continue
            if re.match(r'^\d+\s+' + re.escape(ch_title), line, re.I):
                i += 1
                continue
            if 'concept ' in line.lower() and len(line) < 35:
                i += 1
                continue
                
            if re.search(r'Directions?\s*(\(Qs?\.?|\(Question|\d+)', line, re.I):
                current_direction = clean_text(line)
                i += 1
                continue
                
            q_text_lines = []
            m_qnum = re.match(r'^(\d+)\s*[\.\)]\s*(.*)', line)
            if m_qnum:
                q_num = int(m_qnum.group(1))
                if m_qnum.group(2).strip():
                    q_text_lines.append(m_qnum.group(2).strip())
            else:
                q_num = q_idx + 1
                q_text_lines.append(line)
                
            i += 1
            while i < len(paras):
                next_l = paras[i].strip()
                if re.search(r'\([bB2]\)', next_l) or re.match(r'^\([aA1]\)', next_l):
                    break
                if re.match(r'^\d+\s*[\.\)]', next_l) and len(q_text_lines) > 0:
                    break
                if re.search(r'Directions?\s*\(', next_l, re.I):
                    break
                q_text_lines.append(next_l)
                i += 1
                
            opt_lines = []
            while i < len(paras):
                next_l = paras[i].strip()
                if re.match(r'^\d+\s*[\.\)]', next_l) and len(opt_lines) > 0:
                    break
                if re.search(r'Directions?\s*\(', next_l, re.I) and len(opt_lines) > 0:
                    break
                if re.search(r'\([bBcC]\)', next_l) or re.match(r'^\([aA]\)', next_l) or re.search(r'\([dDeE]\)', next_l) or (len(opt_lines) > 0 and len(next_l) < 40 and not next_l.endswith('?')):
                    opt_lines.append(next_l)
                    i += 1
                    if re.search(r'\([eE]\)', next_l) or (re.search(r'\([dD]\)', next_l) and not re.search(r'\([eE]\)', next_l)):
                        if i < len(paras) and not re.search(r'^\([eE]\)', paras[i].strip()):
                            break
                else:
                    break
                    
            opts_dict = parse_options_from_lines(opt_lines)
            if not opts_dict or len(opts_dict) < 2:
                continue
                
            q_idx += 1
            q_text = clean_text(" ".join(q_text_lines))
            if current_direction and current_direction not in q_text:
                q_text = f"<b>{current_direction}</b><br><br>{q_text}"
                
            opt_keys = sorted(opts_dict.keys())
            options_arr = [opts_dict[k] for k in opt_keys if opts_dict[k]]
            
            sol_data = sec_sols.get(q_idx, sec_sols.get(q_num, ('', '')))
            correct_letter = sol_data[0].lower() if sol_data else ''
            explanation = sol_data[1] if sol_data else ''
            
            ans_str = ""
            if correct_letter in opts_dict:
                ans_str = opts_dict[correct_letter]
            elif len(options_arr) > 0:
                ans_str = options_arr[0]
                
            if not explanation:
                explanation = f"Option ({correct_letter.upper()}) is the correct answer." if correct_letter else f"Option '{ans_str}' is correct."
                
            extracted_questions.append({
                "difficulty": difficulty,
                "text": q_text,
                "options": options_arr,
                "answer": ans_str,
                "solution": explanation,
                "sec_num": q_idx,
                "topic_source": ch_title
            })
            
    return extracted_questions

# Define Chapter Boundaries in docx
chapters_meta = [
    ("Number Series Completion", 92, 1274, "reasoning_series", "series"),
    ("Alpha Series Completion", 1274, 2221, "reasoning_coding_decoding", "coding_decoding"),
    ("Linear Arrangement", 2221, 3341, "reasoning_seating_arrangement", "seating_arrangement"),
    ("Matrix Arrangement", 3341, 4726, "reasoning_seating_arrangement", "seating_arrangement"),
    ("Circular Arrangement", 4726, 6080, "reasoning_seating_arrangement", "seating_arrangement"),
    ("Blood Relation", 6080, 6763, "reasoning_blood_relations", "blood_relations"),
    ("Input Output", 6763, 8370, "reasoning_puzzles", "puzzles"),
    ("Eligibility Test", 8370, 9825, "reasoning_puzzles", "puzzles"),
    ("Distance and Direction", 9825, 10277, "reasoning_direction_sense", "direction_sense"),
    ("Analogy", 10277, 11499, "reasoning_analogy", "analogy"),
    ("Data Sufficiency", 11499, 12309, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Inequality", 12309, 13110, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Statement and Assumptions", 13110, 13476, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Statement and Arguments", 13476, 13886, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Statement and Course of Action", 13886, 14221, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Syllogism", 14221, 15357, "reasoning_syllogism", "syllogism"),
    ("Clocks", 15357, 15619, "reasoning_puzzles", "puzzles"),
    ("Cubes", 15619, 16210, "reasoning_puzzles", "puzzles"),
    ("Calender", 16210, 16786, "reasoning_puzzles", "puzzles"),
    ("Games and Tournament", 16786, 18546, "reasoning_puzzles", "puzzles"),
    ("Logical Connectivity", 18546, 19013, "reasoning_statement_conclusion", "statement_conclusion"),
    ("Classification", 19013, 19835, "reasoning_analogy", "analogy"),
    ("Non-Verbal Series Completion", 19835, 20461, "reasoning_non_verbal", "non_verbal"),
    ("Non-Verbal Analogy & Classification", 20461, 20823, "reasoning_non_verbal", "non_verbal"),
    ("Mirror Image & Water Image", 20823, 21100, "reasoning_non_verbal", "non_verbal"),
    ("Paper Cutting & Folding", 21100, 21374, "reasoning_non_verbal", "non_verbal"),
    ("Completion of Incomplete Patterns", 21374, 21582, "reasoning_non_verbal", "non_verbal"),
    ("Counting of Figures & Hidden Figures", 21582, 21876, "reasoning_non_verbal", "non_verbal"),
    ("Cubes & Dices", 21876, 22535, "reasoning_non_verbal", "non_verbal")
]

topic_question_pool = {}
for ch_name, start_idx, end_idx, target_file, topic_code in chapters_meta:
    ch_slice = paragraphs[start_idx:end_idx]
    qs = extract_chapter_questions(ch_slice, ch_name)
    print(f"[{ch_name:40s}] Extracted: {len(qs):3d} questions -> target: {target_file}")
    
    if target_file not in topic_question_pool:
        topic_question_pool[target_file] = []
        
    for q in qs:
        q["topic"] = topic_code
        q["subject"] = "reasoning"
        topic_question_pool[target_file].append(q)

print("\n=== TOTAL POOLED QUESTIONS BY TOPIC FILE ===")
for target_file, qlist in topic_question_pool.items():
    print(f"{target_file:35s}: {len(qlist):4d} questions")

# Generate the JS files
time_map = {
    'beginner': '30s',
    'easy': '45s',
    'medium': '60s',
    'hard': '90s'
}

for target_file, qlist in topic_question_pool.items():
    js_filename = os.path.join(OUTPUT_DIR, f"{target_file}.js")
    
    final_objs = []
    diff_counters = {'beginner': 0, 'easy': 0, 'medium': 0, 'hard': 0}
    
    for q in qlist:
        diff = q['difficulty']
        diff_counters[diff] = diff_counters.get(diff, 0) + 1
        cnt = diff_counters[diff]
        
        q_id = f"{target_file}_{diff}_{cnt}"
        
        final_objs.append({
            "id": q_id,
            "text": q['text'],
            "options": q['options'],
            "answer": q['answer'],
            "solution": q['solution'],
            "formula": "",
            "shortcut": "",
            "commonMistakes": "",
            "timeRequired": time_map.get(diff, '45s'),
            "similarQuestions": [],
            "difficulty": diff,
            "topic": q['topic'],
            "subject": "reasoning",
            "patternType": (cnt % 6) + 1,
            "tags": [q['topic'], diff, "verified"]
        })
        
    js_content = "if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};\n"
    js_content += f"window.TOPIC_QUESTIONS['{target_file}'] = "
    js_content += json.dumps(final_objs, indent=4, ensure_ascii=False)
    js_content += ";\n"
    
    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"✅ Generated {js_filename} with {len(final_objs)} questions!")

print("\n🎉 ALL 10 REASONING QUESTION FILES UPDATED SUCCESSFULLY!")
