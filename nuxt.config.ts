export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-simple-sitemap'
  ],

  css: ['~/assets/css/theme.css', '~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Sheldon Dev - Développeur Fullstack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio de Sheldon Dev, développeur Fullstack passionné spécialisé en Vue.js, Node.js et technologies web modernes.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'Sheldon Dev - Développeur Fullstack' },
        { property: 'og:description', content: 'Portfolio de Sheldon Dev, développeur Fullstack passionné spécialisé en Vue.js, Node.js et technologies web modernes.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://sheldondev.fr' },
        { property: 'og:image', content: 'https://sheldondev.fr/og-image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Sheldon Dev - Développeur Fullstack' },
        { name: 'twitter:description', content: 'Portfolio de Sheldon Dev, développeur Fullstack passionné' },
        { name: 'twitter:image', content: 'https://sheldondev.fr/twitter-image.jpg' },
        // Autres meta tags importants
        { name: 'theme-color', content: '#171420' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Sheldon Dev' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://sheldondev.fr' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  site: {
    url: 'https://sheldondev.fr'
  },

  sitemap: {
    dynamicUrlsApiEndpoint: '/__sitemap',
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '25%' }
    ]
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  icon: {
    mode: 'static'
  },
  
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/projects'
      ]
    },
    compressPublicAssets: true
  },

  build: {
    transpile: ['vue-lanyard', '@iconify/vue']
  },

  compatibilityDate: '2024-12-23'
})