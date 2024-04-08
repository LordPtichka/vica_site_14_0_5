/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["localhost"] },
  env: {
    HOST: process.env.HOST, // после прописи в файле .env нужно прописать тут
  },
}

module.exports = nextConfig
