/* ==========================================================================
   CODING_DATA.JS - Centralized Placement & LeetCode Coding Challenges Database (237 Problems)
   ========================================================================== */

const RAW_CHALLENGES = [
    {
        "id": "num_1",
        "cat": "numbers",
        "title": "Positive or Negative Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is positive, negative, or zero.",
        "prompts": [
            "Check N > 0, N < 0."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "Positive",
                "explanation": ""
            },
            {
                "input": [
                    "-12"
                ],
                "output": "Negative",
                "explanation": ""
            },
            {
                "input": [
                    "0"
                ],
                "output": "Zero",
                "explanation": ""
            }
        ],
        "sol": "If N > 0 Positive else if N < 0 Negative else Zero."
    },
    {
        "id": "num_2",
        "cat": "numbers",
        "title": "Even or Odd Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is even or odd.",
        "prompts": [
            "N % 2 == 0."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "Even",
                "explanation": ""
            },
            {
                "input": [
                    "7"
                ],
                "output": "Odd",
                "explanation": ""
            }
        ],
        "sol": "If N % 2 == 0 Even else Odd."
    },
    {
        "id": "num_3",
        "cat": "numbers",
        "title": "Sum of First N Natural Numbers",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sum of first N natural numbers.",
        "prompts": [
            "N * (N + 1) / 2."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "15",
                "explanation": ""
            }
        ],
        "sol": "Return N * (N + 1) / 2."
    },
    {
        "id": "num_4",
        "cat": "numbers",
        "title": "Sum of N Natural Numbers",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sum of first N numbers.",
        "prompts": [
            "N * (N + 1) / 2."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "55",
                "explanation": ""
            }
        ],
        "sol": "Return N * (N + 1) / 2."
    },
    {
        "id": "num_5",
        "cat": "numbers",
        "title": "Sum of Numbers in a Given Range",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Sum of numbers between L and R.",
        "prompts": [
            "Loop or formula."
        ],
        "tests": [
            {
                "input": [
                    "2 5"
                ],
                "output": "14",
                "explanation": ""
            }
        ],
        "sol": "Sum from L to R."
    },
    {
        "id": "num_6",
        "cat": "numbers",
        "title": "Greatest of Two Numbers",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find maximum of two numbers.",
        "prompts": [
            "max(A, B)."
        ],
        "tests": [
            {
                "input": [
                    "10 20"
                ],
                "output": "20",
                "explanation": ""
            }
        ],
        "sol": "Return max(A, B)."
    },
    {
        "id": "num_7",
        "cat": "numbers",
        "title": "Greatest of Three Numbers",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find maximum of three numbers.",
        "prompts": [
            "max(A, B, C)."
        ],
        "tests": [
            {
                "input": [
                    "10 25 15"
                ],
                "output": "25",
                "explanation": ""
            }
        ],
        "sol": "Return max(A, max(B, C))."
    },
    {
        "id": "num_8",
        "cat": "numbers",
        "title": "Leap Year or Not",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if year is leap year.",
        "prompts": [
            "Divisibility by 4, 100, 400."
        ],
        "tests": [
            {
                "input": [
                    "2024"
                ],
                "output": "Leap Year",
                "explanation": ""
            },
            {
                "input": [
                    "1900"
                ],
                "output": "Not a Leap Year",
                "explanation": ""
            }
        ],
        "sol": "Leap year check."
    },
    {
        "id": "num_9",
        "cat": "numbers",
        "title": "Prime Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is prime.",
        "prompts": [
            "Loop up to sqrt(N)."
        ],
        "tests": [
            {
                "input": [
                    "29"
                ],
                "output": "Prime",
                "explanation": ""
            },
            {
                "input": [
                    "15"
                ],
                "output": "Not Prime",
                "explanation": ""
            }
        ],
        "sol": "Prime check."
    },
    {
        "id": "num_10",
        "cat": "numbers",
        "title": "Prime Number Within a Given Range",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Primes between L and R.",
        "prompts": [
            "Check primes in range."
        ],
        "tests": [
            {
                "input": [
                    "10 20"
                ],
                "output": "11 13 17 19",
                "explanation": ""
            }
        ],
        "sol": "Primes in range."
    },
    {
        "id": "num_11",
        "cat": "numbers",
        "title": "Sum of Digits of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sum of all digits in N.",
        "prompts": [
            "N % 10 and N / 10."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "10",
                "explanation": ""
            }
        ],
        "sol": "Sum digits."
    },
    {
        "id": "num_12",
        "cat": "numbers",
        "title": "Reverse of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Reverse digits of N.",
        "prompts": [
            "rev * 10 + N % 10."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "4321",
                "explanation": ""
            }
        ],
        "sol": "Reverse digits."
    },
    {
        "id": "num_13",
        "cat": "numbers",
        "title": "Palindrome Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is palindrome.",
        "prompts": [
            "Compare N with reverse."
        ],
        "tests": [
            {
                "input": [
                    "121"
                ],
                "output": "Palindrome",
                "explanation": ""
            }
        ],
        "sol": "Palindrome check."
    },
    {
        "id": "num_14",
        "cat": "numbers",
        "title": "Armstrong Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sum of digits raised to digit count equals N.",
        "prompts": [
            "d^K sum."
        ],
        "tests": [
            {
                "input": [
                    "153"
                ],
                "output": "Armstrong",
                "explanation": ""
            }
        ],
        "sol": "Armstrong check."
    },
    {
        "id": "num_15",
        "cat": "numbers",
        "title": "Armstrong Number in a Given Range",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Armstrong numbers between L and R.",
        "prompts": [
            "Check Armstrong in range."
        ],
        "tests": [
            {
                "input": [
                    "100 200"
                ],
                "output": "153",
                "explanation": ""
            }
        ],
        "sol": "Armstrong range."
    },
    {
        "id": "num_16",
        "cat": "numbers",
        "title": "Fibonacci Series Upto Nth Term",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate N terms of Fibonacci.",
        "prompts": [
            "F(n) = F(n-1) + F(n-2)."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "0 1 1 2 3",
                "explanation": ""
            }
        ],
        "sol": "Fibonacci series."
    },
    {
        "id": "num_17",
        "cat": "numbers",
        "title": "Find Nth Term of Fibonacci Series",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find Nth Fibonacci term.",
        "prompts": [
            "DP / iteration."
        ],
        "tests": [
            {
                "input": [
                    "6"
                ],
                "output": "8",
                "explanation": ""
            }
        ],
        "sol": "Nth Fibonacci."
    },
    {
        "id": "num_18",
        "cat": "numbers",
        "title": "Factorial of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate N!.",
        "prompts": [
            "Product 1..N."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "120",
                "explanation": ""
            }
        ],
        "sol": "Factorial."
    },
    {
        "id": "num_19",
        "cat": "numbers",
        "title": "Power of a Number",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Calculate B^E.",
        "prompts": [
            "Pow logic."
        ],
        "tests": [
            {
                "input": [
                    "2 5"
                ],
                "output": "32",
                "explanation": ""
            }
        ],
        "sol": "B^E."
    },
    {
        "id": "num_20",
        "cat": "numbers",
        "title": "Factors of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find all factors of N.",
        "prompts": [
            "Divisors."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "1 2 3 4 6 12",
                "explanation": ""
            }
        ],
        "sol": "Factors."
    },
    {
        "id": "num_21",
        "cat": "numbers",
        "title": "Finding Prime Factors of a Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Prime factorization of N.",
        "prompts": [
            "Divide by primes."
        ],
        "tests": [
            {
                "input": [
                    "60"
                ],
                "output": "2 2 3 5",
                "explanation": ""
            }
        ],
        "sol": "Prime factors."
    },
    {
        "id": "num_22",
        "cat": "numbers",
        "title": "Strong Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sum of digit factorials equals N.",
        "prompts": [
            "Sum fact(d)."
        ],
        "tests": [
            {
                "input": [
                    "145"
                ],
                "output": "Strong Number",
                "explanation": ""
            }
        ],
        "sol": "Strong number check."
    },
    {
        "id": "num_23",
        "cat": "numbers",
        "title": "Perfect Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sum of proper divisors equals N.",
        "prompts": [
            "Sum proper divisors."
        ],
        "tests": [
            {
                "input": [
                    "28"
                ],
                "output": "Perfect Number",
                "explanation": ""
            }
        ],
        "sol": "Perfect number check."
    },
    {
        "id": "num_24",
        "cat": "numbers",
        "title": "Perfect Square",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is perfect square.",
        "prompts": [
            "sqrt(N)^2 == N."
        ],
        "tests": [
            {
                "input": [
                    "25"
                ],
                "output": "Perfect Square",
                "explanation": ""
            }
        ],
        "sol": "Square root test."
    },
    {
        "id": "num_25",
        "cat": "numbers",
        "title": "Automorphic Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "N^2 ends in N.",
        "prompts": [
            "N^2 % 10^K == N."
        ],
        "tests": [
            {
                "input": [
                    "25"
                ],
                "output": "Automorphic",
                "explanation": ""
            }
        ],
        "sol": "Automorphic check."
    },
    {
        "id": "num_26",
        "cat": "numbers",
        "title": "Harshad Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "N divisible by digit sum.",
        "prompts": [
            "N % sum(digits) == 0."
        ],
        "tests": [
            {
                "input": [
                    "18"
                ],
                "output": "Harshad Number",
                "explanation": ""
            }
        ],
        "sol": "Harshad check."
    },
    {
        "id": "num_27",
        "cat": "numbers",
        "title": "Abundant Number",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sum proper divisors > N.",
        "prompts": [
            "Sum divisors."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "Abundant Number",
                "explanation": ""
            }
        ],
        "sol": "Abundant check."
    },
    {
        "id": "num_28",
        "cat": "numbers",
        "title": "Friendly Pair",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "sumDiv(A)/A == sumDiv(B)/B.",
        "prompts": [
            "Divisor ratios."
        ],
        "tests": [
            {
                "input": [
                    "6 28"
                ],
                "output": "Friendly Pair",
                "explanation": ""
            }
        ],
        "sol": "Friendly pair check."
    },
    {
        "id": "num_29",
        "cat": "numbers",
        "title": "Highest Common Factor (HCF)",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find HCF/GCD of two numbers.",
        "prompts": [
            "Euclidean algorithm."
        ],
        "tests": [
            {
                "input": [
                    "36 60"
                ],
                "output": "12",
                "explanation": ""
            }
        ],
        "sol": "GCD."
    },
    {
        "id": "num_30",
        "cat": "numbers",
        "title": "Lowest Common Multiple (LCM)",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find LCM of two numbers.",
        "prompts": [
            "(A*B)/GCD."
        ],
        "tests": [
            {
                "input": [
                    "12 18"
                ],
                "output": "36",
                "explanation": ""
            }
        ],
        "sol": "LCM."
    },
    {
        "id": "num_31",
        "cat": "numbers",
        "title": "Greatest Common Divisor",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find GCD.",
        "prompts": [
            "Euclidean."
        ],
        "tests": [
            {
                "input": [
                    "24 36"
                ],
                "output": "12",
                "explanation": ""
            }
        ],
        "sol": "GCD."
    },
    {
        "id": "num_32",
        "cat": "numbers",
        "title": "Quadrants in Which a Coordinate Lies",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Determine quadrant for (X, Y).",
        "prompts": [
            "Signs of X, Y."
        ],
        "tests": [
            {
                "input": [
                    "3 5"
                ],
                "output": "First Quadrant",
                "explanation": ""
            },
            {
                "input": [
                    "-3 -5"
                ],
                "output": "Third Quadrant",
                "explanation": ""
            }
        ],
        "sol": "Quadrant check."
    },
    {
        "id": "num_33",
        "cat": "numbers",
        "title": "Permutations nPr (N People Occupy R Seats)",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "nPr = N! / (N - R)!.",
        "prompts": [
            "nPr."
        ],
        "tests": [
            {
                "input": [
                    "5 3"
                ],
                "output": "60",
                "explanation": ""
            }
        ],
        "sol": "nPr."
    },
    {
        "id": "num_34",
        "cat": "numbers",
        "title": "Maximum Number of Handshakes",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "N * (N - 1) / 2.",
        "prompts": [
            "Handshakes."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "45",
                "explanation": ""
            }
        ],
        "sol": "Handshakes."
    },
    {
        "id": "num_35",
        "cat": "numbers",
        "title": "Addition of Two Fractions",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Add A/B + C/D.",
        "prompts": [
            "Cross multiply & reduce."
        ],
        "tests": [
            {
                "input": [
                    "1 3 3 9"
                ],
                "output": "2/3",
                "explanation": ""
            }
        ],
        "sol": "Fraction sum."
    },
    {
        "id": "num_36",
        "cat": "numbers",
        "title": "Replace All 0s With 1 in an Integer",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Replace 0 digits with 1.",
        "prompts": [
            "String replace."
        ],
        "tests": [
            {
                "input": [
                    "102030"
                ],
                "output": "112131",
                "explanation": ""
            }
        ],
        "sol": "Replace 0 with 1."
    },
    {
        "id": "num_37",
        "cat": "numbers",
        "title": "Express Number as Sum of Two Prime Numbers",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Check if N = p1 + p2.",
        "prompts": [
            "Goldbach."
        ],
        "tests": [
            {
                "input": [
                    "34"
                ],
                "output": "Yes",
                "explanation": ""
            }
        ],
        "sol": "Sum of two primes."
    },
    {
        "id": "num_38",
        "cat": "numbers",
        "title": "Count Possible Decodings of a Digit Sequence",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Decode ways for digit string.",
        "prompts": [
            "DP."
        ],
        "tests": [
            {
                "input": [
                    "121"
                ],
                "output": "3",
                "explanation": ""
            }
        ],
        "sol": "Decode ways."
    },
    {
        "id": "num_39",
        "cat": "numbers",
        "title": "Calculate Area of a Circle",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Area = PI * R^2.",
        "prompts": [
            "PI * R^2."
        ],
        "tests": [
            {
                "input": [
                    "7"
                ],
                "output": "153.94",
                "explanation": ""
            }
        ],
        "sol": "Circle area."
    },
    {
        "id": "num_40",
        "cat": "numbers",
        "title": "Find Prime Numbers Between 1 to 100",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print primes from 1 to 100.",
        "prompts": [
            "Sieve or trial division."
        ],
        "tests": [
            {
                "input": [
                    "100"
                ],
                "output": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97",
                "explanation": ""
            }
        ],
        "sol": "Primes 1-100."
    },
    {
        "id": "num_41",
        "cat": "numbers",
        "title": "Calculate Number of Digits in an Integer",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count total digits in N.",
        "prompts": [
            "floor(log10(N)) + 1."
        ],
        "tests": [
            {
                "input": [
                    "12345"
                ],
                "output": "5",
                "explanation": ""
            }
        ],
        "sol": "Digit count."
    },
    {
        "id": "num_42",
        "cat": "numbers",
        "title": "Convert Digit/Number to Words",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Convert integer N to English words.",
        "prompts": [
            "Digit mapping."
        ],
        "tests": [
            {
                "input": [
                    "123"
                ],
                "output": "One Hundred Twenty Three",
                "explanation": ""
            }
        ],
        "sol": "Number to words."
    },
    {
        "id": "num_43",
        "cat": "numbers",
        "title": "Counting Days in a Month of a Year",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Days in month M of year Y.",
        "prompts": [
            "Check leap year for Feb."
        ],
        "tests": [
            {
                "input": [
                    "2 2024"
                ],
                "output": "29",
                "explanation": ""
            }
        ],
        "sol": "Days in month."
    },
    {
        "id": "num_44",
        "cat": "numbers",
        "title": "Finding Frequency of Digit X in Input",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Count occurrences of digit X in N.",
        "prompts": [
            "Loop digits."
        ],
        "tests": [
            {
                "input": [
                    "122324 2"
                ],
                "output": "3",
                "explanation": ""
            }
        ],
        "sol": "Digit frequency."
    },
    {
        "id": "num_45",
        "cat": "numbers",
        "title": "Finding Integers with Exactly X Divisors",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Count numbers <= N with X divisors.",
        "prompts": [
            "Divisor count."
        ],
        "tests": [
            {
                "input": [
                    "10 2"
                ],
                "output": "4",
                "explanation": ""
            }
        ],
        "sol": "Exact divisors."
    },
    {
        "id": "num_46",
        "cat": "numbers",
        "title": "Finding Roots of a Quadratic Equation",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Roots of A*x^2 + B*x + C = 0.",
        "prompts": [
            "Discriminant B^2 - 4AC."
        ],
        "tests": [
            {
                "input": [
                    "1 -7 12"
                ],
                "output": "4.0 3.0",
                "explanation": ""
            }
        ],
        "sol": "Quadratic roots."
    },
    {
        "id": "ns_1",
        "cat": "numsystem",
        "title": "Binary to Decimal Conversion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Convert binary to decimal.",
        "prompts": [
            "Base 2 to 10."
        ],
        "tests": [
            {
                "input": [
                    "1010"
                ],
                "output": "10",
                "explanation": ""
            }
        ],
        "sol": "Binary to decimal."
    },
    {
        "id": "ns_2",
        "cat": "numsystem",
        "title": "Octal to Decimal Conversion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Convert octal to decimal.",
        "prompts": [
            "Base 8 to 10."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "10",
                "explanation": ""
            }
        ],
        "sol": "Octal to decimal."
    },
    {
        "id": "ns_3",
        "cat": "numsystem",
        "title": "Hexadecimal to Decimal Conversion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Convert hex to decimal.",
        "prompts": [
            "Base 16 to 10."
        ],
        "tests": [
            {
                "input": [
                    "1A"
                ],
                "output": "26",
                "explanation": ""
            }
        ],
        "sol": "Hex to decimal."
    },
    {
        "id": "ns_4",
        "cat": "numsystem",
        "title": "Decimal to Binary Conversion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Convert decimal to binary.",
        "prompts": [
            "Base 10 to 2."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "1010",
                "explanation": ""
            }
        ],
        "sol": "Decimal to binary."
    },
    {
        "id": "ns_5",
        "cat": "numsystem",
        "title": "Decimal to Octal Conversion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Convert decimal to octal.",
        "prompts": [
            "Base 10 to 8."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "12",
                "explanation": ""
            }
        ],
        "sol": "Decimal to octal."
    },
    {
        "id": "ns_6",
        "cat": "numsystem",
        "title": "Decimal to Hexadecimal Conversion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Convert decimal to hex.",
        "prompts": [
            "Base 10 to 16."
        ],
        "tests": [
            {
                "input": [
                    "26"
                ],
                "output": "1A",
                "explanation": ""
            }
        ],
        "sol": "Decimal to hex."
    },
    {
        "id": "ns_7",
        "cat": "numsystem",
        "title": "Binary to Octal Conversion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Convert binary to octal.",
        "prompts": [
            "Binary -> Decimal -> Octal."
        ],
        "tests": [
            {
                "input": [
                    "1010"
                ],
                "output": "12",
                "explanation": ""
            }
        ],
        "sol": "Binary to octal."
    },
    {
        "id": "ns_8",
        "cat": "numsystem",
        "title": "Octal to Binary Conversion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Convert octal to binary.",
        "prompts": [
            "Octal -> Decimal -> Binary."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "1010",
                "explanation": ""
            }
        ],
        "sol": "Octal to binary."
    },
    {
        "id": "rec_1",
        "cat": "recursion",
        "title": "Power of a Number Using Recursion",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Compute N^P recursively.",
        "prompts": [
            "N * power(N, P-1)."
        ],
        "tests": [
            {
                "input": [
                    "2 4"
                ],
                "output": "16",
                "explanation": ""
            }
        ],
        "sol": "Recursive power."
    },
    {
        "id": "rec_2",
        "cat": "recursion",
        "title": "Prime Number Using Recursion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Check prime recursively.",
        "prompts": [
            "Helper checkPrime(n, i)."
        ],
        "tests": [
            {
                "input": [
                    "17"
                ],
                "output": "Prime",
                "explanation": ""
            }
        ],
        "sol": "Recursive prime."
    },
    {
        "id": "rec_3",
        "cat": "recursion",
        "title": "Largest Element in Array Using Recursion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find max in array recursively.",
        "prompts": [
            "max(arr[n-1], recMax)."
        ],
        "tests": [
            {
                "input": [
                    "1 5 3 9 2"
                ],
                "output": "9",
                "explanation": ""
            }
        ],
        "sol": "Recursive max."
    },
    {
        "id": "rec_4",
        "cat": "recursion",
        "title": "Smallest Element in Array Using Recursion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find min in array recursively.",
        "prompts": [
            "min(arr[n-1], recMin)."
        ],
        "tests": [
            {
                "input": [
                    "8 2 4 1 6"
                ],
                "output": "1",
                "explanation": ""
            }
        ],
        "sol": "Recursive min."
    },
    {
        "id": "rec_5",
        "cat": "recursion",
        "title": "Reversing a Number Using Recursion",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Reverse digits recursively.",
        "prompts": [
            "Accumulate reverse."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "4321",
                "explanation": ""
            }
        ],
        "sol": "Recursive reverse."
    },
    {
        "id": "rec_6",
        "cat": "recursion",
        "title": "HCF of Two Numbers Using Recursion",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "GCD using Euclidean recursion.",
        "prompts": [
            "gcd(b, a%b)."
        ],
        "tests": [
            {
                "input": [
                    "48 18"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Recursive HCF."
    },
    {
        "id": "rec_7",
        "cat": "recursion",
        "title": "LCM of Two Numbers Using Recursion",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "LCM using recursive GCD.",
        "prompts": [
            "(a*b)/recGCD."
        ],
        "tests": [
            {
                "input": [
                    "12 15"
                ],
                "output": "60",
                "explanation": ""
            }
        ],
        "sol": "Recursive LCM."
    },
    {
        "id": "rec_8",
        "cat": "recursion",
        "title": "Length of String Using Recursion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "String length without strlen.",
        "prompts": [
            "1 + recLen(str+1)."
        ],
        "tests": [
            {
                "input": [
                    "VetriPath"
                ],
                "output": "9",
                "explanation": ""
            }
        ],
        "sol": "Recursive string length."
    },
    {
        "id": "rec_9",
        "cat": "recursion",
        "title": "Print All Permutations of a String",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Generate string permutations.",
        "prompts": [
            "Backtracking."
        ],
        "tests": [
            {
                "input": [
                    "ABC"
                ],
                "output": "ABC ACB BAC BCA CAB CBA",
                "explanation": ""
            }
        ],
        "sol": "Recursive permutations."
    },
    {
        "id": "rec_10",
        "cat": "recursion",
        "title": "F(N)th Term of a Sequence",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print F(N)th term recursively.",
        "prompts": [
            "Recurrence."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "15",
                "explanation": ""
            }
        ],
        "sol": "F(N) term."
    },
    {
        "id": "rec_11",
        "cat": "recursion",
        "title": "Subset Sums of Array Using Recursion",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Print sums of all subsets.",
        "prompts": [
            "Include/Exclude."
        ],
        "tests": [
            {
                "input": [
                    "2 3"
                ],
                "output": "0 2 3 5",
                "explanation": ""
            }
        ],
        "sol": "Subset sums."
    },
    {
        "id": "rec_12",
        "cat": "recursion",
        "title": "Last Non-Zero Digit in Factorial",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Find last non-zero digit of N!.",
        "prompts": [
            "Factorial digit logic."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "2",
                "explanation": ""
            }
        ],
        "sol": "Last non-zero digit."
    },
    {
        "id": "rec_13",
        "cat": "recursion",
        "title": "Nth Row of Pascal's Triangle",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Generate Nth row of Pascal triangle.",
        "prompts": [
            "nCr combination."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1 3 3 1",
                "explanation": ""
            }
        ],
        "sol": "Pascal triangle row."
    },
    {
        "id": "rec_14",
        "cat": "recursion",
        "title": "Generate Balanced Parentheses",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Combinations of well-formed parentheses.",
        "prompts": [
            "Backtracking."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "((())) (()()) (())() ()(()) ()()()",
                "explanation": ""
            }
        ],
        "sol": "Parentheses generator."
    },
    {
        "id": "rec_15",
        "cat": "recursion",
        "title": "Factorial of a Number Using Recursion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate N! recursively.",
        "prompts": [
            "N * fact(N-1)."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "120",
                "explanation": ""
            }
        ],
        "sol": "Recursive factorial."
    },
    {
        "id": "rec_16",
        "cat": "recursion",
        "title": "Palindromic Partitions of a String",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Find all palindromic partitions.",
        "prompts": [
            "Backtracking."
        ],
        "tests": [
            {
                "input": [
                    "nitin"
                ],
                "output": "n i t i n | n iti n | nitin",
                "explanation": ""
            }
        ],
        "sol": "Palindromic partitions."
    },
    {
        "id": "rec_17",
        "cat": "recursion",
        "title": "N-Bit Binary Numbers Having 1s >= 0s",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Generate N-bit binary numbers with 1s >= 0s.",
        "prompts": [
            "Prefix 1s count."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "111 110 101",
                "explanation": ""
            }
        ],
        "sol": "N-bit binary."
    },
    {
        "id": "rec_18",
        "cat": "recursion",
        "title": "Find All Subsets of a Set",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Generate power set.",
        "prompts": [
            "Backtracking."
        ],
        "tests": [
            {
                "input": [
                    "1 2"
                ],
                "output": "{} {1} {2} {1,2}",
                "explanation": ""
            }
        ],
        "sol": "Power set."
    },
    {
        "id": "rec_19",
        "cat": "recursion",
        "title": "Remove Adjacent Duplicate Characters Recursively",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Recursively remove adjacent duplicates.",
        "prompts": [
            "Skip matching chars."
        ],
        "tests": [
            {
                "input": [
                    "azxxzy"
                ],
                "output": "ay",
                "explanation": ""
            }
        ],
        "sol": "Recursive duplicate removal."
    },
    {
        "id": "arr_1",
        "cat": "arrays",
        "title": "Find Largest Element in an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find max element.",
        "prompts": [
            "Iterate max."
        ],
        "tests": [
            {
                "input": [
                    "10 20 4 45 99"
                ],
                "output": "99",
                "explanation": ""
            }
        ],
        "sol": "Max element."
    },
    {
        "id": "arr_2",
        "cat": "arrays",
        "title": "Find Smallest Element in an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find min element.",
        "prompts": [
            "Iterate min."
        ],
        "tests": [
            {
                "input": [
                    "10 20 4 45 99"
                ],
                "output": "4",
                "explanation": ""
            }
        ],
        "sol": "Min element."
    },
    {
        "id": "arr_3",
        "cat": "arrays",
        "title": "Find Smallest and Largest Element in an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find both min and max elements.",
        "prompts": [
            "Single pass min/max."
        ],
        "tests": [
            {
                "input": [
                    "10 20 4 45 99"
                ],
                "output": "Min: 4, Max: 99",
                "explanation": ""
            }
        ],
        "sol": "Min and Max."
    },
    {
        "id": "arr_4",
        "cat": "arrays",
        "title": "Find Second Smallest Element in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find second smallest value.",
        "prompts": [
            "Track min1, min2."
        ],
        "tests": [
            {
                "input": [
                    "12 13 1 10 34 1"
                ],
                "output": "10",
                "explanation": ""
            }
        ],
        "sol": "Second smallest."
    },
    {
        "id": "arr_5",
        "cat": "arrays",
        "title": "Calculate Sum of Elements in an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sum of all array elements.",
        "prompts": [
            "Iterate sum."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5"
                ],
                "output": "15",
                "explanation": ""
            }
        ],
        "sol": "Array sum."
    },
    {
        "id": "arr_6",
        "cat": "arrays",
        "title": "Reverse an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Reverse array elements.",
        "prompts": [
            "Two pointer swap."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5"
                ],
                "output": "5 4 3 2 1",
                "explanation": ""
            }
        ],
        "sol": "Reverse array."
    },
    {
        "id": "arr_7",
        "cat": "arrays",
        "title": "Sort First Half Ascending and Second Half Descending",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sort first half asc, second desc.",
        "prompts": [
            "Partial sorting."
        ],
        "tests": [
            {
                "input": [
                    "1 9 3 7 5 2"
                ],
                "output": "1 3 5 9 7 2",
                "explanation": ""
            }
        ],
        "sol": "Half asc half desc."
    },
    {
        "id": "arr_8",
        "cat": "arrays",
        "title": "Sort the Elements of an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sort array in ascending order.",
        "prompts": [
            "Quicksort/Mergesort."
        ],
        "tests": [
            {
                "input": [
                    "5 2 8 1 9"
                ],
                "output": "1 2 5 8 9",
                "explanation": ""
            }
        ],
        "sol": "Sort array."
    },
    {
        "id": "arr_9",
        "cat": "arrays",
        "title": "Frequency of Elements in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Count element frequencies.",
        "prompts": [
            "Frequency map."
        ],
        "tests": [
            {
                "input": [
                    "10 20 20 10 10 30"
                ],
                "output": "10: 3, 20: 2, 30: 1",
                "explanation": ""
            }
        ],
        "sol": "Frequency count."
    },
    {
        "id": "arr_10",
        "cat": "arrays",
        "title": "Sorting Elements of an Array by Frequency",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Sort elements by frequency.",
        "prompts": [
            "Custom sort."
        ],
        "tests": [
            {
                "input": [
                    "2 5 2 8 5 6 8 8"
                ],
                "output": "8 8 8 2 2 5 5 6",
                "explanation": ""
            }
        ],
        "sol": "Frequency sort."
    },
    {
        "id": "arr_11",
        "cat": "arrays",
        "title": "Finding Longest Palindrome in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find longest palindrome number in array.",
        "prompts": [
            "Check number palindrome."
        ],
        "tests": [
            {
                "input": [
                    "121 131 20 54545"
                ],
                "output": "54545",
                "explanation": ""
            }
        ],
        "sol": "Longest palindrome."
    },
    {
        "id": "arr_12",
        "cat": "arrays",
        "title": "Counting Distinct Elements in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Count distinct elements.",
        "prompts": [
            "Set size."
        ],
        "tests": [
            {
                "input": [
                    "10 20 20 10 30"
                ],
                "output": "3",
                "explanation": ""
            }
        ],
        "sol": "Distinct elements."
    },
    {
        "id": "arr_13",
        "cat": "arrays",
        "title": "Finding Repeating Elements in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find all elements appearing > 1 time.",
        "prompts": [
            "Frequency check."
        ],
        "tests": [
            {
                "input": [
                    "10 20 20 10 30 40"
                ],
                "output": "10 20",
                "explanation": ""
            }
        ],
        "sol": "Repeating elements."
    },
    {
        "id": "arr_14",
        "cat": "arrays",
        "title": "Finding Non-Repeating Elements in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find elements appearing exactly once.",
        "prompts": [
            "Unique elements."
        ],
        "tests": [
            {
                "input": [
                    "10 20 20 10 30 40"
                ],
                "output": "30 40",
                "explanation": ""
            }
        ],
        "sol": "Non-repeating elements."
    },
    {
        "id": "arr_15",
        "cat": "arrays",
        "title": "Removing Duplicate Elements From an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Remove duplicates.",
        "prompts": [
            "Deduplicate."
        ],
        "tests": [
            {
                "input": [
                    "1 2 2 3 4 4 5"
                ],
                "output": "1 2 3 4 5",
                "explanation": ""
            }
        ],
        "sol": "Remove duplicates."
    },
    {
        "id": "arr_16",
        "cat": "arrays",
        "title": "Finding Minimum Scalar Product of Two Vectors",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Min scalar product.",
        "prompts": [
            "Sort V1 asc, V2 desc."
        ],
        "tests": [
            {
                "input": [
                    "1 3 -5 | -2 4 1"
                ],
                "output": "-25",
                "explanation": ""
            }
        ],
        "sol": "Min scalar product."
    },
    {
        "id": "arr_17",
        "cat": "arrays",
        "title": "Finding Maximum Scalar Product of Two Vectors",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Max scalar product.",
        "prompts": [
            "Sort both asc."
        ],
        "tests": [
            {
                "input": [
                    "1 3 -5 | -2 4 1"
                ],
                "output": "21",
                "explanation": ""
            }
        ],
        "sol": "Max scalar product."
    },
    {
        "id": "arr_18",
        "cat": "arrays",
        "title": "Counting Number of Even and Odd Elements",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count even and odd elements.",
        "prompts": [
            "Modulo check."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5 6"
                ],
                "output": "Even: 3, Odd: 3",
                "explanation": ""
            }
        ],
        "sol": "Even and odd count."
    },
    {
        "id": "arr_19",
        "cat": "arrays",
        "title": "Find All Symmetric Pairs in an Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Pairs (a,b) and (b,a).",
        "prompts": [
            "Map check."
        ],
        "tests": [
            {
                "input": [
                    "(1,2) (3,4) (2,1) (4,3)"
                ],
                "output": "(1,2) (3,4)",
                "explanation": ""
            }
        ],
        "sol": "Symmetric pairs."
    },
    {
        "id": "arr_20",
        "cat": "arrays",
        "title": "Find Maximum Product Subarray",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Max product contiguous subarray.",
        "prompts": [
            "DP min/max."
        ],
        "tests": [
            {
                "input": [
                    "2 3 -2 4"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Max product subarray."
    },
    {
        "id": "arr_21",
        "cat": "arrays",
        "title": "Finding Arrays are Disjoint or Not",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Check if two arrays have no common elements.",
        "prompts": [
            "Set intersection."
        ],
        "tests": [
            {
                "input": [
                    "12 34 11 | 2 3 5"
                ],
                "output": "Disjoint",
                "explanation": ""
            }
        ],
        "sol": "Disjoint arrays."
    },
    {
        "id": "arr_22",
        "cat": "arrays",
        "title": "Determine Array is Subset of Another Array",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Check if A is subset of B.",
        "prompts": [
            "Set lookup."
        ],
        "tests": [
            {
                "input": [
                    "11 1 13 21 | 11 37 1 21 3 13"
                ],
                "output": "Subset",
                "explanation": ""
            }
        ],
        "sol": "Subset check."
    },
    {
        "id": "arr_23",
        "cat": "arrays",
        "title": "Sort Array of 0s, 1s and 2s (Dutch National Flag)",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sort 0s, 1s, 2s.",
        "prompts": [
            "Dutch National Flag."
        ],
        "tests": [
            {
                "input": [
                    "0 1 2 0 1 2"
                ],
                "output": "0 0 1 1 2 2",
                "explanation": ""
            }
        ],
        "sol": "Dutch National Flag."
    },
    {
        "id": "arr_24",
        "cat": "arrays",
        "title": "Find Kth Max and Min Element of an Array",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Find Kth largest and Kth smallest.",
        "prompts": [
            "Quickselect / Sort."
        ],
        "tests": [
            {
                "input": [
                    "7 10 4 3 20 15 3"
                ],
                "output": "3rd Min: 7, 3rd Max: 10",
                "explanation": ""
            }
        ],
        "sol": "Kth min and max."
    },
    {
        "id": "arr_25",
        "cat": "arrays",
        "title": "Move All Negative Elements to One Side",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Move negatives left.",
        "prompts": [
            "Two pointers."
        ],
        "tests": [
            {
                "input": [
                    "-12 11 -13 -5 6 -7 5 3 -6"
                ],
                "output": "-12 -13 -5 -7 -6 11 6 5 3",
                "explanation": ""
            }
        ],
        "sol": "Move negatives."
    },
    {
        "id": "arr_26",
        "cat": "arrays",
        "title": "Find Union and Intersection of Two Sorted Arrays",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Union and intersection.",
        "prompts": [
            "Two pointers."
        ],
        "tests": [
            {
                "input": [
                    "1 2 4 5 6 | 2 3 5 7"
                ],
                "output": "Union: 1 2 3 4 5 6 7 | Inter: 2 5",
                "explanation": ""
            }
        ],
        "sol": "Union and intersection."
    },
    {
        "id": "arr_27",
        "cat": "arrays",
        "title": "Largest Sum Contiguous Subarray (Kadane's)",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Max subarray sum.",
        "prompts": [
            "Kadane's algorithm."
        ],
        "tests": [
            {
                "input": [
                    "-2 1 -3 4 -1 2 1 -5 4"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Kadane's algorithm."
    },
    {
        "id": "arr_28",
        "cat": "arrays",
        "title": "Minimize Maximum Difference Between Heights",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Minimize max diff heights.",
        "prompts": [
            "Sorting & greedy."
        ],
        "tests": [
            {
                "input": [
                    "1 15 10 6 K=6"
                ],
                "output": "5",
                "explanation": ""
            }
        ],
        "sol": "Minimize height diff."
    },
    {
        "id": "arr_29",
        "cat": "arrays",
        "title": "Minimum Number of Jumps to Reach End",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Min jumps to end.",
        "prompts": [
            "Greedy max reach."
        ],
        "tests": [
            {
                "input": [
                    "1 3 5 8 9 2 6 7 6 8 9"
                ],
                "output": "3",
                "explanation": ""
            }
        ],
        "sol": "Min jumps."
    },
    {
        "id": "arr_30",
        "cat": "arrays",
        "title": "Find Duplicate in Array of N+1 Integers",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find duplicate in 1..N.",
        "prompts": [
            "Floyd's Tortoise and Hare."
        ],
        "tests": [
            {
                "input": [
                    "1 3 4 2 2"
                ],
                "output": "2",
                "explanation": ""
            }
        ],
        "sol": "Find duplicate."
    },
    {
        "id": "arr_31",
        "cat": "arrays",
        "title": "Merge 2 Sorted Arrays Without Extra Space",
        "diff": "advanced",
        "inp": "two_ints",
        "desc": "Merge two sorted arrays in-place.",
        "prompts": [
            "Gap algorithm."
        ],
        "tests": [
            {
                "input": [
                    "1 5 9 10 15 | 2 3 8 13"
                ],
                "output": "1 2 3 5 8 9 10 13 15",
                "explanation": ""
            }
        ],
        "sol": "Merge sorted arrays."
    },
    {
        "id": "arr_32",
        "cat": "arrays",
        "title": "Count Inversions in an Array",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Count inversions where i < j and arr[i] > arr[j].",
        "prompts": [
            "Merge sort."
        ],
        "tests": [
            {
                "input": [
                    "8 4 2 1"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Inversion count."
    },
    {
        "id": "arr_33",
        "cat": "arrays",
        "title": "Best Time to Buy and Sell Stock",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Max profit buying once.",
        "prompts": [
            "Track min price."
        ],
        "tests": [
            {
                "input": [
                    "7 1 5 3 6 4"
                ],
                "output": "5",
                "explanation": ""
            }
        ],
        "sol": "Buy sell stock."
    },
    {
        "id": "arr_34",
        "cat": "arrays",
        "title": "Find All Pairs Whose Sum Equals Given Number",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Pairs sum = target.",
        "prompts": [
            "Hash map."
        ],
        "tests": [
            {
                "input": [
                    "1 5 7 -1 5 target=6"
                ],
                "output": "(1,5) (7,-1) (1,5)",
                "explanation": ""
            }
        ],
        "sol": "Pair sum."
    },
    {
        "id": "arr_35",
        "cat": "arrays",
        "title": "Find Subarray with Sum Equal to 0",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Check if subarray sum = 0.",
        "prompts": [
            "Prefix sum set."
        ],
        "tests": [
            {
                "input": [
                    "4 2 -3 1 6"
                ],
                "output": "Yes (subarray [2 -3 1])",
                "explanation": ""
            }
        ],
        "sol": "Subarray sum 0."
    },
    {
        "id": "arr_36",
        "cat": "arrays",
        "title": "Trapping Rain Water Problem",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Trapped rain water volume.",
        "prompts": [
            "Two pointers."
        ],
        "tests": [
            {
                "input": [
                    "0 1 0 2 1 0 1 3 2 1 2 1"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Trapping rain water."
    },
    {
        "id": "arr_37",
        "cat": "arrays",
        "title": "Chocolate Distribution Problem",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Min difference between max and min chocolates.",
        "prompts": [
            "Sort & window."
        ],
        "tests": [
            {
                "input": [
                    "3 4 1 9 56 7 9 12 m=5"
                ],
                "output": "6",
                "explanation": ""
            }
        ],
        "sol": "Chocolate distribution."
    },
    {
        "id": "str_1",
        "cat": "strings",
        "title": "Check Whether Character is Vowel or Consonant",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check vowel or consonant.",
        "prompts": [
            "Check 'aeiouAEIOU'."
        ],
        "tests": [
            {
                "input": [
                    "a"
                ],
                "output": "Vowel",
                "explanation": ""
            },
            {
                "input": [
                    "z"
                ],
                "output": "Consonant",
                "explanation": ""
            }
        ],
        "sol": "Vowel consonant check."
    },
    {
        "id": "str_2",
        "cat": "strings",
        "title": "Check Whether Character is Alphabet or Not",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if character is A-Z or a-z.",
        "prompts": [
            "isalpha check."
        ],
        "tests": [
            {
                "input": [
                    "A"
                ],
                "output": "Alphabet",
                "explanation": ""
            },
            {
                "input": [
                    "9"
                ],
                "output": "Not Alphabet",
                "explanation": ""
            }
        ],
        "sol": "Alphabet check."
    },
    {
        "id": "str_3",
        "cat": "strings",
        "title": "Find ASCII Value of a Character",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Get ASCII code of character.",
        "prompts": [
            "ord(c)."
        ],
        "tests": [
            {
                "input": [
                    "A"
                ],
                "output": "65",
                "explanation": ""
            }
        ],
        "sol": "ASCII value."
    },
    {
        "id": "str_4",
        "cat": "strings",
        "title": "Length of String Without Using strlen()",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count string length.",
        "prompts": [
            "Loop characters."
        ],
        "tests": [
            {
                "input": [
                    "VetriPath"
                ],
                "output": "9",
                "explanation": ""
            }
        ],
        "sol": "String length."
    },
    {
        "id": "str_5",
        "cat": "strings",
        "title": "Toggle Each Character in a String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Convert uppercase to lowercase and vice versa.",
        "prompts": [
            "swapcase."
        ],
        "tests": [
            {
                "input": [
                    "VetriPath"
                ],
                "output": "vETRIpATH",
                "explanation": ""
            }
        ],
        "sol": "Toggle case."
    },
    {
        "id": "str_6",
        "cat": "strings",
        "title": "Count Number of Vowels in a String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count vowels.",
        "prompts": [
            "Loop vowels."
        ],
        "tests": [
            {
                "input": [
                    "VetriPathLearn"
                ],
                "output": "5",
                "explanation": ""
            }
        ],
        "sol": "Vowel count."
    },
    {
        "id": "str_7",
        "cat": "strings",
        "title": "Remove Vowels From a String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Filter out vowels.",
        "prompts": [
            "Remove aeiou."
        ],
        "tests": [
            {
                "input": [
                    "VetriPathLearn"
                ],
                "output": "VtrpthLrn",
                "explanation": ""
            }
        ],
        "sol": "Remove vowels."
    },
    {
        "id": "str_8",
        "cat": "strings",
        "title": "Check if Given String is Palindrome",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if string equals reverse.",
        "prompts": [
            "str == rev(str)."
        ],
        "tests": [
            {
                "input": [
                    "madam"
                ],
                "output": "Palindrome",
                "explanation": ""
            }
        ],
        "sol": "String palindrome."
    },
    {
        "id": "str_9",
        "cat": "strings",
        "title": "Print Given String in Reverse Order",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Reverse string.",
        "prompts": [
            "Reverse characters."
        ],
        "tests": [
            {
                "input": [
                    "hello"
                ],
                "output": "olleh",
                "explanation": ""
            }
        ],
        "sol": "Reverse string."
    },
    {
        "id": "str_10",
        "cat": "strings",
        "title": "Remove All Characters Except Alphabets",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Filter out non-alphabets.",
        "prompts": [
            "Keep A-Z a-z."
        ],
        "tests": [
            {
                "input": [
                    "Vetri123#Path"
                ],
                "output": "VetriPath",
                "explanation": ""
            }
        ],
        "sol": "Remove non-alphabets."
    },
    {
        "id": "str_11",
        "cat": "strings",
        "title": "Remove Spaces From a String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Remove whitespace.",
        "prompts": [
            "replace(' ', '')."
        ],
        "tests": [
            {
                "input": [
                    "Vetri Path Learn"
                ],
                "output": "VetriPathLearn",
                "explanation": ""
            }
        ],
        "sol": "Remove spaces."
    },
    {
        "id": "str_12",
        "cat": "strings",
        "title": "Remove Brackets From Algebraic Expression",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Remove () [] {}.",
        "prompts": [
            "Filter brackets."
        ],
        "tests": [
            {
                "input": [
                    "(a+b)*(c-d)"
                ],
                "output": "a+b*c-d",
                "explanation": ""
            }
        ],
        "sol": "Remove brackets."
    },
    {
        "id": "str_13",
        "cat": "strings",
        "title": "Count Sum of Numbers in a String",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sum numbers found in string.",
        "prompts": [
            "Extract integers."
        ],
        "tests": [
            {
                "input": [
                    "abc12def34"
                ],
                "output": "46",
                "explanation": ""
            }
        ],
        "sol": "Sum numbers in string."
    },
    {
        "id": "str_14",
        "cat": "strings",
        "title": "Capitalize First and Last Character of Each Word",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Capitalize word ends.",
        "prompts": [
            "Word manipulation."
        ],
        "tests": [
            {
                "input": [
                    "vetri path learn"
                ],
                "output": "VetrI PatH LearN",
                "explanation": ""
            }
        ],
        "sol": "Capitalize ends."
    },
    {
        "id": "str_15",
        "cat": "strings",
        "title": "Calculate Frequency of Characters in a String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Character counts.",
        "prompts": [
            "Map counts."
        ],
        "tests": [
            {
                "input": [
                    "apple"
                ],
                "output": "a:1, p:2, l:1, e:1",
                "explanation": ""
            }
        ],
        "sol": "Character frequency."
    },
    {
        "id": "str_16",
        "cat": "strings",
        "title": "Find Non-Repeating Characters in a String",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print characters appearing once.",
        "prompts": [
            "Frequency = 1."
        ],
        "tests": [
            {
                "input": [
                    "swiss"
                ],
                "output": "w i",
                "explanation": ""
            }
        ],
        "sol": "Non-repeating chars."
    },
    {
        "id": "str_17",
        "cat": "strings",
        "title": "Check if Two Strings are Anagrams",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Check identical character counts.",
        "prompts": [
            "Sort/Map."
        ],
        "tests": [
            {
                "input": [
                    "listen silent"
                ],
                "output": "Anagram",
                "explanation": ""
            }
        ],
        "sol": "Anagram check."
    },
    {
        "id": "str_18",
        "cat": "strings",
        "title": "Replace Substring in a String",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Replace target substring.",
        "prompts": [
            "String replace."
        ],
        "tests": [
            {
                "input": [
                    "hello world | world | universe"
                ],
                "output": "hello universe",
                "explanation": ""
            }
        ],
        "sol": "Replace substring."
    },
    {
        "id": "str_19",
        "cat": "strings",
        "title": "Count Common Subsequence in Two Strings",
        "diff": "advanced",
        "inp": "two_ints",
        "desc": "Length of LCS.",
        "prompts": [
            "LCS DP."
        ],
        "tests": [
            {
                "input": [
                    "abcde ace"
                ],
                "output": "3",
                "explanation": ""
            }
        ],
        "sol": "LCS."
    },
    {
        "id": "str_20",
        "cat": "strings",
        "title": "Wildcard Character Matching",
        "diff": "advanced",
        "inp": "two_ints",
        "desc": "Match string with * and ?",
        "prompts": [
            "DP wildcard."
        ],
        "tests": [
            {
                "input": [
                    "baaabab ba*a*a"
                ],
                "output": "Match",
                "explanation": ""
            }
        ],
        "sol": "Wildcard matching."
    },
    {
        "id": "sort_1",
        "cat": "sorting",
        "title": "Bubble Sort Algorithm",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sort array using Bubble Sort.",
        "prompts": [
            "Repeatedly swap adjacent elements if wrong order."
        ],
        "tests": [
            {
                "input": [
                    "5 1 4 2 8"
                ],
                "output": "1 2 4 5 8",
                "explanation": ""
            }
        ],
        "sol": "Bubble sort O(N^2)."
    },
    {
        "id": "sort_2",
        "cat": "sorting",
        "title": "Selection Sort Algorithm",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sort array using Selection Sort.",
        "prompts": [
            "Find minimum element and place at beginning."
        ],
        "tests": [
            {
                "input": [
                    "64 25 12 22 11"
                ],
                "output": "11 12 22 25 64",
                "explanation": ""
            }
        ],
        "sol": "Selection sort O(N^2)."
    },
    {
        "id": "sort_3",
        "cat": "sorting",
        "title": "Insertion Sort Algorithm",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Sort array using Insertion Sort.",
        "prompts": [
            "Insert current element into sorted subarray."
        ],
        "tests": [
            {
                "input": [
                    "12 11 13 5 6"
                ],
                "output": "5 6 11 12 13",
                "explanation": ""
            }
        ],
        "sol": "Insertion sort O(N^2)."
    },
    {
        "id": "sort_4",
        "cat": "sorting",
        "title": "Merge Sort Algorithm",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sort array using Merge Sort.",
        "prompts": [
            "Divide and Conquer recursive merging."
        ],
        "tests": [
            {
                "input": [
                    "38 27 43 3 9 82 10"
                ],
                "output": "3 9 10 27 38 43 82",
                "explanation": ""
            }
        ],
        "sol": "Merge sort O(N log N)."
    },
    {
        "id": "sort_5",
        "cat": "sorting",
        "title": "Quick Sort Algorithm",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sort array using Quick Sort.",
        "prompts": [
            "Partition array around pivot element."
        ],
        "tests": [
            {
                "input": [
                    "10 7 8 9 1 5"
                ],
                "output": "1 5 7 8 9 10",
                "explanation": ""
            }
        ],
        "sol": "Quick sort O(N log N)."
    },
    {
        "id": "sort_6",
        "cat": "sorting",
        "title": "Heap Sort Algorithm",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Sort array using Heap Sort.",
        "prompts": [
            "Build Max Heap and extract max elements."
        ],
        "tests": [
            {
                "input": [
                    "12 11 13 5 6 7"
                ],
                "output": "5 6 7 11 12 13",
                "explanation": ""
            }
        ],
        "sol": "Heap sort O(N log N)."
    },
    {
        "id": "mat_1",
        "cat": "matrices",
        "title": "Spiral Traversal on a Matrix",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print matrix elements in spiral order.",
        "prompts": [
            "Maintain top, bottom, left, right bounds."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5 6 7 8 9"
                ],
                "output": "1 2 3 6 9 8 7 4 5",
                "explanation": ""
            }
        ],
        "sol": "Spiral traversal."
    },
    {
        "id": "mat_2",
        "cat": "matrices",
        "title": "Search an Element in a Matrix",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Search target X in sorted matrix.",
        "prompts": [
            "Step search."
        ],
        "tests": [
            {
                "input": [
                    "1 3 5 7 10 11 16 20 23 30 34 60 target=3"
                ],
                "output": "Found at (0,1)",
                "explanation": ""
            }
        ],
        "sol": "Matrix search."
    },
    {
        "id": "mat_3",
        "cat": "matrices",
        "title": "Find Median in a Row-Wise Sorted Matrix",
        "diff": "advanced",
        "inp": "single_int",
        "desc": "Find median of matrix.",
        "prompts": [
            "Binary search over range."
        ],
        "tests": [
            {
                "input": [
                    "1 3 5 2 6 9 3 6 9"
                ],
                "output": "5",
                "explanation": ""
            }
        ],
        "sol": "Matrix median."
    },
    {
        "id": "mat_4",
        "cat": "matrices",
        "title": "Find Row With Maximum Number of 1s",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find row index with max 1s in binary matrix.",
        "prompts": [
            "Binary search row."
        ],
        "tests": [
            {
                "input": [
                    "0 1 1 1 0 0 1 1 0 0 0 0"
                ],
                "output": "Row 0",
                "explanation": ""
            }
        ],
        "sol": "Max 1s row."
    },
    {
        "id": "mat_5",
        "cat": "matrices",
        "title": "Rotate Matrix by 90 Degrees",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Rotate N x N matrix 90 degrees clockwise.",
        "prompts": [
            "Transpose + Reverse rows."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4"
                ],
                "output": "3 1 4 2",
                "explanation": ""
            }
        ],
        "sol": "Matrix rotation."
    },
    {
        "id": "pat_1",
        "cat": "patterns",
        "title": "Square Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print N x N square star pattern.",
        "prompts": [
            "N stars per row."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "****\n****\n****\n****",
                "explanation": ""
            }
        ],
        "sol": "Square star."
    },
    {
        "id": "pat_2",
        "cat": "patterns",
        "title": "Hollow Square Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print hollow N x N square pattern.",
        "prompts": [
            "Border stars."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "****\n*  *\n*  *\n****",
                "explanation": ""
            }
        ],
        "sol": "Hollow square."
    },
    {
        "id": "pat_3",
        "cat": "patterns",
        "title": "Rhombus Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print rhombus star pattern.",
        "prompts": [
            "Row offset spaces."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "****\n ****\n  ****\n   ****",
                "explanation": ""
            }
        ],
        "sol": "Rhombus star."
    },
    {
        "id": "pat_4",
        "cat": "patterns",
        "title": "Rectangle Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print rectangle star pattern.",
        "prompts": [
            "M x N stars."
        ],
        "tests": [
            {
                "input": [
                    "3 5"
                ],
                "output": "*****\n*****\n*****",
                "explanation": ""
            }
        ],
        "sol": "Rectangle star."
    },
    {
        "id": "pat_5",
        "cat": "patterns",
        "title": "Hollow Rectangle Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print hollow rectangle star pattern.",
        "prompts": [
            "Border rectangle."
        ],
        "tests": [
            {
                "input": [
                    "3 5"
                ],
                "output": "*****\n*   *\n*****",
                "explanation": ""
            }
        ],
        "sol": "Hollow rectangle."
    },
    {
        "id": "pat_6",
        "cat": "patterns",
        "title": "Parallelogram Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print parallelogram star pattern.",
        "prompts": [
            "Row offset."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "****\n ****\n  ****\n   ****",
                "explanation": ""
            }
        ],
        "sol": "Parallelogram star."
    },
    {
        "id": "pat_7",
        "cat": "patterns",
        "title": "Mirrored Rhombus Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print mirrored rhombus star pattern.",
        "prompts": [
            "Inverted row offset."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "   ****\n  ****\n ****\n****",
                "explanation": ""
            }
        ],
        "sol": "Mirrored rhombus."
    },
    {
        "id": "pat_8",
        "cat": "patterns",
        "title": "Triangle Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print right triangle star pattern.",
        "prompts": [
            "Row i prints i stars."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "*\n**\n***\n****",
                "explanation": ""
            }
        ],
        "sol": "Right triangle star."
    },
    {
        "id": "pat_9",
        "cat": "patterns",
        "title": "Pyramid Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print pyramid star pattern.",
        "prompts": [
            "Spaces N-i, stars 2i-1."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "  *\n ***\n*****",
                "explanation": ""
            }
        ],
        "sol": "Pyramid star."
    },
    {
        "id": "pat_10",
        "cat": "patterns",
        "title": "Hollow Pyramid Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print hollow pyramid star pattern.",
        "prompts": [
            "Hollow pyramid."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "   *\n  * *\n *   *\n*******",
                "explanation": ""
            }
        ],
        "sol": "Hollow pyramid."
    },
    {
        "id": "pat_11",
        "cat": "patterns",
        "title": "Inverted Pyramid Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print inverted pyramid star pattern.",
        "prompts": [
            "Inverted pyramid."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "*****\n ***\n  *",
                "explanation": ""
            }
        ],
        "sol": "Inverted pyramid."
    },
    {
        "id": "pat_12",
        "cat": "patterns",
        "title": "Inverted Hollow Pyramid Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print inverted hollow pyramid.",
        "prompts": [
            "Hollow inverted."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "*******\n *   *\n  * *\n   *",
                "explanation": ""
            }
        ],
        "sol": "Inverted hollow pyramid."
    },
    {
        "id": "pat_13",
        "cat": "patterns",
        "title": "Half Diamond Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print half diamond star pattern.",
        "prompts": [
            "Increasing then decreasing stars."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "*\n**\n***\n****\n***\n**\n*",
                "explanation": ""
            }
        ],
        "sol": "Half diamond."
    },
    {
        "id": "pat_14",
        "cat": "patterns",
        "title": "Half Diamond Star Pattern Inverted",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print inverted half diamond star pattern.",
        "prompts": [
            "Right aligned half diamond."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "   *\n  **\n ***\n****\n ***\n  **\n   *",
                "explanation": ""
            }
        ],
        "sol": "Inverted half diamond."
    },
    {
        "id": "pat_15",
        "cat": "patterns",
        "title": "Diamond Star Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print full diamond star pattern.",
        "prompts": [
            "Pyramid + Inverted pyramid."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "  *\n ***\n*****\n ***\n  *",
                "explanation": ""
            }
        ],
        "sol": "Diamond star."
    },
    {
        "id": "pat_16",
        "cat": "patterns",
        "title": "Basic Square 1 Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print N x N grid of 1s.",
        "prompts": [
            "1s grid."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1111\n1111\n1111\n1111",
                "explanation": ""
            }
        ],
        "sol": "Square 1s."
    },
    {
        "id": "pat_17",
        "cat": "patterns",
        "title": "Basic Square Incrementing Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Row i filled with digit i.",
        "prompts": [
            "Row digit."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1111\n2222\n3333\n4444",
                "explanation": ""
            }
        ],
        "sol": "Square incrementing."
    },
    {
        "id": "pat_18",
        "cat": "patterns",
        "title": "Internal Varsity Square Pattern",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Border 3s with inner 1s and 2s.",
        "prompts": [
            "Border and inner digits."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "333\n313\n323\n333",
                "explanation": ""
            }
        ],
        "sol": "Internal varsity square."
    },
    {
        "id": "pat_19",
        "cat": "patterns",
        "title": "Basic Right Triangle Number Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print right triangle number pattern.",
        "prompts": [
            "Row i prints 1..i."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1\n12\n123\n1234",
                "explanation": ""
            }
        ],
        "sol": "Right triangle numbers."
    },
    {
        "id": "pat_20",
        "cat": "patterns",
        "title": "Basic Right Triangle Number Pattern (Inverted)",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print inverted right triangle numbers.",
        "prompts": [
            "Decreasing rows."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "10987\n456\n32\n1",
                "explanation": ""
            }
        ],
        "sol": "Inverted right triangle numbers."
    },
    {
        "id": "arr_two_sum",
        "cat": "arrays",
        "title": "Two Sum",
        "diff": "beginner",
        "inp": "array_and_target",
        "desc": "Given an array of integers `nums` and an integer `target`, return the 0-based indices of the two numbers such that they add up to `target`. If no pair exists, return -1.",
        "prompts": [
            "Use a Hash Map to store elements and their indices for an optimal O(N) single-pass lookup.",
            "Beware of twisted test cases where the target sum is formed by two identical numbers or negative integers."
        ],
        "tests": [
            {
                "input": [
                    "2 7 11 15\n9"
                ],
                "output": "0 1",
                "explanation": "nums[0] + nums[1] = 2 + 7 = 9"
            },
            {
                "input": [
                    "3 2 4\n6"
                ],
                "output": "1 2",
                "explanation": "nums[1] + nums[2] = 2 + 4 = 6"
            },
            {
                "input": [
                    "3 3\n6"
                ],
                "output": "0 1",
                "explanation": "Twisted Duplicate Case: Both numbers are 3, indices 0 and 1."
            },
            {
                "input": [
                    "-3 4 3 90\n0"
                ],
                "output": "0 2",
                "explanation": "Twisted Negative Case: -3 + 3 = 0, indices 0 and 2."
            },
            {
                "input": [
                    "1 2 3\n10"
                ],
                "output": "-1",
                "explanation": "Edge Case: No pair sums to 10."
            }
        ],
        "sol": "Single-pass hash table: seen = {}. For each index i, num: if target - num in seen return seen[target-num], i; seen[num] = i. Time O(N), Space O(N)."
    },
    {
        "id": "arr_stock_buy_sell_1",
        "cat": "arrays",
        "title": "Stock Buy and Sell – Only One Transaction Allowed",
        "diff": "beginner",
        "inp": "array_of_ints",
        "desc": "You are given an array `prices` where `prices[i]` is the price of a given stock on the i-th day. Find the maximum profit you can achieve by choosing a single day to buy one stock and choosing a different day in the future to sell it. If no profit can be achieved, return 0.",
        "prompts": [
            "Track the minimum price seen so far and calculate potential profit at each day.",
            "Twisted test cases: strictly descending prices where max profit is 0, and sudden extreme price spikes."
        ],
        "tests": [
            {
                "input": [
                    "7 1 5 3 6 4"
                ],
                "output": "5",
                "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
            },
            {
                "input": [
                    "7 6 4 3 1"
                ],
                "output": "0",
                "explanation": "Twisted Descending Case: Prices keep dropping; no profitable transaction possible -> 0."
            },
            {
                "input": [
                    "2 4 1"
                ],
                "output": "2",
                "explanation": "Twisted Late Drop Case: Drop to 1 happens at the end; max profit was 4 - 2 = 2."
            },
            {
                "input": [
                    "100"
                ],
                "output": "0",
                "explanation": "Single Day Case: Cannot buy and sell on separate days -> 0."
            },
            {
                "input": [
                    "1 1 1 1"
                ],
                "output": "0",
                "explanation": "Flat Prices Case: Profit = 0."
            }
        ],
        "sol": "Track min_price and max_profit in a single loop. min_price = min(min_price, price); max_profit = max(max_profit, price - min_price). Time O(N), Space O(1)."
    },
    {
        "id": "arr_next_permutation",
        "cat": "arrays",
        "title": "Next Permutation",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an array of integers `nums`, find the next lexicographically greater permutation of numbers. If such arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).",
        "prompts": [
            "Find the first decreasing element from the right (pivot index i where nums[i] < nums[i+1]).",
            "Find the element just greater than nums[i] to its right, swap them, and reverse the remaining suffix."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3"
                ],
                "output": "1 3 2",
                "explanation": "Next permutation of 1 2 3 is 1 3 2."
            },
            {
                "input": [
                    "3 2 1"
                ],
                "output": "1 2 3",
                "explanation": "Twisted Max Permutation Case: Reverses completely back to lowest order 1 2 3."
            },
            {
                "input": [
                    "1 1 5"
                ],
                "output": "1 5 1",
                "explanation": "Twisted Duplicate Case: 1 1 5 becomes 1 5 1."
            },
            {
                "input": [
                    "1 5 8 4 7 6 5 3 1"
                ],
                "output": "1 5 8 5 1 3 4 6 7",
                "explanation": "Multi-digit complex permutation test."
            }
        ],
        "sol": "Algorithm: 1) Scan from right to find pivot i where nums[i] < nums[i+1]. 2) If found, scan right to find element j > nums[i], swap(i, j). 3) Reverse suffix from i+1 to end. Time O(N), Space O(1)."
    },
    {
        "id": "arr_product_array_puzzle",
        "cat": "arrays",
        "title": "Product Array Puzzle",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an array `nums` of n integers, construct a product array `res` such that `res[i]` is equal to the product of all elements of `nums` except `nums[i]`, without using the division operator `/`.",
        "prompts": [
            "Compute prefix products from left to right, and multiply by suffix products running from right to left.",
            "Twisted test cases: arrays containing a single zero (only that index has non-zero product) or multiple zeroes (all result indices become 0)."
        ],
        "tests": [
            {
                "input": [
                    "10 3 5 6 2"
                ],
                "output": "180 600 360 300 900",
                "explanation": "Product of all except 10 is 180, except 3 is 600, etc."
            },
            {
                "input": [
                    "1 2 0 4 5"
                ],
                "output": "0 0 40 0 0",
                "explanation": "Twisted Single Zero Case: Only index 2 gets product of other elements (40); others get 0."
            },
            {
                "input": [
                    "0 0 5 8"
                ],
                "output": "0 0 0 0",
                "explanation": "Twisted Multiple Zeroes Case: All outputs are 0."
            },
            {
                "input": [
                    "-1 1 0 -3 3"
                ],
                "output": "0 0 9 0 0",
                "explanation": "Twisted Negative and Zero Case."
            }
        ],
        "sol": "Prefix and Suffix passes: Initialize res with prefix products. Traverse backward maintaining running suffix product and multiply into res[i]. Time O(N), Space O(1) auxiliary."
    },
    {
        "id": "arr_maximum_subarray_sum",
        "cat": "arrays",
        "title": "Maximum Subarray Sum",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum (Kadane's Algorithm).",
        "prompts": [
            "Maintain current_sum and global_sum.",
            "Twisted test case: All negative numbers (must return the single least-negative element, not 0)."
        ],
        "tests": [
            {
                "input": [
                    "-2 1 -3 4 -1 2 1 -5 4"
                ],
                "output": "6",
                "explanation": "Subarray [4, -1, 2, 1] has max sum = 6."
            },
            {
                "input": [
                    "-8 -3 -6 -2 -5 -4"
                ],
                "output": "-2",
                "explanation": "Twisted All-Negative Case: Maximum sum is -2 (single element)."
            },
            {
                "input": [
                    "5 4 -1 7 8"
                ],
                "output": "23",
                "explanation": "Entire array sums to 23."
            },
            {
                "input": [
                    "-1"
                ],
                "output": "-1",
                "explanation": "Single negative element -> -1."
            }
        ],
        "sol": "Kadane's Algorithm: curr_max = global_max = nums[0]. For x in nums[1:]: curr_max = max(x, curr_max + x); global_max = max(global_max, curr_max). Time O(N), Space O(1)."
    },
    {
        "id": "arr_max_consecutive_ones_flip",
        "cat": "arrays",
        "title": "Maximum Consecutive Ones After Flipping Zeroes",
        "diff": "intermediate",
        "inp": "array_and_k",
        "desc": "Given a binary array `nums` and an integer `k`, return the maximum number of consecutive 1's in the array if you can flip at most `k` 0's to 1's.",
        "prompts": [
            "Use the Sliding Window technique: Expand right pointer; when zero count exceeds k, shrink left pointer.",
            "Twisted test cases: k = 0 (no flips allowed) or k greater than total number of zeroes."
        ],
        "tests": [
            {
                "input": [
                    "1 1 1 0 0 0 1 1 1 1 0\n2"
                ],
                "output": "6",
                "explanation": "Flipping two zeroes gives consecutive 1s of length 6."
            },
            {
                "input": [
                    "0 0 1 1 0 0 1 1 1 0 1 1 0 0 0 1 1 1 1\n3"
                ],
                "output": "10",
                "explanation": "Flip 3 zeroes to achieve maximum length 10."
            },
            {
                "input": [
                    "1 0 1 1 0\n0"
                ],
                "output": "2",
                "explanation": "Twisted k=0 Case: No flips permitted, longest natural sequence is 2."
            },
            {
                "input": [
                    "0 0 0\n3"
                ],
                "output": "3",
                "explanation": "All zeroes flipped to 1s -> length 3."
            }
        ],
        "sol": "Sliding window: left = 0, zeroes = 0, max_len = 0. For right in range(N): if nums[right] == 0 zeroes++; while zeroes > k: if nums[left] == 0 zeroes--; left++; max_len = max(max_len, right - left + 1). Time O(N), Space O(1)."
    },
    {
        "id": "arr_min_sorted_rotated",
        "cat": "arrays",
        "title": "Minimum in Sorted and Rotated Array",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given a sorted and rotated array `nums` of unique elements, return the minimum element of this array in O(log N) time.",
        "prompts": [
            "Use Modified Binary Search: Compare mid element with the rightmost element to decide whether to search left or right half.",
            "Twisted test cases: Array rotated 0 times (already fully sorted), or rotated N-1 times."
        ],
        "tests": [
            {
                "input": [
                    "3 4 5 1 2"
                ],
                "output": "1",
                "explanation": "Array rotated 3 times; minimum element is 1."
            },
            {
                "input": [
                    "4 5 6 7 0 1 2"
                ],
                "output": "0",
                "explanation": "Minimum is 0."
            },
            {
                "input": [
                    "11 13 15 17"
                ],
                "output": "11",
                "explanation": "Twisted 0 Rotations Case: Array is already sorted; min is nums[0] = 11."
            },
            {
                "input": [
                    "2 1"
                ],
                "output": "1",
                "explanation": "Two elements inverted -> 1."
            }
        ],
        "sol": "Binary Search: low = 0, high = N - 1. While low < high: mid = (low + high) // 2. If nums[mid] > nums[high] low = mid + 1 else high = mid. Return nums[low]. Time O(log N), Space O(1)."
    },
    {
        "id": "arr_single_digit_sum",
        "cat": "arrays",
        "title": "Finding sum of digits of a number until sum becomes single digit",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Given a non-negative integer `n`, repeatedly add all its digits until the result has only one digit (Digital Root) in O(1) time.",
        "prompts": [
            "Apply the mathematical Digital Root formula using modulo 9 arithmetic.",
            "Twisted test cases: n = 0, multiples of 9 (which should yield 9, not 0)."
        ],
        "tests": [
            {
                "input": [
                    "38"
                ],
                "output": "2",
                "explanation": "3 + 8 = 11 -> 1 + 1 = 2."
            },
            {
                "input": [
                    "0"
                ],
                "output": "0",
                "explanation": "Twisted Zero Case: Digital root of 0 is 0."
            },
            {
                "input": [
                    "18"
                ],
                "output": "9",
                "explanation": "Twisted Multiple of 9 Case: 1 + 8 = 9."
            },
            {
                "input": [
                    "999999999"
                ],
                "output": "9",
                "explanation": "Large number sum -> 9."
            }
        ],
        "sol": "Digital Root Formula: If n == 0 return 0. If n % 9 == 0 return 9 else return n % 9. Time O(1), Space O(1)."
    },
    {
        "id": "arr_triplets_given_sum",
        "cat": "arrays",
        "title": "Find All Triplets With Given Sum",
        "diff": "intermediate",
        "inp": "array_and_target",
        "desc": "Given an array `nums` of n integers and an integer `target`, return the total count of unique triplets `(nums[i], nums[j], nums[k])` such that `i < j < k` and `nums[i] + nums[j] + nums[k] == target`.",
        "prompts": [
            "Sort the array and use Two Pointers for each fixed first element.",
            "Twisted test cases: Duplicate numbers in array, all-zero arrays, negative targets."
        ],
        "tests": [
            {
                "input": [
                    "-1 0 1 2 -1 -4\n0"
                ],
                "output": "2",
                "explanation": "Triplets summing to 0: [-1, -1, 2] and [-1, 0, 1] -> Count = 2."
            },
            {
                "input": [
                    "0 0 0 0\n0"
                ],
                "output": "1",
                "explanation": "Twisted Duplicates Case: Only one unique triplet [0, 0, 0] -> Count = 1."
            },
            {
                "input": [
                    "1 2 3 4 5\n9"
                ],
                "output": "2",
                "explanation": "Triplets: [1, 3, 5], [2, 3, 4] -> Count = 2."
            },
            {
                "input": [
                    "1 2 3\n100"
                ],
                "output": "0",
                "explanation": "No triplet exists -> 0."
            }
        ],
        "sol": "Sort nums. For i in range(len - 2): skip duplicates. Left = i + 1, Right = len - 1. While Left < Right: sum = nums[i] + nums[Left] + nums[Right]. If sum == target: record, skip duplicate Left and Right; elif sum < target: Left++; else: Right--. Time O(N^2), Space O(1)."
    },
    {
        "id": "arr_container_most_water",
        "cat": "arrays",
        "title": "Container With Most Water",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an integer array `height` of length n, find two lines that together with the x-axis form a container such that the container contains the most water. Return the maximum amount of water a container can store.",
        "prompts": [
            "Use Two Pointers starting at the extremes (left = 0, right = n - 1).",
            "At each step, calculate area = min(height[left], height[right]) * (right - left), then advance the pointer with the shorter height."
        ],
        "tests": [
            {
                "input": [
                    "1 8 6 2 5 4 8 3 7"
                ],
                "output": "49",
                "explanation": "Lines at index 1 (height 8) and index 8 (height 7) give area = min(8,7) * (8 - 1) = 7 * 7 = 49."
            },
            {
                "input": [
                    "1 1"
                ],
                "output": "1",
                "explanation": "Two lines of height 1 at distance 1 -> area = 1."
            },
            {
                "input": [
                    "4 3 2 1 4"
                ],
                "output": "16",
                "explanation": "Twisted Equal Extremes: min(4, 4) * 4 = 16."
            },
            {
                "input": [
                    "1 2 1"
                ],
                "output": "2",
                "explanation": "Max area = 2."
            }
        ],
        "sol": "Two pointer greedy: left = 0, right = N - 1, max_area = 0. While left < right: h = min(height[left], height[right]); max_area = max(max_area, h * (right - left)); if height[left] < height[right] left++ else right--. Time O(N), Space O(1)."
    },
    {
        "id": "bin_sum_two_no_arith",
        "cat": "binary",
        "title": "Sum of Two Numbers Without Using Arithmetic Operators",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Given two integers `a` and `b`, return the sum of the two integers without using the operators `+` and `-`.",
        "prompts": [
            "Use XOR `^` for addition without carry, and AND `&` shifted left `<< 1` for the carry.",
            "Twisted test cases: Negative integers and large carries."
        ],
        "tests": [
            {
                "input": [
                    "2 3"
                ],
                "output": "5",
                "explanation": "2 + 3 = 5."
            },
            {
                "input": [
                    "-5 3"
                ],
                "output": "-2",
                "explanation": "Twisted Negative Case: -5 + 3 = -2."
            },
            {
                "input": [
                    "0 15"
                ],
                "output": "15",
                "explanation": "Adding zero -> 15."
            },
            {
                "input": [
                    "-10 -20"
                ],
                "output": "-30",
                "explanation": "Both negative numbers -> -30."
            }
        ],
        "sol": "Bitwise adder: while b != 0: carry = (a & b) << 1; a = a ^ b; b = carry. Return a. Time O(log(max(A, B))), Space O(1)."
    },
    {
        "id": "bin_number_1_bit",
        "cat": "binary",
        "title": "Number of 1 Bit",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Write a function that takes an unsigned integer `n` and returns the number of '1' bits it has (also known as the Hamming Weight).",
        "prompts": [
            "Brian Kernighan's Algorithm: `n = n & (n - 1)` clears the lowest set bit in each iteration.",
            "Twisted test cases: Power of 2 (exactly 1 bit), zero (0 bits), and all 1s (e.g. 255 -> 8 bits)."
        ],
        "tests": [
            {
                "input": [
                    "11"
                ],
                "output": "3",
                "explanation": "11 in binary is 1011 (three 1 bits)."
            },
            {
                "input": [
                    "128"
                ],
                "output": "1",
                "explanation": "Twisted Power of 2 Case: 128 is 10000000 -> 1 bit."
            },
            {
                "input": [
                    "0"
                ],
                "output": "0",
                "explanation": "Zero has 0 bits."
            },
            {
                "input": [
                    "255"
                ],
                "output": "8",
                "explanation": "255 is 11111111 (eight 1 bits)."
            }
        ],
        "sol": "Brian Kernighan: count = 0. While n > 0: n = n & (n - 1); count++. Return count. Time O(number of set bits), Space O(1)."
    },
    {
        "id": "bin_sum_all_subset_xor",
        "cat": "binary",
        "title": "Sum of All Subset XOR Totals",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "The XOR total of an array is the bitwise XOR of all its elements, or 0 if the array is empty. Given an array `nums`, return the sum of all XOR totals for every subset of `nums`.",
        "prompts": [
            "Mathematical insight: Any bit set in at least one element will appear in exactly half (2^(N-1)) of all subsets.",
            "Thus, Result = (Bitwise OR of all elements) * 2^(N - 1)."
        ],
        "tests": [
            {
                "input": [
                    "1 3"
                ],
                "output": "6",
                "explanation": "Subsets: []=0, [1]=1, [3]=3, [1,3]=1^3=2. Sum = 0+1+3+2 = 6."
            },
            {
                "input": [
                    "5 1 6"
                ],
                "output": "28",
                "explanation": "Sum of XOR totals across 8 subsets is 28."
            },
            {
                "input": [
                    "3 4 5 6 7 8"
                ],
                "output": "480",
                "explanation": "Larger subset evaluation -> 480."
            }
        ],
        "sol": "Bitwise OR Trick: Compute OR sum of all elements. Return OR_sum * (1 << (len(nums) - 1)). Time O(N), Space O(1)."
    },
    {
        "id": "bin_unique_number_1",
        "cat": "binary",
        "title": "Unique Number 1",
        "diff": "beginner",
        "inp": "array_of_ints",
        "desc": "Given a non-empty array of integers `nums`, every element appears twice except for one unique element. Find that single unique element in linear time and constant extra space.",
        "prompts": [
            "Use XOR identity: `x ^ x = 0` and `x ^ 0 = x`. XORing all elements cancels duplicate pairs.",
            "Twisted test cases: Unique element at index 0, at the end, or negative numbers."
        ],
        "tests": [
            {
                "input": [
                    "2 2 1"
                ],
                "output": "1",
                "explanation": "1 is the unique number."
            },
            {
                "input": [
                    "4 1 2 1 2"
                ],
                "output": "4",
                "explanation": "4 appears once; 1 and 2 appear twice."
            },
            {
                "input": [
                    "-1 -1 -5"
                ],
                "output": "-5",
                "explanation": "Twisted Negative Numbers Case: -5 appears once."
            },
            {
                "input": [
                    "99"
                ],
                "output": "99",
                "explanation": "Single element array -> 99."
            }
        ],
        "sol": "XOR all elements: res = 0. For x in nums: res ^= x. Return res. Time O(N), Space O(1)."
    },
    {
        "id": "bin_total_hamming_distance",
        "cat": "binary",
        "title": "Total Hamming Distance",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "The Hamming distance between two integers is the number of positions at which the corresponding bits are different. Given an integer array `nums`, return the sum of Hamming distances between all pairs of the integers in `nums` in O(32 * N) time.",
        "prompts": [
            "Count number of set bits (k) at bit position i across all numbers. Non-set bits = n - k.",
            "Total distance contribution at bit i is k * (n - k)."
        ],
        "tests": [
            {
                "input": [
                    "4 14 2"
                ],
                "output": "6",
                "explanation": "Binary: 4 (0100), 14 (1110), 2 (0010). Distance(4,14)=2, Distance(4,2)=2, Distance(14,2)=2. Total = 6."
            },
            {
                "input": [
                    "4 14 4"
                ],
                "output": "4",
                "explanation": "Twisted Duplicates Case: Total Hamming distance = 4."
            },
            {
                "input": [
                    "1 1 1 1"
                ],
                "output": "0",
                "explanation": "Identical numbers -> Distance = 0."
            }
        ],
        "sol": "Bit-by-bit tally: total = 0. For i in range(32): count_ones = sum((x >> i) & 1 for x in nums); total += count_ones * (N - count_ones). Return total. Time O(32 * N), Space O(1)."
    },
    {
        "id": "dp_climbing_stairs",
        "cat": "dp",
        "title": "Climbing Stairs to Reach the Top",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        "prompts": [
            "Fibonacci recurrence: `ways(n) = ways(n-1) + ways(n-2)`.",
            "Base cases: n=1 -> 1, n=2 -> 2."
        ],
        "tests": [
            {
                "input": [
                    "2"
                ],
                "output": "2",
                "explanation": "(1+1) or (2)."
            },
            {
                "input": [
                    "3"
                ],
                "output": "3",
                "explanation": "(1+1+1), (1+2), (2+1)."
            },
            {
                "input": [
                    "1"
                ],
                "output": "1",
                "explanation": "Single step -> 1 way."
            },
            {
                "input": [
                    "5"
                ],
                "output": "8",
                "explanation": "Fibonacci sequence: 8 distinct ways."
            }
        ],
        "sol": "DP state transition: a, b = 1, 2. For _ in range(3, n+1): a, b = b, a + b. Return b. Time O(N), Space O(1)."
    },
    {
        "id": "dp_coin_change_min",
        "cat": "dp",
        "title": "Coin Change (Minimum Coins)",
        "diff": "intermediate",
        "inp": "coins_and_amount",
        "desc": "Given an integer array `coins` representing coins of different denominations and an integer `amount`, return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
        "prompts": [
            "Unbounded Knapsack DP: `dp[i] = min(dp[i], dp[i - coin] + 1)`.",
            "Twisted test cases: amount = 0 (returns 0), impossible amount (returns -1)."
        ],
        "tests": [
            {
                "input": [
                    "1 2 5\n11"
                ],
                "output": "3",
                "explanation": "11 = 5 + 5 + 1 (3 coins)."
            },
            {
                "input": [
                    "2\n3"
                ],
                "output": "-1",
                "explanation": "Twisted Impossible Case: Cannot make 3 with coin 2 -> -1."
            },
            {
                "input": [
                    "1\n0"
                ],
                "output": "0",
                "explanation": "Twisted Amount Zero Case: 0 coins needed."
            },
            {
                "input": [
                    "186 419 83 408\n6249"
                ],
                "output": "20",
                "explanation": "Large target amount."
            }
        ],
        "sol": "DP array of size amount + 1 initialized to INF with dp[0] = 0. For a in range(1, amount+1): for c in coins: if a >= c: dp[a] = min(dp[a], dp[a - c] + 1). Return dp[amount] if dp[amount] != INF else -1. Time O(amount * len(coins)), Space O(amount)."
    },
    {
        "id": "dp_longest_increasing_subseq",
        "cat": "dp",
        "title": "Longest Increasing Subsequence",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence (LIS).",
        "prompts": [
            "Standard DP in O(N^2) or Patience Sorting with Binary Search (bisect_left) in O(N log N).",
            "Twisted test cases: strictly descending array (LIS = 1), all identical elements (LIS = 1)."
        ],
        "tests": [
            {
                "input": [
                    "10 9 2 5 3 7 101 18"
                ],
                "output": "4",
                "explanation": "LIS is [2, 3, 7, 101] of length 4."
            },
            {
                "input": [
                    "0 1 0 3 2 3"
                ],
                "output": "4",
                "explanation": "LIS is [0, 1, 2, 3] of length 4."
            },
            {
                "input": [
                    "7 7 7 7 7"
                ],
                "output": "1",
                "explanation": "Twisted Strictly Increasing Rule: Duplicates do not count, LIS = 1."
            },
            {
                "input": [
                    "5 4 3 2 1"
                ],
                "output": "1",
                "explanation": "Strictly decreasing array -> LIS = 1."
            }
        ],
        "sol": "Patience Sorting: Maintain tails array. For x in nums: binary search index idx in tails where tails[idx] >= x; if idx == len(tails) append x else tails[idx] = x. Return len(tails). Time O(N log N), Space O(N)."
    },
    {
        "id": "dp_edit_distance",
        "cat": "dp",
        "title": "Edit Distance",
        "diff": "advanced",
        "inp": "two_strings",
        "desc": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. Permitted operations: Insert a character, Delete a character, Replace a character (Levenshtein Distance).",
        "prompts": [
            "2D DP grid: if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1], else 1 + min(insert, delete, replace).",
            "Twisted test cases: empty strings, identical strings (0 operations)."
        ],
        "tests": [
            {
                "input": [
                    "horse\nros"
                ],
                "output": "3",
                "explanation": "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e'). Total = 3."
            },
            {
                "input": [
                    "intention\nexecution"
                ],
                "output": "5",
                "explanation": "5 operations required."
            },
            {
                "input": [
                    "abc\nabc"
                ],
                "output": "0",
                "explanation": "Identical strings -> 0 edits."
            },
            {
                "input": [
                    "\nabc"
                ],
                "output": "3",
                "explanation": "Empty string to abc -> 3 insertions."
            }
        ],
        "sol": "Levenshtein DP: dp[i][j] = min edits to convert word1[:i] to word2[:j]. dp[i][0] = i, dp[0][j] = j. Fill row by row. Time O(M * N), Space O(M * N)."
    },
    {
        "id": "dp_word_break",
        "cat": "dp",
        "title": "Word Break",
        "diff": "intermediate",
        "inp": "string_and_dict",
        "desc": "Given a string `s` and a dictionary of strings `wordDict`, return `True` if `s` can be segmented into a space-separated sequence of one or more dictionary words, else `False`.",
        "prompts": [
            "1D DP array: `dp[i]` is True if `s[:i]` can be segmented.",
            "Twisted test cases: Repeating words, overlapping prefixes, unsolvable trailing character."
        ],
        "tests": [
            {
                "input": [
                    "leetcode\nleet code"
                ],
                "output": "True",
                "explanation": "leetcode can be segmented as 'leet code'."
            },
            {
                "input": [
                    "applepenapple\napple pen"
                ],
                "output": "True",
                "explanation": "Segmented as 'apple pen apple' (reusing words allowed)."
            },
            {
                "input": [
                    "catsandog\ncats dog sand and cat"
                ],
                "output": "False",
                "explanation": "Twisted Deadlock: Cannot segment full string -> False."
            }
        ],
        "sol": "DP of length len(s)+1 with dp[0]=True. For i in range(1, len(s)+1): for j in range(i): if dp[j] and s[j:i] in wordSet: dp[i] = True; break. Return dp[len(s)]. Time O(N^2), Space O(N)."
    },
    {
        "id": "dp_stock_buy_sell_k",
        "cat": "dp",
        "title": "Stock Buy and Sell (Limit of K)",
        "diff": "advanced",
        "inp": "k_and_prices",
        "desc": "Given an integer `k` and an array of integers `prices`, find the maximum profit you can achieve with at most `k` transactions.",
        "prompts": [
            "If k >= n // 2, it reduces to unlimited transactions greedy sum of positive differences.",
            "Otherwise, maintain buy[j] and sell[j] DP arrays for j in 1..k."
        ],
        "tests": [
            {
                "input": [
                    "2\n2 4 1"
                ],
                "output": "2",
                "explanation": "Buy day 1, sell day 2 (profit = 2)."
            },
            {
                "input": [
                    "2\n3 2 6 5 0 3"
                ],
                "output": "7",
                "explanation": "Buy at 2 sell at 6 (profit 4) + Buy at 0 sell at 3 (profit 3) = 7."
            },
            {
                "input": [
                    "2\n1 2 3 4 5"
                ],
                "output": "4",
                "explanation": "Single upward trend -> profit 4."
            }
        ],
        "sol": "DP buy & sell arrays: buy[t] = max(buy[t], sell[t-1] - price), sell[t] = max(sell[t], buy[t] + price). Time O(K * N), Space O(K)."
    },
    {
        "id": "dp_combination_sum",
        "cat": "dp",
        "title": "Combination Sum",
        "diff": "intermediate",
        "inp": "candidates_and_target",
        "desc": "Given an array of distinct integers `candidates` and a target integer `target`, return the total count of unique combinations of `candidates` where the chosen numbers sum to `target`. The same number may be chosen unlimited times.",
        "prompts": [
            "Coin change variation counting combinations: outer loop iterates through candidates to ensure ordered unique combinations.",
            "Twisted test cases: target is smaller than the minimum candidate (returns 0)."
        ],
        "tests": [
            {
                "input": [
                    "2 3 6 7\n7"
                ],
                "output": "2",
                "explanation": "Combinations: [2, 2, 3] and [7] -> Count = 2."
            },
            {
                "input": [
                    "2 3 5\n8"
                ],
                "output": "3",
                "explanation": "Combinations: [2, 2, 2, 2], [2, 3, 3], [3, 5] -> Count = 3."
            },
            {
                "input": [
                    "2\n1"
                ],
                "output": "0",
                "explanation": "Twisted Target Smaller Case: Count = 0."
            }
        ],
        "sol": "Unbounded Combination DP: dp = [0] * (target + 1); dp[0] = 1. For c in candidates: for t in range(c, target + 1): dp[t] += dp[t - c]. Return dp[target]. Time O(N * target), Space O(target)."
    },
    {
        "id": "dp_stickler_thief",
        "cat": "dp",
        "title": "Stickler Thief",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Stickler the thief wants to loot money from a line of houses. He cannot loot two consecutive houses. Given an array `nums` of house values, return the maximum money he can loot.",
        "prompts": [
            "House Robber DP: `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`.",
            "Twisted test cases: single house, two houses, alternating large values."
        ],
        "tests": [
            {
                "input": [
                    "6 5 5 7 4"
                ],
                "output": "15",
                "explanation": "Loot house 1 (6), house 3 (5), house 5 (4) -> 6 + 5 + 4 = 15."
            },
            {
                "input": [
                    "1 5 3"
                ],
                "output": "5",
                "explanation": "Loot middle house 2 -> 5."
            },
            {
                "input": [
                    "10"
                ],
                "output": "10",
                "explanation": "Single house -> 10."
            },
            {
                "input": [
                    "2 7 9 3 1"
                ],
                "output": "12",
                "explanation": "Loot 2 + 9 + 1 = 12."
            }
        ],
        "sol": "DP space optimization: prev2, prev1 = 0, 0. For x in nums: curr = max(prev1, prev2 + x); prev2, prev1 = prev1, curr. Return prev1. Time O(N), Space O(1)."
    },
    {
        "id": "dp_partition_equal_subset",
        "cat": "dp",
        "title": "Partition Equal Subset Sum",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an integer array `nums`, return `True` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal, else `False`.",
        "prompts": [
            "If total sum is odd, partitioning is immediately impossible (return False).",
            "Otherwise, target = total // 2. Solve 0/1 Knapsack Subset Sum for target."
        ],
        "tests": [
            {
                "input": [
                    "1 5 11 5"
                ],
                "output": "True",
                "explanation": "Subsets [1, 5, 5] and [11] both sum to 11 -> True."
            },
            {
                "input": [
                    "1 2 3 5"
                ],
                "output": "False",
                "explanation": "Sum is 11 (odd) -> False."
            },
            {
                "input": [
                    "2 2 2 2"
                ],
                "output": "True",
                "explanation": "[2, 2] and [2, 2] -> True."
            }
        ],
        "sol": "Check sum(nums) % 2 == 0. Target = sum // 2. dp = set([0]). For x in nums: dp |= {s + x for s in dp if s + x <= Target}. Return Target in dp. Time O(N * Target), Space O(Target)."
    },
    {
        "id": "dp_total_decoding_messages",
        "cat": "dp",
        "title": "Total Decoding Messages",
        "diff": "intermediate",
        "inp": "single_string",
        "desc": "A message containing letters from A-Z can be encoded into numbers using mapping 'A'->1, 'B'->2, ..., 'Z'->26. Given a string `s` of digits, return the number of ways to decode it.",
        "prompts": [
            "Consider 1-digit decodings ('1'-'9') and valid 2-digit decodings ('10'-'26').",
            "Twisted test cases: leading '0' (returns 0), invalid '00' or '30' combinations."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "2",
                "explanation": "Decoded as 'AB' (1 2) or 'L' (12) -> 2 ways."
            },
            {
                "input": [
                    "226"
                ],
                "output": "3",
                "explanation": "Decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6) -> 3 ways."
            },
            {
                "input": [
                    "06"
                ],
                "output": "0",
                "explanation": "Twisted Leading Zero Case: '06' is invalid -> 0."
            },
            {
                "input": [
                    "10"
                ],
                "output": "1",
                "explanation": "Decoded as 'J' (10) -> 1 way."
            }
        ],
        "sol": "DP tracking valid single and double digit transitions: dp[0] = 1, dp[1] = 1 if s[0] != '0' else 0. For i in range(2, len(s)+1): take single digit (if s[i-1]!='0') and take double digit (if 10 <= int(s[i-2:i]) <= 26). Time O(N), Space O(N)."
    },
    {
        "id": "dp_grid_unique_paths",
        "cat": "dp",
        "title": "Grid Unique Paths",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "A robot is located at the top-left corner of an `m x n` grid. The robot can only move either down or right at any point in time. Return the number of possible unique paths to reach the bottom-right corner.",
        "prompts": [
            "Combinatorics formula: `C(m + n - 2, m - 1)` or 2D grid DP `dp[i][j] = dp[i-1][j] + dp[i][j-1]`.",
            "Twisted test cases: 1x1 grid (1 path), 1xN or Mx1 grid (1 path)."
        ],
        "tests": [
            {
                "input": [
                    "3 7"
                ],
                "output": "28",
                "explanation": "3x7 grid -> 28 paths."
            },
            {
                "input": [
                    "3 2"
                ],
                "output": "3",
                "explanation": "3x2 grid -> 3 paths."
            },
            {
                "input": [
                    "1 1"
                ],
                "output": "1",
                "explanation": "1x1 grid -> 1 path."
            },
            {
                "input": [
                    "1 10"
                ],
                "output": "1",
                "explanation": "Single row grid -> 1 path."
            }
        ],
        "sol": "Math Combination Formula: Total steps = (m-1) + (n-1). Result = (m+n-2)! / ((m-1)! * (n-1)!). Time O(min(M, N)), Space O(1)."
    },
    {
        "id": "dp_matrix_chain_multiplication",
        "cat": "dp",
        "title": "Matrix Chain Multiplication",
        "diff": "advanced",
        "inp": "array_of_ints",
        "desc": "Given an array `p` of numbers representing matrix dimensions where the i-th matrix has dimensions `p[i-1] x p[i]`, find the minimum number of scalar multiplications needed to multiply the chain of matrices.",
        "prompts": [
            "Interval DP: `m[i, j] = min_{i <= k < j} (m[i, k] + m[k+1, j] + p[i-1]*p[k]*p[j])`.",
            "Evaluate chain length `L` from 2 to N-1."
        ],
        "tests": [
            {
                "input": [
                    "10 20 30 40 30"
                ],
                "output": "30000",
                "explanation": "Optimal order: ((M1(M2M3))M4) -> 30,000 multiplications."
            },
            {
                "input": [
                    "10 20 30"
                ],
                "output": "6000",
                "explanation": "Single pair: 10 * 20 * 30 = 6000."
            },
            {
                "input": [
                    "40 20 30 10 30"
                ],
                "output": "26000",
                "explanation": "Minimum multiplications = 26,000."
            }
        ],
        "sol": "DP table dp[N][N]. Chain length L from 2 to N-1: for i in 1..N-L: j = i + L - 1; dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j] for k in i..j-1). Return dp[1][N-1]. Time O(N^3), Space O(N^2)."
    },
    {
        "id": "graph_bfs",
        "cat": "graph",
        "title": "Breadth First Search (BFS Traversal)",
        "diff": "beginner",
        "inp": "graph_edges",
        "desc": "Given a connected undirected graph with V vertices (numbered 0 to V-1) and adjacency list representation, perform Breadth First Search (BFS) starting from vertex 0 and return the node traversal order.",
        "prompts": [
            "Use a Queue (FIFO) and a boolean visited array to avoid revisiting vertices.",
            "Twisted test cases: Disconnected components, cycles, single vertex graph."
        ],
        "tests": [
            {
                "input": [
                    "5\n0 1\n0 2\n0 3\n2 4"
                ],
                "output": "0 1 2 3 4",
                "explanation": "BFS explores 0 -> neighbors (1, 2, 3) -> neighbor of 2 (4)."
            },
            {
                "input": [
                    "4\n0 1\n1 2\n2 3"
                ],
                "output": "0 1 2 3",
                "explanation": "Linear path graph BFS traversal."
            },
            {
                "input": [
                    "1"
                ],
                "output": "0",
                "explanation": "Single vertex -> 0."
            }
        ],
        "sol": "BFS with Queue: visited = [False]*V; queue = [0]; visited[0] = True; while queue: u = queue.pop(0); print(u); for v in adj[u]: if not visited[v]: visited[v] = True; queue.append(v). Time O(V + E), Space O(V)."
    },
    {
        "id": "graph_dfs",
        "cat": "graph",
        "title": "Depth First Search (DFS Traversal)",
        "diff": "beginner",
        "inp": "graph_edges",
        "desc": "Given a connected undirected graph with V vertices and adjacency list, perform Depth First Search (DFS) starting from vertex 0 and return the traversal order.",
        "prompts": [
            "Use Recursion or an explicit Stack (LIFO) and a visited set.",
            "Twisted test cases: graphs with back-edges (cycles), dense cliques."
        ],
        "tests": [
            {
                "input": [
                    "5\n0 1\n0 2\n0 4\n4 3"
                ],
                "output": "0 1 2 4 3",
                "explanation": "DFS explores deep branch first: 0 -> 1 -> 2 -> 4 -> 3."
            },
            {
                "input": [
                    "4\n0 1\n0 2\n1 2\n2 0\n2 3\n3 3"
                ],
                "output": "0 1 2 3",
                "explanation": "Cyclic graph DFS traversal."
            }
        ],
        "sol": "Recursive DFS: visited = [False]*V. def dfs(u): visited[u] = True; res.append(u); for v in adj[u]: if not visited[v]: dfs(v). Time O(V + E), Space O(V)."
    },
    {
        "id": "graph_number_of_islands",
        "cat": "graph",
        "title": "Number of Islands",
        "diff": "intermediate",
        "inp": "grid_binary",
        "desc": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        "prompts": [
            "Traverse grid: When a '1' is found, increment island count and trigger BFS/DFS/Flood-Fill to sink connected land cells to '0'.",
            "Twisted test cases: All water (0 islands), all land (1 island), checkerboard pattern."
        ],
        "tests": [
            {
                "input": [
                    "4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0"
                ],
                "output": "1",
                "explanation": "All land cells connect to form 1 single island."
            },
            {
                "input": [
                    "4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1"
                ],
                "output": "3",
                "explanation": "3 separate disconnected islands."
            },
            {
                "input": [
                    "3 3\n0 0 0\n0 0 0\n0 0 0"
                ],
                "output": "0",
                "explanation": "Twisted All Water Case: 0 islands."
            }
        ],
        "sol": "Flood fill DFS: count = 0. For r in range(M): for c in range(N): if grid[r][c] == '1': count++; dfs(r, c) marking visited to '0'. Return count. Time O(M * N), Space O(M * N)."
    },
    {
        "id": "graph_islands_in_graph",
        "cat": "graph",
        "title": "Islands in a Graph",
        "diff": "intermediate",
        "inp": "grid_binary",
        "desc": "Given a boolean 2D matrix, find the number of islands allowing all 8-directional connections (Horizontal, Vertical, and Diagonal).",
        "prompts": [
            "8-directional flood fill: Explore delta rows `[-1, 0, 1]` and delta cols `[-1, 0, 1]`.",
            "Twisted test cases: Islands connected solely via diagonal corner junctions."
        ],
        "tests": [
            {
                "input": [
                    "3 3\n1 0 0\n0 1 0\n0 0 1"
                ],
                "output": "1",
                "explanation": "Twisted Diagonal Case: All 3 cells are diagonally connected -> 1 island."
            },
            {
                "input": [
                    "3 3\n1 0 1\n0 0 0\n1 0 1"
                ],
                "output": "4",
                "explanation": "4 corner islands completely separated by water."
            }
        ],
        "sol": "8-directional DFS: for dr in [-1,0,1]: for dc in [-1,0,1]: if dr or dc: explore (r+dr, c+dc). Time O(M*N), Space O(M*N)."
    },
    {
        "id": "graph_clone_undirected",
        "cat": "graph",
        "title": "Clone an Undirected Graph",
        "diff": "intermediate",
        "inp": "adj_list",
        "desc": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains an integer `val` and a list `neighbors`.",
        "prompts": [
            "Use a Hash Map `{original_node: cloned_node}` with DFS/BFS recursion to prevent infinite loops on graph cycles."
        ],
        "tests": [
            {
                "input": [
                    "4\n2 4\n1 3\n2 4\n1 3"
                ],
                "output": "Cloned Successfully",
                "explanation": "4-node square graph deep cloned with identical topology."
            },
            {
                "input": [
                    "1\n"
                ],
                "output": "Cloned Successfully",
                "explanation": "Single isolated node."
            }
        ],
        "sol": "DFS clone: clones = {}. def clone(node): if not node: return None; if node in clones: return clones[node]; copy = Node(node.val); clones[node] = copy; copy.neighbors = [clone(n) for n in node.neighbors]; return copy. Time O(V + E), Space O(V)."
    },
    {
        "id": "graph_word_ladder",
        "cat": "graph",
        "title": "Word Ladder",
        "diff": "advanced",
        "inp": "two_words_and_dict",
        "desc": "A transformation sequence from `beginWord` to `endWord` using a dictionary `wordList` is a sequence of words such that each adjacent pair differs by exactly one letter. Return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.",
        "prompts": [
            "Bidirectional BFS or standard BFS on word wildcards (e.g. `*ot`, `h*t`, `ho*`).",
            "Shortest path in unweighted graph is guaranteed by BFS level traversal."
        ],
        "tests": [
            {
                "input": [
                    "hit\ncog\nhot dot dog lot log cog"
                ],
                "output": "5",
                "explanation": "Shortest path: hit -> hot -> dot -> dog -> cog (5 words)."
            },
            {
                "input": [
                    "hit\ncog\nhot dot dog lot log"
                ],
                "output": "0",
                "explanation": "Twisted Deadlock: 'cog' is not in word list -> 0."
            }
        ],
        "sol": "BFS level order: queue = deque([(beginWord, 1)]). wordSet = set(wordList). While queue: word, length = queue.popleft(); if word == endWord: return length; for each 1-letter mutation: if in wordSet: remove from set and push to queue. Time O(M^2 * N), Space O(M * N)."
    },
    {
        "id": "graph_longest_consecutive_subseq",
        "cat": "graph",
        "title": "Longest Consecutive Subsequence",
        "diff": "intermediate",
        "inp": "array_of_ints",
        "desc": "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence in O(N) time.",
        "prompts": [
            "Store elements in a Hash Set. Only start counting sequence length if `num - 1` is NOT in the set (i.e. num is the start of a sequence).",
            "Twisted test cases: duplicate numbers, negative consecutive sequences."
        ],
        "tests": [
            {
                "input": [
                    "100 4 200 1 3 2"
                ],
                "output": "4",
                "explanation": "Longest consecutive sequence is [1, 2, 3, 4] of length 4."
            },
            {
                "input": [
                    "0 3 7 2 5 8 4 6 0 1"
                ],
                "output": "9",
                "explanation": "Sequence [0, 1, 2, 3, 4, 5, 6, 7, 8] has length 9."
            },
            {
                "input": [
                    "-5 -4 -3 10 20"
                ],
                "output": "3",
                "explanation": "Twisted Negative Sequence: [-5, -4, -3] -> length 3."
            }
        ],
        "sol": "Hash Set sequence scan: num_set = set(nums), longest = 0. For x in num_set: if x - 1 not in num_set: curr = x; length = 1; while curr + 1 in num_set: curr += 1; length += 1; longest = max(longest, length). Time O(N), Space O(N)."
    },
    {
        "id": "graph_alien_dictionary",
        "cat": "graph",
        "title": "Alien Dictionary",
        "diff": "advanced",
        "inp": "words_list",
        "desc": "Given a sorted dictionary of an alien language of n words, find the unique order of characters in the alien language (Topological Sort / Kahn's Algorithm).",
        "prompts": [
            "Compare adjacent words to extract directed precedence edges (u -> v).",
            "Perform Topological Sort using Kahn's In-Degree Algorithm. If cycle detected, order is invalid."
        ],
        "tests": [
            {
                "input": [
                    "baa abcd abca cab cad"
                ],
                "output": "b d a c",
                "explanation": "Alien character order derived from topological sort."
            },
            {
                "input": [
                    "caa aaa aab"
                ],
                "output": "c a b",
                "explanation": "Order: c comes before a, a comes before b."
            }
        ],
        "sol": "Topological sort: Build directed graph of character precedence from adjacent word prefixes. Use queue-based Kahn's algorithm with in-degrees. Time O(C), Space O(1) (26 characters)."
    },
    {
        "id": "int_overlapping_intervals",
        "cat": "intervals",
        "title": "Overlapping Intervals (Merge Intervals)",
        "diff": "intermediate",
        "inp": "intervals_list",
        "desc": "Given an array of intervals where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        "prompts": [
            "Sort intervals by start time.",
            "Iterate: if current interval overlaps with last merged interval (start <= last_end), merge by updating `last_end = max(last_end, current_end)`."
        ],
        "tests": [
            {
                "input": [
                    "1 3\n2 6\n8 10\n15 18"
                ],
                "output": "1 6\n8 10\n15 18",
                "explanation": "[1,3] and [2,6] overlap -> [1,6]."
            },
            {
                "input": [
                    "1 4\n4 5"
                ],
                "output": "1 5",
                "explanation": "Twisted Touching Boundaries Case: [1,4] and [4,5] merge to [1,5]."
            },
            {
                "input": [
                    "1 4\n2 3"
                ],
                "output": "1 4",
                "explanation": "Twisted Complete Enclosure: [2,3] is inside [1,4] -> [1,4]."
            }
        ],
        "sol": "Sort by start time. merged = [intervals[0]]. For curr in intervals[1:]: if curr[0] <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], curr[1]) else: merged.append(curr). Time O(N log N), Space O(N)."
    },
    {
        "id": "int_min_platforms",
        "cat": "intervals",
        "title": "Minimum Platforms",
        "diff": "intermediate",
        "inp": "arrivals_and_departures",
        "desc": "Given arrival and departure times of all trains that reach a railway station, find the minimum number of platforms required for the railway station so that no train is kept waiting.",
        "prompts": [
            "Sort arrival and departure arrays independently.",
            "Use two pointers: if arrival <= departure, platform_count++, advance arrival pointer; else platform_count--, advance departure pointer."
        ],
        "tests": [
            {
                "input": [
                    "900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000"
                ],
                "output": "3",
                "explanation": "Maximum 3 trains overlap between 9:50 and 11:20 -> 3 platforms needed."
            },
            {
                "input": [
                    "900 1100 1235\n1000 1200 1240"
                ],
                "output": "1",
                "explanation": "No train overlap -> 1 platform needed."
            },
            {
                "input": [
                    "900 900\n1000 1000"
                ],
                "output": "2",
                "explanation": "Twisted Simultaneous Arrival: 2 platforms needed."
            }
        ],
        "sol": "Sort arr and dep. i = 0, j = 0, plat = 0, max_plat = 0. While i < N: if arr[i] <= dep[j]: plat++; max_plat = max(max_plat, plat); i++ else: plat--; j++. Return max_plat. Time O(N log N), Space O(1)."
    },
    {
        "id": "int_meeting_rooms",
        "cat": "intervals",
        "title": "Meeting Rooms",
        "diff": "intermediate",
        "inp": "intervals_list",
        "desc": "Given an array of meeting time intervals `[[start_1, end_1], ...]`, return the minimum number of conference rooms required to host all meetings without overlap.",
        "prompts": [
            "Min-Heap on end times or Two-Pointer sweep on sorted start and end arrays."
        ],
        "tests": [
            {
                "input": [
                    "0 30\n5 10\n15 20"
                ],
                "output": "2",
                "explanation": "Meeting [0, 30] overlaps with [5, 10] and [15, 20] -> 2 rooms needed."
            },
            {
                "input": [
                    "7 10\n2 4"
                ],
                "output": "1",
                "explanation": "No overlap -> 1 room needed."
            }
        ],
        "sol": "Extract and sort start times and end times. Two pointers sweep: if starts[s] < ends[e]: rooms++; s++ else: rooms--; e++. Max rooms recorded. Time O(N log N), Space O(N)."
    },
    {
        "id": "int_job_sequencing",
        "cat": "intervals",
        "title": "Job Sequencing Problem",
        "diff": "intermediate",
        "inp": "jobs_deadline_profit",
        "desc": "Given a set of `n` jobs where each job `i` has a deadline and profit associated with it. Each job takes 1 unit of time to complete and only one job can be scheduled at a time. Find the maximum profit and count of jobs done.",
        "prompts": [
            "Greedy approach: Sort jobs in descending order of profit.",
            "For each job, schedule it on the latest possible available time slot (from deadline down to 1)."
        ],
        "tests": [
            {
                "input": [
                    "4\n1 4 20\n2 1 10\n3 1 40\n4 1 30"
                ],
                "output": "2 60",
                "explanation": "2 jobs done (job 3 profit 40 + job 1 profit 20) with maximum profit = 60."
            },
            {
                "input": [
                    "5\n1 2 100\n2 1 19\n3 2 27\n4 1 25\n5 1 15"
                ],
                "output": "2 127",
                "explanation": "Jobs 1 and 3 selected -> profit = 127."
            }
        ],
        "sol": "Sort jobs by profit descending. slots = [-1]*(max_deadline + 1). For job in jobs: for d in range(job.deadline, 0, -1): if slots[d] == -1: slots[d] = job.id; total_profit += job.profit; count++; break. Return count, total_profit. Time O(N^2), Space O(max_deadline)."
    },
    {
        "id": "int_max_interval_overlap",
        "cat": "intervals",
        "title": "Maximum Interval Overlap",
        "diff": "intermediate",
        "inp": "intervals_list",
        "desc": "Given an array of entry and exit intervals of guests at a party, find the maximum number of guests present at any single instant and the earliest time at which this maximum occurs.",
        "prompts": [
            "Sort entries and exits. When entry == exit, process entry first to handle simultaneous occupancy.",
            "Track peak guests and the corresponding timestamp."
        ],
        "tests": [
            {
                "input": [
                    "1 2 10 5 5\n4 5 12 9 12"
                ],
                "output": "3 5",
                "explanation": "At time 5, maximum 3 guests are present."
            },
            {
                "input": [
                    "13 28 29 14 40 17 3\n107 95 111 105 70 127 74"
                ],
                "output": "7 40",
                "explanation": "Peak of 7 guests at time 40."
            }
        ],
        "sol": "Sort entry and exit arrays. Two pointer sweep tracking peak concurrent events and earliest peak time. Time O(N log N), Space O(N)."
    },
    {
        "id": "ll_detect_loop",
        "cat": "linkedlist",
        "title": "Detect Loop in Linked List",
        "diff": "beginner",
        "inp": "list_and_pos",
        "desc": "Given the head of a singly linked list, determine if the linked list has a cycle in it using Floyd's Tortoise and Hare Cycle-Finding Algorithm.",
        "prompts": [
            "Use slow pointer (1 step) and fast pointer (2 steps). If they meet, a cycle exists.",
            "Twisted test cases: 1-node self loop, 2-node cycle, straight list with no cycle."
        ],
        "tests": [
            {
                "input": [
                    "3 2 0 -4\n1"
                ],
                "output": "True",
                "explanation": "Tail connects to node at index 1 -> Cycle exists (True)."
            },
            {
                "input": [
                    "1 2\n0"
                ],
                "output": "True",
                "explanation": "2-node cycle -> True."
            },
            {
                "input": [
                    "1\n-1"
                ],
                "output": "False",
                "explanation": "Single node with no cycle -> False."
            }
        ],
        "sol": "Floyd's algorithm: slow = fast = head. While fast and fast.next: slow = slow.next; fast = fast.next.next; if slow == fast: return True. Return False. Time O(N), Space O(1)."
    },
    {
        "id": "ll_merge_two_sorted",
        "cat": "linkedlist",
        "title": "Merge Two Sorted Linked Lists",
        "diff": "beginner",
        "inp": "two_sorted_lists",
        "desc": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list and return its head.",
        "prompts": [
            "Use a dummy head node and iteratively splice the smaller node.",
            "Twisted test cases: one or both lists empty, lists of differing lengths."
        ],
        "tests": [
            {
                "input": [
                    "1 2 4\n1 3 4"
                ],
                "output": "1 1 2 3 4 4",
                "explanation": "Merged sorted list."
            },
            {
                "input": [
                    "\n0"
                ],
                "output": "0",
                "explanation": "Twisted Empty List Case: Merge empty with [0] -> [0]."
            },
            {
                "input": [
                    "5 10 15\n2 3 20"
                ],
                "output": "2 3 5 10 15 20",
                "explanation": "Merged list."
            }
        ],
        "sol": "Dummy pointer: dummy = curr = ListNode(0). While l1 and l2: if l1.val <= l2.val: curr.next = l1; l1 = l1.next else: curr.next = l2; l2 = l2.next; curr = curr.next. curr.next = l1 or l2. Return dummy.next. Time O(N + M), Space O(1)."
    },
    {
        "id": "ll_rotate_list",
        "cat": "linkedlist",
        "title": "Rotate a Linked List",
        "diff": "intermediate",
        "inp": "list_and_k",
        "desc": "Given the head of a linked list, rotate the list to the right by `k` places.",
        "prompts": [
            "Connect tail to head to form a circular ring, then break the ring at position `length - (k % length)`.",
            "Twisted test cases: k = 0, k equal to or larger than length of the list."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5\n2"
                ],
                "output": "4 5 1 2 3",
                "explanation": "Rotated right by 2 -> [4, 5, 1, 2, 3]."
            },
            {
                "input": [
                    "0 1 2\n4"
                ],
                "output": "2 0 1",
                "explanation": "Twisted k > length: 4 % 3 = 1 rotation -> [2, 0, 1]."
            },
            {
                "input": [
                    "1 2 3\n0"
                ],
                "output": "1 2 3",
                "explanation": "k = 0 -> unchanged list."
            }
        ],
        "sol": "Compute length N and find tail. k = k % N. Connect tail.next = head. Traverse N - k steps to find new tail, set new_head = new_tail.next, and break new_tail.next = None. Return new_head. Time O(N), Space O(1)."
    },
    {
        "id": "ll_intersection_point",
        "cat": "linkedlist",
        "title": "Intersection Point in Y Shaped Linked Lists",
        "diff": "intermediate",
        "inp": "y_lists",
        "desc": "Given the heads of two singly linked-lists `headA` and `headB`, return the value of the node at which the two lists intersect. If the two linked lists have no intersection at all, return -1.",
        "prompts": [
            "Two pointers method: Pointer A advances through list A then switches to head B. Pointer B advances through list B then switches to head A. They meet at the intersection point in exactly 2 passes."
        ],
        "tests": [
            {
                "input": [
                    "4 1 8 4 5\n5 6 1 8 4 5\n8"
                ],
                "output": "8",
                "explanation": "Intersect at node with value 8."
            },
            {
                "input": [
                    "1 9 1 2 4\n3 2 4\n2"
                ],
                "output": "2",
                "explanation": "Intersect at node with value 2."
            }
        ],
        "sol": "Two pointers: pA, pB = headA, headB. While pA != pB: pA = pA.next if pA else headB; pB = pB.next if pB else headA. Return pA.val if pA else -1. Time O(M + N), Space O(1)."
    },
    {
        "id": "ll_sum_two_lists",
        "cat": "linkedlist",
        "title": "Sum Two Linked Lists",
        "diff": "intermediate",
        "inp": "two_lists",
        "desc": "You are given two non-empty linked lists representing two non-negative integers in reverse order. Add the two numbers and return the sum as a linked list.",
        "prompts": [
            "Maintain running carry `carry = sum // 10`. Splicing nodes in reverse order mirrors column addition."
        ],
        "tests": [
            {
                "input": [
                    "2 4 3\n5 6 4"
                ],
                "output": "7 0 8",
                "explanation": "342 + 465 = 807 (represented as 7 -> 0 -> 8)."
            },
            {
                "input": [
                    "0\n0"
                ],
                "output": "0",
                "explanation": "0 + 0 = 0."
            },
            {
                "input": [
                    "9 9 9 9 9 9 9\n9 9 9 9"
                ],
                "output": "8 9 9 9 0 0 0 1",
                "explanation": "Twisted Carry Overflow Case: Multi-digit carries cascading to new node."
            }
        ],
        "sol": "Dummy head: carry = 0. While l1 or l2 or carry: val1 = l1.val if l1 else 0; val2 = l2.val if l2 else 0; total = val1 + val2 + carry; carry = total // 10; curr.next = ListNode(total % 10); advance pointers. Time O(max(N, M)), Space O(max(N, M))."
    },
    {
        "id": "ll_lru_cache",
        "cat": "linkedlist",
        "title": "LRU Cache",
        "diff": "advanced",
        "inp": "operations_stream",
        "desc": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with capacity `capacity`. Support `get(key)` and `put(key, value)` in O(1) average time complexity.",
        "prompts": [
            "Combine a Doubly Linked List (for O(1) node relocation and eviction) with a Hash Map (for O(1) key-to-node lookup)."
        ],
        "tests": [
            {
                "input": [
                    "2\nput 1 1\nput 2 2\nget 1\nput 3 3\nget 2"
                ],
                "output": "1 -1",
                "explanation": "Cache capacity 2. Key 2 is evicted when key 3 is added -> get(2) returns -1."
            },
            {
                "input": [
                    "1\nput 2 1\nget 2\nput 3 2\nget 2\nget 3"
                ],
                "output": "1 -1 2",
                "explanation": "Capacity 1 eviction testing."
            }
        ],
        "sol": "Hash Map + Doubly Linked List: Map stores key -> DLL Node. get(k) moves node to head and returns val. put(k, v) adds to head and if len > capacity removes tail node and deletes from map. Time O(1) each op, Space O(capacity)."
    },
    {
        "id": "mat_set_matrix_zeroes",
        "cat": "matrices",
        "title": "Set Matrix Zeroes",
        "diff": "intermediate",
        "inp": "matrix_grid",
        "desc": "Given an `m x n` integer matrix, if an element is 0, set its entire row and column to 0's in-place with O(1) extra memory.",
        "prompts": [
            "Use the 1st row and 1st column of the matrix itself as markers to record which rows and columns must be zeroed.",
            "Use a separate boolean flag `first_col_zero` for column 0."
        ],
        "tests": [
            {
                "input": [
                    "3 3\n1 1 1\n1 0 1\n1 1 1"
                ],
                "output": "1 0 1\n0 0 0\n1 0 1",
                "explanation": "Row 1 and Col 1 are set to zeroes."
            },
            {
                "input": [
                    "3 4\n0 1 2 0\n3 4 5 2\n1 3 1 5"
                ],
                "output": "0 0 0 0\n0 4 5 0\n0 3 1 0",
                "explanation": "Multiple zeroes in row 0."
            }
        ],
        "sol": "In-place markers: Track col0 flag. For r in range(M): for c in range(N): if matrix[r][c] == 0: matrix[r][0] = 0; if c == 0 col0 = True else matrix[0][c] = 0. Traverse backward to update matrix cells. Time O(M * N), Space O(1)."
    },
    {
        "id": "mat_spirally_traverse",
        "cat": "matrices",
        "title": "Spirally Traversing a Matrix",
        "diff": "intermediate",
        "inp": "matrix_grid",
        "desc": "Given an `m x n` matrix, return all elements of the matrix in spiral order (Right -> Down -> Left -> Up).",
        "prompts": [
            "Maintain 4 boundaries: `top`, `bottom`, `left`, `right`.",
            "Shrink boundaries after each directional pass. Stop when top > bottom or left > right."
        ],
        "tests": [
            {
                "input": [
                    "3 3\n1 2 3\n4 5 6\n7 8 9"
                ],
                "output": "1 2 3 6 9 8 7 4 5",
                "explanation": "Spiral traversal of 3x3 matrix."
            },
            {
                "input": [
                    "3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12"
                ],
                "output": "1 2 3 4 8 12 11 10 9 5 6 7",
                "explanation": "Non-square 3x4 matrix spiral."
            },
            {
                "input": [
                    "1 1\n42"
                ],
                "output": "42",
                "explanation": "Single element matrix -> 42."
            }
        ],
        "sol": "Boundary shrinking: top=0, bottom=M-1, left=0, right=N-1. While top<=bottom and left<=right: traverse top row (top++), traverse right col (right--), if top<=bottom traverse bottom row (bottom--), if left<=right traverse left col (left++). Time O(M * N), Space O(1)."
    },
    {
        "id": "mat_search_sorted",
        "cat": "matrices",
        "title": "Search in a row-wise and column-wise sorted",
        "diff": "intermediate",
        "inp": "matrix_and_target",
        "desc": "Given an `m x n` matrix where each row and column is sorted in ascending order, search for a target value. Return `True` if found, else `False` in O(M + N) time.",
        "prompts": [
            "Start at the Top-Right corner `(row = 0, col = n - 1)`: if target == value return True; if target < value col--; if target > value row++."
        ],
        "tests": [
            {
                "input": [
                    "5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30\n5"
                ],
                "output": "True",
                "explanation": "5 is present at matrix[1][1] -> True."
            },
            {
                "input": [
                    "5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30\n20"
                ],
                "output": "False",
                "explanation": "20 is not present in matrix -> False."
            }
        ],
        "sol": "Top-right pointer search: r = 0, c = N - 1. While r < M and c >= 0: if matrix[r][c] == target: return True elif matrix[r][c] > target: c-- else: r++. Return False. Time O(M + N), Space O(1)."
    },
    {
        "id": "mat_rotate_180",
        "cat": "matrices",
        "title": "Rotate a Matrix by 180 degree",
        "diff": "intermediate",
        "inp": "matrix_grid",
        "desc": "Given an `N x N` 2D square matrix, rotate the matrix by 180 degrees clockwise in-place.",
        "prompts": [
            "Rotating 180° is equivalent to reversing the order of rows, and then reversing each individual row."
        ],
        "tests": [
            {
                "input": [
                    "3 3\n1 2 3\n4 5 6\n7 8 9"
                ],
                "output": "9 8 7\n6 5 4\n3 2 1",
                "explanation": "180 degree rotated matrix."
            },
            {
                "input": [
                    "2 2\n1 2\n3 4"
                ],
                "output": "4 3\n2 1",
                "explanation": "2x2 rotation."
            }
        ],
        "sol": "Reverse rows then reverse elements in each row: matrix.reverse(); for row in matrix: row.reverse(). Time O(N^2), Space O(1)."
    },
    {
        "id": "str_my_atoi",
        "cat": "strings",
        "title": "String to Integer - Your Own atoi()",
        "diff": "intermediate",
        "inp": "single_string",
        "desc": "Implement the `myAtoi(string s)` function which converts a string to a 32-bit signed integer with whitespace trimming, optional '+' or '-' sign handling, and 32-bit clamping `[-2^31, 2^31 - 1]`.",
        "prompts": [
            "1. Discard leading whitespace. 2. Check for optional sign '+' or '-'. 3. Read digits until non-digit. 4. Clamp within [-2147483648, 2147483647]."
        ],
        "tests": [
            {
                "input": [
                    "42"
                ],
                "output": "42",
                "explanation": "Parsed as integer 42."
            },
            {
                "input": [
                    "   -042"
                ],
                "output": "-42",
                "explanation": "Leading spaces trimmed, sign '-' evaluated -> -42."
            },
            {
                "input": [
                    "1337c0d3"
                ],
                "output": "1337",
                "explanation": "Twisted Trailing Non-Digits: Stops at first non-digit 'c' -> 1337."
            },
            {
                "input": [
                    "-91283472332"
                ],
                "output": "-2147483648",
                "explanation": "Twisted Clamping Underflow: Clamped to INT_MIN (-2147483648)."
            }
        ],
        "sol": "Sequential parsing: s = s.lstrip(). If not s return 0. Check sign. Parse digits while char is digit. Clamp between -2**31 and 2**31 - 1. Time O(N), Space O(1)."
    },
    {
        "id": "str_parenthesis_checker",
        "cat": "strings",
        "title": "Parenthesis Checker (Valid Parentheses)",
        "diff": "beginner",
        "inp": "single_string",
        "desc": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        "prompts": [
            "Use a Stack (LIFO): Push opening brackets; when closing bracket encountered, verify match with popped top.",
            "Twisted test cases: String of odd length, starts with closing bracket, unclosed brackets."
        ],
        "tests": [
            {
                "input": [
                    "()[]{}"
                ],
                "output": "True",
                "explanation": "All brackets matched correctly."
            },
            {
                "input": [
                    "(]"
                ],
                "output": "False",
                "explanation": "Mismatched bracket types -> False."
            },
            {
                "input": [
                    "]"
                ],
                "output": "False",
                "explanation": "Twisted Lone Closing Bracket -> False."
            },
            {
                "input": [
                    "((("
                ],
                "output": "False",
                "explanation": "Unclosed brackets -> False."
            }
        ],
        "sol": "Stack verification: pairs = {')':'(', '}':'{', ']':'['}. stack = []. For c in s: if c in pairs: if not stack or stack.pop() != pairs[c]: return False else stack.append(c). Return len(stack) == 0. Time O(N), Space O(N)."
    },
    {
        "id": "str_palindrome_sentence",
        "cat": "strings",
        "title": "Palindrome Sentence",
        "diff": "beginner",
        "inp": "single_string",
        "desc": "Given a sentence string `s`, return `True` if it is a palindrome considering only alphanumeric characters and ignoring cases, else `False`.",
        "prompts": [
            "Two pointers skipping non-alphanumeric characters or preprocess with `.isalnum()` and `.lower()`."
        ],
        "tests": [
            {
                "input": [
                    "A man, a plan, a canal: Panama"
                ],
                "output": "True",
                "explanation": "Cleaned string 'amanaplanacanalpanama' is palindrome."
            },
            {
                "input": [
                    "race a car"
                ],
                "output": "False",
                "explanation": "'raceacar' is not palindrome."
            },
            {
                "input": [
                    " "
                ],
                "output": "True",
                "explanation": "Twisted Empty Alphanumeric String -> True."
            }
        ],
        "sol": "Two pointers: l, r = 0, len(s) - 1. While l < r: skip non-alnums; if s[l].lower() != s[r].lower(): return False; l++; r--. Return True. Time O(N), Space O(1)."
    },
    {
        "id": "str_longest_palindromic_substring",
        "cat": "strings",
        "title": "Longest Palindromic Substring",
        "diff": "intermediate",
        "inp": "single_string",
        "desc": "Given a string `s`, return the longest palindromic substring in `s`.",
        "prompts": [
            "Expand Around Center approach: For each index i, expand for odd-length palindrome `(i, i)` and even-length palindrome `(i, i+1)` in O(N^2) time and O(1) space."
        ],
        "tests": [
            {
                "input": [
                    "babad"
                ],
                "output": "bab",
                "explanation": "'bab' (or 'aba') is valid longest palindromic substring of length 3."
            },
            {
                "input": [
                    "cbbd"
                ],
                "output": "bb",
                "explanation": "Even-length palindrome 'bb'."
            },
            {
                "input": [
                    "a"
                ],
                "output": "a",
                "explanation": "Single character palindrome."
            }
        ],
        "sol": "Expand around center: def expand(l, r): while l >= 0 and r < len(s) and s[l] == s[r]: l--; r--; return s[l+1:r]. Check all 2N-1 centers. Time O(N^2), Space O(1)."
    },
    {
        "id": "str_first_non_repeating",
        "cat": "strings",
        "title": "First Non-Repeating Character",
        "diff": "beginner",
        "inp": "single_string",
        "desc": "Given a string `s`, find the first non-repeating character in it and return its 0-based index. If it does not exist, return -1.",
        "prompts": [
            "Build character frequency map in 1st pass. In 2nd pass, return the first character with frequency == 1.",
            "Twisted test cases: all repeating characters (returns -1)."
        ],
        "tests": [
            {
                "input": [
                    "leetcode"
                ],
                "output": "0",
                "explanation": "'l' is at index 0 and does not repeat."
            },
            {
                "input": [
                    "loveleetcode"
                ],
                "output": "2",
                "explanation": "'v' is at index 2 and does not repeat."
            },
            {
                "input": [
                    "aabb"
                ],
                "output": "-1",
                "explanation": "Twisted All Repeating Case: No non-repeating character -> -1."
            }
        ],
        "sol": "Two-pass frequency map: count = Counter(s). For i, c in enumerate(s): if count[c] == 1 return i. Return -1. Time O(N), Space O(1) (26 chars)."
    },
    {
        "id": "str_longest_repeating_char",
        "cat": "strings",
        "title": "Longest Repeating Character Replacement",
        "diff": "intermediate",
        "inp": "string_and_k",
        "desc": "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character at most `k` times. Return the length of the longest substring containing the same letter.",
        "prompts": [
            "Sliding Window: `window_size - max_frequency <= k`. If violated, shrink window from left."
        ],
        "tests": [
            {
                "input": [
                    "ABAB\n2"
                ],
                "output": "4",
                "explanation": "Replace two 'A's with 'B's or vice versa -> 'BBBB' length 4."
            },
            {
                "input": [
                    "AABABBA\n1"
                ],
                "output": "4",
                "explanation": "Replace middle 'A' with 'B' -> 'AABBBBA' has 'BBBB' of length 4."
            }
        ],
        "sol": "Sliding window: count = {}, max_freq = 0, l = 0. For r in range(len(s)): count[s[r]] = count.get(s[r], 0) + 1; max_freq = max(max_freq, count[s[r]]); if (r - l + 1) - max_freq > k: count[s[l]] -= 1; l++. Return r - l + 1. Time O(N), Space O(26)."
    },
    {
        "id": "str_smallest_window_substring",
        "cat": "strings",
        "title": "Smallest Window in a String Containing All the Characters of Another String",
        "diff": "advanced",
        "inp": "two_strings",
        "desc": "Given two strings `s` and `p`, find the smallest window substring in `s` that contains all the characters of `p` including duplicates. If no such window exists, return -1.",
        "prompts": [
            "Minimum Window Substring sliding window with character frequency hash map.",
            "Twisted test cases: p longer than s, identical single character match."
        ],
        "tests": [
            {
                "input": [
                    "timetopractice\ntoc"
                ],
                "output": "toprac",
                "explanation": "'toprac' contains 't', 'o', 'c' with minimum length 6."
            },
            {
                "input": [
                    "zoomlazapzo\noza"
                ],
                "output": "apzo",
                "explanation": "'apzo' contains 'o', 'z', 'a'."
            },
            {
                "input": [
                    "a\naa"
                ],
                "output": "-1",
                "explanation": "p requires two 'a's, s only has one -> -1."
            }
        ],
        "sol": "Sliding window with target count map and formed matches tally. Contract left when valid. Time O(N), Space O(K)."
    },
    {
        "id": "str_kmp_pattern_search",
        "cat": "strings",
        "title": "KMP Algorithm for Pattern Searching",
        "diff": "advanced",
        "inp": "text_and_pattern",
        "desc": "Given a text `txt` and a pattern `pat`, find all starting indices of occurrences of `pat` in `txt` in linear O(N + M) time using the Knuth-Morris-Pratt (KMP) Longest Prefix Suffix (LPS) array.",
        "prompts": [
            "1. Precompute LPS array of pattern. 2. Match text with pattern using LPS to skip redundant comparisons on mismatch."
        ],
        "tests": [
            {
                "input": [
                    "AABAACAADAABAABA\nAABA"
                ],
                "output": "0 9 12",
                "explanation": "Pattern 'AABA' occurs at indices 0, 9, and 12."
            },
            {
                "input": [
                    "abracadabra\nabra"
                ],
                "output": "0 7",
                "explanation": "Occurs at index 0 and 7."
            },
            {
                "input": [
                    "hello\nworld"
                ],
                "output": "-1",
                "explanation": "Pattern not found -> -1."
            }
        ],
        "sol": "KMP LPS preprocessing in O(M) time, followed by linear scan in O(N). Time O(N + M), Space O(M)."
    },
    {
        "id": "str_camelcase_matching",
        "cat": "strings",
        "title": "CamelCase Pattern Matching",
        "diff": "intermediate",
        "inp": "words_and_pattern",
        "desc": "Given a dictionary of words `words` and a pattern `pattern`, find all words that match the pattern by matching uppercase letters in sequence without intervening unmatched capital letters.",
        "prompts": [
            "Two pointers: uppercase letters in word must match pattern characters strictly in sequence. Extra uppercase letters in word invalidate the match."
        ],
        "tests": [
            {
                "input": [
                    "FooBar FooBarTest FootBall FrameBuffer FeedBack\nFB"
                ],
                "output": "FooBar FooBarTest FootBall FrameBuffer FeedBack",
                "explanation": "All listed words match pattern 'FB'."
            },
            {
                "input": [
                    "WelcomeGeek WelcomeToGeeks\nWTG"
                ],
                "output": "WelcomeToGeeks",
                "explanation": "'WelcomeToGeeks' matches 'W' 'T' 'G'."
            }
        ],
        "sol": "Sequential uppercase validation with two pointers. Time O(N * L), Space O(1)."
    },
    {
        "id": "tree_height_binary_tree",
        "cat": "trees",
        "title": "Height of Binary Tree",
        "diff": "beginner",
        "inp": "tree_level_order",
        "desc": "Given a binary tree represented in level order, find its height (maximum number of nodes from root to deepest leaf node).",
        "prompts": [
            "Recursive definition: `height(root) = 1 + max(height(root.left), height(root.right))`.",
            "Base case: Empty tree has height 0."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5 N N"
                ],
                "output": "3",
                "explanation": "Height of tree is 3."
            },
            {
                "input": [
                    "2 N 1 3 N"
                ],
                "output": "3",
                "explanation": "Skewed tree height is 3."
            },
            {
                "input": [
                    "1"
                ],
                "output": "1",
                "explanation": "Single node tree has height 1."
            }
        ],
        "sol": "Recursion: def height(node): if not node: return 0; return 1 + max(height(node.left), height(node.right)). Time O(N), Space O(H)."
    },
    {
        "id": "tree_diameter_binary_tree",
        "cat": "trees",
        "title": "Diameter of a Tree",
        "diff": "intermediate",
        "inp": "tree_level_order",
        "desc": "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree (measured in number of edges).",
        "prompts": [
            "At each node, the longest path through that node is `height(left) + height(right)`.",
            "Track global maximum diameter during standard DFS height computation."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5"
                ],
                "output": "3",
                "explanation": "Longest path is [4, 2, 1, 3] or [5, 2, 1, 3] having 3 edges."
            },
            {
                "input": [
                    "1 2"
                ],
                "output": "1",
                "explanation": "2 nodes connected by 1 edge -> diameter 1."
            }
        ],
        "sol": "DFS height helper updating max_diameter = max(max_diameter, left_h + right_h). Time O(N), Space O(H)."
    },
    {
        "id": "tree_mirror_tree",
        "cat": "trees",
        "title": "Mirror Tree (Invert Binary Tree)",
        "diff": "beginner",
        "inp": "tree_level_order",
        "desc": "Given a binary tree, invert the tree (swap left and right children for every node) and return its level order traversal.",
        "prompts": [
            "Post-order traversal: recursively swap `node.left` and `node.right`."
        ],
        "tests": [
            {
                "input": [
                    "4 2 7 1 3 6 9"
                ],
                "output": "4 7 2 9 6 3 1",
                "explanation": "Binary tree inverted mirror image."
            },
            {
                "input": [
                    "2 1 3"
                ],
                "output": "2 3 1",
                "explanation": "Mirror swaps 1 and 3."
            }
        ],
        "sol": "Recursive inversion: def invert(node): if not node: return None; node.left, node.right = invert(node.right), invert(node.left); return node. Time O(N), Space O(H)."
    },
    {
        "id": "tree_symmetric_tree",
        "cat": "trees",
        "title": "Symmetric Tree",
        "diff": "beginner",
        "inp": "tree_level_order",
        "desc": "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
        "prompts": [
            "Helper function `isMirror(t1, t2)`: `t1.val == t2.val` and `isMirror(t1.left, t2.right)` and `isMirror(t1.right, t2.left)`."
        ],
        "tests": [
            {
                "input": [
                    "1 2 2 3 4 4 3"
                ],
                "output": "True",
                "explanation": "Symmetric tree structure and values -> True."
            },
            {
                "input": [
                    "1 2 2 N 3 N 3"
                ],
                "output": "False",
                "explanation": "Asymmetric child positions -> False."
            }
        ],
        "sol": "Mirror validation: def isMirror(t1, t2): if not t1 and not t2: return True; if not t1 or not t2: return False; return t1.val == t2.val and isMirror(t1.left, t2.right) and isMirror(t1.right, t2.left). Time O(N), Space O(H)."
    },
    {
        "id": "tree_max_path_sum",
        "cat": "trees",
        "title": "Maximum Path Sum From Any Node",
        "diff": "advanced",
        "inp": "tree_level_order",
        "desc": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. Return the maximum path sum of any non-empty path.",
        "prompts": [
            "At each node, compute `max_gain = max(0, dfs(child))`. Local path sum through node is `node.val + left_gain + right_gain`."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3"
                ],
                "output": "6",
                "explanation": "Path 2 -> 1 -> 3 gives sum = 6."
            },
            {
                "input": [
                    "-10 9 20 N N 15 7"
                ],
                "output": "42",
                "explanation": "Path 15 -> 20 -> 7 gives sum = 42."
            },
            {
                "input": [
                    "-3"
                ],
                "output": "-3",
                "explanation": "Single negative node -> -3."
            }
        ],
        "sol": "DFS branch gain: max_sum = -INF. def gain(node): if not node: return 0; l = max(0, gain(node.left)); r = max(0, gain(node.right)); max_sum = max(max_sum, node.val + l + r); return node.val + max(l, r). Time O(N), Space O(H)."
    },
    {
        "id": "tree_level_order_traversal",
        "cat": "trees",
        "title": "Level Order Traversal",
        "diff": "beginner",
        "inp": "tree_level_order",
        "desc": "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
        "prompts": [
            "Queue-based BFS: Push root. While queue is non-empty, dequeue node, print value, and enqueue non-null left and right children."
        ],
        "tests": [
            {
                "input": [
                    "3 9 20 N N 15 7"
                ],
                "output": "3 9 20 15 7",
                "explanation": "Level order traversal."
            },
            {
                "input": [
                    "1"
                ],
                "output": "1",
                "explanation": "Single node traversal."
            }
        ],
        "sol": "BFS with Queue: queue = deque([root]). while queue: curr = queue.popleft(); if curr: res.append(curr.val); queue.append(curr.left); queue.append(curr.right). Time O(N), Space O(N)."
    },
    {
        "id": "tree_serialize_deserialize",
        "cat": "trees",
        "title": "Serialize and Deserialize a Binary Tree",
        "diff": "advanced",
        "inp": "tree_level_order",
        "desc": "Design an algorithm to serialize a binary tree into a string and deserialize that string back into the original binary tree.",
        "prompts": [
            "Preorder traversal with '#' or 'N' for null markers enables unique reconstruction."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 N N 4 5"
                ],
                "output": "1 2 3 N N 4 5",
                "explanation": "Reconstructed identical tree topology."
            },
            {
                "input": [
                    "N"
                ],
                "output": "N",
                "explanation": "Empty tree serialization."
            }
        ],
        "sol": "Preorder string serialization joining node values and 'N' for nulls. Deserialization consumes iterator recursively. Time O(N), Space O(N)."
    },
    {
        "id": "tree_check_subtree",
        "cat": "trees",
        "title": "Check If Subtree",
        "diff": "intermediate",
        "inp": "two_trees",
        "desc": "Given the roots of two binary trees `root` and `subRoot`, return `True` if there is a subtree of `root` with the same structure and node values of `subRoot`, and `False` otherwise.",
        "prompts": [
            "At each node of `root`, test `isSameTree(root, subRoot)`. Or use preorder serialization substring match."
        ],
        "tests": [
            {
                "input": [
                    "3 4 5 1 2\n4 1 2"
                ],
                "output": "True",
                "explanation": "Tree with root 4 is an exact subtree."
            },
            {
                "input": [
                    "3 4 5 1 2 N N N N 0\n4 1 2"
                ],
                "output": "False",
                "explanation": "Node 2 has extra child 0 -> not identical subtree (False)."
            }
        ],
        "sol": "DFS matching: def isSame(t1, t2): if not t1 or not t2: return t1 == t2; return t1.val == t2.val and isSame(t1.left, t2.left) and isSame(t1.right, t2.right). Time O(M * N), Space O(H)."
    },
    {
        "id": "tree_construct_inorder_preorder",
        "cat": "trees",
        "title": "Construct Tree from Inorder & Preorder",
        "diff": "intermediate",
        "inp": "inorder_and_preorder",
        "desc": "Given two integer arrays `preorder` and `inorder` where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct the binary tree and return its postorder traversal.",
        "prompts": [
            "First element of preorder is root. Locate root in inorder to split left and right subtrees."
        ],
        "tests": [
            {
                "input": [
                    "3 9 20 15 7\n9 3 15 20 7"
                ],
                "output": "9 15 7 20 3",
                "explanation": "Postorder traversal of reconstructed tree."
            },
            {
                "input": [
                    "-1\n-1"
                ],
                "output": "-1",
                "explanation": "Single node postorder."
            }
        ],
        "sol": "Hash map on inorder indices: root_val = preorder[pre_idx]; root = Node(root_val); mid = in_map[root_val]; root.left = build(left, mid - 1); root.right = build(mid + 1, right). Time O(N), Space O(N)."
    },
    {
        "id": "tree_count_bst_range",
        "cat": "trees",
        "title": "Count BST nodes that lie in a given range",
        "diff": "beginner",
        "inp": "bst_and_range",
        "desc": "Given a Binary Search Tree (BST) and a range `[low, high]`, count the number of nodes in the BST that lie in the given range inclusive.",
        "prompts": [
            "Use BST property: If `node.val < low`, prune left subtree; if `node.val > high`, prune right subtree."
        ],
        "tests": [
            {
                "input": [
                    "10 5 50 1 40 100\n5 45"
                ],
                "output": "3",
                "explanation": "Nodes 5, 10, 40 lie within range [5, 45] -> Count = 3."
            },
            {
                "input": [
                    "10 5 15\n10 15"
                ],
                "output": "2",
                "explanation": "Nodes 10, 15 -> Count = 2."
            }
        ],
        "sol": "Pruned DFS: def count(node): if not node: return 0; if node.val < low: return count(node.right); if node.val > high: return count(node.left); return 1 + count(node.left) + count(node.right). Time O(K + H), Space O(H)."
    },
    {
        "id": "tree_kth_smallest_bst",
        "cat": "trees",
        "title": "Kth Smallest Element in BST",
        "diff": "intermediate",
        "inp": "bst_and_k",
        "desc": "Given the root of a binary search tree (BST) and an integer `k`, return the k-th smallest value (1-indexed) of all the values of the nodes in the tree.",
        "prompts": [
            "Inorder traversal of a BST produces elements in strictly ascending order.",
            "Stop traversal immediately once k elements have been visited."
        ],
        "tests": [
            {
                "input": [
                    "3 1 4 N 2\n1"
                ],
                "output": "1",
                "explanation": "1st smallest element is 1."
            },
            {
                "input": [
                    "5 3 6 2 4 N N 1\n3"
                ],
                "output": "3",
                "explanation": "Inorder: 1, 2, 3, 4, 5, 6 -> 3rd smallest is 3."
            }
        ],
        "sol": "Inorder traversal: stack = [], curr = root. While curr or stack: while curr: stack.append(curr); curr = curr.left; curr = stack.pop(); k -= 1; if k == 0: return curr.val; curr = curr.right. Time O(H + k), Space O(H)."
    },
    {
        "id": "tree_lca_bst",
        "cat": "trees",
        "title": "Lowest Common Ancestor in a BST",
        "diff": "intermediate",
        "inp": "bst_and_two_nodes",
        "desc": "Given a Binary Search Tree (BST) and two node values `p` and `q`, find the Lowest Common Ancestor (LCA) node in the BST.",
        "prompts": [
            "If both p and q are smaller than root, LCA lies in left subtree.",
            "If both p and q are greater than root, LCA lies in right subtree.",
            "Otherwise, the split point is the LCA."
        ],
        "tests": [
            {
                "input": [
                    "6 2 8 0 4 7 9 N N 3 5\n2 8"
                ],
                "output": "6",
                "explanation": "LCA of 2 and 8 is root 6."
            },
            {
                "input": [
                    "6 2 8 0 4 7 9 N N 3 5\n2 4"
                ],
                "output": "2",
                "explanation": "LCA of 2 and 4 is node 2 itself."
            }
        ],
        "sol": "BST LCA navigation: curr = root. While curr: if p < curr.val and q < curr.val: curr = curr.left elif p > curr.val and q > curr.val: curr = curr.right else: return curr.val. Time O(H), Space O(1)."
    },
    {
        "id": "tree_trie_insert_search",
        "cat": "trees",
        "title": "Insert and Search in a Trie",
        "diff": "intermediate",
        "inp": "trie_ops",
        "desc": "Implement a Trie (Prefix Tree) with `insert(word)` and `search(word)` methods returning `True` if string word is in the trie, and `False` otherwise.",
        "prompts": [
            "TrieNode contains dictionary `children = {}` and boolean flag `is_end = False`."
        ],
        "tests": [
            {
                "input": [
                    "insert apple\nsearch apple\nsearch app\ninsert app\nsearch app"
                ],
                "output": "True False True",
                "explanation": "Trie prefix and full word search execution."
            },
            {
                "input": [
                    "insert hello\nsearch world"
                ],
                "output": "False",
                "explanation": "Word not in trie -> False."
            }
        ],
        "sol": "Trie prefix tree implementation with 26-ary children tree. Time O(L) per operation, Space O(Total Characters)."
    },
    {
        "id": "tree_distribute_candies",
        "cat": "trees",
        "title": "Distribute candies in a Binary Tree",
        "diff": "advanced",
        "inp": "tree_level_order",
        "desc": "You are given the root of a binary tree with `n` nodes where each node has `node.coins` coins and there are `n` coins in total. In one move, you can choose two adjacent nodes and move one coin from one to another. Return the minimum number of moves required to make every node have exactly 1 coin.",
        "prompts": [
            "Post-order traversal: Excess coins from a subtree is `node.val + left_excess + right_excess - 1`.",
            "Total moves accumulated is `sum(|excess|)` across all nodes."
        ],
        "tests": [
            {
                "input": [
                    "3 0 0"
                ],
                "output": "2",
                "explanation": "Root sends 1 coin to left and 1 to right -> 2 moves."
            },
            {
                "input": [
                    "0 3 0"
                ],
                "output": "3",
                "explanation": "3 moves required."
            }
        ],
        "sol": "Postorder excess balance: moves = 0. def dfs(node): if not node: return 0; l = dfs(node.left); r = dfs(node.right); nonlocal moves; moves += abs(l) + abs(r); return node.val + l + r - 1. dfs(root); return moves. Time O(N), Space O(H)."
    },
    {
        "id": "heap_k_largest_elements",
        "cat": "heaps",
        "title": "K Largest Elements",
        "diff": "beginner",
        "inp": "array_and_k",
        "desc": "Given an array `nums` of n positive integers and an integer `k`, return the `k` largest elements in descending order.",
        "prompts": [
            "Use a Min-Heap of size k: push element; if heap size > k, pop min element.",
            "Alternatively sort in descending order and slice first k elements."
        ],
        "tests": [
            {
                "input": [
                    "12 5 787 1 23\n2"
                ],
                "output": "787 23",
                "explanation": "2 largest elements are 787 and 23 in descending order."
            },
            {
                "input": [
                    "1 23 12 9 30 2 50\n3"
                ],
                "output": "50 30 23",
                "explanation": "3 largest elements are 50, 30, 23."
            }
        ],
        "sol": "Min-Heap of size k or QuickSelect. In Python: heapq.nlargest(k, nums). Time O(N log k), Space O(k)."
    },
    {
        "id": "heap_sort_k_sorted_array",
        "cat": "heaps",
        "title": "Sort a nearly sorted (or K sorted) array",
        "diff": "intermediate",
        "inp": "array_and_k",
        "desc": "Given an array of n elements where each element is at most `k` positions away from its target position in the sorted array, sort the array in O(N log K) time.",
        "prompts": [
            "Use a Min-Heap of size `k + 1`: Insert first k+1 elements into heap, then repeatedly pop the min element into the result array and push next array element."
        ],
        "tests": [
            {
                "input": [
                    "6 5 3 2 8 10 9\n3"
                ],
                "output": "2 3 5 6 8 9 10",
                "explanation": "Nearly sorted array with k=3 sorted in O(N log K) time."
            },
            {
                "input": [
                    "10 9 8 7 4 70 60 50\n4"
                ],
                "output": "4 7 8 9 10 50 60 70",
                "explanation": "Sorted result."
            }
        ],
        "sol": "Min-heap sliding window of size k+1: heap = nums[:k+1]; heapq.heapify(heap); idx = 0; for i in range(k+1, N): nums[idx] = heapq.heappop(heap); heapq.heappush(heap, nums[i]); idx++; while heap: nums[idx] = heapq.heappop(heap); idx++. Time O(N log K), Space O(K)."
    },
    {
        "id": "heap_find_median_stream",
        "cat": "heaps",
        "title": "Find Median in a Stream",
        "diff": "advanced",
        "inp": "stream_of_ints",
        "desc": "Given a continuous stream of incoming integers, design a data structure that dynamically computes the median of all elements seen so far in O(log N) insertion time and O(1) median query time.",
        "prompts": [
            "Two Heaps: `max_heap` (stores smaller half of numbers) and `min_heap` (stores larger half).",
            "Maintain balance: `len(max_heap) == len(min_heap)` or `len(max_heap) == len(min_heap) + 1`."
        ],
        "tests": [
            {
                "input": [
                    "5 15 1 3"
                ],
                "output": "5 10 5 4",
                "explanation": "Median stream: [5]->5, [5,15]->10, [1,5,15]->5, [1,3,5,15]->(3+5)/2=4."
            },
            {
                "input": [
                    "2 3 4"
                ],
                "output": "2 2.5 3",
                "explanation": "Median stream: [2]->2, [2,3]->2.5, [2,3,4]->3."
            }
        ],
        "sol": "Two-Heap median finder: max_heap (invert sign for min-heap implementation) for lower half, min_heap for upper half. If odd count return max_heap top, if even return average of tops. Time O(log N) insert, O(1) query, Space O(N)."
    }
];

