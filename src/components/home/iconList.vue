<template>
    <div class="iconlist">
        <div class="iconItem">
            <i class="iconfont icon-songlist-01"></i>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <i class="iconfont icon-shipin1"></i>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <i class="iconfont icon-changpian"></i>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <i class="iconfont icon-paihangbang"></i>
            <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less">
.iconlist{
    // width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .25rem;
    .iconItem{
        widows: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconfont{
            font-size: .72rem;
            padding-bottom: .2rem;
        }
        span {
            font-size: .35rem;
        }
    }
}
.iconItem:nth-child(odd) {
            color: rgb(200, 37, 16);
            font-weight: 700;
        }
</style>