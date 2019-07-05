<template>
    <div class="bot-div">
        <ul>
            <li class="active">
               <b class="yo-ico">&#xe616;</b>
                <span>首页</span>
            </li>
            <li>
                
                <b class="yo-ico">&#xe618;</b>
                <span>拼团</span> 
            </li>
            <li>
                <b class="yo-ico">&#xe60c;</b>
                <span>购物车</span>
            </li>
            <li>
                <b class="yo-ico">&#xe615;</b>
                <span>我的</span>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
.bot-div
    height 0.418rem
    ul
        height 100%
        display flex
        border-top .005rem solid rgb(238, 238, 238)
        li
            height .5rem
            flex 1
            display flex 
            flex-direction column
            justify-content center 
            align-items center 
            b
                text-align center
                line-height .18rem 
                font-size .2rem
                width .4rem
                height .18rem 
            span
                font-size .12rem
                color #999999
.active
    b
        color rgb(254, 64, 112)
    span 
        color rgb(254, 64, 112) !important
</style>

