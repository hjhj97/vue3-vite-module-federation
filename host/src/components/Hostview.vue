<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useCountStore } from "remoteApp/Store";

const countStore = useCountStore();
const RemoteButton = defineAsyncComponent(() => import("remoteApp/Button"));
</script>

<template>
  <div class="container">
    <h1>I am Host</h1>
    <h2>{{ countStore.count }}</h2>
    <button @click="countStore.addCount">Click</button>
  </div>
  <RemoteButton />
</template>
<style scoped>
.container {
  padding: 10px;
  background-color: skyblue;
}
</style>
