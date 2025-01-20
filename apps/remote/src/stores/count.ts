import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore("count", () => {
  const count = ref(0);

  function addCount() {
    count.value++;
  }

  return { count, addCount };
});
