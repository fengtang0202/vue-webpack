<template>
    <div id='hello'>
      <input type="text" v-model="msg">
      <span class='test'>{{msgs}}</span>
      <span class='test2'>{{msg1}}</span>
      <img src="../assets/images/1.png"/>
      <img src="../assets/images/4.png"/>
      <img src="../assets/images/5.png"/>
      <div>webpack save</div>
    </div>
</template> 
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    computed:{
        msgs(){
            return Number(this.msg)+1
        },
        msg1(){
            return Number(this.msg)+2
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../assets/style/helloworld.less');
</style>

