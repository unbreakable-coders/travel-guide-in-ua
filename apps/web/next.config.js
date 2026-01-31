//@ts-check
const { composePlugins, withNx } = require('@nx/next');

/** @type {import('@nx/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  nx: { babelUpwardRootMode: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /react/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    prependData: `
      @use "sass:map"; 
      @use "@org/styles/main" as *;
    `,
  },
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
};

const plugins = [withNx];
module.exports = composePlugins(...plugins)(nextConfig);
