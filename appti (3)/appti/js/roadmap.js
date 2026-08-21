/* ==========================================================================
   ROADMAP.JS - Interactive Controller for syllabus roadmaps
   ========================================================================== */

let activeDepartmentId = null;
let currentProgress = {}; // Schema: { [deptId]: [dayNumber1, dayNumber2, ...] }

const RoadmapQuizDB = {
    html: [
        {
            concept: "HTML & Semantics",
            q: "Which of the following is a semantic HTML5 tag?",
            options: ["<div>", "<section>", "<span>", "<table>"],
            ans: "<section>"
        },
        {
            concept: "SEO & Accessibility",
            q: "How does semantic HTML help accessibility (a11y)?",
            options: ["It makes the site load faster", "It provides structural landmarks for screen readers", "It styles colors automatically", "It prevents security alerts"],
            ans: "It provides structural landmarks for screen readers"
        }
    ],
    box_model: [
        {
            concept: "CSS Box Model",
            q: "Which Box Model layer represents space between content and border?",
            options: ["Margin", "Padding", "Outline", "Box-sizing"],
            ans: "Padding"
        },
        {
            concept: "CSS Specificity",
            q: "Which selector has the highest CSS specificity score?",
            options: [".my-class", "#my-id", "div", "div.my-class"],
            ans: "#my-id"
        }
    ],
    flexbox: [
        {
            concept: "Flexbox Main Axis",
            q: "Which property controls alignment along the main axis in Flexbox?",
            options: ["align-items", "justify-content", "align-self", "flex-direction"],
            ans: "justify-content"
        },
        {
            concept: "Flex Item Growth",
            q: "Which property is used on flex items to grow them relative to others?",
            options: ["flex-basis", "flex-shrink", "flex-grow", "flex-wrap"],
            ans: "flex-grow"
        }
    ],
    grid: [
        {
            concept: "CSS Grid Templates",
            q: "Which property is used to define grid columns with repeat()?",
            options: ["grid-columns", "grid-template-columns", "grid-gap", "grid-template-areas"],
            ans: "grid-template-columns"
        },
        {
            concept: "Grid Placements",
            q: "Which unit represents a fraction of the free space in a grid container?",
            options: ["px", "em", "fr", "%"],
            ans: "fr"
        }
    ],
    responsive: [
        {
            concept: "Media Queries",
            q: "Which CSS rule block is used to write media queries for responsive sizing?",
            options: ["@keyframes", "@media", "@import", "@support"],
            ans: "@media"
        },
        {
            concept: "Fluid Sizing Units",
            q: "Which sizing unit is fluid and scales relative to viewport width?",
            options: ["px", "rem", "vw", "em"],
            ans: "vw"
        }
    ],
    variables: [
        {
            concept: "CSS Custom Properties",
            q: "Where are global CSS custom properties normally declared?",
            options: [":root", "body", "html", "*"],
            ans: ":root"
        },
        {
            concept: "Dynamic Color Themes",
            q: "Which JavaScript method updates CSS variables dynamically?",
            options: ["element.style.setProperty()", "element.style.addProperty()", "element.classList.add()", "window.setTheme()"],
            ans: "element.style.setProperty()"
        }
    ],
    animation: [
        {
            concept: "CSS Transitions",
            q: "Which CSS transition property defines timing calculations (easing)?",
            options: ["transition-duration", "transition-timing-function", "transition-delay", "transition-property"],
            ans: "transition-timing-function"
        },
        {
            concept: "CSS Keyframes",
            q: "Which directive defines states (0% to 100%) for CSS animations?",
            options: ["@keyframes", "@animation", "@media", "@import"],
            ans: "@keyframes"
        }
    ],
    tailwind: [
        {
            concept: "Tailwind CSS",
            q: "What utility prefix applies hover state styling in Tailwind?",
            options: ["hover:", "active:", "focus:", "focus-within:"],
            ans: "hover:"
        },
        {
            concept: "Tailwind Config",
            q: "Which file is modified to customize Tailwind colors, fonts, or screens?",
            options: ["tailwind.config.js", "index.css", "package.json", "postcss.config.js"],
            ans: "tailwind.config.js"
        }
    ],
    scope: [
        {
            concept: "JS Scopes & Hoisting",
            q: "Which keyword supports block scope declaration?",
            options: ["var", "let", "function", "window"],
            ans: "let"
        },
        {
            concept: "Hoisting & TDZ",
            q: "What region describes variables declared with let/const before initialisation?",
            options: ["Hoisted Zone", "Temporal Dead Zone (TDZ)", "Global Context", "Execution Frame"],
            ans: "Temporal Dead Zone (TDZ)"
        }
    ],
    functions: [
        {
            concept: "JS Arrow Functions",
            q: "How do Arrow Functions handle the 'this' keyword binding?",
            options: ["They bind 'this' dynamically on call", "They inherit 'this' lexically from surrounding scope", "They set 'this' to null", "They bind 'this' to the global document object"],
            ans: "They inherit 'this' lexically from surrounding scope"
        }
    ],
    arrays: [
        {
            concept: "JS Array Iterations",
            q: "Which array method creates a new array by applying a function to all elements?",
            options: ["forEach()", "map()", "filter()", "reduce()"],
            ans: "map()"
        },
        {
            concept: "Array Filtering",
            q: "Which array method checks if at least one element satisfies a condition?",
            options: ["every()", "some()", "find()", "includes()"],
            ans: "some()"
        }
    ],
    closures: [
        {
            concept: "JS Closures",
            q: "What is a closure in JavaScript?",
            options: ["A function executing inside a sandbox", "An inner function accessing its outer lexical scope", "A function that has been deleted", "A method to close modal windows"],
            ans: "An inner function accessing its outer lexical scope"
        }
    ],
    dom: [
        {
            concept: "DOM Event Phases",
            q: "What is the third phase of DOM event propagation?",
            options: ["Capturing phase", "Target phase", "Bubbling phase", "Execution phase"],
            ans: "Bubbling phase"
        },
        {
            concept: "Event Delegation",
            q: "Where is the event listener placed when using Event Delegation?",
            options: ["On the child elements directly", "On a parent container", "On the window object only", "Inside the styling sheet"],
            ans: "On a parent container"
        }
    ],
    promises: [
        {
            concept: "JS Promises & Async",
            q: "Which queue handles Promise resolutions in the Event Loop?",
            options: ["Task Queue", "Microtask Queue", "Render Queue", "Call Stack"],
            ans: "Microtask Queue"
        },
        {
            concept: "Async/Await Errors",
            q: "Which block catches errors when using async/await syntax?",
            options: ["try...catch", "then...catch", "if...else", "resolve...reject"],
            ans: "try...catch"
        }
    ],
    git: [
        {
            concept: "Git Repositories",
            q: "Which command initializes a new local Git repository?",
            options: ["git add", "git commit", "git init", "git branch"],
            ans: "git init"
        },
        {
            concept: "Git Branching",
            q: "Which command merges the history of branch A into the current branch?",
            options: ["git merge A", "git checkout A", "git branch A", "git status"],
            ans: "git merge A"
        }
    ],
    react: [
        {
            concept: "React state",
            q: "Which hook manages reactive states inside React functional components?",
            options: ["useEffect", "useState", "useContext", "useRef"],
            ans: "useState"
        },
        {
            concept: "React Side Effects",
            q: "Which hook executes side effects when components mount/update?",
            options: ["useState", "useEffect", "useMemo", "useCallback"],
            ans: "useEffect"
        }
    ],
    java: [
        {
            concept: "OOP Inheritance",
            q: "Which Java keyword is used to establish class inheritance?",
            options: ["implements", "extends", "inherits", "super"],
            ans: "extends"
        },
        {
            concept: "OOP Encapsulation",
            q: "How is OOP Encapsulation normally achieved in a Java class?",
            options: ["Using public fields only", "Using private variables with public getter/setter methods", "Declaring classes as abstract", "Using interface implementation patterns"],
            ans: "Using private variables with public getter/setter methods"
        }
    ],
    fallback: [
        {
            concept: "Concept comprehension",
            q: "What is the primary goal of studying this topic?",
            options: ["Memorizing syntax templates", "Understanding the core principles and logic rules", "Copying and pasting code examples", "Avoiding coding challenges entirely"],
            ans: "Understanding the core principles and logic rules"
        }
    ]
};

