/*
 * @Author: cws
 * @Date: 2020-03-26 16:38:48
 * @LastEditTime: 2020-12-08 15:22:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-app-h5\src\fetch\fetch.js
 */



import axios from './axios.js';


// import { addSearch } from '../utils/operLocation.js';
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth';

/**
 * 接受一个对象转换成查询字符串
 * @param {*Object 查询对象} obj
 */
function addSearch(obj) {
  if (obj) {
    let str = '?';
    for (let i in obj) {
      if (obj[i] === 0 || obj[i] === '0' || obj[i] || obj[i] === false || obj[i] === 0) {
        if (typeof obj[i] == 'boolean') {
          str += i + '=' + obj[i].toString() + '&';
        } else {
          str += i + '=' + obj[i] + '&';
        }
      }
    }
    return str.substring(0, str.length - 1);
  } else {
    return '';
  }
}

export class Fetch {
  // get请求
  static get(url, data) {
    data.token = getToken('admin_token');
    const uri = url + addSearch(data);
    return Fetch.dealRespones(axios.get(uri, global.URLCONFIGJSON));
  }

  // post form 请求
  static postForm(url, data) {
    return Fetch.dealRespones(axios.post(url, data, global.URLCONFIGFORMDATA2));
  }

  // formdata格式不需要token
  static postForm1(url, data) {
    const formData = new FormData();
    const token = getToken('admin_token') || '';
    formData.append('token', token);
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return Fetch.dealRespones(axios.post(url, formData, global.URLCONFIGFORMDATA2));
  }

  // formdata格式带上token
  static postForm2(url, data) {
    const formData = new FormData();
    formData.append('token', getToken('admin_token'));
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    return Fetch.dealRespones(axios.post(url, formData, global.URLCONFIGFORMDATA2));
  }

  // post json
  static post(url, data) {
    return Fetch.dealRespones(axios.post(url, data, global.URLCONFIGJSON));
  }

  static postlogin(url, data) {
    data.login = true;
    return Fetch.dealRespones(axios.post(url, data, global.URLCONFIGJSON));
  }

  // post json
  static postToken(url, data) {
    data.token = getToken('admin_token') || '';
    return Fetch.dealRespones(axios.post(url, data, global.URLCONFIGJSON));
  }

  // post json
  static postExcel(url, data) {
    return Fetch.dealRespones(axios.post(url, data, global.EXPORTCONFIGJSON));
  }

  // post json
  static postnew(url, data) {
    return Fetch.dealRespones(axios.post(url, data, global.URLCONFIGJSONNEW));
  }

   static async dealRespones(promise) {
    return promise
      .then(res => {
        // //console.log(res);|| res.status === 200
        if (res.data.code === 1 || res.data.code === 200 ) {
          return res;
        } else {
          // 对于权限失效在axios中特殊提示，这里就不弹出提示了
          if (res.data.code === 50) {
          } else {
            Message.error(res.data.msg || res.data.message);
          }
        }
      })
      .catch(err => {
        //console.log(err);
        Message.error('服务器请求错误');
      });
      // try{
      //   let res = await promise
      //   if (res.data.code === 1 || res.data.code === 200 ) {
      //     return res;
      //   } else {
      //     // 对于权限失效在axios中特殊提示，这里就不弹出提示了
      //     if (res.data.code === 50) {
      //     } else {
      //       Message.error(res.data.msg || res.data.message);
      //     }
      //   }
      // }catch(err){
      //   //console.log(err);
      //   Message.error('服务器请求错误');
      // }
  }
}
