<template>
    <div class="mianshui">
        <div class="mianshui01">
            <ul>
                <li>
                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" alt="">
                    <span>海外直供</span>
                </li>
                <li>
                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt="">
                    <span>原装正品</span>
                </li>
                <li>
                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt="">
                    <span>急速到货</span>
                </li>
                <li>
                    <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70" alt="">
                    <span>轻松退货</span>
                </li>
            </ul>
            <div>
                <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="">
                &nbsp;
                <span>今日团购，每天10点上新</span>
            </div>
            <jinri v-for="item in resultlist" :key="item.item_id" :item="item"></jinri>
            <weibu></weibu>
        </div>
     </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
import http from "../../utils/http";
import jinri from "../detail/newproduct/jinri";
import weibu from "../detail/newproduct/weibu"
import BScroll from 'better-scroll';
export default {
 data() {
    return {
      resultlist: []
    }
  },
//   接受父组件传过来的bscroll
  props: ["bs"],
  components: {
    jinri,
    weibu
  },
  async mounted() {
 let page = 5;
        let bScroll = new BScroll('.mianshui', {
        probeType:2,
        click: true,
        pullUpLoad: true
        })
    //这里是那边传过来的数据
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    //   进行ajax请求
    let result = await http.get({
      url: "/index/ajaxDealactList?card_id=4057&client_v=1&page="+page
    });
    // 把取出来的数据放在自己的变量里面
    this.resultlist = result.item_list;
    
    Indicator.close();
   
    bScroll.on("pullingUp", async () => {
      page++;
      if (page < 8) {
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
.mianshui
    height  4.3rem
    .mianshui01
            width 100%
            ul
                width 100%
                height .94rem
                display flex
                li
                    flex 1
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    img 
                        width .41rem
                        height .41rem
                    span 
                        font-size .12rem
                        color #666666

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
</style>

