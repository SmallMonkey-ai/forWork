<script setup lang="ts">
// 子传父
// const emits = defineEmits(["parentClick"]);

const emits = defineEmits<{ (e: "parentClick", data: string): void }>();
const clickEmits = () => {
  emits("parentClick", "我是子组件");
};
</script>

<template>
  <button @click="clickEmits">子传父</button>
</template>

<style scoped lang="scss"></style>
