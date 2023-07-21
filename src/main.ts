import { createApp } from 'vue';
import App from './App.vue';
import AppLoading from './components/common/app-loading.vue';
import { setupDirectives } from './directives';
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupStore } from './store';
import { setupI18n } from './locales';

import { registerStore } from "./store/instructions";
import { useSocketStoreWithOut } from "@/store/pinia/useSocketStore";
import VueNativeSock from "vue-native-websocket-vue3";

const piniaSocketStore = useSocketStoreWithOut();


setupAssets();

// app loading
const appLoading = createApp(AppLoading);

appLoading.mount('#appLoading');

const app = createApp(App);

// store plugin: pinia
setupStore(app);
registerStore();

// vue custom directives
setupDirectives(app);

// vue router
await setupRouter(app);

setupI18n(app);

// mount app
app.mount('#app');

app.use(
	VueNativeSock,
	`wss://www.kaisir.cn/websocket/${localStorage.getItem("userID")}`,
	{
		// 启用pinia集成 | enable pinia integration
		store: piniaSocketStore,
		// 数据发送/接收使用使用json
		format: "json",
		// 开启手动调用 connect() 连接服务器
		connectManually: true,
		// 开启自动重连
		reconnection: true,
		// 尝试重连的次数
		reconnectionAttempts: 5,
		// 重连间隔时间
		reconnectionDelay: 3000
	}
)
console.log(piniaSocketStore)


export default app;

