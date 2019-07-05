<template>
<div>
      <mingri v-for="item in resultlist" :key="item.item_id" :item="item"></mingri>
</div>
 
</template>


<script>
import { Indicator, Toast } from "mint-ui";
import http from "../../utils/http";
import mingri from "./newproduct/mingri";
export default {
  data() {
    return {
      resultlist: []
    }
  },
  props: ["bs"],
  components: {
    mingri
  },


async mounted() {
    let page = 1;
    //这里是那边传过来的数据
    Indicator.open({
      text: "加载中...",
      spinnerType: "triple-bounce"
    });
    //   进行ajax请求
    let result = await http.get({
      url: "/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key="
    });
    // 把取出来的数据放在自己的变量里面
    this.resultlist = result.item_list;
    console.log(this.resultlist);

    Indicator.close();
    this.bs.on("pullingUp", async () => {
      page++;
      if (page < 3) {
        Indicator.open();
        result = await http.get({
          url: "/index/ajaxDealactList?card_id=4057&client_v=1&page="+page+"&platform=wap&type=pre&page_key=1562308920"
        });
        this.resultlist = this.resultlist.concat(result.item_list);

        this.$nextTick(() => {
          this.bs.refresh(); //重置bScroll高度
          Indicator.close(); //关闭那个加载提醒
          this.bs.finishPullUp(); //可以加载下一页了
        });
      } else {
        this.bs.finishPullUp();
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