function getRoadmapQuizQuestions(dayObj) {
    const title = dayObj.title.toLowerCase();
    
    if (title.includes('html') || title.includes('semantic')) return RoadmapQuizDB.html;
    if (title.includes('box model') || title.includes('specificity')) return RoadmapQuizDB.box_model;
    if (title.includes('flexbox')) return RoadmapQuizDB.flexbox;
    if (title.includes('grid')) return RoadmapQuizDB.grid;
    if (title.includes('responsive') || title.includes('media query')) return RoadmapQuizDB.responsive;
    if (title.includes('variable') || title.includes('theme') || title.includes('custom properties')) return RoadmapQuizDB.variables;
    if (title.includes('animation') || title.includes('keyframe') || title.includes('transition')) return RoadmapQuizDB.animation;
    if (title.includes('tailwind')) return RoadmapQuizDB.tailwind;
    if (title.includes('variable') && title.includes('scope') || title.includes('hoisting')) return RoadmapQuizDB.scope;
    if (title.includes('function') || title.includes('arrow')) return RoadmapQuizDB.functions;
    if (title.includes('array') || title.includes('iteration')) return RoadmapQuizDB.arrays;
    if (title.includes('closure')) return RoadmapQuizDB.closures;
    if (title.includes('dom') || title.includes('event')) return RoadmapQuizDB.dom;
    if (title.includes('promise') || title.includes('async')) return RoadmapQuizDB.promises;
    if (title.includes('git') || title.includes('version')) return RoadmapQuizDB.git;
    if (title.includes('react') || title.includes('hooks') || title.includes('usestate') || title.includes('useeffect')) return RoadmapQuizDB.react;
    if (title.includes('java') || title.includes('oop') || title.includes('encapsulation') || title.includes('inheritance') || title.includes('polymorphism') || title.includes('abstraction')) return RoadmapQuizDB.java;
    
    return RoadmapQuizDB.fallback;
}

function isDayUnlocked(deptId, dayNumber) {
    if (dayNumber === 1) return true;
    const completedDays = getCompletedDays(deptId);
    return completedDays.includes(dayNumber - 1);
}

