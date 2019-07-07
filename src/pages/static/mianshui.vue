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
import jinri from "../detail/newproduct/jinri";
import weibu from "../detail/newproduct/weibu"
export default {
 data() {
    return {
      resultlist: []
    }
  },
  components: {
    jinri,
    weibu
  },
  async mounted() {
    this.scroll(
      // 这里面都是参数
      this,
      // 要给那个元素添加弹性滚动
      ".mianshui",
      // 开始椰树和结束页数
        5,8,
      // 第一次请求的url
      "/index/ajaxDealactList?card_id=4057&client_v=1&page=5",
      // 第二次请求的url
      "/index/ajaxDealactList?card_id=4057&client_v=1&page=",
      // 表示这个page分页的时候没有在中间拼接
      "",
    )
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

