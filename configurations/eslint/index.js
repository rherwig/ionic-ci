// @ts-check
import { join } from 'node:path'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                process: true,
            },
            parser: vueParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.vue'],
                project: join(process.cwd(), 'tsconfig(.*)?.json'),
                tsconfigRootDir: process.cwd(),
            },
        },
        rules: {
            //TODO: check again with supported/valid TS version
            '@typescript-eslint/no-duplicate-enum-values': 'off',
            // ionic uses webcomponent slots but eslint recognizes them as deprecated vue 2 slots.
            'vue/no-deprecated-slot-attribute': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    disallowTypeAnnotations: false,
                },
            ],
        },
    },
    {
        files: ['**/*.spec.ts', '**/*.stories.ts'],
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    prettier,
)