// Helper function to resolve reference resource URLs dynamically
function getReferenceUrl(name) {
    if (!name) return '#';
    const lower = name.toLowerCase();
    
    // Direct matches / Official docs mappings
    if (lower.includes('mdn')) {
        if (lower.includes('semantics') || lower.includes('html')) return 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics';
        if (lower.includes('box model')) return 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model';
        if (lower.includes('variables') || lower.includes('custom properties')) return 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties';
        if (lower.includes('transitions') || lower.includes('keyframes') || lower.includes('animations')) return 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations';
        if (lower.includes('arrow') || lower.includes('functions')) return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions';
        if (lower.includes('closure')) return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures';
        if (lower.includes('dom') || lower.includes('events')) return 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model';
        if (lower.includes('promise') || lower.includes('async')) return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise';
        if (lower.includes('arrays') || lower.includes('array')) return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array';
        return `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(name)}`;
    }
    if (lower.includes('geeksforgeeks') || lower.includes('gfg')) {
        if (lower.includes('recursion')) return 'https://www.geeksforgeeks.org/recursion/';
        if (lower.includes('tree')) return 'https://www.geeksforgeeks.org/binary-tree-data-structure/';
        if (lower.includes('graph')) return 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/';
        if (lower.includes('dp') || lower.includes('dynamic programming')) return 'https://www.geeksforgeeks.org/dynamic-programming/';
        return `https://www.geeksforgeeks.org/search/?q=${encodeURIComponent(name)}`;
    }
    if (lower.includes('web.dev')) {
        if (lower.includes('specificity')) return 'https://web.dev/learn/css/specificity/';
        if (lower.includes('responsive')) return 'https://web.dev/responsive-web-design-basics/';
        if (lower.includes('vitals')) return 'https://web.dev/vitals/';
        return `https://web.dev/search/?q=${encodeURIComponent(name)}`;
    }
    if (lower.includes('css-tricks')) {
        if (lower.includes('flexbox')) return 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/';
        if (lower.includes('grid')) return 'https://css-tricks.com/snippets/css/complete-guide-grid/';
        return `https://css-tricks.com/?s=${encodeURIComponent(name)}`;
    }
    if (lower.includes('visualgo')) return 'https://visualgo.net/';
    if (lower.includes('w3schools')) return 'https://www.w3schools.com/';
    if (lower.includes('tailwind')) return 'https://tailwindcss.com/docs';
    if (lower.includes('react')) return 'https://react.dev';
    if (lower.includes('spring')) return 'https://spring.io/projects/spring-boot';
    if (lower.includes('hibernate')) return 'https://hibernate.org';
    if (lower.includes('oracle') || lower.includes('java')) return 'https://docs.oracle.com/en/java/';
    if (lower.includes('maven')) return 'https://maven.apache.org';
    if (lower.includes('git')) return 'https://git-scm.com/book';
    if (lower.includes('vite')) return 'https://vitejs.dev';
    if (lower.includes('leetcode')) return 'https://leetcode.com/problemset/';
    if (lower.includes('numpy')) return 'https://numpy.org/doc/';
    if (lower.includes('pandas')) return 'https://pandas.pydata.org/docs/';
    if (lower.includes('matplotlib')) return 'https://matplotlib.org';
    if (lower.includes('seaborn')) return 'https://seaborn.pydata.org';
    if (lower.includes('scikit')) return 'https://scikit-learn.org';
    if (lower.includes('express')) return 'https://expressjs.com';
    if (lower.includes('mongoose')) return 'https://mongoosejs.com';
    if (lower.includes('postgres')) return 'https://node-postgres.com';
    if (lower.includes('sequelize')) return 'https://sequelize.org';
    if (lower.includes('redis')) return 'https://redis.io';
    if (lower.includes('docker')) return 'https://docs.docker.com';
    if (lower.includes('kubernetes') || lower.includes('k8s')) return 'https://kubernetes.io/docs/';
    if (lower.includes('prometheus')) return 'https://prometheus.io';
    if (lower.includes('grafana')) return 'https://grafana.com';
    if (lower.includes('aws')) return 'https://aws.amazon.com';
    if (lower.includes('terraform')) return 'https://www.terraform.io';
    if (lower.includes('owasp')) return 'https://owasp.org/www-project-top-ten/';
    if (lower.includes('portswigger')) return 'https://portswigger.net/web-security';
    if (lower.includes('nmap')) return 'https://nmap.org';
    if (lower.includes('wireshark')) return 'https://www.wireshark.org';
    if (lower.includes('figma')) return 'https://help.figma.com';
    if (lower.includes('nielsen') || lower.includes('nng')) return 'https://www.nngroup.com';
    
    // Default fallback to Google Search
    return `https://www.google.com/search?q=${encodeURIComponent(name + " tutorial")}`;
}

