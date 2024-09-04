# @ms-app/configuration-eslint

ESLint basic configuration for MS-App.

## Installation

```bash
pnpm --filter <pkg> add -D eslint @ms-app/configuration-eslint
```

Extend `package.json`:

```json
{
    "scripts": {
        "lint:js": "eslint src/",
        "lint:js:fix": "eslint src/ --fix"
    }
}
```

## Basic Configuration

```js
// eslint.config.js
import config from '@ms-app/configuration-eslint'

export default config
```

Customized configuration:

```js
// eslint.config.js
import config from '@ms-app/configuration-eslint'

export default [
    ...config,
    // your configurations
]
```
