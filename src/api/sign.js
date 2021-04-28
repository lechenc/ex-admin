/*
 * @Author: your name
 * @Date: 2020-07-13 15:10:52
 * @LastEditTime: 2020-07-13 18:16:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\api\sign.js
 */ 
/**
 * 参数签名
 * @param {Object} p 参数
 * @param {number} t 时间戳  毫秒级
 * @param {function} pad md5算法
 * @param {string} a 固定的KEY
 * @param {string} b 用户加密的字段 key
 * @param {string} c 字段time
 */
import Qs from 'qs';
const sign = (p, t, pad, a, b, c) => {
  let str = '';
  const arr = [];

  // for (const i in p) {
  //   if (typeof p[i] === 'undefined') {
  //     continue;
  //   }
  //   arr.push(`${i}=${typeof p[i] === 'object' ? JSON.stringify(p[i]) : p[i]}`);
  // } 
  // str = (arr.length ? arr.join('&') + '&' : '' ) + `${c}=${t - 688}&${b}=${a}`;
  // console.log(p,t,a,b,c,str)
  // console.log(str)
  // 签名url字段排序加密
  p[c] = t - 688;
  p[b] = a;
  str = Qs.stringify(p, {
    sort: (a, b) => a.localeCompare(b)
  });
 
  return pad(str);
};

export default sign;
