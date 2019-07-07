<template>
    <div class="shouye">
        <Dianji></Dianji>
        <router-view></router-view>
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

