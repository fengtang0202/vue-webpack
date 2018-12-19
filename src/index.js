import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import stroe from './store'
import 'lib-flexible'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
const root=document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = 0
document.body.style.padding = 0
new Vue({
    router,
    stroe,
    render:(h)=>h(App)
}).$mount(root)