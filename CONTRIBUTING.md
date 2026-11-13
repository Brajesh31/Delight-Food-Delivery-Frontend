# Contributing

Thank you for considering a contribution to Delight Food Delivery Frontend. This repository is a React frontend demonstration. Contributions should improve its correctness, usability, accessibility, maintainability, or documentation without claiming backend functionality that does not exist.

## Before you begin
- Read the README, this guide, and CODE_OF_CONDUCT.md.
- Check existing issues and pull requests.
- For larger changes, open an issue to discuss scope first.
- Do not submit real customer records, credentials, or private data.

## Development setup

```bash
git clone https://github.com/Brajesh31/Delight-Food-Delivery-Frontend.git
cd Delight-Food-Delivery-Frontend
npm ci
npm start
```

Run tests and build:

```bash
npm test -- --watchAll=false
npm run build
```

Use npm and the committed package-lock.json. Do not introduce a second package manager.

## Project organization
- Route pages belong under src/Pages/.
- Reusable components belong under src/components/.
- Shared cart state belongs under src/context/.
- Static catalogue data and imported assets belong under src/assets/.
- Use CSS Modules for component-specific styles where the existing structure supports them.

## Contribution expectations
- Prefer small, focused pull requests.
- Use semantic HTML and keyboard-operable controls.
- Add accessible labels and useful image alternatives.
- Keep state updates predictable and guard edge cases.
- Add tests for new behavior.
- Avoid unnecessary dependencies.
- Keep user-visible copy accurate.
- Update docs when behavior, data shape, setup, or deployment changes.

## Product and security boundaries
- Do not add real authentication or password collection without an explicitly designed backend.
- Do not put private keys or privileged credentials in React source or REACT_APP_ variables.
- Do not trust client-side prices or totals for a real order.
- Do not imply payment succeeded based only on browser state.
- Do not collect real delivery addresses or contact information in the current demo form.
- Do not add analytics or tracking without disclosure and appropriate consent.
- Do not add real customer data to fixtures, screenshots, or tests.

## Branch and pull request workflow
1. Create a branch from the latest main.
2. Make a focused change.
3. Add or update tests.
4. Run the test suite.
5. Run the production build.
6. Test affected routes and responsive layouts.
7. Review keyboard and screen-reader behavior.
8. Open a pull request using the repository template.

Suggested branch names: fix/cart-quantity-guard, feat/accessible-menu-controls, docs/api-contract.

## Pull request description
Include the motivation, implementation summary, affected routes/components, commands run and results, screenshots for UI changes, and known limitations. State clearly if a feature is a mock UI or requires a backend.

## Review
Changes may be requested when they introduce inaccessible interactions, unverified claims, unsafe data handling, or unrelated scope. Do not describe a frontend-only placeholder as a production checkout, account system, or delivery workflow.
