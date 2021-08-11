/*
 * @Author: your name
 * @Date: 2020-07-11 17:53:57
 * @LastEditTime: 2020-12-10 15:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\main.js
 */
//
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import Vue, { DirectiveOptions } from 'vue'
import 'default-passive-events'

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n

import '@/styles/index.scss'; // global css

import VueClipboard from 'vue-clipboard2';

import App from './App';
import store from './store';
import router from './router/index';

import _ from 'lodash';

// window.isStaticOrDynamic = "static";
window.isStaticOrDynamic = 'dynamic'; // 使用本地配置路由还是 后台请求得到的路由（两者处理不同）

import '@/icons'; // icon
import '@/permission'; // permission control

import filter from './utils/filter';

import Utils from '@/utils/util';

import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';

install(Utils, '$util');

ElementUI.Dialog.props.closeOnClickModal.default = false;
// set ElementUI lang to EN
Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: 'data-source',
  },
});

Vue.use(VueClipboard);

Vue.config.productionTip = false;

Vue.prototype.$img_api = window.SERVER_PATH_PIC; // 图片上传地址
Vue.prototype.$file_api = window.SERVER_PATH_FILE; // 压缩包上传地址

Vue.prototype.$pageSize = 10;
Vue.prototype._ = _;

Vue.prototype.$variableCoin = 'USDT'; // 默认币种

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

function install(tag, name) {
  Object.defineProperty(Vue.prototype, name, {
    value: tag,
    enumerable: false,
    writable: false,
    configurable: false,
  });
  return install;
}

// if (window.overdueTimeALPEX) {
//   let curTime = +new Date();
//   let overTime = +window.overdueTimeALPEX;
//   if (curTime - overTime > 86400000) {
//     window.overdueTimeALPEX = +new Date();
//     $router.push('/login');
//   }
// } else {
//   window.overdueTimeALPEX = +new Date();
// }
