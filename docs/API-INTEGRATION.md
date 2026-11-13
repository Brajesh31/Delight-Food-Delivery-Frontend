# Backend and API Integration Boundary

## Current state

No backend API client or endpoint configuration is present in the inspected frontend source. The current catalogue is imported locally and cart calculations run in the browser. Login and delivery screens are presentation components.

Do not invent API URLs or assume that the interface is connected to a production ordering system.

## If a backend is introduced

Document each endpoint with:
- HTTP method and path.
- Authentication requirements.
- Request schema and validation rules.
- Response schema and error shape.
- Timeout and retry behavior.
- Rate limits and abuse controls.
- Data classification and retention.
- Ownership of price, stock, tax, delivery fee, and payment calculations.

## Trust boundaries

The browser is an untrusted client. A production backend must:
- Authenticate users and authorize every protected operation.
- Resolve product identifiers and current prices from trusted server data.
- Reject invalid, unavailable, or manipulated cart items.
- Calculate totals server-side.
- Validate and normalize delivery information.
- Create orders transactionally and prevent duplicate submissions.
- Verify payment status using trusted payment-provider server notifications.
- Never trust a success screen or client-side payment callback as proof of payment.
- Apply rate limits and abuse protection to login, checkout, and order endpoints.

## Configuration

If a public API origin is needed in Create React App, a variable such as `REACT_APP_API_BASE_URL` can be supplied at build time. Any `REACT_APP_*` value is embedded in the browser bundle and is not secret.

Do not put database passwords, private API tokens, payment secrets, signing keys, or privileged service credentials in frontend environment variables. Those belong in a backend secret manager.

## API documentation requirement

Do not add placeholder endpoints to the project documentation as if they are implemented. Once a real backend is connected, add a versioned API contract and update the architecture, security, environment, testing, and deployment guides.
