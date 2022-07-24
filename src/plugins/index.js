//组件库的集中管理
import { Swipe, SwipeItem, Popup  } from 'vant';

let plugins = [
    Swipe, SwipeItem, Popup 
]

export default function getVant(app){
    plugins.forEach(item => {
        return app.use(item)
    });
}