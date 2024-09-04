# @ms-app/configuration-typescript

TypeScript basic configuration for MS-App.

## Installation

```bash
pnpm --filter <pkg> add typescript @ms-app/configuration-typescript
```

## Basic Configuration

Extend `tsconfig.json`:

```json
{
    "extends": "@ms-app/configuration-typescript/ionic",
    "include": ["path/to/your/files"]
}
```

## Available Configurations

There are different configurations for different purposes in this package. They can be used by extending `@ms-app/configuration-typescript/<name>`, replacing `<name>` with one of the config names below.

### ionic

This config is tailored to fit ionic app builds. It is a sensible default to choose for new packages as well, in case they need bundling.

### legacy

This config is used for packages that rely on CommonJS. It makes use of Node10 module resolution and is not recommended for modern code.
