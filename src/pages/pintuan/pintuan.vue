<template>

  <!-- 这个编写首页的内容 -->
  <div class="index-container">
    <!-- 主体信息 -->
    <main>
    <div id="gundong">
        <!-- 头部搜索信息 -->
        <daohang></daohang>
        <div class="yiqituan">
            <div class="container">
                <productlist
                v-for="item in resultlist" 
                :key="item.item_id" 
                :item="item"
                ></productlist>
                <weibu></weibu>
            </div>
        </div>
    </div>
    </main>
    <!-- 尾部导航 -->
    <nav>
        <Bot></Bot>
    </nav>
  </div>
</template>
<script>
//https://f0.jmstatic.com/static_account/dist/v1.0.157339
import Bot from "../detail/bot"
import daohang from "./detail/daohang"
import productlist from "./detail/productlist"
import weibu from "../detail/newproduct/weibu"
export default {
     data() {
    return {
      resultlist: []
    }
  },
    components:{
        Bot,
        daohang,
        productlist,
        weibu
    },
    async mounted() {
    this.scroll(
      // 这里面都是参数
      this,
      // 要给那个元素添加弹性滚动
      ".yiqituan",
      // 开始椰树和结束页数
        1,8,
      // 第一次请求的url
      "/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20",
      // 第二次请求的url
      "/yiqituan/tab_list?tab=coutuan_home&page=",
      // 表示这个page分页的时候没有在中间拼接
      "&per_page=20",
    )
  }
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
        .yiqituan
            height 4.5rem
    nav
        width 100%
        height .418rem
        background #fff
</style>

