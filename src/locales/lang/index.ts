import zhCN from './zh-cn';
import en from './en';
import ru from './ru';

const locales = {
  'zh-CN': zhCN,
  en,
  'ru': ru
};

export type LocaleKey = keyof typeof locales;

export default locales;
