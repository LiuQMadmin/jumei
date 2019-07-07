<template>
<div id="qingshe">
    <div class="qingshe">
        <div class="swiper-container" id="swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide ">
                    <img src="http://mp6.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1562319543.jpeg?imageView2/2/w/640/q/90" alt="">
                </div>
                <div class="swiper-slide ">
                    <img src="http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1562319583.jpeg?imageView2/2/w/640/q/90" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
            &nbsp;
            <span>今日特惠</span>
        </div>
        <div>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_1654_2048_1024-ipad2048_1562322905.jpeg?imageView2/2/w/640/q/90" alt="">
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
            &nbsp;
            <span>今日热销品牌</span>
        </div>
        <div>
            <div>
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_5d1dc721f366d.jpg?t=1562232610&amp;imageView2/2/w/640/q/90" alt="">
            </div>
            <div>
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5d1dc72787153.jpg?t=1562232615&amp;imageView2/2/w/640/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5d1dc72c4ff03.jpg?t=1562232620&amp;imageView2/2/w/640/q/90" alt="">
            </div>
        </div>
        <div>
            <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
            &nbsp;
            <span>精选活动</span>
        </div>
        <qingshe
         v-for="item in resultlist" 
        :key="item.item_id" 
        :item="item"
        ></qingshe>
        <Weibu></Weibu>
    </div>
    
</div>

   
</template>

<script>
import { Indicator, Toast } from "mint-ui";
import http from "../../utils/http";
import BScroll from 'better-scroll';
import qingshe from "../detail/newproduct/qingshe"
import Weibu from "../detail/newproduct/weibu"

export default {
    data() {
    return {
      resultlist: []
    }
  },
    components:{
        qingshe,
        Weibu
    },
    async mounted(){
        let page=1;
        let bScroll = new BScroll('#qingshe', {
        probeType:2,
        click: true,
        pullUpLoad: true
        })
      new Swiper('#swiper1',{
            autoplay:true,
            effect : 'coverflow',
        })

    //这里是那边传过来的数据
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    //   进行ajax请求
    let result = await http.get({
      url: "/muandbaby/ajaxList?page=1&card_id=7430"
    });
    // 把取出来的数据放在自己的变量里面
    this.resultlist = result.item_list;
    Indicator.close();
    bScroll.on("pullingUp", async () => {
      page++;
      if (page < 1) {
        Indicator.open();
        result = await http.get({
          url: "/muandbaby/ajaxList?page="+ page+"&card_id=7430" 
        });
        this.resultlist = this.resultlist.concat(result.item_list);
        this.$nextTick(() => {
          bScroll.refresh(); //重置bScroll高度
          Indicator.close(); //关闭那个加载提醒
          bScroll.finishPullUp(); //可以加载下一页了
        });
      } else {
        bScroll.finishPullUp()
        Toast({
          message: "到底了~",
          position: "bottom",
          duration: 2000
        })
      }
    });





    },
}
</script>
<style lang="stylus" scoped>
#qingshe
    height 4rem
    .qingshe
        .swiper-wrapper
            .swiper-slide
                width 100%
                height 1.31rem
                img 
                    width 100%
                    height 1.31rem
        div:nth-child(2)
            width 100%
            height .35rem
            display flex
            align-items center
            justify-content center
            color #333333
            img 
                width .14rem
                height .14rem
        div:nth-child(3)
            width 100%
            height 1.6rem
            img 
                width 100%
                height 1.6rem
        div:nth-child(4)
            width 100%
            height .35rem
            display flex
            align-items center
            justify-content center
            color #333333
            img 
                width .14rem
                height .14rem
        div:nth-child(5)
            width 100%
            height 3.2rem
            div:nth-child(1)
                width 100%
                height 1.6rem
                img 
                    width 100%
                    height 1.6rem
            div:nth-child(2)
                width 100%
                height 1.6rem
                img 
                    width 1.6rem
                    height 1.6rem
        div:nth-child(6)
            width 100%
            height .35rem
            display flex
            align-items center
            justify-content center
            color #333333
            img 
                width .14rem
                height .14rem
    



</style>

