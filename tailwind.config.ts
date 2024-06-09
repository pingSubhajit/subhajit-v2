import type {Config} from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#1E1D1A',
			petroleum: '#21201C',
			basil: '#595344',
			ghidorah: '#A99A75',
			beige: '#E5CA85',
			white: '#FCE5AC',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
export default config
