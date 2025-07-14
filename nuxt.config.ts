// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon','@nuxtjs/tailwindcss'],
  app:{
    head:{
        title:"Canadia",
        meta:[
          {name:'description' , content:'Everything about js'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
    }
  }
})
