/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTM = require('next-transpile-modules')(['react-rainbow-components']);

const nextConfig = {

  compiler: { styledComponents: true, emotion: false },
  reactStrictMode: false,
  images: {
    domains: ['', 'localhost'],
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  swcMinify: true,

};

module.exports = withTM(withBundleAnalyzer(nextConfig));
