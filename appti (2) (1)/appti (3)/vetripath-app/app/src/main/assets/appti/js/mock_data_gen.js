/* ==========================================================================
   MOCK_DATA_GEN.JS - Deterministic Pseudo-Random Question Bank Engine
   ========================================================================== */

const MockDataGen = {
    // Seedable LCG for deterministic generation
    seed: 12345,
    random(s) {
        let x = Math.sin(s) * 10000;
        return x - Math.floor(x);
    },

    // Retrieve topic title metadata
    getTopicMetadata(subject, topic) {
        const metadata = {
            aptitude: {
                numbers: { title: "Numbers & Number Systems", desc: "Divisibility, remainders, LCM/HCF, and digits." },
                percentage: { title: "Percentages", desc: "Fraction conversions, increases, decreases, and calculations." },
                profit_loss: { title: "Profit and Loss", desc: "Cost price, selling price, discounts, and markups." },
                ratio_proportion: { title: "Ratio and Proportion", desc: "Shares, mixtures, partnership, and variations." },
                average: { title: "Averages", desc: "Mean values, weighted averages, age, and temperature problems." },
                time_work: { title: "Time and Work", desc: "Efficiency, pipes and cisterns, joint tasks." },
                time_distance: { title: "Time and Distance", desc: "Relative speed, trains, and race tracks." },
                speed_distance: { title: "Speed and Distance", desc: "Boats and streams, average speed, and acceleration." },
                probability: { title: "Probability", desc: "Coins, dice, cards, and marbles selection." },
                permutation_combination: { title: "Permutations & Combinations", desc: "Arrangements, selections, and grouping." },
                data_interpretation: { title: "Data Interpretation", desc: "Bar graphs, pie charts, line plots, and tables." },
                simplification: { title: "Simplification", desc: "BODMAS rule, fractions, square roots, and indices." },
                algebra: { title: "Algebra", desc: "Linear equations, quadratic equations, and progressions." },
                geometry: { title: "Geometry & Mensuration", desc: "Area, volume, triangles, circles, and polygons." }
            },
            reasoning: {
                puzzles: { title: "Puzzles", desc: "Grid arrangements, scheduling, and comparison puzzles." },
                seating_arrangement: { title: "Seating Arrangement", desc: "Linear, circular, and dual-row seating rules." },
                blood_relations: { title: "Blood Relations", desc: "Family trees, symbols, and coded relations." },
                coding_decoding: { title: "Coding & Decoding", desc: "Letter shifts, number codes, and deciphering." },
                syllogism: { title: "Syllogisms", desc: "Statements and logical deductions using Venn Diagrams." },
                direction_sense: { title: "Direction Sense Test", desc: "Compass angles, displacement, and shadow problems." },
                statement_conclusion: { title: "Statement & Conclusion", desc: "Logical reasoning, inferences, and assumptions." },
                series: { title: "Number & Letter Series", desc: "Pattern discovery, missing elements, and odd-one-out." },
                analogy: { title: "Analogies", desc: "Word comparisons, number matches, and symbolic shapes." },
                non_verbal: { title: "Non-Verbal Reasoning", desc: "Figure series, mirror images, paper folding, matrix completion, and pattern shapes." }
            },
            verbal: {
                grammar: { title: "English Grammar", desc: "Parts of speech, active/passive voice, direct/indirect narration." },
                vocabulary: { title: "Vocabulary", desc: "Synonyms, antonyms, idioms, and phrase substitutions." },
                reading_comprehension: { title: "Reading Comprehension", desc: "Passage reading, main idea extraction, and contextual vocab." },
                sentence_correction: { title: "Sentence Correction", desc: "Subject-verb agreement, modifier errors, and parallel structure." },
                error_spotting: { title: "Error Spotting", desc: "Identifying grammatical discrepancies in statements." },
                fill_blanks: { title: "Fill in the Blanks", desc: "Single, double, and cloze test sentence completion." },
                para_jumbles: { title: "Para Jumbles", desc: "Sentence restructuring to form cohesive paragraphs." }
            }
        };
        return (metadata[subject] && metadata[subject][topic]) ? metadata[subject][topic] : { title: topic.toUpperCase(), desc: "" };
    },

    // --- Static Question Factory ---
    getQuestions(subject, topic, count = 1000) {
        const list = [];
        // Generate unique dynamic questions on the fly using a random starting offset
        // to guarantee that the questions are different on every run/test launch
        const startOffset = Math.floor(Math.random() * 100000);
        for (let i = 0; i < count; i++) {
            const index = startOffset + i;
            const dynQ = this.generateDynamicQuestion(subject, topic, index);
            list.push(dynQ);
        }
        return list;
    },

    generateDynamicQuestion(subject, topic, index) {
        const difficulties = ['beginner', 'easy', 'medium', 'hard', 'expert'];
        const diff = difficulties[index % 5];
        const patternType = (index % 6) + 1;
        const qId = `${subject}_${topic}_dyn_${index}`;
        
        let text = "";
        let answer = "";
        let options = [];
        let solution = "";
        let formula = "";
        let shortcut = "";
        let commonMistakes = "";
        let timeRequired = "60s";
        let tags = [topic, diff, "dynamic"];
        
        // Seed calculation to get different random numbers for different questions
        let seed = 0;
        for (let i = 0; i < topic.length; i++) seed += topic.charCodeAt(i);
        seed += index * 31;
        
        const getVal = (min, max, offset = 0) => {
            let r = Math.sin(seed + offset) * 10000;
            r = r - Math.floor(r);
            return Math.floor(r * (max - min + 1)) + min;
        };

        const names = ["Aravind", "Balan", "Chitra", "Divya", "Elango", "Hari", "Isha", "Karthik", "Manoj", "Nisha", "Pranav", "Ramya", "Suresh", "Tina"];
        const name1 = names[getVal(0, names.length - 1, 1)];
        const name2 = names[(getVal(0, names.length - 1, 1) + 1) % names.length];
        const name3 = names[(getVal(0, names.length - 1, 1) + 2) % names.length];
        
        if (subject === 'aptitude') {
            switch (topic) {
                case 'numbers': {
                    if (patternType === 1) {
                        const divisor = getVal(11, 29, 2);
                        const rem1 = getVal(3, divisor - 2, 3);
                        const mult = getVal(3, 7, 4);
                        const add = getVal(1, 9, 5);
                        const calculatedAns = (mult * rem1 + add) % divisor;
                        text = `A number $N$, when divided by $${divisor * 2}$, leaves a remainder of $${rem1}$. What is the remainder when the expression $${mult}N + ${add}$ is divided by $${divisor}$?`;
                        answer = calculatedAns.toString();
                        options = [answer, ((calculatedAns + 1) % divisor).toString(), ((calculatedAns + 3) % divisor).toString(), ((calculatedAns + divisor - 1) % divisor).toString()];
                        formula = "Modular Arithmetic: $(a \\cdot b + c) \\pmod d = ((a \\cdot (b \\pmod d) + c) \\pmod d$.";
                        solution = `Step 1: Write $N$ in terms of the divisor: $N = ${divisor * 2}k + ${rem1}$.\nStep 2: Substitute $N$ in $${mult}N + ${add}$: $${mult}(${divisor * 2}k + ${rem1}) + ${add} = ${mult * divisor * 2}k + ${mult * rem1} + ${add}$.\nStep 3: Modulo $${divisor}$, the first term is divisible, leaving remainder of $${mult * rem1 + add} \\pmod{${divisor}} = ${calculatedAns}$.`;
                        shortcut = `Substitute $N = ${rem1}$ directly: $${mult}(${rem1}) + ${add} = ${mult * rem1 + add}$. Modulo $${divisor} = ${calculatedAns}$.`;
                    } else if (patternType === 2) {
                        const base = getVal(3, 9, 2);
                        const power = getVal(150, 450, 3);
                        const remainderDiv = 10;
                        const cyclicity = [0, 1, 4, 4, 2, 1, 1, 4, 4, 2][base];
                        const cycle = [];
                        for(let c=1; c<=4; c++) cycle.push(Math.pow(base, c) % 10);
                        const remIdx = (power % cyclicity === 0 ? cyclicity : power % cyclicity) - 1;
                        const calculatedAns = cycle[remIdx];
                        text = `Find the unit digit of $(${base})^{${power}}$.`;
                        answer = calculatedAns.toString();
                        options = [answer, ((calculatedAns + 1) % 10).toString(), ((calculatedAns + 2) % 10).toString(), "5"];
                        formula = "Cyclicity of digits mod 10.";
                        solution = `Step 1: Base is $${base}$ and cyclicity is $${cyclicity}$.\nStep 2: Divide power $${power}$ by $${cyclicity}$ to find remainder index: $${power} \\pmod{${cyclicity}} = ${power % cyclicity}$.\nStep 3: The unit digit cycle of $${base}$ is [${cycle.join(", ")}], yielding unit digit $${calculatedAns}$.`;
                        shortcut = `Divide exponent $${power}$ by cyclicity $${cyclicity}$. Calculate $${base}^{${power % cyclicity || cyclicity}} \\pmod{10} = ${calculatedAns}$.`;
                    } else if (patternType === 3) {
                        const firstTerm = getVal(2, 6, 2);
                        const ratio = getVal(2, 3, 3);
                        const terms = getVal(4, 6, 4);
                        const calculatedAns = firstTerm * (Math.pow(ratio, terms) - 1) / (ratio - 1);
                        text = `Find the sum of the geometric series: $${firstTerm}, ${firstTerm * ratio}, ${firstTerm * ratio * ratio}, \\dots$ up to $${terms}$ terms.`;
                        answer = calculatedAns.toString();
                        options = [answer, (calculatedAns - 10).toString(), (calculatedAns + 24).toString(), (calculatedAns * 2).toString()];
                        formula = "GP Sum: $S_n = a(r^n - 1)/(r - 1)$";
                        solution = `Step 1: Identify parameters: $a = ${firstTerm}$, $r = ${ratio}$, $n = ${terms}$.\nStep 2: Apply formula: $S_{${terms}} = ${firstTerm}(${ratio}^{${terms}} - 1)/(${ratio} - 1)$.\nStep 3: Compute: $S = ${firstTerm}(${Math.pow(ratio, terms)} - 1)/${ratio - 1} = ${calculatedAns}$.`;
                        shortcut = "Plug directly into the GP sum formula.";
                    } else if (patternType === 4) {
                        const d1 = getVal(40, 80, 2);
                        const d2 = getVal(5, 12, 3);
                        const r1 = getVal(15, d1 - 5, 4);
                        const calculatedAns = r1 % d2;
                        text = `A number when divided by $${d1}$ leaves a remainder of $${r1}$. If the same number is divided by $${d2}$, what is the remainder?`;
                        answer = calculatedAns.toString();
                        options = [answer, ((calculatedAns + 1) % d2).toString(), ((calculatedAns + 2) % d2).toString(), "0"];
                        formula = "Divisor Modulo Rule: If $d_1$ is a multiple of $d_2$, then $N \\pmod{d_2} = (N \\pmod{d_1}) \\pmod{d_2}$.";
                        solution = `Step 1: Write $N = ${d1}k + ${r1}$.\nStep 2: Divide $N$ by $${d2}$: $(${d1}k + ${r1}) \\pmod{${d2}}$.\nStep 3: Since $${d1}$ is a multiple of $${d2}$ ($${d2} \\times ${Math.floor(d1/d2)}$), the remainder is $${r1} \\pmod{${d2}} = ${calculatedAns}$.`;
                        shortcut = `Divide the first remainder by the second divisor directly: $${r1} \\pmod{${d2}} = ${calculatedAns}$.`;
                    } else if (patternType === 5) {
                        const a = getVal(10, 30, 2);
                        const b = getVal(15, 35, 3);
                        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
                        const hcfVal = gcd(a, b);
                        text = `Find the Highest Common Factor (HCF) of $${a}$ and $${b}$.`;
                        answer = hcfVal.toString();
                        options = [answer, (hcfVal + 1).toString(), (hcfVal + 2).toString(), "1"];
                        formula = "HCF / GCD Definition.";
                        solution = `Step 1: Find prime factors of $${a}$ and $${b}$.\nStep 2: Collect common factors to determine HCF = $${hcfVal}$.`;
                        shortcut = "Check common divisibility of options, starting from the largest.";
                    } else {
                        const n = getVal(100, 300, 2);
                        const calculatedAns = Math.floor(n / 5) + Math.floor(n / 25);
                        text = `Find the number of trailing zeroes in $${n}!$.`;
                        answer = calculatedAns.toString();
                        options = [answer, (calculatedAns - 2).toString(), (calculatedAns + 3).toString(), (calculatedAns * 2).toString()];
                        formula = "Legendre's Formula for prime factor 5: $\\sum \\lfloor n / 5^k \\rfloor$.";
                        solution = `Step 1: Trailing zeroes are created by factors of 10 ($2 \\times 5$). Since 2 is abundant, count factors of 5.\nStep 2: Number of zeroes = $\\lfloor ${n}/5 \\rfloor + \\lfloor ${n}/25 \\rfloor = ${Math.floor(n/5)} + ${Math.floor(n/25)} = ${calculatedAns}$.`;
                        shortcut = `Repeatedly divide $${n}$ by 5 and sum quotients: $${Math.floor(n/5)} + ${Math.floor(n/25)} = ${calculatedAns}$.`;
                    }
                    break;
                }
                case 'percentage': {
                    if (patternType === 1) {
                        const val = getVal(150, 450, 2) * 10;
                        const change1 = getVal(10, 25, 3);
                        const change2 = getVal(5, 20, 4);
                        const net = change1 - change2 - (change1 * change2 / 100);
                        const formattedNet = Math.abs(net).toFixed(2);
                        const typeStr = net >= 0 ? "Increase" : "Decrease";
                        text = `The population of a city is $${val}$. If it increases by $${change1}\\%$ in the first year and then decreases by $${change2}\\%$ in the second year, what is the net percentage change over the two years?`;
                        answer = `${typeStr} of ${formattedNet}\\%`;
                        options = [answer, `${net >= 0 ? "Decrease" : "Increase"} of ${formattedNet}\\%`, `Increase of ${(change1 - change2).toFixed(2)}\\%`, "No change"];
                        formula = "Net Change = $A + B + \\frac{A \\cdot B}{100}\\%$";
                        solution = `Step 1: Use $A = ${change1}$ and $B = -${change2}$.\nStep 2: Net = $${change1} - ${change2} + \\frac{${change1} \\times (-${change2})}{100} = ${net.toFixed(2)}\\%$.`;
                        shortcut = `Direct formula: $${change1} - ${change2} - \\frac{${change1 * change2}}{100} = ${net.toFixed(2)}\\%$`;
                    } else if (patternType === 2) {
                        const salary = getVal(2000, 6000, 2) * 10;
                        const rent = getVal(15, 25, 3);
                        const food = getVal(25, 40, 4);
                        const savingsPercent = 100 - rent - food;
                        const savings = (salary * savingsPercent) / 100;
                        text = `$${name1}$ earns a monthly salary of $${salary}$. If they spend $${rent}\\%$ on house rent and $${food}\\%$ on food, how much do they save each month?`;
                        answer = `$${savings}`;
                        options = [answer, `$${salary - savings}`, `$${savings - 150}`, `$${savings + 200}`];
                        formula = "Remaining percentage = $100\\% - \\text{spent}\\%$";
                        solution = `Step 1: Total spent percentage = $${rent}\\% + ${food}\\% = ${rent + food}\\%$.\nStep 2: Savings percentage = $100\\% - ${rent + food}\\% = ${savingsPercent}\\%$.\nStep 3: Savings value = $${salary} \\times \\frac{${savingsPercent}}{100} = ${savings}$.`;
                        shortcut = `Compute remaining percentage $${savingsPercent}\\%$ of $${salary}$ directly to get $${savings}$.`;
                    } else if (patternType === 3) {
                        const price = getVal(20, 50, 2);
                        const reduction = parseFloat(((price / (100 + price)) * 100).toFixed(2));
                        text = `If the price of sugar increases by $${price}\\%$, by how much percentage must a household reduce its consumption so that the total expenditure remains unchanged?`;
                        answer = `${reduction}\\%`;
                        options = [answer, `${price}\\%`, `${(price * 0.8).toFixed(2)}\\%`, `${(price * 1.2).toFixed(2)}\\%`];
                        formula = "Reduction\\% = $\\frac{R}{100 + R} \\times 100\\%$";
                        solution = `Step 1: Price increases by $R = ${price}\\%$.\nStep 2: Apply formula: $\\frac{${price}}{100 + ${price}} \\times 100 = \\frac{${price}}{${100 + price}} \\times 100 = ${reduction}\\%$.`;
                        shortcut = `Use ratio: price increases by $1/${100/price}$, so consumption reduces by $1/(${100/price} + 1) = ${reduction}\\%$.`;
                    } else if (patternType === 4) {
                        const passPercent = getVal(33, 40, 2);
                        const marks = getVal(120, 220, 3);
                        const failDiff = getVal(10, 35, 4);
                        const totalMarks = Math.round(((marks + failDiff) / passPercent) * 100);
                        text = `A student has to secure $${passPercent}\\%$ marks to pass an examination. If he gets $${marks}$ marks and fails by $${failDiff}$ marks, find the maximum marks of the exam.`;
                        answer = totalMarks.toString();
                        options = [answer, (totalMarks - 100).toString(), (totalMarks + 120).toString(), (totalMarks * 1.5).toString()];
                        formula = "Pass Marks = Student Marks + Failing Difference. Max Marks = $\\frac{\\text{Pass Marks}}{\\text{Pass}\\%} \\times 100$.";
                        solution = `Step 1: Calculate passing marks = $${marks} + ${failDiff} = ${marks + failDiff}$.\nStep 2: Maximum marks = $\\frac{${marks + failDiff}}{${passPercent}} \\times 100 = ${totalMarks}$.`;
                        shortcut = `Pass marks are $${marks + failDiff}$ which represents $${passPercent}\\%$. Total marks = $\\frac{${marks + failDiff}}{0.${passPercent}} = ${totalMarks}$.`;
                    } else if (patternType === 5) {
                        const diffPercent = getVal(10, 30, 3);
                        text = `If $${name1}$'s salary is $${diffPercent}\\%$ less than $${name2}$'s salary, then by what percentage is $${name2}$'s salary more than $${name1}$'s salary?`;
                        const res = parseFloat(((diffPercent / (100 - diffPercent)) * 100).toFixed(2));
                        answer = `${res}\\%`;
                        options = [answer, `${diffPercent}\\%`, `${(res + 2.5).toFixed(2)}\\%`, `${(diffPercent * 1.1).toFixed(2)}\\%`];
                        formula = "Increase\\% = $\\frac{R}{100 - R} \\times 100\\%$";
                        solution = `Step 1: Let $${name2}$'s salary be 100. Then $${name1}$'s salary is $100 - ${diffPercent} = ${100 - diffPercent}$.\nStep 2: Difference of $${name2}$ over $${name1}$ = $\\frac{${diffPercent}}{${100 - diffPercent}} \\times 100 = ${res}\\%$.`;
                        shortcut = `Use standard ratio shifts: $R / (100 - R) = ${res}\\%$.`;
                    } else {
                        const initial = getVal(10, 30, 2) * 1000;
                        const years = 2;
                        const rate = getVal(5, 15, 3);
                        const finalVal = Math.round(initial * Math.pow(1 - rate / 100, years));
                        text = `The value of a machine depreciates at the rate of $${rate}\\%$ per annum. If its present value is $${initial}$, what will be its value after $${years}$ years?`;
                        answer = finalVal.toString();
                        options = [answer, (finalVal - 200).toString(), (finalVal + 350).toString(), initial.toString()];
                        formula = "Depreciated Value = $P(1 - \\frac{R}{100})^N$.";
                        solution = `Step 1: Current value $P = ${initial}$, rate $R = ${rate}\\%$, years $N = ${years}$.\nStep 2: Value after $${years}$ years = $${initial} \\times (1 - \\frac{${rate}}{100})^2 = ${finalVal}$.`;
                        shortcut = `Apply successive decreases: $${initial} \\times 0.${100 - rate} \\times 0.${100 - rate} = ${finalVal}$.`;
                    }
                    break;
                }
                case 'profit_loss': {
                    if (patternType === 1) {
                        const cp = getVal(100, 500, 2) * 5;
                        const markPercent = getVal(20, 50, 3);
                        const discPercent = getVal(10, 25, 4);
                        const netProfitPercent = markPercent - discPercent - (markPercent * discPercent / 100);
                        text = `An article costing $${cp}$ is marked up by $${markPercent}\\%$ and then sold after giving a discount of $${discPercent}\\%$. Find the net profit or loss percentage.`;
                        answer = `${netProfitPercent >= 0 ? "Profit" : "Loss"} of ${Math.abs(netProfitPercent).toFixed(2)}\\%`;
                        options = [answer, `${netProfitPercent >= 0 ? "Loss" : "Profit"} of ${Math.abs(netProfitPercent).toFixed(2)}\\%`, `Profit of ${(markPercent - discPercent).toFixed(2)}\\%`, "No Profit, No Loss"];
                        formula = "Net Gain = Markup - Discount - $\\frac{\\text{Markup} \\times \\text{Discount}}{100}$.";
                        solution = `Step 1: Mark up of $${markPercent}\\%$ and discount of $${discPercent}\\%$.\nStep 2: Apply successive change formula: $${markPercent} - ${discPercent} - \\frac{${markPercent} \\times ${discPercent}}{100} = ${netProfitPercent.toFixed(2)}\\%$.`;
                        shortcut = `Use successive formula: $${markPercent} - ${discPercent} - ${markPercent * discPercent / 100} = ${netProfitPercent.toFixed(2)}\\%$.`;
                    } else if (patternType === 2) {
                        const cpA = getVal(200, 800, 2) * 10;
                        const profitA = getVal(10, 25, 3);
                        const lossB = getVal(5, 15, 4);
                        const priceB = cpA * (1 + profitA / 100);
                        const priceC = Math.round(priceB * (1 - lossB / 100));
                        text = `$${name1}$ sells a watch to $${name2}$ at a profit of $${profitA}\\%$, and $${name2}$ sells it to $${name3}$ at a loss of $${lossB}\\%$. If $${name3}$ pays $$${priceC}$ for it, what was the cost price of the watch for $${name1}$?`;
                        answer = `$${cpA}`;
                        options = [answer, `$${priceC}`, `$${Math.round(cpA * 0.95)}`, `$${cpA + 100}`];
                        formula = "Final Price = Initial Price $\\times (1 + P_1) \\times (1 - L_2)$.";
                        solution = `Step 1: Initial cost is $X$. Price B = $X \\times (1 + \\frac{${profitA}}{100})$. Price C = Price B $\\times (1 - \\frac{${lossB}}{100}) = ${priceC}$.\nStep 2: Solve for $X$: $X \\times ${(1 + profitA/100).toFixed(2)} \\times ${(1 - lossB/100).toFixed(2)} = ${priceC} \\implies X = ${cpA}$.`;
                        shortcut = `Reverse calculate: $${priceC} / (1 - 0.${lossB}) / (1 + 0.${profitA}) = ${cpA}$.`;
                    } else if (patternType === 3) {
                        const cheatWeight = getVal(800, 950, 2);
                        const profitPercent = parseFloat(((1000 - cheatWeight) / cheatWeight * 100).toFixed(2));
                        text = `A dishonest dealer claims to sell his goods at cost price, but he uses a false weight of $${cheatWeight}$ grams instead of a kilogram. What is his net profit percentage?`;
                        answer = `${profitPercent}\\%`;
                        options = [answer, `${(1000 - cheatWeight) / 10}\\%`, `${(profitPercent * 0.9).toFixed(2)}\\%`, "10.00\\%"];
                        formula = "Profit\\% = $\\frac{\\text{Error}}{\\text{True Value} - \\text{Error}} \\times 100\\%$";
                        solution = `Step 1: True value = 1000g, weight used = $${cheatWeight}$g. Error = $1000 - ${cheatWeight} = ${1000 - cheatWeight}$g.\nStep 2: Profit\\% = $\\frac{${1000 - cheatWeight}}{${cheatWeight}} \\times 100 = ${profitPercent}\\%$.`;
                        shortcut = `Gain is $\\frac{\\text{saving}}{\\text{actual output}} = \\frac{${1000 - cheatWeight}}{${cheatWeight}} = ${profitPercent}\\%$.`;
                    } else if (patternType === 4) {
                        const cpCount = getVal(15, 25, 2);
                        const spCount = getVal(10, cpCount - 2, 3);
                        const profit = parseFloat(((cpCount - spCount) / spCount * 100).toFixed(2));
                        text = `The cost price of $${cpCount}$ articles is equal to the selling price of $${spCount}$ articles. Find the profit percentage.`;
                        answer = `${profit}\\%`;
                        options = [answer, `${((cpCount - spCount) / cpCount * 100).toFixed(2)}\\%`, `${(profit + 5).toFixed(2)}\\%`, "20.00\\%"];
                        formula = "Profit\\% = $\\frac{\\text{CP Articles} - \\text{SP Articles}}{\\text{SP Articles}} \\times 100\\%$";
                        solution = `Step 1: Let CP of 1 article be $1. CP of $${cpCount}$ articles = $${cpCount}$ = SP of $${spCount}$ articles.\nStep 2: Profit on selling $${spCount}$ articles = $${cpCount} - ${spCount} = ${cpCount - spCount}$.\nStep 3: Profit\\% = $\\frac{${cpCount - spCount}}{${spCount}} \\times 100 = ${profit}\\%$.`;
                        shortcut = `Ratio of CP:SP = $${spCount}:${cpCount}$. Profit = $\\frac{${cpCount - spCount}}{${spCount}} = ${profit}\\%$.`;
                    } else if (patternType === 5) {
                        const sp = getVal(120, 250, 2) * 10;
                        const gainRate = getVal(10, 25, 3);
                        const cp = Math.round(sp * 100 / (100 + gainRate));
                        const newSp = cp - getVal(10, 30, 4);
                        const netDiff = parseFloat(((newSp - cp) / cp * 100).toFixed(2));
                        answer = `${netDiff >= 0 ? "Profit" : "Loss"} of ${Math.abs(netDiff)}\\%`;
                        options = [answer, `${netDiff >= 0 ? "Loss" : "Profit"} of ${Math.abs(netDiff)}\\%`, "No Profit, No Loss", "Loss of 10.00\\%"];
                        formula = "CP = $\\frac{\\text{SP} \\times 100}{100 + P\\%}$. New Profit/Loss\\% = $\\frac{\\text{New SP} - \\text{CP}}{\\text{CP}} \\times 100$.";
                        solution = `Step 1: Calculate Cost Price: CP = $\\frac{${sp} \\times 100}{100 + ${gainRate}} = ${cp}$.\nStep 2: Compare New SP ($${newSp}$) with CP ($${cp}$).\nStep 3: Profit/Loss = $\\frac{${newSp} - ${cp}}{${cp}} \\times 100 = ${netDiff}\\%$.`;
                        shortcut = `First find CP = $${cp}$, then compare with new SP to get $${netDiff}\\%$ directly.`;
                    } else {
                        const sp = getVal(500, 1500, 2) * 10;
                        const rate = getVal(10, 20, 3);
                        const lossVal = (rate * rate) / 100;
                        text = `$${name1}$ sells two products for $$${sp}$ each. On one, they gain $${rate}\\%$, and on the other, they lose $${rate}\\%$. What is the net profit or loss percentage on the entire transaction?`;
                        answer = `Loss of ${lossVal.toFixed(2)}\\%`;
                        options = [answer, `Profit of ${lossVal.toFixed(2)}\\%`, "No Profit, No Loss", `Loss of ${(rate * 2).toFixed(2)}\\%`];
                        formula = "Net change when selling two identical items at $+x\\\%$ and $-x\\\%$ is always a loss of $(\\frac{x}{10})^2 \\%$.";
                        solution = `Step 1: Selling price is identical. Profit and Loss percentages are equal ($${rate}\\%$).\nStep 2: Net change is always a loss of $\\frac{${rate}^2}{100}\\%$ = ${lossVal.toFixed(2)}\\%.`;
                        shortcut = `Loss of $(\\frac{${rate}}{10})^2 \\% = ${lossVal.toFixed(2)}\\%$.`;
                    }
                    break;
                }
                case 'ratio_proportion': {
                    if (patternType === 1) {
                        const ratioSum = getVal(10, 20, 2);
                        const valA = getVal(2, 6, 3);
                        const valB = getVal(3, 7, 4);
                        const valC = ratioSum - valA - valB;
                        const totalMoney = ratioSum * getVal(40, 150, 5);
                        const shareB = (totalMoney / ratioSum) * valB;
                        text = `A sum of $${totalMoney}$ is divided among A, B, and C in the ratio $${valA}:${valB}:${valC}$. What is the share of B?`;
                        answer = `$${shareB}`;
                        options = [answer, `$${(totalMoney / ratioSum) * valA}`, `$${(totalMoney / ratioSum) * valC}`, `$${shareB + 50}`];
                        formula = "Share = Total $\\times \\frac{\\text{Individual Ratio}}{\\text{Sum of Ratios}}$";
                        solution = `Step 1: Sum of ratios = $${valA} + ${valB} + ${valC} = ${ratioSum}$.\nStep 2: Share of B = $\\frac{${valB}}{${ratioSum}} \\times ${totalMoney} = ${shareB}$.`;
                        shortcut = `One unit = $${totalMoney}/${ratioSum} = ${totalMoney/ratioSum}$. B's share = $${valB} \\times ${totalMoney/ratioSum} = ${shareB}$.`;
                    } else if (patternType === 2) {
                        const totalMix = getVal(40, 100, 2);
                        const r1 = getVal(3, 5, 3);
                        const r2 = getVal(1, 2, 4);
                        const addedWater = getVal(5, 15, 5);
                        const sum1 = r1 + r2;
                        const milk = (totalMix / sum1) * r1;
                        const water = (totalMix / sum1) * r2;
                        const gcd = (x,y) => y===0?x:gcd(y, x%y);
                        const newRatio = `${milk / gcd(milk, water + addedWater)}:${(water + addedWater) / gcd(milk, water + addedWater)}`;
                        text = `A mixture of $${totalMix}$ liters contains milk and water in the ratio $${r1}:${r2}$. If $${addedWater}$ liters of water are added, find the new ratio of milk to water.`;
                        answer = newRatio;
                        options = [answer, `${r1}:${r2 + 1}`, `5:3`, `4:3`];
                        formula = "Break down mixture, add additions, re-calculate ratio.";
                        solution = `Step 1: Milk in mix = $\\frac{${r1}}{${sum1}} \\times ${totalMix} = ${milk}$L.\nStep 2: Water in mix = ${totalMix - milk} = $${water}$L.\nStep 3: New water = $${water} + ${addedWater} = ${water + addedWater}$L.\nStep 4: New ratio = $${milk} : ${water + addedWater} = ${newRatio}$.`;
                        shortcut = `Find base parts: milk is $${milk}$L, water becomes $${water + addedWater}$L, reduce to $${newRatio}$.`;
                    } else if (patternType === 3) {
                        const capA = getVal(2, 5, 2) * 1000;
                        const capB = getVal(3, 7, 3) * 1000;
                        const monthsA = getVal(6, 12, 4);
                        const monthsB = getVal(6, 12, 5);
                        const totalProfit = getVal(20, 60, 6) * 100;
                        const ratioA = capA * monthsA;
                        const ratioB = capB * monthsB;
                        const gcd = (x,y) => y===0?x:gcd(y, x%y);
                        const commonDiv = gcd(ratioA, ratioB);
                        const shareA = Math.round((ratioA / (ratioA + ratioB)) * totalProfit);
                        text = `$${name1}$ and $${name2}$ enter a partnership. $${name1}$ invests $$${capA}$ for $${monthsA}$ months and $${name2}$ invests $$${capB}$ for $${monthsB}$ months. If the total profit is $$${totalProfit}$, find $${name1}$'s share of the profit.`;
                        answer = `$${shareA}`;
                        options = [answer, `$${totalProfit - shareA}`, `$${shareA - 100}`, `$${shareA + 120}`];
                        formula = "Profit Ratio = $(C_A \\times T_A) : (C_B \\times T_B)$";
                        solution = `Step 1: Profit ratio = $(${capA} \\times ${monthsA}) : (${capB} \\times ${monthsB}) = ${ratioA} : ${ratioB} = ${ratioA/commonDiv} : ${ratioB/commonDiv}$.\nStep 2: $${name1}$'s profit share = $\\frac{${ratioA/commonDiv}}{${(ratioA+ratioB)/commonDiv}} \\times ${totalProfit} = ${shareA}$.`;
                        shortcut = `Calculate investment products: $${ratioA}$ and $${ratioB}$. Apportion total profit $${totalProfit}$ in this ratio.`;
                    } else if (patternType === 4) {
                        const r1 = getVal(1, 3, 3);
                        const r2 = getVal(2, 4, 4);
                        const r3 = getVal(3, 5, 5);
                        const denomSum = r1 * 1.0 + r2 * 0.5 + r3 * 0.25;
                        const factor = getVal(10, 30, 6);
                        const totalValue = Math.round(denomSum * factor);
                        const fiftyPenceCoins = r2 * factor;
                        text = `A bag contains $1$, $50$ paise, and $25$ paise coins in the ratio $${r1}:${r2}:${r3}$. If the total value of the money is $$${totalValue}$, find the number of $50$ paise coins.`;
                        answer = fiftyPenceCoins.toString();
                        options = [answer, (fiftyPenceCoins - 10).toString(), (fiftyPenceCoins + 20).toString(), (fiftyPenceCoins * 2).toString()];
                        formula = "Value equation: $x \\cdot 1.0 + y \\cdot 0.5 + z \\cdot 0.25 = \\text{Total Value}$.";
                        solution = `Step 1: Let the number of coins be $${r1}k$, $${r2}k$, and $${r3}k$.\nStep 2: Value = $(${r1}k \\times 1.0) + (${r2}k \\times 0.5) + (${r3}k \\times 0.25) = ${denomSum}k$.\nStep 3: $${denomSum}k = ${totalValue} \\implies k = ${factor}$.\nStep 4: Coins of 50p = $${r2}k = ${fiftyPenceCoins}$.`;
                        shortcut = `Set up values of units: $1 \\cdot 1.0 + 50p \\cdot 0.5 + 25p \\cdot 0.25 = ${denomSum}$. Factor = $${totalValue}/${denomSum} = ${factor}$. Answer = $${r2} \\times ${factor} = ${fiftyPenceCoins}$.`;
                    } else if (patternType === 5) {
                        const x1 = getVal(3, 10, 2);
                        const y1 = getVal(4, 12, 3);
                        const y2 = getVal(6, 18, 4);
                        const x2 = parseFloat(((x1 * y2) / y1).toFixed(2));
                        text = `If $X$ varies directly as $Y$, and $X = ${x1}$ when $Y = ${y1}$, find the value of $X$ when $Y = ${y2}$.`;
                        answer = x2.toString();
                        options = [answer, (x2 + 2.5).toString(), (x2 - 1.5).toString(), (x1 * y2).toString()];
                        formula = "$X = kY \\implies \\frac{X_1}{Y_1} = \\frac{X_2}{Y_2}$";
                        solution = `Step 1: Direct variation means $\\frac{X_1}{Y_1} = \\frac{X_2}{Y_2}$.\nStep 2: $\\frac{${x1}}{${y1}} = \\frac{X_2}{${y2}} \\implies X_2 = \\frac{${x1} \\times ${y2}}{${y1}} = ${x2}$.`;
                        shortcut = `Scale factor: $Y$ goes from $${y1}$ to $${y2}$ (times $${(y2/y1).toFixed(2)}$). Scale $X$ by same: $${x1} \\times ${(y2/y1).toFixed(2)} = ${x2}$.`;
                    } else {
                        const a = getVal(4, 12, 2);
                        const b = getVal(8, 24, 3);
                        const c = Math.round((b * b) / a);
                        text = `Find the third proportional to $${a}$ and $${b}$.`;
                        answer = c.toString();
                        options = [answer, (c - 10).toString(), (c + 20).toString(), (a + b).toString()];
                        formula = "Third Proportional $x$ for $a, b$ satisfies $a/b = b/x \\implies x = b^2/a$.";
                        solution = `Step 1: Set up ratio: $\\frac{${a}}{${b}} = \\frac{${b}}{x}$.\nStep 2: $x = \\frac{${b}^2}{${a}} = \\frac{${b * b}}{${a}} = ${c}$.`;
                        shortcut = `Square the second number and divide by first: $${b}^2 / ${a} = ${c}$.`;
                    }
                    break;
                }
                case 'average': {
                    if (patternType === 1) {
                        const count = getVal(5, 15, 2);
                        const oldAvg = getVal(30, 60, 3);
                        const newEntry = getVal(18, 28, 4);
                        const newAvg = parseFloat(((count * oldAvg + newEntry) / (count + 1)).toFixed(2));
                        text = `The average weight of $${count}$ students is $${oldAvg}$ kg. When a new student joins the group, the new average weight is calculated. If the new student weighs $${newEntry}$ kg, what is the new average weight?`;
                        answer = `${newAvg} kg`;
                        options = [answer, `${(newAvg - 1.25).toFixed(2)} kg`, `${(newAvg + 0.95).toFixed(2)} kg`, `${oldAvg} kg`];
                        formula = "New Average = $\\frac{\\text{Old Sum} + \\text{New Weight}}{\\text{Old Count} + 1}$";
                        solution = `Step 1: Total weight of original group = $${count} \\times ${oldAvg} = ${count * oldAvg}$ kg.\nStep 2: Add new weight: $${count * oldAvg} + ${newEntry} = ${count * oldAvg + newEntry}$ kg.\nStep 3: Divide by new count: $\\frac{${count * oldAvg + newEntry}}{${count + 1}} = ${newAvg}$ kg.`;
                        shortcut = `Shift deviation: $\\frac{${newEntry - oldAvg}}{${count + 1}}$. New Average = $${oldAvg} + \\text{shift} = ${newAvg}$.`;
                    } else if (patternType === 2) {
                        const n1 = getVal(10, 30, 2);
                        const n2 = getVal(15, 35, 3);
                        const a1 = getVal(60, 85, 4);
                        const a2 = getVal(50, 75, 5);
                        const weightAvg = parseFloat(((n1 * a1 + n2 * a2) / (n1 + n2)).toFixed(2));
                        text = `In an exam, Section A of $${n1}$ students scored an average of $${a1}$ marks, and Section B of $${n2}$ students scored an average of $${a2}$ marks. Find the combined average marks of both sections.`;
                        answer = weightAvg.toString();
                        options = [answer, (weightAvg - 2.5).toString(), (weightAvg + 3.1).toString(), ((a1 + a2)/2).toFixed(2)];
                        formula = "Weighted Average = $\\frac{n_1 a_1 + n_2 a_2}{n_1 + n_2}$.";
                        solution = `Step 1: Sum A = $${n1} \\times ${a1} = ${n1 * a1}$. Sum B = $${n2} \\times ${a2} = ${n2 * a2}$.\nStep 2: Combined sum = $${n1 * a1} + ${n2 * a2} = ${n1 * a1 + n2 * a2}$. Combined count = $${n1} + ${n2} = ${n1 + n2}$.\nStep 3: Average = $\\frac{${n1 * a1 + n2 * a2}}{${n1 + n2}} = ${weightAvg}$.`;
                        shortcut = "Sum total scores of both sections and divide by total student count.";
                    } else if (patternType === 3) {
                        const s1 = getVal(20, 40, 2);
                        const s2 = getVal(30, 60, 3);
                        const avgSpeed = parseFloat(((2 * s1 * s2) / (s1 + s2)).toFixed(2));
                        text = `$${name1}$ travels from A to B at a speed of $${s1}$ km/h and returns to A at a speed of $${s2}$ km/h. Find the average speed of the entire journey.`;
                        answer = `${avgSpeed} km/h`;
                        options = [answer, `${((s1 + s2)/2).toFixed(2)} km/h`, `${(avgSpeed - 2.5).toFixed(2)} km/h`, `${(avgSpeed + 4.1).toFixed(2)} km/h`];
                        formula = "Harmonic Mean: Average Speed = $\\frac{2xy}{x+y}$ (when distance is constant).";
                        solution = `Step 1: Since distance is identical, apply Harmonic Mean of $${s1}$ and $${s2}$.\nStep 2: Average Speed = $\\frac{2 \\times ${s1} \\times ${s2}}{${s1} + ${s2}} = ${avgSpeed}$ km/h.`;
                        shortcut = `$\\frac{2 \\cdot ${s1} \\cdot ${s2}}{${s1} + ${s2}} = ${avgSpeed}$ km/h.`;
                    } else if (patternType === 4) {
                        const count = getVal(8, 20, 2);
                        const increase = getVal(1, 3, 3);
                        const oldWeight = getVal(50, 75, 4);
                        const newWeight = oldWeight + count * increase;
                        text = `The average weight of $${count}$ crew members increases by $${increase}$ kg when a member weighing $${oldWeight}$ kg is replaced by a new person. What is the weight of the new person?`;
                        answer = `${newWeight} kg`;
                        options = [answer, `${newWeight - 5} kg`, `${newWeight + 10} kg`, `${oldWeight} kg`];
                        formula = "New Weight = Replaced Weight + (Total Count $\\times$ Change in Average).";
                        solution = `Step 1: Total weight increase = $${count} \\times ${increase} = ${count * increase}$ kg.\nStep 2: Weight of new person = weight of replaced person + total increase = $${oldWeight} + ${count * increase} = ${newWeight}$ kg.`;
                        shortcut = `New weight = $${oldWeight} + (${count} \\times ${increase}) = ${newWeight}$ kg.`;
                    } else if (patternType === 5) {
                        const n = getVal(5, 9, 2);
                        const start = getVal(10, 25, 3);
                        const avg = start + (n - 1) / 2;
                        const largest = start + n - 1;
                        text = `The average of $${n}$ consecutive numbers is $${avg}$. Find the largest of these numbers.`;
                        answer = largest.toString();
                        options = [answer, (largest - 2).toString(), (largest + 4).toString(), (avg + 3).toString()];
                        formula = "Largest in $N$ consecutive numbers = Average + $(N - 1)/2$.";
                        solution = `Step 1: The average is the middle term: Term $_{(N+1)/2} = ${avg}$.\nStep 2: The largest term is $(N - 1)/2$ higher than the middle.\nStep 3: Largest = $${avg} + (${n} - 1)/2 = ${largest}$.`;
                        shortcut = `Largest = Average + (Number of terms - 1)/2.`;
                    } else {
                        const tempSum = getVal(100, 140, 2);
                        const avg3 = parseFloat((tempSum / 3).toFixed(2));
                        const addedVal = getVal(35, 48, 3);
                        const newAvg = parseFloat(((tempSum + addedVal) / 4).toFixed(2));
                        text = `The average temperature of Mon, Tue, and Wed was $${avg3}^{\\circ}$C. If the temperature of Thursday was $${addedVal}^{\\circ}$C, find the average temperature of these four days.`;
                        answer = `${newAvg}^{\\circ}$C`;
                        options = [answer, `${(newAvg - 1.5).toFixed(2)}^{\\circ}$C`, `${(newAvg + 2.1).toFixed(2)}^{\\circ}$C`, `${avg3}^{\\circ}$C`];
                        formula = "Combined Average = $\\frac{\\text{Old Sum} + \\text{New Temp}}{4}$";
                        solution = `Step 1: Sum of Mon, Tue, Wed = $3 \\times ${avg3} = ${tempSum}^{\\circ}$C.\nStep 2: Add Thursday: $${tempSum} + ${addedVal} = ${tempSum + addedVal}^{\\circ}$C.\nStep 3: New average = $\\frac{${tempSum + addedVal}}{4} = ${newAvg}^{\\circ}$C.`;
                        shortcut = `$\\frac{3 \\cdot ${avg3} + ${addedVal}}{4} = ${newAvg}$.`;
                    }
                    break;
                }
                case 'time_work': {
                    if (patternType === 1) {
                        const efficiencyFactor = getVal(2, 3, 2);
                        const daysA = getVal(12, 36, 3);
                        const daysB = daysA * efficiencyFactor;
                        const combined = parseFloat(((daysA * daysB) / (daysA + daysB)).toFixed(2));
                        text = `$${name1}$ is $${efficiencyFactor}$ times as efficient as $${name2}$. If $${name1}$ can complete a project in $${daysA}$ days, how many days will they take working together?`;
                        answer = `${combined} days`;
                        options = [answer, `${(combined * 1.25).toFixed(2)} days`, `${(combined - 1.5).toFixed(2)} days`, `${daysB} days`];
                        formula = "Combined Time = $\\frac{\\text{Total Work}}{\\text{Combined Efficiency}}$.";
                        solution = `Step 1: Let $${name2}$'s efficiency be 1 unit/day. $${name1}$ is $${efficiencyFactor}$ units/day.\nStep 2: Total Work = $${efficiencyFactor} \\times ${daysA} = ${efficiencyFactor * daysA}$ units.\nStep 3: Combined time = $\\frac{${efficiencyFactor * daysA}}{${efficiencyFactor} + 1} = ${combined}$ days.`;
                        shortcut = `Time = $\\frac{\\text{Days of } A}{1 + 1/\\text{factor}} = \\frac{${daysA}}{1 + 1/${efficiencyFactor}} = ${combined}$ days.`;
                    } else if (patternType === 2) {
                        const daysA = getVal(10, 20, 2);
                        const daysB = getVal(12, 24, 3);
                        const leftDays = getVal(2, 5, 4);
                        const gcd = (x,y) => y===0?x:gcd(y, x%y);
                        const totalWork = daysA * daysB / gcd(daysA, daysB);
                        const effA = totalWork / daysA;
                        const effB = totalWork / daysB;
                        const done = (effA + effB) * leftDays;
                        const remaining = totalWork - done;
                        const remainingDays = parseFloat((remaining / effB).toFixed(2));
                        text = `$${name1}$ and $${name2}$ can complete a work in $${daysA}$ and $${daysB}$ days respectively. They work together for $${leftDays}$ days, after which $${name1}$ leaves. In how many days will $${name2}$ finish the remaining work?`;
                        answer = `${remainingDays} days`;
                        options = [answer, `${(remainingDays + 2).toFixed(2)} days`, `${(remainingDays - 1.5).toFixed(2)} days`, `${daysB} days`];
                        formula = "Work Rate: $W = \\text{Rate} \\times \\text{Time}$";
                        solution = `Step 1: Let Total Work = LCM($${daysA}, ${daysB}$) = $${totalWork}$ units.\nStep 2: Efficiency A = $${effA}$ units/day, B = $${effB}$ units/day.\nStep 3: Work done in $${leftDays}$ days = $(${effA} + ${effB}) \\times ${leftDays} = ${done}$ units.\nStep 4: Remaining work = $${totalWork} - ${done} = ${remaining}$ units.\nStep 5: Days for B = $${remaining} / ${effB} = ${remainingDays}$ days.`;
                        shortcut = "LCM units approach to count work increments.";
                    } else if (patternType === 3) {
                        const daysA = getVal(8, 16, 2);
                        const daysB = getVal(12, 20, 3);
                        const gcd = (x,y) => y===0?x:gcd(y, x%y);
                        const totalWork = daysA * daysB / gcd(daysA, daysB);
                        const effA = totalWork / daysA;
                        const effB = totalWork / daysB;
                        let cycleWork = effA + effB;
                        let cycles = Math.floor(totalWork / cycleWork);
                        let workDone = cycles * cycleWork;
                        let days = cycles * 2;
                        if (totalWork - workDone > 0) {
                            let rem = totalWork - workDone;
                            if (rem <= effA) {
                                days += rem / effA;
                            } else {
                                days += 1 + (rem - effA) / effB;
                            }
                        }
                        const finalDays = parseFloat(days.toFixed(2));
                        text = `$${name1}$ can do a work in $${daysA}$ days and $${name2}$ in $${daysB}$ days. If they work on alternate days starting with $${name1}$, in how many days will the work be completed?`;
                        answer = `${finalDays} days`;
                        options = [answer, `${(finalDays + 1).toFixed(2)} days`, `${(finalDays - 1).toFixed(2)} days`, `${(daysA + daysB)/2} days`];
                        formula = "Alternate days iteration model.";
                        solution = `Step 1: Total Work = LCM($${daysA}, ${daysB}$) = $${totalWork}$ units.\nStep 2: Efficiency A = $${effA}$, B = $${effB}$ units/day.\nStep 3: Days count is alternating cycle iterations = ${finalDays} days.`;
                        shortcut = "Break down into 2-day cycle blocks.";
                    } else if (patternType === 4) {
                        const men = getVal(2, 4, 2);
                        const women = getVal(4, 8, 3);
                        const days = getVal(10, 20, 4);
                        const askMen = getVal(3, 5, 5);
                        const askWomen = getVal(2, 6, 6);
                        const ratio = women / men;
                        const eqWomen = askMen * ratio + askWomen;
                        const finalDays = parseFloat(((women * days) / eqWomen).toFixed(2));
                        text = `If $${men}$ men or $${women}$ women can complete a task in $${days}$ days, how many days will it take for $${askMen}$ men and $${askWomen}$ women to complete it together?`;
                        answer = `${finalDays} days`;
                        options = [answer, `${(finalDays * 1.5).toFixed(2)} days`, `${(finalDays - 2.1).toFixed(2)} days`, `${days} days`];
                        formula = "Or/And conversion: $M_1 D_1 = M_2 D_2$.";
                        solution = `Step 1: $${men}$ Men = $${women}$ Women $\\implies 1$ Man = $${ratio}$ Women.\nStep 2: Convert $${askMen}$ Men + $${askWomen}$ Women = $(${askMen} \\times ${ratio}) + ${askWomen} = ${eqWomen}$ Women.\nStep 3: Apply $W_1 D_1 = W_2 D_2 \\implies ${women} \\times ${days} = ${eqWomen} \\times X \\implies X = ${finalDays}$ days.`;
                        shortcut = "Convert men to women equivalents and use inverse proportion.";
                    } else if (patternType === 5) {
                        const pipeA = getVal(6, 12, 2);
                        const pipeB = getVal(8, 16, 3);
                        const togetherVal = parseFloat(((pipeA * pipeB) / (pipeA + pipeB)).toFixed(2));
                        text = `Pipe A can fill a tank in $${pipeA}$ hours, and Pipe B can fill the same tank in $${pipeB}$ hours. In how many hours can both pipes fill the tank together?`;
                        answer = `${togetherVal} hours`;
                        options = [answer, `${(togetherVal + 1.25).toFixed(2)} hours`, `${(togetherVal - 0.75).toFixed(2)} hours`, `${pipeA + pipeB} hours`];
                        formula = "Combined Time = $\\frac{A \\cdot B}{A + B}$.";
                        solution = `Step 1: Rates of Pipe A = $1/${pipeA}$ and B = $1/${pipeB}$.\nStep 2: Combined rate = $1/${pipeA} + 1/${pipeB} = \\frac{${pipeA} + ${pipeB}}{${pipeA * pipeB}}$.\nStep 3: Time taken = $\\frac{${pipeA} \\times ${pipeB}}{${pipeA} + ${pipeB}} = ${togetherVal}$ hours.`;
                        shortcut = `Direct formula: $\\frac{${pipeA} \\times ${pipeB}}{${pipeA} + ${pipeB}} = ${togetherVal}$ hours.`;
                    } else {
                        const pipeA = getVal(6, 12, 2);
                        const pipeB = getVal(8, 16, 3);
                        const netTime = parseFloat(((pipeA * pipeB) / (pipeB - pipeA)).toFixed(2));
                        text = `An inlet pipe A can fill a cistern in $${pipeA}$ hours. Due to a leak in the bottom, it takes $${pipeB}$ hours to fill. In how many hours can the leak empty the full cistern?`;
                        answer = `${netTime} hours`;
                        options = [answer, `${(netTime - 4).toFixed(2)} hours`, `${(netTime + 8).toFixed(2)} hours`, `${pipeA + pipeB} hours`];
                        formula = "Leak Rate = $\\frac{1}{A} - \\frac{1}{\\text{Fill Time}} \\implies \\text{Leak Time} = \\frac{A \\cdot B}{B - A}$.";
                        solution = `Step 1: Let the emptying leak rate be $1/L$. Net fill rate = $1/${pipeA} - 1/L = 1/${pipeB}$.\nStep 2: $1/L = 1/${pipeA} - 1/${pipeB} = \\frac{${pipeB} - ${pipeA}}{${pipeA * pipeB}}$.\nStep 3: Leak time = $\\frac{${pipeA * pipeB}}{${pipeB - pipeA}} = ${netTime}$ hours.`;
                        shortcut = `Time = $\\frac{A \\cdot B}{B - A} = \\frac{${pipeA} \\times ${pipeB}}{${pipeB - pipeA}} = ${netTime}$ hours.`;
                    }
                    break;
                }
                case 'time_distance': {
                    if (patternType === 1) {
                        const speed1 = getVal(40, 80, 2);
                        const speed2 = getVal(50, 90, 3);
                        const distance = getVal(200, 500, 4);
                        const meetingTime = parseFloat((distance / (speed1 + speed2)).toFixed(2));
                        text = `Two trains start from stations A and B, $${distance}$ km apart, and travel towards each other at speeds of $${speed1}$ km/h and $${speed2}$ km/h respectively. After how many hours will they meet?`;
                        answer = `${meetingTime} hours`;
                        options = [answer, `${(meetingTime + 0.5).toFixed(2)} hours`, `${(meetingTime - 0.35).toFixed(2)} hours`, `${(distance / Math.abs(speed1 - speed2)).toFixed(2)} hours`];
                        formula = "Relative Speed = $S_1 + S_2$ (opposite directions). Time = $\\frac{\\text{Distance}}{\\text{Relative Speed}}$.";
                        solution = `Step 1: Relative speed is $${speed1} + ${speed2} = ${speed1 + speed2}$ km/h.\nStep 2: Distance is $${distance}$ km.\nStep 3: Meeting time = $\\frac{${distance}}{${speed1 + speed2}} = ${meetingTime}$ hours.`;
                        shortcut = `Relative Time = $\\frac{D}{S_1 + S_2} = \\frac{${distance}}{${speed1} + ${speed2}} = ${meetingTime}$ hours.`;
                    } else if (patternType === 2) {
                        const delay = getVal(10, 30, 3);
                        const normalTime = delay * 3;
                        text = `Walking at $\\frac{3}{4}$ of their normal speed, $${name1}$ is $${delay}$ minutes late to reach their office. Find their normal time to reach.`;
                        answer = `${normalTime} minutes`;
                        options = [answer, `${normalTime + delay} minutes`, `${normalTime - 10} minutes`, `${delay * 4} minutes`];
                        formula = "Inverse Proportion of Speed and Time: $S_1 T_1 = S_2 T_2$.";
                        solution = `Step 1: Since speed becomes $\\frac{3}{4}$, time becomes $\\frac{4}{3}$ of normal time ($T$).\nStep 2: Increase in time = $\\frac{4}{3}T - T = \\frac{1}{3}T = ${delay}$ minutes.\nStep 3: Normal time $T = ${delay} \\times 3 = ${normalTime}$ minutes.`;
                        shortcut = `Normal Time = Delay $\\times \\frac{\\text{Numerator}}{\\text{Denominator} - \\text{Numerator}} = ${delay} \\times \\frac{3}{4 - 3} = ${normalTime}$ minutes.`;
                    } else if (patternType === 3) {
                        const speedKmh = getVal(45, 90, 2);
                        const lengthTrain = getVal(100, 250, 3);
                        const lengthBridge = getVal(150, 400, 4);
                        const speedMs = speedKmh * 5 / 18;
                        const totalDist = lengthTrain + lengthBridge;
                        const timeTaken = parseFloat((totalDist / speedMs).toFixed(2));
                        text = `A train $${lengthTrain}$ m long is traveling at a speed of $${speedKmh}$ km/h. How much time will it take to pass a bridge of length $${lengthBridge}$ m?`;
                        answer = `${timeTaken} seconds`;
                        options = [answer, `${(timeTaken + 5).toFixed(2)} seconds`, `${(timeTaken - 3.5).toFixed(2)} seconds`, `${(lengthBridge / speedMs).toFixed(2)} seconds`];
                        formula = "Time = $\\frac{\\text{Train Length} + \\text{Bridge Length}}{\\text{Speed in m/s}}$.";
                        solution = `Step 1: Convert speed: $${speedKmh}$ km/h = $${speedMs.toFixed(2)}$ m/s.\nStep 2: Total distance = $${lengthTrain} + ${lengthBridge} = ${totalDist}$ m.\nStep 3: Time = $\\frac{${totalDist}}{${speedMs.toFixed(2)}} = ${timeTaken}$ seconds.`;
                        shortcut = `Convert speed to m/s, divide total distance $(${lengthTrain}+${lengthBridge})$ by speed.`;
                    } else if (patternType === 4) {
                        const distLead = getVal(100, 300, 2);
                        const speedThief = getVal(8, 12, 3);
                        const speedPolice = speedThief + getVal(2, 4, 4);
                        const relSpeedKmh = speedPolice - speedThief;
                        const relSpeedMs = relSpeedKmh * 5 / 18;
                        const timeTakenSec = distLead / relSpeedMs;
                        const distanceThief = Math.round((speedThief * 5 / 18) * timeTakenSec);
                        text = `A police officer spots a thief at a distance of $${distLead}$ meters. The police officer runs at $${speedPolice}$ km/h and the thief runs at $${speedThief}$ km/h. How far will the thief have run before they are caught?`;
                        answer = `${distanceThief} meters`;
                        options = [answer, `${distanceThief + distLead} meters`, `${distanceThief - 50} meters`, `${distLead * 2} meters`];
                        formula = "Relative Speed = $S_p - S_t$. Time = $\\frac{\\text{Lead Distance}}{\\text{Relative Speed}}$. Distance = Speed $\\times$ Time.";
                        solution = `Step 1: Relative speed = $${speedPolice} - ${speedThief} = ${relSpeedKmh}$ km/h.\nStep 2: Thief distance run = $S_t \\times T = ${distanceThief}$ meters.`;
                        shortcut = "Ratio of speeds is ratio of distance covered: Police:Thief = speed ratio.";
                    } else if (patternType === 5) {
                        const lengthTrack = getVal(4, 10, 2) * 100;
                        const speed1 = getVal(10, 20, 3);
                        const speed2 = getVal(15, 25, 4);
                        const meetTime = Math.round(lengthTrack / (speed1 + speed2));
                        text = `Two runners run in opposite directions around a circular track of length $${lengthTrack}$ meters. If their speeds are $${speed1}$ m/s and $${speed2}$ m/s respectively, after how many seconds will they meet for the first time?`;
                        answer = `${meetTime} seconds`;
                        options = [answer, (meetTime + 10).toString(), (meetTime - 15).toString(), "100 seconds"];
                        formula = "Circular meeting time = $\\frac{\\text{Track Length}}{S_1 + S_2}$ (opposite directions).";
                        solution = `Step 1: Relative speed of runners = $${speed1} + ${speed2} = ${speed1 + speed2}$ m/s.\nStep 2: Meeting time = $\\frac{${lengthTrack}}{${speed1 + speed2}} = ${meetTime}$ seconds.`;
                        shortcut = `Time = $\\frac{L}{S_1 + S_2} = \\frac{${lengthTrack}}{${speed1} + ${speed2}} = ${meetTime}$ seconds.`;
                    } else {
                        const dist = getVal(15, 45, 2);
                        const speedNormal = getVal(10, 25, 3);
                        const timeNormal = dist / speedNormal;
                        const speedNew = speedNormal + 5;
                        const timeSavedMin = Math.round((timeNormal - dist / speedNew) * 60);
                        text = `If a motorist drives at $${speedNew}$ km/h instead of $${speedNormal}$ km/h to cover a distance of $${dist}$ km, how many minutes will they save?`;
                        answer = `${timeSavedMin} minutes`;
                        options = [answer, `${timeSavedMin + 5} minutes`, `${timeSavedMin - 2} minutes`, "30 minutes"];
                        formula = "Time Difference = $\\frac{D}{S_{\\text{old}}} - \\frac{D}{S_{\\text{new}}}$";
                        solution = `Step 1: Difference in travel time = $(${dist}/${speedNormal} \\times 60) - (${dist}/${speedNew} \\times 60) = ${timeSavedMin}$ minutes.`;
                        shortcut = `Convert times to minutes and subtract.`;
                    }
                    break;
                }
                case 'speed_distance': {
                    if (patternType === 1) {
                        const speedBoat = getVal(12, 24, 2);
                        const speedStream = getVal(2, 6, 3);
                        const dist = getVal(30, 90, 4);
                        const timeTaken = parseFloat((dist / (speedBoat - speedStream)).toFixed(2));
                        text = `A boat can travel at $${speedBoat}$ km/h in still water. If the speed of the stream is $${speedStream}$ km/h, how much time will it take to travel $${dist}$ km upstream?`;
                        answer = `${timeTaken} hours`;
                        options = [answer, `${(dist / (speedBoat + speedStream)).toFixed(2)} hours`, `${(timeTaken + 0.8).toFixed(2)} hours`, `${(dist / speedBoat).toFixed(2)} hours`];
                        formula = "Upstream Speed = Speed of Boat - Speed of Stream. Time = $\\frac{\\text{Distance}}{\\text{Upstream Speed}}$.";
                        solution = `Step 1: Upstream speed = $${speedBoat} - ${speedStream} = ${speedBoat - speedStream}$ km/h.\nStep 2: Time taken = $\\frac{${dist}}{${speedBoat - speedStream}} = ${timeTaken}$ hours.`;
                        shortcut = `Upstream Time = $\\frac{${dist}}{${speedBoat} - ${speedStream}} = ${timeTaken}$ hours.`;
                    } else if (patternType === 2) {
                        const upstreamSp = getVal(8, 15, 2);
                        const downstreamSp = upstreamSp + getVal(4, 10, 3);
                        const speedStill = (downstreamSp + upstreamSp) / 2;
                        const speedCurrent = (downstreamSp - upstreamSp) / 2;
                        text = `A boat travels upstream at $${upstreamSp}$ km/h and downstream at $${downstreamSp}$ km/h. Find the speed of the boat in still water.`;
                        answer = `${speedStill} km/h`;
                        options = [answer, `${speedCurrent} km/h`, `${speedStill + 1.5} km/h`, `${speedStill - 2} km/h`];
                        formula = "Speed in Still Water = $\\frac{\\text{Downstream} + \\text{Upstream}}{2}$.";
                        solution = `Step 1: Downstream speed $D = ${downstreamSp}$, Upstream $U = ${upstreamSp}$.\nStep 2: Speed in still water = $\\frac{${downstreamSp} + ${upstreamSp}}{2} = ${speedStill}$ km/h.`;
                        shortcut = `Average of speeds: $\\frac{${downstreamSp} + ${upstreamSp}}{2} = ${speedStill}$ km/h.`;
                    } else if (patternType === 3) {
                        const upstreamSp = getVal(8, 15, 2);
                        const downstreamSp = upstreamSp + getVal(4, 10, 3);
                        const speedCurrent = (downstreamSp - upstreamSp) / 2;
                        text = `A boat travels upstream at $${upstreamSp}$ km/h and downstream at $${downstreamSp}$ km/h. Find the velocity of the current.`;
                        answer = `${speedCurrent} km/h`;
                        options = [answer, `${(downstreamSp + upstreamSp)/2} km/h`, `${speedCurrent + 0.5} km/h`, `1.5 km/h`];
                        formula = "Current Speed = $\\frac{\\text{Downstream} - \\text{Upstream}}{2}$.";
                        solution = `Step 1: Velocity of current = $\\frac{${downstreamSp} - ${upstreamSp}}{2} = ${speedCurrent}$ km/h.`;
                        shortcut = `Half of difference: $\\frac{${downstreamSp} - ${upstreamSp}}{2} = ${speedCurrent}$ km/h.`;
                    } else if (patternType === 4) {
                        const speedBoat = getVal(10, 20, 2);
                        const speedStream = getVal(2, 5, 3);
                        const roundDist = getVal(20, 60, 4);
                        const tUp = roundDist / (speedBoat - speedStream);
                        const tDown = roundDist / (speedBoat + speedStream);
                        const totalTime = parseFloat((tUp + tDown).toFixed(2));
                        text = `A boat travels at $${speedBoat}$ km/h in still water and the river runs at $${speedStream}$ km/h. It takes a round trip to a point $${roundDist}$ km away and back. Find the total time of the journey.`;
                        answer = `${totalTime} hours`;
                        options = [answer, `${(roundDist*2/speedBoat).toFixed(2)} hours`, `${(totalTime + 1.2).toFixed(2)} hours`, `${(roundDist/speedBoat).toFixed(2)} hours`];
                        formula = "Total Time = $\\frac{\\text{Distance}}{B - S} + \\frac{\\text{Distance}}{B + S}$.";
                        solution = `Step 1: Upstream time = $\\frac{${roundDist}}{${speedBoat - speedStream}} = ${tUp.toFixed(2)}$ hours.\nStep 2: Downstream time = $\\frac{${roundDist}}{${speedBoat} + ${speedStream}} = ${tDown.toFixed(2)}$ hours.\nStep 3: Total time = ${totalTime} hours.`;
                        shortcut = `$\\frac{D}{B-S} + \\frac{D}{B+S} = ${totalTime}$ hours.`;
                    } else if (patternType === 5) {
                        const dist = getVal(10, 30, 2);
                        const timeDownHrs = getVal(1, 2, 3);
                        const timeUpHrs = timeDownHrs + 1;
                        const dSpeed = dist / timeDownHrs;
                        const uSpeed = dist / timeUpHrs;
                        const boatSpeed = parseFloat(((dSpeed + uSpeed)/2).toFixed(2));
                        text = `A boat covers $${dist}$ km downstream in $${timeDownHrs}$ hour(s) and the same distance upstream in $${timeUpHrs}$ hours. What is the speed of the boat in still water?`;
                        answer = `${boatSpeed} km/h`;
                        options = [answer, `${(dSpeed - uSpeed).toFixed(2)} km/h`, `${dSpeed} km/h`, `12.00 km/h`];
                        formula = "Still Speed = $\\frac{D+U}{2}$.";
                        solution = `Step 1: Downstream speed $D = ${dSpeed}$ km/h, Upstream $U = ${uSpeed.toFixed(2)}$ km/h.\nStep 2: Speed in still water = $\\frac{${dSpeed} + ${uSpeed.toFixed(2)}}{2} = ${boatSpeed}$ km/h.`;
                        shortcut = `Find $D$ and $U$ speeds, then average them.`;
                    } else {
                        const windSpeed = getVal(20, 60, 2);
                        const planeSpeed = getVal(200, 400, 3);
                        const dist = getVal(600, 1200, 4);
                        const timeWithWind = parseFloat((dist / (planeSpeed + windSpeed)).toFixed(2));
                        text = `An airplane flies at $${planeSpeed}$ km/h in calm air. If a tailwind blows at $${windSpeed}$ km/h, how long will it take for the plane to fly a distance of $${dist}$ km?`;
                        answer = `${timeWithWind} hours`;
                        options = [answer, `${(dist / planeSpeed).toFixed(2)} hours`, `${(dist / (planeSpeed - windSpeed)).toFixed(2)} hours`, "3 hours"];
                        formula = "Ground Speed = Air Speed + Wind Speed. Time = $\\frac{\\text{Distance}}{\\text{Ground Speed}}$.";
                        solution = `Step 1: Ground speed with tailwind = $${planeSpeed} + ${windSpeed} = ${planeSpeed + windSpeed}$ km/h.\nStep 2: Time = $\\frac{${dist}}{${planeSpeed + windSpeed}} = ${timeWithWind}$ hours.`;
                        shortcut = `Divide distance $${dist}$ by combined speed $${planeSpeed + windSpeed}$.`;
                    }
                    break;
                }
                case 'probability': {
                    if (patternType === 1) {
                        const totalChips = getVal(10, 20, 2);
                        const redChips = getVal(3, 7, 3);
                        const blueChips = totalChips - redChips;
                        const favorable = redChips * (redChips - 1);
                        const totalOutcomes = totalChips * (totalChips - 1);
                        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                        const divisor = gcd(favorable, totalOutcomes);
                        const probStr = `${favorable / divisor}/${totalOutcomes / divisor}`;
                        text = `A box contains $${redChips}$ red chips and $${blueChips}$ blue chips. If two chips are drawn at random without replacement, what is the probability that both are red?`;
                        answer = probStr;
                        options = [answer, `${redChips}/${totalChips}`, `${redChips * redChips}/${totalChips * totalChips}`, `1/${totalChips}`];
                        formula = "$P(R_1 \\cap R_2) = \\frac{R}{T} \\times \\frac{R-1}{T-1}$.";
                        solution = `Step 1: First draw red = $\\frac{${redChips}}{${totalChips}}$. Second draw red = $\\frac{${redChips - 1}}{${totalChips - 1}}$.\nStep 2: Probability = $\\frac{${redChips}}{${totalChips}} \\times \\frac{${redChips - 1}}{${totalChips - 1}} = ${probStr}$.`;
                        shortcut = `Calculate combinatorics: $\\frac{^{${redChips}}C_2}{^{${totalChips}}C_2} = ${probStr}$.`;
                    } else if (patternType === 2) {
                        const targetSum = getVal(8, 10, 2);
                        const outcomes = [0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3][targetSum];
                        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                        const divisor = gcd(outcomes, 36);
                        const probStr = `${outcomes / divisor}/${36 / divisor}`;
                        text = `If two unbiased dice are rolled simultaneously, what is the probability that the sum of the numbers appearing is exactly $${targetSum}$?`;
                        answer = probStr;
                        options = [answer, `${outcomes}/30`, `1/6`, `5/36`];
                        formula = "$P(E) = \\frac{\\text{Favorable outcomes}}{36}$.";
                        solution = `Step 1: Total outcomes when rolling two dice = 36.\nStep 2: Favorable outcomes for sum $${targetSum}$ = $${outcomes}$ combinations.\nStep 3: Probability = $\\frac{${outcomes}}{36} = ${probStr}$.`;
                        shortcut = `Count pairs directly: e.g. for 9: (3,6), (4,5), (5,4), (6,3) = 4 outcomes $\\implies 4/36 = 1/9$.`;
                    } else if (patternType === 3) {
                        text = "From a well-shuffled pack of 52 cards, one card is drawn at random. What is the probability that it is either a king or a spade?";
                        answer = "4/13";
                        options = ["4/13", "17/52", "1/26", "2/13"];
                        formula = "$P(K \\cup S) = P(K) + P(S) - P(K \\cap S)$";
                        solution = `Step 1: Total cards = 52. Kings $P(K) = 4/52$. Spades $P(S) = 13/52$.\nStep 2: King of Spades $P(K \\cap S) = 1/52$.\nStep 3: $P(K \\cup S) = \\frac{4 + 13 - 1}{52} = \\frac{16}{52} = 4/13$.`;
                        shortcut = "Number of cards which are King or Spade = 13 spades + 3 other kings = 16. Probability = 16/52 = 4/13.";
                    } else if (patternType === 4) {
                        const truthA = getVal(60, 80, 2);
                        const truthB = getVal(70, 90, 3);
                        const contradict = (truthA/100) * (1 - truthB/100) + (1 - truthA/100) * (truthB/100);
                        const contradictPercent = parseFloat((contradict * 100).toFixed(2));
                        text = `$${name1}$ speaks truth in $${truthA}\\%$ of cases and $${name2}$ in $${truthB}\\%$ of cases. In what percentage of cases are they likely to contradict each other in stating the same fact?`;
                        answer = `${contradictPercent}\\%`;
                        options = [answer, `${truthA - truthB}\\%`, `${(truthA * truthB / 100).toFixed(2)}\\%`, "15.00\\%"];
                        formula = "$P(\\text{contradict}) = P(A)\\cdot P(B') + P(A')\\cdot P(B)$";
                        solution = `Step 1: Contradict = $(0.${truthA} \\times 0.${100-truthB}) + (0.${100-truthA} \\times 0.${truthB}) = ${contradict.toFixed(4)}$ = $${contradictPercent}\\%$.`;
                        shortcut = `Multiply truth of one with lie of another, sum them.`;
                    } else if (patternType === 5) {
                        text = "What is the probability that a leap year selected at random will contain 53 Sundays?";
                        answer = "2/7";
                        options = ["2/7", "1/7", "53/366", "2/366"];
                        formula = "Days division: 366 days = 52 weeks + 2 odd days.";
                        solution = `Step 1: A leap year has 366 days.\nStep 2: 366 days = 52 weeks + 2 days.\nStep 3: Odd day combinations has 2 days containing Sunday. Probability = 2/7.`;
                        shortcut = "Leap year has 2 odd days, so probability of 53 of any weekday is 2/7.";
                    } else {
                        const totalFruits = getVal(10, 15, 2);
                        const rotten = getVal(3, 5, 3);
                        const good = totalFruits - rotten;
                        const probBothGood = (good / totalFruits) * ((good - 1) / (totalFruits - 1));
                        const probAtLeastOneRotten = parseFloat((1 - probBothGood).toFixed(4));
                        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                        const num = Math.round(probAtLeastOneRotten * totalFruits * (totalFruits - 1));
                        const den = totalFruits * (totalFruits - 1);
                        const divisor = gcd(num, den);
                        const probStr = `${num / divisor}/${den / divisor}`;
                        text = `A basket contains $${totalFruits}$ apples, out of which $${rotten}$ are rotten. If $2$ apples are selected at random, what is the probability that at least one of them is rotten?`;
                        answer = probStr;
                        options = [answer, `${rotten}/${totalFruits}`, `${rotten * rotten}/${totalFruits * totalFruits}`, "1/2"];
                        formula = "$P(\\text{At least 1}) = 1 - P(\\text{Both Good})$.";
                        solution = `Step 1: Good apples = $${good}$. Total apples = $${totalFruits}$.\nStep 2: $P(\\text{Both Good}) = \\frac{${good}}{${totalFruits}} \\times \\frac{${good - 1}}{${totalFruits - 1}} = \\frac{${good * (good - 1)}}{${totalFruits * (totalFruits - 1)}}$.\nStep 3: $P(\\text{At least 1 rotten}) = 1 - P(\\text{Both Good}) = ${probStr}$.`;
                        shortcut = `Use complementary probability.`;
                    }
                    break;
                }
                case 'permutation_combination': {
                    if (patternType === 1) {
                        const items = getVal(6, 9, 2);
                        const select = getVal(2, 4, 3);
                        const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
                        const combinations = fact(items) / (fact(select) * fact(items - select));
                        text = `A committee of $${select}$ members is to be formed from a group of $${items}$ candidates. In how many different ways can this committee be selected?`;
                        answer = combinations.toString();
                        options = [answer, (combinations * select).toString(), (combinations - 5).toString(), fact(items - select).toString()];
                        formula = "$^nC_r = \\frac{n!}{r!(n-r)!}$.";
                        solution = `Step 1: Apply combination formula $^{${items}}C_${select} = \\frac{${items}!}{${select}!(${items} - ${select})!}$.\nStep 2: Calculation = ${combinations}.`;
                        shortcut = `$^{${items}}C_${select} = ${combinations}$.`;
                    } else if (patternType === 2) {
                        const letters = getVal(5, 7, 2);
                        const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
                        const arrangements = fact(letters);
                        text = `In how many different ways can the letters of a word containing $${letters}$ distinct letters be arranged?`;
                        answer = arrangements.toString();
                        options = [answer, (arrangements / 2).toString(), (arrangements * 2).toString(), "120"];
                        formula = "Permutations of $n$ distinct objects = $n!$.";
                        solution = `Step 1: There are $${letters}$ distinct letters.\nStep 2: Number of arrangements = $${letters}! = ${arrangements}$.`;
                        shortcut = `Calculate $${letters}! = ${arrangements}$.`;
                    } else if (patternType === 3) {
                        const guests = getVal(5, 8, 2);
                        const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
                        const arrangements = fact(guests - 1);
                        text = `In how many different ways can $${guests}$ people be seated around a circular table?`;
                        answer = arrangements.toString();
                        options = [answer, fact(guests).toString(), (arrangements / 2).toString(), "24"];
                        formula = "Circular Permutation Formula: $(n - 1)!$.";
                        solution = `Step 1: The number of circular arrangements for $n$ objects is $(n-1)!$.\nStep 2: Circular seating arrangements = $(${guests} - 1)! = ${arrangements}$.`;
                        shortcut = `$(n - 1)! = ${guests - 1}! = ${arrangements}$.`;
                    } else if (patternType === 4) {
                        const vertices = getVal(6, 12, 2);
                        const diagonals = (vertices * (vertices - 3)) / 2;
                        text = `How many diagonals can be drawn in a regular polygon with $${vertices}$ vertices?`;
                        answer = diagonals.toString();
                        options = [answer, (vertices * 2).toString(), (diagonals + 5).toString(), "20"];
                        formula = "Number of diagonals in $n$-sided polygon = $\\frac{n(n - 3)}{2}$.";
                        solution = `Step 1: Diagonals = $\\frac{${vertices}(${vertices} - 3)}{2} = ${diagonals}$.`;
                        shortcut = `Formula: $\\frac{${vertices} \\times ${vertices - 3}}{2} = ${diagonals}$.`;
                    } else if (patternType === 5) {
                        const nodes = getVal(6, 12, 2);
                        const handshakes = (nodes * (nodes - 1)) / 2;
                        text = `In a conference of $${nodes}$ people, each person shakes hands with every other person exactly once. Find the total number of handshakes.`;
                        answer = handshakes.toString();
                        options = [answer, (nodes * 2).toString(), (handshakes - nodes).toString(), "55"];
                        formula = "Handshakes count = $^nC_2 = \\frac{n(n - 1)}{2}$.";
                        solution = `Step 1: A handshake occurs between 2 people. Total handshakes is $^{${nodes}}C_2 = \\frac{${nodes} \\times ${nodes - 1}}{2} = ${handshakes}$.`;
                        shortcut = `$\\frac{${nodes} \\times ${nodes - 1}}{2} = ${handshakes}$.`;
                    } else {
                        const vowels = 3;
                        const cons = 4;
                        const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
                        const ans = fact(cons + 1) * fact(vowels);
                        text = `In how many ways can the letters of a word containing $${vowels}$ vowels and $${cons}$ consonants be arranged so that no two vowels are adjacent?`;
                        answer = ans.toString();
                        options = [answer, fact(vowels + cons).toString(), (ans * 2).toString(), "1440"];
                        formula = "Gap Method: consonants! * gaps_arrangement.";
                        solution = `Step 1: Arrange $${cons}$ consonants in $${cons}! = ${fact(cons)}$ ways. Gaps = $${cons + 1}$.\nStep 2: Arrange $${vowels}$ vowels in these gaps in $^{${cons+1}}P_{${vowels}} = ${fact(cons+1)/fact(cons+1-vowels)}$ ways.\nStep 3: Total = $${ans}$.`;
                        shortcut = `consonants! * $^{consonants+1}P_{vowels} = ${ans}$.`;
                    }
                    break;
                }
                case 'data_interpretation': {
                    const base = getVal(100, 300, 2);
                    const R_and_D = Math.round(base * 1.5);
                    const Marketing = Math.round(base * 2.2);
                    const Sales = Math.round(base * 1.3);
                    const sum = R_and_D + Marketing + Sales;
                    if (patternType === 1) {
                        const percent = parseFloat(((Marketing / sum) * 100).toFixed(2));
                        text = `A company's expenditures in three departments are R&D: $${R_and_D}$k, Marketing: $${Marketing}$k, and Sales: $${Sales}$k. What percentage of the total budget is spent on Marketing?`;
                        answer = `${percent}\\%`;
                        options = [answer, `${(percent - 5.5).toFixed(2)}\\%`, `${(percent + 4.2).toFixed(2)}\\%`, `${((R_and_D / sum) * 100).toFixed(2)}\\%`];
                        formula = "Percentage Share = $\\frac{\\text{Value}}{\\text{Total}} \\times 100\\%$.";
                        solution = `Step 1: Total budget = $${R_and_D} + ${Marketing} + ${Sales} = ${sum}$k.\nStep 2: Marketing share = $\\frac{${Marketing}}{${sum}} \\times 100\\% = ${percent}\\%$.`;
                        shortcut = `Estimate Marketing $${Marketing}$ over total $${sum}$.`;
                    } else if (patternType === 2) {
                        const gcd = (x,y) => y===0?x:gcd(y, x%y);
                        const ratio = `${R_and_D / gcd(R_and_D, Sales)}:${Sales / gcd(R_and_D, Sales)}`;
                        text = `Refer to budget: R&D: $${R_and_D}$k, Marketing: $${Marketing}$k, and Sales: $${Sales}$k. Find the ratio of expenditures on R&D to Sales.`;
                        answer = ratio;
                        options = [answer, `3:2`, `5:4`, `${Sales}:${R_and_D}`];
                        formula = "Ratio division: R&D / Sales.";
                        solution = `Step 1: R&D = $${R_and_D}$, Sales = $${Sales}$.\nStep 2: Ratio = $${R_and_D} : ${Sales} = ${ratio}$.`;
                        shortcut = "Reduce ratios to simplest form.";
                    } else {
                        const avg = parseFloat((sum / 3).toFixed(2));
                        text = `Refer to budget: R&D: $${R_and_D}$k, Marketing: $${Marketing}$k, and Sales: $${Sales}$k. What is the average expenditure across all three departments?`;
                        answer = `$${avg}$k`;
                        options = [answer, `$${(avg - 15).toFixed(2)}$k`, `$${(avg + 20).toFixed(2)}$k`, `$150.00$k`];
                        formula = "Average = $\\frac{\\text{Sum}}{3}$.";
                        solution = `Step 1: Sum = $${R_and_D} + ${Marketing} + ${Sales} = ${sum}$. Average = $${sum} / 3 = ${avg}$k.`;
                        shortcut = `$\\frac{${R_and_D} + ${Marketing} + ${Sales}}{3} = ${avg}$.`;
                    }
                    break;
                }
                case 'simplification': {
                    if (patternType === 1) {
                        const a = getVal(2, 6, 2);
                        const b = getVal(2, 4, 3);
                        const base = a * a;
                        const ansVal = Math.pow(a, b + 3);
                        text = `Simplify the expression: $(${base})^{\\frac{${b}}{2}} \\times ${a}^3$.`;
                        answer = ansVal.toString();
                        options = [answer, Math.pow(a, b + 2).toString(), Math.pow(base, b).toString(), (ansVal * 2).toString()];
                        formula = "Laws of Indices: $(x^m)^n = x^{m \\cdot n}$ and $x^m \\times x^n = x^{m+n}$.";
                        solution = `Step 1: Write $${base}$ as $${a}^2 \\implies (${a}^2)^{\\frac{${b}}{2}} \\times ${a}^3$.\nStep 2: Simplify power: $${a}^{b} \\times ${a}^3 = ${a}^{b+3} = ${ansVal}$.`;
                        shortcut = `Add indices: $b + 3 = ${b + 3} \\implies ${a}^{${b + 3}} = ${ansVal}$.`;
                    } else {
                        const s1 = getVal(12, 24, 2);
                        const s2 = getVal(3, 8, 3);
                        const s3 = getVal(4, 9, 4);
                        const ans = s1 * s2 - s3;
                        text = `Evaluate using BODMAS: $${s1} \\times ${s2} - ${s3}$.`;
                        answer = ans.toString();
                        options = [answer, (s1 * (s2 - s3)).toString(), (ans + 10).toString(), (ans - 5).toString()];
                        formula = "BODMAS order: Multiplication before Subtraction.";
                        solution = `Step 1: Multiply: $${s1} \\times ${s2} = ${s1 * s2}$.\nStep 2: Subtract: $${s1 * s2} - ${s3} = ${ans}$.`;
                        shortcut = `Perform $${s1} \\times ${s2}$ first, then subtract $${s3}$.`;
                    }
                    break;
                }
                case 'algebra': {
                    const r1_val = getVal(2, 6, 2);
                    const r2_val = getVal(3, 8, 3);
                    const sum = r1_val + r2_val;
                    const prod = r1_val * r2_val;
                    if (patternType === 1) {
                        text = `Find the sum of roots of the quadratic equation: $x^2 - ${sum}x + ${prod} = 0$.`;
                        answer = sum.toString();
                        options = [answer, prod.toString(), (-sum).toString(), (r1_val - r2_val).toString()];
                        formula = "Sum of roots $= -b/a$.";
                        solution = `Comparing $x^2 - ${sum}x + ${prod} = 0$ with $ax^2+bx+c=0 \\implies a=1, b=-${sum}$. Sum $= -(-${sum})/1 = ${sum}$.`;
                        shortcut = `Sum is the negative of the coefficient of $x$.`;
                    } else {
                        text = `Find the product of roots of the quadratic equation: $x^2 - ${sum}x + ${prod} = 0$.`;
                        answer = prod.toString();
                        options = [answer, sum.toString(), (-prod).toString(), "1"];
                        formula = "Product of roots $= c/a$.";
                        solution = `Comparing with quadratic forms gives $c = ${prod}$. Product $= c/a = ${prod}/1 = ${prod}$.`;
                        shortcut = `Product is the constant term.`;
                    }
                    break;
                }
                case 'geometry': {
                    const change = getVal(10, 30, 3);
                    if (patternType === 1) {
                        const areaChangePercent = parseFloat(((Math.pow(1 + change/100, 2) - 1) * 100).toFixed(2));
                        text = `If the radius of a circle is increased by $${change}\\%$, what is the percentage increase in its area?`;
                        answer = `${areaChangePercent}\\%`;
                        options = [answer, `${(change * 2).toFixed(2)}\\%`, `${(areaChangePercent - 5).toFixed(2)}\\%`, `${change}\\%`];
                        formula = "Area change factor = $(1 + x/100)^2 - 1$.";
                        solution = `Step 1: Area is proportional to $r^2$.\nStep 2: Increase = $2x + \\frac{x^2}{100} = 2(${change}) + \\frac{${change}^2}{100} = ${change * 2} + ${change * change / 100} = ${areaChangePercent}\\%$.`;
                        shortcut = `Successive growth formula: $2(${change}) + \\frac{${change}^2}{100} = ${areaChangePercent}\\%$.`;
                    } else {
                        const radius = getVal(5, 14, 2);
                        const area = parseFloat((Math.PI * radius * radius).toFixed(2));
                        text = `Find the area of a circle with a radius of $${radius}$ cm. (Use $\\pi \\approx 3.14159$).`;
                        answer = `${area} cm$^2$`;
                        options = [answer, `${(2 * Math.PI * radius).toFixed(2)} cm$^2$`, `${(area - 10).toFixed(2)} cm$^2$`, `100.00 cm$^2$`];
                        formula = "Area $= \\pi r^2$.";
                        solution = `Area = $\\pi \\times ${radius}^2 = 3.14159 \\times ${radius * radius} = ${area}$ cm$^2$.`;
                        shortcut = `Compute $\\pi \\times ${radius * radius}$.`;
                    }
                    break;
                }
            }
        } else if (subject === 'reasoning') {
            switch (topic) {
                case 'puzzles': {
                    if (patternType === 1) {
                        text = `Five friends - A, B, C, D, and E - have different heights. A is taller than B but shorter than C. D is shorter than B. C is shorter than E. Who is the tallest?`;
                        answer = "E";
                        options = ["E", "C", "A", "B"];
                        solution = `Height order: D < B < A < C < E. Tallest is E.`;
                    } else if (patternType === 2) {
                        text = `Five friends A, B, C, D, and E belong to different departments: HR, IT, Finance, Sales, and Marketing. A belongs to HR. D does not belong to IT or Finance. B belongs to Marketing. C belongs to IT. Which department does E belong to?`;
                        answer = "Finance";
                        options = ["Finance", "Sales", "IT", "HR"];
                        solution = `By mapping departments: A->HR, B->Marketing, C->IT. Since D cannot be IT or Finance, D is Sales. The remaining department for E is Finance.`;
                    } else {
                        text = `Five boxes P, Q, R, S, and T are stacked. P is placed immediately above Q. R is at the bottom. S is immediately below T. Q is above T. Which box is in the middle of the stack?`;
                        answer = "Q";
                        options = ["Q", "P", "S", "T"];
                        solution = `The stack order from top to bottom is: [P, Q, T, S, R]. Middle box is Q.`;
                    }
                    break;
                }
                case 'seating_arrangement': {
                    if (patternType === 1) {
                        text = `Six people P, Q, R, S, T, and U are sitting in a circle facing the center. R is sitting between P and Q. T is sitting next to U and S. S is sitting immediately to the left of P. Who is sitting immediately to the right of Q?`;
                        answer = "R";
                        options = ["R", "P", "T", "U"];
                        solution = `Circle order: S -> P -> R -> Q -> U -> T. Right of Q is R.`;
                    } else {
                        text = `Five friends - A, B, C, D, and E - are sitting in a row facing North. A is next to B. C is next to D. E is on the extreme left. C is not next to E. Who is in the middle?`;
                        answer = "A";
                        options = ["A", "B", "C", "D"];
                        solution = `Seating sequence is [E, B, A, C, D] or [E, B, A, D, C]. Middle person is A.`;
                    }
                    break;
                }
                case 'blood_relations': {
                    if (patternType === 1) {
                        text = `Pointing to a photograph of a boy, Suresh says, "He is the only son of my father's only son." How is Suresh related to that boy?`;
                        answer = "Father";
                        options = ["Father", "Son", "Uncle", "Brother"];
                        solution = `Father's only son is Suresh. Suresh's only son is the boy. Suresh is the father.`;
                    } else {
                        text = `If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B. Which expression means P is the uncle of Q?`;
                        answer = "P + R * Q";
                        options = ["P + R * Q", "P - R * Q", "P * R + Q", "P + R - Q"];
                        solution = `P + R means P is brother of R. R * Q means R is father of Q. So P is Q's paternal uncle.`;
                    }
                    break;
                }
                case 'coding_decoding': {
                    const shift = getVal(1, 4, 2);
                    if (patternType === 1) {
                        text = `In a certain code, the word <b>'PRIME'</b> is coded by shifting each letter forward by $${shift}$ positions. What is the code for the word <b>'LOGIC'</b> under this scheme?`;
                        const encode = (word) => {
                            return word.split('').map(char => {
                                const code = char.charCodeAt(0) + shift;
                                return String.fromCharCode(code > 90 ? code - 26 : code);
                            }).join('');
                        };
                        answer = encode("LOGIC");
                        options = [answer, encode("LOGIB"), encode("MHJJD"), "LOGIC"];
                        solution = `Each letter is shifted by $${shift}$. L+${shift}=${answer[0]}, O+${shift}=${answer[1]}, etc. Coded word is ${answer}.`;
                    } else {
                        text = `In a certain code, <b>'SYSTEM'</b> is coded as <b>'METSYS'</b>. How will <b>'DANGER'</b> be coded under this same scheme?`;
                        answer = "REGNAD";
                        options = ["REGNAD", "REGNDA", "GNERAD", "REDNAG"];
                        solution = `The letters are reversed: SYSTEM -> METSYS. DANGER reversed is REGNAD.`;
                    }
                    break;
                }
                case 'syllogism': {
                    text = `Statements:<br>1. All pens are markers.<br>2. Some markers are books.<br><br>Conclusions:<br>I. Some pens are books.<br>II. Some books are markers.<br><br>Which of the conclusions logically follow?`;
                    answer = "Only II follows";
                    options = ["Only II follows", "Only I follows", "Both I and II follow", "Neither follows"];
                    solution = `Venn diagram: Pens lies inside Markers. Markers overlaps with Books. Pens does not necessarily intersect Books (I fails). Books overlaps with Markers (II holds).`;
                    break;
                }
                case 'direction_sense': {
                    const d1 = getVal(3, 8, 2);
                    const d2 = getVal(4, 9, 3);
                    const dist = Math.sqrt(d1*d1 + d2*d2);
                    text = `A person walks $${d1}$ km North, then turns right and walks $${d2}$ km East. Find the shortest straight-line distance from the starting point.`;
                    answer = `${dist.toFixed(2)} km`;
                    options = [answer, `${d1 + d2} km`, `${Math.abs(d1 - d2)} km`, `${(dist + 2).toFixed(2)} km`];
                    solution = `Shortest distance forms a right-angled triangle. Hypotenuse = $\\sqrt{${d1}^2 + ${d2}^2} = ${dist.toFixed(2)}$ km.`;
                    break;
                }
                case 'statement_conclusion': {
                    text = `Statement: Most people who smoke suffer from respiratory diseases.<br>Conclusions:<br>I. Smoking is the only cause of respiratory diseases.<br>II. Non-smokers do not suffer from respiratory diseases.<br><br>Which conclusion follows?`;
                    answer = "Neither follows";
                    options = ["Neither follows", "Only I follows", "Only II follows", "Both follow"];
                    solution = `The statement says 'Most smokers suffer...'. It does not mean smoking is the ONLY cause (I fails). It does not mention non-smokers (II fails).`;
                    break;
                }
                case 'series': {
                    const step = getVal(3, 7, 2);
                    const baseNum = getVal(5, 15, 3);
                    const series = [baseNum, baseNum + step, baseNum + step*2, baseNum + step*3, baseNum + step*4];
                    text = `Identify the missing number in the series: $${series[0]}, ${series[1]}, ${series[2]}, ${series[3]}, ?$.`;
                    answer = series[4].toString();
                    options = [answer, (series[4] + step).toString(), (series[4] - 2).toString(), (series[4] * 2).toString()];
                    solution = `Common difference is $+${step}$. Next term is $${series[3]} + ${step} = ${series[4]}$.`;
                    break;
                }
                case 'analogy': {
                    const val = getVal(3, 8, 2);
                    text = `Complete the analogy: $${val} : ${val*val} :: ${val + 2} : ?$.`;
                    answer = ((val + 2) * (val + 2)).toString();
                    options = [answer, (val * val * val).toString(), ((val + 2) * 2).toString(), "100"];
                    solution = `Relationship is squaring: $x : x^2$. Hence, $(${val+2})^2 = ${answer}$.`;
                    break;
                }
            }
        } else if (subject === 'verbal') {
            switch (topic) {
                case 'grammar': {
                    text = `Choose the grammatically correct sentence from the options below:`;
                    answer = "Neither of the two employees was promoted.";
                    options = ["Neither of the two employees was promoted.", "Neither of the two employees were promoted.", "None of the two employees was promoted.", "Neither of the two employees have been promoted."];
                    solution = `Subject-Verb Agreement: 'Neither of' takes a singular verb ('was').`;
                    break;
                }
                case 'vocabulary': {
                    text = `What is the synonym of the word <b>'Ephemeral'</b>?`;
                    answer = "Transient";
                    options = ["Transient", "Permanent", "Eternal", "Perpetual"];
                    solution = `'Ephemeral' means short-lived or brief. 'Transient' is the matching synonym.`;
                    break;
                }
                case 'reading_comprehension': {
                    text = `Read the passage: 'Despite the rise of digital books, local libraries continue to serve as vital community hubs.' What is the author's primary assertion?`;
                    answer = "Libraries remain important social institutions.";
                    options = ["Libraries remain important social institutions.", "Digital books have completely replaced printed works.", "Libraries are failing to adapt to technological changes.", "Digital media is detrimental to community engagement."];
                    solution = `'vital community hubs' translates to important social institutions.`;
                    break;
                }
                case 'sentence_correction': {
                    text = `Correct the sentence: <b>'If he would have studied harder, he would have passed the exam.'</b>`;
                    answer = "If he had studied harder, he would have passed the exam.";
                    options = ["If he had studied harder, he would have passed the exam.", "If he studied harder, he would have passed the exam.", "If he would have studied harder, he passed the exam.", "Had he would study harder, he would pass the exam."];
                    solution = `Third conditional uses 'If + Past Perfect' in condition, and 'would have + V3' in result.`;
                    break;
                }
                case 'error_spotting': {
                    text = `Identify the segment containing grammatical error: 'Each of the students (A) / have finished (B) / their homework (C) / No Error (D)'`;
                    answer = "have finished (B)";
                    options = ["Each of the students (A)", "have finished (B)", "their homework (C)", "No Error (D)"];
                    solution = `Subject is 'Each' which is singular, requiring singular verb 'has finished'.`;
                    break;
                }
                case 'fill_blanks': {
                    text = `Fill in the blanks: 'The manager was ______ by the employee's excuses, which were clearly ______.'`;
                    answer = "unconvinced / fabricated";
                    options = ["unconvinced / fabricated", "impressed / false", "pleased / simple", "disturbed / logical"];
                    solution = `Excuses that are fabricated (made up) leave the manager unconvinced.`;
                    break;
                }
                case 'para_jumbles': {
                    text = `Reorder the sentences: P: Coffee was originally discovered in Ethiopia. Q: Arab traders were the first to cultivate it. R: It then spread to the Middle East. S: Today, it is a global phenomenon.`;
                    answer = "PQRS";
                    options = ["PQRS", "QPRS", "PRQS", "RQPS"];
                    solution = `Timeline details: P (originally) -> Q (cultivation) -> R (then spread) -> S (today).`;
                    break;
                }
            }
        }
        
        // Fallback for default undefined topics or other templates
        if (!text) {
            const valA = getVal(10, 50, 2);
            const valB = getVal(5, 25, 3);
            const sum = valA + valB;
            text = `Given two parameters for ${topic} evaluation: Value A is $${valA}$ and Value B is $${valB}$. If their relationship is additive, find their sum.`;
            answer = sum.toString();
            options = [answer, (sum + 5).toString(), (sum - 10).toString(), (valA * valB).toString()];
            formula = "Additive Principle: Total = $A + B$";
            solution = `Step 1: Take Value A = $${valA}$.\nStep 2: Take Value B = $${valB}$.\nStep 3: Sum = $${valA} + ${valB} = ${sum}$.`;
            shortcut = "Direct addition.";
            commonMistakes = "Incorrectly multiplying the values instead of summing.";
        }
        
        const clean = (str) => {
            if (typeof str !== 'string') return str;
            return str
                .replace(/\$/g, '')
                .replace(/\\%/g, '%')
                .replace(/\^\{([^}]+)\}/g, '^$1')
                .replace(/_\{([^}]+)\}/g, '_$1')
                .replace(/\\pi/g, 'π')
                .replace(/\\approx/g, '≈')
                .replace(/\\times/g, '×')
                .replace(/\\cdot/g, '·')
                .replace(/\\dots/g, '...')
                .replace(/\\pmod\{([^}]+)\}/g, '(mod $1)')
                .replace(/\\pmod/g, 'mod')
                .replace(/\\div/g, '÷')
                .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2');
        };
        return {
            id: qId,
            text: clean(text),
            options: options.sort(() => Math.random() - 0.5).map(clean),
            answer: clean(answer),
            solution: clean(solution),
            formula: clean(formula),
            shortcut: clean(shortcut),
            commonMistakes: clean(commonMistakes),
            timeRequired,
            similarQuestions: [],
            difficulty: diff,
            topic,
            subject,
            patternType,
            tags
        };
    },

    // Retrieve single question by ID
    getQuestionById(id) {
        const db = window.QUESTIONS_DATABASE || [];
        return db.find(q => q.id === id) || null;
    }
};

window.MockDataGen = MockDataGen;
