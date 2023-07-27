// Convert pixels from prototype to rem
const toRem = pixel => {
	const rootFont = 16;

	return `${pixel / rootFont}rem`;
};

// Convert letter spacing from prototype
const toCharSpacing = pixel => {
	return `${pixel / 1000}em`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
				factors: '0px 0px 20px #77C19ABF',
				navbar: '3px 0px 4px #0000000D',
				card: '0px 3px 6px #00000029',
				md: '0 4px 4px 0 rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)', // Our cards
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)'
			},
			colors: {
				gray: {
					100: '#F8F8F8',
					200: '#E0E0E0',
					300: '#C8C8C8',
					400: '#888888',
					500: '#707070',
					600: '#505050',
					700: '#383838',
					800: '#282828',
					900: '#101010'
				},
				red: '#ED6876',
				'input-border': '#D2D2D2',
				// custom colors fonts
				font: {
					title: '#202020',
					reg: '#575257',
					date: '#C0C0C0',
					select: '#36404F',
					light: {
						DEFAULT: '#E6E6E6',
						alternate: '#B3B3B3'
					},
					dark: {
						DEFAULT: '#323232',
						alternate: '#615C61'
					},
					footer: '#BEBEBE'
				},
				// title colors
				title: {
					users: '#F3C129',
					change: '#7965B2'
				},
				// custom colors background
				'default-background': 'rgba(250,250,250,255)',
				// brand colors
				hol: {
					blue: {
						light: '#8DC8E8',
						DEFAULT: '#4FB1D8',
						dark: '#3E6991'
					},
					grey: {
						light: '#BEBEBE',
						DEFAULT: '#575257'
					},
					green: '77C19A',
					orange: '#EB7B39',
					purple: {
						light: '#B1A2CA',
						dark: '#492E86'
					},
					red: {
						pale: '#F2716F',
						DEFAULT: '#CE504A'
					},
					yellow: '#FECE00'
				},
				// diagnostics colors
				diagnostic: {
					yellow: '#F4BA4E',
					orange: '#E56327',
					purple: '#2D2374',
					green: '#9FD4BF',
					blue: '#35A3CF',
					pink: '#E052B8'
				},
				adobe: {
					navy: {
						DEFAULT: '#2C3B59',
						dark: '#1F2A40',
					}, 
					
				},
				ringColor: {
					default: '#7965B2'
				},
				fontFamily: {
					'varela-round': ['"Varela Round"', 'sans-serif'],
					poppins: ['Poppins'],
					// our custom font
					'sofia-bold': ['SofiaPro-Bold', 'sans-serif'],
					'sofia-regular': ['SofiaPro-Regular', 'sans-serif'],
					'sofia-light': ['SofiaPro-Light', 'sans-serif'],
					'rooney-sans': ['rooney-sans', 'sans-serif']
				},
				fontSize: {
					xxs: ['0.5rem', { lineHeight: '1.5' }],
					xs: [toRem(10), { lineHeight: toRem(13), letterSpacing: toCharSpacing(-17) }],
					sm: [toRem(13), { lineHeight: toRem(15), letterSpacing: toCharSpacing(-20) }], // 13px
					base: ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }], // Regular text
					md: [toRem(15), { lineHeight: toRem(19), letterSpacing: toCharSpacing(-7) }],
					lg: [toRem(16), { lineHeight: toRem(20), letterSpacing: toCharSpacing(-7) }], // Heading 3 and Date
					xl: [toRem(18), { lineHeight: toRem(22), letterSpacing: toCharSpacing(-7) }], // Heading 2
					'2xl': [toRem(20), { lineHeight: toRem(24), letterSpacing: toCharSpacing(-7) }], // Heading 1
					'3xl': [
						toRem(32),
						{ lineHeight: toRem(38), letterSpacing: toCharSpacing(-43) }
					], // Title
					'4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
					'5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
					'6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
					'7xl': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
					'8xl': ['5.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
					regXL: [toRem(21), { lineHeight: toRem(25), letterSpacing: toCharSpacing(-35) }]
				},
				screens: {
					xxs: '320px',
					xs: '480px',
					sm: '640px',
					md: '768px',
					md2: '1024px',
					lg: '1280px',
					lg2: '1440px',
					xl: '1680px',
					xl2: '1920px',
					xl3: '2300px',
					print: { raw: 'print' }
				},
				borderWidth: {
					1: '1px',
					3: '3px',
					4: '4px'
				},
				borderRadius: {
					md: '5px',
					lg: '10px',
					xl: '15px'
				},
				minWidth: {
					36: '9rem',
					44: '11rem',
					56: '14rem',
					60: '15rem',
					80: '20rem'
				},
				maxWidth: {
					xxs: '12rem',
					'8xl': '88rem',
					'9xl': '96rem'
				},
				maxHeight: {
					'operation-card': '40rem'
				},
				zIndex: {
					60: '60'
				},
				padding: {
					'70px': toRem(70), // Top padding for contents
					'200px': toRem(200)
				}
			}
		},
		plugins: [require("tailwind-scrollbar")],
	}
};
