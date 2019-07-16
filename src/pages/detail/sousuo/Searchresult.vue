<template>
    <div class="container">
        <div class="header">
               <div class="header-one" @click="handleClick">
                  <span class="yo-ico">&#xf0343;</span>
               </div>
               <div class="header-two">
                   <span>{{itemvalue}}</span>
               </div>
               <div class="header-there">
                   <span class="yo-ico">&#xe616;</span>
               </div>
        </div>
         <div @click="xianshi">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">品牌</mt-tab-item>
            <mt-tab-item id="2">分类</mt-tab-item>
            <mt-tab-item id="3">功效</mt-tab-item>
            <mt-tab-item id="4">价格</mt-tab-item>
            </mt-navbar>
        </div>
         <div class="styleimg">
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" v-if="`${selected}`==='1'">
                <div class="selected1" v-if="isShow">
                    <div>全部</div>
                  <div v-for="item in brand" :key="item.id" @click="Shuaxuan(itemvalue,'brand_name='+`${item.name}`)">
                     {{item.name}}
                    </div>
                    <div @click="yincang"> <span class="yo-ico">&#xf0343;</span></div>
                </div>
            </mt-tab-container-item>
            
            <mt-tab-container-item id="2" v-if="`${selected}`==='2'">
                <div class="selected1" v-if="isShow">
                    <div>全部</div>
                    <div v-for="item in category" :key="item.id" @click="Shuaxuan(itemvalue,'category_name='+`${item.name}`)">
                        {{item.name}}
                    </div>
                     <div @click="yincang"> <span class="yo-ico">&#xf0343;</span></div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" v-if="`${selected}`==='3'">
                <div class="selected1" v-if="isShow">
                    <div>全部</div>
                    <div v-for="item in fuction" :key="item.id">
                        {{item.name}}
                    </div>
                     <div @click="yincang"> <span class="yo-ico">&#xf0343;</span></div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" v-if="`${selected}`==='4'">
                <div class="selected1" v-if="isShow">
                   <div>全部</div>
                   <div @click="Shuaxuan(itemvalue,'min_price=1&max_price=50')">
                       1-50</div>
                   <div @click="Shuaxuan(itemvalue,'min_price=50&max_price=200')"
                   >50-200</div>
                   <div @click="Shuaxuan(itemvalue,'min_price=200&max_price=1000')"
                   >200-1000</div>
                   <div @click="Shuaxuan(itemvalue,'min_price=1000')"
                   >1000以上</div>
                    <div @click="yincang"> <span class="yo-ico">&#xf0343;</span></div>
                </div>
            </mt-tab-container-item>


            </mt-tab-container>
        </div>
        <div class="goodslist" >
            <Goodslist 
            v-for="item in goodslist"
            :item="item"
            :key="item.item_id"
            > 
            </Goodslist>
        </div>









    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
import http from '../../../utils/http'
import Goodslist from "./goodslist"
export default {
    data(){
        return {
            count:0,
            itemvalue:this.$route.query.name,
            selected: '1',
            isShow:false,
            brand:[],
            category:[],
            fuction:[],
            goodslist:[],
        }
    },
    components:{
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            Goodslist
    },
    async activated(){
        this.itemvalue=this.$route.query.name
        let result = await http.get({
            url:"/search/index?search="+this.$route.query.name+"&page=1&ajax=get"
        })
        this.brand=result.data.filter.brand.slice(0,10)
        this.category=result.data.filter.category.slice(0,10)
        // this.fuction=result.data.filter.function.slice(0,11)
        this.fuction=result.data.filter.function
        this.goodslist=result.data.item_list
    },
    methods:{
        handleClick(){
            this.$router.go(-1)
        },
        yincang(){
            this.isShow=false
        },
        xianshi(){
            this.isShow=true
        },
        async Shuaxuan(name,url){
            this.isShow=false
            let result = await http.get({
            url:"/search/index?search="+name+"&"+url+"&page=1&ajax=get"
            })
             this.goodslist="";
            this.goodslist=result.data.item_list
        }
    }
}
</script>


<style lang="stylus" scoped>
.container
    background #fff
    height 100%
    overflow scroll
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
.styleimg
    position relative
.selected1
     width 100%
     position absolute
     display flex
     flex-wrap wrap
     background #eee
     z-index 15
     div
        width 33.3%
        height .37rem
        text-align center
        line-height .37rem
        border .01rem solid #eee
        ccolor #eee
.is-selected
    border 0 solid red !important
    color #fe4070 !important
.goodslist
    width 100%
    height 2rem
    background #fff
</style>
