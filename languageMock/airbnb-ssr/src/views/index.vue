<script setup lang="ts">
import Header from "../components/header.vue";
import Main from "../components/main.vue";
import Footer from "../components/footer.vue";
import IndexedDB from "../utils/indexedDB";

// 数据库操作
const airbnbDB = new IndexedDB("airbnb");
airbnbDB.openStore("elephant", "id", ["nose", "ear"]);
// 新增和修改
function addDB(storeName: string) {
  airbnbDB.updateItem(storeName, {
    id: 1,
    nose: "55m",
    ear: "很大",
  });
}
// 删除
function deleteDB(storeName: string, key: number | string) {
  airbnbDB.deleteItem(storeName, key);
}

// 查询
function getObjectStore(storeName: string) {
  airbnbDB.getList(storeName);
}
// 查询单条数据
function getObjectStoreItem(storeName: string, key: number | string) {
  airbnbDB.getItem(storeName, key);
}
</script>

<template>
  <div class="pageStyle">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  <button @click="addDB('elephant')">增</button>
  <button @click="deleteDB('elephant', 2)">删</button>
  <button @click="getObjectStore('elephant')">查所有</button>
  <button @click="getObjectStoreItem('elephant', 3)">查</button>
</template>

<style scoped lang="scss">
.pageStyle {
  display: flex;
  flex-direction: column;
}
</style>
