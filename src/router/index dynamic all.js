/*
 * @Author: your name
 * @Date: 2020-05-18 18:56:31
 * @LastEditTime: 2020-07-29 16:24:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\router\index.js
 */

// *************************************************************************************************************************************************************
// router.js
import Vue from 'vue';
import Router from 'vue-router';
/* Layout */
import Layout from '@/layout/index';
// const Layout = resolve => require(['../layout/index'], resolve);

Vue.use(Router);

import Login from '../views/login/index';
// const Login = resolve => require(['../views/login'], resolve);
const dashboard = resolve => require(['../views/dashboard/index'], resolve);
//使用了vue-routerd的[Lazy Loading Routes](https://router.vuejs.org/en/advanced/lazy-loading.html)

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面

export const constantRouterMap = [
  { path: '/login', name: '登录', component: () => import('@/views/login/index'), hidden: true }, //hidden为自定义属性，侧边栏那章会纤细解释},
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
];

export const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap,
  });

export const $addRoutes = params => {
  router.matcher = new Router({ mode: 'hash' }).matcher;
  router.addRoutes(params);
};

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

// //实例化vue的时候只挂载constantRouter
// export default new Router({
//   routes: constantRouterMap,
// });

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   name: '权限测试',
  //   meta: { role: ['admin','super_editor'] }, //页面需要的权限
  //   children: [
  //   {
  //       path: 'index',
  //       component: Permission,
  //       name: '权限测试页',
  //       meta: { role: ['admin','super_editor'] }  //页面需要的权限
  //   }]
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '主页',
    children: [
      { path: 'dashboard', name: 'Dashboard', component: dashboard, 
      meta: { title: '首页', icon: 'dashboard' } 
      },
      {
        path: 'assetStatistic',
        name: 'AssetStatistic',
        component: () => import('@/views/dashboard/assetStatistic'),
        meta: { title: '用户资产统计', icon: '' },
      },
      {
        path: 'chargeStatistic',
        name: 'ChargeStatistic',
        component: () => import('@/views/dashboard/chargeStatistic'),
        meta: { title: '手续费统计', icon: '' },
      },
      {
        path: 'exchangeStatistic',
        name: 'ExchangeStatistic',
        component: () => import('@/views/dashboard/exchangeStatistic'),
        meta: { title: '交易数据统计', icon: '' },
      }
    ],
  },
  // 用户管理
  {
    path: '/user',
    component: Layout,
    redirect: '/user/userlist',
    name: 'user',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: 'userlist',
        name: 'UserList',
        component: () => import('@/views/user/userlist'),
        meta: { title: '用户列表', icon: '' },
      },
      {
        hidden: true,
        path: 'userlistDetail',
        name: 'UserlistDetail',
        component: () => import('@/views/user/userlistDetail'),
        meta: { title: '用户列表详情', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'registRestric',
        name: 'RegistRestric',
        component: () => import('@/views/user/registRestric'),
        meta: { title: '注册限制', icon: '', role: [] },
      },
      {
        path: 'giveRestric',
        name: 'GiveRestric',
        component: () => import('@/views/user/giveRestric'),
        meta: { title: '送币限制', icon: '', role: [] },
      }
    ],
  },
  // 审核管理
  {
    path: '/check',
    component: Layout,
    redirect: '/check/examine',
    name: 'check',
    meta: {
      title: '审核管理',
      icon: 'user',
      role: [
        { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
        { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
      ],
    },
    children: [
      {
        path: 'examine',
        name: 'Examine',
        component: () => import('@/views/check/examine'),
        meta: {
          title: '实名审核',
          icon: '',
          role: [],
        },
      },
      {
        path: 'advertise',
        name: 'Advertise',
        component: () => import('@/views/check/advertise'),
        meta: {
          title: '广告商审核',
          icon: '',
          role: [],
        },
      },
      {
        path: 'pay',
        name: 'Pay',
        component: () => import('@/views/check/pay'),
        meta: {
          title: '支付方式审核',
          icon: '',
          role: [],
        },
      },
      {
        path: 'redeemOrder',
        name: 'RedeemOrder',
        component: () => import('@/views/check/redeemOrder'),
        meta: {
          title: '兑出订单审核',
          icon: '',
          role: [],
        },
      },
      {
        path: 'merchantCheck',
        name: 'MerchantCheck',
        component: () => import('@/views/check/merchantCheck'),
        meta: {
          title: '商户审核',
          icon: '',
          role: [],
        },
      },
    ],
  },
  // 财务管理
  {
    path: '/exchange',
    component: Layout,
    redirect: '/exchange/orderlist',
    name: 'Exchange',
    meta: { title: '交易管理', icon: 'example', role: ['admin', 'editor'] },
    children: [
      {
        path: 'orderlist',
        name: 'orderlist',
        component: () => import('@/views/exchange/orderlist'),
        meta: { title: '用户委托记录', icon: '', role: [] },
      },
      {
        path: 'orderListSpecial',
        name: 'OrderListSpecial',
        component: () => import('@/views/exchange/orderListSpecial'),
        meta: { title: '机器人委托记录', icon: '', role: [] },
      },
      {
        path: 'tradelist',
        name: 'tradelist',
        component: () => import('@/views/exchange/tradelist'),
        meta: { title: '用户成交记录', icon: '', role: [] },
      },
      {
        path: 'tradeListSpecial',
        name: 'TradeListSpecial',
        component: () => import('@/views/exchange/tradeListSpecial'),
        meta: { title: '机器人成交记录', icon: '', role: [] },
      },
      {
        path: 'orderSwitch',
        name: 'OrderSwitch',
        component: () => import('@/views/exchange/orderSwitch'),
        meta: { title: '下单开关管理', icon: '', role: [] },
      },
      {
        path: 'marketAccount',
        name: 'MarketAccount',
        component: () => import('@/views/exchange/marketAccount'),
        meta: { title: '市值账号管理', icon: '', role: [] },
      },
    ],
  },
  // 币种管理
  {
    path: '/symbol',
    component: Layout,
    redirect: '/symbol/setting',
    name: 'Symbol',
    meta: { title: '币种管理', icon: 'symbol', role: ['admin', 'editor'] },
    children: [
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/symbol/setting'),
        meta: { title: '币种管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'pairs',
        name: 'Pairs',
        component: () => import('@/views/symbol/pairs'),
        meta: { title: '交易对管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'robot',
        name: 'Robot',
        component: () => import('@/views/symbol/robot'),
        meta: { title: '机器人设置', icon: '' },
      },
    ],
  },
  // 财务管理
  {
    path: '/financial',
    component: Layout,
    redirect: '/financial/tenter',
    name: 'Financial',
    meta: { title: '财务管理', icon: 'financial', role: ['admin', 'editor'] },
    children: [
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('@/views/financial/collection'),
        meta: { title: '归集设置', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'collectionDetail',
        name: 'CollectionDetail',
        component: () => import('@/views/financial/collectionDetail'),
        meta: { title: '归集详情', icon: '', role: [] },
      },
      {
        path: 'recharge',
        name: 'Recharge',
        component: () => import('@/views/financial/recharge'),
        meta: { title: '充币记录', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'extract',
        name: 'Extract',
        component: () => import('@/views/financial/extract'),
        meta: { title: '内部提币记录', icon: '', role: [] },
      },
      {
        path: 'extractForeign',
        name: 'ExtractForeign',
        component: () => import('@/views/financial/extractForeign'),
        meta: { title: '涉外提币记录', icon: '', role: [] },
      },
      {
        path: 'transfer',
        name: 'Transfer',
        component: () => import('@/views/financial/transfer'),
        meta: { title: '划转记录', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'coinFunds',
        name: 'CoinFunds',
        component: () => import('@/views/financial/coinFunds'),
        meta: { title: '币币资金流水', icon: '', role: [] },
      },
      {
        path: 'sprecon',
        name: 'Sprecon',
        component: () => import('@/views/financial/sprecon'),
        meta: { title: '特殊调账管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'lockManage',
        name: 'LockManage',
        component: () => import('@/views/financial/lockManage'),
        meta: { title: '锁仓管理', icon: '', role: [] },
      },
            {
        path: 'lockConfig',
        name: 'LockConfig',
        component: () => import('@/views/financial/lockConfig'),
        meta: { title: '锁仓配置', icon: '', role: [] },
      },
      {
        path: 'unfreezeManage',
        name: 'UnfreezeManage',
        component: () => import('@/views/financial/unfreezeManage'),
        meta: { title: '解冻记录', icon: '', role: [] },
      }
    ],
  },
  // 系统管理
  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    name: 'System',
    meta: { title: '系统管理', icon: 'system', role: ['admin', 'editor'] },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role'),
        meta: { title: '角色管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/system/account'),
        meta: { title: '账户管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'resetpwd',
        name: 'Resetpwd',
        component: () => import('@/views/system/resetpwd'),
        meta: { title: '修改密码', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'resetauth',
        name: 'Restauth',
        component: () => import('@/views/system/resetauth'),
        meta: { title: '重置谷歌密钥', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/system/menu'),
        meta: { title: '菜单管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'oplog',
        name: 'Oplog',
        component: () => import('@/views/system/oplog'),
        meta: { title: '操作日志', icon: '', role: [] },
      },
      {
        path: 'configPath',
        name: 'ConfigPath',
        component: () => import('@/views/system/configPath'),
        meta: { title: '路径配置', icon: '', role: [] },
      }
    ],
  },
  // app管理
  {
    path: '/app',
    component: Layout,
    redirect: '/app/version',
    name: 'App',
    meta: { title: 'APP管理', icon: 'user', role: ['admin', 'editor'] },
    children: [
      {
        path: 'version',
        name: 'Version',
        component: () => import('@/views/app/version'),
        meta: { title: '版本管理', icon: 'system', role: ['admin', 'editor'] },
      },
    ],
  },
  // 前台管理
  {
    path: '/front',
    component: Layout,
    redirect: '/front/notice',
    name: 'Front',
    meta: { title: '首页管理', icon: 'front', role: ['admin', 'editor'] },
    children: [
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/front/notice'),
        meta: { title: '公告管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('@/views/front/help'),
        meta: { title: '帮助中心', icon: '', role: [] }
      },
      {
        path: 'column',
        name: 'Column',
        component: () => import('@/views/front/column'),
        meta: { title: '栏目配置', icon: '', role: [] }
      },
      {
        path: 'banner',
        name: 'Banner',
        component: () => import('@/views/front/banner'),
        meta: { title: 'banner管理', icon: '', role: ['admin', 'editor'] },
      },
      {
        path: 'popupNotice',
        name: 'PopupNotice',
        component: () => import('@/views/front/popupNotice'),
        meta: { title: '弹窗公告', icon: '', role: ['admin', 'editor'] },
      },
    ],
  },
  // 商户管理
  {
    path: '/merchant',
    component: Layout,
    redirect: '/merchant/search',
    name: 'Merchant',
    meta: { title: '商户管理', icon: 'front', role: [] },
    children: [
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/views/merchant/search'),
        meta: { title: '商户查询', icon: '', role: [] },
      },
      {
        path: 'searchDetail',
        name: 'SearchDetail',
        component: () => import('@/views/merchant/searchDetail'),
        meta: { title: '商户查询详情', icon: '', role: [] },
      },
      {
        path: 'transactionAd',
        name: 'TransactionAd',
        component: () => import('@/views/merchant/transactionAd'),
        meta: { title: '交易广告记录', icon: '', role: [] },
      },
      {
        path: 'chargeWithdrawal',
        name: 'ChargeWithdrawal',
        component: () => import('@/views/merchant/chargeWithdrawal'),
        meta: { title: '商户充提流水', icon: '', role: [] },
      },
      {
        path: 'cardRecord',
        name: 'CardRecord',
        component: () => import('@/views/merchant/cardRecord'),
        meta: { title: '宝转卡流水', icon: '', role: [] },
      },
      {
        path: 'fundsFlow',
        name: 'FundsFlow',
        component: () => import('@/views/merchant/fundsFlow'),
        meta: { title: '商户资金流水', icon: '', role: [] },
      },
      {
        path: 'groupAuth',
        name: 'GroupAuth',
        component: () => import('@/views/merchant/groupAuth'),
        meta: { title: '商户分组授权', icon: '', role: [] },
      },
      {
        path: 'groupAuthDetail',
        name: 'GroupAuthDetail',
        component: () => import('@/views/merchant/groupAuthDetail'),
        meta: { title: '商户分组授权详情', icon: '', role: [] },
      },
      {
        path: 'globalSettings',
        name: 'GlobalSettings',
        component: () => import('@/views/merchant/globalSettings'),
        meta: { title: '商户全局设置', icon: '', role: [] },
      },
      {
        path: 'blacklist',
        name: 'Blacklist',
        component: () => import('@/views/merchant/blacklist'),
        meta: { title: '商户黑名单', icon: '', role: [] },
      },
      {
        path: 'whitelist',
        name: 'Whitelist',
        component: () => import('@/views/merchant/whitelist'),
        meta: { title: '商户白名单', icon: '', role: [] },
      },
      {
        path: 'regionalRestrict',
        name: 'RegionalRestrict',
        component: () => import('@/views/merchant/regionalRestrict'),
        meta: { title: '地区访问设置', icon: '', role: [] },
      },
    ],
  },
  // 法币管理
  {
    path: '/fiat',
    component: Layout,
    redirect: '/fiat/user',
    name: 'Fiat',
    meta: { title: '法币管理', icon: 'front', role: [] },
    children: [
      {
        path: 'user',
        name: 'FiatUser',
        component: () => import('@/views/fiat/user'),
        meta: { title: '用户查询', icon: '', role: [] },
      },
      {
        path: 'userDetail',
        name: 'FiatUserDetail',
        component: () => import('@/views/fiat/userDetail'),
        meta: { title: '用户详情', icon: '', role: [] },
      },
      // {
      //   path: "invitation",
      //   name: "FiatInvitation",
      //   component: () => import("@/views/fiat/invitation"),
      //   meta: { title: "邀请关系", icon: "", role: [] },
      // },
      {
        path: 'advertiseRecord',
        name: 'FiatAdvertiseRecord',
        component: () => import('@/views/fiat/advertiseRecord'),
        meta: { title: '广告记录', icon: '', role: [] },
      },
      {
        path: 'advertiseRecordDetail',
        name: 'AdvertiseRecordDetail',
        component: () => import('@/views/fiat/advertiseRecordDetail'),
        meta: { title: '广告详情', icon: '', role: [] },
      },
      {
        path: 'appeal',
        name: 'Appeal',
        component: () => import('@/views/fiat/appeal'),
        meta: { title: '申诉管理', icon: '', role: [] },
      },
      {
        path: 'appealJudge',
        name: 'AppealJudge',
        component: () => import('@/views/fiat/appealJudge'),
        meta: { title: '判决', icon: '', role: [] },
      },
      {
        path: 'otcOrder',
        name: 'OTCOrder',
        component: () => import('@/views/fiat/otcOrder'),
        meta: { title: 'OTC订单管理', icon: '', role: [] },
      },
      {
        path: 'redeem',
        name: 'FiatRedeem',
        component: () => import('@/views/fiat/redeem'),
        meta: { title: '兑入订单', icon: '', role: [] },
      },
      {
        path: 'cashOut',
        name: 'FiatCashOut',
        component: () => import('@/views/fiat/cashOut'),
        meta: { title: '兑出订单', icon: '', role: [] },
      },
      {
        path: 'transaction',
        name: 'FiatTransaction',
        component: () => import('@/views/fiat/transaction'),
        meta: { title: '交易流水', icon: '', role: [] },
      },
      {
        path: 'fundsFlow',
        name: 'FiatFundsFlow',
        component: () => import('@/views/fiat/fundsFlow'),
        meta: { title: '资金流水', icon: '', role: [] },
      },
      {
        path: 'assetManage',
        name: 'FiatAssetManage',
        component: () => import('@/views/fiat/assetManage'),
        meta: { title: '资产管理证明', icon: '', role: [] },
      },
      {
        path: 'otcGlobal',
        name: 'FiatOtcGlobal',
        component: () => import('@/views/fiat/otcGlobal'),
        meta: { title: 'OTC全局设定', icon: '', role: [] },
      },
      {
        path: 'otcBail',
        name: 'FiatOtcBail',
        component: () => import('@/views/fiat/otcBail'),
        meta: { title: 'OTC保证金设置', icon: '', role: [] },
      },
      {
        path: 'orderGlobal',
        name: 'FiatOrderGlobal',
        component: () => import('@/views/fiat/orderGlobal'),
        meta: { title: '接单全局设置', icon: '', role: [] },
      },
    ],
  },
  // 星球（标仓管理）
  {
    path: '/warehouse',
    component: Layout,
    redirect: '/warehouse/user',
    name: 'Warehouse',
    meta: { title: '标仓管理', icon: 'warehouse', role: [] },
    children: [
      {
        path: '/warehouse/user',
        name: 'WarehouseUser',
        component: () => import('@/views/warehouse/user'),
        meta: { title: '用户列表', icon: '' },
      },
      {
        path: '/warehouse/userListDetail',
        name: 'WarehouseUserListDetail',
        component: () => import('@/views/warehouse/userListDetail'),
        meta: { title: '查看详情', icon: '' },
      },
      {
        path: '/warehouse/statistics',
        name: 'WarehouseStatistics',
        component: () => import('@/views/warehouse/statistics'),
        meta: { title: '数目统计', icon: '' },
      },
      {
        path: '/warehouse/assets',
        name: 'WarehouseAssets',
        component: () => import('@/views/warehouse/assets'),
        meta: { title: '标仓资产', icon: '' },
      },
      {
        path: '/warehouse/accountFlow',
        name: 'WarehouseAccountFlow',
        component: () => import('@/views/warehouse/accountFlow'),
        meta: { title: '平台账号流水', icon: '' },
      },
      {
        path: '/warehouse/rewardList',
        name: 'WarehouseRewardList',
        component: () => import('@/views/warehouse/rewardList'),
        meta: { title: '奖励列表', icon: '' },
      },
      {
        path: '/warehouse/weeklyPayList',
        name: 'WarehouseWeeklyPayList',
        component: () => import('@/views/warehouse/weeklyPayList'),
        meta: { title: '周薪发放列表', icon: '' },
      },
      {
        path: '/warehouse/distributionList',
        name: 'WarehouseDistributionList',
        component: () => import('@/views/warehouse/distributionList'),
        meta: { title: '分红发放列表', icon: '' },
      },
      {
        path: '/warehouse/integral',
        name: 'WarehouseIntegral',
        component: () => import('@/views/warehouse/integral'),
        meta: { title: '积分列表', icon: '' },
      },
      {
        path: '/warehouse/integralDetail',
        name: 'WarehouseIntegralDetail',
        component: () => import('@/views/warehouse/integralDetail'),
        meta: { title: '积分详情', icon: '' },
      },
      {
        path: '/warehouse/integralPermanent',
        name: 'WarehouseIntegralPermanent',
        component: () => import('@/views/warehouse/integralPermanent'),
        meta: { title: '永久积分记录', icon: '' },
      },
      {
        path: '/warehouse/setting',
        name: 'WarehouseSetting',
        component: () => import('@/views/warehouse/setting'),
        meta: { title: '参数设置', icon: '' },
      },
      {
        path: '/warehouse/blackList',
        name: 'WarehouseBlackList',
        component: () => import('@/views/warehouse/blackList'),
        meta: { title: '黑名单', icon: '' },
      },
      {
        path: '/warehouse/newStatistics',
        name: 'WarehouseNewStatistics',
        component: () => import('@/views/warehouse/newStatistics'),
        meta: { title: '新增统计', icon: '' },
      },
    ],
  }
  // { path: "*", redirect: "/404", hidden: true,name:"*" },
];
