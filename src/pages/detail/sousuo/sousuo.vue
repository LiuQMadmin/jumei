<template>
<div class="container">
    <div class="toubukuang">
        <div @click="handleClick">
             <span class="yo-ico">&#xf0343;</span>
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="">
            <input @keyup="inputFunction()" v-model="value" type="text" placeholder="搜索商品名称、品牌、功效" id="search_input" class="search_input">
        </div>
        
        <div class="Mysearch">
            <router-link :to="{path:'/searchresult', query:{ name:value }}">
            <span class="suoyin">搜索</span>
         </router-link>
        </div>
    </div>
     <div  v-for="(item,index) in result" :key="index">
         <router-link class="jieguo" target="div" :to="{path:'/searchresult', query:{ name:item }}">
         <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="">
         <span class="import">{{item}}</span>
        <span class="yo-ico">&#xe62d;</span>
         </router-link>
     </div>
</div>
</template>
<script>
import http from '../../../utils/http'
export default {
    data(){
        return {
            result:[],
            value:""
        }
    },
    methods: {
        handleClick() {
            // 这个可以进到上一页
            this.$router.go(-1)
        },
        async inputFunction(){
            let result=await http.get({
            url:"/index/requestDelegate?url=http%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fsearch%2Fsuggestion.json%3Fkeyword%3D"+this.value+"%26url%3Dhttp%3A%2F%2Fmobile.jumei.com%2Fmsapi%2Fsearch%2Fsuggestion.json"
            })
            this.result=result.data
        }
  },
}
</script>

<style lang="stylus" scoped>
.container
    background #fff
    height 100%
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
        padding-left .05rem
        color #999 
        .suoyin
            color #999 
.jieguo
    width 100%
    height .37rem
    display flex
    line-height .37rem
    img 
        width .13rem
        height .13rem
        margin .1rem
    .import
        flex 1
        color #000 !important
    .yo-ico 
        font-size .1rem
        color #999 
        padding-right .05rem
</style>



