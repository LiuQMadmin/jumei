<template>
        <div  @click="handleClick(item)" class="list" :style="{backgroundImage: 'url('+item.image_url_set.single['480']+')'}">
        <div>
            <div class="proname">{{item.name}}
            </div>
            <div>¥<span class="price">{{item.jumei_price}}</span>&nbsp;
            <span class="del-price">¥{{item.market_price}}</span>
            </div>

            <div>
                <!-- {{item.deal_comments_number}}条评论 -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["item"],
    methods:{
        handleClick(item) {
        this.$router.push({
            name: 'detail',
            // 把这个参数传递给动态路由
            params: {
            id:item.item_id,
            jumei_price:item.jumei_price,
            market_price:item.market_price
            }
        })
        }
    }
}
</script>

<style lang="stylus" scoped>
.list
    width 100%
    height 1.1092rem
    border-bottom .08rem solid #F5F5F5
    padding-right .1rem
    background-size .85rem .85rem
    background-repeat no-repeat
    background-position .1rem 
    div:nth-child(1)
        width 1.74rem
        height 100%
        float right
        div:nth-child(1)
            width 1.74rem
            height .34rem
            font-size .13rem
            margin-top .1rem
        div:nth-child(2)
            width 100%
            height .25rem
            margin-top .55rem
            color #FE4070
            .price
                font-size .2rem
            .del-price
                color #999
                font-size .12rem
                text-decoration line-through
        div:nth-child(3)
            width 100%
            height .16rem
            background #fff
            color #999
            font-size 11px
</style>

