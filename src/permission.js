import router, { createRouter, $addRoutes } from './router/index'
// import router from "./router/index";
import store from './store/index'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, removeToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import Cookies from 'js-cookie'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
let isRefresh = false

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)
  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // next({ path: "/" });
      NProgress.done()
      localStorage.removeItem('vuex')
      localStorage.clear()
      removeToken()
      localStorage.removeItem('user_name')
      // sessionStorage.clear();
      window.location.reload()
      next()
      // NProgress.done();
    } else {
      if (window.isStaticOrDynamic === 'static') {
        next()
      } else {
        if (store.state.app.navlist && store.state.app.navlist.length > 0) {
          if (!store.state.app.hybridRouters || store.state.app.hybridRouters.length <= 0) {
            // 生成动态权限路由hybridRouters
            setTimeout(() => {
              store
                .dispatch('app/GenerateRoutes', store.state.app.navlist)
                .then(() => {
                  // 重新存一遍navlist因为GenerateRoutes方法会把navlist的meta改为本地静态的（增加了config字段）
                  store.dispatch('app/setNavList', store.state.app.navlist)
                  isRefresh = true
                  const nowRoutes = store.state.app.hybridRouters
                  // 如果*页不改放在这里加将会报错（坑）
                  nowRoutes.push({ path: '*', redirect: '/404', hidden: true })
                  const temp = initRouter(nowRoutes)
                  $addRoutes(temp)
                  // router.addRoutes(nowRoutes); // 动态添加可访问路由表
                  next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
                })
                .catch(err => {
                  // console.log(err);
                })
            }, 1000)
          } else if (!isRefresh && store.state.app.hybridRouters.length > 0) {
            // 防止特殊情况：刷新后动态路由丢失，所以要重新add+route操作 store.state.app.routers.length
            isRefresh = true
            const nowRoutes = store.state.app.hybridRouters
            nowRoutes.push({ path: '*', redirect: '/404', hidden: true })
            const temp = initRouter(nowRoutes)
            $addRoutes(temp)
            next({ ...to, replace: true })
          } else {
            next()
          }
        } else {
          localStorage.clear()
          removeToken()
          localStorage.removeItem('user_name')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      // next(`/login`);
      next()
      // NProgress.done();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      // next(); // 这里虽然具有强制更新动态路由的功能，但是对于页面输入非法路径会出现空白页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

// 替换字符串状态的路由
function initRouter111(arr, router) {
  var arr2 = router || []
  for (const i in arr) {
    const c1 = {}
    const a1 = arr[i]
    c1.meta = a1.meta
    c1.name = a1.name
    c1.path = a1.path
    c1.redirect = a1.redirect
    if (a1.path == '/login') {
      c1.component = mapComponents['login']
    } else if (a1.path == '/') {
      c1.component = mapComponents['Layout']
    } else if (a1.path == '*') {
      c1.component = mapComponents['Layout']
    } else if (a1.path == '/404') {
      c1.component = mapComponents['notfind']
    } else {
      c1.component = mapComponents['Layout']
    }
    c1.children = []
    if (a1.children && a1.children.length && a1.children.length > 0) {
      for (const n in a1.children) {
        const a2 = a1.children[n]
        const c2 = {}
        c2.meta = a2.meta
        c2.path = a2.path
        c2.name = a2.name
        c2.component = mapComponents[a2.name]
        c2.hidden = a2.hidden || false
        c1.children.push(c2)

        if (a2.children && a2.children.length && a2.children.length > 0) {
          c1.children[n] = []
          for (const j in a2.children) {
            const a3 = a2.children[j]
            const c3 = {}
            c3.meta = a3.meta
            c3.path = a3.path
            c3.name = a3.name
            c3.component = mapComponents[a3.name]
            c3.hidden = a3.hidden || false
            c1.children[n].push(c3)
          }
        }
        // arr2.push(c1);
      }
    }
    arr2.push(c1)
  }
  return arr2
}

// 将hybridRouters数组的component替换为真模块（原先仅是字符串）
function initRouter(router) {
  // arrVal是一个状如[{name:"",children:[{},{}]},{}] 的数组
  var arrVal = router || []
  // 返回的数组
  const rArr = []
  // 遍历层数
  let floor = 0
  function loadRouterInfo(val, objGet) {
    objGet.meta = val.meta || {}
    objGet.name = val.name || val.path.replace(/\//gi, '')
    objGet.path = val.path
    if (val.redirect) {
      objGet.redirect = val.redirect || ''
    }
    if (floor == 0) {
      if (val.path == '/login') {
        objGet.component = mapComponents['login']
      } else if (val.path == '/') {
        objGet.component = mapComponents['Layout']
      } else if (val.path == '*') {
        objGet.component = mapComponents['Layout']
      } else if (val.path == '/404') {
        objGet.component = mapComponents['notfind']
      } else {
        objGet.component = mapComponents['Layout']
      }
    } else {
      // 三级的父级（二级）是没有componnet的，要替换为() => import('@/views/RouterView'),
      if (mapComponents[val.name]) {
        objGet.component = mapComponents[val.name]
      } else {
        objGet.component = mapComponents['RouterView']
      }
    }
    floor++
    if (val.children && val.children.length) {
      objGet.children = []
      for (const v in val.children) {
        objGet.children[v] = {}
        loadRouterInfo(val.children[v], objGet.children[v])
      }
    }
  }
  for (const v in arrVal) {
    floor = 0
    rArr[v] = {}
    loadRouterInfo(arrVal[v], rArr[v])
  }
  return rArr
}

// 路由映射
const mapComponents = {
  RouterView: () => import('@/views/RouterView'),

  WelcomeMain: () => import('@/views/dashboard/welcome'),
  login: () => import('@/views/login/index'),
  notfind: () => import('@/views/404'),
  Layout: () => import('@/layout'),
  HomePage: () => import('@/views/dashboard/homePage'),
  AssetStatistic: () => import('@/views/dashboard/assetStatistic'),
  ChargeStatistic: () => import('@/views/dashboard/chargeStatistic'),
  ExchangeStatistic: () => import('@/views/dashboard/exchangeStatistic'),
  ChartStatistic: () => import('@/views/dashboard/chartStatistic'),
  RegisterStatistic: () => import('@/views/dashboard/registerStatistic'),
  UserList: () => import('@/views/user/userlist'),
  ValidatedUserlist: () => import('@/views/user/validatedUserlist'), // 有效用户
  UserlistDetail: () => import('@/views/user/userlistDetail'),
  ValidatedUserlistDetail: () => import('@/views/user/validatedUserlistDetail'),
  ResetUserGoogleCode: () => import('@/views/user/resetUserGoogleCode'),
  RegistRestric: () => import('@/views/user/registRestric'),
  GiveRestric: () => import('@/views/user/giveRestric'),
  MoveRelationship: () => import('@/views/user/moveRelationship'),
  RiskList: () => import('@/views/user/riskList'),
  RiskConfig: () => import('@/views/user/riskConfig'),

  Examine: () => import('@/views/check/examine'),
  Advertise: () => import('@/views/check/advertise'),
  Pay: () => import('@/views/check/pay'),
  RedeemOrder: () => import('@/views/check/redeemOrder'),
  ChainType: () => import('@/views/symbol/chainType'),
  CoinWhiteList: () => import('@/views/symbol/coinWhiteList'),
  CertificationConfig: () => import('@/views/check/certificationConfig'),
  TradeMarket: () => import('@/views/symbol/tradeMarket'),

  MerchantCheck: () => import('@/views/check/merchantCheck'),
  Orderlist: () => import('@/views/exchange/orderlist'),
  OrderListSpecial: () => import('@/views/exchange/orderListSpecial'),
  TradeListSpecial: () => import('@/views/exchange/tradeListSpecial'),
  Tradelist: () => import('@/views/exchange/tradelist'),
  orderSwitch: () => import('@/views/exchange/orderSwitch'),
  MarketAccount: () => import('@/views/exchange/marketAccount'),
  Setting: () => import('@/views/symbol/setting'),
  Robot: () => import('@/views/symbol/robot'),
  Pairs: () => import('@/views/symbol/pairs'),
  Collection: () => import('@/views/financial/collection'),
  CollectionDetail: () => import('@/views/financial/collectionDetail'),
  Recharge: () => import('@/views/financial/recharge'),
  Extract: () => import('@/views/financial/extract'),
  ExtractForeign: () => import('@/views/financial/extractForeign'),
  Transfer: () => import('@/views/financial/transfer'),
  ContractTransfer: () => import('@/views/financial/contractTransfer'),
  CoinFunds: () => import('@/views/financial/coinFunds'),
  Sprecon: () => import('@/views/financial/sprecon'),
  LockManage: () => import('@/views/financial/lockManage'),
  LockConfig: () => import('@/views/financial/lockConfig'),
  UnfreezeManage: () => import('@/views/financial/unfreezeManage'),
  Role: () => import('@/views/system/role'),
  Account: () => import('@/views/system/account'),
  Resetpwd: () => import('@/views/system/resetpwd'),
  Restauth: () => import('@/views/system/resetauth'),
  Menu: () => import('@/views/system/menu'),
  Oplog: () => import('@/views/system/oplog'),
  ConfigPath: () => import('@/views/system/configPath'),
  DomainName: () => import('@/views/system/domainName'),
  DomainNameFixed: () => import('@/views/system/domainNameFixed'),
  Maintenance: () => import('@/views/system/maintenance'),
  PeopleManagement: () => import('@/views/system/peopleManagement'),
  StructureTree: () => import('@/views/system/structureTree'),

  Version: () => import('@/views/app/version'),
  LocalPackage: () => import('@/views/app/localPackage'),
  Key: () => import('@/views/app/key'),
  GrayScale: () => import('@/views/app/grayScale'),
  Poster: () => import('@/views/front/poster'),
  SsoWhiteList: () => import('@/views/front/ssoWhiteList'),
  Notice: () => import('@/views/front/notice'),
  Help: () => import('@/views/front/help'),
  Activity: () => import('@/views/front/activity'),
  Column: () => import('@/views/front/column'),
  Banner: () => import('@/views/front/banner'),
  PopupNotice: () => import('@/views/front/popupNotice'),
  Msg: () => import('@/views/front/msg'),
  MsgSendRecord: () => import('@/views/front/msgSendRecord'),
  CurrencyRobot: () => import('@/views/symbol/currencyRobot'),
  ContractSymbolRobot: () => import('@/views/symbol/contractSymbolRobot'),
  PlateArea: () => import('@/views/symbol/plateArea'),
  SmallAmountShow: () => import('@/views/symbol/smallAmountShow'),
  RealNameFreeExtract: () => import('@/views/symbol/realNameFreeExtract'),
  KlineList: () => import('@/views/symbol/klineList'),
  EditKline: () => import('@/views/symbol/editKline'),

  LotteryList: () => import('@/views/front/lottery/lotteryList'),
  LotteryListDetail: () => import('@/views/front/lottery/lotteryListDetail'),
  LotteryRecord: () => import('@/views/front/lottery/lotteryRecord'),
  // LotteryTaskSet: () => import('@/views/front/lottery/lotteryTaskSet'),
  LotteryParams: () => import('@/views/front/lottery/lotteryParams'),
  // 体验金券
  VoucherList: () => import('@/views/front/voucher/voucherList'),
  VoucherActivity: () => import('@/views/front/voucher/voucherActivity'),
  VoucherParameters: () => import('@/views/front/voucher/voucherParameters'),
  VoucherVipUserList: () => import('@/views/front/voucher/voucherVipUserList'),
  VoucherVipUserDetails: () => import('@/views/front/voucher/voucherVipUserDetails'),
  VoucherExperience: () => import('@/views/front/voucher/voucherExperience'),
  VoucherGrant: () => import('@/views/front/voucher/voucherGrant'),
  // 红包管理
  RedPacketList: () => import('@/views/front/redPacket/redPacketList'),
  RedPacketCoin: () => import('@/views/front/redPacket/redPacketCoin'),
  RedPacketSubject: () => import('@/views/front/redPacket/redPacketSubject'),

  Search: () => import('@/views/merchant/search'),
  SearchDetail: () => import('@/views/merchant/searchDetail'),
  TransactionAd: () => import('@/views/merchant/transactionAd'),
  ChargeWithdrawal: () => import('@/views/merchant/chargeWithdrawal'),
  CardRecord: () => import('@/views/merchant/cardRecord'),
  FundsFlow: () => import('@/views/merchant/fundsFlow'),
  GroupAuth: () => import('@/views/merchant/groupAuth'),
  GroupAuthDetail: () => import('@/views/merchant/groupAuthDetail'),
  GlobalSettings: () => import('@/views/merchant/globalSettings'),
  Blacklist: () => import('@/views/merchant/blacklist'),
  Whitelist: () => import('@/views/merchant/whitelist'),
  RegionalRestrict: () => import('@/views/merchant/regionalRestrict'),

  // FiatUser: () => import('@/views/fiat/user'),
  // FiatUserDetail: () => import('@/views/fiat/userDetail'),
  // FiatInvitation: () => import('@/views/fiat/invitation'),
  FiatAdvertiseRecord: () => import('@/views/fiat/advertiseRecord'),
  AdvertiseRecordDetail: () => import('@/views/fiat/advertiseRecordDetail'),
  Appeal: () => import('@/views/fiat/appeal'),
  AppealJudge: () => import('@/views/fiat/appealJudge'),
  OtcOrder: () => import('@/views/fiat/otcOrder'),
  OtcOrderCustomer: () => import('@/views/fiat/otcOrderCustomer'),
  DialogueRecordCustomer: () => import('@/views/fiat/dialogueRecordCustomer'),
  // FiatRedeem: () => import('@/views/fiat/redeem'),
  // FiatCashOut: () => import('@/views/fiat/cashOut'),
  // FiatTransaction: () => import('@/views/fiat/transaction'),
  // FiatFundsFlow: () => import('@/views/fiat/fundsFlow'),
  // FiatAssetManage: () => import('@/views/fiat/assetManage'),
  FiatOtcGlobal: () => import('@/views/fiat/otcGlobal'),
  // FiatOtcBail: () => import('@/views/fiat/otcBail'),
  FiatOrderGlobal: () => import('@/views/fiat/orderGlobal'),
  PaymentMethod: () => import('@/views/fiat/paymentMethod'),
  DialogueRecord: () => import('@/views/fiat/dialogueRecord'),
  MatchWeight: () => import('@/views/fiat/matchWeight'),
  RateManage: () => import('@/views/fiat/rateManage'),
  CustomerAccount: () => import('@/views/fiat/customerAccount'),
  CustomerFlow: () => import('@/views/fiat/customerFlow'),
  AgentList: () => import('@/views/fiat/agentList'),
  AgentRevenue: () => import('@/views/fiat/agentRevenue'),
  LevelSetting: () => import('@/views/fiat/levelSetting'),
  OrderConfig: () => import('@/views/fiat/acceptanceMerchant/orderConfig'),
  AcceptanceList: () => import('@/views/fiat/acceptanceMerchant/acceptanceList'),
  AcceptanceRelation: () => import('@/views/fiat/acceptanceMerchant/acceptanceRelation'),
  AcceptanceSetting: () => import('@/views/fiat/acceptanceMerchant/acceptanceSetting'),
  AcceptanceChannelList: () => import('@/views/fiat/acceptanceMerchant/acceptanceChannelList'),
  CommissionContract: () => import('@/views/fiat/acceptanceMerchant/commissionContract'),
  CommissionContractFlow: () => import('@/views/fiat/acceptanceMerchant/commissionContractFlow'),

  // 币汇管理

  // CoinForexUserList: () => import('@/views/coinForex/coinForexUser/coinForexUserList'),
  CoinForexAccount: () => import('@/views/coinForex/coinForexfinance/coinForexAccount'),
  CoinForexDealList: () => import('@/views/coinForex/coinForexDeal/coinForexDealList'),
  CoinForexEntrustList: () => import('@/views/coinForex/coinForexDeal/coinForexEntrustList'),
  CoinForexNotCloseList: () => import('@/views/coinForex/coinForexDeal/coinForexNotCloseList'),
  CoinForexRobotList: () => import('@/views/coinForex/coinForexRobot/coinForexRobotList'),
  CoinForexRate: () => import('@/views/coinForex/coinForexfinance/coinForexRate'),
  CoinForexPairsConfigs: () => import('@/views/coinForex/coinForexPairs/coinForexPairsConfigs'),
  CoinForexPairsNightFee: () => import('@/views/coinForex/coinForexPairs/coinForexPairsNightFee'),
  CoinForexNetWorth: () => import('@/views/coinForex/coinForexDeal/coinForexNetWorth'),

  WarehouseUser: () => import('@/views/warehouse/user'),
  WarehouseUserListDetail: () => import('@/views/warehouse/userListDetail'),
  WarehouseStatistics: () => import('@/views/warehouse/statistics'),
  WarehouseAccountFlow: () => import('@/views/warehouse/accountFlow'),
  WarehouseRewardList: () => import('@/views/warehouse/rewardList'),
  WarehouseWeeklyPayList: () => import('@/views/warehouse/weeklyPayList'),
  WarehouseDistributionList: () => import('@/views/warehouse/distributionList'),
  WarehouseIntegral: () => import('@/views/warehouse/integral'),
  WarehouseIntegralDetail: () => import('@/views/warehouse/integralDetail'),
  WarehouseIntegralPermanent: () => import('@/views/warehouse/integralPermanent'),
  WarehouseSetting: () => import('@/views/warehouse/setting'),
  WarehouseBlackList: () => import('@/views/warehouse/blackList'),
  WarehouseNewStatistics: () => import('@/views/warehouse/newStatistics'),
  WarehouseAssets: () => import('@/views/warehouse/assets'),
  WorkOrderList: () => import('@/views/workOrder/workOrderList'),
  WorkOrderType: () => import('@/views/workOrder/workOrderType'),
  LoadCoin: () => import('@/views/workOrder/loadCoin'),
  SearchUserAddress: () => import('@/views/financial/searchUserAddress'),
  HotWalletExtract: () => import('@/views/financial/hotWalletExtract'),
  FinancialStatistics: () => import('@/views/financial/financialStatistics'),

  AssetManageList: () => import('@/views/assetManage/assetManageList'),
  TransferRecord: () => import('@/views/assetManage/transferRecord'),
  EarnAccount: () => import('@/views/assetManage/earnAccount'),
  EarnRecord: () => import('@/views/assetManage/earnRecord'),
  CostAccount: () => import('@/views/assetManage/costAccount'),
  ExpenseAcountList: () => import('@/views/assetManage/expenseAcountList'),
  SonAcountList: () => import('@/views/assetManage/sonAcountList'),
  SonAcountDetail: () => import('@/views/assetManage/sonAcountDetail'),
  RunRecord: () => import('@/views/assetManage/runRecord'),
  WriteoffRecord: () => import('@/views/assetManage/writeoffRecord'),
  RevenueAccount: () => import('@/views/assetManage/revenueAccount'),
  ManualRechargeRecord: () => import('@/views/assetManage/manualRechargeRecord'),

  BuyList: () => import('@/views/customer/reportForm/buyList'),
  // BuyListDetail: () => import('@/views/customer/reportForm/buyListDetail'),
  SellList: () => import('@/views/customer/reportForm/sellList'),
  // SellListDetail: () => import('@/views/customer/reportForm/sellListDetail'),
  PayRecordList: () => import('@/views/customer/reportForm/payRecordList'),
  PayRecordAbnormal: () => import('@/views/customer/reportForm/payRecordAbnormal'),
  RechargeCustom: () => import('@/views/customer/reportForm/rechargeCustom'),
  WithdrawCustom: () => import('@/views/customer/reportForm/withdrawCustom'),
  TransferCustom: () => import('@/views/customer/reportForm/transferCustom'),
  MerchantList: () => import('@/views/customer/merchantCus/merchantList'),
  MerchantExamine: () => import('@/views/customer/merchantCus/merchantExamine'),
  // MerchantMenu: () => import('@/views/customer/merchantCus/merchantMenu'),
  AgentCusList: () => import('@/views/customer/agentCus/agentCusList'),
  AgentCusRelationList: () => import('@/views/customer/agentCus/agentCusRelationList'),
  RevenueRecords: () => import('@/views/customer/agentCus/revenueRecords'),
  // AuthGroup: () => import('@/views/customer/authGroup'),
  // AuthGroupDetail: () => import('@/views/customer/authGroupDetail'),
  // RateManage: () => import('@/views/customer/rateManage'),

  AgentsLists: () => import('@/views/agent/agentsLists'),
  BusinessRelationLists: () => import('@/views/agent/businessRelationLists'),
  AgentsListsConfig: () => import('@/views/agent/agentsListsConfig'),
  AgentsListsDetail: () => import('@/views/agent/agentsListsDetail'),
  AgentRefundRecordNew: () => import('@/views/agent/agentRefundRecordNew'),
  // BusinessLists: () => import('@/views/agent/businessLists'),
  // BusinessListsConfig: () => import('@/views/agent/businessListsConfig'),
  // BusinessListsDetail: () => import('@/views/agent/businessListsDetail'),
  // BusinessFinancialFlow: () => import('@/views/agent/businessFinancialFlow'),
  AgentTransfer: () => import('@/views/agent/agentTransfer'),
  RefundRecord: () => import('@/views/agent/refundRecord'),
  ApportionRecord: () => import('@/views/agent/apportionRecord'),
  AgentLevel: () => import('@/views/agent/agentLevel'),
  EarnestMoneyList: () => import('@/views/agent/earnestMoneyList'),
  AgentFinancialFlow: () => import('@/views/agent/agentFinancialFlow'),
  UserMonitor: () => import('@/views/agent/userMonitor'),
  AgentMonitor: () => import('@/views/agent/agentMonitor'),
  AgentPermissionConfigs: () => import('@/views/agent/agentPermissionConfigs'),
  BusinessRefundRecord: () => import('@/views/agent/businessRefundRecord'),
  AgentPlacesConfigs: () => import('@/views/agent/agentPlacesConfigs'),
  AgentAchievements: () => import('@/views/agent/agentAchievements'),

  CoinContract: () => import('@/views/contract/transact/coinContract'),
  GearSetting: () => import('@/views/contract/transact/gearSetting'),
  BillContract: () => import('@/views/contract/transact/billContract'),
  TreatyAssetsContract: () => import('@/views/contract/transact/treatyAssetsContract'),
  FlowRecordContract: () => import('@/views/contract/transact/flowRecordContract'),
  ContractUserList: () => import('@/views/contract/transact/contractUserList'),
  HistoricalContract: () => import('@/views/contract/transact/historicalContract'),
  ContractRobot: () => import('@/views/contract/transact/contractRobot'),
  ControlPanel: () => import('@/views/contract/transact/controlPanel'),
  GeneralEntrustContract: () => import('@/views/contract/order/generalEntrustContract'),
  PlanEntrustContract: () => import('@/views/contract/order/planEntrustContract'),
  DealContract: () => import('@/views/contract/order/dealContract'),
  ServiceChargeContract: () => import('@/views/contract/order/serviceChargeContract'),
  PositionContract: () => import('@/views/contract/store/positionContract'),
  CloseContract: () => import('@/views/contract/store/closeContract'),
  ApiKeyConfig: () => import('@/views/contract/apiManage/apiKeyConfig'),

  // 模拟盘 模拟交易管理
  CoinContractMimic: () => import('@/views/contractMimic/transactMimic/coinContractMimic'),
  GearSettingMimic: () => import('@/views/contractMimic/transactMimic/gearSettingMimic'),
  ContractMimicAccount: () => import('@/views/contractMimic/transactMimic/contractMimicAccount'),
  ContractMimicFundRate: () => import('@/views/contractMimic/transactMimic/contractMimicFundRate'),
  BillContractMimic: () => import('@/views/contractMimic/transactMimic/billContractMimic'),
  TreatyAssetsContractMimic: () =>
    import('@/views/contractMimic/transactMimic/treatyAssetsContractMimic'),
  FlowRecordContractMimic: () =>
    import('@/views/contractMimic/transactMimic/flowRecordContractMimic'),
  // ContractSymbolRobotMimic: () => import('@/views/contractMimic/transactMimic/contractSymbolRobotMimic'),
  // 模拟盘 模拟订单管理
  GeneralEntrustContractMimic: () =>
    import('@/views/contractMimic/orderMimic/generalEntrustContractMimic'),
  PlanEntrustContractMimic: () =>
    import('@/views/contractMimic/orderMimic/planEntrustContractMimic'),
  DealContractMimic: () => import('@/views/contractMimic/orderMimic/dealContractMimic'),
  // 模拟盘 模拟仓位管理
  PositionContractMimic: () => import('@/views/contractMimic/storeMimic/positionContractMimic'),
  CloseContractMimic: () => import('@/views/contractMimic/storeMimic/closeContractMimic'),
  // 模拟盘 模拟金领取记录
  UserlistMimic: () => import('@/views/contractMimic/recordMimic/userlistMimic'),
  GetRecordMimic: () => import('@/views/contractMimic/recordMimic/getRecordMimic'),
  ColumnMimic: () => import('@/views/contractMimic/recordMimic/columnMimic'),
  SettingMimic: () => import('@/views/contractMimic/recordMimic/settingMimic'),
  // 模拟盘 分析师管理
  AnalystMimicList: () => import('@/views/contractMimic/analystMimic/analystMimicList'),
  AnalystMimicDetail: () => import('@/views/contractMimic/analystMimic/analystMimicDetail'),
  AccountMimicList: () => import('@/views/contractMimic/analystMimic/accountMimicList'),

  OtcOrderPay: () => import('@/views/coinPay/otcOrderPay'),
  DialogueRecordPay: () => import('@/views/coinPay/dialogueRecordPay'),
  AppealPay: () => import('@/views/coinPay/appealPay'),
  AppealJudgePay: () => import('@/views/coinPay/appealJudgePay'),
  RechargePay: () => import('@/views/coinPay/rechargePay'),
  ExtractPay: () => import('@/views/coinPay/extractPay'),
  TransferPay: () => import('@/views/coinPay/transferPay'),
  coinFundsPay: () => import('@/views/coinPay/coinFundsPay'),
  UserlistPay: () => import('@/views/coinPay/userlistPay'),
  UserlistDetailPay: () => import('@/views/coinPay/userlistDetailPay'),
  ServiceMenu: () => import('@/views/system/serviceMenu'),
  MerchantMenu: () => import('@/views/system/merchantMenu'),
  ContractAccount: () => import('@/views/contract/transact/contractAccount'),
  ContractFundRate: () => import('@/views/contract/transact/contractFundRate'),
  // 风险管理
  DataStatistics: () => import('@/views/contract/risk/dataStatistics'),
  RiskLevel: () => import('@/views/contract/risk/riskLevel'),
  ContractEstimate: () => import('@/views/contract/risk/contractEstimate'),
  ContractResult: () => import('@/views/contract/risk/contractResult'),
  ContractTactics: () => import('@/views/contract/risk/contractTactics'),
  HighFrequencyConfig: () => import('@/views/contract/risk/highFrequencyConfig'),
  HighFrequencyMonitor: () => import('@/views/contract/risk/highFrequencyMonitor'),
  ContractUserMonitor: () => import('@/views/contract/risk/contractUserMonitor'),
  // 账号管理
  AccountContract: () => import('@/views/contract/accountManagement/accountContract'),
  DestroyBill: () => import('@/views/contract/accountManagement/destroyBill'),
  EarningsRecord: () => import('@/views/contract/accountManagement/earningsRecord'),
  // EarningsFlow: () => import('@/views/contract/accountManagement/earningsFlow'),
  // RefundRecordNew: () => import('@/views/contract/transact/refundRecordNew'),
  // API管理
  ApiKey: () => import('@/views/contract/apiConfig/apiKey'),
  // 点卡管理
  TicketCardList: () => import('@/views/ticketCard/ticketCardList'),
  PresenterList: () => import('@/views/ticketCard/presenterList'),
  TicketCardUseList: () => import('@/views/ticketCard/ticketCardUseList'),

  // 出入金管理
  InOutGoldInfo: () => import('@/views/inOutGold/inOutGoldInfo'),
  CoinInOutGold: () => import('@/views/inOutGold/coinInOutGold'),
  FiatCoinInOutGold: () => import('@/views/inOutGold/fiatCoinInOutGold'),
  ContractInOutGold: () => import('@/views/inOutGold/contractInOutGold')
}
