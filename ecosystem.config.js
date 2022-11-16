module.exports = {
	apps: [
		{
			name: 'symlody-website',
			script: 'yarn start',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 3001,
			},
		},
	],
};
