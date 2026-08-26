import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Miniatura YouTube per il video con consenso (YouTubeEmbed.tsx): solo
    // l'immagine statica, mai l'iframe/player finché la persona non clicca
    // per caricarlo.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
