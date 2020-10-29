export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-prismic-ssg-poc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    '@/assets/styles.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '@/plugins/prismicLinks', ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/prismic',
  ],

  // This is where you configure your settings for the new plugin
  prismic: {
    endpoint: 'https://nuxt-prismic-code337.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/linkResolver',
    htmlSerializer: '@/plugins/htmlSerializer',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias.vue = 'vue/dist/vue.common';
    },
  },

  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html',
  },
};
