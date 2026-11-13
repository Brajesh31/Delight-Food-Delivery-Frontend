# Release Checklist

## Scope
- [ ] README and documentation accurately describe implemented behavior.
- [ ] Login, checkout, payment, and delivery capabilities are not overstated.
- [ ] No real customer or payment data is included.

## Quality
- [ ] npm ci completes from the committed lockfile.
- [ ] npm test -- --watchAll=false passes.
- [ ] npm run build passes.
- [ ] Home, cart, and orders routes are smoke-tested.
- [ ] Cart calculations and empty-cart behavior are checked.
- [ ] Mobile and desktop layouts are reviewed.
- [ ] Keyboard navigation and accessible labels are reviewed.

## Security
- [ ] No secrets are present in source or build output.
- [ ] No personal or customer records are committed.
- [ ] Dependency changes are reviewed.
- [ ] Any backend integration has a separate security review.

## Deployment
- [ ] Build output is deployed from build/.
- [ ] BrowserRouter fallback is configured.
- [ ] Direct refresh of /cart and /orders works.
- [ ] Static assets load correctly.
- [ ] Deployed application is smoke-tested.

## After release
- [ ] Record the deployed commit and URL.
- [ ] Document known limitations.
- [ ] Retain a rollback path for the previous frontend build.
