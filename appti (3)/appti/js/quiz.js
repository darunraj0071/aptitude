/* ==========================================================================
   QUIZ.JS - Workstation Tab Router & Practice Engine
   Comprehensive varieties & practice routing across all 31 topics
   ========================================================================== */

let currentQuestions = [];
let currentIndex = 0;
let currentQuestionTimer = 0;
let timerInterval = null;
let selectedOptionIndex = null;
let hasCheckedAnswer = false;
let activePatternFilter = null;
let practiceCorrectCount = 0;
let practiceWrongCount = 0;
let practiceTotalTimeSeconds = 0;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const subject = getPageSubject(); // 'aptitude', 'reasoning', or 'verbal'
    const topic = params.get('topic');

    loadGlobalLayout(subject);

    if (topic) {
        document.getElementById('hub-view').style.display = 'none';
        document.getElementById('workstation-view').style.display = 'block';
        initWorkstation(subject, topic);
    } else {
        document.getElementById('hub-view').style.display = 'block';
        document.getElementById('workstation-view').style.display = 'none';
        renderTopicHubList(subject);
    }
});

// Determine active subject from HTML page name
function getPageSubject() {
    const path = window.location.pathname;
    if (path.includes('reasoning')) return 'reasoning';
    if (path.includes('verbal')) return 'verbal';
    return 'aptitude';
}

// --- Topic Hub Portal Render ---
function renderTopicHubList(subject) {
    const listContainer = document.getElementById('hub-topics-grid');
    if (!listContainer) return;

    const subjectTopics = {
        aptitude: ['numbers', 'percentage', 'profit_loss', 'ratio_proportion', 'average', 'time_work', 'time_distance', 'speed_distance', 'probability', 'permutation_combination', 'data_interpretation', 'simplification', 'algebra', 'geometry'],
        reasoning: ['puzzles', 'seating_arrangement', 'blood_relations', 'coding_decoding', 'syllogism', 'direction_sense', 'statement_conclusion', 'series', 'analogy', 'non_verbal'],
        verbal: ['grammar', 'vocabulary', 'reading_comprehension', 'sentence_correction', 'error_spotting', 'fill_blanks', 'para_jumbles']
    };

    const activeKeys = subjectTopics[subject] || [];

    listContainer.innerHTML = activeKeys.map(key => {
        const meta = MockDataGen.getTopicMetadata(subject, key);
        return `
            <div class="glass-card topic-hub-card" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 180px;">
                <div>
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${meta.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4; margin-bottom: 1.5rem;">${meta.desc}</p>
                </div>
                <a href="${subject}.html?topic=${key}" class="btn btn-primary btn-secondary" style="width: 100%; padding: 0.6rem; font-size: 0.85rem;">
                    <i class="fa-solid fa-graduation-cap"></i> Practice Set
                </a>
            </div>
        `;
    }).join('');
}

// --- Workstation Loader ---
async function initWorkstation(subject, topic) {
    console.log("initWorkstation called: subject=" + subject + ", topic=" + topic);
    
    // Display global loader while fetching questions
    let loader = document.getElementById('global-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'loading-screen';
        loader.innerHTML = '<div class="loader-spinner"></div><div class="loader-logo">VetriPathLearn</div>';
        document.body.appendChild(loader);
    }
    loader.classList.remove('fade-out');

    try {
        await loadTopicScript(subject, topic);
    } catch (e) {
        console.error("Failed to load questions for " + subject + "_" + topic, e);
    }

    // Hide loader
    loader.classList.add('fade-out');

    const meta = MockDataGen.getTopicMetadata(subject, topic);
    
    // Set headers
    document.getElementById('ws-topic-title').textContent = meta.title;
    document.getElementById('ws-topic-desc').textContent = meta.desc;

    // Load theory content
    loadTheoryContent(subject, topic);

    // Setup theory/practice workstation tabs
    const tabTheory = document.getElementById('tab-theory');
    const tabPractice = document.getElementById('tab-practice');
    const panelTheory = document.getElementById('theory-panel');
    const panelPractice = document.getElementById('practice-panel');

    tabTheory.addEventListener('click', () => {
        tabTheory.classList.add('active');
        tabPractice.classList.remove('active');
        panelTheory.style.display = 'block';
        panelPractice.style.display = 'none';
        
        // Re-trigger 3D flip panel animation
        panelTheory.classList.remove('flip-panel-3d');
        void panelTheory.offsetWidth; // Trigger DOM reflow to restart CSS keyframe
        panelTheory.classList.add('flip-panel-3d');
        
        stopTimer();
    });

    tabPractice.addEventListener('click', () => {
        tabPractice.classList.add('active');
        tabTheory.classList.remove('active');
        panelTheory.style.display = 'none';
        panelPractice.style.display = 'block';
        
        // Re-trigger 3D flip panel animation
        panelPractice.classList.remove('flip-panel-3d');
        void panelPractice.offsetWidth; // Trigger DOM reflow to restart CSS keyframe
        panelPractice.classList.add('flip-panel-3d');
        
        // Start practice session if not loaded
        if (currentQuestions.length === 0) {
            setupPracticeSession(subject, topic);
        } else {
            startTimer();
        }
    });

    // Start in Theory tab with initial 3D entrance
    panelTheory.style.display = 'block';
    panelPractice.style.display = 'none';
    panelTheory.classList.add('flip-panel-3d');
}

