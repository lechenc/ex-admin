/*
 * @Author: your name
 * @Date: 2020-04-26 17:00:43
 * @LastEditTime: 2020-10-22 14:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\aIphaex-bg\src\store\getters.js
 */
const getters = {
  SLSICHHOREO: state => state.app.SLSICHHOREO,
  E5070BCC6: state => state.app.E5070BCC6,
  VL77BIE1RJO: state => state.app.VL77BIE1RJO,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  navlist:state => state.app.navlist,
  routers: state => state.app.routers,
  addRouters:state => state.app.addRouters,
  tagsList: state => state.app.tagsList,
  list: state => state.app.list,
  tagsActivePath: state => state.app.tagsActivePath,
  coinlist: state => state.common.coinlist,
  fiatcoinlist:state => state.common.fiatcoinlist,
  symbollist: state => state.common.symbollist,
  symbollistContract: state => state.common.symbollistContract,
  workorderlist:state => state.common.symbollist,
}
export default getters
