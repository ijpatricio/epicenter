import colors from 'vuetify/es5/util/colors'
import configs from './src/configs'
const { locale, availableLocales, fallbackLocale } = configs.locales

const apiBaseUrl = process.env.NODE_ENV === 'production'
  ? 'https://YOUR_URL_HERE' // or get it from process.ENV.YOUR_URL_HERE
  : 'http://localhost'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Epicenter',
    title: 'Epicenter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
      },
      ...configs.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/api.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }],
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      locales: availableLocales,
      lazy: true,
      langDir: 'translations/',
      defaultLocale: locale,
      vueI18n: {
        fallbackLocale
      }
    }],
    // Nuxt 2 only:
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    // Vuex is used by @nuxt/auth, and maybe other modules you might want to use.
    ['@pinia/nuxt', {
      disableVuex: false
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/tailwindcss'
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost'
      },
    },
    redirect: {
      login: '/auth/signin',
      logout: '/auth/signin',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: apiBaseUrl,
    credentials: true,
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //
  },

  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },

  // Fix https://github.com/nuxt-community/tailwindcss-module/issues/480#issuecomment-1138276828
  devServerHandlers: [],

  // Frontend variables (not safe for credentials)
  publicRuntimeConfig: {
    apiBaseUrl
  },

  // SSR variables
  privateRuntimeConfig: {
    //
  }
}
