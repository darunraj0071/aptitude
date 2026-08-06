/* ==========================================================================
   CODING_DATA.JS - Centralized Placement & LeetCode Coding Challenges Database (200+ Problems)
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
                "output": "Positive"
            },
            {
                "input": [
                    "-12"
                ],
                "output": "Negative"
            },
            {
                "input": [
                    "0"
                ],
                "output": "Zero"
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
                "output": "Even"
            },
            {
                "input": [
                    "7"
                ],
                "output": "Odd"
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
                "output": "15"
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
                "output": "55"
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
                "output": "14"
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
                "output": "20"
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
                "output": "25"
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
                "output": "Leap Year"
            },
            {
                "input": [
                    "1900"
                ],
                "output": "Not a Leap Year"
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
                "output": "Prime"
            },
            {
                "input": [
                    "15"
                ],
                "output": "Not Prime"
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
                "output": "11 13 17 19"
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
                "output": "10"
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
                "output": "4321"
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
                "output": "Palindrome"
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
                "output": "Armstrong"
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
                "output": "153"
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
                "output": "0 1 1 2 3"
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
                "output": "8"
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
                "output": "120"
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
                "output": "32"
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
                "output": "1 2 3 4 6 12"
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
                "output": "2 2 3 5"
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
                "output": "Strong Number"
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
                "output": "Perfect Number"
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
                "output": "Perfect Square"
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
                "output": "Automorphic"
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
                "output": "Harshad Number"
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
                "output": "Abundant Number"
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
                "output": "Friendly Pair"
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
                "output": "12"
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
                "output": "36"
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
                "output": "12"
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
                "output": "First Quadrant"
            },
            {
                "input": [
                    "-3 -5"
                ],
                "output": "Third Quadrant"
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
                "output": "60"
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
                "output": "45"
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
                "output": "2/3"
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
                "output": "112131"
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
                "output": "Yes"
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
                "output": "3"
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
                "output": "153.94"
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
                "output": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97"
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
                "output": "5"
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
                "output": "One Hundred Twenty Three"
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
                "output": "29"
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
                "output": "3"
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
                "output": "4"
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
                "output": "4.0 3.0"
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
                "output": "10"
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
                "output": "10"
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
                "output": "26"
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
                "output": "1010"
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
                "output": "12"
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
                "output": "1A"
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
                "output": "12"
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
                "output": "1010"
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
                "output": "16"
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
                "output": "Prime"
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
                "output": "9"
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
                "output": "1"
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
                "output": "4321"
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
                "output": "6"
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
                "output": "60"
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
                "output": "9"
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
                "output": "ABC ACB BAC BCA CAB CBA"
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
                "output": "15"
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
                "output": "0 2 3 5"
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
                "output": "2"
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
                "output": "1 3 3 1"
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
                "output": "((())) (()()) (())() ()(()) ()()()"
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
                "output": "120"
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
                "output": "n i t i n | n iti n | nitin"
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
                "output": "111 110 101"
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
                "output": "{} {1} {2} {1,2}"
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
                "output": "ay"
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
                "output": "99"
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
                "output": "4"
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
                "output": "Min: 4, Max: 99"
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
                "output": "10"
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
                "output": "15"
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
                "output": "5 4 3 2 1"
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
                "output": "1 3 5 9 7 2"
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
                "output": "1 2 5 8 9"
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
                "output": "10: 3, 20: 2, 30: 1"
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
                "output": "8 8 8 2 2 5 5 6"
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
                "output": "54545"
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
                "output": "3"
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
                "output": "10 20"
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
                "output": "30 40"
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
                "output": "1 2 3 4 5"
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
                "output": "-25"
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
                "output": "21"
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
                "output": "Even: 3, Odd: 3"
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
                "output": "(1,2) (3,4)"
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
                "output": "6"
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
                "output": "Disjoint"
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
                "output": "Subset"
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
                "output": "0 0 1 1 2 2"
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
                "output": "3rd Min: 7, 3rd Max: 10"
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
                "output": "-12 -13 -5 -7 -6 11 6 5 3"
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
                "output": "Union: 1 2 3 4 5 6 7 | Inter: 2 5"
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
                "output": "6"
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
                "output": "5"
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
                "output": "3"
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
                "output": "2"
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
                "output": "1 2 3 5 8 9 10 13 15"
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
                "output": "6"
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
                "output": "5"
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
                "output": "(1,5) (7,-1) (1,5)"
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
                "output": "Yes (subarray [2 -3 1])"
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
                "output": "6"
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
                "output": "6"
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
                "output": "Vowel"
            },
            {
                "input": [
                    "z"
                ],
                "output": "Consonant"
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
                "output": "Alphabet"
            },
            {
                "input": [
                    "9"
                ],
                "output": "Not Alphabet"
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
                "output": "65"
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
                "output": "9"
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
                "output": "vETRIpATH"
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
                "output": "5"
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
                "output": "VtrpthLrn"
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
                "output": "Palindrome"
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
                "output": "olleh"
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
                "output": "VetriPath"
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
                "output": "VetriPathLearn"
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
                "output": "a+b*c-d"
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
                "output": "46"
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
                "output": "VetrI PatH LearN"
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
                "output": "a:1, p:2, l:1, e:1"
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
                "output": "w i"
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
                "output": "Anagram"
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
                "output": "hello universe"
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
                "output": "3"
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
                "output": "Match"
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
                "output": "1 2 4 5 8"
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
                "output": "11 12 22 25 64"
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
                "output": "5 6 11 12 13"
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
                "output": "3 9 10 27 38 43 82"
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
                "output": "1 5 7 8 9 10"
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
                "output": "5 6 7 11 12 13"
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
                "output": "1 2 3 6 9 8 7 4 5"
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
                "output": "Found at (0,1)"
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
                "output": "5"
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
                "output": "Row 0"
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
                "output": "3 1 4 2"
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
                "output": "****\n****\n****\n****"
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
                "output": "****\n*  *\n*  *\n****"
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
                "output": "****\n ****\n  ****\n   ****"
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
                "output": "*****\n*****\n*****"
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
                "output": "*****\n*   *\n*****"
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
                "output": "****\n ****\n  ****\n   ****"
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
                "output": "   ****\n  ****\n ****\n****"
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
                "output": "*\n**\n***\n****"
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
                "output": "  *\n ***\n*****"
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
                "output": "   *\n  * *\n *   *\n*******"
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
                "output": "*****\n ***\n  *"
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
                "output": "*******\n *   *\n  * *\n   *"
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
                "output": "*\n**\n***\n****\n***\n**\n*"
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
                "output": "   *\n  **\n ***\n****\n ***\n  **\n   *"
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
                "output": "  *\n ***\n*****\n ***\n  *"
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
                "output": "1111\n1111\n1111\n1111"
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
                "output": "1111\n2222\n3333\n4444"
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
                "output": "333\n313\n323\n333"
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
                "output": "1\n12\n123\n1234"
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
                "output": "10987\n456\n32\n1"
            }
        ],
        "sol": "Inverted right triangle numbers."
    }
];

// Helper to deduce input format descriptions
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

// Convert RAW_CHALLENGES into CODING_DATABASE
const CODING_DATABASE = RAW_CHALLENGES.map(q => {
    const categoryMap = {
        numbers: "numbers",
        recursion: "recursion",
        arrays: "arrays",
        strings: "strings",
        matrices: "matrices",
        patterns: "patterns",
        sorting: "sorting",
        numsystem: "numsystem"
    };
    
    return {
        id: q.id,
        category: categoryMap[q.cat] || "numbers",
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
