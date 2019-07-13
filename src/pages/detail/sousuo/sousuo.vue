<template>

    <div class="toubukuang">
        <div @click="handleClick">
             <span class="yo-ico">&#xf0343;</span>
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="">
            <input type="text" placeholder="搜索商品名称、品牌、功效" id="search_input" class="search_input">
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick() {
            // 这个可以进到上一页
            this.$router.go(-1)
        }
  },
}
</script>


<style lang="stylus" scoped>
.toubukuang
    height .3898rem
    width 100%
    background #fff
    display flex
    align-items center
    padding-left .05rem
    div:nth-child(1)
        width .2rem 
        height .2rem
        font-size .18rem
        line-height .19rem
        text-align center
    div:nth-child(2)
        background #F5F5F5
        display flex
        flex 1
        height .2644rem
        border-radius 25px
        text-align center
        line-height .2644rem
        justify-content center
        align-items center
        font-size .14rem
        color #999
        padding-left .1rem
        padding-right .1rem
        img 
            width .16rem
            height .16rem
        input 
            flex 1
            border 0 
            height .22rem
            background #F5F5F5
    div:nth-child(3)
        height .2rem
        width .4rem
        display flex
        align-items center
        padding-left .1rem
        img 
            width .2rem
            height .15rem
</style>



