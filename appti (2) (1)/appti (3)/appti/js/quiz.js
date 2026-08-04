/* ==========================================================================
   QUIZ.JS - Workstation Tab Router & Practice engine (Simplified)
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

// --- Topic Hub Portal Render (No Progress Bars) ---
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


// --- Dynamic Theory & Formula Sheet Aggregator ---
function loadTheoryContent(subject, topic) {
    const database = {
        numbers: {
            intro: "Number systems cover classification of numbers (Natural, Whole, Integers, Even, Odd, Prime, Composite, Co-prime), divisibility guidelines, Arithmetic & Geometric Progression rules, and remainder cyclicity concepts.",
            formulas: [
                { name: "Geometric Progression (GP)", formula: "a, ar, ar^2, ar^3... where 'a' is first term and 'r' is common ratio" },
                { name: "GP: nth term", formula: "a_n = a * r^(n-1)" },
                { name: "GP: Sum of n terms (r < 1)", formula: "S_n = a(1 - r^n) / (1 - r)" },
                { name: "GP: Sum of n terms (r > 1)", formula: "S_n = a(r^n - 1) / (r - 1)" },
                { name: "Arithmetic Progression (AP)", formula: "a, a+d, a+2d, a+3d... where 'a' is first term and 'd' is common difference" },
                { name: "AP: nth term", formula: "a_n = a + (n - 1)d" },
                { name: "AP: Sum of n terms", formula: "S_n = (n / 2) * [2a + (n - 1)d]" },
                { name: "Sum of first n natural numbers", formula: "1 + 2 + ... + n = n(n + 1) / 2" },
                { name: "Sum of squares of natural numbers", formula: "1^2 + 2^2 + ... + n^2 = n(n + 1)(2n + 1) / 6" },
                { name: "Sum of cubes of natural numbers", formula: "1^3 + 2^3 + ... + n^3 = [n(n + 1) / 2]^2" },
                { name: "Basic Algebraic Identity 1", formula: "(a - b)^2 = a^2 + b^2 - 2ab" },
                { name: "Basic Algebraic Identity 2", formula: "(a + b)^2 = a^2 + b^2 + 2ab" },
                { name: "Basic Algebraic Identity 3", formula: "(a + b)(a - b) = a^2 - b^2" },
                { name: "Basic Algebraic Identity 4", formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" },
                { name: "Basic Algebraic Identity 5", formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)" },
                { name: "Basic Algebraic Identity 6", formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)" },
                { name: "Basic Algebraic Identity 7", formula: "a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ac)" }
            ],
            tricks: [
                "Divisibility by 2: Last digit is 0, 2, 4, 6, or 8.",
                "Divisibility by 3: Sum of all digits must be divisible by 3.",
                "Divisibility by 4: Number formed by last two digits is divisible by 4.",
                "Divisibility by 5: Units digit ends in 0 or 5.",
                "Divisibility by 6: Divisible by both 2 and 3.",
                "Divisibility by 11: |Sum(digits at even positions) - Sum(digits at odd positions)| is 0 or divisible by 11.",
                "Divisibility by 12: Divisible by both 3 and 4.",
                "Divisor rule: Dividend = (Divisor * Quotient) + Remainder.",
                "Co-primes: Two numbers are co-prime if their H.C.F. is 1.",
                "Sum of first n odd numbers = n^2.",
                "Sum of first n even numbers = n(n + 1).",
                "Odd numbers can be expressed as 2n + 1 where n is an integer."
            ],
            mistakes: "Correction warnings: 1) Odd numbers are expressed as 2n + 1, not 2(n + 1). 2) GP first term is 'a' and GP formulas depend on 'a' and ratio 'r'. 3) The difference algebraic expansion for cubic subtraction is: a^3 - b^3 = (a - b)(a^2 + ab + b^2).",
            varieties: [
                { type: 1, title: "Type 1: Find units digit of a number in the form of a<sup>b</sup>", desc: "Calculate the units digit of exponential bases or products using standard cyclicity patterns (cycles of 4 for 2, 3, 7, 8, etc.)." },
                { type: 2, title: "Type 2: Arithmetic and Geometric progression", desc: "Identify progression patterns, determine the number of terms, common ratio, and sum of finite geometric progressions." },
                { type: 3, title: "Type 3: Arithmetic Progression", desc: "Solve terms and sum series with constant difference intervals, natural number series, and quadratic relations." },
                { type: 4, title: "Type 4: Divisibility", desc: "Test divisibility properties for large integer values using prime factor rules (e.g. testing divisibility by 11 or 88)." },
                { type: 5, title: "Type 5: Operations on Integers", desc: "Determine value results of complex algebraic operations using identities such as a^2 - b^2, squares, or cubic forms." },
                { type: 6, title: "Type 6: Divisor and Remainder Transformations", desc: "Determine the resulting remainder when a number is divided by a new divisor c based on its initial remainder when divided by b." }
            ]
        },

        percentage: {
            intro: "Percentage represents ratios relative to 100 base, acting as the fundamental scaling factor in comparison metrics, compounding cycles, and algebraic equations.",
            formulas: [
                { name: "Percentage Value", formula: "Value = (Percent / 100) * Total" },
                { name: "Fraction conversion", formula: "Percentage = Fraction * 100" },
                { name: "Percentage Increase", formula: "New = Original * (1 + Rate / 100)" },
                { name: "Percentage Decrease", formula: "New = Original * (1 - Rate / 100)" },
                { name: "Net Consecutive Change", formula: "Net% = x + y + (x * y) / 100" },
                { name: "Relative Comparison (More)", formula: "If A is x% more than B, B is [x / (100 + x)] * 100% less than A" },
                { name: "Relative Comparison (Less)", formula: "If A is x% less than B, B is [x / (100 - x)] * 100% more than A" },
                { name: "Compound Population Growth", formula: "P_n = P_0 * (1 + R / 100)^n" },
                { name: "Compound Population Decay", formula: "P_n = P_0 * (1 - R / 100)^n" },
                { name: "Product Constancy Consumption", formula: "If Price increases by P%, Consumption must decrease by [P / (100 + P)] * 100%" }
            ],
            tricks: [
                "x% of y is equivalent to y% of x. (e.g. 16% of 50 is same as 50% of 16 = 8).",
                "Convert percentages to standard fractions: 12.5% = 1/8, 33.33% = 1/3, 16.66% = 1/6.",
                "If A is x% more than B, then B is [x / (100 + x)] * 100% less than A."
            ],
            mistakes: "Adding consecutive percentage changes linearly instead of compounding them sequentially."
        },
        profit_loss: {
            intro: "Profit and Loss analyzes financial transactions, markups, cost bases, margins, and consecutive discounts. Calculating percentage values using the correct base is critical.",
            formulas: [
                { name: "Profit Percentage", formula: "P% = (Profit / CP) * 100" },
                { name: "Loss Percentage", formula: "L% = (Loss / CP) * 100" },
                { name: "Selling Price (Profit)", formula: "SP = CP * (1 + P / 100)" },
                { name: "Selling Price (Loss)", formula: "SP = CP * (1 - L / 100)" },
                { name: "Discount Percentage", formula: "D% = (Discount / MP) * 100" },
                { name: "Selling Price (Discount)", formula: "SP = MP * (1 - D / 100)" },
                { name: "Markup Percentage", formula: "Markup% = [(Marked Price - CP) / CP] * 100" },
                { name: "CP & MP Relationship", formula: "CP / MP = (100 - D%) / (100 + P%)" },
                { name: "Net Discount (Successive)", formula: "Net D% = d1 + d2 - (d1 * d2) / 100" },
                { name: "Dishonest Dealer Profit", formula: "Profit% = [Error / (True Weight - Error)] * 100%" }
            ],
            tricks: [
                "If SP is constant and two items are sold at a profit of x% and loss of x%, the net transaction is always a loss of (x/10)^2 %.",
                "Cost Price corresponds to 100% base. All profits add and losses subtract directly from this percentage base.",
                "If a trader sells goods using false weights, profit% = [Error / (True Value - Error)] * 100%."
            ],
            mistakes: "Calculating profit margins based on Selling Price instead of Cost Price base unless specified."
        },
        ratio_proportion: {
            intro: "Ratios express comparative relationships between quantities by division, whereas proportions establish equations between ratios. Scale factors map parts to whole amounts.",
            formulas: [
                { name: "Duplicate Ratio", formula: "Duplicate of a:b = a^2 : b^2" },
                { name: "Triplicate Ratio", formula: "Triplicate of a:b = a^3 : b^3" },
                { name: "Sub-Duplicate Ratio", formula: "Sub-Duplicate of a:b = sqrt(a) : sqrt(b)" },
                { name: "Sub-Triplicate Ratio", formula: "Sub-Triplicate of a:b = cbrt(a) : cbrt(b)" },
                { name: "Mean Proportion", formula: "b = sqrt(a * c)" },
                { name: "Third Proportion", formula: "c = b^2 / a" },
                { name: "Fourth Proportion", formula: "d = (b * c) / a" },
                { name: "Componendo", formula: "If a/b = c/d, then (a+b)/b = (c+d)/d" },
                { name: "Dividendo", formula: "If a/b = c/d, then (a-b)/b = (c-d)/d" },
                { name: "Componendo & Dividendo", formula: "If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)" }
            ],
            tricks: [
                "To merge A:B and B:C ratios, multiply values to equalize the common term B's coefficient using the LCM.",
                "Substitute ratio values directly into homogenous equations (e.g. if x:y = 3:4, substitute x=3 and y=4 directly)."
            ],
            mistakes: "Adding ratio components directly to find net distributions without establishing the scaling coefficient k."
        },
        average: {
            intro: "Average represents central tendencies of discrete numerical distributions, calculated as total sum divided by size. Weighted averages adjust for varying group weights.",
            formulas: [
                { name: "Standard Average", formula: "Average = Sum of terms / Number of terms" },
                { name: "Average of n consecutive integers", formula: "Average = (First Term + Last Term) / 2" },
                { name: "Weighted Average", formula: "Avg_w = (n1*A1 + n2*A2) / (n1 + n2)" },
                { name: "Average Speed (Equal Distances)", formula: "Harmonic Mean = 2 * S1 * S2 / (S1 + S2)" },
                { name: "Average Speed (Equal Times)", formula: "Arithmetic Mean = (S1 + S2) / 2" },
                { name: "Average of first n natural numbers", formula: "Average = (n + 1) / 2" },
                { name: "Average of squares of first n natural numbers", formula: "Average = (n + 1)(2n + 1) / 6" },
                { name: "Average of cubes of first n natural numbers", formula: "Average = n(n + 1)^2 / 4" },
                { name: "Average of first n even numbers", formula: "Average = n + 1" },
                { name: "Average of first n odd numbers", formula: "Average = n" }
            ],
            tricks: [
                "Apply the Deviation Method: Assume a base average, calculate sum deviations, divide by count, and adjust the base.",
                "The average of first n natural numbers is (n + 1) / 2, and the average of first n odd numbers is simply n."
            ],
            mistakes: "Using simple arithmetic mean for average speed problems instead of harmonic mean speed ratios."
        },
        time_work: {
            intro: "Time and Work assesses production parameters. Work rate is inversely proportional to time taken when capacities are constant. Working with integer units via LCM simplifies calculations.",
            formulas: [
                { name: "Combined Work Rate (2 people)", formula: "T = (A * B) / (A + B)" },
                { name: "Combined Work Rate (3 people)", formula: "T = (A * B * C) / (A*B + B*C + C*A)" },
                { name: "Manpower Days Formula", formula: "M1 * D1 * H1 / W1 = M2 * D2 * H2 / W2" },
                { name: "Efficiency Time Relation", formula: "Time A / Time B = Efficiency B / Efficiency A" },
                { name: "Inlet & Outlet Pipe Net Flow", formula: "1/T_net = 1/T_inlet - 1/T_outlet" },
                { name: "Alternate Day Efficiency Cycle", formula: "Cycle work = E_A + E_B in 2 days" },
                { name: "Work Wages Split Rule", formula: "Wages ratio = Work Done ratio = (Efficiency * Days) ratio" },
                { name: "Relative Combined Completion Time", formula: "If A takes x days more and B takes y days more than A+B, T_ab = sqrt(x * y)" },
                { name: "Leak Emptying Time", formula: "T_leak = (T_normal * T_with_leak) / (T_with_leak - T_normal)" },
                { name: "Group Capacity Conversion", formula: "1 Man = x Women = y Children" }
            ],
            tricks: [
                "Assign 'Total Work Units' as the LCM of days. Solve for efficiencies as small integers instead of working with fractional parts.",
                "If A is thrice as efficient as B, then A takes 1/3 of the time taken by B."
            ],
            mistakes: "Adding days directly to find combined completion times rather than adding reciprocal work rates."
        },
        time_distance: {
            intro: "Speed and Distance models motion kinetics, governing relations between speeds, transit times, relative shifts, and unit conversions.",
            formulas: [
                { name: "Speed Equation", formula: "Speed = Distance / Time" },
                { name: "km/h to m/s conversion", formula: "1 km/h = 5/18 m/s" },
                { name: "m/s to km/h conversion", formula: "1 m/s = 18/5 km/h" },
                { name: "Relative Speed (Same direction)", formula: "S_rel = S1 - S2 (S1 > S2)" },
                { name: "Relative Speed (Opposite direction)", formula: "S_rel = S1 + S2" },
                { name: "Train crossing point object", formula: "Distance = Length of Train" },
                { name: "Train crossing platform/bridge", formula: "Distance = Length of Train + Length of Platform" },
                { name: "Two trains crossing each other", formula: "Distance = Length of Train 1 + Length of Train 2" },
                { name: "Late & Early arrival trick", formula: "Distance = [S1 * S2 / |S1 - S2|] * (Time Difference)" },
                { name: "Time to meet (Starts at same time)", formula: "Time = Initial Distance / Relative Speed" }
            ],
            tricks: [
                "For two bodies traveling in same direction, subtract relative speeds (S1 - S2). In opposite directions, add them (S1 + S2).",
                "When a train crosses a bridge/platform, the total distance is the sum of the lengths of the train and the platform."
            ],
            mistakes: "Forgetting to convert units to be consistent (e.g. speed in km/h but time in seconds)."
        },
        speed_distance: {
            intro: "Kinetics modeling focusing on advanced motion challenges like circular tracks, relative sweeps, races, and river currents.",
            formulas: [
                { name: "Downstream Speed", formula: "D_spd = Speed_boat + Speed_stream" },
                { name: "Upstream Speed", formula: "U_spd = Speed_boat - Speed_stream" },
                { name: "Speed of Boat in Still Water", formula: "S_boat = (D_spd + U_spd) / 2" },
                { name: "Speed of Current", formula: "S_stream = (D_spd - U_spd) / 2" },
                { name: "Round Trip Average Speed", formula: "Average Speed = (Boat_Speed^2 - Stream_Speed^2) / Boat_Speed" },
                { name: "Circular Track Meeting Time (First time)", formula: "T_meet = Track_Length / Relative_Speed" },
                { name: "Circular Track Starting Point Meeting", formula: "T_start = LCM(Track_Length/S1, Track_Length/S2)" },
                { name: "Linear Race Start Advantage", formula: "A runs D meters, B runs (D - start_distance) meters" },
                { name: "Police & Thief Capture Time", formula: "T_capture = Initial_Lead / (S_police - S_thief)" },
                { name: "Sound Flash Distance", formula: "Distance = Speed of sound * Time interval between sight and sound" }
            ],
            tricks: [
                "Time taken to meet on a circular track of length L for the first time is L / (Relative Speed).",
                "For relative motion of trains passing each other, total distance crossed is always L1 + L2, regardless of directions."
            ],
            mistakes: "Assuming upstream speed is Stream - Boat, which is invalid as boats must be faster than currents to progress."
        },
        probability: {
            intro: "Probability quantifies occurrences likelihoods, ranging from absolute impossibility (0) to absolute certainty (1). Analyzing total sample space is key.",
            formulas: [
                { name: "Basic Probability", formula: "P(E) = Favorable Outcomes / Total Sample Space" },
                { name: "Complementary Event", formula: "P(E') = 1 - P(E)" },
                { name: "Range of Probability", formula: "0 <= P(E) <= 1" },
                { name: "Addition Theorem (General)", formula: "P(A U B) = P(A) + P(B) - P(A n B)" },
                { name: "Addition Theorem (Mutually Exclusive)", formula: "P(A U B) = P(A) + P(B)" },
                { name: "Conditional Probability", formula: "P(A|B) = P(A n B) / P(B)" },
                { name: "Multiplication Theorem (Independent)", formula: "P(A n B) = P(A) * P(B)" },
                { name: "Bayes' Theorem", formula: "P(Ai|B) = [P(B|Ai) * P(Ai)] / Sum[P(B|Aj) * P(Aj)]" },
                { name: "Binomial Probability distribution", formula: "P(X=k) = nCk * p^k * q^(n-k)" },
                { name: "Odds in Favor", formula: "Odds = a : b -> P(E) = a / (a + b)" }
            ],
            tricks: [
                "P(At least 1 success) = 1 - P(No successes). This is often much faster to compute than summing successes.",
                "For coin tosses or dice throws, list total sample counts (2^n for coins, 6^n for dice) first before checking bounds."
            ],
            mistakes: "Confusing mutually exclusive events [P(A n B) = 0] with independent events [P(A n B) = P(A) * P(B)]."
        },
        permutation_combination: {
            intro: "Permutation tracks item ordering configurations where placement matters, whereas Combination aggregates groupings where order is irrelevant.",
            formulas: [
                { name: "Factorial Equation", formula: "n! = n * (n-1) * (n-2) * ... * 1" },
                { name: "Permutations (Order matters)", formula: "nPr = n! / (n - r)!" },
                { name: "Combinations (Order irrelevant)", formula: "nCr = n! / [r! * (n - r)!]" },
                { name: "Combinations Symmetry", formula: "nCr = nC(n-r)" },
                { name: "Permutations of identical items", formula: "Permutations = n! / (p! * q! * r!)" },
                { name: "Circular Permutations (Beads/Necklace)", formula: "Permutations = (n - 1)! / 2" },
                { name: "Circular Permutations (Normal)", formula: "Permutations = (n - 1)!" },
                { name: "Diagonals of an n-sided polygon", formula: "Diagonals = n(n - 3) / 2" },
                { name: "Handshakes in a group of n", formula: "Handshakes = n(n - 1) / 2" },
                { name: "Total Selections from n distinct items", formula: "Total = 2^n - 1" }
            ],
            tricks: [
                "Use the 'String Method' when items must stay together: tie them into a single unit, arrange units, then arrange inside.",
                "Use the 'Gap Method' when items must not sit next to each other: arrange others first, then place items in intermediate spaces."
            ],
            mistakes: "Calculating permutations instead of combinations when the question only asks for a team selection."
        },
        data_interpretation: {
            intro: "Data Interpretation translates chart diagrams (bar, pie, line, tables) into quantified business intelligence ratios and metrics.",
            formulas: [
                { name: "Percentage Growth Rate", formula: "Growth% = [(Current - Previous) / Previous] * 100" },
                { name: "Pie Chart degree to percentage", formula: "Percent = Degree * (5 / 18)" },
                { name: "Pie Chart percentage to degree", formula: "Degree = Percent * 3.6" },
                { name: "Simple Average of data points", formula: "Average = Sum of values / Number of points" },
                { name: "Compound Annual Growth Rate (CAGR)", formula: "CAGR = (FV / PV)^(1/n) - 1" },
                { name: "Profit Margin ratio", formula: "Margin% = (Net Profit / Total Revenue) * 100" },
                { name: "Market Share percentage", formula: "Share% = (Sales of Company / Total Market Sales) * 100" },
                { name: "Cost Benefit ratio", formula: "Ratio = Total Financial Benefits / Total Financial Costs" },
                { name: "Price Index", formula: "Index = (Current Price / Base Year Price) * 100" },
                { name: "Weighted Data Value", formula: "Weighted Value = Sum(Data * Weight) / Sum(Weights)" }
            ],
            tricks: [
                "Look at chart legends and scales before computing. Approximate calculations using round fractions: 16.6% ≈ 1/6, 14.3% ≈ 1/7.",
                "When comparing ratios, check if you can compare numerators or denominators visually to avoid division."
            ],
            mistakes: "Misinterpreting graph axis scale offsets (e.g. values represented in thousands but answers expecting actual values)."
        },
        simplification: {
            intro: "Simplification utilizes arithmetic order precedence guidelines (VBODMAS) to reduce heavy arithmetic and exponents into single values quickly.",
            formulas: [
                { name: "Arithmetic Precedence", formula: "VBODMAS (Virnculum, Bracket, Of, Div, Mult, Add, Sub)" },
                { name: "Difference of Squares", formula: "a^2 - b^2 = (a - b)(a + b)" },
                { name: "Perfect Square Expansion", formula: "(a + b)^2 = a^2 + 2ab + b^2" },
                { name: "Difference Square Expansion", formula: "(a - b)^2 = a^2 - 2ab + b^2" },
                { name: "Cubic expansion (+)", formula: "(a + b)^3 = a^3 + b^3 + 3ab(a + b)" },
                { name: "Cubic expansion (-)", formula: "(a - b)^3 = a^3 - b^3 - 3ab(a - b)" },
                { name: "Sum of Cubes", formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2)" },
                { name: "Difference of Cubes", formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2)" },
                { name: "Sum of Three Cubes relation", formula: "If a+b+c=0, then a^3+b^3+c^3 = 3abc" },
                { name: "Exponential multiplication", formula: "a^m * a^n = a^(m+n), a^m / a^n = a^(m-n)" }
            ],
            tricks: [
                "Apply unit digit analysis or digital sum rules (casting out nines) to check options without doing full calculations.",
                "Round decimal numbers to close integers (e.g., 29.98 * 5.02 ≈ 30 * 5) to eliminate wrong choices rapidly."
            ],
            mistakes: "Ignoring VBODMAS precedence, such as doing additions or multiplications before divisions."
        },
        algebra: {
            intro: "Algebra covers equations, variables, roots representations, and logarithmic rules. Arithmetic and Geometric Progressions trace systematic series.",
            formulas: [
                { name: "Quadratic Equation Roots", formula: "x = [-b +- sqrt(b^2 - 4ac)] / 2a" },
                { name: "Sum of Roots (Quadratic)", formula: "alpha + beta = -b / a" },
                { name: "Product of Roots (Quadratic)", formula: "alpha * beta = c / a" },
                { name: "Discriminant nature", formula: "D = b^2 - 4ac (D > 0: Real/Distinct, D < 0: Complex)" },
                { name: "Arithmetic Progression n-th term", formula: "T_n = a + (n-1)d" },
                { name: "Arithmetic Progression Sum", formula: "S_n = (n/2)[2a + (n-1)d]" },
                { name: "Geometric Progression n-th term", formula: "T_n = a * r^(n-1)" },
                { name: "Infinite GP Sum", formula: "S_inf = a / (1 - r) where |r| < 1" },
                { name: "Logarithm base translation", formula: "log_b(a) = log_c(a) / log_c(b)" },
                { name: "Logarithm product/division", formula: "log(xy) = log(x) + log(y), log(x/y) = log(x) - log(y)" }
            ],
            tricks: [
                "Substitute simple test values (like 0, 1, or -1) for variables to eliminate incorrect options immediately.",
                "Use options directly: plug choice values back into the algebraic system to see if they satisfy equation equations."
            ],
            mistakes: "Forgetting that square roots yield both positive and negative roots (e.g., x^2 = 9 gives x = +3 and -3)."
        },
        geometry: {
            intro: "Geometry analyzes shapes properties: coordinate layouts, lines, angles, triangles, polygons, circles, and perimeter/area metrics.",
            formulas: [
                { name: "Area of Equilateral Triangle", formula: "Area = [sqrt(3) / 4] * side^2" },
                { name: "Heron's Triangle Area", formula: "Area = sqrt(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2" },
                { name: "Sum of interior angles of polygon", formula: "Angles = (n - 2) * 180" },
                { name: "Sum of exterior angles of polygon", formula: "Exterior Angles Sum = 360 degrees" },
                { name: "Circumference & Area of Circle", formula: "C = 2 * pi * r, Area = pi * r^2" },
                { name: "Coordinate Distance", formula: "d = sqrt[(x2-x1)^2 + (y2-y1)^2]" },
                { name: "Midpoint of line segment", formula: "M = ((x1+x2)/2, (y1+y2)/2)" },
                { name: "Area of Trapezoid", formula: "Area = 0.5 * (a + b) * h" },
                { name: "Pythagorean Theorem", formula: "a^2 + b^2 = c^2" },
                { name: "Area & Perimeter of Rectangle", formula: "Area = length * width, Perimeter = 2 * (length + width)" }
            ],
            tricks: [
                "Memorize standard Pythagorean Triplets (3-4-5, 5-12-13, 8-15-17, 7-24-25) to solve diagonal values instantly.",
                "Sum of exterior angles of any convex polygon is always 360 degrees, regardless of the number of sides."
            ],
            mistakes: "Confusing similarity rules (ratio of areas = square of ratio of corresponding sides) with simple side ratios."
        },
        puzzles: {
            intro: "Logical puzzles challenge deductive reasoning, grid matching, variable relationships, and exclusion constraints.",
            formulas: [
                { name: "Grid Matching matrix constraint", formula: "Ensure 1-to-1 matching across rows and columns" },
                { name: "Inequality Transitivity", formula: "If A > B and B > C, then A > C" },
                { name: "Grouping Constraint bounds", formula: "Total candidates = Sum(Group sizes)" },
                { name: "Double Line-up matching", formula: "Map 2 parallel columns of independent entities" },
                { name: "Circular layout constraint", formula: "Neighbor restriction check: Neighbors != Excluded variables" },
                { name: "Condition chaining order", formula: "Link elements with highest constraint frequency first" },
                { name: "Case branching", formula: "If A has 2 possible options, branch into Case I and Case II" },
                { name: "Mutual exclusion rule", formula: "One slot contains exactly one entity" },
                { name: "Concrete anchor positions", formula: "Solve definite rules first to anchor layout" },
                { name: "Binary search exclusions", formula: "Variables not matching either subset must form a third subset" }
            ],
            tricks: [
                "Construct matrix grid diagrams matching variables (e.g., Name, Profession, Color). Check off absolute exclusions first.",
                "Identify variables with the highest number of constraints and position them first to anchor the puzzle."
            ],
            mistakes: "Making assumptions not explicitly stated in the puzzle rules (e.g., assuming layout orders based on text order)."
        },
        seating_arrangement: {
            intro: "Seating Arrangements deal with ordering constraints along lines (linear) or around circles (radial setups). Hand orientation rules shift depending on face direction.",
            formulas: [
                { name: "Circular Right-hand turn (Facing Center)", formula: "Facing inside: Right turn is counter-clockwise" },
                { name: "Circular Right-hand turn (Facing Out)", formula: "Facing outside: Right turn is clockwise" },
                { name: "Linear arrangement facing North", formula: "Left points West, Right points East" },
                { name: "Linear arrangement facing South", formula: "Left points East, Right points West" },
                { name: "Two Rows Facing Each Other", formula: "Row 1 (South facing) faces Row 2 (North facing)" },
                { name: "Diagonal opposite relation", formula: "Opposite corners passing through the shape center" },
                { name: "Neighbor split rule", formula: "A sits between B and C implies B-A-C or C-A-B" },
                { name: "Extreme ends layout", formula: "Start by placing variables at extreme left/right bounds" },
                { name: "Next-to spacing layout", formula: "A sits second to the right of B implies 1 variable between A and B" },
                { name: "Even seats opposite rule", formula: "Seat index i is opposite to i + N/2" }
            ],
            tricks: [
                "For circular arrangements, always draw a circle with lines representing positions to check opposite seats.",
                "Start with definite positions (e.g., 'A sits third to the right of B') rather than relative positions."
            ],
            mistakes: "Forgetting to swap Left/Right conventions when candidates face outwards from the circle."
        },
        blood_relations: {
            intro: "Blood Relations parse family relationships across generations using family trees, gender codes, and relationship strings.",
            formulas: [
                { name: "Generation mapping tree", formula: "Render generations on vertical levels (Grandparents -> Parents -> Self)" },
                { name: "Gender tagging convention", formula: "Use '+' for male, '-' for female" },
                { name: "Married Couples relationship", formula: "Connect partners using double horizontal lines (=)" },
                { name: "Siblings relationship", formula: "Connect siblings using a single horizontal line (-)" },
                { name: "Offspring relationship", formula: "Connect parent to child using a vertical line (|)" },
                { name: "Coded relations mapping", formula: "Evaluate relationship strings from right to left" },
                { name: "Maternal relations prefix", formula: "Prefix relations from the mother's side (e.g. maternal uncle)" },
                { name: "Paternal relations prefix", formula: "Prefix relations from the father's side (e.g. paternal aunt)" },
                { name: "Brother-in-law paths", formula: "Wife's brother, Husband's brother, or Sister's husband" },
                { name: "Sister-in-law paths", formula: "Wife's sister, Husband's sister, or Brother's wife" }
            ],
            tricks: [
                "Draw standard family tree diagrams. Use squares for males, circles for females, and double lines for married couples.",
                "Solve coded relationship strings from right to left (e.g., in A+B-C, evaluate B-C first to trace generation shifts)."
            ],
            mistakes: "Assuming the gender of a person based on their name alone (e.g., Amit, Kiran) without checking gender context."
        },
        coding_decoding: {
            intro: "Coding and Decoding maps text shifts, substitutions, opposite characters, and reverse alphabetic configurations.",
            formulas: [
                { name: "Alphabet forward rank index", formula: "A=1, B=2 ... Z=26" },
                { name: "Alphabet backward rank index", formula: "Backward Rank = 27 - Forward Rank" },
                { name: "EJOTY mnemonic positions", formula: "E=5, J=10, O=15, T=20, Y=25" },
                { name: "CFILORUX mnemonic positions", formula: "C=3, F=6, I=9, L=12, O=15, R=18, U=21, X=24" },
                { name: "Opposite pair characters", formula: "Char_Index + Opposite_Index = 27 (e.g. A-Z, B-Y)" },
                { name: "Linear shift encryption", formula: "Cipher_Index = (Plain_Index + Shift_k) mod 26" },
                { name: "Linear shift decryption", formula: "Plain_Index = (Cipher_Index - Shift_k) mod 26" },
                { name: "Cross substitution shifts", formula: "Divide the word in half and shift letters diagonally" },
                { name: "Word sum value code", formula: "Code = Sum of forward ranks of all letters" },
                { name: "Direct key mapping check", formula: "Verify if matching letters across terms map to matching symbols" }
            ],
            tricks: [
                "Memorize the EJOTY word for rapid positioning index matches. Write down target code shifts above original letters.",
                "Check for reverse coding patterns or cross-letter shifts (e.g. first half swapped with the second half)."
            ],
            mistakes: "Forgetting to check if opposite-pair index rules apply before tracking offset shifts."
        },
        syllogism: {
            intro: "Syllogisms verify deductive arguments validity using Venn Diagrams, checking subset/superset overlays and possibilities.",
            formulas: [
                { name: "Categorical statement - ALL", formula: "Set A is a subset of Set B (A c= B)" },
                { name: "Categorical statement - SOME", formula: "Intersection of Set A and B is non-empty" },
                { name: "Categorical statement - NO", formula: "Intersection of Set A and B is empty (A n B = empty)" },
                { name: "Categorical statement - SOME NOT", formula: "Elements exist in A that are not in B" },
                { name: "Venn Diagram Minimal Overlap", formula: "Draw only the minimal intersections required by statements" },
                { name: "Possibility statement check", formula: "Possibility holds if true in at least one valid Venn diagram" },
                { name: "Complementary Pairs (Some / No)", formula: "Either 'Some A are B' or 'No A are B' must be true" },
                { name: "Complementary Pairs (All / Some Not)", formula: "Either 'All A are B' or 'Some A are not B' must be true" },
                { name: "Definite conclusion check", formula: "Conclusion is valid only if true in ALL possible Venn diagrams" },
                { name: "Positive statements constraint", formula: "No definite negative conclusion can be drawn from positive premises" }
            ],
            tricks: [
                "Always draw the minimal overlap Venn Diagram to test conclusions. A conclusion is valid ONLY if it holds in ALL diagrams.",
                "Watch out for 'Either-Or' conditions: occurs when conclusions are complementary (e.g., Some A are B vs No A are B)."
            ],
            mistakes: "Assuming possibility statements are invalid because they are not absolute. Possibilities only need one valid diagram."
        },
        direction_sense: {
            intro: "Direction Sense maps spatial orientations, angular turns, shadow properties, and shortest path coordinates.",
            formulas: [
                { name: "Cardinal Directions layout", formula: "North is UP, South is DOWN, East is RIGHT, West is LEFT" },
                { name: "Ordinal Directions layout", formula: "NE, SE, SW, NW at 45-degree splits" },
                { name: "Left/Right turns (NESW cycle)", formula: "Right turns move clockwise (N -> E -> S -> W)" },
                { name: "Left turns (NWSE cycle)", formula: "Left turns move counter-clockwise (N -> W -> S -> E)" },
                { name: "Angle turn tracking", formula: "Net Angle = Clockwise sum - Counter-clockwise sum" },
                { name: "Pythagoras distance calculation", formula: "Displacement = sqrt(Net_East_West^2 + Net_North_South^2)" },
                { name: "Shadow rule at Sunrise", formula: "Sun is in East, shadow falls to the West" },
                { name: "Shadow rule at Sunset", formula: "Sun is in West, shadow falls to the East" },
                { name: "Clock face directions mapping", formula: "12 is North, 3 is East, 6 is South, 9 is West" },
                { name: "Facing direction inversion", formula: "A 180-degree turn flips the current facing direction" }
            ],
            tricks: [
                "Draw the compass reference on your sheet. Remember that a turn of 90 degrees right from North points East.",
                "For shadow problems: At sunrise, shadows fall to the West. At sunset, shadows fall to the East."
            ],
            mistakes: "Confusing left/right turns when walking towards the South direction (left points East, right points West)."
        },
        statement_conclusion: {
            intro: "Statement and Conclusion tests logical deductions based strictly on the provided context, filtering out external assumptions.",
            formulas: [
                { name: "Strict boundary rule", formula: "Restrict logic strictly to the facts mentioned in the statement" },
                { name: "Extreme words filter", formula: "Conclusions with absolute words (e.g. all, never, only) are generally invalid" },
                { name: "Cause and effect link", formula: "If statement states A causes B, concluding B implies A is valid" },
                { name: "General advice rule", formula: "Government notices or advice in statement implies people should follow them" },
                { name: "No correlation fallacy", formula: "Do not assume a relationship between two items unless statement links them" },
                { name: "Implicit meaning extraction", formula: "Contrapositive logic: If A then B is equivalent to If not B then not A" },
                { name: "Synonymous terms matching", formula: "Conclusion terms must align semantically with statement terminology" },
                { name: "Direct derivation check", formula: "A conclusion is invalid if it goes beyond the statement's scope" },
                { name: "Logical implication rule", formula: "If P implies Q is true, and P is true, then Q is true" },
                { name: "Time-frame constraints", formula: "Do not project past trends onto future predictions without statement basis" }
            ],
            tricks: [
                "Do not apply external knowledge or real-world assumptions. If the statement says 'sky is green', treat it as fact.",
                "Watch out for absolute words like 'all', 'always', 'only', or 'never' in conclusions; they are usually invalid."
            ],
            mistakes: "Marking a conclusion as valid because it is a true general fact, even though it cannot be derived from the statement."
        },
        series: {
            intro: "Number and Letter Series trace chronological trends (APs, GPs, prime rules, squares/cubes) across discrete terms.",
            formulas: [
                { name: "Common difference (AP)", formula: "d = T_(n) - T_(n-1)" },
                { name: "Common ratio (GP)", formula: "r = T_(n) / T_(n-1)" },
                { name: "Fibonacci sequence addition", formula: "T_n = T_(n-1) + T_(n-2)" },
                { name: "Prime number sequence", formula: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29..." },
                { name: "Square + Constant series", formula: "T_n = n^2 + k" },
                { name: "Cube + Constant series", formula: "T_n = n^3 + k" },
                { name: "Product of consecutive numbers", formula: "T_n = n * (n + 1)" },
                { name: "Alternating positions series", formula: "Odd positions follow pattern A, even positions follow pattern B" },
                { name: "Multi-stage difference", formula: "Calculate difference of difference to find secondary constant difference" },
                { name: "Decimal multiplication pattern", formula: "Multiply by 0.5, 1, 1.5, 2, 2.5..." }
            ],
            tricks: [
                "Calculate differences between consecutive terms first. If differences are constant, it's an AP; if they grow, check differences of differences.",
                "Look for alternating series (two patterns merged at odd/even positions) if terms alternate up and down."
            ],
            mistakes: "Assuming a simple addition pattern without checking if exponential multiplication or prime sequence rules apply."
        },
        analogy: {
            intro: "Analogies identify semantic, mathematical, physical, or structural correlations between sets of items.",
            formulas: [
                { name: "Cause and Effect relation", formula: "A causes B (e.g. Spark : Fire)" },
                { name: "Synonym / Antonym equivalence", formula: "Semantic matches or absolute opposites" },
                { name: "Part to Whole relation", formula: "A is a component of B (e.g. Wheel : Car)" },
                { name: "Tool to Action relation", formula: "A is used to do action B (e.g. Pen : Write)" },
                { name: "Worker to Product relation", formula: "A creates product B (e.g. Chef : Food)" },
                { name: "Mathematical relation", formula: "x : y matches x^2 : y^2 or x : x^3 - 1" },
                { name: "Country to Capital relation", formula: "Geopolitical relationship mappings" },
                { name: "Animal to Young relation", formula: "A is the parent, B is the offspring name" },
                { name: "Singular to Plural relation", formula: "Morphological adjustments matching" },
                { name: "Study of / Science relation", formula: "A is the subject, B is the study field (e.g. Cards : Cartography)" }
            ],
            tricks: [
                "Define the relationship between the first pair as a clear sentence (e.g., 'A is the capital of B'). Apply this sentence to the second pair.",
                "In numerical analogies, check for square/cube relations (e.g., x : x^2 + 1) before testing differences."
            ],
            mistakes: "Selecting options that share a weak or superficial similarity rather than matching the exact relationship pattern."
        },
        grammar: {
            intro: "Grammar rules govern syntax structures: subject-verb agreements, modifiers, pronoun categories, and tense alignments.",
            formulas: [
                { name: "Subject-Verb Agreement", formula: "Singular subjects take singular verbs; plural take plural" },
                { name: "Pronoun Case agreement", formula: "Use nominative (I, he, they) for subjects, objective (me, him) for objects" },
                { name: "Parallel Structure rule", formula: "Maintain consistent grammatical form in lists" },
                { name: "Pronoun-Antecedent agreement", formula: "Pronouns must match their antecedent nouns in number and gender" },
                { name: "Active vs Passive Voice", formula: "Prefer active voice for direct clarity" },
                { name: "Subjunctive Mood hypothetical", formula: "Use 'were' for hypothetical statements (e.g., If I were you)" },
                { name: "Double Negatives correction", formula: "Avoid combining two negatives in a single clause" },
                { name: "Relative pronoun usage", formula: "Who is subject-level; Whom is object-level" },
                { name: "Tense consistency rule", formula: "Do not shift verb tenses mid-sentence unless showing time order" },
                { name: "Collective nouns agreement", formula: "Singular when acting as a unit, plural when acting individually" }
            ],
            tricks: [
                "Locate the main subject and verb by ignoring descriptive phrases between commas.",
                "Compare relative pronouns: 'who' refers to the subject, 'whom' refers to the object of the action."
            ],
            mistakes: "Using double negatives or using mismatching pronouns (e.g., 'every student must check their grades')."
        },
        vocabulary: {
            intro: "Vocabulary studies word definitions, roots, synonyms, antonyms, phrasal combinations, and usage contexts.",
            formulas: [
                { name: "Root prefix meaning", formula: "Identify base origins to decode words (e.g. 'tele' = far)" },
                { name: "Root suffix meaning", formula: "Identify grammatical function shifts (e.g. '-ology' = study of)" },
                { name: "Synonym matching", formula: "Select word with the closest contextual meaning" },
                { name: "Antonym matching", formula: "Select word with the opposite contextual meaning" },
                { name: "Homophones disambiguation", formula: "Differentiate words sounding identical but spelled differently (e.g. affect vs effect)" },
                { name: "Idiomatic expressions", formula: "Comprehend non-literal figurative meanings (e.g. spill the beans)" },
                { name: "Phrasal verbs combinations", formula: "Understand verb-preposition combinations (e.g. look up to)" },
                { name: "Contextual clues check", formula: "Determine word meaning from positive/negative modifiers nearby" },
                { name: "Analogy matching", formula: "Select the pair of words representing the same relation" },
                { name: "One-word substitution", formula: "Condense descriptive phrases into single terms (e.g. somniloquist)" }
            ],
            tricks: [
                "Use word root mappings (e.g. 'bene' = good, 'mal' = bad, 'anthrop' = human) to approximate meanings of unknown words.",
                "Identify positive/negative tones of sentences to guess matching synonyms or antonyms in context."
            ],
            mistakes: "Selecting synonyms when the question explicitly asks for antonyms due to quick reading."
        },
        reading_comprehension: {
            intro: "Reading Comprehension evaluates content processing, main idea identification, argument mapping, and tone deductions.",
            formulas: [
                { name: "Main Idea extraction", formula: "Focus on introductory and concluding thesis statements" },
                { name: "Tone identification", formula: "Identify author's attitude (e.g. sarcastic, objective, laudatory)" },
                { name: "Structure mapping flow", formula: "Trace argument: Intro -> Counter-claim -> Rebuttal -> Conclusion" },
                { name: "Detail scanning key", formula: "Search for key vocabulary terms matching questions" },
                { name: "Inference extraction rule", formula: "Identify statements that must be true based on the passage" },
                { name: "Fact vs Opinion separation", formula: "Separate factual evidence from subjective author claims" },
                { name: "Pronoun referent check", formula: "Trace back what noun a pronoun like 'it' or 'their' references" },
                { name: "Contextual definition rule", formula: "Determine word meaning as used specifically in the passage" },
                { name: "Title selection criteria", formula: "Choose a title covering the main thesis without being too broad" },
                { name: "Question type analysis", formula: "Differentiate 'According to passage' from 'Based on passage'" }
            ],
            tricks: [
                "Read the questions before reading the passage. This focuses your reading to scan for key terms directly.",
                "Avoid selecting choices that contain absolute generalizations unless they are explicitly backed by the text."
            ],
            mistakes: "Choosing options that are factually true but not mentioned or supported anywhere in the provided passage."
        },
        sentence_correction: {
            intro: "Sentence Correction evaluates sentence fragments, dangling modifiers, parallel structures, and word choice errors.",
            formulas: [
                { name: "Dangling modifiers fix", formula: "Ensure modifier phrases are placed adjacent to modified nouns" },
                { name: "Misplaced modifier", formula: "Move adverbs or clauses to avoid double meanings" },
                { name: "Parallelism constraint", formula: "Match structural formats across coordinate conjunctions" },
                { name: "Run-on sentence fix", formula: "Connect independent clauses with coordinating conjunctions or semicolons" },
                { name: "Sentence fragment resolution", formula: "Ensure every sentence contains a finite verb and subject" },
                { name: "Redundancy exclusion rule", formula: "Delete repetitive words (e.g. revert back, repeat again)" },
                { name: "Correlative Conjunctions", formula: "Place 'neither/nor' directly before matching grammatical elements" },
                { name: "Word choice error", formula: "Fix misused words (e.g. fewer for countable, less for uncountable)" },
                { name: "Split infinitives", formula: "Avoid inserting adverbs between 'to' and the verb (e.g. to quickly run)" },
                { name: "Comma splices fix", formula: "Do not connect independent clauses with a comma alone" }
            ],
            tricks: [
                "Check for parallelism: ensure verbs, adjectives, and lists match structure formats (e.g. running, swimming, and biking).",
                "Scan for redundancy (e.g., 'return back' or 'repeat again' are redundant)."
            ],
            mistakes: "Keeping dangling modifiers (e.g. 'Walking down the street, the trees looked beautiful' makes the trees walk)."
        },
        error_spotting: {
            intro: "Error Spotting challenges syntax verification: preposition rules, subject-verb agreements, tenses, and conjunctions.",
            formulas: [
                { name: "Subject-Verb check", formula: "Verify singular/plural status of subject" },
                { name: "Tense shift detection", formula: "Spot mismatching past/present combinations" },
                { name: "Prepositional error correction", formula: "Correct incorrect prepositions (e.g., differ with vs differ from)" },
                { name: "Conjunction pair check", formula: "Verify 'not only' is paired with 'but also'" },
                { name: "Pronoun reference check", formula: "Ensure pronoun has a clear, unambiguous antecedent noun" },
                { name: "Adjective vs Adverb verify", formula: "Verify if word modifies noun (adjective) or verb/adjective (adverb)" },
                { name: "Article usage check", formula: "Check correct use of 'a', 'an', 'the' (e.g., an honest man)" },
                { name: "Countable vs Uncountable nouns", formula: "Spot mistakes like 'many advices' (should be pieces of advice)" },
                { name: "Double comparative elimination", formula: "Remove expressions like 'more taller' or 'most worst'" },
                { name: "Concord of nouns check", formula: "Verify singular/plural forms in expressions like 'one of the students'" }
            ],
            tricks: [
                "Check Subject-Verb agreement first. If correct, check pronoun agreements and then tense consistency.",
                "Verify preposition usage (e.g., 'independent of' vs 'dependent on')."
            ],
            mistakes: "Overlooking errors in common homophones or contractions (e.g., confusing 'its' with 'it's' or 'their' with 'there')."
        },
        fill_blanks: {
            intro: "Fill in the Blanks tests vocabulary precision, context fits, conjunction indicators, and preposition pairings.",
            formulas: [
                { name: "Collocation checking", formula: "Select words that naturally pair together (e.g. take an exam)" },
                { name: "Grammatical fit check", formula: "Choose the word class (noun, verb, adj, adv) required by blank" },
                { name: "Conjunction clues check", formula: "Use contrast words (but, yet) to determine blank's polarity" },
                { name: "Semantic alignment check", formula: "Ensure word fits the overall theme/topic of the sentence" },
                { name: "Preposition combination check", formula: "Match verbs with required trailing prepositions (e.g. abstain from)" },
                { name: "Positive/Negative tone check", formula: "Select words that preserve sentence's emotional valence" },
                { name: "Double blanks matching", formula: "Solve easier blank first, then check remaining blank options" },
                { name: "Vocabulary intensity check", formula: "Differentiate degrees of meaning (e.g. dislike vs loathe)" },
                { name: "Contextual clues check", formula: "Look for definitions or examples in nearby clauses" },
                { name: "Syntax elimination trick", formula: "Eliminate options that violate basic syntax rules first" }
            ],
            tricks: [
                "Read sentences with blank spaces, guess simple words that fit naturally, then match options against your guess.",
                "Look for clue conjunctions (e.g., 'although' indicates contrast, 'furthermore' indicates support)."
            ],
            mistakes: "Choosing words that fit grammatically but distort the logical meaning of the sentence."
        },
        para_jumbles: {
            intro: "Paragraph Jumbles evaluate paragraph coherence, acronym expansions, sentence connections, and chronological layouts.",
            formulas: [
                { name: "Opening Sentence rule", formula: "Opening sentence introduces topic and contains no relative pronouns" },
                { name: "Mandatory pair identification", formula: "Link sentence with name to sentence with corresponding pronoun" },
                { name: "Chronological flow ordering", formula: "Order events by time indicators (e.g., First, Then, In 1990)" },
                { name: "General to Specific ordering", formula: "Order sentences such that general claims precede specific examples" },
                { name: "Transition indicator mapping", formula: "Place contrasting sentences immediately after the claims they contrast" },
                { name: "Closing sentence identification", formula: "Locate sentence summarizing paragraph or showing final results" },
                { name: "Acronym expansion rule", formula: "Sentence with full form comes before sentence with acronym (e.g. CIA)" },
                { name: "Cause and effect order", formula: "Place the cause sentence before the effect sentence" },
                { name: "Question-Answer relation", formula: "Place sentence asking a question before sentence answering it" },
                { name: "Clue words linking", formula: "Connect sentences sharing common terms or thematic keywords" }
            ],
            tricks: [
                "Identify mandatory pairs (e.g. sentences starting with pronouns must follow sentences introducing the noun).",
                "Look for transition words (e.g., 'however', 'therefore', 'consequently') to determine chronological sequences."
            ],
            mistakes: "Reading sentences in isolation instead of looking for structural clues and pronoun connections."
        }
    };

    const defaultData = {
        intro: `Detailed preparation theoretical review for ${topic}. Study the basic concepts to begin practice sets.`,
        formulas: [
            { name: "Base Equation", formula: "Output = Inputs * Factor" },
            { name: "Average Metric", formula: "Average = Sum of elements / Count" },
            { name: "Growth Rate", formula: "Growth = (New - Old) / Old" },
            { name: "Ratio Form", formula: "Ratio = A / B" },
            { name: "Percentage Change", formula: "Change% = Ratio * 100" },
            { name: "Unit Efficiency", formula: "Efficiency = Total Work / Total Time" },
            { name: "Inverse Property", formula: "Value A * Value B = Constant" },
            { name: "Linear Shift", formula: "New Value = Original Value + Shift" },
            { name: "Scale Proportions", formula: "x1 / y1 = x2 / y2" },
            { name: "Digital Sum CASTING", formula: "Cast out nines from numbers to verify arithmetic results" }
        ],
        tricks: [
            "Eliminate extreme outliers from the options first.",
            "Plug values from options to test algebraic equations directly."
        ],
        mistakes: "Rushing past question units conversions (e.g. m/s to km/h)."
    };

    const data = database[topic] || defaultData;

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
            <span>${data.mistakes || "Incorrect units conversions."}</span>
        </li>
    `;

    // Dynamic rendering of Question Varieties
    const varContainer = document.getElementById('theory-varieties-container');
    if (varContainer) {
        const meta = MockDataGen.getTopicMetadata(subject, topic);
        let varieties = data.varieties;
        if (!varieties || varieties.length === 0) {
            varieties = [
                { type: 1, title: `Type 1: ${meta.title} Standard Analysis`, desc: `Practice key problem types and solutions for ${meta.title.toLowerCase()}.` }
            ];
        }

        if (varieties && varieties.length > 0) {
            // Fetch questions for this topic to extract examples
            const topicQuestions = (typeof MockDataGen !== 'undefined') ? MockDataGen.getQuestions(subject, topic, 20) : [];

            varContainer.innerHTML = `
                <div class="glass-panel" style="padding: 2rem; border-radius: var(--border-radius-lg); margin-bottom: 2rem;">
                    <h3 style="font-size: 1.35rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.6rem; margin-bottom: 1.2rem; font-family: var(--font-heading);">
                        <i class="fa-solid fa-list-check" style="color: var(--primary); margin-right: 0.5rem;"></i>Question Varieties & Patterns
                    </h3>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">
                        Generally ${varieties.length} type${varieties.length > 1 ? 's' : ''} of questions are asked from this chapter. Select any variety below to practice its specific pattern directly:
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                        ${varieties.map(v => {
                            // Find up to 2 examples of this pattern type
                            const examples = topicQuestions.filter(q => (q.patternType || 1) === v.type).slice(0, 2);
                            let examplesHTML = '';

                            if (examples.length > 0) {
                                examplesHTML = `
                                    <div style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.2rem;">
                                        <div style="font-size: 0.8rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">
                                            EXAMPLES WITH SOLUTIONS
                                        </div>
                                        ${examples.map((q, idx) => `
                                            <div style="margin-bottom: 1.5rem;">
                                                <div style="display: flex; align-items: start; gap: 0.6rem; margin-bottom: 0.6rem; color: var(--text-primary); font-weight: 600; font-size: 0.95rem;">
                                                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #3b82f6; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; margin-top: 0.1rem;">
                                                        ${idx + 1}
                                                    </div>
                                                    <span>${q.text}</span>
                                                </div>
                                                <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--border-radius-sm); margin-bottom: 0.6rem; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; white-space: pre-line;">${q.solution}</div>
                                                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                                                    <div style="border-left: 3px solid #8b5cf6; background: rgba(255,255,255,0.01); padding: 0.6rem 1rem; border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; flex: 1; min-width: 200px;">
                                                        <div style="font-size: 0.7rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">FORMULA</div>
                                                        <div style="font-size: 0.88rem; color: var(--text-secondary);">${q.formula || 'Standard formula applies.'}</div>
                                                    </div>
                                                    <div style="border-left: 3px solid var(--success); background: rgba(255,255,255,0.01); padding: 0.6rem 1rem; border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0; width: 160px;">
                                                        <div style="font-size: 0.7rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem;">ANSWER</div>
                                                        <div style="font-size: 1.1rem; font-weight: 700; color: var(--success);">${q.answer}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                `;
                            }

                            return `
                                <div class="glass-card pattern-variety-card" style="display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem; border-left: 4px solid var(--primary); transition: transform 0.2s ease, box-shadow 0.2s ease;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; gap: 1.5rem;">
                                        <div style="flex: 1;">
                                            <h4 style="font-size: 1.1rem; color: var(--text-primary); margin: 0 0 0.4rem 0; font-family: var(--font-heading);">${v.title}</h4>
                                            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.4; margin: 0;">${v.desc}</p>
                                        </div>
                                        <div>
                                            <button onclick="practiceSpecificPattern(${v.type}, '${topic}', '${subject}')" class="btn btn-primary btn-secondary" style="padding: 0.5rem 1.2rem; font-size: 0.8rem; white-space: nowrap; border-radius: 20px; display: inline-flex; align-items: center; gap: 0.4rem;">
                                                <i class="fa-solid fa-dumbbell"></i> Practice
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
        } else {
            varContainer.innerHTML = '';
        }
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
        
        // Find pattern title from metadata
        const meta = MockDataGen.getTopicMetadata(subject, topic);
        let patternName = `Type ${activePatternFilter} Pattern`;
        if (topic === 'numbers') {
            const db = {
                numbers: [
                    "Type 1: Find units digit of a number",
                    "Type 2: Arithmetic and Geometric progression",
                    "Type 3: Arithmetic Progression",
                    "Type 4: Divisibility",
                    "Type 5: Operations on Integers",
                    "Type 6: Divisor and Remainder Transformations"
                ]
            };
            patternName = db.numbers[activePatternFilter - 1];
        } else if (activePatternFilter === 1) {
            patternName = `Type 1: ${meta.title} Standard Analysis`;
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
            <p style="color: var(--text-secondary);">Try changing your difficulty filter selector.</p>
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
    document.getElementById('sol-formula').textContent = q.formula || "Basic Arithmetic formula";
    document.getElementById('sol-shortcut').textContent = q.shortcut || "None required.";
    document.getElementById('sol-common-mistakes').textContent = q.commonMistakes || "Units conversion error.";

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

// Stop Timer
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
