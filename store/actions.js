// import axios from 'axios'
import {baseurl} from '~/plugins/url.js'
export default{
    async nuxtServerInit ({ commit }, { req, res }) {
        if(req.headers.cookie){
            var cookieArr = req.headers.cookie.split('; ');
            var obj = {};
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].split('=')[0] == 'token'){
                    obj[cookieArr[i].split('=')[0]] = cookieArr[i].split('=')[1]
                }
            }
            if (obj) {
                const token =obj.token
                commit('SET_TOKEN', token)
            }
        }
    },
    async login({ commit }, { mobile, password }) {
        try {
            let {data} = await this.$axios.post(`http://127.0.0.1:3030/api/login`,{ mobile, password })
            if(data){
                commit('SET_TOKEN', data)    
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },
}
