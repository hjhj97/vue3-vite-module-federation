<script setup lang="ts">
import { useCountStore } from "../stores";

const props = defineProps<{
  msg: string;
}>();
const countStore = useCountStore();
</script>

<template>
  <section class="container">
    <h1>I am Remote - {{ props.msg }}</h1>
    <h2>{{ countStore.count }}</h2>
    <button @click="countStore.addCount">Click</button>
  </section>
</template>
<style scoped>
.container {
  padding: 10px;
  background-color: springgreen;
}
</style>
