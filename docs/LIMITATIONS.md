# Known Limitations

The following limitations are visible from the current frontend source. They are documented, not fixed by this documentation update.

## Backend and business logic
- No backend API client or endpoint configuration is present in the inspected source.
- The food catalogue and prices are local sample data.
- No stock, restaurant availability, delivery coverage, tax, discount, or live delivery calculation exists.
- No order is created or persisted.
- No payment provider integration exists.
- No delivery tracking or dispatch integration exists.

## Authentication and privacy
- LoginSignup only renders a form-like modal and changes its display mode.
- No authentication request, account creation, session, password handling service, or identity provider is implemented.
- PlaceOrder renders personal-information fields but does not submit them.
- Do not enter real customer information or credentials.

## State and cart
- Cart state is in memory and resets on reload.
- No cart persistence or cross-device synchronization exists.
- The decrement operation can produce zero or negative quantities if called without a guard.
- Missing item IDs can cause total calculation problems.
- No quantity limits or availability checks exist.

## User experience
- The Home hero button is not connected to a menu navigation action.
- Footer and app-store elements are presentation-only.
- Some clickable images/containers are not semantic keyboard controls.
- Several images use empty alternative text.
- The existing App.test.js starter assertion is unrelated to the actual application and should be replaced with meaningful tests.

## Toolchain
- The project uses Create React App 5, an older build toolchain. Keep dependencies locked and assess compatibility before upgrading.
- No lint script is declared in package.json.
- Existing README timestamp automation runs on a schedule and on pushes, and requires contents write permission. Review whether that automation is still needed and whether its broad triggers are justified.

## Production readiness
This repository should be treated as a frontend demonstration. It is not ready to process real orders, payments, customer addresses, or credentials without a trusted backend, security review, privacy controls, and end-to-end validation.
