import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// if (process.browser) {
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: '../assets/images/error.png',
        loading: '../assets/images/loading.gif',
        attempt: 3,
        listenEvents: [ 'scroll' ],
    })
// }
