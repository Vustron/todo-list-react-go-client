/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		reactCompiler: true,
		after: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
