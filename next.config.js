/** @type {import('next').NextConfig} */
const nextConfig = {

  presets: ['@next/babel'],

    images: {
        domains: ['images.unsplash.com', 'https://api.uifaces.co', 'https://randomuser.me', 'https://img.freepik.com'],
        unoptimized  : true,

        remotePatterns: [
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
          },
          {
            protocol: "https",
            hostname: "i.ibb.co",
          },
        ],
      },
}

module.exports = nextConfig
