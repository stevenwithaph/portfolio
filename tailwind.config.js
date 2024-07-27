import defaultTheme from 'tailwindcss/defaultTheme';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			textShadow: {
				DEFAULT: '0px 0px 20px var(--tw-shadow-color)',
			},
			boxShadow: {
				glow: '0px 0px 20px 0px var(--tw-shadow-color)',
			},
			animation: {
				typewriter: 'typewriter 1s linear infinite',
			},
			keyframes: {
				typewriter: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				},
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme, addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus-visible']);
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') },
			);
		}),
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
};
