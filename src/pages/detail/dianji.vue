<template>
    <div class="btn-dianji">
        <div>
            <span>
            <router-link active-class="active"  to="/shouye/index/jinri">
            今日10点上新
            </router-link>
            </span>
        </div>
        <div>
            <span>
                <router-link active-class="active"  to="/shouye/index/mingri">
                明日10点预告
                </router-link>
                </span>
        </div>
    </div>
</template>
<script>
import mbtnclick from "./Mbtnclick"
import jbtnclick from "./Jbtnclick"
export default {
    components:{
        mbtnclick,
        jbtnclick
    }
}
</script>



<style lang="stylus" scoped>
.btn-dianji
    display flex
    height .37rem
    background #fff !important
    text-align center
    line-height .37rem
    font-size .14rem
    div:nth-child(1)
        flex 1
        color #666666
        color #EF4070 
    div:nth-child(2)
        flex 1
        color #666666 
    .active
        color #EF4070
</style>

