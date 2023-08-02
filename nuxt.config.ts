// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: 
    [ 
        '@nuxtjs/tailwindcss',
        // '@headlessui/vue/dist/styles.css',
    ],
    
    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

        // cloudinary
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUDNAME,
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    }
})
