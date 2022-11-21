export default {
  npmClient: "yarn",
  plugins: ["@umijs/plugins/dist/locale"],
  locale: {
    antd: true,
    baseNavigator: true,
    baseSeparator: "-",
    default: "zh-CN",
    title: false,
    useLocalStorage: true,
  },
  title: "Pokemon Weakness",
  favicons: ["favicon.ico"],
  metas: [
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "apple-mobile-web-app-title", content: "Pokemon Weakness" },
    { name: "apple-mobile-web-app-orientations", content: "portrait-any" },
    { name: "theme-color", content: "#ffffff" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-starturl", content: "/" },
    { name: "format-detection", content: "telephone=no" },
    { name: "format-detection", content: "address=no" },
  ],
  links: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#ffffff",
    },
    {
      rel: "shortcut icon",
      sizes: "196x196",
      href: "/icon-192x192.png",
    },
  ],
  copy: [{ from: "src/assets/pwa", to: "dist" }],
};
