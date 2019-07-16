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
            <div class="swiper-container" id="detail-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"
                        v-for="(item,index) in imgresult.image_url_set.single_many"
                        :key=index
                        :item="item"
                    ><img :src="item['480']" alt="">
                    </div>
                </div>
            </div>
            <div class="price">
                <span class="price-one">￥{{jumei_price}}</span>&nbsp;
                <span class="price-two">{{market_price}}</span>
                <span class="price-there">417人已购买</span>
            </div>
            <div class="normal_desc">
                <span class="desc_iconv2">聚美自营</span>
                {{name}}
            </div>
            <div class="postage-wrap">
                <div class="postage-type">运费</div>
                <div class="tip-word">本商品满299元或2件包邮（新疆部分区域除外）</div>
            </div>
            <div class="introductions-content">
                <div class="introduction-type">说明</div>
                <div class="introduction-item">
                    <div class="introduction-item-one">
                        <div>
                             <img src="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" alt="">
                             <span>官方授权</span>
                        </div>
                        <div>
                             <img src="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" alt="">
                             <span>自营保税仓发货</span>
                        </div>
                    </div>
                    <div class="introduction-item-two">
                        <div>
                             <img src="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" alt="">
                             <span>24小时内发货</span>
                        </div>
                    </div>
                    <div class="introduction-item-there">
                        <div>
                             <img src="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" alt="">
                             <span>7天拆封无条件退货</span>
                        </div>
                        <div>
                             <img src="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" alt="">
                             <span>支持分期</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 这里加载商品的图片详情 -->
            <div class="detail-img">
                <detailimg :imgurl="imgresult"></detailimg>
            </div>
            <div class="guanggao">
                您也许还喜欢
            </div>
            <div class="cainixihuan">
                <ul>
                    <li v-for="item in datacaini" :key="item.item_id">
                        <img :src="item.image_url_set.single['480']" alt="">
                        <div class="goodsname">{{item.name}}</div>
                        <div class="goodsprice">
                            <span>¥{{item.jumei_price}}</span>&nbsp;
                            <i>¥{{item.market_price}}</i>
                        </div>
                    </li>
                </ul>
            </div>
            
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
            <div class="nav-there" @click="Gouwuche(`${name}`,imgresult,jumei_price)">
                <span>加入购物车</span>
            </div>
            <div class="nav-four">
                <span>立即购买</span>
            </div>
    </nav>
</div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
import detailimg from "./detailimg"
import http from '../../../utils/http'
export default {
    components:{
        detailimg,
        [Navbar.name]:Navbar,
        [TabItem.name]:TabItem,
    },
    data(){
        return {
            result:{},
            // 这个里面接受ajax里面发来的数据
            resultlist:[],
            //  这个里面接受轮播图片的链接
            imgresult:[],
            name:"",
            datacaini:{},
            jumei_price:0,
            market_price:0
        }
    },
    // 这个是为了过滤标题名字然后进行添加省略符
    filters: {
        ellipsis (value) {
        if (value.length > 18) {
            return value.slice(0,18) + '...'
        }
        return value
        }
    },
    async activated() {
        let imgurl=this.$route.params.id
        this.jumei_price=this.$route.params.jumei_price
        this.market_price=this.$route.params.market_price
        if(/^[ht]/.test(imgurl)){
            let result=await http.get({
             url:"/product/ajaxStaticDetail?item_id="+imgurl+"&type=global_deal"
            })
            let resultcaini=await http.get({
             url:"/recommend/sale?item_id="+imgurl+"&type=global_deal"
            })
            this.imgresult=result.data
            this.name=this.imgresult.qrshare_product_name
            this.datacaini=resultcaini.item_list
            // console.log(result.data.properties)
        }else if(/^[1-9]/.test(imgurl)){
            let result=await http.get({
             url:"/product/ajaxStaticDetail?item_id="+imgurl+"&type=jumei_mall"
            })
            this.imgresult=result.data
            this.name=this.imgresult.qrshare_product_name
        }else{
             let result=await http.get({
             url:"/product/ajaxStaticDetail?item_id="+imgurl+"&type=jumei_pop"
             })
             let resultcaini=await http.get({
             url:"/recommend/sale?item_id="+imgurl+"&type=jumei_pop"
            })
             this.imgresult=result.data
             this.name=this.imgresult.qrshare_product_name
             this.datacaini=resultcaini.item_list
        }
        new Swiper('#detail-swiper',{})
    },
    methods: {
    handleClick() {
        // 这个可以进到上一页
        this.$router.go(-1)
    },
    Gouwuche(name,imgresult,jumei_price){
        this.$store.commit("increment",{
            name,
            id:imgresult.item_id,
            url:imgresult.image_url_set.single_many[0][480],
            jumei_price,
        })
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
    background #fff
    #detail
        flex 1
        overflow-y scroll
        overflow-x hidden
        .detail
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
            .swiper-container
                width 3.2rem
                height 3.2rem
                img 
                    width 3.2rem
                    height 3.2rem
            .price
                width 100%
                height .3rem
                line-height .3rem
                display flex
                padding-right .1rem
                font-size .13rem
                margin-top .1rem
                .price-one
                        font-size 28px
                        width .75rem
                        color #F33873
                .price-two
                    text-decoration line-through
                    padding-top .03rem
                    padding-left .03rem
                    flex 1
            .normal_desc
                width 100%
                height .55rem
                padding-left .08rem
                padding-right .08rem
                .desc_iconv2
                    background #fe4070
                    color #fff
                    font-size .12rem
            .postage-wrap
                width 100%
                height .4rem
                padding-right .2rem
                display flex
                border-bottom .01rem solid #f1f1f1
                font-size .13rem
                .postage-type
                    width .66rem
                    height .4rem
                    padding-left .1rem
                    color #999
                .tip-word
                    height .2rem
                    line-height .15rem
            .introductions-content
                width 100%
                height .83rem
                display flex
                font-size .13rem
                .introduction-type
                    width .45rem
                    height .34rem
                    line-height .34rem
                    color #999
                    padding-left .1rem
                .introduction-item
                    flex 1
                    .introduction-item-one
                        height 33.3%
                        display flex
                        line-height .27rem
                        div
                            padding-left .1rem
                        img 
                            width .12rem
                            height .12rem
                    .introduction-item-two
                        height 33.3%
                        line-height .27rem
                       
                        div
                            padding-left .1rem
                        img 
                            width .12rem
                            height .12rem
                    .introduction-item-there
                        height 33.3%
                        display flex
                        line-height .27rem
                        
                        div
                            padding-left .1rem
                        img 
                            width .12rem
                            height .12rem
            .guanggao
                width 100%
                height .37rem
                background #f5f5f5
                text-align center
                line-height .37rem
            .cainixihuan
                width 100%
                background #F5F5F5
                padding .03rem
                ul 
                    display flex
                    flex-wrap wrap
                    padding .02rem
                    li 
                        width 50%
                        height 2.25rem
                        border .03rem solid #F5F5F5
                        border-radius 10px
                        padding-top .1rem
                        background #fff
                        img     
                            width 100%
                            height 1.38rem
                        .goodsname
                            width 100%
                            height .4rem
                            padding-left .05rem
                        .goodsprice
                            width 100%
                            height .3rem
                            padding-left .05rem
                            span 
                                font-size .18rem
                                color #ED145B
                            i 
                                text-decoration line-through
                                font-size .13rem
            
                    
                    
        
               
                



            
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

