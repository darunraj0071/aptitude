/* ==========================================================================
   CODING_RUNNER.JS - Client-side transpilation and code sandbox evaluator
   ========================================================================== */

const CodingRunner = {
    transpile(code, language) {
        // Strip multi-line comments
        let cleaned = code.replace(/\/\*[\s\S]*?\*\//g, "");
        
        if (language === 'python') {
            return this.transpilePython(cleaned);
        } else if (language === 'java') {
            return this.transpileJava(cleaned);
        } else { // c or cpp
            return this.transpileCCpp(cleaned);
        }
    },

    transpilePython(code) {
        // Line-by-line transpilation of Python to Javascript
        let lines = code.split("\n");
        let jsLines = [];
        let indentStack = [0];

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            
            // Find comments starting with # (ignoring those inside strings)
            let inSingleQuote = false;
            let inDoubleQuote = false;
            let commentIndex = -1;
            for (let j = 0; j < line.length; j++) {
                let char = line[j];
                if (char === "'" && !inDoubleQuote) {
                    if (j === 0 || line[j - 1] !== '\\') {
                        inSingleQuote = !inSingleQuote;
                    }
                } else if (char === '"' && !inSingleQuote) {
                    if (j === 0 || line[j - 1] !== '\\') {
                        inDoubleQuote = !inDoubleQuote;
                    }
                } else if (char === '#' && !inSingleQuote && !inDoubleQuote) {
                    commentIndex = j;
                    break;
                }
            }

            let commentPart = "";
            let commentIndent = "";
            if (commentIndex !== -1) {
                commentPart = " //" + line.substring(commentIndex + 1);
                commentIndent = line.substring(0, commentIndex).match(/^ */)[0];
                line = line.substring(0, commentIndex);
            }

            // Skip empty lines
            if (line.trim() === "") {
                if (commentPart !== "") {
                    jsLines.push(commentIndent + commentPart.trim());
                } else {
                    jsLines.push("");
                }
                continue;
            }

            // Calculate indentation
            let leadingSpaces = line.match(/^ */)[0].length;
            let trimmed = line.trim();

            // Handle block closing (dedentation)
            while (leadingSpaces < indentStack[indentStack.length - 1]) {
                indentStack.pop();
                jsLines.push(" ".repeat(indentStack[indentStack.length - 1]) + "}");
            }

            // Replace standard Python operators & keywords
            trimmed = trimmed
                .replace(/\bTrue\b/g, "true")
                .replace(/\bFalse\b/g, "false")
                .replace(/\bNone\b/g, "null")
                .replace(/\band\b/g, "&&")
                .replace(/\bor\b/g, "||")
                .replace(/\bnot\b/g, "!");

            // Check if it opens a new block
            let opensBlock = trimmed.endsWith(":");
            if (opensBlock) {
                trimmed = trimmed.substring(0, trimmed.length - 1); // strip the colon
            }

            let translated = trimmed;

            // 1. Function definitions
            if (trimmed.startsWith("def ")) {
                translated = trimmed.replace(/^def\s+([a-zA-Z0-9_]+)\((.*)\)/, "function $1($2)");
            }
            // 2. For loops
            else if (trimmed.startsWith("for ")) {
                let forMatch = trimmed.match(/^for\s+([a-zA-Z0-9_]+)\s+in\s+(.*)/);
                if (forMatch) {
                    let varName = forMatch[1];
                    let rangeExpr = forMatch[2];
                    
                    if (rangeExpr.startsWith("range(")) {
                        // Extract range parameters
                        let paramsStr = rangeExpr.substring(6, rangeExpr.length - 1);
                        let params = this.splitArgs(paramsStr);
                        
                        if (params.length === 1) {
                            translated = `for (let ${varName} = 0; ${varName} < ${params[0]}; ${varName}++)`;
                        } else if (params.length === 2) {
                            translated = `for (let ${varName} = ${params[0]}; ${varName} < ${params[1]}; ${varName}++)`;
                        } else if (params.length === 3) {
                            translated = `for (let ${varName} = ${params[0]}; ${varName} < ${params[1]}; ${varName} += ${params[2]})`;
                        }
                    } else {
                        translated = `for (let ${varName} of ${rangeExpr})`;
                    }
                }
            }
            // 3. If, elif, while
            else if (trimmed.startsWith("if ")) {
                translated = `if (${trimmed.substring(3)})`;
            } else if (trimmed.startsWith("elif ")) {
                translated = `else if (${trimmed.substring(5)})`;
            } else if (trimmed.startsWith("while ")) {
                translated = `while (${trimmed.substring(6)})`;
            } else if (trimmed === "else") {
                translated = "else";
            }
            // 4. Assignments & variable declarations
            else {
                // If it's a simple assignment like x = value, declare it if not declared
                // (Using 'let' for simplicity in JS)
                if (trimmed.match(/^[a-zA-Z0-9_]+\s*=\s*/)) {
                    let varName = trimmed.split("=")[0].trim();
                    // Don't redeclare properties or standard variables
                    if (!varName.includes(".") && !varName.includes("[")) {
                        translated = "let " + trimmed;
                    }
                }
            }

            // Translate print and input
            translated = translated
                .replace(/print\((.*)\)/g, "print_out($1)")
                .replace(/int\(input\(\)\)/g, "Number(input_shift())")
                .replace(/float\(input\(\)\)/g, "Number(input_shift())")
                .replace(/input\(\)/g, "input_shift()")
                .replace(/len\((.*?)\)/g, "($1).length")
                .replace(/str\((.*?)\)/g, "String($1)")
                .replace(/list\(map\(int,\s*input\(\)\.split\(\)\)\)/g, "input_shift_array()")
                .replace(/list\(map\(int,\s*input\(\)\.split\(.*\)\)\)/g, "input_shift_array()")
                .replace(/map\(int,\s*input\(\)\.split\(\)\)/g, "input_shift_array()")
                // Math conversion
                .replace(/int\((.*?)\)/g, "Math.floor(Number($1))")
                .replace(/(\w+)\s*\*\*\s*(\w+)/g, "Math.pow($1, $2)")
                .replace(/(\w+)\s*\/\/\s*(\w+)/g, "Math.floor($1 / $2)");

            // Reconstruct indentation structure
            let newIndent = leadingSpaces;
            if (opensBlock) {
                translated += " {";
                newIndent = leadingSpaces + 4; // expect standard python 4 space indentation
                indentStack.push(newIndent);
            } else {
                translated += ";";
            }

            jsLines.push(" ".repeat(leadingSpaces) + translated + (commentPart ? " " + commentPart.trim() : ""));
        }

        // Close remaining blocks at the end of file
        while (indentStack.length > 1) {
            indentStack.pop();
            jsLines.push(" ".repeat(indentStack[indentStack.length - 1]) + "}");
        }

        return jsLines.join("\n");
    },

    transpileJava(code) {
        let js = code;

        // Remove comments
        js = js.replace(/\/\/.*$/gm, "");

        // Helper to remove brace blocks
        const removeBraceBlock = (text, headerRegex) => {
            let match = text.match(headerRegex);
            if (!match) return text;
            
            let startIdx = match.index;
            let braceCount = 0;
            let endIdx = -1;
            for (let i = startIdx; i < text.length; i++) {
                if (text[i] === '{') braceCount++;
                else if (text[i] === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        endIdx = i;
                        break;
                    }
                }
            }
            if (endIdx !== -1) {
                return text.substring(0, startIdx) + 
                       text.substring(startIdx + match[0].length, endIdx) + 
                       text.substring(endIdx + 1);
            }
            return text;
        };

        // Remove class wrapper and main method wrapper
        js = removeBraceBlock(js, /(?:public\s+)?class\s+\w+\s*\{/);
        js = removeBraceBlock(js, /(?:public\s+|private\s+)?static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s+\w+\s*\)\s*\{/);

        // Remove Scanner setup
        js = js.replace(/Scanner\s+\w+\s*=\s*new\s*Scanner\s*\(\s*System\.in\s*\)\s*;/g, "");

        // Handle Java 2D array write initialization
        js = js.replace(/(\w+)\[(.*?)\]\[(.*?)\]\s*=\s*\b\w+\.next(Int|Double)?\(\)/g, (match, arrName, idx1, idx2) => {
            return `${arrName}[${idx1}] = ${arrName}[${idx1}] || []; ${arrName}[${idx1}][${idx2}] = Number(input_shift())`;
        });

        // Convert Scanner inputs
        js = js.replace(/\b\w+\.nextInt\(\)/g, "Number(input_shift())");
        js = js.replace(/\b\w+\.nextDouble\(\)/g, "Number(input_shift())");
        js = js.replace(/\b\w+\.next\(\)/g, "input_shift()");
        js = js.replace(/\b\w+\.nextLine\(\)/g, "input_shift()");

        // Replace outputs
        js = js.replace(/System\.out\.println\((.*?)\)\s*;/g, "print_out($1, '\\n');");
        js = js.replace(/System\.out\.println\(\)\s*;/g, "print_out('\\n');");
        js = js.replace(/System\.out\.print\((.*?)\)\s*;/g, "print_out($1);");

        // Convert functions
        js = js.replace(/(?:public\s+|private\s+|protected\s+)?(?:static\s+)?\b(int|double|float|long|boolean|String|char|void)(?:\[\])?\s+(\w+)\s*\((.*?)\)\s*\{/g, (match, type, name, params) => {
            let jsParams = params.replace(/\b(int|double|float|long|boolean|String|char)(?:\[\])?\s+/g, "");
            return `function ${name}(${jsParams}) {`;
        });

        // Convert types to let
        js = js.replace(/\b(int|double|float|long|boolean|String|char)(?:\[\]){1,2}\s+(\w+)\b/g, "let $2");
        js = js.replace(/\b(int|double|float|long|boolean|String|char)\s+(\w+)\b/g, "let $2");

        // Convert arrays helper
        js = js.replace(/new\s+(int|double|float|long|boolean|String|char)\[(.*?)\]\[(.*?)\]/g, "Array.from({length: $2}, () => new Array($3).fill(0))");
        js = js.replace(/new\s+(int|double|float|long|boolean|String|char)\[(.*?)\]/g, "new Array($2).fill(0)");
        js = js.replace(/Arrays\.sort\((.*?)\)/g, "$1.sort((a,b) => a-b)");
        js = js.replace(/Arrays\.equals\((.*?),\s*(.*?)\)/g, "($1.join(',') === $2.join(','))");

        // String methods
        js = js.replace(/\b(\w+)\.charAt\((.*?)\)/g, "$1[$2]");
        js = js.replace(/\b(\w+)\.length\(\)/g, "$1.length");
        js = js.replace(/\b(\w+)\.toCharArray\(\)/g, "$1.split('')");

        // Math
        js = js.replace(/Math\.pow\(/g, "Math.pow(");
        js = js.replace(/Math\.sqrt\(/g, "Math.sqrt(");
        
        return js;
    },

    transpileCCpp(code) {
        let js = code;

        // Remove single line comments
        js = js.replace(/\/\/.*$/gm, "");

        // Remove headers
        js = js.replace(/#include\s*<.*?>/g, "");
        js = js.replace(/using\s+namespace\s+std\s*;/g, "");

        // Replace output: printf or cout
        js = js.replace(/printf\s*\(\s*"(.*?)"\s*(,\s*.*?)?\s*\)\s*;/g, (match, format, args) => {
            if (!args) {
                return `print_out("${format}");`;
            } else {
                let argList = args.substring(1).trim();
                let suffix = "";
                if (format.endsWith("\\n")) suffix = ", '\\n'";
                else if (format.endsWith(" ")) suffix = ", ' '";
                return `print_out(${argList}${suffix});`;
            }
        });
        
        js = js.replace(/cout\s*<<\s*(.*?)\s*<<\s*endl\s*;/g, "print_out($1, '\\n');");
        js = js.replace(/cout\s*<<\s*(.*?)\s*<<\s*["']\\n["']\s*;/g, "print_out($1, '\\n');");
        js = js.replace(/cout\s*<<\s*(.*?)\s*;/g, "print_out($1);");

        // Helper to generate JS input assignment
        const makeInputAssignment = (v) => {
            let parts = v.match(/^([a-zA-Z0-9_]+)\[(.*?)\]\[(.*?)\]$/);
            if (parts) {
                let arrName = parts[1];
                let idx1 = parts[2];
                return `(${arrName}[${idx1}] = ${arrName}[${idx1}] || [], ${v} = Number(input_shift()))`;
            }
            return `${v} = Number(input_shift())`;
        };

        // Replace inputs: scanf
        js = js.replace(/scanf\s*\(\s*".*?"\s*(,\s*&?([a-zA-Z0-9_\[\]]+))+\s*\)/g, (match) => {
            let vars = [];
            let m;
            let regex = /&\s*([a-zA-Z0-9_\[\]]+)/g;
            while ((m = regex.exec(match)) !== null) {
                vars.push(m[1]);
            }
            if (vars.length > 0) {
                let assignments = vars.map(v => makeInputAssignment(v)).join(", ");
                return `((${assignments}), ${vars.length})`;
            }
            return "0";
        });

        // Replace inputs: cin
        js = js.replace(/cin\s*>>\s*([a-zA-Z0-9_>>\s\[\]]+)\s*;/g, (match, varsStr) => {
            let vars = varsStr.split(">>").map(v => v.trim());
            return vars.map(v => {
                let parts = v.match(/^([a-zA-Z0-9_]+)\[(.*?)\]\[(.*?)\]$/);
                if (parts) {
                    let arrName = parts[1];
                    let idx1 = parts[2];
                    return `${arrName}[${idx1}] = ${arrName}[${idx1}] || []; ${v} = Number(input_shift());`;
                }
                return `${v} = Number(input_shift());`;
            }).join(" ");
        });

        // Convert functions
        js = js.replace(/\b(int|double|float|long|void|bool|char)\s+([a-zA-Z0-9_]+)\s*\((.*?)\)\s*\{/g, (match, type, name, params) => {
            if (name === "main") {
                return `function main() {`;
            }
            // Strip types from params
            let jsParams = params.replace(/\b(int|double|float|long|bool|char)\s+/g, "");
            return `function ${name}(${jsParams}) {`;
        });

        // Convert types to let
        js = js.replace(/\b(int|double|float|long|long\s+long|bool|char)\s+([a-zA-Z0-9_]+)\b/g, "let $2");

        // Clean arrays: e.g. int arr[n]; -> let arr = [];
        js = js.replace(/\blet\s+([a-zA-Z0-9_]+)\[.*?\]\s*;/g, "let $1 = [];");
        js = js.replace(/\blet\s+([a-zA-Z0-9_]+)\[.*?\]\[.*?\]\s*;/g, "let $1 = [];");

        // String helper
        js = js.replace(/\bstrlen\((.*?)\)/g, "$1.length");
        js = js.replace(/\bstrcmp\((.*?),\s*(.*?)\)\s*==\s*0/g, "($1 === $2)");

        return js;
    },

    splitArgs(str) {
        let args = [];
        let bracketCount = 0;
        let current = "";
        for (let i = 0; i < str.length; i++) {
            let c = str[i];
            if (c === '(') bracketCount++;
            else if (c === ')') bracketCount--;
            
            if (c === ',' && bracketCount === 0) {
                args.push(current.trim());
                current = "";
            } else {
                current += c;
            }
        }
        if (current.trim() !== "") {
            args.push(current.trim());
        }
        return args;
    },

    run(code, language, inputLines) {
        let transpiled = this.transpile(code, language);
        
        // Prepare sandboxed inputs & outputs
        let inputBuffer = [...inputLines];
        let stdoutBuffer = "";
        let tokens = [];

        // Helper to retrieve the next space-separated token
        function get_next_token() {
            while (tokens.length === 0 && inputBuffer.length > 0) {
                let line = inputBuffer.shift();
                if (line !== undefined) {
                    let parts = line.trim().split(/\s+/);
                    for (let p of parts) {
                        if (p !== "") tokens.push(p);
                    }
                }
            }
            return tokens.shift() || "";
        }

        // Helper runners
        function input_shift() {
            return get_next_token();
        }

        function input_shift_array() {
            // If tokens are already loaded from a previous line, return them
            if (tokens.length > 0) {
                let res = [...tokens];
                tokens = [];
                return res.map(x => isNaN(x) ? x : Number(x));
            }
            let line = inputBuffer.shift();
            return line ? line.trim().split(/\s+/).map(x => isNaN(x) ? x : Number(x)) : [];
        }

        function print_out(...args) {
            if (language === 'python') {
                stdoutBuffer += args.join(" ") + "\n";
            } else {
                stdoutBuffer += args.join("");
            }
        }

        // Add a wrapper to execute main() if defined, or just run code directly
        let executionBlock = `
            ${transpiled}
            if (typeof main === 'function') {
                main();
            }
        `;

        try {
            // Create a sandboxed evaluation function
            const sandboxFn = new Function(
                'input_shift', 
                'input_shift_array', 
                'print_out', 
                executionBlock
            );
            
            sandboxFn(input_shift, input_shift_array, print_out);
            
            return {
                success: true,
                output: stdoutBuffer.trim(),
                transpiled: transpiled
            };
        } catch (err) {
            return {
                success: false,
                error: err.message,
                transpiled: transpiled
            };
        }
    }
};

if (typeof window !== 'undefined') {
    window.CodingRunner = CodingRunner;
}
