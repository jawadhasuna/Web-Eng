# Web Engineering lab work – Jawad Hassan

All labs share **one Node.js project**: the tools (ESLint, Prettier, serve) are
installed once at the root, and each lab's web page lives in its own folder
inside `public/`.

## Folder structure

```
web/
├── public/                 ← everything the browser loads
│   ├── lab0/               ← practice page with button click events
│   ├── lab1/               ← Lab 01: index.html, script.js, styles.css
│   └── lab2/               ← Lab 02 … one folder per lab
├── tests/
│   └── lab1/               ← automated tests for each lab
├── package.json            ← shared scripts and dev dependencies
├── eslint.config.js        ← ESLint rules for all labs
└── .prettierrc             ← Prettier settings for all labs
```

## Running the labs

```bash
npm install        # once, after cloning
npm start          # serve public/ → open http://localhost:3000/lab1
node --test        # run the tests of every lab
npm run lint       # check JavaScript with ESLint
npm run format     # check formatting with Prettier
```

You can also right-click `public/labN/index.html` in VS Code and choose
**Open with Live Server**.

## Adding a new lab

1. Create `public/labN/` with that lab's `index.html`, `script.js` and `styles.css`.
2. Put any tests in `tests/labN/` (files ending in `.test.js`).
3. Run `npm run lint`, `npm run format` and `node --test`.
4. Commit and push:

```bash
git add .
git commit -m "Lab 0N: short description"
git push
```
