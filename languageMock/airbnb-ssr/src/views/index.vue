<script setup lang="ts">
import Header from "../components/header.vue";
import Main from "../components/main.vue";
import Footer from "../components/footer.vue";
// import IndexedDB from "../utils/indexedDB";
import { fetchElephant } from "../api/index";

// // 数据库操作
// const airbnbDB = new IndexedDB("airbnb");
// airbnbDB.openStore("elephant", "id", ["nose", "ear"]);
// // 新增和修改
// function addDB(storeName: string) {
//   airbnbDB.updateItem(storeName, {
//     id: 1,
//     nose: "55m",
//     ear: "很大",
//   });
// }
// // 删除
// function deleteDB(storeName: string, key: number | string) {
//   airbnbDB.deleteItem(storeName, key);
// }

// // 查询
// function getObjectStore(storeName: string) {
//   airbnbDB.getList(storeName);
// }
// // 查询单条数据
// function getObjectStoreItem(storeName: string, key: number | string) {
//   airbnbDB.getItem(storeName, key);
// }

function getElephant() {
  fetchElephant().then((res) => {
    console.log(res);
  });
}
getElephant();
</script>

<template>
  <div class="pageStyle">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
.pageStyle {
  display: flex;
  flex-direction: column;
}
</style>
