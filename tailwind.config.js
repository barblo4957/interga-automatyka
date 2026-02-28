/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0f172a', // Slate-900
					foreground: '#f4f4f5' // Zinc-100
				},
				accent: {
					DEFAULT: '#f97316', // Orange-500
					foreground: '#f4f4f5' // Zinc-100
				},
				background: '#0f172a', // Slate-900
				foreground: '#f4f4f5' // Zinc-100
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};
