/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
				sans: ['"DM Sans"', 'serif'],
				instrumentserif: ['"Instrument Serif"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
