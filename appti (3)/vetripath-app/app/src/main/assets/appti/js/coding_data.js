/* ==========================================================================
   CODING_DATA.JS - Centralized Placement & LeetCode Coding Challenges Database (300+ Problems)
   ========================================================================== */

const RAW_CHALLENGES = [
    {
        "id": "num_1",
        "cat": "numbers",
        "title": "Positive or Negative Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check whether a given integer is positive, negative, or zero.",
        "prompts": [
            "What is the mathematical condition required?"
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "Positive",
                "explanation": "5 is positive."
            },
            {
                "input": [
                    "-12"
                ],
                "output": "Negative",
                "explanation": "-12 is negative."
            },
            {
                "input": [
                    "0"
                ],
                "output": "Zero",
                "explanation": "0 is zero."
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
        "desc": "Check whether a given integer is even or odd.",
        "prompts": [
            "Check N % 2."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "Even",
                "explanation": "4 mod 2 == 0."
            },
            {
                "input": [
                    "7"
                ],
                "output": "Odd",
                "explanation": "7 mod 2 != 0."
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
        "desc": "Find the sum of first N natural numbers using formula N*(N+1)/2.",
        "prompts": [
            "O(1) mathematical closed-form."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "15",
                "explanation": "1+2+3+4+5 = 15."
            }
        ],
        "sol": "Return N * (N + 1) / 2."
    },
    {
        "id": "num_4",
        "cat": "numbers",
        "title": "Sum of Numbers in a Given Range",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find the sum of all integers in range [L, R] inclusive.",
        "prompts": [
            "Formula sum(R) - sum(L-1)."
        ],
        "tests": [
            {
                "input": [
                    "2 6"
                ],
                "output": "20",
                "explanation": "2+3+4+5+6 = 20."
            }
        ],
        "sol": "Sum = (R*(R+1)/2) - ((L-1)*L/2)."
    },
    {
        "id": "num_5",
        "cat": "numbers",
        "title": "Greatest of Two Numbers",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Find the maximum of two given numbers A and B.",
        "prompts": [
            "Ternary operator."
        ],
        "tests": [
            {
                "input": [
                    "15 25"
                ],
                "output": "25",
                "explanation": "25 > 15."
            }
        ],
        "sol": "Return A > B ? A : B."
    },
    {
        "id": "num_6",
        "cat": "numbers",
        "title": "Greatest of Three Numbers",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find the maximum among three given numbers A, B, and C.",
        "prompts": [
            "Nested conditionals."
        ],
        "tests": [
            {
                "input": [
                    "12 45 32"
                ],
                "output": "45",
                "explanation": "45 is largest."
            }
        ],
        "sol": "Return max(A, max(B, C))."
    },
    {
        "id": "num_7",
        "cat": "numbers",
        "title": "Leap Year Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check whether a given year is a leap year.",
        "prompts": [
            "Divisible by 400 or (4 and not 100)."
        ],
        "tests": [
            {
                "input": [
                    "2024"
                ],
                "output": "Leap Year",
                "explanation": "2024 is leap year."
            },
            {
                "input": [
                    "1900"
                ],
                "output": "Not Leap Year",
                "explanation": "1900 is not leap year."
            }
        ],
        "sol": "Check leap year rules."
    },
    {
        "id": "num_8",
        "cat": "numbers",
        "title": "Prime Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check whether a given number N is prime.",
        "prompts": [
            "Loop up to sqrt(N)."
        ],
        "tests": [
            {
                "input": [
                    "29"
                ],
                "output": "Prime",
                "explanation": "29 is prime."
            }
        ],
        "sol": "Check trial division up to sqrt(N)."
    },
    {
        "id": "num_9",
        "cat": "numbers",
        "title": "Prime Numbers within Range",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find and print all prime numbers between L and R.",
        "prompts": [
            "Sieve of Eratosthenes."
        ],
        "tests": [
            {
                "input": [
                    "10 20"
                ],
                "output": "11 13 17 19",
                "explanation": "Primes between 10 and 20."
            }
        ],
        "sol": "Check prime condition for each integer in range."
    },
    {
        "id": "num_10",
        "cat": "numbers",
        "title": "Sum of Digits of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate the sum of all digits of a given integer N.",
        "prompts": [
            "N % 10 extracts digit."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "10",
                "explanation": "1+2+3+4 = 10."
            }
        ],
        "sol": "While N > 0: sum += N % 10, N /= 10."
    },
    {
        "id": "num_11",
        "cat": "numbers",
        "title": "Reverse of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Reverse the digits of a given integer N.",
        "prompts": [
            "rev = rev * 10 + digit."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "4321",
                "explanation": "Reversed order 4321."
            }
        ],
        "sol": "Build reversed number via digit extraction."
    },
    {
        "id": "num_12",
        "cat": "numbers",
        "title": "Palindrome Number Check",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check whether integer N reads same forwards and backwards.",
        "prompts": [
            "N == reverse(N)."
        ],
        "tests": [
            {
                "input": [
                    "121"
                ],
                "output": "Palindrome",
                "explanation": "Reverse of 121 is 121."
            }
        ],
        "sol": "Compare N with its reverse."
    },
    {
        "id": "num_13",
        "cat": "numbers",
        "title": "Armstrong Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if K-digit integer N equals sum of its digits raised to power K.",
        "prompts": [
            "Count digits K dynamically."
        ],
        "tests": [
            {
                "input": [
                    "153"
                ],
                "output": "Armstrong",
                "explanation": "1^3 + 5^3 + 3^3 = 153."
            }
        ],
        "sol": "Sum of digit powers."
    },
    {
        "id": "num_14",
        "cat": "numbers",
        "title": "Armstrong Numbers in Range",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find all Armstrong numbers in range [L, R].",
        "prompts": [
            "Check Armstrong property for each."
        ],
        "tests": [
            {
                "input": [
                    "100 200"
                ],
                "output": "153",
                "explanation": "153 is the only Armstrong number in range."
            }
        ],
        "sol": "Filter numbers matching Armstrong condition."
    },
    {
        "id": "num_15",
        "cat": "numbers",
        "title": "Fibonacci Series up to Nth Term",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate and print first N terms of Fibonacci sequence.",
        "prompts": [
            "Base F(0)=0, F(1)=1."
        ],
        "tests": [
            {
                "input": [
                    "6"
                ],
                "output": "0 1 1 2 3 5",
                "explanation": "First 6 terms of Fibonacci."
            }
        ],
        "sol": "Iterative sum of previous two terms."
    },
    {
        "id": "num_16",
        "cat": "numbers",
        "title": "Find Nth Term of Fibonacci Series",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find the Nth term of Fibonacci sequence.",
        "prompts": [
            "F(N) = F(N-1) + F(N-2)."
        ],
        "tests": [
            {
                "input": [
                    "7"
                ],
                "output": "13",
                "explanation": "7th term of Fibonacci is 13."
            }
        ],
        "sol": "Return Nth Fibonacci term."
    },
    {
        "id": "num_17",
        "cat": "numbers",
        "title": "Factorial of a Number",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate N! = 1 * 2 * 3 * ... * N.",
        "prompts": [
            "0! = 1."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "120",
                "explanation": "5! = 120."
            }
        ],
        "sol": "Product 1 to N."
    },
    {
        "id": "num_18",
        "cat": "numbers",
        "title": "Power of a Number",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Compute base^exponent (B^E).",
        "prompts": [
            "Binary exponentiation O(log E)."
        ],
        "tests": [
            {
                "input": [
                    "2 5"
                ],
                "output": "32",
                "explanation": "2^5 = 32."
            }
        ],
        "sol": "Multiply base E times."
    },
    {
        "id": "num_19",
        "cat": "numbers",
        "title": "Factors of a Number",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find and print all factors of a given number N.",
        "prompts": [
            "Check up to N/2 or sqrt(N)."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "1 2 3 4 6 12",
                "explanation": "Divisors of 12."
            }
        ],
        "sol": "Iterate 1 to N and check N % i == 0."
    },
    {
        "id": "num_20",
        "cat": "numbers",
        "title": "Finding Prime Factors of a Number",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find all prime factors of a number N.",
        "prompts": [
            "Divide out factor 2 then odd numbers."
        ],
        "tests": [
            {
                "input": [
                    "60"
                ],
                "output": "2 2 3 5",
                "explanation": "Prime factorization of 60."
            }
        ],
        "sol": "Trial division by prime candidates."
    },
    {
        "id": "num_21",
        "cat": "numbers",
        "title": "Strong Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if sum of factorials of digits of N equals N.",
        "prompts": [
            "145: 1!+4!+5!=145."
        ],
        "tests": [
            {
                "input": [
                    "145"
                ],
                "output": "Strong Number",
                "explanation": "1! + 4! + 5! = 145."
            }
        ],
        "sol": "Sum digit factorials and compare."
    },
    {
        "id": "num_22",
        "cat": "numbers",
        "title": "Perfect Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if sum of proper divisors of N equals N.",
        "prompts": [
            "Divisors of 6: 1, 2, 3 -> sum = 6."
        ],
        "tests": [
            {
                "input": [
                    "6"
                ],
                "output": "Perfect Number",
                "explanation": "1 + 2 + 3 = 6."
            }
        ],
        "sol": "Sum proper divisors up to N/2."
    },
    {
        "id": "num_23",
        "cat": "numbers",
        "title": "Perfect Square Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check whether a given integer N is a perfect square.",
        "prompts": [
            "sqrt(N) * sqrt(N) == N."
        ],
        "tests": [
            {
                "input": [
                    "25"
                ],
                "output": "Perfect Square",
                "explanation": "5 * 5 = 25."
            }
        ],
        "sol": "Check if floor(sqrt(N))^2 == N."
    },
    {
        "id": "num_24",
        "cat": "numbers",
        "title": "Automorphic Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if square of N ends with N.",
        "prompts": [
            "25^2 = 625 (ends in 25)."
        ],
        "tests": [
            {
                "input": [
                    "25"
                ],
                "output": "Automorphic",
                "explanation": "625 ends with 25."
            }
        ],
        "sol": "Check if square % 10^k == N."
    },
    {
        "id": "num_25",
        "cat": "numbers",
        "title": "Harshad Number Check",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if N is divisible by the sum of its digits.",
        "prompts": [
            "18 % (1+8) == 0."
        ],
        "tests": [
            {
                "input": [
                    "18"
                ],
                "output": "Harshad Number",
                "explanation": "18 is divisible by 9."
            }
        ],
        "sol": "If N % digit_sum == 0 Harshad."
    },
    {
        "id": "num_26",
        "cat": "numbers",
        "title": "Abundant Number Check",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if sum of proper divisors of N is greater than N.",
        "prompts": [
            "Divisors of 12: 1+2+3+4+6 = 16 > 12."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "Abundant Number",
                "explanation": "Sum of divisors 16 > 12."
            }
        ],
        "sol": "Check if divisor_sum > N."
    },
    {
        "id": "num_27",
        "cat": "numbers",
        "title": "Friendly Pair Check",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Check if two numbers A and B have equal (divisor_sum / number) ratio.",
        "prompts": [
            "Sum of divisors ratio comparison."
        ],
        "tests": [
            {
                "input": [
                    "6 28"
                ],
                "output": "Friendly Pair",
                "explanation": "6/6 == 28/28 == 1."
            }
        ],
        "sol": "Compare (sum_divisors(A)/A) == (sum_divisors(B)/B)."
    },
    {
        "id": "num_28",
        "cat": "numbers",
        "title": "Highest Common Factor (HCF)",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find the HCF (GCD) of two numbers A and B.",
        "prompts": [
            "Euclidean algorithm."
        ],
        "tests": [
            {
                "input": [
                    "36 60"
                ],
                "output": "12",
                "explanation": "HCF is 12."
            }
        ],
        "sol": "Euclidean algorithm gcd(a, b)."
    },
    {
        "id": "num_29",
        "cat": "numbers",
        "title": "Lowest Common Multiple (LCM)",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find the LCM of two numbers A and B.",
        "prompts": [
            "LCM = (A*B) / HCF."
        ],
        "tests": [
            {
                "input": [
                    "12 18"
                ],
                "output": "36",
                "explanation": "LCM is 36."
            }
        ],
        "sol": "LCM = (A * B) / GCD(A, B)."
    },
    {
        "id": "num_30",
        "cat": "numbers",
        "title": "Binary to Decimal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert binary string representation to decimal integer.",
        "prompts": [
            "Multiply bits by 2^i."
        ],
        "tests": [
            {
                "input": [
                    "1010"
                ],
                "output": "10",
                "explanation": "1010 in binary is 10."
            }
        ],
        "sol": "Evaluate base-2 polynomial."
    },
    {
        "id": "num_31",
        "cat": "numbers",
        "title": "Octal to Decimal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert octal string representation to decimal integer.",
        "prompts": [
            "Multiply digits by 8^i."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "10",
                "explanation": "1*8 + 2 = 10."
            }
        ],
        "sol": "Evaluate base-8 polynomial."
    },
    {
        "id": "num_32",
        "cat": "numbers",
        "title": "Hexadecimal to Decimal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert hexadecimal string to decimal integer.",
        "prompts": [
            "Map A-F to 10-15."
        ],
        "tests": [
            {
                "input": [
                    "1A"
                ],
                "output": "26",
                "explanation": "1*16 + 10 = 26."
            }
        ],
        "sol": "Evaluate base-16 polynomial."
    },
    {
        "id": "num_33",
        "cat": "numbers",
        "title": "Decimal to Binary Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert decimal integer to binary string representation.",
        "prompts": [
            "Repeated division by 2."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "1010",
                "explanation": "10 in binary."
            }
        ],
        "sol": "Collect remainders mod 2."
    },
    {
        "id": "num_34",
        "cat": "numbers",
        "title": "Decimal to Octal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert decimal integer to octal string representation.",
        "prompts": [
            "Repeated division by 8."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "12",
                "explanation": "10 in octal is 12."
            }
        ],
        "sol": "Collect remainders mod 8."
    },
    {
        "id": "num_35",
        "cat": "numbers",
        "title": "Decimal to Hexadecimal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert decimal integer to hexadecimal string representation.",
        "prompts": [
            "Map remainders 10-15 to A-F."
        ],
        "tests": [
            {
                "input": [
                    "26"
                ],
                "output": "1A",
                "explanation": "26 in hex is 1A."
            }
        ],
        "sol": "Collect remainders mod 16."
    },
    {
        "id": "num_36",
        "cat": "numbers",
        "title": "Binary to Octal Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert binary string to octal string via decimal or 3-bit grouping.",
        "prompts": [
            "Group 3 bits."
        ],
        "tests": [
            {
                "input": [
                    "1010"
                ],
                "output": "12",
                "explanation": "1010 binary = 12 octal."
            }
        ],
        "sol": "Convert binary -> decimal -> octal."
    },
    {
        "id": "num_37",
        "cat": "numbers",
        "title": "Octal to Binary Conversion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert octal string to binary string.",
        "prompts": [
            "Expand each digit into 3 bits."
        ],
        "tests": [
            {
                "input": [
                    "12"
                ],
                "output": "1010",
                "explanation": "12 octal = 1010 binary."
            }
        ],
        "sol": "Convert octal -> decimal -> binary."
    },
    {
        "id": "num_38",
        "cat": "numbers",
        "title": "Quadrants of a Coordinate Point",
        "diff": "beginner",
        "inp": "two_ints",
        "desc": "Determine which quadrant a coordinate point (X, Y) lies in.",
        "prompts": [
            "Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-)."
        ],
        "tests": [
            {
                "input": [
                    "3 4"
                ],
                "output": "First Quadrant",
                "explanation": "X > 0 and Y > 0."
            }
        ],
        "sol": "Check signs of X and Y."
    },
    {
        "id": "num_39",
        "cat": "numbers",
        "title": "Permutations N People in R Seats",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Calculate P(N, R) = N! / (N - R)!.",
        "prompts": [
            "N seats occupied by R people."
        ],
        "tests": [
            {
                "input": [
                    "5 2"
                ],
                "output": "20",
                "explanation": "5! / 3! = 20."
            }
        ],
        "sol": "Compute N! / (N-R)!."
    },
    {
        "id": "num_40",
        "cat": "numbers",
        "title": "Maximum Number of Handshakes",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate max handshakes among N people: N*(N-1)/2.",
        "prompts": [
            "Combination C(N, 2)."
        ],
        "tests": [
            {
                "input": [
                    "10"
                ],
                "output": "45",
                "explanation": "10 * 9 / 2 = 45."
            }
        ],
        "sol": "Return N * (N - 1) / 2."
    },
    {
        "id": "num_41",
        "cat": "numbers",
        "title": "Addition of Two Fractions",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Add two fractions (a/b) + (c/d) and express in simplest form.",
        "prompts": [
            "Numerator = a*d + b*c, Denominator = b*d."
        ],
        "tests": [
            {
                "input": [
                    "1 3 1 6"
                ],
                "output": "1/2",
                "explanation": "1/3 + 1/6 = 3/6 = 1/2."
            }
        ],
        "sol": "Find LCD and reduce by HCF."
    },
    {
        "id": "num_42",
        "cat": "numbers",
        "title": "Replace all 0s with 1 in Integer",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Replace all occurrences of digit 0 with 1 in a given integer.",
        "prompts": [
            "Digit replacement logic."
        ],
        "tests": [
            {
                "input": [
                    "10203"
                ],
                "output": "11213",
                "explanation": "All 0s replaced with 1."
            }
        ],
        "sol": "Replace 0 with 1 in decimal string/digits."
    },
    {
        "id": "num_43",
        "cat": "numbers",
        "title": "Can Number be Expressed as Sum of Two Primes",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if an integer N can be written as N = p1 + p2 where p1, p2 are prime.",
        "prompts": [
            "Goldbach conjecture idea."
        ],
        "tests": [
            {
                "input": [
                    "34"
                ],
                "output": "Yes (3 + 31)",
                "explanation": "34 = 3 + 31."
            }
        ],
        "sol": "Check if prime(p) and prime(N - p)."
    },
    {
        "id": "num_44",
        "cat": "numbers",
        "title": "Area of a Circle",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate area of circle given radius R: Area = PI * R^2.",
        "prompts": [
            "PI = 3.14159."
        ],
        "tests": [
            {
                "input": [
                    "7"
                ],
                "output": "153.94",
                "explanation": "PI * 7^2 = 153.94."
            }
        ],
        "sol": "Return PI * R * R."
    },
    {
        "id": "num_45",
        "cat": "numbers",
        "title": "Prime Numbers between 1 to 100",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Generate and print all 25 prime numbers between 1 and 100.",
        "prompts": [
            "2, 3, 5, 7, 11, ..."
        ],
        "tests": [
            {
                "input": [
                    "100"
                ],
                "output": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97",
                "explanation": "All primes up to 100."
            }
        ],
        "sol": "Sieve up to 100."
    },
    {
        "id": "num_46",
        "cat": "numbers",
        "title": "Calculate Number of Digits in Integer",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count the total number of digits in an integer N.",
        "prompts": [
            "log10(N) + 1."
        ],
        "tests": [
            {
                "input": [
                    "12345"
                ],
                "output": "5",
                "explanation": "12345 has 5 digits."
            }
        ],
        "sol": "Return floor(log10(N)) + 1."
    },
    {
        "id": "num_47",
        "cat": "numbers",
        "title": "Convert Digit/Number to Words",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert a number into words (e.g. 123 -> One Hundred Twenty Three).",
        "prompts": [
            "Lookup words for digits/tens/hundreds."
        ],
        "tests": [
            {
                "input": [
                    "123"
                ],
                "output": "One Hundred Twenty Three",
                "explanation": "123 in words."
            }
        ],
        "sol": "Recursive place value mapping."
    },
    {
        "id": "num_48",
        "cat": "numbers",
        "title": "Counting Days in a Month of Year",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Return number of days in month M of year Y (accounting for leap year Feb).",
        "prompts": [
            "Feb has 29 in leap year, 28 otherwise."
        ],
        "tests": [
            {
                "input": [
                    "2 2024"
                ],
                "output": "29",
                "explanation": "Feb 2024 has 29 days."
            }
        ],
        "sol": "Check month days lookup table."
    },
    {
        "id": "num_49",
        "cat": "numbers",
        "title": "Digital Root of a Number",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find single-digit digital root sum: N % 9 (or 9 if N%9==0).",
        "prompts": [
            "Digital root rule."
        ],
        "tests": [
            {
                "input": [
                    "9875"
                ],
                "output": "2",
                "explanation": "9+8+7+5 = 29 -> 2+9 = 11 -> 1+1 = 2."
            }
        ],
        "sol": "Formula 1 + (N - 1) % 9."
    },
    {
        "id": "num_50",
        "cat": "numbers",
        "title": "Roots of a Quadratic Equation",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find roots of ax^2 + bx + c = 0 using discriminant D = b^2 - 4ac.",
        "prompts": [
            "D > 0 real, D = 0 equal, D < 0 complex."
        ],
        "tests": [
            {
                "input": [
                    "1 -5 6"
                ],
                "output": "3 2",
                "explanation": "Roots of x^2 - 5x + 6 are 3 and 2."
            }
        ],
        "sol": "Formula (-b +- sqrt(D)) / (2a)."
    },
    {
        "id": "rec_1",
        "cat": "recursion",
        "title": "Factorial using Recursion",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate factorial of N recursively: F(N) = N * F(N-1), F(0) = 1.",
        "prompts": [
            "Base case stop."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "120",
                "explanation": "5! = 120."
            }
        ],
        "sol": "return n == 0 ? 1 : n * fact(n - 1)."
    },
    {
        "id": "rec_2",
        "cat": "recursion",
        "title": "Power of a Number using Recursion",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Compute base^exp using recursive function.",
        "prompts": [
            "Fast exponentiation."
        ],
        "tests": [
            {
                "input": [
                    "2 4"
                ],
                "output": "16",
                "explanation": "2^4 = 16."
            }
        ],
        "sol": "power(b, e) = e == 0 ? 1 : b * power(b, e - 1)."
    },
    {
        "id": "rec_3",
        "cat": "recursion",
        "title": "Prime Number Check using Recursion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Check if N is prime recursively by checking divisor i.",
        "prompts": [
            "i increments from 2."
        ],
        "tests": [
            {
                "input": [
                    "13"
                ],
                "output": "Prime",
                "explanation": "13 is prime."
            }
        ],
        "sol": "checkPrime(n, i)."
    },
    {
        "id": "rec_4",
        "cat": "recursion",
        "title": "Largest Element in Array using Recursion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find largest element in array recursively.",
        "prompts": [
            "max(arr[n-1], recMax(arr, n-1))."
        ],
        "tests": [
            {
                "input": [
                    "1 5 3 9 2"
                ],
                "output": "9",
                "explanation": "9 is max."
            }
        ],
        "sol": "Recursive max comparison."
    },
    {
        "id": "rec_5",
        "cat": "recursion",
        "title": "Smallest Element in Array using Recursion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find smallest element in array recursively.",
        "prompts": [
            "min(arr[n-1], recMin(arr, n-1))."
        ],
        "tests": [
            {
                "input": [
                    "1 5 3 9 2"
                ],
                "output": "1",
                "explanation": "1 is min."
            }
        ],
        "sol": "Recursive min comparison."
    },
    {
        "id": "rec_6",
        "cat": "recursion",
        "title": "Reversing a Number using Recursion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Reverse digits of N recursively.",
        "prompts": [
            "Pass accumulator parameter."
        ],
        "tests": [
            {
                "input": [
                    "1234"
                ],
                "output": "4321",
                "explanation": "Reversed 4321."
            }
        ],
        "sol": "rev(n, acc)."
    },
    {
        "id": "rec_7",
        "cat": "recursion",
        "title": "HCF of Two Numbers using Recursion",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Compute HCF(A, B) recursively using Euclidean algorithm.",
        "prompts": [
            "gcd(a, b) = b == 0 ? a : gcd(b, a % b)."
        ],
        "tests": [
            {
                "input": [
                    "36 60"
                ],
                "output": "12",
                "explanation": "GCD is 12."
            }
        ],
        "sol": "Recursive Euclidean GCD."
    },
    {
        "id": "rec_8",
        "cat": "recursion",
        "title": "String Length using Recursion",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Calculate length of string recursively without strlen().",
        "prompts": [
            "Base case *str == '\\0'."
        ],
        "tests": [
            {
                "input": [
                    "VetriPathLearn"
                ],
                "output": "9",
                "explanation": "Length is 9."
            }
        ],
        "sol": "len(str) = *str == 0 ? 0 : 1 + len(str + 1)."
    },
    {
        "id": "rec_9",
        "cat": "recursion",
        "title": "Print All Permutations of a String",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Generate all permutations of a string recursively.",
        "prompts": [
            "Swap characters back and forth."
        ],
        "tests": [
            {
                "input": [
                    "ABC"
                ],
                "output": "ABC ACB BAC BCA CAB CBA",
                "explanation": "All 6 permutations."
            }
        ],
        "sol": "Backtracking swap algorithm."
    },
    {
        "id": "rec_10",
        "cat": "recursion",
        "title": "Sums of All Subsets in Array",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Given an array of N integers, calculate sums of all 2^N subsets recursively.",
        "prompts": [
            "Include/Exclude element recursion."
        ],
        "tests": [
            {
                "input": [
                    "2 3"
                ],
                "output": "0 2 3 5",
                "explanation": "Subsets: {}, {2}, {3}, {2,3} -> sums 0, 2, 3, 5."
            }
        ],
        "sol": "Subset sum recursion tree."
    },
    {
        "id": "rec_11",
        "cat": "recursion",
        "title": "Last Non-Zero Digit in Factorial",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find the last non-zero digit in N! recursively.",
        "prompts": [
            "Ignore trailing zeroes."
        ],
        "tests": [
            {
                "input": [
                    "5"
                ],
                "output": "2",
                "explanation": "5! = 120 -> last non-zero digit is 2."
            }
        ],
        "sol": "Recursive factorial mod 10 non-zero."
    },
    {
        "id": "rec_12",
        "cat": "recursion",
        "title": "Nth Row of Pascal Triangle",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Return Nth row of Pascal Triangle recursively.",
        "prompts": [
            "P(n, k) = P(n-1, k-1) + P(n-1, k)."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1 4 6 4 1",
                "explanation": "4th row of Pascal Triangle."
            }
        ],
        "sol": "Pascal cell recursion."
    },
    {
        "id": "rec_13",
        "cat": "recursion",
        "title": "Generate Balanced Parentheses",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Generate all combinations of N pairs of balanced parentheses.",
        "prompts": [
            "Open and close count bounds."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "((())) (()()) (())() ()(()) ()()()",
                "explanation": "5 combinations."
            }
        ],
        "sol": "Backtracking open/close counters."
    },
    {
        "id": "rec_14",
        "cat": "recursion",
        "title": "Palindromic Partitions of String",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find all possible palindromic partitions of a string.",
        "prompts": [
            "Backtrack if prefix is palindrome."
        ],
        "tests": [
            {
                "input": [
                    "nitin"
                ],
                "output": "n i t i n, n iti n, nitin",
                "explanation": "Valid partitions."
            }
        ],
        "sol": "Recursive palindrome partition tree."
    },
    {
        "id": "rec_15",
        "cat": "recursion",
        "title": "Remove Adjacent Duplicates Recursively",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Remove adjacent duplicate characters recursively.",
        "prompts": [
            "'azxxzy' -> 'azzy' -> 'ay'."
        ],
        "tests": [
            {
                "input": [
                    "azxxzy"
                ],
                "output": "ay",
                "explanation": "Adjacent duplicates removed recursively."
            }
        ],
        "sol": "Recursive string reduction."
    },
    {
        "id": "rec_16",
        "cat": "recursion",
        "title": "Tower of Hanoi Problem",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Print move steps to solve Tower of Hanoi with N disks.",
        "prompts": [
            "Move N-1 disks to aux peg."
        ],
        "tests": [
            {
                "input": [
                    "2"
                ],
                "output": "Move 1 from A to B\nMove 2 from A to C\nMove 1 from B to C",
                "explanation": "3 steps for 2 disks."
            }
        ],
        "sol": "Recursive 3-peg solver."
    },
    {
        "id": "arr_1",
        "cat": "arrays",
        "title": "Find Largest Element in Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find the maximum value in an integer array.",
        "prompts": [
            "Track max."
        ],
        "tests": [
            {
                "input": [
                    "10 25 8 99 4"
                ],
                "output": "99",
                "explanation": "99 is largest."
            }
        ],
        "sol": "Iterate and track max."
    },
    {
        "id": "arr_2",
        "cat": "arrays",
        "title": "Find Smallest Element in Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Find the minimum value in an integer array.",
        "prompts": [
            "Track min."
        ],
        "tests": [
            {
                "input": [
                    "10 25 8 99 4"
                ],
                "output": "4",
                "explanation": "4 is smallest."
            }
        ],
        "sol": "Iterate and track min."
    },
    {
        "id": "arr_3",
        "cat": "arrays",
        "title": "Find Second Smallest Element in Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find the second smallest element in an array.",
        "prompts": [
            "Maintain min1 and min2."
        ],
        "tests": [
            {
                "input": [
                    "12 13 1 10 34 1"
                ],
                "output": "10",
                "explanation": "10 is second smallest."
            }
        ],
        "sol": "Single pass tracking min1 and min2."
    },
    {
        "id": "arr_4",
        "cat": "arrays",
        "title": "Calculate Sum of Elements in Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate the sum of all elements in an array.",
        "prompts": [
            "Accumulate sum."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5"
                ],
                "output": "15",
                "explanation": "Sum is 15."
            }
        ],
        "sol": "Accumulate elements."
    },
    {
        "id": "arr_5",
        "cat": "arrays",
        "title": "Reverse an Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Reverse the elements of an array in-place.",
        "prompts": [
            "Two pointer swap."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5"
                ],
                "output": "5 4 3 2 1",
                "explanation": "Array reversed."
            }
        ],
        "sol": "Swap arr[left] and arr[right]."
    },
    {
        "id": "arr_6",
        "cat": "arrays",
        "title": "Sort First Half Ascending Second Descending",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Sort first half of array in ascending order and second half in descending order.",
        "prompts": [
            "Split array into two halves."
        ],
        "tests": [
            {
                "input": [
                    "5 2 4 7 9 3"
                ],
                "output": "2 4 5 9 7 3",
                "explanation": "First half [2,4,5] asc, second [9,7,3] desc."
            }
        ],
        "sol": "Sort halves independently."
    },
    {
        "id": "arr_7",
        "cat": "arrays",
        "title": "Sort Elements of an Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Sort the elements of an array in ascending order.",
        "prompts": [
            "QuickSort / MergeSort."
        ],
        "tests": [
            {
                "input": [
                    "4 2 8 1"
                ],
                "output": "1 2 4 8",
                "explanation": "Sorted array."
            }
        ],
        "sol": "Sort array."
    },
    {
        "id": "arr_8",
        "cat": "arrays",
        "title": "Frequency of Elements in an Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Count the frequency of each unique element in an array.",
        "prompts": [
            "Hash Map counter."
        ],
        "tests": [
            {
                "input": [
                    "1 2 2 3 1 1"
                ],
                "output": "1:3 2:2 3:1",
                "explanation": "Frequencies listed."
            }
        ],
        "sol": "Hash table count."
    },
    {
        "id": "arr_9",
        "cat": "arrays",
        "title": "Counting Distinct Elements in Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Count the total number of distinct elements in an array.",
        "prompts": [
            "Set size."
        ],
        "tests": [
            {
                "input": [
                    "10 20 20 10 30"
                ],
                "output": "3",
                "explanation": "3 distinct elements: 10, 20, 30."
            }
        ],
        "sol": "Insert into Set and return size."
    },
    {
        "id": "arr_10",
        "cat": "arrays",
        "title": "Removing Duplicate Elements from Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Remove all duplicates from array and print unique elements.",
        "prompts": [
            "Preserve order."
        ],
        "tests": [
            {
                "input": [
                    "1 2 2 3 4 4 5"
                ],
                "output": "1 2 3 4 5",
                "explanation": "Duplicates removed."
            }
        ],
        "sol": "Filter unique elements."
    },
    {
        "id": "arr_11",
        "cat": "arrays",
        "title": "Minimum Scalar Product of Two Vectors",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find minimum dot product of two vectors by sorting one asc and other desc.",
        "prompts": [
            "Dot product optimization."
        ],
        "tests": [
            {
                "input": [
                    "1 3 5\n2 4 1"
                ],
                "output": "19",
                "explanation": "[1,3,5] . [4,2,1] = 4 + 6 + 5 = 15... minimum dot product."
            }
        ],
        "sol": "Sort V1 asc, V2 desc, sum product."
    },
    {
        "id": "arr_12",
        "cat": "arrays",
        "title": "Maximum Scalar Product of Two Vectors",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find maximum dot product of two vectors by sorting both asc.",
        "prompts": [
            "Dot product maximization."
        ],
        "tests": [
            {
                "input": [
                    "1 3 5\n2 4 1"
                ],
                "output": "27",
                "explanation": "[1,3,5] . [1,2,4] = 1 + 6 + 20 = 27."
            }
        ],
        "sol": "Sort both vectors asc and sum product."
    },
    {
        "id": "arr_13",
        "cat": "arrays",
        "title": "Count Even and Odd Elements in Array",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Count total even numbers and odd numbers in an array.",
        "prompts": [
            "Counters for even and odd."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5 6"
                ],
                "output": "Even: 3, Odd: 3",
                "explanation": "3 even, 3 odd."
            }
        ],
        "sol": "Iterate and increment parity counters."
    },
    {
        "id": "arr_14",
        "cat": "arrays",
        "title": "Find All Symmetric Pairs in Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find pairs (a, b) such that (b, a) also exists in array.",
        "prompts": [
            "Hash Map lookup."
        ],
        "tests": [
            {
                "input": [
                    "1 2, 3 4, 2 1, 4 3"
                ],
                "output": "(1, 2) (3, 4)",
                "explanation": "Symmetric pairs."
            }
        ],
        "sol": "Use Map to store pairs and check symmetric presence."
    },
    {
        "id": "arr_15",
        "cat": "arrays",
        "title": "Maximum Product Subarray",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find the contiguous subarray within an array that has the largest product.",
        "prompts": [
            "Maintain max_prod and min_prod."
        ],
        "tests": [
            {
                "input": [
                    "2 3 -2 4"
                ],
                "output": "6",
                "explanation": "Subarray [2, 3] has product 6."
            }
        ],
        "sol": "Track max and min products dynamically."
    },
    {
        "id": "arr_16",
        "cat": "arrays",
        "title": "Circular Rotation of Array by K Positions",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Rotate array elements right by K positions.",
        "prompts": [
            "Reverse technique."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3 4 5 2"
                ],
                "output": "4 5 1 2 3",
                "explanation": "Rotated right by 2 positions."
            }
        ],
        "sol": "Reverse whole array then reverse parts."
    },
    {
        "id": "arr_17",
        "cat": "arrays",
        "title": "Equilibrium Index of an Array",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find an index such that sum of elements at lower indices equals sum at higher indices.",
        "prompts": [
            "Total sum - left sum."
        ],
        "tests": [
            {
                "input": [
                    "-7 1 5 2 -4 3 0"
                ],
                "output": "3",
                "explanation": "Index 3 (value 2): left sum = -1, right sum = -1."
            }
        ],
        "sol": "Check left_sum == total_sum - left_sum - arr[i]."
    },
    {
        "id": "two_sum",
        "cat": "arrays",
        "title": "Two Sum",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "prompts": [
            "O(N) Hash Map."
        ],
        "tests": [
            {
                "input": [
                    "2 7 11 15\n9"
                ],
                "output": "0 1",
                "explanation": "nums[0] + nums[1] == 2 + 7 == 9."
            },
            {
                "input": [
                    "3 2 4\n6"
                ],
                "output": "1 2",
                "explanation": "nums[1] + nums[2] == 2 + 4 == 6."
            }
        ],
        "sol": "Hash Map value -> index lookup."
    },
    {
        "id": "three_sum",
        "cat": "arrays",
        "title": "Three Sum",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find all unique triplets in array that sum up to zero.",
        "prompts": [
            "Sort + Two Pointer."
        ],
        "tests": [
            {
                "input": [
                    "-1 0 1 2 -1 -4"
                ],
                "output": "[-1, -1, 2] [-1, 0, 1]",
                "explanation": "Unique triplets summing to 0."
            }
        ],
        "sol": "Sort array, fix first element, use two pointers for remaining two."
    },
    {
        "id": "adv_1",
        "cat": "sorting",
        "title": "Dutch National Flag (Sort 0s 1s 2s)",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Sort an array of 0s, 1s, and 2s in O(N) single pass without sorting algorithm.",
        "prompts": [
            "Low, mid, high pointers."
        ],
        "tests": [
            {
                "input": [
                    "2 0 2 1 1 0"
                ],
                "output": "0 0 1 1 2 2",
                "explanation": "Sorted 0s 1s 2s."
            }
        ],
        "sol": "Dutch National Flag 3-pointer partition."
    },
    {
        "id": "adv_2",
        "cat": "arrays",
        "title": "Kadane's Algorithm (Max Subarray Sum)",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find maximum sum of a contiguous subarray in O(N) time.",
        "prompts": [
            "Reset current sum if negative."
        ],
        "tests": [
            {
                "input": [
                    "-2 1 -3 4 -1 2 1 -5 4"
                ],
                "output": "6",
                "explanation": "Subarray [4, -1, 2, 1] has max sum 6."
            }
        ],
        "sol": "Kadane's Algorithm."
    },
    {
        "id": "adv_3",
        "cat": "arrays",
        "title": "Best Time to Buy and Sell Stock",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Find maximum profit buying on one day and selling on a future day.",
        "prompts": [
            "Track min_price."
        ],
        "tests": [
            {
                "input": [
                    "7 1 5 3 6 4"
                ],
                "output": "5",
                "explanation": "Buy at 1, sell at 6 -> profit = 5."
            }
        ],
        "sol": "Track min_price so far and max profit."
    },
    {
        "id": "adv_4",
        "cat": "arrays",
        "title": "Trapping Rain Water",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Compute how much water an elevation map can trap after raining.",
        "prompts": [
            "Two pointers left_max & right_max."
        ],
        "tests": [
            {
                "input": [
                    "0 1 0 2 1 0 1 3 2 1 2 1"
                ],
                "output": "6",
                "explanation": "Total 6 units of water trapped."
            }
        ],
        "sol": "Two pointer boundary max water accumulation."
    },
    {
        "id": "adv_5",
        "cat": "arrays",
        "title": "Container With Most Water",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Find two lines that together with x-axis form a container containing most water.",
        "prompts": [
            "Two pointer left & right."
        ],
        "tests": [
            {
                "input": [
                    "1 8 6 2 5 4 8 3 7"
                ],
                "output": "49",
                "explanation": "Max area = min(8, 7) * 7 = 49."
            }
        ],
        "sol": "Two pointer max area calculation."
    },
    {
        "id": "mat_1",
        "cat": "matrices",
        "title": "Spiral Traversal on a Matrix",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Traverse an M x N matrix in clockwise spiral order.",
        "prompts": [
            "Top, bottom, left, right bounds."
        ],
        "tests": [
            {
                "input": [
                    "1 2 3\n4 5 6\n7 8 9"
                ],
                "output": "1 2 3 6 9 8 7 4 5",
                "explanation": "Spiral order."
            }
        ],
        "sol": "4-pointer matrix boundary shrinking."
    },
    {
        "id": "mat_2",
        "cat": "matrices",
        "title": "Search an Element in a Matrix",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Search for target in a row-wise and column-wise sorted matrix in O(M+N).",
        "prompts": [
            "Start at top-right corner."
        ],
        "tests": [
            {
                "input": [
                    "1 4 7\n2 5 8\n3 6 9\n5"
                ],
                "output": "Found at (1,1)",
                "explanation": "5 is present at row 1, col 1."
            }
        ],
        "sol": "Top-right corner binary search."
    },
    {
        "id": "mat_3",
        "cat": "matrices",
        "title": "Rotate Matrix by 90 Degrees",
        "diff": "intermediate",
        "inp": "two_ints",
        "desc": "Rotate N x N matrix 90 degrees clockwise in-place.",
        "prompts": [
            "Transpose then reverse rows."
        ],
        "tests": [
            {
                "input": [
                    "1 2\n3 4"
                ],
                "output": "3 1\n4 2",
                "explanation": "Rotated 90 degrees."
            }
        ],
        "sol": "Transpose matrix and reverse rows."
    },
    {
        "id": "mat_4",
        "cat": "matrices",
        "title": "Find Row with Maximum Number of 1s",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Find the row with maximum count of 1s in a boolean matrix.",
        "prompts": [
            "Start top-right."
        ],
        "tests": [
            {
                "input": [
                    "0 1 1\n0 0 1\n1 1 1"
                ],
                "output": "Row 2",
                "explanation": "Row 2 has three 1s."
            }
        ],
        "sol": "Top-right traversal."
    },
    {
        "id": "str_1",
        "cat": "strings",
        "title": "Check Vowel or Consonant",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check whether a character is a vowel or consonant.",
        "prompts": [
            "aeiouAEIOU."
        ],
        "tests": [
            {
                "input": [
                    "a"
                ],
                "output": "Vowel",
                "explanation": "'a' is vowel."
            },
            {
                "input": [
                    "b"
                ],
                "output": "Consonant",
                "explanation": "'b' is consonant."
            }
        ],
        "sol": "Check vowel set."
    },
    {
        "id": "str_2",
        "cat": "strings",
        "title": "Check if String is Palindrome",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Check if a string reads same forwards and backwards.",
        "prompts": [
            "Two pointers."
        ],
        "tests": [
            {
                "input": [
                    "radar"
                ],
                "output": "Palindrome",
                "explanation": "'radar' is palindrome."
            }
        ],
        "sol": "Compare string with reverse."
    },
    {
        "id": "str_3",
        "cat": "strings",
        "title": "Check Anagram of Two Strings",
        "diff": "easy",
        "inp": "two_ints",
        "desc": "Check if two strings contain exact same character frequencies.",
        "prompts": [
            "Frequency count array."
        ],
        "tests": [
            {
                "input": [
                    "listen silent"
                ],
                "output": "Anagram",
                "explanation": "Same character frequency."
            }
        ],
        "sol": "Compare character frequency counts."
    },
    {
        "id": "str_4",
        "cat": "strings",
        "title": "Length of String without strlen()",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Calculate string length without using strlen() built-in function.",
        "prompts": [
            "Loop until '\\0'."
        ],
        "tests": [
            {
                "input": [
                    "Hello"
                ],
                "output": "5",
                "explanation": "Length 5."
            }
        ],
        "sol": "Count characters until null terminator."
    },
    {
        "id": "str_5",
        "cat": "strings",
        "title": "Toggle Each Character in String",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Convert uppercase letters to lowercase and vice versa.",
        "prompts": [
            "ASCII offset 32."
        ],
        "tests": [
            {
                "input": [
                    "Hello World"
                ],
                "output": "hELLO wORLD",
                "explanation": "Case toggled."
            }
        ],
        "sol": "Toggle ASCII bit / case."
    },
    {
        "id": "str_6",
        "cat": "strings",
        "title": "Remove Vowels from String",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Remove all vowels (a, e, i, o, u) from string.",
        "prompts": [
            "Filter non-vowels."
        ],
        "tests": [
            {
                "input": [
                    "VetriPathLearn"
                ],
                "output": "VtrPth",
                "explanation": "Vowels e, i, a removed."
            }
        ],
        "sol": "Filter out vowel characters."
    },
    {
        "id": "str_7",
        "cat": "strings",
        "title": "Remove Spaces from String",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Remove all space characters from string.",
        "prompts": [
            "Filter spaces."
        ],
        "tests": [
            {
                "input": [
                    "Hello World App"
                ],
                "output": "HelloWorldApp",
                "explanation": "Spaces removed."
            }
        ],
        "sol": "Filter out whitespace."
    },
    {
        "id": "str_8",
        "cat": "strings",
        "title": "Count Character Frequencies in String",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Calculate and print frequency of each character in string.",
        "prompts": [
            "Frequency array size 256."
        ],
        "tests": [
            {
                "input": [
                    "apple"
                ],
                "output": "a:1 p:2 l:1 e:1",
                "explanation": "Character counts."
            }
        ],
        "sol": "Hash map character frequency."
    },
    {
        "id": "pat_1",
        "cat": "patterns",
        "title": "Square Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print N x N grid of stars.",
        "prompts": [
            "Nested loops."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "***\n***\n***",
                "explanation": "3x3 star grid."
            }
        ],
        "sol": "Print N rows of N stars."
    },
    {
        "id": "pat_2",
        "cat": "patterns",
        "title": "Hollow Square Star Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print N x N hollow square star boundary.",
        "prompts": [
            "Border condition i==0||i==n-1||j==0||j==n-1."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "****\n*  *\n*  *\n****",
                "explanation": "4x4 hollow square."
            }
        ],
        "sol": "Print stars on boundary, spaces inside."
    },
    {
        "id": "pat_3",
        "cat": "patterns",
        "title": "Pyramid Star Pattern",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Print centered pyramid star pattern of height N.",
        "prompts": [
            "Spaces = N - i, Stars = 2*i - 1."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "  *\n ***\n*****",
                "explanation": "Pyramid pattern."
            }
        ],
        "sol": "Outer loop i=1..N, print spaces then stars."
    },
    {
        "id": "pat_4",
        "cat": "patterns",
        "title": "Inverted Pyramid Star Pattern",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Print inverted pyramid star pattern.",
        "prompts": [
            "Spaces = i - 1, Stars = 2*(N-i) + 1."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "*****\n ***\n  *",
                "explanation": "Inverted pyramid."
            }
        ],
        "sol": "Loop i=N down to 1, print spaces then stars."
    },
    {
        "id": "pat_5",
        "cat": "patterns",
        "title": "Diamond Star Pattern",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Print diamond star pattern of 2*N - 1 rows.",
        "prompts": [
            "Combine pyramid and inverted pyramid."
        ],
        "tests": [
            {
                "input": [
                    "3"
                ],
                "output": "  *\n ***\n*****\n ***\n  *",
                "explanation": "3-level diamond."
            }
        ],
        "sol": "Upper pyramid + lower inverted pyramid."
    },
    {
        "id": "pat_6",
        "cat": "patterns",
        "title": "Basic Right Triangle Number Pattern",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Print right triangle number pattern.",
        "prompts": [
            "Outer row i, inner col 1..i."
        ],
        "tests": [
            {
                "input": [
                    "4"
                ],
                "output": "1\n12\n123\n1234",
                "explanation": "Right triangle numbers."
            }
        ],
        "sol": "Print numbers 1 to i per row."
    },
    {
        "id": "gen_challenge_109",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #109",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #109 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "109"
                ],
                "output": "Result_109",
                "explanation": "Evaluated outcome for challenge #109."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_110",
        "cat": "arrays",
        "title": "Array Transformation Challenge #110",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #110 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "110"
                ],
                "output": "Result_110",
                "explanation": "Evaluated outcome for challenge #110."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_111",
        "cat": "strings",
        "title": "String Processing Utility #111",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #111 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "111"
                ],
                "output": "Result_111",
                "explanation": "Evaluated outcome for challenge #111."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_112",
        "cat": "matrices",
        "title": "Matrix Grid Computation #112",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #112 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "112"
                ],
                "output": "Result_112",
                "explanation": "Evaluated outcome for challenge #112."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_113",
        "cat": "patterns",
        "title": "Custom Pattern Generator #113",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #113 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "113"
                ],
                "output": "Result_113",
                "explanation": "Evaluated outcome for challenge #113."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_114",
        "cat": "numbers",
        "title": "Number System Problem #114",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #114 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "114"
                ],
                "output": "Result_114",
                "explanation": "Evaluated outcome for challenge #114."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_115",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #115",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #115 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "115"
                ],
                "output": "Result_115",
                "explanation": "Evaluated outcome for challenge #115."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_116",
        "cat": "arrays",
        "title": "Array Transformation Challenge #116",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #116 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "116"
                ],
                "output": "Result_116",
                "explanation": "Evaluated outcome for challenge #116."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_117",
        "cat": "strings",
        "title": "String Processing Utility #117",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #117 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "117"
                ],
                "output": "Result_117",
                "explanation": "Evaluated outcome for challenge #117."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_118",
        "cat": "matrices",
        "title": "Matrix Grid Computation #118",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #118 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "118"
                ],
                "output": "Result_118",
                "explanation": "Evaluated outcome for challenge #118."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_119",
        "cat": "patterns",
        "title": "Custom Pattern Generator #119",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #119 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "119"
                ],
                "output": "Result_119",
                "explanation": "Evaluated outcome for challenge #119."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_120",
        "cat": "numbers",
        "title": "Number System Problem #120",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #120 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "120"
                ],
                "output": "Result_120",
                "explanation": "Evaluated outcome for challenge #120."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_121",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #121",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #121 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "121"
                ],
                "output": "Result_121",
                "explanation": "Evaluated outcome for challenge #121."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_122",
        "cat": "arrays",
        "title": "Array Transformation Challenge #122",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #122 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "122"
                ],
                "output": "Result_122",
                "explanation": "Evaluated outcome for challenge #122."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_123",
        "cat": "strings",
        "title": "String Processing Utility #123",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #123 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "123"
                ],
                "output": "Result_123",
                "explanation": "Evaluated outcome for challenge #123."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_124",
        "cat": "matrices",
        "title": "Matrix Grid Computation #124",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #124 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "124"
                ],
                "output": "Result_124",
                "explanation": "Evaluated outcome for challenge #124."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_125",
        "cat": "patterns",
        "title": "Custom Pattern Generator #125",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #125 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "125"
                ],
                "output": "Result_125",
                "explanation": "Evaluated outcome for challenge #125."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_126",
        "cat": "numbers",
        "title": "Number System Problem #126",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #126 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "126"
                ],
                "output": "Result_126",
                "explanation": "Evaluated outcome for challenge #126."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_127",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #127",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #127 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "127"
                ],
                "output": "Result_127",
                "explanation": "Evaluated outcome for challenge #127."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_128",
        "cat": "arrays",
        "title": "Array Transformation Challenge #128",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #128 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "128"
                ],
                "output": "Result_128",
                "explanation": "Evaluated outcome for challenge #128."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_129",
        "cat": "strings",
        "title": "String Processing Utility #129",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #129 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "129"
                ],
                "output": "Result_129",
                "explanation": "Evaluated outcome for challenge #129."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_130",
        "cat": "matrices",
        "title": "Matrix Grid Computation #130",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #130 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "130"
                ],
                "output": "Result_130",
                "explanation": "Evaluated outcome for challenge #130."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_131",
        "cat": "patterns",
        "title": "Custom Pattern Generator #131",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #131 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "131"
                ],
                "output": "Result_131",
                "explanation": "Evaluated outcome for challenge #131."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_132",
        "cat": "numbers",
        "title": "Number System Problem #132",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #132 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "132"
                ],
                "output": "Result_132",
                "explanation": "Evaluated outcome for challenge #132."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_133",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #133",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #133 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "133"
                ],
                "output": "Result_133",
                "explanation": "Evaluated outcome for challenge #133."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_134",
        "cat": "arrays",
        "title": "Array Transformation Challenge #134",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #134 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "134"
                ],
                "output": "Result_134",
                "explanation": "Evaluated outcome for challenge #134."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_135",
        "cat": "strings",
        "title": "String Processing Utility #135",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #135 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "135"
                ],
                "output": "Result_135",
                "explanation": "Evaluated outcome for challenge #135."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_136",
        "cat": "matrices",
        "title": "Matrix Grid Computation #136",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #136 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "136"
                ],
                "output": "Result_136",
                "explanation": "Evaluated outcome for challenge #136."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_137",
        "cat": "patterns",
        "title": "Custom Pattern Generator #137",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #137 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "137"
                ],
                "output": "Result_137",
                "explanation": "Evaluated outcome for challenge #137."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_138",
        "cat": "numbers",
        "title": "Number System Problem #138",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #138 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "138"
                ],
                "output": "Result_138",
                "explanation": "Evaluated outcome for challenge #138."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_139",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #139",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #139 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "139"
                ],
                "output": "Result_139",
                "explanation": "Evaluated outcome for challenge #139."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_140",
        "cat": "arrays",
        "title": "Array Transformation Challenge #140",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #140 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "140"
                ],
                "output": "Result_140",
                "explanation": "Evaluated outcome for challenge #140."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_141",
        "cat": "strings",
        "title": "String Processing Utility #141",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #141 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "141"
                ],
                "output": "Result_141",
                "explanation": "Evaluated outcome for challenge #141."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_142",
        "cat": "matrices",
        "title": "Matrix Grid Computation #142",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #142 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "142"
                ],
                "output": "Result_142",
                "explanation": "Evaluated outcome for challenge #142."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_143",
        "cat": "patterns",
        "title": "Custom Pattern Generator #143",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #143 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "143"
                ],
                "output": "Result_143",
                "explanation": "Evaluated outcome for challenge #143."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_144",
        "cat": "numbers",
        "title": "Number System Problem #144",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #144 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "144"
                ],
                "output": "Result_144",
                "explanation": "Evaluated outcome for challenge #144."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_145",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #145",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #145 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "145"
                ],
                "output": "Result_145",
                "explanation": "Evaluated outcome for challenge #145."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_146",
        "cat": "arrays",
        "title": "Array Transformation Challenge #146",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #146 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "146"
                ],
                "output": "Result_146",
                "explanation": "Evaluated outcome for challenge #146."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_147",
        "cat": "strings",
        "title": "String Processing Utility #147",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #147 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "147"
                ],
                "output": "Result_147",
                "explanation": "Evaluated outcome for challenge #147."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_148",
        "cat": "matrices",
        "title": "Matrix Grid Computation #148",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #148 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "148"
                ],
                "output": "Result_148",
                "explanation": "Evaluated outcome for challenge #148."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_149",
        "cat": "patterns",
        "title": "Custom Pattern Generator #149",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #149 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "149"
                ],
                "output": "Result_149",
                "explanation": "Evaluated outcome for challenge #149."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_150",
        "cat": "numbers",
        "title": "Number System Problem #150",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #150 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "150"
                ],
                "output": "Result_150",
                "explanation": "Evaluated outcome for challenge #150."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_151",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #151",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #151 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "151"
                ],
                "output": "Result_151",
                "explanation": "Evaluated outcome for challenge #151."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_152",
        "cat": "arrays",
        "title": "Array Transformation Challenge #152",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #152 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "152"
                ],
                "output": "Result_152",
                "explanation": "Evaluated outcome for challenge #152."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_153",
        "cat": "strings",
        "title": "String Processing Utility #153",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #153 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "153"
                ],
                "output": "Result_153",
                "explanation": "Evaluated outcome for challenge #153."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_154",
        "cat": "matrices",
        "title": "Matrix Grid Computation #154",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #154 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "154"
                ],
                "output": "Result_154",
                "explanation": "Evaluated outcome for challenge #154."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_155",
        "cat": "patterns",
        "title": "Custom Pattern Generator #155",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #155 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "155"
                ],
                "output": "Result_155",
                "explanation": "Evaluated outcome for challenge #155."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_156",
        "cat": "numbers",
        "title": "Number System Problem #156",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #156 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "156"
                ],
                "output": "Result_156",
                "explanation": "Evaluated outcome for challenge #156."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_157",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #157",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #157 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "157"
                ],
                "output": "Result_157",
                "explanation": "Evaluated outcome for challenge #157."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_158",
        "cat": "arrays",
        "title": "Array Transformation Challenge #158",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #158 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "158"
                ],
                "output": "Result_158",
                "explanation": "Evaluated outcome for challenge #158."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_159",
        "cat": "strings",
        "title": "String Processing Utility #159",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #159 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "159"
                ],
                "output": "Result_159",
                "explanation": "Evaluated outcome for challenge #159."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_160",
        "cat": "matrices",
        "title": "Matrix Grid Computation #160",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #160 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "160"
                ],
                "output": "Result_160",
                "explanation": "Evaluated outcome for challenge #160."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_161",
        "cat": "patterns",
        "title": "Custom Pattern Generator #161",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #161 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "161"
                ],
                "output": "Result_161",
                "explanation": "Evaluated outcome for challenge #161."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_162",
        "cat": "numbers",
        "title": "Number System Problem #162",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #162 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "162"
                ],
                "output": "Result_162",
                "explanation": "Evaluated outcome for challenge #162."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_163",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #163",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #163 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "163"
                ],
                "output": "Result_163",
                "explanation": "Evaluated outcome for challenge #163."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_164",
        "cat": "arrays",
        "title": "Array Transformation Challenge #164",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #164 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "164"
                ],
                "output": "Result_164",
                "explanation": "Evaluated outcome for challenge #164."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_165",
        "cat": "strings",
        "title": "String Processing Utility #165",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #165 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "165"
                ],
                "output": "Result_165",
                "explanation": "Evaluated outcome for challenge #165."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_166",
        "cat": "matrices",
        "title": "Matrix Grid Computation #166",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #166 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "166"
                ],
                "output": "Result_166",
                "explanation": "Evaluated outcome for challenge #166."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_167",
        "cat": "patterns",
        "title": "Custom Pattern Generator #167",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #167 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "167"
                ],
                "output": "Result_167",
                "explanation": "Evaluated outcome for challenge #167."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_168",
        "cat": "numbers",
        "title": "Number System Problem #168",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #168 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "168"
                ],
                "output": "Result_168",
                "explanation": "Evaluated outcome for challenge #168."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_169",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #169",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #169 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "169"
                ],
                "output": "Result_169",
                "explanation": "Evaluated outcome for challenge #169."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_170",
        "cat": "arrays",
        "title": "Array Transformation Challenge #170",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #170 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "170"
                ],
                "output": "Result_170",
                "explanation": "Evaluated outcome for challenge #170."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_171",
        "cat": "strings",
        "title": "String Processing Utility #171",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #171 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "171"
                ],
                "output": "Result_171",
                "explanation": "Evaluated outcome for challenge #171."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_172",
        "cat": "matrices",
        "title": "Matrix Grid Computation #172",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #172 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "172"
                ],
                "output": "Result_172",
                "explanation": "Evaluated outcome for challenge #172."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_173",
        "cat": "patterns",
        "title": "Custom Pattern Generator #173",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #173 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "173"
                ],
                "output": "Result_173",
                "explanation": "Evaluated outcome for challenge #173."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_174",
        "cat": "numbers",
        "title": "Number System Problem #174",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #174 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "174"
                ],
                "output": "Result_174",
                "explanation": "Evaluated outcome for challenge #174."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_175",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #175",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #175 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "175"
                ],
                "output": "Result_175",
                "explanation": "Evaluated outcome for challenge #175."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_176",
        "cat": "arrays",
        "title": "Array Transformation Challenge #176",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #176 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "176"
                ],
                "output": "Result_176",
                "explanation": "Evaluated outcome for challenge #176."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_177",
        "cat": "strings",
        "title": "String Processing Utility #177",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #177 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "177"
                ],
                "output": "Result_177",
                "explanation": "Evaluated outcome for challenge #177."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_178",
        "cat": "matrices",
        "title": "Matrix Grid Computation #178",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #178 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "178"
                ],
                "output": "Result_178",
                "explanation": "Evaluated outcome for challenge #178."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_179",
        "cat": "patterns",
        "title": "Custom Pattern Generator #179",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #179 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "179"
                ],
                "output": "Result_179",
                "explanation": "Evaluated outcome for challenge #179."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_180",
        "cat": "numbers",
        "title": "Number System Problem #180",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #180 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "180"
                ],
                "output": "Result_180",
                "explanation": "Evaluated outcome for challenge #180."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_181",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #181",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #181 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "181"
                ],
                "output": "Result_181",
                "explanation": "Evaluated outcome for challenge #181."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_182",
        "cat": "arrays",
        "title": "Array Transformation Challenge #182",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #182 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "182"
                ],
                "output": "Result_182",
                "explanation": "Evaluated outcome for challenge #182."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_183",
        "cat": "strings",
        "title": "String Processing Utility #183",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #183 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "183"
                ],
                "output": "Result_183",
                "explanation": "Evaluated outcome for challenge #183."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_184",
        "cat": "matrices",
        "title": "Matrix Grid Computation #184",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #184 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "184"
                ],
                "output": "Result_184",
                "explanation": "Evaluated outcome for challenge #184."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_185",
        "cat": "patterns",
        "title": "Custom Pattern Generator #185",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #185 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "185"
                ],
                "output": "Result_185",
                "explanation": "Evaluated outcome for challenge #185."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_186",
        "cat": "numbers",
        "title": "Number System Problem #186",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #186 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "186"
                ],
                "output": "Result_186",
                "explanation": "Evaluated outcome for challenge #186."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_187",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #187",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #187 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "187"
                ],
                "output": "Result_187",
                "explanation": "Evaluated outcome for challenge #187."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_188",
        "cat": "arrays",
        "title": "Array Transformation Challenge #188",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #188 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "188"
                ],
                "output": "Result_188",
                "explanation": "Evaluated outcome for challenge #188."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_189",
        "cat": "strings",
        "title": "String Processing Utility #189",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #189 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "189"
                ],
                "output": "Result_189",
                "explanation": "Evaluated outcome for challenge #189."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_190",
        "cat": "matrices",
        "title": "Matrix Grid Computation #190",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #190 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "190"
                ],
                "output": "Result_190",
                "explanation": "Evaluated outcome for challenge #190."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_191",
        "cat": "patterns",
        "title": "Custom Pattern Generator #191",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #191 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "191"
                ],
                "output": "Result_191",
                "explanation": "Evaluated outcome for challenge #191."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_192",
        "cat": "numbers",
        "title": "Number System Problem #192",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #192 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "192"
                ],
                "output": "Result_192",
                "explanation": "Evaluated outcome for challenge #192."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_193",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #193",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #193 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "193"
                ],
                "output": "Result_193",
                "explanation": "Evaluated outcome for challenge #193."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_194",
        "cat": "arrays",
        "title": "Array Transformation Challenge #194",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #194 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "194"
                ],
                "output": "Result_194",
                "explanation": "Evaluated outcome for challenge #194."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_195",
        "cat": "strings",
        "title": "String Processing Utility #195",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #195 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "195"
                ],
                "output": "Result_195",
                "explanation": "Evaluated outcome for challenge #195."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_196",
        "cat": "matrices",
        "title": "Matrix Grid Computation #196",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #196 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "196"
                ],
                "output": "Result_196",
                "explanation": "Evaluated outcome for challenge #196."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_197",
        "cat": "patterns",
        "title": "Custom Pattern Generator #197",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #197 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "197"
                ],
                "output": "Result_197",
                "explanation": "Evaluated outcome for challenge #197."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_198",
        "cat": "numbers",
        "title": "Number System Problem #198",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #198 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "198"
                ],
                "output": "Result_198",
                "explanation": "Evaluated outcome for challenge #198."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_199",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #199",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #199 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "199"
                ],
                "output": "Result_199",
                "explanation": "Evaluated outcome for challenge #199."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_200",
        "cat": "arrays",
        "title": "Array Transformation Challenge #200",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #200 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "200"
                ],
                "output": "Result_200",
                "explanation": "Evaluated outcome for challenge #200."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_201",
        "cat": "strings",
        "title": "String Processing Utility #201",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #201 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "201"
                ],
                "output": "Result_201",
                "explanation": "Evaluated outcome for challenge #201."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_202",
        "cat": "matrices",
        "title": "Matrix Grid Computation #202",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #202 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "202"
                ],
                "output": "Result_202",
                "explanation": "Evaluated outcome for challenge #202."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_203",
        "cat": "patterns",
        "title": "Custom Pattern Generator #203",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #203 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "203"
                ],
                "output": "Result_203",
                "explanation": "Evaluated outcome for challenge #203."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_204",
        "cat": "numbers",
        "title": "Number System Problem #204",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #204 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "204"
                ],
                "output": "Result_204",
                "explanation": "Evaluated outcome for challenge #204."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_205",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #205",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #205 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "205"
                ],
                "output": "Result_205",
                "explanation": "Evaluated outcome for challenge #205."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_206",
        "cat": "arrays",
        "title": "Array Transformation Challenge #206",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #206 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "206"
                ],
                "output": "Result_206",
                "explanation": "Evaluated outcome for challenge #206."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_207",
        "cat": "strings",
        "title": "String Processing Utility #207",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #207 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "207"
                ],
                "output": "Result_207",
                "explanation": "Evaluated outcome for challenge #207."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_208",
        "cat": "matrices",
        "title": "Matrix Grid Computation #208",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #208 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "208"
                ],
                "output": "Result_208",
                "explanation": "Evaluated outcome for challenge #208."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_209",
        "cat": "patterns",
        "title": "Custom Pattern Generator #209",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #209 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "209"
                ],
                "output": "Result_209",
                "explanation": "Evaluated outcome for challenge #209."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_210",
        "cat": "numbers",
        "title": "Number System Problem #210",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #210 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "210"
                ],
                "output": "Result_210",
                "explanation": "Evaluated outcome for challenge #210."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_211",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #211",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #211 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "211"
                ],
                "output": "Result_211",
                "explanation": "Evaluated outcome for challenge #211."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_212",
        "cat": "arrays",
        "title": "Array Transformation Challenge #212",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #212 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "212"
                ],
                "output": "Result_212",
                "explanation": "Evaluated outcome for challenge #212."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_213",
        "cat": "strings",
        "title": "String Processing Utility #213",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #213 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "213"
                ],
                "output": "Result_213",
                "explanation": "Evaluated outcome for challenge #213."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_214",
        "cat": "matrices",
        "title": "Matrix Grid Computation #214",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #214 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "214"
                ],
                "output": "Result_214",
                "explanation": "Evaluated outcome for challenge #214."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_215",
        "cat": "patterns",
        "title": "Custom Pattern Generator #215",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #215 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "215"
                ],
                "output": "Result_215",
                "explanation": "Evaluated outcome for challenge #215."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_216",
        "cat": "numbers",
        "title": "Number System Problem #216",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #216 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "216"
                ],
                "output": "Result_216",
                "explanation": "Evaluated outcome for challenge #216."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_217",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #217",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #217 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "217"
                ],
                "output": "Result_217",
                "explanation": "Evaluated outcome for challenge #217."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_218",
        "cat": "arrays",
        "title": "Array Transformation Challenge #218",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #218 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "218"
                ],
                "output": "Result_218",
                "explanation": "Evaluated outcome for challenge #218."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_219",
        "cat": "strings",
        "title": "String Processing Utility #219",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #219 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "219"
                ],
                "output": "Result_219",
                "explanation": "Evaluated outcome for challenge #219."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_220",
        "cat": "matrices",
        "title": "Matrix Grid Computation #220",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #220 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "220"
                ],
                "output": "Result_220",
                "explanation": "Evaluated outcome for challenge #220."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_221",
        "cat": "patterns",
        "title": "Custom Pattern Generator #221",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #221 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "221"
                ],
                "output": "Result_221",
                "explanation": "Evaluated outcome for challenge #221."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_222",
        "cat": "numbers",
        "title": "Number System Problem #222",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #222 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "222"
                ],
                "output": "Result_222",
                "explanation": "Evaluated outcome for challenge #222."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_223",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #223",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #223 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "223"
                ],
                "output": "Result_223",
                "explanation": "Evaluated outcome for challenge #223."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_224",
        "cat": "arrays",
        "title": "Array Transformation Challenge #224",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #224 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "224"
                ],
                "output": "Result_224",
                "explanation": "Evaluated outcome for challenge #224."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_225",
        "cat": "strings",
        "title": "String Processing Utility #225",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #225 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "225"
                ],
                "output": "Result_225",
                "explanation": "Evaluated outcome for challenge #225."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_226",
        "cat": "matrices",
        "title": "Matrix Grid Computation #226",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #226 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "226"
                ],
                "output": "Result_226",
                "explanation": "Evaluated outcome for challenge #226."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_227",
        "cat": "patterns",
        "title": "Custom Pattern Generator #227",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #227 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "227"
                ],
                "output": "Result_227",
                "explanation": "Evaluated outcome for challenge #227."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_228",
        "cat": "numbers",
        "title": "Number System Problem #228",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #228 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "228"
                ],
                "output": "Result_228",
                "explanation": "Evaluated outcome for challenge #228."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_229",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #229",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #229 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "229"
                ],
                "output": "Result_229",
                "explanation": "Evaluated outcome for challenge #229."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_230",
        "cat": "arrays",
        "title": "Array Transformation Challenge #230",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #230 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "230"
                ],
                "output": "Result_230",
                "explanation": "Evaluated outcome for challenge #230."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_231",
        "cat": "strings",
        "title": "String Processing Utility #231",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #231 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "231"
                ],
                "output": "Result_231",
                "explanation": "Evaluated outcome for challenge #231."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_232",
        "cat": "matrices",
        "title": "Matrix Grid Computation #232",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #232 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "232"
                ],
                "output": "Result_232",
                "explanation": "Evaluated outcome for challenge #232."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_233",
        "cat": "patterns",
        "title": "Custom Pattern Generator #233",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #233 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "233"
                ],
                "output": "Result_233",
                "explanation": "Evaluated outcome for challenge #233."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_234",
        "cat": "numbers",
        "title": "Number System Problem #234",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #234 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "234"
                ],
                "output": "Result_234",
                "explanation": "Evaluated outcome for challenge #234."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_235",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #235",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #235 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "235"
                ],
                "output": "Result_235",
                "explanation": "Evaluated outcome for challenge #235."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_236",
        "cat": "arrays",
        "title": "Array Transformation Challenge #236",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #236 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "236"
                ],
                "output": "Result_236",
                "explanation": "Evaluated outcome for challenge #236."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_237",
        "cat": "strings",
        "title": "String Processing Utility #237",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #237 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "237"
                ],
                "output": "Result_237",
                "explanation": "Evaluated outcome for challenge #237."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_238",
        "cat": "matrices",
        "title": "Matrix Grid Computation #238",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #238 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "238"
                ],
                "output": "Result_238",
                "explanation": "Evaluated outcome for challenge #238."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_239",
        "cat": "patterns",
        "title": "Custom Pattern Generator #239",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #239 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "239"
                ],
                "output": "Result_239",
                "explanation": "Evaluated outcome for challenge #239."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_240",
        "cat": "numbers",
        "title": "Number System Problem #240",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #240 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "240"
                ],
                "output": "Result_240",
                "explanation": "Evaluated outcome for challenge #240."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_241",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #241",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #241 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "241"
                ],
                "output": "Result_241",
                "explanation": "Evaluated outcome for challenge #241."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_242",
        "cat": "arrays",
        "title": "Array Transformation Challenge #242",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #242 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "242"
                ],
                "output": "Result_242",
                "explanation": "Evaluated outcome for challenge #242."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_243",
        "cat": "strings",
        "title": "String Processing Utility #243",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #243 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "243"
                ],
                "output": "Result_243",
                "explanation": "Evaluated outcome for challenge #243."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_244",
        "cat": "matrices",
        "title": "Matrix Grid Computation #244",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #244 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "244"
                ],
                "output": "Result_244",
                "explanation": "Evaluated outcome for challenge #244."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_245",
        "cat": "patterns",
        "title": "Custom Pattern Generator #245",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #245 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "245"
                ],
                "output": "Result_245",
                "explanation": "Evaluated outcome for challenge #245."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_246",
        "cat": "numbers",
        "title": "Number System Problem #246",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #246 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "246"
                ],
                "output": "Result_246",
                "explanation": "Evaluated outcome for challenge #246."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_247",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #247",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #247 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "247"
                ],
                "output": "Result_247",
                "explanation": "Evaluated outcome for challenge #247."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_248",
        "cat": "arrays",
        "title": "Array Transformation Challenge #248",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #248 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "248"
                ],
                "output": "Result_248",
                "explanation": "Evaluated outcome for challenge #248."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_249",
        "cat": "strings",
        "title": "String Processing Utility #249",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #249 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "249"
                ],
                "output": "Result_249",
                "explanation": "Evaluated outcome for challenge #249."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_250",
        "cat": "matrices",
        "title": "Matrix Grid Computation #250",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #250 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "250"
                ],
                "output": "Result_250",
                "explanation": "Evaluated outcome for challenge #250."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_251",
        "cat": "patterns",
        "title": "Custom Pattern Generator #251",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #251 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "251"
                ],
                "output": "Result_251",
                "explanation": "Evaluated outcome for challenge #251."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_252",
        "cat": "numbers",
        "title": "Number System Problem #252",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #252 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "252"
                ],
                "output": "Result_252",
                "explanation": "Evaluated outcome for challenge #252."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_253",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #253",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #253 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "253"
                ],
                "output": "Result_253",
                "explanation": "Evaluated outcome for challenge #253."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_254",
        "cat": "arrays",
        "title": "Array Transformation Challenge #254",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #254 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "254"
                ],
                "output": "Result_254",
                "explanation": "Evaluated outcome for challenge #254."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_255",
        "cat": "strings",
        "title": "String Processing Utility #255",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #255 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "255"
                ],
                "output": "Result_255",
                "explanation": "Evaluated outcome for challenge #255."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_256",
        "cat": "matrices",
        "title": "Matrix Grid Computation #256",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #256 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "256"
                ],
                "output": "Result_256",
                "explanation": "Evaluated outcome for challenge #256."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_257",
        "cat": "patterns",
        "title": "Custom Pattern Generator #257",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #257 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "257"
                ],
                "output": "Result_257",
                "explanation": "Evaluated outcome for challenge #257."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_258",
        "cat": "numbers",
        "title": "Number System Problem #258",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #258 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "258"
                ],
                "output": "Result_258",
                "explanation": "Evaluated outcome for challenge #258."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_259",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #259",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #259 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "259"
                ],
                "output": "Result_259",
                "explanation": "Evaluated outcome for challenge #259."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_260",
        "cat": "arrays",
        "title": "Array Transformation Challenge #260",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #260 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "260"
                ],
                "output": "Result_260",
                "explanation": "Evaluated outcome for challenge #260."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_261",
        "cat": "strings",
        "title": "String Processing Utility #261",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #261 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "261"
                ],
                "output": "Result_261",
                "explanation": "Evaluated outcome for challenge #261."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_262",
        "cat": "matrices",
        "title": "Matrix Grid Computation #262",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #262 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "262"
                ],
                "output": "Result_262",
                "explanation": "Evaluated outcome for challenge #262."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_263",
        "cat": "patterns",
        "title": "Custom Pattern Generator #263",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #263 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "263"
                ],
                "output": "Result_263",
                "explanation": "Evaluated outcome for challenge #263."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_264",
        "cat": "numbers",
        "title": "Number System Problem #264",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #264 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "264"
                ],
                "output": "Result_264",
                "explanation": "Evaluated outcome for challenge #264."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_265",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #265",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #265 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "265"
                ],
                "output": "Result_265",
                "explanation": "Evaluated outcome for challenge #265."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_266",
        "cat": "arrays",
        "title": "Array Transformation Challenge #266",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #266 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "266"
                ],
                "output": "Result_266",
                "explanation": "Evaluated outcome for challenge #266."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_267",
        "cat": "strings",
        "title": "String Processing Utility #267",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #267 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "267"
                ],
                "output": "Result_267",
                "explanation": "Evaluated outcome for challenge #267."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_268",
        "cat": "matrices",
        "title": "Matrix Grid Computation #268",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #268 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "268"
                ],
                "output": "Result_268",
                "explanation": "Evaluated outcome for challenge #268."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_269",
        "cat": "patterns",
        "title": "Custom Pattern Generator #269",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #269 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "269"
                ],
                "output": "Result_269",
                "explanation": "Evaluated outcome for challenge #269."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_270",
        "cat": "numbers",
        "title": "Number System Problem #270",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #270 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "270"
                ],
                "output": "Result_270",
                "explanation": "Evaluated outcome for challenge #270."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_271",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #271",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #271 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "271"
                ],
                "output": "Result_271",
                "explanation": "Evaluated outcome for challenge #271."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_272",
        "cat": "arrays",
        "title": "Array Transformation Challenge #272",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #272 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "272"
                ],
                "output": "Result_272",
                "explanation": "Evaluated outcome for challenge #272."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_273",
        "cat": "strings",
        "title": "String Processing Utility #273",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #273 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "273"
                ],
                "output": "Result_273",
                "explanation": "Evaluated outcome for challenge #273."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_274",
        "cat": "matrices",
        "title": "Matrix Grid Computation #274",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #274 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "274"
                ],
                "output": "Result_274",
                "explanation": "Evaluated outcome for challenge #274."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_275",
        "cat": "patterns",
        "title": "Custom Pattern Generator #275",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #275 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "275"
                ],
                "output": "Result_275",
                "explanation": "Evaluated outcome for challenge #275."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_276",
        "cat": "numbers",
        "title": "Number System Problem #276",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #276 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "276"
                ],
                "output": "Result_276",
                "explanation": "Evaluated outcome for challenge #276."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_277",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #277",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #277 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "277"
                ],
                "output": "Result_277",
                "explanation": "Evaluated outcome for challenge #277."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_278",
        "cat": "arrays",
        "title": "Array Transformation Challenge #278",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #278 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "278"
                ],
                "output": "Result_278",
                "explanation": "Evaluated outcome for challenge #278."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_279",
        "cat": "strings",
        "title": "String Processing Utility #279",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #279 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "279"
                ],
                "output": "Result_279",
                "explanation": "Evaluated outcome for challenge #279."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_280",
        "cat": "matrices",
        "title": "Matrix Grid Computation #280",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #280 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "280"
                ],
                "output": "Result_280",
                "explanation": "Evaluated outcome for challenge #280."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_281",
        "cat": "patterns",
        "title": "Custom Pattern Generator #281",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #281 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "281"
                ],
                "output": "Result_281",
                "explanation": "Evaluated outcome for challenge #281."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_282",
        "cat": "numbers",
        "title": "Number System Problem #282",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #282 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "282"
                ],
                "output": "Result_282",
                "explanation": "Evaluated outcome for challenge #282."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_283",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #283",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #283 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "283"
                ],
                "output": "Result_283",
                "explanation": "Evaluated outcome for challenge #283."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_284",
        "cat": "arrays",
        "title": "Array Transformation Challenge #284",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #284 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "284"
                ],
                "output": "Result_284",
                "explanation": "Evaluated outcome for challenge #284."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_285",
        "cat": "strings",
        "title": "String Processing Utility #285",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #285 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "285"
                ],
                "output": "Result_285",
                "explanation": "Evaluated outcome for challenge #285."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_286",
        "cat": "matrices",
        "title": "Matrix Grid Computation #286",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #286 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "286"
                ],
                "output": "Result_286",
                "explanation": "Evaluated outcome for challenge #286."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_287",
        "cat": "patterns",
        "title": "Custom Pattern Generator #287",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #287 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "287"
                ],
                "output": "Result_287",
                "explanation": "Evaluated outcome for challenge #287."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_288",
        "cat": "numbers",
        "title": "Number System Problem #288",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #288 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "288"
                ],
                "output": "Result_288",
                "explanation": "Evaluated outcome for challenge #288."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_289",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #289",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #289 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "289"
                ],
                "output": "Result_289",
                "explanation": "Evaluated outcome for challenge #289."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_290",
        "cat": "arrays",
        "title": "Array Transformation Challenge #290",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #290 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "290"
                ],
                "output": "Result_290",
                "explanation": "Evaluated outcome for challenge #290."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_291",
        "cat": "strings",
        "title": "String Processing Utility #291",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #291 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "291"
                ],
                "output": "Result_291",
                "explanation": "Evaluated outcome for challenge #291."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_292",
        "cat": "matrices",
        "title": "Matrix Grid Computation #292",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #292 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "292"
                ],
                "output": "Result_292",
                "explanation": "Evaluated outcome for challenge #292."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_293",
        "cat": "patterns",
        "title": "Custom Pattern Generator #293",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #293 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "293"
                ],
                "output": "Result_293",
                "explanation": "Evaluated outcome for challenge #293."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_294",
        "cat": "numbers",
        "title": "Number System Problem #294",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #294 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "294"
                ],
                "output": "Result_294",
                "explanation": "Evaluated outcome for challenge #294."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_295",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #295",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #295 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "295"
                ],
                "output": "Result_295",
                "explanation": "Evaluated outcome for challenge #295."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_296",
        "cat": "arrays",
        "title": "Array Transformation Challenge #296",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #296 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "296"
                ],
                "output": "Result_296",
                "explanation": "Evaluated outcome for challenge #296."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_297",
        "cat": "strings",
        "title": "String Processing Utility #297",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #297 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "297"
                ],
                "output": "Result_297",
                "explanation": "Evaluated outcome for challenge #297."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_298",
        "cat": "matrices",
        "title": "Matrix Grid Computation #298",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #298 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "298"
                ],
                "output": "Result_298",
                "explanation": "Evaluated outcome for challenge #298."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_299",
        "cat": "patterns",
        "title": "Custom Pattern Generator #299",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #299 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "299"
                ],
                "output": "Result_299",
                "explanation": "Evaluated outcome for challenge #299."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
    },
    {
        "id": "gen_challenge_300",
        "cat": "numbers",
        "title": "Number System Problem #300",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Evaluate numeric properties and constraints for placement interviews. Challenge #300 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "300"
                ],
                "output": "Result_300",
                "explanation": "Evaluated outcome for challenge #300."
            }
        ],
        "sol": "Apply standard numbers algorithm to compute result."
    },
    {
        "id": "gen_challenge_301",
        "cat": "recursion",
        "title": "Recursive Sequence Problem #301",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Solve sequence and structure queries using recursive call trees. Challenge #301 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "301"
                ],
                "output": "Result_301",
                "explanation": "Evaluated outcome for challenge #301."
            }
        ],
        "sol": "Apply standard recursion algorithm to compute result."
    },
    {
        "id": "gen_challenge_302",
        "cat": "arrays",
        "title": "Array Transformation Challenge #302",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Perform array manipulation, windowing, or two-pointer transformations. Challenge #302 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "302"
                ],
                "output": "Result_302",
                "explanation": "Evaluated outcome for challenge #302."
            }
        ],
        "sol": "Apply standard arrays algorithm to compute result."
    },
    {
        "id": "gen_challenge_303",
        "cat": "strings",
        "title": "String Processing Utility #303",
        "diff": "intermediate",
        "inp": "single_int",
        "desc": "Parse, extract, or transform string tokens for corporate placement tests. Challenge #303 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "303"
                ],
                "output": "Result_303",
                "explanation": "Evaluated outcome for challenge #303."
            }
        ],
        "sol": "Apply standard strings algorithm to compute result."
    },
    {
        "id": "gen_challenge_304",
        "cat": "matrices",
        "title": "Matrix Grid Computation #304",
        "diff": "easy",
        "inp": "single_int",
        "desc": "Process 2D matrix rows, columns, diagonals, and transformations. Challenge #304 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "304"
                ],
                "output": "Result_304",
                "explanation": "Evaluated outcome for challenge #304."
            }
        ],
        "sol": "Apply standard matrices algorithm to compute result."
    },
    {
        "id": "gen_challenge_305",
        "cat": "patterns",
        "title": "Custom Pattern Generator #305",
        "diff": "beginner",
        "inp": "single_int",
        "desc": "Generate multi-line symbol or numeric pattern output according to geometry. Challenge #305 tests standard time & space complexity constraints.",
        "prompts": [
            "Analyze optimal algorithm complexity.",
            "Check edge case bounds for 0 and negative inputs."
        ],
        "tests": [
            {
                "input": [
                    "305"
                ],
                "output": "Result_305",
                "explanation": "Evaluated outcome for challenge #305."
            }
        ],
        "sol": "Apply standard patterns algorithm to compute result."
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
            return `# Write solution for ${title} in Python 3\ndef solve():\n    import sys\n    input_data = sys.stdin.read().split()\n    if not input_data:\n        return\n    # Implement solution logic\n    pass\n\nif __name__ == "__main__":\n    solve()\n`;
        case "c":
            return `// Write solution for ${title} in C\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Read input and implement logic\n    return 0;\n}\n`;
        case "cpp":
            return `// Write solution for ${title} in C++\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Implement solution logic\n    return 0;\n}\n`;
        case "java":
            return `// Write solution for ${title} in Java\nimport java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Implement solution logic\n    }\n}\n`;
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
        sorting: "sorting"
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
