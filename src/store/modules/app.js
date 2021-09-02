/*
 * @Author: your name
 * @Date: 2020-04-26 17:00:43
 * @LastEditTime: 2020-12-10 16:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\aIphaex-bg\src\store\modules\app.js
 */
import Cookies from 'js-cookie';
import { asyncRouterMap, constantRouterMap } from '@/router/index';

const SLSICHHOREO = 'vSyY7k75470XTzI58mBkzgcGzVLLfqJV'; // 签名 key
const E5070BCC6 = 'key';
const VL77BIE1RJO = 'time';

const state = {
  SLSICHHOREO,
  E5070BCC6,
  VL77BIE1RJO,
  sidebar: {
    // opened: Cookies.get("sidebarStatus") ? !!+Cookies.get("sidebarStatus") : true,
    opened: localStorage.getItem('sidebarStatus') ? !!+localStorage.getItem('sidebarStatus') : true,
    withoutAnimation: false,
  },
  device: 'desktop',
  tagsList: [], // 导航tags
  tagsActivePath: '', //点击tags列表里切换页面（此时保证页面保持原样（让activated不响应），但是从左侧或者页面跳转详情的则要根据传参去activatd钩子重加载）
  list: [], // 需要实时从后台拿的查询数组
  navlist: [], // 左侧栏目菜单 后台路由（但导入了本地的meta名字，配置等信息）生成的混合数组
  images: [], // v-viewer 图片列表
  showSingleViewer: false, // 显示单图的 v-viewer
  video:'',// 弹出视频播放框 视频url

  // routers: [], // 本地部分固定的路由
  hybridRouters: [], // 本地路由（但导入了后台返回的路由权限数据）生成的混合数组
  isOwer:0 ,// 判断人员管理页面 是否为部门负责人 0不是 1 是
  
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      localStorage.setItem('sidebarStatus', 1);
    } else {
      localStorage.setItem('sidebarStatus', 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    localStorage.setItem('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_NAVLIST: (state, list) => {
    state.navlist = list;
  },
  SET_LIST: (state, list) => {
    state.list = list;
  },
  nowsetViewerImages: (state, list) => {
    state.images = list;
  },
  nowshowSingleViewerImages: (state, tag = true) => {
    state.showSingleViewer = tag;
  },
  nowsetViewerVideo: (state, list) => {
    state.video = list;
  },
  nowsetIsOwer: (state, list) => {
    state.isOwer = list;
  },

  


  
  SET_ROUTERS: (state, routers) => {
    // state.addRouters = routers;
    // state.routers = constantRouterMap.concat(routers);
    state.hybridRouters = constantRouterMap.concat(routers);
  },
  setTagsList(state, list) {
    // let arr = []
    // list.forEach((val, idx) => {
    //   arr.push(val.routeName)
    // })
    state.tagsList = list;
  },
  setTagsActivePath(state, path) {
    state.tagsActivePath = path;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
  setNavList({ commit }, data) {
    commit('SET_NAVLIST', data);
  },
  setList({ commit }, data) {
    commit('SET_LIST', data);
  },
  setViewerImages({ commit }, device) {
    commit('nowsetViewerImages', device);
  },
  showSingleViewerImages({ commit }, device) {
    commit('nowshowSingleViewerImages', device);
  },
  setViewerVideo({ commit }, device) {
    commit('nowsetViewerVideo', device);
  },
  
  
  // 对比生成动态权限路由hybridRouters
  GenerateRoutes({ commit }, data) {
    return new Promise(resolve => {
      // accessedRouters.forEach(v => {
      //   // 一级role (同步本地路由配置里的一级，对于本地存在的路由,如果后台没有，那就隐藏这个路由)
      //   let tmpPermiss = hasPermission(roles, v);
      //   if (tmpPermiss['flag']) {
      //     v["meta"]["role"] = tmpPermiss['getObj'];
      //     v["ignore"] = false;
      //   }
      //   else{
      //     v["ignore"] = true;
      //   }
      //   // 二级role
      //   // (同步本地路由配置里的二级，对于本地存在的路由，如果后台没有，也要添加{比如详情页面，提示页面，弹出页面等等})
      //   if (v.children && v.children.length > 0) {
      //     v.children.forEach(child => {
      //       let secPermiss = hasPermission(roles, child);
      //       if (secPermiss['flag']) {
      //         child["meta"]["role"] = secPermiss['getObj'];
      //       }else{

      //       }
      //     });
      //   }
      // });

      // 得到login接口返回的后台路由
      let roles = data;
      // 整理后台返回的路由（当chilren存在且不带/号的作为权限按钮,权限按钮则移至meta.role，然后置空children）
      const nav = filterNavlist(roles);
      // 对比本地路由，将后台的meta.role同步到本地动态混合路由。
      const getTemp = navRoleToAsync(nav, asyncRouterMap); // 开发环境
      // const getTemp = navRoleToAsync(roles, asyncRouterMap); // 测试环境
      const navlist = getTemp['nav'];
      const accessedRouters = getTemp['accessedRouters'];
      // 将前后端合并后的路由，剔除一级里ignore为true的(原因是防止动态路由生成无权限的页面)
      let newArr = [];
      accessedRouters.forEach(v => {
        if (!v.ignore) {
          newArr.push(v);
        }
      });
      commit('SET_ROUTERS', newArr);
      commit('SET_NAVLIST', navlist);
      resolve();
    });
  },
};

function filterNavlist(data) {
  let dataNav = JSON.parse(JSON.stringify(data));
  let floor = 0;
  function filterChildren(_nav, item) {
    if (item.children && item.children.length && !~item.children[0]['menuUrl'].indexOf('/')) {
      item.meta = {};
      item.meta.role = item.children;
      item.children = [];
    }
    if (item.children && item.children.length) {
      item.children.forEach(v => {
        filterChildren(_nav, v);
      });
    }
  }
  dataNav.forEach(item => {
    floor = 0;
    filterChildren(dataNav, item);
  });
  return dataNav;
}

// 后台路由的role字段赋给动态路由(并且将本地动态路由的mata赋给navlist静态路由)
function navRoleToAsync(_nav, _asyncRouterMap) {
  const navTmp = JSON.parse(JSON.stringify(_nav));
  const asyncRouterMap = JSON.parse(JSON.stringify(_asyncRouterMap));
  let len = 100; // 最多遍历层数,因为最多三层菜单目前
  function asyncChildren(item) {
    let tmpPermiss = hasPermission(navTmp, item);
    if (tmpPermiss['flag']) {
      item['meta']['role'] = tmpPermiss['getObj'];
      if (len == 100) {
        // 第一层才有显示隐藏权限
        item['ignore'] = false;
      }
    } else {
      if (len == 100) {
        item['ignore'] = true;
      }
    }
    len--;
    if (len > 0) {
      if (item.children && item.children.length > 0) {
        item.children.forEach(v => {
          asyncChildren(v);
        });
      }
    }
  }
  asyncRouterMap.forEach(v => {
    len = 100;
    asyncChildren(v);
  }); 
  return {
    nav: navTmp,
    accessedRouters: asyncRouterMap,
  };
}
// 是否能在后台返回的路由数组中找到 本地配置的项，能找到则返回该成员
//（并且把本地静态路由的meta赋值 给后台路由的config属性，方便配置图标这些,所以其实修改了navlist了）
function hasPermission(navlist, tObj) {
  let tmpObj = {
    flag: false,
    getObj: null,
  };
  function judgeArr(navlist, tObj) {
    if (Array.isArray(navlist) && navlist.length > 0) {
      navlist.forEach(function(v, i) {
        if (v['desctext'].toLowerCase() == tObj['name'].toLowerCase()) {
          tmpObj['flag'] = true;
          tmpObj['getObj'] = v['meta']['role']; // 开发环境
          // tmpObj['getObj'] = v['meta']; //测试环境 
          // 把静态配置的meta传给navlist路由（因为navlist是用来生成菜单的）
          v['config'] = tObj['meta'];
        } else {
          if (v.children && v.children.length > 0) {
            judgeArr(v.children, tObj);
          }
        }
      });
    }
  }
  judgeArr(navlist, tObj);
  return tmpObj;
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
