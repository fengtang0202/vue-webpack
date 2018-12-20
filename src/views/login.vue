<template>
    <div>
        <input type="text"  v-model="name" class='tInput'/>
        <input type="text"  v-model="pwd" class='tInput'>
        <button @click="login(userInfo)" class='submit'>登录</button>
    </div>
</template>
<script>
import md5 from 'md5'
import {mapActions} from 'vuex'
export default {
    data(){
        return{
                name:'1',
                pwd:'221'
        }
    },
    computed:{
        userInfo(){
            return {
                name:this.name,
                pwd:md5(this.pwd)
            }
        }
    },
    methods:{
        ...mapActions(['login'])
    },
    mounted(){
        console.log()
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
