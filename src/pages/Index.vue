<template>
  <!-- 这个编写首页的内容 -->
  <div class="index-container">
    
      <toubu></toubu>
    <!-- 主体信息 -->
    <main>
    <div id="gundong">
        <!-- 头部搜索信息 -->
         
        <!-- 这里是导航栏的 -->
            <daohang></daohang>
        <!-- 这里是两个点击事件 -->
            <Dianji></Dianji>
            <!-- 商品的列表 -->
            <!-- <Productlist 
            v-for="item in resultlist" 
            :key="item.item_id"
            :item="item"
            ></Productlist> -->
            <router-view
            :bs="bs"
            ></router-view>
    </div>
    </main>
    <!-- 尾部导航 -->
    <nav>
        <Bot></Bot>
    </nav>
  </div>
</template>
<script>
import Toubu from "./detail/toubu"
import Daohang from "./detail/daohang"
import Dianji from "./detail/dianji"
import Bot from "./detail/bot"
// import Productlist from "./detail/productlist"

import Swiper from "../assets/swiper/js/swiper"
import BScroll from 'better-scroll'
// import http from "../utils/http"
import { Indicator, Toast } from 'mint-ui'
export default {
    
    data() {
        return {
            resultlist:[],
            bs:{},
        }
    },
    components:{
        Toubu,
        Daohang,
        Dianji,
        Bot,
    },


    // 这里暂时没有用了
    async mounted(){
    //     let page = 1
        let bScroll = new BScroll('main', {
            probeType:2,
            click: true,
            pullUpLoad: true
        })
        // 把这个实例传下去
        this.bs=bScroll;
    //     // console.log(this.bs)
        
    // //   数据加载的提示muti
    //   Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'triple-bounce'
    // })
    // //   进行ajax请求
    //  let result =await http.get({
    //         url: '/index/ajaxDealactList?card_id=4057&client_v=1&page=2',
    // })
    // // 把取出来的数据放在自己的变量里面
    // this.resultlist=result.item_list;
    // Indicator.close()

    // bScroll.on('pullingUp', async () => {
    //     page++;
    //     if(page<8){
    //         Indicator.open()
    //         result =await http.get({
    //             url: '/index/ajaxDealactList?card_id=4057&client_v=1&page='+page,
    //         })
    //         this.resultlist=this.resultlist.concat(result.item_list);
    //         this.$nextTick(() => {
    //             bScroll.refresh() //重置bScroll高度
    //             Indicator.close() //关闭那个加载提醒
    //             bScroll.finishPullUp()  //可以加载下一页了
    //         })
    //     }else{
    //         bScroll.finishPullUp()
    //         Toast({
    //             message: '到底了~',
    //             position: 'bottom',
    //             duration: 2000
    //         });
    //     }
        
    // })

},

}
</script>



<style lang="stylus" scoped>
.index-container
    height 100%
    display flex
    flex-direction column
    main
        flex 1
        overflow auto
        position relative
        background #fff
        .hello
            width 100%
            height 1.11rem
    nav
        width 100%
        height .418rem
        background #fff
</style>
