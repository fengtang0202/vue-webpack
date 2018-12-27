<template>
    <wc-swiper  v-if="list.length" @transitionend="transitionend" ref="swiper"
      :defaultSlide="0" :interval="2000" :pagination="true" :vLock="true">
        <wc-slide v-for="(v, k) in list" @click='handleGo(v.bookId)' :key="k">
          <img :src="v.activityImgURL" style='height:4rem;width:100%'/>
        </wc-slide>
    </wc-swiper> 
</template>
<script>
import {homeInfo} from '../service/getData'
const wcSwiper=()=>import('../components/wcSwiper.vue')
const wcSlide=()=>import('../components/wcSlide.vue')
  export default {
    components:{
        wcSwiper,
        wcSlide
    },
    data () {
      return {
        list: [],
        currentSlide: 100,
      }
    },
    methods: {
        transitionend (current) {
          this.currentSlide = current;
        },
        handleGo(bookId){
            console.log(bookId)
        }
    },
    async mounted () {
        let homeInfos=await homeInfo
        this.list = homeInfos.data.pictureCarouselVersionTow
    },
  }
</script>
<style lang='less' scoped>
   
</style>