function getDynamicFormats(q) {
    let cleanTitle = q.title || "Challenge";
    let inputFmt = "First line contains input parameter.";
    let outputFmt = `Print output for <strong>${cleanTitle}</strong>.`;
    let constraints = "1 &le; N &le; 10<sup>5</sup>";
    
    if (q.inp) {
        switch (q.inp) {
            case "single_int":
                inputFmt = "A single line containing parameter <code>N</code> or element array.";
                outputFmt = `Print outcome for <strong>${cleanTitle}</strong>.`;
                break;
            case "two_ints":
                inputFmt = "Space-separated parameters <code>A</code> and <code>B</code> or target input.";
                outputFmt = `Print outcome for <strong>${cleanTitle}</strong>.`;
                break;
        }
    }
    return { inputFmt, outputFmt, constraints };
}

// Generate boilerplate for different languages
function generateBoilerplate(q, lang) {
    let title = q.title || "Solution";
    switch (lang) {
        case "python":
            return `# Write solution for ${title} in Python 3\ndef solve():\n    import sys\n    input_data = sys.stdin.read().split()\n    if not input_data:\n        return\n    # Write logic for ${title}\n    pass\n\nif __name__ == "__main__":\n    solve()\n`;
        case "c":
            return `// Write solution for ${title} in C\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Write solution logic for ${title}\n    return 0;\n}\n`;
        case "cpp":
            return `// Write solution for ${title} in C++\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Write solution logic for ${title}\n    return 0;\n}\n`;
        case "java":
            return `// Write solution for ${title} in Java\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write solution logic for ${title}\n    }\n}\n`;
    }
}

