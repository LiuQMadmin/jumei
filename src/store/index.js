import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        goods:[],
    },
    mutations:{
        increment(state,option){
            let flag=true
            state.goods.forEach(item => {
                if(item.id===option.id){
                    item.count+=1
                    console.log(item.count)
                    flag=false
                }
            })
            if(flag){
                state.goods.push({...option,count:1})
            }
            console.log(state.goods)
        }
    }
})
export default store