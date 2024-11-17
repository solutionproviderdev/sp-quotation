/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Source Sans 3"', 'sans-serif'], // Default sans-serif font
				mono: ['"Fira Code"', 'monospace'], // Default monospace font
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
