// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@sidebase/nuxt-auth"],
    auth: {
        defaultProvider: process.env.DEFAULT_PROVIDER,
        enableGlobalAppMiddleware: true
    },
    runtimeConfig: {
        public: {
            callbackPath: process.env.AUTH_CALLBACK_PATH
        }
    }
})

