<script setup lang="ts">
// 子组件接受父组件

// defineProps({
//   msg: {
//     type: String,
//     required: true,
//     default: "hello",
//   },
//   ageList: Array,
// });

// 无默认值
// defineProps<{
//   msg: String;
//   ageList: Array<Number>;
// }>();

// 给默认值
const props = withDefaults(
  defineProps<{
    msg: string; //这里string s变成小写
    ageList: Array<Number>;
  }>(),
  {
    msg: "hello",
    ageList: () => [19, 19, 20],
  }
);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div v-for="(item, index) in ageList" :key="index">
    <li>
      {{ item }}
    </li>
  </div>
</template>

<style scoped lang="scss"></style>
