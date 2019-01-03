<template>
    <div>
        <input type="text"  v-model="name" class='tInput'/>
        <input type="text"  v-model="pwd" class='tInput'>
        <button @click="userLogin()" class='submit'>登录</button>
    </div>
</template>
<script>
// import md5 from 'md5'
import Aes from '../config/util'
import {mapActions,mapGetters} from 'vuex'
export default {
    data () {
        return{
            name:'15925655884',
            pwd:123456
        }
    },
    computed:{
        ...mapGetters(['isLogin']),
        loginInfo(){
            return {
                name:this.name,
                pwd:this.pwd
            }
        }
    },
    watch:{
        isLogin(){
            this.isLogin&&this.$router.push('/')
        }
    },
    methods:{
        ...mapActions(['login']),
        async  userLogin(){
            let message=await this.login(this.loginInfo)
            // this.$toast('登录成功!')
        }
    },
    async mounted () {
        
    }
}
</script>

<style lang="less" scoped>
   .tInput{
       width:200px;
       height:48px;
       font-size:26px;
   }
   .submit{
       width:80px;
       height:40px;
       border:0;
       outline:none;
       background:red;
       color:#fff;
       font-size: 28px;
   }
</style>