// Generate rich, context-specific list of study concepts based on day content
function generateDetailedStudyItems(day) {
    const title = day.title.toLowerCase();
    const desc = day.desc;
    const items = [];
    
    // Core item
    items.push(`Understand the fundamentals: ${desc}`);
    
    // Keyword matching for detailed checklist
    if (title.includes('html') || title.includes('semantic')) {
        items.push("Study semantic tag structural rules (e.g. &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;).");
        items.push("Learn how search engine crawlers (SEO) parse semantic hierarchies to rank pages.");
        items.push("Explore accessibility (a11y) and screen reader support using proper HTML5 tags.");
    } else if (title.includes('box model') || title.includes('specificity')) {
        items.push("Master the Box Model layers: Content, Padding, Border, and Margin.");
        items.push("Calculate specificity scoring (Inline styles, IDs, Classes, Elements/Pseudo-elements).");
        items.push("Understand the impact of 'box-sizing: border-box' on global layout design.");
    } else if (title.includes('flexbox')) {
        items.push("Learn Flex Container properties: flex-direction, flex-wrap, justify-content, align-items, align-content.");
        items.push("Learn Flex Item properties: flex-grow, flex-shrink, flex-basis, align-self, order.");
        items.push("Practice common layouts: centered cards, split headers, and equal-height columns.");
    } else if (title.includes('grid')) {
        items.push("Define Grid templates using grid-template-columns, grid-template-rows, and grid-gap.");
        items.push("Use fractional units (fr) and utility functions like repeat(), minmax(), and fit-content().");
        items.push("Learn area placements using grid-column, grid-row, and grid-template-areas.");
    } else if (title.includes('responsive') || title.includes('media query')) {
        items.push("Write media query breakpoints for mobile, tablet, and desktop viewports.");
        items.push("Use fluid typography units (rem, em, vw, vh, clamp) instead of absolute pixels.");
        items.push("Learn mobile-first design philosophies: start small and scale up stylesheets.");
    } else if (title.includes('variable') || title.includes('theme') || title.includes('custom properties')) {
        items.push("Declare custom properties under the :root pseudo-class for global styling.");
        items.push("Access and update CSS variables dynamically via JavaScript (element.style.setProperty).");
        items.push("Create switchable theme schemas (e.g. data-theme='dark') to drive color systems.");
    } else if (title.includes('animation') || title.includes('keyframe') || title.includes('transition')) {
        items.push("Learn CSS transition-property, transition-duration, transition-timing-function (easing), and delay.");
        items.push("Write complex animations using @keyframes state definitions (0% to 100%).");
        items.push("Practice hardware-accelerated transforms: translate(), scale(), rotate(), and skew().");
    } else if (title.includes('tailwind')) {
        items.push("Set up utility classes: layout (flex, grid), spacing (m, p), typography, and borders.");
        items.push("Use modifier prefixes for responsive design (sm:, md:, lg:) and hover/active states.");
        items.push("Customize the tailwind.config.js file (colors, fonts, screens, plugins).");
    } else if (title.includes('variable') && title.includes('scope') || title.includes('hoisting')) {
        items.push("Differentiate between var, let, and const declarations.");
        items.push("Understand execution contexts: Global Scope, Function Scope, and Block Scope.");
        items.push("Learn variable hoisting, temporal dead zone (TDZ), and function elevation.");
    } else if (title.includes('function') || title.includes('arrow')) {
        items.push("Differentiate function declarations from function expressions.");
        items.push("Master lexical 'this' binding rules in arrow functions vs traditional functions.");
        items.push("Understand callback parameters, return values, and default arguments.");
    } else if (title.includes('array') || title.includes('iteration')) {
        items.push("Practice core immutable methods: map(), filter(), reduce(), slice(), concat().");
        items.push("Use searching methods: find(), findIndex(), indexOf(), includes(), some(), every().");
        items.push("Master mutate vs non-mutate array modifications in stateful environments.");
    } else if (title.includes('closure')) {
        items.push("Learn lexical scoping: inner functions accessing outer scope variables.");
        items.push("Implement private variables and encapsulation patterns in JavaScript.");
        items.push("Avoid memory leaks associated with closures holding references to DOM objects.");
    } else if (title.includes('dom') || title.includes('event')) {
        items.push("Use select APIs: querySelector(), querySelectorAll(), getElementById().");
        items.push("Handle event phases: Capturing phase, Target phase, and Bubbling phase.");
        items.push("Apply event delegation to manage dynamic list click interactions.");
    } else if (title.includes('promise') || title.includes('async')) {
        items.push("Understand Promise states: Pending, Fulfilled, and Rejected.");
        items.push("Learn microtask queue precedence over task queues in the JavaScript Event Loop.");
        items.push("Chain asynchronous processes using .then(), .catch(), and .finally() methods.");
    } else if (title.includes('fetch') || title.includes('cors') || title.includes('api')) {
        items.push("Send GET, POST, PUT, DELETE requests using the native fetch() API.");
        items.push("Configure request headers (Content-Type, Authorization) and parse JSON responses.");
        items.push("Debug CORS policy failures (headers: Access-Control-Allow-Origin, preflight OPTIONS).");
    } else if (title.includes('git') || title.includes('version')) {
        items.push("Practice main CLI actions: git init, add, commit, status, log.");
        items.push("Branching management: git branch, checkout -b, merge, rebase.");
        items.push("Resolve merge conflict blocks manually inside editor editors.");
    } else if (title.includes('react') || title.includes('hooks') || title.includes('usestate') || title.includes('useeffect')) {
        items.push("Understand Virtual DOM rendering, functional components, and JSX markup parser.");
        items.push("Manage component state reactivity using useState and batching updates.");
        items.push("Synchronize side effects inside useEffect using correct dependency arrays.");
    } else if (title.includes('java') && (title.includes('oop') || title.includes('encapsulation') || title.includes('inheritance') || title.includes('polymorphism') || title.includes('abstraction'))) {
        items.push("Master Java OOP Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction.");
        items.push("Use access modifiers (private, default, protected, public) to control visibility.");
        items.push("Differentiate abstract classes from interfaces (default/static methods, multiple inheritance).");
    } else if (title.includes('java') && (title.includes('setup') || title.includes('fundamental') || title.includes('variables') || title.includes('syntax'))) {
        items.push("Install JDK, set JAVA_HOME variables, compile via javac, and run via java.");
        items.push("Contrast JVM (virtual engine), JRE (run libraries), and JDK (developer tools).");
        items.push("Master primitive types (int, double, boolean) vs reference wrapper classes.");
    } else if (title.includes('collections') || title.includes('list') || title.includes('set') || title.includes('map')) {
        items.push("Study collections hierarchy: List (ArrayList/LinkedList), Set (HashSet/LinkedHashSet/TreeSet).");
        items.push("Map key-value pairs: HashMap (O(1) time) vs TreeMap (sorted, log(n) time).");
        items.push("Understand equals() and hashCode() contracts for custom object keys.");
    } else if (title.includes('sql') || title.includes('database') || title.includes('join') || title.includes('queries')) {
        items.push("Write SQL Schema definitions: CREATE, ALTER, DROP, and primary/foreign key relations.");
        items.push("Execute query filters: SELECT, WHERE, LIKE, ORDER BY, GROUP BY, HAVING.");
        items.push("Differentiate JOIN strategies: INNER, LEFT, RIGHT, FULL OUTER joins.");
    } else if (title.includes('spring') || title.includes('rest') || title.includes('controller') || title.includes('jpa')) {
        items.push("Understand Dependency Injection (DI) and Inversion of Control (IoC) with @Component/@Autowired.");
        items.push("Design REST endpoint mappings: @GetMapping, @PostMapping, @PutMapping, @DeleteMapping.");
        items.push("Use Spring Data JPA repository interfaces to perform CRUD operations on database entities.");
    } else if (title.includes('dsa') || title.includes('time complexity') || title.includes('search') || title.includes('sorting') || title.includes('tree') || title.includes('graph') || title.includes('dp')) {
        items.push("Analyze execution limits: Big-O notation, worst/average/best cases.");
        items.push("Practice data models: Stack (LIFO), Queue (FIFO), Linked List, Binary Tree, Heap, Graph.");
        items.push("Master sorting/search: Binary Search, Quick Sort, Merge Sort, BFS, DFS, Dijkstra.");
        if (title.includes('dp') || title.includes('dynamic programming')) {
            items.push("Learn DP subproblems: overlapping subproblems, optimal substructure, memoization vs tabulation.");
        }
    } else if (title.includes('python') || title.includes('data science') || title.includes('numpy') || title.includes('pandas') || title.includes('visualization') || title.includes('matplotlib') || title.includes('seaborn')) {
        items.push("Master Python loops, dictionary/list comprehensions, lambdas, and functions.");
        items.push("Work with NumPy arrays: vectorization, broadcasting, shape transforms, slicing.");
        items.push("Manipulate Pandas DataFrames: load CSVs, loc/iloc filters, merge/join, aggregate groupby.");
    } else if (title.includes('ml') || title.includes('machine learning') || title.includes('regression') || title.includes('classification') || title.includes('decision tree') || title.includes('random forest')) {
        items.push("Train models: Linear/Logistic Regression, Decision Trees, Random Forests, K-Means Clustering.");
        items.push("Assess model accuracy: Confusion Matrix, Precision, Recall, F1-Score, MSE, R^2 score.");
        items.push("Perform preprocessing: Feature Scaling, Standardizer, One-Hot categorical encoding, Train-Test split.");
    } else if (title.includes('devops') || title.includes('linux') || title.includes('docker') || title.includes('kubernetes') || title.includes('aws') || title.includes('cloud')) {
        items.push("Learn Linux file navigation, permission scopes (chmod), package installations, Bash scripts.");
        items.push("Docker containerization: write Dockerfiles, configure images, maps, ports, docker-compose.");
        items.push("Cloud computing: deploy APIs to AWS EC2 instances, manage security group ports.");
    } else if (title.includes('cybersecurity') || title.includes('security') || title.includes('cryptography') || title.includes('web application security')) {
        items.push("Learn OWASP Top 10 web vulnerabilities (SQL Injection, XSS, CSRF, Broken Auth).");
        items.push("Use scanning utilities: network sweeps (Nmap), packet sniffers (Wireshark), proxies (Burp Suite).");
        items.push("Study cryptographic protocols: symmetric (AES) vs asymmetric keys (RSA, ECC), SSL/TLS handshakes.");
    } else if (title.includes('ui/ux') || title.includes('design') || title.includes('figma') || title.includes('wireframe') || title.includes('prototype')) {
        items.push("Apply design laws: Visual hierarchy, Grid alignments, Typography pairings, Color contrast ratios.");
        items.push("Use Figma: components layouts, auto layouts, interactive page prototypes, handoff files.");
        items.push("Perform User Research: user interviews, persona profiles, usability testing methodologies.");
    } else {
        items.push("Examine syntax structures, compilation flags, or framework configurations.");
        items.push("Implement the practice challenge to reinforce practical coding skills.");
        items.push("Consult the official reference documentation listed below for deep API context.");
    }
    
    return items;
}

