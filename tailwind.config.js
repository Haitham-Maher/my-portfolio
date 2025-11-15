export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				scroll: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				}
			},
			animation: {
				'scroll-left': 'scroll 70s linear infinite'
			},
			colors: {
				primary: "#E86B1D",
				secondary: "#F6C65B",
				bg_dark: "#0B0B0B",
				text_light: "#EAEAEA",
				text_muted: "#BFBFBF",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}



