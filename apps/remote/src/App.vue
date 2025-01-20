<script setup lang="ts">
import RemoteButton from "./components/Button.vue";
const props = defineProps<{
  msg: string;
}>();
</script>

<template>
  <RemoteButton :msg="props.msg" />
</template>
