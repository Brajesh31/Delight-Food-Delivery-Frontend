# Delight Food Delivery Frontend

A React single-page frontend for a food ordering and delivery interface. The application presents a menu catalogue, category filtering, a client-side cart, a delivery-information screen, account modal UI, and supporting page components.

> **Scope:** This repository contains the browser frontend only. The current code uses a local in-memory food catalogue and React context for cart state. It does not establish a working restaurant backend, user authentication service, payment gateway, order persistence, delivery dispatch, or live order tracking.

## Features present in the source

- Food catalogue with 32 locally defined sample items.
- Menu category selection.
- Add and remove item controls.
- Cart quantity and subtotal calculations.
- Fixed delivery fee displayed in cart totals.
- Home, cart, and orders routes using React Router.
- Sign-up/login modal presentation.
- Footer, mobile-app promotion section, and scroll-to-top control.
- CSS Modules for component/page styling.

The login modal and delivery form are UI only. The checkout screen does not submit an order or process payment. Cart state is held in React memory and is not persisted across reloads.

## Technology

| Area | Current implementation |
|---|---|
| UI | React 18 |
| DOM renderer | React DOM 18 |
| Routing | React Router DOM 6 |
| Toolchain | Create React App via react-scripts 5 |
| Styling | CSS and CSS Modules |
| State | React Context and useState |
| Tests | Jest and React Testing Library through CRA |
| Package manager | npm |
| Static assets | Local images under public/ and src/assets/ |

## Requirements

- Node.js version compatible with the locked Create React App toolchain. Use a maintained Node.js LTS release and verify compatibility if the legacy toolchain reports engine or OpenSSL issues.
- npm.
- Git.

## Installation

```bash
git clone https://github.com/Brajesh31/Delight-Food-Delivery-Frontend.git
cd Delight-Food-Delivery-Frontend
npm ci
```

Use `npm ci` for reproducible installs from the committed package lock. Do not mix package managers or regenerate the lockfile with a different package manager.

## Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). If the port is occupied, Create React App may ask to use another available port.

## Available commands

| Command | Purpose |
|---|---|
| `npm start` | Start the development server |
| `npm test -- --watchAll=false` | Run tests once in CI/non-interactive mode |
| `npm test` | Run the interactive test watcher |
| `npm run build` | Create an optimized production build in `build/` |
| `npm run eject` | Eject Create React App configuration, an irreversible operation |

Avoid `npm run eject` unless a documented requirement cannot be met through the current CRA configuration.

## Application structure

```text
src/
├── App.js
├── index.js
├── context/
│   └── StoreContext.jsx
├── Pages/
│   ├── Home/
│   ├── Cart/
│   └── PlaceOrder/
├── components/
│   ├── ExploreMenu/
│   ├── FoodDisplay/
│   ├── FoodDisplayItem/
│   ├── Footer/
│   ├── Header/
│   ├── LoginSignup/
│   ├── MobileApp/
│   ├── Navbar/
│   └── ScrollTop/
└── assets/
    ├── assets.js
    └── image files

public/
├── index.html
├── manifest.json
├── robots.txt
└── static public assets
```

See [Architecture](docs/ARCHITECTURE.md) for responsibilities and data flow.

## Cart and checkout behavior

The shared `StoreContext` exposes the static food list, cart item counts, add/remove functions, subtotal calculation, and a fixed delivery fee. The cart is held in React state. It resets when the application is reloaded.

The `/orders` route currently renders delivery input fields and a totals summary. It has no submit handler, backend request, payment integration, or order confirmation. Do not use it to enter real customer information.

## Quality checks

```bash
npm test -- --watchAll=false
npm run build
```

The GitHub Actions quality workflow runs dependency installation, the test suite, and a production build. These checks validate the frontend bundle and available tests. They do not prove that a backend, payment flow, or production ordering workflow exists.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Application flows](docs/APPLICATION-FLOWS.md)
- [State and catalogue model](docs/STATE-AND-CATALOGUE.md)
- [Backend integration boundary](docs/API-INTEGRATION.md)
- [Environment and configuration](docs/ENVIRONMENT.md)
- [Development](docs/DEVELOPMENT.md)
- [Testing](docs/TESTING.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Accessibility](docs/ACCESSIBILITY.md)
- [Known limitations](docs/LIMITATIONS.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Roadmap](docs/ROADMAP.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [Support](SUPPORT.md)

## Security and privacy

Do not put private API keys, payment secrets, or service credentials in React source or variables prefixed with `REACT_APP_`. Those values are exposed to the browser bundle. A real ordering service must validate prices, cart contents, identity, addresses, and payment state on a trusted backend. See [SECURITY.md](SECURITY.md).

## License

The original project source code is distributed under the MIT License. See [LICENSE](LICENSE). Review third-party images, icons, fonts, and other assets separately before redistribution.
