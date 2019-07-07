<template>
  <div id="toTop"  @click="toTop"
    style="background: url(&quot;//f0.jmstatic.com/btstatic/h5/common/go_top2.png&quot;) left center /contain no-repeat !important;"
  ></div>

</template>


<style lang="stylus" scoped>
#toTop
    position: fixed;
    bottom: .8rem;
    width: .4rem;
    height: .4rem;
    z-index: 200000;
    right: .2rem; 
    // 点击之后进行的事情(对那个弹性盒子做的事情)
    // transform translate(0px, 0px)
    // 这个是什么出现
    opacity: 1;
</style>

