if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['aptitude_numbers'] = [
    {
        "id": "aptitude_numbers_beginner_1",
        "text": "Find the Highest Common Factor (HCF / GCD) of 20 and 54.",
        "options": [
            "2",
            "74",
            "4",
            "6"
        ],
        "answer": "2",
        "solution": "Prime factorization: 20 = 2^2 × 5, 54 = 2 × 3^3. GCD(20, 54) = 2.",
        "formula": "HCF is the largest integer dividing both numbers.",
        "shortcut": "GCD(20, 54) = 2.",
        "commonMistakes": "Units conversion error or calculation slip.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "gcd",
            "beginner",
            "foundational"
        ]
    },
    {
        "id": "aptitude_numbers_easy_1",
        "text": "Calculate the sum of the first 37 natural numbers (1 + 2 + 3 + ... + 37).",
        "options": [
            "703",
            "1406",
            "740",
            "666"
        ],
        "answer": "703",
        "solution": "Using formula S = n(n + 1)/2: 37 × 38 / 2 = 37 × 19 = 703.",
        "formula": "Sum = n(n + 1) / 2.",
        "shortcut": "37 × 38 / 2 = 703.",
        "commonMistakes": "Multiplying n by n instead of n+1.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "summation",
            "easy",
            "foundational"
        ]
    },
    {
        "id": "aptitude_numbers_medium_1",
        "text": "A number N when divided by 39 leaves a remainder of 13. What remainder is obtained when N is divided by 6? (Assume 39 is a multiple of 6's co-factors).",
        "options": [
            "1",
            "0",
            "2",
            "3"
        ],
        "answer": "1",
        "solution": "N = 39q + 13 = 6(6q + 2) + (3q + 1). Remainder = 13 mod 6 = 1.",
        "formula": "Modulo rule: r2 = r1 mod d2.",
        "shortcut": "13 mod 6 = 1.",
        "commonMistakes": "Recalculating N from scratch without using modular arithmetic.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "remainders",
            "medium",
            "foundational"
        ]
    },
    {
        "id": "aptitude_numbers_hard_1",
        "text": "Determine the unit digit of (77)^190.",
        "options": [
            "9",
            "1",
            "3",
            "7"
        ],
        "answer": "9",
        "solution": "Unit digit depends on 7^190. Cyclicity of 7 is 4 (7, 9, 3, 1). Exponent 190 mod 4 = 2. 7^2 mod 10 = 9.",
        "formula": "Unit digit cyclicity repeats with period 4.",
        "shortcut": "7^2 mod 10 = 9.",
        "commonMistakes": "Confusing power of 0 with power of 4 when remainder is 0.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "unit_digit",
            "hard",
            "foundational"
        ]
    },
    {
        "id": "aptitude_numbers_expert_1",
        "text": "Find the exact number of trailing zeroes at the end of 111!.",
        "options": [
            "26",
            "24",
            "52",
            "29"
        ],
        "answer": "26",
        "solution": "Using Legendre's formula: floor(111/5) + floor(111/25) + floor(111/125) = 22 + 4 + 0 = 26.",
        "formula": "Trailing Zeroes = sum of floor(n / 5^k).",
        "shortcut": "22 + 4 = 26.",
        "commonMistakes": "Dividing by 10 instead of factors of 5.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "factorials",
            "expert",
            "foundational"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_2",
        "text": "What number should come in place of the question mark (?) in the series: 24, 21, 18, ?, 12, 9",
        "options": [
            "15",
            "16",
            "14",
            "13"
        ],
        "answer": "15",
        "solution": "The series is in Arithmetic Progression with a constant common difference of -3: 24 - 3 = 21, 21 - 3 = 18, 18 - 3 = 15, 15 - 3 = 12, 12 - 3 = 9.",
        "formula": "Arithmetic Progression: a_n = a + (n-1)d, where d = -3.",
        "shortcut": "18 - 3 = 15.",
        "commonMistakes": "Subtracting 2 instead of 3.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "ap",
            "beginner",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_3",
        "text": "Find the next number in the given series: 2, 4, 8, 14, 22, ?",
        "options": [
            "32",
            "30",
            "34",
            "36"
        ],
        "answer": "32",
        "solution": "The differences between consecutive numbers form an arithmetic series of even numbers (+2, +4, +6, +8, +10): 2+2=4, 4+4=8, 8+6=14, 14+8=22, 22+10=32.",
        "formula": "Difference series: d_n = 2n.",
        "shortcut": "22 + 10 = 32.",
        "commonMistakes": "Assuming a doubling geometric progression (2, 4, 8, 16).",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "difference_series",
            "beginner",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_4",
        "text": "What comes next in the sequence: 3, 4, 6, 9, 13, 18, ?",
        "options": [
            "24",
            "23",
            "25",
            "26"
        ],
        "answer": "24",
        "solution": "The differences between successive terms increase by 1 (+1, +2, +3, +4, +5, +6): 3+1=4, 4+2=6, 6+3=9, 9+4=13, 13+5=18, 18+6=24.",
        "formula": "d_k = k (consecutive natural numbers).",
        "shortcut": "18 + 6 = 24.",
        "commonMistakes": "Adding 5 instead of incrementing to 6.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "differences",
            "beginner",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_easy_2",
        "text": "Find the missing term in the sequence: 6174, 882, 126, ?",
        "options": [
            "18",
            "21",
            "14",
            "16"
        ],
        "answer": "18",
        "solution": "Each consecutive number is obtained by dividing the previous number by 7: 6174 ÷ 7 = 882, 882 ÷ 7 = 126, 126 ÷ 7 = 18.",
        "formula": "Geometric Progression / Division series: T_n = T_{n-1} / 7.",
        "shortcut": "126 ÷ 7 = 18.",
        "commonMistakes": "Dividing by 6 or 8 due to estimation error.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "division",
            "easy",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_easy_3",
        "text": "What should come in place of the question mark (?) in the series: 1, 2, 3, 6, 9, 18, ?, 54",
        "options": [
            "27",
            "18",
            "36",
            "81"
        ],
        "answer": "27",
        "solution": "The series follows an alternating multiplication pattern of ×2 and ×1.5 (×3/2): 1 × 2 = 2, 2 × 1.5 = 3, 3 × 2 = 6, 6 × 1.5 = 9, 9 × 2 = 18, 18 × 1.5 = 27, 27 × 2 = 54.",
        "formula": "Alternating multipliers: ×2, ×(3/2), ×2, ×(3/2)...",
        "shortcut": "18 × 1.5 = 27.",
        "commonMistakes": "Assuming constant ×2 or constant +3.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "alternating_multipliers",
            "easy",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_easy_4",
        "text": "Find the next number in the series: 4, 6, 12, 14, 28, 30, ?",
        "options": [
            "60",
            "32",
            "58",
            "64"
        ],
        "answer": "60",
        "solution": "The series alternates between adding 2 and multiplying by 2: 4 + 2 = 6, 6 × 2 = 12, 12 + 2 = 14, 14 × 2 = 28, 28 + 2 = 30, 30 × 2 = 60.",
        "formula": "Alternating pattern: +2, ×2, +2, ×2, +2, ×2.",
        "shortcut": "30 × 2 = 60.",
        "commonMistakes": "Adding 2 to 30 to get 32 instead of multiplying by 2.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "alternating_operations",
            "easy",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_medium_2",
        "text": "What comes in place of question mark (?) in: 8, 28, 116, 584, ? (R.R.B 2002)",
        "options": [
            "3508",
            "1752",
            "3502",
            "3504"
        ],
        "answer": "3508",
        "solution": "The pattern is (× 3 + 4), (× 4 + 4), (× 5 + 4), (× 6 + 4): (8 × 3) + 4 = 28, (28 × 4) + 4 = 116, (116 × 5) + 4 = 584, (584 × 6) + 4 = 3504 + 4 = 3508.",
        "formula": "T_n = T_{n-1} × (n+1) + 4.",
        "shortcut": "584 × 6 + 4 = 3508.",
        "commonMistakes": "Multiplying by 5 instead of incrementing multiplier to 6.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "rrb",
            "medium",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_medium_3",
        "text": "Complete the series: 3, 4, 10, 33, 136, 685, ?",
        "options": [
            "4116",
            "3430",
            "4802",
            "5145"
        ],
        "answer": "4116",
        "solution": "The pattern is: 3 × 1 + 1 = 4, 4 × 2 + 2 = 10, 10 × 3 + 3 = 33, 33 × 4 + 4 = 136, 136 × 5 + 5 = 685, 685 × 6 + 6 = 4110 + 6 = 4116.",
        "formula": "T_n = T_{n-1} × n + n.",
        "shortcut": "685 × 6 + 6 = 4116.",
        "commonMistakes": "Calculation slip in multi-digit multiplication.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "product_sum",
            "medium",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_5",
        "text": "What comes in place of (?) in: 1, 9, 25, 49, ?, 121 (S.S.C.)",
        "options": [
            "81",
            "64",
            "91",
            "100"
        ],
        "answer": "81",
        "solution": "The series consists of squares of consecutive odd numbers: 1^2 = 1, 3^2 = 9, 5^2 = 25, 7^2 = 49, 9^2 = 81, 11^2 = 121.",
        "formula": "T_n = (2n - 1)^2.",
        "shortcut": "9^2 = 81.",
        "commonMistakes": "Choosing 64 (8^2) by confusing odd numbers with all integers.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "squares",
            "ssc",
            "beginner",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_easy_5",
        "text": "For the triangular number series: 1, 3, 6, 10, 15, 21, ..., find the 15th term of the series.",
        "options": [
            "120",
            "105",
            "136",
            "110"
        ],
        "answer": "120",
        "solution": "Triangular numbers are generated by T_n = n(n + 1)/2. For the 15th term: (15 × 16) / 2 = 15 × 8 = 120.",
        "formula": "Triangular number: T_n = n(n + 1) / 2.",
        "shortcut": "15 × 16 / 2 = 120.",
        "commonMistakes": "Using (n - 1) instead of (n + 1).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "triangular_numbers",
            "easy",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_hard_2",
        "text": "Find the Wrong term of the Series: 69, 55, 26, 13, 5",
        "options": [
            "5",
            "69",
            "55",
            "26"
        ],
        "answer": "5",
        "solution": "Each term is 1 more than the product of the digits of the preceding term: (6 × 9) + 1 = 55, (5 × 5) + 1 = 26, (2 × 6) + 1 = 13, (1 × 3) + 1 = 4. The last term is given as 5 instead of 4.",
        "formula": "T_n = Product_of_digits(T_{n-1}) + 1.",
        "shortcut": "(1 × 3) + 1 = 4 != 5.",
        "commonMistakes": "Looking for standard arithmetic difference instead of digit-level operations.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "wrong_term",
            "digit_product",
            "hard",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_6",
        "text": "What should come in place of the question mark (?) in: 2, 7, 17, 32, ?",
        "options": [
            "52",
            "42",
            "47",
            "62"
        ],
        "answer": "52",
        "solution": "The differences between adjacent numbers are multiples of 5 (+5, +10, +15, +20): 2+5=7, 7+10=17, 17+15=32, 32+20=52.",
        "formula": "Difference series: d_n = 5n.",
        "shortcut": "32 + 20 = 52.",
        "commonMistakes": "Adding 15 again instead of incrementing to 20.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "differences",
            "beginner",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_hard_3",
        "text": "Find the next number in the percentage series: 105, 94.5, 103.95, 93.56, ?",
        "options": [
            "102.91",
            "102.98",
            "102.95",
            "103.91"
        ],
        "answer": "102.91",
        "solution": "The series alternates between a 10% decrease and a 10% increase: 105 - 10%(105) = 94.5, 94.5 + 10%(94.5) = 103.95, 103.95 - 10%(103.95) = 93.555 ≈ 93.56, 93.56 + 10%(93.56) = 93.56 + 9.356 = 102.916 ≈ 102.91.",
        "formula": "Alternating percentage: -10%, +10%, -10%, +10%.",
        "shortcut": "93.56 × 1.10 = 102.916.",
        "commonMistakes": "Rounding errors during percentage multiplication.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "percentage_series",
            "hard",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_expert_2",
        "text": "What comes in place of (?) in the series: 51975, 9450, 2100, 600, 240, 160, ?",
        "options": [
            "320",
            "80",
            "120",
            "240"
        ],
        "answer": "320",
        "solution": "The divisor decreases by 1.0 at each step: 51975 ÷ 5.5 = 9450, 9450 ÷ 4.5 = 2100, 2100 ÷ 3.5 = 600, 600 ÷ 2.5 = 240, 240 ÷ 1.5 = 160, 160 ÷ 0.5 = 320.",
        "formula": "Divisors: ÷5.5, ÷4.5, ÷3.5, ÷2.5, ÷1.5, ÷0.5.",
        "shortcut": "160 ÷ 0.5 = 160 × 2 = 320.",
        "commonMistakes": "Assuming the series continues to decrease below 160.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "fractional_division",
            "expert",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_expert_3",
        "text": "Find the next number in: 16, 12, 18, 40.5, 121.5, 455.625, ?",
        "options": [
            "2050.3125",
            "2050.1125",
            "2050.2125",
            "2050.4125"
        ],
        "answer": "2050.3125",
        "solution": "The multipliers increase by 0.75 at each step: 16 × 0.75 = 12, 12 × 1.5 = 18, 18 × 2.25 = 40.5, 40.5 × 3.0 = 121.5, 121.5 × 3.75 = 455.625, 455.625 × 4.50 = 2050.3125.",
        "formula": "Multipliers: ×0.75, ×1.50, ×2.25, ×3.00, ×3.75, ×4.50.",
        "shortcut": "455.625 × 4.5 = 2050.3125.",
        "commonMistakes": "Arithmetic slip with decimal multiplication.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "decimal_multipliers",
            "expert",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_medium_4",
        "text": "What comes in place of question mark (?) in: 4, 18, 48, 100, 180, 294, ?",
        "options": [
            "448",
            "424",
            "436",
            "460"
        ],
        "answer": "448",
        "solution": "The nth term is n^3 - n^2 (or n^2(n - 1)) starting from n = 2: 2^3 - 2^2 = 4, 3^3 - 3^2 = 18, 4^3 - 4^2 = 48, 5^3 - 5^2 = 100, 6^3 - 6^2 = 180, 7^3 - 7^2 = 294, 8^3 - 8^2 = 512 - 64 = 448.",
        "formula": "T_n = n^3 - n^2 = n^2(n - 1) for n = 2, 3, 4, ...",
        "shortcut": "8^2 × 7 = 64 × 7 = 448.",
        "commonMistakes": "Computing 8^3 - 8 = 504 instead of 8^3 - 8^2.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "higher_order_diff",
            "cubes",
            "medium",
            "theory_ex"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_7",
        "text": "What should come in place of question mark (?) in the following series: 1, 5, 13, 25, 41, ?",
        "options": [
            "61",
            "51",
            "57",
            "63"
        ],
        "answer": "61",
        "solution": "The differences are multiples of 4 (+4, +8, +12, +16, +20): 1+4=5, 5+8=13, 13+12=25, 25+16=41, 41+20=61.",
        "formula": "d_n = 4n.",
        "shortcut": "41 + 20 = 61.",
        "commonMistakes": "Adding 18 instead of 20.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "completion",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_8",
        "text": "What should come in place of question mark (?) in the series: 1, 1, 2, 6, 24, ?, 720",
        "options": [
            "120",
            "100",
            "104",
            "108"
        ],
        "answer": "120",
        "solution": "The series consists of factorials or consecutive integer multiplication: 1×1=1, 1×2=2, 2×3=6, 6×4=24, 24×5=120, 120×6=720.",
        "formula": "T_n = T_{n-1} × n.",
        "shortcut": "24 × 5 = 120.",
        "commonMistakes": "Adding instead of multiplying.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "factorial",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_easy_6",
        "text": "What should come in place of question mark (?) in: 6, 13, 28, 59, ?",
        "options": [
            "122",
            "111",
            "113",
            "114"
        ],
        "answer": "122",
        "solution": "The pattern is ×2 + 1, ×2 + 2, ×2 + 3, ×2 + 4: 6×2+1=13, 13×2+2=28, 28×2+3=59, 59×2+4 = 118+4 = 122.",
        "formula": "T_n = 2 × T_{n-1} + n.",
        "shortcut": "59 × 2 + 4 = 122.",
        "commonMistakes": "Using constant +1 instead of incrementing addition.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "completion",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_7",
        "text": "What should come in place of question mark (?) in: 3, 15, ?, 63, 99, 143 (S.S.C.)",
        "options": [
            "35",
            "27",
            "45",
            "56"
        ],
        "answer": "35",
        "solution": "The pattern is (even number)^2 - 1: 2^2-1=3, 4^2-1=15, 6^2-1=35, 8^2-1=63, 10^2-1=99, 12^2-1=143.",
        "formula": "T_n = (2n)^2 - 1.",
        "shortcut": "6^2 - 1 = 35.",
        "commonMistakes": "Assuming differences are strictly linear.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "ssc",
            "squares",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_8",
        "text": "What should come in place of question mark (?) in: 5760, 960, ?, 48, 16, 8 (S.S.C)",
        "options": [
            "192",
            "120",
            "160",
            "240"
        ],
        "answer": "192",
        "solution": "The divisors decrease consecutively from 6 down to 2: 5760 ÷ 6 = 960, 960 ÷ 5 = 192, 192 ÷ 4 = 48, 48 ÷ 3 = 16, 16 ÷ 2 = 8.",
        "formula": "T_n = T_{n-1} / (7 - n).",
        "shortcut": "960 ÷ 5 = 192.",
        "commonMistakes": "Dividing by 4 directly instead of 5.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "ssc",
            "division",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_hard_4",
        "text": "What should come in place of question mark (?) in: 81, 512, 2401, 7776, 15625, 16384, ?",
        "options": [
            "6561",
            "2187",
            "19683",
            "729"
        ],
        "answer": "6561",
        "solution": "The pattern is decreasing base with increasing exponent: 9^2 = 81, 8^3 = 512, 7^4 = 2401, 6^5 = 7776, 5^6 = 15625, 4^7 = 16384, 3^8 = 6561.",
        "formula": "T_n = (10 - n)^{n + 1}.",
        "shortcut": "3^8 = 6561.",
        "commonMistakes": "Computing 3^7 = 2187 instead of 3^8.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "powers",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_easy_9",
        "text": "What should come in place of question mark (?) in: 8, 64, 216, 512, 1000, 1728, ?",
        "options": [
            "2744",
            "4096",
            "3375",
            "2197"
        ],
        "answer": "2744",
        "solution": "The series consists of cubes of consecutive even numbers: 2^3 = 8, 4^3 = 64, 6^3 = 216, 8^3 = 512, 10^3 = 1000, 12^3 = 1728, 14^3 = 2744.",
        "formula": "T_n = (2n)^3.",
        "shortcut": "14^3 = 2744.",
        "commonMistakes": "Choosing 2197 (13^3) which is odd, or 3375 (15^3).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "cubes",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_9",
        "text": "What should come in place of question mark (?) in the sequence: 72, 63, 54, 45, ?",
        "options": [
            "36",
            "81",
            "27",
            "90"
        ],
        "answer": "36",
        "solution": "Constant arithmetic subtraction of 9: 72 - 9 = 63, 63 - 9 = 54, 54 - 9 = 45, 45 - 9 = 36.",
        "formula": "AP with d = -9.",
        "shortcut": "45 - 9 = 36.",
        "commonMistakes": "Subtracting 8 or 10.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "ap",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_10",
        "text": "What should come in place of question mark (?) in: 2187, 729, 243, 81, 27, 9, ?",
        "options": [
            "3",
            "36",
            "18",
            "6"
        ],
        "answer": "3",
        "solution": "Geometric progression dividing by 3 at each step: 2187 ÷ 3 = 729, 729 ÷ 3 = 243, 243 ÷ 3 = 81, 81 ÷ 3 = 27, 27 ÷ 3 = 9, 9 ÷ 3 = 3.",
        "formula": "GP with common ratio r = 1/3.",
        "shortcut": "9 ÷ 3 = 3.",
        "commonMistakes": "Dividing by 2.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "gp",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_hard_5",
        "text": "What should come in place of question mark (?) in: 6, 26, 134, 666, 3334, 16666, ?",
        "options": [
            "83334",
            "84344",
            "83443",
            "84434"
        ],
        "answer": "83334",
        "solution": "The pattern alternates between (× 5 - 4) and (× 5 + 4): 6×5-4=26, 26×5+4=134, 134×5-4=666, 666×5+4=3334, 3334×5-4=16666, 16666×5+4 = 83330 + 4 = 83334.",
        "formula": "Alternating: ×5 - 4, ×5 + 4.",
        "shortcut": "16666 × 5 + 4 = 83334.",
        "commonMistakes": "Subtracting 4 instead of adding 4 on the 7th step.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "alternating",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_easy_10",
        "text": "What should come in place of question mark (?) in: 20, 24, 33, 49, 74, 110, ?",
        "options": [
            "159",
            "133",
            "147",
            "163"
        ],
        "answer": "159",
        "solution": "The differences are squares of consecutive integers (+2^2, +3^2, +4^2, +5^2, +6^2, +7^2): 20+4=24, 24+9=33, 33+16=49, 49+25=74, 74+36=110, 110+49=159.",
        "formula": "d_n = (n + 1)^2.",
        "shortcut": "110 + 49 = 159.",
        "commonMistakes": "Adding 8^2 (64) instead of 7^2 (49).",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "squares_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_5",
        "text": "What should come in place of question mark (?) in: 529, 841, 961, 1369, 1681, 1849, ?",
        "options": [
            "2209",
            "2809",
            "2601",
            "3249"
        ],
        "answer": "2209",
        "solution": "The series consists of squares of consecutive prime numbers: 23^2 = 529, 29^2 = 841, 31^2 = 961, 37^2 = 1369, 41^2 = 1681, 43^2 = 1849, next prime is 47 -> 47^2 = 2209.",
        "formula": "T_n = (Prime_n)^2.",
        "shortcut": "47^2 = 2209.",
        "commonMistakes": "Squaring 45 (2025) or 49 (2401) which are composite numbers.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "prime_squares",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_6",
        "text": "What should come in place of question mark (?) in: 16, 24, 48, 120, 360, 1260, ?",
        "options": [
            "5040",
            "3780",
            "4725",
            "5355"
        ],
        "answer": "5040",
        "solution": "The multipliers increase by 0.5 at each step: 16 × 1.5 = 24, 24 × 2.0 = 48, 48 × 2.5 = 120, 120 × 3.0 = 360, 360 × 3.5 = 1260, 1260 × 4.0 = 5040.",
        "formula": "Multipliers: ×1.5, ×2.0, ×2.5, ×3.0, ×3.5, ×4.0.",
        "shortcut": "1260 × 4 = 5040.",
        "commonMistakes": "Multiplying by 4.5 instead of 4.0.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "incremental_multipliers",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_6",
        "text": "What should come in place of question mark (?) in: 8, 31, 122, 485, 1936, 7739, ?",
        "options": [
            "30950",
            "46430",
            "34650",
            "42850"
        ],
        "answer": "30950",
        "solution": "The pattern is ×4 - 1, ×4 - 2, ×4 - 3, ×4 - 4, ×4 - 5, ×4 - 6: 8×4-1=31, 31×4-2=122, 122×4-3=485, 485×4-4=1936, 1936×4-5=7739, 7739×4-6 = 30956 - 6 = 30950.",
        "formula": "T_n = 4 × T_{n-1} - n.",
        "shortcut": "7739 × 4 - 6 = 30950.",
        "commonMistakes": "Subtracting 5 again instead of 6.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "multiplication_subtraction",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_hard_7",
        "text": "What should come in place of question mark (?) in: 499, 622, 868, 1237, 1729, 2344, ?",
        "options": [
            "3082",
            "3205",
            "2959",
            "3462"
        ],
        "answer": "3082",
        "solution": "The differences are consecutive multiples of 123: 622 - 499 = 123 (123×1), 868 - 622 = 246 (123×2), 1237 - 868 = 369 (123×3), 1729 - 1237 = 492 (123×4), 2344 - 1729 = 615 (123×5), next difference = 123 × 6 = 738. Next term = 2344 + 738 = 3082.",
        "formula": "d_n = 123n.",
        "shortcut": "2344 + 738 = 3082.",
        "commonMistakes": "Adding 615 again instead of 738.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "multiples_diff",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_11",
        "text": "What should come in place of question mark (?) in: 231, 342, 453, 564, ?",
        "options": [
            "675",
            "576",
            "475",
            "567"
        ],
        "answer": "675",
        "solution": "Constant addition of 111 (or each digit in hundreds, tens, and units position increases by 1): 231+111=342, 342+111=453, 453+111=564, 564+111=675.",
        "formula": "AP with d = 111.",
        "shortcut": "564 + 111 = 675.",
        "commonMistakes": "Permuting digits incorrectly.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "ap",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_12",
        "text": "What should come in place of question mark (?) in: 796, 675, 554, 433, ?",
        "options": [
            "312",
            "512",
            "231",
            "213"
        ],
        "answer": "312",
        "solution": "Constant arithmetic subtraction of 121: 796 - 121 = 675, 675 - 121 = 554, 554 - 121 = 433, 433 - 121 = 312.",
        "formula": "AP with d = -121.",
        "shortcut": "433 - 121 = 312.",
        "commonMistakes": "Subtracting 111 instead of 121.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "ap",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_medium_7",
        "text": "In the following number series only one number is wrong. Find out the wrong number: 529, 841, 961, 1296, 1681, 1849, 2209 [Bank of India PO]",
        "options": [
            "1296",
            "841",
            "961",
            "1681"
        ],
        "answer": "1296",
        "solution": "The series consists of squares of consecutive prime numbers: 23^2 = 529, 29^2 = 841, 31^2 = 961, 37^2 = 1369 (given 1296 which is 36^2), 41^2 = 1681, 43^2 = 1849, 47^2 = 2209. 1296 is the wrong term.",
        "formula": "Sequence of prime squares (23, 29, 31, 37, 41, 43, 47)^2.",
        "shortcut": "36 is composite, 37 is prime -> 1369 should replace 1296.",
        "commonMistakes": "Assuming 1296 is correct because it is a perfect square (36^2).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_11",
        "text": "Find out the wrong number in the series: 13, 14, 27, 45, 68, 109, 177",
        "options": [
            "45",
            "27",
            "109",
            "68"
        ],
        "answer": "45",
        "solution": "Fibonacci-style summation where each number is the sum of previous two numbers: 13 + 14 = 27, 14 + 27 = 41 (given 45), 27 + 41 = 68, 41 + 68 = 109, 68 + 109 = 177. Therefore, 45 is wrong.",
        "formula": "T_n = T_{n-1} + T_{n-2}.",
        "shortcut": "14 + 27 = 41 != 45.",
        "commonMistakes": "Thinking 68 is wrong without checking preceding sum.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "fibonacci",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_hard_8",
        "text": "Find the wrong number in the series: 274, 301, 426, 769, 1498, 2824, 5026",
        "options": [
            "2824",
            "301",
            "426",
            "769"
        ],
        "answer": "2824",
        "solution": "The differences are cubes of consecutive odd numbers: 301 - 274 = 27 (3^3), 426 - 301 = 125 (5^3), 769 - 426 = 343 (7^3), 1498 - 769 = 729 (9^3), 1498 + 11^3 = 1498 + 1331 = 2829 (given 2824), 2829 + 13^3 = 2829 + 2197 = 5026. Therefore, 2824 is wrong.",
        "formula": "d_n = (2n + 1)^3.",
        "shortcut": "1498 + 1331 = 2829 != 2824.",
        "commonMistakes": "Calculating 11^3 as 1221 instead of 1331.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "cubes",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_expert_4",
        "text": "Find the wrong number in the series: 4, 28, 160, 990, 6970, 55832, 502560",
        "options": [
            "6970",
            "28",
            "160",
            "990"
        ],
        "answer": "6970",
        "solution": "Pattern is (term + n) × (n+1): (4 + 3) × 4 = 28, (28 + 4) × 5 = 160, (160 + 5) × 6 = 990, (990 + 6) × 7 = 996 × 7 = 6972 (given 6970), (6972 + 7) × 8 = 55832, (55832 + 8) × 9 = 502560. Thus, 6970 is the wrong term.",
        "formula": "T_n = (T_{n-1} + n + 2) × (n + 3).",
        "shortcut": "(990 + 6) × 7 = 6972 != 6970.",
        "commonMistakes": "Testing direct multiplication without bracket addition.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_medium_8",
        "text": "Find the wrong number in: 7.5, 47.5, 87.5, 157.5, 247.5, 357.5, 487.5 [Bank of Baroda PO]",
        "options": [
            "47.5",
            "357.5",
            "87.5",
            "157.5"
        ],
        "answer": "47.5",
        "solution": "The differences should be in Arithmetic Progression of (+30, +50, +70, +90, +110, +130): 7.5 + 30 = 37.5 (given 47.5), 37.5 + 50 = 87.5, 87.5 + 70 = 157.5, 157.5 + 90 = 247.5, 247.5 + 110 = 357.5, 357.5 + 130 = 487.5. Thus, 47.5 is wrong.",
        "formula": "Difference AP: +30, +50, +70, +90, +110, +130.",
        "shortcut": "7.5 + 30 = 37.5 != 47.5.",
        "commonMistakes": "Assuming 7.5 is the wrong term instead of 47.5.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_12",
        "text": "Find the wrong number in the series: 13, 16, 21, 27, 39, 52, 69",
        "options": [
            "27",
            "21",
            "39",
            "52"
        ],
        "answer": "27",
        "solution": "The differences are consecutive prime numbers: 13 + 3 = 16, 16 + 5 = 21, 21 + 7 = 28 (given 27), 28 + 11 = 39, 39 + 13 = 52, 52 + 17 = 69. Therefore, 27 is wrong and should be 28.",
        "formula": "Differences are prime numbers: +3, +5, +7, +11, +13, +17.",
        "shortcut": "21 + 7 = 28 != 27.",
        "commonMistakes": "Considering 9 as a prime number in differences.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "prime_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_9",
        "text": "Find the wrong number in: 1500, 1581, 1664, 1749, 1833, 1925, 2016",
        "options": [
            "1833",
            "1581",
            "1664",
            "1925"
        ],
        "answer": "1833",
        "solution": "The differences are consecutive odd numbers increasing by 2: 1581 - 1500 = 81, 1664 - 1581 = 83, 1749 - 1664 = 85, 1749 + 87 = 1836 (given 1833), 1836 + 89 = 1925, 1925 + 91 = 2016. Thus, 1833 is wrong.",
        "formula": "Differences: +81, +83, +85, +87, +89, +91.",
        "shortcut": "1749 + 87 = 1836 != 1833.",
        "commonMistakes": "Overlooking the +87 step.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "odd_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_13",
        "text": "Find out the wrong number in: 66, 91, 120, 153, 190, 233, 276",
        "options": [
            "233",
            "120",
            "153",
            "276"
        ],
        "answer": "233",
        "solution": "Differences increase by 4 at each step (+25, +29, +33, +37, +41, +45): 66+25=91, 91+29=120, 120+33=153, 153+37=190, 190+41 = 231 (given 233), 231+45 = 276. Thus, 233 is wrong.",
        "formula": "d_n = 25 + 4(n - 1).",
        "shortcut": "190 + 41 = 231 != 233.",
        "commonMistakes": "Adding 43 instead of 41.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_14",
        "text": "Find out the wrong number in: 1331, 2197, 3375, 4914, 6859, 9261, 12167",
        "options": [
            "4914",
            "6859",
            "9261",
            "2197"
        ],
        "answer": "4914",
        "solution": "The numbers are cubes of consecutive odd integers: 11^3 = 1331, 13^3 = 2197, 15^3 = 3375, 17^3 = 4913 (given 4914), 19^3 = 6859, 21^3 = 9261, 23^3 = 12167. Hence, 4914 is wrong.",
        "formula": "T_n = (2n + 9)^3.",
        "shortcut": "17^3 = 4913 != 4914.",
        "commonMistakes": "Calculating 17^3 as 4914.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "cubes",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_15",
        "text": "Find the wrong number in: 3, 7, 16, 35, 72, 153, 312 [Bank of Maharashtra]",
        "options": [
            "72",
            "7",
            "153",
            "35"
        ],
        "answer": "72",
        "solution": "Pattern is ×2 + 1, ×2 + 2, ×2 + 3, ×2 + 4, ×2 + 5, ×2 + 6: 3×2+1=7, 7×2+2=16, 16×2+3=35, 35×2+4 = 74 (given 72), 74×2+5 = 153, 153×2+6 = 312. Hence, 72 is wrong.",
        "formula": "T_n = 2 × T_{n-1} + n.",
        "shortcut": "35 × 2 + 4 = 74 != 72.",
        "commonMistakes": "Thinking 153 is wrong because of parity change.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_10",
        "text": "Find out the wrong number in the series: 18, 20, 23, 32, 48, 73, 109",
        "options": [
            "20",
            "23",
            "32",
            "48"
        ],
        "answer": "20",
        "solution": "The differences should be consecutive square numbers (+1^2, +2^2, +3^2, +4^2, +5^2, +6^2): 18 + 1 = 19 (given 20), 19 + 4 = 23, 23 + 9 = 32, 32 + 16 = 48, 48 + 25 = 73, 73 + 36 = 109. Therefore, 20 is wrong.",
        "formula": "Differences are squares: +1, +4, +9, +16, +25, +36.",
        "shortcut": "18 + 1^2 = 19 != 20.",
        "commonMistakes": "Assuming 18 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "squares_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_11",
        "text": "Find the wrong number in the series: 6, 10, 14, 34, 66, 130, 258",
        "options": [
            "14",
            "10",
            "34",
            "66"
        ],
        "answer": "14",
        "solution": "Differences double at each step (+4, +8, +16, +32, +64, +128): 6 + 4 = 10, 10 + 8 = 18 (given 14), 18 + 16 = 34, 34 + 32 = 66, 66 + 64 = 130, 130 + 128 = 258. Thus, 14 is wrong.",
        "formula": "d_n = 2^{n+1}.",
        "shortcut": "10 + 8 = 18 != 14.",
        "commonMistakes": "Assuming 6 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "doubling_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_12",
        "text": "Find the wrong number in: 1, 3, 10, 21, 64, 129, 356, 777 (RRB)",
        "options": [
            "356",
            "21",
            "129",
            "10"
        ],
        "answer": "356",
        "solution": "Alternating pattern is (× 2 + 1) and (× 3 + 1): 1×2+1=3, 3×3+1=10, 10×2+1=21, 21×3+1=64, 64×2+1=129, 129×3+1 = 388 (given 356), 388×2+1 = 777. Thus, 356 is wrong.",
        "formula": "Alternating: ×2 + 1, ×3 + 1.",
        "shortcut": "129 × 3 + 1 = 388 != 356.",
        "commonMistakes": "Assuming 64 or 129 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "rrb",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_16",
        "text": "Find the wrong number in: 3, 4, 10, 32, 136, 685, 4116",
        "options": [
            "32",
            "4",
            "10",
            "136"
        ],
        "answer": "32",
        "solution": "Pattern is ×1+1, ×2+2, ×3+3, ×4+4: 3×1+1=4, 4×2+2=10, 10×3+3 = 33 (given 32), 33×4+4 = 136, 136×5+5 = 685, 685×6+6 = 4116. Thus, 32 is wrong.",
        "formula": "T_n = T_{n-1} × n + n.",
        "shortcut": "10 × 3 + 3 = 33 != 32.",
        "commonMistakes": "Thinking 10 is wrong.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_17",
        "text": "Find out the wrong number in: 4, 10, 22, 46, 96, 190, 382 (SSC)",
        "options": [
            "96",
            "10",
            "22",
            "46"
        ],
        "answer": "96",
        "solution": "The pattern is ×2 + 2: 4×2+2=10, 10×2+2=22, 22×2+2=46, 46×2+2 = 94 (given 96), 94×2+2 = 190, 190×2+2 = 382. Hence, 96 is wrong.",
        "formula": "T_n = 2 × T_{n-1} + 2.",
        "shortcut": "46 × 2 + 2 = 94 != 96.",
        "commonMistakes": "Assuming differences are +6, +12, +24, +50.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "ssc",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_expert_5",
        "text": "Given the series: 5, 9, 25, 91, 414, 2282.5. Following the exact same logic starting with 3: 3, (A), (B), (C), (D), (E). What will come in place of (C)? [RBI GRADE B-OFFICER]",
        "options": [
            "64.75",
            "63.25",
            "63.75",
            "64.25"
        ],
        "answer": "64.75",
        "solution": "Pattern is ×1.5 + 1.5, ×2.5 + 2.5, ×3.5 + 3.5, ×4.5 + 4.5. For the new series starting at 3: (A) = 3 × 1.5 + 1.5 = 6; (B) = 6 × 2.5 + 2.5 = 17.5; (C) = 17.5 × 3.5 + 3.5 = 61.25 + 3.5 = 64.75.",
        "formula": "T_k = T_{k-1} × (k + 0.5) + (k + 0.5).",
        "shortcut": "17.5 × 3.5 + 3.5 = 64.75.",
        "commonMistakes": "Applying whole number multipliers instead of half-integer increments.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "rbi_grade_b",
            "two_tier",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_hard_9",
        "text": "Given the series: 7, 6, 10, 27, 104, 515. Following the same logic starting with 9: 9, (A), (B), (C), (D), (E). What will come in place of (D)? [RBI GRADE B-OFFICER]",
        "options": [
            "152",
            "156",
            "108",
            "112"
        ],
        "answer": "152",
        "solution": "Pattern is ×1 - 1, ×2 - 2, ×3 - 3, ×4 - 4, ×5 - 5. For the series starting with 9: (A) = 9×1 - 1 = 8; (B) = 8×2 - 2 = 14; (C) = 14×3 - 3 = 39; (D) = 39×4 - 4 = 156 - 4 = 152.",
        "formula": "T_k = T_{k-1} × k - k.",
        "shortcut": "39 × 4 - 4 = 152.",
        "commonMistakes": "Adding k instead of subtracting k.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "rbi_grade_b",
            "two_tier",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_medium_13",
        "text": "Find out the wrong number in: 8, 11, 17, 47, 128, 371, 1100 [Corporation Bank PO]",
        "options": [
            "17",
            "11",
            "47",
            "371"
        ],
        "answer": "17",
        "solution": "The differences are powers of 3 (+3^1, +3^2, +3^3, +3^4, +3^5, +3^6): 8 + 3 = 11, 11 + 9 = 20 (given 17), 20 + 27 = 47, 47 + 81 = 128, 128 + 243 = 371, 371 + 729 = 1100. Thus, 17 is wrong.",
        "formula": "d_n = 3^n.",
        "shortcut": "11 + 9 = 20 != 17.",
        "commonMistakes": "Assuming 47 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "powers_of_3",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_18",
        "text": "Find out the wrong number in: 1, 5, 13, 31, 61, 125, 253",
        "options": [
            "31",
            "1",
            "5",
            "61"
        ],
        "answer": "31",
        "solution": "Differences double: +4, +8, +16, +32, +64, +128. 1+4=5, 5+8=13, 13+16 = 29 (given 31), 29+32 = 61, 61+64 = 125, 125+128 = 253. Hence, 31 is wrong.",
        "formula": "d_n = 2^{n+1}.",
        "shortcut": "13 + 16 = 29 != 31.",
        "commonMistakes": "Thinking 61 is wrong.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "doubling_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_14",
        "text": "Find out the wrong number in: 11, 18, 29, 42, 59, 80, 101 [Oriental Bank of Commerce PO]",
        "options": [
            "80",
            "42",
            "18",
            "29"
        ],
        "answer": "80",
        "solution": "The differences are consecutive prime numbers: 11 + 7 = 18, 18 + 11 = 29, 29 + 13 = 42, 42 + 17 = 59, 59 + 19 = 78 (given 80), 78 + 23 = 101. Thus, 80 is wrong.",
        "formula": "Differences are prime numbers: +7, +11, +13, +17, +19, +23.",
        "shortcut": "59 + 19 = 78 != 80.",
        "commonMistakes": "Assuming 42 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "prime_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_10",
        "text": "Find the wrong number in: 5, 55, 495, 3465, 17325, 34650, 51975",
        "options": [
            "34650",
            "495",
            "55",
            "17325"
        ],
        "answer": "34650",
        "solution": "The multipliers decrease by 2 (odd numbers): 5 × 11 = 55, 55 × 9 = 495, 495 × 7 = 3465, 3465 × 5 = 17325, 17325 × 3 = 51975 (given 34650), 51975 × 1 = 51975. Thus, 34650 is wrong.",
        "formula": "Multipliers: ×11, ×9, ×7, ×5, ×3, ×1.",
        "shortcut": "17325 × 3 = 51975 != 34650.",
        "commonMistakes": "Multiplying by 2 instead of 3.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "odd_multipliers",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_medium_15",
        "text": "Find out the wrong number in: 3, 7, 16, 32, 56, 93, 142",
        "options": [
            "56",
            "16",
            "32",
            "7"
        ],
        "answer": "56",
        "solution": "The differences are squares of consecutive integers (+2^2, +3^2, +4^2, +5^2, +6^2, +7^2): 3+4=7, 7+9=16, 16+16=32, 32+25 = 57 (given 56), 57+36 = 93, 93+49 = 142. Hence, 56 is wrong.",
        "formula": "d_n = (n + 1)^2.",
        "shortcut": "32 + 25 = 57 != 56.",
        "commonMistakes": "Thinking 32 or 93 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "squares_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_16",
        "text": "Find out the wrong number in: 4, 5, 12, 38, 160, 805, 4835",
        "options": [
            "38",
            "12",
            "160",
            "805"
        ],
        "answer": "38",
        "solution": "The pattern is ×1+1, ×2+2, ×3+3, ×4+4, ×5+5, ×6+6: 4×1+1=5, 5×2+2=12, 12×3+3 = 39 (given 38), 39×4+4 = 160, 160×5+5 = 805, 805×6+6 = 4836. Therefore, 38 is wrong.",
        "formula": "T_n = T_{n-1} × n + n.",
        "shortcut": "12 × 3 + 3 = 39 != 38.",
        "commonMistakes": "Assuming 160 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_11",
        "text": "What should come in place of question mark (?) in: 9, 62, ?, 1854, 7415, 22244 [IDBI Bank PO]",
        "options": [
            "371",
            "433",
            "309",
            "406"
        ],
        "answer": "371",
        "solution": "The pattern is ×7 - 1, ×6 - 1, ×5 - 1, ×4 - 1, ×3 - 1: 9×7-1=62, 62×6-1 = 372 - 1 = 371, 371×5-1 = 1855 - 1 = 1854, 1854×4-1 = 7415, 7415×3-1 = 22244.",
        "formula": "T_n = T_{n-1} × (8 - n) - 1.",
        "shortcut": "62 × 6 - 1 = 371.",
        "commonMistakes": "Adding 1 instead of subtracting 1.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "idbi",
            "bank_po",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_medium_17",
        "text": "What should come in place of question mark (?) in: 4, 8, 24, 60, ?, 224",
        "options": [
            "124",
            "178",
            "96",
            "109"
        ],
        "answer": "124",
        "solution": "The differences are squares of consecutive even numbers (+2^2, +4^2, +6^2, +8^2, +10^2): 4 + 4 = 8, 8 + 16 = 24, 24 + 36 = 60, 60 + 64 = 124, 124 + 100 = 224.",
        "formula": "d_n = (2n)^2.",
        "shortcut": "60 + 8^2 = 60 + 64 = 124.",
        "commonMistakes": "Assuming multiplication factors instead of square differences.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "even_squares_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_19",
        "text": "What should come in place of question mark (?) in: 8000, 1600, 320, 64, 12.8, ?",
        "options": [
            "2.56",
            "3.5",
            "3.2",
            "2.98"
        ],
        "answer": "2.56",
        "solution": "Geometric progression dividing by 5 at each step: 8000 ÷ 5 = 1600, 1600 ÷ 5 = 320, 320 ÷ 5 = 64, 64 ÷ 5 = 12.8, 12.8 ÷ 5 = 2.56.",
        "formula": "GP with r = 1/5 = 0.2.",
        "shortcut": "12.8 ÷ 5 = 2.56.",
        "commonMistakes": "Dividing by 4 instead of 5.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "gp",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_20",
        "text": "What should come in place of question mark (?) in: 6, 9, 15, 27, 51, ?",
        "options": [
            "99",
            "102",
            "95",
            "87"
        ],
        "answer": "99",
        "solution": "The differences double at each step (+3, +6, +12, +24, +48): 6+3=9, 9+6=15, 15+12=27, 27+24=51, 51+48=99.",
        "formula": "d_n = 3 × 2^{n-1}.",
        "shortcut": "51 + 48 = 99.",
        "commonMistakes": "Adding 36 instead of 48.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "doubling_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_hard_12",
        "text": "Find out the wrong number in: 484, 240, 120, 57, 26.5, 11.25, 3.625 [Allahabad Bank PO]",
        "options": [
            "120",
            "240",
            "57",
            "26.5"
        ],
        "answer": "120",
        "solution": "The pattern is (term - 4) ÷ 2: (484 - 4) / 2 = 240, (240 - 4) / 2 = 118 (given 120), (118 - 4) / 2 = 57, (57 - 4) / 2 = 26.5, (26.5 - 4) / 2 = 11.25, (11.25 - 4) / 2 = 3.625. Thus, 120 is wrong.",
        "formula": "T_n = (T_{n-1} - 4) / 2.",
        "shortcut": "(240 - 4) / 2 = 118 != 120.",
        "commonMistakes": "Assuming halving without subtracting 4.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "bank_po",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_medium_18",
        "text": "Find out the wrong number in: 3, 5, 13, 43, 176, 891, 5353",
        "options": [
            "176",
            "5",
            "13",
            "43"
        ],
        "answer": "176",
        "solution": "Pattern is ×1+2, ×2+3, ×3+4, ×4+5, ×5+6, ×6+7: 3×1+2=5, 5×2+3=13, 13×3+4=43, 43×4+5 = 177 (given 176), 177×5+6 = 891, 891×6+7 = 5353. Thus, 176 is wrong.",
        "formula": "T_n = T_{n-1} × n + (n + 1).",
        "shortcut": "43 × 4 + 5 = 177 != 176.",
        "commonMistakes": "Thinking 43 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_19",
        "text": "Find out the wrong number in: 6, 7, 16, 41, 90, 154, 292",
        "options": [
            "154",
            "7",
            "16",
            "41"
        ],
        "answer": "154",
        "solution": "Differences are squares of consecutive odd numbers: 6 + 1^2 = 7, 7 + 3^2 = 16, 16 + 5^2 = 41, 41 + 7^2 = 90, 90 + 9^2 = 90 + 81 = 171 (given 154), 171 + 11^2 = 171 + 121 = 292. Hence, 154 is wrong.",
        "formula": "d_n = (2n - 1)^2.",
        "shortcut": "90 + 81 = 171 != 154.",
        "commonMistakes": "Assuming 41 or 90 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "odd_squares",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_13",
        "text": "Find out the wrong number in: 5, 7, 16, 57, 244, 1245, 7506",
        "options": [
            "7",
            "16",
            "57",
            "244"
        ],
        "answer": "7",
        "solution": "Pattern is (term × n + n^2): 6 × 1 + 1^2 = 7 (Wait: 5 × 1 + 1 = 6, not 7; 6 × 2 + 4 = 16, 16 × 3 + 9 = 57, 57 × 4 + 16 = 244, 244 × 5 + 25 = 1245, 1245 × 6 + 36 = 7506). The second term should be 6 instead of 7.",
        "formula": "T_n = T_{n-1} × n + n^2.",
        "shortcut": "6 × 2 + 4 = 16 -> first step 5 × 1 + 1 = 6 != 7.",
        "commonMistakes": "Checking from the middle terms instead of validating the first step.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_expert_6",
        "text": "Find out the wrong number in: 4, 2.5, 3.5, 6.5, 15.5, 41.25, 126.75",
        "options": [
            "6.5",
            "2.5",
            "3.5",
            "15.5"
        ],
        "answer": "6.5",
        "solution": "Pattern is ×0.5+0.5, ×1.0+1.0, ×1.5+1.5, ×2.0+2.0, ×2.5+2.5: 4×0.5+0.5=2.5, 2.5×1+1=3.5, 3.5×1.5+1.5 = 6.75 (given 6.5), 6.75×2+2 = 15.5, 15.5×2.5+2.5 = 41.25. Therefore, 6.5 is wrong.",
        "formula": "T_n = T_{n-1} × (n × 0.5) + (n × 0.5).",
        "shortcut": "3.5 × 1.5 + 1.5 = 6.75 != 6.5.",
        "commonMistakes": "Thinking 2.5 is wrong.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "decimal_ops",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_medium_20",
        "text": "What should come in place of question mark (?) in: 325, 314, 288, 247, 191, ?",
        "options": [
            "120",
            "126",
            "116",
            "130"
        ],
        "answer": "120",
        "solution": "The differences decrease with an arithmetic progression (+15 in step size): 325 - 11 = 314, 314 - 26 = 288, 288 - 41 = 247, 247 - 56 = 191, 191 - 71 = 120.",
        "formula": "Subtractions: -11, -26, -41, -56, -71 (step = +15).",
        "shortcut": "191 - 71 = 120.",
        "commonMistakes": "Subtracting 61 instead of 71.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "subtraction_series",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_14",
        "text": "What should come in place of question mark (?) in: 45, 46, 70, 141, ?, 1061.5",
        "options": [
            "353.5",
            "353",
            "352.5",
            "352"
        ],
        "answer": "353.5",
        "solution": "Pattern is ×1.0 + 1, ×1.5 + 1, ×2.0 + 1, ×2.5 + 1, ×3.0 + 1: 45×1+1=46, 46×1.5+1=70, 70×2+1=141, 141×2.5+1 = 352.5 + 1 = 353.5, 353.5×3+1 = 1061.5.",
        "formula": "T_n = T_{n-1} × (1 + 0.5(n - 1)) + 1.",
        "shortcut": "141 × 2.5 + 1 = 353.5.",
        "commonMistakes": "Omitting the +1 addition.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_easy_21",
        "text": "What should come in place of question mark (?) in: 620, 632, 608, 644, 596, ?",
        "options": [
            "656",
            "536",
            "556",
            "646"
        ],
        "answer": "656",
        "solution": "Alternating addition and subtraction of multiples of 12: 620 + 12 = 632, 632 - 24 = 608, 608 + 36 = 644, 644 - 48 = 596, 596 + 60 = 656.",
        "formula": "d_n = (-1)^{n+1} × 12n.",
        "shortcut": "596 + 60 = 656.",
        "commonMistakes": "Subtracting 60 instead of adding 60.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "alternating_signs",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_22",
        "text": "What should come in place of question mark (?) in: 15, 25, 40, 65, ?, 195",
        "options": [
            "105",
            "115",
            "90",
            "120"
        ],
        "answer": "105",
        "solution": "Sum of two preceding terms: 15 + 25 = 40, 25 + 40 = 65, 40 + 65 = 105, 65 + 105 = 170 (or difference series 10, 15, 25, 40: 65 + 40 = 105, 105 + 65 = 170/195).",
        "formula": "Fibonacci summation: T_n = T_{n-1} + T_{n-2}.",
        "shortcut": "40 + 65 = 105.",
        "commonMistakes": "Adding 25 instead of 40.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "fibonacci",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_expert_7",
        "text": "What should come in place of question mark (?) in: 120, 320, ?, 2070, 5195, 13007.5",
        "options": [
            "820",
            "800",
            "920",
            "850"
        ],
        "answer": "820",
        "solution": "Pattern is ×2.5 + 20: 120 × 2.5 + 20 = 320, 320 × 2.5 + 20 = 820, 820 × 2.5 + 20 = 2070, 2070 × 2.5 + 20 = 5195, 5195 × 2.5 + 20 = 13007.5.",
        "formula": "T_n = 2.5 × T_{n-1} + 20.",
        "shortcut": "320 × 2.5 + 20 = 820.",
        "commonMistakes": "Omitting the +20 constant addition.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_easy_23",
        "text": "What should come in place of question mark (?) in: 27, 38, 71, 126, 203, ?",
        "options": [
            "302",
            "212",
            "202",
            "301"
        ],
        "answer": "302",
        "solution": "The differences are odd multiples of 11: 38 - 27 = 11 (11×1), 71 - 38 = 33 (11×3), 126 - 71 = 55 (11×5), 203 - 126 = 77 (11×7), next difference = 11 × 9 = 99. 203 + 99 = 302.",
        "formula": "d_n = 11(2n - 1).",
        "shortcut": "203 + 99 = 302.",
        "commonMistakes": "Adding 88 instead of 99.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "odd_multiples",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_24",
        "text": "What should come in place of question mark (?) in: 435, 354, 282, 219, 165, ?",
        "options": [
            "120",
            "103",
            "112",
            "130"
        ],
        "answer": "120",
        "solution": "The subtractions decrease by 9 at each step (-81, -72, -63, -54, -45): 435 - 81 = 354, 354 - 72 = 282, 282 - 63 = 219, 219 - 54 = 165, 165 - 45 = 120.",
        "formula": "d_n = -(90 - 9n).",
        "shortcut": "165 - 45 = 120.",
        "commonMistakes": "Subtracting 36 instead of 45.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "decreasing_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_21",
        "text": "What should come in place of question mark (?) in: 4, 200, 369, 513, 634, ?",
        "options": [
            "734",
            "788",
            "715",
            "755"
        ],
        "answer": "734",
        "solution": "The differences are decreasing squares (+14^2, +13^2, +12^2, +11^2, +10^2): 4 + 196 = 200, 200 + 169 = 369, 369 + 144 = 513, 513 + 121 = 634, 634 + 100 = 734.",
        "formula": "d_n = (15 - n)^2.",
        "shortcut": "634 + 100 = 734.",
        "commonMistakes": "Adding 81 (9^2) instead of 100 (10^2).",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "decreasing_squares",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_13",
        "text": "What should come next in the following continuous number series: 9 7 5 3 1 1 8 6 4 2 2 9 7 5 3 1 8 6 4 2 2 9 7 5 3 1 8 6 4 2 9 7 5 ...? [Corporation Bank PO]",
        "options": [
            "3",
            "1",
            "5",
            "8"
        ],
        "answer": "3",
        "solution": "The series alternates between descending odd sequence (9, 7, 5, 3, 1) and descending even sequence (8, 6, 4, 2). Following the digits 9, 7, 5, the next digit in the odd sequence is 3.",
        "formula": "Continuous cyclic sequence pattern.",
        "shortcut": "Odd sequence cycle: 9, 7, 5 -> 3.",
        "commonMistakes": "Selecting 1 or 8 by skipping ahead.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "repeating_pattern",
            "bank_po",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_14",
        "text": "What should come next in the number series: 9 8 7 6 1 2 3 4 5 9 8 7 1 2 3 4 5 9 8 7 1 2 3 4 9 8 ...?",
        "options": [
            "7",
            "1",
            "2",
            "5"
        ],
        "answer": "7",
        "solution": "The sequence alternates between decreasing blocks (9 8 7 6...) and increasing blocks (1 2 3 4 5). After starting the new descending block 9, 8, the next number is 7.",
        "formula": "Alternating ascending/descending cyclic pattern.",
        "shortcut": "Descending block: 9, 8 -> 7.",
        "commonMistakes": "Picking 1 from the ascending block prematurely.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "repeating_pattern",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_medium_22",
        "text": "What should come in place of the question mark (?) in: 32, 49, 83, 151, 287, 559, ? [Andhra Bank PO]",
        "options": [
            "1103",
            "1118",
            "979",
            "1120"
        ],
        "answer": "1103",
        "solution": "The differences double at each step (+17, +34, +68, +136, +272, +544): 32+17=49, 49+34=83, 83+68=151, 151+136=287, 287+272=559, 559+544=1103.",
        "formula": "d_n = 17 × 2^{n-1}.",
        "shortcut": "559 + 544 = 1103.",
        "commonMistakes": "Adding 272 again instead of doubling to 544.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "andhra_bank",
            "bank_po",
            "doubling_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_15",
        "text": "What should come in place of the question mark (?) in: 462, 552, 650, 756, 870, 992, ? [Andhra Bank PO]",
        "options": [
            "1122",
            "1040",
            "1132",
            "1050"
        ],
        "answer": "1122",
        "solution": "Each number is the product of two consecutive integers: 21×22=462, 23×24=552 (diff +90, +98, +106, +114, +122, +130): 462+90=552, 552+98=650, 650+106=756, 756+114=870, 870+122=992, 992+130 = 1122 (or 33×34 = 1122).",
        "formula": "T_n = (2n + 19)(2n + 20).",
        "shortcut": "992 + 130 = 1122.",
        "commonMistakes": "Adding 122 instead of incrementing difference to 130.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "consecutive_products",
            "bank_po",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_beginner_15",
        "text": "What should come in place of question mark (?) in: 15, 18, 16, 19, 17, 20, ? [Andhra Bank PO]",
        "options": [
            "18",
            "23",
            "22",
            "16"
        ],
        "answer": "18",
        "solution": "Alternating pattern of +3, -2, +3, -2, +3, -2: 15+3=18, 18-2=16, 16+3=19, 19-2=17, 17+3=20, 20-2=18.",
        "formula": "Alternating: +3, -2.",
        "shortcut": "20 - 2 = 18.",
        "commonMistakes": "Adding 3 to 20 to get 23.",
        "timeRequired": "30s",
        "similarQuestions": [],
        "difficulty": "beginner",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "alternating_signs",
            "beginner"
        ]
    },
    {
        "id": "aptitude_numbers_medium_23",
        "text": "What should come in place of question mark (?) in: 1050, 420, 168, 67.2, 26.88, 10.752, ?",
        "options": [
            "4.3008",
            "6.5038",
            "4.4015",
            "5.6002"
        ],
        "answer": "4.3008",
        "solution": "Geometric progression with common ratio r = 0.4 (or division by 2.5): 1050 × 0.4 = 420, 420 × 0.4 = 168, 168 × 0.4 = 67.2, 67.2 × 0.4 = 26.88, 26.88 × 0.4 = 10.752, 10.752 × 0.4 = 4.3008.",
        "formula": "GP with r = 0.4.",
        "shortcut": "10.752 × 0.4 = 4.3008.",
        "commonMistakes": "Calculation error in decimal point placement.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "gp",
            "decimals",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_medium_24",
        "text": "What should come in place of question mark (?) in: 0, 6, 24, 60, 120, 210, ?",
        "options": [
            "336",
            "343",
            "280",
            "295"
        ],
        "answer": "336",
        "solution": "The pattern is n^3 - n: 1^3-1=0, 2^3-2=6, 3^3-3=24, 4^3-4=60, 5^3-5=120, 6^3-6=210, 7^3-7 = 343 - 7 = 336.",
        "formula": "T_n = n^3 - n.",
        "shortcut": "7^3 - 7 = 343 - 7 = 336.",
        "commonMistakes": "Forgetting to subtract 7 from 343.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "n3_minus_n",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_hard_16",
        "text": "What should come in place of question mark (?) in: 8, 10, 18, 44, 124, ? [Indian Overseas Bank PO]",
        "options": [
            "366",
            "344",
            "354",
            "356"
        ],
        "answer": "366",
        "solution": "The differences are (3^n - 1): 8 + (3^1 - 1) = 8+2 = 10, 10 + (3^2 - 1) = 10+8 = 18, 18 + (3^3 - 1) = 18+26 = 44, 44 + (3^4 - 1) = 44+80 = 124, 124 + (3^5 - 1) = 124 + 242 = 366.",
        "formula": "d_n = 3^n - 1.",
        "shortcut": "124 + 242 = 366.",
        "commonMistakes": "Adding 3^5 (243) without subtracting 1.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "iob",
            "bank_po",
            "powers_of_3",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_medium_25",
        "text": "What should come in place of question mark (?) in: 13, 25, 61, 121, 205, ? [Indian Overseas Bank PO]",
        "options": [
            "313",
            "323",
            "326",
            "324"
        ],
        "answer": "313",
        "solution": "The differences increase by 24 at each step (+12, +36, +60, +84, +108): 13+12=25, 25+36=61, 61+60=121, 121+84=205, 205+108=313.",
        "formula": "d_n = 12 + 24(n - 1).",
        "shortcut": "205 + 108 = 313.",
        "commonMistakes": "Adding 96 instead of 108.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "bank_po",
            "arithmetic_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_25",
        "text": "What should come in place of question mark (?) in: 656, 352, 200, 124, 86, ?",
        "options": [
            "67",
            "59",
            "62",
            "57"
        ],
        "answer": "67",
        "solution": "Differences halve at each step (-304, -152, -76, -38, -19): 656 - 304 = 352, 352 - 152 = 200, 200 - 76 = 124, 124 - 38 = 86, 86 - 19 = 67.",
        "formula": "d_n = -304 / 2^{n-1}.",
        "shortcut": "86 - 19 = 67.",
        "commonMistakes": "Subtracting 28 instead of 19.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "halving_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_26",
        "text": "What should come in place of question mark (?) in: 454, 472, 445, 463, 436, ?",
        "options": [
            "454",
            "436",
            "456",
            "434"
        ],
        "answer": "454",
        "solution": "Alternating pattern of +18, -27, +18, -27, +18: 454 + 18 = 472, 472 - 27 = 445, 445 + 18 = 463, 463 - 27 = 436, 436 + 18 = 454.",
        "formula": "Alternating: +18, -27.",
        "shortcut": "436 + 18 = 454.",
        "commonMistakes": "Subtracting 27 instead of adding 18.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "alternating",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_expert_8",
        "text": "What should come in place of question mark (?) in: 12, 18, 36, 102, 360, ?",
        "options": [
            "1386",
            "1364",
            "1384",
            "1376"
        ],
        "answer": "1386",
        "solution": "Differences are 6, 18, 66, 258. Second order differences are 12, 48, 192 (quadrupling at each step: ×4). Next second diff = 192 × 4 = 768 -> next first diff = 258 + 768 = 1026. Next term = 360 + 1026 = 1386.",
        "formula": "Second order difference: d2_n = 12 × 4^{n-1}.",
        "shortcut": "360 + (258 + 768) = 1386.",
        "commonMistakes": "Assuming geometric ratios directly on first order.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "higher_order_diff",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_easy_27",
        "text": "What should come in place of question mark (?) in: 8, 11, 20, 47, 128, ? [Corporation Bank PO]",
        "options": [
            "371",
            "483",
            "488",
            "397"
        ],
        "answer": "371",
        "solution": "Differences are powers of 3 (+3^1, +3^2, +3^3, +3^4, +3^5): 8+3=11, 11+9=20, 20+27=47, 47+81=128, 128+243=371.",
        "formula": "d_n = 3^n.",
        "shortcut": "128 + 243 = 371.",
        "commonMistakes": "Adding 162 instead of 243.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "powers_of_3",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_easy_28",
        "text": "What should come in place of question mark (?) in: 71, 78, 99, 134, 183, ? [Corporation Bank PO]",
        "options": [
            "246",
            "253",
            "239",
            "260"
        ],
        "answer": "246",
        "solution": "Differences are consecutive odd multiples of 7 (+7, +21, +35, +49, +63): 71+7=78, 78+21=99, 99+35=134, 134+49=183, 183+63=246.",
        "formula": "d_n = 7(2n - 1).",
        "shortcut": "183 + 63 = 246.",
        "commonMistakes": "Adding 56 instead of 63.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 5,
        "tags": [
            "numbers",
            "series",
            "multiples_of_7",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_26",
        "text": "What should come in place of question mark (?) in: 342, 337.5, 328.5, 315, 297, ?",
        "options": [
            "274.5",
            "265.5",
            "270",
            "260"
        ],
        "answer": "274.5",
        "solution": "Differences decrease by multiples of 4.5 (-4.5, -9.0, -13.5, -18.0, -22.5): 342 - 4.5 = 337.5, 337.5 - 9.0 = 328.5, 328.5 - 13.5 = 315, 315 - 18.0 = 297, 297 - 22.5 = 274.5.",
        "formula": "d_n = -4.5n.",
        "shortcut": "297 - 22.5 = 274.5.",
        "commonMistakes": "Subtracting 27 instead of 22.5.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 3,
        "tags": [
            "numbers",
            "series",
            "decimal_diff",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_expert_9",
        "text": "What should come in place of question mark (?) in: 161, 164, 179, 242, 497, ?",
        "options": [
            "1520",
            "1540",
            "1480",
            "1440"
        ],
        "answer": "1520",
        "solution": "Differences are (4^n - 1): 161 + (4^1 - 1) = 164, 164 + (4^2 - 1) = 179, 179 + (4^3 - 1) = 242, 242 + (4^4 - 1) = 497, 497 + (4^5 - 1) = 497 + (1024 - 1) = 497 + 1023 = 1520.",
        "formula": "d_n = 4^n - 1.",
        "shortcut": "497 + 1023 = 1520.",
        "commonMistakes": "Adding 4^5 directly without subtracting 1.",
        "timeRequired": "120s",
        "similarQuestions": [],
        "difficulty": "expert",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "powers_of_4",
            "expert"
        ]
    },
    {
        "id": "aptitude_numbers_easy_29",
        "text": "What should come in place of question mark (?) in: 239, 254, 284, 344, 464, ?",
        "options": [
            "704",
            "726",
            "716",
            "724"
        ],
        "answer": "704",
        "solution": "Differences double at each step (+15, +30, +60, +120, +240): 239+15=254, 254+30=284, 284+60=344, 344+120=464, 464+240=704.",
        "formula": "d_n = 15 × 2^{n-1}.",
        "shortcut": "464 + 240 = 704.",
        "commonMistakes": "Adding 180 instead of 240.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "doubling_diff",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_hard_17",
        "text": "Find out the wrong number in: 3601, 3602, 1803, 604, 154, 36, 12 [SBI (Associates) PO]",
        "options": [
            "154",
            "3602",
            "1803",
            "604"
        ],
        "answer": "154",
        "solution": "Pattern is (term ÷ n + n): 3601 ÷ 1 + 1 = 3602, 3602 ÷ 2 + 2 = 1803, 1803 ÷ 3 + 3 = 604, 604 ÷ 4 + 4 = 151 + 4 = 155 (given 154), 155 ÷ 5 + 5 = 36, 36 ÷ 6 + 6 = 12. Thus, 154 is wrong.",
        "formula": "T_n = T_{n-1} / n + n.",
        "shortcut": "604 ÷ 4 + 4 = 155 != 154.",
        "commonMistakes": "Missing the +n term during division.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 6,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "sbi_po",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_hard_18",
        "text": "Find out the wrong number in: 4, 12, 42, 196, 1005, 6066, 42511",
        "options": [
            "196",
            "12",
            "42",
            "1005"
        ],
        "answer": "196",
        "solution": "Pattern is ×2+4, ×3+6, ×4+8, ×5+10, ×6+12, ×7+14: 4×2+4=12, 12×3+6=42, 42×4+8 = 176 (given 196), 176×5+10 = 890... (or with fractional multipliers ×2.5+2, ×3.0+6... 196 is the defective term). Hence, 196 is wrong.",
        "formula": "T_n = T_{n-1} × n + 2n.",
        "shortcut": "42 × 4 + 8 = 176 != 196.",
        "commonMistakes": "Assuming 42 is wrong.",
        "timeRequired": "90s",
        "similarQuestions": [],
        "difficulty": "hard",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "hard"
        ]
    },
    {
        "id": "aptitude_numbers_easy_30",
        "text": "Find out the wrong number in: 2, 8, 12, 20, 30, 42, 56",
        "options": [
            "8",
            "42",
            "30",
            "20"
        ],
        "answer": "8",
        "solution": "The pattern is n(n + 1): 1×2=2, 2×3=6 (given 8), 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8=56. Therefore, 8 is the wrong term.",
        "formula": "T_n = n(n + 1).",
        "shortcut": "2 × 3 = 6 != 8.",
        "commonMistakes": "Assuming 12 is wrong.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 1,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "consecutive_products",
            "easy"
        ]
    },
    {
        "id": "aptitude_numbers_medium_27",
        "text": "Find out the wrong number in: 32, 16, 24, 65, 210, 945, 5197.5",
        "options": [
            "65",
            "945",
            "16",
            "24"
        ],
        "answer": "65",
        "solution": "Multipliers increase by 1.0 at each step: 32 × 0.5 = 16, 16 × 1.5 = 24, 24 × 2.5 = 60 (given 65), 60 × 3.5 = 210, 210 × 4.5 = 945, 945 × 5.5 = 5197.5. Thus, 65 is wrong and should be 60.",
        "formula": "Multipliers: ×0.5, ×1.5, ×2.5, ×3.5, ×4.5, ×5.5.",
        "shortcut": "24 × 2.5 = 60 != 65.",
        "commonMistakes": "Thinking 16 or 210 is wrong.",
        "timeRequired": "60s",
        "similarQuestions": [],
        "difficulty": "medium",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 4,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "decimal_multipliers",
            "medium"
        ]
    },
    {
        "id": "aptitude_numbers_easy_31",
        "text": "Find out the wrong number in: 7, 13, 25, 49, 97, 194, 385",
        "options": [
            "194",
            "13",
            "49",
            "97"
        ],
        "answer": "194",
        "solution": "Pattern is ×2 - 1: 7×2-1=13, 13×2-1=25, 25×2-1=49, 49×2-1=97, 97×2-1 = 193 (given 194), 193×2-1 = 385. Thus, 194 is wrong.",
        "formula": "T_n = 2 × T_{n-1} - 1.",
        "shortcut": "97 × 2 - 1 = 193 != 194.",
        "commonMistakes": "Assuming differences are doubling strictly without -1.",
        "timeRequired": "45s",
        "similarQuestions": [],
        "difficulty": "easy",
        "topic": "numbers",
        "subject": "aptitude",
        "patternType": 2,
        "tags": [
            "numbers",
            "series",
            "wrong_number",
            "easy"
        ]
    }
];
