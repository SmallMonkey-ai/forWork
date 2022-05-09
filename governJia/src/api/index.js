import {
    get,
    post
} from '../utils/request'

export let api_test = async function (params) {
    let res = await get('/basicFramework/anon/follow/anonFocusBigWorkorder/searchBox', params);
    return res
}