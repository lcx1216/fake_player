//歌单详情页的数据
import service from "..";

export function getItemmusic(data) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}

// 获取歌曲列表
export function getMusicList(data) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}

//获取歌词详情
export function getMusicLyric(data) {
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}