document.addEventListener('DOMContentLoaded', () => {
    loadGlobalLayout('roadmap');
    initStorage();
    
    // Parse URL params
    const params = new URLSearchParams(window.location.search);
    const deptParam = params.get('dept');

    // Render department lists on Hub
    renderDepartmentsHub();

    if (deptParam && PlacementPrepRoadmaps[deptParam]) {
        openRoadmap(deptParam);
    } else {
        exitToHub();
    }

    // Set up search bindings
    const searchInput = document.getElementById('roadmap-search');
    const clearBtn = document.getElementById('roadmap-search-clear');
    
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const val = searchInput.value.trim();
            if (val) {
                clearBtn.style.display = 'inline-flex';
                handleRoadmapSearch(val);
            } else {
                clearBtn.style.display = 'none';
                document.getElementById('search-results-section').style.display = 'none';
                document.getElementById('departments-hub-view').style.display = activeDepartmentId ? 'none' : 'block';
                if (activeDepartmentId) {
                    document.getElementById('roadmap-timeline-view').style.display = 'block';
                }
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            document.getElementById('search-results-section').style.display = 'none';
            document.getElementById('departments-hub-view').style.display = activeDepartmentId ? 'none' : 'block';
            if (activeDepartmentId) {
                document.getElementById('roadmap-timeline-view').style.display = 'block';
            }
        });
    }
});

// --- LocalStorage Progress Track ---
function initStorage() {
    const rawProgress = localStorage.getItem('placement_prep_roadmap_progress');
    if (!rawProgress) {
        localStorage.setItem('placement_prep_roadmap_progress', JSON.stringify({}));
        currentProgress = {};
    } else {
        try {
            currentProgress = JSON.parse(rawProgress);
        } catch (e) {
            console.error("Error reading roadmap progress state.", e);
            currentProgress = {};
        }
    }
}

function saveProgress() {
    localStorage.setItem('placement_prep_roadmap_progress', JSON.stringify(currentProgress));
}

function getCompletedDays(deptId) {
    return currentProgress[deptId] || [];
}

function toggleDayCompletion(deptId, dayNumber, checked) {
    if (!currentProgress[deptId]) {
        currentProgress[deptId] = [];
    }
    
    if (checked) {
        if (!currentProgress[deptId].includes(dayNumber)) {
            currentProgress[deptId].push(dayNumber);
        }
    } else {
        currentProgress[deptId] = currentProgress[deptId].filter(d => d !== dayNumber);
    }
    
    saveProgress();
    updateProgressUI(deptId);
    
    // Toast Alert
    if (checked) {
        PlacementPrepState.dispatchToast(`\u2705 Completed Day ${dayNumber}! Keep studying.`, 'success');
    } else {
        PlacementPrepState.dispatchToast(`\u26A0\uFE0F Day ${dayNumber} unmarked.`, 'info');
    }
}

