module.exports = {
	darkMode: false,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./containers/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			inter: ['Inter'],
		},
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: "2rem",

			// default breakpoints but with 40px removed
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1024px",
				xl: "1280px",
				xxl: "1536px"
			},
		},

		extend: {
			colors: {
				primary: {
					50: '#F3FBFE',
					100: '#CFEDFB',
					200: '#A0DBF8',
					300: '#70C9F4',
					400: '#41B7F1',
					500: '#3B82F6',
					600: '#2F68C5',
					700: '#2654A0',
					800: '#1D417B',
					900: '#152D56',
				},
				secondary: {
					50: '#F3FBFE',
					100: '#D0F1FD',
					200: '#A1E3FA',
					300: '#73D4F8',
					400: '#44C6F5',
					500: '#15B8F3',
					600: '#1193C2',
					700: '#0E789E',
					800: '#0A5C7A',
					900: '#074055',
				},
			},
			height: {
				main: 'calc(100vh - 56px)',
				section: 'calc(100vh - 56px)',
			},
		},

	},
	variants: {
		display: ['group-hover']
	},
	plugins: [],
};
