if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['aptitude_numbers'] = [
    {
        "id": "apt_numbers_1",
        "text": "Find the sum of the first 7 terms of a geometric progression starting with 9 and having a common ratio of 3.",
        "options": [
            "9832",
            "9837",
            "9847",
            "9862"
        ],
        "answer": "9837",
        "difficulty": "beginner",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=9, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 9 * (3^7 - 1) / (3 - 1) = 9837.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^7 = 2187, subtract 1, multiply by 9, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_2",
        "text": "If the first term of an arithmetic progression is 7 and the common difference is 8, find the sum of the first 37 terms.",
        "options": [
            "5572",
            "5637",
            "5607",
            "5587"
        ],
        "answer": "5587",
        "difficulty": "beginner",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=7, d=8, n=37.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_37 = (37/2) * [2*7 + (37-1)*8] = 5587.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_37 = 18.5 * (14 + 36*8) = 5587.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_3",
        "text": "What is the smallest number that must be added to 1489 so that the resulting number is exactly divisible by 11?",
        "options": [
            "8",
            "9",
            "1",
            "7"
        ],
        "answer": "7",
        "difficulty": "beginner",
        "patternType": 4,
        "solution": "Step 1: Divide 1489 by 11 to find the remainder. 1489 % 11 = 4.\nStep 2: The required number to add is Divisor - Remainder = 11 - 4 = 7.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 1489 / 11 which is 4. Subtraction gives 7.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_4",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 5 and 11.",
        "options": [
            "66",
            "55",
            "60",
            "56"
        ],
        "answer": "55",
        "difficulty": "beginner",
        "patternType": 5,
        "solution": "Step 1: Since 5 and 11 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 5 * 11 = 55.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 5 * 11 = 55.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_5",
        "text": "Find the unit digit of (3297)^{1758}.",
        "options": [
            "3",
            "1",
            "9",
            "5"
        ],
        "answer": "9",
        "difficulty": "beginner",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 1758 by 4 to get remainder 2.\nStep 3: Calculate base^remainder = 7^2 = 49. Unit digit is 9.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1758 % 4 = 2. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_6",
        "text": "Find the sum of the first 7 terms of a geometric progression starting with 18 and having a common ratio of 3.",
        "options": [
            "19669",
            "19699",
            "19674",
            "19684"
        ],
        "answer": "19674",
        "difficulty": "beginner",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=18, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 18 * (3^7 - 1) / (3 - 1) = 19674.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^7 = 2187, subtract 1, multiply by 18, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_7",
        "text": "If the first term of an arithmetic progression is 6 and the common difference is 6, find the sum of the first 30 terms.",
        "options": [
            "2810",
            "2790",
            "2775",
            "2840"
        ],
        "answer": "2790",
        "difficulty": "beginner",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=6, d=6, n=30.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_30 = (30/2) * [2*6 + (30-1)*6] = 2790.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_30 = 15 * (12 + 29*6) = 2790.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_8",
        "text": "What is the smallest number that must be added to 9475 so that the resulting number is exactly divisible by 13?",
        "options": [
            "2",
            "4",
            "3",
            "7"
        ],
        "answer": "2",
        "difficulty": "beginner",
        "patternType": 4,
        "solution": "Step 1: Divide 9475 by 13 to find the remainder. 9475 % 13 = 11.\nStep 2: The required number to add is Divisor - Remainder = 13 - 11 = 2.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 9475 / 13 which is 11. Subtraction gives 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_9",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 3 and 11.",
        "options": [
            "36",
            "34",
            "33",
            "44"
        ],
        "answer": "33",
        "difficulty": "beginner",
        "patternType": 5,
        "solution": "Step 1: Since 3 and 11 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 3 * 11 = 33.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 3 * 11 = 33.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_10",
        "text": "Find the unit digit of (4663)^{844}.",
        "options": [
            "7",
            "5",
            "3",
            "1"
        ],
        "answer": "1",
        "difficulty": "beginner",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 3.\nStep 2: Cyclicity of base is 4. Divide power 844 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 3^4 = 81. Unit digit is 1.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 844 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_11",
        "text": "Find the sum of the first 7 terms of a geometric progression starting with 7 and having a common ratio of 3.",
        "options": [
            "7661",
            "7676",
            "7651",
            "7646"
        ],
        "answer": "7651",
        "difficulty": "easy",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=7, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 7 * (3^7 - 1) / (3 - 1) = 7651.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^7 = 2187, subtract 1, multiply by 7, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_12",
        "text": "If the first term of an arithmetic progression is 4 and the common difference is 5, find the sum of the first 45 terms.",
        "options": [
            "5130",
            "5150",
            "5180",
            "5115"
        ],
        "answer": "5130",
        "difficulty": "easy",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=4, d=5, n=45.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_45 = (45/2) * [2*4 + (45-1)*5] = 5130.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_45 = 22.5 * (8 + 44*5) = 5130.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_13",
        "text": "What is the smallest number that must be added to 6902 so that the resulting number is exactly divisible by 13?",
        "options": [
            "1",
            "3",
            "2",
            "6"
        ],
        "answer": "1",
        "difficulty": "easy",
        "patternType": 4,
        "solution": "Step 1: Divide 6902 by 13 to find the remainder. 6902 % 13 = 12.\nStep 2: The required number to add is Divisor - Remainder = 13 - 12 = 1.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 6902 / 13 which is 12. Subtraction gives 1.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_14",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 2 and 11.",
        "options": [
            "33",
            "22",
            "23",
            "24"
        ],
        "answer": "22",
        "difficulty": "easy",
        "patternType": 5,
        "solution": "Step 1: Since 2 and 11 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 2 * 11 = 22.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 2 * 11 = 22.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_15",
        "text": "Find the unit digit of (1002)^{1616}.",
        "options": [
            "0",
            "2",
            "6",
            "8"
        ],
        "answer": "6",
        "difficulty": "easy",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 2.\nStep 2: Cyclicity of base is 4. Divide power 1616 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 2^4 = 16. Unit digit is 6.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1616 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_16",
        "text": "Find the sum of the first 5 terms of a geometric progression starting with 13 and having a common ratio of 2.",
        "options": [
            "428",
            "398",
            "403",
            "413"
        ],
        "answer": "403",
        "difficulty": "easy",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=13, ratio r=2.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 13 * (2^5 - 1) / (2 - 1) = 403.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 2^5 = 32, subtract 1, multiply by 13, divide by 1.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_17",
        "text": "If the first term of an arithmetic progression is 8 and the common difference is 7, find the sum of the first 23 terms.",
        "options": [
            "1975",
            "2005",
            "1955",
            "1940"
        ],
        "answer": "1955",
        "difficulty": "easy",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=8, d=7, n=23.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_23 = (23/2) * [2*8 + (23-1)*7] = 1955.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_23 = 11.5 * (16 + 22*7) = 1955.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_18",
        "text": "What is the smallest number that must be added to 5892 so that the resulting number is exactly divisible by 13?",
        "options": [
            "2",
            "12",
            "10",
            "11"
        ],
        "answer": "10",
        "difficulty": "easy",
        "patternType": 4,
        "solution": "Step 1: Divide 5892 by 13 to find the remainder. 5892 % 13 = 3.\nStep 2: The required number to add is Divisor - Remainder = 13 - 3 = 10.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 5892 / 13 which is 3. Subtraction gives 10.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_19",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 2 and 13.",
        "options": [
            "39",
            "28",
            "26",
            "27"
        ],
        "answer": "26",
        "difficulty": "easy",
        "patternType": 5,
        "solution": "Step 1: Since 2 and 13 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 2 * 13 = 26.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 2 * 13 = 26.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_20",
        "text": "Find the unit digit of (1897)^{653}.",
        "options": [
            "3",
            "1",
            "9",
            "7"
        ],
        "answer": "7",
        "difficulty": "easy",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 653 by 4 to get remainder 1.\nStep 3: Calculate base^remainder = 7^1 = 7. Unit digit is 7.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 653 % 4 = 1. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_21",
        "text": "Find the sum of the first 7 terms of a geometric progression starting with 6 and having a common ratio of 2.",
        "options": [
            "787",
            "762",
            "757",
            "772"
        ],
        "answer": "762",
        "difficulty": "medium",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=6, ratio r=2.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 6 * (2^7 - 1) / (2 - 1) = 762.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 2^7 = 128, subtract 1, multiply by 6, divide by 1.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_22",
        "text": "If the first term of an arithmetic progression is 5 and the common difference is 4, find the sum of the first 25 terms.",
        "options": [
            "1310",
            "1375",
            "1325",
            "1345"
        ],
        "answer": "1325",
        "difficulty": "medium",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=5, d=4, n=25.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_25 = (25/2) * [2*5 + (25-1)*4] = 1325.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_25 = 12.5 * (10 + 24*4) = 1325.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_23",
        "text": "What is the smallest number that must be added to 4307 so that the resulting number is exactly divisible by 11?",
        "options": [
            "5",
            "7",
            "6",
            "10"
        ],
        "answer": "5",
        "difficulty": "medium",
        "patternType": 4,
        "solution": "Step 1: Divide 4307 by 11 to find the remainder. 4307 % 11 = 6.\nStep 2: The required number to add is Divisor - Remainder = 11 - 6 = 5.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 4307 / 11 which is 6. Subtraction gives 5.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_24",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 2 and 13.",
        "options": [
            "26",
            "27",
            "39",
            "28"
        ],
        "answer": "26",
        "difficulty": "medium",
        "patternType": 5,
        "solution": "Step 1: Since 2 and 13 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 2 * 13 = 26.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 2 * 13 = 26.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_25",
        "text": "Find the unit digit of (4517)^{922}.",
        "options": [
            "3",
            "5",
            "1",
            "9"
        ],
        "answer": "9",
        "difficulty": "medium",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 922 by 4 to get remainder 2.\nStep 3: Calculate base^remainder = 7^2 = 49. Unit digit is 9.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 922 % 4 = 2. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_26",
        "text": "Find the sum of the first 5 terms of a geometric progression starting with 17 and having a common ratio of 3.",
        "options": [
            "2067",
            "2052",
            "2082",
            "2057"
        ],
        "answer": "2057",
        "difficulty": "medium",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=17, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 17 * (3^5 - 1) / (3 - 1) = 2057.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^5 = 243, subtract 1, multiply by 17, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_27",
        "text": "If the first term of an arithmetic progression is 5 and the common difference is 8, find the sum of the first 29 terms.",
        "options": [
            "3393",
            "3443",
            "3378",
            "3413"
        ],
        "answer": "3393",
        "difficulty": "medium",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=5, d=8, n=29.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_29 = (29/2) * [2*5 + (29-1)*8] = 3393.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_29 = 14.5 * (10 + 28*8) = 3393.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_28",
        "text": "What is the smallest number that must be added to 9218 so that the resulting number is exactly divisible by 7?",
        "options": [
            "3",
            "2",
            "1",
            "6"
        ],
        "answer": "1",
        "difficulty": "medium",
        "patternType": 4,
        "solution": "Step 1: Divide 9218 by 7 to find the remainder. 9218 % 7 = 6.\nStep 2: The required number to add is Divisor - Remainder = 7 - 6 = 1.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 9218 / 7 which is 6. Subtraction gives 1.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_29",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 5 and 7.",
        "options": [
            "40",
            "36",
            "35",
            "42"
        ],
        "answer": "35",
        "difficulty": "medium",
        "patternType": 5,
        "solution": "Step 1: Since 5 and 7 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 5 * 7 = 35.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 5 * 7 = 35.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_30",
        "text": "Find the unit digit of (1737)^{564}.",
        "options": [
            "7",
            "1",
            "5",
            "3"
        ],
        "answer": "1",
        "difficulty": "medium",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 564 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 7^4 = 2401. Unit digit is 1.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 564 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_31",
        "text": "Find the sum of the first 8 terms of a geometric progression starting with 8 and having a common ratio of 3.",
        "options": [
            "26250",
            "26235",
            "26265",
            "26240"
        ],
        "answer": "26240",
        "difficulty": "intermediate",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=8, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 8 * (3^8 - 1) / (3 - 1) = 26240.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^8 = 6561, subtract 1, multiply by 8, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_32",
        "text": "If the first term of an arithmetic progression is 4 and the common difference is 6, find the sum of the first 27 terms.",
        "options": [
            "2214",
            "2264",
            "2234",
            "2199"
        ],
        "answer": "2214",
        "difficulty": "intermediate",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=4, d=6, n=27.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_27 = (27/2) * [2*4 + (27-1)*6] = 2214.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_27 = 13.5 * (8 + 26*6) = 2214.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_33",
        "text": "What is the smallest number that must be added to 4257 so that the resulting number is exactly divisible by 7?",
        "options": [
            "4",
            "6",
            "1",
            "0"
        ],
        "answer": "6",
        "difficulty": "intermediate",
        "patternType": 4,
        "solution": "Step 1: Divide 4257 by 7 to find the remainder. 4257 % 7 = 1.\nStep 2: The required number to add is Divisor - Remainder = 7 - 1 = 6.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 4257 / 7 which is 1. Subtraction gives 6.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_34",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 3 and 13.",
        "options": [
            "39",
            "52",
            "40",
            "42"
        ],
        "answer": "39",
        "difficulty": "intermediate",
        "patternType": 5,
        "solution": "Step 1: Since 3 and 13 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 3 * 13 = 39.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 3 * 13 = 39.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_35",
        "text": "Find the unit digit of (4087)^{1708}.",
        "options": [
            "1",
            "7",
            "3",
            "5"
        ],
        "answer": "1",
        "difficulty": "intermediate",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 1708 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 7^4 = 2401. Unit digit is 1.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1708 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_36",
        "text": "Find the sum of the first 7 terms of a geometric progression starting with 9 and having a common ratio of 3.",
        "options": [
            "9862",
            "9837",
            "9832",
            "9847"
        ],
        "answer": "9837",
        "difficulty": "intermediate",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=9, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 9 * (3^7 - 1) / (3 - 1) = 9837.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^7 = 2187, subtract 1, multiply by 9, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_37",
        "text": "If the first term of an arithmetic progression is 9 and the common difference is 7, find the sum of the first 37 terms.",
        "options": [
            "5015",
            "5045",
            "4980",
            "4995"
        ],
        "answer": "4995",
        "difficulty": "intermediate",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=9, d=7, n=37.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_37 = (37/2) * [2*9 + (37-1)*7] = 4995.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_37 = 18.5 * (18 + 36*7) = 4995.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_38",
        "text": "What is the smallest number that must be added to 2409 so that the resulting number is exactly divisible by 11?",
        "options": [
            "2",
            "1",
            "5",
            "11"
        ],
        "answer": "11",
        "difficulty": "intermediate",
        "patternType": 4,
        "solution": "Step 1: Divide 2409 by 11 to find the remainder. 2409 % 11 = 0.\nStep 2: The required number to add is Divisor - Remainder = 11 - 0 = 11.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 2409 / 11 which is 0. Subtraction gives 11.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_39",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 3 and 11.",
        "options": [
            "36",
            "33",
            "34",
            "44"
        ],
        "answer": "33",
        "difficulty": "intermediate",
        "patternType": 5,
        "solution": "Step 1: Since 3 and 11 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 3 * 11 = 33.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 3 * 11 = 33.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_40",
        "text": "Find the unit digit of (2047)^{1181}.",
        "options": [
            "3",
            "9",
            "1",
            "7"
        ],
        "answer": "7",
        "difficulty": "intermediate",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 1181 by 4 to get remainder 1.\nStep 3: Calculate base^remainder = 7^1 = 7. Unit digit is 7.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1181 % 4 = 1. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_41",
        "text": "Find the sum of the first 5 terms of a geometric progression starting with 18 and having a common ratio of 2.",
        "options": [
            "568",
            "553",
            "583",
            "558"
        ],
        "answer": "558",
        "difficulty": "intermediate",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=18, ratio r=2.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 18 * (2^5 - 1) / (2 - 1) = 558.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 2^5 = 32, subtract 1, multiply by 18, divide by 1.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_42",
        "text": "If the first term of an arithmetic progression is 2 and the common difference is 5, find the sum of the first 33 terms.",
        "options": [
            "2691",
            "2756",
            "2726",
            "2706"
        ],
        "answer": "2706",
        "difficulty": "intermediate",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=2, d=5, n=33.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_33 = (33/2) * [2*2 + (33-1)*5] = 2706.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_33 = 16.5 * (4 + 32*5) = 2706.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_43",
        "text": "What is the smallest number that must be added to 4864 so that the resulting number is exactly divisible by 13?",
        "options": [
            "12",
            "3",
            "0",
            "11"
        ],
        "answer": "11",
        "difficulty": "intermediate",
        "patternType": 4,
        "solution": "Step 1: Divide 4864 by 13 to find the remainder. 4864 % 13 = 2.\nStep 2: The required number to add is Divisor - Remainder = 13 - 2 = 11.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 4864 / 13 which is 2. Subtraction gives 11.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_44",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 5 and 11.",
        "options": [
            "60",
            "66",
            "56",
            "55"
        ],
        "answer": "55",
        "difficulty": "intermediate",
        "patternType": 5,
        "solution": "Step 1: Since 5 and 11 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 5 * 11 = 55.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 5 * 11 = 55.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_45",
        "text": "Find the unit digit of (3827)^{1772}.",
        "options": [
            "7",
            "1",
            "5",
            "3"
        ],
        "answer": "1",
        "difficulty": "intermediate",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 7.\nStep 2: Cyclicity of base is 4. Divide power 1772 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 7^4 = 2401. Unit digit is 1.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1772 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_46",
        "text": "Find the sum of the first 5 terms of a geometric progression starting with 19 and having a common ratio of 3.",
        "options": [
            "2294",
            "2309",
            "2299",
            "2324"
        ],
        "answer": "2299",
        "difficulty": "intermediate",
        "patternType": 2,
        "solution": "Step 1: Identify geometric series: first term a=19, ratio r=3.\nStep 2: S_n = a * (r^n - 1) / (r - 1).\nStep 3: Plug values: 19 * (3^5 - 1) / (3 - 1) = 2299.",
        "formula": "GP Sum: S_n = a(r^n - 1) / (r - 1) for r > 1.",
        "shortcut": "Calculate 3^5 = 243, subtract 1, multiply by 19, divide by 2.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_47",
        "text": "If the first term of an arithmetic progression is 2 and the common difference is 7, find the sum of the first 30 terms.",
        "options": [
            "3125",
            "3155",
            "3105",
            "3090"
        ],
        "answer": "3105",
        "difficulty": "intermediate",
        "patternType": 3,
        "solution": "Step 1: Identify terms: a=2, d=7, n=30.\nStep 2: Use AP sum formula: S_n = (n/2) * [2a + (n-1)d].\nStep 3: S_30 = (30/2) * [2*2 + (30-1)*7] = 3105.",
        "formula": "AP Sum: S_n = (n/2) * [2a + (n-1)d]",
        "shortcut": "S_30 = 15 * (4 + 29*7) = 3105.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_48",
        "text": "What is the smallest number that must be added to 1761 so that the resulting number is exactly divisible by 13?",
        "options": [
            "7",
            "8",
            "9",
            "12"
        ],
        "answer": "7",
        "difficulty": "intermediate",
        "patternType": 4,
        "solution": "Step 1: Divide 1761 by 13 to find the remainder. 1761 % 13 = 6.\nStep 2: The required number to add is Divisor - Remainder = 13 - 6 = 7.",
        "formula": "Addition for Divisibility: Number to add = Divisor - (Dividend % Divisor)",
        "shortcut": "Find remainder of 1761 / 13 which is 6. Subtraction gives 7.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_49",
        "text": "Find the lowest common multiple (LCM) of two prime numbers 3 and 13.",
        "options": [
            "52",
            "42",
            "40",
            "39"
        ],
        "answer": "39",
        "difficulty": "intermediate",
        "patternType": 5,
        "solution": "Step 1: Since 3 and 13 are prime numbers, they have no common factors other than 1.\nStep 2: The LCM of prime numbers is simply their product: 3 * 13 = 39.",
        "formula": "LCM of Primes: LCM(a, b) = a * b",
        "shortcut": "Multiply the prime numbers: 3 * 13 = 39.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    },
    {
        "id": "apt_numbers_50",
        "text": "Find the unit digit of (583)^{1572}.",
        "options": [
            "7",
            "5",
            "1",
            "3"
        ],
        "answer": "1",
        "difficulty": "intermediate",
        "patternType": 1,
        "solution": "Step 1: Extract base unit digit which is 3.\nStep 2: Cyclicity of base is 4. Divide power 1572 by 4 to get remainder 0.\nStep 3: Calculate base^remainder = 3^4 = 81. Unit digit is 1.",
        "formula": "Cyclicity Rule: Unit digits of base repeat in cycles of 4.",
        "shortcut": "Divide power by 4, take remainder: 1572 % 4 = 0. Calculate unit digit.",
        "commonMistakes": "Incorrect arithmetic operations or misidentifying series variables.",
        "subject": "aptitude",
        "topic": "numbers"
    }
,
{
    "id": "apt_num_solved_15",
    "text": "The product of two numbers is 1728 and their HCF is 12. What is their LCM?",
    "options": [
        "120",
        "132",
        "144",
        "156"
    ],
    "answer": "144",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "Product of two numbers = HCF \u00d7 LCM.\n1728 = 12 \u00d7 LCM \u2192 LCM = 1728 / 12 = 144.",
    "formula": "HCF \u00d7 LCM = Product of two numbers",
    "shortcut": "1728 / 12 = 144.",
    "commonMistakes": "Multiplying 1728 by 12 instead of dividing.",
    "subject": "aptitude",
    "topic": "numbers"
},
{
    "id": "apt_num_solved_17",
    "text": "Find the next term in the series: 3, 9, 27, 81, __",
    "options": [
        "162",
        "216",
        "243",
        "324"
    ],
    "answer": "243",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "Each term is multiplied by 3 (Geometric Progression with r = 3).\nNext term = 81 \u00d7 3 = 243.",
    "formula": "T_n = a \u00d7 r^(n-1)",
    "shortcut": "81 \u00d7 3 = 243.",
    "commonMistakes": "Adding 54 instead of multiplying by 3.",
    "subject": "aptitude",
    "topic": "numbers"
},
{
    "id": "apt_num_solved_89",
    "text": "Evaluate: 25 \u00d7 4 + 150 \u00f7 3 - 5\u00b2.",
    "options": [
        "125",
        "135",
        "145",
        "150"
    ],
    "answer": "125",
    "difficulty": "easy",
    "patternType": 1,
    "solution": "Apply BODMAS rule:\n1. Exponents: 5\u00b2 = 25\n2. Division: 150 \u00f7 3 = 50\n3. Multiplication: 25 \u00d7 4 = 100\n4. Addition & Subtraction: 100 + 50 - 25 = 125.",
    "formula": "BODMAS Order: Brackets, Orders, Division/Multiplication, Addition/Subtraction",
    "shortcut": "100 + 50 - 25 = 125.",
    "commonMistakes": "Performing addition before division.",
    "subject": "aptitude",
    "topic": "numbers"
}
];
