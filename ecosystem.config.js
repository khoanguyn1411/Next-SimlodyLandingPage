module.exports = {
	apps: [
		{
			name: 'tungtung-website',
			script: 'yarn start',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 3010,
			},
		},
	],
};
