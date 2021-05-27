/*
 * @Author: your name
 * @Date: 2020-07-17 16:01:15
 * @LastEditTime: 2020-12-21 10:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\public\config.js
 */
// window.SERVER_PATH = 'http://192.168.0.241/api'; // 开发接口地
// window.SERVER_PATH = 'http://192.168.0.245/api'; // 开发接口地2(新)
window.SERVER_PATH = 'https://admin.dappmi.com/api'; // 测试接口地址.
// window.SERVER_PATH = 'https://admin.linkkn.vip/api'; // 线上(内部).

// if (/192\.168\.0\.24./.test(window.location.href)) {
//   window.SERVER_PATH = 'http://192.168.0.241/api'; // 通用接口地址/
// }
if (/dappmi/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.dappmi.com/api'; // 测试接口地址.
}
// window.SERVER_PATH = 'http://47.57.21.80/api'; // 通用接口地址/
// window.SERVER_PATH = 'http://192.168.3.45:16425'; // 通用接口地址

if (/alpex/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.alpex.pro/api'; // 通用接口地址
}

if (/linkkn/.test(window.location.href)) {
  window.SERVER_PATH = 'https://admin.linkkn.vip/api'; // 线上(内部).
}

// console.error('强制测试服务器')
// window.SERVER_PATH = 'http://47.57.21.80/api'; // 通用接口地址/
var urlPicTmp = /alpex|linkkn/.test(window.location.href) ? '' : '/';
window.SERVER_PATH_PIC = window.SERVER_PATH + '/admin/user/file/upload-file'; // 通用接口地址/
window.SERVER_PATH_FILE = window.SERVER_PATH + '/admin/user/upload/package';
