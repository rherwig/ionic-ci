# @ms-app/configuration-vitest

Vitest basic configuration for MS-App.

## Installation

```bash
# Unit tests with code coverage
pnpm --filter <pkg> add -D vitest @ms-app/configuration-vitest @vitest/coverage-v8

# Unit tests with code coverage and Vue support
pnpm --filter <pkg> add -D vitest @ms-app/configuration-vitest @vitest/coverage-v8 @vue/test-utils
```

Extend `package.json`:

```json
{
    "scripts": {
        "test:unit": "vitest --run",
        "test:unit:coverage": "vitest --run --coverage",
        "test:unit:watch": "vitest --watch"
    }
}
```

## Basic Configuration

```js
// vitest.config.js
import config from '@ms-app/configuration-vitest'

export default config
```

Customized configuration:

```js
// vitest.config.js
import { mergeConfig } from 'vitest/config'
import config from '@ms-app/configuration-vitest'

export default mergeConfig(config, {
    // your configurations
})
```

Merged with Vite configuration:

```js
// vitest.config.js
import { defineConfig, mergeConfig } from 'vitest/config'
import vitestConfig from '@ms-app/configuration-vitest'
import viteConfig from './vite.config'

export default defineConfig((envConfig) => {
    return mergeConfig(
        viteConfig(envConfig),
        mergeConfig(vitestConfig, {
            // your configurations
        }),
    )
})
```
