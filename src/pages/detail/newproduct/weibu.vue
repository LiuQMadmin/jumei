<template>
    <div id="weibu">
        <div class="footer">
        <img src="//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg" />
      </div>
      <ul class="tab-clear">
        <li class="checked">触屏版</li>
        <li class>电脑版</li>
      </ul>
      <div class="bottom-rights">
        <p>©2016 聚美优品 Jumei.com</p>
      </div>
    </div>
</template>

<style lang="stylus" scoped>
     .footer {
    width: 100%;
    height: 0.68rem;
    border-top: 0.08rem solid #F5F5F5;
    img {
        width: 100%;
        height: 0.6rem;
    }
    }
    .tab-clear {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    li {
        border: 0.01rem solid #e3e3e3;
        line-height: 0.32rem;
        color: #666;
        font-size: 0.14rem;
        height: 0.32rem;
        width: 0.8rem;
        margin-right: 0.6rem;
        display: inline-block;
        border-radius: 1.25rem;
        text-align: center;
    }

    .checked {
        color: #fe4070;
        }
    }
    .bottom-rights {
    width: 100%;
    height: 0.2rem;
    text-align: center;
    margin-top: 0.23rem;
    color: #999;
    }
</style>

