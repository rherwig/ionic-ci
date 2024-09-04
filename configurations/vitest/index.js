import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        clearMocks: true,
        environment: 'jsdom',
        coverage: {
            exclude: [...coverageConfigDefaults.exclude, '**/*{.,-}setup.*', '**/index.*', '**/*.stories.ts'],
            include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
            provider: 'v8',
        },
    },
})