// Generate HTML Description including rendered test cases at bottom
function generateDescriptionHTML(q) {
    const { inputFmt, outputFmt, constraints } = getDynamicFormats(q);
    
    let examplesHTML = "";
    if (q.tests && q.tests.length > 0) {
        examplesHTML = `<h4 style="margin-top:1.5rem; color:var(--primary);"><i class="fa-solid fa-list-check"></i> Sample Testcases & Examples</h4>`;
        q.tests.forEach((t, idx) => {
            const inpVal = Array.isArray(t.input) ? t.input.join("\n") : t.input;
            examplesHTML += `
                <div style="background: var(--glass-bg); border:1px solid var(--glass-border); padding: 0.8rem 1rem; border-radius: 8px; margin-bottom: 0.8rem;">
                    <div style="font-weight: 700; color: var(--primary); font-size:0.85rem; margin-bottom:0.3rem;">Example ${idx + 1}</div>
                    <div style="font-size:0.85rem; font-family: monospace;"><strong>Input:</strong> ${inpVal}</div>
                    <div style="font-size:0.85rem; font-family: monospace; color: var(--success);"><strong>Output:</strong> ${t.output}</div>
                    ${t.explanation ? `<div style="font-size:0.8rem; color: var(--text-secondary); margin-top:0.2rem;"><em>Explanation:</em> ${t.explanation}</div>` : ''}
                </div>
            `;
        });
    }

    let promptsHTML = "";
    if (q.prompts && q.prompts.length > 0) {
        promptsHTML = q.prompts.map(p => `<li>${p}</li>`).join("");
    }

    return `
        <h3>${q.title}</h3>
        <p>${q.desc}</p>
        <h4>Input Format</h4>
        <p>${inputFmt}</p>
        <h4>Output Format</h4>
        <p>${outputFmt}</p>
        <h4>Constraints</h4>
        <p>${constraints}</p>
        ${examplesHTML}
        <hr style="border:0; border-top: 1px dashed var(--glass-border); margin: 1.2rem 0;">
        <h4 style="color:var(--primary); display:flex; align-items:center; gap:0.4rem;">
            <i class="fa-solid fa-brain"></i> Think &amp; Reflect
        </h4>
        <ul style="padding-left:1.2rem; margin-top:0.4rem; list-style:disc; color:var(--text-secondary); font-size:0.9rem;">
            ${promptsHTML}
        </ul>
    `;
}

const CODING_DATABASE = RAW_CHALLENGES.map(q => {
    const categoryMap = {
        numbers: "numbers",
        recursion: "recursion",
        arrays: "arrays",
        strings: "strings",
        matrices: "matrices",
        patterns: "patterns",
        sorting: "sorting",
        numsystem: "numsystem",
        binary: "binary",
        dp: "dp",
        graph: "graph",
        intervals: "intervals",
        linkedlist: "linkedlist",
        trees: "trees",
        heaps: "heaps"
    };
    
    return {
        id: q.id,
        category: categoryMap[q.cat] || q.cat || "numbers",
        title: q.title,
        difficulty: q.diff,
        description: generateDescriptionHTML(q),
        boilerplates: {
            python: generateBoilerplate(q, "python"),
            c: generateBoilerplate(q, "c"),
            cpp: generateBoilerplate(q, "cpp"),
            java: generateBoilerplate(q, "java")
        },
        testCases: q.tests,
        solution: q.sol
    };
});

if (typeof window !== 'undefined') {
    window.CODING_DATABASE = CODING_DATABASE;
}

