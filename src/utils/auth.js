/*
 * @Author: your name
 * @Date: 2020-04-07 11:53:34
 * @LastEditTime: 2020-09-08 12:07:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'admin_token';

export function getToken() {
  // return Cookies.get(TokenKey)
  return localStorage.getItem(TokenKey)
  // return window.sessionStorage.getItem(TokenKey);
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
  //  return window.sessionStorage.setItem('TokenKey', token);
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(TokenKey)
  // return window.sessionStorage.removeItem(TokenKey);
}