// Master topic database of formulas, tricks, and pattern varieties
const TOPIC_DATABASE = {
    /* ---------------- APTITUDE TOPICS ---------------- */
    numbers: {
        intro: "Number systems & Number Series cover classification of numbers, divisibility guidelines, unit digit cyclicity, AP & GP progression rules, higher-order differences, and pattern recognition (missing terms and wrong number identification).",
        formulas: [
            { name: "Pattern 1: Arithmetic Progression (AP)", formula: "a_n = a + (n-1)d, S_n = (n/2)[2a + (n-1)d] with constant difference d" },
            { name: "Pattern 2: Difference Series (Second Order AP)", formula: "Differences between consecutive numbers increase by a constant: d_n = d_1 + (n-1)c" },
            { name: "Pattern 3: Geometric Progression (GP) & Division", formula: "a_n = a * r^(n-1), S_n = a(r^n - 1) / (r - 1) with multiplier/divisor r" },
            { name: "Pattern 4: Alternating Operations", formula: "Alternating arithmetic steps (e.g. +a, *b, +a, *b or *n + n, *n - n)" },
            { name: "Pattern 5: Squares & Cubes Series", formula: "T_n = n^2, n^3, n^2 ± k, n^3 ± k, or n^3 - n^2" },
            { name: "Pattern 6: Triangular Numbers", formula: "T_n = n(n + 1) / 2 (e.g., 1, 3, 6, 10, 15, 21...)" },
            { name: "Pattern 7: Digit Operations", formula: "T_n = Product_of_digits(T_{n-1}) + k or Sum_of_digits(T_{n-1}) + k" },
            { name: "Pattern 8: Prime Number Differences", formula: "d_n in {2, 3, 5, 7, 11, 13, 17, 19, 23, 29...}" },
            { name: "Pattern 9: Percentage Growth/Decay", formula: "T_n = T_{n-1} * (1 ± r/100)" },
            { name: "Pattern 10: Higher-Order Differences", formula: "3rd order difference is constant for cubic polynomials: Delta^3(T_n) = constant" },
            { name: "Unit Digit Cyclicity", formula: "2, 3, 7, 8 have period 4; 4, 9 have period 2; 0, 1, 5, 6 have period 1" },
            { name: "Product Relationship", formula: "A * B = HCF(A,B) * LCM(A,B)" },
            { name: "Legendre's Trailing Zeroes", formula: "Zeroes = sum of floor(n / 5^k)" }
        ],
        tricks: [
            "Check differences first: If differences are constant, it's AP. If 2nd differences are constant, it's a quadratic series.",
            "If numbers grow very fast, test multiplication (GP) or exponential powers (n^2, n^3).",
            "For alternating series, look at alternating positions (1st, 3rd, 5th and 2nd, 4th, 6th) or alternating operators (+, *).",
            "Divisibility rules: 3/9 (sum of digits), 4/8 (last 2/3 digits), 11 (|Sum_odd - Sum_even| is 0 or 11k).",
            "Wrong Number Series: Calculate differences; a single incorrect term disrupts two consecutive differences."
        ],
        mistakes: "Assuming a series is purely multiplicative when differences follow an arithmetic progression (+4, +8, +12...). Always check differences before complex formulas.",
        varieties: [
            { type: 1, title: "Type 1: Arithmetic & Geometric Series (AP/GP)", desc: "Identify missing numbers in constant difference or constant multiplier/divisor sequences." },
            { type: 2, title: "Type 2: Difference & Second-Order Sequences", desc: "Solve series where differences form an AP, prime sequence, or power sequence." },
            { type: 3, title: "Type 3: Alternating Multi-Operator Series", desc: "Evaluate series alternating between addition, subtraction, and multiplication (+a, *b, +a, *b)." },
            { type: 4, title: "Type 4: Square, Cube & Triangular Series", desc: "Recognize n^2, n^3, n^3 - n^2, and triangular numbers n(n+1)/2." },
            { type: 5, title: "Type 5: Wrong Term in Series Identification", desc: "Isolate the defective or erroneous number in competitive exam series (Bank PO, SSC, RRB)." },
            { type: 6, title: "Type 6: Two-Tier & Cloned Derived Sequences", desc: "Apply identical operational rules to new starting numbers (RBI Grade B pattern)." }
        ]
    },

    percentage: {
        intro: "Percentage represents ratios relative to 100 base, acting as the fundamental scaling factor in comparison metrics, compounding cycles, and algebraic equations.",
        formulas: [
            { name: "Percentage Value", formula: "Value = (Percent / 100) * Total" },
            { name: "Net Consecutive Change", formula: "Net% = a + b + (a * b) / 100" },
            { name: "Product Constancy", formula: "If Price increases by x%, Consumption drops by [x / (100 + x)] * 100%" },
            { name: "Relative Comparison", formula: "If A is x% less than B, B is [x / (100 - x)] * 100% more than A" },
            { name: "Depreciation / Growth", formula: "V = P(1 ± R / 100)^n" }
        ],
        tricks: [
            "x% of y is identical to y% of x (e.g. 16% of 50 = 50% of 16 = 8).",
            "Memorize fraction equivalents: 1/3 = 33.33%, 1/6 = 16.67%, 1/8 = 12.5%, 1/12 = 8.33%."
        ],
        mistakes: "Adding consecutive percentage changes linearly instead of compounding them.",
        varieties: [
            { type: 1, title: "Type 1: Successive Percentage Increases & Decreases", desc: "Evaluate net change when multiple consecutive percentage shifts occur." },
            { type: 2, title: "Type 2: Income, Expenditure & Savings Apportionment", desc: "Calculate residual monetary savings from percentage expense breakdowns." },
            { type: 3, title: "Type 3: Product Constancy & Consumption Adjustments", desc: "Determine required consumption cuts when item prices increase to keep budget fixed." },
            { type: 4, title: "Type 4: Examination Pass Marks & Failing Margins", desc: "Calculate maximum test scores from pass percentage and point margins." },
            { type: 5, title: "Type 5: Relative Percentage Comparisons", desc: "Translate percentage differences between two entities across variable bases." },
            { type: 6, title: "Type 6: Compounding Depreciation & Population Growth", desc: "Model multi-year value decay or demographic growth using compounding formulas." }
        ]
    },

    profit_loss: {
        intro: "Profit and Loss analyzes commercial transactions, markups, cost bases, margins, and consecutive discounts.",
        formulas: [
            { name: "Profit & Loss %", formula: "P% = (Profit / CP) * 100, L% = (Loss / CP) * 100 (Always on CP)" },
            { name: "Markup & Discount", formula: "SP = MP * (1 - D / 100) = CP * (1 + P / 100)" },
            { name: "Dishonest Dealer", formula: "Gain% = [Error / (True Weight - Error)] * 100%" },
            { name: "Equal SP with Gain/Loss x%", formula: "Always an overall loss of (x / 10)^2 %" },
            { name: "CP and MP Ratio", formula: "CP / MP = (100 - D%) / (100 + P%)" }
        ],
        tricks: [
            "Selling two items at same SP with equal gain/loss x% always yields a net loss of (x/10)^2 %.",
            "Cost Price is the 100% baseline unless the problem explicitly states profit on Selling Price."
        ],
        mistakes: "Calculating profit percentage with Selling Price as denominator instead of Cost Price.",
        varieties: [
            { type: 1, title: "Type 1: Markup and Successive Discount Chains", desc: "Find overall profit margins when articles are marked up and discounted." },
            { type: 2, title: "Type 2: Consecutive Resale Chains (A → B → C)", desc: "Back-calculate initial cost prices across serial buyer-seller transactions." },
            { type: 3, title: "Type 3: Dishonest Dealer & False Weight Profit", desc: "Calculate trader gain percentage from underweight scales and measuring errors." },
            { type: 4, title: "Type 4: Cost Price of X = Selling Price of Y", desc: "Determine profit percentage from direct item quantity equality relations." },
            { type: 5, title: "Type 5: Identical Selling Price Equal Gain & Loss", desc: "Evaluate net transaction losses when two goods sell at identical prices with +/- x%." },
            { type: 6, title: "Type 6: Target Markup for Desired Profit Margin", desc: "Compute catalog marked prices required to preserve profit margins after discounts." }
        ]
    },

    ratio_proportion: {
        intro: "Ratios express comparative relationships between quantities by division, whereas proportions establish equality between ratios.",
        formulas: [
            { name: "Proportional Share", formula: "Share A = Total * [a / (a + b + c)]" },
            { name: "Partnership Ratio", formula: "Profit A : Profit B = (Capital A * Time A) : (Capital B * Time B)" },
            { name: "Mean & Third Proportional", formula: "Mean = sqrt(a * b), Third = b^2 / a" },
            { name: "Coin Box Equation", formula: "Total = k * (r1*1.0 + r2*0.5 + r3*0.25)" }
        ],
        tricks: [
            "To combine A:B = 2:3 and B:C = 4:5, multiply to make B common: A:B:C = 8:12:15.",
            "Substitute ratio components directly into homogeneous algebraic equations."
        ],
        mistakes: "Adding ratio parts directly without identifying the common scaling multiplier k.",
        varieties: [
            { type: 1, title: "Type 1: Sum Partition & Proportional Allocation", desc: "Divide financial sums across individuals in specified integer ratios." },
            { type: 2, title: "Type 2: Mixture Dilution & Liquid Replacement", desc: "Compute new liquid ratios when solvents or water are added to mixtures." },
            { type: 3, title: "Type 3: Partnership Capital-Time Apportionment", desc: "Divide corporate profit shares proportionally to capital investment and duration." },
            { type: 4, title: "Type 4: Coin Denomination & Monetary Sum Bags", desc: "Calculate coin counts across rupee and paise denominations from total monetary values." },
            { type: 5, title: "Type 5: Third and Fourth Proportional Calculations", desc: "Solve geometric proportions using cross-multiplication identities." },
            { type: 6, title: "Type 6: Mean Proportional Geometry Relations", desc: "Find geometric means between numeric pairs using square root relations." }
        ]
    },

    average: {
        intro: "Average represents central tendencies of discrete numerical distributions, calculated as total sum divided by size.",
        formulas: [
            { name: "Basic Average", formula: "Average = Sum of terms / Number of terms" },
            { name: "Weighted Average", formula: "Avg_w = (n1*A1 + n2*A2) / (n1 + n2)" },
            { name: "Average Speed (Equal Distance)", formula: "Harmonic Mean = (2 * S1 * S2) / (S1 + S2)" },
            { name: "Replacement Offset", formula: "New Value = Old Value + (Change in Avg * Total Count)" },
            { name: "Consecutive Integer Average", formula: "Middle Term = (First Term + Last Term) / 2" }
        ],
        tricks: [
            "Use Deviation Method: Assume a base average, sum deviations, divide by count, and adjust base.",
            "Average of first n natural numbers is (n + 1) / 2; average of first n odd numbers is n."
        ],
        mistakes: "Using arithmetic mean for average speed instead of harmonic mean when distances are equal.",
        varieties: [
            { type: 1, title: "Type 1: Group Inclusion & Addition to Sets", desc: "Calculate updated group averages when a new member joins with a known weight." },
            { type: 2, title: "Type 2: Harmonic Mean Average Velocity", desc: "Compute average round-trip speed across equal-distance journey legs." },
            { type: 3, title: "Type 3: Replacement Problems & Group Shifts", desc: "Determine weights of incoming replacement members from average group shifts." },
            { type: 4, title: "Type 4: Multi-Section Weighted Averages", desc: "Combine scores of multiple classroom or department sections with different headcounts." },
            { type: 5, title: "Type 5: Consecutive Integer & Natural Number Series", desc: "Deduce largest or smallest terms in consecutive sequence series from average values." },
            { type: 6, title: "Type 6: Chronological & Multi-Day Meteorological Averages", desc: "Compute rolling multi-day temperature and score averages with additions." }
        ]
    },

    time_work: {
        intro: "Time and Work assesses production parameters. Work rate is inversely proportional to time taken when capacities are constant.",
        formulas: [
            { name: "Combined Time (2 people)", formula: "T = (A * B) / (A + B)" },
            { name: "Manpower Days Formula", formula: "M1 * D1 * H1 / W1 = M2 * D2 * H2 / W2" },
            { name: "Efficiency Ratio", formula: "Time A / Time B = Efficiency B / Efficiency A" },
            { name: "Pipes Inflow / Outflow", formula: "1 / T_net = 1 / T_inlet - 1 / T_outlet" },
            { name: "Wages Apportionment", formula: "Wages Ratio = Efficiency Ratio = (Work Done Ratio)" }
        ],
        tricks: [
            "Assign 'Total Work Units' as the LCM of days. Solve for efficiencies as small integers.",
            "If A is thrice as efficient as B, A takes 1/3 of the time taken by B."
        ],
        mistakes: "Adding days directly to find combined completion times rather than adding reciprocal work rates.",
        varieties: [
            { type: 1, title: "Type 1: Efficiency Multiplier & Relative Rates", desc: "Calculate joint completion timelines when one worker is k times faster than another." },
            { type: 2, title: "Type 2: Joint Worker Combined Completion Timelines", desc: "Find simultaneous completion days using the standard product-over-sum formula." },
            { type: 3, title: "Type 3: Man-Day Manpower Scaling Relations", desc: "Scale workforce size against project deadlines using M1*D1 = M2*D2." },
            { type: 4, title: "Type 4: Cistern Fill Pipes & Drain Outlets", desc: "Model net reservoir fill times with simultaneous inlet pumps and leakage drains." },
            { type: 5, title: "Type 5: Alternate Days Work Rotations", desc: "Compute project duration when workers take turns on sequential alternate days." },
            { type: 6, title: "Type 6: Work Wages & Contract Compensation", desc: "Apportion contract revenue proportionally to individual worker efficiency rates." }
        ]
    },

    time_distance: {
        intro: "Speed and Distance models motion kinetics, governing relations between speeds, transit times, and relative velocity.",
        formulas: [
            { name: "Speed Equation", formula: "Speed = Distance / Time" },
            { name: "Unit Conversions", formula: "1 km/h = 5/18 m/s, 1 m/s = 18/5 km/h" },
            { name: "Relative Speed (Opposite)", formula: "S_rel = S1 + S2" },
            { name: "Relative Speed (Same Dir)", formula: "S_rel = S1 - S2" },
            { name: "Train Crossing Platform", formula: "Distance = Length of Train + Length of Platform" }
        ],
        tricks: [
            "Relative speed: In opposite directions, ADD speeds; in same direction, SUBTRACT speeds.",
            "When a train crosses a bridge or platform, total distance is Train Length + Platform Length."
        ],
        mistakes: "Forgetting to convert km/h to m/s when dealing with train lengths in meters and seconds.",
        varieties: [
            { type: 1, title: "Type 1: Train Crossing Stationary Objects", desc: "Compute crossing seconds for trains passing poles, signals, or standing observers." },
            { type: 2, title: "Type 2: Train Crossing Platforms & Bridges", desc: "Calculate transit times when crossing extended physical infrastructure." },
            { type: 3, title: "Type 3: Opposing Bodies Meeting Timelines", desc: "Find intersection times for vehicles traveling toward each other from opposite towns." },
            { type: 4, title: "Type 4: Parallel Trains Overtaking in Same Direction", desc: "Compute overtaking seconds for two trains moving along parallel tracks." },
            { type: 5, title: "Type 5: Speed Acceleration & Time Saved Offsets", desc: "Determine minutes saved over fixed routes when traveling at elevated velocities." },
            { type: 6, title: "Type 6: Metric & Imperial Velocity Unit Conversions", desc: "Convert velocities between km/h and m/s using standard 5/18 multipliers." }
        ]
    },

    speed_distance: {
        intro: "Kinetics modeling focusing on advanced motion challenges like circular tracks, relative sweeps, races, and river currents.",
        formulas: [
            { name: "Upstream Speed", formula: "U = Boat - Stream" },
            { name: "Downstream Speed", formula: "D = Boat + Stream" },
            { name: "Boat in Still Water", formula: "Boat = (D + U) / 2" },
            { name: "Speed of Current", formula: "Stream = (D - U) / 2" },
            { name: "Circular Track Meeting", formula: "Time = Track Length / (S1 + S2) (Opposite directions)" }
        ],
        tricks: [
            "Still water speed is the average of downstream and upstream velocities: (D + U) / 2.",
            "Current speed is half the difference: (D - U) / 2."
        ],
        mistakes: "Assuming upstream speed is Stream - Boat (which would cause the boat to drift backwards).",
        varieties: [
            { type: 1, title: "Type 1: Upstream & Downstream River Navigation", desc: "Calculate transit times against river currents using U = Boat - Stream." },
            { type: 2, title: "Type 2: Still Water Boat Velocity Determination", desc: "Extract still water boat speeds from given upstream and downstream vectors." },
            { type: 3, title: "Type 3: River Current Flow Rate Calculation", desc: "Determine stream flow velocity using half the difference of downstream and upstream." },
            { type: 4, title: "Type 4: Circular Track First Intersection Timelines", desc: "Find meeting times for athletes running in opposite directions around circular tracks." },
            { type: 5, title: "Type 5: Police & Thief Relative Chase Capture", desc: "Calculate capture seconds for pursuit chases with initial distance leads." },
            { type: 6, title: "Type 6: Round-Trip River Navigation Total Duration", desc: "Sum upstream and downstream legs to compute total journey duration." }
        ]
    },

    probability: {
        intro: "Probability quantifies occurrences likelihoods, ranging from absolute impossibility (0) to absolute certainty (1).",
        formulas: [
            { name: "Basic Probability", formula: "P(E) = Favorable Outcomes / Total Sample Space" },
            { name: "Complementary Event", formula: "P(At least 1) = 1 - P(None)" },
            { name: "Two Dice Sample Space", formula: "Total outcomes = 36" },
            { name: "Addition Theorem", formula: "P(A U B) = P(A) + P(B) - P(A n B)" },
            { name: "Contradiction Probability", formula: "P(Contradict) = P(A)*P(B') + P(A')*P(B)" }
        ],
        tricks: [
            "P(At least 1 success) = 1 - P(No successes). This is almost always faster to calculate.",
            "Leap year has 2 odd days -> P(53 of any day) = 2/7. Non-leap year has 1 odd day -> 1/7."
        ],
        mistakes: "Confusing mutually exclusive events [P(A n B) = 0] with independent events [P(A n B) = P(A)*P(B)].",
        varieties: [
            { type: 1, title: "Type 1: Urn & Colored Marbles Drawing (Without Replacement)", desc: "Compute probability of sequential draws without replacing items in urns." },
            { type: 2, title: "Type 2: Dual Dice Score Sum Combinations", desc: "Calculate probabilities of target sums when rolling two 6-sided dice." },
            { type: 3, title: "Type 3: Deck of Cards Suit & Rank Unions", desc: "Apply addition theorem for non-mutually exclusive card selections." },
            { type: 4, title: "Type 4: Truth & Contradiction Statements", desc: "Determine contradiction percentages between two speakers with known truthfulness." },
            { type: 5, title: "Type 5: Calendar & Leap Year Weekday Probabilities", desc: "Calculate probability of 53 Sundays in leap and non-leap calendar years." },
            { type: 6, title: "Type 6: Complementary 'At Least One' Defective Events", desc: "Use complementary probability 1 - P(none) to solve multi-draw selection problems." }
        ]
    },

    permutation_combination: {
        intro: "Permutation tracks item ordering configurations where placement matters, whereas Combination aggregates groupings where order is irrelevant.",
        formulas: [
            { name: "Permutation Formula", formula: "nPr = n! / (n - r)!" },
            { name: "Combination Formula", formula: "nCr = n! / [r! * (n - r)!]" },
            { name: "Circular Permutation", formula: "P_circ = (n - 1)!" },
            { name: "Polygon Diagonals", formula: "Diagonals = n(n - 3) / 2" },
            { name: "Handshakes in Group", formula: "Handshakes = n(n - 1) / 2" },
            { name: "Gap Method", formula: "cons! * ^(cons+1)P_vowels" }
        ],
        tricks: [
            "Use String Method when items must be together (treat as 1 single unit).",
            "Use Gap Method when items must NOT be together (place in intermediate gaps)."
        ],
        mistakes: "Calculating permutations instead of combinations when team order does not matter.",
        varieties: [
            { type: 1, title: "Type 1: Committee & Team Selections (nCr)", desc: "Form representative panels and teams from candidate pools." },
            { type: 2, title: "Type 2: Distinct Word Letter Rearrangements (n!)", desc: "Calculate total linear anagram permutations from unique character strings." },
            { type: 3, title: "Type 3: Circular Table Seating Permutations", desc: "Arrange executive delegates around circular dining tables using (n-1)!." },
            { type: 4, title: "Type 4: Regular Polygon Diagonals Counting", desc: "Calculate diagonal counts in n-sided geometric polygons using n(n-3)/2." },
            { type: 5, title: "Type 5: Conference Handshakes & Pairwise Interactions", desc: "Determine total bilateral interactions among attendees using n(n-1)/2." },
            { type: 6, title: "Type 6: Gap Method with Neighbor Exclusions", desc: "Arrange letters with restrictions ensuring no two vowels sit adjacent." }
        ]
    },

    data_interpretation: {
        intro: "Data Interpretation translates chart diagrams (bar, pie, line, tables) into quantified business intelligence ratios and metrics.",
        formulas: [
            { name: "Percentage Share", formula: "Share% = (Component / Total) * 100" },
            { name: "Annual Growth Rate", formula: "Growth% = [(Year2 - Year1) / Year1] * 100" },
            { name: "Pie Chart Angle to %", formula: "Percent = (Angle / 360) * 100" },
            { name: "Component Ratio", formula: "Ratio = Value A / Value B" }
        ],
        tricks: [
            "Look at chart legends and scales first. Approximate fractions: 16.6% ≈ 1/6, 14.3% ≈ 1/7.",
            "Cross-multiply to compare ratios without performing full division."
        ],
        mistakes: "Misinterpreting graph axis scale offsets (e.g. values in thousands vs actual values).",
        varieties: [
            { type: 1, title: "Type 1: Departmental Expenditure Percentage Share", desc: "Compute proportional budget allocations across corporate divisions." },
            { type: 2, title: "Type 2: Multi-Category Expenditure Ratio Analysis", desc: "Simplify financial expenditure comparisons into irreducible integer ratios." },
            { type: 3, title: "Type 3: Multi-Department Average Spending Metrics", desc: "Calculate central mean expenditure across multiple functional divisions." },
            { type: 4, title: "Type 4: Year-over-Year Revenue Growth Percentages", desc: "Evaluate corporate annual revenue growth rates from historical figures." },
            { type: 5, title: "Type 5: Pie Chart Sector Angle to Value Conversions", desc: "Convert central angular sector degrees into market share percentages." },
            { type: 6, title: "Type 6: Tabular Data Extrapolation & Population Estimation", desc: "Deduce total sample populations from sub-group percentage shares." }
        ]
    },

    simplification: {
        intro: "Simplification utilizes arithmetic order precedence guidelines (VBODMAS) to reduce heavy arithmetic and exponents into single values quickly.",
        formulas: [
            { name: "VBODMAS Order", formula: "Vinculum, Brackets, Of, Division, Multiplication, Addition, Subtraction" },
            { name: "Algebraic Identity", formula: "(a + b)^2 - (a - b)^2 = 4ab" },
            { name: "Laws of Indices", formula: "(a^m)^n = a^(m*n), a^m * a^n = a^(m+n)" },
            { name: "Difference of Squares", formula: "a^2 - b^2 = (a - b)(a + b)" }
        ],
        tricks: [
            "Apply digital sum rules (casting out nines) or unit-digit analysis to test options instantly.",
            "Round decimal numbers to nearby integers to eliminate wrong choices rapidly."
        ],
        mistakes: "Performing addition or multiplication before division in violation of VBODMAS.",
        varieties: [
            { type: 1, title: "Type 1: Laws of Indices & Fractional Exponents", desc: "Simplify nested exponential expressions using index addition and power multiplication." },
            { type: 2, title: "Type 2: VBODMAS Operator Precedence Evaluation", desc: "Solve multi-operation arithmetic expressions following strict operational precedence." },
            { type: 3, title: "Type 3: Algebraic Identity Reductions", desc: "Reduce complex quadratic fractions using (a+b)^2 - (a-b)^2 = 4ab." },
            { type: 4, title: "Type 4: Square Roots & Surds Simplification", desc: "Evaluate composite radical expressions containing perfect squares." },
            { type: 5, title: "Type 5: Fractional Additions & LCM Denominators", desc: "Reduce fraction additions to simplest irreducible forms." },
            { type: 6, title: "Type 6: Mixed Operator Arithmetic Expressions", desc: "Evaluate multi-term polynomial arithmetic equations." }
        ]
    },

    algebra: {
        intro: "Algebra covers equations, variables, roots representations, and logarithmic rules.",
        formulas: [
            { name: "Quadratic Roots Sum & Prod", formula: "Sum = -b/a, Product = c/a" },
            { name: "AP nth Term & Sum", formula: "T_n = a + (n-1)d, S_n = (n/2)[2a + (n-1)d]" },
            { name: "Infinite GP Sum", formula: "S_inf = a / (1 - r) for |r| < 1" },
            { name: "Logarithm Properties", formula: "log(xy) = log(x) + log(y), log(x/y) = log(x) - log(y)" }
        ],
        tricks: [
            "Plug test values (0, 1, or -1) into algebraic options to eliminate incorrect choices.",
            "Backsolve by plugging options directly into the system of equations."
        ],
        mistakes: "Forgetting that square roots yield both positive and negative roots in quadratic systems.",
        varieties: [
            { type: 1, title: "Type 1: Sum of Roots in Quadratic Equations", desc: "Extract root sums from standard form quadratic equations using -b/a." },
            { type: 2, title: "Type 2: Product of Roots in Quadratic Equations", desc: "Find product of roots using constant term ratio c/a." },
            { type: 3, title: "Type 3: Arithmetic Progression nth Term Evaluation", desc: "Calculate distant sequence terms in constant difference progressions." },
            { type: 4, title: "Type 4: Infinite Geometric Progression Convergence", desc: "Determine infinite geometric series sums using a / (1 - r)." },
            { type: 5, title: "Type 5: Simultaneous Linear Systems in Two Variables", desc: "Solve two-variable linear equations using substitution and elimination." },
            { type: 6, title: "Type 6: Logarithmic Identity Expansions", desc: "Evaluate composite logarithmic values using base 10 properties." }
        ]
    },

    geometry: {
        intro: "Geometry analyzes shapes properties: coordinate layouts, lines, angles, triangles, polygons, circles, and perimeter/area metrics.",
        formulas: [
            { name: "Circle Circumference & Area", formula: "C = 2 * pi * r, Area = pi * r^2" },
            { name: "Rectangle Diagonal", formula: "d = sqrt(L^2 + W^2)" },
            { name: "Polygon Angle Sum", formula: "Sum = (n - 2) * 180 degrees" },
            { name: "Cylinder Volume", formula: "V = pi * r^2 * h" },
            { name: "Equilateral Triangle Area", formula: "Area = (sqrt(3)/4) * a^2" }
        ],
        tricks: [
            "Memorize standard Pythagorean Triplets: 3-4-5, 5-12-13, 8-15-17, 7-24-25.",
            "Sum of exterior angles of any convex polygon is always 360 degrees."
        ],
        mistakes: "Confusing similarity rules (ratio of areas = square of ratio of sides) with simple side ratios.",
        varieties: [
            { type: 1, title: "Type 1: Radial Scaling & Percentage Area Changes", desc: "Calculate percentage area expansion of 2D shapes when radii increase." },
            { type: 2, title: "Type 2: Circle Radius, Perimeter & Circumference", desc: "Compute perimeters of circular disks using 2*pi*r." },
            { type: 3, title: "Type 3: Rectangular Diagonals & Pythagorean Hypotenuse", desc: "Find corner-to-corner diagonal distances in rectangular planes." },
            { type: 4, title: "Type 4: Convex Polygon Interior Angle Sums", desc: "Calculate total interior degrees in n-sided regular polygons." },
            { type: 5, title: "Type 5: 3D Mensuration & Cylindrical Volume", desc: "Compute 3D solid volumes using base area and height." },
            { type: 6, title: "Type 6: Equilateral Triangle Surface Area", desc: "Calculate equilateral triangle area using (sqrt(3)/4)*a^2." }
        ]
    },

    /* ---------------- REASONING TOPICS ---------------- */
    puzzles: {
        intro: "Logical puzzles challenge deductive reasoning, grid matching, variable relationships, and exclusion constraints.",
        formulas: [
            { name: "Inequality Chaining", formula: "If A > B and B > C, then A > C" },
            { name: "Grid Allocation", formula: "Ensure 1-to-1 matching across rows and columns" },
            { name: "Floor & Box Stacking", formula: "Anchor definite positions before filling relative gaps" }
        ],
        tricks: [
            "Construct a grid diagram (e.g. Name, Profession, Department) and check off absolute exclusions first.",
            "Anchor elements with the highest constraint frequency first."
        ],
        mistakes: "Making assumptions not explicitly stated in the puzzle rules.",
        varieties: [
            { type: 1, title: "Type 1: Height & Weight Inequality Rankings", desc: "Determine extreme ranking positions by chaining relational inequalities." },
            { type: 2, title: "Type 2: Department & Profession Attribute Grid Matching", desc: "Allocate unique professions across individuals using elimination grids." },
            { type: 3, title: "Type 3: Vertical Box Stacking & Placement Ordering", desc: "Determine central box positions in multi-tier vertical stacks." },
            { type: 4, title: "Type 4: Multi-Story Building Floor Allocation", desc: "Place residents on specific building floors based on parity and adjacency constraints." },
            { type: 5, title: "Type 5: Chronological Day-of-Week Scheduling", desc: "Schedule events across weekdays adhering to precedence rules." },
            { type: 6, title: "Type 6: Linear Ordering & Comparative Adjacency", desc: "Identify central positions in comparative linear sequences." }
        ]
    },

    seating_arrangement: {
        intro: "Seating Arrangements deal with ordering constraints along lines or around circles.",
        formulas: [
            { name: "Circular Facing Center", formula: "Right turn = Counter-clockwise, Left turn = Clockwise" },
            { name: "Circular Facing Outward", formula: "Right turn = Clockwise, Left turn = Counter-clockwise" },
            { name: "Linear Facing North", formula: "Left = West, Right = East" },
            { name: "Linear Facing South", formula: "Left = East, Right = West" }
        ],
        tricks: [
            "For circular arrangements, draw a circle with numbered spokes to visualize opposite seats.",
            "Start with definite positions ('A sits 3rd to right of B') before placing relative positions."
        ],
        mistakes: "Forgetting to invert Left/Right conventions when candidates face outward.",
        varieties: [
            { type: 1, title: "Type 1: Circular Arrangement Facing Inward", desc: "Determine opposite seats and neighbor positions in center-facing rings." },
            { type: 2, title: "Type 2: Circular Arrangement Facing Outward", desc: "Apply inverted left/right directional conventions in outward-facing circles." },
            { type: 3, title: "Type 3: Linear Row Seating Facing North", desc: "Place individuals in linear arrays using standard West-to-East left/right orientations." },
            { type: 4, title: "Type 4: Linear Row Seating Facing South", desc: "Apply mirrored left/right orientations for South-facing rows." },
            { type: 5, title: "Type 5: Parallel Dual-Row Opposite Seating", desc: "Map opposite facing partners across parallel North-South facing rows." },
            { type: 6, title: "Type 6: Square & Rectangular Table Corner Layouts", desc: "Determine side and corner opposite positions in polygonal tables." }
        ]
    },

    blood_relations: {
        intro: "Blood Relations parse family relationships across generations using family trees and relationship codes.",
        formulas: [
            { name: "Generation Hierarchy", formula: "Grandparents -> Parents/Uncles -> Self/Siblings -> Children" },
            { name: "Coded Relations", formula: "Evaluate relationship strings from right to left" }
        ],
        tricks: [
            "Draw a family tree: use '+' for male, '-' for female, '=' for married couples, and vertical lines for children.",
            "Solve coded strings from right to left to track generational shifts."
        ],
        mistakes: "Assuming gender based on name alone without context clues in the problem.",
        varieties: [
            { type: 1, title: "Type 1: Portrait & Person Identification Riddles", desc: "Deduce relationships from descriptive statements ('father of my son...')." },
            { type: 2, title: "Type 2: Coded Symbolic Family Relations", desc: "Evaluate relationship operator expressions (A + B * C)." },
            { type: 3, title: "Type 3: Multi-Generation Ancestral Lineage", desc: "Trace paternal and maternal grandparent lineages across family trees." },
            { type: 4, title: "Type 4: In-Law & Extended Family Relations", desc: "Resolve mother-in-law and sibling-in-law relationship chains." },
            { type: 5, title: "Type 5: Multi-Tier Descendant Trees", desc: "Determine grandson and nephew relations from generational descriptors." },
            { type: 6, title: "Type 6: Family Headcount & Sibling Riddles", desc: "Calculate total family membership counts from shared sibling relationships." }
        ]
    },

    coding_decoding: {
        intro: "Coding and Decoding maps text shifts, substitutions, opposite characters, and reverse alphabetic configurations.",
        formulas: [
            { name: "Alphabet Forward Rank", formula: "A=1, B=2 ... Z=26 (EJOTY: 5, 10, 15, 20, 25)" },
            { name: "Opposite Pair Index", formula: "Forward Rank + Backward Rank = 27 (A-Z, B-Y)" },
            { name: "Caesar Shift", formula: "C_i = (P_i + k) mod 26" }
        ],
        tricks: [
            "Memorize the EJOTY mnemonic for rapid letter position lookups.",
            "Check for reverse coding or opposite-letter pairs before testing shift offsets."
        ],
        mistakes: "Forgetting to wrap around the alphabet from Z to A during forward shifts.",
        varieties: [
            { type: 1, title: "Type 1: Forward Alphabetical Shift Ciphers", desc: "Encode words by shifting letter ranks forward by constant integers (+k)." },
            { type: 2, title: "Type 2: Reverse Word & Letter Reordering Ciphers", desc: "Decipher words whose letters are inverted in reverse order." },
            { type: 3, title: "Type 3: Complementary Opposite-Letter Pair Ciphers", desc: "Encode text using 27-sum opposite alphabet pairs (A-Z, B-Y)." },
            { type: 4, title: "Type 4: Positional Numerical Rank Mapping", desc: "Convert words to hyphenated numerical rank sequences." },
            { type: 5, title: "Type 5: Common Word Deciphering from Message Codes", desc: "Isolate unique word codes by comparing overlapping coded sentences." },
            { type: 6, title: "Type 6: Direct Single-Shift Caesar Cipher Encryption", desc: "Apply +1 linear character shifts across target words." }
        ]
    },

    syllogism: {
        intro: "Syllogisms verify deductive arguments validity using Venn Diagrams, checking subset/superset overlays and possibilities.",
        formulas: [
            { name: "ALL A are B", formula: "Set A is a subset of Set B (A subset of B)" },
            { name: "SOME A are B", formula: "Intersection of A and B is non-empty" },
            { name: "NO A is B", formula: "Intersection of A and B is empty" },
            { name: "Possibility Rule", formula: "Holds if true in at least one valid Venn diagram" }
        ],
        tricks: [
            "Draw minimal overlap Venn diagrams. A conclusion is valid ONLY if it holds in ALL valid diagrams.",
            "Possibility conclusions only need ONE valid diagram to be true."
        ],
        mistakes: "Assuming a possibility is invalid because it is not an absolute certainty.",
        varieties: [
            { type: 1, title: "Type 1: Standard Universal & Particular Deductions", desc: "Evaluate 'All A are B' and 'Some B are C' categorical propositions." },
            { type: 2, title: "Type 2: Negative Premise Subsets ('No A is B')", desc: "Determine valid subset inclusions with negative categorical premises." },
            { type: 3, title: "Type 3: Possibility & Modal Proposition Verification", desc: "Test possibility conclusions ('can be', 'is a possibility') across diagrams." },
            { type: 4, title: "Type 4: Definite True Overlaps vs Contradictions", desc: "Differentiate definite conclusions from contradictory statements." },
            { type: 5, title: "Type 5: Transitive Double-Universal Inclusions", desc: "Verify transitive subset conclusions from chained 'All A are B' premises." },
            { type: 6, title: "Type 6: Negative Particular Deductions ('Some are not')", desc: "Identify valid negative particular conclusions from disjoint premises." }
        ]
    },

    direction_sense: {
        intro: "Direction Sense maps spatial orientations, angular turns, shadow properties, and shortest path coordinates.",
        formulas: [
            { name: "Pythagoras Shortest Path", formula: "Displacement = sqrt(East_West^2 + North_South^2)" },
            { name: "Sunrise Shadow", formula: "Sun is in East -> Shadow falls to the West" },
            { name: "Sunset Shadow", formula: "Sun is in West -> Shadow falls to the East" },
            { name: "Right Turn from North", formula: "Points East (Clockwise 90 degrees)" }
        ],
        tricks: [
            "Draw a compass rose on your scratch sheet before solving multi-turn paths.",
            "At sunrise, all shadows point West. At sunset, all shadows point East."
        ],
        mistakes: "Confusing left/right turns when walking towards the South.",
        varieties: [
            { type: 1, title: "Type 1: Shortest Path Displacement via Pythagoras", desc: "Calculate straight-line hypotenuse distance from initial starting points." },
            { type: 2, title: "Type 2: Net Cardinal Direction from Starting Point", desc: "Determine compass direction relative to origin after multiple orthogonal turns." },
            { type: 3, title: "Type 3: Morning Sunrise Shadow Orientation", desc: "Determine facing orientation from shadows cast to left or right at sunrise." },
            { type: 4, title: "Type 4: Evening Sunset Shadow Orientation", desc: "Deduce facing direction from shadow orientations at sunset." },
            { type: 5, title: "Type 5: Angular Clockwise & Anti-Clockwise Rotations", desc: "Compute net facing direction from sequential degree rotations." },
            { type: 6, title: "Type 6: Complete Coordinate Backtracking", desc: "Determine total distance and cardinal heading back to initial point." }
        ]
    },

    statement_conclusion: {
        intro: "Statement and Conclusion tests logical deductions based strictly on the provided context, filtering out external assumptions.",
        formulas: [
            { name: "Strict Scope Rule", formula: "Restrict logic strictly to facts explicitly mentioned in statement" },
            { name: "Extreme Words Filter", formula: "Conclusions with 'all', 'always', 'only', 'never' are usually invalid" }
        ],
        tricks: [
            "Do not apply external real-world knowledge. Treat the statement as 100% true.",
            "Watch out for extreme absolute words ('guarantees', 'only', 'never')."
        ],
        mistakes: "Marking a conclusion as valid because it is a true general fact, even though it cannot be derived from the statement.",
        varieties: [
            { type: 1, title: "Type 1: Health & Medical Cause-Effect Inferences", desc: "Verify health recommendations without accepting extreme universal claims." },
            { type: 2, title: "Type 2: Technology & Scientific Feature Deductions", desc: "Extract direct product capabilities while filtering outside assumptions." },
            { type: 3, title: "Type 3: Environmental & Ergonomic Inferences", desc: "Deduce logical lifestyle remedies from cause-effect environmental statements." },
            { type: 4, title: "Type 4: Economic Growth & Investment Deductions", desc: "Evaluate policy impact statements while filtering 'only sector' traps." },
            { type: 5, title: "Type 5: Educational & Assessment Inferences", desc: "Differentiate probable benefits from guaranteed examination outcomes." },
            { type: 6, title: "Type 6: Civic & Municipal Policy Objectives", desc: "Identify valid civic objectives behind governmental regulations." }
        ]
    },

    series: {
        intro: "Number and Letter Series trace chronological trends (APs, GPs, prime rules, squares/cubes) across discrete terms.",
        formulas: [
            { name: "Arithmetic Series", formula: "T_n = T_(n-1) + d" },
            { name: "Geometric Series", formula: "T_n = T_(n-1) * r" },
            { name: "Square + Constant", formula: "T_n = n^2 + k" },
            { name: "Fibonacci Series", formula: "T_n = T_(n-1) + T_(n-2)" }
        ],
        tricks: [
            "Calculate differences between consecutive terms first. If differences grow, check second differences.",
            "Look for alternating series (two patterns merged at odd/even positions) if terms go up and down."
        ],
        mistakes: "Assuming simple addition without checking if geometric multiplication or prime sequence rules apply.",
        varieties: [
            { type: 1, title: "Type 1: Constant Common Difference Arithmetic Series", desc: "Identify missing terms in linear addition sequence progressions." },
            { type: 2, title: "Type 2: Geometric & Exponential Growth Multipliers", desc: "Find missing terms in multiplicative geometric progressions." },
            { type: 3, title: "Type 3: Quadratic Squares & Offset Sequences (n^2 + k)", desc: "Discover next numbers in square-based polynomial series." },
            { type: 4, title: "Type 4: Interleaved Dual Alternating Series", desc: "Solve interleaved sequences combining two independent alternating patterns." },
            { type: 5, title: "Type 5: Progressive Alphabetical Letter Sequences", desc: "Determine next alphabet letters in expanding rank progression series." },
            { type: 6, title: "Type 6: Fibonacci Consecutive Sum Progressions", desc: "Solve terms where each element is the sum of the two preceding numbers." }
        ]
    },

    analogy: {
        intro: "Analogies identify semantic, mathematical, physical, or structural correlations between sets of items.",
        formulas: [
            { name: "Semantic Pair", formula: "Synonym : Synonym or Antonym : Antonym" },
            { name: "Worker to Tool", formula: "Professional : Primary Instrument" },
            { name: "Numerical Analogy", formula: "x : x^2 or x : x^3" }
        ],
        tricks: [
            "Formulate the first pair into a complete sentence ('A Carpenter uses a Saw to cut'). Apply the exact sentence to the second pair.",
            "In numbers, test squares and cubes (x : x^2 + 1) before testing differences."
        ],
        mistakes: "Choosing options with weak superficial associations instead of matching the exact functional relationship.",
        varieties: [
            { type: 1, title: "Type 1: Semantic Antonym & Synonym Word Pairs", desc: "Match vocabulary opposites and synonyms across analogical pairs." },
            { type: 2, title: "Type 2: Craftsman & Professional Tool Analogies", desc: "Map artisans to their primary instruments of trade." },
            { type: 3, title: "Type 3: Mathematical Numerical Exponent Relations", desc: "Solve mathematical analogies based on squaring and cubing transformations." },
            { type: 4, title: "Type 4: Scientific Measuring Instruments & Units", desc: "Link scientific devices (barometer, odometer) to measured physical quantities." },
            { type: 5, title: "Type 5: Geopolitical National Capitals & Geography", desc: "Match world capital cities with their sovereign nations." },
            { type: 6, title: "Type 6: Part-to-Whole & Component Hierarchies", desc: "Map constituent elements to their parent structures (petal to flower)." }
        ]
    },

    non_verbal: {
        intro: "Non-verbal reasoning tests visual-spatial cognition: mirror images, water reflections, paper folding, embedded shapes, and series.",
        formulas: [
            { name: "Mirror Image (Vertical)", formula: "Lateral inversion: Left becomes Right, Right becomes Left" },
            { name: "Water Image (Horizontal)", formula: "Vertical inversion: Top becomes Bottom, Bottom becomes Top" },
            { name: "Angular Step Series", formula: "Track clockwise / anti-clockwise rotation degrees" }
        ],
        tricks: [
            "In mirror images, the rightmost element becomes the leftmost element in the reflection.",
            "Letters with horizontal symmetry (H, I, O, X, C, D, E) retain their shape in water images."
        ],
        mistakes: "Confusing mirror images (lateral flip) with water images (vertical upside-down flip).",
        varieties: [
            { type: 1, title: "Type 1: Vertical Plane Mirror Image Reflections", desc: "Determine laterally inverted reflections of alphanumeric strings." },
            { type: 2, title: "Type 2: Horizontal Water Image Inversions", desc: "Identify vertically inverted reflections retaining horizontal symmetry." },
            { type: 3, title: "Type 3: Transparent Paper Sheet Folding Overlays", desc: "Visualize superimposed shapes when folding transparent patterned sheets." },
            { type: 4, title: "Type 4: 2D Matrix Dual Transformation Completion", desc: "Complete 3x3 pattern matrices combining row count and column rotation rules." },
            { type: 5, title: "Type 5: Geometric Arrow Angular Series Rotations", desc: "Predict the next orientation in 45-degree rotating geometric series." },
            { type: 6, title: "Type 6: Embedded Figure & Wireframe Detection", desc: "Detect hidden unrotated target shapes within composite diagrams." }
        ]
    },

    /* ---------------- VERBAL TOPICS ---------------- */
    grammar: {
        intro: "Grammar rules govern syntax structures: subject-verb agreements, modifiers, pronoun categories, and tense alignments.",
        formulas: [
            { name: "Subject-Verb Agreement", formula: "Singular subject -> singular verb; plural -> plural" },
            { name: "Third Conditional", formula: "If + had + V3 ..., would have + V3" },
            { name: "Relative Pronouns", formula: "Who for subject (doing action); Whom for object (receiving action)" },
            { name: "Parallelism", formula: "Maintain identical grammatical form across coordinate lists" }
        ],
        tricks: [
            "Ignore intervening prepositional phrases between subject and verb to verify agreement.",
            "'Neither of' + plural noun always takes a SINGULAR verb ('was', 'is', 'has')."
        ],
        mistakes: "Using 'would have' inside the 'if'-clause of conditional sentences.",
        varieties: [
            { type: 1, title: "Type 1: Subject-Verb Concord & Distributive Pronouns", desc: "Select correct verb forms following 'neither of' and collective subjects." },
            { type: 2, title: "Type 2: Conditional Sentence Tense Harmony", desc: "Apply third conditional rules (If + had + V3 ..., would have + V3)." },
            { type: 3, title: "Type 3: Relative Pronoun Case Disambiguation (Who vs Whom)", desc: "Differentiate nominative subject 'who' from objective 'whom'." },
            { type: 4, title: "Type 4: Prepositional Collocations & Idiomatic Verb Pairs", desc: "Select correct preposition pairings with standard English verbs." },
            { type: 5, title: "Type 5: Parallel Grammatical Structures in Coordinate Lists", desc: "Maintain matching verb and gerund structures across series." },
            { type: 6, title: "Type 6: Active to Passive Voice Syntactic Transformations", desc: "Convert past simple passive sentences into concise active voice." }
        ]
    },

    vocabulary: {
        intro: "Vocabulary studies word definitions, roots, synonyms, antonyms, phrasal combinations, and usage contexts.",
        formulas: [
            { name: "Root Prefixes", formula: "'poly' = many, 'bene' = good, 'mal' = bad, 'ephemer' = transient" },
            { name: "Idiom Meaning", formula: "Decode non-literal figurative expressions" },
            { name: "Phrasal Verbs", formula: "Verb + preposition combinations (call off = cancel)" }
        ],
        tricks: [
            "Use word root mappings to approximate meanings of unfamiliar words.",
            "Determine the positive or negative tone of the sentence context before picking synonyms."
        ],
        mistakes: "Selecting a synonym when the question explicitly asked for an antonym.",
        varieties: [
            { type: 1, title: "Type 1: High-Frequency Placement Synonyms", desc: "Identify precise contextual synonyms for corporate vocabulary words." },
            { type: 2, title: "Type 2: Direct Contextual Antonyms", desc: "Select direct opposites for words like 'Candid' and 'Meticulous'." },
            { type: 3, title: "Type 3: Figurative Idiomatic Expressions", desc: "Interpret figurative meanings of idioms like 'burn the midnight oil'." },
            { type: 4, title: "Type 4: One-Word Substitutions & Etymology", desc: "Condense descriptive phrases into single root terms like 'Polyglot'." },
            { type: 5, title: "Type 5: Phrasal Verbs & Prepositional Combinations", desc: "Disambiguate verb-preposition phrases like 'call off' vs 'put off'." },
            { type: 6, title: "Type 6: Nuanced Vocabulary & Fleeting States", desc: "Match precise vocabulary terms like 'Ephemeral' and 'Transient'." }
        ]
    },

    reading_comprehension: {
        intro: "Reading Comprehension evaluates content processing, main idea identification, argument mapping, and tone deductions.",
        formulas: [
            { name: "Central Thesis", formula: "Look at introductory and concluding topic sentences" },
            { name: "Tone Identification", formula: "Objective, critical, laudatory, or analytical" },
            { name: "Inference Rule", formula: "Must be directly supported by passage evidence" }
        ],
        tricks: [
            "Read question prompts before reading the passage to scan for key terms effectively.",
            "Avoid options with absolute generalizations unless backed explicitly by text."
        ],
        mistakes: "Choosing choices that are factually true in real life but never mentioned in the text.",
        varieties: [
            { type: 1, title: "Type 1: Central Thesis & Main Idea Extraction", desc: "Extract balanced central arguments from technical and medical passages." },
            { type: 2, title: "Type 2: Direct Factual Detail Retrieval", desc: "Scan and locate specific statistics and cause-effect data points." },
            { type: 3, title: "Type 3: Author's Tone & Attitude Identification", desc: "Characterize authorial stance as objective, analytical, or polemical." },
            { type: 4, title: "Type 4: Supported Logical Inferences", desc: "Deduce implicit engineering trade-offs not explicitly stated." },
            { type: 5, title: "Type 5: Vocabulary in Context Definition", desc: "Define words like 'austere' as used in specific socioeconomic contexts." },
            { type: 6, title: "Type 6: Comprehensive Passage Title Selection", desc: "Choose optimal titles reflecting the full scope of passage themes." }
        ]
    },

    sentence_correction: {
        intro: "Sentence Correction evaluates sentence fragments, dangling modifiers, parallel structures, and word choice errors.",
        formulas: [
            { name: "Dangling Modifier Fix", formula: "Attach introductory modifier directly to the logical human actor" },
            { name: "Redundancy Rule", formula: "Delete duplicate words (revert back -> revert)" },
            { name: "Subjunctive Mood", formula: "Use 'were' for hypothetical conditions ('If I were you')" }
        ],
        tricks: [
            "Check for parallelism: ensure verbs, adjectives, and list elements match structure formats.",
            "Scan for redundancy (e.g. 'revert back' or 'repeat again' are redundant)."
        ],
        mistakes: "Leaving dangling modifiers that make inanimate objects perform human actions.",
        varieties: [
            { type: 1, title: "Type 1: Dangling & Misplaced Participial Modifiers", desc: "Reattach introductory participle clauses to the logical human subject." },
            { type: 2, title: "Type 2: Wordiness & Pleonastic Redundancy Elimination", desc: "Remove redundant repetitions like 'revert back' and 'repeat again'." },
            { type: 3, title: "Type 3: Correlative Conjunction Alignment (Not only... but also)", desc: "Maintain matching grammatical elements after both parts of conjunctions." },
            { type: 4, title: "Type 4: Singular Pronoun-Antecedent Concord", desc: "Enforce singular pronoun agreement with 'Every student'." },
            { type: 5, title: "Type 5: Hypothetical Subjunctive Mood ('If I were')", desc: "Use subjunctive 'were' in contrary-to-fact conditional clauses." },
            { type: 6, title: "Type 6: Comma Splice & Run-On Sentence Resolution", desc: "Connect independent clauses using semicolons and conjunctive adverbs." }
        ]
    },

    error_spotting: {
        intro: "Error Spotting challenges syntax verification: preposition rules, subject-verb agreements, tenses, and conjunctions.",
        formulas: [
            { name: "Subject-Verb Check", formula: "Verify singular/plural status of true subject" },
            { name: "One of the...", formula: "Always followed by plural noun ('One of the reasons')" },
            { name: "Latin Comparatives", formula: "Senior, Junior, Superior take 'to', never 'than'" },
            { name: "Uncountable Nouns", formula: "Advice, Information, Furniture have no plural 's'" }
        ],
        tricks: [
            "Check Subject-Verb agreement first. If correct, check pronoun agreement and prepositions.",
            "Latin comparatives (senior, junior, superior) take 'to', not 'than'."
        ],
        mistakes: "Overlooking uncountable noun errors (e.g. 'advices' is incorrect).",
        varieties: [
            { type: 1, title: "Type 1: Collective Noun Subject-Verb Discord", desc: "Spot verb number errors with collective subjects acting as a single unit." },
            { type: 2, title: "Type 2: 'One of the' Plural Noun Errors", desc: "Identify missing plural noun forms in 'One of the [plural noun]' structures." },
            { type: 3, title: "Type 3: Latin Comparative Preposition Errors ('Senior to')", desc: "Correct incorrect 'senior than' usage to 'senior to'." },
            { type: 4, title: "Type 4: Correlative Conjunction Pairings (Scarcely... when)", desc: "Identify conjunction mismatch errors like 'Scarcely had he... than'." },
            { type: 5, title: "Type 5: Uncountable Noun Pluralization Traps", desc: "Spot improper pluralization of uncountable nouns like 'advices'." },
            { type: 6, title: "Type 6: Redundant Preposition Usage ('Despite of')", desc: "Correct 'Despite of' errors (use 'Despite' or 'In spite of')." }
        ]
    },

    fill_blanks: {
        intro: "Fill in the Blanks tests vocabulary precision, context fits, conjunction indicators, and preposition pairings.",
        formulas: [
            { name: "Collocation", formula: "Select words that naturally pair together in standard English" },
            { name: "Conjunction Clue", formula: "'Although'/'However' indicate contrasting polarity between clauses" }
        ],
        tricks: [
            "Read sentences with blank spaces, guess simple words that fit naturally, then match options against your guess.",
            "Look for clue conjunctions ('although' = contrast, 'furthermore' = support)."
        ],
        mistakes: "Choosing words that fit grammatically but distort the logical meaning of the sentence.",
        varieties: [
            { type: 1, title: "Type 1: Single-Blank Contextual Clarity Vocabulary", desc: "Select precise vocabulary words like 'lucid' that resolve sentence ambiguities." },
            { type: 2, title: "Type 2: Double-Blank Contrast Conjunction Fillers", desc: "Balance opposing negative/positive polarities signaled by 'Although'." },
            { type: 3, title: "Type 3: Fixed Verb-Preposition Phrasal Collocations", desc: "Insert required prepositions like 'abstain from'." },
            { type: 4, title: "Type 4: Skillful Action Descriptors & Adjectives", desc: "Choose apt descriptive adjectives like 'deft' in executive contexts." },
            { type: 5, title: "Type 5: Logistics & Timeline Delay Vocabulary", desc: "Select precise project management terms like 'deferred'." },
            { type: 6, title: "Type 6: Character & Demeanor Contextual Fit", desc: "Match character adjectives like 'forthright' with honesty clues." }
        ]
    },

    para_jumbles: {
        intro: "Paragraph Jumbles evaluate paragraph coherence, acronym expansions, sentence connections, and chronological layouts.",
        formulas: [
            { name: "Opening Sentence", formula: "Introduces topic, contains no standalone relative pronouns" },
            { name: "Mandatory Pair", formula: "Link noun introduction to subsequent pronoun references" },
            { name: "Chronological Flow", formula: "Order events from historical origins to modern day" }
        ],
        tricks: [
            "Identify mandatory pairs (e.g. full name introduced before pronoun 'it' or 'they').",
            "Look for transition words ('therefore', 'consequently', 'today') to locate closing sentences."
        ],
        mistakes: "Reading sentences in isolation instead of looking for linking pronouns and transition words.",
        varieties: [
            { type: 1, title: "Type 1: Historical Chronological Evolution Paragraphs", desc: "Sequence events from ancient origins to modern worldwide consumption." },
            { type: 2, title: "Type 2: Technological Concept to Infrastructure Impact", desc: "Order general necessity claims, technical definitions, and investments." },
            { type: 3, title: "Type 3: Full Name to Acronym Pronoun Pairings", desc: "Link organization name introductions (WHO) to pronoun mandates." },
            { type: 4, title: "Type 4: Problem Statement to Advanced Solution Sequences", desc: "Structure problem escalations, legacy failures, and modern solutions." },
            { type: 5, title: "Type 5: Macro Economic & Startup Impact Flows", desc: "Order concept definitions, cost shifts, and resulting business innovations." },
            { type: 6, title: "Type 6: Data Science Pipeline & Optimization Benefits", desc: "Sequence preprocessing necessity, problem explanations, and model benefits." }
        ]
    }
};

