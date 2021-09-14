/*
 * @Author: your name
 * @Date: 2020-04-07 17:08:50
 * @LastEditTime: 2020-09-23 16:40:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\api\axios.js
 */
import axios from 'axios'
import { getToken } from '@/utils/auth'
import { removeToken } from '@/utils/auth'
// import Cookies from 'js-cookie'
import Router from '@/router'
import { MessageBox } from 'element-ui'
// import Sign from '@/api/sign'
// import { md5 } from '@/utils/module_md5'
// import store from '@/store'

axios.defaults.baseURL = window.SERVER_PATH

// axios.defaults.baseURL = "http://192.168.0.220/api"; // 开发
// axios.defaults.baseURL = "https://exchange-admin-uat.alphatest.vip/api"; // 预发布

// request 拦截器
axios.interceptors.request.use(
  function(config) {
    const data = { ...(config.data || {}) }
    // const token = getToken("admin_token") || "";
    config.headers.deviceType = 3
    // sourceType 后管端类型
    config.headers.sourceType = 0
    if (data.login) {
      delete config.data.login
    } else {
      const token = getToken('admin_token') || ''
      if (token) {
        config.headers.token = token
      }
    }
    if (typeof data.startTime !== 'undefined') {
      if (
        data.startTime === null ||
        (typeof data.startTime !== 'number' && new Date(data.startTime).getFullYear() === 1970)
      ) {
        delete data.startTime
      }
    }
    if (typeof data.endTime !== 'undefined') {
      if (
        data.endTime === null ||
        (typeof data.endTime !== 'number' && new Date(data.endTime).getFullYear() === 1970)
      ) {
        delete data.endTime
      }
    }
    // aes签名
    // const time = +new Date();
    // config.headers.time = time;
    // config.headers.signature = Sign(config.data || {}, time, md5, store.state.app.SLSICHHOREO, store.state.app.E5070BCC6, store.state.app.VL77BIE1RJO);
    // config.url = config.url.replace(/(\w\/{2,})/, macher => macher.replace(/(\/{2,})/, '/'));
    config.data = data
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// response 拦截器
axios.interceptors.response.use(
  function(response) {
    // 用户登录状态失效，自动跳转到登录
    if ([50].includes(response.data.code)) {
      MessageBox.alert('当前token已过期，即将退出', '温馨提示', {
        confirmButtonText: '确定',
        callback: action => {
          removeToken()
          // Cookies.remove("user_name");
          localStorage.removeItem('user_name')
          localStorage.clear()
          window.location.reload()
          Router.push(`/login?redirect=${Router.fullPath}`)
        }
      })
    }
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default axios

// global.URLCONFIGJSON = { emulateJson: true, headers: { "Content-Type": "application/json;charset=UTF-8", responseBodyNoEncryption: "yes" } };
global.URLCONFIGJSON = {
  emulateJson: true,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
}
global.URLCONFIGJSONNEW = {
  emulateJson: true,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
}
global.URLCONFIGFORMDATA = {
  emulateJson: true,
  headers: { 'Content-Type': 'multipart/form-data', 'X-Requested-With': 'XMLHttpRequest' }
}
global.URLCONFIGFORMDATA2 = {
  emulateJson: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  }
}
global.EXPORTCONFIGJSON = {
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  responseType: 'arraybuffer'
}
