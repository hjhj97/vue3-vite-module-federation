<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const RemoteButton = defineAsyncComponent(() => import("remoteApp/Button"));
</script>

<template>
  <div>
    I am Host
    <RemoteButton />
  </div>
</template>
