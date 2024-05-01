/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nonghaeng-fe.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nonghaeng-fe.vercel.app",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
