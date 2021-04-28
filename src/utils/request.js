/*
 * @Author: your name
 * @Date: 2020-04-07 11:53:34
 * @LastEditTime: 2020-07-08 20:27:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\utils\request.js
 */
// import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// // create an axios instance
// const service = axios.create({
//   // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   baseURL: 'http://testapi.exchange.alpex.pro/exchange-backmgr',
//   timeout: 5000 // request timeout
// })

// // request interceptor
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     // if (store.getters.token) {
//     //   // let each request carry token
//     //   // ['X-Token'] is a custom headers key
//     //   // please modify it according to the actual situation
//     //   config.headers['X-Token'] = getToken()
//     // }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// // response interceptor
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   response => {
//     const res = response.data

//     // if the custom code is not 20000, it is judged as an error.
//     if (res.code !== 20000) {
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         duration: 5 * 1000
//       })

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login
//         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//           confirmButtonText: 'Re-Login',
//           cancelButtonText: 'Cancel',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             location.reload()
//           })
//         })
//       }
//       return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// // export default service

// import axios from "axios";

// // axios.defaults.baseURL = 'http://testapi.exchange.alpex.pro/exchange-backmgr';

// // axios.defaults.baseURL = "http://47.57.8.70:16866/api"; // 币种管理模块

// // axios.defaults.baseURL = "http://47.57.21.80:16866/api";

// // axios.defaults.baseURL = "http://192.168.188.227:7036";

// axios.defaults.baseURL = "http://47.57.21.80/api"; // 币种管理模块

// // request 拦截器
// axios.interceptors.request.use(
//   function(config) {
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   },
// );

// // response 拦截器
// axios.interceptors.response.use(
//   function(response) {
//     // 用户登录状态失效，自动跳转到登录
//     // if (['1001'].includes(response.data.code)) {
//     //   Cookie.remove('username');
//     //   Cookie.remove('token');
//     //   Cookie.remove('app');
//     //   Cookie.remove('app-remberMe');
//     //   Cookie.remove('shopToken');
//     //   window.location.reload();
//     // }
//     return response;
//   },
//   function(error) {
//     return Promise.reject(error);
//   },
// );

// export default axios;

// global.URLCONFIGJSON = { emulateJson: true, headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" } };
// global.URLCONFIGFORMDATA = { emulateJson: true, headers: { "Content-Type": "multipart/form-data", "X-Requested-With": "XMLHttpRequest" } };
// global.URLCONFIGFORMDATA2 = {
//   emulateJson: true,
//   headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" },
// };
