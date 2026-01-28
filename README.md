# E-Commerce E2E Test Suite

End-to-end test automation for the BookCart online bookstore using Playwright and TypeScript.

## Tech Stack

- Node.js
- TypeScript
- Playwright Test
- ESLint
- dotenv

## Target Application

https://bookcart.azurewebsites.net/

## Prerequisites

- Node.js 20+
- npm
- Git

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

## Environment Configuration

Create a `.env` file in the project root:

```env
BASE_URL=https://bookcart.azurewebsites.net
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Run tests in Chromium:

```bash
npm run test:chromium
```

Open the HTML report:

```bash
npm run report
```

## Code Quality

Run ESLint:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

## Project Status

The initial project infrastructure is being configured.

Planned test coverage:

- Authentication
- Product search and navigation
- Shopping cart management
- Checkout process
- Test reporting
- Continuous integration

## License

This project is intended for educational purposes.
