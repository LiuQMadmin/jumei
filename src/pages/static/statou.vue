<template>

  <!-- 这个编写首页的内容 -->
  <div class="index-container">
    
     <toubu></toubu>
    <!-- 主体信息 -->
    <main>
    <div id="gundong">
        <!-- 头部搜索信息 -->
        
        
        <daohang></daohang>
        
        <!-- 这里是滚动的路由插入 -->
         <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
    </main>
    <!-- 尾部导航 -->
    <nav>
        <Bot></Bot>
    </nav>
  </div>
</template>
<script>
import Toubu from "../detail/toubu"
import Daohang from "../detail/daohang"
import Bot from "../detail/bot"
import Swiper from "../../assets/swiper/js/swiper"
export default {
    components:{
        Toubu,
        Daohang,
        Bot,
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
    nav
        width 100%
        height .418rem
        background #fff
</style>
