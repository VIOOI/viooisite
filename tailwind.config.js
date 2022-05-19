module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
			fontFamily: {
				'code': [ 'JetBrains Mono', 'monospace' ]
			},
			colors: {
				'site': {
					100: '#ffffff',
					200: '#f1f1f1',
					300: '#707070',
					400: '#101010',
				}
			},
			backgroundImage: {
				'image-home': 'url(/public/home-bg.jpg)',
				'image-frameworks': 'url(/public/frameworks-bg.jpg)'
			}
		},
  },
  plugins: [],
}
