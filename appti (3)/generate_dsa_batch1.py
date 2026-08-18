import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("🚀 GENERATING 65+ DSA PLACEMENT CODING CHALLENGES WITH TWISTED TESTCASES")
print("=" * 65)

NEW_DSA_CHALLENGES = [
    # =========================================================================
    # 1. ARRAY OPERATIONS (10 Problems)
    # =========================================================================
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
            {"input": ["2 7 11 15\n9"], "output": "0 1", "explanation": "nums[0] + nums[1] = 2 + 7 = 9"},
            {"input": ["3 2 4\n6"], "output": "1 2", "explanation": "nums[1] + nums[2] = 2 + 4 = 6"},
            {"input": ["3 3\n6"], "output": "0 1", "explanation": "Twisted Duplicate Case: Both numbers are 3, indices 0 and 1."},
            {"input": ["-3 4 3 90\n0"], "output": "0 2", "explanation": "Twisted Negative Case: -3 + 3 = 0, indices 0 and 2."},
            {"input": ["1 2 3\n10"], "output": "-1", "explanation": "Edge Case: No pair sums to 10."}
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
            {"input": ["7 1 5 3 6 4"], "output": "5", "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."},
            {"input": ["7 6 4 3 1"], "output": "0", "explanation": "Twisted Descending Case: Prices keep dropping; no profitable transaction possible -> 0."},
            {"input": ["2 4 1"], "output": "2", "explanation": "Twisted Late Drop Case: Drop to 1 happens at the end; max profit was 4 - 2 = 2."},
            {"input": ["100"], "output": "0", "explanation": "Single Day Case: Cannot buy and sell on separate days -> 0."},
            {"input": ["1 1 1 1"], "output": "0", "explanation": "Flat Prices Case: Profit = 0."}
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
            {"input": ["1 2 3"], "output": "1 3 2", "explanation": "Next permutation of 1 2 3 is 1 3 2."},
            {"input": ["3 2 1"], "output": "1 2 3", "explanation": "Twisted Max Permutation Case: Reverses completely back to lowest order 1 2 3."},
            {"input": ["1 1 5"], "output": "1 5 1", "explanation": "Twisted Duplicate Case: 1 1 5 becomes 1 5 1."},
            {"input": ["1 5 8 4 7 6 5 3 1"], "output": "1 5 8 5 1 3 4 6 7", "explanation": "Multi-digit complex permutation test."}
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
            {"input": ["10 3 5 6 2"], "output": "180 600 360 300 900", "explanation": "Product of all except 10 is 180, except 3 is 600, etc."},
            {"input": ["1 2 0 4 5"], "output": "0 0 40 0 0", "explanation": "Twisted Single Zero Case: Only index 2 gets product of other elements (40); others get 0."},
            {"input": ["0 0 5 8"], "output": "0 0 0 0", "explanation": "Twisted Multiple Zeroes Case: All outputs are 0."},
            {"input": ["-1 1 0 -3 3"], "output": "0 0 9 0 0", "explanation": "Twisted Negative and Zero Case."}
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
            {"input": ["-2 1 -3 4 -1 2 1 -5 4"], "output": "6", "explanation": "Subarray [4, -1, 2, 1] has max sum = 6."},
            {"input": ["-8 -3 -6 -2 -5 -4"], "output": "-2", "explanation": "Twisted All-Negative Case: Maximum sum is -2 (single element)."},
            {"input": ["5 4 -1 7 8"], "output": "23", "explanation": "Entire array sums to 23."},
            {"input": ["-1"], "output": "-1", "explanation": "Single negative element -> -1."}
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
            {"input": ["1 1 1 0 0 0 1 1 1 1 0\n2"], "output": "6", "explanation": "Flipping two zeroes gives consecutive 1s of length 6."},
            {"input": ["0 0 1 1 0 0 1 1 1 0 1 1 0 0 0 1 1 1 1\n3"], "output": "10", "explanation": "Flip 3 zeroes to achieve maximum length 10."},
            {"input": ["1 0 1 1 0\n0"], "output": "2", "explanation": "Twisted k=0 Case: No flips permitted, longest natural sequence is 2."},
            {"input": ["0 0 0\n3"], "output": "3", "explanation": "All zeroes flipped to 1s -> length 3."}
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
            {"input": ["3 4 5 1 2"], "output": "1", "explanation": "Array rotated 3 times; minimum element is 1."},
            {"input": ["4 5 6 7 0 1 2"], "output": "0", "explanation": "Minimum is 0."},
            {"input": ["11 13 15 17"], "output": "11", "explanation": "Twisted 0 Rotations Case: Array is already sorted; min is nums[0] = 11."},
            {"input": ["2 1"], "output": "1", "explanation": "Two elements inverted -> 1."}
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
            {"input": ["38"], "output": "2", "explanation": "3 + 8 = 11 -> 1 + 1 = 2."},
            {"input": ["0"], "output": "0", "explanation": "Twisted Zero Case: Digital root of 0 is 0."},
            {"input": ["18"], "output": "9", "explanation": "Twisted Multiple of 9 Case: 1 + 8 = 9."},
            {"input": ["999999999"], "output": "9", "explanation": "Large number sum -> 9."}
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
            {"input": ["-1 0 1 2 -1 -4\n0"], "output": "2", "explanation": "Triplets summing to 0: [-1, -1, 2] and [-1, 0, 1] -> Count = 2."},
            {"input": ["0 0 0 0\n0"], "output": "1", "explanation": "Twisted Duplicates Case: Only one unique triplet [0, 0, 0] -> Count = 1."},
            {"input": ["1 2 3 4 5\n9"], "output": "2", "explanation": "Triplets: [1, 3, 5], [2, 3, 4] -> Count = 2."},
            {"input": ["1 2 3\n100"], "output": "0", "explanation": "No triplet exists -> 0."}
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
            {"input": ["1 8 6 2 5 4 8 3 7"], "output": "49", "explanation": "Lines at index 1 (height 8) and index 8 (height 7) give area = min(8,7) * (8 - 1) = 7 * 7 = 49."},
            {"input": ["1 1"], "output": "1", "explanation": "Two lines of height 1 at distance 1 -> area = 1."},
            {"input": ["4 3 2 1 4"], "output": "16", "explanation": "Twisted Equal Extremes: min(4, 4) * 4 = 16."},
            {"input": ["1 2 1"], "output": "2", "explanation": "Max area = 2."}
        ],
        "sol": "Two pointer greedy: left = 0, right = N - 1, max_area = 0. While left < right: h = min(height[left], height[right]); max_area = max(max_area, h * (right - left)); if height[left] < height[right] left++ else right--. Time O(N), Space O(1)."
    },

    # =========================================================================
    # 2. BINARY & BIT MANIPULATION (5 Problems)
    # =========================================================================
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
            {"input": ["2 3"], "output": "5", "explanation": "2 + 3 = 5."},
            {"input": ["-5 3"], "output": "-2", "explanation": "Twisted Negative Case: -5 + 3 = -2."},
            {"input": ["0 15"], "output": "15", "explanation": "Adding zero -> 15."},
            {"input": ["-10 -20"], "output": "-30", "explanation": "Both negative numbers -> -30."}
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
            {"input": ["11"], "output": "3", "explanation": "11 in binary is 1011 (three 1 bits)."},
            {"input": ["128"], "output": "1", "explanation": "Twisted Power of 2 Case: 128 is 10000000 -> 1 bit."},
            {"input": ["0"], "output": "0", "explanation": "Zero has 0 bits."},
            {"input": ["255"], "output": "8", "explanation": "255 is 11111111 (eight 1 bits)."}
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
            {"input": ["1 3"], "output": "6", "explanation": "Subsets: []=0, [1]=1, [3]=3, [1,3]=1^3=2. Sum = 0+1+3+2 = 6."},
            {"input": ["5 1 6"], "output": "28", "explanation": "Sum of XOR totals across 8 subsets is 28."},
            {"input": ["3 4 5 6 7 8"], "output": "480", "explanation": "Larger subset evaluation -> 480."}
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
            {"input": ["2 2 1"], "output": "1", "explanation": "1 is the unique number."},
            {"input": ["4 1 2 1 2"], "output": "4", "explanation": "4 appears once; 1 and 2 appear twice."},
            {"input": ["-1 -1 -5"], "output": "-5", "explanation": "Twisted Negative Numbers Case: -5 appears once."},
            {"input": ["99"], "output": "99", "explanation": "Single element array -> 99."}
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
            {"input": ["4 14 2"], "output": "6", "explanation": "Binary: 4 (0100), 14 (1110), 2 (0010). Distance(4,14)=2, Distance(4,2)=2, Distance(14,2)=2. Total = 6."},
            {"input": ["4 14 4"], "output": "4", "explanation": "Twisted Duplicates Case: Total Hamming distance = 4."},
            {"input": ["1 1 1 1"], "output": "0", "explanation": "Identical numbers -> Distance = 0."}
        ],
        "sol": "Bit-by-bit tally: total = 0. For i in range(32): count_ones = sum((x >> i) & 1 for x in nums); total += count_ones * (N - count_ones). Return total. Time O(32 * N), Space O(1)."
    },

    # =========================================================================
    # 3. DYNAMIC PROGRAMMING (12 Problems)
    # =========================================================================
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
            {"input": ["2"], "output": "2", "explanation": "(1+1) or (2)."},
            {"input": ["3"], "output": "3", "explanation": "(1+1+1), (1+2), (2+1)."},
            {"input": ["1"], "output": "1", "explanation": "Single step -> 1 way."},
            {"input": ["5"], "output": "8", "explanation": "Fibonacci sequence: 8 distinct ways."}
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
            {"input": ["1 2 5\n11"], "output": "3", "explanation": "11 = 5 + 5 + 1 (3 coins)."},
            {"input": ["2\n3"], "output": "-1", "explanation": "Twisted Impossible Case: Cannot make 3 with coin 2 -> -1."},
            {"input": ["1\n0"], "output": "0", "explanation": "Twisted Amount Zero Case: 0 coins needed."},
            {"input": ["186 419 83 408\n6249"], "output": "20", "explanation": "Large target amount."}
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
            {"input": ["10 9 2 5 3 7 101 18"], "output": "4", "explanation": "LIS is [2, 3, 7, 101] of length 4."},
            {"input": ["0 1 0 3 2 3"], "output": "4", "explanation": "LIS is [0, 1, 2, 3] of length 4."},
            {"input": ["7 7 7 7 7"], "output": "1", "explanation": "Twisted Strictly Increasing Rule: Duplicates do not count, LIS = 1."},
            {"input": ["5 4 3 2 1"], "output": "1", "explanation": "Strictly decreasing array -> LIS = 1."}
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
            {"input": ["horse\nros"], "output": "3", "explanation": "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e'). Total = 3."},
            {"input": ["intention\nexecution"], "output": "5", "explanation": "5 operations required."},
            {"input": ["abc\nabc"], "output": "0", "explanation": "Identical strings -> 0 edits."},
            {"input": ["\nabc"], "output": "3", "explanation": "Empty string to abc -> 3 insertions."}
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
            {"input": ["leetcode\nleet code"], "output": "True", "explanation": "leetcode can be segmented as 'leet code'."},
            {"input": ["applepenapple\napple pen"], "output": "True", "explanation": "Segmented as 'apple pen apple' (reusing words allowed)."},
            {"input": ["catsandog\ncats dog sand and cat"], "output": "False", "explanation": "Twisted Deadlock: Cannot segment full string -> False."}
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
            {"input": ["2\n2 4 1"], "output": "2", "explanation": "Buy day 1, sell day 2 (profit = 2)."},
            {"input": ["2\n3 2 6 5 0 3"], "output": "7", "explanation": "Buy at 2 sell at 6 (profit 4) + Buy at 0 sell at 3 (profit 3) = 7."},
            {"input": ["2\n1 2 3 4 5"], "output": "4", "explanation": "Single upward trend -> profit 4."}
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
            {"input": ["2 3 6 7\n7"], "output": "2", "explanation": "Combinations: [2, 2, 3] and [7] -> Count = 2."},
            {"input": ["2 3 5\n8"], "output": "3", "explanation": "Combinations: [2, 2, 2, 2], [2, 3, 3], [3, 5] -> Count = 3."},
            {"input": ["2\n1"], "output": "0", "explanation": "Twisted Target Smaller Case: Count = 0."}
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
            {"input": ["6 5 5 7 4"], "output": "15", "explanation": "Loot house 1 (6), house 3 (5), house 5 (4) -> 6 + 5 + 4 = 15."},
            {"input": ["1 5 3"], "output": "5", "explanation": "Loot middle house 2 -> 5."},
            {"input": ["10"], "output": "10", "explanation": "Single house -> 10."},
            {"input": ["2 7 9 3 1"], "output": "12", "explanation": "Loot 2 + 9 + 1 = 12."}
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
            {"input": ["1 5 11 5"], "output": "True", "explanation": "Subsets [1, 5, 5] and [11] both sum to 11 -> True."},
            {"input": ["1 2 3 5"], "output": "False", "explanation": "Sum is 11 (odd) -> False."},
            {"input": ["2 2 2 2"], "output": "True", "explanation": "[2, 2] and [2, 2] -> True."}
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
            {"input": ["12"], "output": "2", "explanation": "Decoded as 'AB' (1 2) or 'L' (12) -> 2 ways."},
            {"input": ["226"], "output": "3", "explanation": "Decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6) -> 3 ways."},
            {"input": ["06"], "output": "0", "explanation": "Twisted Leading Zero Case: '06' is invalid -> 0."},
            {"input": ["10"], "output": "1", "explanation": "Decoded as 'J' (10) -> 1 way."}
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
            {"input": ["3 7"], "output": "28", "explanation": "3x7 grid -> 28 paths."},
            {"input": ["3 2"], "output": "3", "explanation": "3x2 grid -> 3 paths."},
            {"input": ["1 1"], "output": "1", "explanation": "1x1 grid -> 1 path."},
            {"input": ["1 10"], "output": "1", "explanation": "Single row grid -> 1 path."}
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
            {"input": ["10 20 30 40 30"], "output": "30000", "explanation": "Optimal order: ((M1(M2M3))M4) -> 30,000 multiplications."},
            {"input": ["10 20 30"], "output": "6000", "explanation": "Single pair: 10 * 20 * 30 = 6000."},
            {"input": ["40 20 30 10 30"], "output": "26000", "explanation": "Minimum multiplications = 26,000."}
        ],
        "sol": "DP table dp[N][N]. Chain length L from 2 to N-1: for i in 1..N-L: j = i + L - 1; dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j] for k in i..j-1). Return dp[1][N-1]. Time O(N^3), Space O(N^2)."
    }
]

# Write JSON to coding_data.js
js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Parse existing RAW_CHALLENGES
match = re.search(r'const\s+RAW_CHALLENGES\s*=\s*(\[.*?\]);', content, re.DOTALL)
if match:
    existing_data = json.loads(match.group(1))
    print(f"Existing Challenges Count: {len(existing_data)}")
    
    # Check for existing IDs to avoid duplicates
    existing_ids = {item['id'] for item in existing_data}
    added_count = 0
    
    for item in NEW_DSA_CHALLENGES:
        if item['id'] not in existing_ids:
            existing_data.append(item)
            existing_ids.add(item['id'])
            added_count += 1
            
    print(f"Added {added_count} DSA Problems. New Total: {len(existing_data)}")
    
    # Format and save back
    new_raw_json = json.dumps(existing_data, indent=4, ensure_ascii=False)
    new_content = re.sub(
        r'const\s+RAW_CHALLENGES\s*=\s*\[.*?\];',
        f'const RAW_CHALLENGES = {new_raw_json};',
        content,
        flags=re.DOTALL
    )
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("✅ Successfully updated coding_data.js with new DSA Challenges!")
else:
    print("❌ Failed to parse RAW_CHALLENGES")

print("=" * 65)
