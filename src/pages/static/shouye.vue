<template>
    <div>
        <Dianji></Dianji>
        <router-view
            :bs="bs"
        ></router-view>
    </div>
</template>
<script>
import Dianji from "../detail/dianji"
export default {
    data() {
        return {
            bs:{},
        }
    },
     props: ["bs"],
    components:{
        Dianji,
    }
}
</script>
