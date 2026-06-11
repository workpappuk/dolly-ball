# SportOS

Production-grade white-label sports platform monorepo using Turborepo.

## New Joiner Guide

- See [NEW_JOINER_DEV_SETUP.md](NEW_JOINER_DEV_SETUP.md) for full local developer onboarding.

## Apps
- apps/mobile-app: Expo React Native app
- apps/admin-web: Next.js admin portal
- apps/api: Next.js API service

## Packages
- packages/ui
- packages/auth
- packages/tenant
- packages/cricket
- packages/football
- packages/kabaddi
- packages/subscription
- packages/notification
- packages/ai
- packages/analytics
- packages/shared

## Local infra

Start MongoDB and Redis:

```bash
docker compose up -d
```

## Install and run

Use pnpm 10+.

```bash
pnpm install
pnpm dev
```

## E2E tests (Playwright)

Install browser binaries:

```bash
pnpm playwright:install
```

Run E2E suite:

```bash
pnpm test:e2e
```

Run E2E with UI mode:

```bash
pnpm test:e2e:ui
```
