import  Vue from "vue"
import VueRouter from "vue-router"
import jbtnclick from "../pages/detail/Jbtnclick"
import mbtnclick from "../pages/detail/Mbtnclick"
import statou from "../pages/static/statou"
import shouye from "../pages/static/shouye"
import mianshui from "../pages/static/mianshui"
import muying from "../pages/static/muying"
import qingshe from "../pages/static/qingshe"
import temai from "../pages/static/temai"
import pintuan from "../pages/pintuan/pintuan"
import wode from "../pages/wode/wode"
import Detail from "../pages/detail/xiangqingye/Detail"
Vue.use(VueRouter)
let routes=[
    {
        path:"/",
        redirect:"/shouye",
        // component:statou,
    },
    {
        path:"/shouye",
        component:statou,
        children:[
            {
                path:"/shouye",
                redirect:"/shouye/index",
            },
            {
                // 这里是今日或者明日的商品路由
                path:"/shouye/index",
                component:shouye,
                children:[
                    {
                        path:"/shouye/index",
                        redirect:"/shouye/index/jinri"
                    },
                    {
                        path:"/shouye/index/jinri",
                        component:jbtnclick
                    },
                    {
                        path:"/shouye/index/mingri",
                        component:mbtnclick
                    }
                ]
            },
            {
                path:"/shouye/mianshui",
                component:mianshui,
            },
            {
                path:"/shouye/muying",
                component:muying,
            },
            {
                path:"/shouye/qingshe",
                component:qingshe,
            },
            {
                path:"/shouye/temai",
                component:temai,
            },

            
        ]

    },
    {
        path:"/pintuan",
        component:pintuan,
    },
    {
        path:"/wode",
        component:wode,
    },
    {
        path: '/detail/:id',
        // 这个是push的时候起到的作用，能根据这个name来添加模板
        name: 'detail',
        component: Detail
    }
   
]
let router=new VueRouter({
    routes
})
export default router