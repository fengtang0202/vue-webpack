const routes=[
    {
        path:'/',
        component: () => import('../views/index.vue')
    },
    {
        path:'/login',
        component:()=>import('../views/login.vue')
    }
]
export default new VueRouter({
    routes:routes
})