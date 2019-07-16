<template>
    <div class="container">


        <div class="header">
                <div class="header-one" @click="handleClick">
                    <span class="yo-ico">&#xf0343;</span>
                </div>
                <div class="header-two">
                    <span>购物车</span>
                </div>
                <div class="header-there">
                    <span class="yo-ico">&#xe616;</span>
                </div>
            </div>

        <div class="container-container">
            <div  class="container-one"
            v-for="item in arr"
            :key="item.id"
            >
            <img :src="item.url" alt="">
            {{item.url}}
            {{item.name}}
            ￥{{item.jumei_price}}
            {{item.count}}
            </div>
        </div>
            <bot></bot>

    </div>
</template>
<script>
import bot from "../detail/bot"
export default {
    data(){
        return {
            arr:[]
        }
    },
    components:{
        bot,
    },
    mounted(){
        // 接受Vuex里面的数据
        this.arr=this.$store.state.goods
    },
    methods:{
        handleClick(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
.container
    height 100%
    width 100%
    display flex
    flex-direction column
    background #fff
    
    .header
        height .38rem
        display flex
        background #fff
        border-bottom .01rem solid #f5f5f5
        .header-one
            width .32rem
            height .38rem
            text-align center
            line-height .38rem
            span 
                font-size .17rem
                font-weight .1rem
        .header-two
            flex 1
            display flex
            line-height .38rem
            justify-content center
        .header-there
            width .32rem
            height .38rem
            text-align center
            line-height .38rem
            span 
                font-size .25rem
    
    img
        width .85rem
        height .85rem
    .container-container
        width 100%
        height 100%
        overflow-y scroll 
        flex 1
</style>


