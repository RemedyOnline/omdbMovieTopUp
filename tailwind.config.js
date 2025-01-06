/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				themeColor: "#006F76",
				textColor: "#083344",
				inputBG: "#0891B2",
				cardBG: "#0E7490",
				bgColor: "#155e75",
			},
			backgroundImage: {
				heroImage: "url('public/images/movieBG.png')",
				heroImage2: "url('public/images/movieverse4.jpg')",
				heroImage3: "url('public/images/movieverse5.jpg')",
			},
		},
	},
	plugins: [],
};
