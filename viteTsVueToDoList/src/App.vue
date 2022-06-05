<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";
import { reactive } from "vue";
import { Todo } from "./types/todo";

const state = reactive<{ toDos: Todo[] }>({
  toDos: [
    { id: 1, title: "奥迪", isComputed: false },
    { id: 2, title: "奥迪", isComputed: true },
    { id: 3, title: "奥迪", isComputed: false },
  ],
});

const addToDo = (todo: Todo) => {
  state.toDos.unshift(todo);
};
</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addToDo="addToDo"></Header>
      <List :todo="state.toDos"></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
