# SportOS New Joiner Dev Setup

This guide helps a new engineer get the SportOS monorepo running locally.

## 1. Prerequisites

Install these tools first:

- Node.js 20+
- npm 10+
- Docker Desktop (for local MongoDB and Redis)
- Xcode Command Line Tools (macOS)

Verify:

```bash
node -v
npm -v
docker -v
```

## 2. Clone and Install

From the repo root:

```bash
npx -y pnpm@10.11.0 install
```

## 3. Environment Variables

Root environment:

- Copy values from `.env.example` into `.env` (already tracked in local setup)
- Ensure `MONGODB_URI` is set correctly

API environment:

- Set values in `apps/api/.env.local`

Example Mongo URI format:

```text
mongodb+srv://django-app-db-user:<db_password>@cluster0.vnmeoa6.mongodb.net/?appName=Cluster0
```

## 4. Local Infrastructure

Start MongoDB and Redis:

```bash
docker compose up -d
```

Stop infrastructure:

```bash
docker compose down
```

## 5. Run Applications

Important: In this workspace, Next.js Turbopack root inference has been unstable in dev, so the app dev scripts are configured for Webpack mode.

Run all apps:

```bash
npx -y pnpm@10.11.0 dev
```

If one app fails, run each app independently:

Admin web:

```bash
cd apps/admin-web
npx -y pnpm@10.11.0 dev
```

API:

```bash
cd apps/api
npx -y pnpm@10.11.0 dev
```

Mobile (Expo):

```bash
cd apps/mobile-app
EXPO_NO_DOCTOR=1 EXPO_OFFLINE=1 npx expo start --offline
```

Default ports:

- Admin web: 3000
- API: 4000
- Expo Metro: 8081

## 6. Build and Type Safety

From repo root:

```bash
npx -y pnpm@10.11.0 build
npx -y pnpm@10.11.0 typecheck
```

## 7. E2E Tests (Playwright)

Install browsers:

```bash
npx -y pnpm@10.11.0 playwright:install
```

Run tests:

```bash
npx -y pnpm@10.11.0 test:e2e
```

Open HTML report:

```bash
pnpm exec playwright show-report
```

## 8. Known Local Issues and Fixes

1. Xcode license prompt blocks some CLI tools
- Symptom: command asks for Xcode license acceptance
- Fix:

```bash
sudo xcodebuild -license
```

2. Expo simulator command errors on macOS
- Symptom: `Unable to run simctl` or `xcrun simctl` exits non-zero
- Fix: use Expo Go on device or run offline mode command above

3. Expo web dependency warning
- Symptom: asks for `react-native-web`
- Fix:

```bash
cd apps/mobile-app
npx expo install react-native-web
```

4. TLS certificate errors while downloading Playwright browsers
- Symptom: `unable to get local issuer certificate`
- Usually transient from mirror fallback; retry command.

## 9. Recommended First Checks for New Joiners

1. Confirm admin web loads at http://localhost:3000
2. Confirm API health at http://localhost:4000/api/health
3. Run one E2E test suite
4. Confirm docker services are up before backend feature work

## 10. Useful Workspace Paths

- Root config: `package.json`
- Monorepo pipeline: `turbo.json`
- Workspace package map: `pnpm-workspace.yaml`
- API env: `apps/api/.env.local`
- Playwright config: `playwright.config.ts`
- E2E tests: `tests/e2e`
