module.exports = {
	darkMode: 'media',
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
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
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
		display: ['group-hover'],
	},
	plugins: [],
};
