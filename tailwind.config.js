/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				themeColor: "#006F76",
				textColor2: "#fff",
				textColor: "#083344",
				inputBG: "#0891B2",
				cardBG: "#0E7490",
				bgColor: "#155e75",
			},
			backgroundImage: {
				heroImage: "url('/images/heroImage1.png')",
				heroImage9: "url('/images/heroImage1.png')",
				heroImage2: "url('/images/heroImage2.jpg')",
				heroImage3: "url('/images/heroImage3.jpg')",
				heroImage4: "url('/images/heroImage4.jpg')",
				heroImage5: "url('/images/heroImage5.jpg')",
				heroImage6: "url('/images/heroImage6.jpg')",
				footerBg: "url('/images/footerBG.jpg')",
			},
			maxWidth: {
				"8xl": "96rem",
				"9xl": "108rem",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					"-ms-overflow-style": "none", // IE and Edge
					"scrollbar-width": "none", // Firefox
				},
				".scrollbar-hide::-webkit-scrollbar": {
					display: "none", // Chrome, Safari
				},
				".scrollbar-visible::-webkit-scrollbar": {
					display: "block",
				},
			});
		},
	],
};
