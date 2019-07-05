<template>
     <div class="mingri">
          <img :src="item.image_url_set.main['480']" alt="">
     </div>
</template>

<script>
export default {
    props:["item"],
}
</script>



<style lang="stylus" scoped>
.mingri
     width 100%
     height 1.19rem
     border-bottom .08rem solid #F5F5F5
     img 
          width 100%
          height 1.11rem
</style>