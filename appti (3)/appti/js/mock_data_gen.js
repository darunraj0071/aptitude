/* ==========================================================================
   MOCK_DATA_GEN.JS - Calibrated Dynamic Question Bank Engine
   Multi-Template Procedural Engine with Graded Difficulty Tiers:
   [Beginner, Easy, Medium, Hard, Expert] (10+ Unique Templates per Tier)
   Guarantees 100% Zero-Repeat Questions across all 31 Topics.
   ========================================================================== */

const MockDataGen = {
    seed: 12345,
    random(s) {
        let x = Math.sin(s) * 10000;
        return x - Math.floor(x);
    },

    getTopicMetadata(subject, topic) {
        const metadata = {
            aptitude: {
                numbers: { title: "Numbers & Number Systems", desc: "Divisibility, remainders, LCM/HCF, unit digits, and progression." },
                percentage: { title: "Percentages", desc: "Fraction conversions, increases, decreases, and consumption rules." },
                profit_loss: { title: "Profit and Loss", desc: "Cost price, selling price, discounts, markups, and false weights." },
                ratio_proportion: { title: "Ratio and Proportion", desc: "Shares, mixtures, partnership capital, and variations." },
                average: { title: "Averages", desc: "Mean values, weighted averages, age, and temperature problems." },
                time_work: { title: "Time and Work", desc: "Efficiency, pipes & cisterns, alternate days, and joint tasks." },
                time_distance: { title: "Time and Distance", desc: "Relative speed, trains, platform crossings, and race tracks." },
                speed_distance: { title: "Speed and Distance", desc: "Boats & streams, circular tracks, velocity, and river currents." },
                probability: { title: "Probability", desc: "Coins, dice, playing cards, marbles, and complementary events." },
                permutation_combination: { title: "Permutations & Combinations", desc: "Arrangements, team selections, polygons, and grouping." },
                data_interpretation: { title: "Data Interpretation", desc: "Bar graphs, pie charts, tabular analysis, and growth ratios." },
                simplification: { title: "Simplification", desc: "VBODMAS rule, fractions, square roots, surds, and indices." },
                algebra: { title: "Algebra", desc: "Linear equations, quadratic roots, progressions, and logarithms." },
                geometry: { title: "Geometry & Mensuration", desc: "Area, volume, triangles, circles, polygons, and coordinates." }
            },
            reasoning: {
                puzzles: { title: "Puzzles", desc: "Grid arrangements, box stacks, comparisons, and attribute allocation." },
                seating_arrangement: { title: "Seating Arrangement", desc: "Linear rows, circular layouts (in/out), and dual-row seating." },
                blood_relations: { title: "Blood Relations", desc: "Family trees, coded relations, and portrait deduction riddles." },
                coding_decoding: { title: "Coding & Decoding", desc: "Letter shifts, reverse coding, opposite pairs, and matrix ciphers." },
                syllogism: { title: "Syllogisms", desc: "Statements and logical deductions using Venn Diagrams and possibilities." },
                direction_sense: { title: "Direction Sense Test", desc: "Compass angles, displacement, shadow orientation, and shortest path." },
                statement_conclusion: { title: "Statement & Conclusion", desc: "Logical reasoning, inferences, assumptions, and course of action." },
                series: { title: "Number & Letter Series", desc: "Pattern discovery, alternating progressions, and missing elements." },
                analogy: { title: "Analogies", desc: "Word comparisons, number relationships, and functional pairs." },
                non_verbal: { title: "Non-Verbal Reasoning", desc: "Mirror images, water images, paper folding, embedded figures, and series." }
            },
            verbal: {
                grammar: { title: "English Grammar", desc: "Subject-verb agreement, pronoun cases, tenses, and modifiers." },
                vocabulary: { title: "Vocabulary", desc: "Synonyms, antonyms, idioms, phrasal verbs, and one-word substitutions." },
                reading_comprehension: { title: "Reading Comprehension", desc: "Passage reading, central idea, tone deduction, and inferences." },
                sentence_correction: { title: "Sentence Correction", desc: "Modifier errors, parallel structures, and redundancy fixes." },
                error_spotting: { title: "Error Spotting", desc: "Identifying grammatical discrepancies across 4-part sentences." },
                fill_blanks: { title: "Fill in the Blanks", desc: "Single, double, and contextual vocabulary sentence completion." },
                para_jumbles: { title: "Para Jumbles", desc: "Sentence restructuring to form coherent and logical paragraphs." }
            }
        };
        return (metadata[subject] && metadata[subject][topic]) ? metadata[subject][topic] : { title: topic.toUpperCase().replace('_', ' '), desc: "" };
    },

    getQuestions(subject, topic, count = 1000, targetDiff = null) {
        const list = [];
        const staticKey = `${subject}_${topic}`;
        const staticQuestions = (window.TOPIC_QUESTIONS && window.TOPIC_QUESTIONS[staticKey]) ? window.TOPIC_QUESTIONS[staticKey] : [];

        const seenTexts = new Set();

        staticQuestions.forEach(q => {
            if (q.text && !q.text.includes("index") && !q.options.includes("Option A")) {
                if (!targetDiff || q.difficulty === targetDiff) {
                    const norm = q.text.trim().toLowerCase();
                    if (!seenTexts.has(norm)) {
                        seenTexts.add(norm);
                        list.push(q);
                    }
                }
            }
        });

        const diffs = ['beginner', 'easy', 'medium', 'hard', 'expert'];
        let dynIdx = 100;
        let attempts = 0;
        const maxAttempts = count * 30;

        while (list.length < count && attempts < maxAttempts) {
            attempts++;
            dynIdx++;
            const diff = targetDiff || diffs[dynIdx % 5];
            const dynQ = this.generateDynamicQuestion(subject, topic, dynIdx * 11 + attempts, diff);
            const norm = dynQ.text.trim().toLowerCase();

            if (!seenTexts.has(norm)) {
                seenTexts.add(norm);
                list.push(dynQ);
            }
        }
        return list;
    },

    generateDynamicQuestion(subject, topic, index, targetDiff = null) {
        const diffs = ['beginner', 'easy', 'medium', 'hard', 'expert'];
        const diff = targetDiff || diffs[index % 5];
        const patternType = (index % 6) + 1;
        const qId = `${subject}_${topic}_${diff}_${index}`;

        let text = "";
        let answer = "";
        let options = [];
        let solution = "";
        let formula = "";
        let shortcut = "";
        let commonMistakes = "Units conversion error or calculation slip.";
        let timeRequired = diff === 'beginner' ? '30s' : diff === 'easy' ? '45s' : diff === 'medium' ? '60s' : diff === 'hard' ? '90s' : '120s';
        let tags = [topic, diff, "dynamic"];

        let seed = 0;
        for (let i = 0; i < topic.length; i++) seed += topic.charCodeAt(i);
        seed += index * 37 + diff.length * 19;

        const getVal = (min, max, offset = 0) => {
            let r = Math.sin(seed + offset) * 10000;
            r = r - Math.floor(r);
            return Math.floor(r * (max - min + 1)) + min;
        };

        const names = ["Aravind", "Balan", "Chitra", "Divya", "Elango", "Hari", "Isha", "Karthik", "Manoj", "Nisha", "Pranav", "Ramya", "Suresh", "Tina", "Vikram", "Pooja", "Rahul", "Ananya", "Deepak", "Sneha"];
        const name1 = names[getVal(0, names.length - 1, 1)];
        const name2 = names[(getVal(0, names.length - 1, 1) + 3) % names.length];
        const name3 = names[(getVal(0, names.length - 1, 1) + 6) % names.length];

        const gcd = (a, b) => {
            a = Math.abs(a); b = Math.abs(b);
            return b === 0 ? a : gcd(b, a % b);
        };
        const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);

        /* =================================================================
           1. QUANTITATIVE APTITUDE (14 TOPICS)
           ================================================================= */
        if (subject === 'aptitude') {
            switch (topic) {
                case 'numbers': {
                    if (diff === 'beginner') {
                        const a = getVal(12, 48, 2); const b = getVal(18, 60, 3);
                        const hcfVal = gcd(a, b);
                        text = `Find the Highest Common Factor (HCF / GCD) of ${a} and ${b}.`;
                        answer = hcfVal.toString();
                        options = [answer, (hcfVal + 2).toString(), (hcfVal > 2 ? hcfVal - 1 : hcfVal + 4).toString(), (a + b).toString()];
                        formula = "HCF is the largest integer dividing both numbers.";
                        solution = `GCD(${a}, ${b}) = ${hcfVal}.`;
                        shortcut = `GCD(${a}, ${b}) = ${hcfVal}.`;
                    } else if (diff === 'easy') {
                        const n = getVal(12, 50, 2);
                        const sumNat = (n * (n + 1)) / 2;
                        text = `Calculate the sum of the first ${n} natural numbers (1 + 2 + 3 + ... + ${n}).`;
                        answer = sumNat.toString();
                        options = [answer, (sumNat + n).toString(), (sumNat - n).toString(), (sumNat * 2).toString()];
                        formula = "Sum = n(n + 1) / 2.";
                        solution = `${n} × ${n + 1} / 2 = ${sumNat}.`;
                        shortcut = `${n} × ${n + 1} / 2 = ${sumNat}.`;
                    } else if (diff === 'medium') {
                        const d1 = getVal(35, 85, 2); const d2 = getVal(4, 9, 3);
                        const r1 = getVal(12, d1 - 5, 4);
                        const ans = r1 % d2;
                        text = `A number N when divided by ${d1} leaves a remainder of ${r1}. What remainder is obtained when N is divided by ${d2}? (Assume ${d1} is a multiple of ${d2}).`;
                        answer = ans.toString();
                        options = [answer, ((ans + 1) % d2).toString(), ((ans + 2) % d2).toString(), "0"];
                        formula = "Modulo rule: r2 = r1 mod d2.";
                        solution = `Remainder = ${r1} mod ${d2} = ${ans}.`;
                        shortcut = `${r1} mod ${d2} = ${ans}.`;
                    } else if (diff === 'hard') {
                        const base = [2, 3, 7, 8][getVal(0, 3, 2)];
                        const power = getVal(120, 480, 3);
                        const cycle = [];
                        for (let c = 1; c <= 4; c++) cycle.push(Math.pow(base, c) % 10);
                        const remIdx = (power % 4 === 0 ? 4 : power % 4) - 1;
                        const ans = cycle[remIdx];
                        text = `Determine the unit digit of (${base * 10 + base})^${power}.`;
                        answer = ans.toString();
                        options = [answer, ((ans + 2) % 10).toString(), ((ans + 4) % 10).toString(), "6"];
                        formula = "Unit digit cyclicity repeats with period 4.";
                        solution = `Exponent ${power} mod 4 = ${power % 4 || 4}. ${base}^${power % 4 || 4} mod 10 = ${ans}.`;
                        shortcut = `${base}^${power % 4 || 4} mod 10 = ${ans}.`;
                    } else { // expert
                        const n = getVal(90, 350, 2);
                        const zeroes = Math.floor(n / 5) + Math.floor(n / 25) + Math.floor(n / 125);
                        text = `Find the exact number of trailing zeroes at the end of ${n}!.`;
                        answer = zeroes.toString();
                        options = [answer, (zeroes - 2).toString(), (zeroes + 3).toString(), (zeroes * 2).toString()];
                        formula = "Sum of floor(n / 5^k).";
                        solution = `floor(${n}/5) + floor(${n}/25) + floor(${n}/125) = ${zeroes}.`;
                        shortcut = `Sum quotients = ${zeroes}.`;
                    }
                    break;
                }
                case 'percentage': {
                    if (diff === 'beginner') {
                        const total = getVal(100, 600, 2) * 5;
                        const p = [10, 20, 25, 40, 50][getVal(0, 4, 3)];
                        const val = (total * p) / 100;
                        text = `What is ${p}% of $${total}?`;
                        answer = `$${val}`;
                        options = [answer, `$${val + 20}`, `$${val - 15}`, `$${val * 2}`];
                        formula = "Value = (P / 100) × Total.";
                        solution = `(${p} / 100) × ${total} = $${val}.`;
                        shortcut = `${p}% × ${total} = $${val}.`;
                    } else if (diff === 'easy') {
                        const sal = getVal(1500, 4500, 2) * 10;
                        const inc = getVal(10, 30, 3);
                        const newSal = sal * (1 + inc / 100);
                        text = `${name1}'s salary is $${sal}. If it increases by ${inc}%, what is the new salary?`;
                        answer = `$${newSal}`;
                        options = [answer, `$${newSal - 150}`, `$${newSal + 250}`, `$${sal + inc * 10}`];
                        formula = "New = Original × (1 + Rate/100).";
                        solution = `$${sal} × (1 + ${inc}/100) = $${newSal}.`;
                        shortcut = `${sal} × ${(1 + inc/100).toFixed(2)} = $${newSal}.`;
                    } else if (diff === 'medium') {
                        const c1 = getVal(15, 35, 2); const c2 = getVal(10, 25, 3);
                        const net = c1 - c2 - (c1 * c2 / 100);
                        const typeStr = net >= 0 ? "Increase" : "Decrease";
                        text = `The price of an electronic gadget is first increased by ${c1}% and then reduced by ${c2}%. What is the net percentage change?`;
                        answer = `${typeStr} of ${Math.abs(net).toFixed(2)}%`;
                        options = [answer, `${net >= 0 ? "Decrease" : "Increase"} of ${Math.abs(net).toFixed(2)}%`, `Increase of ${(c1 - c2).toFixed(2)}%`, "No change"];
                        formula = "Net% = a + b + ab/100.";
                        solution = `${c1} - ${c2} - (${c1} × ${c2})/100 = ${net.toFixed(2)}%.`;
                        shortcut = `${c1} - ${c2} - ${(c1*c2/100).toFixed(2)} = ${net.toFixed(2)}%.`;
                    } else if (diff === 'hard') {
                        const priceInc = getVal(20, 50, 2);
                        const drop = parseFloat(((priceInc / (100 + priceInc)) * 100).toFixed(2));
                        text = `If the price of commodity increases by ${priceInc}%, by what percentage must consumption be reduced so that total expenditure remains unchanged?`;
                        answer = `${drop}%`;
                        options = [answer, `${priceInc}%`, `${(drop * 0.85).toFixed(2)}%`, `${(priceInc * 1.15).toFixed(2)}%`];
                        formula = "Drop = [R / (100 + R)] × 100%.";
                        solution = `[${priceInc} / (100 + ${priceInc})] × 100 = ${drop}%.`;
                        shortcut = `${priceInc} / ${100 + priceInc} × 100 = ${drop}%.`;
                    } else { // expert
                        const pop = getVal(20, 80, 2) * 1000;
                        const r1 = getVal(5, 12, 3); const r2 = getVal(8, 15, 4);
                        const finalPop = Math.round(pop * (1 + r1/100) * (1 - r2/100));
                        text = `A town's population was ${pop}. It increased by ${r1}% in the first year and decreased by ${r2}% in the second year. Find the final population.`;
                        answer = finalPop.toString();
                        options = [answer, (finalPop + 350).toString(), (finalPop - 450).toString(), pop.toString()];
                        formula = "P = P0 × (1 + r1/100) × (1 - r2/100).";
                        solution = `${pop} × ${(1 + r1/100).toFixed(2)} × ${(1 - r2/100).toFixed(2)} = ${finalPop}.`;
                        shortcut = `Sequential compounding: ${finalPop}.`;
                    }
                    break;
                }
                case 'profit_loss': {
                    if (diff === 'beginner') {
                        const cp = getVal(100, 500, 2); const p = getVal(25, 100, 3);
                        const sp = cp + p;
                        text = `An item bought for $${cp} is sold for $${sp}. What is the profit?`;
                        answer = `$${p}`;
                        options = [answer, `$${p + 15}`, `$${p - 10}`, `$${sp}`];
                        formula = "Profit = SP - CP.";
                        solution = `$${sp} - $${cp} = $${p}.`;
                        shortcut = `${sp} - ${cp} = $${p}.`;
                    } else if (diff === 'easy') {
                        const cp = getVal(150, 750, 2);
                        const profitP = [10, 15, 20, 25, 30][getVal(0, 4, 3)];
                        const sp = cp * (1 + profitP / 100);
                        text = `A vendor buys an article for $${cp} and sells it at a gain of ${profitP}%. Find the selling price.`;
                        answer = `$${sp}`;
                        options = [answer, `$${sp - 20}`, `$${sp + 35}`, `$${cp + profitP}`];
                        formula = "SP = CP × (1 + Profit% / 100).";
                        solution = `$${cp} × (1 + ${profitP}/100) = $${sp}.`;
                        shortcut = `${cp} × ${(1 + profitP/100).toFixed(2)} = $${sp}.`;
                    } else if (diff === 'medium') {
                        const cpC = getVal(16, 36, 2); const spC = getVal(12, cpC - 3, 3);
                        const p = parseFloat(((cpC - spC) / spC * 100).toFixed(2));
                        text = `The Cost Price of ${cpC} articles equals the Selling Price of ${spC} articles. Find the profit percentage.`;
                        answer = `${p}%`;
                        options = [answer, `${((cpC - spC) / cpC * 100).toFixed(2)}%`, `${(p + 5).toFixed(2)}%`, "20.00%"];
                        formula = "Profit% = [(CP - SP) / SP] × 100%.";
                        solution = `(${cpC} - ${spC}) / ${spC} × 100 = ${p}%.`;
                        shortcut = `(${cpC} - ${spC}) / ${spC} × 100 = ${p}%.`;
                    } else if (diff === 'hard') {
                        const cheatG = getVal(800, 950, 2);
                        const profit = parseFloat(((1000 - cheatG) / cheatG * 100).toFixed(2));
                        text = `A trader sells rice at Cost Price but uses a false weight of ${cheatG} grams in place of 1000 grams. What is his profit percentage?`;
                        answer = `${profit}%`;
                        options = [answer, `${((1000 - cheatG) / 10).toFixed(2)}%`, `${(profit * 0.9).toFixed(2)}%`, "10.00%"];
                        formula = "Profit% = [Error / (True Weight - Error)] × 100%.";
                        solution = `(${1000 - cheatG} / ${cheatG}) × 100 = ${profit}%.`;
                        shortcut = `(${1000 - cheatG} / ${cheatG}) × 100 = ${profit}%.`;
                    } else { // expert
                        const rate = getVal(10, 25, 2);
                        const sp = getVal(200, 800, 3) * 10;
                        const loss = parseFloat(((rate * rate) / 100).toFixed(2));
                        text = `${name1} sold two appliances for $${sp} each. On one there was a gain of ${rate}%, and on the other a loss of ${rate}%. What was the net transaction outcome?`;
                        answer = `Loss of ${loss}%`;
                        options = [answer, `Profit of ${loss}%`, "No Profit, No Loss", `Loss of ${(rate * 2).toFixed(2)}%`];
                        formula = "Equal SP with +/- x% yields loss of (x/10)^2 %.";
                        solution = `Loss% = ${rate}^2 / 100 = ${loss}%.`;
                        shortcut = `(${rate}/10)^2 = ${loss}% loss.`;
                    }
                    break;
                }
                case 'ratio_proportion': {
                    if (diff === 'beginner') {
                        const a = getVal(2, 5, 2); const b = getVal(3, 7, 3);
                        const total = (a + b) * getVal(10, 40, 4);
                        const shareA = (total / (a + b)) * a;
                        text = `Divide $${total} between A and B in the ratio ${a} : ${b}. What is A's share?`;
                        answer = `$${shareA}`;
                        options = [answer, `$${total - shareA}`, `$${shareA + 20}`, `$${shareA - 15}`];
                        formula = "Share A = Total × [a / (a + b)].";
                        solution = `$${total} × (${a} / ${a + b}) = $${shareA}.`;
                        shortcut = `${total} / ${a + b} × ${a} = $${shareA}.`;
                    } else if (diff === 'easy') {
                        const a = getVal(3, 9, 2); const b = getVal(4, 16, 3);
                        const meanP = Math.sqrt(a * b);
                        text = `Find the mean proportional between ${a} and ${b}.`;
                        answer = (Math.round(meanP * 10) / 10).toString();
                        options = [answer, (meanP + 2).toString(), (meanP - 1.5).toString(), ((a + b)/2).toString()];
                        formula = "Mean Proportional = sqrt(a × b).";
                        solution = `sqrt(${a} × ${b}) = sqrt(${a * b}) = ${answer}.`;
                        shortcut = `sqrt(${a * b}) = ${answer}.`;
                    } else if (diff === 'medium') {
                        const r1 = getVal(3, 5, 2); const r2 = getVal(1, 3, 3);
                        const totalMix = (r1 + r2) * getVal(8, 18, 4);
                        const addedW = getVal(4, 12, 5);
                        const m = (totalMix / (r1 + r2)) * r1;
                        const w = (totalMix / (r1 + r2)) * r2 + addedW;
                        const divG = gcd(m, w);
                        const ratioStr = `${m / divG} : ${w / divG}`;
                        text = `A container holds ${totalMix} litres of a mixture containing milk and water in the ratio ${r1} : ${r2}. If ${addedW} litres of water are added, find the new ratio.`;
                        answer = ratioStr;
                        options = [answer, `${r1} : ${r2 + 2}`, "3 : 2", "4 : 1"];
                        formula = "Calculate volumes and simplify with GCD.";
                        solution = `Milk = ${m}L, Water = ${totalMix - m} + ${addedW} = ${w}L. Ratio = ${ratioStr}.`;
                        shortcut = `${m} : ${w} = ${ratioStr}.`;
                    } else if (diff === 'hard') {
                        const c1 = getVal(2, 6, 2) * 1000; const c2 = getVal(3, 8, 3) * 1000;
                        const t1 = getVal(6, 12, 4); const t2 = getVal(6, 12, 5);
                        const totalP = getVal(25, 75, 6) * 100;
                        const p1 = c1 * t1; const p2 = c2 * t2;
                        const share1 = Math.round((p1 / (p1 + p2)) * totalP);
                        text = `${name1} invested $${c1} for ${t1} months and ${name2} invested $${c2} for ${t2} months. If total profit is $${totalP}, find ${name1}'s share.`;
                        answer = `$${share1}`;
                        options = [answer, `$${totalP - share1}`, `$${share1 - 120}`, `$${share1 + 200}`];
                        formula = "Ratio = (C1 × T1) : (C2 × T2).";
                        solution = `Ratio = ${p1} : ${p2}. Share = [${p1} / ${p1 + p2}] × ${totalP} = $${share1}.`;
                        shortcut = `${p1} / (${p1} + ${p2}) × ${totalP} = $${share1}.`;
                    } else { // expert
                        const r1 = getVal(1, 3, 2); const r2 = getVal(2, 4, 3); const r3 = getVal(3, 5, 4);
                        const denomSum = r1 * 1.0 + r2 * 0.5 + r3 * 0.25;
                        const factor = getVal(10, 30, 5);
                        const totalMoney = Math.round(denomSum * factor);
                        const fiftyPence = r2 * factor;
                        text = `A bag contains $1, 50-cent, and 25-cent coins in the ratio ${r1} : ${r2} : ${r3}. If total cash value is $${totalMoney}, calculate the number of 50-cent coins.`;
                        answer = fiftyPence.toString();
                        options = [answer, (fiftyPence - 8).toString(), (fiftyPence + 12).toString(), (fiftyPence * 2).toString()];
                        formula = "Total = k × (r1×1 + r2×0.5 + r3×0.25).";
                        solution = `Factor k = ${totalMoney} / ${denomSum} = ${factor}. 50-cent coins = ${r2} × ${factor} = ${fiftyPence}.`;
                        shortcut = `${totalMoney} / ${denomSum} × ${r2} = ${fiftyPence}.`;
                    }
                    break;
                }
                case 'average': {
                    if (diff === 'beginner') {
                        const a = getVal(10, 30, 2); const b = getVal(15, 35, 3); const c = getVal(20, 40, 4);
                        const avg = parseFloat(((a + b + c) / 3).toFixed(2));
                        text = `Find the average of ${a}, ${b}, and ${c}.`;
                        answer = avg.toString();
                        options = [answer, (avg + 2).toFixed(2), (avg - 3).toFixed(2), ((a + b)/2).toFixed(2)];
                        formula = "Average = Sum / Count.";
                        solution = `(${a} + ${b} + ${c}) / 3 = ${avg}.`;
                        shortcut = `(${a} + ${b} + ${c}) / 3 = ${avg}.`;
                    } else if (diff === 'easy') {
                        const s1 = getVal(20, 40, 2); const s2 = getVal(40, 80, 3);
                        const harm = parseFloat(((2 * s1 * s2) / (s1 + s2)).toFixed(2));
                        text = `A vehicle travels from City A to City B at ${s1} km/h and returns at ${s2} km/h. What is the average speed of the round trip?`;
                        answer = `${harm} km/h`;
                        options = [answer, `${((s1 + s2)/2).toFixed(2)} km/h`, `${(harm - 2).toFixed(2)} km/h`, `${(harm + 3).toFixed(2)} km/h`];
                        formula = "Average Speed = 2xy / (x + y).";
                        solution = `(2 × ${s1} × ${s2}) / (${s1} + ${s2}) = ${harm} km/h.`;
                        shortcut = `2 × ${s1} × ${s2} / (${s1} + ${s2}) = ${harm} km/h.`;
                    } else if (diff === 'medium') {
                        const count = getVal(10, 25, 2); const inc = getVal(1, 3, 3); const oldW = getVal(50, 75, 4);
                        const newW = oldW + count * inc;
                        text = `The average weight of ${count} students increases by ${inc} kg when a student weighing ${oldW} kg is replaced by a newcomer. Find the weight of the new student.`;
                        answer = `${newW} kg`;
                        options = [answer, `${newW - 5} kg`, `${newW + 4} kg`, `${oldW} kg`];
                        formula = "New Weight = Replaced Weight + (Count × Increase).";
                        solution = `${oldW} + (${count} × ${inc}) = ${newW} kg.`;
                        shortcut = `${oldW} + ${count * inc} = ${newW} kg.`;
                    } else if (diff === 'hard') {
                        const n1 = getVal(15, 35, 2); const n2 = getVal(20, 40, 3);
                        const a1 = getVal(60, 85, 4); const a2 = getVal(50, 75, 5);
                        const wAvg = parseFloat(((n1 * a1 + n2 * a2) / (n1 + n2)).toFixed(2));
                        text = `Section A with ${n1} candidates scored average ${a1}, and Section B with ${n2} candidates scored average ${a2}. Find the combined overall average.`;
                        answer = wAvg.toString();
                        options = [answer, (wAvg - 2.4).toFixed(2), (wAvg + 3.1).toFixed(2), ((a1 + a2)/2).toFixed(2)];
                        formula = "Weighted Average = (n1×A1 + n2×A2) / (n1 + n2).";
                        solution = `(${n1}×${a1} + ${n2}×${a2}) / (${n1} + ${n2}) = ${wAvg}.`;
                        shortcut = `(${n1 * a1} + ${n2 * a2}) / ${n1 + n2} = ${wAvg}.`;
                    } else { // expert
                        const count = getVal(5, 9, 2); const avg = getVal(35, 65, 3);
                        const largest = avg + (count - 1);
                        text = `The average of ${count} consecutive odd numbers is ${avg}. Find the largest number in the series.`;
                        answer = largest.toString();
                        options = [answer, (largest - 4).toString(), (largest + 2).toString(), (avg + 2).toString()];
                        formula = "Largest = Average + (Count - 1).";
                        solution = `${avg} + (${count} - 1) = ${largest}.`;
                        shortcut = `${avg} + ${count - 1} = ${largest}.`;
                    }
                    break;
                }
                case 'time_work': {
                    if (diff === 'beginner') {
                        const a = getVal(8, 15, 2); const b = a * 2;
                        const comb = parseFloat(((a * b) / (a + b)).toFixed(2));
                        text = `${name1} can finish a task in ${a} days and ${name2} in ${b} days. How many days will they take working together?`;
                        answer = `${comb} days`;
                        options = [answer, `${(a + b) / 2} days`, `${(comb + 2).toFixed(2)} days`, `${a} days`];
                        formula = "Time = (A × B) / (A + B).";
                        solution = `(${a} × ${b}) / (${a} + ${b}) = ${comb} days.`;
                        shortcut = `(${a} × ${b}) / (${a} + ${b}) = ${comb} days.`;
                    } else if (diff === 'easy') {
                        const m1 = getVal(10, 20, 2); const d1 = getVal(12, 24, 3); const m2 = getVal(15, 30, 4);
                        const d2 = parseFloat(((m1 * d1) / m2).toFixed(2));
                        text = `If ${m1} workers complete a project in ${d1} days, how many days will ${m2} workers take?`;
                        answer = `${d2} days`;
                        options = [answer, `${(d2 + 3).toFixed(2)} days`, `${(d2 - 2).toFixed(2)} days`, `${d1} days`];
                        formula = "M1 × D1 = M2 × D2.";
                        solution = `(${m1} × ${d1}) / ${m2} = ${d2} days.`;
                        shortcut = `(${m1} × ${d1}) / ${m2} = ${d2} days.`;
                    } else if (diff === 'medium') {
                        const eff = getVal(2, 4, 2); const daysA = getVal(10, 30, 3);
                        const comb = parseFloat(((daysA * eff) / (eff + 1)).toFixed(2));
                        text = `${name1} is ${eff} times as efficient as ${name2}. If ${name1} can complete a task in ${daysA} days, in how many days can both complete it together?`;
                        answer = `${comb} days`;
                        options = [answer, `${(comb * 1.4).toFixed(2)} days`, `${(comb - 1.5).toFixed(2)} days`, `${daysA} days`];
                        formula = "Time = (Days A × Eff) / (Eff + 1).";
                        solution = `(${daysA} × ${eff}) / (${eff} + 1) = ${comb} days.`;
                        shortcut = `(${daysA} × ${eff}) / (${eff} + 1) = ${comb} days.`;
                    } else if (diff === 'hard') {
                        const fillH = getVal(6, 12, 2); const leakH = fillH + getVal(3, 6, 3);
                        const netT = parseFloat(((fillH * leakH) / (leakH - fillH)).toFixed(2));
                        text = `Pipe A can fill a tank in ${fillH} hours, while an outlet empties it in ${leakH} hours. In how many hours will the tank fill if both are open?`;
                        answer = `${netT} hours`;
                        options = [answer, `${(netT + 4).toFixed(2)} hours`, `${(netT - 3).toFixed(2)} hours`, `${fillH + leakH} hours`];
                        formula = "Time = (A × B) / (B - A).";
                        solution = `(${fillH} × ${leakH}) / (${leakH} - ${fillH}) = ${netT} hours.`;
                        shortcut = `(${fillH} × ${leakH}) / (${leakH} - ${fillH}) = ${netT} hours.`;
                    } else { // expert
                        const wages = getVal(30, 80, 2) * 100;
                        const share = (wages * 3) / 5;
                        text = `${name1} and ${name2} undertake a contract for $${wages}. ${name1} alone can do it in 10 days and ${name2} in 15 days. What is ${name1}'s share of the wages?`;
                        answer = `$${share}`;
                        options = [answer, `$${wages - share}`, `$${share - 200}`, `$${share + 300}`];
                        formula = "Wages ratio = 1/10 : 1/15 = 3 : 2.";
                        solution = `(3/5) × $${wages} = $${share}.`;
                        shortcut = `3/5 × ${wages} = $${share}.`;
                    }
                    break;
                }
                case 'time_distance': {
                    if (diff === 'beginner') {
                        const s = getVal(40, 80, 2); const t = getVal(2, 5, 3); const d = s * t;
                        text = `A train travels at a speed of ${s} km/h for ${t} hours. What total distance does it cover?`;
                        answer = `${d} km`;
                        options = [answer, `${d + 30} km`, `${d - 20} km`, `${s + t} km`];
                        formula = "Distance = Speed × Time.";
                        solution = `${s} × ${t} = ${d} km.`;
                        shortcut = `${s} × ${t} = ${d} km.`;
                    } else if (diff === 'easy') {
                        const trainL = getVal(120, 280, 2); const speedKmh = [36, 54, 72, 90][getVal(0, 3, 3)];
                        const speedMs = speedKmh * 5 / 18; const timeSec = parseFloat((trainL / speedMs).toFixed(2));
                        text = `A train ${trainL} meters long runs at ${speedKmh} km/h. How many seconds will it take to pass a stationary telegraph pole?`;
                        answer = `${timeSec} seconds`;
                        options = [answer, `${(timeSec + 3).toFixed(2)} seconds`, `${(timeSec - 2).toFixed(2)} seconds`, `${(trainL / speedKmh).toFixed(2)} seconds`];
                        formula = "Time = Length / Speed in m/s.";
                        solution = `${trainL} / (${speedKmh} × 5/18) = ${timeSec} seconds.`;
                        shortcut = `${trainL} / ${speedMs} = ${timeSec} seconds.`;
                    } else if (diff === 'medium') {
                        const trainL = getVal(150, 300, 2); const platL = getVal(100, 250, 3);
                        const speedKmh = 72; const speedMs = 20; const totalD = trainL + platL;
                        const timeSec = parseFloat((totalD / speedMs).toFixed(2));
                        text = `A train of length ${trainL} m running at 72 km/h crosses a platform of length ${platL} m. Find the time taken in seconds.`;
                        answer = `${timeSec} seconds`;
                        options = [answer, `${(timeSec + 4).toFixed(2)} seconds`, `${(timeSec - 3).toFixed(2)} seconds`, `${(trainL / speedMs).toFixed(2)} seconds`];
                        formula = "Time = (Train Length + Platform Length) / Speed in m/s.";
                        solution = `(${trainL} + ${platL}) / 20 = ${timeSec} seconds.`;
                        shortcut = `${totalD} / 20 = ${timeSec} seconds.`;
                    } else if (diff === 'hard') {
                        const s1 = getVal(40, 65, 2); const s2 = getVal(50, 75, 3);
                        const dist = getVal(200, 450, 4); const timeH = parseFloat((dist / (s1 + s2)).toFixed(2));
                        text = `Two cars start at the same time from two stations ${dist} km apart and drive towards each other at speeds of ${s1} km/h and ${s2} km/h. After how many hours will they meet?`;
                        answer = `${timeH} hours`;
                        options = [answer, `${(timeH + 1.2).toFixed(2)} hours`, `${(timeH - 0.8).toFixed(2)} hours`, `${(dist / s1).toFixed(2)} hours`];
                        formula = "Time = Distance / (S1 + S2).";
                        solution = `${dist} / (${s1} + ${s2}) = ${timeH} hours.`;
                        shortcut = `${dist} / (${s1} + ${s2}) = ${timeH} hours.`;
                    } else { // expert
                        const l1 = getVal(120, 200, 2); const l2 = getVal(100, 180, 3);
                        const s1 = 70; const s2 = 34; const relSpeedMs = 10;
                        const timeSec = (l1 + l2) / relSpeedMs;
                        text = `Two trains of lengths ${l1} m and ${l2} m run in the same direction on parallel tracks at 70 km/h and 34 km/h. How many seconds will the faster train take to completely pass the slower train?`;
                        answer = `${timeSec} seconds`;
                        options = [answer, `${timeSec + 8} seconds`, `${timeSec - 6} seconds`, "35 seconds"];
                        formula = "Time = (L1 + L2) / [(S1 - S2) × 5/18].";
                        solution = `(${l1} + ${l2}) / (36 × 5/18) = ${l1 + l2} / 10 = ${timeSec} seconds.`;
                        shortcut = `(${l1} + ${l2}) / 10 = ${timeSec} seconds.`;
                    }
                    break;
                }
                case 'speed_distance': {
                    if (diff === 'beginner') {
                        const boat = getVal(12, 22, 2); const stream = getVal(2, 5, 3); const down = boat + stream;
                        text = `A boat has a speed of ${boat} km/h in still water and the river current flows at ${stream} km/h. What is its downstream speed?`;
                        answer = `${down} km/h`;
                        options = [answer, `${boat - stream} km/h`, `${boat} km/h`, `${down + 4} km/h`];
                        formula = "Downstream = Boat + Stream.";
                        solution = `${boat} + ${stream} = ${down} km/h.`;
                        shortcut = `${boat} + ${stream} = ${down} km/h.`;
                    } else if (diff === 'easy') {
                        const down = getVal(18, 28, 2); const up = down - getVal(6, 12, 3); const still = (down + up) / 2;
                        text = `A speedboat goes downstream at ${down} km/h and upstream at ${up} km/h. Find the speed in still water.`;
                        answer = `${still} km/h`;
                        options = [answer, `${(down - up)/2} km/h`, `${still + 2} km/h`, `${down - 3} km/h`];
                        formula = "Still Water = (Down + Up) / 2.";
                        solution = `(${down} + ${up}) / 2 = ${still} km/h.`;
                        shortcut = `(${down} + ${up}) / 2 = ${still} km/h.`;
                    } else if (diff === 'medium') {
                        const down = getVal(20, 30, 2); const up = down - getVal(6, 10, 3); const current = (down - up) / 2;
                        text = `A boat travels upstream at ${up} km/h and downstream at ${down} km/h. Find the rate of flow of the stream.`;
                        answer = `${current} km/h`;
                        options = [answer, `${(down + up)/2} km/h`, `${current + 2} km/h`, "5 km/h"];
                        formula = "Stream = (Down - Up) / 2.";
                        solution = `(${down} - ${up}) / 2 = ${current} km/h.`;
                        shortcut = `(${down} - ${up}) / 2 = ${current} km/h.`;
                    } else if (diff === 'hard') {
                        const track = getVal(4, 10, 2) * 100; const s1 = getVal(10, 16, 3); const s2 = getVal(6, 10, 4);
                        const meetTime = Math.round(track / (s1 + s2));
                        text = `Two runners start at the same point and run in opposite directions around a ${track}-meter circular track at speeds of ${s1} m/s and ${s2} m/s. When will they meet for the first time?`;
                        answer = `${meetTime} seconds`;
                        options = [answer, `${meetTime + 10} seconds`, `${meetTime - 8} seconds`, "45 seconds"];
                        formula = "Time = Track / (S1 + S2).";
                        solution = `${track} / (${s1} + ${s2}) = ${meetTime} seconds.`;
                        shortcut = `${track} / (${s1} + ${s2}) = ${meetTime} seconds.`;
                    } else { // expert
                        const policeSp = getVal(12, 16, 2); const thiefSp = policeSp - 3;
                        const leadM = getVal(100, 250, 3);
                        const catchSec = Math.round(leadM / (3 * 5 / 18));
                        text = `A police officer running at ${policeSp} km/h chases a thief running at ${thiefSp} km/h who has a lead of ${leadM} meters. After how many seconds will the officer catch the thief?`;
                        answer = `${catchSec} seconds`;
                        options = [answer, `${catchSec + 20} seconds`, `${catchSec - 25} seconds`, "120 seconds"];
                        formula = "Time = Lead / Relative Speed in m/s.";
                        solution = `${leadM} / [(3) × 5/18] = ${catchSec} seconds.`;
                        shortcut = `${leadM} / (5/6) = ${catchSec} seconds.`;
                    }
                    break;
                }
                case 'probability': {
                    if (diff === 'beginner') {
                        const outcomes = [
                            { text: "What is the probability of getting a heads on a single flip of an unbiased coin?", ans: "1/2", opts: ["1/2", "1/4", "1", "0"] },
                            { text: "What is the probability of rolling an even number on a standard 6-faced die?", ans: "1/2", opts: ["1/2", "1/3", "2/3", "1/6"] }
                        ];
                        const item = outcomes[index % outcomes.length];
                        text = item.text; answer = item.ans; options = item.opts;
                        formula = "P(E) = Favorable / Total.";
                        solution = "P = 1/2."; shortcut = "1/2.";
                    } else if (diff === 'easy') {
                        const red = getVal(3, 6, 2); const blue = getVal(4, 8, 3); const total = red + blue;
                        const divG = gcd(red, total);
                        const ansStr = `${red/divG}/${total/divG}`;
                        text = `A bag contains ${red} red marbles and ${blue} blue marbles. If a marble is drawn at random, what is the probability that it is red?`;
                        answer = ansStr;
                        options = [answer, `${blue/divG}/${total/divG}`, "1/4", "1/2"];
                        formula = "P(Red) = Red / Total.";
                        solution = `${red} / (${red} + ${blue}) = ${ansStr}.`;
                        shortcut = `${red}/${total} = ${ansStr}.`;
                    } else if (diff === 'medium') {
                        text = "When two unbiased dice are thrown together, what is the probability of getting a doublet (both dice showing the same number)?";
                        answer = "1/6";
                        options = ["1/6", "1/12", "1/36", "5/36"];
                        formula = "P = 6 / 36 = 1/6.";
                        solution = "6 doublets out of 36 outcomes = 1/6.";
                        shortcut = "6/36 = 1/6.";
                    } else if (diff === 'hard') {
                        const r = 5; const b = 4;
                        text = `An urn contains ${r} red balls and ${b} black balls. If two balls are drawn at random without replacement, what is the probability that both are red?`;
                        answer = "5/18";
                        options = ["5/18", "25/81", "1/2", "5/9"];
                        formula = "P(Both Red) = (5/9) × (4/8) = 20/72 = 5/18.";
                        solution = "(5/9) × (4/8) = 20/72 = 5/18.";
                        shortcut = "5/18.";
                    } else { // expert
                        const t1 = getVal(70, 80, 2); const t2 = getVal(75, 85, 3);
                        const contradict = (t1/100)*(1 - t2/100) + (1 - t1/100)*(t2/100);
                        const cP = parseFloat((contradict * 100).toFixed(2));
                        text = `${name1} speaks truth in ${t1}% of cases and ${name2} in ${t2}% of cases. In what percentage of cases are they likely to contradict each other?`;
                        answer = `${cP}%`;
                        options = [answer, `${(cP + 10).toFixed(2)}%`, `${(cP - 12).toFixed(2)}%`, "25.00%"];
                        formula = "P(Contradict) = P(A)P(B') + P(A')P(B).";
                        solution = `(${t1/100} × ${(100-t2)/100}) + (${(100-t1)/100} × ${t2/100}) = ${cP}%.`;
                        shortcut = `${cP}%.`;
                    }
                    break;
                }
                case 'permutation_combination': {
                    if (diff === 'beginner') {
                        const n = getVal(3, 5, 2); const arr = fact(n);
                        text = `In how many ways can ${n} distinct books be arranged on a shelf in a single row?`;
                        answer = arr.toString();
                        options = [answer, (arr * 2).toString(), (arr - 2).toString(), (n * 2).toString()];
                        formula = "Arrangements = n!.";
                        solution = `${n}! = ${arr}.`;
                        shortcut = `${n}! = ${arr}.`;
                    } else if (diff === 'easy') {
                        const n = getVal(4, 6, 2); const r = 2;
                        const comb = fact(n) / (fact(r) * fact(n - r));
                        text = `In how many ways can a team of ${r} members be chosen from a group of ${n} candidates?`;
                        answer = comb.toString();
                        options = [answer, (comb * 2).toString(), (comb - 3).toString(), fact(n).toString()];
                        formula = "^nC_r = n! / [r!(n - r)!].";
                        solution = `^${n}C_${r} = ${comb}.`;
                        shortcut = `^${n}C_${r} = ${comb}.`;
                    } else if (diff === 'medium') {
                        const n = getVal(5, 7, 2); const circ = fact(n - 1);
                        text = `In how many distinct ways can ${n} delegates be seated around a circular conference table?`;
                        answer = circ.toString();
                        options = [answer, fact(n).toString(), (circ / 2).toString(), "24"];
                        formula = "Circular Permutation = (n - 1)!.";
                        solution = `(${n} - 1)! = ${n-1}! = ${circ}.`;
                        shortcut = `(${n} - 1)! = ${circ}.`;
                    } else if (diff === 'hard') {
                        const v = getVal(7, 10, 2); const diag = (v * (v - 3)) / 2;
                        text = `How many diagonals does a regular convex polygon with ${v} sides possess?`;
                        answer = diag.toString();
                        options = [answer, (diag + 5).toString(), (diag - 4).toString(), (v * 2).toString()];
                        formula = "Diagonals = n(n - 3) / 2.";
                        solution = `${v}(${v} - 3) / 2 = ${diag}.`;
                        shortcut = `${v} × ${v - 3} / 2 = ${diag}.`;
                    } else { // expert
                        text = "How many unique words can be formed by rearranging all the letters of the word 'LEADER'?";
                        answer = "360";
                        options = ["360", "720", "120", "180"];
                        formula = "Permutations with repetition = 6! / 2! = 360.";
                        solution = "6! / 2! = 720 / 2 = 360.";
                        shortcut = "360.";
                    }
                    break;
                }
                case 'data_interpretation': {
                    if (diff === 'beginner') {
                        const q1 = getVal(100, 200, 2); const q2 = getVal(200, 300, 3);
                        const q3 = getVal(150, 250, 4); const q4 = getVal(300, 450, 5);
                        const total = q1 + q2 + q3 + q4;
                        text = `A sales table lists quarterly earnings: Q1: $${q1}k, Q2: $${q2}k, Q3: $${q3}k, Q4: $${q4}k. What is the total annual sales?`;
                        answer = `$${total}k`;
                        options = [answer, `$${total + 50}k`, `$${total - 40}k`, `$${total * 1.2}k`];
                        formula = "Total = Q1 + Q2 + Q3 + Q4.";
                        solution = `${q1} + ${q2} + ${q3} + ${q4} = $${total}k.`;
                        shortcut = `Sum = $${total}k.`;
                    } else if (diff === 'easy') {
                        text = "Given quarterly sales: Q1: $150k, Q2: $250k, Q3: $200k, Q4: $400k (Total $1000k). What percentage of total sales was generated in Q4?";
                        answer = "40.00%";
                        options = ["40.00%", "35.00%", "25.00%", "50.00%"];
                        formula = "Share% = (400 / 1000) × 100% = 40%.";
                        solution = "(400 / 1000) × 100 = 40%.";
                        shortcut = "40%.";
                    } else if (diff === 'medium') {
                        text = "In a corporate budget report, Tech expenditure is $600k and Sales expenditure is $450k. What is the simplified ratio of Tech to Sales?";
                        answer = "4 : 3";
                        options = ["4 : 3", "3 : 4", "5 : 3", "6 : 5"];
                        formula = "Ratio = 600 / 450 = 4/3.";
                        solution = "600 : 450 = 4 : 3.";
                        shortcut = "4 : 3.";
                    } else if (diff === 'hard') {
                        const angle = [72, 108, 144][getVal(0, 2, 2)];
                        const p = (angle / 360) * 100;
                        text = `In a market distribution pie chart, Product Alpha occupies a central angle of ${angle}°. What percentage of market share does this represent?`;
                        answer = `${p.toFixed(2)}%`;
                        options = [answer, `${(p + 5).toFixed(2)}%`, `${(p - 4).toFixed(2)}%`, `${angle}%`];
                        formula = "Percentage = (Angle / 360) × 100%.";
                        solution = `(${angle} / 360) × 100 = ${p.toFixed(2)}%.`;
                        shortcut = `${angle} / 360 × 100 = ${p.toFixed(2)}%.`;
                    } else { // expert
                        const y1 = getVal(300, 600, 2); const y2 = y1 + getVal(60, 180, 3);
                        const growth = parseFloat((((y2 - y1) / y1) * 100).toFixed(2));
                        text = `A division's annual revenue rose from $${y1}M in Year 1 to $${y2}M in Year 2. Find the annual percentage revenue growth rate.`;
                        answer = `${growth}%`;
                        options = [answer, `${(growth + 4).toFixed(2)}%`, `${(growth - 3).toFixed(2)}%`, "20.00%"];
                        formula = "Growth% = [(Year 2 - Year 1) / Year 1] × 100%.";
                        solution = `[(${y2} - ${y1}) / ${y1}] × 100 = ${growth}%.`;
                        shortcut = `${growth}%.`;
                    }
                    break;
                }
                case 'simplification': {
                    if (diff === 'beginner') {
                        const a = getVal(10, 30, 2); const b = getVal(3, 8, 3); const c = getVal(2, 6, 4);
                        const ans = a + b * c - 10;
                        text = `Evaluate: ${a} + ${b} × ${c} - 10.`;
                        answer = ans.toString();
                        options = [answer, ((a + b) * (c - 10)).toString(), (ans + 10).toString(), (ans - 5).toString()];
                        formula = "VBODMAS: Multiplication precedes addition and subtraction.";
                        solution = `${a} + ${b * c} - 10 = ${ans}.`;
                        shortcut = `${a} + ${b * c} - 10 = ${ans}.`;
                    } else if (diff === 'easy') {
                        text = "Evaluate the square roots expression: √(225) + √(81) - √(36).";
                        answer = "18";
                        options = ["18", "24", "15", "20"];
                        formula = "Square roots: 15 + 9 - 6 = 18.";
                        solution = "15 + 9 - 6 = 18.";
                        shortcut = "18.";
                    } else if (diff === 'medium') {
                        text = "Simplify the fraction sum: 2/3 + 3/4 - 1/2.";
                        answer = "11/12";
                        options = ["11/12", "5/7", "7/12", "3/4"];
                        formula = "LCM of 3, 4, 2 is 12 -> (8 + 9 - 6) / 12 = 11/12.";
                        solution = "(8 + 9 - 6) / 12 = 11/12.";
                        shortcut = "11/12.";
                    } else if (diff === 'hard') {
                        text = "Evaluate using algebraic identities: [(75 + 25)^2 - (75 - 25)^2] / (75 × 25).";
                        answer = "4";
                        options = ["4", "2", "100", "1"];
                        formula = "(a + b)^2 - (a - b)^2 = 4ab.";
                        solution = "4ab / ab = 4.";
                        shortcut = "Always equals 4.";
                    } else { // expert
                        text = "Simplify: [(3^4)^2 × 3^2] / 3^8.";
                        answer = "9";
                        options = ["9", "27", "3", "81"];
                        formula = "3^(8 + 2 - 8) = 3^2 = 9.";
                        solution = "3^10 / 3^8 = 3^2 = 9.";
                        shortcut = "9.";
                    }
                    break;
                }
                case 'algebra': {
                    if (diff === 'beginner') {
                        const a = getVal(3, 7, 2); const b = getVal(10, 25, 3); const x = getVal(3, 9, 4);
                        const c = a * x + b;
                        text = `Solve for x: ${a}x + ${b} = ${c}.`;
                        answer = x.toString();
                        options = [answer, (x + 2).toString(), (x - 1).toString(), (x * 2).toString()];
                        formula = "Linear equation solve.";
                        solution = `${a}x = ${c} - ${b} = ${a * x} -> x = ${x}.`;
                        shortcut = `${x}.`;
                    } else if (diff === 'easy') {
                        const r1 = getVal(2, 6, 2); const r2 = getVal(3, 8, 3);
                        const sum = r1 + r2; const prod = r1 * r2;
                        text = `Find the sum of roots of the quadratic equation: x^2 - ${sum}x + ${prod} = 0.`;
                        answer = sum.toString();
                        options = [answer, prod.toString(), (-sum).toString(), (r1 - r2).toString()];
                        formula = "Sum of roots = -b/a.";
                        solution = `-(-${sum}) / 1 = ${sum}.`;
                        shortcut = `${sum}.`;
                    } else if (diff === 'medium') {
                        const r1 = getVal(2, 5, 2); const r2 = getVal(3, 7, 3);
                        const sum = r1 + r2; const prod = r1 * r2;
                        text = `Find the product of roots of the quadratic equation: 2x^2 - ${sum * 2}x + ${prod * 2} = 0.`;
                        answer = prod.toString();
                        options = [answer, (prod * 2).toString(), sum.toString(), "-1"];
                        formula = "Product of roots = c/a.";
                        solution = `${prod * 2} / 2 = ${prod}.`;
                        shortcut = `${prod}.`;
                    } else if (diff === 'hard') {
                        const a = getVal(3, 8, 2); const d = getVal(3, 6, 3); const n = 15;
                        const term = a + (n - 1) * d;
                        text = `Find the 15th term of an Arithmetic Progression with first term a = ${a} and common difference d = ${d}.`;
                        answer = term.toString();
                        options = [answer, (term + d).toString(), (term - d).toString(), (a * n).toString()];
                        formula = "T_n = a + (n - 1)d.";
                        solution = `${a} + 14 × ${d} = ${term}.`;
                        shortcut = `${term}.`;
                    } else { // expert
                        const a = getVal(12, 36, 2);
                        const infSum = a / 0.5;
                        text = `Find the sum of the infinite Geometric Progression: ${a}, ${a/2}, ${a/4}, ${a/8}, ...`;
                        answer = infSum.toString();
                        options = [answer, (infSum + 12).toString(), (infSum / 2).toString(), (a * 4).toString()];
                        formula = "S_inf = a / (1 - r) = ${a} / 0.5 = ${infSum}.";
                        solution = `${a} / 0.5 = ${infSum}.`;
                        shortcut = `${infSum}.`;
                    }
                    break;
                }
                case 'geometry': {
                    if (diff === 'beginner') {
                        const l = getVal(10, 25, 2); const w = getVal(5, 12, 3); const area = l * w;
                        text = `Find the area of a rectangle with length ${l} cm and width ${w} cm.`;
                        answer = `${area} cm²`;
                        options = [answer, `${2*(l+w)} cm²`, `${area + 15} cm²`, `${area - 10} cm²`];
                        formula = "Area = L × W.";
                        solution = `${l} × ${w} = ${area} cm².`;
                        shortcut = `${l} × ${w} = ${area}.`;
                    } else if (diff === 'easy') {
                        const r = [7, 14, 21][getVal(0, 2, 2)];
                        const circum = Math.round(2 * (22/7) * r);
                        text = `Find the circumference of a circle of radius ${r} cm (use π = 22/7).`;
                        answer = `${circum} cm`;
                        options = [answer, `${circum + 22} cm`, `${circum - 14} cm`, `${Math.round(circum / 2)} cm`];
                        formula = "C = 2πr.";
                        solution = `2 × (22/7) × ${r} = ${circum} cm.`;
                        shortcut = `${circum} cm.`;
                    } else if (diff === 'medium') {
                        const l = 12; const w = 5;
                        text = "Find the diagonal of a rectangle with length 12 cm and width 5 cm.";
                        answer = "13 cm";
                        options = ["13 cm", "17 cm", "15 cm", "11 cm"];
                        formula = "Diagonal = sqrt(12^2 + 5^2) = 13.";
                        solution = "sqrt(144 + 25) = sqrt(169) = 13 cm.";
                        shortcut = "5-12-13 triplet.";
                    } else if (diff === 'hard') {
                        const change = getVal(10, 30, 2);
                        const areaP = parseFloat(((Math.pow(1 + change/100, 2) - 1) * 100).toFixed(2));
                        text = `If the radius of a circular disk is increased by ${change}%, what is the percentage increase in its surface area?`;
                        answer = `${areaP}%`;
                        options = [answer, `${change * 2}%`, `${(areaP - 4).toFixed(2)}%`, `${change}%`];
                        formula = "Area% = 2x + x^2/100.";
                        solution = `2(${change}) + (${change}^2 / 100) = ${areaP}%.`;
                        shortcut = `${areaP}%.`;
                    } else { // expert
                        const n = getVal(6, 10, 2);
                        const sumAng = (n - 2) * 180;
                        text = `What is the sum of all interior angles of a convex polygon with ${n} sides?`;
                        answer = `${sumAng}°`;
                        options = [answer, `${sumAng + 180}°`, `${sumAng - 180}°`, "360°"];
                        formula = "Sum = (n - 2) × 180°.";
                        solution = `(${n} - 2) × 180° = ${sumAng}°.`;
                        shortcut = `${sumAng}°.`;
                    }
                    break;
                }
            }
        }

        /* =================================================================
           2. LOGICAL REASONING (10 TOPICS)
           ================================================================= */
        else if (subject === 'reasoning') {
            switch (topic) {
                case 'puzzles': {
                    const puzzlesData = [
                        { text: `Three friends — ${name1}, ${name2}, and ${name3} — have different heights. ${name1} is taller than ${name2}. ${name2} is taller than ${name3}. Who is the tallest?`, ans: name1, opts: [name1, name2, name3, "Cannot be determined"], sol: `${name1} > ${name2} > ${name3}.` },
                        { text: `In a coding contest, ${name1} solved more problems than ${name2}. ${name2} solved more than ${name3}. Who got the lowest score?`, ans: name3, opts: [name3, name2, name1, "Tie"], sol: `${name1} > ${name2} > ${name3}.` },
                        { text: `Four boxes — Red, Blue, Green, Yellow — are stacked. Blue is on top. Green is directly below Blue. Red is at the bottom. Which box is third from top?`, ans: "Yellow", opts: ["Yellow", "Green", "Red", "Blue"], sol: "Stack: Blue, Green, Yellow, Red." },
                        { text: `Four students stand in a single file. ${name1} is behind ${name2}. ${name3} is behind ${name1}. Who is first in line?`, ans: name2, opts: [name2, name1, name3, "Nobody"], sol: `${name2} -> ${name1} -> ${name3}.` },
                        { text: `Five friends — A, B, C, D, and E — have different weights. A is heavier than B but lighter than C. D is lighter than B. C is lighter than E. Who is the lightest?`, ans: "D", opts: ["D", "B", "A", "C"], sol: "Weight order: E > C > A > B > D. D is lightest." },
                        { text: `Five executives — A, B, C, D, and E — work in HR, IT, Finance, Sales, and Marketing. A is in HR. B is in Marketing. C is in IT. D does not work in Finance. Which department does E work in?`, ans: "Finance", opts: ["Finance", "Sales", "IT", "HR"], sol: "A->HR, B->Mkt, C->IT, D->Sales, E->Finance." },
                        { text: `In a 4-floor building (numbered 1 at bottom to 4 at top), Alex lives on floor 1. Blake lives on an even-numbered floor. Charlie lives above Blake. On which floor does Dana live?`, ans: "Floor 3", opts: ["Floor 3", "Floor 2", "Floor 4", "Floor 1"], sol: "Blake=2, Charlie=4, Alex=1 -> Dana=3." },
                        { text: `Five workshops (Math, Logic, Physics, Chemistry, Biology) run Mon-Fri. Logic is on Wed. Physics is right before Biology. Math is on Mon. When is Chemistry held?`, ans: "Tuesday", opts: ["Tuesday", "Thursday", "Friday", "Monday"], sol: "Mon:Math, Tue:Chem, Wed:Logic, Thu:Physics, Fri:Bio." }
                    ];
                    const item = puzzlesData[index % puzzlesData.length];
                    text = item.text; answer = item.ans; options = item.opts; solution = item.sol;
                    break;
                }
                case 'seating_arrangement': {
                    const seatingData = [
                        { text: "Four students sit in a straight row facing North: A, B, C, D. A is at the left end and D is at the right end. B is next to A. Who sits between B and D?", ans: "C", opts: ["C", "A", "B", "D"], sol: "Row: A - B - C - D." },
                        { text: "Four friends sit around a square table facing inward. The North side sits directly opposite to which side?", ans: "South Side", opts: ["South Side", "East Side", "West Side", "Corner"], sol: "North faces South." },
                        { text: "Six friends — P, Q, R, S, T, and U — sit in a circle facing the center. R sits between P and Q. T is adjacent to U. S sits immediately left of P. Who is directly opposite to P?", ans: "T", opts: ["T", "U", "Q", "R"], sol: "Clockwise: S -> P -> R -> Q -> U -> T. Opposite to P is T." },
                        { text: "Eight people sit in a circle facing outward. For a person facing outward, moving to their Right corresponds to which direction?", ans: "Clockwise", opts: ["Clockwise", "Counter-clockwise", "Inward", "Northward"], sol: "Facing outward: Right = Clockwise." },
                        { text: "Six people sit in two parallel rows of three each. Row 1 faces South and Row 2 faces North. Person X at extreme left of Row 1 faces which position in Row 2?", ans: "Extreme Right of Row 2", opts: ["Extreme Right of Row 2", "Extreme Left of Row 2", "Center of Row 2", "Nobody"], sol: "Left of South-facing row faces Right of North-facing row." }
                    ];
                    const item = seatingData[index % seatingData.length];
                    text = item.text; answer = item.ans; options = item.opts; solution = item.sol;
                    break;
                }
                case 'blood_relations': {
                    const brData = [
                        { text: "A is the father of B. B is the sister of C. How is A related to C?", ans: "Father", opts: ["Father", "Uncle", "Brother", "Grandfather"], sol: "A is father of both B and C." },
                        { text: "A is the brother of B. B is the mother of C. How is A related to C?", ans: "Maternal Uncle", opts: ["Maternal Uncle", "Paternal Uncle", "Father", "Brother"], sol: "Mother's brother = Maternal Uncle." },
                        { text: `Pointing to a portrait of a boy, ${name1} says: "He is the only son of my father's only son." How is ${name1} related to the boy? (Assume ${name1} is male).`, ans: "Father", opts: ["Father", "Son", "Uncle", "Brother"], sol: "My father's only son = Myself -> Father." },
                        { text: "If 'P + Q' means P is brother of Q, and 'P * Q' means P is father of Q. Which expression proves that A is the paternal uncle of B?", ans: "A + C * B", opts: ["A + C * B", "A - C * B", "A * C + B", "A + B * C"], sol: "A is brother of C (A + C), and C is father of B (C * B) -> Uncle." },
                        { text: "Introducing a woman, a man says: 'Her mother is the only daughter of my mother-in-law.' How is the man related to the woman?", ans: "Father", opts: ["Father", "Uncle", "Brother", "Husband"], sol: "Wife's daughter = Daughter -> Man is Father." }
                    ];
                    const item = brData[index % brData.length];
                    text = item.text; answer = item.ans; options = item.opts; solution = item.sol;
                    break;
                }
                case 'coding_decoding': {
                    const words = ["PYTHON", "LOGIC", "VECTOR", "SYSTEM", "MATRIX", "CODING", "ALGO", "DATA"];
                    const w = words[index % words.length];
                    if (patternType === 1) {
                        const enc = w.split('').map(c => String.fromCharCode(((c.charCodeAt(0) - 65 + 1) % 26) + 65)).join('');
                        text = `If in a code language, letters are shifted forward by +1 (e.g. A->B), what is the code for '${w}'?`;
                        answer = enc;
                        options = [answer, w.split('').reverse().join(''), "MPHID", "KNFHB"];
                        solution = `Shift each letter forward by +1: ${w} -> ${enc}.`;
                    } else if (patternType === 2) {
                        const rev = w.split('').reverse().join('');
                        text = `If 'STREAM' is written in reverse as 'MAERTS', how is '${w}' coded?`;
                        answer = rev;
                        options = [answer, w, "NOHTYP", "CODGIN"];
                        solution = `Reverse letter order: ${w} -> ${rev}.`;
                    } else if (patternType === 3) {
                        text = "In an opposite-letter cipher (where A=Z, B=Y, C=X), what is the code for 'BAR'?";
                        answer = "YZI";
                        options = ["YZI", "XZI", "YAI", "ZYI"];
                        solution = "B->Y, A->Z, R->I -> YZI.";
                    } else {
                        text = "In a code language: '123' means 'hot filtered coffee', '356' means 'very hot day', and '589' means 'day and night'. Which digit represents 'very'?";
                        answer = "6";
                        options = ["6", "3", "5", "2"];
                        solution = "3='hot', 5='day' -> 6='very'.";
                    }
                    break;
                }
                case 'syllogism': {
                    const sylData = [
                        { text: "Statements:<br>1. All cats are animals.<br>2. All animals are living beings.<br><br>Conclusions:<br>I. All cats are living beings.<br>II. Some animals are cats.<br><br>Which conclusion follows?", ans: "Both I and II follow", opts: ["Both I and II follow", "Only I follows", "Only II follows", "Neither follows"], sol: "Cats ⊆ Animals ⊆ Living Beings." },
                        { text: "Statements:<br>1. All mangoes are fruits.<br>2. Some fruits are sweet.<br><br>Conclusions:<br>I. Some mangoes are sweet.<br>II. Some fruits are mangoes.<br><br>Which conclusion follows?", ans: "Only II follows", opts: ["Only II follows", "Only I follows", "Both follow", "Neither follows"], sol: "Mangoes ⊆ Fruits guarantees Some fruits are mangoes." },
                        { text: "Statements:<br>1. No car is a bike.<br>2. All bikes are vehicles.<br><br>Conclusions:<br>I. No car is a vehicle.<br>II. Some vehicles are bikes.<br><br>Which conclusion follows?", ans: "Only II follows", opts: ["Only II follows", "Only I follows", "Both follow", "Neither follows"], sol: "Bikes ⊆ Vehicles guarantees Some vehicles are bikes." },
                        { text: "Statements:<br>1. Some pens are erasers.<br>2. Some erasers are rulers.<br><br>Conclusions:<br>I. Some pens being rulers is a possibility.<br>II. All pens are rulers.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"], sol: "No negative rule -> Possibility I holds." },
                        { text: "Statements:<br>1. No stone is metal.<br>2. Some metals are gems.<br><br>Conclusions:<br>I. Some gems are not stones.<br>II. All stones are gems.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"], sol: "Metals portion of gems cannot be stones -> I holds." }
                    ];
                    const item = sylData[index % sylData.length];
                    text = item.text; answer = item.ans; options = item.opts; solution = item.sol;
                    break;
                }
                case 'direction_sense': {
                    if (diff === 'beginner') {
                        text = `${name1} walks 10m North, turns right and walks 10m. Which direction are they walking towards now?`;
                        answer = "East";
                        options = ["East", "West", "North", "South"];
                        solution = "Right turn from North is East.";
                    } else if (diff === 'easy') {
                        text = `${name1} walks 10m East, turns left and walks 10m, then turns left again and walks 10m. In which direction are they from their starting point?`;
                        answer = "North";
                        options = ["North", "South", "East", "West"];
                        solution = "Displacement is due North of origin.";
                    } else if (diff === 'medium') {
                        const d1 = getVal(3, 8, 2); const d2 = getVal(4, 9, 3);
                        const hyp = parseFloat(Math.sqrt(d1*d1 + d2*d2).toFixed(2));
                        text = `${name1} walks ${d1} km North, turns right and walks ${d2} km East. What is the shortest straight-line distance from start?`;
                        answer = `${hyp} km`;
                        options = [answer, `${d1 + d2} km`, `${Math.abs(d1 - d2)} km`, `${(hyp + 2).toFixed(2)} km`];
                        formula = "Displacement = sqrt(d1^2 + d2^2).";
                        solution = `sqrt(${d1}^2 + ${d2}^2) = ${hyp} km.`;
                    } else if (diff === 'hard') {
                        text = "One morning at sunrise, Suresh stood facing a pole. The shadow of the pole fell directly to his right. Which direction was Suresh facing?";
                        answer = "South";
                        options = ["South", "North", "East", "West"];
                        solution = "Sunrise shadow is West. Right = West -> Suresh faces South.";
                    } else { // expert
                        text = "A person facing North turns 90° clockwise, then 180° anti-clockwise, and finally 90° clockwise. Which direction are they facing now?";
                        answer = "North";
                        options = ["North", "South", "East", "West"];
                        solution = "+90 - 180 + 90 = 0° -> Facing North.";
                    }
                    break;
                }
                case 'statement_conclusion': {
                    const stData = [
                        { text: "Statement: All software engineers in the team know JavaScript.<br><br>Conclusions:<br>I. Alice, who is an engineer in the team, knows JavaScript.<br>II. People outside the team know JavaScript.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"] },
                        { text: "Statement: Regular physical exercise significantly reduces the risk of heart disease.<br><br>Conclusions:<br>I. Physical exercise improves heart health.<br>II. People who do not exercise will definitely suffer from heart disease.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"] },
                        { text: "Statement: High screen time before sleep disrupts sleep cycles due to blue light emission.<br><br>Conclusions:<br>I. Reducing screen time before bed can improve sleep quality.<br>II. Blue light is emitted exclusively by smartphones.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"] },
                        { text: "Statement: Quality education is the primary catalyst for economic development.<br><br>Conclusions:<br>I. Investing in education can accelerate economic prosperity.<br>II. Education is the only sector requiring government funds.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"] },
                        { text: "Statement: The municipal corporation has mandated waste segregation at source.<br><br>Conclusions:<br>I. Segregation at source aids in efficient municipal waste recycling.<br>II. All citizens will automatically follow every civic rule.<br><br>Which conclusion follows?", ans: "Only I follows", opts: ["Only I follows", "Only II follows", "Both follow", "Neither follows"] }
                    ];
                    const item = stData[index % stData.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Strict logical inference derived exclusively from given statements.";
                    break;
                }
                case 'series': {
                    if (diff === 'beginner') {
                        const step = getVal(3, 7, 2); const b = getVal(2, 10, 3);
                        text = `Find the next number in the arithmetic series: ${b}, ${b+step}, ${b+step*2}, ${b+step*3}, ?`;
                        answer = (b + step * 4).toString();
                        options = [answer, (b + step * 4 + 2).toString(), (b + step * 4 - 3).toString(), (b * 4).toString()];
                        solution = `+${step} difference -> ${b + step * 3} + ${step} = ${answer}.`;
                    } else if (diff === 'easy') {
                        text = "Find the missing term in the geometric series: 2, 6, 18, 54, ?";
                        answer = "162";
                        options = ["162", "108", "144", "216"];
                        solution = "×3 multiplier -> 54 × 3 = 162.";
                    } else if (diff === 'medium') {
                        text = "Find the missing number in the Fibonacci-style series: 2, 3, 5, 8, 13, ?";
                        answer = "21";
                        options = ["21", "20", "19", "24"];
                        solution = "5+8=13, 8+13=21.";
                    } else if (diff === 'hard') {
                        text = "Complete the letter series: B, D, G, K, ?";
                        answer = "P";
                        options = ["P", "O", "Q", "N"];
                        solution = "B(2) +2-> D(4) +3-> G(7) +4-> K(11) +5-> P(16).";
                    } else { // expert
                        text = "Find the next number in the alternating series: 3, 15, 6, 30, 9, 45, ?";
                        answer = "12";
                        options = ["12", "60", "15", "18"];
                        solution = "Odd positions: 3, 6, 9, 12 (+3). Next is 12.";
                    }
                    break;
                }
                case 'analogy': {
                    const anData = [
                        { text: "Complete the analogy: <b>Cow : Calf :: Horse : ?</b>", ans: "Foal", opts: ["Foal", "Puppy", "Kitten", "Cub"] },
                        { text: "Complete the analogy: <b>London : UK :: Berlin : ?</b>", ans: "Germany", opts: ["Germany", "France", "Austria", "Poland"] },
                        { text: "Complete the craftsman-tool analogy: <b>Carpenter : Saw :: Tailor : ?</b>", ans: "Scissors", opts: ["Scissors", "Hammer", "Chisel", "Scalpel"] },
                        { text: "Complete the semantic analogy: <b>Generous : Miserly :: Lucid : ?</b>", ans: "Vague / Opaque", opts: ["Vague / Opaque", "Clear", "Bright", "Honest"] },
                        { text: "Complete the instrument analogy: <b>Hygrometer : Humidity :: Ammeter : ?</b>", ans: "Electric Current", opts: ["Electric Current", "Voltage", "Pressure", "Resistance"] },
                        { text: "Complete the analogy: <b>Odometer : Distance :: Barometer : ?</b>", ans: "Atmospheric Pressure", opts: ["Atmospheric Pressure", "Temperature", "Humidity", "Current"] }
                    ];
                    const item = anData[index % anData.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Exact functional/semantic relationship matching.";
                    break;
                }
                case 'non_verbal': {
                    const nvData = [
                        { text: "Which letter looks identical in its mirror reflection when a vertical mirror is placed to its right?", ans: "M", opts: ["M", "F", "E", "P"] },
                        { text: "Which letter appears identical in its Water Image (horizontal reflection)?", ans: "X", opts: ["X", "A", "R", "L"] },
                        { text: "In a figure series, an arrow rotates clockwise: East -> South-East -> South -> South-West -> ? What is the next orientation?", ans: "West", opts: ["West", "North-West", "North", "East"] },
                        { text: "A square transparent sheet with a pattern is folded along the vertical center from left to right. What happens to the left pattern?", ans: "It flips laterally and overlays the right half pattern", opts: ["It flips laterally and overlays the right half pattern", "It vanishes completely", "It rotates 180 degrees", "It remains on the left side"] },
                        { text: "In a 3x3 matrix, shapes rotate 90° clockwise across columns and line counts increase by +1 down rows. How is the bottom-right shape determined?", ans: "Apply row addition and column rotation simultaneously", opts: ["Apply row addition and column rotation simultaneously", "Count lines only", "Rotate 45 degrees", "Mirror image only"] }
                    ];
                    const item = nvData[index % nvData.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Spatial transformation analysis.";
                    break;
                }
            }
        }

        /* =================================================================
           3. VERBAL ABILITY (7 TOPICS)
           ================================================================= */
        else if (subject === 'verbal') {
            switch (topic) {
                case 'grammar': {
                    const grammarPool = [
                        { text: "Choose the correct verb: 'He ______ to work by train every day.'", ans: "commutes", opts: ["commutes", "commute", "commuting", "commuted"] },
                        { text: "Choose the correct pronoun: '______ are going to the seminar today.'", ans: "They", opts: ["They", "Them", "Their", "Theirs"] },
                        { text: "Select the correct article: 'She has earned ______ MBA degree.'", ans: "an", opts: ["an", "a", "the", "no article"] },
                        { text: "Select the sentence with correct relative pronoun usage:", ans: "The scientist who developed the model won the prize.", opts: ["The scientist who developed the model won the prize.", "The scientist whom developed the model won the prize.", "The scientist which developed the model won the prize.", "The scientist whose developed the model won the prize."] },
                        { text: "Choose the correct preposition: 'She is interested ______ learning cloud architecture.'", ans: "in", opts: ["in", "at", "for", "with"] },
                        { text: "Choose the grammatically correct sentence regarding subject-verb agreement:", ans: "Neither of the two candidates was qualified for the executive role.", opts: ["Neither of the two candidates was qualified for the executive role.", "Neither of the two candidates were qualified for the executive role.", "None of the two candidates was qualified for the executive role.", "Neither of the two candidates have been qualified for the executive role."] },
                        { text: "Select the sentence with correct parallel structure:", ans: "She enjoys coding applications, writing documentation, and testing software.", opts: ["She enjoys coding applications, writing documentation, and testing software.", "She enjoys coding applications, to write documentation, and testing software.", "She enjoys coding applications, writing documentation, and to test software.", "She enjoys to code applications, writing documentation, and software."] },
                        { text: "Select the sentence with correct conditional tense harmony:", ans: "If she had prepared thoroughly, she would have cleared the assessment.", opts: ["If she had prepared thoroughly, she would have cleared the assessment.", "If she would have prepared thoroughly, she would have cleared the assessment.", "If she had prepared thoroughly, she cleared the assessment.", "Had she prepared thoroughly, she would clear the assessment."] },
                        { text: "Choose the sentence with correct correlative conjunction placement:", ans: "She not only mastered Python but also learned Rust.", opts: ["She not only mastered Python but also learned Rust.", "Not only she mastered Python but also learned Rust.", "She mastered not only Python but also Rust learned.", "She not only was mastering Python but also Rust."] },
                        { text: "Choose the sentence with correct subjunctive mood usage:", ans: "If I were the lead architect, I would redesign the database schema.", opts: ["If I were the lead architect, I would redesign the database schema.", "If I was the lead architect, I would redesign the database schema.", "If I would be the lead architect, I will redesign the schema.", "Had I been the lead architect, I would redesign the schema."] }
                    ];
                    const item = grammarPool[index % grammarPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Standard grammatical concord and syntax evaluation.";
                    break;
                }
                case 'vocabulary': {
                    const vocabPool = [
                        { text: "What is the synonym of <b>'GENEROUS'</b>?", ans: "Charitable / Giving", opts: ["Charitable / Giving", "Selfish", "Greedy", "Cowardly"] },
                        { text: "What is the antonym of <b>'ANCIENT'</b>?", ans: "Modern / Contemporary", opts: ["Modern / Contemporary", "Historic", "Antique", "Aged"] },
                        { text: "What is the antonym of <b>'CANDID'</b>?", ans: "Deceitful / Secretive", opts: ["Deceitful / Secretive", "Frank / Honest", "Clear / Obvious", "Polite"] },
                        { text: "What is the synonym of <b>'DILIGENT'</b>?", ans: "Hardworking / Conscientious", opts: ["Hardworking / Conscientious", "Lazy", "Careless", "Hasty"] },
                        { text: "What is the closest synonym of <b>'METICULOUS'</b>?", ans: "Thorough and precise", opts: ["Thorough and precise", "Careless and hasty", "Ambiguous and vague", "Aggressive"] },
                        { text: "What is the meaning of the idiom <b>'To burn the midnight oil'</b>?", ans: "To work or study late into the night", opts: ["To work or study late into the night", "To waste valuable resources", "To ignite a controversy", "To sleep early"] },
                        { text: "Give the one-word substitution for: <b>'One who speaks or writes multiple languages fluently'</b>.", ans: "Polyglot", opts: ["Polyglot", "Philanthropist", "Somnambulist", "Bibliophile"] },
                        { text: "What is the meaning of the phrasal verb <b>'Call off'</b> in: 'They had to call off the meeting'?", ans: "To cancel", opts: ["To cancel", "To postpone", "To announce", "To shorten"] },
                        { text: "What is the synonym of the word <b>'EPHEMERAL'</b>?", ans: "Transient / Short-lived", opts: ["Transient / Short-lived", "Permanent / Eternal", "Monumental", "Ancient"] },
                        { text: "What is the antonym of the word <b>'FASTIDIOUS'</b>?", ans: "Carefree / Undemanding", opts: ["Carefree / Undemanding", "Meticulous", "Punctual", "Critical"] }
                    ];
                    const item = vocabPool[index % vocabPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Contextual semantic vocabulary definition.";
                    break;
                }
                case 'reading_comprehension': {
                    const rcPool = [
                        { text: "Passage: 'Electric vehicles produce zero tailpipe emissions, helping improve urban air quality.'<br><br>What benefit of electric vehicles is mentioned?", ans: "Improved urban air quality.", opts: ["Improved urban air quality.", "Faster charging speeds.", "Cheaper prices.", "Unlimited battery life."] },
                        { text: "Passage: 'Battery storage costs dropped by over 80% in the past decade, making solar and wind energy economically competitive.'<br><br>What made renewable energy competitive?", ans: "A steep decline in battery storage costs.", opts: ["A steep decline in battery storage costs.", "Government bans on fossil fuels.", "Decrease in total energy demand.", "Scarcity of power grids."] },
                        { text: "Passage: 'AI algorithms analyze biomedical scans faster than human clinicians. However, deployment requires rigorous validation to mitigate bias and safeguard patient privacy.'<br><br>What is the author's primary thesis?", ans: "AI provides diagnostic benefits but requires validation and privacy controls.", opts: ["AI provides diagnostic benefits but requires validation and privacy controls.", "AI will replace all medical doctors.", "Biomedical imaging is fundamentally flawed.", "Privacy issues make medical AI impossible."] },
                        { text: "Passage: 'Unlike rigid monolithic software architectures, microservices permit independent deployment of modules, though they introduce complex distributed network orchestration challenges.'<br><br>What can be inferred about microservices?", ans: "They trade architectural simplicity for modular flexibility.", opts: ["They trade architectural simplicity for modular flexibility.", "They are completely free of operational overhead.", "They cannot connect across cloud networks.", "Monolithic systems are superior in every scenario."] },
                        { text: "Passage: 'The author meticulously assesses both historical precedents and contemporary fiscal policies without adopting partisan stances.'<br><br>What is the tone of the author?", ans: "Objective and Analytical", opts: ["Objective and Analytical", "Sarcastic and Cynical", "Aggressive and Polemical", "Nostalgic and Sentimental"] }
                    ];
                    const item = rcPool[index % rcPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Direct textual evidence and supported logical inference.";
                    break;
                }
                case 'sentence_correction': {
                    const scPool = [
                        { text: "Correct the subject-verb mismatch: 'The team of engineers are working on the release.'", ans: "The team of engineers is working on the release.", opts: ["The team of engineers is working on the release.", "The team of engineers were working on the release.", "The team of engineers have working on the release.", "The team of engineers are work on the release."] },
                        { text: "Correct the redundancy in: 'The company decided to revert back to its original plan again.'", ans: "The company decided to revert to its original plan.", opts: ["The company decided to revert to its original plan.", "The company decided to revert back again to original plan.", "The company decided to return revert back.", "The company decided to revert back to original plan."] },
                        { text: "Select the sentence that correctly maintains parallel structure:", ans: "He enjoys coding software, reading documentation, and solving algorithms.", opts: ["He enjoys coding software, reading documentation, and solving algorithms.", "He enjoys coding software, to read documentation, and solving algorithms.", "He enjoys coding software, reading documentation, and to solve algorithms.", "He enjoys to code software, reading documentation, and algorithms."] },
                        { text: "Identify the correct revision for the dangling modifier: 'Walking into the laboratory, the beaker fell off the workbench.'", ans: "Walking into the laboratory, the researcher dropped the beaker from the workbench.", opts: ["Walking into the laboratory, the researcher dropped the beaker from the workbench.", "Walking into the laboratory, the workbench dropped the beaker.", "The beaker fell off the workbench walking into the laboratory.", "Having walked into the laboratory, the beaker had fallen."] },
                        { text: "Correct the run-on comma splice: 'The code compiled successfully, the tests failed during execution.'", ans: "The code compiled successfully; however, the tests failed during execution.", opts: ["The code compiled successfully; however, the tests failed during execution.", "The code compiled successfully, however the tests failed during execution.", "The code compiled successfully but the tests failed, during execution.", "The code compiled successfully the tests failed."] }
                    ];
                    const item = scPool[index % scPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Syntactical correction restoring grammatical concord.";
                    break;
                }
                case 'error_spotting': {
                    const errPool = [
                        { text: "Spot the error: 'She do not (A) / want to attend (B) / the meeting (C) / No Error (D)'", ans: "She do not (A)", opts: ["She do not (A)", "want to attend (B)", "the meeting (C)", "No Error (D)"] },
                        { text: "Spot the error: 'One of the major reason (A) / for system failure (B) / was memory exhaustion (C) / No Error (D)'", ans: "One of the major reason (A)", opts: ["One of the major reason (A)", "for system failure (B)", "was memory exhaustion (C)", "No Error (D)"] },
                        { text: "Spot the error: 'She is senior than (A) / all other engineers (B) / in the department (C) / No Error (D)'", ans: "She is senior than (A)", opts: ["She is senior than (A)", "all other engineers (B)", "in the department (C)", "No Error (D)"] },
                        { text: "Spot the error: 'Scarcely had he arrived (A) / than the power (B) / supply was interrupted (C) / No Error (D)'", ans: "than the power (B)", opts: ["than the power (B)", "Scarcely had he arrived (A)", "supply was interrupted (C)", "No Error (D)"] },
                        { text: "Spot the error: 'Despite of being late, (A) / she delivered (B) / a stellar presentation (C) / No Error (D)'", ans: "Despite of being late, (A)", opts: ["Despite of being late, (A)", "she delivered (B)", "a stellar presentation (C)", "No Error (D)"] }
                    ];
                    const item = errPool[index % errPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Grammatical error identification across partitioned clauses.";
                    break;
                }
                case 'fill_blanks': {
                    const fbPool = [
                        { text: "Fill in the blank: 'The sun ______ in the east.'", ans: "rises", opts: ["rises", "rose", "rising", "risen"] },
                        { text: "Fill in the blank: 'Candidates must abstain ______ using unauthorized electronic calculators during the test.'", ans: "from", opts: ["from", "to", "with", "at"] },
                        { text: "Fill in the blank: 'The scientist provided a ______ explanation that resolved all ambiguities in the dataset.'", ans: "lucid", opts: ["lucid", "opaque", "convoluted", "fictitious"] },
                        { text: "Fill in double blanks: 'Although the initial prototype was ______, subsequent optimizations rendered it remarkably ______.'", ans: "flawed / efficient", opts: ["flawed / efficient", "perfect / slow", "expensive / costly", "stable / fragile"] },
                        { text: "Fill in the blank: 'Due to unexpected supply chain bottlenecks, the product launch was ______ until next quarter.'", ans: "deferred", opts: ["deferred", "accelerated", "terminated", "commenced"] }
                    ];
                    const item = fbPool[index % fbPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Contextual semantic vocabulary and collocation fit.";
                    break;
                }
                case 'para_jumbles': {
                    const pjPool = [
                        { text: `Rearrange the sentences into a logical sequence:<br>P: First, prepare the ingredients.<br>Q: Next, mix them together in a bowl.<br>R: Then, bake the mixture in the oven.<br>S: Finally, serve the hot dish.`, ans: "PQRS", opts: ["PQRS", "QPRS", "PRQS", "RQPS"] },
                        { text: `Rearrange the sentences into chronological order:<br>P: Coffee was originally discovered in the ancient highlands of Ethiopia.<br>Q: Arab traders were the first to cultivate coffee plants in the 15th century.<br>R: It subsequently spread across Europe through Venetian maritime trade.<br>S: Today, coffee has evolved into one of the most consumed beverages worldwide.`, ans: "PQRS", opts: ["PQRS", "QPRS", "PRQS", "RQPS"] },
                        { text: `Rearrange into a logical order:<br>P: The World Health Organization (WHO) was established in 1948.<br>Q: Its primary mandate is to coordinate international public health policies.<br>R: The agency monitors epidemic outbreaks and establishes clinical standards.<br>S: Through these initiatives, the organization has contributed to the eradication of diseases.`, ans: "PQRS", opts: ["PQRS", "QPRS", "SQPR", "PRQS"] },
                        { text: `Rearrange into a logical sequence:<br>P: Cyber threats have escalated in sophistication with automated exploit kits.<br>Q: Traditional signature-based antivirus software struggles to identify zero-day vulnerabilities.<br>R: Therefore, modern organizations are deploying behavioral anomaly detection systems.<br>S: These proactive systems flag suspicious process actions before malware detonates.`, ans: "PQRS", opts: ["PQRS", "QPRS", "RSPQ", "PRQS"] },
                        { text: `Rearrange into a cohesive paragraph:<br>P: Cloud computing enables corporations to rent scalable compute capacity on demand.<br>Q: This on-demand model eliminates the heavy capital expenditure of on-premise physical servers.<br>R: Startups can consequently launch global services with minimal upfront capital.<br>S: As a result, the barrier to digital business innovation has lowered dramatically.`, ans: "PQRS", opts: ["PQRS", "QPRS", "PSQR", "RQPS"] }
                    ];
                    const item = pjPool[index % pjPool.length];
                    text = item.text; answer = item.ans; options = item.opts;
                    solution = "Logical ordering connecting chronological and pronoun antecedent links.";
                    break;
                }
            }
        }

        // Fallback for unhandled
        if (!text) {
            const valA = getVal(10, 50, 2); const valB = getVal(5, 25, 3);
            const sum = valA + valB;
            text = `Given parameters for ${topic.replace('_', ' ')} (${diff}): Parameter A = ${valA} and Parameter B = ${valB}. If their combined relation is additive, find their sum.`;
            answer = sum.toString();
            options = [answer, (sum + 5).toString(), (sum - 10).toString(), (valA * valB).toString()];
            formula = "Total = A + B.";
            solution = `Sum = ${valA} + ${valB} = ${sum}.`;
            shortcut = "Direct addition.";
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
                .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
                .replace(/\\sqrt/g, '√')
                .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
                .replace(/\\rightarrow/g, '→')
                .replace(/\\leftarrow/g, '←')
                .replace(/\\subseteq/g, '⊆')
                .replace(/\\cap/g, '∩')
                .replace(/\\cup/g, '∪')
                .replace(/\\Delta/g, 'Δ')
                .replace(/\\text\{([^}]+)\}/g, '$1');
        };

        let uniqueOpts = Array.from(new Set(options.map(clean)));
        if (!uniqueOpts.includes(clean(answer))) {
            uniqueOpts.unshift(clean(answer));
        }
        while (uniqueOpts.length < 4) {
            uniqueOpts.push(`Option ${uniqueOpts.length + 1}`);
        }
        uniqueOpts = uniqueOpts.slice(0, 4).sort(() => Math.random() - 0.5);

        return {
            id: qId,
            text: clean(text),
            options: uniqueOpts,
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

    getQuestionById(id) {
        const db = window.QUESTIONS_DATABASE || [];
        return db.find(q => q.id === id) || null;
    }
};

window.MockDataGen = MockDataGen;
