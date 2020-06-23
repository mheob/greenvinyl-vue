export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "CLASSEN Greenvinyl – Der erste Vinyl-Bodenbelag mit dem Blauen Engel",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          // eslint-disable-next-line max-len
          "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#007d52", height: "3px" },
  /*
   ** Global CSS
   */
  css: ["~assets/css/main.css", "~assets/css/wysiwyg.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // Doc: https://gitlab.com/broj42/nuxt-gmaps
    [
      "nuxt-gmaps",
      {
        key: process.env.GOOGLE_API
        // libraries: ['places']
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, ctx) {}
  },
  srcDir: "client/"
}
