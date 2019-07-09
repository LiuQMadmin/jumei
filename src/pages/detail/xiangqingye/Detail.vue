<template>
<div class="container">
    <main id="detail">
       <div class="detail">
           <div class="header">
               <div class="header-one" @click="handleClick">
                  <span class="yo-ico">&#xf0343;</span>
               </div>
               <div class="header-two">
                   <span>{{name|ellipsis}}</span>
               </div>
               <div class="header-there">
                   <span class="yo-ico">&#xe616;</span>
               </div>
           </div>
           <!-- 这里引入一个轮播图 -->
            <!-- <div class="swiper-container" id="swiper">
                <div class="swiper-container" id="swiper"> -->
                    <!-- <lunbo :imgresult="imgresult"></lunbo> -->
                <!-- </div>
            </div> -->
       </div>
    </main>
    <nav class="nav">
            <div class="nav-one nav-two">
                <span class="yo-ico">&#xf0315;</span>
                <i>店铺</i>
            </div>
            <div class="nav-one">
                <span class="yo-ico">&#xe60c;</span>
                <i>购物车</i>
            </div>
            <div class="nav-there">
                <span>加入购物车</span>
            </div>
            <div class="nav-four">
                <span>立即购买</span>
            </div>
    </nav>
</div>
</template>
<script>
import lunbo from "./imglunbo"
import http from '../../../utils/http'
export default {
    components:{
        lunbo,
    },
    data(){
        return {
            // 这个里面接受ajax里面发来的数据
             resultlist:[],
            //  这个里面接受轮播图片的链接
            imgresult:[],
            name:"BEPERFECT(CARPF)太阳能3D塑形仪滚轮按摩仪提拉紧致瘦下巴"
        }
    },
    // 这个是为了过滤标题名字然后进行添加省略符
    filters: {
        ellipsis (value) {
        if (value.length > 23) {
            return value.slice(0,23) + '...'
        }
        return value
        }
    },
    async mounted(){
        // console.log(this.$route.params.id)
        let imgurl=this.$route.params.id
        console.log(/^ht/.imgurl)
        // if(){
        //     let result=await http.get({
        //      url:"/product/ajaxStaticDetail?item_id="+this.$route.params.id+"&type=global_deal"
        //     })
        // }
        // console.log(result)
        // this.imgresult=result.image_url_set.single_many
        // this.imgresult=result.data
        // console.log(this.imgresult)

    },
    methods: {
    handleClick() {
        // 这个可以进到上一页
        this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
    height 100%
    width 100%
    display flex
    flex-direction column
    #detail
        flex 1
        .detail
        
            .header
                height .38rem
                display flex
                background #fff
                border-bottom .01rem solid red
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
    .nav
        height .42rem
        display flex
        .nav-one
            width .47rem
            height .41rem
            background #fff
            display flex
            flex-direction column
            align-items center
            justify-content center
            span 
                width .21rem
                height .21rem
                font-size .21rem
            i 
                font-size .12rem
                color #979797
        .nav-two
            border-right .013rem solid #f3f3f3
        .nav-there
            flex 1
            text-align center
            line-height .41rem
            color #fe4070
            background linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%) 
        .nav-four
            background linear-gradient(142deg, #ff5593 0%, #fe4070 100%) 
            color #fff
            flex 1
            text-align center
            line-height .41rem
    
        


</style>

