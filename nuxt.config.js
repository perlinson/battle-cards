/* eslint-disable nuxt/no-cjs-in-config */
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/battle-cards/',
        },
      }
    : {}

export default {
  ...routerBase,
  // Global page headers: https://go.nuxtjs.dev/config-head

  dev: process.env.NODE_ENV !== 'production',

  telemetry: false,
  publicRuntimeConfig: {
    /** @type {import('io/types').NuxtSocketIoRuntimeOptions} */
    io: {
      sockets: [
        {
          name: 'publicSocket',
          url: 'url1',
        },
      ],
    },
  },
  privateRuntimeConfig: {
    /** @type {import('io/types').NuxtSocketIoRuntimeOptions} */
    io: {
      sockets: [
        {
          name: 'privateSocket',
          url: 'url2',
        },
      ],
    },
  },

  env: {
    MONGO_ALTA_USER: process.env.MONGO_ALTA_USER,
    MONGO_ALTA_PWD: process.env.MONGO_ALTA_PWD,
    SECRET_KEY: process.env.SECRET_KEY,
  },

  head: {
    title: 'front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 3000, // default: 3000
    host: '127.0.0.1', // default: localhost,
    timing: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // 简单使用
    '@nuxtjs/vuetify',
  ],

  router: {
    // middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next',

    'nuxt-socket-io',
  ],

  /** @type {import('io/types').NuxtSocketIoOptions} */
  io: {
    // server: {
    //   cors: {
    //     origin: 'https://example.com',
    //     methods: ['GET', 'POST']
    //   }
    // },
    sockets: [
      {
        name: 'home',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://nuxt-socket-io.herokuapp.com'
            : 'http://localhost:3000',
        vuex: {
          mutations: [{ progress: 'examples/SET_PROGRESS' }],
          actions: [{ chatMessage: 'FORMAT_MESSAGE' }],
          emitBacks: ['titleFromUser'],
        },
        namespaces: {
          '/index': {
            emitters: ['getMessage2 + testMsg --> message2Rxd'],
            listeners: ['chatMessage2', 'chatMessage3 --> message3Rxd'],
          },
        },
      },
      {
        name: 'chatSvc',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://nuxt-socket-io.herokuapp.com'
            : 'http://localhost:3000',
        // vuex: {
        //   mutations: [{ progress: 'examples/SET_PROGRESS' }],
        //   actions: [{ chatMessage: 'FORMAT_MESSAGE' }],
        //   emitBacks: [
        //     'examples/someObj',
        //     'examples/sample',
        //     { 'examples/sample2': 'sample2' },
        //     'titleFromUser'
        //   ]
        // },
        // namespaces: {
        //   '/index': {
        //     emitters: ['getMessage2 + testMsg --> message2Rxd'],
        //     listeners: ['chatMessage2', 'chatMessage3 --> message3Rxd']
        //   },
        //   '/examples': {
        //     emitBacks: ['sample3', 'sample4 <-- myObj.sample4'],
        //     emitters: [
        //       'reset] getProgress + refreshInfo --> progress [handleDone'
        //     ],
        //     listeners: ['progress']
        //   }
        // }
      },
      { name: 'goodSocket', url: 'http://localhost:3000' },
      { name: 'badSocket', url: 'http://localhost:3001' },
      { name: 'work', url: 'http://somedomain1:3000' },
      { name: 'car', url: 'http://somedomain2:3000' },
      { name: 'tv', url: 'http://somedomain3:3000' },
      {
        name: 'test',
        url: 'http://localhost:4000',
        vuex: {
          mutations: [{ progress: 'examples/SET_PROGRESS' }],
          actions: [{ chatMessage: 'FORMAT_MESSAGE' }],
          emitBacks: ['examples/sample', { 'examples/sample2': 'sample2' }],
        },
      },
    ],
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth', method: 'post' },
          //        refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: '/api/user', method: 'get' },
        },
      },
    },
  },

  target: process.env.NODE_ENV === 'production' ? 'static' : 'server',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: { baseURL: 'http://www.perlinson.xyz:8080' },
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target:
        process.env.NODE_ENV === 'production'
          ? 'http://www.perlinson.xyz:3000'
          : 'http://localhost:3000',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
