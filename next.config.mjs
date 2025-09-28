/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // this is required for `next export` to work
    assetPrefix: '/vishnu-portfolio',
    basePath: '/vishnu-portfolio',
    trailingSlash: true,
};

export default nextConfig;
