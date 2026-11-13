# Security Policy

## Scope
This repository is a browser frontend. The current source does not contain a verified backend API, authentication service, payment integration, or order persistence. Login and delivery screens are presentation-only.

## Reporting
Do not publish credentials, personal information, or exploitable details in a public issue. Use GitHub private vulnerability reporting if enabled. Otherwise, contact the repository owner privately through GitHub. Include the affected path, impact, and safe reproduction steps.

## Frontend security requirements
- Never commit passwords, API tokens, private keys, or customer records.
- Never put server secrets in React source or REACT_APP_ variables.
- Treat all browser input and cart state as untrusted.
- Do not trust client-side price, delivery fee, discount, or payment status.
- Do not store real passwords in frontend state or browser storage.
- Do not submit real customer addresses through the current mock checkout screen.
- Review dependencies and lockfile changes.
- Keep GitHub Actions permissions limited to workflow needs.

## Future backend requirements
A production ordering service requires server-side authentication and authorization, validated product and price data, transactional order creation, payment-provider webhook verification, rate limiting, secure secret storage, privacy/retention controls, and audit logging appropriate to the service.

## Third-party assets
Review ownership and distribution rights for food photography, icons, fonts, and other assets. The repository's source license does not automatically grant rights to third-party materials.
