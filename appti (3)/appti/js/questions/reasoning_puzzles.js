if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['reasoning_puzzles'] = [
    {
        "id": "reasoning_puzzles_beginner_1",
        "text": "<b>Directions (Qs. 1-6): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. [United Bank of India (PO)] Input : shop 17 table 20 53 oven desk 39 Step I: 17 shop table 20 53 oven desk 39 Step II: 17 table shop 20 53 oven desk 39 Step III: 17 table 20 shop 53 oven desk 39 Step IV: 17 table 20 shop 39 53 oven desk Step V: 17 table 20 shop 39 oven 53 desk and step V is the last step of the rearrangement. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input. Input: 89 bind 32 goal house 61 12 joy How many steps will be required to complete the arrangement?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven",
            "None of these"
        ],
        "answer": "Six",
        "solution": "Input: 89 bind 32 goal house 61 12 joy Step I: 12 89 bind 32 goal house 61 joy Step II: 12 joy 89 bind 32 goal house 61 Step III: 12 joy 32 89 bind goal house 61 Step IV: 12 joy 32 house 89 bind goal 61 Step V: 12 joy 32 house 61 89 bind goal Step VI: 12 joy 32 house 61 goal 89 bind.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_2",
        "text": "<b>Directions (Qs. 1-6): Study the following information carefully and answer the given question:</b><br><br>Step II of an input is: 15 yes 62 51 48 talk now gone Which of the following will be step VI? 15 yes 48 talk 51 now gone 62 15 yes 48 talk 51 62 now gone 15 yes 48 talk 51 now 62 gone There will be no such step None of these Step III of an input is: 21 victory 30 joint 64 47 all gone How many more step will be required to complete the rearrangement?",
        "options": [
            "Three",
            "Four",
            "Five",
            "Six",
            "None of these"
        ],
        "answer": "Five",
        "solution": "Step II: 15 yes 62 51 48 talk now gone Step III: 15 yes 48 62 51 talk now gone Step IV: 15 yes 48 talk 62 51 now gone Step V: 15 yes 48 talk 51 62 now gone Step VI: 15 yes 48 talk 51 now 62 gone.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_3",
        "text": "<b>Directions (Qs. 1-6): Study the following information carefully and answer the given question:</b><br><br>Input: win 92 task 73 59 house range 34 Which of the following will be step IV of the above input? 34 win 59 task 73 range 92 house 34 win 92 59 task 73 house range 34 win 92 task 73 59 house range There will be no such step None of these Input: save 21 43 78 them early 36 for Which of the following steps will be the last but one?",
        "options": [
            "VI",
            "VII",
            "VIII",
            "V",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Step III: 21 victory 30 joint 64 47 all gone Step IV: 21 victory 30 joint 47 64 all gone Step V: 21 victory 30 joint 47 gone 64 all 5 - 3 = 2 more steps will be required.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_4",
        "text": "<b>Directions (Qs. 1-6): Study the following information carefully and answer the given question:</b><br><br>Input: desire 59 63 all few 38 46 zone How many steps will be required to complete the rearrangement?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Input: win 92 task 73 59 house range 34 Step I: 34 win 92 task 73 59 house range Step II: 34 win 59 92 task 73 house range Step III: 34 win 59 task 92 73 house range Step IV: 34 win 59 task 73 92 house range.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_5",
        "text": "<b>Directions (Qs. 7-11): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. [Andhra Bank (PO)] Input : base 35 or gone 62 49 87 ahead Step I: 87 base 35 or gone 62 49 ahead Step II: 87 ahead base 35 or gone 62 49 Step III: 87 ahead 62 base 35 or gone 49 Step IV: 87 ahead 62 base 49 35 or gone Step V: 87 ahead 62 base 49 gone 35 or and Step V is the last step of the rearrangement. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input. Input: how was your stay 56 25 36 64 Which of the following will be step VI? 64 how 56 was your stay 25 36 64 how 56 stay 36 was 25 your 64 how 56 stay 36 was your 25 There will be no such step None of these 90 Input Output Input: power fail now 52 24 75 gate 34 Which of the following will be step the last but one?",
        "options": [
            "IV",
            "V",
            "VI",
            "VII",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Input: save 21 43 78 them early 36 for Step I: 21 save 43 78 them early 36 for Step II: 21 them save 43 78 early 36 for Step III: 21 them 36 save 43 78 early for Step IV: 21 them 36 save 43 for 78 early Hence step III will be the last but one.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_6",
        "text": "<b>Directions (Qs. 7-11): Study the following information carefully and answer the given question:</b><br><br>Step III of an input is: 91 car 85 14 27 few new house Which of the following is definitely the input? 85 14 91 car 27 few new house Car 91 85 14 27 few new house Car 85 14 27 few new house 91 Cannot be determined None of these Step II of an input is: 75 down 16 24 farm eager 62 sky How many more steps will be required to complete the rearrangement?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven",
            "None of these"
        ],
        "answer": "Five",
        "solution": "Input: desire 59 63 all few 38 46 zone Step I: 38 desire 59 63 all few 46 zone Step II: 38 zone desire 59 63 all few 46 Step III: 38 zone 46 desire 59 63 all few Step IV : 38 zone 46 few desire 59 63 all Step V: 38 zone 46 few 59 desire 63 all Solution for 7 -11: In the first step, the largest number comes to the first position and the remaining line shift rightward. In the next step the word that comes first in the alphabetical order goes on to occupy the second position pushing the rest of the shift rightward. This goes alternately till all the number are arranged in a descending order and all the words in alphabetical at alternate positions.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_7",
        "text": "<b>Directions (Qs. 7-11): Study the following information carefully and answer the given question:</b><br><br>Input: 14 35 when they came 61 48 home How many steps will be required to complete the rearrangement?",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven",
            "None of these"
        ],
        "answer": "Seven",
        "solution": "Input: how was your stay 56 25 36 64 Step I: 64 how was your stay 56 25 36 Step II: 64 how 56 was your stay 25 36 Step III: 64 how 56 stay was your 25 36 Step IV: 64 how 56 stay 36 was your 25 Step V: 64 how 56 stay 36 was 25 your Since the line gets fully arranged in step V there will be no step VI.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_8",
        "text": "<b>Directions (Qs. 12-17): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Input: but 32 71 glory fair south 65 84 Step I: south but 32 71 glory fair 65 84 Step II: south 84 but 32 71 glory fair 65 Step III: south 84 glory but 32 71 fair 65 Step IV: south 84 glory 71 but 32 fair 65 Step V: south 84 glory 71 fair but 32 65 Step VI: south 84 glory 71 fair 65 but 32 and Step VI is the last step of the rearrangement. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input.[RBI Grade B Officer] Step III of an input is: years 92 ultra 15 23 strive house 39 How many more step will be required to complete the rearrangement?",
        "options": [
            "Three",
            "Four",
            "Five",
            "Six",
            "None of these"
        ],
        "answer": "Five",
        "solution": "Input: power fail now 52 24 75 gate 34 Step I: 75 power fail now 52 24 gate 34 Step II: 75 fail power now 52 24 gate 34 Step III: 75 fail 52 power now 24 gate 34 Step IV: 75 fail 52 gate power now 24 34 Step V: 75 fail 52 gate 34 power now 24 Step VI: 75 fail 52 gate 34 now power 24 Step VII : 75 fail 52 gate 34 now 24 power Hence step VI will be the last but one. Input Output.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_9",
        "text": "<b>Directions (Qs. 12-17): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Input: any how 49 24 far wide 34 69 Which of the following steps will be the last but one?",
        "options": [
            "VI",
            "VII",
            "VIII",
            "V",
            "None of these"
        ],
        "answer": "V",
        "solution": "we can't proceed backward.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_10",
        "text": "<b>Directions (Qs. 12-17): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Step II of an input is: town 74 pair 15 31 nice job 42 Which of the following is definitely the input? Pair 15 31 town nice job 42 14 Pair 15 town 31 74 nice job 42 Pair 15 town 74 31nice job 42 Cannot be determined None of these Input: play over 49 37 12 match now 81 Which of the following will be step IV? play 81 over 49 37 match now play 81 over 49 37 12 now play 81 over 49 now 37 match 12 There will be no such step None of these Step II of an input is: war 58 box cart 33 49 star 24 Which of the following steps will be the last?",
        "options": [
            "V",
            "VI",
            "IV",
            "VII",
            "None of these"
        ],
        "answer": "V",
        "solution": "Step II: play 81 over 49 now 37 12 match Step III: play 81 over 49 now 37 match 12 101 Step II: 75 down 16 24 farm eager 62 sky Step III: 75 down 62 16 24 farm eager sky Step IV: 75 down 62 eager 16 24 farm sky Step V: 75 down 62 eager 24 16 farm sky Step VI: 75 down 62 eager 24 farm 16 sky Hence 6 - 2 = 4 more steps will be required.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_11",
        "text": "<b>Directions (Qs. 12-17): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Input: shower fall water 34 51 67 98 goal How many step will be required to complete the rearrangement?",
        "options": [
            "Three",
            "Four",
            "Six",
            "Five",
            "None of these"
        ],
        "answer": "Six",
        "solution": "Input: 14 35 when they came 61 48 home Step I: 61 14 35 when they came 48 home Step II: 61 came 14 35 when they 48 home Step III: 61 came 48 14 35 when they home Step IV : 61 came 48 home 14 35 when they Step V: 61 came 48 home 35 14 when they Step VI: 61 came 48 home 35 they 14 when Solution for 12-17: In the first step, the word that comes first in the alphabetical order comes to the first and the rest of the shift rightward. In the next step largest number occupies the next place and the rest of the shift rightward. This goes on alternately till the words get arranged in the reverse alphabetical order and number in a descending order.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_12",
        "text": "<b>Directions (Qs. 18-24): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Input : joy far 35 27 16 96 height star Step I : 96 joy far 35 27 16 height star Step II : 96 far joy 35 27 16 height star Step III : 96 far 35 joy 27 16 height star Step IV : 96 far 35 height joy 27 16 star Step V : 96 far 35 height 27 joy 16 star And Step V is the last step of the rearrangement. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input.[Corporation Bank (PO)] Input Output Input: organize 19 12 stable room 35 72 house How many steps will be required to complete the arrangement? 12 34 67 ask 46 for my date Cannot be determined None of these 91",
        "options": [
            "Five",
            "Six",
            "Seven",
            "Four",
            "None of these"
        ],
        "answer": "Six",
        "solution": "Step III: years 92 ultra 15 23 strive house 39 Step IV: years 92 ultra 39 15 23 strive house Step V: years 92 ultra 39 strive 15 23 house Step VI: years 92 ultra 39 strive 23 15 house Step VII : years 92 ultra 39 strive 23 house 15 Hence 7 - 3 = 4 more steps will be required.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_13",
        "text": "<b>Directions (Qs. 18-24): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Input: bake never store 51 26 33 age 49 Which of the following will be step V? 51 age 49 bake 33 never 26 store 51 age 49 bake never store 26 33 51 age bake never store 26 33 49 51 bake never store 33 26 age 49 There will be no such step Input: always go there 39 62 47 time 24 Which of the following steps will be the last but one?",
        "options": [
            "VI",
            "VII",
            "VIII",
            "IX",
            "None of these"
        ],
        "answer": "VIII",
        "solution": "Input: any how 49 24 far wide 34 69 Step I: wide any how 49 24 far 34 69 Step II: wide 69 any how 49 24 far 34 Step III: wide 69 any how 49 24 far 34 Step IV: wide 69 any 49 how 24 far 34 Step V: wide 69 how 49 far 24 any 34 Step VI: wide 69 how 49 far 34 any 24 Step V be 2nd last step.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_14",
        "text": "<b>Directions (Qs. 18-24): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Step II of an input is: 67 ask 34 12 46 ask for my date Which of the following is definitely the input? 34 12 46 for my date ask 67 34 12 46 for my date 67 ask Step III of an input is: 84 for 56 29 17 won loss game Which of the following steps will be the last?",
        "options": [
            "VIII",
            "IX",
            "VII",
            "V",
            "None of these"
        ],
        "answer": "V",
        "solution": "we can't proceed backward.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_15",
        "text": "<b>Directions (Qs. 18-24): A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement.</b><br><br>Step III of an input is: 86 box 63 18 gear card 51 new How many more step will be required to complete the arrangement?",
        "options": [
            "Three",
            "Two",
            "Four",
            "Five",
            "None of these"
        ],
        "answer": "Five",
        "solution": "Input: play over 49 37 12 match now 81 Step I: play 81 over 49 37 12 match now Since the line is already arranged, there will be no step.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_1",
        "text": "<b>Directions (Qs. 1-5) Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. Input: day 74 night 36 25 68 all for Step I: all day 74 night 36 25 68 for Step II: all 74 day night 36 25 68 for Step III: all 74 day 68 night 36 25 for Step IV: all 74 day 68 for night 36 25 Step V: all 74 day 68 for 36 night 25 And Step V is the last step of the rearrangement of the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input.[Indian Bank (PO)] Step III of an input: bond 86 goal 12 33 like high 46 Which of the following will be step VII? bond 86 goal 46 like 12 33 high bond 86 goal 46 high like 12 33 bond 86 goal 46 high 33 like 12 There will be no such step None of these Input: mind new 27 35 19 59 own tower Which of the following steps will be the last but one?",
        "options": [
            "VI",
            "IV",
            "V",
            "VII",
            "None of these"
        ],
        "answer": "V",
        "solution": "Step III: bond 86 goal 12 33 like high 46 Step IV: bond 86 goal 46 12 33 like high Step V: bond 86 goal 46 high 12 33 like. Step VI: bond 86 goal 46 high 33 12 like. Step VII : bond 86 goal 46 high 33 like 12.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_2",
        "text": "<b>Directions (Qs. 1-5) Study the following information carefully and answer the given question:</b><br><br>Step IV of an input: dear 63 few 51 16 29 yes now How many more step will be required to complete the arrangement?",
        "options": [
            "Four",
            "Five",
            "Three",
            "Two",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Input: mind new 27 35 19 59 own tower Step I: mind 59 new 27 35 19 own tower Step II: mind 59 new 35 27 19 own tower Step III: mind 59 new 35 own 27 19 tower Step IV: mind 59 new 35 own 27 tower 19 Hence steps III will be the last but one.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_3",
        "text": "<b>Directions (Qs. 1-5) Study the following information carefully and answer the given question:</b><br><br>Step II of an input is: cars 73 18 25 wear 49 long for Which of the following is definitely the input? 18 25 wear 49 long for cars 73 73 18 cars 25 wear 49 long for 18 73 25 cars wear 49 long for Cannot be determined None of these Input: war 52 and peace 43 16 now 24 How many more step will be required to complete the rearrangement?",
        "options": [
            "Four",
            "Five",
            "six",
            "seven",
            "None of these"
        ],
        "answer": "six",
        "solution": "Step IV: dear 63 few 51 16 29 yes now. Step V: dear 63 few 51 now 16 29 yes. Step VI: dear 63 few 51 now 29 16 yes. Step VII : dear 63 few 51 now 29 yes 16.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_4",
        "text": "<b>Directions (Qs. 6-11): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. Input: gone 93 over 46 84 now for 31 Step I: 31 gone 93 over 46 84 now for Step II: 31 over gone 93 46 84 now for Step III: 31 over 46 gone 93 84 now for Step IV: 31 over 46 now gone 93 84 for Step V: 31 over 46 now 84 gone 93 for and Step V is the last step of the rearrangement of the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input.[Corporation Bank (PO)] III of an input: 15 window 29 93 86 sail tower buy Which of the following will be step VI? 15 window 29 tower 86 sail 93 buy 15 window 29 tower 86 93 sail buy 15 window 29 tower 93 86 sail buy There will be no such step None of these Input: station hurry 39 67 all men 86 59 How many steps will be required to complete the rearrangement?",
        "options": [
            "Four",
            "Five",
            "six",
            "Three",
            "None of these"
        ],
        "answer": "Three",
        "solution": "we can't proceed backward.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_5",
        "text": "<b>Directions (Qs. 6-11): Study the following information carefully and answer the given question:</b><br><br>Step II of an input is: 49 zone car battery 56 87 71 down Which of the following is definitely the input? car 49 battery zone 56 87 71 down zone 49 car battery 56 87 71 down battery car 49 zone 56 87 71 down Cannot be determined None of these Input: news 79 53 glory for 46 29 task Which of the following will be step IV? 29 task 46 news 53 glory 79 for 29 task 46 news 53 79 glory for 29 task 46 news 79 53 glory for 29 news 79 53 glory for 46 task None of these Step III of an input is: 27 tube 34 gas chamber row 74 53 Which of the following steps will be the last but one?",
        "options": [
            "VI",
            "VII",
            "VIII",
            "V",
            "None of these"
        ],
        "answer": "VIII",
        "solution": "Input: war 52 and peace 43 16 now 24 Step I: and war 52 peace 43 16 now 24 Step II: and 52 war peace 43 16 now 24 Step III: and 52 now war peace 43 16 24 Step IV: and 52 now 43 war peace 16 24 Step V : and 52 now 43 peace war 16 24 Step VI : and 52 now 43 peace 24 war 16 Solution for 6-11: In the first step, the smallest number comes to the left most position. Pushing the rest of the line rightward. In the next step, the word that comes last in the alphabetical order comes to second left, pushing the rest of the line rightward. Thus the number and words get arranged alternately till the numbers are in ascending order and the words in reverse alphabetical order.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_6",
        "text": "<b>Directions (Qs. 6-11): Study the following information carefully and answer the given question:</b><br><br>Step II of an input is: 19 years 85 74 near gone 26 store How many more steps will be required to complete the rearrangement?",
        "options": [
            "Three",
            "Four",
            "Two",
            "Five",
            "None of these"
        ],
        "answer": "Three",
        "solution": "Step III: 15 window 29 93 86 sail tower buy Step IV: 15 window 29 tower 93 86 sail buy Step V: 15 window 29 tower 86 93 sail buy Step VI: 15 window 29 tower 86 sail 93 buy.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_7",
        "text": "<b>Directions (Qs. 12-16): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. Input: gain 96 63 forest 38 78 deep house Step I: deep gain 96 63 forest 38 78 house Step II: deep 38 gain 96 63 forest 78 house Step III: deep 38 forest gain 96 63 78 house Step IV: deep 38 forest 63 gain 96 78 house Step V: deep 38 forest 63 gain 78 96 house Step VI: deep 38 forest 63 gain 78 house 96 and Step VI is the last step of the rearrangement of the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input. Input: train 59 47 25 over burden 63 sky Which of the following steps will be the last but one? Input Output",
        "options": [
            "VI",
            "V"
        ],
        "answer": "V",
        "solution": "Input: station hurry 39 67 all men 86 59 Step I: 39 station hurry 67 all men 86 59 Step II: 39 station 59 hurry 67 all men 86 Step III: 39 station 59 men hurry 67 all 86 Step IV: 39 station 59 men 67 hurry all 86 Step V: 39 station 59 men 67 hurry 86 all.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_8",
        "text": "<b>Directions (Qs. 12-16): Study the following information carefully and answer the given question:</b><br><br>IV None of these (d) VII Input: service 46 58 96 of there desk 15 Which of the following will be step VI? desk 15 over service 46 58 96 there desk 15 over 46 service there 58 96 desk 15 over 46 service 58 there 96 desk 15 over 46 service 58 96 there There will be no such step Step II of an input is: below 12 93 house floor 69 57 task Which of the following is definitely the input? 93 house 69 57 below task floor 12 93 house below 69 57 task floor 12 93 house floor 69 57 below task 12 Cannot be determined None of these Step III of an input is: art 24 day 83 71 54 star power Which of the following steps will be the last?",
        "options": [
            "V",
            "VIII",
            "IX",
            "VII",
            "None of these"
        ],
        "answer": "VII",
        "solution": "we can't proceed backward.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_9",
        "text": "<b>Directions (Qs. 12-16): Study the following information carefully and answer the given question:</b><br><br>Step II of an input is: cold 17 wave 69 never desk 52 43 How many more steps will be required to complete the rearrangement?",
        "options": [
            "Six",
            "Five",
            "Four",
            "Three",
            "None of these"
        ],
        "answer": "Five",
        "solution": "Input: 79 53 glory for 46 29 task Step I: 29 news 79 53 glory for 46 task Step II: 29 task news 79 53 glory for 46 Step III: 29 task 46 news 79 53 glory for Step IV: 29 task 46 news 53 79 glory for.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_10",
        "text": "<b>Directions (Qs. 17-21): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. Input: Sale data 18 23 for 95 then 38 Step I: data Sale 18 23 for 95 then 38 Step II: data 95 Sale 18 23 for then 38 Step III: data 95 for Sale 18 23 then 38 Step IV: data 95 for 38 Sale 18 23 then Step V: data 95 for 38 Sale 23 18 then Step VI: data 95 for 38 Sale 23 then 18 and Step VI is the last step of the rearrangement of the above input. 93 As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input. Input: year 39 stake 47 house full 94 55 How many more will be required to complete the rearrangement?",
        "options": [
            "Five",
            "Six",
            "Four",
            "seven",
            "None of these"
        ],
        "answer": "seven",
        "solution": "Step III: 27 tube 34 gas chamber row 74 53 Step IV: 27 tube 34 row gas chamber 74 53 Step V: 27 tube 34 row 53 gas chamber 74 Step VI: 27 tube 34 row 53 gas 74 chamber Input Output Hence steps V will be the last but one.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_11",
        "text": "<b>Directions (Qs. 17-21): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Step II of an input is: car 83 lost ever 32 46 74 now. How many more steps will be required to complete the rearrangement?",
        "options": [
            "Three",
            "Four",
            "Five",
            "Six",
            "None of these"
        ],
        "answer": "Four",
        "solution": "Step II: 19 years 85 74 near gone 26 store Step III: 19 years 26 85 74 near gone store Step IV: 19 years 26 store 85 74 near gone Step V: 19 years 26 store 74 85 near gone Step VI: 19 years 26 store 74 near 85 gone Hence 6 - 2 = 4 more steps will be required Solution for 12 -16: In step I the word that comes first in the alphabetical order comes to the leftmost position. Pushing the rest of the line rightward. In step II the smallest number comes to the second position, pushing the rest of the line rightward. Thus the words and the number arranged alternately until the former make an alphabetical order and the latter an ascending one. Punjab & Sind Bank (PO).",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_12",
        "text": "<b>Directions (Qs. 17-21): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Step III of an input is: and 79 code 27 18 new goal 34. Which of the following is definitely the input? code and 79 27 18 new goal 34 code 27 18 new goal 34 and 79 code 27 and 18 79 new goal 34 Cannot be determined None of these Input: water full never 35 78 16 height 28 Which of the following steps will be the last?",
        "options": [
            "VI",
            "VII",
            "VIII",
            "IX",
            "None of these"
        ],
        "answer": "VII",
        "solution": "Input: train 59 47 25 over burden 63 sky Step I: burden train 59 47 25 over 63 sky Step II: burden 25 train 59 47 over 63 sky Step III: burden 25 over train 59 47 63 sky Step IV: burden 25 over 47 train 59 63 sky Step V: burden 25 over 47 train sky 59 63 Step VI: burden 25 over 47 sky 59 train 63 Hence step V is the last but one.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_13",
        "text": "<b>Directions (Qs. 17-21): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Step II of an input is: high 69 store pay 36 43 15 there Which of the following will be step VI? high 69 pay 43 store 36 there 15 high 69 pay 43 store 36 15 there high 69 pay 36 43 store 15 there There will be no such step None of these Input: train more 29 53 fast gear 37 84 Which of the following steps will be the last?",
        "options": [
            "IX",
            "VIII",
            "VII",
            "VI",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Input: service 46 58 96 over there desk 15 Step I: desk service 46 58 96 over there 15 Step II: desk 15 service 46 58 96 over there Step III: desk 15 over service 46 58 96 there Step IV: desk 15 over 46 service 58 96 there Step V: desk 15 over 46 service 58 there 96 Since the input is already arranged, there will be no step VI.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_14",
        "text": "<b>Directions (Qs. 23 -27): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them 94 Input Output following a particular rule in each step. The following is an illustration of input and rearrangement. [Central Bank of India (PO)- 2010] Input: why is 25 bigger than 14 but smaller than 32 Step I: than 14 why is 25 bigger but smaller than 32 Step II: than 14 is 25 why bigger but smaller than 32 Step III: than 14 is 25 than 32 why bigger but smaller Step IV: than 14 is 25 than 32 why smaller bigger but Step V: than 14 is 25 than 32 why smaller but bigger and Step V is the last step of the rearrangement of the above input. As per the rule followed in the above steps, indicate the answer in each of the following questions with respect to the appropriate step for the given input. Input for the questions Any number less than 30 and more than 20 does not equal 40 Which step number would be the following output? Than 20 any number less than 30 and more does not equal 40",
        "options": [
            "III",
            "IV",
            "V",
            "VI",
            "None of these"
        ],
        "answer": "VI",
        "solution": "we can't proceed backward.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_15",
        "text": "<b>Directions (Qs. 23 -27): Study the following information carefully and answer the given question:</b><br><br>How many steps would be needed to complete the arrangement?",
        "options": [
            "X",
            "VIII",
            "IX",
            "VII",
            "None of these"
        ],
        "answer": "VII",
        "solution": "Step III: art 24 day 83 71 54 star power Step IV: art 24 day 54 83 71 star power Step V: art 24 day 54 power 83 71 star Step VI: art 24 day 54 power 71 83 star Step VII: art 24 day 54 power 71 star 83.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_16",
        "text": "<b>Directions (Qs. 23 -27): Study the following information carefully and answer the given question:</b><br><br>Which of the following would be steps IV? than 20 than 30 equal 40 any number less and more does not than 20 any number less than 30 and more does not equal 40 20 30 40 than equal number any less and more does not 20 than 30 than 40 equal number any less and more does not None of these Which of the following would be steps II? 20 than 30 than any number less and more does not 40 equal than 20 than 30 equal 40 any number less and more does not than 20 than 30 any number less and more does not equal 40 than 20 than 30 any number less and more does not 40 equal None of these Which word number would be on the 8th position from left side in steps V?",
        "options": [
            "any",
            "not",
            "40",
            "number",
            "None of these"
        ],
        "answer": "40",
        "solution": "Step II: cold 17 wave 69 never desk 52 43 Step III: cold 17 desk wave 69 never 52 43 Step IV: cold 17 desk 43 wave 69 never 52 Step V: cold 17 desk 43 never wave 69 52 Step VI: cold 17 desk 43 never 52 wave 69 s 103 Solution for 17-22: In step I the word that comes first in the alphabetical order comes to the first position, pushing the rest of the line rightward. In the next step the largest numbers comes to the second position pushing the rest of the line rightward. This goes on alternately till the words get arranged in an alphabetical order and the number in a descending order at alternately position.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_1",
        "text": "<b>Directions (Qs. 1-5): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. [Allahabad Bank (PO)] Input : sum 28 have 19 96 48 luck nice rope Step I: have sum 28 19 48 luck nice 78 rope 96 Step II: luck have sum 28 19 48 nice rope 96 78 Step III: nice luck have sum 28 19 rope 96 78 48 Step IV: rope nice luck have sum 19 96 78 48 28 Step V: sum rope nice luck have 96 78 48 28 19 And Step V is the last step of the rearrangement. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the input given below. Input: 49 last zen 16 82 yet can vast 33 aim 87 54 How many steps will be needed to complete the arrangement?",
        "options": [
            "IV",
            "V",
            "VI",
            "VII",
            "None of these"
        ],
        "answer": "VI",
        "solution": "The correct answer is 'VI'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_2",
        "text": "<b>Directions (Qs. 1-5): Study the following information carefully and answer the given question:</b><br><br>Vast last can aim zen 16 yet 33 87 82 54 49",
        "options": [
            "III",
            "II",
            "VII",
            "IV",
            "None of these"
        ],
        "answer": "IV",
        "solution": "The correct answer is 'IV'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_3",
        "text": "<b>Directions (Qs. 1-5): Study the following information carefully and answer the given question:</b><br><br>Which of the following would be steps I? aim 49 can zen 16 yet vast 33 54 87 82 last vast last can aim zen 16 yet 33 87 82 54 49 zen 49 last 16 82 yet can vast 33 aim 54 87 aim 49 last zen 82 yet can vast 33 87 54 16 None of these Input Output In step V, which of the following words numbers would be at 6th position from the right?",
        "options": [
            "87",
            "16",
            "33",
            "zen",
            "aim"
        ],
        "answer": "aim",
        "solution": "aim 49 last Zen 16 82 yet can vast 33 54 87.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_4",
        "text": "<b>Directions (Qs. 6-10): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. [Andhra Bank (PO)] Input : say dry 42 96 get 39 kite 67 Step I: 96 say dry 42 get 39 kite 67 Step II: 96 dry say 42 get 39 kite 67 Step III: 96 dry 39 say 42 get kite 67 Step IV: 96 dry 39 say 67 42 get kite Step V: 96 dry 39 say 67 get 42 kite And Step V is the last step of the rearrangement. You have to answer the questions by following the same rules as illustrated above. If the second step of an input is \"76 from 48 super itself 56 18 went\", How many more steps will be required to complete the arrangement?",
        "options": [
            "Five",
            "Six",
            "Four",
            "Three",
            "None of these"
        ],
        "answer": "Six",
        "solution": "The correct answer is 'Six'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_5",
        "text": "<b>Directions (Qs. 6-10): Study the following information carefully and answer the given question:</b><br><br>Which step will be the last step of an input for which the third step is \"91 go 28 mock per 43 lead37\"?",
        "options": [
            "Eighth",
            "Seventh",
            "Sixth",
            "Fifth",
            "None of these"
        ],
        "answer": "Fifth",
        "solution": "Solution for 6-10: In the given word and number arrangement machine. numbers are arranged alternately with words. Among numbers, first the largest number is taken to the leftmost side, than the smallest and so on. Among word, the first word as per the alphabetical order is taken to the leftmost side, then the word coming last as per the alphabetical order and so on.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_6",
        "text": "<b>Direction (Qs. 11-13): Study the following information carefully and answer the given question:</b><br><br>A word and number arrangement machine when given an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. (All the numbers are two-digit numbers and are arranged as per some logic based on the value of the number.) [SBI (Associates) (PO)] Input: win 56 32 93 bat for 46 him 28 11 give chance Step I: 93 56 32 bat for 46 him 28 11 give chance win Step II : 11 93 56 32 bat for 46 28 give chance win him Step III : 56 11 93 32 bat for 46 28 chance win him give Step IV : 28 56 11 93 32 bat 46 chance win him give for Step V : 46 28 56 11 93 32 bat win him give for chance Step VI : 32 46 28 56 11 93 win him give for chance bat Steps VI is the last step of the arrangement the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the input given below. Input for the questions Input: fun 89 at the 28 16 base camp 35 53 here 68 (All the numbers give in the arrangement are two-digit numbers) Which of the following would be steps II? 89 fun at 28 16 base camp 35 53 here 68 the 35 53 28 68 16 89 the here fun base camp at 16 89 at fun 28 base camp 35 53 68 the here 53 28 68 16 89 35 the here fun base camp None of these 96 Input Output Which words numbers would be at seventh position from the left in step IV?",
        "options": [
            "base",
            "at",
            "35",
            "the",
            "53"
        ],
        "answer": "35",
        "solution": "Step II: 76 from 48 super itself 56 18 went Step III: 76 from 18 48 super itself 56 went Step IV: 76 from 18 went 48 super itself 56 Step V: 76 from 18 went 56 48 super itself Step VI: 76 from 18 went 56 itself 48 super Step VI is the last step so four more steps are required to the complete arrangement.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_7",
        "text": "<b>Directions (Qs. 14-18): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. (All the numbers are two-digit numbers) [IBPS Common Written Exam PO (PO/MT) Input: Sine 88 71 cos theta 14 56 gamma delta 26 Step I: cos sine 71 theta 14 56 gamma delta 26 88 Step II: delta cos sine theta 14 56 gamma 26 88 71 Step III: gamma delta cos sine theta 14 26 88 71 56 Step IV: sine gamma delta cos theta 14 88 71 56 26 Step V : theta sine gamma delta cos 88 71 56 26 14 Steps V is the last step of the arrangement the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate steps for the given input. Input for the questions Input: for 52 all 96 25 jam road 15 hut 73 bus stop 38 46 (All the numbers give in the arrangement are two-digit numbers) Which words numbers would be at 8th position from the left in step IV?",
        "options": [
            "15",
            "road",
            "hut",
            "jam",
            "stop"
        ],
        "answer": "road",
        "solution": "Step III: 91 go 28 mock per 43 lead 37 Step IV: 91 go 28 per mock 43 lead 37 Step V: 91 go 28 per 43 mock lead 37 Step VI: 91 go 28 per 43 lead mock 37 Step VII : 91 go 28 per 43 lead 37 mock.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_8",
        "text": "<b>Directions (Qs. 14-18): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Which step number would be the following output? bus all for 52 25 jam road 15 hut stop 38 46 96 73 There will be no such step III(c)II (d) V(e)VI Which of the following would be step VII? stop road jam hut for bus all 15 96 73 52 46 38 25 road jam hut for bus all stop 15 25 38 46 52 73 96 stop road jam hut for bus all 96 73 52 46 38 25 15 jam hut for bus all 25 road stop 15 96 73 52 46 38 There will be no such step Which words numbers would be at 6th position from the left in step V?",
        "options": [
            "25",
            "stop",
            "jam",
            "all",
            "road"
        ],
        "answer": "jam",
        "solution": "Input: thirty days from now 32 56 87 24 Step I: 87 thirty days from now 32 56 24 Step II: 87 days thirty from now 32 56 24 Step III: 87 days 24 thirty from now 32 56 Input Output.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_9",
        "text": "<b>Directions (Qs. 19-23): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>an input line of words and numbers rearrange them following a particular rule in each step. The following is an illustration of input and rearrangement. (All the numbers are two-digit numbers).[RBI Grade B Officer] Input: gate 20 86 just not 71 for 67 38 bake sun 55 Step I: bake gate 20 just not 71 for 67 38 sun 55 86 Step II: for bake gate 20 just not 67 38 sun 55 86 71 Step III: gate for bake 20 just not 38 sun 55 86 71 67 Step IV: just gate for bake 20 not 38 sun 55 86 71 67 Step V: not just gate for bake 20 sun 86 71 67 55 38 Step VI: sun not just gate for bake 86 71 67 55 38 20 Steps VI is the last step of the arrangement the above input. As per the rule followed in the above steps, find out in each of the following questions the appropriate step for the given input. Input: 31 rise gem 15 92 47 aim big 25 does 56 not 85 63 with moon How many steps will be required to complete the rearrangement?",
        "options": [
            "Eight",
            "Six",
            "Seven",
            "Five",
            "None of these"
        ],
        "answer": "Five",
        "solution": "The correct answer is 'Five'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_10",
        "text": "<b>Directions (Qs. 19-23): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Which words numbers would be at 7th position from the left in step IV?",
        "options": [
            "rise",
            "aim",
            "big",
            "15",
            "47"
        ],
        "answer": "big",
        "solution": "105.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_11",
        "text": "<b>Directions (Qs. 19-23): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Which step number is the following output? rise not moon gem does big aim 15 with 92 85 63 56 47 31 25",
        "options": [
            "Step V",
            "Step VII",
            "Step IV",
            "Step VIII",
            "There is no such step"
        ],
        "answer": "Step VII",
        "solution": "Step II: 52 at deep follow 41 16 road 32 Step III: 52 at 16 deep follow 41 road 32 Step IV: 52 at 16 road deep follow 41 32 Step V: 52 at 16 road 41 deep follow 32 Solution for 11-13: In the given word and number arrangement machine rearranges the input with the logic that in step I, it shifts the largest number to the left most place and the last word coming in English alphabetical series to the right most place. In step II, it shifts the smallest number to the left most place and the next word (in reverse alphabetical order) to the right most. In step III 2nd largest number it shifts to the left most place and so on. Input: fun 89 at the 28 16 base camp 35 53 here 68 Step I: 89 fun at 28 16 base camp 35 53 here 68 the Step II: 16 89 at fun 28 base camp 35 53 68 the here Step III: 68 16 89 at 28 base camp 35 53 the here fun Step IV: 28 68 16 89 at base 35 53 the here fun camp Step V: 53 28 68 16 89 at 35 the here fun camp base Step VI: 35 53 28 68 16 89 the here fun camp base at.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_12",
        "text": "<b>Directions (Qs. 19-23): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Which of the following represents the position of '92' in step IV?",
        "options": [
            "Ninth from the left",
            "Fifth from the right",
            "Sixth from the right",
            "Ninth from the right",
            "Seventh from the left"
        ],
        "answer": "Seventh from the left",
        "solution": "The correct answer is 'Seventh from the left'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_13",
        "text": "<b>Directions (Qs. 19-23): Study the following information carefully and answer the given question: A word and number arrangement machine when given</b><br><br>Which words numbers would be at 5th position from the right in the last step?",
        "options": [
            "gem",
            "63",
            "56",
            "85",
            "does"
        ],
        "answer": "56",
        "solution": "The correct answer is '56'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_1",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>The following is the illustration of the input and the steps of arrangement : Input : Put pocket hand watch he for them. Step I : Put for he watch hand pocket them. Step II : Put he for watch pocked hand them. Step III : Put hand pocked watch for he them. Step IV : Put pocked hand watch for he them. And so on goes the machine. Study the logic and answer the questions that follow: If step III of a given input be 'fly sky birds my su fur say' What is the seventh step of the input ? fly sky birds my su fur say fly birds sky my fur su say fly fur su my birds sky say fly su fur my sky birds say If step VII of an input is 'slow ran dhurwa pat hak dig vi' what is step V of that input ? slow dig hak pat dhurwa ran vi slow hak dig pat ran dhurwa vi slow dhurwa ran pat dig hak vi slow ran dhurwa pat hak dig vi Given the following : Input : Ana dhir raj ran san aji What step will be the following arrangement ? Arrangement : Ana san ran dhir raj aji",
        "options": [
            "IV",
            "V VI",
            "VII"
        ],
        "answer": "VII",
        "solution": "any two of the statement given sufficient to answer the questions.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_2",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>Directions for the (Qs. 4-7): Answer the questions based on the following information. A number arrangement machine, when given a particular input, rearranges it following a particular rule. Illustrations of the input and the steps of arrangement is given below. Input: 245, 316, 436, 519, 868, 710, 689 Step 1: 710, 316, 436, 519, 868, 245, 689 Step 2: 710, 316, 245, 519, 868, 436, 689 Step 3: 710, 316, 245, 436, 868, 519, 689 Step 4: 710, 316, 245, 436, 519, 868, 689 Step 4 is the last step for the given input If the input is given as - 655, 436, 764, 799, 977, 572, 333, which of the following step will be - 333, 436, 572, 655, 977, 764, 799 ?",
        "options": [
            "Step Third",
            "Step Second",
            "Step Fourth",
            "None of the above"
        ],
        "answer": "Step Third",
        "solution": "The correct answer is 'Step Third'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_3",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>How many steps will be required to get the final output from the following input? Input: 544, 653, 325, 688, 461, 231, 857",
        "options": [
            "6",
            "5",
            "4",
            "None of the above"
        ],
        "answer": "5",
        "solution": "Solution for 4 to 7.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_4",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>Step third for an input is - 432, 433, 542, 666, 734, 355, 574 What will be the first step for the input? 666, 542, 432, 734, 433, 574, 355 542, 666, 734, 432, 433, 574, 355 355, 574, 433, 432, 734, 666, 542 Cannot be determined What will be the third step for the following input? Input: 653, 963, 754, 345, 364, 861, 541 541, 345, 754, 963, 364, 816, 653 98 Input Output 541, 345, 364, 653, 963, 754, 861 541, 345, 364, 963, 754, 861, 653 541, 345, 364, 653, 861, 754, 963 Directions for the (Qs. 8-10): Answer the questions based on the following information. A wood arrangement machine, when given a particular input, rearranges it following a particular rule. Following is the illustration of the input and the steps of arrangement: Input: She was interested in doing art film Step 1: art she was interested in doing film Step 2: art was she interested in doing film Step 3: art was in she interested doing film Step 4: art was in film she interested doing Step 5: art was in film doing she interested Step 5 is the last step of the given input. Now study the logic and rules followed in the above steps, find out appropriate step for the question given below for the given input. Which of the following will be the last step for the input given below? Input: he is going out to search air out is air to going search he out is air to search going he search he out is air to going None of the above If step 2 of an input is not -not is the casino considering legal action, which step is: -not is casino action legal the considering ?",
        "options": [
            "Step: 3",
            "Step: 6",
            "Step: 4",
            "None of the above"
        ],
        "answer": "Step: 3",
        "solution": "This type of question we should solve by observing the pattern in which steps are changing, after a close look we can observe that it is the sum of the digits that plays main role here rather than the number itself. The given input and steps we can describe as: Input 245(11) 316(10) 436(13) 519(15) 868(22) 710(8) 689(23) Step 1 710(8) 316(10) 436(13) 519(15) 868(22) 245(11) 689(23) Step 2 710(8) 316(10) 245(11) 519(15) 868(22) 436(13) 689(23) Step 3 710(8) 316(10) 245(11) 436(13) 868(22) 519(15) 689(23) Step 4 710(8) 316(10) 245(11) 436(13) 519(15) 868(22) 689(23) From this given data we can observe the pattern that the number that has lowest sum of digits shifts its position towards left and this process continues. Now in this case the table will be as follows: Input 655(16) 436(13) 764(17) 799(23) 977(23) 572(14) 333(9) Step 1 333(9) 436(13) 764(17) 799(23) 977(23) 572(14) 655(16) Step 2 333(9) 436(13) 572(14) 799(23) 977(23) 764(17) 655(16) Step 3 333(9) 436(13) 572(14) 655(16) 977(23) 764(17) 799(23) So the given sequence is the 3rd step.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_5",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>How many steps will be required to get the final output from the following input? Input: Father needs to check on the boy",
        "options": [
            "Four",
            "Five",
            "Six",
            "None of the above"
        ],
        "answer": "Five",
        "solution": "Following the similar logic as above we will find that it takes 5 steps.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_6",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>Directions for (Qs. 11-13): Study the information given below and answer the questions. A word arrangement machine, when given a particular input, rearranges it using a particular rule. The following is the illustration and the steps of the arrangement Input: Smile Nile Style Mile Shine Wine Mine Swine Bovine Feline Step 1: Smile Nile Style Mile Shine Wine Bovine Feline Mine Swine Step 2: Style Mile Smile Nile Shine Wine Bovine Feline Mine Swine Step 3: Style Mile Smile Nile Wine Shine Bovine Feline Mine Swine Step 4: Mile Style Nile Smile Wine Shine Feline Bovine Swine Mine Step 5: Nile Smile Mile Style Wine Shine Swine Mine Feline Bovine Step 6: Nile Smile Mile Style Wine Shine Feline Bovine Swine Mine Step 7: Mile Style Nile Smile Wine Shine Feline Bovine Swine Mine Which of the following will be step 14 for the given input: StyleMileSmileNileWineShineBovineFelineMineSwine SmileNileStyleMileShineWineMineSwineBovineFeline MileStyleNileSmileShineWineFelineBovineSwineMine StyleMileSmileNileShineWineBovineFelineMineSwine Mark the arrangement that does not fall between step numbers 12 and 14.",
        "options": [
            "Style Mile Smile Nile Wine Shine Bovine Feline Mine Swine",
            "Mile Style Nile Smile Wine Shine Feline Bovine Swine Mine",
            "Style Mile Smile Nile Shine Wine Bovine Feline Mine Swine",
            "Smile"
        ],
        "answer": "Smile",
        "solution": "In this type of question backward progress is not a right approach as the number whose sum is smallest interchange its position, and there is only one shift per step hence given any step we can not determine the input.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_7",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>Nile Style Mile Shine Wine Bovine Feline Mine Swine If the arrangement is repeated which of the steps given below is same as the INPUT row?",
        "options": [
            "Step 9",
            "Step 11",
            "Step 20",
            "Step 14"
        ],
        "answer": "Step 20",
        "solution": "Solution for 8-10 Observe the given pattern closely and we will find that neither the number of alphabets nor the 1st letter plays the main role but it is the last letter that plays the important role, and we can observe that last letter is in reversing order,.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_8",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>Directions for (Q. 14-15) Some information is provided in the paragraph below. Answer the question based on this information. 99 A number arrangement machine, when given a particular input, rearranges it using a particular rule. The following is the illustration and steps of the arrangement. Input 105 241 67 347 150 742 292 589 Step I 67 105 241 347 150 742 292 589 Step II 67 742 105 241 347 150 292 589 Step III 67 742 105 589 241 347 150 292 Step IV 67 742 105 589 150 241 347 292 Step V 67 742 105 589 150 347 241 292 Arrangement at Step V is the last for the given input. What should be the fourth step of the following input? 64326 187 87118 432 219 348",
        "options": [
            "64 432 87 326 118 187 219 348",
            "64 432 87 348 326 187 118 219",
            "64 432 87 348 118 326 187 219 None of the above."
        ],
        "answer": "64 432 87 348 326 187 118 219",
        "solution": "The last step can be written directly following the pattern discussed above. So for the input \"He is going out to search air\", the last step would be \"out is air to search going he\".",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_9",
        "text": "<b>Directions (Qs. 1 to 3): A word arrangement machine, when given a particular input , rearranges if following a particular rule.</b><br><br>How many steps will be required to get the final output from the following input? 319 318 746 123 15320 78426",
        "options": [
            "Four",
            "Five",
            "Six",
            "Seven"
        ],
        "answer": "Seven",
        "solution": "As we have discussed in question number 26, we can't calculate previous steps.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_16",
        "text": "Find the angle between minute hand and hour hand at 6:30 AM At what time between 3PM to 4PM minute hand and hour hand will coincide?",
        "options": [
            "25°",
            "22.5°",
            "15°",
            "None of these"
        ],
        "answer": "15°",
        "solution": "At 6 : 30 A.M. from the formula here P = 6 and Q = 30 so required angle is 11 × 30/2 - 30 × 6 = 165 - 180 = - 15 or ignoring the negative sign the required angle is 15°.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_17",
        "text": "(a)3:16 4 11111111(c)3:17 4 11 11 11 11",
        "options": [
            "3: 15 4 1111",
            "None of these"
        ],
        "answer": "3: 15 4 1111",
        "solution": "At 11 : 50 A.M. from the formula here P = 11 and Q = 50 so required angle is 11 × 50/2 - 30 × 11 = 275 - 330 = - 55 or ignoring the negative sign the required angle is 55°.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_18",
        "text": "Find the angle between minute hand and hour hand at 11:50 AM At what time between 3PM to 4PM minute hand and hour hand will be opposite to each other?",
        "options": [
            "55°",
            "22.5°",
            "15°",
            "None of these"
        ],
        "answer": "55°",
        "solution": "At 4 : 20 A.M. from the formula here P = 4 and Q = 20 so required angle is 11 × 20/2 - 30 × 4 = 110 - 120 = - 10 or ignoring the negative sign the required angle is 10°.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_19",
        "text": "(a)3:47 1 11111111(c)3:49 1 11 11 11 11",
        "options": [
            "3: 48 1 1111",
            "None of these"
        ],
        "answer": "3: 48 1 1111",
        "solution": "At 1 : 40 from the formula here P = 1 and Q = 40 so required angle is 11 × 40/2 - 30 × 1 = 220 - 30 = 190 the required angle is 190°.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_20",
        "text": "Find the angle between minute hand and hour hand at 4:20 AM At what time between 4PM to 5PM minute hand and hour hand will be at right angle to each other?",
        "options": [
            "10°",
            "12.5°",
            "15°",
            "None of these"
        ],
        "answer": "10°",
        "solution": "At 10 : 10 from the formula here P = 10 and Q = 10 so required angle is 11 × 10/2 - 30 × 10 = 55 - 300 = - 245 the required angle is 245°.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_21",
        "text": "(a)4:7 5 11111111(c)4:9 5 11 11 11 11",
        "options": [
            "4: 4 5 1111",
            "None of these"
        ],
        "answer": "4: 4 5 1111",
        "solution": "Consider exactly at 3 : 00, minute hand is at position '12' and hour hand is at '3' hence angle between these two hands at 3 : 00 is 90°. Since relative speed between them is 11/2° per minute or every minute the minute hand will travel 11/2° more than the hour hand. They will be together when the minute hand will travel 90° more than the hour hand. And time taken for this is (90)/(11/2) = 180/11 or 16 4/11 minute. Hence they will coincide at 3 : 16 minute : 21.81 second.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_22",
        "text": "Find the angle between minute hand and hour hand at 1:40 AM At what time between 9PM to 10PM minute hand and hour hand will coincide?",
        "options": [
            "180°",
            "190°",
            "175°",
            "None of these"
        ],
        "answer": "175°",
        "solution": "Consider exactly at 3 : 00, minute hand is at position '12' and hour hand is at '3' hence angle between these two hands at 3 : 00 is 90°. Since relative speed between them is 11/2° per minute or every minute the minute hand will travel 11/2° more than the hour hand. They will be opposite to each other when the minute hand will travel (90 + 180 =) 270° more than the hour hand. And time taken for this is (270)/(11/2) = 540/11 or 49 1/11 minute. Hence they will be opposite to each other at 3 : 49 minute : 0.09 second.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_23",
        "text": "(a)9:49 1 11111111(c)9:44 1 11 11 11 11",
        "options": [
            "9: 48 1 1111",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Consider exactly at 4 : 00, minute hand is at position '12' and hour hand is at '4' hence angle between these two hands at 4 : 00 is 120°. Since relative speed between them is 11/2° per minute or every minute the minute hand will travel 11/2° more than the hour hand. They will be perpendicular to each other when the minute hand will travel (120 - 90 =) 30° more than the hour hand. And time taken for this is (30)/(11/2) = 60/11 or 5 5/11 minute. Hence they will be perpendicular to each other at 4 : 11 minute : 45.45 second.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_24",
        "text": "Find the angle between minute hand and hour hand at 10:10 AM At what time between 9PM to 10PM minute hand and hour hand will be opposite to each other?",
        "options": [
            "245°",
            "195°",
            "175°",
            "None of these"
        ],
        "answer": "175°",
        "solution": "Consider exactly at 9 : 00, minute hand is at position '12' and hour hand is at '9' hence angle between these two hands at 9 : 00 is 270°. Since relative speed between them is 11/2° per minute or every minute the minute hand will travel 11/2° more than the hour hand. They will be together when the minute hand will travel 270° more than the hour hand. And time taken for this is (270)/(11/2) = 540/11 or 49 1/11 minute. Hence they will be opposite to each other at 9 : 49 minute : 0.09 second.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_25",
        "text": "(a)9:15 4 11111111(c)9:12 4 11 11 11 11",
        "options": [
            "9: 16 4 1111",
            "None of these"
        ],
        "answer": "9: 16 4 1111",
        "solution": "Consider exactly at 9 : 00, minute hand is at position '12' and hour hand is at '9' hence angle between these two hands at 9 : 00 is 270°. Since relative speed between them is 11/2° per minute or every minute the minute hand will travel 11/2° more than the hour hand. They will be together when the minute hand will travel (270 - 180 =) 90° more than the hour hand. And time taken for this is (90)/(11/2) = 180/11 or 16 4/11 minute. Hence they will be opposite to each other at 9 : 49 minute : 21.81 second Clocks 239.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_17",
        "text": "At what time between 2PM and 3PM the angle between minute hand and hour hand is 100o.",
        "options": [
            "37°",
            "33° 39°",
            "None of these"
        ],
        "answer": "37°",
        "solution": "Same as previous question Option A is correct.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_18",
        "text": "11112:14 6 11 11 1111(c)2:18 6 11 11 2:12 6 1111(d) None of these 11 11 Find the percentage change in angle between minute hand and hour hand from 2PM to 6PM. Find the angle between minute hand and hour hand at 2:18 AM",
        "options": [
            "100",
            "200",
            "250",
            "None of these"
        ],
        "answer": "250",
        "solution": "The correct answer is '250'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_19",
        "text": "Find the angle between minute hand and hour hand at 2:45",
        "options": [
            "20",
            "22 24",
            "48"
        ],
        "answer": "22 24",
        "solution": "At 2PM angle between minute hand and hour hand is 60° and that at 6PM is 180° hence percentage change is 200%.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_20",
        "text": "180°(b) 190° (c) 175°(d) None of these At what time between 9 and 10 o'clock will the hands of a clock be in the same straight line but not together? How many times in a day (24 Hrs) are the hands of a clock are in a straight line?",
        "options": [
            "20",
            "22",
            "44",
            "48"
        ],
        "answer": "48",
        "solution": "From the formula the required angle is 187.5°.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_21",
        "text": "How many times in a day (24 Hrs) are the hands of a 1111(a)9:16 4 11 11 1111(c)9:17 4 11 11",
        "options": [
            "9: 15 4 1111",
            "None of these"
        ],
        "answer": "9: 15 4 1111",
        "solution": "The correct answer is '9: 15 4 1111'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_22",
        "text": "clock are in a perpendicular to each other?",
        "options": [
            "20",
            "22",
            "44",
            "48"
        ],
        "answer": "22",
        "solution": "Consider exactly at 8 : 00, minute hand is at position '12' and hour hand is at '8' hence angle between these two hands at 8 : 00 is 240°. Case (i) when minute hand is behind Hour hand then required time is (240 - 90)/(11/2) = 150/(11/2) = 300/11 = 27 3/11 minute Case (ii) when minute hand is ahead of hour hand then required time is (240 + 90)/(11/2) = 330/(11/2) = 330 × 2/11 = 60 minute i.e at 9 : 00 PM.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_23",
        "text": "At what time between 8 and 9 o'clock will the hands of a clock be at right angle? A watch, which gains uniformly, is 2 min, slow at 1111(a)8:16 3 11 11 1111(c)8:17 3 11 11",
        "options": [
            "8: 27 3 1111",
            "None of these"
        ],
        "answer": "8: 27 3 1111",
        "solution": "28 × 2 × 6 = 336 degree.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_24",
        "text": "noon on Sunday, and is 4 min 48 seconds fast at 2 p.m on the following Sunday when was it correct ? 2:00 pm on Tuesday 12 noon on Monday By how many degrees does the minute hand move in the same time, in which the hour hand move by 28 ?",
        "options": [
            "168",
            "336",
            "196",
            "376"
        ],
        "answer": "336",
        "solution": "The minutes hand to coincide with the hour hand it should trace at first 5 minute spaces and then the hands of the clocks to be opposite to each other minute hand should trace 30 minute spaces i.e. totally it should gain 5 + 30 = 35 minute spaces to be opposite to that of hour hand. We know that, Minute hand gains 55 minute spaces over hour hand in 1 hour. Therefore, Minute hand gain 40 minute spaces over hour hand in 35 × (60/55) = 38(2/11). Hence the hand of the clock will minutes be opposite to each at 38 (2/11) past 1'O clock. Therefore, Correct option is B.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_25",
        "text": "At what time between 1'O clock and 2'O clock the hands of the clock are opposite to each other. 34(6/11) past 1'Oclock 38(2/11) past 1'Oclock 56(8/11) past 1'Oclock 64(9/11) past 1'Oclock How many times in a day (24 Hrs), are the hands of a clock in straight line but opposite in direction?",
        "options": [
            "20",
            "22",
            "24",
            "48"
        ],
        "answer": "22",
        "solution": "The hands of a clock point in opposite directions (in the same straight line) 11 times in every 12 hours. (Because between 5 and 7 they point in opposite directions at 6 o' clock only). So, in a day, the hands point in the opposite directions 22 times.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_26",
        "text": "How many times in a day (24 Hrs) are the hands of a clock coincide? 2:00 am on Tuesday None of these A clock is set at 10 a.m. The clock loses 16 minutes in 24 hours. What will be the true time when the clock indicates 3 a.m. on 4th day?",
        "options": [
            "9 p.m",
            "10 p.m",
            "11 p.m",
            "12 p.m"
        ],
        "answer": "10 p.m",
        "solution": "The correct answer is '10 p.m'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_26",
        "text": "If total number of cuts is 10 then find the minimum number of pieces that can be obtained.",
        "options": [
            "10",
            "11",
            "25",
            "None of these"
        ],
        "answer": "11",
        "solution": "If total number of cut is 10 then minimum number of pieces is 11 when cut is made in one plane only.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_27",
        "text": "If total number of cuts is 10 then find the maximum number of pieces that can be obtained.",
        "options": [
            "80",
            "48",
            "120",
            "None of these"
        ],
        "answer": "80",
        "solution": "If total number of cut is 10 then for maximum number of pieces these cuts have to be well distributed in three planes. For 10 cuts, 3, 3 and 4 is the distribution of cuts. Hence total number of pieces is (3 + 1)(3 + 1)(4 + 1) = 4 × 4 × 5 = 80.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_28",
        "text": "If total number of cuts is 20 then find the ratio of maximum and minimum number of pieces that can be obtained.",
        "options": [
            "448: 63",
            "446:21",
            "122:21",
            "None of these"
        ],
        "answer": "446:21",
        "solution": "For maximum number of pieces cuts has to be 6, 7 and 7 and maximum number of pieces is (6 + 1) (7 + 1)(7 + 1) = 7 × 8 × 8 = 448. Minimum number of pieces is 20 + 1 = 21. Hence required ratio is 448: 21.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_29",
        "text": "If total number of pieces (Smaller cubes/cuboids) is 45 then find the possible number of cuts.",
        "options": [
            "18 or 16",
            "8 or 12",
            "12 or 18",
            "None of these"
        ],
        "answer": "8 or 12",
        "solution": "If 45 = 1 × 1 × 45 then we require only 44 cuts in one plane. If 1 × 3 × 15 then we require 2 cuts in one plane and 14 cuts in other plane so total number of cuts is 2 + 14 = 16. If 1 × 5 × 9 then we require 4 cuts in one plane and 8 cuts in other plane so total number of cuts is 4 + 8 = 12 If 3 × 3 × 5 then we require 2 cuts in one plane, 2 cuts in 2nd plane and 4 cuts in 3rd plane so total number of cuts is 2 + 2 + 4 = 8.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_30",
        "text": "Find the maximum number of cuts required to get 50 pieces.",
        "options": [
            "50",
            "51",
            "49",
            "None of these"
        ],
        "answer": "50",
        "solution": "For maximum number of cuts it has to be in one cut only, so number of cuts is 49.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_31",
        "text": "Find the minimum number of cuts required to get 50 pieces.",
        "options": [
            "10",
            "11",
            "9",
            "None of these"
        ],
        "answer": "9",
        "solution": "For minimum number of cuts we will get 50 from 2 × 5 × 5 and cuts is 1 + 4 + 4 = 9 Solution for 7-10: Since total number of cubes is hence in the formula we will substitute n = 6.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_32",
        "text": "<b>Direction (Qs. 7-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) all the exposed surfaces are painted.</b><br><br>How many of the cubes have 0 faces painted?",
        "options": [
            "64",
            "125",
            "27",
            "None of these"
        ],
        "answer": "64",
        "solution": "Number of the cubes with 0 faces painted is (6 - 2)3 = 43 = 64.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_33",
        "text": "<b>Direction (Qs. 7-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) all the exposed surfaces are painted.</b><br><br>How many of the cubes have 2 faces painted?",
        "options": [
            "144",
            "125",
            "96",
            "None of these"
        ],
        "answer": "96",
        "solution": "Number of the cubes with 2 faces painted is 6(6 - 2)2 = 6 × 16 = 96.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_34",
        "text": "<b>Direction (Qs. 7-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) all the exposed surfaces are painted.</b><br><br>How many of the cubes have at most faces painted?",
        "options": [
            "208",
            "144",
            "210",
            "None of these"
        ],
        "answer": "208",
        "solution": "At most 2 faces painted means number of cubes with 0 face painted + number of cubes with 1 face painted + number of cubes with 2 face painted = 64 + 48 + 96 = 208.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_35",
        "text": "<b>Direction (Qs. 7-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) all the exposed surfaces are painted.</b><br><br>How many of the cubes have at least 2 faces painted?",
        "options": [
            "104",
            "144",
            "120",
            "None of these"
        ],
        "answer": "144",
        "solution": "At least 2 faces painted means number of cubes with 2 face painted + number of cubes with 3 face painted = 96 + 8 = 104. Solution for 11-15: Out of 6 faces of 3 faces are exposed and those were painted. Number of vertices with three faces exposed (Painted) is 1 Number of vertices with 2 faces exposed (Painted) is 3 Number of vertices with 1 faces exposed (Painted) is 3 Number of vertices with 0 faces exposed (Painted) is 1 Number of sides with 2 sides exposed (Painted) is 3 Number of sides with 1 sides exposed (Painted) is 6 Number of sides with no sides exposed (Painted) is 3 From the above observation Number of cubes with 3 faces Painted is 1 Number of cubes with 2 faces Painted is given by sides which is exposed from two sides and there are 3 such sides and from one side we will get 6 such cubes hence required number of cubes is 6 × 3 = 18 Number of cubes with 1 face Painted is given by faces which is exposed from one sides and there are 3 such faces hence required number of cubes is 36 × 3 = 108 Number of cubes with 0 face Painted is given by difference between total number of cubes - number of cubes with at least 1 face painted = 343 - 1 - 18 - 108 = 216 In other words number of cubes with 0 painted is (7 - 1)3 = 216. (d From the above explanation number of the cubes with 0 faces painted is 216.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_36",
        "text": "<b>Direction (Qs. 11-15) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept at the corner of a room, all the exposed surfaces are painted then:</b><br><br>How many of the cubes have 0 faces painted?",
        "options": [
            "64",
            "125",
            "240",
            "None of these"
        ],
        "answer": "125",
        "solution": "From the above explanation number of the cubes with 2 faces painted is 18.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_37",
        "text": "<b>Direction (Qs. 11-15) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept at the corner of a room, all the exposed surfaces are painted then:</b><br><br>How many of the cubes have 2 faces painted?",
        "options": [
            "14",
            "18",
            "16",
            "None of these"
        ],
        "answer": "16",
        "solution": "From the above explanation number of the cubes with at most 2 faces painted is 216 + 108 + 18 =.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_38",
        "text": "<b>Direction (Qs. 11-15) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept at the corner of a room, all the exposed surfaces are painted then:</b><br><br>How many of the cubes have at most faces painted?",
        "options": [
            "208",
            "244",
            "342",
            "None of these"
        ],
        "answer": "208",
        "solution": "Option '208' is correct.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_39",
        "text": "<b>Direction (Qs. 11-15) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept at the corner of a room, all the exposed surfaces are painted then:</b><br><br>How many of the cubes have at least 2 faces painted?",
        "options": [
            "19",
            "144",
            "120",
            "None of these"
        ],
        "answer": "19",
        "solution": "Option '19' is correct.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_40",
        "text": "<b>Direction (Qs. 11-15) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept at the corner of a room, all the exposed surfaces are painted then:</b><br><br>How many of the cubes have 3 faces painted?",
        "options": [
            "0",
            "3",
            "5",
            "None of these"
        ],
        "answer": "0",
        "solution": "Option '0' is correct.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_41",
        "text": "<b>Direction (Qs. 16-20) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept alongside an edge (or side) of a room, all the exposed surfaces (in this case there are 4) are painted.</b><br><br>How many of the cubes have 0 faces painted?",
        "options": [
            "64",
            "125",
            "240",
            "None of these"
        ],
        "answer": "64",
        "solution": "Option '64' is correct.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_42",
        "text": "<b>Direction (Qs. 16-20) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept alongside an edge (or side) of a room, all the exposed surfaces (in this case there are 4) are painted.</b><br><br>How many of the cubes have 2 faces painted?",
        "options": [
            "23",
            "29",
            "31",
            "None of these"
        ],
        "answer": "23",
        "solution": "Option '23' is correct.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_43",
        "text": "<b>Direction (Qs. 16-20) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept alongside an edge (or side) of a room, all the exposed surfaces (in this case there are 4) are painted.</b><br><br>How many of the cubes have at most faces painted?",
        "options": [
            "341",
            "244",
            "342",
            "None of these"
        ],
        "answer": "341",
        "solution": "Option '341' is correct.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_44",
        "text": "<b>Direction (Qs. 16-20) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept alongside an edge (or side) of a room, all the exposed surfaces (in this case there are 4) are painted.</b><br><br>How many of the cubes have at least 2 faces painted?",
        "options": [
            "31",
            "44",
            "12",
            "None of these"
        ],
        "answer": "31",
        "solution": "Option '31' is correct.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_45",
        "text": "<b>Direction (Qs. 16-20) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept alongside an edge (or side) of a room, all the exposed surfaces (in this case there are 4) are painted.</b><br><br>How many of the cubes have 3 faces painted?",
        "options": [
            "0",
            "3",
            "5",
            "None of these"
        ],
        "answer": "0",
        "solution": "Option '0' is correct.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_27",
        "text": "<b>Direction (Qs. 1-5) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept on the surface of a room, all the exposed surfaces (in this case there are 5) are painted.</b><br><br>How many of the cubes have 0 faces painted?",
        "options": [
            "64",
            "150",
            "240",
            "None of these"
        ],
        "answer": "150",
        "solution": "From the above explanation number of the cubes with 0 faces painted is 150.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_28",
        "text": "<b>Direction (Qs. 1-5) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept on the surface of a room, all the exposed surfaces (in this case there are 5) are painted.</b><br><br>How many of the cubes have 2 faces painted?",
        "options": [
            "23",
            "29",
            "44",
            "None of these"
        ],
        "answer": "44",
        "solution": "From the above explanation number of the cubes with 2 faces painted is 44.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_29",
        "text": "<b>Direction (Qs. 1-5) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept on the surface of a room, all the exposed surfaces (in this case there are 5) are painted.</b><br><br>How many of the cubes have at most faces painted?",
        "options": [
            "339",
            "244",
            "342",
            "None of these"
        ],
        "answer": "339",
        "solution": "From the above explanation number of the cubes with at most 2 faces painted is 150 + 145 + 44 = 339. Or else 343 - 4 = 339.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_30",
        "text": "<b>Direction (Qs. 1-5) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept on the surface of a room, all the exposed surfaces (in this case there are 5) are painted.</b><br><br>How many of the cubes have at least 2 faces painted?",
        "options": [
            "48",
            "44",
            "12",
            "None of these"
        ],
        "answer": "48",
        "solution": "From the above explanation number of the cubes with at least 2 faces painted is 44 + 4 = 48.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_31",
        "text": "<b>Direction (Qs. 1-5) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7) and kept on the surface of a room, all the exposed surfaces (in this case there are 5) are painted.</b><br><br>How many of the cubes have 3 faces painted?",
        "options": [
            "0",
            "3",
            "5",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "From the above explanation number of the cubes with 3 faces painted is 4. Solution for 6-10: Let us see the changes due to removal of 1 cube from corner- Number of vertices with three faces exposed (Painted) is 7 + 3 = 10 Number of Cubes with 2 sides exposed (Painted): In general one edge give us 4 (n - 2 in general case) cubes with two face painted but in this case out of 12 edges only 9 edges will give us 4 cubes in one edge and remaining 3 edges will give us 3 cubes from one edge, hence total number of edge is 9 × 4 + 3 × 3 = 45 248Cubes Number of Cubes with 1 side exposed (Painted): It will remain same as normal case i.e 6(42) = 96 Number of Cubes with no sides exposed (Painted) is 43 = 64 From the above observation:.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_32",
        "text": "<b>Direction (Qs. 6-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) one cube from a corner is removed and then all the exposed surfaces are painted.</b><br><br>How many of the cubes have 0 faces painted?",
        "options": [
            "64",
            "125",
            "27",
            "None of these"
        ],
        "answer": "64",
        "solution": "From the above explanation number of the cubes with 0 faces painted is 64.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_33",
        "text": "<b>Direction (Qs. 6-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) one cube from a corner is removed and then all the exposed surfaces are painted.</b><br><br>How many of the cubes have 2 faces painted?",
        "options": [
            "48",
            "44",
            "45",
            "None of these"
        ],
        "answer": "45",
        "solution": "From the above explanation number of the cubes with 2 faces painted is 45.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_34",
        "text": "<b>Direction (Qs. 6-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) one cube from a corner is removed and then all the exposed surfaces are painted.</b><br><br>How many of the cubes have at most faces painted?",
        "options": [
            "205",
            "144",
            "210",
            "None of these"
        ],
        "answer": "205",
        "solution": "From the above explanation number of the cubes with at most 2 faces painted is 64 + 96 + 45 = 205. Or else 215 - 10 = 205.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_35",
        "text": "<b>Direction (Qs. 6-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) one cube from a corner is removed and then all the exposed surfaces are painted.</b><br><br>How many of the cubes have at least 2 faces painted?",
        "options": [
            "55",
            "44",
            "52",
            "None of these"
        ],
        "answer": "55",
        "solution": "From the above explanation number of the cubes with at least 2 faces painted is 45 + 10 = 55.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_36",
        "text": "<b>Direction (Qs. 6-10) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6) one cube from a corner is removed and then all the exposed surfaces are painted.</b><br><br>How many of the cubes have exactly 4 face painted?",
        "options": [
            "55",
            "44",
            "52",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "No cubes are with 4 face painted. Solution for 11-15: For least number of cuts 120 = 4 × 5 × 6 i.e number of cuts must be 3, 4 and 5 in three planes in this case number of cubes on a face is either 6 × 5 = 30 or 6 × 4 = 24 or 4 × 5 = 20 cubes. And number of cuboids on an edge is 4 or 5 or 6.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_37",
        "text": "<b>Direction (Qs. 11-15): Four colours namely Blue, Green, Red and White are used to paint a cube such that each face is painted in exactly one colour and each colour is painted on at least one face. The cube is now cut into 120 identical pieces by making least number of cuts.</b><br><br>What is the number of cubes with no face painted?",
        "options": [
            "24",
            "36",
            "48",
            "None of these"
        ],
        "answer": "24",
        "solution": "Number of cuboids with no face painted is (4 - 2) (5 - 2)(6 - 2) = 2 × 3 × 4 = 24.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_38",
        "text": "<b>Direction (Qs. 11-15): Four colours namely Blue, Green, Red and White are used to paint a cube such that each face is painted in exactly one colour and each colour is painted on at least one face. The cube is now cut into 120 identical pieces by making least number of cuts.</b><br><br>What is the least possible number of piece which have at most one colour on them?",
        "options": [
            "76",
            "44",
            "52",
            "None of these"
        ],
        "answer": "76",
        "solution": "To satisfy this case all the cuboids on the edges and corners must have more than one colour on them. And in that case opposite faces must have painted in the same colour. In that case number of cuboids with 3 colours on them = 8 In that case number of cuboids with 2 colours on them = 4 × (2 + 3 + 4) = 36 Hence number of cuboids with at least 1 colour on them is 120 - 36 - 8 = 76.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_39",
        "text": "<b>Direction (Qs. 11-15): Four colours namely Blue, Green, Red and White are used to paint a cube such that each face is painted in exactly one colour and each colour is painted on at least one face. The cube is now cut into 120 identical pieces by making least number of cuts.</b><br><br>If K is the number of cuboids which have more than one face painted in the same colour then find the maximum value of k.",
        "options": [
            "24",
            "36",
            "13",
            "None of these"
        ],
        "answer": "13",
        "solution": "In this case when k is maximum, one particular colour is used on three faces such that any two faces are adjacent to each other. Required number of cuboids will come from edges but not from vertex = 3 + 4 + 5 + 1 = 13.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_40",
        "text": "<b>Direction (Qs. 11-15): Four colours namely Blue, Green, Red and White are used to paint a cube such that each face is painted in exactly one colour and each colour is painted on at least one face. The cube is now cut into 120 identical pieces by making least number of cuts.</b><br><br>What is the ratio of maximum and minimum number of cuboids with red colour on them?",
        "options": [
            "18:7",
            "18 :5",
            "16:5",
            "None of these"
        ],
        "answer": "18 :5",
        "solution": "Maximum number of cuboid with red colour is possible when cube is painted with red colour in 3 sides with minimum number of common edges (which is equal to 2) Hence required maximum value is 6 (5 + 5 + 4 - 2) = 72 For minimum number of such cuboid Red colour is used only once and minimum number of cubes in that case is 20 Hence required ratio is 72: 20 = 18: 5.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_41",
        "text": "<b>Direction (Qs. 11-15): Four colours namely Blue, Green, Red and White are used to paint a cube such that each face is painted in exactly one colour and each colour is painted on at least one face. The cube is now cut into 120 identical pieces by making least number of cuts.</b><br><br>What is the maximum number of cuboids with only two face painted one face is painted red and other green?",
        "options": [
            "18",
            "16",
            "14",
            "None of these"
        ],
        "answer": "16",
        "solution": "In this case we have to use red and green twice and same colour should be on opposite faces then required cube is given by 4 edges (but not corner), maximum number of cubes from one edge is 6 - 2 = 4 so required number of cubes is 4 × 4 = 16 Solution for 16-20:.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_42",
        "text": "<b>Directions (Qs. 16-20) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). From one corner of the top layer of this cube, four smaller cubes (2 × 2 × 1) are removed. From the column on the opposite side, two cubes (1 × 1</b><br><br>× 2) are removed, and from the third corner, three cubes (1 × 1 × 3) are removed and from the fourth column four cubes (1 × 1 × 4) are removed. All exposed faces of the block thus formed are coloured red. How many small cubes are left in the block?",
        "options": [
            "109",
            "114",
            "112",
            "110"
        ],
        "answer": "112",
        "solution": "Total no. of cubes = 53 = 125, Some cubes from different corners are removed and the number removed cubes are 2, 3, 4 and 4. Remaining number of small cubes: = 125 - 2 - 3 - 4 - 4 = 125 - 13 = 112.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_43",
        "text": "<b>Directions (Qs. 16-20) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). From one corner of the top layer of this cube, four smaller cubes (2 × 2 × 1) are removed. From the column on the opposite side, two cubes (1 × 1</b><br><br>How many cubes do not have any coloured face?",
        "options": [
            "38",
            "44",
            "25",
            "35"
        ],
        "answer": "25",
        "solution": "In any plane,leave 4 sides cube and select (3 × 3 × 3) inter section .But the cubes 2 × 2 ×1 give 2 less cube because that part we are already removed. No. of cubes = (3 × 3 × 3) - 2 = 25.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_44",
        "text": "<b>Directions (Qs. 16-20) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). From one corner of the top layer of this cube, four smaller cubes (2 × 2 × 1) are removed. From the column on the opposite side, two cubes (1 × 1</b><br><br>How many cubes have only two coloured faces?",
        "options": [
            "33",
            "36",
            "18",
            "29"
        ],
        "answer": "33",
        "solution": "Only two faces are coloured is when cubes are at the edges (baring the corner cubes) If no cubes have been removed then on each edges we will get 3 cubes that has exactly 2 faces coloured, hence total number of such cubes = 12 × 3 = 36, because we have 12 edges. Out of these 3 cubes are removed hence required number of cubes = 36 - 3 = 33.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_45",
        "text": "<b>Directions (Qs. 16-20) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). From one corner of the top layer of this cube, four smaller cubes (2 × 2 × 1) are removed. From the column on the opposite side, two cubes (1 × 1</b><br><br>How many cubes in the top layer have three red faces each?",
        "options": [
            "6",
            "8",
            "3",
            "4"
        ],
        "answer": "8",
        "solution": "Each has Red faces on top layer = all edges cube = 2 + 2 + 2 + 2 = 8.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_46",
        "text": "<b>Directions (Qs. 16-20) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). From one corner of the top layer of this cube, four smaller cubes (2 × 2 × 1) are removed. From the column on the opposite side, two cubes (1 × 1</b><br><br>244Cubes How many cubes with 3 facefacecoloured?",
        "options": [
            "10",
            "11",
            "16",
            "12"
        ],
        "answer": "16",
        "solution": "Number of cubes with 3 face coloured = 4 (Bottom cubes) + 8 top cubes + 4 (column cubes) = 16 Solution for 21-25: Initial total number of cubes = 343, Number of cubes removed = 27 Smaller 27 cubes painted blue Exposed faces of original big cube (3 faces with 9 cube on each face i.e total 27 cubes) painted with black.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_47",
        "text": "<b>Direction (Qs. 21-25) : 343 Small unpainted cubes are arranged to form a large cube. All the six faces of the large cube are painted white. Now, a 3 × 3 cube, comprising 27 small cubes, is removed out from one of the corners of the large cube. The 3 × 3 cube is now painted blue on all six faces, while all the three surfaces (each of which a is a 3 × 3 square) of the large cube exposed due to the removal of the 3 × 3 cube are painted black. Then, the 3 × 3 cube is put back in its original position in the large cube and the large cube is finally painted yellow on all the six faces.</b><br><br>What is the number of small cubes which have exactly three faces painted ?",
        "options": [
            "8",
            "16",
            "18",
            "19"
        ],
        "answer": "18",
        "solution": "Since 7 corner (Vertices) of bigger cube is untouched hence they are painted with three faces. Now consider the corner from where we have removed 3 × 3 × 3 cubes, After removal 3 new corners of the bigger cube will be generated that will be painted with 3 faces and 8 corners from smaller cube of 3 × 3 × 3 painted with 3 faces. So the such total number of such cubes is 7 + 3 + 8 = 18.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_48",
        "text": "<b>Direction (Qs. 21-25) : 343 Small unpainted cubes are arranged to form a large cube. All the six faces of the large cube are painted white. Now, a 3 × 3 cube, comprising 27 small cubes, is removed out from one of the corners of the large cube. The 3 × 3 cube is now painted blue on all six faces, while all the three surfaces (each of which a is a 3 × 3 square) of the large cube exposed due to the removal of the 3 × 3 cube are painted black. Then, the 3 × 3 cube is put back in its original position in the large cube and the large cube is finally painted yellow on all the six faces.</b><br><br>What is the number of small cubes with exactly one face painted ?",
        "options": [
            "36",
            "66",
            "42",
            "45"
        ],
        "answer": "66",
        "solution": "In original big cube number of faces with one colour is 3(6 - 2)2 = 48 (here we have considered only 3 untouched faces of big cube) Cubes But here we have removed a cubes of the form of 3 × 3 × 3 and again put it back so out of three new exposed faces of big cube we will have 4 cubes in each face that is painted with one colour hence number of cubes from these three surfaces is 3 × 4 = 12 Now consider out of 3 × 3 × 3 cubes we will have 6 cubes (one in each face) which are painted only one face. Hence total number of cubes = 48 + 12 + 6 = 66.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_49",
        "text": "<b>Direction (Qs. 21-25) : 343 Small unpainted cubes are arranged to form a large cube. All the six faces of the large cube are painted white. Now, a 3 × 3 cube, comprising 27 small cubes, is removed out from one of the corners of the large cube. The 3 × 3 cube is now painted blue on all six faces, while all the three surfaces (each of which a is a 3 × 3 square) of the large cube exposed due to the removal of the 3 × 3 cube are painted black. Then, the 3 × 3 cube is put back in its original position in the large cube and the large cube is finally painted yellow on all the six faces.</b><br><br>What is the number of small cube with no face painted",
        "options": [
            "40",
            "18",
            "20",
            "14"
        ],
        "answer": "40",
        "solution": "Without any changes number of cubes with no face colour is given by (6 - 2)3 = 64 Now because of removal of 3 × 3 × 3 cubes from one of the corner from each face that were not painted earlier got exposed and will get painted, so from 3 × 3 × 3 cubes 4 × 3 = 12 cubes got painted, and a similar number from 3 exposed faces of big cube got painted. Total number of cubes with no face painted is 64 - 12 - 12 = 40.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_50",
        "text": "<b>Direction (Qs. 21-25) : 343 Small unpainted cubes are arranged to form a large cube. All the six faces of the large cube are painted white. Now, a 3 × 3 cube, comprising 27 small cubes, is removed out from one of the corners of the large cube. The 3 × 3 cube is now painted blue on all six faces, while all the three surfaces (each of which a is a 3 × 3 square) of the large cube exposed due to the removal of the 3 × 3 cube are painted black. Then, the 3 × 3 cube is put back in its original position in the large cube and the large cube is finally painted yellow on all the six faces.</b><br><br>How many cubes are painted with yellow and blue?",
        "options": [
            "12",
            "18",
            "15",
            "14"
        ],
        "answer": "15",
        "solution": "Out of 27 small cubes from 3 × 3 × 3, outer 26 cubes are 1st painted with blue and then it is kept back with original cube and painted with yellow so out of 26 cubes only 5 edges will give us cubes with both the colours and number of such cubes are 12.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_51",
        "text": "<b>Direction (Qs. 21-25) : 343 Small unpainted cubes are arranged to form a large cube. All the six faces of the large cube are painted white. Now, a 3 × 3 cube, comprising 27 small cubes, is removed out from one of the corners of the large cube. The 3 × 3 cube is now painted blue on all six faces, while all the three surfaces (each of which a is a 3 × 3 square) of the large cube exposed due to the removal of the 3 × 3 cube are painted black. Then, the 3 × 3 cube is put back in its original position in the large cube and the large cube is finally painted yellow on all the six faces.</b><br><br>How many cubes are painted two faces only one with yellow and one with blue?",
        "options": [
            "12",
            "11",
            "5",
            "8"
        ],
        "answer": "8",
        "solution": "Out of 12 cubes in previous question there are 4 cubes with 2 faces yellow so number of cubes painted two faces only one with yellow and one with blue is 12 - 4 = 8 Solution for 26-30:.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_52",
        "text": "<b>Directions (Qs. 26-30) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). All the small cubes lying on the edge of the top layer of the bigger cube are removed and also cubes lyingat the four corners of the bottom face are removed. All exposed faces of the block thus left are coloured red.</b><br><br>How many small cubes are left in the block?",
        "options": [
            "20",
            "93",
            "96",
            "105"
        ],
        "answer": "105",
        "solution": "Number of cubes removed from top face = 16 Number of cubes removed from bottom face = 4 Number of cubes left = 125 - (16 + 4) = 105.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_53",
        "text": "<b>Directions (Qs. 26-30) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). All the small cubes lying on the edge of the top layer of the bigger cube are removed and also cubes lyingat the four corners of the bottom face are removed. All exposed faces of the block thus left are coloured red.</b><br><br>How many cubes have three red faces each?",
        "options": [
            "20",
            "12",
            "8",
            "16"
        ],
        "answer": "20",
        "solution": "Number of cubes with three coloured face on the top side = 4 Number of cubes with three coloured face on the 2nd from top side = 4 Number of cubes with three coloured face on the bottom side = 12 Total number of such cubes = 12 + 8 = 20.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_54",
        "text": "<b>Directions (Qs. 26-30) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). All the small cubes lying on the edge of the top layer of the bigger cube are removed and also cubes lyingat the four corners of the bottom face are removed. All exposed faces of the block thus left are coloured red.</b><br><br>How many cubes are with two faces painted?",
        "options": [
            "20",
            "24",
            "18",
            "16"
        ],
        "answer": "24",
        "solution": "Number of cubes with two face painted from the top side (Which is a square of 3 × 3 = 9 cubes) is 4. Number of cubes with two face painted from the 2nd from top side (Which has four edges and each edge has 3 such cubes) is 4 × 3 = 12. Number of such cubes from vertical edges is 4 × 1 = 4 Number of such cubes from bottom face is 4 × 1 = 4 Hence total such cubes is 4 + 12 + 4 + 4 = 24 249.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_55",
        "text": "<b>Directions (Qs. 26-30) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). All the small cubes lying on the edge of the top layer of the bigger cube are removed and also cubes lyingat the four corners of the bottom face are removed. All exposed faces of the block thus left are coloured red.</b><br><br>How many cubes are with one face painted?",
        "options": [
            "34",
            "24",
            "28",
            "16"
        ],
        "answer": "34",
        "solution": "From top face (out of 3 × 3 square face) only one cube is with one face painted. From 4 vertical faces each face will give us 6 cubes hence total number of cubes from vertical faces is 6 × 4 = 24. From bottom face we will get 3 × 3 = 9 cubes So total number of cubes with one face painted is 1 + 24 + 9 = 34.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_56",
        "text": "<b>Directions (Qs. 26-30) : 125 cubes of similar size are arranged in the form of a bigger cube (5 cubes on each side, i. e. , 5 × 5 × 5). All the small cubes lying on the edge of the top layer of the bigger cube are removed and also cubes lyingat the four corners of the bottom face are removed. All exposed faces of the block thus left are coloured red.</b><br><br>How many cubes are with no face painted?",
        "options": [
            "34",
            "24",
            "28",
            "27"
        ],
        "answer": "27",
        "solution": "Number of cubes with no face painted is 105 - 34 - 24 - 20 = 27 Or else all the 3 × 3 × 3 inner cubes will remain coloured. Solution for 31-35: Here we have following cases: Case (i): When same colour is on opposite face. Case (ii): When two red colours are on opposite face and blue & green on adjacent faces Case (iii): When two green colours are on opposite face and blue &red on adjacent faces. Case (iv): When two blue colours are on opposite face and red & green on adjacent faces. Case (v): When same colours are on adjacent faces.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_57",
        "text": "<b>Directions (Qs. 31-35) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7). Its all the 6 faces are painted with Green, Red and blue colour such that each colour is used on exactly 2 faces.</b><br><br>If 'K' represents the number of cubes painted with red and blue but not green then which of the following set represents the value of 'K' most appropriately?",
        "options": [
            "{10, 17, 20, 22}",
            "{10, 20, 22}",
            "{10, 18, 22}",
            "None of these"
        ],
        "answer": "{10, 17, 20, 22}",
        "solution": "We will evaluate the value of 'K' in each and every case: Case (i): In this case number of cubes is given by 4 common edges except all 8 corner ones so number of cubes is 5 × 4 = 20 Case (ii): In this case number of cubes is given by 4 common edges (From one edge we will get 5 cubes with 2 face painted) except 6 corner ones (2 corner cubes are painted with only red and blue) so number of cubes is 5 × 4 + 2 = 22 Case (iii): In this case number of cubes is given by 2 common edges (From one edge we will get 5 cubes with 2 face painted) so number of cubes is 5 × 2 = 10. Case (iv): In this case number of cubes is given by 4 common edges (From one edge we will get 5 cubes with 2 face painted) except 6 corner ones (2 corner cubes are painted with only red and blue) so number of cubes is 5 × 4 + 2 = 22 Case (v): In this case number of cubes is given by 3 common edges (From one edge we will get 5 cubes with 2 face painted) except 6 corner ones (2 corner cubes are painted with only red and blue) so number of cubes is 5 × 3 + 2 = 17 Hence option (A) gives the all possible value of 'K' 250Cubes.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_58",
        "text": "<b>Directions (Qs. 31-35) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7). Its all the 6 faces are painted with Green, Red and blue colour such that each colour is used on exactly 2 faces.</b><br><br>If 'K' represents the number of cubes painted with 3 different colours then what could be the value of 'K'?",
        "options": [
            "8 or 5",
            "4 or 5",
            "2 or 8",
            "None of these"
        ],
        "answer": "2 or 8",
        "solution": "We will evaluate the value of 'K' in each and every case: Case (i): In this case number of cubes is all 8 corner ones so number of cubes is 8 Case (ii): In this case number of cubes is 4 corner ones so number of cubes is 4 Case (iii): In this case number of cubes is 4 corner ones so number of cubes is 4 Case (iv): In this case number of cubes is 4 corner ones so number of cubes is 4 Case (v): In this case number of cubes is 2 corner ones so number of cubes is 2 Hence option (C) gives the all possible value of 'K'.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_59",
        "text": "<b>Directions (Qs. 31-35) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7). Its all the 6 faces are painted with Green, Red and blue colour such that each colour is used on exactly 2 faces.</b><br><br>If 'K' represents the number of cubes painted with red and blue then which of the following set represents the value of 'K' most appropriately?",
        "options": [
            "{112, 13, 24, 26}",
            "{18, 14, 26, 28}",
            "{12, 14, 24, 28}",
            "None of these"
        ],
        "answer": "{18, 14, 26, 28}",
        "solution": "We will evaluate the value of 'K' in each and every case: Case (i): In this case number of cubes is given by 4 common edges so number of cubes is 7 × 4 = 28 Case (ii): In this case number of cubes is given by 4 common edges, out of these 4 edges there are 2 corner cubes common with these 4 edges so number of cubes is 7 × 4 - 2 = 26 Case (iii): In this case number of cubes is given by 2 common edges so number of cubes is 7 × 2 = 14. Case (iv): In this case number of cubes is given by 4 common edges, out of these 4 edges there are 2 corner cubes common with these 4 edges so number of cubes is 7 × 4 - 2 = 26 Case (v): In this case number of cubes is given by 3 common edges, out of these 3 edges there are 2 corner cubes common with these 4 edges so number of cubes is 7 × 3 - 3 = 18 Hence option (b) gives the all possible value of 'K'.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_60",
        "text": "<b>Directions (Qs. 31-35) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7). Its all the 6 faces are painted with Green, Red and blue colour such that each colour is used on exactly 2 faces.</b><br><br>If 'K' represents the number of cubes painted with only red colour then what could be the value of 'K'?",
        "options": [
            "50 or55",
            "45 or 50",
            "45 or 55",
            "None of these"
        ],
        "answer": "50 or55",
        "solution": "We will evaluate the value of 'K' in each and every case: Case (i): In this case number of cubes is given by 25 cubes from 1 face so number of cubes is 25 × 2 = 50 Case (ii): In this case number of cubes is given by 25 cubes from 1 face so number of cubes is 25 × 2 = 50 Case (iii): In this case number of cubes is given by 25 cubes from 1 face and 5 cubes from common edge so number of cubes is 25 × 2 + 5 = 55 Case (iv): In this case number of cubes is given by 25 cubes from 1 face and 5 cubes from common edge so number of cubes is 25 × 2 + 5 = 55 Case (v): In this case number of cubes is given by 25 cubes from 1 face and 5 cubes from common edge so number of cubes is 25 × 2 + 5 = 55 Hence option (a) gives the all possible value of 'K'.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_61",
        "text": "<b>Directions (Qs. 31-35) : 343 cubes of similar size are arranged in the form of a bigger cube (7 cubes on each side, i. e. , 7 × 7 × 7). Its all the 6 faces are painted with Green, Red and blue colour such that each colour is used on exactly 2 faces.</b><br><br>How many cubes are with only one colour on it?",
        "options": [
            "150 or155",
            "150 or 175",
            "150 or 165",
            "None of these"
        ],
        "answer": "150 or 165",
        "solution": "From the solution of previous question required number of cubes is 3 × 50 = 150 or 3 × 55 = 165 Solution for 36-40: Here on each face 6 × 6 = 36 cubes that are painted with one colour.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_62",
        "text": "<b>Directions (Qs. 36-40) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6). Its all the 6 faces are painted with Green, Red, blue, black, white, orangecolours.</b><br><br>How many cubes are painted with red or blue?",
        "options": [
            "60 or 72",
            "66 or 72",
            "62 or 72",
            "None of these"
        ],
        "answer": "66 or 72",
        "solution": "Case (i): When red and blue are adjacent to each other then from one face we will get 6 × 6 = 36 cubes but out of them 6 cubes from common edge is common so number of cubes are 2 × 6 × 6 - 6 = 66 Case (ii): When red and blue are opposite to each other then required number of cubes is 2 × 6 × 6 = 72.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_63",
        "text": "<b>Directions (Qs. 36-40) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6). Its all the 6 faces are painted with Green, Red, blue, black, white, orangecolours.</b><br><br>How many cubes are painted with red or blue or green?",
        "options": [
            "90 or 96",
            "90 or 84",
            "96 or 108",
            "None of these"
        ],
        "answer": "90 or 96",
        "solution": "Case (i): when these three colour are adjacent to each other then from one face we will get 6 × 6 = 36 cubes but out of them 6 × 3 = 18 cubes from common edge is common so number of cubes are 3 × 6 × 6 - 6 × 3 = 90 Case (ii): When red and blue are opposite to each other (or any two of the given three) then required number of cubes is 3 × 6 × 6 - 2 × 6 = 96.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_64",
        "text": "<b>Directions (Qs. 36-40) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6). Its all the 6 faces are painted with Green, Red, blue, black, white, orangecolours.</b><br><br>How many cubes are painted with red or blue but not green?",
        "options": [
            "only (i) & (ii)",
            "Only (ii) & (iii) all three",
            "None of these"
        ],
        "answer": "only (i) & (ii)",
        "solution": "Case (i): When red and blue are opposite to each other then from one face we will get 6 × 6 = 36 cubes but out of them 2 × 6 cubes from common edge with green painted face is common so number of cubes are 2 × 6 × 6 - 2 × 6 = 60 Case (ii): When red and blue are adjacent to each other then green is either adjacent to these or opposite to any one of red or blue, in 1st condition number of cubes is 2 × 6 × 6 - 2 × 6 - 11 = 55 cubes or in 2nd condition 2 × 6 × 6 - 6 - 6 = 60, required number of cubes is 55 or 60.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_65",
        "text": "<b>Directions (Qs. 36-40) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6). Its all the 6 faces are painted with Green, Red, blue, black, white, orangecolours.</b><br><br>55or 65(b)72 or 66 (c)55 or 60(d) None of these Which of the following statement is correct At least 1 cube is painted with red, green and blue. At most 1 cube is painted with red, green and blue. At most 6 cubes are painted with red and green. At least 6 cubes are painted with red and green.",
        "options": [
            "Only (i) & (iii)",
            "Only (ii) & (iii)",
            "Only (ii) & (iv)",
            "None of these"
        ],
        "answer": "Only (ii) & (iii)",
        "solution": "From solution of previous questions statements (ii) and (iii) are correct.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_66",
        "text": "<b>Directions (Qs. 36-40) : 216 cubes of similar size are arranged in the form of a bigger cube (6 cubes on each side, i. e. , 6 × 6 × 6). Its all the 6 faces are painted with Green, Red, blue, black, white, orangecolours.</b><br><br>How many cubes are painted with red, blue, green and black?",
        "options": [
            "8",
            "2",
            "1",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "None of the cubes can be painted in four faces. Solution for 41-45: Consider the 1st step, initial number of cubes N3 after removal of 1st set of coloured cubes number of cubes left out is (N - 1)3 hence number of cubes removed in 1st step (i.e with colour 1) is N3 - (N - 1)3 = 3N2 - 3N +1 Similarly number of cubes removed in 2nd step (i.e with colour 2) is Cubes Similarly number of cubes removed in 3rd step is (i.e with colour 3) and so on. = 3(N - 1)2 - 3(N - 1) + 1 Number of cubes remaining after 1st step is (N - 1)3 Number of cubes remaining after 2nd step is (N - 2)3 and so on.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_67",
        "text": "<b>Direction (Qs. 41-45) : N^3 number of cubes of similar size are arranged in the form of a bigger cube (N cubes on each side, i. e. , N × N× N) and kept at the corner of a room, all the exposed surfaces are painted with colour 1, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 2, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 3, this process is repeated 'K' number of times.</b><br><br>If number of cubes painted with colour 3 is 217 then how many cubes are painted with colour5",
        "options": [
            "125",
            "127",
            "64",
            "None of these"
        ],
        "answer": "127",
        "solution": "From the given condition Number of cubes removed in 3rd step (i.e with colour 3) is = 3(N - 2)2 - 3(N - 2) +1 = 217 hence N = 11 So number of cubes with colour 5 is = 3(N - 4)2 - 3(N - 4) + 1 = 127.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_68",
        "text": "<b>Direction (Qs. 41-45) : N^3 number of cubes of similar size are arranged in the form of a bigger cube (N cubes on each side, i. e. , N × N× N) and kept at the corner of a room, all the exposed surfaces are painted with colour 1, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 2, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 3, this process is repeated 'K' number of times.</b><br><br>If after 7th step number of cubes painted in exactly 2 faces with colour 7 is 21, then what is the number of cubes removed in 3rd step.",
        "options": [
            "469",
            "455",
            "433",
            "None of these"
        ],
        "answer": "469",
        "solution": "Total number of Cubes left after 7th step in (N - 7)3 in the form of (N - 7) × (N - 7) × (N - 7) cubes. And out of these number of cubes whose two sides are painted is given by three edges with each edge has (N - 8) so total number of cubes is 3 × (N - 8) From the given information 3(N - 8) = 21 or N = 15 Number of cubes removed in 3rd step (i.e with colour 3) is = 3(N - 2)2 - 3(N - 2) +1 = 469.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_69",
        "text": "<b>Direction (Qs. 41-45) : N^3 number of cubes of similar size are arranged in the form of a bigger cube (N cubes on each side, i. e. , N × N× N) and kept at the corner of a room, all the exposed surfaces are painted with colour 1, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 2, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 3, this process is repeated 'K' number of times.</b><br><br>Which of the following can be the number of cubes removed from the original N3 number of cubes. (i) 37(ii) 61 (iii) 98 If number of cubes painted on exactly one face with colour 1 and colour 2 is 150, then how many cubes are painted with only colour 4?",
        "options": [
            "45",
            "72",
            "18",
            "75"
        ],
        "answer": "18",
        "solution": "The required number of cubes must be equal to difference between two positive integer Since 64 - 27 = 37 125 - 27 = 98 125 - 64 = 61.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_70",
        "text": "<b>Direction (Qs. 41-45) : N^3 number of cubes of similar size are arranged in the form of a bigger cube (N cubes on each side, i. e. , N × N× N) and kept at the corner of a room, all the exposed surfaces are painted with colour 1, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 2, then all the coloured smaller cubes are removed and all the exposed surfaces are painted with colour 3, this process is repeated 'K' number of times.</b><br><br>Of all the removed cubes which one of the following could be the number of cubes with exactly 2face painted after 3 steps?",
        "options": [
            "112",
            "114",
            "116",
            "118"
        ],
        "answer": "116",
        "solution": "Number of cubes with only face is painted with colour 1 is 3(N - 2)(N - 1) = 3N2 - 9N + 6 Number of cubes with only face is painted with colour 2 is 3 (N - 3)(N - 2) = 3N2 - 15N +18 From the given condition (3N2 - 9N + 6) + (3N2 - 15N +18) = 6N2 - 24N + 24 = 150 from this we will get N = 7. Number of cubes left after step 3 is 4 × 4 × 4 = 64 When all the exposed faces are painted with colour 4 then number of cubes with only one face painted is 3 × 2 × 3 = 18 251 From the observation for 1st step we have seen that number of cubes is 3(N - 2)(N - 1) or in other words 3 times the product of 2 consecutive integer that is satisfied only by 18 which is 3 times of 2 × 3.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_71",
        "text": "<b>Direction (Qs. 46-50) : A big cube is painted with three colours red, green and blue such that each of the colour is on two faces. Now this cube is cut into 105 identical cuboids.</b><br><br>If number of cuboids with exactly 2 faces painted is 44 then how many cubes are painted on exactly 1 face.",
        "options": [
            "51",
            "57",
            "48",
            "None of these"
        ],
        "answer": "57",
        "solution": "After step 1 number of cubes with exactly 2 face painted is 4(N - 1) + (N - 2) = 5N - 6 Similarly after 2nd step number of cubes with exactly 2 face painted is 5(N - 1) - 6 = 5N - 11 And after 3rd step number of cubes with exactly 2 face painted is 5(N - 2) - 6 = 5N - 16 So total number of such cubes is 15N - 33 out of the given options only option B satisfy the given condition. Solution for 46-50: If C3 means number of cuboids with 3 face painted, C2 means number of cubes with 2 face painted and so on: Case P = Q = R = C3 C2 C1 C0 (i) 1 × 1 × 105 0 0 104 2 102 0 0 (ii) 1 × 3 × 35 0 2 34 4 68 33 0 (iii) 1 × 5 × 21 0 4 20 4 44 57 0 (iv) 1 × 7 × 15 0 6 14 4 36 65 0 (v) 3 × 5 × 7 2 4 6 8 36 46 15.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_72",
        "text": "<b>Direction (Qs. 46-50) : A big cube is painted with three colours red, green and blue such that each of the colour is on two faces. Now this cube is cut into 105 identical cuboids.</b><br><br>If number of cuboids with exactly 3 faces painted is 4 then how many cubes are painted on exactly 1 face.",
        "options": [
            "51 or 65",
            "57 or 66",
            "33 or 65",
            "None of these"
        ],
        "answer": "57 or 66",
        "solution": "From the table condition is same as that of case (iii) then number of cubes painted with 1 face is 57.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_73",
        "text": "<b>Direction (Qs. 46-50) : A big cube is painted with three colours red, green and blue such that each of the colour is on two faces. Now this cube is cut into 105 identical cuboids.</b><br><br>If number of cuboids with exactly 2 faces painted is 36 then how many cubes are painted on exactly 1 face.",
        "options": [
            "46 or 65",
            "57 or 66",
            "33 or 65",
            "None of these"
        ],
        "answer": "33 or 65",
        "solution": "From the table condition is same as that of case (ii), (iii) or (iv) then number of cubes painted with 1 face is either 33 or 57 or 65.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_74",
        "text": "<b>Direction (Qs. 46-50) : A big cube is painted with three colours red, green and blue such that each of the colour is on two faces. Now this cube is cut into 105 identical cuboids.</b><br><br>If number of cuboids with exactly 1 face painted is 57 then how many cubes are painted on exactly 2faces.",
        "options": [
            "46",
            "57",
            "44",
            "None of these"
        ],
        "answer": "46",
        "solution": "From the table condition is same as that of case (iv) or (v) then number of cubes painted with 1 face is either 46 or 65.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_75",
        "text": "<b>Direction (Qs. 46-50) : A big cube is painted with three colours red, green and blue such that each of the colour is on two faces. Now this cube is cut into 105 identical cuboids.</b><br><br>If number of cuboids with exactly 1 face painted is 44 then how many cubes are painted on exactly 2 faces.",
        "options": [
            "46",
            "57",
            "44",
            "None of these"
        ],
        "answer": "44",
        "solution": "From the table condition is same as that of case (iii) then number of cubes painted with 1 face is either 46 or 65.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_46",
        "text": "If 14th October 2005 is Friday then which day is 14th October 2006?",
        "options": [
            "Tuesday",
            "Saturday",
            "Thursday",
            "Friday"
        ],
        "answer": "Saturday",
        "solution": "Since in 1 year we have one odd day while in one leap year we have two odd days. Number of odd days are 1 (for 2006) 1 days more than Friday means Saturday.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_47",
        "text": "If today is Monday then which day of the week is after 59 days.",
        "options": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "answer": "Thursday",
        "solution": "Since a day of the week repeat after every 7 days, divide 59 by 7, remainder is 3 so number of odd days is 3, and 3 days after Monday is Thursday.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_48",
        "text": "If 14th October 2005 is Friday then which day is 14th October 2009?",
        "options": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "answer": "Wednesday",
        "solution": "Since in 1 year we have one odd day while in one leap year we have two odd days. Number of odd days are: 1(for 2006) + 1(for 2007) + 2 (For leap year 2008) + 1(for year 2009) so total number of odd days are 1 + 1 + 2 + 1 = 5 days. 5 days more than Friday means Wednesday.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_49",
        "text": "If 2nd June 2012 is Saturday then which day is 7th July 2012?",
        "options": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Saturday",
        "solution": "Number of days in June is 30 - 2 = 28, and number of days in July is 7, total number of days is 28 + 7 = 35, when we divide 35 by 7 remainder is 0, or number of odd days is 0 hence 7th july must be the same day as that of 2nd June i.e Saturday in this case.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_50",
        "text": "If 1st Jan 2001 is Monday then which day was on 1st Jan 2013.",
        "options": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Tuesday",
        "solution": "Number of years between 2001 to 2013 is 12 years (2013 - 2001 = 12 years) Number of leap years between 2001 to 2013 is 3, since a year has 1 odd days and a leap year has 2 odd days, so total number of odd days is 12 + 3 = 15 odd days. When we divide 15 by 7 remainder is 1 or in total we have 1 odd day so 1st jan 2013 is Tuesday.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_51",
        "text": "Which of the following is not a leap year?",
        "options": [
            "2100",
            "1200",
            "1600",
            "2000"
        ],
        "answer": "2100",
        "solution": "The century divisible by 400 is a leap year. 2100 is not divisible by 400 hence is not a leap year.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_52",
        "text": "Which of the following is a leap year?",
        "options": [
            "1146",
            "1254",
            "2100",
            "1128"
        ],
        "answer": "1128",
        "solution": "The century divisible by 400 is a leap year. 2100 is not divisible by 400 hence is not a leap year so 2100 is not a leap year, out of remaining 1128 is divisible by 4, so 1128 is a leap year.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_53",
        "text": "If Jan 1, 2006 was Sunday. What was the day of the week Jan 1, 2010",
        "options": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "On 31st December, 2005 it was Saturday. Number of odd days from the year 2006 to the year 2009 = (1 + 1 + 2 + 1) = 5 days.  On 31st December 2009, it was Thursday. Thus, on 1st Jan, 2010 it is Friday.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_54",
        "text": "Today is Sunday. After 69 days, it will be",
        "options": [
            "Tuesday",
            "Saturday",
            "Thursday",
            "None of these"
        ],
        "answer": "Saturday",
        "solution": "When 69 is divided by 7 we will get remainder 6 so the day will be 6 days more than Sunday i.e Saturday.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_55",
        "text": "If 6th March, 2005 is Sunday, what was the day of the week on 6th March, 2002?",
        "options": [
            "Tuesday",
            "Saturday",
            "Thursday",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Number of odd days between 6th march 2002 to 6th march 2003 is 1 Number of odd days between 6th march 2003 to 6th march 2004 is 2 Number of odd days between 6th march 2004 to 6th march 2005 is 1 Hence total Number of odd days between 6th march 2002 to 6th march 2005 is 1 + 2 + 1 = 4 odd days so 6th march 2002 is 4 days before Sunday i.e Wednesday.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_76",
        "text": "Today is Sunday what day of the week was 79 days back.",
        "options": [
            "Tuesday",
            "Friday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Friday",
        "solution": "When we divide 79 by 7 we will get remainder 2 so we have 2 odd days, so required day must be 2 days back from today (i.e Sunday) and that day should be Friday.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_77",
        "text": "If 2nd June 2013 is Sunday then which day was on 2nd June 2010?",
        "options": [
            "Wednesday",
            "Friday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Wednesday",
        "solution": "Consider from 2nd June 2010 to 2nd June 2013 we have total 2 non leap year and one leap year so number of odd days are 1 + 1 + 2 = 4 so 2nd June 2010 must be 4 days back from Sunday and that day is Wednesday. From Zeller's Formula: In this case k = 2 (since 2nd June) Month m = 4 (As march = 1, April = 2, May = 3, June = 4) D is the last two digit of year here D = 10 (As year is 2010) C is 1st two digit of century here C = 20 (As year is 2010) f  2  13  4  1  10  10    20   2  20. 5 4  4  f  k  13  m  1  D   D    C   2  C. f  2   51  10  2.5  5  40. 5 4  4   5  Calender f = 2 + 10 + 10 + 2 + 5 - 40 = - 11 This - ve value of f can be made positive by adding multiple of 7 So f = - 11 + 14 = 3 When divided by 7 we will get remainder 3, hence number of odd days is 3, So 2nd june 2010 is 3 days more than Monday, i.e Wednesday.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_78",
        "text": "Which of the following day of the week was 15th august 1947?",
        "options": [
            "Wednesday",
            "Friday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Friday",
        "solution": "From Zeller's Formula: f  k  13  m  1  D   D    C   2  C. 5 4  4  In this case k = 15 (since 15th August) Month m = 6 (As march = 1, April = 2, May = 3, August = 6) D is the last two digit of year here D = 47 (As year is 1947) C is 1st two digit of century here C = 19 (As year is 1947) f  15  13  6  1  47   47   19   2  19. 5 4  4  f  15  77   47  11.75  4.75  38.    5  f = 15 + 15 + 47 + 11 + 4 - 38 = 54. When divided by 7 we will get remainder 5, hence number of odd days is 3, A remainder of 0 corresponds to Sunday, 1 means Monday, So 15th August 1947 is 5 days more than Sunday, i.e Friday.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_79",
        "text": "Which of the followings day could be the 18th October 2050?",
        "options": [
            "Tuesday",
            "Friday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Tuesday",
        "solution": "From Zeller's Formula   f  k  13  m  1  D   D    C   2  C.     5 4  4  In this case k = 18 (since 18th October) Month m = 8 (As march = 1, April = 2, May = 3, October = 8) D is the last two digit of year here D = 50 (As year is 2050) C is 1st two digit of century here C = 20 (As year is 2050) f  18  13  8  1  50   50    20   2  20. 5 4  4  259 f  18  103   50  12.5  5  40.    5  f = 18 + 20 + 50 + 12 + 5 - 40 = 65. When divided by 7 we will get remainder 2, hence number of odd days is 2, So 18th October 2050 is 2 days more than Sunday, i.e Tuesday.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_80",
        "text": "If 5th march of a particular year is Friday then which day of the week will be on 5th November.",
        "options": [
            "Tuesday",
            "Sunday",
            "Thursday",
            "None of these"
        ],
        "answer": "Sunday",
        "solution": "Here we have to find the number of odd days between, 5th march and 5th November, Number of days in March is 26 or 5 odd days (Here we have not included 5th march) Number of days in April is 30 or 2 odd days Number of days in May is 31 or 3 odd days Number of days in June is 30 or 2 odd days Number of days in July is 31 or 3 odd days Number of days in August is 31 or 3 odd days Number of days in September is 30 or 2 odd days Number of days in October is 31 or 3 odd days Number of days in November is 5 or 5 odd days (Here 5th November is included) So total number of odd days = 5 + 2 + 3 + 2 + 3 + 3 + 2 + 3 + 5 = 28 when divided by 7 gives remainder 0 hence 5th November will be same as that of 5th march.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_81",
        "text": "How many weekends are there in March 2009?",
        "options": [
            "9",
            "10",
            "8",
            "None of these."
        ],
        "answer": "10",
        "solution": "From Zeller's Formula we can find that 1st March 2009 is Sunday so we will have 5 Saturdays and 5 Sundays in total 10 weekends.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_82",
        "text": "Which of the following two months in a particular year will have same calendar. January and August January and October March and November None of these On 14th Feb the valentine day, 2009 it was Saturday. What was the day of the week on 14th Feb, 2008?",
        "options": [
            "Tuesday",
            "Sunday",
            "Thursday",
            "None of these"
        ],
        "answer": "Thursday",
        "solution": "January and August or October depends on leap year or non leap year. But if we find the number of odd days between March and November we will get number of odd days is 0 hence they will have same calendar.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_83",
        "text": "How many days could be in K weeks and K days.",
        "options": [
            "96",
            "92",
            "90",
            "None of these"
        ],
        "answer": "90",
        "solution": "The year 2008 is a leap year. It has 2 odd days. The day on 14th Feb, 2008 is 2 days before the day on 14th Feb, 2009. Hence, this day is Thursday.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_84",
        "text": "How many days are between Kth day of the Kth week to 2Kth day of the 2Kth week",
        "options": [
            "96",
            "92",
            "90",
            "None of these"
        ],
        "answer": "96",
        "solution": "Number of days in K weeks is 7K hence total number of days is 7K + K = 8k or number of days must be a multiple of 8.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_14",
        "text": "On what dates of April, 2001 did Friday fall? 5th, 12th, 19th, 26th April 4th, 11th, 18th, 25th April 3rd, 10th, 17th, 24th April None of these How many Sundays will be in a period of 100 years.",
        "options": [
            "5217",
            "5219",
            "5217 or 5218",
            "5218 or 5219"
        ],
        "answer": "5218 or 5219",
        "solution": "Lets find out 1st April from Zeller's Formula: f  k  13  m  1  D   D    C   2  C.   5 4  4  In this case k = 1 (since 1st April) Month m = 2 (As march = 1, April = 2) D is the last two digit of year here D = 01 (As year is 2001) C is 1st two digit of century here C = 20 (As year is 2001) f  1  13  2  1  01   01   20   2  20 Number of days in a period of 100 years is 365 × 100 + 23 or 365 × 100 + 24. If century year is not a leap year then number of days = 365 × 100 + 23, and number of weeks is 5217 and 4 odd days and for leap year it will be 5217 weeks and 5 odd days, hence number of Sundays is either 5217 or 5218.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_15",
        "text": "If year 194X starts with Sunday then which one of the following could be the value of x.",
        "options": [
            "9",
            "6 or 9",
            "1 or 5",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "From Zeller's formula lets find the 1st day of 1940 f  k  13  m  1  D   D    C   2  C. 5 4  4    st 5 4  4  In this case k = 1 (since 1 January)  5  5 f  1   25   01  0.5  5  40.  5   5   f = 1 + 5 + 01 + 0 + 5 - 40 = - 28 This - ve value of f can be made positive by adding multiple of 7 So f = - 28 + 28 = 0 Month m = 11(As march = 1, April = 2, and hence January = 11) D is the last two digit of year here D = 39 (As year 1940 will start from March) C is 1st two digit of century here C = 19 (As year is 1940) f  1  13  11  1  39   39   19   2  19. So number of odd days is 0, So 1st April 2001 is Sunday, 5 142    4   4  So 1st Friday is on 6th April, so next Fridays is 13th, 20th, 27th April. f  1   5  39  9.75  4.75  38. .",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_16",
        "text": "Calendar of which one of the following 2 years is similar?",
        "options": [
            "1940, 1946",
            "1977, 1982",
            "1912, 1616",
            "None of these"
        ],
        "answer": "1912, 1616",
        "solution": "In a period of 100 years there are 23 or 24 leap years (as for century year it might be or might not be a leap year, as 1900 was not a leap year) Or f = 1 + 28 + 39 + 9 + 4 - 38 = 43 when divided by 7 gives remainder 1 hence it has one odd day or 1st January 1940 was Monday Then from next year we can make table. Year 1940 1941 1942 1943 1944 1945 1946 1947 1948 1949 Odd Day 2 1 1 1 2 1 1 1 2 1 Day of 1st Jan Monday Wed Thu Fri Sat Mon Tue Wed Thu Sat So in the range from 1940 to 1949 not a single year started with Sunday.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_17",
        "text": "Calendar of 2013 is related to calendar of 2015 same as calendar of 1977 to which one of the following year?",
        "options": [
            "1981",
            "1985",
            "1990",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Calendar of 2 years is similar if number of odd days between these two years is zero. Consider options one by one Between 1940 to 1946 we have two leap years 1940 and 1944 so number of odd days is 2 + 1 + 1 + 1 + 2 + 1 = 8 or 1 hence calendar of these two years is not similar. Between 1977 to 1982 we have one leap years 1980 so number of odd days is 1 + 1 + 1 + 2 + 1 = 6 calendar of these two years is not similar. Between 1912 to 1916 we have one leap years 1912 so number of odd days is 2 + 1 + 1 + 1 = 5 hence calendar of these two years is not similar.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_18",
        "text": "Which of the following year has 53 Sundays?",
        "options": [
            "2001",
            "2006",
            "2009",
            "None of these"
        ],
        "answer": "2009",
        "solution": "Number of odd days between 2013 and 2015 is 2, so we have to find the year which will have 2 odd days between 1977 and required year. Consider options one by one- Number of odd days between 1977 and 1981 is 1 + 1 + 1 + 2 = 5 odd days Number of odd days between 1977 and 1985 is 1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 = 10 odd days or 3 odd days Number of odd days between 1977 and 1990 is 1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 2 + 1 = 16 odd days or 2 odd days, hence calendar of 1990 is the answer. Calender.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_19",
        "text": "If in a particular year 'X' there are 53 Sundays then how many Sundays will be there in a period of four years X to X + 3 year.",
        "options": [
            "208",
            "209",
            "208 or 209",
            "None of these"
        ],
        "answer": "209",
        "solution": "In a year we have 53 Sundays only when year start with Sunday (For non leap year) and either with Saturday or Sunday (For leap year). From zeller's formula 1st January 2001 was Monday From number of odd days 1st January 2006 will start with Sunday so it had 53 Sunday Similarly 1st January 2009 will start with Thursday.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_20",
        "text": "If in a particular month there are 5 Thursday then how many Fridays are there in next month.",
        "options": [
            "4",
            "5",
            "4 or 5",
            "None of these"
        ],
        "answer": "5",
        "solution": "Let us take two cases Case (i): When year start with Sunday then next 4 years will always have 52 Sundays hence total number of Sundays are 53 + 3 × 52 = 209 Sundays Case (ii): When year start with Saturday and then we have 53 Sundays that means year is a leap year then next 4 years will always have 52 Sundays hence total number of Sundays are 53 + 3 × 52 = 209 Sundays.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_21",
        "text": "Monday falls on 20th March, 1995. What was the day on 3rd November, 1994?",
        "options": [
            "Tuesday",
            "Sunday",
            "Thursday",
            "None of these"
        ],
        "answer": "Thursday",
        "solution": "If month ends with Thursday then next month will start with Friday and it may have 5 Friday otherwise it may have 4 Fridays. 261.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_22",
        "text": "If 94 days back it was Monday then after how many days we will get a Sunday?",
        "options": [
            "5",
            "24",
            "27",
            "None of these"
        ],
        "answer": "27",
        "solution": "Counting the number of days after 3rd November, 1994 we have: Number of Days in November = 27 or 6 odd days. Number of Days in December = 31 or 3 odd days. Number of Days in January = 31 or 3 odd days Number of Days in February = 28 or 0 odd days Number of Days in March = 20 or 6 odd days. So total number of odd days = 6 + 3 + 3 + 0 + 6 = 18 when divided by 7 gives remainder 4. Number of odd days = 4. The day on 3rd November, 1994 is (7 - 4) days beyond the day on 20th March, 1995. So, the required day is Thursday.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_10",
        "text": "The last day of century can be which of the following day?",
        "options": [
            "Tuesday",
            "Friday",
            "Thursday",
            "Saturday"
        ],
        "answer": "Thursday",
        "solution": "Count the number of odd days from the year 2011 onwards. Calendar will repeat when we will have number of odd days = 0. Year 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 Odd day 1 2 1 1 1 2 1 1 1 2 1 Total odd day 1 3 4 5 6 8 ( = 1) 2 3 4 6 7 So after ending of 2021 the new year 2022 will start and that will have same calendar as that of 2011.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_11",
        "text": "The calendar for the year 2011 will be the same for the year",
        "options": [
            "2014",
            "2018",
            "2021",
            "2022"
        ],
        "answer": "2021",
        "solution": "If June month has 5 Mondays then dates must be 1st, 8th, 15th, 22nd, and 29th or second group of dates must be 2nd, 9th, 16th, 23rd, and 30th Now lets find out the number of days or odd days between 1st January till 1st June. Number of days in January: 30 or number of odd days are 2 (here we have not included 1st Jan so number of days is 31 - 1 = 30) Number of days in February: 28 or number of odd days: 0 (Assuming non leap Year) Number of days in March: 31 or number of odd days 3 Number of days in April: 30 or number of odd days: 2 Number of days in May: 31 or number of odd days: 3 Number of days in June: 1 or number of odd days: 1 So total number of odd days are 2 + 0 + 3 + 2 + 3 + 1 = 11 when divided by 7 gives remainder 4, Hence 1st January must be 4 days back from Monday i.e Thursday. And if 2nd January is Monday then 1st January must be Friday. Now consider a leap year then number of odd days between 1st January and 1st June is 5 days hence 262Calender in that case 1st January must be either Friday or Saturday.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_12",
        "text": "If in a particular year June month has 5 Mondays then that year started with which one of the following days? Thursday or Friday Friday or Wednesday Thursday or Saturday",
        "options": [
            "Only (i)",
            "Only (i) and (ii)",
            "Only (i) and (iii)",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "If November month has 5 Mondays then dates must be 1st, 8th, 15th, 22nd, and 29th or second group of dates must be 2nd, 9th, 16th, 23rd, and 30th Now lets find out the number of days or odd days between 1st April till 1st November Number of days in April: 29 or number of odd days are 1 (here we have not included 1st April so number of days is 30 - 1 = 29) Number of days in May: 31 or number of odd days 3 Number of days in June: 30 or number of odd days 2 Number of days in July: 31 or number of odd days :- 3 Number of days in August: 31 or number of odd days 3 Number of days in September: 30 or number of odd days 2 Number of days in October: 31 or number of odd days 3 Number of days in November: 1 or number of odd days 1 So total number of odd days are 1 + 3 + 2 + 3 + 3 + 2 + 3 + 1 = 18, when divided by 7 gives remainder 4 Hence 1st April must be 4 days back from Monday i.e Thursday. Then weekend will be 3rd, 4th, 10th 11th, 17th, 18th, 24th, 25th, And if 2nd November is Monday then 1st April must be Friday. Then weekend will be 2nd,3rd, 9th,10th, 16th,17th, 23rd, 24th and 30th total 9 weekends Hence number of weekends may be 8 or 9.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_13",
        "text": "If in a particular year November has 5 Mondays then How many weekends (Saturday and Sunday) does April of that month has?",
        "options": [
            "8",
            "9",
            "10",
            "8 or 9"
        ],
        "answer": "8 or 9",
        "solution": "Here we have two cases: Case (i): If a month start with Thursday the month will have 5 Saturdays and 4 Sundays i.e total 9 weekends. In this case 31st December will be Sunday hence 1st January will be either Sunday (For non leap year) or Saturday (For leap year) then January will have 9 or 10 weekends. Case (ii) If a month start with Sunday the month will have 4 Saturdays and 5 Sundays i.e total 9 weekends. In this case 31st December will be Wednesday hence 1st January will be either Wednesday (For non leap year) or Tuesday (For leap year) then January will have 8 or 9 weekends. Hence number of weekends in January will be 8 or 9 or 10.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_14",
        "text": "If in a year December has 9 weekends (Saturday and Sunday) then in that year January had how many weekends?",
        "options": [
            "8",
            "9",
            "10",
            "None of these"
        ],
        "answer": "10",
        "solution": "If there are 53 Saturday and Sunday that means year is a leap year and last day of year is Sunday so 1st day of January must be Saturday then January will have 10 weekends.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_15",
        "text": "If in a particular year there are 53 weekends (i.e Saturday and Sunday) then how many weekend January of that year has.",
        "options": [
            "8",
            "9",
            "10",
            "None of these"
        ],
        "answer": "8",
        "solution": "In a period of 100 years there are 23 or 24 leap years (as for century year it might be or might not be a leap year, as 1900 was not a leap year) Number of odd days in a period of 100 years is 100 + 23 or 100 + 24 or 123/124 odd days, Number of odd days in 100 years is when 123/124 divided by 7, remainder is 4 or 5. So next century should start with Monday or Tuesday.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_16",
        "text": "If 1st day of a century is Thursday then what could be the 1st day of next century. Monday or Tuesday Sunday or Monday Tuesday or Wednesday None of these Calender If 1st January of a particular year (say x) is Monday then what will be the 1st day of the year 100 years after (i.e year x + 100). Friday Wednesday, Friday, and Sunday Wednesday, Friday, and Saturday Wednesday, Thursday, and Sunday None of these 257 Friday or Saturday Saturday or Sunday None of these 1st day of century can not start with which of the following day? Calendar of month July is same as that of which month of previous year.",
        "options": [
            "May",
            "September",
            "April",
            "None of these"
        ],
        "answer": "September",
        "solution": "In a period of 100 years there are 23 or 24 leap years (as for century year it might be or might not be a leap year, as 1900 was not a leap year) Number of odd days in a period of 100 years is 100 + 23 or 100 + 24 or 123/124 odd days, Number of odd days in 100 years is when 123/124 divided by 7, remainder is 4 or 5. So next century should start with Friday or Saturday.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_56",
        "text": "<b>Direction (Qs. 1-5):</b><br><br>In a knockout tournament 64 players participated. These 64 players are seeded from 1 to 64 with seed 1 being the top seed and seed 64 being the bottom seed. The tournament is conducted in different stages. In stage 1 seed 1 played with seed 64 and that match is named as match 1 of stage 1, seed 2 played with seed 63 and that match is named as match 2 of stage 1, and so on. In stage 2, winner of match 1 and match 32 of stage 1 played against each other and that match is named as Match 1 of stage 2, then winner of match 2 and match 31 of stage 1 played against each other and that match is named as Match 2 of stage 2. And so on The same procedure is followed in further stages. Now answer the following questions. How many stages are in the tournament?",
        "options": [
            "5",
            "6",
            "7",
            "None of these"
        ],
        "answer": "6",
        "solution": "Since 64 = 26 hence we will have total 7th stages in the tournament with last 7th stage is the final match.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_57",
        "text": "<b>Direction (Qs. 1-5):</b><br><br>What is the total number of matches in the tournament?",
        "options": [
            "63",
            "36",
            "127",
            "None of these"
        ],
        "answer": "63",
        "solution": "Total number of matches is 32 + 16 + 8 + 4 + 2 + 1 = 63 Or else since total number of players is 64 hence number of matches must be 64-1 = 63.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_58",
        "text": "<b>Direction (Qs. 1-5):</b><br><br>If seed 9 reached final then which one of the following could play with him in final?",
        "options": [
            "56",
            "24",
            "11",
            "None of these"
        ],
        "answer": "11",
        "solution": "Seed 9 played with seed 56 in stage 1, with seed 24 in stage 2, But seed 11 can reach the final if he beats seeds 6, 3 and 2 in stage 3 4 and 5 respectively.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_59",
        "text": "<b>Direction (Qs. 1-5):</b><br><br>Which lowest seeded player can win the tournament without causing an upset by him?",
        "options": [
            "32",
            "33",
            "34",
            "None of these"
        ],
        "answer": "32",
        "solution": "If all the matches in stage 1 is an upset except the last match where seed 32 won, then in stage 2 seed 32 is the highest seeded player who can win the tournament without causing an upset.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_60",
        "text": "<b>Direction (Qs. 1-5):</b><br><br>If seed 15 won the tournament then what is the minimum number of upsets caused by him?",
        "options": [
            "1",
            "2",
            "3",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "From the solution of previous question we have seen that seed 32 can win the tournament without causing an upset by him. So seed 15 can also win the tournament without causing an upset by him. A B C D E F G H A XXXX W W L W L L L 3 B L XXXX L W W W L L 3 C L W XXXX W L L L L 2 D W L L XXXX W L W L 3 E L L W L XXXX L W L 2 F W L W W W XXXX L L 4 G W W W L L W XXXX L 4 H W W W W W W W XXXX 7.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_61",
        "text": "<b>Direction (Qs. 6-10): 8 teams namely A, B, C, D, E, F, G and H participated in a tournament whose 1st stage is a round robin stage where each team play with other team exactly once. Following further information is known to us:</b><br><br>A won against B, C and E. Number of matches won by A, B and D is 3 each no other team won 3 matches. C won against B and D but lost to E. H won all the matches. G won against B but lost to E. D lost to F and C won only 2 matches. Now answer the following questions: How many matches F won",
        "options": [
            "2",
            "3",
            "4",
            "None of these"
        ],
        "answer": "4",
        "solution": "From the table F won 4 matches.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_62",
        "text": "<b>Direction (Qs. 6-10): 8 teams namely A, B, C, D, E, F, G and H participated in a tournament whose 1st stage is a round robin stage where each team play with other team exactly once. Following further information is known to us:</b><br><br>How many matches G lost?",
        "options": [
            "2",
            "3",
            "4",
            "None of these"
        ],
        "answer": "4",
        "solution": "From the table G lost 4 matches.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_63",
        "text": "<b>Direction (Qs. 6-10): 8 teams namely A, B, C, D, E, F, G and H participated in a tournament whose 1st stage is a round robin stage where each team play with other team exactly once. Following further information is known to us:</b><br><br>E won against which all teams?",
        "options": [
            "C and B",
            "C and G",
            "C and F",
            "None of these"
        ],
        "answer": "C and G",
        "solution": "From the table E won against C and G.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_64",
        "text": "<b>Direction (Qs. 6-10): 8 teams namely A, B, C, D, E, F, G and H participated in a tournament whose 1st stage is a round robin stage where each team play with other team exactly once. Following further information is known to us:</b><br><br>Which team won minimum number of matches?",
        "options": [
            "C and B",
            "C and G",
            "C and F",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "C and E won 2 matches.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_beginner_65",
        "text": "<b>Direction (Qs. 6-10): 8 teams namely A, B, C, D, E, F, G and H participated in a tournament whose 1st stage is a round robin stage where each team play with other team exactly once. Following further information is known to us:</b><br><br>How many teams won 4 matches?",
        "options": [
            "2",
            "3",
            "4",
            "None of these"
        ],
        "answer": "2",
        "solution": "2 teams won 2 matches each 274Games and Tournament.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_85",
        "text": "<b>Direction (Qs. 1-5): 1st stage of the TT tournament is a round robin stage where 8 players played against each other, after this stage it is found that 5 players won 5 matches each. After this 2nd stage is conducted in the similar fashion where again 5 players won 5 matches each. Only two players won 10 matches each. There is no tie in any match.</b><br><br>What is the minimum number of matches won by any player.",
        "options": [
            "0",
            "5",
            "6",
            "None of these"
        ],
        "answer": "5",
        "solution": "For minimum number of matches lets take example of R4 he won 0 matches in stage 1 and 5 matches in stage II. So required minimum number is 5.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_86",
        "text": "<b>Direction (Qs. 1-5): 1st stage of the TT tournament is a round robin stage where 8 players played against each other, after this stage it is found that 5 players won 5 matches each. After this 2nd stage is conducted in the similar fashion where again 5 players won 5 matches each. Only two players won 10 matches each. There is no tie in any match.</b><br><br>If a player won 0 matches in stage 1 then which one of the following is correct? There must be a player who won 3 matches. 266Games and Tournament There must be a player who won all the matches. There must be a player who won 1 match. None of these. If a player Amit won against Bimal but lost to Chand then Chand has won how many matches?",
        "options": [
            "1",
            "3",
            "5",
            "Can not be determine"
        ],
        "answer": "5",
        "solution": "from table option (c) is correct.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_87",
        "text": "<b>Direction (Qs. 1-5): 1st stage of the TT tournament is a round robin stage where 8 players played against each other, after this stage it is found that 5 players won 5 matches each. After this 2nd stage is conducted in the similar fashion where again 5 players won 5 matches each. Only two players won 10 matches each. There is no tie in any match.</b><br><br>How many players in can win 3 matches in stage 1 and 2 together?",
        "options": [
            "0",
            "5",
            "6",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "From the table any option can satisfy the given condition. 4 (a) No player can win 3 matches.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_88",
        "text": "<b>Direction (Qs. 1-5): 1st stage of the TT tournament is a round robin stage where 8 players played against each other, after this stage it is found that 5 players won 5 matches each. After this 2nd stage is conducted in the similar fashion where again 5 players won 5 matches each. Only two players won 10 matches each. There is no tie in any match.</b><br><br>If 'K' represents number of matches won by a particular player then which one of the following best represents the range of 'K'?",
        "options": [
            "5 < K < 10",
            "6 ≤ K < 11",
            "5 ≤ K ≤ 10",
            "None of these"
        ],
        "answer": "6 ≤ K < 11",
        "solution": "Minimum is 6 and maximum is 10 represented by option.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_89",
        "text": "<b>Direction (Qs. 6-10): The world cup tournament is arranged as per the following rules:</b><br><br>In the beginning 16 teams enter and are divided into 2 groups of 8 teams each, where the team in any group plays exactly once with all the teams in the same group. At the end of this round top four teams from each group advance to the next round in which two teams play each other and the losing team goes out of the tournament. The winner in the first round gains one point from the win and the loser gets zero. In case of tie on a position there is a complex rule to decide the position. What is the total number of matches played in the tournament?",
        "options": [
            "63",
            "56",
            "64",
            "None of these"
        ],
        "answer": "63",
        "solution": "Number of matches in Stage 1 is 2(8C2) = 2(7 × 8/2) = 56 Stage 2 will be a knockout tournament with 8 teams so in this stage number of matches will be 7. Total number of matches is 56 + 7 = 63.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_90",
        "text": "<b>Direction (Qs. 6-10): The world cup tournament is arranged as per the following rules:</b><br><br>The maximum number of matches that a team going out of the tournament in the first round itself can win is",
        "options": [
            "3",
            "5",
            "4",
            "None of these"
        ],
        "answer": "5",
        "solution": "In the 1st round in one group number of matches is (7 × 8/2) = 2 Lets consider bottom 3 they will have 3 matches between them, so remaining 28 - 3 = 25 matches have involvement of top 5 teams, if they won equal number of matches i.e 5 each then decision will be taken based on tie breaker rule, hence a team may be eliminated even after winning 5 matches.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_91",
        "text": "<b>Direction (Qs. 6-10): The world cup tournament is arranged as per the following rules:</b><br><br>The minimum number of matches that a team must win in order to qualify for the second round is",
        "options": [
            "3",
            "5",
            "6",
            "None of these"
        ],
        "answer": "6",
        "solution": "From the solution of previous question even after winning 5 matches a team can get eliminated so to be sure a team must win 6 matches.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_92",
        "text": "<b>Direction (Qs. 6-10): The world cup tournament is arranged as per the following rules:</b><br><br>The minimum number of matches that a team who advanced to the next stage has won?",
        "options": [
            "2",
            "5",
            "3",
            "None of these"
        ],
        "answer": "2",
        "solution": "Consider top three team if they won maximum number of matches then points with them is 7 + 6 + 5 = 18, remaining 28 - 18 = 10 points can be distributed to bottom 5 teams, so even after getting 2 points or 2 wins a team can advanced to next stage by tie breaker rule.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_easy_93",
        "text": "<b>Direction (Qs. 6-10): The world cup tournament is arranged as per the following rules:</b><br><br>What is the minimum number of matches won by the winner of the tournament?",
        "options": [
            "8",
            "6",
            "5",
            "None of these"
        ],
        "answer": "5",
        "solution": "From the solution of previous question a team even with two wins can advanced to next stage where it has to play 3 matches so total number of matches is 5.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "easy",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_23",
        "text": "There are four teams in the Indian Professional Volleyball league: Karnataka, Punjab, Jharkhand and Gujarat. Karnataka has 19 points and would be playing 1, 2 and 1 matches against Punjab, Jharkhand and Gujarat respectively. Punjab has 29 points and would be playing 2 and 1 matches against Jharkhand and Gujarat respectively. Jharkhand has 32 points and has 2 matches left against Gujarat. Gujarat is currently trailing the point table with 18 points. A win in a match fetches 2 points and loses 0 point. In the final points table the team(s) which score(s) the lowest point is eliminated from the league. Based on the data above which team would surely be eliminated?",
        "options": [
            "Karnataka",
            "Gujarat",
            "Punjab",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "From the given conditions we can form the table as follows: Karnataka Punjab Jharkhand Gujrat Initial Points Minimum points Maximum points Karnataka X 1 2 1 19 19 27 Punjab 1 X 2 1 29 29 37 Jharkhand 2 2 X 2 32 32 44 Gujrat 1 1 2 X 18 18 26 Games and Tournament From the table we can conclude that Karnataka and Punjab have 1 match to play against each other. It is also given that A win can fetch 2 points, and a loss, 0 point. The maximum points that Gujrat (with lowest point) = 18 + 5 × 2 = 28 and he may not be eliminated, Similarly there are certain conditions exist where every team has a chance to survive.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_24",
        "text": "The football league of a certain country is played according to the following rules: Each team plays exactly one game against each of the other teams. The winning team of each game is awarded I point and the losing team gets 0 point. If a match ends in a draw, both the teams get ½ point. After the league was over, the teams were ranked according to the points that they earned at the end of the tournament. Analysis of the points table revealed the following: Exactly half of the points earned by each team were earned in games against the ten teams which finished at the bottom of the table. Each of the bottom ten teams earned half of their total points against the other nine teams in the bottom ten. How many teams participated in the league? Games and Tournament",
        "options": [
            "16",
            "18",
            "19",
            "25",
            "30"
        ],
        "answer": "25",
        "solution": "Let total number of teams participated in tournament is n + 10 There are 10 teams in the bottom group then n teams in the top group. It is given that the bottom group gets 45 points since we have 1 point per match therefore 45 matches playing amongst themselves. Therefore they should get 45 points from their matches against the top group i.e., 45 out of the 10n points. The top group get nC2 points from the matches among themselves. They also get 10n - 45 points against the bottom group, which is half their total points. Hence nC2 = 10n - 45 or n(n + 1) = 20n - 90 or n2 - 21n + 90 = 0 hence n = 6 or 15 If n = 6, the top group would get nC2 + 10n - 45 = nC2 + 10(6) - 45 = 30 points, or an average of 5 points per team, while the bottom group would get (45 + 45)/10 or an average of 9. This is not possible. Hence n = 15. Then total number of teams is 10 + 15 = 25.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_25",
        "text": "<b>Direction (Qs. 3-4): There are five teams- Paraguay, Qatar, Russia, Spain and Turkey playing in a tournament where each team plays against every other team only once. These are the following possibilities: each match can result in a draw where each team scores two points; or a team can win where it scores three points, while the losing team scores one point</b><br><br>If Paraguay has won all the matches and Turkey has lost all the matches and all the remaining three teams score equal points, how many points have each of the three remaining teams scored?",
        "options": [
            "5",
            "7",
            "8",
            "None of these"
        ],
        "answer": "8",
        "solution": "Each match has 4 points and each team plays 4 matches. Hence total number of points is 40 Paraguay wins all matches. So it scores 3 × 4 = 12 points. Turkey loses all matches. So it scores 1 × 4 = 4 points. 16 points are scored by Turkey and Paraguay The other teams score 40 - 16 = 24 points As all other teams score equal points, each team scores 24/3 = 8 points.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_26",
        "text": "<b>Direction (Qs. 3-4): There are five teams- Paraguay, Qatar, Russia, Spain and Turkey playing in a tournament where each team plays against every other team only once. These are the following possibilities: each match can result in a draw where each team scores two points; or a team can win where it scores three points, while the losing team scores one point</b><br><br>If all the five teams have an equal score, what is the number of points scored by each team?",
        "options": [
            "5",
            "6",
            "7",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "The total score is 40 points. If each team scores equally, each team scores 40/5 = 8 points Solution for (5 to 9) First Stage: There is two groups of 8 teams each. In each group, each team plays with every other team and hence total number of matches are 8c2 = 8 × 7/2 = 28 matches 275 So, in both the groups the total number of matches played at the first stage are 28. And hence 56 matches are played in 1st stage Second Stage: In this stage there are 8 teams playing in such a way that in one round 4 teams play with 4 other teams. 4 teams win and go to the next round. That is called knock out tournament. In the 1st round no of matches 8/2 = 4, in the 2nd round no of matches = 4/2 = 2, in the third or the last round number of match = 2/2 = 1, so total no of matches in 2nd stage is 4 + 2 + 1 = 7 Hence total match in the tournament = 56 + 7 = 63.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_27",
        "text": "<b>Direction (Qs. 5-9): Sixteen teams have been invited to participate in the ABC Gold Cup cricket tournament. The tournament is conducted in two stages. In the first stage, the teams are divided into two groups. Each group consists of eight teams, with each team playing every other team in its group exactly once. At the end of the first stage, the top four teams from each group advance to the second stage while the rest are eliminated. The second stage comprises of several rounds. A round involves one match for each team. The winner of a match in a round advances to the next round, while the loser is eliminated. The team that remains undefeated in the second stage is declared the winner and claims the Gold Cup.</b><br><br>The tournament rules are such that each match results in a winner and a loser with no possibility of a tie. In the first 267 stage a team earns one point for each win and no points for a loss. At the end of the first stage teams in each group are ranked on the basis of total points to determine the qualifiers advancing to the next stage. Ties are resolved by a series of complex tie-breaking rules so that exactly four teams from each group advance to the next stage. What is the total number of matches played in the tournament?",
        "options": [
            "28",
            "55",
            "63",
            "35"
        ],
        "answer": "35",
        "solution": "From the given information we can complete the following table it is clear that if a team wins 5 games, then also there is no guarantee of its advancement to the next stage, since only 4 teams can go to the next stage. Team 1 2 3 4 5 1 × W L L W 2 L × × W L 3 W L × W L 4 W W L x × 5 L W W L W 6 W W W W W 7 W W W W W 8 W W W W W Note: In the table W  Wins, L  Loose, ×  No match (as example there can not be match between 1& and 1, 2 and 2 and so on) The above is one of such combination. Since after winning 5 matches too, there is no guarantee to advancement, so the answer must be 6, because no two teams can get 7 points each.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_28",
        "text": "<b>Direction (Qs. 5-9): Sixteen teams have been invited to participate in the ABC Gold Cup cricket tournament. The tournament is conducted in two stages. In the first stage, the teams are divided into two groups. Each group consists of eight teams, with each team playing every other team in its group exactly once. At the end of the first stage, the top four teams from each group advance to the second stage while the rest are eliminated. The second stage comprises of several rounds. A round involves one match for each team. The winner of a match in a round advances to the next round, while the loser is eliminated. The team that remains undefeated in the second stage is declared the winner and claims the Gold Cup.</b><br><br>The minimum number of wins needed for a team in the first stage to guarantee is advancement to the next stage is:",
        "options": [
            "5",
            "6",
            "7",
            "4"
        ],
        "answer": "5",
        "solution": "The team which gets 1 point at 1st stage would be eliminated because the combination may be 6 points for the team and 2 times each for remaining. There are some more cases that supports the idea.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_29",
        "text": "<b>Direction (Qs. 5-9): Sixteen teams have been invited to participate in the ABC Gold Cup cricket tournament. The tournament is conducted in two stages. In the first stage, the teams are divided into two groups. Each group consists of eight teams, with each team playing every other team in its group exactly once. At the end of the first stage, the top four teams from each group advance to the second stage while the rest are eliminated. The second stage comprises of several rounds. A round involves one match for each team. The winner of a match in a round advances to the next round, while the loser is eliminated. The team that remains undefeated in the second stage is declared the winner and claims the Gold Cup.</b><br><br>What is the highest number of wins for a team in the first stage in spite of which it would be eliminated at the end of first stage?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "3",
        "solution": "Since there are 8 teams and we know that 8 = 23 hence there are 3 rounds in 2nd stage.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_medium_30",
        "text": "<b>Direction (Qs. 5-9): Sixteen teams have been invited to participate in the ABC Gold Cup cricket tournament. The tournament is conducted in two stages. In the first stage, the teams are divided into two groups. Each group consists of eight teams, with each team playing every other team in its group exactly once. At the end of the first stage, the top four teams from each group advance to the second stage while the rest are eliminated. The second stage comprises of several rounds. A round involves one match for each team. The winner of a match in a round advances to the next round, while the loser is eliminated. The team that remains undefeated in the second stage is declared the winner and claims the Gold Cup.</b><br><br>What is the number of rounds in the second stage of the tournament?",
        "options": [
            "1(b 2",
            "3",
            "4"
        ],
        "answer": "3",
        "solution": "From the discussion above we can say that. It is possible that the winner will have the same number of wins in the entire tournament as a team eliminated 276Games and Tournament at the end of the first stage.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "medium",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_17",
        "text": "<b>Directions (Qs. 5 -8) on the basis of the information given below:</b><br><br>32. Anna-lenaGroenefeld Games and Tournament If there are no upsets (a lower seeded player beating a higher seeded player) in the first round, and only match Nos. 6, 7 and 8 of the second round result in upsets, then who would meet Lindsay Davenport in quarter finals, in case Deven port reaches quarter finals?",
        "options": [
            "Justine Henin",
            "Nadia Petrova",
            "Patty Schnyder",
            "Venus Williams"
        ],
        "answer": "Venus Williams",
        "solution": "277 278Games and Tournament.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_18",
        "text": "<b>Directions (Qs. 5 -8) on the basis of the information given below:</b><br><br>If Elena Dementieva and Serena William lose in the second round, while Justine Henin and Nadia Petrova make it to the semi-finals, then who would play Maria Sharapova in the quarterfinals, in the event Sharapova reaches quarterfinals?",
        "options": [
            "DinaraSafina",
            "JustineHenin",
            "Nadia Petrova",
            "Patty Schnyder"
        ],
        "answer": "Patty Schnyder",
        "solution": "1st let us understand the concept of the tournament. Round 1 Round 2 Round 3 (QF) Round 4 (SF) Match Seed Sum Match Seed Sum Match Seed Sum Match Seed Sum 1 1 + 32 33 1 1 + 16 17 1 1 + 8 9 1 1 + 4 5 2 2 + 31 33 2 2 + 15 17 2 2 + 7 9 2 2 + 3 5 3 3 + 30 33 3 3 + 14 17 3 3 + 6 9 4 4 + 5 9 15 15 + 18 33 7 7 + 10 17 16 16 + 17 33 8 8 + 9 17 Try to understand the table, in the 1st round the sum of seed is always 33, the same for round 2 is 17 and so on considering there is no upset. Lindsay Davenport (Seed 2) was scheduled to to meet seed 7, i.e., Justine Henin in the quarter finals. But in the second round since match 7 - involving seed 7 (Justine Henin) and seed 10 (Venus Williams) - resulted in an upset and Venus Williams won the game, hence Davenport will meet Venus Williams in the quarter finals.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_19",
        "text": "<b>Directions (Qs. 5 -8) on the basis of the information given below:</b><br><br>If, in the first round, all even numbered matches (and none of the odd numbered ones) result in upsets, and there are no upsets in the second round, then who could be the lowest seeded player facing Maria Sharapova in semi-finals?",
        "options": [
            "Anastasia Myskina",
            "Flavia Pennetta",
            "Nadia Petrova",
            "Svetlana Kuznetsova"
        ],
        "answer": "Nadia Petrova",
        "solution": "Maria Sharapova, seed 1, would meet the winner of the match between seed 8 and seed 9, but it is given that Serena Williams, seed 8 lost against seed 9 Nadia Petrovain the second round. Hence Nadia Petrova (seed 9).",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_20",
        "text": "<b>Directions (Qs. 5 -8) on the basis of the information given below:</b><br><br>If the top eight seeds make it to the quarterfinals, then who, amongst the players listed below, would definitely not play against Maria Sharapova in the final, in case Sharapova reaches the final?",
        "options": [
            "Amelie Mauresmo",
            "Elena Dementieva",
            "Kim Clijsters",
            "Lindsay Davenport"
        ],
        "answer": "Amelie Mauresmo",
        "solution": "All odd numbered seeds up to 15 reach the 2nd round while instead of seeds 2 to 16 the players who reach the second round are seeds 31, 29, 27, 25, 23, 21, 19 and 17. The second round matches are between seeds 1-17, 31-15, 3-19, 29-13, 5-21, 27-11, 7-23 and 25-9. Since there are no upsets in that round the winners are seeds 1, 15, 3, 13, 5, 11, 7 and 9. The quarter final line up would be 1-9, 15-7, 3-11 and 13-5. If seed 13 wins her match in the quarters she will next meet seed 1, i.e. Marie Sharapova in semifinals.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_21",
        "text": "<b>Directions (Qs. 9-12): Answer the following questions based on the information given below:</b><br><br>Ina sports event, six teams (A, B, C, D, E and F) are competing against each other. Matches are scheduled in two stages. Each team plays three matches in Stage I and two matches in Stage II No team plays against the same team more than once in the event. Notice are permitted in any of the matches. The observations after the completion of Stage I and Stage II are as given below. Stage 1: One team won all the three matches. Two teams lost all the matches. D lost to A but won against C and F. E lost to B but won against C and F. B lost at least one match. F did not play against the top team of Stage I. Stage II: The leader of Stage I lost the next two matches. Of the two team sat the bottom after Stage I, one team won both matches, while the other lost both matches. One more team lost both matches in Stage II. 269 The team(s) with the most win sin the event is (are):",
        "options": [
            "A",
            "A and C",
            "F",
            "E",
            "B and E"
        ],
        "answer": "F",
        "solution": "If the top eight seeds make it to quarterfinals, then from the table we can find thatSharapova being top seed will meet seed 8 in the quarterfinals, and in the semifinals she will meet the winner of the match between seeds 4 and 5. So she will not meet seeds 4, 5 or 8 in the finals. We can sum up the given information as below: (ii) No team plays against the same team more than once (iv) No ties permitted. As per the information given for stage I, we can conclude and draw the table that As B lost at least one match, hence A won all the 3 matches. The two teams who lost all the matches cannot be A (as it won all 3 matches), cannot be B (since it is given that E lost to B), cannot be D (since D won against C & F). Hence, the two teams must be C and F. F did not play against the top team (i.e. A). We can tabulate all the information as A B C D E F A X W W W B L X W W C L X L L D L W X W E L W X W F L L L X In the above table a blank space means there was no match in this stage (i.e there was no match between A and E in this stage), Result of a match for a team is shown in its row, A lost both its matches against E and F. F won against A, hence is the bottom team (out of C and F) which won both the matches F won against C as well. This also means that C lost both its matches against B and F. Apart from A and C, one more team lost both the matches in Stage-II. That team can neither be E (since A lost to E), nor B (since C lost to B), nor F (as F won both its matches). Hence, the team must be D. Games and Tournament Now we can complete the table for Stage-II.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_22",
        "text": "<b>Directions (Qs. 9-12): Answer the following questions based on the information given below:</b><br><br>The two teams that defeated the leader of Stage I are:",
        "options": [
            "F and D",
            "E and F"
        ],
        "answer": "F and D",
        "solution": "In stage 2 total points are 56. 279 A B C D E F A X L L B X W W C L X L D L X L E W W X F W W X Hence we can answer the questions now-.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_23",
        "text": "<b>Directions (Qs. 9-12): Answer the following questions based on the information given below:</b><br><br>B and D (d) E and D (e) F and D The only team(s) that won both the matches in Stage II is (are):",
        "options": [
            "B",
            "E and F",
            "A, E and F",
            "B, E and F",
            "B and F"
        ],
        "answer": "B and F",
        "solution": "The correct answer is 'B and F'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_24",
        "text": "<b>Directions (Qs. 9-12): Answer the following questions based on the information given below:</b><br><br>The teams that won exactly two matches in the event are:",
        "options": [
            "A, D and F",
            "D and E",
            "E and F",
            "D, E and F",
            "D and F"
        ],
        "answer": "D and E",
        "solution": "The correct answer is 'D and E'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_25",
        "text": "<b>Direction (Qs. 13-17): Kolkata Premier League has 16 players seeded from 1 to 16. These players are divided in 4 groups namely South Kolkata, North Kolkata, Central Kolkata and Saltlake. 16 players are divided in these groups as follows-</b><br><br>South Kolkata: 1, 8, 9, 16 North Kolkata: 2, 7, 10, 15 Central Kolkata: 3, 6, 11, 14 Saltlake: 4, 5, 12,13 In stage I, each player in a group plays with all the other members in their group exactly once. Two 2 from each group is selected for stage 2 based on their number of points. A player qualifying for stage II carries forward only those points that he gained stage I against the another player who qualifies for stage 2. In stage II, total 8 players (2 from each group) advanced to stage II, where each player plays every other player except the player from same group. At the end of stage II, the top 4 players on the basis of points would qualify for the 3rd stage The Semi-Final stage. Stage III: (Semi-Final), winners of the Semi-Final advanced to the final round and losers play for 3rd place. The following more rules of tournament is as follows: Points in stage I and stage II are awarded as follows: winner 2 points, looser 0 points. An 'upset' is caused when, in any match a lower seeded player beats a higher seeded player. There is no ties at any stage. 270Games and Tournament If points of the two players at the end of any stage are same then there is a complex rule to calculate the tie breaker. Seed 1 is the highest seed and seed 16 is the lowest rank seed. If Ricky Singh a lucky player from South Kolkata reached semi final stage after getting the minimum possible points, then what is the point scored by Mr. Ricky Singh.",
        "options": [
            "4",
            "5",
            "7",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "The correct answer is 'None of these'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_26",
        "text": "<b>Direction (Qs. 13-17): Kolkata Premier League has 16 players seeded from 1 to 16. These players are divided in 4 groups namely South Kolkata, North Kolkata, Central Kolkata and Saltlake. 16 players are divided in these groups as follows-</b><br><br>If Ricky Singh a lucky player from South Kolkata aspire to play semi final stage what is the minimum points he should aim to guarantee a seat in semifinal?",
        "options": [
            "10",
            "6",
            "12",
            "None of these"
        ],
        "answer": "10",
        "solution": "Solutions for 13-17 : In stage I, in a group in total 6 matches and that will have 12 points in total. Total number of matches in this stage is 4 × 6 = 24 In stage II, total 8 players and they play each other except a player who comes from same group but point of their match in stage I is carried forward hence in stage II total points is 28 × 2 = 56. Number of matches in stage II is 7 × 8/2 - 4 = 24.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_27",
        "text": "<b>Direction (Qs. 13-17): Kolkata Premier League has 16 players seeded from 1 to 16. These players are divided in 4 groups namely South Kolkata, North Kolkata, Central Kolkata and Saltlake. 16 players are divided in these groups as follows-</b><br><br>Find the ratio of number of matches at Stage I and Stage II",
        "options": [
            "4:7",
            "3:4",
            "4:5",
            "None of these"
        ],
        "answer": "4:7",
        "solution": "In this case we have to minimize the points scored by 4th ranker (Who advanced to Semi Final). In order to minimize the points scored by Ricky Singh top three players should get maximum points, Let points achieved by top three player at the end of stage II is 14, 12 and 10 summing up to 14 + 12 + 10 = 36 and remaining points 56-36 = 20 got distributed to bottom 5 players. To minimize the points scored by Ricky Singh, all of the bottom five got same point (20/5 = 4 points) and with complex tie breaker Ricky is advanced to Semifinal. From the given information we can draw following table. Consider bottom 3 players, they must play three matches among themselves and hence they have minimum 6 points with them, Remaining points 56-6 = 50 if equally divided between top 5 then one would get 10 points, so to guarantee a seat in semifinal Ricky Singh has to score 12 points.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_28",
        "text": "<b>Direction (Qs. 13-17): Kolkata Premier League has 16 players seeded from 1 to 16. These players are divided in 4 groups namely South Kolkata, North Kolkata, Central Kolkata and Saltlake. 16 players are divided in these groups as follows-</b><br><br>What is the total number of points (From all the stages including final) in the tournament?",
        "options": [
            "52",
            "88",
            "104",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Total number of matches are as follows: Stage I: 24 Stage II: 24 And required ratio is 1:1.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_29",
        "text": "<b>Direction (Qs. 13-17): Kolkata Premier League has 16 players seeded from 1 to 16. These players are divided in 4 groups namely South Kolkata, North Kolkata, Central Kolkata and Saltlake. 16 players are divided in these groups as follows-</b><br><br>If there is no upset in stage 1 then the lowest seeded player who can win the tournament is-",
        "options": [
            "11",
            "12",
            "15",
            "None of these"
        ],
        "answer": "15",
        "solution": "Total number of matches are as follows-Stage I: 24 Stage II: 24 Semifinal: 2 For 3rd place (Looser of semi final): 1 Final: 1 Total number of matches is 52 and hence total number of points is 52 × 2 = 104.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_30",
        "text": "<b>Directions (Qs. 18-22): In sports week at MERI Kolkata 8 students participated in table tennis tournament. The following additional information is known.</b><br><br>The tournament was conducted on Round Robin Basis ( i.e each player plays with every other player exactly once) At the end of a match winner awarded 1 point while looser 0 point. There is no tie in the tournament. At the end of the tournament it was found that no two player has same points. 8 players are seeded from 1 to 8 on the basis of previous year tournament. Chandra got 2 points and Eshan got either 5 or 6 or 7 Amit won over Dripto Bhanu lost to Dripto but won over Firoz Chandra lost to Eshan but won over Hemant Eshan lost to Gandhi Firoz lost to Hemant Who won maximum number of matches?",
        "options": [
            "Amit",
            "Gandhi",
            "Dripto",
            "None of these"
        ],
        "answer": "Gandhi",
        "solution": "In stage 1 a player has to win minimum 1 match to advance to the next stage. Now consider the different groups, South Kolkata: 1, 8, 9, 16 [seed 9 can advance after beating seed 16 without an upset] North Kolkata: 2, 7, 10, 15 [seed 10 can advance after beating seed 15 without an upset] Central Kolkata: 3, 6, 11, 14 [seed 11 can advance after beating seed 14 without an upset] Saltlake: 4, 5, 12,13 [seed 12 can advance after beating seed 113 without an upset] So seed 12 is the lowest seed who can advance to stage II without causing Upset in stage I, and can win the tournament [Please note here that in stage II or semifinal there may be an Upset Amit Bhanu Chandra Dripto Eshan Firoz Gandhi Hemant Amit X W 7 Bhanu X L W Chandra X L W 2 Dripto L W X Eshan W X L Firoz L X L 0 Gandhi W X Hemant L W X 280Games and Tournament Since each player got different points hence points that they got must be 7, 6, 5, 4, 3, 2, 1, and 0. That means 1 student won all the matches while 1 student lost all the matches, the student who won all the matches must be Amit as rest all lost at least 1 match, while Firoz lost all the matches, Since Eshan got either 5, 6 or 7 points but he already lost against Amit and Gandhi so he won 5 points. Similarly Gandhi got 6 points Amit Bhanu Chandra Dripto Eshan Firoz Gandhi Hemant Amit X W W W W W W W 7 Bhanu L X W L L W L W 3 Chandra L L X L L W L W 2 Dripto L W W X L W L W 4 Eshan L W W W X W L W 5 Firoz L L L L l X l L 0 Gandhi L W W W W W X W 6 Hemant L L L L L W L X 1.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_31",
        "text": "<b>Directions (Qs. 18-22): In sports week at MERI Kolkata 8 students participated in table tennis tournament. The following additional information is known.</b><br><br>Who won least number of matches?",
        "options": [
            "Chandra",
            "Hemant",
            "Firoz",
            "None of these"
        ],
        "answer": "Chandra",
        "solution": "Amit own maximum number of matches.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_32",
        "text": "<b>Directions (Qs. 18-22): In sports week at MERI Kolkata 8 students participated in table tennis tournament. The following additional information is known.</b><br><br>Eshan lost to which all players? Chandra and Gandhi Hemant and Amit Amit and Gandhi(d) None of these How many players got more than Dripto?",
        "options": [
            "2",
            "3",
            "4",
            "None of these"
        ],
        "answer": "4",
        "solution": "Firozown least number of matches.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_33",
        "text": "<b>Direction (Qs. 23-27.): At Praxis Business School, 8 students participated in a carom tournament which is held during annual sports meet. The following additional information is known to us:</b><br><br>The tournament is in 3 stages The 1st stage of the tournament is double round robin stage, i.e every player plays exactly 2 matches against each other. In 1st stage winner gets 3 points while looser gets 0 points, in case of tie both the player gets 1 point. At the end of stage 1 if two players has same points then there is complex rule to break tie. At the end of stage 1, top 4 players advanced to stage 2 which is semifinal. The winner of semifinal advanced to 3rd stage i.e final There is no tie in semifinal or final round. If a player Rajesh could not advanced to semifinal round then what is the maximum points scored by him?",
        "options": [
            "29",
            "30",
            "31",
            "None of these"
        ],
        "answer": "31",
        "solution": "The correct answer is '31'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_34",
        "text": "<b>Direction (Qs. 23-27.): At Praxis Business School, 8 students participated in a carom tournament which is held during annual sports meet. The following additional information is known to us:</b><br><br>If a player Rajesh could not advanced to semifinal round even after scoring a minimum possible points then what is the minimum points scored by him?",
        "options": [
            "9",
            "15",
            "8",
            "None of these"
        ],
        "answer": "15",
        "solution": "The correct answer is '15'. Following the core principles of puzzles, analyzing the constraints and evaluating each given option confirms this as the uniquely valid solution.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_35",
        "text": "<b>Direction (Qs. 23-27.): At Praxis Business School, 8 students participated in a carom tournament which is held during annual sports meet. The following additional information is known to us:</b><br><br>If at the end of stage 1 each player has distinct number of points then what is the minimum point scored by the highest scorer?",
        "options": [
            "19",
            "15",
            "8",
            "None of these"
        ],
        "answer": "15",
        "solution": "Total number of matches in stage 1 is 2(7 × 8/2) = 56.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_36",
        "text": "<b>Direction (Qs. 23-27.): At Praxis Business School, 8 students participated in a carom tournament which is held during annual sports meet. The following additional information is known to us:</b><br><br>If at the end of stage 1 each player has distinct number of points then what is the maximum point scored by the lowest scorer?",
        "options": [
            "19",
            "15",
            "8",
            "None of these"
        ],
        "answer": "15",
        "solution": "If a player eliminated in 1st stage even after scoring maximum possible point then it is possible when top 5 has same point and Rajesh got eliminated with tie breaker rule. In this case bottom three got points because of matches between them. Out of 56 matches there are 6 matches played among bottom three hence total points in remaining 56 - 6 = 50 matches is 50 × 3 = 150 that is equally divided among top 5 players equally i.e 30 points each, So Rajesh can not get advanced even after getting 30 points.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_37",
        "text": "<b>Direction (Qs. 23-27.): At Praxis Business School, 8 students participated in a carom tournament which is held during annual sports meet. The following additional information is known to us:</b><br><br>If at the end of stage 1 each player has distinct number of points and number of draws is maximum then what is the ratio of number of decisive matches to indecisive matches?",
        "options": [
            "6:1",
            "1:6",
            "8:3",
            "None of these"
        ],
        "answer": "8:3",
        "solution": "In this case top 3 players should get maximum possible points and remaining 5 should get equal points and Rajesh got advanced with tie breaker rule. Bottom 5 players have in total 4 × 5 = 20 matches and each match will fetch minimum possible points when its result is tie. So minimum point in 20 matches is 20 × 2 = 40 when distributed equally to bottom 5 each of them will get 40/5 = 8 points.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_38",
        "text": "<b>Directions (Qs. 28-32): 8 teams namely A, B, C, D, E, F, G, H participated in a, tournament. In 1st stage or qualifying stage these 8 teams are divided into 2 groups namely P and Q having 4 teams each. In qualifying match each team played 2 matches against each other in its own group. The rules are designed in such a way that there can not be a tie in any match. Top 2 teams from each group advanced to next stage that is semifinal, in each group, teams own a different number of matches i.e there is no tie in calculating rank of 4 teams in any group in 1st stage. In the 1st stage F lost both the matches against G, Number of matches won by A and G is the same and C won only 1 match and that is against D which is a team that lost maximum 1 match against other teams except 1 team. A won 1 match against top scorer of its group.</b><br><br>The teams who played semifinal round is B, F, G and H Which one of the following is correct? B, H, A, E are in the same group B, H, C, E are in the same group F, G, C, A are in the same group F, G, D, A are in the same group Which team won the 2nd highest number of matches in the 1st stage?",
        "options": [
            "B",
            "H",
            "G",
            "Cant be determined"
        ],
        "answer": "B",
        "solution": "Since total number of matches in the stage 1 is 56 and for minimum value let us assume that all the matches end with a tie, so total points is 56 × 2 = 112 and it is distributed equally among 8 players i.e each player would get 112/8 = 14 points. Let minimum number of matches that gave result is k then since each indecisive match give us 2 points but decisive match will give us 3 points hence total k decisive matches will increase the total number of points to 56 + k Here we have assumed that all the matches are draw and now if we change the result of one match then that will increase the total point of winner by 2 and decrease the total point of looser by 1. win and 1 loss will increase total point of a player by 1. win will increase total point of a player by 4 win and 1 loss will increase total points of a player by 3 3 win will increase total point of a player by 6 3 win and 1 loss will increase total points of a player by 5 For minimum points scored by the highest scorer, their points should be as follows- Player 1: 14 + 5 = 19 (3 win and 1 loss) Player 2: 14 + 4 = 18 (2 win) Player 3: 14 + 3 = 17 (2 win and 1 loss) Player 4: 14 + 2 = 16 (1 win) Player 5: 14 (no change) Player 6: 14 - 1 = 13 (1 loss) Player 7:14 - 2 = 12 (2 loss) Player 8: 14 - 3 = 11 (1 loss) So highest point of highest scorer is 19.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_39",
        "text": "<b>Directions (Qs. 28-32): 8 teams namely A, B, C, D, E, F, G, H participated in a, tournament. In 1st stage or qualifying stage these 8 teams are divided into 2 groups namely P and Q having 4 teams each. In qualifying match each team played 2 matches against each other in its own group. The rules are designed in such a way that there can not be a tie in any match. Top 2 teams from each group advanced to next stage that is semifinal, in each group, teams own a different number of matches i.e there is no tie in calculating rank of 4 teams in any group in 1st stage. In the 1st stage F lost both the matches against G, Number of matches won by A and G is the same and C won only 1 match and that is against D which is a team that lost maximum 1 match against other teams except 1 team. A won 1 match against top scorer of its group.</b><br><br>Which team won the least number of matches?",
        "options": [
            "C",
            "D",
            "E",
            "A"
        ],
        "answer": "A",
        "solution": "From solution of previous question maximum points scored by lowest scoreris 11.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_40",
        "text": "<b>Directions (Qs. 28-32): 8 teams namely A, B, C, D, E, F, G, H participated in a, tournament. In 1st stage or qualifying stage these 8 teams are divided into 2 groups namely P and Q having 4 teams each. In qualifying match each team played 2 matches against each other in its own group. The rules are designed in such a way that there can not be a tie in any match. Top 2 teams from each group advanced to next stage that is semifinal, in each group, teams own a different number of matches i.e there is no tie in calculating rank of 4 teams in any group in 1st stage. In the 1st stage F lost both the matches against G, Number of matches won by A and G is the same and C won only 1 match and that is against D which is a team that lost maximum 1 match against other teams except 1 team. A won 1 match against top scorer of its group.</b><br><br>A lost both the matches to which team.",
        "options": [
            "B",
            "H",
            "B and H",
            "None of these"
        ],
        "answer": "H",
        "solution": "From solution of previous question number of decisive matches is 8 then indecisive matches is 56-8 = 48 ands required ratio is 6;1 Games and Tournament Lets sum up the information,.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_41",
        "text": "<b>Direction (Qs. 33-37): 16 players participated in world Chess Championship. These 16 players are seeded from seed 1 to seed 16 with seed 1 as the best rank. These 16 players are divided in two groups such that all the odd numbered seed are in group A and all the even numbered seed are in group B.</b><br><br>In each group each team plays with each other exactly once and no match ended in a tie. For a win winner awarded 2 points while looser 0 points. From each group top two players based on the points scored are advanced to the next stage i.e semifinal stage. In semifinal stage top scorer of one group plays with 2nd best scorer of the other group. Winners of the semi-final play for the final while loosers play for the 3rd place. An Upset is when a lower seeded player beat a higher seeded player. In case of same number of points at the end of the 1st stage there is a complex tie breaker rule which is used to determine the rank. What is the total number of matches in the tournament?",
        "options": [
            "59",
            "60",
            "61",
            "None of these"
        ],
        "answer": "60",
        "solution": "281 The teams who played semifinal round is B, F, G and H Given that F lost both the matches to G i.e F and G is in the same group, then B and H is in the same group. Since number of matches won by A and G is same hence they must belong to two different groups, and C won only I match against D hence they must be in the same group. So we can divide the group now- Group 1: F, G, C, D Group 2: B, H, A, E In one group number of matches is 2(3 × 4/2) = 12 since each team won a different number of matches and total number of matches is 12 so we have following possibilities for number of matches won by 4 teams- Case (i) 6, 4, 2, 0 Case (ii) 6, 3, 2, 1 Case (iii) 5, 4, 2, 1 Case (iv) 5, 4, 3, 0 Since number of matches won by A and G is the same but then also A eliminated so only possibility is case (ii) and (iv) and they won 3 matches. Lets sum up the conclusion till now Group 1: F, G, C, D and their points F = 6, G = 3, C = 1 and D = 2 Group 2: B, H, A, E and their points B and H 5 and 4 in any order and A = 3, E = 0 Now lets draw the table for Group 1 F G C D F X W W W W W W 6 G LL X WW WL 3 C LL LL X WL 1 D LL LW LW X 2 Now lets draw the table for Group 2 B/H H/B A E B/H X WW LW WW 5 H/B LL X WW WW 4 A WL LL X WW 3 E LL LL LL X 0.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_42",
        "text": "<b>Direction (Qs. 33-37): 16 players participated in world Chess Championship. These 16 players are seeded from seed 1 to seed 16 with seed 1 as the best rank. These 16 players are divided in two groups such that all the odd numbered seed are in group A and all the even numbered seed are in group B.</b><br><br>If seed 9 won the tournament then what is the minimum points scored by him in stage 1 given that minimum number of upsets in the tournament?",
        "options": [
            "5",
            "3",
            "6",
            "None of these"
        ],
        "answer": "5",
        "solution": "option (a) is correct.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_43",
        "text": "<b>Direction (Qs. 33-37): 16 players participated in world Chess Championship. These 16 players are seeded from seed 1 to seed 16 with seed 1 as the best rank. These 16 players are divided in two groups such that all the odd numbered seed are in group A and all the even numbered seed are in group B.</b><br><br>If more than 75% of the matches are upset then which highest seed can win the tournament?",
        "options": [
            "4",
            "8",
            "7",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "2nd Highest is either B or H so cant determine.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_44",
        "text": "<b>Direction (Qs. 33-37): 16 players participated in world Chess Championship. These 16 players are seeded from seed 1 to seed 16 with seed 1 as the best rank. These 16 players are divided in two groups such that all the odd numbered seed are in group A and all the even numbered seed are in group B.</b><br><br>If upset caused by a winner is 3 then which lowest seed can win the tournament?",
        "options": [
            "14",
            "13",
            "8",
            "None of these"
        ],
        "answer": "8",
        "solution": "E lost the maximum number of matches.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_45",
        "text": "<b>Direction (Qs. 33-37): 16 players participated in world Chess Championship. These 16 players are seeded from seed 1 to seed 16 with seed 1 as the best rank. These 16 players are divided in two groups such that all the odd numbered seed are in group A and all the even numbered seed are in group B.</b><br><br>Who is the lowest seeded player won the tournament without causing an upset?",
        "options": [
            "10",
            "9",
            "8",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "A lost both the matches to B or H not B and H hence option C is incorrect.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_46",
        "text": "<b>Directions (Qs. 38-42): At MERI Kolkata students stay in different Sadans namely Bose, Diesel, Edison, Faraday, Marconi, and Rankin. Students who stay in these sadans represent their sadan in Foot Ball tournament. 1st stage of the tournament is conducted in 5 days from Monday to Friday such that everyday each team played exactly 1 match. As per the rule 3 points are awarded for a win, 0 for a loss and each team gets 1 point for a tie. On Wednesday evening due to some un avoidable reason tournament is postponed. When Officer In charge sports Mr. A B Halder asked the update of tournament he got the following information.</b><br><br>Maximum number of goals scored by a team in a match is 4 No team lost with a goal difference more than 2 In each match at least 1 goal is scored. Total number of goals made by the teams are Bose (11), Diesel (9), Edison (=5), Faraday (=1), Marconi (=7), and Rankin ( = 4) Total number of goals against the teams are Bose (5), Diesel (9), Edison (=7), Faraday (=4), Rankin ( = 5) Faraday won match while Marconi and Rankin got 4 and 3 points respectively. On Monday Bose played against Diesel On Tuesday Diesel won a match against Edison with a goal difference of 2 On Wednesday Edison won a match in which total number of goals scored is 2. What percentage of total match end up with a result where winner won the match with a goal difference of 2.",
        "options": [
            "66.67%",
            "77.77%",
            "55.55%",
            "None of these"
        ],
        "answer": "77.77%",
        "solution": "Number of matches in stage 1 is 2(7 × 8/2) = 56, at semifinal stage we have 3 matches (2 semifinal and 1 match for 3rd place) and 1 final match, hence total number of matches is 56 + 3 + 1 = 60.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_47",
        "text": "<b>Directions (Qs. 38-42): At MERI Kolkata students stay in different Sadans namely Bose, Diesel, Edison, Faraday, Marconi, and Rankin. Students who stay in these sadans represent their sadan in Foot Ball tournament. 1st stage of the tournament is conducted in 5 days from Monday to Friday such that everyday each team played exactly 1 match. As per the rule 3 points are awarded for a win, 0 for a loss and each team gets 1 point for a tie. On Wednesday evening due to some un avoidable reason tournament is postponed. When Officer In charge sports Mr. A B Halder asked the update of tournament he got the following information.</b><br><br>What is the total number of points given to these teams in these 3 days?",
        "options": [
            "28",
            "27",
            "26",
            "None of these"
        ],
        "answer": "28",
        "solution": "Seed 9 will play with seed, 1, 3, 5, 7, 11, 13, and 15 without an upset seed 9 can win with seed 11, 13, and 15, for minimum number of upset let seed 1 won all the matches and seed 9 won against seed 3 and 5, in that case number of wins of seed 3 and 9 is 5 but with tie breaker rule seed 9 will advance to the next stage.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_48",
        "text": "<b>Directions (Qs. 38-42): At MERI Kolkata students stay in different Sadans namely Bose, Diesel, Edison, Faraday, Marconi, and Rankin. Students who stay in these sadans represent their sadan in Foot Ball tournament. 1st stage of the tournament is conducted in 5 days from Monday to Friday such that everyday each team played exactly 1 match. As per the rule 3 points are awarded for a win, 0 for a loss and each team gets 1 point for a tie. On Wednesday evening due to some un avoidable reason tournament is postponed. When Officer In charge sports Mr. A B Halder asked the update of tournament he got the following information.</b><br><br>Diesel team won against which team?",
        "options": [
            "Edison",
            "Marconi",
            "Faraday",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Total number of matches is 60 and out of those more than 45 matches are upset. But seed 1 need only 9 matches to win the tournament hence seed 1 may win the tournament.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_49",
        "text": "<b>Directions (Qs. 38-42): At MERI Kolkata students stay in different Sadans namely Bose, Diesel, Edison, Faraday, Marconi, and Rankin. Students who stay in these sadans represent their sadan in Foot Ball tournament. 1st stage of the tournament is conducted in 5 days from Monday to Friday such that everyday each team played exactly 1 match. As per the rule 3 points are awarded for a win, 0 for a loss and each team gets 1 point for a tie. On Wednesday evening due to some un avoidable reason tournament is postponed. When Officer In charge sports Mr. A B Halder asked the update of tournament he got the following information.</b><br><br>How many teams got more than 10% of total points but less than 20%?",
        "options": [
            "2",
            "3",
            "4",
            "None of these"
        ],
        "answer": "3",
        "solution": "Total number of matches in the 1st stage is 4 × 7 = 28, lets consider group 1 here if seed 1 won all the matches then remaining 21 matches or points can be equally distributed to 7 player (3 points each) and the lowest possible player would advance to next stage with tie breaker rule. In this stage seed 13 can get 3 points after 2 upsets caused by him. So from this group seed 1 and 13 would advance to the next stage. Similarly from 2nd group seed 2 and 14 would advance to the next stage. Now as per the rule seed 1 will play with seed 14 and seed 2 will play with seed 13, If seed 13 and 4 meet in the tournament then seed 13 will win with 3 upset.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_50",
        "text": "<b>Directions (Qs. 38-42): At MERI Kolkata students stay in different Sadans namely Bose, Diesel, Edison, Faraday, Marconi, and Rankin. Students who stay in these sadans represent their sadan in Foot Ball tournament. 1st stage of the tournament is conducted in 5 days from Monday to Friday such that everyday each team played exactly 1 match. As per the rule 3 points are awarded for a win, 0 for a loss and each team gets 1 point for a tie. On Wednesday evening due to some un avoidable reason tournament is postponed. When Officer In charge sports Mr. A B Halder asked the update of tournament he got the following information.</b><br><br>If result of all the matches are interchanged i.e goals for will become goals conceded and vice versa then how many teams will have same number of goals scored as before?",
        "options": [
            "1",
            "2",
            "3",
            "None of these"
        ],
        "answer": "1",
        "solution": "Here only problem is stage 1, so a player has to qualify for semifinal without any upset. In previous question we have seen that with 3 points/win a team can advanced to next stage. Consider group 1: Here players are seeded 1, 3, 5, 15. The player who can win 3 matches without an upset is seed 9. Consider group 2: same as previous case seed 10 can advanced to next stage without causing an upset. So seed 10 is the answer. Consider 1 such case semifinal round Group 1: seed 13 and 15 Group 2: seed 2 and 10 Final match: seed 10 and 15 282Games and Tournament Since total number of goals scored and goals against is same hence we can find goals against Marconi which is (11 + 9 + 5 + 1 + 7 + 4) - (5 + 9 + 7 + 4 + 5) = 37 - 30 = 7. Since Bose sadan scored 11 goals while goals against is 5 it is possible when all the matches are won with (3-1) (4-2) and (4-2) Since Marconi got 4 points which is possible with 1 win (3 points) 1 draw (1 point) and 1 loss (0 point) Similarly Rankin got 3 points and also Goals for is 4 and against is 5 so all three matches can not end with draw (It is when goals for is equal to goals against) so 3 points is possible with 1 win and 2 loss. Faraday scored only 1 goal, goal against is 4 and won 1 match it is possible only when he won by (1-0) and lost two matches with (0-2) each[ as with the combination (0-1) and (0-3) is not possible since (0-3) goal difference is 3] Since Edison won on Wednesday with (2-0) and total goals for is 5 while against is 7, so in other two game it lost with (2-4) and (1-3) Draw is casued only with Diesel and Marconi hence they must have played with each other and the match was tie. On Monday Diesel played with Bose, on Tuesday Diesel played with Edison while on Wednesday Diesel played with Marconi. On Wednesday Bose must have played with Marconi Faraday played against Edison on Wednesday and lost with (0-2) Marconi played against Faraday on Monday while against Bose on Tuesday. Since Rankin scored 4 goals and conceded 5 goals result of Bose and Rankin (3-1) similarly result of Rankin and Edison (3 - 1) Now we can conclude that Bose sadan won against Diesel and Marconi with (4-2) and (4-2) Diesel won against Edison with (4-2) So matches on Monday:, So final result Monday Bose and Diesel (4-2) Marconi and Faraday (2-0) Edison and Rankin (1-3) Tuesday Bose and Marconi (4-2) Diesel and Edison (4-2) Faraday and Rankin (1-0) Wednesday Bose and Rankin (3-1) Diesel and Marconi (3-3) Edison and Faraday (2-0) Number of points are as follows: Bose (3 + 3 + 3 = 9), Diesel (0 + 3 + 1 = 4), Edison (0 + 0 + 3 = 3), Faraday (0 + 3 + 0 = 3), Marconi (3 + 0 + 1 = 4), and Rankin (3 + 0 + 0 = 3).",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 3,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_51",
        "text": "<b>Directions (Qs. 43-47): Seven players Ahaskar, Bhanu, Chandan, Dripto, Eshan, Faisal and Gaurav participate in a Carrom tournament in which each player plays exactly once against each of the other six players. The tournament was held on three stages such that an equal number of matches is played on all the three stages. As per the rules of the tournament winner will get 2 points and looser will get 0 point while none of the matches ends in a draw. Points scored by all the players is distinct.</b><br><br>Further known about the tournament is: Stage 1 Gaurav loses to Bhanu but wins against Ahaskar and Chandan. Dripto wins against Chandan and Eshan. Faisal loses to Ahaskar and Bhanu. Stage 2 Faisal loses to Chandan, Dripto, Eshan and Gaurav. Only one player, wins more than one match in stage 2. Chandan won at most 1 match in this stage Stage 3 Bhanu wins against Chandan, Dripto and Eshan. Eshan loses to Ahaskar and Chandan. Gaurav wins exactly two matches in this stage. Who own highest number of match?",
        "options": [
            "Ahaskar",
            "Bhanu",
            "Chandan",
            "None of these"
        ],
        "answer": "Bhanu",
        "solution": "Total number of matches is 9, out these 9 matches, the matches that end with goal difference of 2 is Monday: all the three matches, Tuesday 2 matches and Wednesday 2 matches so required percentage is 7 × 100/9 = 77.77%.",
        "formula": "Cube Cutting Formula: Total small cubes = n³. 3-faces painted = 8 (corners). 2-faces = 12(n-2). 1-face = 6(n-2)². 0-faces = (n-2)³.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 4,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_52",
        "text": "<b>Directions (Qs. 43-47): Seven players Ahaskar, Bhanu, Chandan, Dripto, Eshan, Faisal and Gaurav participate in a Carrom tournament in which each player plays exactly once against each of the other six players. The tournament was held on three stages such that an equal number of matches is played on all the three stages. As per the rules of the tournament winner will get 2 points and looser will get 0 point while none of the matches ends in a draw. Points scored by all the players is distinct.</b><br><br>Result of minimum how many matches has to change in order to make Faisal a highest scorer keeping all the rules of the tournament valid?",
        "options": [
            "6",
            "4",
            "3",
            "None of these"
        ],
        "answer": "3",
        "solution": "Out of 9 matches only 1 match end up with tie so total number of points is 8 × 3 + 2 = 26.",
        "formula": "Calendar Odd Days: Normal year = 1 odd day. Leap year = 2 odd days. 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0.",
        "shortcut": "For input-output machines, look at the final output step first to identify whether words are sorted alphabetically and numbers ascending/descending.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 5,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_53",
        "text": "<b>Directions (Qs. 43-47): Seven players Ahaskar, Bhanu, Chandan, Dripto, Eshan, Faisal and Gaurav participate in a Carrom tournament in which each player plays exactly once against each of the other six players. The tournament was held on three stages such that an equal number of matches is played on all the three stages. As per the rules of the tournament winner will get 2 points and looser will get 0 point while none of the matches ends in a draw. Points scored by all the players is distinct.</b><br><br>Dripto lost how many matches",
        "options": [
            "2",
            "4",
            "3",
            "None of these"
        ],
        "answer": "2",
        "solution": "From the table Diesel team won against Edison.",
        "formula": "Grid Matching Constraint: Ensure 1-to-1 bijection across variables (Person, Color, City, Profession).",
        "shortcut": "Draw a grid table with tick (✓) for definite matches and cross (✗) for exclusions.",
        "commonMistakes": "Making unsubstantiated assumptions not stated in the clues.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 6,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_54",
        "text": "<b>Directions (Qs. 43-47): Seven players Ahaskar, Bhanu, Chandan, Dripto, Eshan, Faisal and Gaurav participate in a Carrom tournament in which each player plays exactly once against each of the other six players. The tournament was held on three stages such that an equal number of matches is played on all the three stages. As per the rules of the tournament winner will get 2 points and looser will get 0 point while none of the matches ends in a draw. Points scored by all the players is distinct.</b><br><br>If result of stage 2 is interchanged i.e winner becomes looser and vice versa then who won the maximum points in the tournament?",
        "options": [
            "Ahaskar",
            "Bhanu",
            "Chandan",
            "None of these"
        ],
        "answer": "None of these",
        "solution": "Since total number of points is 26 so number of points more than 2.6 but less than 5.2 is (i.e points 3. 4, 5) 5.",
        "formula": "Inequality Chaining: A > B, B ≥ C, C > D ⇒ A > D.",
        "shortcut": "For floor puzzles, anchor fixed parity constraints (e.g., 'A lives on an even-numbered floor below floor 4') first.",
        "commonMistakes": "Miscounting small cubes on interior vs exterior faces of painted blocks.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 1,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    },
    {
        "id": "reasoning_puzzles_hard_55",
        "text": "<b>Directions (Qs. 43-47): Seven players Ahaskar, Bhanu, Chandan, Dripto, Eshan, Faisal and Gaurav participate in a Carrom tournament in which each player plays exactly once against each of the other six players. The tournament was held on three stages such that an equal number of matches is played on all the three stages. As per the rules of the tournament winner will get 2 points and looser will get 0 point while none of the matches ends in a draw. Points scored by all the players is distinct.</b><br><br>If result of stage 2 is interchanged i.e winner becomes looser and vice versa and as a result three players got same points then Dripto got how many points?",
        "options": [
            "2",
            "4",
            "3",
            "None of these"
        ],
        "answer": "4",
        "solution": "The new condition would be: Monday Bose and Diesel (2-4) Marconi and Faraday (0-2) Edison and Rankin (3-1) Tuesday Bose and Marconi (2-4) Diesel and Edison (2-4) Faraday and Rankin (0-1) Wednesday Bose and Rankin (1-3) Diesel and Marconi (3-3) Edison and Faraday (0-2) Initially total number of goals made by the teams are Bose (11), Diesel (9), Edison ( = 5), Faraday ( = 1), Marconi ( = 7), and Rankin ( = 4) Now total number of goals made by the teams are Bose (5), Diesel (9), Edison (7), Faraday (4), Marconi (7), and Rankin (5) So only Diesel and Marconi have the same number of goals. Games and Tournament Total number of matches is 21 when divided in 3 stages we will get 7 matches in one stage. 283 Ahaskar Bhanu Chandan Dripto Eshan Faisal Gaurav Ahaskar XXXXX L2 W2 L2 /W2 W3 W1 L1 3 or 4 Bhanu W2 XXXXX W3 W3 W3 W1 W1 6 Chandan L2 L3 XXXXX L1 W3 W2 L1 2 Dripto W2/L2 L3 W1 XXXXX W1 W2 L3 4 or 3 Eshan L3 L3 L3 L1 XXXXX W2 L3 1 Faisal L1 L1 L2 L2 L2 XXXXX L2 0 Gaurav W1 L1 W1 W3 W3 W2 XXXXX 5.",
        "formula": "Clock Angle Formula: θ = |(30 × H) - (11/2 × M)| degrees.",
        "shortcut": "For clocks angle, use θ = |30H - 5.5M| for instant 10-second calculation.",
        "commonMistakes": "Forgetting that century years must be divisible by 400 to be leap years (e.g., 1900 was not a leap year).",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "puzzles",
        "subject": "reasoning",
        "patternType": 2,
        "tags": [
            "puzzles",
            "hard",
            "verified"
        ]
    }
];
