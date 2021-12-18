import colors from 'vuetify/es5/util/colors'
import config from './configs'

/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/battle-cards/'
        }
      }
    : {}

const { locale, availableLocales, fallbackLocale } = config.locales
export default {
  ...routerBase,

  /*
   ** For deployment you might want to edit host and port
   */
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  target: process.env.NODE_ENV !== 'production' ? 'server' : 'static',

  dev: process.env.NODE_ENV !== 'production',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - battleCards',
    title: 'battleCards',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  publicRuntimeConfig: {
    masterKey: process.env.MASTER_KEY || 'masterkey'
  },
  privateRuntimeConfig: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/chartist.js',
    '~/plugins/axios',
    { src: '@/plugins/snakbar', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/app', '~/components/game'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module'],
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
        optionsPath: '~/configs/vuetify.js',
        treeShake: true,
        defaultAssets: {
          font: false
        }
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root'
        },
        locales: availableLocales,
        lazy: true,
        langDir: 'translations/',
        defaultLocale: locale,
        vueI18n: {
          fallbackLocale
        }
      }
    ],

    ['@nuxtjs/style-resources'],

    ['nuxt-gsap-module']
  ],

  gsap: {
    /* Module Options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    'nuxt-socket-io',
    [
      '@nuxtjs/auth-next',
      {
        redirect: {
          login: '/login',
          logout: '/',
          callback: '/login',
          home: '/dashboard'
        },
        strategies: {
          local: {
            token: {
              property: 'token',
              global: true,
              required: true,
              type: 'Bearer',
              maxAge: 60 * 60 * 24 * 7
            },
            user: {
              autoFetch: true
            },
            endpoints: {
              login: {
                url: '/api/auth',
                method: 'post'
              },
              //        refresh: { url: "/api/auth/refresh-token", method: "post" },
              logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
              user: { url: '/api/users/me', method: 'get' }
            }
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  styleResources: {
    scss: ['~/assets/vars/*.scss', '~/assets/abstracts/_mixin.scss']
  },
  auth: {},

  router: {
    middleware: ['auth']
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  io: {
    sockets: [
      {
        name: 'home',
        default: true,
        vuex: {
          mutations: [{ progress: 'examples/SET_PROGRESS' }],
          actions: [{ chatMessage: 'FORMAT_MESSAGE' }]
        },
        namespaces: {
          '/index': {}
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: {
    '/api': '~/server/'
  }
}
