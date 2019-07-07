<template>
    <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide ">
                <span class="active">推荐</span>    
            </div>
            
            <div class="swiper-slide">
                    <span> 母婴健康</span>   
            </div>
            <div class="swiper-slide">       
                    <span>美妆</span>         
            </div>
            <div class="swiper-slide">
                    <span>饰品配饰</span>          
            </div>
            <div class="swiper-slide">
                    <span>礼品箱包</span>
            </div>
            <div class="swiper-slide">
                    <span>家居</span>
            </div>
            <div class="swiper-slide">
                    <span>数码家电</span>
            </div>
            <div class="swiper-slide">
                    <span>女装</span>
            </div>
            <div class="swiper-slide">
               
                    <span>食品保健</span>
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
            padding-bottom .09rem
            color #EF4070
            font-size .14rem
            border-bottom .02rem solid red
</style>
