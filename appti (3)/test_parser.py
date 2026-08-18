import sys, os, glob, re, json, zipfile, xml.etree.ElementTree as ET
sys.stdout.reconfigure(encoding='utf-8')

doc_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/Verbal & Non-Verbal Reasoning for Competitive Exams(LearnGuide.in).docx'
with zipfile.ZipFile(doc_path, 'r') as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)

paragraphs = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
    line = ''.join(texts).strip()
    if line:
        paragraphs.append(line)

def clean_text(t):
    t = re.sub(r'\s+', ' ', t)
    t = t.replace('–', '-').replace('—', '-').replace('’', "'").replace('‘', "'")
    t = t.replace('“', '"').replace('”', '"')
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
    # Find markers: '1. CONCEPT APPLICATOR', '2. CONCEPT BUILDER', '3. CONCEPT CRACKER', '4. CONCEPT DEVIATOR'
    sec_indices = []
    for idx, p in enumerate(q_paras):
        pl = p.lower()
        if 'concept' in pl:
            if 'applicat' in pl and ('1.' in p or idx > 20):
                sec_indices.append((idx, 'applicator'))
            elif 'builder' in pl and ('2.' in p or idx > 20):
                sec_indices.append((idx, 'builder'))
            elif 'cracker' in pl and ('3.' in p or idx > 20):
                sec_indices.append((idx, 'cracker'))
            elif 'deviat' in pl and ('4.' in p or idx > 20):
                sec_indices.append((idx, 'deviator'))
                
    # Deduplicate consecutive markers of same section
    dedup_sec = []
    for s in sec_indices:
        if not dedup_sec or dedup_sec[-1][1] != s[1]:
            dedup_sec.append(s)
            
    sec_q_paras = {}
    for k in range(len(dedup_sec)):
        s_name = dedup_sec[k][1]
        start_idx = dedup_sec[k][0] + 1
        end_idx = dedup_sec[k+1][0] if k+1 < len(dedup_sec) else len(q_paras)
        sec_q_paras[s_name] = q_paras[start_idx:end_idx]
        
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
        
        # In each section, questions are blocks of text ending with options
        # Let's accumulate until options are found
        i = 0
        while i < len(paras):
            line = paras[i].strip()
            if not line:
                i += 1
                continue
                
            if line == ch_title or (line.isdigit() and len(line) <= 3):
                i += 1
                continue
            if re.match(r'^\d+\s+' + re.escape(ch_title), line, re.I):
                i += 1
                continue
            if 'concept ' in line.lower():
                i += 1
                continue
                
            if re.search(r'Directions?\s*(\(Qs?\.?|\(Question|\d+)', line, re.I):
                current_direction = clean_text(line)
                i += 1
                continue
                
            # Collect question text
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
                
            # Collect options
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

br_paras = paragraphs[6080:6763]
br_qs = extract_chapter_questions(br_paras, "Blood Relation")
print(f"Blood Relation: {len(br_qs)} questions extracted!")
diff_counts = {}
for q in br_qs:
    d = q['difficulty']
    diff_counts[d] = diff_counts.get(d, 0) + 1
print(f"Difficulties: {diff_counts}")
for q in br_qs[:3]:
    print(f"\n[{q['difficulty']}] Q: {q['text'][:90]}...")
    print(f"  Options ({len(q['options'])}): {q['options']}")
    print(f"  Ans: {q['answer']}")
    print(f"  Sol: {q['solution'][:90]}...")
