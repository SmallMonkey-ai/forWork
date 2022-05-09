import {
    get,
    post
} from '../utils/request'

// 定义一个插件
export default {
    install: function (Vue) {
        Vue.mixin({
            methods: {
                $get(url, params) {
                    return get(url, params)
                },
                $post(url, params) {
                    return post(url, params)
                }
            }
        })
    }

}