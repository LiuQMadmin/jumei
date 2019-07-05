<template>
    <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide active">
                    <span>首页</span>
            </div>
            <div class="swiper-slide">
                    <span>免税店</span>
            </div>
            <div class="swiper-slide">
                    <span>母婴</span>
            </div>
            <div class="swiper-slide">
                    <span>轻奢</span>
            </div>
            
            <div class="swiper-slide">
                    <span>名品特卖</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     mounted(){
      new Swiper('#swiper',{
            slidesPerView : 4,
        })
    },
}
</script>


<style lang="stylus" scoped>
.swiper-container
    border-bottom .01rem solid #F5F5F5
    position sticky
    top 0
    background #fff
   
    .swiper-slide
        text-align center
        line-height .3755rem
        color #666
    .active
        span 
            padding-bottom .09rem
            color #EF4070
            font-size .14rem
            border-bottom .02rem solid red
</style>
