import {baseurl} from '~/plugins/url.js'
import qs from 'qs'
export default{
    async nuxtServerInit ({ commit }, { req, res }) {
        if(req.headers.cookie){
            var cookieArr = req.headers.cookie.split("; ")
            var obj = {};
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].split('=')[0] == 'userinfo'){
                    obj[cookieArr[i].split('=')[0]] = cookieArr[i].split('userinfo=')[1]
                }
            }
            if (obj) {
                const userinfo =obj.userinfo
                commit('SET_USERINFO', qs.parse(userinfo))
            }
        }
    },
    async login({ commit }, { mobile, password }) {
        try {
            let {data} = await this.$axios.post(`http://127.0.0.1:3030/api/login`,{ mobile, password })
            if(data.status == 1){
                commit('SET_USERINFO', data.data)
            }
            return data
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },
}
