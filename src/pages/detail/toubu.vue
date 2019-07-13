<template>
<!-- 这里一级路由 -->
    <router-link active-class="active" exact to="/search">
    <div class="toubu">
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="">
            <span>搜索商品 分类 功效</span>
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt="">
        </div>
    </div>
    </router-link>
</template>


<style lang="stylus">
.toubu
    height .3898rem
    width 100%
    background #fff
    padding-left .2rem
    padding-right .1rem
    display flex
    align-items center
    div:nth-child(1)
        background #F5F5F5
        flex 1
        height .2644rem
        border-radius 25px
        text-align center
        line-height .2644rem
        font-size .14rem
        color #999
        img 
            width .2rem
            height .16rem
            padding-right .05rem
    div:nth-child(2)  
        height .2rem
        width .35rem
        display flex
        align-items center
        padding-left .15rem
        img 
            width .2rem
            height .15rem
            float right

</style>

