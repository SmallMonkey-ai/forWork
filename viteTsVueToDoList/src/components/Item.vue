<script setup lang="ts">
defineProps<{
  todo: {
    title: string;
    isComputed: boolean;
  };
}>();
</script>

<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.isComputed" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<style scoped lang="scss">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  label {
    float: left;
    cursor: pointer;
    input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
  }
  button {
    float: right;
    display: none;
    margin-top: 3px;
  }
}
li:before {
  content: inherit;
}
li:last-child {
  border-bottom: none;
}
</style>
