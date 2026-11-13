# Testing Guide

## Test stack

The repository uses the Create React App test runner, Jest, and React Testing Library. Test setup is imported from `src/setupTests.js`.

## Run tests

Interactive mode:

```bash
npm test
```

Single run:

```bash
npm test -- --watchAll=false
```

## Production build

```bash
npm run build
```

A successful build confirms that the current source compiles and assets can be bundled. It does not validate backend integration, payment processing, accessibility conformance, or production business workflows.

## Suggested coverage

### Routing and shell
- App renders under BrowserRouter and StoreContextProvider.
- Home, cart, and orders routes render their expected page headings/content.
- Navigation links lead to the expected routes or in-page anchors.

### Catalogue and filtering
- Each menu category can be selected.
- Selecting the active category returns to All.
- Only items from the selected category are rendered.

### Cart
- Adding an item creates quantity one.
- Adding the same item increments quantity.
- Removing an item decrements quantity.
- Subtotal reflects quantities and local sample prices.
- Empty cart totals do not add a delivery fee in the displayed total.

### Modal
- Navbar opens the modal.
- Close control dismisses it.
- Sign Up and Login labels can be switched.
- Body scroll is restored after modal unmount.

### Checkout presentation
- Delivery fields render.
- No test should imply that submitting the current screen creates a real order or payment.

## Manual browser checklist
- [ ] Home, cart, and orders routes load.
- [ ] Refreshing nested routes works on the deployed host.
- [ ] Category filtering works.
- [ ] Add/remove cart interactions update quantities.
- [ ] Cart totals match the sample catalogue.
- [ ] Modal opens, switches mode, and closes.
- [ ] Mobile layout has no unexpected horizontal overflow.
- [ ] Keyboard focus is visible and controls are operable.
- [ ] No real personal data is entered into the demo delivery form.

## Test quality
Prefer tests that assert observable behavior rather than implementation details. Keep test data deterministic. Mock external services if they are introduced, and never make the standard test suite depend on a production API.
