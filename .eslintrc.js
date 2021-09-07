module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/prop-types': 0,
        'no-unused-vars': 'warn',
    },
};
