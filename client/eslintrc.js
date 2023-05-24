module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'prettier/react',
    ],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off', // Disable prop-types since we can use TypeScript or PropTypes library instead
      'react/react-in-jsx-scope': 'off', // Disable the rule that requires importing React when using JSX
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };  