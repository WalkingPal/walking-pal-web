/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["pg.tsx", "pg.ts", "pg.mdx"], // Ref: https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};

const withMDX = require("@next/mdx")({
	// By default only the .mdx extension is supported.
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		rehypePlugins: [],
		/* otherOptions… */
	},
});
module.exports = withMDX(nextConfig);
