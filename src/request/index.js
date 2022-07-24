//封装axios
import axios from 'axios'

//创建实例
let service = axios.create({
    baseURL: 'http://101.35.47.166:3000/',
    timeout: 3000
}) 
export default service;