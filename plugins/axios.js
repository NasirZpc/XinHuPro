import Vue from 'vue'
import qs from 'qs'
var vm = new Vue({})

//axios配置
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.headers.sign_time = '12333333'
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        if (process.browser) {
            // vm.$loading()
        }

    })
    $axios.onResponse(response=>{
        // console.log(response)
        if (process.browser) {
            // let load = vm.$loading();
            // load.close();
        }
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}
