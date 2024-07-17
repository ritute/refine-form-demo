const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
	root: true,
	extends: [
		require.resolve('@vercel/style-guide/eslint/node'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
		require.resolve('@vercel/style-guide/eslint/browser'),
		require.resolve('@vercel/style-guide/eslint/react'),
	],
	parserOptions: {
		project,
	},
	settings: {
		'import/resolver': {
			typescript: {
				project,
			},
		},
	},
	rules: {
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-shadow': [
			'error',
			{
				ignoreOnInitialization: true,
			},
		],
		'import/newline-after-import': 'error',
		'react/jsx-uses-react': 'error',
		'react/react-in-jsx-scope': 'error',
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					kebabCase: true, // personal style
					pascalCase: true,
				},
			},
		],

		// Deactivated
		'@typescript-eslint/dot-notation': 'off', // paths are used with a dot notation
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-misused-promises': 'off', // onClick with async fails
		'@typescript-eslint/no-non-null-assertion': 'off', // sometimes compiler is unable to detect
		'@typescript-eslint/no-unnecessary-condition': 'off', // remove when no static data is used
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		'@typescript-eslint/prefer-promise-reject-errors': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'array-callback-return': 'off',
		'import/no-default-export': 'off',
		'import/no-extraneous-dependencies': 'off', // conflict with sort-imports plugin
		'import/order': 'off', // using custom sort plugin
		'no-implicit-coercion': 'off',
		'no-nested-ternary': 'off', // personal style
		'no-redeclare': 'off', // conflict with TypeScript function overloads
		'no-unused-vars': 'off',
		'react/jsx-fragments': 'off', // personal style
		'react/jsx-sort-props': 'off',
		'react/prop-types': 'off', // TypeScript is used for type checking
	},
}
