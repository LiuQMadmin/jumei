<template>
    <div class="muying">
        <div>
           <img :src="item.image_url_set.main['480']">
        </div>
        <div>
            <div>
                <div>
                    <span>好孩子品牌专场</span>
                </div>
                
                <div>
                     <span>{{getTime}}</span>
                </div>
               
            </div>
             
           <div class="imgmuying">
                <img src="http://p0.jmstatic.com/brand/logo_180/16214.jpg">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            end:this.item.end_time,
            start:this.item.start_time
        }
       
    },
    props:["item"],
   computed:{
       getTime(){
            
            let day=Math.floor((this.end-this.start)/(24*60*60))
            let hours=Math.floor(((this.end-this.start)-(24*60*60)*day)/(60*60))
            let fen=Math.floor(((this.end-this.start)-(24*60*60)*day-(60*60)*hours)/60)
            return "仅剩"+day+"天"+hours+"时"+fen+"分"
        }
   }
        
   
}

</script>









<style lang="stylus" scoped>
.muying
    width 100%
    height 2.17rem !important
    // background red
    div:nth-child(1)
        width 100%
        height 1.6rem
        img 
            width 100%
            height 1.6rem
    div:nth-child(2)
        width 100%
        height .4rem
        display flex
        // background green
        div:nth-child(1)
            width 2.57rem
            height .4rem
           
            div:nth-child(1)
                width 100%
                height .2rem
                padding-left .08rem
                font-size .14rem
                color #333
                margin-top .1rem
            div:nth-child(2)
                width 100%
                height .2rem
                padding-left .08rem
                font-size .12rem
                color #999
        // div:nth-child(2)
        .imgmuying
            width .63rem
            height .32rem
            margin-top .1rem
            // background red
            img 
                width .63rem
                height .32rem

    
</style>
