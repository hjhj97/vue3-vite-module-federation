<script setup lang="ts">
import { useCountStore } from "../stores";

const props = defineProps<{
  msg: string;
}>();
const emit = defineEmits<{
  (e: "update:msg", value: string): void;
}>();

const handleInput = (e: Event) => {
  emit("update:msg", (e.target as HTMLInputElement).value);
};
const countStore = useCountStore();
</script>

<template>
  <section class="container">
    <h1>I am Remote</h1>
    <input :value="props.msg" @input="handleInput" />
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
