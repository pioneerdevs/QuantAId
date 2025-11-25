import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			'@react-native-async-storage/async-storage': path.resolve(
				process.cwd(),
				'src/shims/async-storage.js'
			),
		};
		return config;
	},
};

export default nextConfig;
