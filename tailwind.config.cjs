/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
				'sans': ['"Passion One"', 'cursive']
			}
		},
	},
	plugins: [],
}
