module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{json,jpg,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};