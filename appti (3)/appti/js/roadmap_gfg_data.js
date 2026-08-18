/* ==========================================================================
   ROADMAP_GFG_DATA.JS - GeeksforGeeks-Style Comprehensive Placement Roadmaps
   ========================================================================== */

const GFG_ROADMAPS_DATABASE = {
    "react": {
        "id": "react",
        "title": "React.js Roadmap: A Complete Guide [2026 Updated]",
        "badge": "GFG Certified Track",
        "icon": "fa-brands fa-react",
        "color": "#61DAFB",
        "overview": {
            "what": "React is an open-source, component-based front-end JavaScript library created by Facebook (Meta) used for building modern, high-performance, dynamic user interfaces and Single Page Applications (SPAs).",
            "why": "With over 40% market dominance, React is the #1 demanded frontend skill in campus placements and MNC hiring. Its Virtual DOM, modular reusable components, declarative JSX syntax, and robust ecosystem make it standard across Google, Meta, Netflix, Uber, and Airbnb.",
            "salary": "₹6 LPA – ₹24 LPA (Entry to Senior Software Engineer)",
            "prerequisites": [
                "HTML5 (Semantic elements, Forms, DOM tree)",
                "CSS3 (Flexbox, Grid, Responsive Design, Transitions)",
                "Modern JavaScript ES6+ (Arrow functions, Destructuring, Promises, Async/Await, Array methods like map/filter/reduce, Closures)",
                "Basic Node.js & npm/yarn package management"
            ]
        },
        "stages": [
            {
                "stage": 1,
                "title": "Pre-requisites & Modern JavaScript Foundations",
                "difficulty": "Beginner",
                "tag": "Fundamentals",
                "summary": "Master the modern JavaScript ES6+ features and browser fundamentals required before writing a single line of React code.",
                "topics": [
                    "ES6 Syntax: let, const, arrow functions, template literals, default parameters",
                    "Destructuring: Array and Object destructuring, Rest and Spread operators (`...`)",
                    "Essential Array Methods: `map()`, `filter()`, `reduce()`, `find()`, `some()`, `every()`",
                    "Asynchronous JS: Event Loop, Microtasks, Promises, `async/await`, Fetch API",
                    "Core JS Concepts: Closures, Lexical Scoping, Higher-Order Functions, Modular `import`/`export`"
                ],
                "codeSnippet": {
                    "lang": "javascript",
                    "title": "Essential ES6+ Patterns Used in React",
                    "code": "// 1. Destructuring & Spread Operator\nconst user = { name: 'Sanjay', role: 'Developer', skills: ['JS', 'React'] };\nconst { name, ...rest } = user;\nconst updatedSkills = [...user.skills, 'Next.js'];\n\n// 2. High-Order Array Transformations (Render Lists in React)\nconst products = [\n  { id: 1, name: 'Laptop', price: 65000, inStock: true },\n  { id: 2, name: 'Mouse', price: 1200, inStock: false },\n  { id: 3, name: 'Keyboard', price: 3500, inStock: true }\n];\nconst availableItems = products\n  .filter(item => item.inStock)\n  .map(item => ({ ...item, formattedPrice: `₹${item.price}` }));"
                },
                "proTip": "Never start React without understanding how `map()` and array destructuring work! 90% of React UI loops rely directly on `.map()`.",
                "miniProject": "Build a vanilla JS Product Catalog that fetches data from `dummyjson.com/products`, filters by category, and renders cards dynamically.",
                "interviewQuestions": [
                    {
                        "q": "Why is ES6 destructuring so heavily used in React?",
                        "a": "React components receive data via a single `props` object. Destructuring allows developers to extract specific props directly in the function signature (e.g. `function Card({ title, price })`) cleanly without writing `props.title` everywhere."
                    },
                    {
                        "q": "What is the difference between `map()` and `forEach()`?",
                        "a": "`map()` creates and returns a brand-new array containing the results of calling the function on every element, which React uses to render lists of JSX. `forEach()` returns `undefined` and only mutates or causes side-effects."
                    }
                ]
            },
            {
                "stage": 2,
                "title": "React Basics, Setup & JSX Syntax",
                "difficulty": "Beginner",
                "tag": "Core Architecture",
                "summary": "Understand Virtual DOM, React Fiber reconciliation, project initialization with Vite, and JSX rules.",
                "topics": [
                    "What is React? Single Page Application (SPA) vs Multi-Page Application (MPA)",
                    "Virtual DOM & Reconciliation: Why React is fast and how DOM Diffing works",
                    "React Project Setup: Vite (`npm create vite@latest my-app -- --template react`)",
                    "JSX (JavaScript XML): Rules, Embedding Expressions with `{}`, Fragments `<></>`",
                    "Conditional Rendering: Ternary operators (`? :`), Short-circuit (`&&`), Switch statements"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "Vite React Entry & Declarative JSX",
                    "code": "import React from 'react';\n\nfunction WelcomeBanner({ username, isPremium, unreadCount }) {\n  return (\n    <div className=\"p-6 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800\">\n      <h1 className=\"text-2xl font-bold\">\n        Welcome back, {username}! {isPremium && <span className=\"text-amber-400\">⭐ VIP</span>}\n      </h1>\n      {unreadCount > 0 ? (\n        <p className=\"text-emerald-400 mt-2\">You have {unreadCount} new notifications.</p>\n      ) : (\n        <p className=\"text-slate-400 mt-2\">All caught up!</p>\n      )}\n    </div>\n  );\n}\n\nexport default WelcomeBanner;"
                },
                "proTip": "Always wrap adjacent JSX elements in a React Fragment `<>...</>` to avoid injecting redundant `<div>` wrapper nodes into the real DOM tree.",
                "miniProject": "Create a User Profile Card component with online status badge, social links, and conditional premium member styling.",
                "interviewQuestions": [
                    {
                        "q": "How does React's Virtual DOM improve web performance?",
                        "a": "Instead of manipulating the slow browser DOM on every state change, React creates a lightweight in-memory Virtual DOM tree. When state changes, React computes the minimal difference (Diffing Algorithm) and batch-updates only the modified real DOM nodes via React Fiber reconciliation."
                    },
                    {
                        "q": "Can browsers read JSX directly?",
                        "a": "No. Browsers only understand pure JavaScript. Transpilers like Babel or SWC convert JSX tags like `<h1>Hello</h1>` into `React.createElement('h1', null, 'Hello')` before browser execution."
                    }
                ]
            },
            {
                "stage": 3,
                "title": "React Components & Props Ecosystem",
                "difficulty": "Beginner",
                "tag": "Architecture",
                "summary": "Master component-driven architecture, props passing, default values, PropTypes, and the children prop pattern.",
                "topics": [
                    "Functional Components vs Legacy Class Components",
                    "Passing & Receiving Props: Data flows unidirectional (Parent -> Child)",
                    "Children Prop Pattern (`props.children`): Building reusable container wrappers",
                    "PropTypes & TypeScript Interfaces for compile-time prop validation",
                    "Component Composition: Container/Presentational and Atomic Design principles"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "Reusable Modal Component using props.children",
                    "code": "// Reusable Modal Wrapper Component\nfunction Modal({ isOpen, title, onClose, children }) {\n  if (!isOpen) return null;\n\n  return (\n    <div className=\"modal-backdrop\" onClick={onClose}>\n      <div className=\"modal-card\" onClick={(e) => e.stopPropagation()}>\n        <div className=\"modal-header\">\n          <h3>{title}</h3>\n          <button className=\"close-btn\" onClick={onClose}>&times;</button>\n        </div>\n        <div className=\"modal-body\">\n          {children} {/* Dynamically nested content */}\n        </div>\n      </div>\n    </div>\n  );\n}"
                },
                "proTip": "Props are strictly READ-ONLY (immutable). Never mutate `props.title = 'New'`. To change values over time, use State (`useState`).",
                "miniProject": "Design an Atomic UI library: Custom Button, Badge, Avatar, and Card components using children props and variants.",
                "interviewQuestions": [
                    {
                        "q": "What is Prop Drilling and how do you resolve it?",
                        "a": "Prop Drilling is the process of passing props down through multiple layers of intermediate components that do not need the data themselves. It is resolved using React Context API (`useContext`), State Management libraries (Redux, Zustand), or Component Composition."
                    },
                    {
                        "q": "What is the special `children` prop in React?",
                        "a": "`children` is a built-in prop that allows components to pass arbitrary JSX elements as children inside custom tags (e.g. `<Card><p>Content</p></Card>`), enabling flexible layout wrappers."
                    }
                ]
            },
            {
                "stage": 4,
                "title": "Essential React Hooks: State & Side Effects",
                "difficulty": "Intermediate",
                "tag": "Hooks Mastery",
                "summary": "Dive deep into `useState`, `useEffect`, `useRef`, and `useReducer` with lifecycle and memory management.",
                "topics": [
                    "Rules of Hooks: Call only at top level, call only from React functions",
                    "`useState`: Primitive vs Object/Array state updates, Functional state updater `setCount(prev => prev + 1)`",
                    "`useEffect`: Mount, Update, Unmount lifecycle phases, Dependency Array rules, Cleanup functions (timers, subscriptions)",
                    "`useRef`: Accessing DOM elements directly, storing mutable variables without triggering re-renders",
                    "`useReducer`: Managing complex, multi-action state transitions with Redux-like dispatch actions"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "useState + useEffect with API Fetching & Debounced Search",
                    "code": "import { useState, useEffect, useRef } from 'react';\n\nfunction UserSearch() {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current?.focus(); // Auto-focus input on mount\n  }, []);\n\n  useEffect(() => {\n    if (!query.trim()) { setResults([]); return; }\n\n    const controller = new AbortController();\n    setLoading(true);\n\n    const timer = setTimeout(async () => {\n      try {\n        const res = await fetch(`https://api.github.com/search/users?q=${query}`,\n          { signal: controller.signal });\n        const data = await res.json();\n        setResults(data.items || []);\n      } catch (err) {\n        if (err.name !== 'AbortError') console.error(err);\n      } finally {\n        setLoading(false);\n      }\n    }, 400); // 400ms debounce\n\n    return () => {\n      clearTimeout(timer); // Cleanup debounce\n      controller.abort();  // Abort in-flight network request\n    };\n  }, [query]);\n\n  return (\n    <div>\n      <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} placeholder=\"Search GitHub...\" />\n      {loading ? <p>Loading...</p> : <ul>{results.map(u => <li key={u.id}>{u.login}</li>)}</ul>}\n    </div>\n  );\n}"
                },
                "proTip": "Always provide cleanup return functions inside `useEffect` when setting up `setInterval`, `addEventListener`, or API fetch calls to prevent memory leaks!",
                "miniProject": "Build a Live Crypto Price Ticker with `useState` and `useEffect` using CoinGecko Public API with auto-refresh every 10 seconds.",
                "interviewQuestions": [
                    {
                        "q": "Why does `useState` update asynchronously?",
                        "a": "React batches multiple state updates together into a single re-render cycle for performance optimization. If you need the next state immediately, pass a functional updater `setState(prev => prev + 1)`."
                    },
                    {
                        "q": "What happens if you omit the dependency array in `useEffect`?",
                        "a": "If omitted (`useEffect(() => {})`), the effect runs on initial mount and AFTER EVERY SINGLE RENDER, potentially causing infinite loops if state is updated inside."
                    }
                ]
            },
            {
                "stage": 5,
                "title": "Routing in React (React Router v6)",
                "difficulty": "Intermediate",
                "tag": "SPA Routing",
                "summary": "Build complex multi-page Single Page Applications with dynamic URLs, nested routes, and route protection.",
                "topics": [
                    "React Router v6 Core: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`",
                    "Dynamic Route Parameters: `useParams()` (e.g. `/course/:id`)",
                    "Programmatic Navigation: `useNavigate()`, `useLocation()`, `useSearchParams()`",
                    "Nested Routing & Layouts using `<Outlet />`",
                    "Protected Routes: Authentication guards for Admin & Dashboard views, 404 Not Found handling"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "React Router v6 Nested & Protected Routes",
                    "code": "import { BrowserRouter, Routes, Route, Navigate, Outlet, Link, useParams } from 'react-router-dom';\n\n// Protected Route Guard\nfunction ProtectedRoute({ isAuthenticated }) {\n  return isAuthenticated ? <Outlet /> : <Navigate to=\"/login\" replace />;\n}\n\n// App Root Router\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link> | <Link to=\"/courses\">Courses</Link> | <Link to=\"/dashboard\">Dashboard</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/courses\" element={<CoursesPage />} />\n        <Route path=\"/courses/:courseId\" element={<CourseDetails />} />\n        \n        {/* Protected Dashboard Route */}\n        <Route element={<ProtectedRoute isAuthenticated={true} />}>\n          <Route path=\"/dashboard\" element={<DashboardLayout />}>\n            <Route index element={<DashboardOverview />} />\n            <Route path=\"analytics\" element={<AnalyticsPage />} />\n          </Route>\n        </Route>\n        <Route path=\"*\" element={<h1>404 Page Not Found</h1>} />\n      </Routes>\n    </BrowserRouter>\n  );\n}"
                },
                "proTip": "Never use traditional `<a href=\"...\">` tags for internal navigation in React! Always use `<Link to=\"...\">` or `<NavLink>` to prevent page reloads and state loss.",
                "miniProject": "Build a Multi-Page Learning Management Portal with Course Directory, Dynamic Lecture Viewer (`/course/:id`), and Protected Student Dashboard.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between `<Link>` and `<a>` in React Router?",
                        "a": "`<a>` causes a full page reload, reloading the entire JavaScript bundle and clearing all application state. `<Link>` intercepts browser navigation using the HTML5 History API, changing the URL and rendering the new route instantly without reloading."
                    },
                    {
                        "q": "What is the purpose of `<Outlet />` in React Router v6?",
                        "a": "`<Outlet />` is a placeholder inside a parent layout component that renders child routes matching the current nested URL pathname."
                    }
                ]
            },
            {
                "stage": 6,
                "title": "State Management: Context API, Redux Toolkit & Zustand",
                "difficulty": "Advanced",
                "tag": "Global State",
                "summary": "Master global application state scaling: React Context API, Redux Toolkit (RTK), and modern Zustand stores.",
                "topics": [
                    "When to use Local State vs Global State",
                    "React Context API: `createContext`, `Context.Provider`, `useContext` custom hooks",
                    "Redux Toolkit (RTK): Store, Slices (`createSlice`), Reducers, Actions, `useSelector`, `useDispatch`",
                    "Async Thunks: `createAsyncThunk` for API calls and caching",
                    "Zustand: Ultra-fast, boilerplate-free state management without Context Providers"
                ],
                "codeSnippet": {
                    "lang": "javascript",
                    "title": "Modern Zustand Global Shopping Cart Store",
                    "code": "import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\nexport const useCartStore = create(\n  persist(\n    (set, get) => ({\n      cart: [],\n      addToCart: (product) => {\n        const { cart } = get();\n        const existing = cart.find(item => item.id === product.id);\n        if (existing) {\n          set({ cart: cart.map(item => item.id === product.id \n            ? { ...item, qty: item.qty + 1 } : item) });\n        } else {\n          set({ cart: [...cart, { ...product, qty: 1 }] });\n        }\n      },\n      removeFromCart: (id) => set({ cart: get().cart.filter(item => item.id !== id) }),\n      clearCart: () => set({ cart: [] }),\n      getTotalPrice: () => get().cart.reduce((sum, item) => sum + item.price * item.qty, 0)\n    }),\n    { name: 'shopping-cart-storage' } // Persists automatically to LocalStorage!\n  )\n);"
                },
                "proTip": "Context API is great for low-velocity data like UI Themes and Auth User info. For high-frequency state (e.g. Shopping Carts, Live Chats), use Redux Toolkit or Zustand to prevent global re-render bottlenecks.",
                "miniProject": "Build an E-Commerce Shopping Cart with persistent local storage, quantity counters, discount promo codes, and checkout invoice summary.",
                "interviewQuestions": [
                    {
                        "q": "Why is Redux Toolkit preferred over Legacy Redux?",
                        "a": "Redux Toolkit (RTK) eliminates legacy boilerplate by automatically configuring the store, generating action creators and action types via `createSlice`, integrating Immer for mutable-syntax immutable updates, and bundling Redux Thunk out of the box."
                    },
                    {
                        "q": "What is the key advantage of Zustand over React Context?",
                        "a": "Zustand uses atomic selectors (`useCartStore(state => state.cart)`), ensuring components ONLY re-render when the specific selected slice of state changes, completely avoiding Context Provider cascade re-renders."
                    }
                ]
            },
            {
                "stage": 7,
                "title": "React Forms, Events & Schema Validation",
                "difficulty": "Intermediate",
                "tag": "Form Architecture",
                "summary": "Master Synthetic Events, Controlled vs Uncontrolled inputs, React Hook Form, and Zod schema validations.",
                "topics": [
                    "React SyntheticEvent System: Cross-browser event normalization",
                    "Controlled Components (`value` + `onChange`) vs Uncontrolled Components (`useRef`)",
                    "Form Submission handling & `event.preventDefault()`",
                    "React Hook Form: Ultra-performant form inputs with minimal re-renders",
                    "Zod Schema Validation: Type-safe form validation for emails, passwords, and numbers"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "Type-Safe Form with React Hook Form & Zod",
                    "code": "import { useForm } from 'react-hook-form';\nimport { z } from 'zod';\nimport { zodResolver } from '@hookform/resolvers/zod';\n\nconst signupSchema = z.object({\n  fullName: z.string().min(3, 'Name must be at least 3 characters'),\n  email: z.string().email('Invalid email address'),\n  password: z.string().min(8, 'Password must be at least 8 chars'),\n  agreeTerms: z.boolean().refine(val => val === true, 'You must accept terms')\n});\n\nfunction SignupForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({\n    resolver: zodResolver(signupSchema)\n  });\n\n  const onSubmit = (data) => console.log('Validated User Data:', data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)} className=\"space-y-4\">\n      <input {...register('fullName')} placeholder=\"Full Name\" />\n      {errors.fullName && <p className=\"text-red-500\">{errors.fullName.message}</p>}\n\n      <input {...register('email')} placeholder=\"Email Address\" />\n      {errors.email && <p className=\"text-red-500\">{errors.email.message}</p>}\n\n      <button type=\"submit\" disabled={isSubmitting}>Register Now</button>\n    </form>\n  );\n}"
                },
                "proTip": "For forms with more than 5 fields, switch from `useState` to React Hook Form. It uses uncontrolled ref inputs internally, reducing re-renders from hundreds down to 1!",
                "miniProject": "Build a Multi-Step Job Application Form with step validation (Personal Info -> Skills -> Resume Upload -> Final Review).",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between Controlled and Uncontrolled components?",
                        "a": "A controlled component has its form data handled directly by React component state (`useState`), whereas an uncontrolled component stores its data in the DOM itself and is accessed using `useRef`."
                    },
                    {
                        "q": "What are Synthetic Events in React?",
                        "a": "SyntheticEvent is a cross-browser wrapper around the browser's native event. It has the same interface across Chrome, Safari, Firefox, and Edge (`stopPropagation()`, `preventDefault()`), ensuring uniform behavior."
                    }
                ]
            },
            {
                "stage": 8,
                "title": "Advanced React, Custom Hooks & Performance Optimization",
                "difficulty": "Advanced",
                "tag": "Production Optimization",
                "summary": "Master performance profiling, memoization techniques, code splitting, lazy loading, and writing custom hooks.",
                "topics": [
                    "Performance Profiling with React DevTools",
                    "`React.memo`: Preventing pure component re-renders on unchanged props",
                    "`useMemo`: Caching expensive mathematical calculations & object references",
                    "`useCallback`: Caching callback function references across re-renders",
                    "Code Splitting & Dynamic Imports with `React.lazy()` and `<Suspense fallback={...}>`",
                    "Custom Hooks: Extracting reusable business logic (e.g. `useFetch`, `useLocalStorage`, `useDebounce`)"
                ],
                "codeSnippet": {
                    "lang": "javascript",
                    "title": "Custom Hook: useLocalStorage with Syncing",
                    "code": "import { useState, useEffect } from 'react';\n\nexport function useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(error);\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    try {\n      window.localStorage.setItem(key, JSON.stringify(storedValue));\n    } catch (error) {\n      console.error(error);\n    }\n  }, [key, storedValue]);\n\n  return [storedValue, setStoredValue];\n}"
                },
                "proTip": "Do not wrap every single function in `useCallback`! Memoization carries a memory overhead. Use `useCallback` only when passing functions down to `React.memo` child components or inside `useEffect` dependencies.",
                "miniProject": "Create a Custom Hooks Library containing: `useDebounce`, `useWindowSize`, `useOnlineStatus`, and `useCopyToClipboard`.",
                "interviewQuestions": [
                    {
                        "q": "What is the exact difference between `useMemo` and `useCallback`?",
                        "a": "`useMemo` caches the RESULT of executing a calculation function (returns a memoized value), whereas `useCallback` caches the FUNCTION DEFINITION itself (returns a memoized callback reference)."
                    },
                    {
                        "q": "How does `React.lazy` and `Suspense` optimize initial bundle load time?",
                        "a": "`React.lazy` enables dynamic importing, splitting large components into separate `.js` chunk files downloaded only when the user navigates to that route, drastically reducing initial page load times."
                    }
                ]
            },
            {
                "stage": 9,
                "title": "React Styling, UI Systems & Framer Motion",
                "difficulty": "Intermediate",
                "tag": "Design Systems",
                "summary": "Modern styling pipelines: Tailwind CSS, CSS Modules, Styled Components, and Framer Motion animations.",
                "topics": [
                    "Modern Styling Approaches: Tailwind CSS vs CSS Modules vs Styled Components",
                    "UI Component Libraries: shadcn/ui, Radix Primitives, Material UI (MUI)",
                    "Lucide React & React Icons integration",
                    "Framer Motion Animations: `motion.div`, `initial`, `animate`, `exit`, `whileHover`, `whileTap`",
                    "`AnimatePresence` for exit animations on dynamic lists and modals"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "Framer Motion Animated Interactive Card",
                    "code": "import { motion, AnimatePresence } from 'framer-motion';\n\nfunction AnimatedFeatureCard({ title, desc, icon }) {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 30 }}\n      animate={{ opacity: 1, y: 0 }}\n      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}\n      whileTap={{ scale: 0.98 }}\n      transition={{ type: 'spring', stiffness: 300, damping: 20 }}\n      className=\"p-6 rounded-2xl bg-slate-800 border border-slate-700 cursor-pointer\"\n    >\n      <div className=\"text-3xl text-emerald-400 mb-3\">{icon}</div>\n      <h3 className=\"text-xl font-bold text-white\">{title}</h3>\n      <p className=\"text-slate-400 text-sm mt-2\">{desc}</p>\n    </motion.div>\n  );\n}"
                },
                "proTip": "Use Tailwind CSS + `shadcn/ui` for high-speed placement project builds. It gives you 100% accessible, fully copy-pasteable accessible components without heavy node_modules runtime overhead.",
                "miniProject": "Design a SaaS Pricing Page with Monthly/Yearly toggle animations, hover scaling cards, and interactive FAQ accordions.",
                "interviewQuestions": [
                    {
                        "q": "Why is Tailwind CSS favored over traditional CSS in React teams?",
                        "a": "Tailwind CSS enforces design system consistency via predefined utility classes, eliminates dead CSS bundles through Purge/JIT compilation, and removes the need to invent hundreds of arbitrary class names."
                    }
                ]
            },
            {
                "stage": 10,
                "title": "Next.js 14+ & Full-Stack React Architecture",
                "difficulty": "Advanced",
                "tag": "Full-Stack React",
                "summary": "Step into production React: Next.js App Router, React Server Components (RSC), SSR, SSG, and Server Actions.",
                "topics": [
                    "Client-Side Rendering (CSR) vs Server-Side Rendering (SSR) vs Static Site Generation (SSG)",
                    "Next.js 14+ App Router: Folder-based routing (`page.js`, `layout.js`, `loading.js`, `error.js`)",
                    "React Server Components (RSC) vs Client Components (`'use client'`)",
                    "Data Fetching: `fetch()` with caching tags (`cache: 'force-cache'`, `revalidate: 60`)",
                    "Server Actions: Directly mutating database models from form submissions without REST controllers"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "Next.js 14 App Router Server Component Fetching",
                    "code": "// app/courses/page.js - Next.js 14 Server Component (Runs on Server)\nexport const revalidate = 3600; // Incremental Static Regeneration (ISR) every 1 hour\n\nasync function getCourses() {\n  const res = await fetch('https://api.example.com/courses', { next: { tags: ['courses'] } });\n  if (!res.ok) throw new Error('Failed to fetch courses');\n  return res.json();\n}\n\nexport default async function CoursesPage() {\n  const courses = await getCourses();\n\n  return (\n    <main className=\"container mx-auto py-10\">\n      <h1 className=\"text-3xl font-bold\">Featured Placement Courses</h1>\n      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6 mt-6\">\n        {courses.map(c => (\n          <div key={c.id} className=\"card\">\n            <h3>{c.title}</h3>\n            <p>{c.instructor}</p>\n          </div>\n        ))}\n      </div>\n    </main>\n  );\n}"
                },
                "proTip": "In Next.js 14+, components are Server Components by default! Only add `'use client'` at the top of the file when you need hooks (`useState`, `useEffect`) or browser event listeners (`onClick`).",
                "miniProject": "Build a Full-Stack Placement Blog with Next.js 14, App Router, Markdown rendering, and Server Actions for submitting comments.",
                "interviewQuestions": [
                    {
                        "q": "What is the key advantage of React Server Components (RSC)?",
                        "a": "RSCs execute solely on the server and send zero JavaScript to the client bundle. This results in faster page loads, smaller bundle sizes, direct backend/database access without creating REST endpoints, and superior SEO."
                    },
                    {
                        "q": "What is the difference between SSR and SSG?",
                        "a": "SSG (Static Site Generation) pre-renders HTML pages once at build time and serves them instantly via CDN. SSR (Server-Side Rendering) renders HTML dynamically on every incoming user request."
                    }
                ]
            },
            {
                "stage": 11,
                "title": "Capstone Placement Projects to Put on Your Resume",
                "difficulty": "Mastery",
                "tag": "Portfolio Projects",
                "summary": "4 production-grade resume projects designed to impress technical interviewers and pass recruiter screenings.",
                "topics": [
                    "Project 1 (Beginner): Multi-Functional Task & Notes Organizer with LocalStorage, Search & Categories",
                    "Project 2 (Intermediate): Interactive Crypto & Stock Analytics Dashboard with Recharts & CoinGecko API",
                    "Project 3 (Advanced): Full-Stack E-Commerce Store with Zustand, Stripe Checkout & Supabase Auth",
                    "Project 4 (Production): Real-Time Collaborative Whiteboard / Placement Quiz Platform with WebSockets & Next.js 14"
                ],
                "codeSnippet": {
                    "lang": "markdown",
                    "title": "Resume Project Description Blueprint",
                    "code": "### PlacementPrep - Interactive AI-Powered Learning Hub\n- Built a high-performance Single Page Application using React 18, Tailwind CSS, and Vite, achieving a 98+ Google Lighthouse score.\n- Engineered custom state management using Zustand and IndexedDB for zero-latency offline practice and real-time progress persistence.\n- Integrated CodeRunner compilation engine supporting 4 languages (Python, Java, C, C++) with instant testcase evaluation.\n- Deployed on Vercel with automated CI/CD pipeline, SSL encryption, and PWA capabilities."
                },
                "proTip": "Deploy every project live on Vercel or Netlify and include both the Live Demo Link and GitHub Repository link on your resume!",
                "miniProject": "Package and deploy all 4 projects with comprehensive README.md documentation and architecture diagrams.",
                "interviewQuestions": [
                    {
                        "q": "How do you optimize a React app for production deployment?",
                        "a": "Key optimizations: 1) Code splitting using `React.lazy()` and route-level suspense, 2) Optimizing images with modern WebP formats and lazy loading, 3) Memoizing expensive components with `React.memo` and `useMemo`, 4) Tree-shaking unused dependencies, 5) Enabling Gzip/Brotli compression on the CDN."
                    }
                ]
            },
            {
                "stage": 12,
                "title": "Top React Interview Questions & FAQs",
                "difficulty": "Mastery",
                "tag": "Interview Prep",
                "summary": "Master the 10 most frequently asked React placement questions with clear, expert responses.",
                "topics": [
                    "Q1: What are Pure Components and how does `React.memo` achieve purity?",
                    "Q2: How does React batch state updates in React 18 (Automatic Batching)?",
                    "Q3: What is the significance of the `key` prop in lists and why should you avoid array index as keys?",
                    "Q4: Explain the difference between `useLayoutEffect` and `useEffect`.",
                    "Q5: How do React Error Boundaries work and how do you catch rendering errors?"
                ],
                "codeSnippet": {
                    "lang": "jsx",
                    "title": "React Error Boundary Component Pattern",
                    "code": "import React from 'react';\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Error caught by boundary:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div className=\"p-8 text-center bg-rose-950/40 border border-rose-800 rounded-2xl\">\n          <h2 className=\"text-2xl font-bold text-rose-400\">Something went wrong</h2>\n          <p className=\"text-slate-300 mt-2\">Our team has been notified. Please refresh the page.</p>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}\n\nexport default ErrorBoundary;"
                },
                "proTip": "When interviewers ask about `key` props, always mention: Using index as key causes UI bugs during list re-ordering, filtering, or deletion because React re-uses the wrong component state!",
                "miniProject": "Conduct a mock technical interview drill answering all 12 stages without referring to notes.",
                "interviewQuestions": [
                    {
                        "q": "Why shouldn't you use array index as the `key` prop in React lists?",
                        "a": "If the list is re-ordered, filtered, or items are inserted at the beginning, the item indices shift. React uses keys to match previous Virtual DOM nodes with new ones; shifting indices causes React to confuse element identity, resulting in corrupted input state, incorrect animations, and wasted re-renders."
                    },
                    {
                        "q": "What is Automatic Batching in React 18?",
                        "a": "In React 18, React automatically batches state updates inside promises, timeouts, native event handlers, and fetch callbacks into a single re-render, whereas previous React versions only batched inside React event handlers."
                    }
                ]
            }
        ]
    },
    "dsa_master": {
        "id": "dsa_master",
        "title": "Data Structures & Algorithms (DSA) Placement Roadmap",
        "badge": "Top Product & Placement Track",
        "icon": "fa-solid fa-code-merge",
        "color": "#10B981",
        "overview": {
            "what": "Data Structures and Algorithms (DSA) form the core backbone of computer science problem solving, critical thinking, and technical interview screening at top tech companies.",
            "why": "DSA is the #1 selection round for Google, Amazon, Microsoft, TCS Digital, Infosys SP, and Cognizant. Mastering patterns like Two Pointers, Sliding Window, Graphs, and DP guarantees placement clearance.",
            "salary": "₹8 LPA – ₹45 LPA (Product & High-Paying Services Roles)",
            "prerequisites": [
                "Any one programming language (Python, Java, C++, or C)",
                "Basic mathematical concepts (Combinatorics, Prime numbers, Logarithms)",
                "Understanding Big-O Time & Space Complexity notations"
            ]
        },
        "stages": [
            {
                "stage": 1,
                "title": "Asymptotic Analysis & Math Essentials",
                "difficulty": "Beginner",
                "tag": "Foundations",
                "summary": "Master Big-O, Big-Theta, Big-Omega, Space Complexity, and Number Theory basics.",
                "topics": [
                    "Time Complexity: Worst, Average, and Best cases (O(1), O(log N), O(N), O(N log N), O(N^2), O(2^N))",
                    "Space Complexity: In-place vs Auxiliary memory allocation, Call stack space in recursion",
                    "Prime Numbers: Sieve of Eratosthenes ($O(N \\log \\log N)$), Primality testing ($O(\\sqrt{N})$)",
                    "GCD & LCM: Euclidean Algorithm ($O(\\log(\\min(a,b)))$)",
                    "Modulo Arithmetic: $(A + B) \\% M$, $(A \\times B) \\% M$, Modular Inverse"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Sieve of Eratosthenes & Euclidean GCD",
                    "code": "def sieve(n):\n    primes = [True] * (n + 1)\n    primes[0] = primes[1] = False\n    for p in range(2, int(n**0.5) + 1):\n        if primes[p]:\n            for i in range(p * p, n + 1, p):\n                primes[i] = False\n    return [i for i, is_p in enumerate(primes) if is_p]\n\ndef gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a"
                },
                "proTip": "When analyzing time complexity of nested loops, check if the inner loop depends on the outer variable `j = i` (Sum of 1..N = $O(N^2)$) or if step doubles `i *= 2` ($O(\\log N)$).",
                "miniProject": "Solve GCD, Sieve, and Prime Factorization problems on the Coding Workstation.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between Time Complexity and Execution Time?",
                        "a": "Execution time depends on CPU hardware, compiler optimizations, and background tasks. Time Complexity is a machine-independent mathematical model measuring how operations scale as input size $N$ grows toward infinity."
                    }
                ]
            },
            {
                "stage": 2,
                "title": "Arrays & Two Pointers Mastery",
                "difficulty": "Beginner",
                "tag": "Linear Structures",
                "summary": "Master array operations, in-place modifications, Kadane's algorithm, and opposite/same direction two pointers.",
                "topics": [
                    "Array Memory Layout: Contiguous memory, $O(1)$ random indexing, $O(N)$ insertion/deletion",
                    "Kadane's Algorithm for Maximum Subarray Sum ($O(N)$ time, $O(1)$ space)",
                    "Opposite Direction Two Pointers: Two Sum (Sorted), Valid Palindrome, Container With Most Water",
                    "Same Direction Fast & Slow Pointers: Remove Duplicates, Move Zeroes, Dutch National Flag (0,1,2 sort)",
                    "Prefix Sum & Difference Arrays: Range Sum Query ($O(1)$ queries)"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Kadane's Algorithm & Container With Most Water",
                    "code": "# 1. Kadane's Max Subarray Sum\ndef max_sub_array(nums):\n    max_sum = current_sum = nums[0]\n    for x in nums[1:]:\n        current_sum = max(x, current_sum + x)\n        max_sum = max(max_sum, current_sum)\n    return max_sum\n\n# 2. Container With Most Water (Two Pointers)\ndef max_area(height):\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        w = right - left\n        h = min(height[left], height[right])\n        max_water = max(max_water, w * h)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water"
                },
                "proTip": "Whenever an array is SORTED, think Two Pointers or Binary Search immediately!",
                "miniProject": "Implement Two Sum, Container With Most Water, and 3Sum on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "Why does Kadane's algorithm reset `current_sum` when it becomes negative?",
                        "a": "A negative running sum will only decrease the sum of any subsequent subarray. Hence, starting a fresh subarray from the current element gives a strictly greater potential sum."
                    }
                ]
            },
            {
                "stage": 3,
                "title": "Sliding Window & Hash Maps",
                "difficulty": "Intermediate",
                "tag": "Patterns",
                "summary": "Master fixed & variable size sliding windows and Hash Map frequency tracking.",
                "topics": [
                    "Fixed Window Size $K$: Maximum Sum Subarray of size K, First Negative in Window",
                    "Dynamic/Variable Window: Longest Substring Without Repeating Characters, Minimum Window Substring",
                    "Hash Map & Hash Set internal mechanics: Hash collisions, Chaining vs Open Addressing",
                    "Subarray Sum Equals $K$ using Prefix Sums + Hash Map ($O(N)$)",
                    "Anagram and Permutation String Matching"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Longest Substring Without Repeating Characters",
                    "code": "def length_of_longest_substring(s):\n    seen = {}\n    left = 0\n    max_len = 0\n    for right, char in enumerate(s):\n        if char in seen and seen[char] >= left:\n            left = seen[char] + 1\n        seen[char] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len"
                },
                "proTip": "If problem asks for 'Subarray with sum equal to K' with negative numbers, Sliding Window fails! Use Prefix Sum + Hash Map instead.",
                "miniProject": "Solve Smallest Window Containing All Characters and Longest Repeating Character Replacement.",
                "interviewQuestions": [
                    {
                        "q": "What is the average and worst-case lookup time for a Hash Map?",
                        "a": "Average case is $O(1)$ when keys are evenly distributed. Worst case is $O(N)$ when all keys hash to the same bucket (severe collisions), though modern engines mitigate this with red-black trees in buckets ($O(\\log N)$)."
                    }
                ]
            },
            {
                "stage": 4,
                "title": "Binary Search & Search Space Reduction",
                "difficulty": "Intermediate",
                "tag": "Searching",
                "summary": "Master classical binary search, rotated sorted arrays, and Binary Search on Answer.",
                "topics": [
                    "Classic Binary Search: Lower bound, Upper bound, Exact match ($O(\\log N)$)",
                    "Search in Rotated Sorted Array & Find Minimum in Rotated Array",
                    "Binary Search on Answer Space: Allocate Minimum Pages, Aggressive Cows, Koko Eating Bananas",
                    "Peak Element finding in $O(\\log N)$",
                    "Matrix Search: Search in 2D sorted grid"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Binary Search on Answer (Koko Eating Bananas)",
                    "code": "def min_eating_speed(piles, h):\n    low, high = 1, max(piles)\n    ans = high\n    while low <= high:\n        mid = (low + high) // 2\n        # Total hours needed at speed 'mid'\n        hours = sum((p + mid - 1) // mid for p in piles)\n        if hours <= h:\n            ans = mid\n            high = mid - 1 # Try slower speed\n        else:\n            low = mid + 1  # Must eat faster\n    return ans"
                },
                "proTip": "To avoid integer overflow when calculating mid in languages like C++/Java, always write `int mid = low + (high - low) / 2;` instead of `(low + high) / 2`.",
                "miniProject": "Solve Search in Rotated Sorted Array and Minimum in Rotated Array on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "What condition must hold to apply Binary Search on Answer?",
                        "a": "The search space must be monotonic (e.g. if speed $K$ works, all speeds $> K$ also work; if $K$ fails, all speeds $< K$ fail)."
                    }
                ]
            },
            {
                "stage": 5,
                "title": "Linked Lists, Stacks & Queues",
                "difficulty": "Intermediate",
                "tag": "Linear Collections",
                "summary": "Master single/doubly linked lists, Floyd's Cycle Detection, Monotonic Stacks, and LRU Cache.",
                "topics": [
                    "Linked List Operations: In-place reversal ($O(N)$), Middle of list, Merge two sorted lists",
                    "Floyd's Tortoise and Hare Cycle Detection & Finding cycle entry node",
                    "Monotonic Stack: Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram",
                    "Queue & Deque: Sliding Window Maximum, Circular Queue",
                    "Design LRU Cache using Doubly Linked List + Hash Map ($O(1)$ get & put)"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Next Greater Element (Monotonic Stack)",
                    "code": "def next_greater_elements(nums):\n    res = [-1] * len(nums)\n    stack = [] # Monotonic decreasing stack storing indices\n    for i, num in enumerate(nums):\n        while stack and nums[stack[-1]] < num:\n            idx = stack.pop()\n            res[idx] = num\n        stack.append(i)\n    return res"
                },
                "proTip": "Whenever a problem asks for 'Next Greater', 'Previous Smaller', or 'Histogram Area', Monotonic Stack is the exact pattern!",
                "miniProject": "Implement LRU Cache and Valid Parentheses on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "How does Floyd's Cycle Detection find the loop starting node?",
                        "a": "Once slow and fast pointers meet inside the loop, reset slow to the list head while keeping fast at the meeting point. Move both one step at a time; the node where they meet again is the exact start of the loop."
                    }
                ]
            },
            {
                "stage": 6,
                "title": "Binary Trees, BST & Tree Traversals",
                "difficulty": "Intermediate",
                "tag": "Hierarchical Data",
                "summary": "Master BFS level order, recursive DFS traversals, Binary Search Trees, and Lowest Common Ancestor.",
                "topics": [
                    "Tree DFS: Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root)",
                    "Tree BFS: Level Order Traversal using Queues, Zig-zag traversal",
                    "Properties: Height, Diameter, Symmetric/Mirror tree, Maximum Path Sum",
                    "Binary Search Tree (BST): Validation ($O(N)$), Kth Smallest in BST, LCA in BST",
                    "Serialize and Deserialize Binary Tree"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Lowest Common Ancestor (LCA) in Binary Tree",
                    "code": "def lowest_common_ancestor(root, p, q):\n    if not root or root == p or root == q:\n        return root\n    left = lowest_common_ancestor(root.left, p, q)\n    right = lowest_common_ancestor(root.right, p, q)\n    if left and right:\n        return root # p is in left subtree, q is in right\n    return left if left else right"
                },
                "proTip": "Remember: The Inorder traversal of a valid Binary Search Tree (BST) is ALWAYS sorted in strictly ascending order!",
                "miniProject": "Solve Height of Tree, Diameter, and Level Order Traversal on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between a Full, Complete, and Balanced Binary Tree?",
                        "a": "Full: Every node has 0 or 2 children. Complete: All levels filled except possibly the last, which is filled from left to right. Balanced: For every node, height difference of left and right subtrees is $\\le 1$."
                    }
                ]
            },
            {
                "stage": 7,
                "title": "Heaps & Priority Queues",
                "difficulty": "Intermediate",
                "tag": "Priority Structures",
                "summary": "Master Min-Heap, Max-Heap, Top K elements, and continuous median streaming.",
                "topics": [
                    "Heap Property: Complete Binary Tree in array representation, $Parent = (i-1)//2$",
                    "Heap Operations: Heapify ($O(N)$), Insert ($O(\\log N)$), Extract Min/Max ($O(\\log N)$)",
                    "Top K Frequent Elements & Kth Largest Element using Min-Heap ($O(N \\log K)$)",
                    "Sort Nearly Sorted (K-Sorted) Array",
                    "Find Median from Data Stream using Two Heaps (Max-Heap + Min-Heap)"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Find Median in a Stream (Two Heaps)",
                    "code": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap (invert numbers)\n        self.large = [] # Min-heap\n\n    def add_num(self, num):\n        heapq.heappush(self.small, -num)\n        # Balance: small max must <= large min\n        if self.small and self.large and (-self.small[0] > self.large[0]):\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        # Maintain size: small has at most 1 extra element\n        if len(self.small) > len(self.large) + 1:\n            heapq.heappush(self.large, -heapq.heappop(self.small))\n        elif len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n\n    def find_median(self):\n        if len(self.small) > len(self.large):\n            return -self.small[0]\n        return (-self.small[0] + self.large[0]) / 2.0"
                },
                "proTip": "To find 'K Largest Elements', use a MIN-HEAP of size K! To find 'K Smallest Elements', use a MAX-HEAP of size K!",
                "miniProject": "Implement K Largest Elements and Sort K-Sorted Array on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "Why is building a heap from an array $O(N)$ and not $O(N \\log N)$?",
                        "a": "Nodes near the bottom (leaves) require very few swap steps ($O(1)$) and make up $N/2$ nodes. Only the single root node can travel height $\\log N$. The mathematical summation converges to $O(N)$."
                    }
                ]
            },
            {
                "stage": 8,
                "title": "Recursion & Backtracking",
                "difficulty": "Intermediate",
                "tag": "Search Exploration",
                "summary": "Master recursion call stacks, subset generation, permutations, N-Queens, and Sudoku Solver.",
                "topics": [
                    "Recursion Anatomy: Base case, Work, Recursive call, Stack memory",
                    "Subsets & Power Set Generation: Pick vs Don't Pick pattern",
                    "Combination Sum & Permutations (Handling duplicates with sorting)",
                    "Grid Backtracking: Word Search, Rat in a Maze",
                    "N-Queens Problem & Sudoku Solver"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Combination Sum with Backtracking",
                    "code": "def combination_sum(candidates, target):\n    res = []\n    def backtrack(start, remain, path):\n        if remain == 0:\n            res.append(list(path))\n            return\n        if remain < 0:\n            return\n        for i in range(start, len(candidates)):\n            path.append(candidates[i])\n            backtrack(i, remain - candidates[i], path) # Reuse allowed\n            path.pop() # Backtrack\n    backtrack(0, target, [])\n    return res"
                },
                "proTip": "In Backtracking, always make sure to UNDO your modification (`path.pop()`, `visited.remove()`) after the recursive call finishes!",
                "miniProject": "Solve Combination Sum and Word Break on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between Branch and Bound vs Backtracking?",
                        "a": "Backtracking uses DFS tree exploration to find all possible solutions. Branch and Bound uses BFS/priority queues to find the single optimal solution while pruning sub-optimal branches."
                    }
                ]
            },
            {
                "stage": 9,
                "title": "Graph Algorithms & Traversals",
                "difficulty": "Advanced",
                "tag": "Non-Linear Networks",
                "summary": "Master BFS, DFS, Flood Fill, Topological Sort, Dijkstra's algorithm, and Disjoint Set Union (DSU).",
                "topics": [
                    "Graph Representation: Adjacency List vs Adjacency Matrix",
                    "BFS & DFS: Connected components, Cycle detection (Directed & Undirected)",
                    "Matrix Grids as Graphs: Number of Islands, Rotting Oranges (Multi-source BFS)",
                    "Topological Sort: Kahn's BFS Algorithm & DFS Post-Order (Alien Dictionary, Course Schedule)",
                    "Shortest Path Algorithms: Dijkstra's ($O((V+E)\\log V)$), Bellman-Ford, Floyd-Warshall",
                    "Disjoint Set Union (DSU / Kruskal's MST): Union by Rank & Path Compression"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Number of Islands (Flood Fill DFS)",
                    "code": "def num_islands(grid):\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    \n    def dfs(r, c):\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':\n            return\n        grid[r][c] = '0' # Sink island (mark visited)\n        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)\n\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count"
                },
                "proTip": "Shortest path in UNWEIGHTED graph $\\to$ BFS! Shortest path in WEIGHTED positive graph $\\to$ Dijkstra with Priority Queue!",
                "miniProject": "Solve Number of Islands, Clone Graph, and Word Ladder on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "When does Dijkstra's Algorithm fail?",
                        "a": "Dijkstra fails on graphs with negative edge weights because it greedily assumes once a node is visited with minimum distance, no shorter path can be found. Use Bellman-Ford for negative weights."
                    }
                ]
            },
            {
                "stage": 10,
                "title": "Dynamic Programming (DP) Mastery",
                "difficulty": "Advanced",
                "tag": "Optimization",
                "summary": "Master 1D DP, 2D Grid DP, 0/1 Knapsack, Longest Increasing Subsequence, and Matrix Chain Multiplication.",
                "topics": [
                    "DP Properties: Overlapping Subproblems & Optimal Substructure (Memoization vs Tabulation)",
                    "1D DP Patterns: Climbing Stairs, House Robber (Stickler Thief), Coin Change",
                    "2D Grids: Unique Paths, Minimum Path Sum, Edit Distance",
                    "0/1 Knapsack & Subset Sum: Partition Equal Subset Sum, Target Sum",
                    "Longest Common Subsequence (LCS) & Longest Increasing Subsequence (LIS - $O(N \\log N)$ with Binary Search)",
                    "Matrix Chain Multiplication (MCM) & Partition DP"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Coin Change (Min Coins) & Edit Distance",
                    "code": "# 1. Coin Change (Minimum Coins)\ndef coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1\n\n# 2. Longest Increasing Subsequence (LIS in O(N log N))\nimport bisect\ndef length_of_lis(nums):\n    tails = []\n    for x in nums:\n        idx = bisect.bisect_left(tails, x)\n        if idx == len(tails):\n            tails.append(x)\n        else:\n            tails[idx] = x\n    return len(tails)"
                },
                "proTip": "To identify DP: Look for questions asking for 'Maximum/Minimum', 'Total number of ways', or 'Is it possible to partition'. If choices repeat, it is DP!",
                "miniProject": "Solve Coin Change, LIS, and Edit Distance on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between Top-Down Memoization and Bottom-Up Tabulation?",
                        "a": "Top-Down starts from the target state, uses recursion to break it into subproblems, and caches returns in a table (has call stack overhead). Bottom-Up fills the DP table iteratively starting from base cases (zero recursion overhead)."
                    }
                ]
            }
        ]
    },
    "placement_30days": {
        "id": "placement_30days",
        "title": "Complete 30-Day Campus Placement Sprint",
        "badge": "All-in-One Placement Ready",
        "icon": "fa-solid fa-graduation-cap",
        "color": "#F59E0B",
        "overview": {
            "what": "A structured, intensive 30-day curriculum engineered to conquer all rounds of campus recruitment: Quantitative Aptitude, Logical Reasoning, Verbal Ability, Coding Rounds, and Technical/HR Interviews.",
            "why": "MNCs like TCS, Infosys, Wipro, Cognizant, and Accenture use strict online aptitude cutoffs (Round 1) before coding and technical interviews. Daily structured practice ensures you clear every round effortlessly.",
            "salary": "₹4.5 LPA – ₹14 LPA (Campus Recruitment)",
            "prerequisites": [
                "Basic high school arithmetic & algebra",
                "Familiarity with English grammar rules",
                "At least one coding language for technical assessments"
            ]
        },
        "stages": [
            {
                "stage": 1,
                "title": "Week 1: Quantitative Foundations & Basic Coding",
                "difficulty": "Beginner",
                "tag": "Week 01",
                "summary": "Master core arithmetic shortcuts, percentage calculations, number systems, and basic Python/Java syntax.",
                "topics": [
                    "Quant: Number Systems, Divisibility Rules, HCF & LCM shortcuts, Percentages, Profit & Loss",
                    "Reasoning: Number Series, Letter Series (EJOTY method), Coding-Decoding, Direction Sense",
                    "Verbal: Subject-Verb Agreement, 12 English Tenses, Parts of Speech",
                    "Coding: Input parsing, Conditional statements, Loops, Prime check, Fibonacci sequence"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Placement Aptitude Mental Math Trick",
                    "code": "# Fast Percentage Calculations\n# X% of Y = Y% of X (e.g. 16% of 50 = 50% of 16 = 8)\ndef fast_percent(p, total):\n    return (p * total) / 100\n\n# Profit & Loss SP/CP Shortcut\n# SP = CP * (100 + Gain%) / 100\ndef calc_sp(cp, profit_percent):\n    return cp * (100 + profit_percent) / 100"
                },
                "proTip": "Memorize squares up to 30, cubes up to 15, and fraction-to-percentage conversions (1/2=50%, 1/3=33.33%, 1/7=14.28%) for 3x speed!",
                "miniProject": "Practice 30 questions on Numbers, Percentages, and Series on `practice.html`.",
                "interviewQuestions": [
                    {
                        "q": "What is the unit digit of $7^{95} - 3^{58}$?",
                        "a": "Cyclicity of 7 is 4: $95 \\% 4 = 3 \\to 7^3 = 343 \\to$ unit digit is 3. Cyclicity of 3 is 4: $58 \\% 4 = 2 \\to 3^2 = 9 \\to$ unit digit is 9. Unit digit = $(13 - 9) = 4$."
                    }
                ]
            },
            {
                "stage": 2,
                "title": "Week 2: Commercial Math, Puzzles & Two Pointers",
                "difficulty": "Intermediate",
                "tag": "Week 02",
                "summary": "Tackle Time & Work, Speed-Distance, Blood Relations, Seating Arrangements, and Array algorithms.",
                "topics": [
                    "Quant: Time & Work (LCM Method), Pipes & Cisterns, Speed-Time-Distance, Relative Speed (Trains, Boats)",
                    "Reasoning: Blood Relations (Family Tree representation), Linear & Circular Seating Arrangement puzzles",
                    "Verbal: Reading Comprehension (Questions-First technique), Para Jumbles (Mandatory Pairs)",
                    "Coding: Two Pointers (Two Sum, Valid Palindrome), Kadane's Max Subarray Sum, String Reversal"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Time & Work LCM Method Formula",
                    "code": "# A takes 10 days, B takes 15 days\n# LCM(10, 15) = 30 total work units\n# A's efficiency = 3 units/day, B's efficiency = 2 units/day\n# Combined time = 30 / (3 + 2) = 6 days\ndef time_and_work(days_a, days_b):\n    from math import gcd\n    lcm = (days_a * days_b) // gcd(days_a, days_b)\n    eff_a = lcm // days_a\n    eff_b = lcm // days_b\n    return lcm / (eff_a + eff_b)"
                },
                "proTip": "Never use the fractional method $\\frac{1}{A} + \\frac{1}{B}$ for Time & Work! Always use the LCM Unit Method for instant mental answers.",
                "miniProject": "Complete 30 Time & Work questions and 5 Seating Arrangement puzzles on `practice.html`.",
                "interviewQuestions": [
                    {
                        "q": "How do you find the relative speed of two trains moving in opposite directions?",
                        "a": "When moving in opposite directions, relative speed is the SUM of their individual speeds ($S_1 + S_2$). When moving in the same direction, relative speed is the DIFFERENCE ($|S_1 - S_2|$)."
                    }
                ]
            },
            {
                "stage": 3,
                "title": "Week 3: Advanced Combinatorics & Data Structures",
                "difficulty": "Intermediate",
                "tag": "Week 03",
                "summary": "Master Permutations & Combinations, Probability, Syllogisms, Binary Search, and Linked Lists.",
                "topics": [
                    "Quant: Permutations ($^nP_r$), Combinations ($^nC_r$), Probability, Simple & Compound Interest",
                    "Reasoning: Syllogisms (Venn diagram rules), Statement & Assumptions, Data Sufficiency",
                    "Verbal: Sentence Correction, Idioms, Common grammatical error spotting",
                    "Coding: Binary Search, Linked List Loop Detection (Floyd's), Stacks & Queues"
                ],
                "codeSnippet": {
                    "lang": "python",
                    "title": "Permutation & Combination Fast Calc",
                    "code": "import math\ndef nCr(n, r):\n    if r < 0 or r > n: return 0\n    return math.comb(n, r)\n\ndef nPr(n, r):\n    if r < 0 or r > n: return 0\n    return math.perm(n, r)"
                },
                "proTip": "In Syllogisms: A conclusion is valid ONLY if it holds true in EVERY possible Venn diagram!",
                "miniProject": "Solve Probability questions on `practice.html` and Floyd's Cycle on `coding.html`.",
                "interviewQuestions": [
                    {
                        "q": "What is the difference between Simple Interest (SI) and Compound Interest (CI) for 2 years?",
                        "a": "Difference for 2 years is $D = P \\times \\left(\\frac{R}{100}\\right)^2$."
                    }
                ]
            },
            {
                "stage": 4,
                "title": "Week 4: Mock Tests, Company Patterns & HR Readiness",
                "difficulty": "Mastery",
                "tag": "Week 04",
                "summary": "Full-length 90-minute timed mock exams, TCS/Infosys company test patterns, resume audit, and HR prep.",
                "topics": [
                    "Company Test Patterns: TCS NQT, Infosys DSE/SP, Wipro Elite, Cognizant GenC, Accenture",
                    "Timed Mock Tests: Complete 3 Full-Length 90-min Mock Tests on `mocktest.html`",
                    "Technical Interview Core: OOPs, DBMS (SQL Joins, Normalization), OS (Processes, Threads, Deadlocks)",
                    "HR Interview Mastery: 'Tell me about yourself', Behavioral STAR method (Situation, Task, Action, Result)"
                ],
                "codeSnippet": {
                    "lang": "markdown",
                    "title": "STAR Method Framework for HR Interviews",
                    "code": "- **S (Situation):** Set the scene (e.g. During our final year project hackathon...)\n- **T (Task):** Describe the challenge/goal (We had 24 hours to build an offline LMS app...)\n- **A (Action):** What YOU specifically did (I implemented Zustand state and IndexedDB caching...)\n- **R (Result):** Quantifiable outcome (Achieved 100% offline functionality and won 1st prize out of 50 teams)."
                },
                "proTip": "Never give a one-word answer in HR interviews! Always structure responses using the STAR method to demonstrate leadership and problem solving.",
                "miniProject": "Complete 3 Full Mock Tests on `mocktest.html` and review all bookmarked error questions.",
                "interviewQuestions": [
                    {
                        "q": "Why should we hire you over other candidates?",
                        "a": "Highlight your strong alignment between technical skills (Full-Stack/DSA), proven problem-solving track record (Aptitude & Coding projects), adaptability, and consistent commitment to learning."
                    }
                ]
            }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.GFG_ROADMAPS_DATABASE = GFG_ROADMAPS_DATABASE;
}
