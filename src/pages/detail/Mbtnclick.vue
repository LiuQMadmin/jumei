<template>
<div id="mingri">
<div>
      <mingri v-for="item in resultlist" :key="item.item_id" :item="item"></mingri>
      <Weibu></Weibu>
</div>
</div>

 
</template>


<script>
import mingri from "./newproduct/mingri";
import Weibu from "../detail/newproduct/weibu"
export default {
  data() {
    return {
      resultlist: []
    }
  },
  components: {
    mingri,
    Weibu
  },
async mounted() {
    this.scroll(
      // 这里面都是参数
      this,
      // 要给那个元素添加弹性滚动
      "#mingri",
      // 开始椰树和结束页数
        1,1,
      // 第一次请求的url
      "/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key=",
      // 第二次请求的url，表示没有第二次请求
      "",
      // 表示这个page分页的时候没有在中间拼接
      "",
    )
  }
}
</script>

<style lang="stylus" scoped>
#mingri
  height 4rem
</style>