// --- Dynamic Theory & Formula Sheet Aggregator ---
function loadTheoryContent(subject, topic) {
    const meta = MockDataGen.getTopicMetadata(subject, topic);
    const defaultData = {
        intro: `Comprehensive preparation and concepts review for ${meta.title}. Study core formulas, mental math shortcuts, and problem varieties before launching practice drills.`,
        formulas: [
            { name: "Fundamental Equation", formula: "Output = Input * Rate" },
            { name: "Average Metric", formula: "Average = Sum / Count" },
            { name: "Growth Rate", formula: "Growth% = ((New - Old) / Old) * 100" }
        ],
        tricks: [
            "Eliminate extreme outliers from option choices first.",
            "Backsolve by plugging options into the problem constraints directly."
        ],
        mistakes: "Rushing past question units conversions.",
        varieties: [
            { type: 1, title: `Type 1: ${meta.title} Standard Analysis`, desc: `Practice key problem types for ${meta.title.toLowerCase()}.` }
        ]
    };

    const data = TOPIC_DATABASE[topic] || defaultData;

    document.getElementById('theory-intro-txt').textContent = data.intro;
    
    const fGrid = document.getElementById('theory-formula-grid');
    fGrid.innerHTML = data.formulas.map(f => `
        <div class="formula-card glass-panel">
            <span class="formula-title">${f.name}</span>
            <span class="formula-expr">${f.formula}</span>
        </div>
    `).join('');

    const tList = document.getElementById('theory-tricks-list');
    tList.innerHTML = data.tricks.map(t => `
        <li style="margin-bottom: 0.8rem; display: flex; align-items: start; gap: 0.6rem;">
            <i class="fa-solid fa-lightbulb" style="color: var(--warning); margin-top: 0.2rem;"></i>
            <span>${t}</span>
        </li>
    `).join('');

    const mList = document.getElementById('theory-mistakes-list');
    mList.innerHTML = `
        <li style="display: flex; align-items: start; gap: 0.6rem;">
            <i class="fa-solid fa-triangle-exclamation" style="color: var(--danger); margin-top: 0.2rem;"></i>
            <span>${data.mistakes || "Units conversion error or calculation slips."}</span>
        </li>
    `;

    // Dynamic rendering of Question Varieties
    const varContainer = document.getElementById('theory-varieties-container');
    if (varContainer) {
        let varieties = data.varieties || [
            { type: 1, title: `Type 1: ${meta.title} Standard Analysis`, desc: `Practice key problem types for ${meta.title.toLowerCase()}.` }
        ];

        // Fetch questions for this topic to extract live examples
        const topicQuestions = (typeof MockDataGen !== 'undefined') ? MockDataGen.getQuestions(subject, topic, 30) : [];

        varContainer.innerHTML = `
            <div class="glass-panel" style="padding: 2rem; border-radius: var(--border-radius-lg); margin-bottom: 2rem;">
                <h3 style="font-size: 1.35rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.6rem; margin-bottom: 1.2rem; font-family: var(--font-heading);">
                    <i class="fa-solid fa-list-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Question Varieties & Patterns (${varieties.length} Types)
                </h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">
                    Placement tests evaluate ${varieties.length} distinct problem varieties from this chapter. Review each pattern with worked-out examples below, or click <strong>Practice</strong> to filter and test that exact pattern:
                </p>
                <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                    ${varieties.map(v => {
                        // Find example of this pattern type
                        const examples = topicQuestions.filter(q => (q.patternType || 1) === v.type).slice(0, 1);
                        let examplesHTML = '';

                        if (examples.length > 0) {
                            examplesHTML = `
                                <div style="margin-top: 1.2rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem;">
                                    <div style="font-size: 0.75rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem;">
                                        WORKED EXAMPLE & SOLUTION
                                    </div>
                                    ${examples.map(q => `
                                        <div>
                                            <div style="display: flex; align-items: start; gap: 0.6rem; margin-bottom: 0.6rem; color: var(--text-primary); font-weight: 600; font-size: 0.95rem;">
                                                <div style="width: 22px; height: 22px; border-radius: 50%; background: #3b82f6; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem;">
                                                    Q
                                                </div>
                                                <span>${q.text}</span>
                                            </div>
                                            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 0.9rem; border-radius: var(--border-radius-sm); margin-bottom: 0.6rem; color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; white-space: pre-line;">${q.solution}</div>
                                            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                                <div style="border-left: 3px solid #8b5cf6; background: rgba(255,255,255,0.01); padding: 0.5rem 0.8rem; border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; flex: 1; min-width: 180px;">
                                                    <div style="font-size: 0.68rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; margin-bottom: 0.1rem;">KEY FORMULA / RULE</div>
                                                    <div style="font-size: 0.82rem; color: var(--text-secondary);">${q.formula || 'Standard analytical principle applies.'}</div>
                                                </div>
                                                <div style="border-left: 3px solid var(--success); background: rgba(255,255,255,0.01); padding: 0.5rem 0.8rem; border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; width: 140px;">
                                                    <div style="font-size: 0.68rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; margin-bottom: 0.1rem;">CORRECT ANSWER</div>
                                                    <div style="font-size: 1rem; font-weight: 700; color: var(--success);">${q.answer}</div>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                        }

                        return `
                            <div class="glass-card pattern-variety-card" style="display: flex; flex-direction: column; gap: 0.8rem; padding: 1.4rem; border-left: 4px solid var(--primary);">
                                <div style="display: flex; justify-content: space-between; align-items: start; gap: 1.5rem;">
                                    <div style="flex: 1;">
                                        <h4 style="font-size: 1.08rem; color: var(--text-primary); margin: 0 0 0.3rem 0; font-family: var(--font-heading);">${v.title}</h4>
                                        <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.4; margin: 0;">${v.desc}</p>
                                    </div>
                                    <div>
                                        <button onclick="practiceSpecificPattern(${v.type}, '${topic}', '${subject}')" class="btn btn-primary btn-secondary" style="padding: 0.45rem 1.1rem; font-size: 0.8rem; white-space: nowrap; border-radius: 20px; display: inline-flex; align-items: center; gap: 0.4rem;">
                                            <i class="fa-solid fa-dumbbell"></i> Practice Type ${v.type}
                                        </button>
                                    </div>
                                </div>
                                ${examplesHTML}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
}

// Practice a specific pattern Type 1-6
function practiceSpecificPattern(patternType, topic, subject) {
    activePatternFilter = patternType;
    
    // Switch active state of tabs
    const tabTheory = document.getElementById('tab-theory');
    const tabPractice = document.getElementById('tab-practice');
    const panelTheory = document.getElementById('theory-panel');
    const panelPractice = document.getElementById('practice-panel');
    
    if (tabTheory && tabPractice && panelTheory && panelPractice) {
        tabTheory.classList.remove('active');
        tabPractice.classList.add('active');
        panelTheory.style.display = 'none';
        panelPractice.style.display = 'block';
        
        // Re-trigger 3D flip panel animation
        panelPractice.classList.remove('flip-panel-3d');
        void panelPractice.offsetWidth;
        panelPractice.classList.add('flip-panel-3d');
        
        // Setup practice session with filter
        setupPracticeSession(subject, topic);
        
        // Scroll to the workstation view
        document.getElementById('workstation-view').scrollIntoView({ behavior: 'smooth' });
    }
}
window.practiceSpecificPattern = practiceSpecificPattern;

// --- Practice Module Setup ---
function setupPracticeSession(subject, topic) {
    console.log("setupPracticeSession called for subject=" + subject + ", topic=" + topic);
    const rawQuestions = MockDataGen.getQuestions(subject, topic, 1000);
    console.log("setupPracticeSession rawQuestions count: " + rawQuestions.length);
    
    // Apply pattern type filter if active
    let activeQuestions = rawQuestions;
    const bannerContainer = document.getElementById('active-pattern-banner-container');
    
    if (activePatternFilter !== null && bannerContainer) {
        activeQuestions = rawQuestions.filter(q => (q.patternType || 1) === activePatternFilter);
        
        // Find pattern title from metadata or TOPIC_DATABASE
        const meta = MockDataGen.getTopicMetadata(subject, topic);
        let patternName = `Type ${activePatternFilter} Pattern`;
        const topicData = TOPIC_DATABASE[topic];
        if (topicData && topicData.varieties && topicData.varieties[activePatternFilter - 1]) {
            patternName = topicData.varieties[activePatternFilter - 1].title;
        } else {
            patternName = `Type ${activePatternFilter}: ${meta.title} Pattern`;
        }

        bannerContainer.innerHTML = `
            <div class="glass-panel" style="padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid var(--warning); background: hsla(45, 80%, 42%, 0.08); border-radius: var(--border-radius-sm); margin-bottom: 1.5rem; border: 1px solid rgba(255, 170, 0, 0.2);">
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <i class="fa-solid fa-filter" style="color: var(--warning); font-size: 1.1rem;"></i>
                    <div>
                        <span style="font-weight: 700; color: var(--warning); font-size: 0.9rem;">Practicing Specific Pattern:</span>
                        <span style="color: var(--text-primary); margin-left: 0.3rem; font-size: 0.9rem; font-weight: 500;">${patternName}</span>
                    </div>
                </div>
                <button onclick="clearPatternFilter('${subject}', '${topic}')" class="btn btn-primary btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.75rem; border-radius: 20px;">
                    <i class="fa-solid fa-arrow-rotate-left"></i> Reset Filter
                </button>
            </div>
        `;
    } else if (bannerContainer) {
        bannerContainer.innerHTML = '';
    }

    currentQuestions = activeQuestions;
    currentIndex = 0;

    // Reset difficulty pill active states to 'all' on setup
    const diffButtons = document.querySelectorAll('.diff-pill');
    diffButtons.forEach(b => {
        if (b.getAttribute('data-diff') === 'all') {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });

    diffButtons.forEach(btn => {
        btn.onclick = () => {
            const currentDiffButtons = document.querySelectorAll('.diff-pill');
            currentDiffButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selectedDiff = btn.getAttribute('data-diff');
            
            if (selectedDiff === 'all') {
                currentQuestions = activeQuestions;
            } else {
                currentQuestions = activeQuestions.filter(q => q.difficulty === selectedDiff);
                if (currentQuestions.length === 0) {
                    currentQuestions = MockDataGen.getQuestions(subject, topic, 50, selectedDiff);
                }
            }
            
            currentIndex = 0;
            if (currentQuestions.length > 0) {
                renderQuestion();
            } else {
                displayNoQuestions();
            }
        };
    });

    if (currentQuestions.length > 0) {
        renderQuestion();
    } else {
        displayNoQuestions();
    }
}

function clearPatternFilter(subject, topic) {
    activePatternFilter = null;
    setupPracticeSession(subject, topic);
}
window.clearPatternFilter = clearPatternFilter;

function displayNoQuestions() {
    console.log("displayNoQuestions called (no questions match filters).");
    const quizArea = document.getElementById('quiz-question-area');
    quizArea.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 3rem 1.5rem;">
            <i class="fa-solid fa-face-meh" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <h3>No questions available</h3>
            <p style="color: var(--text-secondary);">Try changing your difficulty filter selector or reset the pattern filter.</p>
        </div>
    `;
}

// --- Question Renderer ---
function renderQuestion() {
    console.log("renderQuestion called. currentQuestions length: " + currentQuestions.length + ", currentIndex: " + currentIndex);
    if (currentQuestions.length === 0) return;
    
    const q = currentQuestions[currentIndex];
    console.log("Rendering question ID: " + q.id);
    hasCheckedAnswer = false;
    selectedOptionIndex = null;
    currentQuestionTimer = 0;

    document.getElementById('solution-container').style.display = 'none';
    document.getElementById('btn-next-question').style.display = 'none';
    document.getElementById('btn-check-answer').style.display = 'inline-flex';
    document.getElementById('btn-check-answer').disabled = true;

    const qArea = document.getElementById('quiz-question-area');
    let diffBadge = `<span class="badge badge-${q.difficulty}">${q.difficulty}</span>`;
    
    const bookmarked = PlacementPrepState.isBookmarked(q.id);
    const bookmarkIcon = bookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark';
    const bookmarkColor = bookmarked ? 'color: var(--primary);' : '';

    qArea.innerHTML = `
        <div class="glass-card question-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>${diffBadge}</div>
                <button onclick="toggleQuestionBookmark('${q.id}')" style="font-size: 1.2rem; ${bookmarkColor}">
                    <i class="${bookmarkIcon}"></i>
                </button>
            </div>

            <div class="question-text">${q.text}</div>

            <div class="options-list">
                ${q.options.map((opt, index) => `
                    <button class="option-btn" onclick="selectOption(${index})">
                        <span class="option-index">${String.fromCharCode(65 + index)}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    startTimer();
}

// --- Option Selector ---
function selectOption(index) {
    if (hasCheckedAnswer) return;

    selectedOptionIndex = index;
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    document.getElementById('btn-check-answer').disabled = false;
}

// --- Bookmark Handler ---
function toggleQuestionBookmark(id) {
    const q = currentQuestions.find(item => item.id === id);
    if (!q) return;

    if (PlacementPrepState.isBookmarked(id)) {
        PlacementPrepState.removeBookmark(id);
    } else {
        PlacementPrepState.addBookmark(q);
    }
    renderQuestion();
}

// --- Answer Verification & Solutions ---
function checkCurrentAnswer() {
    if (selectedOptionIndex === null || hasCheckedAnswer) return;

    hasCheckedAnswer = true;
    stopTimer();

    const q = currentQuestions[currentIndex];
    const selectedText = q.options[selectedOptionIndex];
    const correctText = q.answer;
    const isCorrect = selectedText === correctText;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        const textVal = q.options[idx];
        if (textVal === correctText) {
            btn.classList.add('correct');
        } else if (idx === selectedOptionIndex) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });

    if (isCorrect) {
        practiceCorrectCount += 1;
        PlacementPrepState.dispatchToast('🎉 Correct Answer!', 'success');
    } else {
        practiceWrongCount += 1;
        PlacementPrepState.dispatchToast('❌ Incorrect. Let\'s review the solution.', 'danger');
    }
    practiceTotalTimeSeconds += currentQuestionTimer;

    // Save Solved stats
    PlacementPrepState.logSolvedQuestion(q.id, q.topic, q.subject, isCorrect, currentQuestionTimer);

    document.getElementById('sol-explanation').textContent = q.solution;
    document.getElementById('sol-formula').textContent = q.formula || "Standard formula rule.";
    document.getElementById('sol-shortcut').textContent = q.shortcut || "None required.";
    document.getElementById('sol-common-mistakes').textContent = q.commonMistakes || "Units conversion error or calculation slip.";

    document.getElementById('solution-container').style.display = 'block';
    document.getElementById('btn-check-answer').style.display = 'none';
    document.getElementById('btn-next-question').style.display = 'inline-flex';
}

function loadNextQuestion() {
    if (currentIndex + 1 < currentQuestions.length) {
        currentIndex += 1;
        renderQuestion();
    } else {
        stopTimer();
        const total = currentQuestions.length;
        const attempted = practiceCorrectCount + practiceWrongCount;
        const accuracy = attempted > 0 ? Math.round((practiceCorrectCount / attempted) * 100) : 0;

        if (typeof showScoreModal === 'function') {
            showScoreModal({
                title: "Practice Set Completed!",
                scoreCorrect: practiceCorrectCount,
                scoreWrong: practiceWrongCount,
                totalQuestions: total,
                accuracy: accuracy,
                timeSeconds: practiceTotalTimeSeconds,
                onRetry: () => {
                    currentIndex = 0;
                    practiceCorrectCount = 0;
                    practiceWrongCount = 0;
                    practiceTotalTimeSeconds = 0;
                    renderQuestion();
                },
                onClose: () => {
                    document.getElementById('solution-container').scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else {
            PlacementPrepState.dispatchToast('🎓 Practice set completed!', 'success');
        }
    }
}

// --- Question Timers ---
function startTimer() {
    stopTimer();
    currentQuestionTimer = 0;
    document.getElementById('timer-value').textContent = "00s";
    
    timerInterval = setInterval(() => {
        currentQuestionTimer += 1;
        const secs = currentQuestionTimer;
        document.getElementById('timer-value').textContent = secs < 60 ? `${secs}s` : `${Math.floor(secs/60)}m ${secs%60}s`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

window.selectOption = selectOption;
window.toggleQuestionBookmark = toggleQuestionBookmark;
window.checkCurrentAnswer = checkCurrentAnswer;
window.loadNextQuestion = loadNextQuestion;
