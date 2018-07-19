module.exports = {
  /*
  ** Headers of the page
  */
    head: {
        title: '信户商城',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            { name: 'apple-mobile-web-app-capable', content:'yes'},
            { name: 'apple-mobile-web-app-status-bar-style', content:'black'},
            { name: 'format-detection', content:'telephone=no'},
            { hid: 'description', name: 'description', content: '多、快、好、省' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        ],
        // html head 中创建 script 标签
        script: [
            // { innerHTML: require('./assets/js/flexible_nuxt.js'), type: 'text/javascript', charset: 'utf-8'}
        ],
        // 不对<script>标签中内容做转义处理
        __dangerouslyDisableSanitizers: ['script'],
    },
    /*
    ** Global CSS
    */
    css: [
            {src:'~assets/css/base.css'},
            {src:'swiper/dist/css/swiper.css'},
            {src:'~assets/css/resetSwiper.scss',lang:'scss'},
            {src:'font-awesome/css/font-awesome.min.css'}
        ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#ff5c00' },


    /*
    ** Build configuration
    */
    build: {
        vendor:['axios','mint-ui'],
        // "presets":[
        //     ["es2015",{"modules": false}]
        // ],
        // babel:{
        //     "plugins": [["component", [
        //         {
        //             "libraryName": "mint-ui",
        //             "style": true,
        //         },
        //         'transform-async-to-generator',
        //         'transform-runtime'
        //     ]]],
        //     comments: true
        // },
        /*
        ** Run ESLint on save
        */
        // postcss: [
        //     require('postcss-px2rem')({remUnit: 75})
        // ],
        extend (config, { isDev, isClient }) {
            // if (isDev && isClient) {
            //     config.module.rules.push({
            //         enforce: 'pre',
            //         test: /\.(js|vue)$/,
            //         loader: 'eslint-loader',
            //         exclude: /(node_modules)/
            //     })
            // }
        },

    },
    plugins:[
        { src:'~plugins/axios' },
        { src: '~plugins/mint-ui', ssr: true },
        {src: '~plugins/swiper',ssr:true},
        {src: '~plugins/vue-lazyload',ssr:true},
        '~/plugins/components.js',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
    ],
    proxy: [
        ['/index.php', { target: 'http://120.27.227.156:9004/'}]
    ],
}
