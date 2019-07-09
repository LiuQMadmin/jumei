<template>
  <div id="jinri">
    <div class="jinri" :class="{'toTop':isActive==1}"  >
      <jinri v-for="item in resultlist" :key="item.item_id" :item="item"></jinri>
      <Weibu></Weibu> 
    </div>
  </div>
</template>

<script>
import jinri from "./newproduct/jinri";
import Weibu from "../detail/newproduct/weibu"
import fanhui from "./newproduct/fanhui"
export default {
  data() {
    return {
      resultlist: [],
      isActive:0,
    }
  },
  components: {
    jinri,
    Weibu,
    fanhui
  },
  methods:{
    toTop(){
     this.isActive=1
    }
  },
  // 这里本来是mounted函数
    async mounted() {
    this.scroll(
      // 这里面都是参数
      this,
      // 要给那个元素添加弹性滚动
      "#jinri",
      // 开始页数和结束页数
        1,8,
      // 第一次请求的url
      "/index/ajaxDealactList?card_id=4057&client_v=1&page=2",
      // 第二次请求的url
      "/index/ajaxDealactList?card_id=4057&client_v=1&page=",
      // 表示这个page分页的时候没有在中间拼接
      "",
    )
  },
  // activated(){
  //    this.scroll(this,"#jinri",1,8,)
  // }
}
</script>
<style lang="stylus" scoped>
#jinri
    height 4rem
</style>