<template>
    <div id="detail" @click="handleClick">
       <div class="detail">
           <div class="header">
               <div class="header-one">
                  <span class="yo-ico">&#xf0343;</span>
               </div>
               <div class="header-two">

               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    methods: {
    handleClick() {
        // 这句话可以去到上面传进来的id
        console.log(this.$route.params.id)
        // 这个可以进到上一页
        //   this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
.detail
    .header
        .header-one
            width .25rem
            height .25rem
            span 
                font-size .17rem
                font-weight .1rem

</style>

