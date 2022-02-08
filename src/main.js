/*
 * @Author: your name
 * @Date: 2020-07-11 17:53:57
 * @LastEditTime: 2022-02-08 11:21:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\main.js
 */

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import Vue, { DirectiveOptions } from 'vue'
import 'default-passive-events'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import VueClipboard from 'vue-clipboard2'

import App from './App'
import store from './store'
import router from './router/index'

import _ from 'lodash'

// window.isStaticOrDynamic = "static";
window.isStaticOrDynamic = 'dynamic' // 使用本地配置路由还是 后台请求得到的路由（两者处理不同）

import '@/icons' // icon
import '@/permission' // permission control

import filter from './utils/filter'

import Utils from '@/utils/util'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

import FileSaver from 'file-saver'
import XLSX from 'xlsx'

install(Utils, '$util')

ElementUI.Dialog.props.closeOnClickModal.default = false
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(Viewer)
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
    url: 'data-source'
  }
})

Vue.use(VueClipboard)

Vue.config.productionTip = false

Vue.prototype.$img_api = window.SERVER_PATH_PIC // 图片上传地址
Vue.prototype.$file_api = window.SERVER_PATH_FILE // 压缩包上传地址
Vue.prototype.$special_file_api = window.SERVER_PATH_SPECIAL_FILE // 财务管理/特殊调账管理上传EXCEL
Vue.prototype.$forex_file_api = window.SERVER_PATH_FOREX_FILE // 币汇管理/币汇交易对设置/交易对设置 上传EXCEL
Vue.prototype.$activityPhaseTwo_file_api = window.SERVER_PATH_ACTIVITYPHASETWO_FILE // 运营管理/运营活动二期 上传EXCEL

Vue.prototype.$pageSize = 10
Vue.prototype._ = _

// 短信类型
Vue.prototype.$msgTypeArr = [
  { label: '摩杜云', value: 1 },
  { label: '美联软通', value: 2 },
  // { label: '网易网盾', value: '3' },
  { label: 'VONAGE', value: 4 }
]
// 邮件类型
Vue.prototype.$emailTypeArr = [
  { label: '摩杜云', value: 1 },
  { label: 'Umail ', value: 2 },
  { label: 'Spread', value: 3 },
  { label: '阿里云', value: 4 },
  { label: 'MSG91', value: 5 },
  { label: 'GMAIL', value: 6 }
]

// 代理管理/代理财务流水 类型(代理)

Vue.prototype.$agentFinancialFlow_optType_contract = [
  { label: '充币', value: 0, text: '充币', val: 0 },
  { label: '提币待审核', value: 1, text: '提币待审核', val: 1 },
  { label: '提币成功', value: 2, text: '提币成功', val: 2 },
  { label: '提币失败', value: 3, text: '提币失败', val: 3 },
  { label: '买下单', value: 4, text: '买下单', val: 4 },
  { label: '卖下单', value: 5, text: '卖下单', val: 5 },
  { label: '买成交', value: 6, text: '买成交', val: 6 },
  { label: '卖成交', value: 7, text: '卖成交', val: 7 },
  { label: '买撤单', value: 8, text: '买撤单', val: 8 },
  { label: '卖撤单', value: 9, text: '卖撤单', val: 9 },
  { label: '锁仓手动释放可用金额', value: 20, text: '锁仓手动释放可用金额', val: 20 },
  { label: '锁仓冻结金额', value: 21, text: '锁仓冻结金额', val: 21 },
  { label: '锁仓手动释放冻结金额', value: 23, text: '锁仓手动释放冻结金额', val: 23 },
  { label: '广告下架', value: 39, text: '广告下架', val: 39 },
  { label: '币币转入合约全仓账户', value: '76', text: '币币转入合约全仓账户', val: 76 },
  { label: '合约全仓账户转出币币账户', value: '77', text: '合约全仓账户转出币币账户', val: 77 },
  { label: '法币转入合约全仓账户', value: '78', text: '法币转入合约全仓账户', val: 78 },
  { label: '合约全仓账户转入法币账户', value: '79', text: '合约全仓账户转入法币账户', val: 79 },
  { label: '逐仓返佣', value: 88, text: '逐仓返佣', val: 88 },
  { label: '逐仓返佣结算', value: 95, text: '逐仓返佣结算', val: 95 },
  { label: '普通用户手续费返佣', value: 101, text: '普通用户手续费返佣', val: 101 },
  { label: '币币划转至逐仓', value: 50, text: '币币划转至逐仓', val: 50 },
  { label: '逐仓划转至币币', value: 51, text: '逐仓划转至币币', val: 51 },
  { label: '法币划转至逐仓', value: 52, text: '法币划转至逐仓', val: 52 },
  { label: '逐仓划转至法币', value: 53, text: '逐仓划转至法币', val: 53 },
  { label: '币币划转至全仓', value: '54', text: '币币划转至全仓', val: '54' },
  { label: '全仓划转至法币', value: '55', text: '全仓划转至法币', val: '55' },
  { label: '全仓划转至币币', value: '56', text: '全仓划转至币币', val: '56' },
  { label: '法币划转至全仓', value: '57', text: '法币划转至全仓', val: '57' },
  { label: '币币划转至法币', value: 10, text: '币币划转至法币', val: 10 },
  { label: '法币划转至币币', value: 11, text: '法币划转至币币', val: 11 },
  { label: '发送红包', value: '106', text: '发送红包', val: 106 },
  { label: '领取红包', value: '107', text: '领取红包', val: 107 },
  { label: '过期红包退还', value: '108', text: '过期红包退还', val: 108 },
  { label: '补充保证金', value: '109', text: '补充保证金', val: 109 },
  { label: '释放保证金', value: '110', text: '释放保证金', val: 110 }
]

// 代理管理/代理财务流水 类型(币汇)

Vue.prototype.$agentFinancialFlow_optType_coinForex = [
  // 1平仓 2 爆仓 3币汇划入 4币汇转出 5手续费 6隔夜费用 7 点差代理返佣
  { label: '平仓', value: 1, text: '平仓', val: 1 },
  { label: '爆仓', value: 2, text: '爆仓', val: 2 },
  { label: '币汇划入', value: 3, text: '币汇划入', val: 3 },
  { label: '币汇转出', value: 4, text: '币汇转出', val: 4 },
  { label: '手续费', value: 5, text: '手续费', val: 5 },
  { label: '隔夜费用', value: 6, text: '隔夜费用', val: 6 },
  { label: '点差代理返佣', value: 7, text: '点差代理返佣', val: 7 }
]

Vue.prototype.$variableCoin = 'USDT' // 默认币种

Vue.prototype.$FileSaver = FileSaver //设置全局
Vue.prototype.$XLSX = XLSX //设置全局

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

function install(tag, name) {
  Object.defineProperty(Vue.prototype, name, {
    value: tag,
    enumerable: false,
    writable: false,
    configurable: false
  })
  return install
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