function updateProgressUI(deptId) {
    const completedList = getCompletedDays(deptId);
    const total = 30;
    const percent = Math.round((completedList.length / total) * 100);
    
    const percentLabel = document.getElementById('roadmap-completion-percent');
    const countLabel = document.getElementById('roadmap-completed-count');
    
    if (percentLabel) percentLabel.textContent = `${percent}%`;
    if (countLabel) countLabel.textContent = completedList.length;

    // Sync card completions inside timeline
    const days = completedList;
    const cards = document.querySelectorAll('.timeline-item');
    cards.forEach(card => {
        const dayNum = parseInt(card.getAttribute('data-day'));
        if (days.includes(dayNum)) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
    });
}

// --- Render Hub ---
function renderDepartmentsHub() {
    const grid = document.getElementById('departments-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(PlacementPrepRoadmaps).map(([id, dept]) => {
        const completedCount = getCompletedDays(id).length;
        const percent = Math.round((completedCount / 30) * 100);
        
        return `
            <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; min-height: 250px; cursor: pointer; transition: var(--transition);" onclick="openRoadmap('${id}')">
                <div>
                    <div style="width: 50px; height: 50px; border-radius: 12px; background: var(--primary-glow); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.2rem;">
                        <i class="${dept.icon}"></i>
                    </div>
                    <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; font-family: var(--font-heading);">${dept.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4; margin-bottom: 1.5rem;">${dept.desc}</p>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">30 Days Course</span>
                    <span style="font-size: 0.85rem; font-weight: 700; color: ${percent > 0 ? 'var(--success)' : 'var(--text-muted)'};">
                        ${percent > 0 ? `🏃 ${percent}% Done` : 'Start Core'}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// --- Active View Actions ---
function openRoadmap(deptId) {
    activeDepartmentId = deptId;
    const dept = PlacementPrepRoadmaps[deptId];
    if (!dept) return;

    // Push state parameter to URL without page refresh
    const newUrl = `${window.location.pathname}?dept=${deptId}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    // Set UI
    document.getElementById('active-dept-title').textContent = dept.title;
    document.getElementById('active-dept-desc').textContent = dept.desc;
    
    const iconContainer = document.getElementById('active-dept-icon');
    iconContainer.innerHTML = `<i class="${dept.icon}"></i>`;

    // Render Timeline Days
    const timeline = document.getElementById('timeline-days-list');
    const completedDays = getCompletedDays(deptId);
      timeline.innerHTML = dept.days.map(d => {
        const isCompleted = completedDays.includes(d.day);
        const isUnlocked = isDayUnlocked(deptId, d.day);
        const activeClass = isUnlocked && !isCompleted ? 'active' : '';
        const completedClass = isCompleted ? 'completed' : '';
        const lockedClass = !isUnlocked ? 'locked' : '';
        
        // Generate the bulleted detailed checklist for Core Study Guide
        const studyItemsHTML = generateDetailedStudyItems(d).map(item => `
            <li style="margin-bottom: 0.6rem; display: flex; align-items: start; gap: 0.5rem;">
                <i class="fa-regular fa-circle-dot" style="color: var(--primary); margin-top: 0.35rem; font-size: 0.75rem;"></i>
                <span>${item}</span>
            </li>
        `).join('');
        
        return `
            <div class="timeline-item ${activeClass} ${completedClass} ${lockedClass}" data-day="${d.day}">
                <div class="timeline-badge" onclick="${isUnlocked ? `toggleBadgeCompletion('${deptId}', ${d.day})` : `PlacementPrepState.dispatchToast('⚠️ Day ${d.day} is locked! Complete the previous day first.', 'warning')`}"></div>
                
                <div class="glass-panel roadmap-day-card" style="padding: 1.2rem; margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span class="badge badge-primary" style="background: var(--primary-glow); color: var(--primary); font-weight: 800; border-radius: 12px; padding: 0.3rem 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                                ${isUnlocked ? '' : '<i class="fa-solid fa-lock" style="font-size: 0.8rem;"></i>'} Day ${d.day}
                            </span>
                            <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0; color: var(--text-primary);">${d.title}</h4>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span class="badge badge-${d.difficulty}">${d.difficulty}</span>
                            <button class="roadmap-arrow-btn" onclick="toggleDayDetails(${d.day}, event)" aria-label="Toggle Details">
                                <i class="fa-solid fa-chevron-down" id="arrow-icon-${d.day}" style="transition: transform 0.3s ease;"></i>
                            </button>
                        </div>
                    </div>
 
                    <!-- Expandable details sheet -->
                    <div class="roadmap-day-details" id="details-${d.day}">
                        <div style="margin-bottom: 1.2rem; line-height: 1.6; color: var(--text-secondary);">
                            <strong style="color: var(--text-primary); display:block; margin-bottom: 0.6rem;"><i class="fa-solid fa-graduation-cap"></i> Core Study Guide:</strong>
                            <ul style="margin: 0; padding: 0; list-style: none;">
                                ${studyItemsHTML}
                            </ul>
                        </div>
                        
                        <div class="solution-subcard success-light" style="margin-bottom: 1.2rem; border-left-color: var(--primary);">
                            <h5 style="margin: 0 0 0.5rem; font-size: 0.9rem; color: var(--primary); font-weight: 700;"><i class="fa-solid fa-laptop-code"></i> Daily Challenge</h5>
                            <p style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary);">${d.challenge}</p>
                        </div>
 
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border-color);">
                            <div style="font-size: 0.88rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                <i class="fa-solid fa-book-bookmark" style="color: var(--primary);"></i>
                                <strong style="color: var(--text-primary);">Reference:</strong> 
                                <a href="${getReferenceUrl(d.resources)}" target="_blank" rel="noopener noreferrer" style="color: var(--secondary); font-weight: 700; text-decoration: underline; display: inline-flex; align-items: center; gap: 0.35rem;" onclick="event.stopPropagation();">
                                    ${d.resources} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
                                </a>
                            </div>
                            
                            <label class="check-container ${isCompleted ? 'checked' : ''} ${isUnlocked ? '' : 'disabled'}" id="lbl-check-${d.day}" onclick="event.stopPropagation();" style="${isUnlocked ? '' : 'opacity: 0.5; cursor: not-allowed;'}">
                                <input type="checkbox" id="chk-${d.day}" ${isCompleted ? 'checked' : ''} ${isUnlocked ? '' : 'disabled'} onchange="handleCheckboxChange('${deptId}', ${d.day}, this)">
                                <i class="fa-solid fa-circle-check"></i> <span>${isCompleted ? 'Done' : 'Mark as Completed'}</span>
                            </label>
                        </div>
                    </div>
                </div>
        `;
    }).join('');

    // Toggle panels
    document.getElementById('departments-hub-view').style.display = 'none';
    document.getElementById('roadmap-timeline-view').style.display = 'block';
    
    updateProgressUI(deptId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitToHub() {
    activeDepartmentId = null;
    
    // Clear URL query params
    const newUrl = window.location.pathname;
    window.history.pushState({ path: newUrl }, '', newUrl);

    document.getElementById('roadmap-timeline-view').style.display = 'none';
    document.getElementById('departments-hub-view').style.display = 'block';
    renderDepartmentsHub();
}

// --- Detail Card Toggles ---
function toggleDayDetails(dayNumber, event) {
    if (event) {
        event.stopPropagation();
    }

    const details = document.getElementById(`details-${dayNumber}`);
    const arrowIcon = document.getElementById(`arrow-icon-${dayNumber}`);
    if (details) {
        const isExpanded = details.classList.toggle('expanded');
        if (arrowIcon) {
            if (isExpanded) {
                arrowIcon.style.transform = 'rotate(180deg)';
            } else {
                arrowIcon.style.transform = '';
            }
        }
    }
}

function handleCheckboxChange(deptId, dayNumber, checkbox) {
    const label = document.getElementById(`lbl-check-${dayNumber}`);
    
    if (!isDayUnlocked(deptId, dayNumber)) {
        checkbox.checked = false;
        PlacementPrepState.dispatchToast(`⚠️ Day ${dayNumber} is locked! Complete Day ${dayNumber - 1} first.`, 'warning');
        return;
    }
    
    if (checkbox.checked) {
        checkbox.checked = false; // Revert temporary checkbox state
        
        // Save pending context
        window.pendingVerification = { deptId, dayNumber, checkbox };
        
        // Fetch checklist concepts and questions
        const dept = PlacementPrepRoadmaps[deptId];
        const dayObj = dept.days.find(d => d.day === dayNumber);
        const questions = getRoadmapQuizQuestions(dayObj);
        
        // Populate modal subtitle
        document.getElementById('modal-subtitle').textContent = `Complete the Concept Quiz to mark Day ${dayNumber} of ${dept.title} completed`;
        
        // Render quiz questions with radio options
        const container = document.getElementById('modal-checklist-container');
        container.innerHTML = questions.map((qObj, qIdx) => {
            const optionsHTML = qObj.options.map(opt => {
                const escapedOpt = opt.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return `
                    <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; padding: 0.5rem; border-radius: var(--border-radius-sm); transition: background 0.2s; text-align: left;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background=''">
                        <input type="radio" name="roadmap-quiz-q${qIdx}" value="${opt}" onchange="checkModalProgress()" style="cursor: pointer; margin: 0; min-width: 15px; min-height: 15px;">
                        <span style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4;">${escapedOpt}</span>
                    </label>
                `;
            }).join('');
            
            return `
                <div class="roadmap-quiz-item" data-qidx="${qIdx}" style="text-align: left; margin-bottom: 1.2rem; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 1rem;">
                    <h5 style="margin: 0 0 0.6rem 0; font-size: 0.95rem; color: var(--text-primary); font-weight: 700; line-height: 1.4;">
                        ${qIdx + 1}. ${qObj.q}
                    </h5>
                    <div style="display: flex; flex-direction: column; gap: 0.4rem;">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        }).join('');
        
        // Reset confirm button state
        document.getElementById('modal-confirm-btn').disabled = true;
        
        // Open modal
        document.getElementById('verification-modal').style.display = 'flex';
        
    } else {
        // Unmark day directly
        if (label) {
            label.classList.remove('checked');
            label.querySelector('span').textContent = 'Mark as Completed';
        }
        toggleDayCompletion(deptId, dayNumber, false);
    }
}

function toggleBadgeCompletion(deptId, dayNumber) {
    if (!isDayUnlocked(deptId, dayNumber)) {
        PlacementPrepState.dispatchToast(`⚠️ Day ${dayNumber} is locked! Complete Day ${dayNumber - 1} first.`, 'warning');
        return;
    }
    
    const chk = document.getElementById(`chk-${dayNumber}`);
    if (chk) {
        if (chk.checked) {
            chk.checked = false;
            handleCheckboxChange(deptId, dayNumber, chk);
        } else {
            chk.checked = true;
            handleCheckboxChange(deptId, dayNumber, chk);
        }
    }
}

// --- Verification Modal Actions ---
window.pendingVerification = null;

function checkModalProgress() {
    const confirmBtn = document.getElementById('modal-confirm-btn');
    const items = document.querySelectorAll('.roadmap-quiz-item');
    let allSelected = true;
    items.forEach(item => {
        const qIdx = item.getAttribute('data-qidx');
        const selected = item.querySelector(`input[name="roadmap-quiz-q${qIdx}"]:checked`);
        if (!selected) {
            allSelected = false;
        }
    });
    confirmBtn.disabled = !allSelected;
}

function cancelVerification() {
    if (window.pendingVerification) {
        const { checkbox, dayNumber } = window.pendingVerification;
        if (checkbox) checkbox.checked = false;
        
        const label = document.getElementById(`lbl-check-${dayNumber}`);
        if (label) {
            label.classList.remove('checked');
            label.querySelector('span').textContent = 'Mark as Completed';
        }
    }
    document.getElementById('verification-modal').style.display = 'none';
    window.pendingVerification = null;
}

function confirmVerification() {
    if (window.pendingVerification) {
        const { deptId, dayNumber, checkbox } = window.pendingVerification;
        const dept = PlacementPrepRoadmaps[deptId];
        const dayObj = dept.days.find(d => d.day === dayNumber);
        const questions = getRoadmapQuizQuestions(dayObj);
        
        let allCorrect = true;
        let incorrectConcepts = [];

        const items = document.querySelectorAll('.roadmap-quiz-item');
        items.forEach(item => {
            const qIdx = parseInt(item.getAttribute('data-qidx'));
            const selected = item.querySelector(`input[name="roadmap-quiz-q${qIdx}"]:checked`);
            const qObj = questions[qIdx];
            if (!selected || selected.value !== qObj.ans) {
                allCorrect = false;
                incorrectConcepts.push(qObj.concept);
            }
        });

        if (!allCorrect) {
            // Revert checkbox
            if (checkbox) checkbox.checked = false;
            const label = document.getElementById(`lbl-check-${dayNumber}`);
            if (label) {
                label.classList.remove('checked');
                label.querySelector('span').textContent = 'Mark as Completed';
            }
            
            // Close modal
            document.getElementById('verification-modal').style.display = 'none';
            window.pendingVerification = null;

            // Alert the user!
            const conceptNames = incorrectConcepts.join(" and ");
            PlacementPrepState.dispatchToast(`❌ You did not study the concept: "${conceptNames}"! Go study and try again.`, 'danger');
            return;
        }

        // Complete the day!
        if (checkbox) checkbox.checked = true;
        const label = document.getElementById(`lbl-check-${dayNumber}`);
        if (label) {
            label.classList.add('checked');
            label.querySelector('span').textContent = 'Done';
        }
        
        toggleDayCompletion(deptId, dayNumber, true);
        
        // Re-render timeline to unlock the next day!
        openRoadmap(deptId);
    }
    
    document.getElementById('verification-modal').style.display = 'none';
    window.pendingVerification = null;
}

window.cancelVerification = cancelVerification;
window.confirmVerification = confirmVerification;
window.checkModalProgress = checkModalProgress;

// --- Search Filter Algorithms ---
function handleRoadmapSearch(query) {
    const q = query.toLowerCase();
    const results = [];

    // Scan across all departments and days
    Object.entries(PlacementPrepRoadmaps).forEach(([deptId, dept]) => {
        dept.days.forEach(day => {
            const matchesTitle = day.title.toLowerCase().includes(q);
            const matchesDesc = day.desc.toLowerCase().includes(q);
            const matchesChallenge = day.challenge.toLowerCase().includes(q);
            const matchesDept = dept.title.toLowerCase().includes(q);

            if (matchesTitle || matchesDesc || matchesChallenge || matchesDept) {
                results.push({
                    deptId,
                    deptTitle: dept.title,
                    deptIcon: dept.icon,
                    day: day.day,
                    title: day.title,
                    desc: day.desc,
                    difficulty: day.difficulty,
                    challenge: day.challenge
                });
            }
        });
    });

    const countSpan = document.getElementById('search-results-count');
    const resultsGrid = document.getElementById('search-results-grid');
    const resultsSection = document.getElementById('search-results-section');
    const hubView = document.getElementById('departments-hub-view');
    const timelineView = document.getElementById('roadmap-timeline-view');

    countSpan.textContent = results.length;
    resultsSection.style.display = 'block';
    hubView.style.display = 'none';
    timelineView.style.display = 'none';

    if (results.length === 0) {
        resultsGrid.innerHTML = `
            <div class="glass-card" style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem;">
                <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h4>No roadmap matches found</h4>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Try searching alternative terms (e.g. Hooks, Multithreading, Linux)</p>
            </div>
        `;
    } else {
        resultsGrid.innerHTML = results.map(r => {
            // Highlight queries in title and descriptions
            const hl = (txt) => {
                const regex = new RegExp(`(${q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
                return txt.replace(regex, `<span class="highlight-text">$1</span>`);
            };

            return `
                <div class="glass-card roadmap-day-card" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;" onclick="jumpToDayFromSearch('${r.deptId}', ${r.day})">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary);">
                                <i class="${r.deptIcon}"></i> ${r.deptTitle}
                            </span>
                            <span class="badge badge-${r.difficulty}">${r.difficulty}</span>
                        </div>
                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary);">Day ${r.day}: ${hl(r.title)}</h4>
                        <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; margin-bottom: 1rem;">${hl(r.desc)}</p>
                    </div>
                    
                    <div style="font-size: 0.8rem; background: var(--border-color); padding: 0.5rem; border-radius: 4px; color: var(--text-muted); font-family: monospace;">
                        Challenge: ${hl(r.challenge)}
                    </div>
                </div>
            `;
        }).join('');
    }
}

function jumpToDayFromSearch(deptId, dayNumber) {
    // Clear search elements
    document.getElementById('roadmap-search').value = '';
    document.getElementById('roadmap-search-clear').style.display = 'none';
    document.getElementById('search-results-section').style.display = 'none';

    // Navigate to timeline day
    openRoadmap(deptId);

    // Expand targeted day card on load
    setTimeout(() => {
        const details = document.getElementById(`details-${dayNumber}`);
        const card = document.querySelector(`[data-day="${dayNumber}"]`);
        if (details) {
            details.classList.add('expanded');
            const arrowIcon = document.getElementById(`arrow-icon-${dayNumber}`);
            if (arrowIcon) {
                arrowIcon.style.transform = 'rotate(180deg)';
            }
        }
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight card pulse
            card.style.transform = 'scale(1.02)';
            setTimeout(() => card.style.transform = '', 1000);
        }
    }, 400);
}

// Bind to window context
window.exitToHub = exitToHub;
window.handleCheckboxChange = handleCheckboxChange;
window.toggleBadgeCompletion = toggleBadgeCompletion;
window.toggleDayDetails = toggleDayDetails;
window.jumpToDayFromSearch = jumpToDayFromSearch;
window.openRoadmap = openRoadmap;
