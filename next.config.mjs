/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nonghaeng.s3.ap-northeast-2.amazonaws.com",
      },
      { protocol: "https", hostname: "www.chamchamtrip.com" },
      { protocol: "https", hostname: "image.changmin.duckdns.org" },
      { protocol: "https", hostname: "https://image.changmin.duckdns.org" },
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
