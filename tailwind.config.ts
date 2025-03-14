import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#FFFFFF",
				foreground: "#000000",
				primary_color: "#299D91",
				logout_btn_bg_color: "#262626",
			},
		},
	},
	plugins: [],
} satisfies Config;
