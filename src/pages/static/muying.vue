<template>
    <div id="muying">
        <div class="muying01">
             <div>
                <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                &nbsp;
                <span>今日特惠</span>
            </div>
            <div>
            <img src="http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1561886971.jpeg?imageView2/2/w/640/q/90" alt="">
            </div>
            <div>
                <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                &nbsp;
                <span>全球热销品牌</span>
            </div>
            <div>
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1560910791.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498559288.jpeg?imageView2/2/w/160/q/90" alt="">
            </div>
            <div>
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1562124746.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp5.jmstatic.com/mobile/card_material/item_5518_1024_512-ipad2048_1562292276.jpeg?imageView2/2/w/320/q/90" alt="">
            </div>
            <div>
                <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                &nbsp;
                <span>精选活动推荐</span>
            </div>
            <div>
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1562047101.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1562047502.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1561086176.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1562292664.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1561700900.jpeg?imageView2/2/w/320/q/90" alt="">
                <img src="http://mp6.jmstatic.com/mobile/card_material/item_5640_1024_1024-ipad2048_1561362995.jpeg?imageView2/2/w/320/q/90" alt="">
            </div>
             <div>
                <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                &nbsp;
                <span>疯抢专场 早10点上新</span>
            </div>
            <muying
               v-for="item in resultlist" 
               :key="item.item_id" 
               :item="item"
            ></muying>
             <weibu></weibu>
        </div>
    </div>
</template>
<script>
import { Indicator, Toast } from "mint-ui";
import http from "../../utils/http";
import muying from "../detail/newproduct/muying"
import weibu from "../detail/newproduct/weibu"
import BScroll from 'better-scroll';
export default {
     data() {
    return {
      resultlist: []
    }
  },
    components:{
        muying,
        weibu
    },


    async mounted() {
        let bScroll = new BScroll('#muying', {
        click: true,
        pullUpLoad: true
        })
    let page = 1;
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
          url: "/index/ajaxDealactList?card_id=4057&client_v=1&page=" + page
        });
        this.resultlist = this.resultlist.concat(result.item_list);
        this.$nextTick(() => {
          bScroll.refresh(); //重置bScroll高度
          Indicator.close(); //关闭那个加载提醒
          bScroll.finishPullUp(); //可以加载下一页了
        });
      } else {
        bScroll.finishPullUp();
        Toast({
          message: "到底了~",
          position: "bottom",
          duration: 2000
        });
      }
    });
  }







}
</script>


<style lang="stylus" scoped>
#muying
    height 4.3rem
    .muying01
        div:nth-child(1)
                width 100%
                height .35rem
                display flex
                align-items center
                justify-content center
                color #333333
                img 
                    width .14rem
                    height .14rem
        div:nth-child(2)
            width 100%
            height 1.6rem
            img 
                width 100%
                height 1.6rem
        div:nth-child(3)
                width 100%
                height .35rem
                display flex
                align-items center
                justify-content center
                color #333333
                img 
                    width .14rem
                    height .14rem
        div:nth-child(4)
            width 100%
            height 1.68rem
            border-bottom .08rem solid #f5f5f5
            img 
                width .8rem
                height .8rem
         div:nth-child(5)
            width 100%
            height .88rem
            border-bottom .08rem solid #f5f5f5
            img 
                width 1.6rem
                height .8rem
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
        div:nth-child(7)
            width 100%
            height 4.8rem
            img 
                width 1.6rem
                height 1.6rem
        div:nth-child(8)
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
