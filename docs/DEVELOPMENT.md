# Development Guide

## Prerequisites
- Node.js compatible with the repository's Create React App 5 dependency tree.
- npm.
- Git.

Use the committed npm lockfile. Do not switch to Yarn, pnpm, or Bun for this repository without an explicit project decision.

## Clone and install

```bash
git clone https://github.com/Brajesh31/Delight-Food-Delivery-Frontend.git
cd Delight-Food-Delivery-Frontend
npm ci
```

## Start the application

```bash
npm start
```

Open http://localhost:3000.

## Common commands

```bash
npm test -- --watchAll=false
npm run build
```

The interactive test watcher can be started with `npm test`. Avoid `npm run eject` unless there is a clear, documented need.

## Project conventions
- Keep route-level pages under `src/Pages/`.
- Keep reusable interface components under `src/components/`.
- Keep shared cart/catalogue state in `src/context/`.
- Keep local image imports and catalogue definitions in `src/assets/`.
- Prefer CSS Modules for component-specific styles.
- Use semantic HTML and accessible control names.
- Avoid adding dependencies for functionality already available in React or the browser.

## Change workflow
1. Create a focused branch.
2. Install from the lockfile using npm ci.
3. Run the app and reproduce the behavior before changing it.
4. Make a narrow change.
5. Add or update a test for behavior that can be verified locally.
6. Run the test suite and production build.
7. Check the affected routes at desktop and mobile sizes.
8. Open a pull request with screenshots for visible changes.

## Do not misrepresent the product
The current account and checkout screens are UI only. Do not describe them as real authentication or order placement. Do not use real customer information while testing the static form.
