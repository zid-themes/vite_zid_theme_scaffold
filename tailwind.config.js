/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
	content: ['./src/**/*.{html,js,ts,twig}', './node_modules/flowbite/**/*.js'],
	darkMode: "class",
	variants: {
		space: ['responsive', 'direction'],
	  },
	theme: {
		extend: {},
	},
	plugins: [
	iconsPlugin({
		// Select the icon collections you want to use
		collections: getIconCollections(["mdi", "lucide"]),
	  }),
  ],
};
