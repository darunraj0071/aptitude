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

def parse_misc_solutions(sol_paras):
    sols = {}
    cur_num = 0
    cur_opt = ''
    cur_exp = []
    
    def save():
        nonlocal cur_num, cur_opt, cur_exp
        if cur_num > 0 and (cur_opt or cur_exp):
            sols[cur_num] = (cur_opt, clean_text(" ".join(cur_exp)))
        cur_opt = ''
        cur_exp = []
        
    for line in sol_paras:
        m_num = re.match(r'^(\d+)\s*[\.\)]\s*(?:\(([a-eA-E])\))?\s*(.*)', line)
        m_opt = re.match(r'^(?:\(([a-eA-E])\)|Option\s*\(([a-eA-E])\)\s*:?)\s*(.*)', line, re.I)
        
        if m_num:
            save()
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
                cur_num = len(sols) + 1
            else:
                save()
                cur_num += 1
            cur_opt = (m_opt.group(1) or m_opt.group(2) or '').lower()
            if m_opt.group(3):
                cur_exp.append(m_opt.group(3).strip())
        else:
            if cur_num > 0:
                cur_exp.append(line.strip())
    save()
    return sols

misc_sols = parse_misc_solutions(paragraphs[27419:29790])

# Parse questions from 22535 to 27419
misc_q_paras = paragraphs[22535:27419]

# Map subheadings to topic codes
subhead_map = {
    'ANALOGY': ('reasoning_analogy', 'analogy'),
    'CLASSIFICATION': ('reasoning_analogy', 'analogy'),
    'SERIES': ('reasoning_series', 'series'),
    'CODING AND DECODING': ('reasoning_coding_decoding', 'coding_decoding'),
    'BLOOD RELATION': ('reasoning_blood_relations', 'blood_relations'),
    'DIRECTION AND DISTANCE': ('reasoning_direction_sense', 'direction_sense'),
    'SYLLOGISM': ('reasoning_syllogism', 'syllogism'),
    'STATEMENT AND CONCLUSION': ('reasoning_statement_conclusion', 'statement_conclusion')
}

current_target = ('reasoning_analogy', 'analogy')
current_dir = ""
parsed_misc_qs = []

i = 0
while i < len(misc_q_paras):
    line = misc_q_paras[i].strip()
    if not line:
        i += 1
        continue
        
    # Check section heading
    line_upper = line.upper().replace(" ", "")
    matched_head = None
    for h, tgt in subhead_map.items():
        if h.replace(" ", "") in line_upper and len(line) < 45:
            matched_head = tgt
            break
    if matched_head:
        current_target = matched_head
        i += 1
        continue
        
    if 'Miscellaneous Question Bank' in line or (line.isdigit() and len(line) <= 3):
        i += 1
        continue
        
    if re.search(r'Directions?\s*(\(Qs?\.?|\(Question|\d+)', line, re.I):
        current_dir = clean_text(line)
        i += 1
        continue
        
    # Question text
    m_q = re.match(r'^(\d+)\s*[\.\)]\s*(.*)', line)
    q_num = None
    q_text_lines = []
    if m_q:
        q_num = int(m_q.group(1))
        if m_q.group(2).strip():
            q_text_lines.append(m_q.group(2).strip())
    else:
        q_text_lines.append(line)
        
    i += 1
    while i < len(misc_q_paras):
        next_l = misc_q_paras[i].strip()
        if re.search(r'\([bB2]\)', next_l) or re.match(r'^\([aA1]\)', next_l):
            break
        if re.match(r'^\d+\s*[\.\)]', next_l) and len(q_text_lines) > 0:
            break
        if re.search(r'Directions?\s*\(', next_l, re.I):
            break
        q_text_lines.append(next_l)
        i += 1
        
    opt_lines = []
    while i < len(misc_q_paras):
        next_l = misc_q_paras[i].strip()
        if re.match(r'^\d+\s*[\.\)]', next_l) and len(opt_lines) > 0:
            break
        if re.search(r'Directions?\s*\(', next_l, re.I) and len(opt_lines) > 0:
            break
        if re.search(r'\([bBcC]\)', next_l) or re.match(r'^\([aA]\)', next_l) or re.search(r'\([dDeE]\)', next_l) or (len(opt_lines) > 0 and len(next_l) < 40 and not next_l.endswith('?')):
            opt_lines.append(next_l)
            i += 1
            if re.search(r'\([eE]\)', next_l) or (re.search(r'\([dD]\)', next_l) and not re.search(r'\([eE]\)', next_l)):
                if i < len(misc_q_paras) and not re.search(r'^\([eE]\)', misc_q_paras[i].strip()):
                    break
        else:
            break
            
    opts_dict = parse_options_from_lines(opt_lines)
    if not opts_dict or len(opts_dict) < 2:
        continue
        
    q_text = clean_text(" ".join(q_text_lines))
    if current_dir and current_dir not in q_text:
        q_text = f"<b>{current_dir}</b><br><br>{q_text}"
        
    opt_keys = sorted(opts_dict.keys())
    options_arr = [opts_dict[k] for k in opt_keys if opts_dict[k]]
    
    sol_data = misc_sols.get(q_num, ('', '')) if q_num else ('', '')
    correct_letter = sol_data[0].lower() if sol_data else ''
    explanation = sol_data[1] if sol_data else ''
    
    ans_str = ""
    if correct_letter in opts_dict:
        ans_str = opts_dict[correct_letter]
    elif len(options_arr) > 0:
        ans_str = options_arr[0]
        
    if not explanation:
        explanation = f"Option ({correct_letter.upper()}) is the correct answer." if correct_letter else f"Option '{ans_str}' is correct."
        
    # Assign difficulty based on question index
    # 1/3 easy, 1/3 medium, 1/3 hard
    diff = 'medium'
    if q_num:
        if q_num % 3 == 1:
            diff = 'easy'
        elif q_num % 3 == 2:
            diff = 'medium'
        else:
            diff = 'hard'
            
    parsed_misc_qs.append({
        "target_file": current_target[0],
        "topic": current_target[1],
        "difficulty": diff,
        "text": q_text,
        "options": options_arr,
        "answer": ans_str,
        "solution": explanation,
        "q_num": q_num
    })

print(f"Total Miscellaneous Questions extracted: {len(parsed_misc_qs)}")
topic_counts = {}
for q in parsed_misc_qs:
    tf = q['target_file']
    topic_counts[tf] = topic_counts.get(tf, 0) + 1
for tf, count in topic_counts.items():
    print(f"  {tf:35s}: {count:3d} questions")
