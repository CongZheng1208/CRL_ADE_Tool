import { defineStore } from "pinia";
import { ref } from "vue";

export const status = defineStore("status", () => {
  const activedDevice = ref<string>("GPM 0");
  return { activedDevice };
});
