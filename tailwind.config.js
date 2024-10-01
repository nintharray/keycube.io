/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  './src/**/*.{js,jsx,ts,tsx}'
	],
  theme: {
    extend: {
			fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
		},
  },
  plugins: [],
}

