if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['reasoning_series'] = [
    {
        "id": "reasoning_series_hard_1",
        "text": "What should come next in the following number series?[CORPORATION BANK (PO)] 9 7 5 3 1 1 8 6 4 2 2 9 7 5 3 1 8 6 4 2 2 9 7 5 3 1 8 6 4 2 9 7 5",
        "options": [
            "1",
            "5",
            "3",
            "8",
            "None of these"
        ],
        "answer": "1",
        "solution": "Option '1' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_2",
        "text": "What should come next in the following number series? 9 8 7 6 1 2 3 4 5 9 8 7 1 2 3 4 5 9 8 7 1 2 3 4 9 8",
        "options": [
            "7",
            "1",
            "2",
            "5",
            "None of these"
        ],
        "answer": "7",
        "solution": "3 1/ 8 6 4 2/ 9 7 5 3/ 8 6 4 2.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_3",
        "text": "<b>Directions (Qs. 3-7): What should come in place of the question mark (?) in the following number series?[ANDHRA BANK PO]</b><br><br>32, 49, 83, 151, 287, 559 ?",
        "options": [
            "1118",
            "979",
            "1103",
            "1120",
            "None of these."
        ],
        "answer": "None of these.",
        "solution": "24 ÷ 4 + 6 - 3 × 4 = 6 + 6 - 12 = 0 462552 650 756 870 992 1122.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_4",
        "text": "<b>Directions (Qs. 3-7): What should come in place of the question mark (?) in the following number series?[ANDHRA BANK PO]</b><br><br>462, 552, 650, 756, 870, 992 ?",
        "options": [
            "1040",
            "1122",
            "1132",
            "1050",
            "None of these"
        ],
        "answer": "1132",
        "solution": "+90 +98 - 106 + 114 - 122 + 130 3249831512875591103 + 17+ 34- 68+ 136+ 272- 544.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_5",
        "text": "<b>Directions (Qs. 3-7): What should come in place of the question mark (?) in the following number series?[ANDHRA BANK PO]</b><br><br>15, 18, 16, 19, 17, 20 ?",
        "options": [
            "23",
            "22",
            "16",
            "18",
            "None of these"
        ],
        "answer": "18",
        "solution": "The correct answer is '18'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_6",
        "text": "<b>Directions (Qs. 3-7): What should come in place of the question mark (?) in the following number series?[ANDHRA BANK PO]</b><br><br>1050, 420, 168, 67.2, 26.88, 10.752 ?",
        "options": [
            "3008",
            "6.5038",
            "4015",
            "6002",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "062460120210336 + (6×1)+ (6×3)- (6×6)+ (6×10) + (6×15)- (6×21) + 2+ 3+ 4+ 5+ 6 Number Series Completion.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_7",
        "text": "<b>Directions (Qs. 3-7): What should come in place of the question mark (?) in the following number series?[ANDHRA BANK PO]</b><br><br>0, 6, 24, 60, 120, 210 ?",
        "options": [
            "343",
            "280",
            "335",
            "295",
            "None of these"
        ],
        "answer": "280",
        "solution": "The pattern of the number series is as given below : 8 + 2 = 10 10 + 8 (= 2 × 3 + 2) = 18 18 + 26 (= 3 × 8 + 2) = 44 44 + 80 (= 3 × 26 + 2) = 124 124 + 424 (= 3 × 80 + 2) = 366.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_8",
        "text": "<b>Directions (Qs. 8-12): What should come in place of the question mark (?) in the following number series?[INDIAN OVERSEAS BANK PO]</b><br><br>8, 10, 18, 44, 124 ?",
        "options": [
            "344",
            "366",
            "354",
            "356",
            "None of these"
        ],
        "answer": "356",
        "solution": "The pattern of the number series is as given below: 13 + 1 × 12 = 13 + 12 = 25 25 + 3 × 12 = 25 + 36 = 61 61 + 5 × 12 = 61 + 60 = 121 121 + 7 × 12 = 121 + 84 = 205 205 + 9 × 12 = 205 + 108 = 313.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_9",
        "text": "<b>Directions (Qs. 8-12): What should come in place of the question mark (?) in the following number series?[INDIAN OVERSEAS BANK PO]</b><br><br>13, 25, 61, 121, 205 ?",
        "options": [
            "323",
            "326",
            "324",
            "313",
            "None of these"
        ],
        "answer": "323",
        "solution": "The pattern of the number series is given as follows: 656  24  328  24  352 2 352  24  176  24  200 2 200  24  100  24  124 2 124  24  62  24  86 13.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_10",
        "text": "<b>Directions (Qs. 8-12): What should come in place of the question mark (?) in the following number series?[INDIAN OVERSEAS BANK PO]</b><br><br>656, 352, 200, 124, 86 ?",
        "options": [
            "67",
            "59",
            "62",
            "57",
            "None of these"
        ],
        "answer": "62",
        "solution": "The pattern of the number series is given as follows: 454 + 18 = 472 472 - 27 = 445 445 + 18 = 463 463 - 27 = 436 436 + 18 = 454.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_11",
        "text": "<b>Directions (Qs. 8-12): What should come in place of the question mark (?) in the following number series?[INDIAN OVERSEAS BANK PO]</b><br><br>454, 472, 445, 463, 436 ?",
        "options": [
            "436",
            "456",
            "454",
            "434",
            "None of these"
        ],
        "answer": "456",
        "solution": "The pattern of the number series is given as follows: 12 × 4 - 30 = 48 - 30 = 18 18 × 4 - 36 = 72 - 36 = 36 36 × 4 - 42 = 144 - 42 = 102 102 × 4 - 48 = 408 - 48 = 360 360 × 4 - 54 = 1440 - 54 = 1386.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_12",
        "text": "<b>Directions (Qs. 8-12): What should come in place of the question mark (?) in the following number series?[INDIAN OVERSEAS BANK PO]</b><br><br>12, 18, 36, 102, 360 ?",
        "options": [
            "1364",
            "1386",
            "1384",
            "1376",
            "None of these"
        ],
        "answer": "1376",
        "solution": "The correct answer is '1376'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_13",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>8, 11, 20, 47, 128 ?",
        "options": [
            "483",
            "488",
            "397",
            "371",
            "None of these"
        ],
        "answer": "397",
        "solution": "The correct answer is '397'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_14",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>71, 78, 99, 134, 183 ?",
        "options": [
            "253",
            "239",
            "246",
            "253",
            "None of these"
        ],
        "answer": "239",
        "solution": "2342.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_15",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>342, 3337.5, 328.5, 315, 297 ? (c)30(d) 20",
        "options": [
            "265.5",
            "274.5",
            "12"
        ],
        "answer": "265.5",
        "solution": "Option '265.5' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_16",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>21. 32, 16, 24, 65, 210, 945, 5197.5",
        "options": [
            "945",
            "16"
        ],
        "answer": "945",
        "solution": "Option '945' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_17",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>16. 161, 164, 179, 242, 497 ? (c) 24 (d) 210",
        "options": [
            "1540",
            "1480"
        ],
        "answer": "1540",
        "solution": "Option '1540' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_18",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>22. 7, 13, 25, 49, 97, 194, 385",
        "options": [
            "13",
            "49"
        ],
        "answer": "13",
        "solution": "Option '13' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_19",
        "text": "<b>Directions (Qs. 13-17): What should come in place of the question mark (?) in the following number series?[CORPORATION BANK PO]</b><br><br>17. 239, 254, 284, 344, 464 ? (c) 97 (d) 194",
        "options": [
            "726",
            "716"
        ],
        "answer": "726",
        "solution": "Option '726' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_20",
        "text": "<b>Directions (Qs. 18-22): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number.</b><br><br>3601, 3602, 1803, 604, 154, 36, 12",
        "options": [
            "3602",
            "1803",
            "604",
            "154",
            "36"
        ],
        "answer": "3602",
        "solution": "Option '3602' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_21",
        "text": "<b>Directions (Qs. 18-22): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number.</b><br><br>4, 12, 42, 196, 1005, 6066, 42511",
        "options": [
            "12",
            "42",
            "1005",
            "196",
            "6066"
        ],
        "answer": "12",
        "solution": "Option '12' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_22",
        "text": "<b>Directions (Qs. 18-22): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number.</b><br><br>2, 8, 12, 20, 30, 42, 56",
        "options": [
            "8",
            "42"
        ],
        "answer": "8",
        "solution": "Option '8' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_23",
        "text": "<b>Directions (Qs. 23-25): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number. [IBPS COMMON WRITTEN EXAM (PO/MT)]</b><br><br>7, 12, 40, 222, 1742, 17390, 208608",
        "options": [
            "7",
            "12",
            "40",
            "1742",
            "208608"
        ],
        "answer": "1742",
        "solution": "The pattern of number series is as follows : 7 × 2 - 2 = 12 582 × 5 + 52 = 2910 + 25 = 2935 2935 × 4 + 42 = 11740 + 16 = 11756 11756 × 3 + 32 = 35268 + 9 = 35277 12 × 4 - (2 + 6) = 48 - 8 = 40.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_24",
        "text": "<b>Directions (Qs. 23-25): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number. [IBPS COMMON WRITTEN EXAM (PO/MT)]</b><br><br>6, 91, 584, 2935, 11756, 35277, 70558",
        "options": [
            "91",
            "70558",
            "584",
            "2935",
            "35277"
        ],
        "answer": "584",
        "solution": "The pattern of number series is as follows : 6 × 7 + 72 = 42 + 49 = 91 91 × 6 + 62 = 546 + 36 = 582 ≠ 584 The pattern of number series is as follows: 9050 - 153 = 9050 - 3375 = 5675 5675 - 133 = 5675 - 2197 = 3478 3478 - 113 = 3478 - 1331 = 2147 2147 - 93 = 2147 - 729 = 1418 1418 - 73 = 1418 - 343 = 1075 ≠ 1077.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_25",
        "text": "<b>Directions (Qs. 23-25): In each of these questions, a number series is given. In each series, only one number is wrong. Find out the wrong number. [IBPS COMMON WRITTEN EXAM (PO/MT)]</b><br><br>9050, 5675, 3478, 2147, 1418, 1077, 950",
        "options": [
            "3478",
            "1418",
            "5675",
            "2147",
            "1077"
        ],
        "answer": "3478",
        "solution": "Option '3478' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_1",
        "text": "<b>Directions (Qs. 1-5): What should come in place of question mark (?) in the following number series?</b><br><br>1, 5, 13, 25, 41, ?",
        "options": [
            "51",
            "57",
            "61",
            "63",
            "None of these"
        ],
        "answer": "51",
        "solution": "Option '51' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_2",
        "text": "<b>Directions (Qs. 1-5): What should come in place of question mark (?) in the following number series?</b><br><br>1, 1, 2, 6, 24, ?, 720",
        "options": [
            "100",
            "104",
            "108",
            "120",
            "None of these"
        ],
        "answer": "100",
        "solution": "+ 16, .......... So, the missing term = 41 + 20 = 61.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_3",
        "text": "<b>Directions (Qs. 1-5): What should come in place of question mark (?) in the following number series?</b><br><br>3. 6, 13, 28, 59, ?",
        "options": [
            "111",
            "113",
            "114"
        ],
        "answer": "111",
        "solution": "The given series is in the pattern ×1, ×2, ×3, ×4, .......... 6 × 5 - 4 = 26 26 × 5 + 4 = 134 134 × 5 - 4 = 666 So, the missing term = 24 × 5= 120 666 × 5 + 4 = 3334.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_4",
        "text": "<b>Directions (Qs. 1-5): What should come in place of question mark (?) in the following number series?</b><br><br>4. 3, 15, ?, 63, 99, 143 (S.S.C.)",
        "options": [
            "27",
            "35",
            "45",
            "56",
            "None of these"
        ],
        "answer": "56",
        "solution": "The given series is in the pattern ×2 + 1, × 2 + 3334 × 5 - 4 = 16666 2, × 2 + 3,....... 16666 × 5 + 4 = ? So, the missing term = 59 × 2 + 4 = 122 ? = 83334.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_5",
        "text": "<b>Directions (Qs. 1-5): What should come in place of question mark (?) in the following number series?</b><br><br>5760, 960, ?, 48, 16, 8(S.S.C)",
        "options": [
            "120",
            "160",
            "192",
            "240",
            "None of these"
        ],
        "answer": "160",
        "solution": "The given series is in the pattern (22 - 1), (42 - 1),.(82 - 1), (102 - 1), (122 - 1). So, the missing term is (62 - 1) = 35.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_6",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>81, 512, 2401, 7776, 15625, 16384, ?",
        "options": [
            "2187",
            "19683",
            "729",
            "512",
            "6561"
        ],
        "answer": "729",
        "solution": "The given series is in the pattern ÷ 6, ÷ 5, ÷ 4, ÷ 3, ÷ 2. So, the missing term is 960 ÷ 5 = 192.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_7",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>8, 64, 216, 512, 1000, 1728, ?",
        "options": [
            "4096",
            "2744",
            "3375",
            "2197",
            "4913"
        ],
        "answer": "4913",
        "solution": "Series is 92, 83, 74, 65, 56, 47, 38 ? = 38 = 6561.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_8",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>72,63, 54, 45, …?…….",
        "options": [
            "36",
            "81",
            "27",
            "90"
        ],
        "answer": "81",
        "solution": "Series is 23, 43, 63, 83, 103, 123, ….. Then, ? = 143 = 2744.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_9",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>9. 3, 7, 14, 24, …?…",
        "options": [
            "34",
            "28",
            "38"
        ],
        "answer": "34",
        "solution": "The gap is of - 9.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_10",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>10. 12, 15, 19, 24, ?",
        "options": [
            "28",
            "27",
            "30"
        ],
        "answer": "28",
        "solution": "The correct answer is '28'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_11",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>2187, 729, 243, 81, 27, 9, ?",
        "options": [
            "36",
            "3",
            "18",
            "6",
            "12"
        ],
        "answer": "6",
        "solution": "The correct answer is '6'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_12",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>6, 26, 134, 666, 3334, 16666, ?",
        "options": [
            "84344",
            "83443",
            "84434",
            "83334",
            "83344"
        ],
        "answer": "83443",
        "solution": "The correct answer is '83443'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_13",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>4, 18, 48, 100, 180, 294, ?",
        "options": [
            "416",
            "480",
            "512",
            "384",
            "448"
        ],
        "answer": "384",
        "solution": "The correct answer is '384'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_14",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>20, 24, 33, 49, 74, 110 ?",
        "options": [
            "133",
            "147",
            "159",
            "163",
            "171"
        ],
        "answer": "133",
        "solution": "Option '133' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_15",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>529, 841, 961, 1369, 1681, 1849, ?",
        "options": [
            "2809",
            "2601",
            "3249",
            "3481",
            "2209"
        ],
        "answer": "2809",
        "solution": "Option '2809' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_16",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>16, 24, 48, 120, 360, 1260, ?",
        "options": [
            "3780",
            "4725",
            "5355",
            "5040",
            "4410"
        ],
        "answer": "3780",
        "solution": "Option '3780' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_17",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>8, 31, 122, 485, 1936, 7739, ?",
        "options": [
            "30950",
            "46430",
            "34650",
            "42850",
            "38540"
        ],
        "answer": "30950",
        "solution": "Option '30950' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_18",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>499, 622, 868, 1237, 1729, 2344, ?",
        "options": [
            "3205",
            "3082",
            "2959",
            "3462",
            "2876"
        ],
        "answer": "3205",
        "solution": "Option '3205' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_19",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>231, 342, 453, 564, ….?...",
        "options": [
            "576",
            "475",
            "675",
            "567",
            "676"
        ],
        "answer": "576",
        "solution": "Option '576' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_beginner_20",
        "text": "<b>Directions (Qs. 6-10): What should come in place of question mark (?) in the following number series?</b><br><br>796, 675, 554, 433, …? …",
        "options": [
            "512",
            "231",
            "213",
            "312",
            "321"
        ],
        "answer": "512",
        "solution": "Option '512' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_1",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>66, 91, 120, 153, 190, 233, 276",
        "options": [
            "120",
            "233",
            "153",
            "276"
        ],
        "answer": "153",
        "solution": "13 + 14 = 27 14 + 27 = 41 27 + 41 = 68 41 + 68 = 109.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_2",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>10. 1331, 2197, 3375, 4914, 6859, 9261, 12167 (c) (e) 961 None of these (d) 1681",
        "options": [
            "4919",
            "6859",
            "9261",
            "2197"
        ],
        "answer": "9261",
        "solution": "The series is: + 22, + 32, + 42, + 52, + 62, …..",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_3",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>13, 14, 27, 45, 68, 109, 177",
        "options": [
            "27",
            "109",
            "45",
            "68",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "The series is : 232, 292, 312, 372, 412, …. (Square of prime numbers).",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_4",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>14, 22, 34.5, 55.5, 87.25, 135.875, 209.125",
        "options": [
            "55.5",
            "34.5",
            "135.875",
            "87.25",
            "None of these"
        ],
        "answer": "87.25",
        "solution": "The series is × 1.5, × 2, × 2.5, × 3, × 3.5.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_5",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>(a)160(b)99013.7, 4, 5, 9, 20, 51, 106.5(c)55832(d)6970(a)4(b)5(a)160(b)99013.7, 4, 5, 9, 20, 51, 106.5(c)55832(d)6970(a)4(b)54.274, 301, 426, 769, 1498, 2824, 5026",
        "options": [
            "160",
            "990"
        ],
        "answer": "160",
        "solution": "The series is × 4 - 1, × 4 - 2, × 4 - 3, × 4 - 4, ….",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_6",
        "text": "<b>Directions (Qs. 1-5): In the following number series only one number is wrong. Find out the wrong number.[BANK OF INDIA PO]</b><br><br>13. 7, 4, 5, 9, 20, 51, 106.5 (c)55832 (d) 6970",
        "options": [
            "160",
            "990"
        ],
        "answer": "990",
        "solution": "The series is + 123,+ (123 × 2),+(123 × 3),+ (123 × 4), ….",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_7",
        "text": "<b>Directions (Qs. 11-15): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>3, 7, 16, 35, 72, 153, 312",
        "options": [
            "7",
            "153",
            "35",
            "72",
            "16"
        ],
        "answer": "72",
        "solution": "The difference of the number is (- 121). 68 + 109 = 117 So, 45 is the wrong number in this series.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_8",
        "text": "<b>Directions (Qs. 11-15): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>12. 18, 20, 23, 32, 48, 73, 109 (c) 769 (d) 2824",
        "options": [
            "20",
            "23"
        ],
        "answer": "20",
        "solution": "The correct answer is '20'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_9",
        "text": "<b>Directions (Qs. 6-10): In the following number</b><br><br>14. 6, 10, 14, 34, 66, 130, 258 wrong number.[BANK OF BARODA PO]",
        "options": [
            "10",
            "14"
        ],
        "answer": "10",
        "solution": "The correct answer is '10'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_10",
        "text": "<b>Directions (Qs. 6-10): In the following number</b><br><br>7.5, 47.5, 87.5, 157.5, 247.5, 357.5, 487.5",
        "options": [
            "357.5",
            "87.5",
            "157.5",
            "7.5",
            "47.5"
        ],
        "answer": "157.5",
        "solution": "Prime numbers will be added. So wrong number =.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_11",
        "text": "<b>Directions (Qs. 6-10): In the following number</b><br><br>15. (c)34(d) 66 (e)130 2, 7, 30, 138, 524, 1557, 3102",
        "options": [
            "7",
            "30",
            "138",
            "524"
        ],
        "answer": "7",
        "solution": "Option '7' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_12",
        "text": "<b>Directions (Qs. 6-10): In the following number</b><br><br>13, 16, 21, 27, 39, 52, 69 (e)1557",
        "options": [
            "21",
            "39",
            "27",
            "52",
            "16"
        ],
        "answer": "39",
        "solution": "The series is + 123,+ (123 × 2),+(123 × 3),+ (123 × 4), ….",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_13",
        "text": "<b>Directions (Qs. 6-10): In the following number</b><br><br>1500, 1581, 1664, 1749, 1833, 1925, 2016",
        "options": [
            "1581",
            "1664",
            "1833",
            "1925",
            "1749"
        ],
        "answer": "1833",
        "solution": "the difference of the numbers (+ 111).",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_14",
        "text": "<b>Directions (Qs. 16-20): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>1, 3, 10, 21, 64, 129, 356, 777(RRB)",
        "options": [
            "21",
            "129",
            "10",
            "356",
            "none of these"
        ],
        "answer": "21",
        "solution": "Option '21' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_1",
        "text": "(a) 10",
        "options": [
            "4",
            "10"
        ],
        "answer": "4",
        "solution": "The series is × 1.5 + 1.5, × 2.5 + 2.5, × 3.5 +.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_2",
        "text": "all are correct (d) 4116 (c) (e) 96 none of these (d) 382 2, 3, 4, 4, 6, 8, 9, 12, 1620. 380, 188, 92, 48, 20, 8, 2",
        "options": [
            "8",
            "20"
        ],
        "answer": "8",
        "solution": "Option '8' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_3",
        "text": "none of these (d) 12 (c) (e) 48 none of these (d) 188",
        "options": [
            "4",
            "10"
        ],
        "answer": "4",
        "solution": "5, × 4.5 + 4.5, × 5.5 + 5.5.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_4",
        "text": "<b>Direction (Qs. 1-5): In each of these questions</b><br><br>What will come in the place of (C)?",
        "options": [
            "63.25",
            "63.75",
            "64.25",
            "64.75",
            "None of these"
        ],
        "answer": "64.25",
        "solution": "The series is × 3 - 13.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_5",
        "text": "<b>Direction (Qs. 1-5): In each of these questions</b><br><br>What will come in the place of (B)?",
        "options": [
            "18",
            "16",
            "22"
        ],
        "answer": "18",
        "solution": "The series is + 7, + 11, + 13, + 17, + 19, + 23 11 + 7 = 18, 18 + 11 = 29, 29 + 13 = 42, 42 + 17 = 59, 59 + 19 = 78, 78 + 23 = 101. 12 Number Series Completion The wrong number is 34650; 17325 × 3 = 51975.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_6",
        "text": "<b>Direction (Qs. 1-5): In each of these questions</b><br><br>What will come in the place of (D)?",
        "options": [
            "152",
            "156",
            "108",
            "112",
            "None of these"
        ],
        "answer": "112",
        "solution": "The series is (+ 7 × 1), (+ 6 × 2), (+ 5 × 3), (+ 4 × 4), (+ 3 × 5), (+ 2 × 6). The wrong number is 32; (9 + 6) × 2 = 15 × 2 = 30.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_7",
        "text": "<b>Direction (Qs. 1-5): In each of these questions</b><br><br>(RRB) What will come in the place of (E)?",
        "options": [
            "945",
            "895",
            "925",
            "845",
            "None of these"
        ],
        "answer": "895",
        "solution": "The series is × 11, × 7, × 5, × 3, × 1. The wrong no. is 34650; 17325 × 3 = 51975.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_8",
        "text": "<b>Direction (Qs. 6-7): In the following number series only one number is wrong. Find out the wrong number.[CORPORATION BANK (PO)]</b><br><br>8, 11, 17, 47, 128, 371, 1100",
        "options": [
            "11",
            "47",
            "17",
            "371",
            "128"
        ],
        "answer": "11",
        "solution": "The series is 22, + 32, + 42, + 52, + 62, + 72 . The wrong no. is 56; 32 + 52 = 32 + 25 = 57.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_9",
        "text": "<b>Direction (Qs. 6-7): In the following number series only one number is wrong. Find out the wrong number.[CORPORATION BANK (PO)]</b><br><br>1, 5, 13, 31, 61, 125, 253",
        "options": [
            "1",
            "5",
            "31",
            "61",
            "125"
        ],
        "answer": "31",
        "solution": "The series is × 1 + 1, × 2 + 2, × 3 + 3, × 4 + 4, × 5 + 5, × 6 + 6. The wrong no. is 38; 12 × 3 + 3 = 36 + 3 = 39.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_10",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>11, 18, 29, 42, 59, 80, 101",
        "options": [
            "42",
            "18",
            "29",
            "59",
            "None of these"
        ],
        "answer": "59",
        "solution": "The series is × 7 - 1, × 6 - 1, × 5 - 1, × 4 - 1, × 3 - 1.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_11",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>2, 9, 32, 105, 436, 2195, 13182",
        "options": [
            "436",
            "2195"
        ],
        "answer": "436",
        "solution": "The series is + 22, + 42, + 62, + 82 + 102.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_12",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>None of these What will come in the place of (D)?",
        "options": [
            "985",
            "895",
            "925",
            "845"
        ],
        "answer": "985",
        "solution": "The series is ÷ 5.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_13",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>5, 55, 495, 3465, 17325, 34650, 51975",
        "options": [
            "495",
            "34650",
            "55",
            "17325",
            "None of these"
        ],
        "answer": "34650",
        "solution": "The series is + 3, + 6, + 12, + 24, + 48, ….",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_14",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>3, 7, 16, 32, 56, 93, 142",
        "options": [
            "56",
            "16",
            "32"
        ],
        "answer": "32",
        "solution": "The series is × 1 + 1, × 2 + 2, × 3 + 3, × 4 + 4, × 5 + 5.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_15",
        "text": "<b>Direction (Qs. 8-12): In the following number series only one number is wrong. Find out the wrong number.</b><br><br>4, 5, 12, 38, 160, 805, 4835",
        "options": [
            "12",
            "160",
            "38",
            "805",
            "None of these"
        ],
        "answer": "160",
        "solution": "The series is 11111  2  2,  2  2,  2  2,  2  2,  2  2.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_16",
        "text": "<b>Direction (Qs. 13-17) What should come in place of the question mark (?) in the following number series?[IDBI BANK (PO)]</b><br><br>9, 62, ?, 1854, 7415, 22244",
        "options": [
            "433",
            "309",
            "406",
            "371",
            "None of these"
        ],
        "answer": "371",
        "solution": "The series is × 1 + 2, × 2 + 3, × 3 + 4, × 4 + 5, × 5 + 6, × 6 + 7. Correct answer 177.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_17",
        "text": "<b>Direction (Qs. 13-17) What should come in place of the question mark (?) in the following number series?[IDBI BANK (PO)]</b><br><br>6, 7, 16, 41, 90, 154, 292",
        "options": [
            "7",
            "16",
            "41",
            "90",
            "154"
        ],
        "answer": "154",
        "solution": "The series + (1)2, + (3)2, + (5)2, + (7)2, + (9)2, + (11)2. Correct answer 171.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_18",
        "text": "<b>Direction (Qs. 13-17) What should come in place of the question mark (?) in the following number series?[IDBI BANK (PO)]</b><br><br>5, 7, 16, 57, 244, 1245, 7506",
        "options": [
            "7",
            "16",
            "57",
            "244",
            "1245"
        ],
        "answer": "7",
        "solution": "The series is × 1 + (1)2, × 2 + (2)2, × 3 + (3)2, × 4 + (4)2, × 5 + (5)2, × 6 + (6)2.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_19",
        "text": "<b>Direction (Qs. 13-17) What should come in place of the question mark (?) in the following number series?[IDBI BANK (PO)]</b><br><br>4, 2.5, 3.5, 6.5, 15.5, 41.25, 126.75",
        "options": [
            "5",
            "5",
            "6.5",
            "15.5"
        ],
        "answer": "6.5",
        "solution": "The series is  1  1 ,  1  1,  1.5  1.5,  2  2,  2.5  2.5,  3  3 22 Correct answer is 6.75.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_20",
        "text": "<b>Direction (Qs. 23-27) What should come in place of the question mark (?) in the following questions?</b><br><br>23. 325, 314, 288, 247, 191 ? (c) 109 (d) 141",
        "options": [
            "126",
            "116"
        ],
        "answer": "126",
        "solution": "The correct answer is '126'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_21",
        "text": "<b>Direction (Qs. 23-27) What should come in place of the question mark (?) in the following questions?</b><br><br>8000, 1600, 320, 64, 12.8 ?",
        "options": [
            "56",
            "5",
            "2",
            "98",
            "None of these"
        ],
        "answer": "5",
        "solution": "The series is × 1 + 1, × 1.5 + 1, × 2 + 1, × 2.5 + 1, × 3 + 1, ….",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_22",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>484, 240, 120, 57, 26.5, 11.25, 3.625",
        "options": [
            "240",
            "120",
            "57",
            "26.5",
            "11.25"
        ],
        "answer": "57",
        "solution": "The series is + 12, - 24, + 36, - 48, + 60, ….",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_23",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>45, 46, 70, 141, ?, 1061.5",
        "options": [
            "353",
            "353.5",
            "352.5",
            "352"
        ],
        "answer": "353",
        "solution": "The series is × 2 - 5, × 2 - 10, × 2 - 15, × 2 - 20, × 2 - 25, ….",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_24",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>(a)84(b)99(c)123(d)7525.(e)None of these17.7, 8,18, ?, 232, 1165(a)84(b)42(c)(e)57None of these(d)3626.(a)84(b)99(c)123(d)7525.(e)None of these17.7, 8,18, ?, 232, 1165(a)84(b)42(c)(e)57None of these(d)3626.(e)None of these",
        "options": [
            "84",
            "99",
            "123"
        ],
        "answer": "84",
        "solution": "× 2.5 + 20.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_25",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>17. 7, 8, 18, ?, 232, 1165",
        "options": [
            "84",
            "42"
        ],
        "answer": "84",
        "solution": "The given series is + (11 × 1), + (11 × 3), + (11 × 5), + (11 × 7), + (11 × 9). So next no. is 302.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_26",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>26.",
        "options": [
            "84",
            "99",
            "123"
        ],
        "answer": "123",
        "solution": "The given series is - (9 × 9), - (9 × 8), - (9 × 7), - (9 × 6), - (9 × 5).",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_27",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>26. 620, 632, 608, 644, 596 ?",
        "options": [
            "536",
            "556",
            "656",
            "646",
            "None of these"
        ],
        "answer": "556",
        "solution": "The series is × 1 + 1, × 1.5 + 1, × 2 + 1, × 2.5 + 1, × 3 + 1, ….",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_28",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>15, 25, 40, 65, ?, 195",
        "options": [
            "115",
            "90",
            "105",
            "120",
            "None of these"
        ],
        "answer": "115",
        "solution": "Option '115' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_29",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>120, 320, ?, 2070, 5195, 13007.5",
        "options": [
            "800",
            "920",
            "850"
        ],
        "answer": "850",
        "solution": "The series is + 12, - 24, + 36, - 48, + 60, ….",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_30",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>27, 38, 71, 126, 203 ?",
        "options": [
            "212",
            "202",
            "43"
        ],
        "answer": "212",
        "solution": "The series is × 2 - 5, × 2 - 10, × 2 - 15, × 2 - 20, × 2 - 25, ….",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_31",
        "text": "<b>Direction (Qs. 18-22): In the following number series only one number is wrong. Find out the wrong number.[ALLAHABAD BANK (PO)]</b><br><br>435, 354, 282, 219, 165 ?30. 4, 200, 369, 513, 634 ?",
        "options": [
            "788",
            "715",
            "120"
        ],
        "answer": "788",
        "solution": "× 2.5 + 20.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_32",
        "text": "<b>Directions (Qs. 149 to 158): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CGL 2012] Miscellaneous Question Bank Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it? _ c _ b d _ c b c d a _ a _ a _ d b _ a",
        "options": [
            "daabbc",
            "bdbcba",
            "adabcd",
            "cdbbca"
        ],
        "answer": "daabbc",
        "solution": "Option 'daabbc' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_33",
        "text": "<b>Directions (Qs. 160 to 163): Identify wrong number in the series.[SSC CGL 2012]</b><br><br>9, 19, 40, 83, 170, 340",
        "options": [
            "83",
            "40",
            "340"
        ],
        "answer": "83",
        "solution": "Option '83' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_34",
        "text": "<b>Directions (Qs. 160 to 163): Identify wrong number in the series.[SSC CGL 2012]</b><br><br>(a)21(b)36(c)33(d)35162. 5, 13, 29, 61, 120, 253(a)120(b)253(c)61(d)29163. 0, 7, 28, 63, 124, 215(a)28(b)215(c)7(d)63(a)21(b)36(c)33(d)35162. 5, 13, 29, 61, 120, 253(a)120(b)253(c)61(d)29163. 0, 7, 28, 63, 124, 215(a)28(b)215(c)7(d)6321, 28, 33, 35, 37, 36",
        "options": [
            "21",
            "36",
            "33"
        ],
        "answer": "21",
        "solution": "Option '21' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_26",
        "text": "<b>Directions (Qs. 160 to 163): Identify wrong number in the series.[SSC CGL 2012]</b><br><br>5, 13, 29, 61, 120, 253",
        "options": [
            "120",
            "253",
            "61"
        ],
        "answer": "253",
        "solution": "acdbdacbcdabacdbdaacdbdacbcdabacdbda(c)The pattern is- acdb dacb cdab acdb da acdb dacb cdab acdb da.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_15",
        "text": "<b>Directions (Qs. 160 to 163): Identify wrong number in the series.[SSC CGL 2012]</b><br><br>0, 7, 28, 63, 124, 215",
        "options": [
            "28",
            "215",
            "7"
        ],
        "answer": "7",
        "solution": "9 × 2 + 1 = 18 + 1 = 19 19 × 2 + 2 = 38 + 2 = 40 40 × 2 + 3 = 80 + 3 = 83 83 × 2 + 4 = 166 + 4 = 170 170 × 2 + 5 = 340 + 5 = 345. Hence 340 is wrong.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_35",
        "text": "<b>Directions (Qs. 160 to 163): Identify wrong number in the series.[SSC CGL 2012]</b><br><br>(a)21",
        "options": [
            "36",
            "33"
        ],
        "answer": "36",
        "solution": "Option '36' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_36",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CGL 2013]",
        "options": [
            "X",
            "Y",
            "A",
            "Z2, 3, 5, 9, 17, ?"
        ],
        "answer": "X",
        "solution": "Option 'X' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_27",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>DA, HE, LI, ? TN",
        "options": [
            "PJ",
            "PT",
            "PM"
        ],
        "answer": "PM",
        "solution": "D +4 H +4 D +4 E +4 +4+4 PJPJL T P J P J +4+4 I N.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_16",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>B E I N T ?",
        "options": [
            "X",
            "Y",
            "A"
        ],
        "answer": "X",
        "solution": "6 + 7 + 6 + 2 + 6 = 27 divisible by 3 B 3 E 4 I 5 N 6 T 7 A 8 + 4 + 1 + 2 + 9 = 24 divisible by 3 3 + 2 + 4 + 1 + 8 = 18 divisible by 3 4 + 7 + 6 + 3 + 2 = 22 not divisible by 3.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_37",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>Z",
        "options": [
            "FEDCB",
            "IHGFE"
        ],
        "answer": "FEDCB",
        "solution": "Option 'FEDCB' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_38",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>AZ, CX, EV, ?",
        "options": [
            "HT",
            "HU",
            "GS"
        ],
        "answer": "GS",
        "solution": "Except Eye, rest all are abdominal organ.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_28",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>D9Y, J27S, P81M, V243G, ?",
        "options": [
            "A324B",
            "C729B",
            "B729A"
        ],
        "answer": "A324B",
        "solution": "Catalysis: A process of acceleration of.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_17",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>BCFG, JKNO, RSVW, ?",
        "options": [
            "ZADE",
            "STUX"
        ],
        "answer": "ZADE",
        "solution": "The correct answer is 'ZADE'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_39",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>CIM, HNR, MSW, ?",
        "options": [
            "SXA",
            "UYB",
            "RXB",
            "ZEH"
        ],
        "answer": "RXB",
        "solution": "A +2 C +2E +2 GTGT- 2-2-2 G T G T Z X V Chemical Reaction. Condensation: Conversion of vapour into liquid. Conduction: Transfer of heat or electricity. Coagulation: A process of cloting of blood. As Coagulation process takes place inside a body.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_29",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>2, 3, 6, 7, 14, 15, ? .(a)16",
        "options": [
            "30",
            "31"
        ],
        "answer": "31",
        "solution": "Except option (c) all are mammal whereas scarab is an insect. QQSS(d) Except option (d) all are separated by 1 letter Q Q S S.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_18",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>3120, ? , 122, 23, 4",
        "options": [
            "488",
            "621",
            "610"
        ],
        "answer": "488",
        "solution": "B C F G 2, 3, 6, 7 J K N O 10, 11, 14, 15 R S V W 18, 19, 22, 23 Next sequence = 26, 27, 30, 31 = 26, 1, 4, 5 = Z A D E (subtract the excess value by 26).",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_40",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>0, 5, 60, 615,?",
        "options": [
            "6030",
            "6170",
            "6130"
        ],
        "answer": "6130",
        "solution": "+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5+5C I M,H N R,M S W,R X B +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 +5 MMBBNNP L A M M M B B N N R N C O TV UUOOQQPR U U O O Q Q DDFFEG D D F F PPRRQ P P R R Miscellaneous Question BankBDF+1+1+1CEG+1+1+1DFHMiscellaneous Question BankBDF+1+1+1CEG+1+1+1DFHQB-42 Miscellaneous Question Bank B D F +1 +1 +1 C E G +1 +1 +1 D F H Miscellaneous Question Bank B D F +1 +1 +1 C E G +1 +1 +1 D F H.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_41",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>6000 7, 12, 22, 42, 82, ?",
        "options": [
            "173",
            "182",
            "183"
        ],
        "answer": "173",
        "solution": "Option '173' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_19",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>ACE, BDF, CEG, ? (d) 143",
        "options": [
            "DEF",
            "DFH",
            "DEH"
        ],
        "answer": "DEF",
        "solution": "The correct answer is 'DEF'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_42",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>ABC PQR DEF STU ?",
        "options": [
            "VWX",
            "GHI",
            "IJK"
        ],
        "answer": "VWX",
        "solution": "c c b a b b c a a a b c c c b a b.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_43",
        "text": "<b>Directions (Qs. 164 to 168): A series is given with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>GKL Choose the correct alternative to complete the series. Lily, Daisy, Datura, ?[SSC CGL 2015]",
        "options": [
            "Sun Flower",
            "Hibiscus",
            "Marigold",
            "Jasmine"
        ],
        "answer": "Sun Flower",
        "solution": "Option 'Sun Flower' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_44",
        "text": "<b>Directions (Qs. 169 to 170): In the following questions, which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?[SSC CGL 2015]</b><br><br>ccbab_caa_bccc_a_",
        "options": [
            "babb",
            "bbba",
            "baab",
            "babc"
        ],
        "answer": "babb",
        "solution": "Option 'babb' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_45",
        "text": "<b>Directions (Qs. 169 to 170): In the following questions, which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?[SSC CGL 2015]</b><br><br>a_ _ dba _ _ bcad _ _ da _ _ cd",
        "options": [
            "bccdbcab",
            "abcddcba",
            "cbcddcba",
            "aabbccdd"
        ],
        "answer": "bccdbcab",
        "solution": "Option 'bccdbcab' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_46",
        "text": "<b>Directions (Qs. 171 to 172): In the following questions, a series is given, which one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CGL 2015] 4, 6, 10, 16, 24, ?",
        "options": [
            "28",
            "30",
            "34",
            "40"
        ],
        "answer": "28",
        "solution": "Option '28' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_47",
        "text": "<b>Directions (Qs. 171 to 172): In the following questions, a series is given, which one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>3, 5, 9, 17, ?",
        "options": [
            "26",
            "65",
            "33",
            "42"
        ],
        "answer": "26",
        "solution": "Option '26' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_30",
        "text": "<b>Directions (Qs. 173 to 175): A series is given, with one/two term missing. Choose the correct alternative from the given ones that will complete the series.[SSC CGL 2015]</b><br><br>3, 5, 35, 10, 12, 35, ,",
        "options": [
            "17, 19",
            "19, 35",
            "19, 24"
        ],
        "answer": "19, 35",
        "solution": "The given logic is as follows, where, 5 × 2 = 10 10 × 2 = 20 20 × 2 = 40 40 × 2 = 80.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_20",
        "text": "<b>Directions (Qs. 173 to 175): A series is given, with one/two term missing. Choose the correct alternative from the given ones that will complete the series.[SSC CGL 2015]</b><br><br>36, 34, 30, 28, 24, ?",
        "options": [
            "20",
            "22",
            "26"
        ],
        "answer": "22",
        "solution": "The given logic is as, ACF +1+1+0 IEM +3 +4+2 LIO +3 +4+2 OMQ.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_48",
        "text": "<b>Directions (Qs. 173 to 175): A series is given, with one/two term missing. Choose the correct alternative from the given ones that will complete the series.[SSC CGL 2015]</b><br><br>Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it? [SSC CGL 2015] BR NB O NB",
        "options": [
            "OWRW",
            "OWOW",
            "WNWN",
            "RORO"
        ],
        "answer": "OWRW",
        "solution": "Option 'OWRW' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_49",
        "text": "<b>Directions (Qs. 177 to 178): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CGL 2015] 1, 2, 2, 4, 3, 8, 7, 10, ?",
        "options": [
            "13",
            "8",
            "11"
        ],
        "answer": "13",
        "solution": "Option '13' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_21",
        "text": "<b>Directions (Qs. 177 to 178): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>0, 7, 26, 63, ?",
        "options": [
            "96",
            "124",
            "123"
        ],
        "answer": "96",
        "solution": "Given sequence is, B R O W N/ B R O W N/ Bonly U can complete the series of letters. O W R W is the set of missing letters.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_50",
        "text": "<b>Directions (Qs. 179 to 181): A series is given, with one term missing. Choose, the correct alternative from the given ones that will complete the series.</b><br><br>AMN, BOP, CQR,?",
        "options": [
            "BAS",
            "DST",
            "EQP",
            "FRS"
        ],
        "answer": "BAS",
        "solution": "Option 'BAS' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_31",
        "text": "<b>Directions (Qs. 179 to 181): A series is given, with one term missing. Choose, the correct alternative from the given ones that will complete the series.</b><br><br>5, 6, 9, 14, 21, ?",
        "options": [
            "28",
            "30",
            "31",
            "29"
        ],
        "answer": "28",
        "solution": "Option '28' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_22",
        "text": "<b>Directions (Qs. 179 to 181): A series is given, with one term missing. Choose, the correct alternative from the given ones that will complete the series.</b><br><br>4, 11, 30, 67, 128, ?",
        "options": [
            "219",
            "228",
            "231"
        ],
        "answer": "219",
        "solution": "Option '219' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_51",
        "text": "<b>Directions (Qs. 179 to 181): A series is given, with one term missing. Choose, the correct alternative from the given ones that will complete the series.</b><br><br>Which one seat of letters when sequentially placed at the gaps in the given letter series shall complete it? mc m a ca ca c mc [SSC CHSL 2013]",
        "options": [
            "a e m m m a",
            "c a m c a m",
            "a a a c m m",
            "a c m m m c"
        ],
        "answer": "a e m m m a",
        "solution": "Option 'a e m m m a' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_52",
        "text": "<b>Directions (Qs. 179 to 181): A series is given, with one term missing. Choose, the correct alternative from the given ones that will complete the series.</b><br><br>Some letters are given below in the first line and numbers are given below them in the second line. numbers are the codes for the alphabets and vice-versa. Choose the correct number-code for the given set of alphabets. CWEAZ X [SSC CHSL 2013] JYKL 39574 8 102 6 J W X C L Z",
        "options": [
            "1 9 8 3 6 4",
            "1 9 8 2 6 4",
            "1 9 8 3 5 4",
            "1 9 7 3 5 4"
        ],
        "answer": "1 9 8 3 6 4",
        "solution": "Option '1 9 8 3 6 4' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_53",
        "text": "<b>Directions (Qs. 184 to 186): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CHSL 2015] 127, 131, 139, ? , 151, 157, 163, 167.",
        "options": [
            "141",
            "143",
            "147",
            "149"
        ],
        "answer": "141",
        "solution": "Option '141' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_54",
        "text": "<b>Directions (Qs. 184 to 186): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>1, 1, 2, 3, 5, ? , 13, 21",
        "options": [
            "6",
            "8",
            "7",
            "9"
        ],
        "answer": "6",
        "solution": "Option '6' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_55",
        "text": "<b>Directions (Qs. 184 to 186): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>361, ? , 169, 121, 49, 25.",
        "options": [
            "289",
            "196",
            "256"
        ],
        "answer": "289",
        "solution": "Option '289' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_23",
        "text": "<b>Directions (Qs. 184 to 186): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>i _ _ _ ij _ l _ _ l Miscellaneous Question Bank the gaps in the given letter series shall complete it? [SSC CHSL 2015] aac bba cc baa cb",
        "options": [
            "abaac",
            "cabcb",
            "bacbc",
            "bcacb"
        ],
        "answer": "cabcb",
        "solution": "The correct answer is 'cabcb'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_56",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CHSL 2015] 8, 13, 18, 23, _?_, 33, 38",
        "options": [
            "23",
            "26",
            "33"
        ],
        "answer": "23",
        "solution": "Option '23' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_24",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>1001, 1004, 1012, 1027, _?_",
        "options": [
            "1036",
            "1051",
            "1050"
        ],
        "answer": "1036",
        "solution": "Option '1036' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_57",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>HIJPQRDEF _?_ VW",
        "options": [
            "N",
            "H",
            "U"
        ],
        "answer": "N",
        "solution": "Option 'N' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_32",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>AC, EG, IK _?_",
        "options": [
            "ON",
            "LM",
            "MO"
        ],
        "answer": "MO",
        "solution": "A ↓ C , E ↓ G , I ↓ K , M↓O.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_25",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>8, 24, _?_, 80, 120",
        "options": [
            "72",
            "54",
            "40"
        ],
        "answer": "72",
        "solution": "+2+4+2 1, 2, 2, 4, 3, 8, 7, 10, BF.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_58",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>Find the pattern and select figure from alternatives which should come after the question figures. [SSC CHSL 2015]",
        "options": [
            "jklikjj",
            "klijkkl",
            "jklijkl",
            "jklkijk"
        ],
        "answer": "jklikjj",
        "solution": "Option 'jklikjj' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_59",
        "text": "<b>Directions (Qs. 189 to 193): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>ab _ _ _ b _ bbaa _",
        "options": [
            "babba",
            "abbab",
            "baaab",
            "abaab"
        ],
        "answer": "babba",
        "solution": "Option 'babba' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_60",
        "text": "<b>Directions (Qs. 198 to 199): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>[SSC CHSL 2015] 3, 11, 31, 57, 91, 133,",
        "options": [
            "181",
            "143",
            "183",
            "151"
        ],
        "answer": "181",
        "solution": "Option '181' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_61",
        "text": "<b>Directions (Qs. 198 to 199): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>8, 16. 48, 96, 288, 576,",
        "options": [
            "1052",
            "1728",
            "2880",
            "1152"
        ],
        "answer": "1052",
        "solution": "Option '1052' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_62",
        "text": "<b>Directions (Qs. 198 to 199): A series is given, with one term missing. Choose the correct alternative from the given ones that will complete the series.</b><br><br>Which figures have equal frequency? [SSC CHSL 2015] 7 8 9 7 6 5 3 4 2 8 9 7 2 4 5 9 2 9 7 6 4 7",
        "options": [
            "8, 6, 5",
            "3, 7, 5",
            "2, 5, 3",
            "2, 4, 5"
        ],
        "answer": "8, 6, 5",
        "solution": "Option '8, 6, 5' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_63",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>[SSC CHSL 2015] adb ac da cddcb dbc cbda",
        "options": [
            "bab",
            "bbb",
            "bba",
            "aabQuestion Figures:"
        ],
        "answer": "bab",
        "solution": "Option 'bab' is correct.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_64",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>(a)c c b b a",
        "options": [
            "b b c a d",
            "b c c b a"
        ],
        "answer": "b b c a d",
        "solution": "Option 'b b c a d' is correct.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_26",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>a_b_ca_b_c_a_cc",
        "options": [
            "a b a b a c",
            "a c b c a b",
            "a b a b c a"
        ],
        "answer": "a b a b a c",
        "solution": "In every step, two lines erase as we move from left to right in the question figure.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_65",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>oopqop_qoo_qo_oqo_pq",
        "options": [
            "opop",
            "poop",
            "oppo"
        ],
        "answer": "opop",
        "solution": "The correct answer is 'opop'. Following the core principles of series, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_hard_33",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>_ _ babbba _ a _ _",
        "options": [
            "babbb",
            "baaab",
            "ababb"
        ],
        "answer": "babbb",
        "solution": "The pattern is i j k l i j k l i j k l.",
        "formula": "Alternating Series Rule: Separate odd-indexed terms (1, 3, 5) and even-indexed terms (2, 4, 6).",
        "shortcut": "For alphabet series, assign numerical ranks: E=5, J=10, O=15, T=20, Y=25 (EJOTY rule).",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_easy_27",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>a_baa_baa_ba",
        "options": [
            "bab",
            "bbb",
            "bba"
        ],
        "answer": "bba",
        "solution": "The pattern is ab ba a b a b ba a b.",
        "formula": "Difference Progression: d_n = T_{n+1} - T_n. For AP: d is constant. For 2nd-order AP: Δ² is constant.",
        "shortcut": "First compute consecutive differences. If 1st difference isn't constant, take the 2nd difference (differences of differences).",
        "commonMistakes": "Assuming a series is purely geometric before checking arithmetic step differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "series",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_66",
        "text": "<b>Directions (Qs. 201 to 205): Which one set of letters when sequentially placed at the gaps in the given letter series shall complete it?</b><br><br>aab",
        "options": [
            "c c b b a",
            "b b c a d",
            "b c c b a"
        ],
        "answer": "c c b b a",
        "solution": "Option 'c c b b a' is correct.",
        "formula": "Multiplicative Series (GP): T_n = T_1 × r^(n-1), or T_n = T_{n-1} × k ± c.",
        "shortcut": "If numbers escalate rapidly, test multiplication by (×2+1, ×3+2) or power series (n³ - n²).",
        "commonMistakes": "Missing alternating independent sequences running in odd and even positions simultaneously.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_series_medium_67",
        "text": "<b>Directions (Qs. 195 to 197): In the following questions, which one set of letters when sequentially placed at the gaps in the given letters series shall complete it?[SSC CHSL 2015]</b><br><br>opo_ _ po_ppo_ _ pppo _ op _ p",
        "options": [
            "opopooo",
            "opoooop",
            "opopoop",
            "ooopppo"
        ],
        "answer": "opopooo",
        "solution": "Option 'opopooo' is correct.",
        "formula": "Square & Cube Pattern: T_n = n² ± k or n³ ± k. Check power differences.",
        "shortcut": "Look at the last digit cyclicity or alternating positive/negative operations to quickly eliminate 2-3 options.",
        "commonMistakes": "Miscalculating prime number gaps by confusing 9 or 15 as prime.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "series",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "series",
            "medium",
            "verified"
        ]
    }
];
