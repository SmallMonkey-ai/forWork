<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import DefineProps from "./components/DefineProps.vue";
// import DefineEmit from "./components/DefineEmit.vue";
// import SlotsAttrs from "./components/SlotsAttrs.vue";
// const parentClick = (msg: string) => {
//   alert(msg);
// };
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <DefineProps msg="'hello, setup '" :ageList="[18, 19, 20]"></DefineProps> -->
  <!-- <DefineEmit @parentClick="parentClick"></DefineEmit> -->
  <!-- <SlotsAttrs>
    <template #header> my name is father!! </template>
  </SlotsAttrs> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
