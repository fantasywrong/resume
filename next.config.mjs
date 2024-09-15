/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/fantasywrong.github.io/resume',
    assetPrefix: process.env.NODE_ENV === "production"
      ? "https://fantasywrong.github.io/resume"
      : "",

};

export default nextConfig;
