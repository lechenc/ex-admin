/*
 * @Author: your name
 * @Date: 2020-05-18 18:56:31
 * @LastEditTime: 2020-12-28 14:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\router\index.js
 */
// router.js
import Vue from 'vue';
import Router from 'vue-router';
/* Layout */
import Layout from '@/layout/index';
// const Layout = resolve => require(['../layout/index'], resolve);

Vue.use(Router);

import Login from '../views/login/index';
// const Login = resolve => require(['../views/login'], resolve);
const dashboard = resolve => require(['../views/dashboard/homePage'], resolve);
// 使用了vue-routerd的[Lazy Loading Routes](https://router.vuejs.org/en/advanced/lazy-loading.html)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面

export const constantRouterMap = [
  { path: '/login', name: '登录', component: () => import('@/views/login/index'), hidden: true }, // hidden为自定义属性，侧边栏那章会纤细解释},
  {
    path: '/404',
    name: 'notfound',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/welcomeMain',
    name: 'Welcome',
    meta: { title: '欢迎页', icon: 'dashboard', role: [] },
    children: [{ path: 'welcomeMain', name: 'WelcomeMain', component: () => import('@/views/dashboard/welcome'), meta: { title: '欢迎你', icon: '' } }],
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

// 异步挂载的路由
// 动态需要根据权限加载的路由表
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

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/welcome',
  //   name: 'Dash',
  //   meta: { title: '主页', icon: 'dashboard', role: [] },
  //   children: [
  //     { path: 'welcome', name: 'Welcome', component: () => import('@/views/dashboard/welcome'), meta: { title: '欢迎你', icon: '' } },
  //     { path: 'dashboard', name: 'Dashboard', component: dashboard, meta: { title: '首页', icon: '' } },
  //     {
  //       path: 'assetStatistic',
  //       name: 'AssetStatistic',
  //       component: () => import('@/views/dashboard/assetStatistic'),
  //       meta: { title: '用户资产统计', icon: '' },
  //     }
  //   ]
  // },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/homePage',
    name: 'Dashboard',
    meta: { title: '主页', icon: 'dashboard', role: [] },
    children: [
      // { path: 'welcome', name: 'Welcome', component: () => import('@/views/dashboard/welcome'), meta: { title: '欢迎你', icon: '' } },
      { path: 'homePage', name: 'HomePage', component: dashboard, meta: { title: '首页', icon: '' } },
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
      },
      {
        path: 'chartStatistic',
        name: 'ChartStatistic',
        component: () => import('@/views/dashboard/chartStatistic'),
        meta: { title: '图表统计', icon: '' },
      },
      {
        path: 'registerStatistic',
        name: 'RegisterStatistic',
        component: () => import('@/views/dashboard/registerStatistic'),
        meta: { title: '注册统计', icon: '' },
      },
    ],
  },
  // 用户管理
  {
    path: '/user',
    component: Layout,
    redirect: '/user/userlist',
    name: 'user',
    meta: { title: '用户管理', icon: 'user', role: [] },
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
        path: 'validatedUserlist',
        name: 'ValidatedUserlist',
        component: () => import('@/views/user/validatedUserlist'),
        meta: { title: '有效用户列表', icon: '' },
      },
      {
        hidden: true,
        path: 'validatedUserlistDetail',
        name: 'ValidatedUserlistDetail',
        component: () => import('@/views/user/validatedUserlistDetail'),
        meta: { title: '有效用户详情', icon: '', role: []},
      },
      {
        hidden: true,
        path: 'resetUserGoogleCode',
        name: 'ResetUserGoogleCode',
        component: () => import('@/views/user/resetUserGoogleCode'),
        meta: { title: '重置用户谷歌验证器', icon: '', role: [] },
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
      },
      
      
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
        path: 'certificationConfig',
        name: 'CertificationConfig',
        component: () => import('@/views/check/certificationConfig'),
        meta: { title: '实名认证配置', icon: '', role: [] },
      },
    ],
  },
  // 交易管理
  {
    path: '/exchange',
    component: Layout,
    redirect: '/exchange/orderlist',
    name: 'Exchange',
    meta: { title: '交易管理', icon: 'exchange1', role: [] },
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
    meta: { title: '币种管理', icon: 'symbol1', role: [] },
    children: [
      {
        path: 'chainType',
        name: 'ChainType',
        component: () => import('@/views/symbol/chainType'),
        meta: { title: '链类型管理', icon: '', role: [] },
      },

      {
        path: 'coinWhiteList',
        name: 'CoinWhiteList',
        component: () => import('@/views/symbol/coinWhiteList'),
        meta: { title: '提币白名单管理', icon: '', role: [] },
      },


      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/symbol/setting'),
        meta: { title: '币种管理', icon: '', role: [] },
      },
      {
        path: 'pairs',
        name: 'Pairs',
        component: () => import('@/views/symbol/pairs'),
        meta: { title: '交易对管理', icon: '', role: [] },
      },
      {
        path: 'robot',
        name: 'Robot',
        component: () => import('@/views/symbol/robot'),
        meta: { title: '机器人设置', icon: '' },
      },
      {
        path: 'currencyRobot',
        name: 'CurrencyRobot',
        component: () => import('@/views/symbol/currencyRobot'),
        meta: { title: '主流币机器人设置', icon: '' },
      },
      {
        path: 'contractSymbolRobot',
        name: 'ContractSymbolRobot',
        component: () => import('@/views/symbol/contractSymbolRobot'),
        meta: { title: '合约机器人设置', icon: '' },
      },
      {
        path: 'plateArea',
        name: 'PlateArea',
        component: () => import('@/views/symbol/plateArea'),
        meta: { title: '板块专区管理', icon: '' },
      },
      {
        path: 'smallAmountShow',
        name: 'SmallAmountShow',
        component: () => import('@/views/symbol/smallAmountShow'),
        meta: { title: '小额资产展示管理', icon: '' },
      },
      
    ],
  },
  // 财务管理
  {
    path: '/financial',
    component: Layout,
    redirect: '/financial/tenter',
    name: 'Financial',
    meta: { title: '财务管理', icon: 'financial', role: [] },
    children: [
      {
        path: 'collection',
        name: 'Collection',
        component: () => import('@/views/financial/collection'),
        meta: { title: '归集设置', icon: '', role: [] },
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
        meta: { title: '充币记录', icon: '', role: [] },
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
        meta: { title: '划转记录', icon: '', role: [] },
      },
      {
        path: 'contractTransfer',
        name: 'ContractTransfer',
        component: () => import('@/views/financial/contractTransfer'),
        meta: { title: '合约划转记录', icon: '', role: [] },
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
        meta: { title: '特殊调账管理', icon: '', role: [] },
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
      },
      {
        path: 'searchUserAddress',
        name: 'SearchUserAddress',
        component: () => import('@/views/financial/searchUserAddress'),
        meta: { title: '用户地址查询', icon: '', role: [] },
      },
    ],
  },
  // 系统管理
  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    name: 'System',
    meta: { title: '系统管理', icon: 'system', role: [] },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role'),
        meta: { title: '角色管理', icon: '', role: [] },
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/system/account'),
        meta: { title: '账户管理', icon: '', role: [] },
      },
      {
        path: 'resetpwd',
        name: 'Resetpwd',
        component: () => import('@/views/system/resetpwd'),
        meta: { title: '修改密码', icon: '', role: [] },
      },
      {
        path: 'resetauth',
        name: 'Restauth',
        component: () => import('@/views/system/resetauth'),
        meta: { title: '重置谷歌密钥', icon: '', role: [] },
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/system/menu'),
        meta: { title: '菜单管理', icon: '', role: [] },
      },
      {
        path: 'serviceMenu',
        name: 'ServiceMenu',
        component: () => import('@/views/system/serviceMenu'),
        meta: { title: '客服菜单管理', icon: '', role: [] },
      },
      {
        path: 'merchantMenu',
        name: 'MerchantMenu',
        component: () => import('@/views/system/merchantMenu'),
        meta: { title: '商户菜单管理', icon: '', role: [] },
      },
      // {
      //   path: 'agentMenu',
      //   name: 'AgentMenu',
      //   component: () => import('@/views/system/agentMenu'),
      //   meta: { title: '商户代理菜单管理', icon: '', role: [] }
      // },
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
      },
      {
        path: 'domainName',
        name: 'DomainName',
        component: () => import('@/views/system/domainName'),
        meta: { title: '域名管理', icon: '', role: [] },
      },
    ],
  },
  // app管理
  {
    path: '/app',
    component: Layout,
    redirect: '/app/version',
    name: 'App',
    meta: { title: '版本管理', icon: 'example', role: [] },
    children: [
      {
        path: 'version',
        name: 'Version',
        component: () => import('@/views/app/version'),
        meta: { title: 'app版本管理', icon: '', role: [] },
      },
      {
        path: 'localPackage',
        name: 'LocalPackage',
        component: () => import('@/views/app/localPackage'),
        meta: { title: '本地包管理', icon: '', role: [] },
      },
      {
        path: 'key',
        name: 'Key',
        component: () => import('@/views/app/key'),
        meta: { title: 'key设置', icon: '', role: [] },
      },
      {
        path: 'grayScale',
        name: 'GrayScale',
        component: () => import('@/views/app/grayScale'),
        meta: { title: '灰度设置', icon: '', role: [] },
      },
    ],
  },
  // 运营管理
  {
    path: '/front',
    component: Layout,
    redirect: '/front/notice',
    name: 'Front',
    meta: { title: '运营管理', icon: 'front', role: [] },
    children: [
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/front/notice'),
        meta: { title: '公告管理', icon: '', role: [] },
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('@/views/front/help'),
        meta: { title: '帮助中心', icon: '', role: [] },
      },
      {
        path: 'column',
        name: 'Column',
        component: () => import('@/views/front/column'),
        meta: { title: '栏目配置', icon: '', role: [] },
      },
      {
        path: 'banner',
        name: 'Banner',
        component: () => import('@/views/front/banner'),
        meta: { title: 'banner管理', icon: '', role: [] },
      },
      {
        path: 'popupNotice',
        name: 'PopupNotice',
        component: () => import('@/views/front/popupNotice'),
        meta: { title: '弹窗公告', icon: '', role: [] },
      },
      {
        path: 'msg',
        name: 'Msg',
        component: () => import('@/views/front/msg'),
        meta: { title: '短信管理', icon: '', role: [] },
      },
      {
        path: 'poster',
        name: 'Poster',
        component: () => import('@/views/front/poster'),
        meta: { title: '邀请海报管理', icon: '', role: [] },
      },

      // 抽奖管理
      {
        path: 'lottery',
        name: 'Lottery',
        redirect: '/front/lottery/lotteryList',
        meta: { title: '抽奖活动', icon: '', role: [] },
        children: [
          {
            path: 'lotteryList',
            name: 'LotteryList',
            component: () => import('@/views/front/lottery/lotteryList'),
            meta: { title: '抽奖活动列表', icon: '', role: [] },
          },
          {
            path: 'lotteryListDetail',
            name: 'LotteryListDetail',
            component: () => import('@/views/front/lottery/lotteryListDetail'),
            meta: { title: '抽奖活动详情', icon: '', role: [] },
          },
          {
            path: 'lotteryRecord',
            name: 'LotteryRecord',
            component: () => import('@/views/front/lottery/lotteryRecord'),
            meta: { title: '抽奖记录', icon: '', role: [] },
          },
          // {
          //   path: 'lotteryTaskSet',
          //   name: 'LotteryTaskSet',
          //   component: () => import('@/views/front/lottery/lotteryTaskSet'),
          //   meta: { title: '活动任务设置', icon: '', role: [] },
          // },
          {
            path: 'lotteryParams',
            name: 'LotteryParams',
            component: () => import('@/views/front/lottery/lotteryParams'),
            meta: { title: '奖品参数设置', icon: '', role: [] },
          },
        ],
      },

      // 体验金券管理
      {
        path: 'voucher',
        name: 'Voucher',
        redirect: '/front/voucher/voucherList',
        meta: { title: '体验金券管理', icon: '', role: [] },
        children: [
          {
            path: 'voucherList',
            name: 'VoucherList',
            component: () => import('@/views/front/voucher/voucherList'),
            meta: { title: '体验金券列表', icon: '', role: [] },
          },
          {
            path: 'voucherActivity',
            name: 'VoucherActivity',
            component: () => import('@/views/front/voucher/voucherActivity'),
            meta: { title: '活动列表', icon: '', role: [] },
          },

          {
            path: 'voucherParameters',
            name: 'VoucherParameters',
            component: () => import('@/views/front/voucher/voucherParameters'),
            meta: { title: '条件参数设置', icon: '', role: [] }
          },

          {
            path: 'voucherVipUserList',
            name: 'VoucherVipUserList',
            component: () => import('@/views/front/voucher/voucherVipUserList'),
            meta: { title: '尊贵会员名额管理', icon: '', role: [] }
          },

          {
            path: 'voucherVipUserDetails',
            name: 'VoucherVipUserDetails',
            component: () => import('@/views/front/voucher/voucherVipUserDetails'),
            meta: { title: '名额详情', icon: '', role: [] }
          },

          {
            path: 'voucherExperience',
            name: 'VoucherExperience',
            component: () => import('@/views/front/voucher/voucherExperience'),
            meta: { title: '体验金账号', icon: '', role: [] },
          },
          {
            path: 'voucherGrant',
            name: 'VoucherGrant',
            component: () => import('@/views/front/voucher/voucherGrant'),
            meta: { title: '发放记录', icon: '', role: [] },
          },
        ],
      },

      // 红包管理
      {
        path: 'redPacket',
        name: 'RedPacket',
        redirect: '/front/redPacket/redPacketList',
        meta: { title: '红包管理', icon: '', role: [] },
        children: [
          {
            path: 'redPacketList',
            name: 'RedPacketList',
            component: () => import('@/views/front/redPacket/redPacketList'),
            meta: { title: '红包列表', icon: '', role: [] },
          },
          {
            path: 'redPacketCoin',
            name: 'RedPacketCoin',
            component: () => import('@/views/front/redPacket/redPacketCoin'),
            meta: { title: '红包币种设置', icon: '', role: [] },
          },
          {
            path: 'redPacketSubject',
            name: 'RedPacketSubject',
            component: () => import('@/views/front/redPacket/redPacketSubject'),
            meta: { title: '红包主题设置', icon: '', role: [] },
          },
        ],
      },
    ],
  },
  // 法币管理
  {
    path: '/fiat',
    component: Layout,
    redirect: '/fiat/advertiseRecord',
    name: 'Fiat',
    meta: { title: '法币管理', icon: 'fiat', role: [] },
    children: [
      {
        path: 'customerAccount',
        name: 'CustomerAccount',
        component: () => import('@/views/fiat/customerAccount'),
        meta: { title: '商户账号管理', icon: '', role: [] },
      },
      {
        path: 'customerFlow',
        name: 'CustomerFlow',
        component: () => import('@/views/fiat/customerFlow'),
        meta: { title: '商户流水', icon: '', role: [] },
      },
      {
        path: 'advertiseRecord',
        name: 'FiatAdvertiseRecord',
        component: () => import('@/views/fiat/advertiseRecord'),
        meta: { title: '广告管理', icon: '', role: [] },
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
        name: 'OtcOrder',
        component: () => import('@/views/fiat/otcOrder'),
        meta: { title: 'OTC订单管理', icon: '', role: [] },
      },
      {
        path: 'dialogueRecord',
        name: 'DialogueRecord',
        component: () => import('@/views/fiat/dialogueRecord'),
        meta: { title: '对话记录', icon: '', role: [] },
      },
      {
        path: 'otcOrderCustomer',
        name: 'OtcOrderCustomer',
        component: () => import('@/views/fiat/otcOrderCustomer'),
        meta: { title: '商户OTC订单管理', icon: '', role: [] },
      },
      {
        path: 'dialogueRecordCustomer',
        name: 'DialogueRecordCustomer',
        component: () => import('@/views/fiat/dialogueRecordCustomer'),
        meta: { title: '商户对话记录', icon: '', role: [] },
      },
      // {
      //   path: 'fundsFlow',
      //   name: 'FiatFundsFlow',
      //   component: () => import('@/views/fiat/fundsFlow'),
      //   meta: { title: '资金流水', icon: '', role: [] },
      // },
      {
        path: 'otcGlobal',
        name: 'FiatOtcGlobal',
        component: () => import('@/views/fiat/otcGlobal'),
        meta: { title: 'OTC全局设定', icon: '', role: [] },
      },
      // {
      //   path: 'otcBail',
      //   name: 'FiatOtcBail',
      //   component: () => import('@/views/fiat/otcBail'),
      //   meta: { title: 'OTC保证金设置', icon: '', role: [] },
      // },
      {
        path: 'paymentMethod',
        name: 'PaymentMethod',
        component: () => import('@/views/fiat/paymentMethod'),
        meta: { title: 'OTC收款方式设置', icon: '', role: [] },
      },
      {
        path: 'matchWeight',
        name: 'MatchWeight',
        component: () => import('@/views/fiat/matchWeight'),
        meta: { title: '会员设置', icon: '', role: [] },
      },
      {
        path: 'rateManage',
        name: 'RateManage',
        component: () => import('@/views/fiat/rateManage'),
        meta: { title: '汇率管理', icon: '', role: [] },
      },
      {
        path: 'agentList',
        name: 'AgentList',
        component: () => import('@/views/fiat/agentList'),
        meta: { title: '代理管理', icon: '', role: [] },
      },
      {
        path: 'agentRevenue',
        name: 'AgentRevenue',
        component: () => import('@/views/fiat/agentRevenue'),
        meta: { title: '返佣记录', icon: '', role: [] },
      },
      {
        path: 'levelSetting',
        name: 'LevelSetting',
        component: () => import('@/views/fiat/levelSetting'),
        meta: { title: '等级设置', icon: '', role: [] },
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
  },
  // 工单管理
  {
    path: '/workOrder',
    component: Layout,
    redirect: '/workOrder/workOrderList',
    name: 'WorkOrder',
    meta: { title: '工单管理', icon: 'fiat', role: [] },
    children: [
      {
        path: 'workOrderList',
        name: 'WorkOrderList',
        component: () => import('@/views/workOrder/workOrderList'),
        meta: { title: '工单列表', icon: '', role: [] },
      },
      {
        path: 'workOrderType',
        name: 'WorkOrderType',
        component: () => import('@/views/workOrder/workOrderType'),
        meta: { title: '工单类型', icon: '', role: [] },
      },
      {
        path: 'loadCoin',
        name: 'LoadCoin',
        component: () => import('@/views/workOrder/loadCoin'),
        meta: { title: '上币列表', icon: '', role: [] },
      },
    ],
  },
  // 资产管理
  {
    path: '/assetManage',
    component: Layout,
    redirect: '/assetManage/assetManageList',
    name: 'AssetManage',
    meta: { title: '资产管理', icon: 'warehouse', role: [] },
    children: [
      {
        path: 'assetManageList',
        name: 'AssetManageList',
        component: () => import('@/views/assetManage/assetManageList'),
        meta: { title: '资产列表', icon: '', role: [] },
      },
      {
        path: 'transferRecord',
        name: 'TransferRecord',
        component: () => import('@/views/assetManage/transferRecord'),
        meta: { title: '划转记录', icon: '', role: [] },
      },
      {
        path: 'earnAccount',
        name: 'EarnAccount',
        component: () => import('@/views/assetManage/earnAccount'),
        meta: { title: '手续费账号', icon: '', role: [] },
      },
      {
        path: 'earnRecord',
        name: 'EarnRecord',
        component: () => import('@/views/assetManage/earnRecord'),
        meta: { title: '收益记录', icon: '', role: [] },
      },
      {
        path: 'writeoffRecord',
        name: 'WriteoffRecord',
        component: () => import('@/views/assetManage/writeoffRecord'),
        meta: { title: '销账记录', icon: '', role: [] },
      },
      {
        path: 'revenueAccount',
        name: 'RevenueAccount',
        component: () => import('@/views/assetManage/revenueAccount'),
        meta: { title: '星球充值账号', icon: '', role: [] },
      },
      {
        path: 'manualRechargeRecord',
        name: 'ManualRechargeRecord',
        component: () => import('@/views/assetManage/manualRechargeRecord'),
        meta: { title: '手动充值记录', icon: '', role: [] },
      },
      {
        path: 'costAccount',
        name: 'CostAccount',
        component: () => import('@/views/assetManage/costAccount'),
        meta: { title: '成本账号', icon: '', role: [] },
      },
      {
        path: 'expenseAcountList',
        name: 'ExpenseAcountList',
        component: () => import('@/views/assetManage/expenseAcountList'),
        meta: { title: '支出账号', icon: '', role: [] },
      },
      {
        path: 'sonAcountList',
        name: 'SonAcountList',
        component: () => import('@/views/assetManage/sonAcountList'),
        meta: { title: '子账号列表', icon: '', role: [] },
      },
      {
        path: 'sonAcountDetail',
        name: 'SonAcountDetail',
        component: () => import('@/views/assetManage/sonAcountDetail'),
        meta: { title: '子账号详情', icon: '', role: [] },
      },
      {
        path: 'runRecord',
        name: 'RunRecord',
        component: () => import('@/views/assetManage/runRecord'),
        meta: { title: '使用流水列表', icon: '', role: [] },
      },
    ],
  },

  // 客服管理
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/reportForm/buyList',
    name: 'Customer',
    meta: { title: '客服管理', icon: 'front', role: [] },
    children: [
      {
        path: 'reportForm',
        name: 'ReportForm',
        // component:() => import('@/views/RouterView'), // 不用写，而用RouterView
        // permission.js里面的initRouter函数
        redirect: '/customer/reportForm/buyList',
        meta: { title: '订单管理', icon: '', role: [] },
        children: [
          {
            path: 'buyList',
            name: 'BuyList',
            component: () => import('@/views/customer/reportForm/buyList'),
            meta: { title: '购买订单', icon: '', role: [] },
          },
          // {
          //   path: 'buyListDetail',
          //   name: 'BuyListDetail',
          //   component: () => import('@/views/customer/reportForm/buyListDetail'),
          //   meta: { title: '购买订单判决', icon: '', role: [] },
          // },
          {
            path: 'sellList',
            name: 'SellList',
            component: () => import('@/views/customer/reportForm/sellList'),
            meta: { title: '出售订单', icon: '', role: [] },
          },
          // {
          //   path: 'sellListDetail',
          //   name: 'SellListDetail',
          //   component: () => import('@/views/customer/reportForm/sellListDetail'),
          //   meta: { title: '出售订单判决', icon: '', role: [] },
          // },
          {
            path: 'payRecordList',
            name: 'PayRecordList',
            component: () => import('@/views/customer/reportForm/payRecordList'),
            meta: { title: '币付记录', icon: '', role: [] },
          },
          {
            path: 'payRecordAbnormal',
            name: 'PayRecordAbnormal',
            component: () => import('@/views/customer/reportForm/payRecordAbnormal'),
            meta: { title: '异常币付记录', icon: '', role: [] },
          },
          {
            path: 'rechargeCustom',
            name: 'RechargeCustom',
            component: () => import('@/views/customer/reportForm/rechargeCustom'),
            meta: { title: '充值记录', icon: '', role: [] },
          },
          {
            path: 'withdrawCustom',
            name: 'WithdrawCustom',
            component: () => import('@/views/customer/reportForm/withdrawCustom'),
            meta: { title: '提币记录', icon: '', role: [] },
          },
          {
            path: 'transferCustom',
            name: 'TransferCustom',
            component: () => import('@/views/customer/reportForm/transferCustom'),
            meta: { title: '转账记录', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'merchantCus',
        name: 'MerchantCus',
        redirect: '/customer/merchantCus/merchantList',
        meta: { title: '商户管理', icon: '', role: [] },
        children: [
          {
            path: 'merchantList',
            name: 'MerchantList',
            component: () => import('@/views/customer/merchantCus/merchantList'),
            meta: { title: '商户列表', icon: '', role: [] },
          },
          {
            path: 'merchantExamine',
            name: 'MerchantExamine',
            component: () => import('@/views/customer/merchantCus/merchantExamine'),
            meta: { title: '商户审核', icon: '', role: [] },
          },
          // {
          //   path: 'merchantMenu',
          //   name: 'MerchantMenu',
          //   component: () => import('@/views/customer/merchantCus/merchantMenu'),
          //   meta: { title: '商户菜单管理', icon: '', role: [] },
          // },
        ],
      },
      {
        path: 'agentCus',
        name: 'AgentCus',
        redirect: '/customer/agentCus/agentList',
        meta: { title: '商户代理管理', icon: '', role: [] },
        children: [
          {
            path: 'agentCusList',
            name: 'AgentCusList',
            component: () => import('@/views/customer/agentCus/agentCusList'),
            meta: { title: '商户代理列表', icon: '', role: [] },
          },
          {
            path: 'agentCusRelationList',
            name: 'AgentCusRelationList',
            component: () => import('@/views/customer/agentCus/agentCusRelationList'),
            meta: { title: '商户代理关系列表', icon: '', role: [] },
          },
          {
            path: 'revenueRecords',
            name: 'RevenueRecords',
            component: () => import('@/views/customer/agentCus/revenueRecords'),
            meta: { title: '收益记录', icon: '', role: [] },
          },
        ],
      },
      // {
      //   path: 'authGroup',
      //   name: 'AuthGroup',
      //   component: () => import('@/views/customer/authGroup'),
      //   meta: { title: '授权分组', icon: '', role: [] },
      // },
      // {
      //   path: 'authGroupDetail',
      //   name: 'AuthGroupDetail',
      //   component: () => import('@/views/customer/authGroupDetail'),
      //   meta: { title: '授权分组详情页', icon: '', role: [] },
      // },
      // {
      //   path: 'rateManage',
      //   name: 'RateManage',
      //   component: () => import('@/views/customer/rateManage'),
      //   meta: { title: '汇率管理', icon: '', role: [] },
      // }
    ],
  },

  {
    path: '/agent',
    component: Layout,
    redirect: '/agent/positionContract',
    name: 'Agent',
    meta: { title: '代理管理', icon: 'system', role: [] },
    children: [
      {
        path: 'agentsLists',
        name: 'AgentsLists',
        component: () => import('@/views/agent/agentsLists'),
        meta: { title: '代理商列表', icon: '', role: [] },
      },
      {
        path: 'userMonitor',
        name: 'UserMonitor',
        component: () => import('@/views/agent/userMonitor'),
        meta: { title: '用户监控列表', icon: '', role: [] },
      },

      {
        path: 'agentMonitor',
        name: 'AgentMonitor',
        component: () => import('@/views/agent/agentMonitor'),
        meta: { title: '代理监控列表', icon: '', role: [] },
      },

      {
        path: 'agentsListsConfig',
        name: 'AgentsListsConfig',
        component: () => import('@/views/agent/agentsListsConfig'),
        meta: { title: '代理商等级配置', icon: '', role: [] },
      },
      {
        path: 'agentsListsDetail',
        name: 'AgentsListsDetail',
        component: () => import('@/views/agent/agentsListsDetail'),
        meta: { title: '代理商详情', icon: '', role: [] },
      },

      {
        path: 'businessLists',
        name: 'BusinessLists',
        component: () => import('@/views/agent/businessLists'),
        meta: { title: '商务列表', icon: '', role: [] },
      },
      {
        path: 'businessListsConfig',
        name: 'BusinessListsConfig',
        component: () => import('@/views/agent/businessListsConfig'),
        meta: { title: '商务等级配置', icon: '', role: [] },
      },
      {
        path: 'businessListsDetail',
        name: 'BusinessListsDetail',
        component: () => import('@/views/agent/businessListsDetail'),
        meta: { title: '商务详情', icon: '', role: [] },
      },

      {
        path: 'agentTransfer',
        name: 'AgentTransfer',
        component: () => import('@/views/agent/agentTransfer'),
        meta: { title: '划转记录', icon: '', role: [] },
      },

      {
        path: 'refundRecord',
        name: 'RefundRecord',
        component: () => import('@/views/agent/refundRecord'),
        meta: { title: '代理手续费返佣记录', icon: '', role: [] },
      },
      {
        path: 'apportionRecord',
        name: 'ApportionRecord',
        component: () => import('@/views/agent/apportionRecord'),
        meta: { title: '代理团队长返佣记录', icon: '', role: [] },
      },
      {
        path: 'businessFinancialFlow',
        name: 'BusinessFinancialFlow',
        component: () => import('@/views/agent/businessFinancialFlow'),
        meta: { title: '商务财务流水', icon: '', role: [] },
      },
      {
        path: 'agentFinancialFlow',
        name: 'AgentFinancialFlow',
        component: () => import('@/views/agent/agentFinancialFlow'),
        meta: { title: '代理财务流水', icon: '', role: [] },
      },
      {
        path: 'agentRefundRecordNew',
        name: 'AgentRefundRecordNew',
        component: () => import('@/views/agent/agentRefundRecordNew'),
        meta: { title: '用户手续费返佣记录', icon: '', role: [] },
      },
      {
        path: 'agentLevel',
        name: 'AgentLevel',
        component: () => import('@/views/agent/agentLevel'),
        meta: { title: '代理层级关系', icon: '', role: [] },
      },
    ],
  },


  // 合约模块
  {
    path: '/contract',
    component: Layout,
    redirect: '/contract/coinContract',
    name: 'Contract',
    meta: { title: '合约管理', icon: 'fiat', role: [] },
    children: [
      {
        path: 'transact',
        name: 'Transact',
        redirect: '/contract/transact/agentList',
        meta: { title: '交易管理', icon: '', role: [] },
        children: [
          {
            path: 'coinContract',
            name: 'CoinContract',
            component: () => import('@/views/contract/transact/coinContract'),
            meta: { title: '合约币种', icon: '', role: [] },
          },
          {
            path: 'gearSetting',
            name: 'GearSetting',
            component: () => import('@/views/contract/transact/gearSetting'),
            meta: { title: '档位设置', icon: '', role: [] },
          },

          {
            path: 'contractAccount',
            name: 'ContractAccount',
            component: () => import('@/views/contract/transact/contractAccount'),
            meta: { title: '资金费率设置', icon: '', role: [] },
          },

          {
            path: 'contractFundRate',
            name: 'ContractFundRate',
            component: () => import('@/views/contract/transact/contractFundRate'),
            meta: { title: '资金费率', icon: '', role: [] },
          },

          {
            path: 'billContract',
            name: 'BillContract',
            component: () => import('@/views/contract/transact/billContract'),
            meta: { title: '合约账单', icon: '', role: [] },
          },
          // {
          //   path: 'refundRecordNew',
          //   name: 'RefundRecordNew',
          //   component: () => import('@/views/contract/transact/refundRecordNew'),
          //   meta: { title: '用户返佣记录', icon: '', role: [] },
          // },
          {
            path: 'treatyAssetsContract',
            name: 'TreatyAssetsContract',
            component: () => import('@/views/contract/transact/treatyAssetsContract'),
            meta: { title: '合约资产', icon: '', role: [] },
          },
          {
            path: 'flowRecordContract',
            name: 'FlowRecordContract',
            component: () => import('@/views/contract/transact/flowRecordContract'),
            meta: { title: '合约流水', icon: '', role: [] },
          },
          // {
          //   path: 'historicalContract',
          //   name: 'HistoricalContract',
          //   component: () => import('@/views/contract/transact/historicalContract'),
          //   meta: { title: '历史合约资产', icon: '', role: [] }
          // },
          // {
          //   path: 'contractRobot',
          //   name: 'ContractRobot',
          //   component: () => import('@/views/contract/transact/contractRobot'),
          //   meta: { title: '合约机器人', icon: '', role: [] }
          // },
          // {
          //   path: 'controlPanel',
          //   name: 'ControlPanel',
          //   component: () => import('@/views/contract/transact/controlPanel'),
          //   meta: { title: '短时控盘', icon: '', role: [] }
          // }
        ],
      },
      {
        path: 'order',
        name: 'Order',
        redirect: '/contract/order/generalEntrustContract',
        meta: { title: '订单管理', icon: '', role: [] },
        children: [
          {
            path: 'generalEntrustContract',
            name: 'GeneralEntrustContract',
            component: () => import('@/views/contract/order/generalEntrustContract'),
            meta: { title: '普通委托账单', icon: '', role: [] },
          },
          {
            path: 'planEntrustContract',
            name: 'PlanEntrustContract',
            component: () => import('@/views/contract/order/planEntrustContract'),
            meta: { title: '计划委托账单', icon: '', role: [] },
          },
          {
            path: 'dealContract',
            name: 'DealContract',
            component: () => import('@/views/contract/order/dealContract'),
            meta: { title: '成交记录', icon: '', role: [] },
          },
          {
            path: 'serviceChargeContract',
            name: 'ServiceChargeContract',
            component: () => import('@/views/contract/order/serviceChargeContract'),
            meta: { title: '手续费列表', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'store',
        name: 'Store',
        redirect: '/contract/store/positionContract',
        meta: { title: '仓位管理', icon: '', role: [] },
        children: [
          {
            path: 'positionContract',
            name: 'PositionContract',
            component: () => import('@/views/contract/store/positionContract'),
            meta: { title: '持仓记录', icon: '', role: [] },
          },
          {
            path: 'closeContract',
            name: 'CloseContract',
            component: () => import('@/views/contract/store/closeContract'),
            meta: { title: '平仓记录', icon: '', role: [] },
          },
        ],
      },
     
      {
        path: 'risk',
        name: 'Risk',
        redirect: '/contract/risk/dataStatistics',
        meta: { title: '风控管理', icon: '', role: [] },
        children: [
          {
            path: 'dataStatistics',
            name: 'DataStatistics',
            component: () => import('@/views/contract/risk/dataStatistics'),
            meta: { title: '数据统计', icon: '', role: [] },
          },
          {
            path: 'riskLevel',
            name: 'RiskLevel',
            component: () => import('@/views/contract/risk/riskLevel'),
            meta: { title: '风控等级管理', icon: '', role: [] },
          },
          {
            path: 'contractEstimate',
            name: 'ContractEstimate',
            component: () => import('@/views/contract/risk/contractEstimate'),
            meta: { title: '合约预估模拟器', icon: '', role: [] },
          },
          {
            path: 'contractResult',
            name: 'ContractResult',
            component: () => import('@/views/contract/risk/contractResult'),
            meta: { title: '计算结果', icon: '', role: [] },
          },
          {
            path: 'contractTactics',
            name: 'ContractTactics',
            component: () => import('@/views/contract/risk/contractTactics'),
            meta: { title: '合约策略点管理', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'accountManagement',
        name: 'AccountManagement',
        redirect: '/contract/accountManagement/accountContract',
        meta: { title: '账号管理', icon: '', role: [] },
        children: [
          {
            path: 'accountContract',
            name: 'AccountContract',
            component: () => import('@/views/contract/accountManagement/accountContract'),
            meta: { title: '合约账户', icon: '', role: [] },
          },
          {
            path: 'destroyBill',
            name: 'DestroyBill',
            component: () => import('@/views/contract/accountManagement/destroyBill'),
            meta: { title: '销账记录', icon: '', role: [] },
          },
          {
            path: 'earningsRecord',
            name: 'EarningsRecord',
            component: () => import('@/views/contract/accountManagement/earningsRecord'),
            meta: { title: '收益记录', icon: '', role: [] },
          },
          {
            path: 'earningsFlow',
            name: 'EarningsFlow',
            component: () => import('@/views/contract/accountManagement/earningsFlow'),
            meta: { title: '收益流水', icon: '', role: [] },
          },
        ],
      },
    ],
  },

  // 模拟合约模块
  {
    path: '/contractMimic',
    component: Layout,
    redirect: '/contractMimic/coinContractMimic',
    name: 'ContractMimic',
    meta: { title: '模拟合约管理', icon: 'financial', role: [] },
    children: [
      {
        path: 'transactMimic',
        name: 'TransactMimic',
        redirect: '/contractMimic/transactMimic/agentList',
        meta: { title: '模拟交易管理', icon: '', role: [] },
        children: [
          {
            path: 'coinContractMimic',
            name: 'CoinContractMimic',
            component: () => import('@/views/contractMimic/transactMimic/coinContractMimic'),
            meta: { title: '模拟合约币种', icon: '', role: [] },
          },
          {
            path: 'gearSettingMimic',
            name: 'GearSettingMimic',
            component: () => import('@/views/contractMimic/transactMimic/gearSettingMimic'),
            meta: { title: '模拟档位设置', icon: '', role: [] },
          },

          {
            path: 'contractMimicAccount',
            name: 'ContractMimicAccount',
            component: () => import('@/views/contractMimic/transactMimic/contractMimicAccount'),
            meta: { title: '模拟资金费率设置', icon: '', role: [] },
          },

          {
            path: 'contractMimicFundRate',
            name: 'ContractMimicFundRate',
            component: () => import('@/views/contractMimic/transactMimic/contractMimicFundRate'),
            meta: { title: '模拟资金费率', icon: '', role: [] },
          },

          {
            path: 'billContractMimic',
            name: 'BillContractMimic',
            component: () => import('@/views/contractMimic/transactMimic/billContractMimic'),
            meta: { title: '模拟合约账单', icon: '', role: [] },
          },

          {
            path: 'flowRecordContractMimic',
            name: 'FlowRecordContractMimic',
            component: () => import('@/views/contractMimic/transactMimic/flowRecordContractMimic'),
            meta: { title: '模拟合约流水', icon: '', role: [] },
          },
          {
            path: 'treatyAssetsContractMimic',
            name: 'TreatyAssetsContractMimic',
            component: () => import('@/views/contractMimic/transactMimic/treatyAssetsContractMimic'),
            meta: { title: '模拟合约资产', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'orderMimic',
        name: 'OrderMimic',
        redirect: '/contractMimic/orderMimic/generalEntrustContractMimic',
        meta: { title: '模拟订单管理', icon: '', role: [] },
        children: [
          {
            path: 'generalEntrustContractMimic',
            name: 'GeneralEntrustContractMimic',
            component: () => import('@/views/contractMimic/orderMimic/generalEntrustContractMimic'),
            meta: { title: '模拟普通委托账单', icon: '', role: [] },
          },
          {
            path: 'planEntrustContractMimic',
            name: 'PlanEntrustContractMimic',
            component: () => import('@/views/contractMimic/orderMimic/planEntrustContractMimic'),
            meta: { title: '模拟计划委托账单', icon: '', role: [] },
          },
          {
            path: 'dealContractMimic',
            name: 'DealContractMimic',
            component: () => import('@/views/contractMimic/orderMimic/dealContractMimic'),
            meta: { title: '模拟成交记录', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'storeMimic',
        name: 'StoreMimic',
        redirect: '/contractMimic/storeMimic/positionContractMimic',
        meta: { title: '模拟仓位管理', icon: '', role: [] },
        children: [
          {
            path: 'positionContractMimic',
            name: 'PositionContractMimic',
            component: () => import('@/views/contractMimic/storeMimic/positionContractMimic'),
            meta: { title: '模拟持仓记录', icon: '', role: [] },
          },
          {
            path: 'closeContractMimic',
            name: 'CloseContractMimic',
            component: () => import('@/views/contractMimic/storeMimic/closeContractMimic'),
            meta: { title: '模拟平仓记录', icon: '', role: [] },
          },
        ],
      },
      {
        path: 'recordMimic',
        name: 'RecordMimic',
        redirect: '/contractMimic/recordMimic/userlistMimic',
        meta: { title: '模拟金领取记录', icon: '', role: [] },
        children: [
          {
            path: 'userlistMimic',
            name: 'UserlistMimic',
            component: () => import('@/views/contractMimic/recordMimic/userlistMimic'),
            meta: { title: '模拟用户列表', icon: '', role: [] },
          },
          {
            path: 'getRecordMimic',
            name: 'GetRecordMimic',
            component: () => import('@/views/contractMimic/recordMimic/getRecordMimic'),
            meta: { title: '模拟领取记录', icon: '', role: [] },
          },
          {
            path: 'columnMimic',
            name: 'ColumnMimic',
            component: () => import('@/views/contractMimic/recordMimic/columnMimic'),
            meta: { title: '模拟配置列表', icon: '', role: [] },
          },
          {
            path: 'settingMimic',
            name: 'SettingMimic',
            component: () => import('@/views/contractMimic/recordMimic/settingMimic'),
            meta: { title: '模拟盘配置开关', icon: '', role: [] },
          },
        ],
      },

      {
        path: 'analystMimic',
        name: 'AnalystMimic',
        redirect: '/contractMimic/analystMimic/analystMimicList',
        meta: { title: '分析师管理', icon: '', role: [] },
        children: [
          {
            path: 'analystMimicList',
            name: 'AnalystMimicList',
            component: () => import('@/views/contractMimic/analystMimic/analystMimicList'),
            meta: { title: '分析师列表', icon: '', role: [] },
          },
          {
            path: 'analystMimicDetail',
            name: 'AnalystMimicDetail',
            component: () => import('@/views/contractMimic/analystMimic/analystMimicDetail'),
            meta: { title: '分析师详情', icon: '', role: [] },
          },
          {
            path: 'accountMimicList',
            name: 'AccountMimicList',
            component: () => import('@/views/contractMimic/analystMimic/accountMimicList'),
            meta: { title: '资金调账管理', icon: '', role: [] },
          },
        ],
      },
    ],
  },

  // 币支付模块
  {
    path: '/coinPay',
    component: Layout,
    redirect: '/coinPay/otcOrderPay',
    name: 'CoinPay',
    meta: { title: '币支付管理', icon: 'symbol1', role: [] },
    children: [
      {
        path: 'otcOrderPay',
        name: 'OtcOrderPay',
        component: () => import('@/views/coinPay/otcOrderPay'),
        meta: { title: 'OTC订单管理', icon: '', role: [] },
      },
      {
        path: 'dialogueRecordPay',
        name: 'DialogueRecordPay',
        component: () => import('@/views/coinPay/dialogueRecordPay'),
        meta: { title: 'OTC订单管理详情', icon: '', role: [] },
      },
      {
        path: 'appealPay',
        name: 'AppealPay',
        component: () => import('@/views/coinPay/appealPay'),
        meta: { title: '申诉管理', icon: '', role: [] },
      },
      {
        path: 'appealJudgePay',
        name: 'AppealJudgePay',
        component: () => import('@/views/coinPay/appealJudgePay'),
        meta: { title: '申诉判决', icon: '', role: [] },
      },
      {
        path: 'rechargePay',
        name: 'RechargePay',
        component: () => import('@/views/coinPay/rechargePay'),
        meta: { title: '充币记录', icon: '', role: [] },
      },
      {
        path: 'extractPay',
        name: 'ExtractPay',
        component: () => import('@/views/coinPay/extractPay'),
        meta: { title: '提币记录', icon: '', role: [] },
      },
      {
        path: 'transferPay',
        name: 'TransferPay',
        component: () => import('@/views/coinPay/transferPay'),
        meta: { title: '划转记录', icon: '', role: [] },
      },
      {
        path: 'coinFundsPay',
        name: 'coinFundsPay',
        component: () => import('@/views/coinPay/coinFundsPay'),
        meta: { title: '资金流水', icon: '', role: [] },
      },
      {
        path: 'userlistPay',
        name: 'UserlistPay',
        component: () => import('@/views/coinPay/userlistPay'),
        meta: { title: '用户列表', icon: '', role: [] },
      },
      {
        path: 'userlistDetailPay',
        name: 'UserlistDetailPay',
        component: () => import('@/views/coinPay/userlistDetailPay'),
        meta: { title: '用户详情', icon: '', role: [] },
      },

      //   path: 'transact',
      //   name: 'Transact',
      //   redirect: '/contract/transact/agentList',
      //   meta: { title: '交易管理', icon: '', role: [] },
      //   children: [
      //     {
      //       path: 'coinContract',
      //       name: 'CoinContract',
      //       component: () => import('@/views/contract/transact/coinContract'),
      //       meta: { title: '合约币种', icon: '', role: [] }
      //     },
      //     {
      //       path: 'gearSetting',
      //       name: 'GearSetting',
      //       component: () => import('@/views/contract/transact/gearSetting'),
      //       meta: { title: '档位设置', icon: '', role: [] }
      //     },
      //     {
      //       path: 'billContract',
      //       name: 'BillContract',
      //       component: () => import('@/views/contract/transact/billContract'),
      //       meta: { title: '合约账单', icon: '', role: [] }
      //     },
      //     {
      //       path: 'treatyAssetsContract',
      //       name: 'TreatyAssetsContract',
      //       component: () => import('@/views/contract/transact/treatyAssetsContract'),
      //       meta: { title: '合约资产', icon: '', role: [] }
      //     },
      //     {
      //       path: 'flowRecordContract',
      //       name: 'FlowRecordContract',
      //       component: () => import('@/views/contract/transact/flowRecordContract'),
      //       meta: { title: '合约流水', icon: '', role: [] }
      //     }
      //   ]
      // }
    ],
  },

  // 点卡管理
  {
    path: '/ticketCard',
    component: Layout,
    redirect: '/ticketCard/ticketCardList',
    name: 'TicketCard',
    meta: { title: '点卡管理', icon: 'front', role: [] },
    children: [
      {
        path: 'ticketCardList',
        name: 'TicketCardList',
        component: () => import('@/views/ticketCard/ticketCardList'),
        meta: { title: '点卡资产', icon: '', role: [] },
      },
      {
        path: 'presenterList',
        name: 'PresenterList',
        component: () => import('@/views/ticketCard/presenterList'),
        meta: { title: '赠送列表', icon: '', role: [] },
      },
      {
        path: 'ticketCardUseList',
        name: 'TicketCardUseList',
        component: () => import('@/views/ticketCard/ticketCardUseList'),
        meta: { title: '使用记录', icon: '', role: [] },
      },
    ],
  },


  // 商户管理
  {
    path: '/merchant',
    component: Layout,
    redirect: '/merchant/groupAuth',
    name: 'Merchant',
    meta: { title: '商户管理', icon: 'front', role: [] },
    children: [
      
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
      
    ],
  },

  // 出入金管理
  {
    path: '/inOutGold',
    component: Layout,
    redirect: '/inOutGold/inOutGoldInfo',
    name: 'InOutGold',
    meta: { title: '出入金管理', icon: 'front', role: [] },
    children: [
      
      {
        path: 'inOutGoldInfo',
        name: 'InOutGoldInfo',
        component: () => import('@/views/inOutGold/inOutGoldInfo'),
        meta: { title: '出入金统计', icon: '', role: [] },
      },
      {
        path: 'coinInOutGold',
        name: 'CoinInOutGold',
        component: () => import('@/views/inOutGold/coinInOutGold'),
        meta: { title: '币币出入金', icon: '', role: [] },
      },
      {
        path: 'fiatCoinInOutGold',
        name: 'FiatCoinInOutGold',
        component: () => import('@/views/inOutGold/fiatCoinInOutGold'),
        meta: { title: '法币出入金', icon: '', role: [] },
      },
      {
        path: 'contractInOutGold',
        name: 'ContractInOutGold',
        component: () => import('@/views/inOutGold/contractInOutGold'),
        meta: { title: '合约出入金', icon: '', role: [] },
      },
    ],
  },
];
