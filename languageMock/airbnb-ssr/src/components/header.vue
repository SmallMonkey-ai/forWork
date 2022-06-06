<script setup lang="ts">
import { AnyColumns } from "element-plus/es/components/table-v2/src/types";
import { ref } from "vue";
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const changeLanguage = (language: string) => {
  console.log(language);
};
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <img src="../assets/img/header/logo.jpeg" alt="" class="logo" />
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <img src="../assets/img/header/changeLanguage.png" alt="" />
      </template>
      <el-menu-item index="2-1" @click="changeLanguage('zhCn')"
        >中文(CN)</el-menu-item
      >
      <el-menu-item index="2-2" @click="changeLanguage('en')"
        >EN(英文)</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  width: 100%;
  .el-menu-item {
    padding-bottom: 10px;
  }
}
.logo {
  width: auto;
  height: 55px;
}
img {
  width: 25px;
  height: 25px;
}
</style>
