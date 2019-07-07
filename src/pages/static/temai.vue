<template>
  <div id="temai">
    <div>
     
      <temai v-for="item in resultlist" :key="item.item_id" :item="item"></temai>
      <weibu></weibu>
    </div>
  </div>
</template>
<script>
import { Indicator, Toast } from "mint-ui";
import http from "../../utils/http";
import temai from "../detail/newproduct/temai";
import BScroll from "better-scroll";
import weibu from "../detail/newproduct/weibu"
export default {
  data() {
    return {
      resultlist: []
    };
  },
  components: {
    temai,
    weibu
  },

  async mounted() {
    let bScroll = new BScroll("#temai", {
      probeType: 2,
      click: true,
      pullUpLoad: true
    });
    let page = 2;
    //这里是那边传过来的数据
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    //   进行ajax请求
    let result = await http.get({
      url: "/pop/ajaxGetList?page=1&item_per_page=20"
    });
    // 把取出来的数据放在自己的变量里面
    this.resultlist = result.item_list;
    Indicator.close();
    bScroll.on("pullingUp", async () => {
      page++;
      if (page < 8) {
        Indicator.open();
        result = await http.get({
          url: "/pop/ajaxGetList?page=" + page + "&item_per_page=20"
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
};
</script>


<style lang="stylus" scoped>
#temai
    height 4.3rem
    overflow scroll
</style>
