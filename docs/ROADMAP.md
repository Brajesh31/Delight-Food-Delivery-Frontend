# Roadmap

This roadmap is a set of possible improvements, not a delivery commitment.

## Priority 1: Correctness and tests
- Replace the starter CRA test with application-level tests.
- Add tests for category filtering and cart quantity calculations.
- Guard decrement operations against negative quantities.
- Handle missing catalogue item IDs safely.
- Add stable item keys and remove nested list key warnings.

## Priority 2: Accessibility and UX
- Replace clickable generic elements and images with semantic buttons.
- Add labels and autocomplete attributes to forms.
- Improve modal focus management and accessible close behavior.
- Add accessible names for quantity, remove, and scroll-to-top controls.
- Add empty-cart and checkout validation states.
- Connect the hero CTA to the menu section.

## Priority 3: State and data boundaries
- Decide whether cart persistence is required.
- Introduce a typed, validated API contract only when a real backend exists.
- Move authoritative prices, stock, delivery fees, and order totals to the server.
- Separate UI form state from server-submitted customer data.

## Priority 4: Production service integration
A real service would require authenticated backend APIs, order persistence, payment provider integration, webhook verification, delivery status, privacy disclosures, and operational monitoring. Do not simulate these capabilities in the frontend.

## Priority 5: Toolchain maintenance
- Evaluate a supported migration path away from Create React App.
- Keep React and router upgrades controlled by tests.
- Add dependency and build checks.
- Review scheduled README automation and reduce permissions/triggers if it is retained.
