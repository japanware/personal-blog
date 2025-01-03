/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				unifont: ['Unifont', 'sans-serif'], // Use Unifont as the default sans font
				gohu: ['Gohu', 'sans-serif'], // Use Unifont as the default sans font
			},
		},
	},
	plugins: [],
}
