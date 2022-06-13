<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const value1 = ref("");
// 国际化配置
const { t } = useI18n();
</script>

<template>
  <Home msg="Hello Vue 3 + TypeScript + Vite" />
  <el-date-picker
    v-model="value1"
    type="datetime"
    :placeholder="t('message.pickDateMessage')"
  />
</template>

<style scoped lang="scss"></style>
