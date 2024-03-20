/*eslint-env commonjs*/
// @ts-check
/** @type {import('eslint').ESLint.Options} */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: 'tailwind.config.ts',
      callees: ['classnames', 'cn', 'cva'],
      cssFiles: [
        // load valid classnames from css files
        './src/**/*.css',
        '!**/node_modules',
      ],
    },
  },
  rules: {
    'arrow-body-style': 'off',
    curly: 'error',
    'no-debugger': 'error',
    'no-nested-ternary': 'error',
    'no-warning-comments': 'error',
    'prettier/prettier': 'error',
    eqeqeq: 'error',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/hook-use-state': 'error',
    'react/jsx-no-leaked-render': 'error',
    'import/no-unresolved': 'off',
    'no-void': 'off',
    // 'no-console': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    // 'jsx-a11y/label-has-associated-control': [
    //   2,
    //   {
    //     labelComponents: ['Label'],
    //     labelAttributes: ['label', 'aria-label'],
    //     controlComponents: [
    //       'Input',
    //       'Select',
    //       'Textarea',
    //       'Checkbox',
    //       'Radio',
    //       'Switch',
    //     ],
    //     depth: 3,
    //   },
    // ],
    // cspell:ignore classname
    'tailwindcss/no-custom-classname': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.*',
          '**/.storybook/**/*.*',
          '**/*.test.*',
          '**/test-utils.jsx',
          '**/jest.setup.js',
        ],
        peerDependencies: true,
      },
    ],
  },
};
