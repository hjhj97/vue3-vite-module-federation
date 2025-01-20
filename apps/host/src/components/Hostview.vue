<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useCountStore } from "remoteApp/Store";

const msg = ref("hello");

const countStore = useCountStore();
const RemoteButton = defineAsyncComponent(() => import("remoteApp/Button"));

const handleInput = (e: Event) => {
  msg.value = (e.target as HTMLInputElement).value;
};
</script>

<template>
  <div class="container">
    <h1>I am Host</h1>
    <input type="text" v-model="msg" />
    <h2>{{ countStore.count }}</h2>
    <button @click="countStore.addCount">Click</button>
  </div>
  <RemoteButton :msg="msg" @update:msg="handleInput" />
</template>
<style scoped>
.container {
  padding: 10px;
  background-color: skyblue;
}
</style>
