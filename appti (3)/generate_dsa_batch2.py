import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

print("=" * 65)
print("🚀 GENERATING BATCH 2: GRAPH, INTERVALS, LINKED LIST, MATRIX, STRING, TREES, HEAPS")
print("=" * 65)

NEW_DSA_CHALLENGES_BATCH2 = [
    # =========================================================================
    # 4. GRAPH ALGORITHMS (8 Problems)
    # =========================================================================
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
            {"input": ["5\n0 1\n0 2\n0 3\n2 4"], "output": "0 1 2 3 4", "explanation": "BFS explores 0 -> neighbors (1, 2, 3) -> neighbor of 2 (4)."},
            {"input": ["4\n0 1\n1 2\n2 3"], "output": "0 1 2 3", "explanation": "Linear path graph BFS traversal."},
            {"input": ["1"], "output": "0", "explanation": "Single vertex -> 0."}
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
            {"input": ["5\n0 1\n0 2\n0 4\n4 3"], "output": "0 1 2 4 3", "explanation": "DFS explores deep branch first: 0 -> 1 -> 2 -> 4 -> 3."},
            {"input": ["4\n0 1\n0 2\n1 2\n2 0\n2 3\n3 3"], "output": "0 1 2 3", "explanation": "Cyclic graph DFS traversal."}
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
            {"input": ["4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0"], "output": "1", "explanation": "All land cells connect to form 1 single island."},
            {"input": ["4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1"], "output": "3", "explanation": "3 separate disconnected islands."},
            {"input": ["3 3\n0 0 0\n0 0 0\n0 0 0"], "output": "0", "explanation": "Twisted All Water Case: 0 islands."}
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
            {"input": ["3 3\n1 0 0\n0 1 0\n0 0 1"], "output": "1", "explanation": "Twisted Diagonal Case: All 3 cells are diagonally connected -> 1 island."},
            {"input": ["3 3\n1 0 1\n0 0 0\n1 0 1"], "output": "4", "explanation": "4 corner islands completely separated by water."}
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
            {"input": ["4\n2 4\n1 3\n2 4\n1 3"], "output": "Cloned Successfully", "explanation": "4-node square graph deep cloned with identical topology."},
            {"input": ["1\n"], "output": "Cloned Successfully", "explanation": "Single isolated node."}
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
            {"input": ["hit\ncog\nhot dot dog lot log cog"], "output": "5", "explanation": "Shortest path: hit -> hot -> dot -> dog -> cog (5 words)."},
            {"input": ["hit\ncog\nhot dot dog lot log"], "output": "0", "explanation": "Twisted Deadlock: 'cog' is not in word list -> 0."}
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
            {"input": ["100 4 200 1 3 2"], "output": "4", "explanation": "Longest consecutive sequence is [1, 2, 3, 4] of length 4."},
            {"input": ["0 3 7 2 5 8 4 6 0 1"], "output": "9", "explanation": "Sequence [0, 1, 2, 3, 4, 5, 6, 7, 8] has length 9."},
            {"input": ["-5 -4 -3 10 20"], "output": "3", "explanation": "Twisted Negative Sequence: [-5, -4, -3] -> length 3."}
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
            {"input": ["baa abcd abca cab cad"], "output": "b d a c", "explanation": "Alien character order derived from topological sort."},
            {"input": ["caa aaa aab"], "output": "c a b", "explanation": "Order: c comes before a, a comes before b."}
        ],
        "sol": "Topological sort: Build directed graph of character precedence from adjacent word prefixes. Use queue-based Kahn's algorithm with in-degrees. Time O(C), Space O(1) (26 characters)."
    },

    # =========================================================================
    # 5. INTERVAL PROBLEMS (5 Problems)
    # =========================================================================
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
            {"input": ["1 3\n2 6\n8 10\n15 18"], "output": "1 6\n8 10\n15 18", "explanation": "[1,3] and [2,6] overlap -> [1,6]."},
            {"input": ["1 4\n4 5"], "output": "1 5", "explanation": "Twisted Touching Boundaries Case: [1,4] and [4,5] merge to [1,5]."},
            {"input": ["1 4\n2 3"], "output": "1 4", "explanation": "Twisted Complete Enclosure: [2,3] is inside [1,4] -> [1,4]."}
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
            {"input": ["900 940 950 1100 1500 1800\n910 1200 1120 1130 1900 2000"], "output": "3", "explanation": "Maximum 3 trains overlap between 9:50 and 11:20 -> 3 platforms needed."},
            {"input": ["900 1100 1235\n1000 1200 1240"], "output": "1", "explanation": "No train overlap -> 1 platform needed."},
            {"input": ["900 900\n1000 1000"], "output": "2", "explanation": "Twisted Simultaneous Arrival: 2 platforms needed."}
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
            {"input": ["0 30\n5 10\n15 20"], "output": "2", "explanation": "Meeting [0, 30] overlaps with [5, 10] and [15, 20] -> 2 rooms needed."},
            {"input": ["7 10\n2 4"], "output": "1", "explanation": "No overlap -> 1 room needed."}
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
            {"input": ["4\n1 4 20\n2 1 10\n3 1 40\n4 1 30"], "output": "2 60", "explanation": "2 jobs done (job 3 profit 40 + job 1 profit 20) with maximum profit = 60."},
            {"input": ["5\n1 2 100\n2 1 19\n3 2 27\n4 1 25\n5 1 15"], "output": "2 127", "explanation": "Jobs 1 and 3 selected -> profit = 127."}
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
            {"input": ["1 2 10 5 5\n4 5 12 9 12"], "output": "3 5", "explanation": "At time 5, maximum 3 guests are present."},
            {"input": ["13 28 29 14 40 17 3\n107 95 111 105 70 127 74"], "output": "7 40", "explanation": "Peak of 7 guests at time 40."}
        ],
        "sol": "Sort entry and exit arrays. Two pointer sweep tracking peak concurrent events and earliest peak time. Time O(N log N), Space O(N)."
    },

    # =========================================================================
    # 6. LINKED LIST PROBLEMS (6 Problems)
    # =========================================================================
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
            {"input": ["3 2 0 -4\n1"], "output": "True", "explanation": "Tail connects to node at index 1 -> Cycle exists (True)."},
            {"input": ["1 2\n0"], "output": "True", "explanation": "2-node cycle -> True."},
            {"input": ["1\n-1"], "output": "False", "explanation": "Single node with no cycle -> False."}
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
            {"input": ["1 2 4\n1 3 4"], "output": "1 1 2 3 4 4", "explanation": "Merged sorted list."},
            {"input": ["\n0"], "output": "0", "explanation": "Twisted Empty List Case: Merge empty with [0] -> [0]."},
            {"input": ["5 10 15\n2 3 20"], "output": "2 3 5 10 15 20", "explanation": "Merged list."}
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
            {"input": ["1 2 3 4 5\n2"], "output": "4 5 1 2 3", "explanation": "Rotated right by 2 -> [4, 5, 1, 2, 3]."},
            {"input": ["0 1 2\n4"], "output": "2 0 1", "explanation": "Twisted k > length: 4 % 3 = 1 rotation -> [2, 0, 1]."},
            {"input": ["1 2 3\n0"], "output": "1 2 3", "explanation": "k = 0 -> unchanged list."}
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
            {"input": ["4 1 8 4 5\n5 6 1 8 4 5\n8"], "output": "8", "explanation": "Intersect at node with value 8."},
            {"input": ["1 9 1 2 4\n3 2 4\n2"], "output": "2", "explanation": "Intersect at node with value 2."}
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
            {"input": ["2 4 3\n5 6 4"], "output": "7 0 8", "explanation": "342 + 465 = 807 (represented as 7 -> 0 -> 8)."},
            {"input": ["0\n0"], "output": "0", "explanation": "0 + 0 = 0."},
            {"input": ["9 9 9 9 9 9 9\n9 9 9 9"], "output": "8 9 9 9 0 0 0 1", "explanation": "Twisted Carry Overflow Case: Multi-digit carries cascading to new node."}
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
            {"input": ["2\nput 1 1\nput 2 2\nget 1\nput 3 3\nget 2"], "output": "1 -1", "explanation": "Cache capacity 2. Key 2 is evicted when key 3 is added -> get(2) returns -1."},
            {"input": ["1\nput 2 1\nget 2\nput 3 2\nget 2\nget 3"], "output": "1 -1 2", "explanation": "Capacity 1 eviction testing."}
        ],
        "sol": "Hash Map + Doubly Linked List: Map stores key -> DLL Node. get(k) moves node to head and returns val. put(k, v) adds to head and if len > capacity removes tail node and deletes from map. Time O(1) each op, Space O(capacity)."
    },

    # =========================================================================
    # 7. MATRIX PROBLEMS (4 Problems)
    # =========================================================================
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
            {"input": ["3 3\n1 1 1\n1 0 1\n1 1 1"], "output": "1 0 1\n0 0 0\n1 0 1", "explanation": "Row 1 and Col 1 are set to zeroes."},
            {"input": ["3 4\n0 1 2 0\n3 4 5 2\n1 3 1 5"], "output": "0 0 0 0\n0 4 5 0\n0 3 1 0", "explanation": "Multiple zeroes in row 0."}
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
            {"input": ["3 3\n1 2 3\n4 5 6\n7 8 9"], "output": "1 2 3 6 9 8 7 4 5", "explanation": "Spiral traversal of 3x3 matrix."},
            {"input": ["3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12"], "output": "1 2 3 4 8 12 11 10 9 5 6 7", "explanation": "Non-square 3x4 matrix spiral."},
            {"input": ["1 1\n42"], "output": "42", "explanation": "Single element matrix -> 42."}
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
            {"input": ["5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30\n5"], "output": "True", "explanation": "5 is present at matrix[1][1] -> True."},
            {"input": ["5 5\n1 4 7 11 15\n2 5 8 12 19\n3 6 9 16 22\n10 13 14 17 24\n18 21 23 26 30\n20"], "output": "False", "explanation": "20 is not present in matrix -> False."}
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
            {"input": ["3 3\n1 2 3\n4 5 6\n7 8 9"], "output": "9 8 7\n6 5 4\n3 2 1", "explanation": "180 degree rotated matrix."},
            {"input": ["2 2\n1 2\n3 4"], "output": "4 3\n2 1", "explanation": "2x2 rotation."}
        ],
        "sol": "Reverse rows then reverse elements in each row: matrix.reverse(); for row in matrix: row.reverse(). Time O(N^2), Space O(1)."
    },

    # =========================================================================
    # 8. STRING ALGORITHMS (9 Problems)
    # =========================================================================
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
            {"input": ["42"], "output": "42", "explanation": "Parsed as integer 42."},
            {"input": ["   -042"], "output": "-42", "explanation": "Leading spaces trimmed, sign '-' evaluated -> -42."},
            {"input": ["1337c0d3"], "output": "1337", "explanation": "Twisted Trailing Non-Digits: Stops at first non-digit 'c' -> 1337."},
            {"input": ["-91283472332"], "output": "-2147483648", "explanation": "Twisted Clamping Underflow: Clamped to INT_MIN (-2147483648)."}
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
            {"input": ["()[]{}"], "output": "True", "explanation": "All brackets matched correctly."},
            {"input": ["(]"], "output": "False", "explanation": "Mismatched bracket types -> False."},
            {"input": ["]"], "output": "False", "explanation": "Twisted Lone Closing Bracket -> False."},
            {"input": ["((("], "output": "False", "explanation": "Unclosed brackets -> False."}
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
            {"input": ["A man, a plan, a canal: Panama"], "output": "True", "explanation": "Cleaned string 'amanaplanacanalpanama' is palindrome."},
            {"input": ["race a car"], "output": "False", "explanation": "'raceacar' is not palindrome."},
            {"input": [" "], "output": "True", "explanation": "Twisted Empty Alphanumeric String -> True."}
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
            {"input": ["babad"], "output": "bab", "explanation": "'bab' (or 'aba') is valid longest palindromic substring of length 3."},
            {"input": ["cbbd"], "output": "bb", "explanation": "Even-length palindrome 'bb'."},
            {"input": ["a"], "output": "a", "explanation": "Single character palindrome."}
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
            {"input": ["leetcode"], "output": "0", "explanation": "'l' is at index 0 and does not repeat."},
            {"input": ["loveleetcode"], "output": "2", "explanation": "'v' is at index 2 and does not repeat."},
            {"input": ["aabb"], "output": "-1", "explanation": "Twisted All Repeating Case: No non-repeating character -> -1."}
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
            {"input": ["ABAB\n2"], "output": "4", "explanation": "Replace two 'A's with 'B's or vice versa -> 'BBBB' length 4."},
            {"input": ["AABABBA\n1"], "output": "4", "explanation": "Replace middle 'A' with 'B' -> 'AABBBBA' has 'BBBB' of length 4."}
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
            {"input": ["timetopractice\ntoc"], "output": "toprac", "explanation": "'toprac' contains 't', 'o', 'c' with minimum length 6."},
            {"input": ["zoomlazapzo\noza"], "output": "apzo", "explanation": "'apzo' contains 'o', 'z', 'a'."},
            {"input": ["a\naa"], "output": "-1", "explanation": "p requires two 'a's, s only has one -> -1."}
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
            {"input": ["AABAACAADAABAABA\nAABA"], "output": "0 9 12", "explanation": "Pattern 'AABA' occurs at indices 0, 9, and 12."},
            {"input": ["abracadabra\nabra"], "output": "0 7", "explanation": "Occurs at index 0 and 7."},
            {"input": ["hello\nworld"], "output": "-1", "explanation": "Pattern not found -> -1."}
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
            {"input": ["FooBar FooBarTest FootBall FrameBuffer FeedBack\nFB"], "output": "FooBar FooBarTest FootBall FrameBuffer FeedBack", "explanation": "All listed words match pattern 'FB'."},
            {"input": ["WelcomeGeek WelcomeToGeeks\nWTG"], "output": "WelcomeToGeeks", "explanation": "'WelcomeToGeeks' matches 'W' 'T' 'G'."}
        ],
        "sol": "Sequential uppercase validation with two pointers. Time O(N * L), Space O(1)."
    },

    # =========================================================================
    # 9. TREES, BST & TRIES (14 Problems)
    # =========================================================================
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
            {"input": ["1 2 3 4 5 N N"], "output": "3", "explanation": "Height of tree is 3."},
            {"input": ["2 N 1 3 N"], "output": "3", "explanation": "Skewed tree height is 3."},
            {"input": ["1"], "output": "1", "explanation": "Single node tree has height 1."}
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
            {"input": ["1 2 3 4 5"], "output": "3", "explanation": "Longest path is [4, 2, 1, 3] or [5, 2, 1, 3] having 3 edges."},
            {"input": ["1 2"], "output": "1", "explanation": "2 nodes connected by 1 edge -> diameter 1."}
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
            {"input": ["4 2 7 1 3 6 9"], "output": "4 7 2 9 6 3 1", "explanation": "Binary tree inverted mirror image."},
            {"input": ["2 1 3"], "output": "2 3 1", "explanation": "Mirror swaps 1 and 3."}
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
            {"input": ["1 2 2 3 4 4 3"], "output": "True", "explanation": "Symmetric tree structure and values -> True."},
            {"input": ["1 2 2 N 3 N 3"], "output": "False", "explanation": "Asymmetric child positions -> False."}
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
            {"input": ["1 2 3"], "output": "6", "explanation": "Path 2 -> 1 -> 3 gives sum = 6."},
            {"input": ["-10 9 20 N N 15 7"], "output": "42", "explanation": "Path 15 -> 20 -> 7 gives sum = 42."},
            {"input": ["-3"], "output": "-3", "explanation": "Single negative node -> -3."}
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
            {"input": ["3 9 20 N N 15 7"], "output": "3 9 20 15 7", "explanation": "Level order traversal."},
            {"input": ["1"], "output": "1", "explanation": "Single node traversal."}
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
            {"input": ["1 2 3 N N 4 5"], "output": "1 2 3 N N 4 5", "explanation": "Reconstructed identical tree topology."},
            {"input": ["N"], "output": "N", "explanation": "Empty tree serialization."}
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
            {"input": ["3 4 5 1 2\n4 1 2"], "output": "True", "explanation": "Tree with root 4 is an exact subtree."},
            {"input": ["3 4 5 1 2 N N N N 0\n4 1 2"], "output": "False", "explanation": "Node 2 has extra child 0 -> not identical subtree (False)."}
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
            {"input": ["3 9 20 15 7\n9 3 15 20 7"], "output": "9 15 7 20 3", "explanation": "Postorder traversal of reconstructed tree."},
            {"input": ["-1\n-1"], "output": "-1", "explanation": "Single node postorder."}
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
            {"input": ["10 5 50 1 40 100\n5 45"], "output": "3", "explanation": "Nodes 5, 10, 40 lie within range [5, 45] -> Count = 3."},
            {"input": ["10 5 15\n10 15"], "output": "2", "explanation": "Nodes 10, 15 -> Count = 2."}
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
            {"input": ["3 1 4 N 2\n1"], "output": "1", "explanation": "1st smallest element is 1."},
            {"input": ["5 3 6 2 4 N N 1\n3"], "output": "3", "explanation": "Inorder: 1, 2, 3, 4, 5, 6 -> 3rd smallest is 3."}
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
            {"input": ["6 2 8 0 4 7 9 N N 3 5\n2 8"], "output": "6", "explanation": "LCA of 2 and 8 is root 6."},
            {"input": ["6 2 8 0 4 7 9 N N 3 5\n2 4"], "output": "2", "explanation": "LCA of 2 and 4 is node 2 itself."}
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
            {"input": ["insert apple\nsearch apple\nsearch app\ninsert app\nsearch app"], "output": "True False True", "explanation": "Trie prefix and full word search execution."},
            {"input": ["insert hello\nsearch world"], "output": "False", "explanation": "Word not in trie -> False."}
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
            {"input": ["3 0 0"], "output": "2", "explanation": "Root sends 1 coin to left and 1 to right -> 2 moves."},
            {"input": ["0 3 0"], "output": "3", "explanation": "3 moves required."}
        ],
        "sol": "Postorder excess balance: moves = 0. def dfs(node): if not node: return 0; l = dfs(node.left); r = dfs(node.right); nonlocal moves; moves += abs(l) + abs(r); return node.val + l + r - 1. dfs(root); return moves. Time O(N), Space O(H)."
    },

    # =========================================================================
    # 10. HEAPS & PRIORITY QUEUES (3 Problems)
    # =========================================================================
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
            {"input": ["12 5 787 1 23\n2"], "output": "787 23", "explanation": "2 largest elements are 787 and 23 in descending order."},
            {"input": ["1 23 12 9 30 2 50\n3"], "output": "50 30 23", "explanation": "3 largest elements are 50, 30, 23."}
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
            {"input": ["6 5 3 2 8 10 9\n3"], "output": "2 3 5 6 8 9 10", "explanation": "Nearly sorted array with k=3 sorted in O(N log K) time."},
            {"input": ["10 9 8 7 4 70 60 50\n4"], "output": "4 7 8 9 10 50 60 70", "explanation": "Sorted result."}
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
            {"input": ["5 15 1 3"], "output": "5 10 5 4", "explanation": "Median stream: [5]->5, [5,15]->10, [1,5,15]->5, [1,3,5,15]->(3+5)/2=4."},
            {"input": ["2 3 4"], "output": "2 2.5 3", "explanation": "Median stream: [2]->2, [2,3]->2.5, [2,3,4]->3."}
        ],
        "sol": "Two-Heap median finder: max_heap (invert sign for min-heap implementation) for lower half, min_heap for upper half. If odd count return max_heap top, if even return average of tops. Time O(log N) insert, O(1) query, Space O(N)."
    }
]

# Write to coding_data.js
js_path = 'c:/Users/sanja/Downloads/aptitude/appti (3)/appti/js/coding_data.js'
with open(js_path, 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'const\s+RAW_CHALLENGES\s*=\s*(\[.*?\]);', content, re.DOTALL)
if match:
    existing_data = json.loads(match.group(1))
    print(f"Current Challenges Count: {len(existing_data)}")
    
    existing_ids = {item['id'] for item in existing_data}
    added_count = 0
    
    for item in NEW_DSA_CHALLENGES_BATCH2:
        if item['id'] not in existing_ids:
            existing_data.append(item)
            existing_ids.add(item['id'])
            added_count += 1
            
    print(f"Added {added_count} DSA Problems from Batch 2. Total Now: {len(existing_data)}")
    
    new_raw_json = json.dumps(existing_data, indent=4, ensure_ascii=False)
    new_content = re.sub(
        r'const\s+RAW_CHALLENGES\s*=\s*\[.*?\];',
        f'const RAW_CHALLENGES = {new_raw_json};',
        content,
        flags=re.DOTALL
    )
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("✅ Successfully updated coding_data.js with all Batch 2 DSA Challenges!")
else:
    print("❌ Failed to parse RAW_CHALLENGES")

print("=" * 65)
