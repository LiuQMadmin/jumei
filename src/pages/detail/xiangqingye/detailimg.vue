
<template>
  <div class="detail">
    <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">图片详情</mt-tab-item>
      <mt-tab-item id="2">商品参数</mt-tab-item>
      <mt-tab-item id="3">评价</mt-tab-item>
    </mt-navbar>
    </div>

    <div class="styleimg">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" v-if="`${selected}`==='1'" v-html="imgurl.description_info.description">
      </mt-tab-container-item>
      
      <mt-tab-container-item id="2" v-if="`${selected}`==='2'">
        <div class="pingjia">
          <div class="pingjia-one" v-for="item in imgurl.properties" :key="item.property_id">
            <div class="pingjia-one-one">{{item.name}}</div>
            <div class="pingjia-one-two">{{item.value}}</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" v-if="`${selected}`==='3'">
        <mt-cell>333333333333</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
  </div>
</template>
 
<script>
 import { Navbar, TabItem } from 'mint-ui';
export default {
    props:["imgurl"],
    components:{
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
        },
    data() {
        return {
        selected: '1',
        }
    },
  
}
</script>
<style lang="stylus" scoped>
  .is-selected
      color red !important
      border-bottom .02rem solid red !important
      margin-bottom .02rem !important
  .mint-tab-item
      color #000 
  .mint-tab-item-label
      color #000
  .styleimg>>> img
      width 100%
  .pingjia
    width 100%
    height 4rem
    padding-top .2rem
    border-top .01rem solid #f5f5f5
    // background red
    .pingjia-one
        width 100%
        height .36rem
        display flex
        .pingjia-one-one
            width 1rem
            color #999
            padding-left .1rem
        .pingjia-one-two
          padding-right .05rem
          flex 1

</style>

