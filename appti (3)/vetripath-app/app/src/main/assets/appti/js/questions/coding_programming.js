if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['coding_programming'] = [
    {
        "id": "coding_programming_beginner_1",
        "text": "What is the time complexity of accessing an element in an array by its index?",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        "answer": "O(1)",
        "solution": "Array elements are stored in contiguous memory locations. Using base address + (index * element_size), access is constant time O(1).",
        "formula": "Address = Base_Address + (Index × Size)",
        "shortcut": "Direct index indexing is always O(1).",
        "commonMistakes": "Confusing index access O(1) with search in unsorted array O(n).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "data_structures",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_2",
        "text": "What will be the output of the following Python snippet?\n\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))\n```",
        "options": [
            "4",
            "3",
            "Error",
            "None"
        ],
        "answer": "4",
        "solution": "In Python, lists are mutable objects. `y = x` creates a reference alias pointing to the same list in memory. Mutating `y` also mutates `x`.",
        "formula": "Assignment of mutable objects in Python creates a shallow reference alias.",
        "shortcut": "Lists are mutable references; len(x) becomes 4.",
        "commonMistakes": "Assuming y is a separate copy of x.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_3",
        "text": "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        "options": [
            "Stack",
            "Queue",
            "Array",
            "Linked List"
        ],
        "answer": "Stack",
        "solution": "A Stack allows insertion (push) and deletion (pop) only from the top, operating on LIFO (Last In First Out).",
        "formula": "Stack: Push / Pop from Top (LIFO)",
        "shortcut": "Plates stack -> LIFO.",
        "commonMistakes": "Confusing Stack (LIFO) with Queue (FIFO).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "data_structures",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_4",
        "text": "What will be the output of `print(2 ** 3 ** 2)` in Python?",
        "options": [
            "512",
            "64",
            "36",
            "18"
        ],
        "answer": "512",
        "solution": "The exponentiation operator `**` in Python has right-to-left associativity: `2 ** (3 ** 2) = 2 ** 9 = 512`.",
        "formula": "Exponentiation ** associates Right-to-Left: a ** b ** c = a ** (b ** c)",
        "shortcut": "3**2 = 9; 2**9 = 512.",
        "commonMistakes": "Evaluating left to right as (2**3)**2 = 64.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_5",
        "text": "Which data structure is primarily used for implementing Breadth-First Search (BFS) on a graph?",
        "options": [
            "Queue",
            "Stack",
            "Priority Queue",
            "Binary Search Tree"
        ],
        "answer": "Queue",
        "solution": "BFS explores graph vertices level by level in FIFO order, which requires a Queue. DFS uses a Stack (or recursion).",
        "formula": "BFS -> Queue (FIFO); DFS -> Stack (LIFO)",
        "shortcut": "BFS = Queue; DFS = Stack.",
        "commonMistakes": "Confusing BFS with DFS.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "algorithms",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_6",
        "text": "What is the worst-case time complexity of Linear Search in an array of N elements?",
        "options": [
            "O(N)",
            "O(1)",
            "O(log N)",
            "O(N log N)"
        ],
        "answer": "O(N)",
        "solution": "In the worst case, the target element is at the last index or not present at all, requiring comparison with all N elements.",
        "formula": "Worst case comparisons = N -> O(N)",
        "shortcut": "Scan all N elements -> O(N).",
        "commonMistakes": "Confusing Linear Search O(N) with Binary Search O(log N).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 6,
        "tags": [
            "coding",
            "algorithms",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_7",
        "text": "What is the output of `bool('False')` in Python?",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "answer": "True",
        "solution": "In Python, any non-empty string evaluates to `True` when converted to boolean, even if the string contains the characters 'False' or '0'. Only `bool('')` is `False`.",
        "formula": "bool(non_empty_string) == True",
        "shortcut": "String has length > 0 -> True.",
        "commonMistakes": "Thinking bool('False') evaluates to boolean False.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_8",
        "text": "What does SQL stand for in database management?",
        "options": [
            "Structured Query Language",
            "Sequential Query List",
            "Simple Query Logic",
            "Standard Queue Language"
        ],
        "answer": "Structured Query Language",
        "solution": "SQL stands for Structured Query Language, the standard domain-specific language used for managing relational databases.",
        "formula": "SQL = Structured Query Language",
        "shortcut": "Structured Query Language.",
        "commonMistakes": "Choosing Sequential Query Language.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "dbms",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_9",
        "text": "What is the space complexity of an iterative loop that counts from 1 to N using a single integer variable?",
        "options": [
            "O(1)",
            "O(N)",
            "O(log N)",
            "O(N^2)"
        ],
        "answer": "O(1)",
        "solution": "The loop only allocates a single scalar variable for the counter, regardless of how large N is. Thus, auxiliary space is O(1) constant.",
        "formula": "Auxiliary memory = 1 integer variable -> O(1)",
        "shortcut": "No arrays or recursion allocated -> O(1).",
        "commonMistakes": "Confusing Time Complexity O(N) with Space Complexity O(1).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "complexity",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_10",
        "text": "In object-oriented programming (OOP), which concept allows a subclass to provide a specific implementation of a method defined in its superclass?",
        "options": [
            "Method Overriding",
            "Method Overloading",
            "Encapsulation",
            "Abstraction"
        ],
        "answer": "Method Overriding",
        "solution": "Method Overriding allows a child/derived class to redefine a method of its parent class with the same signature to provide specialized behavior at runtime.",
        "formula": "Same signature in subclass = Method Overriding (Runtime Polymorphism)",
        "shortcut": "Subclass redefines parent method -> Overriding.",
        "commonMistakes": "Confusing Method Overriding (same signature in subclass) with Method Overloading (different signature in same class).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "oop",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_11",
        "text": "What is the return type of the `id()` function in Python?",
        "options": [
            "Integer",
            "String",
            "Float",
            "Hexadecimal object"
        ],
        "answer": "Integer",
        "solution": "`id(obj)` in Python returns the identity of the object as an integer (which corresponds to the memory address of the object in CPython).",
        "formula": "id(obj) -> int",
        "shortcut": "id() returns an integer memory identity.",
        "commonMistakes": "Thinking id() returns a hex string.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_12",
        "text": "Which sorting algorithm has the best average-case time complexity among the following?",
        "options": [
            "Merge Sort O(N log N)",
            "Bubble Sort O(N^2)",
            "Selection Sort O(N^2)",
            "Insertion Sort O(N^2)"
        ],
        "answer": "Merge Sort O(N log N)",
        "solution": "Merge Sort uses divide-and-conquer to guarantee O(N log N) time complexity in worst, average, and best cases.",
        "formula": "Merge Sort Time = O(N log N)",
        "shortcut": "Merge Sort / Quick Sort are O(N log N).",
        "commonMistakes": "Thinking Selection Sort is faster.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 6,
        "tags": [
            "coding",
            "algorithms",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_13",
        "text": "What will `5 // 2` evaluate to in Python 3?",
        "options": [
            "2",
            "2.5",
            "3",
            "2.0"
        ],
        "answer": "2",
        "solution": "The `//` operator performs floor division, rounding down to the nearest integer. `5 // 2 = 2`.",
        "formula": "a // b = floor(a / b)",
        "shortcut": "Floor division rounds down to integer 2.",
        "commonMistakes": "Confusing true division / (2.5) with floor division // (2).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_14",
        "text": "Which of the following is an immutable data type in Python?",
        "options": [
            "Tuple",
            "List",
            "Dictionary",
            "Set"
        ],
        "answer": "Tuple",
        "solution": "Tuples, Strings, Integers, and Floats are immutable in Python (their elements cannot be modified in-place after creation). Lists, Dicts, and Sets are mutable.",
        "formula": "Immutable types: tuple, str, int, float, frozenset",
        "shortcut": "Tuples cannot be mutated.",
        "commonMistakes": "Thinking lists or sets are immutable.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "python",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_beginner_15",
        "text": "What is the minimum number of nodes in a binary tree of height H (where a tree with 1 node has height 1)?",
        "options": [
            "H",
            "2^H - 1",
            "2^(H-1)",
            "H + 1"
        ],
        "answer": "H",
        "solution": "A skewed (degenerate) binary tree where every node has only one child has the minimum number of nodes for a given height H, which is exactly H nodes.",
        "formula": "Min nodes = H; Max nodes = 2^H - 1",
        "shortcut": "Degenerate tree has 1 node per level = H.",
        "commonMistakes": "Confusing minimum nodes (H) with maximum nodes (2^H - 1).",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "data_structures",
            "beginner"
        ]
    },
    {
        "id": "coding_programming_easy_1",
        "text": "What is the time complexity of searching for a key in a balanced Binary Search Tree (AVL / Red-Black Tree) containing N elements?",
        "options": [
            "O(log N)",
            "O(N)",
            "O(1)",
            "O(N log N)"
        ],
        "answer": "O(log N)",
        "solution": "Because the tree is balanced, the maximum height is logarithmic O(log N). At each node, half the remaining search space is discarded.",
        "formula": "Height = log2(N) -> Time = O(log N)",
        "shortcut": "Balanced BST search is O(log N).",
        "commonMistakes": "Thinking it is O(N) (which applies only to unbalanced/skewed trees).",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "data_structures",
            "easy"
        ]
    },
    {
        "id": "coding_programming_easy_2",
        "text": "What will be the output of the following Python code?\n\n```python\na = [1, 2, 3, 4, 5]\nprint(a[::-2])\n```",
        "options": [
            "[5, 3, 1]",
            "[5, 4, 3, 2, 1]",
            "[1, 3, 5]",
            "[4, 2]"
        ],
        "answer": "[5, 3, 1]",
        "solution": "`a[::-2]` starts from the end (index 4: 5), steps backward by 2 (index 2: 3), and steps backward by 2 again (index 0: 1), yielding `[5, 3, 1]`.",
        "formula": "Slice syntax: [start:stop:step]. Step -2 traverses backwards taking alternate elements.",
        "shortcut": "Reverse alternate elements: 5 -> 3 -> 1.",
        "commonMistakes": "Thinking it starts from index 0 or gives [1, 3, 5].",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "python",
            "easy"
        ]
    },
    {
        "id": "coding_programming_easy_3",
        "text": "What is the output of `print(0.1 + 0.2 == 0.3)` in Python and JavaScript?",
        "options": [
            "False",
            "True",
            "Error",
            "NaN"
        ],
        "answer": "False",
        "solution": "Due to IEEE 754 floating-point binary representation limitations, `0.1 + 0.2` evaluates to approximately `0.30000000000000004`, which is not strictly equal to `0.3`.",
        "formula": "IEEE 754 float: 0.1 + 0.2 = 0.30000000000000004 != 0.3",
        "shortcut": "Floating-point precision inequality -> False.",
        "commonMistakes": "Assuming exact base-10 arithmetic equality True.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "python",
            "easy"
        ]
    },
    {
        "id": "coding_programming_easy_4",
        "text": "Which algorithm is used to detect a cycle in a singly linked list with O(1) auxiliary space?",
        "options": [
            "Floyd's Tortoise and Hare Algorithm",
            "Dijkstra's Algorithm",
            "Kruskal's Algorithm",
            "Kadane's Algorithm"
        ],
        "answer": "Floyd's Tortoise and Hare Algorithm",
        "solution": "Floyd's Cycle-Finding Algorithm uses two pointers moving at different speeds (slow by 1, fast by 2). If a cycle exists, they will meet in O(N) time and O(1) space.",
        "formula": "Slow moves 1 step, Fast moves 2 steps; Meet condition: slow == fast",
        "shortcut": "Two pointers (Slow & Fast) = Floyd's Cycle Detection.",
        "commonMistakes": "Confusing Floyd's cycle detection with Dijkstra's shortest path.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "algorithms",
            "easy"
        ]
    },
    {
        "id": "coding_programming_easy_5",
        "text": "What will be printed by the following code?\n\n```python\ndef func(x, l=[]):\n    l.append(x)\n    return l\n\nprint(func(1))\nprint(func(2))\n```",
        "options": [
            "[1] then [1, 2]",
            "[1] then [2]",
            "[1] then [2, 1]",
            "Error"
        ],
        "answer": "[1] then [1, 2]",
        "solution": "In Python, default parameter values are evaluated once when the function is defined, not each time it is called. The same list `l` persists across subsequent calls.",
        "formula": "Mutable default arguments persist state across multiple function invocations.",
        "shortcut": "Default list accumulates: [1] -> [1, 2].",
        "commonMistakes": "Thinking default list resets to [] on second call.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "python",
            "easy"
        ]
    },
    {
        "id": "coding_programming_medium_1",
        "text": "What is the optimal time complexity to find the maximum sum contiguous subarray in an array of N integers (Kadane's Algorithm)?",
        "options": [
            "O(N)",
            "O(N^2)",
            "O(N log N)",
            "O(1)"
        ],
        "answer": "O(N)",
        "solution": "Kadane's Algorithm iterates through the array once while keeping track of `current_max = max(arr[i], current_max + arr[i])` and `global_max = max(global_max, current_max)`, running in O(N) time and O(1) space.",
        "formula": "Kadane's: current_sum = max(x, current_sum + x) -> O(N)",
        "shortcut": "Single pass DP = O(N).",
        "commonMistakes": "Thinking brute force O(N^2) or divide-and-conquer O(N log N) is required.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "dynamic_programming",
            "medium"
        ]
    },
    {
        "id": "coding_programming_medium_2",
        "text": "What is the output of the following bitwise expression: `x = 12 ^ 12`?",
        "options": [
            "0",
            "12",
            "24",
            "1"
        ],
        "answer": "0",
        "solution": "The bitwise XOR operator `^` yields 0 whenever identical bits are compared (`A ^ A = 0` for any integer A).",
        "formula": "Bitwise identity: A ^ A = 0, A ^ 0 = A",
        "shortcut": "XOR of any number with itself is 0.",
        "commonMistakes": "Confusing XOR with exponentiation.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "bitwise",
            "medium"
        ]
    },
    {
        "id": "coding_programming_medium_3",
        "text": "Which of the following operations on a Hash Table has an average time complexity of O(1) but a worst-case time complexity of O(N)?",
        "options": [
            "Insertion and Search",
            "Binary Search",
            "Heapify",
            "Merge Sort"
        ],
        "answer": "Insertion and Search",
        "solution": "In a Hash Table, good hash functions distribute keys evenly giving O(1) average lookup/insert. If all keys hash to the same bucket (hash collisions), it degrades to a linked list traversal taking O(N) worst-case.",
        "formula": "Hash Table: Average = O(1), Worst Case (Collisions) = O(N)",
        "shortcut": "Hash table average O(1), worst O(N).",
        "commonMistakes": "Thinking Hash Table is strictly O(1) in worst case.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "data_structures",
            "medium"
        ]
    },
    {
        "id": "coding_programming_medium_4",
        "text": "What is the total number of edges in a connected undirected tree with V vertices?",
        "options": [
            "V - 1",
            "V",
            "V + 1",
            "V * (V - 1) / 2"
        ],
        "answer": "V - 1",
        "solution": "By definition, a connected acyclic graph (tree) with V vertices always has exactly V - 1 edges.",
        "formula": "Edges in a tree = V - 1",
        "shortcut": "Tree with V vertices always has V - 1 edges.",
        "commonMistakes": "Confusing a Tree (V - 1 edges) with a Complete Graph (V(V-1)/2 edges).",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "graph_theory",
            "medium"
        ]
    },
    {
        "id": "coding_programming_hard_1",
        "text": "In QuickSort, what choice of pivot causes worst-case O(N^2) time complexity on an already sorted array?",
        "options": [
            "Picking always the first or last element as pivot",
            "Picking median of three",
            "Picking a random pivot",
            "Median of medians pivot"
        ],
        "answer": "Picking always the first or last element as pivot",
        "solution": "When the array is already sorted and the first or last element is chosen as pivot, the partition splits into sizes 0 and N-1 at every recursive level, leading to the recurrence T(N) = T(N-1) + O(N) = O(N^2).",
        "formula": "Recurrence T(N) = T(N-1) + cN = O(N^2)",
        "shortcut": "Fixed extreme pivot on sorted input degrades QuickSort to O(N^2).",
        "commonMistakes": "Thinking randomized pivot causes O(N^2).",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "algorithms",
            "hard"
        ]
    },
    {
        "id": "coding_programming_hard_2",
        "text": "What is the time complexity of finding the Shortest Path in a weighted graph with non-negative edge weights using Dijkstra's Algorithm with a Min-Heap (Priority Queue)?",
        "options": [
            "O((V + E) log V)",
            "O(V^2)",
            "O(V * E)",
            "O(E^2)"
        ],
        "answer": "O((V + E) log V)",
        "solution": "With a binary min-heap, extract-min is called V times (O(V log V)) and decrease-key / edge relaxation is called E times (O(E log V)), yielding overall time O((V + E) log V).",
        "formula": "Dijkstra with Min-Heap = O((V + E) log V)",
        "shortcut": "Binary Heap Dijkstra: O((V + E) log V).",
        "commonMistakes": "Choosing O(V^2) (which applies only to array implementation).",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "graph_algorithms",
            "hard"
        ]
    },
    {
        "id": "coding_programming_hard_3",
        "text": "How can you check if an integer N is a power of 2 using a single bitwise operation in O(1) time?",
        "options": [
            "(N > 0) and (N & (N - 1) == 0)",
            "(N & N == 0)",
            "(N | (N - 1) == 0)",
            "(N ^ (N - 1) == 0)"
        ],
        "answer": "(N > 0) and (N & (N - 1) == 0)",
        "solution": "Powers of 2 have exactly one '1' bit in binary (e.g. 8 is 1000). N - 1 inverts all lower bits (7 is 0111). Performing bitwise AND `N & (N - 1)` clears that single bit to 0.",
        "formula": "N & (N - 1) == 0 clears the lowest set bit.",
        "shortcut": "Power of 2 check: N > 0 and (N & (N - 1)) == 0.",
        "commonMistakes": "Forgetting to check N > 0 (since 0 & -1 == 0).",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "bitwise",
            "hard"
        ]
    },
    {
        "id": "coding_programming_beginner_28",
        "text": "What is the extension of Python compiled bytecode files?",
        "options": [
            ".pyc",
            ".py",
            ".class",
            ".exe"
        ],
        "answer": ".pyc",
        "solution": "Python compiles source files to bytecode with the `.pyc` extension in `__pycache__`.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "coding_programming_beginner_29",
        "text": "Which keyword is used to define an anonymous function in Python?",
        "options": [
            "lambda",
            "def",
            "func",
            "anonymous"
        ],
        "answer": "lambda",
        "solution": "The `lambda` keyword defines small anonymous functions in Python.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 6,
        "tags": [
            "coding",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "coding_programming_beginner_30",
        "text": "What data structure is used to implement recursion behind the scenes?",
        "options": [
            "Call Stack",
            "Heap",
            "Queue",
            "Hash Table"
        ],
        "answer": "Call Stack",
        "solution": "Function calls and activation records are managed in the runtime Call Stack.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "coding_programming_beginner_31",
        "text": "Which operator is used for string concatenation in Python?",
        "options": [
            "+",
            "&",
            ".",
            "concat"
        ],
        "answer": "+",
        "solution": "In Python, the `+` operator concatenates two strings.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "coding_programming_beginner_32",
        "text": "What is the time complexity of inserting an element at the beginning of a singly linked list with head pointer?",
        "options": [
            "O(1)",
            "O(N)",
            "O(log N)",
            "O(N^2)"
        ],
        "answer": "O(1)",
        "solution": "Creating a new node and setting `node.next = head; head = node` takes constant time O(1).",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "30s",
        "difficulty": "beginner",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "beginner",
            "verified"
        ]
    },
    {
        "id": "coding_programming_easy_33",
        "text": "What will `list(set([1, 2, 2, 3, 4, 4]))` evaluate to?",
        "options": [
            "[1, 2, 3, 4]",
            "[1, 2, 2, 3, 4, 4]",
            "[4, 3, 2, 1]",
            "Error"
        ],
        "answer": "[1, 2, 3, 4]",
        "solution": "Converting a list to a `set` eliminates duplicate elements.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "easy",
            "verified"
        ]
    },
    {
        "id": "coding_programming_easy_34",
        "text": "In Python, which function is used to get the length of an iterable?",
        "options": [
            "len()",
            "length()",
            "size()",
            "count()"
        ],
        "answer": "len()",
        "solution": "`len(iterable)` returns the number of items in an object.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "easy",
            "verified"
        ]
    },
    {
        "id": "coding_programming_easy_35",
        "text": "What is the best-case time complexity of Bubble Sort when an optimized swapped flag is used?",
        "options": [
            "O(N)",
            "O(N^2)",
            "O(log N)",
            "O(1)"
        ],
        "answer": "O(N)",
        "solution": "If no swaps occur during the first pass, the algorithm terminates early in O(N) time.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 6,
        "tags": [
            "coding",
            "easy",
            "verified"
        ]
    },
    {
        "id": "coding_programming_easy_36",
        "text": "Which method is used to remove and return the last item from a Python list?",
        "options": [
            "pop()",
            "remove()",
            "delete()",
            "shift()"
        ],
        "answer": "pop()",
        "solution": "`list.pop()` removes and returns the element at the specified index (default last element).",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "easy",
            "verified"
        ]
    },
    {
        "id": "coding_programming_easy_37",
        "text": "What is the maximum number of children a node can have in a Binary Tree?",
        "options": [
            "2",
            "1",
            "3",
            "Unlimited"
        ],
        "answer": "2",
        "solution": "In a binary tree, every node has at most 2 children (left and right).",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "45s",
        "difficulty": "easy",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "easy",
            "verified"
        ]
    },
    {
        "id": "coding_programming_medium_38",
        "text": "What is the time complexity of building a Binary Heap from an unsorted array of N elements?",
        "options": [
            "O(N)",
            "O(N log N)",
            "O(N^2)",
            "O(log N)"
        ],
        "answer": "O(N)",
        "solution": "Bottom-up heap construction (heapify) runs in linear O(N) time mathematically using Taylor series summation.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "medium",
            "verified"
        ]
    },
    {
        "id": "coding_programming_medium_39",
        "text": "Which algorithmic paradigm does Floyd-Warshall all-pairs shortest path algorithm belong to?",
        "options": [
            "Dynamic Programming",
            "Greedy",
            "Divide and Conquer",
            "Backtracking"
        ],
        "answer": "Dynamic Programming",
        "solution": "Floyd-Warshall iteratively computes `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])` using dynamic programming.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "medium",
            "verified"
        ]
    },
    {
        "id": "coding_programming_medium_40",
        "text": "What will be the output of `type(lambda x: x)` in Python?",
        "options": [
            "<class 'function'>",
            "<class 'lambda'>",
            "<class 'method'>",
            "<class 'object'>"
        ],
        "answer": "<class 'function'>",
        "solution": "Lambdas create standard first-class function objects belonging to ` `.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "medium",
            "verified"
        ]
    },
    {
        "id": "coding_programming_medium_41",
        "text": "In an operating system, what condition is NOT one of Coffman's four conditions for deadlock?",
        "options": [
            "Preemption Allowed",
            "Mutual Exclusion",
            "Hold and Wait",
            "Circular Wait"
        ],
        "answer": "Preemption Allowed",
        "solution": "Deadlock requires 'No Preemption'. If preemption is allowed, deadlock cannot occur.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 6,
        "tags": [
            "coding",
            "medium",
            "verified"
        ]
    },
    {
        "id": "coding_programming_medium_42",
        "text": "What is the worst-case time complexity of Binary Search on a sorted array of N elements?",
        "options": [
            "O(log N)",
            "O(N)",
            "O(1)",
            "O(N log N)"
        ],
        "answer": "O(log N)",
        "solution": "Binary Search divides search interval in half each iteration: T(N) = T(N/2) + O(1) = O(log N).",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "60s",
        "difficulty": "medium",
        "topic": "programming",
        "subject": "coding",
        "patternType": 1,
        "tags": [
            "coding",
            "medium",
            "verified"
        ]
    },
    {
        "id": "coding_programming_hard_43",
        "text": "What is the time complexity of Tarjan's strongly connected components algorithm on a directed graph with V vertices and E edges?",
        "options": [
            "O(V + E)",
            "O(V^2)",
            "O(V * E)",
            "O(E log V)"
        ],
        "answer": "O(V + E)",
        "solution": "Tarjan's algorithm uses a single DFS traversal to compute low-link values, running in linear O(V + E) time.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 2,
        "tags": [
            "coding",
            "hard",
            "verified"
        ]
    },
    {
        "id": "coding_programming_hard_44",
        "text": "In Python CPython implementation, what mechanism prevents multiple native threads from executing Python bytecodes simultaneously?",
        "options": [
            "GIL (Global Interpreter Lock)",
            "JIT Compiler",
            "Garbage Collector",
            "Thread Pool"
        ],
        "answer": "GIL (Global Interpreter Lock)",
        "solution": "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 3,
        "tags": [
            "coding",
            "hard",
            "verified"
        ]
    },
    {
        "id": "coding_programming_hard_45",
        "text": "What is the space complexity of solving the 0/1 Knapsack problem with dynamic programming using 1D space optimization?",
        "options": [
            "O(W)",
            "O(N * W)",
            "O(N)",
            "O(1)"
        ],
        "answer": "O(W)",
        "solution": "By iterating backwards through the weight capacity W, the DP table can be compressed to a 1D array of size W + 1.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 4,
        "tags": [
            "coding",
            "hard",
            "verified"
        ]
    },
    {
        "id": "coding_programming_hard_46",
        "text": "What is the worst-case time complexity of searching a pattern of length M in a text of length N using the Knuth-Morris-Pratt (KMP) algorithm?",
        "options": [
            "O(N + M)",
            "O(N * M)",
            "O(N log M)",
            "O(M^2)"
        ],
        "answer": "O(N + M)",
        "solution": "KMP preprocesses the pattern in O(M) time to build the LPS array and searches the text in O(N) time without backtracking.",
        "formula": "Standard Computer Science & Programming Concept.",
        "shortcut": "Direct algorithmic identity / syntax rule.",
        "commonMistakes": "Misinterpreting language-specific semantics or edge conditions.",
        "timeRequired": "90s",
        "difficulty": "hard",
        "topic": "programming",
        "subject": "coding",
        "patternType": 5,
        "tags": [
            "coding",
            "hard",
            "verified"
        ]
    }
];
