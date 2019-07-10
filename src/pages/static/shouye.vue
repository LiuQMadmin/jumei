<template>
    <div class="shouye">
        <Dianji></Dianji>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
    </div>
</template>
<script>
import Dianji from "../detail/dianji"
export default {
    components:{
        Dianji,
    }
}
</script>
<style lang="stylus" scoped>
</style>

