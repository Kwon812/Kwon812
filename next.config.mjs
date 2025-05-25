/** @type {import('next').NextConfig} */
const prefix =
    process.env.NODE_ENV === 'production' ? 'https://kwon812.github.io/Kwon812/' : ''

const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
}
export default nextConfig;
