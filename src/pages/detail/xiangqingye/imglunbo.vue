<template>
<div>
  <div class="swiper-container" id="detail-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="(item,index) in imgresult.image_url_set.single_many"
        :key=index
        :item="item"
      ><img :src="item['480']" alt="">
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ["imgresult"],
  mounted(){
      console.log(this.imgresult)
      new Swiper('#detail-swiper',{
          effect :"coverflow"
      })
  }
}
</script>
<style lang="stylus" scoped>
#detail-swiper
    width 3.2rem
    height 3.2rem
    img 
        width 3.2rem
        height 3.2rem

</style>


