import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';
const dashboard = resolve => require(['../views/dashboard/homePage'], resolve)
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  {
    hidden: true,
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
    meta: {
      title: '用户管理',
      icon: 'user',
      role: [
        { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
        { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
      ],
    },
    children: [
      {
        path: '/user/userlist',
        name: 'UserList',
        component: () => import('@/views/user/userlist'),
        meta: {
          title: '用户列表',
          icon: '',
          role: [
            { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
            { id: 86, requestUrl: 'curd', menuUrl: 'curd', name: '新建编辑', desctext: 'curd', parentId: 57 },
          ],
        },
      },
      {
        path: '/user/userlistDetail',
        name: 'UserlistDetail',
        component: () => import('@/views/user/userlistDetail'),
        meta: { title: '用户列表详情', icon: '' },
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
      icon: 'audit',
      role: [],
    },
    children: [
      {
        path: '/check/examine',
        name: 'Examine',
        component: () => import('@/views/check/examine'),
        meta: {
          title: '实名审核',
          icon: '',
          role: [],
        },
      },
      {
        path: '/check/advertise',
        name: 'Advertise',
        component: () => import('@/views/check/advertise'),
        meta: {
          title: '广告商审核',
          icon: '',
          role: [],
        },
      },
      {
        path: '/check/pay',
        name: 'Pay',
        component: () => import('@/views/check/pay'),
        meta: {
          title: '支付方式审核',
          icon: '',
          role: [],
        },
      },
      {
        path: '/check/redeemOrder',
        name: 'RedeemOrder',
        component: () => import('@/views/check/redeemOrder'),
        meta: {
          title: '兑出订单审核',
          icon: '',
          role: [],
        },
      },
      {
        path: '/check/merchantCheck',
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
    meta: { title: '交易管理', icon: 'exchange1' },
    children: [
      {
        path: 'orderlist',
        name: 'Orderlist',
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
        name: 'Tradelist',
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
    meta: { title: '币种管理', icon: 'symbol1' },
    children: [
      {
        path: '/symbol/setting',
        name: 'Setting',
        component: () => import('@/views/symbol/setting'),
        meta: { title: '币种管理', icon: '' },
      },
      {
        path: '/symbol/pairs',
        name: 'Pairs',
        component: () => import('@/views/symbol/pairs'),
        meta: { title: '交易对管理', icon: '' },
      },
      {
        path: '/symbol/robot',
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
    meta: { title: '财务管理', icon: 'financial' },
    children: [
      {
        path: '/financial/collection',
        name: 'Collection',
        component: () => import('@/views/financial/collection'),
        meta: { title: '归集设置', icon: '' },
      },
      {
        path: 'collectionDetail',
        name: 'CollectionDetail',
        component: () => import('@/views/financial/collectionDetail'),
        meta: { title: '归集详情', icon: '', role: [] },
      },
      {
        path: '/financial/recharge',
        name: 'Recharge',
        component: () => import('@/views/financial/recharge'),
        meta: { title: '充币记录', icon: '' },
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
        path: '/financial/transfer',
        name: 'Transfer',
        component: () => import('@/views/financial/transfer'),
        meta: { title: '划转记录', icon: '' },
      },
      {
        path: 'coinFunds',
        name: 'CoinFunds',
        component: () => import('@/views/financial/coinFunds'),
        meta: { title: '币币资金流水', icon: '', role: [] },
      },
      {
        path: '/financial/sprecon',
        name: 'Sprecon',
        component: () => import('@/views/financial/sprecon'),
        meta: { title: '特殊调账管理', icon: '' },
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
    meta: { title: '系统管理', icon: 'system' },
    children: [
      {
        path: '/system/role',
        name: 'Role',
        component: () => import('@/views/system/role'),
        meta: { title: '角色管理', icon: '' },
      },
      {
        path: '/system/account',
        name: 'Account',
        component: () => import('@/views/system/account'),
        meta: { title: '账户管理', icon: '' },
      },
      {
        path: '/system/resetpwd',
        name: 'Resetpwd',
        component: () => import('@/views/system/resetpwd'),
        meta: { title: '修改密码', icon: '' },
      },
      {
        path: '/system/resetauth',
        name: 'Restauth',
        component: () => import('@/views/system/resetauth'),
        meta: { title: '重置谷歌密钥', icon: '' },
      },
      {
        path: '/system/menu',
        name: 'Menu',
        component: () => import('@/views/system/menu'),
        meta: { title: '菜单管理', icon: '' },
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
    meta: { title: 'APP管理', icon: 'user' },
    children: [
      {
        path: '/app/version',
        name: 'Version',
        component: () => import('@/views/app/version'),
        meta: { title: '版本管理', icon: 'system' },
      },
    ],
  },
  // 前台管理
  {
    path: '/front',
    component: Layout,
    redirect: '/front/notice',
    name: 'Front',
    meta: { title: '首页管理', icon: 'front' },
    children: [
      {
        path: '/front/notice',
        name: 'Notice',
        component: () => import('@/views/front/notice'),
        meta: { title: '公告管理', icon: '' },
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
        path: '/front/banner',
        name: 'Banner',
        component: () => import('@/views/front/banner'),
        meta: { title: 'banner管理', icon: '' },
      },
      {
        path: '/front/popupNotice',
        name: 'PopupNotice',
        component: () => import('@/views/front/popupNotice'),
        meta: { title: '弹窗公告', icon: '' },
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
        path: '/fiat/user',
        name: 'FiatUser',
        component: () => import('@/views/fiat/user'),
        meta: { title: '用户查询', icon: '', role: [] },
      },
      {
        path: '/fiat/userDetail',
        name: 'FiatUserDetail',
        component: () => import('@/views/fiat/userDetail'),
        meta: { title: '用户详情', icon: '', role: [] },
      },
      // {
      //   path: "/fiat/invitation",
      //   name: "FiatInvitation",
      //   component: () => import("@/views/fiat/invitation"),
      //   meta: { title: "邀请关系", icon: "", role: [] },
      // },
      {
        path: '/fiat/advertiseRecord',
        name: 'FiatAdvertiseRecord',
        component: () => import('@/views/fiat/advertiseRecord'),
        meta: { title: '广告记录', icon: '', role: [] },
      },
      {
        path: '/fiat/advertiseRecordDetail',
        name: 'AdvertiseRecordDetail',
        component: () => import('@/views/fiat/advertiseRecordDetail'),
        meta: { title: '广告详情', icon: '', role: [] },
      },
      {
        path: '/fiat/appeal',
        name: 'Appeal',
        component: () => import('@/views/fiat/appeal'),
        meta: { title: '申诉管理', icon: '', role: [] },
      },
      {
        path: '/fiat/appealJudge',
        name: 'AppealJudge',
        component: () => import('@/views/fiat/appealJudge'),
        meta: { title: '判决', icon: '', role: [] },
      },
      {
        path: '/fiat/otcOrder',
        name: 'OTCOrder',
        component: () => import('@/views/fiat/otcOrder'),
        meta: { title: 'OTC订单管理', icon: '', role: [] },
      },
      {
        path: '/fiat/redeem',
        name: 'FiatRedeem',
        component: () => import('@/views/fiat/redeem'),
        meta: { title: '兑入订单', icon: '', role: [] },
      },
      {
        path: '/fiat/cashOut',
        name: 'FiatCashOut',
        component: () => import('@/views/fiat/cashOut'),
        meta: { title: '兑出订单', icon: '', role: [] },
      },
      {
        path: '/fiat/transaction',
        name: 'FiatTransaction',
        component: () => import('@/views/fiat/transaction'),
        meta: { title: '交易流水', icon: '', role: [] },
      },
      {
        path: '/fiat/fundsFlow',
        name: 'FiatFundsFlow',
        component: () => import('@/views/fiat/fundsFlow'),
        meta: { title: '资金流水', icon: '', role: [] },
      },
      {
        path: '/fiat/assetManage',
        name: 'FiatAssetManage',
        component: () => import('@/views/fiat/assetManage'),
        meta: { title: '资产管理证明', icon: '', role: [] },
      },
      {
        path: '/fiat/otcGlobal',
        name: 'FiatOtcGlobal',
        component: () => import('@/views/fiat/otcGlobal'),
        meta: { title: 'OTC全局设定', icon: '', role: [] },
      },
      {
        path: '/fiat/otcBail',
        name: 'FiatOtcBail',
        component: () => import('@/views/fiat/otcBail'),
        meta: { title: 'OTC保证金设置', icon: '', role: [] },
      },
      {
        path: '/fiat/orderGlobal',
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
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
