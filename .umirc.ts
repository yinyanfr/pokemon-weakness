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
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "apple-mobile-web-app-title", content: "Pokemon Weakness" },
    { name: "apple-mobile-web-app-orientations", content: "portrait-any" },
  ],
  links: [
    {
      rel: "manifest",
      href: "manifest.json",
    },
  ],
  copy: [
    { from: "src/assets/favicon.ico", to: "dist" },
    { from: "src/assets/manifest.json", to: "dist" },
  ],
};
