<template>
  <div class="swiper-container" id="detail-swiper">
    <div class="swiper-container">
      <div class="swiper-slide"
        v-for="(item,index) in imgresult"
        :key=index
        :item="item"
      ><img :src="item['480']" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgresult"],
  mounted(){
      console.log(this.imgresult)
    //   new Swiper('#detail-swiper',{
    //         autoplay: true,
    //     })
  }
}
</script>
<style lang="stylus" scoped>
#detail-swiper
    width 3.2rem
    height 3.2rem
    background red
    img 
        width 3.2rem
        height 3.2rem

</style>


