import Toast from './Toast.vue'
const VueZToast = {}

/**
 * 暴露插件安装
 * @param {object} Vue vue实例对象
 */
VueZToast.install = (Vue) => {
    const ToastConstructor = Vue.extend(Toast)
    const instance = new ToastConstructor() // 创建Toast子实例
    instance.$mount(document.createElement('div')) // 挂载实例
    document.body.appendChild(instance.$el)
    /**
     * 扩展原生方法，显示toast
     * @param {string} message
     * @param {number} duration
     * @param {object} styleObj
     */
    Vue.prototype.$toast = (message, duration = 2000, styleObj = {
        color: '#FFFFFF',
        backgroundColor: 'rgba(17,17,17,0.7)'
    }) => {
        instance.message = message
        instance.styleObj = styleObj
        if (!message) return
        if (!message.trim()) return
        instance.show = true
        setTimeout(() => {
            instance.show = false
        }, duration)
    }
}
Vue.use(VueZToast)