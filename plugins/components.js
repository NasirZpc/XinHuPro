import Vue from 'vue'
import Footer from '../components/Footer'
import BackTop from '../components/BackTop'



const components = { Footer,BackTop }

Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})
