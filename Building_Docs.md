# Metrik — Learning Journal

Concepts I've learned while building this project, explained in my own understanding.

---

## Session 1 — Environment Setup
- Node.js version matters — old macOS can't run modern Node
- Git + SSH keys let me push code without typing a password every time
- .gitignore protects secrets (.env) and keeps node_modules out of GitHub

## Session 2 — React Basics + Landing Page
- A component is just a function that returns JSX
- Tailwind classes style elements directly in JSX — no separate CSS file needed
- `.map()` turns a list of data into repeated UI (used in Features, Pricing, Footer)
- Ternary (`condition ? A : B`) lets one component look different based on its data
- `hidden md:flex` = hidden on mobile, visible on screens 768px and wider