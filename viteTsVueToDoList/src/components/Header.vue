<script setup lang="ts">
import { ref } from "vue";
import { Todo } from "../types/todo";
const addToDo = defineEmits<{ (e: "addToDo", data: Todo): any }>();
const add = () => {
  const text = title.value;
  if (!text.trim()) return;
  const todo = {
    id: Date.now(),
    title: text,
    isComputed: false,
  };
  addToDo("addToDo", todo);
  title.value = "";
};
const title = ref("");
</script>

<template>
  <div class="todo_header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<style scoped lang="scss">
.todo_header {
  input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
}
</style>
