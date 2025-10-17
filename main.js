import App from './App'
import messages from './locale/index'

let i18nConfig = {
  locale: uni.getLocale(),
  messages
}

// #ifndef VUE3
import Vue from 'vue'

// uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)

// 全局组件注册
import SafeTop from '@/components/safe-top.vue'
import SafeBottom from '@/components/safe-bottom.vue'
import pageContainer from '@/components/page-container.vue'
import ActionSheet from '@/components/action-sheet.vue'
import DateTimePicker from '@/components/date-time-picker.vue'
import Modal from '@/components/modal.vue'
import Popup from '@/components/popup.vue'
import CustomButton from '@/components/custom-button.vue'
import WideButton from '@/components/wide-button.vue'
import MenuItem from '@/components/menu-item.vue'
import OptionItem from '@/components/option-item.vue'
import PopupProgress from '@/components/popup-progress.vue'
Vue.component('safe-top', SafeTop)
Vue.component('safe-bottom', SafeBottom)
Vue.component('page-container', pageContainer)
Vue.component('action-sheet', ActionSheet)
Vue.component('date-time-picker', DateTimePicker)
Vue.component('modal', Modal)
Vue.component('popup', Popup)
Vue.component('custom-button', CustomButton)
Vue.component('wide-button', WideButton)
Vue.component('menu-item', MenuItem)
Vue.component('option-item', OptionItem)
Vue.component('popup-progress', PopupProgress)

// 全局属性方法挂载
import api from '@/api/index.js'
import device from '@/device/index.js'
import dayjs from 'dayjs'
import {BASE_URL} from '@/config.js'
import * as config from '@/config.js'
import * as tools from '@/utils/tools.js'
import * as storageToken from '@/utils/storageToken.js'
Vue.prototype.$config = config;
Vue.prototype.$api = api;
Vue.prototype.$device = device;
Vue.prototype.$tools = tools;
Vue.prototype.$storageToken = storageToken;
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$baseUrl = BASE_URL;

tools.setI18n(i18n);

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  i18n,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n(i18nConfig)
export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  return {
    app
  }
}
// #endif
