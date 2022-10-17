module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true,
    },
    settings: {
        'import/resolver': {
            'typescript': {
                'alwaysTryTypes': true,
            },
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'sort-imports': 0,
        'import/order': [
            'error',
            {
                groups: [
                    [
                        'builtin',
                        'external',
                        'internal',
                    ],
                    [
                        'parent',
                        'sibling',
                        'index',
                        'type',
                        'object',
                    ],
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
    },
};
