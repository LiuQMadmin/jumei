<template>
  <div id="temai">
    <div>
      <temai v-for="item in resultlist" :key="item.item_id" :item="item"></temai>
      <weibu></weibu>
    </div>
  </div>
</template>
<script>
import temai from "../detail/newproduct/temai";
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
     this.scroll(
      // 这里面都是参数
      this,
      // 要给那个元素添加弹性滚动
      "#temai",
      // 开始页数和结束页数
        1,8,
      // 第一次请求的url
      "/pop/ajaxGetList?page=1&item_per_page=20",
      // 第二次请求的url
      "/pop/ajaxGetList?page=",
      // 表示这个page分页的时候没有在中间拼接
      "&item_per_page=20",
    )




  }
};
</script>


<style lang="stylus" scoped>
#temai
    height 4.3rem
    overflow scroll
</style>
