import type { NextConfig } from "next";

import NextFederationPlugin from "@module-federation/nextjs-mf";

const configuration = (isServer: boolean) => {
  return {
    name: "banner",
    filename: `static/${isServer ? 'ssr': 'chunks'}/remoteEntry.js`,
    exposes: {
      './Banner': "./pages/components/Banner.tsx",
    },
    shared: {
      tailwindcss: {
        eager: true,
        singleton: true,
      },
    },
    extraOptions: {
      exposePages: true,
    },
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, options) => {
    const {isServer} = options;
    //if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin(configuration(isServer)),
        //new options.webpack.container.ModuleFederationPlugin(federatedConfig),
      );

    return config;
  },
};

export default nextConfig;
