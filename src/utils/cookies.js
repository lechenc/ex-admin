/*
 * @Author: your name
 * @Date: 2020-04-27 10:30:02
 * @LastEditTime: 2020-04-27 10:31:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\aIphaex-bg\src\utils\cookies.js
 */

import Cookies from 'js-cookie';

export function getCookies(c_name) {
  return Cookies.get(c_name)
}

export function setCookies(c_name, val) {
  return Cookies.set(c_name, val)
}

export function removeCookies(c_name) {
  return Cookies.remove(c_name)
}
