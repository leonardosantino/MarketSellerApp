import type { Metadata, Viewport } from "next";

import { color } from "@/com/ui/style/scheme";

export const appViewport: Viewport = {
  themeColor: color.primary,
};

export const appMetadata: Metadata = {
  title: "Opção Supermercado",
  description: "Sistema de gerenciamento",
  manifest: "/manifest.json",

  appleWebApp: {
    title: "Opção Supermercado",
    statusBarStyle: "default",
    startupImage: {
      url: "/images/screen-720-1280.png",
    },
  },

  other: {
    "mobile-web-app-capable": "yes",
  },
};
