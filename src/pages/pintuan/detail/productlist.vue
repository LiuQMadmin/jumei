<template>
  <div class="pintuan">
      <div class="pintuan-one">
          <img :src="item.image_url_set.single['480']" alt="">
      </div>
      <div class="pintuan-two">
          <div class="goods-middle">    
              <span class="goods-num">{{item.group_name_tag}}</span>
              {{item.short_name}}
        </div>


        <div class="jiage">
            <div class="jiage01"> 
                <div class="one">{{item.jumei_price}}</div>
                <div class="two">{{item.single_price}}</div>
            </div>
            <div class="kaituan01">
                <div class="kaituan">
                去开团
                </div>
            </div>
            
        </div>
        
      </div>
  </div>
</template>
<script>
export default {
    props:["item"]
}
</script>

<style lang="stylus" scoped>
.pintuan
    width 100%
    height 2.3rem
    border-bottom .08rem solid #f5f5f5
    .pintuan-one
        width 100%
        height 1.28rem
        text-align center
        img 
            width 1.28rem
            height 1.28rem
    .pintuan-two
        width 100%
        height .82rem
        padding-left .12rem
        .goods-num
            color #fe4070
        .jiage
            width 100%
            padding-top .06rem
            display flex
            .jiage01
                width 2.4rem
                .one
                    height .2rem
                    font-size .18rem
                    color #fe4070
                .two
                    height .14rem
                    font-size .12rem
                    color #999
            .kaituan01
                width 1rem
                height .4rem
                padding-top .06rem
                .kaituan
                    width .75rem
                    height .26rem
                    text-align center
                    line-height .26rem
                    border-radius 25px
                    background #fe4070
                    color #fff
</style>

