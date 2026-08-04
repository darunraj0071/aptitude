if (!window.TOPIC_QUESTIONS) window.TOPIC_QUESTIONS = {};
window.TOPIC_QUESTIONS['reasoning_non_verbal'] = [
,
{
    "id": "reas_nv_solved_71",
    "text": "Figure Series: Circle inside Square \u2192 Triangle inside Square \u2192 Pentagon inside Square \u2192 ?",
    "options": [
        "Hexagon inside Square",
        "Octagon inside Square",
        "Circle inside Triangle",
        "Pentagon inside Triangle"
    ],
    "answer": "Hexagon inside Square",
    "difficulty": "easy",
    "patternType": 1,
    "solution": "Inner shape sides increase: 0 (Circle) \u2192 3 (Triangle) \u2192 5 (Pentagon) \u2192 6 (Hexagon). Answer: Hexagon inside Square.",
    "formula": "Side Count Sequence: 0 -> 3 -> 5 -> 6",
    "shortcut": "Inner polygon gains sides step-by-step.",
    "commonMistakes": "Changing outer square container.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_72",
    "text": "Odd Figure Out: Three figures have dots inside, one figure has dots outside. Which is odd?",
    "options": [
        "Figure A",
        "Figure B",
        "Figure C",
        "Figure D (dots outside)"
    ],
    "answer": "Figure D (dots outside)",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "Figures A, B, C have internal dots; Figure D has external dots.",
    "formula": "Internal vs External Placement Rule",
    "shortcut": "Look for element boundary location.",
    "commonMistakes": "Counting number of dots instead of checking placement.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_73",
    "text": "Mirror Image: What is the correct vertical mirror reflection of the word 'BOARD'?",
    "options": [
        "DRAOB",
        "DAORB",
        "\u15e1\u042fAO\u15fa",
        "BOARD"
    ],
    "answer": "\u15e1\u042fAO\u15fa",
    "difficulty": "easy",
    "patternType": 1,
    "solution": "Left-right reflection reverses character sequence and flips letter orientations horizontally.",
    "formula": "Horizontal Character Flip",
    "shortcut": "Reverse sequence and mirror individual characters.",
    "commonMistakes": "Simply reversing letter sequence without flipping characters.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_74",
    "text": "Paper Folding: Square paper folded vertically in half, 1 hole punched at center. Unfolded hole count?",
    "options": [
        "1",
        "2",
        "3",
        "4"
    ],
    "answer": "2",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "1 fold = 2 paper layers. 1 punch \u00d7 2 layers = 2 holes upon unfolding.",
    "formula": "Total Holes = Punch Count \u00d7 Layers",
    "shortcut": "1 punch on 2 layers = 2 holes.",
    "commonMistakes": "Thinking fold doubles holes twice.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_75",
    "text": "3\u00d73 Grid Matrix: Row 1 (Circle, Square, Triangle), Row 2 (Square, Triangle, Circle), Row 3 (Triangle, Circle, [?]). Missing shape?",
    "options": [
        "Circle",
        "Triangle",
        "Square",
        "Hexagon"
    ],
    "answer": "Square",
    "difficulty": "easy",
    "patternType": 1,
    "solution": "Apply Latin Square logic: Each row and column contains Circle, Square, Triangle once. Row 3 lacks Square.",
    "formula": "Latin Square Property",
    "shortcut": "Missing element in Row 3 is Square.",
    "commonMistakes": "Repeating Circle or Triangle.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_76",
    "text": "Matrix Rotation: Arrow rotates 90\u00b0 clockwise: 12 o'clock \u2192 3 o'clock \u2192 6 o'clock \u2192 ?",
    "options": [
        "9 o'clock (West)",
        "12 o'clock (North)",
        "6 o'clock (South)",
        "3 o'clock (East)"
    ],
    "answer": "9 o'clock (West)",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "Clockwise rotation: 0\u00b0 \u2192 90\u00b0 \u2192 180\u00b0 \u2192 270\u00b0 (pointing West / 9 o'clock).",
    "formula": "Rotation = Angle + 90\u00b0",
    "shortcut": "After South (down), 90\u00b0 clockwise points West (left).",
    "commonMistakes": "Rotating counter-clockwise.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_79",
    "text": "Figure Counting: How many total triangles in a square divided by its two diagonals?",
    "options": [
        "4",
        "6",
        "8",
        "10"
    ],
    "answer": "8",
    "difficulty": "easy",
    "patternType": 1,
    "solution": "4 small triangles + 4 large composite triangles = 8 total triangles.",
    "formula": "Triangles in Square Diagonals = 2 \u00d7 Small Triangles",
    "shortcut": "2 \u00d7 4 = 8.",
    "commonMistakes": "Counting only the 4 small region triangles.",
    "subject": "reasoning",
    "topic": "non_verbal"
},
{
    "id": "reas_nv_solved_81",
    "text": "Shape Analogy: Circle : Sphere :: Square : ?",
    "options": [
        "Cube",
        "Rectangle",
        "Pyramid",
        "Cylinder"
    ],
    "answer": "Cube",
    "difficulty": "beginner",
    "patternType": 1,
    "solution": "Circle is 2D, Sphere is 3D counterpart. Square is 2D, Cube is 3D counterpart.",
    "formula": "2D Shape -> 3D Solid Analogy",
    "shortcut": "2D Square extends to 3D Cube.",
    "commonMistakes": "Selecting 2D Rectangle.",
    "subject": "reasoning",
    "topic": "non_verbal"
}
];
