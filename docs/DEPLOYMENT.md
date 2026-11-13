# Deployment Guide

## Build output

Create React App produces an optimized static bundle in `build/`.

```bash
npm ci
npm run build
```

Deploy the contents of `build/` to a static host or web server capable of serving a single-page application.

## Client-side routing

The application uses BrowserRouter with routes such as `/cart` and `/orders`. Configure the host to serve `index.html` as a fallback for client-side routes. Without this rewrite, navigating from the home page may work while directly refreshing a nested route returns 404.

Do not redirect missing static assets to index.html indiscriminately if the host can distinguish asset requests from route requests.

## Build-time configuration

No custom API environment variable is required by the current implementation. If a public API origin is introduced later, configure it in the build environment and rebuild. Remember that CRA `REACT_APP_*` variables are public browser data.

## Deployment checklist
- [ ] Install using npm ci.
- [ ] Run tests in non-watch mode.
- [ ] Run npm run build.
- [ ] Deploy the generated build directory, not the source tree.
- [ ] Configure SPA fallback for /cart and /orders.
- [ ] Verify static asset paths and MIME types.
- [ ] Test direct navigation and refresh on nested routes.
- [ ] Check mobile and desktop layouts.
- [ ] Confirm no secret is present in the generated JavaScript bundle.
- [ ] Verify the site description does not claim backend capabilities that do not exist.

## Hosting notes
Hosting-provider configuration varies. Use the provider's current documentation for static React deployments. Do not assume that a frontend deployment also deploys or secures a backend.

## Rollback
Retain the previous known-good static build or deployment identifier so the host can restore it if a new bundle fails. A frontend rollback does not roll back server-side data or payment transactions.
