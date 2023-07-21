import { defineStore } from "pinia";
import { ref } from "vue";

export const controll = defineStore("controll", () => {
  const activedDevice = ref<"GPM" | "IDU">("GPM");

  const deviceId = ref<number>(1);
	const isOnAir = ref<boolean>(false);
  const isRight = ref<boolean>(false);
  const pos = ref<number>(1);
  const currentMode = ref<string>("");
	// const files = ref<File>();
	const files = ref([]);
  return { deviceId, isRight, pos, activedDevice, isOnAir, currentMode,files };
});


