# Environment and Configuration

## Current configuration

The inspected frontend does not define application-specific environment variables or an API base URL. Create React App supplies the development server and build-time environment handling.

## Create React App conventions

A public frontend variable must use the `REACT_APP_` prefix to be exposed to the application at build time. For example:

```env
REACT_APP_API_BASE_URL=https://api.example.invalid
```

The example domain is deliberately non-functional. Do not add this variable unless a real backend integration is implemented and documented.

## Secrets warning

Values embedded in a React build are visible to users. Never store:
- Database credentials.
- Private API keys.
- Payment gateway secret keys.
- JWT signing secrets.
- Cloud provider credentials.
- SMTP passwords or private tokens.

Use a trusted backend and its secret-management mechanism for privileged credentials.

## Local setup

No `.env` file is required for the current frontend. If a future integration introduces local environment configuration:
1. Document each variable and whether it is public.
2. Add a safe `.env.example` containing placeholders only.
3. Keep actual local secrets out of Git.
4. Configure production values in the hosting provider's build settings.
5. Rebuild after changing build-time variables.

## Environment separation

Use separate backend services and credentials for development, staging, and production. Do not point a local development build at production customer data unless there is an explicit, authorized reason and appropriate safeguards.
