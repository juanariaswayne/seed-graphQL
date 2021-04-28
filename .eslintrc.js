module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier', 'jest'],
    env: {
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'no-console': 1,
        'camelcase': 1,
        'eqeqeq': 0,
        'curly': 2,
        'quotes': [1, 'single'],
        '@typescript-eslint/no-explicit-any': 0
    },
};
