import Vue from 'vue'
// 这个是进行ajax请求的
import http from '../utils/http'
// 这个是弹性滚动的
import BScroll from 'better-scroll'
// 这里是出现交互效果的
import { Indicator, Toast } from 'mint-ui'


// 定义一个混入，就是提取出来公共的部分，可以在全局进行引用挂在在Vue上面
Vue.mixin({
    methods:{
        async scroll(vm,document,startpage,endpage,url,starturl,endurl){
            let page = startpage
             // 添加弹性滚动效果
             let bScroll = new BScroll(document, {
                pullUpLoad: true,
                click: true
            })
            // 这里是为了获取滚动距离
            // bScroll.on("scroll",()=>{
            //     console.log(bScroll.y)
            // })
           
            // 打开加载提醒
            Indicator.open({
                text: "加载中...",
                spinnerType: "triple-bounce"
            })
            // 进行ajax跨域请求
            let result=await http.get({url:url})
            if(result.item_list!==undefined){
                vm.resultlist = result.item_list;
            }else{
                vm.resultlist = result.data;
            }
            // 关闭加载提醒
            Indicator.close()
            bScroll.on("pullingUp", async () => {
                console.log()
                page++;
                // 总共可以加载endpage页数据
                if (page < endpage) {
                    // 加载提醒
                    Indicator.open({
                        text: "加载中...",
                        spinnerType: "triple-bounce"
                    })
                    // 第二次ajax跨域请求
                    result = await http.get({
                        url:starturl+page+endurl
                    })
                    if(result.item_list!==undefined){
                        vm.resultlist = vm.resultlist.concat(result.item_list);
                    }else{
                        vm.resultlist = vm.resultlist.concat(result.data);
                    }
                    vm.$nextTick(() => {
                        bScroll.refresh(); //重置bScroll高度
                        Indicator.close(); //关闭那个加载提醒
                        bScroll.finishPullUp(); //可以加载下一页了
                    })
                }else{
                    bScroll.finishPullUp()
                    Toast({
                    message: "已经到达底部了~",
                    position: "bottom",
                    duration: 1000
                    })
                }
            })














        }
    }
})