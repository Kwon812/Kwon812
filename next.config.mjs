
const prefix = process.env.NODE_ENV === 'production' ? '/Kwon812' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
    basePath: prefix,
    images: {
        unoptimized: true,
    },
}
export default nextConfig;
