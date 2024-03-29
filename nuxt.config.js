import { resolve } from "path";

export default {
  // ở alias khai báo image để khi import ảnh sẽ không cần chấm đến thư mục nữa
  alias: {
    images: resolve(__dirname, "./assets/images"),
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs-2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
