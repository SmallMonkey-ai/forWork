<script setup lang="ts">
import { AnyColumns } from "element-plus/es/components/table-v2/src/types";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// 国际化配置

const { t } = useI18n();
const { locale: localeLanguage } = useI18n();

const emit = defineEmits(["changeLanguage", ""]);
// 头部选择
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const changeLanguage = (language: string) => {
  console.log(language);
  localeLanguage.value = language;
  emit("changeLanguage", language);
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
      <el-menu-item index="2-1" @click="changeLanguage('zh')">{{
        t("message.languageZh")
      }}</el-menu-item>
      <el-menu-item index="2-2" @click="changeLanguage('en')">{{
        t("message.languageEn")
      }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">{{ t("message.info") }}</el-menu-item>
    <el-menu-item index="4">{{ t("message.other") }}</el-menu-item>
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
