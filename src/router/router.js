import  Vue from "vue"
import VueRouter from "vue-router"
import jbtnclick from "../pages/detail/Jbtnclick"
import mbtnclick from "../pages/detail/Mbtnclick"


Vue.use(VueRouter)
let routes=[
    {
        path:"/",
        redirect:"/jinri"
    },
    {
        path:"/jinri",
        component:jbtnclick
    },
    {
        path:"/mingri",
        component:mbtnclick
    }
]
let router=new VueRouter({
    routes
})
export default router