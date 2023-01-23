/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '5000',
				pathname: '/static/**',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/static/:path*',
	// 			destination: `http://localhost:5000/static/:path*`,
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
