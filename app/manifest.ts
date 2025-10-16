import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Garden — Eric",
    short_name: "My Garden",
    theme_color: "#FBF2E6",
    background_color: "#FBF2E6",
    display: "standalone",
    icons: [
      { src: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { src: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { src: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
