import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/helloWorld'
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        component:HelloWorld
    }
]
export default new VueRouter({
    routes:routes
})