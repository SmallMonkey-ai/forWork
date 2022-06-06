class DB {
    private dbName: string
    private db: any //数据库对象
    constructor(dbName: string) {
        this.dbName = dbName
    }
    // 打开数据库
    public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
        // 这里2表示数据库版本号 且版本号必须递增 默认为0
        const request = window.indexedDB.open(this.dbName, 1)
        // 初始化时 顺序
        request.onupgradeneeded = (event: any) => {
            console.log('数据库升级成功', event)
            const { result }: any = event.target
            const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
            // 创建索引
            if (indexs && indexs.length > 0) {
                indexs.map((v: string) => {
                    store.createIndex(v, v, { unique: false })
                })
            }
            store.transaction.oncomplete = (event: any) => {
                console.log('创建仓库对象成功')
            }
        }
        request.onsuccess = (event: any) => {
            this.db = event.target.result
            console.log('数据库打开成功', event)
        }
        request.onerror = (event) => {
            console.log('数据库打开失败', event)
        }
    }
    // 新增或修改数据库数据
    updateItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({ ...data, upDataTime: new Date().getTime() })
        request.onsuccess = (event: any) => {
            console.log('数据写入成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据写入失败', event)
        }
    }
    // 删除数据库数据
    deleteItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(key)
        request.onsuccess = (event: any) => {
            console.log('数据删除成功', event)
        }
        request.onerror = (event: any) => {
            console.log('数据删除失败', event)
        }
    }

    // 查询所有数据
    getList(storeName: string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.getAll()
        request.onsuccess = (event: any) => {
            console.log('查询所有数据成功', event.target.result)
        }
        request.onerror = (event: any) => {
            console.log('查询所有数据失败', event)
        }
    }
    // 查询某一条数据

    getItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.get(key)
        request.onsuccess = (event: any) => {
            console.log('查询数据成功', event.target.result)
        }
        request.onerror = (event: any) => {
            console.log('查询数据失败', event)
        }
    }
}

export default DB


