import { defineStore } from "pinia";
import { ref } from "vue";

export const userinfo = defineStore("userinfo", () => {
  // const remoteUrl = ref<string>("http://127.0.0.1:9100");
	const remoteUrl = ref<string>("/ade/gpm/load/loadTool");
  const userId = ref<string>("");
  const isLogin = ref<boolean>(false);
  return { userId, isLogin, remoteUrl };
});
