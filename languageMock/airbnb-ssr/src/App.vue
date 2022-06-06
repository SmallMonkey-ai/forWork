<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
 
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { locale: localeLanguage } = useI18n();

const value1 = ref("");
const locale = ref(en);
const changeLang = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Home msg="Hello Vue 3 + TypeScript + Vite" />
    <el-date-picker
      v-model="value1"
      type="datetime"
      :placeholder="t('message.pickDateMessage')"
    /> -->
   
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss"></style>
