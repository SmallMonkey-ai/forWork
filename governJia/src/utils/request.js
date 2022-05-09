// 封装axios
import axios from 'axios'
// 导入加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入BASE_URl
import {
    BASE_URl
} from '../config'
// 初始化axios 对象
var instance = axios.create({
    baseURL: BASE_URl,
    timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        NProgress.start()
        return config
    },
    function (error) {
        NProgress.done()
        return error
    }
)
// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        NProgress.done()
        return response
    },
    function (error) {
        NProgress.done()
        return error
    }
)

let get = async function (url, params) {
    let {
        data
    } = await instance.get(url, {
        params
    })
    return data
}

let post = async function (url, params) {
    let {
        data
    } = await instance.get(url, params)
    return data
}

// 导出
export {
    get,
    post
}