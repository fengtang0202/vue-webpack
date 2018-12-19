<template>
    <div>
        <input type="text"  v-model="user.name" class='tInput'/>
        <input type="text"  v-model="user.pwd" class='tInput'>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                name:'',
                user:''
            }
        }
    }
}
</script>

<style lang="less" scoped>
   .tInput{
       width:200px;
       height:48px;
       font-size:26px;
   }
</style>
