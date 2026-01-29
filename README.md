
# E2E Test Ecommerce App

End-to-end test automation for the BookCart online bookstore using Playwright and TypeScript.

## Tech Stack

- TypeScript
- Playwright
- Node.js
- ESLint
- dotenv

## Project Structure

- `pages/` — Page Object Model classes.
- `fixtures/` — reusable Playwright test fixtures.
- `tests/` — end-to-end test specifications.

## Target Application

https://bookcart.azurewebsites.net/

## Getting Started

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Configure environment variables

Copy `.env.example` to `.env` and configure the target application URL.

### Run tests

```bash
npm test
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run tests in UI mode

```bash
npm run test:ui
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run tests in Chromium

```bash
npm run test:chromium
```

### Run lint

```bash
npm run lint
```

### Run type checking

```bash
npm run typecheck
```

### Open Playwright report

```bash
npm run report
```
