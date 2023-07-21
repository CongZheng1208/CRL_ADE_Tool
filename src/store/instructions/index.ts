import { status } from "./status";
import { controll } from "./controll";
import { userinfo } from "./userinfo";

const appStore: any = {};

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.userinfo = userinfo();
  appStore.controll = controll();
  appStore.status = status();
};

export default appStore;
