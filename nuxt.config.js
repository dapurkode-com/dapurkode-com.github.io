import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";
const meta = getSiteMeta();

export default {
  // Part page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "id",
    },
    title: 'Dapur Kode',
    meta: [
      ...meta,
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://dapurkode.com",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    ['@nuxtjs/google-analytics', {
      id: 'G-J90HP1CHS5'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/sitemap",
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  sitemap: {
    hostname: process.env.BASE_URL,
    routes() {
      return getRoutes();
    },
  },

  content: {
    // Options
  },

  fontawesome: {
    icons: {
      solid: [
        'faArrowLeft',
        'faArrowRight',
        'faAngleRight',
        'faDesktop',
        'faMobileAlt',
        'faSearch',
        'faMapMarkerAlt', 'faEnvelope', 'faBars', 'faTimes'
      ],
      brands: [
        'faFacebook',
        'faInstagram',
        'faTwitter',
        'faFacebookSquare'
      ],
    }
  }
}
