import { http } from '../utils/http'
import IndexedDB from "../utils/indexedDB";
const airbnbDB = new IndexedDB('airbnb')


// 真实接口
export function fetchRoomList() {
    return http.httpGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}

// mock 数据
export async function fetchElephant() {
    await airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
    const result = await airbnbDB.getList('elephant').then(res => {
        return {
            code: '0000',
            message: '操作成功',
            result: res,
            success: true
        }
    })
    return result
}