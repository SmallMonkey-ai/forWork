<script setup lang="ts">
import { onMounted, useSlots } from "vue";

const slots = useSlots();
onMounted(() => {
  console.log(slots.header && slots.header());
});
</script>

<template>
  <h1>child</h1>
  <slot name="header"></slot>
</template>

<style scoped lang="scss"></style>
