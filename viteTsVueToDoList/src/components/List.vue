<script setup lang="ts">
import Item from "./Item.vue";
defineProps<{
  todo: Array<{
    id: number;
    title: string;
    isComputed: boolean;
  }>;
}>();
</script>

<template>
  <ul class="todo-main">
    <Item v-for="(item, index) in todo" :key="index" :todo="item"></Item>
  </ul>
</template>

<style scoped lang="scss">
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
