import type { Config } from 'tailwindcss';


export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,jsx,tsx,mdx}',
		'./src/components/**/*.{js,jsx,tsx,mdx}',
		'./src/app/**/*.{js,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1200px",
			},
		},
		extend: {
			colors: {
				white: '#FFFFFF',
				primary: {
					100: '#C7D9DD',
					200: '#91B5BC',
					300: '#5C8F98',
					400: '#306873',
					500: '#003B4A', // cor principal
					600: '#002E3A',
					700: '#00222B',
					800: '#00171D',
					900: '#F0F2F4',  // Cor backgruod total
					1000: 'rgba(232, 234, 238, 1)'  // Cor backgruod total
				},
				blue: {
					100: '#4DD0E1',
					200: '#80DEEA',
					300: '#7EA4D7',
					400: '#2C85FC',
					500: '#2266C1',
					600: '#0D284C'
				},
				gray: {
					100: '#F5F5F5',
					200: '#E1E1E1',
					300: '#C4C4C4',
					400: '#9B9B9B',
					500: '#707070',
					600: '#4A4A4A',
					700: '#2E2E2E',
					800: '#1A1A1A',
				},
			},
			borderRadius: {
				lg: '0.5rem',
				md: 'calc(0.5rem - 2px)',
				sm: 'calc(5.5rem - 4px'
			},
			fontFamily: {
				sans: ['PT Sans Caption', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			fontSize: {
				// Headings - PT Sans Caption
				'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
				'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],

				// Body - Inter
				'body-md': ['16px', { lineHeight: '150%', fontWeight: '400' }],
				'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400' }],
				'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400' }],

				// Body - Tag
				'body-tag': ['12px', { lineHeight: '100%', fontWeight: '400' }],

				// Action - Inter
				'action-md': ['16px', { lineHeight: 'normal', fontWeight: '500' }],
				'action-sm': ['14px', { lineHeight: 'normal', fontWeight: '500' }],
			},
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config

