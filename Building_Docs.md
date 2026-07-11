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

## Session 4 — Backend Setup & MongoDB Connection

### What I built
- Created MongoDB Atlas account, free cluster, database user,
  and network access rules
- Built the backend folder structure (Express + Mongoose)
- Connected the backend server to MongoDB Atlas successfully
- Created the User model (Mongoose schema) — not finished yet,
  password hashing still needs to be added

### Key concepts learned
- **Express server** — a Node.js app that listens for requests
  on a specific port (5000) and responds to them
- **Mongoose** — a wrapper around MongoDB that lets you define
  structured "schemas" for your data instead of storing anything
  freeform
- **.env files** — store secret values (like database passwords)
  outside of your actual code, loaded via `dotenv`
- **CORS** — without `cors()`, browsers block requests between
  different origins (frontend port vs backend port)
- **async/await + try/catch** — used for anything that takes
  time and can fail, like connecting to a database over network
- **Mongoose Schema fields** — `required`, `unique`, `trim`,
  `lowercase` — validation rules enforced at the database level,
  not just the frontend
- **timestamps: true** — automatically tracks when a record was
  created/updated, no manual work needed

### A real mistake I made (and fixed)
- Accidentally committed `.env` to GitHub because `.gitignore`
  wasn't properly set up — it only contained one unrelated line
- Fixed by: resetting the exposed MongoDB password immediately,
  then rebuilding `.gitignore` correctly, then wiping and
  recreating Git history to remove all trace of the leak
- **Lesson**: always double check `.gitignore` content BEFORE
  the first commit of any new folder (like `backend/`), not after

### Still not done
- User model needs password hashing (bcrypt) before it's safe
  to use — plain text passwords must never be stored
- No actual API endpoints yet (signup/login don't work for real)

### Next up
- Add password hashing to the User model
- Build the signup API endpoint
- Build the login API endpoint with JWT
- Connect frontend forms to these real endpoints