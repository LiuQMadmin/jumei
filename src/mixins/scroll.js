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
        async scroll(vm,document,startpage,endpage,url,nexturl){
            let page = 0
             // 添加弹性滚动效果
             let bScroll = new BScroll(document, {
                pullUpLoad: true,
                click: true
            })
            // 打开加载提醒
            Indicator.open({
                text: "加载中...",
                spinnerType: "triple-bounce"
            })
            // 进行ajax跨域请求
            let result=await http.get({url:url})
            vm.resultlist = result.item_list;
            // 关闭加载提醒
            Indicator.close()
            // 这个是二次加载提醒
            Indicator.open({
                text: "加载中...",
                spinnerType: "triple-bounce"
            });
            bScroll.on("pullingUp", async () => {
                page++;
                if (page < endpage) {
                    // 加载提醒
                    Indicator.open({
                        text: "加载中...",
                        spinnerType: "triple-bounce"
                    })
                    // 第二次ajax跨域请求
                    result = await http.get({
                        url:nexturl
                    })
                    vm.resultlist = vm.resultlist.concat(result.item_list);
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