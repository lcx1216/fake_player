import service from "..";

//获取轮播图数据
export function getBanner() {
    return service({
        method: "GET",
        url: 'banner?type=2'
    })
}

//获取发现好歌单
export function getMusicList() {
    return service({
        method: 'GET',
        url: '/personalized?limit=10'
    })
}

//搜索
export function getSearch(data) {
    return service({
        method: 'GET',
        url: `/search?keywords=${data}`
    })
}

//登录
export function getLoginData(data) {
    return service({
        method: 'GET',
        url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}

//获取用户详情
export function getUser(data) {
    return service({
        method: 'GET',
        url: `/user/detail?uid=${data}`
    })
}