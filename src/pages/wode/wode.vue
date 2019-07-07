<template>

  <!-- 这个编写首页的内容 -->
  <div class="index-container">
    <!-- 主体信息 -->
    <main>
        <wodelist></wodelist>
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
import wodelist from "./detail/wodelist"
export default {
    components:{
        Bot,
        wodelist
    },
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
    nav
        width 100%
        height .418rem
        background #fff
</style>


