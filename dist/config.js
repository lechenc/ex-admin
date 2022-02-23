/*
 * @Author: your name
 * @Date: 2020-07-17 16:01:15
 * @LastEditTime: 2022-02-21 11:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\public\config.js
 */
// window.SERVER_PATH = 'http://192.168.0.241/api'; // 开发接口地
window.SERVER_PATH = 'https://exchange-admin-test.alphatest.vip/api' // 测试接口地址.

// // 开发接口地址.
// if (/241|localhost/.test(window.location.href)) {
//   window.SERVER_PATH = 'http://192.168.0.241/api' 
// }

// 开发接口地址.
if (/241/.test(window.location.href)) {
  window.SERVER_PATH = 'http://192.168.0.241/api' 
}

// 老测试接口地址.
if (/dappmi/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.dappmi.com/api' 
}

// 测试
if (/exchange-admin-test/.test(window.location.href)) {
  window.SERVER_PATH = 'https://exchange-admin-test.alphatest.vip/api' // 测试接口地址.
}

// 预发布
if (/exchange-admin-uat/.test(window.location.href)) {
  window.SERVER_PATH = 'https://exchange-admin-uat.alphatest.vip/api'
}

if (/alpex/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.alpex.pro/api' // 通用接口地址
}

if (/flyex/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.flyex.vip/api' // 测试接口地址.
}

// 线上
if (/linkkn/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.linkkn.vip/api' // 线上(内部).
}


// console.error('强制测试服务器')
// window.SERVER_PATH = 'http://47.57.21.80/api'; // 通用接口地址/
var urlPicTmp = /241|alpex|localhost|linkkn|test|uat/.test(window.location.href) ? '' : '/'
window.SERVER_PATH_PIC = window.SERVER_PATH + '/admin/user/file/upload-file' // 通用接口地址/
window.SERVER_PATH_FILE = window.SERVER_PATH + '/admin/user/upload/package'
window.SERVER_PATH_SPECIAL_FILE =
  window.SERVER_PATH + '/admin/account/file/special-reconciliation-excel' // 财务管理/特殊调账管理上传
window.SERVER_PATH_FOREX_FILE = window.SERVER_PATH + '/forex/admin/file/export/upload-file' // 币汇管理/币汇交易对设置/交易对设置 上传EXCEL
window.SERVER_PATH_ACTIVITYPHASETWO_FILE = window.SERVER_PATH + '/admin/account/file/reward-excel' // 币汇管理/币汇交易对设置/交易对设置 上传EXCEL
