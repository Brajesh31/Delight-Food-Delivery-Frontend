# Troubleshooting

## npm ci fails
- Confirm Node.js and npm versions.
- Use the committed package-lock.json.
- Run npm ci from the repository root.
- Do not mix package managers or delete the lockfile to work around an unexplained failure.
- Inspect the first meaningful npm error, not only the final summary.

## Development server does not start
Run `npm start` from the directory containing package.json. If port 3000 is occupied, stop the conflicting process or accept the alternate port prompt.

## Blank page
- Inspect the browser console for module/runtime exceptions.
- Confirm the root element exists in public/index.html.
- Confirm imports use paths that match exact file casing.
- Check that the app is wrapped in BrowserRouter and StoreContextProvider.

## Cart is empty after refresh
This is expected in the current implementation. Cart state is held in React memory and is not persisted.

## Cart totals look incorrect
Check item IDs against the local food_list, quantity values in cartItems, and the sample prices. The current delivery fee is a fixed value. These are not server-authoritative commercial calculations.

## Login does not create an account
The login/signup modal is a visual frontend component. No authentication API is configured in this repository.

## Checkout does not place an order
The delivery screen has no submit handler, order API, or payment integration. It is a UI demonstration only.

## Nested route returns 404 after deployment
Configure the static host to serve index.html for BrowserRouter routes such as /cart and /orders. Verify that real static asset requests still return their files.

## Build fails
Run `npm run build` and inspect the earliest compiler error. Verify imports, CSS Module paths, and package installation before changing dependencies.
