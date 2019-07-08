<template>
    <div class="container">
        <div class="header-container">
            <div class="header">
                <div class="header-one">
                    <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/back_white_bg.png" alt="">
                </div>
                <div class="header-two">
                    <span>我的聚美</span>
                </div>
                <div class="header-there">
                    <span class="yo-ico">
                         &#xe616;
                    </span>
                </div>
            </div>
            <div class="myimg">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/noportrait.png" alt="">
            </div>
            <div class="in-up">
                <div class="in-up-one">登录</div>
                <div class="in-up-two"></div>
                <div class="in-up-there">注册</div>
            </div>
        </div>
        <div class="mydingdan">
             &nbsp;
            <div class="mydingdan-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/myorder.png" alt="">
            </div>
            <div class="mydingdan-two">
                 &nbsp; 我的订单
            </div>
            <div class="quanbu mydingdan-there">
                 
            查看我的全部订单&nbsp;
            </div>
            <div class="mydingdan-four">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
        <ul class="detaillist">
            <li>
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png" alt="">
                <span>待付款</span>
            </li>
            <li>
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unconfirm.png" alt="">
                <span>待收货</span>
            </li>
            <li>
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/uncomment.png" alt="">
                <span>待评价</span>
            </li>
            <li>
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/refund.png" alt="">
                <span>退货/退款</span>
            </li>
        </ul>
        <div class="zichan">
             &nbsp;
            <div class="zichan-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/myfund.png" alt="">
            </div>
            <div class="zichan-two">
                &nbsp; 我的资产
            </div>
        </div>
        <ul class="youhui">
            <li>现金券</li>
            <li>红包</li>
            <li>聚美余额</li>
            <li>礼品卡</li>
        </ul>
        <div class="shouhou">
             &nbsp;
            <div class="shouhou-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/rmaservice.png" alt="">
            </div>
            <div class="shouhou-two">
                 &nbsp; 售后服务
            </div>
            <div class="shouhou-there">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
        <div class="shouhou">
             &nbsp;
            <div class="shouhou-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/feedback.png" alt="">
            </div>
            <div class="shouhou-two">
                 &nbsp; 意见反馈
            </div>
            <div class="shouhou-there">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
         <div class="shouhou">
             &nbsp;
            <div class="shouhou-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/address.png" alt="">
            </div>
            <div class="shouhou-two">
                 &nbsp; 收货地址
            </div>
            <div class="shouhou-there">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
         <div class="shouhou">
             &nbsp;
            <div class="shouhou-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/logout.png" alt="">
            </div>
            <div class="shouhou-two">
                 &nbsp; 退出登录
            </div>
            <div class="shouhou-there">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
        <div class="shouhou">
             &nbsp;
            <div class="shouhou-one">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/tel.png" alt="">
            </div>
            <div class="shouhou-two">
                 &nbsp; 400-123-8888
            </div>
            <div class="shouhou-there">
                <img src="https://f0.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.container
    .header-container
        width 100%
        height 1.58rem
        background-image: linear-gradient(-204deg,#fd465f 0,#fc5e9f 100%);
        .header
            width 100%
            height .38rem 
            display flex
            padding-bottom .5rem
            .header-one
                width .25rem
                height .38rem
                line-height .38rem
                img     
                    width .25rem
                    height .25rem
            .header-two
                height .38rem
                flex 1
                text-align center
                line-height .38rem
                color #fff
            .header-there
                width .38rem
                height .38rem
                .yo-ico
                    font-size .28rem
                    color #fff
        .myimg
            width 100%
            height .6rem
            text-align center
            img 
                width .6rem
                height .6rem
        .in-up
            width 100%
            height .45rem
            display flex
            justify-content center
            align-items center
            .in-up-one
                width .95rem
                height .25rem
                line-height .25rem
                text-align center
                font-size .18rem
                color #fff
                font-weight 700
            .in-up-two
                height .16rem
                border-left .01rem solid #fff
            .in-up-there
                width .95rem
                height .25rem
                line-height .25rem
                text-align center
                font-size .18rem
                color #fff
                font-weight 700
    .mydingdan
        width 100%
        height .45rem
        border-top .1rem solid #f5f5f5
        line-height .35rem
        display flex
        .mydingdan-one 
            img 
                width .2rem
                height .2rem
        .mydingdan-two
            flex 1
        .mydingdan-four
            padding-right .07rem
            img 
                width .2rem
                height .2rem
        .quanbu
            color #999
            font-size .12rem
    .detaillist
        width 100%
        height .75rem
        border-top .01rem solid #f5f5f5
        border-bottom .04rem solid #f5f5f5
        display flex
        li
            flex 1
            display flex
            flex-direction column
            justify-content center
            align-items center
            img
                width .24rem
                height .24rem
            span
                color #666
                font-size .12rem
    .zichan
        width 100%
        height .46rem
        border-top .1rem solid #f5f5f5
        border-bottom .01rem solid #f5f5f5
        line-height .35rem
        display flex
        .zichan-one
            width .2rem
            height .2rem
            img 
                width .2rem
                height .2rem
        .zichan-two
            flex 1
    .youhui
        height .53rem
        width 100%
        border-bottom .12rem solid #f5f5f5
        display flex
        li
            flex 1
            text-align center
            line-height .41rem
            font-size .12rem
            color #666
    .shouhou
        width 100%
        height .36rem
        border-bottom .01rem solid #f5f5f5
        line-height .35rem
        display flex
        .shouhou-one
            width .2rem
            height .2rem
            img 
                width .2rem
                height .2rem
        .shouhou-two
            flex 1
        .shouhou-there
            padding-right .07rem
            img 
                width .2rem
                height .2rem
</style>

