import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rengana Capital",
    short_name: "Rengana",
    description: "Business and finance advisory for Oman's MSMEs and enterprises.",
    start_url: "/",
    display: "standalone",
    background_color: "#101f3a",
    theme_color: "#101f3a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
