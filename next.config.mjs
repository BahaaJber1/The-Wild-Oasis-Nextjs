/** @type {import('next').NextConfig} */
const nextConfig = {
	// To allow images from Supabase storage
	images: {
		remotePatterns: [
			new URL(
				"https://jbdewevkmmiopkqgpufd.supabase.co/storage/v1/object/public/cabin-images/**"
			),
		],
		qualities: [75, 90, 100],
	},
	// output: "export",
};

export default nextConfig;
