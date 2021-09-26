/*
 * @Author: your name
 * @Date: 2020-03-26 16:38:48
 * @LastEditTime: 2020-12-29 15:43:01
 * @LastEditTime: 2020-03-31 11:47:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-app-h5\src\fetch\api\api.js
 */
import {
  Fetch
} from './fetch.js'

export default class api {
  // 用户管理 - 获取用户列表
  // 审核管理 - 用户管理 - 用户列表
  static getUserList(data) {
    return Fetch.post('/admin/user/list', data)
  }

  // 重置KYC
  static resetUserKYC(data) {
    return Fetch.post('/admin/user/update/kyc', data)
  }

  // 用户管理 - 详情- 用户收款方式
  static getOtcBindList(data) {
    return Fetch.post('/admin/user/otc/bind/list', data)
  }

  // 用户管理 - 送币列表获取
  static getGiveCoinConfig(data) {
    return Fetch.post('/admin/user/get/giveCoinConfig', data)
  }

  // 用户管理 - 送币信息更新update
  static updateGiveCoinConfig(data) {
    return Fetch.post('/admin/user/update/giveCoinConfig', data)
  }

  // 用户管理 - 获取用户列表--注册限制
  static getUserRconfig(data) {
    return Fetch.post('/admin/user/get/config', data)
  }

  // 用户管理 - 获取用户列表--注册限制---更新
  static getUserRUpdate(data) {
    return Fetch.post('/admin/user/update/config', data)
  }

  // 用户管理 - 用户列表 --- 资产详情页面
  static accountQuery(data) {
    return Fetch.post('/admin/account/query/info', data)
  }

  // 交易管理 --- 市值账号管理
  static marketUserList(data) {
    return Fetch.post('/admin/user/market-user-list', data)
  }

  // 交易管理--获取委托记录
  static getOrderList(data) {
    return Fetch.post('/admin/order/entrust-pagination', data)
  }
  // 交易管理--获取交易记录
  static getBusinessRecordPage(data) {
    return Fetch.post('/admin/order/entrust-detail-pagination', data)
  }

  // 财务管理--获取归集地址列表
  static getAddressList(data) {
    return Fetch.post('/admin/wallet/getAddressList', data)
  }

  // 财务管理--获取归集地址---列表详情
  static getAddress(data) {
    return Fetch.post('/admin/wallet/getAddress', data)
  }

  // 财务管理--获取归集详情---修改手机号和
  static updateCollect(data) {
    return Fetch.post('/admin/wallet/update', data)
  }

  // 财务管理--获取归集详情---归集地址信息
  static getAddressListById(data) {
    return Fetch.post('/admin/wallet/getAddressListById', data)
  }

  // 财务管理--获取归集详情--划分归集类型
  static updateAddress(data) {
    return Fetch.post('/admin/wallet/updateAddress', data)
  }

  // 财务管理--获取归集详情--删除归集地址
  static deleteAddress(data) {
    return Fetch.post('/admin/wallet/deleteAddress', data)
  }

  // 财务管理--获取归集详情--用户地址列表
  static userPage(data) {
    return Fetch.post('/admin/wallet/userPage', data)
  }

  // 财务管理--获取归集详情--用户地址内部勾选页
  static addressUserList(data) {
    return Fetch.post('/admin/wallet/addressUserList', data)
  }

  // 财务管理--获取归集详情--添加被归集用户
  static addAddressUser(data) {
    return Fetch.post('/admin/wallet/addAddressUser', data)
  }

  // 财务管理--获取归集详情--删除被归集用户
  static deleteUser(data) {
    return Fetch.post('/admin/wallet/deleteUser', data)
  }

  // 财务管理--币币流水页面
  static queryCoinChange(data) {
    return Fetch.post('/admin/account/coinChange/query/list', data)
  }

  // 财务管理--获取充币记录
  static getDepositList(data) {
    return Fetch.post('/admin/account/deposit/query/list', data)
  }

  // 财务管理--获取充币统计
  static getDepositeSum(data) {
    return Fetch.post('/admin/account/deposit/query/sum', data)
  }

  // 财务管理--获取提币统计
  static getWithdrawSum(data) {
    return Fetch.post('/admin/account/withdraw/query/sum', data)
  }

  // 财务管理--币币资金流水合计数量
  static getCoinChangeQuerySum(data) {
    return Fetch.post('/admin/account/coinChange/query/sum', data)
  }
  // 财务管理--提币风控参数设置
  static setWindControl(data) {
    return Fetch.post('/account/withdrawalRiskControl/update', data)
  }
  // 财务管理--提币风控参数获取
  static getWindControl(data) {
    return Fetch.post('/account/withdrawalRiskControl', data)
  }

  // 交易管理--委托单合计
  static getOrderEntrustTotal(data) {
    return Fetch.post('/admin/order/entrust-total', data)
  }

  // 交易管理--成交记录合计
  static getOrderEntrustDetailTotal(data) {
    return Fetch.post('/admin/order/entrust-detail-total', data)
  }

  // 财务管理--获取提币记录
  static getWithdrawList(data) {
    return Fetch.post('/admin/account/withdraw/query/list', data)
  }
  // 财务管理--提币详情
  static getWithdrawDetail(data) {
    return Fetch.post('/admin/account/withdraw/query/info', data)
  }
  // 财务管理--审核提币信息
  static auditWithdraw(data) {
    return Fetch.post('/admin/account/audit/withdraw', data)
  }

  // 财务管理--划转记录
  static accountTransfer(data) {
    return Fetch.post('/admin/account/transfer-page', data)
  }

  // 财务管理--特殊调账列表
  static specialReconciliation(data) {
    return Fetch.post('/admin/account/special-reconciliation-page', data)
  }

  // 财务管理--特殊调账-- 查询资产
  static accountUseraccount(data) {
    return Fetch.post('/admin/account/user-account', data)
  }

  // 财务管理--特殊调账-- 新建
  static addReconciliation(data) {
    return Fetch.post('/admin/account/add/special-reconciliation', data)
  }

  // 财务管理--特殊调账-- 批量新建
  static addReconciliationBatch(data) {
    return Fetch.post('/admin/account/add/special-reconciliation/batch', data)
  }

  // 财务管理--特殊调账-- 审核
  static auditReconciliation(data) {
    return Fetch.post('/admin/account/audit/special-reconciliation', data)
  }

  // 币种管理--获取币种列表---搜索栏正式接口（正式使用的接口，还有另外非正式使用的接口）
  static getCoinListFormal(data) {
    return Fetch.post('/admin/account/coin/query/info', data)
  }

  // 币种管理--获取币种列表---下拉框专用
  static getCoinList(data) {
    return Fetch.post('/admin/account/coin/query/simple', data)
    // 币种列表包含了下架的币种 所以下拉框不能用这个
    // /admin/account/coin/query/info
  }

  // 币种管理--新增或修改币种
  static addUpdateCoin(data) {
    return Fetch.post('/admin/account/update-or-add/coin', data)
  }

  // 币种管理--新增交易对
  static addSymbol(data) {
    return Fetch.post('/admin/market/addCoinMarket', data)
  }
  // 币种管理--更新交易对
  static editSymbol(data) {
    return Fetch.post('/admin/market/updateCoinMarket', data)
  }
  // 币种管理--交易对列表
  static getSymbolList(data) {
    return Fetch.post('/admin/market/coinMarkets', data)
  }

  // 币种管理--查询机器人
  static getRobotList(data) {
    return Fetch.post('/admin/user/robot-page', data)
  }

  // 币种管理--添加机器人
  static addRobot(data) {
    return Fetch.post('/admin/user/add/robot', data)
  }

  // 币种管理--修改机器人
  static editRobot(data) {
    return Fetch.post('/admin/user/edit/robot', data)
  }

  // 运营管理 - 公告--获取列表
  static getNoticeList(data) {
    return Fetch.post('/admin/user/announcement/list', data)
  }

  // 运营管理 - 公告--新增
  static addNotice(data) {
    return Fetch.post('/admin/user/announcement/add', data)
  }
  // 运营管理 - 公告--修改
  static editNotice(data) {
    return Fetch.post('/admin/user/announcement/update', data)
  }
  // 运营管理 - 公告--删除
  static deleteNoticeList(data) {
    return Fetch.post('/admin/user/announcement/delete', data)
  }

  // 运营管理 -  banner--获取列表
  static getAppBannerList(data) {
    return Fetch.post('/admin/user/banner/list', data)
  }
  // 运营管理 - banner--新增
  static addAppBannerInfo(data) {
    return Fetch.post('/admin/user/banner/add', data)
  }
  // 运营管理 - banner--修改
  static editAppBannerInfo(data) {
    return Fetch.post('/admin/user/banner/update', data)
  }
  // 运营管理 - banner--删除
  static deleteAppBannerInfo(data) {
    return Fetch.post('/admin/user/banner/delete', data)
  }

  // 运营管理 -  帮助中心 获取列表
  static getHelpList(data) {
    return Fetch.post('/admin/user/help/center/title/list', data)
  }
  // 运营管理 -  帮助中心 下拉栏目列表
  static getHelpListWithColumn(data) {
    return Fetch.post('/admin/user/help/center/subject/select/list', data)
  }
  // 运营管理 - 帮助中心 新增
  static addHelp(data) {
    return Fetch.post('/admin/user/help/center/title/add', data)
  }
  // 运营管理 - 帮助中心 修改
  static editHelp(data) {
    return Fetch.post('/admin/user/help/center/title/edit', data)
  }
  // 运营管理 - 帮助中心 删除
  static deleteHelp(data) {
    return Fetch.post('/admin/user/help/center/title/delete', data)
  }

  // 运营管理 - 运营活动 获取列表
  static getActivityLists(data) {
    return Fetch.post('/admin/account/activity/recharge/statisticsReward/list', data)
  }
  // 运营管理 - 运营活动 奖金统计
  static getActivitySum(data) {
    return Fetch.post('/admin/account/activity/recharge/statisticsReward/sum', data)
  }

  // 运营管理 -  栏目配置 获取列表
  static getColumnList(data) {
    return Fetch.post('/admin/user/help/center/subject/list', data)
  }
  // 运营管理 - 栏目配置 新增
  static addColumn(data) {
    return Fetch.post('/admin/user/help/center/subject/add', data)
  }
  // 运营管理 - 栏目配置 修改
  static editColumn(data) {
    return Fetch.post('/admin/user/help/center/subject/edit', data)
  }
  // 运营管理 - 栏目配置 删除
  static deleteColumn(data) {
    return Fetch.post('/admin/user/help/center/subject/delete', data)
  }

  // 运营管理 -  邀请海报管理--获取列表
  static getPosterList(data) {
    return Fetch.post('/admin/user/picture/list', data)
  }
  // 运营管理 -  邀请海报管理--添加
  static addPosterInfo(data) {
    return Fetch.post('/admin/user/picture/add', data)
  }
  // 运营管理 -  邀请海报管理--编辑
  static editPosterInfo(data) {
    return Fetch.post('/admin/user/picture/update', data)
  }
  // 运营管理 -  邀请海报管理--删除
  static deletePosterInfo(data) {
    return Fetch.post('/admin/user/picture/delete', data)
  }

  // 版本管理 - app版本--列表
  static getVersionList(data) {
    return Fetch.post('/admin/user/version/list', data)
  }
  // 版本管理 - app版本--新增
  static addVersion(data) {
    return Fetch.post('/admin/user/version/add', data)
  }
  // 版本管理 - app版本--修改
  static editVersion(data) {
    return Fetch.post('/admin/user/version/update', data)
  }

  // 系统管理--角色管理--查询
  static getRoleList(data) {
    return Fetch.post('/admin/user/role-page', data)
  }
  // 系统管理--角色管理--新增
  static addRole(data) {
    return Fetch.post('/admin/user/add/role', data)
  }
  // 系统管理--账号管理--下拉选择角色菜单列表
  static addRoleList(data) {
    return Fetch.post('/admin/user/role-list', data)
  }

  // 系统管理--角色管理--修改
  static editRole(data) {
    return Fetch.post('/admin/user/edit/role', data)
  }
  // 系统管理--角色管理--删除
  static deleteRole(data) {
    return Fetch.post('/admin/user/delete/role', data)
  }

  // 系统管理--账户管理--查询
  static getAccountList(data) {
    return Fetch.post('/admin/user/system-user-page', data)
  }

  // 系统管理-- 获取谷歌验证码
  static getGoogleCode(data) {
    return Fetch.post('/admin/user/google-code', data)
  }

  // 系统管理--账号管理--新增
  static addAccount(data) {
    return Fetch.post('/admin/user/add/system-user', data)
  }

  // 系统管理--账号管理--修改
  static editAccount(data) {
    return Fetch.post('/admin/user/edit/system-user', data)
  }
  // 系统管理--账号管理--删除
  static deleteAccount(data) {
    return Fetch.post('/admin/user/delete/system-user', data)
  }

  // 系统管理--菜单-查询
  static getMenuList(data) {
    return Fetch.post('/admin/user/menu-list', data)
  }
  // 系统管理--菜单--新增
  static addMenu(data) {
    return Fetch.post('/admin/user/add/menu', data)
  }
  // 系统管理--菜单--修改
  static editMenu(data) {
    return Fetch.post('/admin/user/edit/menu', data)
  }
  // 系统管理--菜单--删除
  static deleteMenu(data) {
    return Fetch.post('/admin/user/delete/menu', data)
  }

  // ///   唐杰  客服管理后台   菜单  pxg

  // 系统管理--菜单-查询
  static getMenuListSM(data) {
    // return Fetch.post('/admin/user/pay/menu-list', data)
    return Fetch.post('/admin/user/menu-list', data)
  }
  // 系统管理--菜单--新增
  static addMenuSM(data) {
    return Fetch.post('/admin/user/add/menu', data)
  }
  // // 系统管理--菜单--修改
  // static editMenuSM(data) {
  //   return Fetch.post('/admin/user/edit/menu', data)
  // }
  // // 系统管理--菜单--删除
  // static deleteMenuSM(data) {
  //   return Fetch.post('/admin/user/delete/menu', data)
  // }

  // ///   唐杰  客服管理后台   菜单  pxg

  // 系统管理--修改密码
  static editPassword(data) {
    return Fetch.post('/admin/user/edit/password', data)
  }

  // 系统管理--修改谷歌密钥
  static editGoogleCode(data) {
    return Fetch.post('/admin/user/edit/google-code', data)
  }

  // 系统管理--操作日志
  static systemLogPage(data) {
    return Fetch.post('/admin/user/system-logger-page', data)
  }

  // 审核管理 - 用户管理 - 更新用户状态
  static updateOperateStatus(data) {
    return Fetch.post('/admin/user/update/operate/status', data)
  }

  // 审核管理 - 用户管理 - 更新用户状态
  static updateAuditVerified(data) {
    return Fetch.post('/admin/user/audit/verified', data)
  }

  // 审核管理 - 用户管理 - 邀请明细列表
  static getInviteList(data) {
    return Fetch.post('/admin/user/inviteeList', data)
  }

  // 审核管理 - 用户管理 - 实名审核列表
  static auditVerifinedList(data) {
    return Fetch.post('/admin/user/audit/verified/list', data)
  }

  // 委托记录
  static getEntrustList(data) {
    return Fetch.postForm2('/entrust/getEntrustPagination', data)
  }

  // 获取版本信息
  static getVersion(data) {
    return Fetch.get('/vue-admin-template/app/version', data)
  }

  // 获取归集设置币种
  static getCollection(data) {
      return Fetch.get('/vue-admin-template/app/collection', data)
    }

    // 法币后台

    // 法币 - 用户查询列表
    <<
    << << < HEAD
    // static queryOtcUser(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcUser', data)
    // }
    ===
    === =
    static queryOtcUser(data) {
      return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcUser', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  //  法币 - 获取用户列表---详情页数据
  static queryOtcUserDetail(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcUserDetail', data)
  }

  //  法币 - 获取用户列表---详情页匹配数据
  static queryUserMatchConfig(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryUserMatchConfig', data)
  }

  //  法币 - 获取用户列表---详情页  邀请关系数据
  static findInviteTree(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/findInviteTree', data)
  }
  //  法币 - 获取用户列表---详情页  修改佣金
  static updateRewardRate(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/updateRewardRate', data)
  }

  //  法币 - 获取用户列表---详情页  获取迁移关系列表
  static queryInviteShip(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/queryInviteShip', data)
  }

  //  法币 - 获取用户列表---详情页  进行迁移操作
  static updateInviteShip(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/updateInviteShip', data)
  }

  //  法币 - 获取用户列表---详情页  切换switch
  static updateSysSwitch(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateSysSwitch', data)
  }

  //  法币 - 获取用户列表---获取余额信息
  static queryUserBalance(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryUserBalance', data)
  }

  //  法币 - 获取用户列表---修改余额提交
  static modifyAmount(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/modifyAmount', data)
  }

  //  法币 - 获取用户列表---禁止发布广告
  static isPublishAdv(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/isPublishAdv', data)
  }

  //  法币 - 资产管理证明判--断
  static updateAuditAssetCeRecdStatus(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateAuditAssetCeRecdStatus', data)
  }

  //  法币 - 用户查询--修改类型
  static updateOtcUserLevel(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateOtcUserLevel', data)
  }

  //  法币 - Otc用户查询列表
  static queryOtcUser(data) {
      return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcUser', data)
    }

    // 法币 -广告记录
    <<
    << << < HEAD
    // static getAuditList(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getAuditList', data)
    // }
    ===
    === =
    static getAuditList(data) {
      return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getAuditList', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 法币 -资金流水列表
  static queryOtcMoneyChangeInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcMoneyChangeInfo', data)
  }

  // 法币 -邀请关系--列表
  static findInviteChild(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/findInviteChild', data)
  }

  // 法币 -邀请关系--列表(新版)
  static findInviteChildNEW(data) {
    return Fetch.post('/admin/user/tp/get-down-user-rates', data)
  }

  // 法币 -邀请关系--修改收益(新版)
  static updateDownUserRates(data) {
    return Fetch.post('/admin/user/tp/update-down-user-rates', data)
  }

  // 法币 -邀请关系--查定位的父级
  static getFaInviteRecd(data) {
      return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/getFaInviteRecd', data)
    }

    // 法币 -邀请关系--获取迁移列表
    <<
    << << < HEAD
    // static queryInviteShip(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/queryInviteShip', data)
    // }

    // 法币 -邀请关系--执行迁移操作
    // static updateInviteShip(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/updateInviteShip', data)
    // }
    ===
    === =
    static queryInviteShip(data) {
      return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/queryInviteShip', data)
    }

  // 法币 -邀请关系--执行迁移操作
  static updateInviteShip(data) {
      return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/updateInviteShip', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 法币 -申诉管理--列表数据
  static infoShortList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/infoShortList', data)
  }

  // 法币 -申诉管理--列表数据(新版)
  static infoShortListNew(data) {
    return Fetch.post('/admin/order/otc/appeal-page', data)
  }

  // 法币 -申诉管理--详情页---申诉证据信息接口
  static getProofInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/proofInfo', data)
  }

  // 法币 -申诉管理--详情页---申诉证据信息接口(新版)
  static getProofInfoNew(data) {
    return Fetch.post('/admin/order/otc/appeal-detail', data)
  }

  // 法币 -申诉管理--详情页---修改金额接口
  static getAppealChangeMoney(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/appealChangeMoney', data)
  }

  // 法币 -申诉管理--详情页---判决
  static putaAdjustAppeal(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/adjustAppeal', data)
  }

  // 法币 -申诉管理--详情页---判决(新版)
  static putaAdjustAppealNew(data) {
    return Fetch.post('/admin/order/appeal-judgment', data)
  }

  // 法币 -申诉---切换上架状态
  static changeOnshelfAds(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/OnshelfAds', data)
  }

  // 法币 -申诉---切换上架状态(新版)
  static changeOnshelfAdsNew(data) {
      return Fetch.post('/admin/order/otc/edit-advert', data)
    }

    // 法币 -接单全局设置--返佣设置
    <<
    << << < HEAD
    // static getDefaultRate(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/getDefaultRate', data)
    // }
    ===
    === =
    static getDefaultRate(data) {
      return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/getDefaultRate', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 法币 - 接单全局设置--币商接单额度设置
  static getAuditList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getAuditList', data)
  }

  // 法币 -广告记录列表
  static queryAdvList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryAdvList', data)
  }

  // 法币 -广告记录列表(新版)
  static queryAdvListNew(data) {
    return Fetch.post('/admin/order/otc/advert-page', data)
  }

  // 法币 - 接单全局设置---币种列表
  static queryOtcCoinConfig(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcCoinConfig', data)
  }

  // 法币 - 接单全局设置---返佣数据
  static getDefaultRate(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/getDefaultRate', data)
  }

  // 法币 - 接单全局设置---修改返佣设置（保存修改）
  static updateDefaultRate(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/updateDefaultRate', data)
  }

  // 法币 - 接单全局设置---修改接单额度全局设置
  static UpdateOtcCoinConfig(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/UpdateOtcCoinConfig', data)
  }

  // 法币 - otc订单管理列表页
  static queryAdvTradeList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryAdvTradeList', data)
  }

  // 法币 - 广告列表--详情页(新版)
  static queryAdvTradeListDetail(data) {
    return Fetch.post('/admin/order/otc/advert-detail', data)
  }

  // 法币 - otc订单管理列表页(新版)
  static queryAdvTradeListNew(data) {
    return Fetch.post('/admin/order/otc/trade-page', data)
  }

  // 法币 - otc订单管理列表页---- 激活按钮
  static setOtcActivation(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/activation', data)
  }

  // 法币 - otc订单管理列表页---- 激活按钮（新版）
  static setOtcActivationNew(data) {
    return Fetch.post('/admin/order/activation-order', data)
  }

  // 法币 - otc订单管理列表页---- 统计
  // static getQueryAdvTradeListSum(data) {
  //   return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryAdvTradeList/sum', data);
  // }

  // 法币 - otc订单管理列表页---- 统计
  static getQueryAdvTradeListSum(data) {
    return Fetch.post('/admin/order/otc/trade-page/sum', data)
  }

  // 法币 - 交易流水
  static getTradeMainList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getTradeMainList', data)
  }

  // 法币---获取币种
  static getFiatCoinList(data) {
    return Fetch.postForm1('/otc/admin/wallet/util/open/getCoinInfoList', data)
  }

  // 法币---获取币种（新版）
  static getFiatCoinListNEW(data) {
    return Fetch.post('/admin/account/otc/coin-set-list', data)
  }

  // 法币 - 资管管理证明
  static checkAuditAssetCeRecd(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/checkAuditAssetCeRecd', data)
  }
  // 法币 - otc订单 -- 对话记录 --列表
  static getOtccChatRecords(data) {
    return Fetch.post('/admin/user/otc/chat/records', data)
  }
  // 法币 - otc订单 -- 对话记录 --发送信息
  static otcSendMessage(data) {
    return Fetch.post('/admin/user/otc/send-message', data)
  }

  // 法币 - 汇率管理 - 列表
  static getTpCoinSetPage(data) {
    return Fetch.post('/admin/account/tp/coin-set-page', data)
  }

  // 法币 - 汇率管理 - 编辑
  static setTpEditCoinSet(data) {
    return Fetch.post('/admin/account/tp/edit-coin-set', data)
  }

  // 法币 - 收益记录 -列表
  static getTpGetGenefit(data) {
    return Fetch.post('/admin/order/tp/get-benefit', data)
  }

  // 法币 - 等级设置 -列表
  static getUserGradePage(data) {
    return Fetch.post('/admin/user/gradePage', data)
  }

  // 法币 - 等级设置 -增加
  static addUserGradePage(data) {
    return Fetch.post('/admin/user/addGrade', data)
  }

  // 法币 - 等级设置 -修改
  static updateUserGradePage(data) {
    return Fetch.post('/admin/user/updateGrade', data)
  }

  // 法币 - 等级设置 - 删除
  static deleteUserGradePage(data) {
    return Fetch.post('/admin/user/deteleGrade', data)
  }

  // 法币 - 商户账户管理 - 列表
  static getAccountManageQuery(data) {
    return Fetch.post('/admin/user/merchant/otc/account/manage/query', data)
  }

  // 法币 - 会员设置 - 解冻信用额度
  static setUnfreezeMember(data) {
    return Fetch.post('/admin/account/unfreeze/member', data)
  }

  // 法币 - 商户账号 - 锁定或开启
  static setLockOrActivationStatus(data) {
    return Fetch.post('/admin/user/merchant/otc/account/lockOrActivation', data)
  }

  // 法币 - 商户otc订单管理 - 回调按钮
  static setCallBackMerchant(data) {
    return Fetch.post('/admin/order/call-back-merchant', data)
  }

  // 法币 - 商户账号管理 - 商户流水列表
  static getTpCoinChangeQuery(data) {
    return Fetch.post('/admin/account/tp/coinChange/query/list', data)
  }

  // 法币 - 代理管理 - 修改平台账号
  static setUpdatePlatformUserRates(data) {
      return Fetch.post('/admin/user/tp/update-platform-user-rates', data)
    }

    // 商户后台

    // 商户后台 - 用户查询列表页
    <<
    << << < HEAD
    // static getMerchantList(data) {
    //   return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/merchantList', data)
    // }
    ===
    === =
    static getMerchantList(data) {
      return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/merchantList', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 商户后台 - 用户查询---单条详情页
  static geMmerchantDetail(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/detail', data)
  }

  // 商户后台 - 用户查询---删除写入新的谷歌验证码
  static deleteGoogleVerify(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/deleteGoogleVerify', data)
  }

  // 商户后台 - 用户查询---修改兑入兑出手续费
  static updateMerchantFee(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/updateMerchantFee', data)
  }

  // 商户后台 - 用户查询---修改兑出方式
  static updateMerchantExchangeType(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/updateMerchantExchangeType', data)
  }

  // 商户后台 - 用户查询---修改兑入兑出额度
  static updateMerchantCoinConfig(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/updateMerchantCoinConfig', data)
  }

  // 商户后台 - 用户查询---修改代付比例
  static updateBatchOutFee(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/updateBatchOutFee', data)
  }

  // 商户后台 - 用户查询---收银台修改
  static updateMerchantInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/updateMerchantInfo', data)
  }

  // 商户后台 - 交易广告记录 列表
  static getCashoutAuditList(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/getCashoutAuditList', data)
  }

  // 商户后台 - 充提流水 列表
  static queryRechargeWithdrawPage(data) {
    return Fetch.postForm1(
      '/otc/admin/wallet/backmgr/merchant/trade/queryRechargeWithdrawPage',
      data
    )
  }

  // 商户后台 - 充提流水----手动录单
  static geManual(data) {
    return Fetch.get('/backmgr/manual', data)
  }

  // 商户后台 - 宝转卡流水
  static atobTradeList(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/trade/atobTradeList', data)
  }

  // 商户后台 - 资金流水
  static queryAmountFlowPage(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/trade/queryAmountFlowPage', data)
  }

  // 商户后台 - 商户分组授权
  static checkMerchantGroupRecd(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/checkMerchantGroupRecd', data)
  }

  // 商户后台 - 商户分组授权---删除
  static delSubGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/subGroup', data)
  }

  // 商户后台 - 商户全局设置
  static getTradeConfig(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/trade/config', data)
  }

  // 商户后台 - 商户全局设置---获取兑入方式
  static getInSwitch(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getInSwitch', data)
  }

  // 商户后台 - 商户全局设置---更改兑入方式
  static modifyInSwitch(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/modifyInSwitch', data)
  }
  // 商户后台 - 商户全局设置---提交页面修改
  static updateConfigMerchant(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/trade/updateConfig', data)
  }

  // 商户后台 -  商户分组授权---详情页 --- 商户列表
  static checkMerchantGroupRecdInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/checkMerchantGroupRecdInfo', data)
  }

  // 商户后台 - 商户分组授权---详情页 --- 码商列表
  static checkUserGroupRecdInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/checkUserGroupRecdInfo', data)
  }

  // 商户后台 - 商户分组授权---详情页 --删除条目(币商)
  static subUserToGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/subUserToGroup', data)
  }

  // 商户后台 - 商户分组授权---详情页 --删除条目（商户）
  static subMerchantToGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/subMerchantToGroup', data)
  }

  // 商户分组授权---详情页 --获取新增用户列表
  static findInviteChildByGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/invite/backmgr/findInviteChildByGroup', data)
  }

  // 商户分组授权---详情页 --添加人员入组
  static addMerchantToGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/addMerchantToGroup', data)
  }
  // 商户分组授权---详情页 --添加商户列表人员
  static listByGroup(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/listByGroup', data)
  }

  // 商户后台 - 地区访问设置---数据
  static getEnableAreas(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/sys/getEnableAreas', data)
  }
  // 商户后台 - 地区访问设置---提交更改的地区
  static updateEnableAreas(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/sys/updateEnableAreas', data)
  }

  // 商户后台 - 获取商户黑名单---列表页
  static getCheckoutBlacklist(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/getCheckoutBlacklist', data)
  }
  // 商户后台 - 获取商户黑名单--- 解封
  static subCheckoutBlacklist(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/subCheckoutBlacklist', data)
  }
  // 商户后台 - 获取商户黑名单--- 增加
  static addCheckoutBlacklist(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/addCheckoutBlacklist', data)
  }

  // 审核模块

  // 获取商户黑名单--- 增加
  static checkGetAuditList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getAuditList', data)
  }

  // 广告商审核--- 列表(新版)
  static checkGetAuditListNew(data) {
    return Fetch.post('/admin/user/otc/audit-page', data)
  }

  // 支付方式审核 -- 列表
  static getCustomPayInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getCustomPayInfo', data)
  }

  // 支付方式审核 -- 列表（新版）
  static getCustomPayInfoNew(data) {
    return Fetch.post('/admin/user/otc/audit-pay-page', data)
  }

  // 支付方式审核 --- 详情页 审核和绑定表格
  static getCustomPayDetailInfo(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/getCustomPayDetailInfo', data)
  }

  // 支付方式审核 --- 详情页 点击审核通过或者驳回
  static updateAuditPayStatus(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateAuditPayStatus', data)
  }

  // 支付方式审核 --- 详情页 点击审核通过或者驳回(新版)
  static updateAuditPayStatusNew(data) {
    return Fetch.post('/admin/user/otc/audit-pay', data)
  }

  // 支付方式审核 --- 详情页 点击停止使用或者开启使用
  static updatePayStatus(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updatePayStatus', data)
  }

  // 商户审核
  static getMerchantList(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/apply/list', data)
  }

  // 商户审核 --- 点击按钮审核或者驳回
  static getMerchantApplyCheck(data) {
    return Fetch.postForm1('/otc/admin/wallet/backmgr/merchant/apply/check', data)
  }
  // 广告商审核----通过或者驳回
  static updateAuditStatus(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateAuditStatus', data)
  }

  // 广告商审核----通过或者驳回(新版)
  static updateAuditStatusNew(data) {
    return Fetch.post('/admin/user/otc/audit', data)
  }

  // otc币种参数-列表
  static otcCoinGlobalSetList(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/otcCoinGlobalSetList', data)
  }

  // otc币种参数-列表（新版）
  static otcCoinGlobalSetListNew(data) {
    return Fetch.post('/admin/account/otc/coin-set-page', data)
  }

  // otc币种参数列表--- 修改保存
  static otcCoinGlobalSet(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/otcCoinGlobalSet', data)
  }

  // otc币种参数列表--- 修改保存（新版）
  static otcCoinGlobalSetNew(data) {
    return Fetch.post('/admin/account/otc/edit-coin-set', data)
  }

  // otc币种参数列表--- 修改添加（新版）（新增）
  static setoOtcAddPay(data) {
    return Fetch.post('/admin/account/otc/add-coin-set', data)
  }

  // otc收款方式--- 列表（新增）
  static getUsrCtcPayPage(data) {
    return Fetch.post('/admin/user/otc/pay-page', data)
  }
  // otc收款方式--- 下拉列表（新增）
  static getoOtcPayList(data) {
    return Fetch.post('/admin/user/otc/pay-list', data)
  }
  // otc收款方式--- 添加收款方式（新增）
  static setUserOtcAddPay(data) {
    return Fetch.post('/admin/user/otc/add-pay', data)
  }
  // otc收款方式--- 编辑收款方式（新增）
  static setOtEditPay(data) {
    return Fetch.post('/admin/user/otc/edit-pay', data)
  }
  // otc收款方式--- 删除收款方式（新增）
  static setOtDeletePay(data) {
    return Fetch.post('/admin/user/otc/delete-pay', data)
  }

  // 标仓模块

  // 标仓 -列表
  static warehouseUserPage(data) {
    return Fetch.post('/admin/account/warehouse-user-page', data)
  }

  // 标仓 -添加标仓用户
  static warehouseAddUser1(data) {
    return Fetch.post('/admin/account/add-warehouse-user', data)
  }

  // 标仓 -添加标仓用户-新版
  static warehouseAddUser(data) {
    return Fetch.post('/admin/user/change-relation', data)
  }

  // 标仓 -详情页 - 基本信息
  static warehouseUserDetailBasic(data) {
    return Fetch.post('/admin/account/warehouse-user-detail-basic', data)
  }

  // 标仓 -详情页 - 基本信息
  static warehouseUserDetailReward(data) {
    return Fetch.post('/admin/account/warehouse-user-detail-reward', data)
  }

  // 标仓 -数目统计
  static warehouseStatistics(data) {
    return Fetch.post('/admin/account/warehouse-number-statistics', data)
  }

  // 标仓 -平台账号流水
  static warehouseAccountFlow(data) {
    return Fetch.post('/admin/account/platform-account-flow', data)
  }

  // 标仓 - 奖励列表
  static warehouseRewardList(data) {
    return Fetch.post('/admin/account/reward-list', data)
  }

  // 标仓 - 奖励列表 - 编辑
  static warehouseEditReward(data) {
    return Fetch.post('/admin/account/edit-reward', data)
  }

  // 标仓 - 奖励列表 - 周薪数据列表
  static warehouseWeekDetail(data) {
    return Fetch.post('/admin/account/reward-week-detail', data)
  }

  // 标仓 - 分红列表
  static warehousebonusDetail(data) {
    return Fetch.post('/admin/account/reward-bonus-detail', data)
  }

  // 标仓 - 分红列表
  static warehousebonusIntegral(data) {
    return Fetch.post('/admin/account/integral-list', data)
  }

  // 标仓 - 分红列表 - 详情
  static warehouseIntegralDetail(data) {
    return Fetch.post('/admin/account/integral-detail', data)
  }

  // 标仓 - 永久积分列表
  static warehouseIntegralPermanent(data) {
    return Fetch.post('/admin/account/integral-permanent', data)
  }

  // 标仓 - 永久积分列表 - 编辑
  static warehouseEditIntegralPermanent(data) {
    return Fetch.post('/admin/account/edit-integral-permanent', data)
  }

  // 标仓 - 标仓配置获取
  static warehouseGetConfig(data) {
    return Fetch.post('/admin/account/warehouse/get-config', data)
  }

  // 标仓 - 标仓配置修改
  static warehouseUpdateConfig(data) {
    return Fetch.post('/admin/account/warehouse/update-config', data)
  }

  // 标仓 - 黑名单 - 列表
  static warehouseBlackUser(data) {
    return Fetch.post('/admin/account/black_user', data)
  }

  // 标仓 - 黑名单 - 移出
  static warehouseRemoveBlack(data) {
    return Fetch.post('/admin/account/remove-black_user', data)
  }

  // 标仓 - 黑名单 - 添加
  static warehouseAddBlack(data) {
    return Fetch.post('/admin/account/add-black_user', data)
  }

  // 标仓 - 删除 - 周结算规则-- 会员区间 - 删除
  static warehouseDeleteRules(data) {
    return Fetch.post('/admin/account/warehouse/delete-rules', data)
  }

  // 标仓 - 设置 - 周结算规则 -- 会员区间 - 列表
  static warehouseRules(data) {
    return Fetch.post('/admin/account/warehouse/rules', data)
  }

  // 标仓 - 编辑 - 周结算规则 -- 会员区间 - 修改
  static warehouseUpdateRules(data) {
    return Fetch.post('/admin/account/warehouse/update-rules', data)
  }
  // 标仓 - 添加 - 周结算规则-- 会员区间 - 增加
  static warehouseAddRules(data) {
    return Fetch.post('/admin/account/warehouse/add-rules', data)
  }

  // 标仓 - 获取 - 注册人- 日加入星球活动限额
  static warehouseMaxRegister(data) {
    return Fetch.post('/admin/user/get-max-register', data)
  }
  // 标仓 - 设置 - 注册人 - 日加入星球活动限额
  static warehouseSetMaxRegister(data) {
    return Fetch.post('/admin/user/set-max-register', data)
  }

  // 标仓 - 设置 - 新增统计
  static warehouseGetRegisterHistory(data) {
    return Fetch.post('/admin/user/get-register-history', data)
  }

  // 标仓 - uid查询 - 添加永久积分弹窗
  static warehouseUserIntegralPermanent(data) {
    return Fetch.post('/admin/account/user-integral-permanent', data)
  }

  // 首页 - 基础数据
  static overviewStatistics(data) {
    return Fetch.post('/admin/user/overviewStatistics', data)
  }
  // 首页 - 折线图
  static statisticsChart(data) {
    return Fetch.post('/admin/user/StatisticsChart', data)
  }

  // 首页 - 折线图--林威-法币
  static otcChart(data) {
    return Fetch.postForm1('/otc/admin/wallet/thirdSum/open/getOtcDailySnapshot', data)
  }

  // 首页 - 折线图--林威-法币
  static otcChartNew(data) {
    return Fetch.post('/admin/order/otc-daily-snapshot', data)
  }

  // 首页 - 折线图--林威-币币
  static ordeDailySnapshot(data) {
    return Fetch.post('/admin/order/daily-snapshot', data)
  }

  // 标仓用户详情 团队信息
  static warehouseUserDetailTeam(data) {
    return Fetch.post('/admin/account/warehouse-user-detail-team', data)
  }

  // 标仓 -用户- 列表-设置无限代 设置switch权限
  static warehouseUpdateWarehouseUser(data) {
    return Fetch.post('/admin/account/update-warehouse-user', data)
  }

  // 系统管理 - 操作日志 --- 配置路径 - 列表
  static getLogMenuList(data) {
    return Fetch.post('/admin/user/log-menu-list', data)
  }

  // 系统管理 - 操作日志 --- 增加配置路径
  static addLogMenu(data) {
    return Fetch.post('/admin/user/add/log-menu', data)
  }

  // 系统管理 - 操作日志 --- 编辑配置路径
  static editLogMenu(data) {
    return Fetch.post('/admin/user/edit/log-menu', data)
  }
  // 系统管理 - 操作日志 --- 删除配置路径
  static deleteLogMenu(data) {
    return Fetch.post('/admin/user/delete/log-menu', data)
  }

  // 交易管理 - 市值账号管理 -- 出入金统计
  static orderMarketStatistics(data) {
    return Fetch.post('/admin/order/market-statistics', data)
  }

  // 标仓模块 - 标仓资产
  static alptChangeRecords(data) {
    return Fetch.post('/admin/account/alpt-change-records', data)
  }

  // 主页- 手续费统计
  static orderEntrustFee(data) {
    return Fetch.post('/admin/account/entrust-fee', data)
  }

  // 主页- 交易数据统计
  static orderEntrustAmount(data) {
    return Fetch.post('/admin/order/entrust-amount', data)
  }

  // 主页- 手续费统计 - 合计
  static orderEntrustFeeTotal(data) {
    return Fetch.post('/admin/account/entrust-fee-total', data)
  }
  // 主页- 交易数据统计 - 合计
  static orderEntrustAmountTotal(data) {
    return Fetch.post('/admin/order/entrust-amount-total', data)
  }

  // 主页 - 资金统计- 实时总资产
  static dailyCoinSum(data) {
    return Fetch.post('/admin/account/realTime/coin/sum', data)
  }

  // 主页 - 资金统计- 历史资产统计
  static accountDailyCoinSum(data) {
    return Fetch.post('/admin/account/daily/coin/sum', data)
  }

  // 主页 - 资金统计- 历史资产统计- 统计按钮
  static colletAccountDailyCoinSum(data) {
    return Fetch.post('/admin/account/collect/daily/coin/sum', data)
  }

  //  法币 - 获取保证金
  static queryOtcDepositCoin(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/queryOtcDepositCoin', data)
  }

  //  法币 - 保证金修改
  static updateOtcDepositCoin(data) {
    return Fetch.postForm1('/otc/admin/wallet/app/otc/backmgr/updateOtcDepositCoin', data)
  }

  // 主页 - 资金统计 - 合计
  static collectDailyCoinSum(data) {
    return Fetch.post('/admin/account/collect/daily/coin/sum', data)
  }

  // 标仓 - 周薪 - 导出
  static rewardWeekDetailExport(data) {
    // return Fetch.postExcel('/admin/account/reward-week-detail/export', data);
    return Fetch.post('/admin/account/reward-week-detail/export', data)
  }

  // 标仓 - 分红 - 导出
  static rewardBonusDetailExport(data) {
    return Fetch.post('/admin/account/reward-bonus-detail/export', data)
  }

  // 财务管理 - 锁仓管理 - 列表
  static getLockOrderList(data) {
    return Fetch.post('/admin/account/lock-order-list', data)
  }
  // 财务管理 - 锁仓管理 - 添加条目
  static addLockOrder(data) {
    return Fetch.post('/admin/account/add-lock-order', data)
  }

  // 财务管理 - 锁仓管理 - 修改条目
  static editLockOrder(data) {
    return Fetch.post('/admin/account/edit-lock-order', data)
  }
  // 财务管理 - 锁仓管理 - 解冻
  static unlockOrderByHand(data) {
    return Fetch.post('/admin/account/unlock-order-by-hand', data)
  }

  // 财务管理 - 锁仓管理 - 获取锁仓配置-百分比
  static getLockPercent(data) {
    return Fetch.post('/admin/account/get-lock-percent', data)
  }
  // 财务管理 - 锁仓管理 - 设置锁仓配置-百分比
  static setLockPercent(data) {
    return Fetch.post('/admin/account/set-lock-percent', data)
  }

  // 财务管理 - 锁仓记录 - 列表
  static getOrderDetailList(data) {
    return Fetch.post('/admin/account/order-detail-list', data)
  }

  // 工单管理 - 列表
  static userWorkOrder(data) {
    return Fetch.post('/admin/user/work-order', data)
  }

  // 工单管理 - 类型 - 下拉框
  static workTypeList(data) {
    return Fetch.post('/admin/user/work-type-list', data)
  }

  // 工单管理 - 根据角色获取用户列表
  static systemUserList(data) {
    return Fetch.post('/admin/user/system-user-list', data)
  }

  // 工单管理 - 添加工单
  static addWorkOrder(data) {
    return Fetch.post('/admin/user/add/work-order', data)
  }

  // 工单管理 - 编辑工单
  static editWorkOrder(data) {
    return Fetch.post('/admin/user/edit/work-order', data)
  }

  // 工单管理 - 获取工单类型 - 列表
  static getUserWorkType(data) {
    return Fetch.post('/admin/user/work-type', data)
  }

  // 工单管理 - 添加 -工单类型
  static addWorkType(data) {
    return Fetch.post('/admin/user/add/work-type', data)
  }

  // 工单管理 - 编辑 -工单类型
  static editWorkType(data) {
    return Fetch.post('/admin/user/edit/work-type', data)
  }
  // 锁仓 - 获取锁仓资金输出账户
  static getLockOutUser(data) {
    return Fetch.post('/admin/account/get-lock-out-user', data)
  }

  // 锁仓 - 配置锁仓资金输出账户
  static setLockOutUser(data) {
    return Fetch.post('/admin/account/set-lock-out-user', data)
  }

  // 资产-列表
  static assetUserList(data) {
    return Fetch.post('/admin/user/asset-user-list', data)
  }
  // 资产-账号添加
  static addAssetUser(data) {
    return Fetch.post('/admin/user/add/asset-user', data)
  }

  // 资产-划转记录列表
  static getAssetUserTransferPage(data) {
    return Fetch.post('/admin/account/asset-user-transfer-page', data)
  }
  // 资产-收益账号列表
  static getProfitDetail(data) {
    return Fetch.post('/admin/account/profit-detail', data)
  }
  // 资产-收益账号-新增 划转
  static addProfitUserTransfer(data) {
    return Fetch.post('/admin/account/profit-user-transfer', data)
  }

  // 资产-收益账号-新增 资产账号查询可以划转的账号列表
  static getUserTransferUserList(data) {
    return Fetch.post('/admin/user/transfer-user-list', data)
  }

  // 资产-收益账号-获取下拉框的币种资金
  static getAccountGetBalance(data) {
    return Fetch.post('/admin/account/getBalance', data)
  }

  // 资产-收益账号-新增销账
  static getWriteOffProfit(data) {
    return Fetch.post('/admin/account/write-off-profit', data)
  }
  // 资产-成本账号-列表
  static getCostDetail(data) {
    return Fetch.post('/admin/account/cost-detail', data)
  }

  // 资产-成本账号-划转
  static setCostUserTransfer(data) {
    return Fetch.post('/admin/account/cost-user-transfer', data)
  }

  // 资产-支出账号-列表
  static getExpendDetail(data) {
    return Fetch.post('/admin/account/expend-detail', data)
  }

  // 资产-支出账号-划转
  static getExpendUserTransfer(data) {
    return Fetch.post('/admin/account/expend-user-transfer', data)
  }

  // 资产-支出账号-子账号 - 划账
  static getSubExpendUserTransfer(data) {
    return Fetch.post('/admin/account/sub-expend-user-transfer', data)
  }

  // 资产-子账号-列表
  static getSubExpendUserList(data) {
    return Fetch.post('/admin/user/sub-expend-user-list', data)
  }
  // 资产-子账号-编辑
  static getEditExpendUser(data) {
    return Fetch.post('/admin/user/edit/sub-expend-user', data)
  }
  // 资产-子账号-详情页
  static getAccountSubExpendDetail(data) {
    return Fetch.post('/admin/account/sub-expend-detail', data)
  }
  // 资产-收益-销账记录
  static getAccountWriteOffRecord(data) {
    return Fetch.post('/admin/account/write-off-record', data)
  }
  // 资产-子账号-使用流水
  static getSubExpendRecord(data) {
    return Fetch.post('/admin/account/sub-expend-record', data)
  }
  // 根据用户uid获取地址等信息
  static queryUidByAddress(data) {
    return Fetch.post('/admin/account/query/uid/by/address', data)
  }
  // 抽奖活动- 列表
  static getAccountActivityList(data) {
    return Fetch.post('/admin/account/activity/list', data)
  }

  // 抽奖活动- 主页-添加
  static getAccountActivityAdd(data) {
    return Fetch.post('/admin/account/activity/add', data)
  }

  // 抽奖活动- 详情页-编辑
  static getAccountActivityUpdate(data) {
    return Fetch.post('/admin/account/activity/update', data)
  }
  // 抽奖活动- 详情页-详情
  static getAccountActivityGetActivity(data) {
    return Fetch.post('/admin/account/activity/getActivity', data)
  }

  // 抽奖活动- 详情页-任务列表获取
  static getAccountActivityTaskList(data) {
    return Fetch.post('/admin/account/activity/task/list', data)
  }

  // 抽奖活动- 详情页- 奖品列表获取
  static getAccountActivityPrizeList(data) {
    return Fetch.post('/admin/account/activity/activityPrizeList', data)
  }

  // 抽奖活动- 任务配置页面- 任务编辑
  static setActivityTaskUpdate(data) {
    return Fetch.post('/admin/account/activity/task/update', data)
  }

  // 抽奖活动- 奖品参数设置- 列表
  static getActivityPrizeList(data) {
    return Fetch.post('/admin/account/activity/prize/list', data)
  }

  // 抽奖活动- 奖品参数设置- 编辑
  static getActivityPrizeUpdate(data) {
    return Fetch.post('/admin/account/activity/prize/update', data)
  }

  // 抽奖活动- 奖品参数设置- 添加
  static getActivityPrizeAdd(data) {
    return Fetch.post('/admin/account/activity/prize/add', data)
  }

  // 抽奖活动- 奖品参数设置- 删除
  static getActivityPrizeDelete(data) {
    return Fetch.post('/admin/account/activity/prize/delete', data)
  }

  // 抽奖活动- 奖励记录- 列表
  static getActivityLotteryList(data) {
    return Fetch.post('/admin/account/activity/lottery/list', data)
  }

  // 标仓管理 - 一键统计
  static getCurrentWeekBonus(data) {
    return Fetch.post('/admin/account/get-current-week-bonus', data)
  }

  // 奖励记 - 修改是否发放奖励开关
  static getGrantStatusSwitch(data) {
    return Fetch.post('/admin/account/activity/grantStatus/switch', data)
  }

  // 币种管理 - 主流机器人 - 列表
  static getRobotRobotPage(data) {
    return Fetch.post('/admin/robot/robot-page', data)
  }

  // 币种管理 - 主流机器人 - 机器人列表
  static getRobotRobotList(data) {
    return Fetch.post('/admin/robot/robot-List', data)
  }

  // 币种管理 - 主流机器人 - 增加
  static setRoboAddRobot(data) {
    return Fetch.post('/admin/robot/add-robot', data)
  }

  // 币种管理 - 主流机器人 - 编辑
  static setRoboEditRobot(data) {
    return Fetch.post('/admin/robot/edit-robot', data)
  }

  // 抽奖活动 - 详情 - 删除奖品
  static setDeleteActivity(data) {
    return Fetch.post('/account/activity/deleteActivity', data)
  }

  // 版本管理 - 本地包管理 - 列表
  static getUserPackagePage(data) {
    return Fetch.post('/admin/user/package-page', data)
  }
  // 版本管理 - 本地包管理 - 编辑
  static getUserEditPackage(data) {
    return Fetch.post('/admin/user/edit/package', data)
  }
  // 版本管理 - 本地包管理 - 添加
  static getUserAddPackage(data) {
    return Fetch.post('/admin/user/add/package', data)
  }

  // 版本管理 - 本地包管理 - 删除
  static getUserDeletePackage(data) {
    return Fetch.post('/admin/user/delete/package', data)
  }
  // 版本管理 - 本地包管理 - key的所有数据
  static getAllKeyList(data) {
    return Fetch.post('/admin/user/all-key-list', data)
  }
  // 版本管理 - 本地包管理 - key的可用数据
  static getNowKeyList(data) {
    return Fetch.post('/admin/user/key-list', data)
  }

  // 版本管理 - key - 列表
  static getUserKeyPage(data) {
    return Fetch.post('/admin/user/key-page', data)
  }
  // 版本管理 - key - 删除
  static getDeleteKey(data) {
    return Fetch.post('/admin/user/delete/key', data)
  }
  // 版本管理 - key - 增加
  static getAddKey(data) {
    return Fetch.post('/admin/user/add/key', data)
  }

  // 版本管理 - key - 编辑
  static getEditKey(data) {
    return Fetch.post('/admin/user/edit/key', data)
  }
  // 版本管理 - 灰度设置 - 列表
  static getGrayScalePageList(data) {
    return Fetch.post('/admin/user/gray-scale-page', data)
  }
  // 版本管理 - 灰度设置 - 添加
  static getAddGrayScale(data) {
    return Fetch.post('/admin/user/add/gray-scale', data)
  }

  // 版本管理 - 灰度设置 - 编辑
  static getEditGrayScale(data) {
    return Fetch.post('/admin/user/edit/gray-scale', data)
  }

  // 版本管理 - 灰度设置 - 删除
  static getDeleteGrayScale(data) {
    return Fetch.post('/admin/user/delete/gray-scale', data)
  }

  // 标仓-周薪发放-查看指定星级停留的次数的用户
  static getUserStayCount(data) {
    return Fetch.post('/admin/account/warehouse-user-stay-count', data)
  }

  // 获取奖励统计信息
  static getLotteryStatistics(data) {
    return Fetch.post('/admin/account/activity/lottery/statistics', data)
  }

  // 资产管理-收入账号-列表
  static getAccountIncomeDetail(data) {
    return Fetch.post('/admin/account/income-detail', data)
  }

  // 资产管理-收入账号-手动充值记录-列表
  static getRechargeIncomeRecord(data) {
    return Fetch.post('/admin/account/recharge-income-record', data)
  }
  // 资产管理-收入账号-手动充值
  static getRechargeIncomeIn(data) {
    return Fetch.post('/admin/account/recharge-income', data)
  }
  // 资产管理-收入账号-划转
  static setIncomeUserTransfer(data) {
    return Fetch.post('/admin/account/income-user-transfer', data)
  }

  // 币种管理 - 查询链类型 - 下拉表
  static getChainList(data) {
    return Fetch.post('/admin/account/coin/chain-list', data)
  }
  // 币种-链类型 - 列表
  static getChainPage(data) {
    return Fetch.post('/admin/account/coin/chain-page', data)
  }
  // 币种-链类型 - 增加列表
  static setAddChain(data) {
    return Fetch.post('/admin/account/add/chain', data)
  }
  // 币种-链类型 - 编辑列表
  static setUpdateChain(data) {
    return Fetch.post('/admin/account/update/chain', data)
  }
  // 币种-链类型 - 删除列表
  static setDeleteChain(data) {
    return Fetch.post('/admin/account/delete/chain', data)
  }

  // 币种-交易对行情接口管理-查询列表
  static getQueryList(data) {
    return Fetch.post('/market/turnover/query', data)
  }

  // 币种-交易对行情接口管理-统计
  static getTotalStatistics(data) {
    return Fetch.post('/market/turnover/statistics', data)
  }

  // 币种-交易对行情接口管理-添加
  static setTurnoverAdd(data) {
    return Fetch.post('/market/turnover/add', data)
  }

  // 币种-交易对行情接口管理-修改
  static setTurnoverUpdate(data) {
    return Fetch.post('/market/turnover/update', data)
  }

  // 币种-提币白名单 - 列表
  static getCoinWhiteList(data) {
    return Fetch.post('/admin/account/query/withdraw-whitelist', data)
  }
  // 币种-提币白名单 - 增加列表
  static addEditCoinWhiteList(data) {
    return Fetch.post('/admin/account/save/withdraw-whitelist', data)
  }
  // 币种-提币白名单 - 删除列表
  static deleteCoinWhiteList(data) {
    return Fetch.post('/admin/account/delete/withdraw-whitelist', data)
  }

  // 法币 - 返佣 - 合计按钮
  static getTpGetBenefitSum(data) {
    return Fetch.post('/admin/order/tp/get-benefitSum', data)
  }
  // 法币 - 商户otc订单 - 币种
  static getTpCoinSetList(data) {
    return Fetch.post('/admin/account/tp/coin-set-list', data)
  }
  // 法币 - 代理管理 - 下级 - 单独获取数据
  static getCurrentUserRatesOnly(data) {
    return Fetch.post('/admin/user/tp/get-current-user-rates', data)
  }

  // 合约
  // 合约币种 - 列表
  static getListMarketContractcoinMarkets(data) {
    return Fetch.post('/admin/market/contractcoinMarketsByPage', data)
  }
  // 合约币种 - 列表- 编辑
  static getUpdateMarketContractcoinMarkets(data) {
    return Fetch.post('/admin/market/updateContractCoinMarket', data)
  }
  // 合约币种 - 列表- 增加
  static getAddMarketContractcoinMarkets(data) {
    return Fetch.post('/admin/market/addContractCoinMarket', data)
  }

  // 合约流水 - 列表
  static getAccountContractBill(data) {
    return Fetch.post('/admin/account/contract/bill', data)
  }
  // 合约资产 - 列表
  static getContractAccount(data) {
    return Fetch.post('/admin/account/contract/account', data)
  }
  // 合约代理管理 - 划转列表
  static getAgentTransferList(data) {
    return Fetch.post('/admin/account/contract-transfer-record', data)
  }
  // 合约代理管理 - 划转列表信息统计
  static getAgentTransferInfo(data) {
    return Fetch.post('/admin/account/contract-transfer-total', data)
  }

  // 普通委托账单 - 列表
  static getContractEntrustPagination(data) {
    return Fetch.post('/admin/contract/entrust-pagination', data)
  }
  // 计划委托账单 - 列表
  static getContractPlanEntrustPagination(data) {
    return Fetch.post('/admin/contract/plan-entrust-pagination', data)
  }

  // 平仓记录 - 列表
  static getClosePositionEntrustPagination(data) {
    return Fetch.post('/admin/account/close-position-entrust-pagination', data)
  }

  // 成交记录 - 列表
  static getCloseEntrustDetailPagination(data) {
    return Fetch.post('/admin/contract/entrust-detail-pagination', data)
  }

  // 合约账单 - 列表
  static getUserBillPagination(data) {
    return Fetch.post('/admin/account/contract-user-bill-pagination', data)
  }
  // 手续费列表 - 列表
  static getHandlingFeePagination(data) {
    return Fetch.post('/admin/account/contract-handling-fee-pagination', data)
  }

  // 持仓记录 - 列表
  static getPositionEntrustPagination(data) {
    return Fetch.post('/admin/account/position-entrust-pagination', data)
  }
  // 交易对的仓位档位获取（也就是杠杆倍数）
  static getContractPositionGearList(data) {
    return Fetch.post('/admin/account/contract-position-gear-list', data)
  }

  // 合约仓位档位-列表
  static getContractPositionGearPagination(data) {
    return Fetch.post('/admin/account/contract-position-gear-pagination', data)
  }

  // 合约资金费率设置查询-列表
  static getContractAccountList(data) {
    return Fetch.post('/admin/contract-account/contract-fund-rate-set-page', data)
  }
  // 合约资金费率设置查询-增加
  static addContractAccount(data) {
    return Fetch.post('/admin/contract-account/add/contract-fund-rate-set', data)
  }
  // 合约资金费率设置查询-编辑
  static editContractAccount(data) {
    return Fetch.post('/admin/contract-account/edit/contract-fund-rate-set', data)
  }
  // 合约资金费率记录-列表
  static getContractFundRateList(data) {
    return Fetch.post('/admin/contract-account/contract-fund-rate-set-record-page', data)
  }
  // 合约资金费率记录-编辑
  static editContractFundRate(data) {
    return Fetch.post('/admin/contract-account/add/contract-fund-rate-set-record', data)
  }

  // 合约仓位档位-增加
  static addContractPositionGear(data) {
    return Fetch.post('/admin/account/add/contract-position-gear', data)
  }
  // 合约仓位档位- 编辑
  static editContractPositionGear(data) {
    return Fetch.post('/admin/account/edit/contract-position-gear', data)
  }
  // 币种管理--合约交易对列表
  static getContractcoinSymbolList(data) {
    return Fetch.post('/admin/market/contractcoinMarkets', data)
  }

  // 币种管理--模拟合约交易对列表
  static getContractcoinSymbolListMimic(data) {
    return Fetch.post('/admin/market-mock/contractcoinMarkets', data)
  }
  // 币种管理--模拟合约交易对列表 分析师专用
  static getAnalystCoinSymbolListMimic(data) {
    return Fetch.post('/admin/market-mock/contractcoinMarketsWithOutMockType', data)
  }

  // 合约 -  普通委托记录统计
  static getContractEntrustTotal(data) {
    return Fetch.post('/admin/contract/entrust-total', data)
  }

  // 合约 - 计划委托记录统计
  static getContractPlanEntrustTotal(data) {
    return Fetch.post('/admin/contract/plan-entrust-total', data)
  }

  // 合约 -成交记录统计
  static getContractEntrustDetailPaginationTotal(data) {
    return Fetch.post('/admin/contract/entrust-detail-total', data)
  }

  // 合约 - 手续费记录统计
  static getContractHandlingFeeTotal(data) {
    return Fetch.post('/admin/account/contract-handling-fee-total', data)
  }
  // 合约- 币种 - 合约机器人 - 增加
  static getContractRobotAddRobot(data) {
    return Fetch.post('/admin/robot/contract/add-robot', data)
  }
  // 合约- 币种 - 合约机器人 - 编辑
  static getContractRobotEditRobot(data) {
    return Fetch.post('/admin/robot/contract/edit-robot', data)
  }
  // 合约- 币种 - 合约机器人 - 列表
  static getContractRobotListRobot(data) {
    return Fetch.post('/admin/robot/contract/robot-page', data)
  }
  // 法币-广告-合计
  static getOtcAdvertTotal(data) {
    return Fetch.post('/admin/order/otc/advert-total', data)
  }
  // 币支付-充币-列表
  static getCPDepositQueryList(data) {
    return Fetch.post('/admin/account/payment/deposit/query/list', data)
  }
  // 币支付-提币-列表
  static getCPWithdrawQueryList(data) {
    return Fetch.post('/admin/account/payment/withdraw/query/list', data)
  }
  // 币支付-划转-列表
  static getCPTransferPage(data) {
    return Fetch.post('/admin/account/payment/transfer-page', data)
  }

  // 新归集详情
  static getAddressListDetail(data) {
    return Fetch.post('/admin/wallet/getAddress', data)
  }
  // 合约-代理-代理商-列表
  static getBusinessAgentList(data) {
    return Fetch.post('/admin/user/query/business/agent/list', data)
  }

  // 合约-代理-修改商务或者代理商
  static updateBusinessAgent(data) {
    return Fetch.post('/admin/user/update/business/agent', data)
  }

  // 合约-代理-根据代理模式查询等级名称列表
  static getLevelAgentMode(data) {
    return Fetch.post('/admin/user/query/level/agent/mode', data)
  }
  // 合约-代理-新增代理商
  static addBusinessAgent(data) {
    return Fetch.post('/admin/user/insert/business/agent', data)
  }

  // 合约-代理-新增商务
  static addBusinessUserInsert(data) {
    return Fetch.post('/admin/user/insert/business', data)
  }

  // 合约-代理-等级相关 - 商务或代理等级列表
  static businessLevelList(data) {
    return Fetch.post('/admin/user/query/business/level/list', data)
  }

  // 合约-代理-添加商务和代理等级-等级
  static addBusinessLevelSelect(data) {
    return Fetch.post('/admin/user/insert/business/level', data)
  }
  // 合约-代理-修改商务和代理等级-等级
  static updateBusinessLevel(data) {
    return Fetch.post('/admin/user/update/business/level', data)
  }
  // 合约-代理-删除商务和代理等级-等级
  static deleteBusinessLevel(data) {
    return Fetch.post('/admin/user/delete/business/level', data)
  }

  // 合约-代理-商务详情信息 和 代理商详情信息 - 基本信息
  static businessBasicInfo(data) {
    return Fetch.post('/admin/user/query/business/basic/info', data)
  }

  // 合约-代理-代理商详情信息 - 团队信息
  // static getAgentTeamInfo(data) {
  //   return Fetch.post('/admin/user/query/agent/team/info', data);
  // }
  // 合约-代理-代理商详情信息 - 资产信息
  static getAgentBusinessInfo(data) {
    return Fetch.post('/admin/account/business/queryCoin', data)
  }
  // 合约-代理-商务详情信息 - 团队信息
  static getBusinessTeamInfo(data) {
    return Fetch.post('/admin/user/query/business/team/info', data)
  }
  // 合约-代理-返佣记录-列表
  static getBusinessAndAgentList(data) {
    return Fetch.post('/admin/account/businessAndAgent/query/inviteList', data)
  }

  // 合约-代理-返佣记录-合计
  static businessAndAgentQueryInviteSum(data) {
    return Fetch.post('/admin/account/businessAndAgent/query/inviteSum', data)
  }

  // 合约-代理-分摊记录-列表
  static getApportionRecordList(data) {
    return Fetch.post('/admin/account/agent-captain-coin-market-commission-page', data)
  }

  // 合约-代理-商务财务流水-列表
  static getBusinessAndAgentQueryCoinChange(data) {
    return Fetch.post('/admin/account/businessAndAgent/query/coinChange', data)
  }

  // 合约-代理-代理财务流水-列表
  static getBusinessAndAgentCoinChange(data) {
    return Fetch.post('/admin/account/businessAndAgent/query/agent/coinChange', data)
  }

  // 合约 - 风控管理等级 -列表
  static getRiskLevelList(data) {
    return Fetch.post('/admin/account/contract/risk/list', data)
  }

  // 合约 - 风控管理等级 -添加
  static addRiskLevel(data) {
    return Fetch.post('/admin/account/contract/risk/add', data)
  }

  // 合约 - 风控管理等级 -编辑
  static editRiskLevel(data) {
    return Fetch.post('/admin/account/contract/risk/edit', data)
  }

  // 合约 - 风控策略点 -列表
  static getContractTacticsList(data) {
    return Fetch.post('/admin/account/contract/risk/strategy/list', data)
  }

  // 合约 - 风控策略点 -添加
  static addContractTactics(data) {
    return Fetch.post('/admin/account/contract/risk/strategy/add', data)
  }

  // 合约 - 风控策略点 -编辑
  static editContractTactics(data) {
    return Fetch.post('/admin/account/contract/risk/strategy/edit', data)
  }

  // 合约 - 预估模拟器 -列表
  static getContractEstimateList(data) {
    return Fetch.post('/admin/account/position-entrust-pagination', data)
  }

  // 合约 - 预估模拟器 -获取价格
  static getContractEstimatePrice(data) {
    return Fetch.post('/admin/contract-account/usdt/contract/marked/price', data)
  }

  // 合约 - 预估模拟器 -仓位盈亏预估查询
  static getContractEstimateQuery(data) {
    return Fetch.post('/admin/contract-account/contract-position-estimate', data)
  }

  // 合约 - 账号资产页面 -列表
  // new
  static getAccountContractList(data) {
    return Fetch.post('/admin/account/contract/profit/detailNew', data)
  }

  // 合约 - 账号收益记录 -列表
  // new
  static getEarningsRecordList(data) {
    return Fetch.post('/admin/account/contract/profit/dayDetailNew', data)
  }

  // 合约 - 账号合约账号 -销账
  static apiDestroyBill(data) {
    return Fetch.post('/admin/account/contract/profit/destroy', data)
  }

  // 合约 - 账号收益记录 -统计
  static getEarningsRecordTotal(data) {
    return Fetch.post('/admin/account/query/contract-profit-statistics', data)
  }

  // 合约 - 账号收益流水- 列表
  static getEarningsFlowList(data) {
    return Fetch.post('/admin/account/query/contract-profit-flow', data)
  }

  // 合约 - 数据统计 - 盈亏统计
  static getProfitAndLoss(data) {
    return Fetch.post('/admin/account/contract/query/profitAndLoss', data)
  }
  // 合约 - 数据统计 - 实时盈亏
  static getCurrentProfitAndLoss(data) {
    return Fetch.post('/admin/account/contract/query/current/profitAndLoss', data)
  }
  // 合约 - 人数统计 - 合约统计
  static getContractStatistics(data) {
    return Fetch.post('/admin/account/contract/query/contractStatistics', data)
  }
  // 合约 - 人数统计 - 当前实时活跃
  static getCurrentActive(data) {
    return Fetch.post('/admin/account/contract/query/current/active', data)
  }
  // 合约 - 盈亏 - 饼图
  static getProfitAndLossGraphicals(data) {
    return Fetch.post('/admin/account/contract/query/profitAndLossGraphicals', data)
  }
  // 合约 - 风险提示
  static getRiskStatement(data) {
    return Fetch.post('/admin/account/contract/query/riskStatement', data)
  }
  // 合约 - 交易额统计
  static getTradeStatistics(data) {
    return Fetch.post('/admin/account/contract/query/tradeStatistics', data)
  }

  // 合约 - 盈亏柱状图
  static getHistogram(data) {
    return Fetch.post('/admin/account/contract/query/amount-daily/histogram', data)
  }

  // 合约 - 返佣记录 - 获取合约返佣普通汇率
  static getContractRate(data) {
    return Fetch.post('/admin/user/get-normal-contract-rate', data)
  }

  // 合约 - 返佣记录 - 更新合约返佣普通汇率
  static updateContractRate(data) {
    return Fetch.post('/admin/user/update-normal-contract-rate', data)
  }

  // 合约 - 交易 - 返佣记录
  static getCommissionRecord(data) {
    return Fetch.post('/admin/account/coin-market-commission-page', data)
  }

  // 合约 - 交易 - 返佣记录 -合计
  static nowQueryCommissionSum(data) {
    // return Fetch.post('/admin/account/contract/queryCommissionSum', data);
    return Fetch.post('/admin/account/coin-market-commission-total', data)
  }
  // 合约 - 划转记录
  static getContractTransferPage(data) {
    return Fetch.post('/admin/account/contract/transfer-page', data)
  }

  // 体验金券
  // 体验金券 - 盈亏数据统计- 统计
  static getCouponProfitStatistics(data) {
    return Fetch.post('/admin/account/coupon/profit/statistics', data)
  }

  // 体验金券 - 盈亏数据统计 -列表
  static getProfitRecord(data) {
    return Fetch.post('/admin/account/query/coupon/profit/record', data)
  }

  // 体验金券 - 体验金账号 -列表
  static getExperienceDetail(data) {
    return Fetch.post('/admin/account/contract/experience/detail', data)
  }

  // 体验金券 - 体验金券 -列表
  static getQueryExperienceList(data) {
    return Fetch.post('/admin/account/contract/query/experienceList', data)
  }
  // 体验金券 - 体验金券 -新增
  static createExperience(data) {
    return Fetch.post('/admin/account/contract/create/experience', data)
  }
  // 体验金券 - 体验金券 -编辑
  static editExperience(data) {
    return Fetch.post('/admin/account/contract/edit/experience', data)
  }

  // 体验金券 - 体验金券 -删除
  static deleteExperience(data) {
    return Fetch.post('/admin/account/contract/delete/experience', data)
  }
  // 体验金券 - 体验金券 -改变状态
  static editExperienceStatus(data) {
    return Fetch.post('/admin/account/contract/change/experienceStatus', data)
  }

  // 体验金券 - 体验金券 批量发券
  static batchGrantExperience(data) {
    return Fetch.post('/admin/account/contract/user/batchGrantExperience', data)
  }

  // 体验金券 - 活动 - 列表
  static getActivityList(data) {
    return Fetch.post('/admin/account/contract/query/activityList', data)
  }
  // 体验金券 - 触发条件 - 列表
  static getAllTriggerCondition(data) {
    return Fetch.post('/admin/account/contract/getAllTriggerCondition', data)
  }
  // 体验金券 - 触发条件 - 新列表
  static getAllTriggerConditionNew(data) {
    return Fetch.post('/admin/account/get/all-condition', data)
  }

  // 体验金券 - 条件触发条件 - 编辑
  static editVoucherParameters(data) {
    return Fetch.post('/admin/account/edit/condition', data)
  }
  // 体验金券 - 条件触发条件 - 添加
  static addVoucherParameters(data) {
    return Fetch.post('/admin/account/create/condition', data)
  }

  // 体验金券 - 活动的体验金券 - 列表
  static getAllExperienceNew(data) {
    return Fetch.post('/admin/account/contract/getAllExperience', data)
  }
  // 体验金券 - 活动的体验金券 - 新建
  static createActivity(data) {
    return Fetch.post('/admin/account/contract/create/activity', data)
  }
  // 体验金券 - 活动的体验金券 - 编辑
  static editActivity(data) {
    return Fetch.post('/admin/account/contract/edit/activity', data)
  }
  // 体验金券 - 活动的体验金券 - 删除
  static deleteActivity(data) {
    return Fetch.post('/admin/account/contract/delete/activity', data)
  }
  // 体验金券 - 活动的体验金券 - 改变状态
  static changeActivityStatus(data) {
    return Fetch.post('/admin/account/contract/change/activityStatus', data)
  }
  // 体验金券 - 活动的体验金券 - 发奖
  static setGrantExperience(data) {
    return Fetch.post('/admin/account/contract/user/grantExperience', data)
  }
  // 体验金券 - 发放记录
  static grantExperienceList(data) {
    return Fetch.post('/admin/account/contract/query/grantExperienceList', data)
  }
  // 运营管理 - 抽奖 - 抽奖任务列表
  static getAlltask(data) {
    return Fetch.post('/admin/account/activity/get-all-task', data)
  }

  // 体验金券 - 条件参数设置  - 列表
  static getVoucherParameters(data) {
    return Fetch.post('/admin/user/get/giveCoinConfig', data)
  }

  // 体验金券 - 尊贵会员名额管理  - 列表
  static getVoucherVipUserList(data) {
    return Fetch.post('/admin/account/quota/query-list', data)
  }
  // 体验金券 - 尊贵会员名额管理  - 添加
  static addVoucherVipUserList(data) {
    return Fetch.post('/admin/user/grant/quota', data)
  }
  // 体验金券 - 尊贵会员名额详情  -  列表
  static getVoucherVipUserDetails(data) {
    return Fetch.post('/admin/user/quota/detail', data)
  }

  // 工单管理 - 上币列表
  static getCurrencyOnline(data) {
    return Fetch.post('/admin/account/currency/online', data)
  }
  // 工单管理 - 上币列表 - 编辑
  static getCurrencyOnlineStatus(data) {
    return Fetch.post('/admin/account/currency/online/status', data)
  }

  // 抽奖 - 中奖记录
  static getuserRecordList(data) {
    return Fetch.post('/admin/account/activity/prize/user/record/list', data)
  }
  // 抽奖 - 中奖记录- 编辑
  static getPrizeUserRecord(data) {
    return Fetch.post('/admin/account/activity/prize/user/record', data)
  }

  // 模拟 模拟领取记录 模拟领取记录
  static getRecordMimicList(data) {
    return Fetch.post('/admin/account/analog/query-amount-list', data)
  }
  // 模拟 模拟领取记录 模拟配置记录
  static getColumnMimicList(data) {
    return Fetch.post('/admin/account/analog/get-parameter-list', data)
  }
  // 模拟 模拟领取记录 模拟配置添加
  static addColumnMimic(data) {
    return Fetch.post('/admin/account/analog/create-set-parameter', data)
  }
  // 模拟 模拟领取记录 模拟配置添加
  static editColumnMimic(data) {
    return Fetch.post('/admin/account/analog/edit-set-parameter', data)
  }
  // 模拟 模拟领取记录 模拟配置一键清空
  static emptyColumnMimic(data) {
    return Fetch.post('/admin/account/analog/empty-amount', data)
  }
  // 模拟 模拟领取记录 模拟配置一键撤单
  static cancelColumnMimic(data) {
    return Fetch.post('/admin/contract-mock/cancel/trust-by-coin-market', data)
  }
  // 模拟 模拟领取记录 模拟配置一键平仓
  static closeColumnMimic(data) {
    return Fetch.post('/admin/contract-mock/close/trust-by-coin-market', data)
  }
  // 模拟 模拟领取记录 模拟用户列表
  static getUserListMimic(data) {
    return Fetch.post('/admin/user/analog/get-user-list', data)
  }
  // 模拟 模拟领取记录 模拟用户列表
  static changeUserStatusMimic(data) {
    return Fetch.post('/admin/user/analog/change-status', data)
  }
  // 模拟 分析师管理 分析师列表
  static getAnalystMimicList(data) {
    return Fetch.post('/admin/user/analog/get-analyst-list', data)
  }

  // 模拟 分析师管理 分析师列表 -> 批量添加分析师
  static batchAddAnalyst(data) {
    return Fetch.post('/admin/user/analog/batchAddAnalyst', data)
  }

  // 模拟 分析师管理 添加分析师
  static addAnalystMimicList(data) {
    return Fetch.post('/admin/user/analog/add-analyst', data)
  }
  // 模拟 分析师管理 编辑分析师
  static editAnalystMimicList(data) {
    return Fetch.post('/admin/user/analog/edit-analyst', data)
  }
  // 模拟 分析师管理 分析师详情
  static getAnalystMimicDetail(data) {
    return Fetch.post('/admin/user/analog/get-analyst-detail', data)
  }
  // 模拟 分析师管理 分析师资产信息
  static getAnalystMimicAccount(data) {
    return Fetch.post('/admin/account/analog/query-analyst-account', data)
  }
  // 模拟 分析师管理 获取区号
  static getCountryCode(data) {
    return Fetch.post('/admin/user/query/country-code', data)
  }
  // 模拟 分析师管理 获取特殊调整列表
  static getAccountMimicList(data) {
    return Fetch.post('/admin/account/analog/get-analyst-list', data)
  }
  // 模拟 分析师管理 创建特殊调整
  static addAccountMimic(data) {
    return Fetch.post('/admin/account/analog/create-analyst-order', data)
  }
  // 模拟 分析师管理 创建特殊调整
  static getAccountMimicTotal(data) {
    return Fetch.post('/admin/account/analog/get-analyst-sum', data)
  }

  // /admin/account/analog/batch-create-analyst-order
  // 模拟 分析师管理 批量创建特殊调整
  static batchCreateAnalystOrder(data) {
    return Fetch.post('/admin/account/analog/batch-create-analyst-order', data)
  }

  // 模拟 分析师管理 审核通过拒绝
  static passCancelAccountMimic(data) {
    return Fetch.post('/admin/account/analog/audit-analyst', data)
  }

  // 模拟 合约管理 币种列表
  static getListMarketContractcoinMarketsMock(data) {
    return Fetch.post('/admin/market-mock/contractcoinMarketsByPage', data)
  }

  // 合约币种 - 列表- 编辑
  static getUpdateMarketContractcoinMarketsMock(data) {
    return Fetch.post('/admin/market-mock/updateContractCoinMarket', data)
  }
  // 合约币种 - 列表- 增加
  static getAddMarketContractcoinMarketsMock(data) {
    return Fetch.post('/admin/market-mock/addContractCoinMarket', data)
  }

  // 模拟 普通委托账单 - 列表
  static getContractEntrustPaginationMock(data) {
    return Fetch.post('/admin/contract-mock/entrust-pagination', data)
  }

  // 模拟 计划委托账单 - 列表
  static getContractPlanEntrustPaginationMock(data) {
    return Fetch.post('/admin/contract-mock/plan-entrust-pagination', data)
  }

  // 模拟 成交记录 - 列表
  static getCloseEntrustDetailPaginationMock(data) {
    return Fetch.post('/admin/contract-mock/entrust-detail-pagination', data)
  }

  // // 模拟 持仓记录 - 列表
  // static getPositionEntrustPaginationMock(data) {
  //   return Fetch.post('/admin/account-mock/position-entrust-pagination', data);
  // }

  // 模拟 平仓记录 - 列表
  // static getClosePositionEntrustPaginationMock(data) {
  //   return Fetch.post('/admin/account-mock/close-position-entrust-pagination', data);
  // }

  // 模拟 合约资金费率记录-列表
  static getContractFundRateListMock(data) {
    return Fetch.post('/admin/contract-mock-account/contract-fund-rate-set-record-page', data)
  }

  // 模拟 合约资金费率记录-编辑
  static editContractFundRateMock(data) {
    return Fetch.post('/admin/contract-mock-account/add/contract-fund-rate-set-record', data)
  }

  // 模拟 合约资金费率设置查询-列表
  static getContractAccountListMock(data) {
    return Fetch.post('/admin/contract-mock-account/contract-fund-rate-set-page', data)
  }

  // 模拟 合约资金费率设置查询-编辑
  static editContractAccountMock(data) {
    return Fetch.post('/admin/contract-mock-account/edit/contract-fund-rate-set', data)
  }

  // 模拟 合约资金费率设置查询-增加
  static addContractAccountMock(data) {
    return Fetch.post('/admin/contract-mock-account/add/contract-fund-rate-set', data)
  }

  // 模拟 合约仓位档位-列表
  static getContractPositionGearPaginationMock(data) {
    return Fetch.post('/admin/account/mock-contract-position-gear-pagination', data)
  }

  // 模拟 合约仓位档位-增加
  static addContractPositionGearMock(data) {
    return Fetch.post('/admin/account/add/mock-contract-position-gear', data)
  }
  // 模拟 合约仓位档位- 编辑
  static editContractPositionGearMock(data) {
    return Fetch.post('/admin/account/edit/mock-contract-position-gear', data)
  }
  // 合约仓位档位- 编辑
  static editContractPositionGearMock1(data) {
    return Fetch.post('/admin/account/edit/mock-contract-position-gear', data)
  }

  // 模拟 合约流水 - 列表
  static getAccountContractBillMock(data) {
    return Fetch.post('/admin/account/analog/contract/bill', data)
  }

  // 模拟 合约资产 - 列表
  static getContractAccountMock(data) {
    return Fetch.post('/admin/account/analog/contract/account', data)
  }

  // 合约 代理 代理商列表
  static getAgentList(data) {
    return Fetch.post('/admin/user/contract/agent/list', data)
  }

  // 合约 代理 新增代理]
  static addAgent(data) {
    return Fetch.post('/admin/user/contract/create/agent', data)
  }

  // 合约 代理 修改代理
  static updateAgent(data) {
    return Fetch.post('/admin/user/contract/edit/agent', data)
  }

  // 合约 代理商详情 基本信息
  static getAgentInfo(data) {
    return Fetch.post('/admin/user/contract/agent/basic/info', data)
  }

  // 合约 代理商详情 团队信息
  static getAgentTeamInfo(data) {
    return Fetch.post('/admin/user/contract/agent/team/info', data)
  }

  // 合约 代理商详情 资产信息
  static getAgentAssetsInfo(data) {
    return Fetch.post('/admin/account/contract/agent/account/info', data)
  }

  // 合约 代理层级关系
  static getAgentRelation(data) {
    return Fetch.post('/admin/user/contract/query-agent-relation', data)
  }

  // 合约 编辑费率
  static editRate(data) {
    return Fetch.post('/admin/user/contract/edit-rate', data)
  }

  // 合约 持仓记录 统计
  static positionContractTotal(data) {
    return Fetch.post('/admin/account/position-total', data)
  }

  // 合约 平仓记录 统计
  static closeContractTotal(data) {
    return Fetch.post('/admin/account/close-position-total', data)
  }

  // 合约 代理管理 用户监控列表
  static getUserMonitorList(data) {
    return Fetch.post('/admin/account/windcontrol/normal-user-list', data)
  }

  // 合约 代理管理 用户监控列表 一键移出监控
  static userMonitorRemoveAll(data) {
    return Fetch.post('/admin/account/windcontrol/remove-all-user', data)
  }

  // 合约 代理管理 用户监控列表 移出某个用户监控
  static userMonitorRemove(data) {
    return Fetch.post('/admin/account/windcontrol/remove-user', data)
  }

  // 合约 代理管理 用户监控列表 获取代理的余额
  static getMonitorAgentAmount(data) {
    return Fetch.post('/admin/account/windcontrol/get-agent-amount', data)
  }

  // 合约 代理管理 用户监控列表 补充保证金
  static userMonitorAdd(data) {
    return Fetch.post('/admin/account/windcontrol/add-agent-margin', data)
  }

  // 合约 代理管理 代理监控列表
  static getAgentMonitorList(data) {
    return Fetch.post('/admin/account/windcontrol/agent-list', data)
  }

  // 红包 红包列表 列表
  static getRedPacketList(data) {
    return Fetch.post('/admin/account/red/query-red-list', data)
  }

  // 红包 红包列表 红包领取列表
  static getRedPacketInfoList(data) {
    return Fetch.post('/admin/account/red/query-receive-list', data)
  }

  // 红包 红包币种设置 列表
  static getRedPacketCoinList(data) {
    return Fetch.post('/admin/account/red/query-coin-list', data)
  }

  // 红包 红包币种设置 添加
  static addRedPacketCoin(data) {
    return Fetch.post('/admin/account/red/add-coin', data)
  }

  // 红包 红包币种设置 编辑
  static editRedPacketCoin(data) {
    return Fetch.post('/admin/account/red/edit-coin', data)
  }

  // 红包 红包主题 列表
  static getredPacketSubjectList(data) {
    return Fetch.post('/admin/account/red/query-theme-list', data)
  }

  // 红包 红包币种设置 添加
  static addRedPacketSubject(data) {
    return Fetch.post('/admin/account/red/add-theme', data)
  }

  // 红包 红包币种设置 编辑
  static editRedPacketSubject(data) {
    return Fetch.post('/admin/account/red/edit-theme', data)
  }

  // 短信平台查询
  static getSmsPlatform(data) {
    return Fetch.post('/admin/user/query/switch/sms-platform', data)
  }

  // 短信平台切换
  static switchSmsPlatform(data) {
    return Fetch.post('/admin/user/switch/sms-platform', data)
  }

  // 模拟盘设置开关
  static setMoniSwitch(data) {
    return Fetch.post('/admin/user/edit/analog/switch', data)
  }

  // 模拟盘z展示开关
  static getMoniSwitch(data) {
    return Fetch.post('/admin/user/query/analog/switch', data)
  }

  // 合约管理/代理管理/代理手续费返佣记录 合计
  static apportionRecordSum(data) {
    return Fetch.post('/admin/account/agent-captain-coin-market-commission-total', data)
  }

  // 点卡 点卡资产 列表
  static getTicketCardList(data) {
    return Fetch.post('/admin/account/red/query-red-list', data)
  }

  // 点卡 点卡资产 列表 统计
  static getTicketCardListTotal(data) {
      return Fetch.post('/admin/account/red/query-red-list', data)
    }

    // 点卡 点卡资产 列表 统计
    <<
    << << < HEAD
    // static getTicketCardListTotal(data) {
    //   return Fetch.post('/admin/account/red/query-red-list', data)
    // }
    ===
    === =
    static getTicketCardListTotal(data) {
      return Fetch.post('/admin/account/red/query-red-list', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 点卡 用户详情 重置谷歌
  static apiEditGoogleCode(data) {
    return Fetch.post('/admin/user/edit/google-verify', data)
  }

  // 出入金管理 出入金统计 列表
  static getInOutGoldInfoList(data) {
    return Fetch.post('/admin/account/user/coin-statistics', data)
  }

  // 出入金管理 出入金统计 统计
  static getInOutGoldInfoTotal(data) {
    return Fetch.post('/admin/account/user/coin-statistics-total', data)
  }
  // 出入金管理 币币出入金 列表
  static getCoinInOutGoldList(data) {
    return Fetch.post('/admin/account/gold/in-and-out', data)
  }

  // 出入金管理 币币出入金 统计
  static getCoinInOutGoldTotal(data) {
    return Fetch.post('/admin/account/gold/in-and-out-total', data)
  }

  // 出入金管理 法币出入金 列表
  static getFiatCoinInOutGoldList(data) {
    return Fetch.post('/admin/account/otc/in-and-out', data)
  }

  // 出入金管理 法币出入金 统计
  static getFiatCoinInOutGoldTotal(data) {
    return Fetch.post('/admin/account/otc/in-and-out-total', data)
  }

  // 出入金管理 合约出入金 列表
  static getContractInOutGoldList(data) {
    return Fetch.post('/admin/account/contract/in-and-out', data)
  }

  // 出入金管理 合约出入金 统计
  static getContractInOutGoldTotal(data) {
    return Fetch.post('/admin/account/contract/in-and-out-total', data)
  }

  // 用户管理 有效用户列表 列表
  static getValidatedUserList(data) {
    return Fetch.post('/admin/account/user/effective-user-account', data)
  }

  // 用户管理 有效用户列表 有效用户详情 资产信息
  static getValidatedUserAccount(data) {
    return Fetch.post('/admin/account/user/coin-list', data)
  }

  // 代理管理 代理商列表 根据UID获取可释放保证金数量
  static apiGetAgentBondAmount(data) {
    return Fetch.post('/admin/account/windcontrol/get-agent-bond-amount', data)
  }

  // 代理管理 代理商列表 释放保证金数量
  static apiReleaseAgentMargin(data) {
    return Fetch.post('/admin/account/windcontrol/release-agent-margin', data)
  }

  // 系统管理 域名管理 列表
  static apiGetDomainNameList(data) {
    return Fetch.post('/admin/user/domain-name-page', data)
  }

  // 系统管理 域名管理 添加域名
  static apiSetAddDomainName(data) {
    return Fetch.post('/admin/user/add/domain-name', data)
  }

  // 系统管理 域名管理 编辑域名
  static apiSetUpdateDomainName(data) {
    return Fetch.post('/admin/user/edit/domain-name', data)
  }

  // 系统管理 域名管理 删除域名
  static apiSetDeleteDomainName(data) {
    return Fetch.post('/admin/user/delete/domain-name', data)
  }

  // 用户管理/实名认证配置 获取信息
  static apiGetCertificationConfig(data) {
    return Fetch.post('/admin/user/get/SysVerificationConfig', data)
  }

  // 用户管理/实名认证配置 修改信息
  static apiUpdateCertificationConfig(data) {
    return Fetch.post('/admin/user/update/SysVerificationConfig', data)
  }

  // 合约管理 api管理 apikey设置 列表
  static getApiKeyConfigList(data) {
    return Fetch.post('/admin/user/app-key-page', data)
  }

  // 合约管理 api管理 apikey设置 添加
  static addApiKeyConfig(data) {
    return Fetch.post('/admin/user/add/app-key', data)
  }

  // 合约管理 api管理 apikey设置 编辑
  static updateApiKeyConfigSwitch(data) {
    return Fetch.post('/admin/user/edit/app-key', data)
  }

  // 合约管理 api管理 apikey设置 删除
  static delApiKeyConfig(data) {
    return Fetch.post('/admin/user/delete/app-key', data)
  }

  // 币种管理 小额资产展示管理 修改
  static updateSmallAmountShow(data) {
    return Fetch.post('/admin/account/update-small-assets-display', data)
  }

  // 币种管理 小额资产展示管理 信息
  static getSmallAmountShow(data) {
      return Fetch.post('/admin/account/query/querySmallAssetsDisplay', data)
    }

    // 运营管理/体验金券管理/条件参数设置 新增
    <<
    << << < HEAD
    // static addVoucherParameters(data) {
    //   return Fetch.post('/admin/account/create/condition', data)
    // }

    // 运营管理/体验金券管理/条件参数设置 编辑
    // static editVoucherParameters(data) {
    //   return Fetch.post('/admin/account/edit/condition', data)
    // }
    ===
    === =
    static addVoucherParameters(data) {
      return Fetch.post('/admin/account/create/condition', data)
    }

  // 运营管理/体验金券管理/条件参数设置 编辑
  static editVoucherParameters(data) {
      return Fetch.post('/admin/account/edit/condition', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 系统管理/维护管理 列表
  static getMaintenanceList(data) {
    return Fetch.post('/user/MaintenanceManagementList', data)
  }

  // 系统管理/维护管理 修改
  static editMaintenance(data) {
    return Fetch.post('/user/UpdateMaintenanceManagement', data)
  }

  // 币种管理--交易对列表 一个含有是否支持合约的接口
  static getSymbolListSupportContract(data) {
    return Fetch.post('/market/plate/coinMarkets', data)
  }

  //  币种管理  板块专区管理 删除
  static delPlateAreaList(data) {
    return Fetch.post('/market/plate/del', data)
  }

  // 币种管理  板块专区管理 列表
  static getPlateAreaList(data) {
    return Fetch.post('/market/plate/find', data)
  }

  // 币种管理  板块专区管理 添加
  static addPlateArea(data) {
    return Fetch.post('/market/plate/add', data)
  }

  // 币种管理  板块专区管理 编辑
  static updatePlateArea(data) {
    return Fetch.post('/market/plate/edit', data)
  }

  // 代理管理 保证金流水 列表
  static getEarnestMoneyList(data) {
    return Fetch.post('/account/contract/query-coin-change-expand', data)
  }

  // 系统管理 人员管理 架构树
  static apiGetStructureTreeList(data) {
    return Fetch.post('/admin/user/structureTreeList', data)
  }

  // 系统管理 人员管理 权限列表 删除菜单
  static apiDelPeopleManagementList(data) {
    return Fetch.post('/admin/user/delete/sys-user', data)
  }

  // 运营管理/体验金券管理/活动列表 获取 邀请 和 净划入 type1 ,2  的触发条件
  static getSpecialTriggerCondition(data) {
      return Fetch.post('/admin/account/contract/user/getAllConditionByType', data)
    }

    // 运营管理/体验金券管理/活动列表 获取 邀请 和 净划入 type1 ,2  的触发条件
    <<
    << << < HEAD
    // static getSpecialTriggerCondition(data) {
    //   return Fetch.post('/admin/account/contract/user/getAllConditionByType', data)
    // }
    ===
    === =
    static getSpecialTriggerCondition(data) {
      return Fetch.post('/admin/account/contract/user/getAllConditionByType', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 运营管理/体验金券管理/活动列表 通过条件id获取对应的所有触发条件
  static getSpecialTriggerById(data) {
    return Fetch.post('/admin/account/contract/user/getAllTriggerById', data)
  }

  // 用户管理/迁移邀请关系 列表
  static apiGetMoveRelationshipList(data) {
    return Fetch.post('/admin/user/userRelationChange/queryUserRelationChangeList', data)
  }

  // 用户管理/迁移邀请关系 添加
  static apiAddMoveRelationshipList(data) {
    return Fetch.post('/admin/user/userRelationChange/addRelationChange', data)
  }

  // 用户管理/迁移邀请关系 初审
  static apiUpdateFirstAuditStatus(data) {
    return Fetch.post('/admin/user/userRelationChange/updateFirstAuditStatus', data)
  }

  // 用户管理/迁移邀请关系 复审
  static apiUpdateReviewAuditStatus(data) {
    return Fetch.post('/admin/user/userRelationChange/updateReviewAuditStatus', data)
  }

  // 用户管理/ 获取风控参数配置
  static apiGetRiskConfig(data) {
    return Fetch.post('/admin/user/cro/getBlastControlConfig', data)
  }
  // 用户管理/ 编辑 风控参数配置
  static apiEditRiskConfig(data) {
    return Fetch.post('/admin/user/cro/updateBlastControlConfig', data)
  }

  // 用户管理/ 获取 风控记录 列表
  static apiGetriskListList(data) {
    return Fetch.post('/admin/user/cro/getLimitRecordInfoByPage', data)
  }

  // 用户管理/ 获取 风控记录 详情
  static apiGetriskListInfo(data) {
    return Fetch.post('/admin/user/cro/getLimitRecordInfoById', data)
  }

  // 用户管理/ 获取 风控记录 编辑
  static apiEditriskList(data) {
    return Fetch.post('/admin/user/cro/updateRecordStatus', data)
  }

  // 系统管理 人员管理 根据id获取角色列表
  static apiGetPeopleManagementListById(data) {
    return Fetch.post('/admin/user/sys-user-list', data)
  }

  // 系统管理 域名管理 列表
  static apiGetDomainNameFixedList(data) {
    return Fetch.post('/admin/user/other-domain-name-page', data)
  }

  // 系统管理 域名管理 添加域名
  static apiSetAddDomainNameFixed(data) {
    return Fetch.post('/admin/user/add/other-domain-name', data)
  }

  // 系统管理 域名管理 编辑域名
  static apiSetUpdateDomainNameFixed(data) {
    return Fetch.post('/admin/user/edit/other-domain-name', data)
  }

  // 系统管理 域名管理 删除域名
  static apiSetDeleteDomainNameFixed(data) {
    return Fetch.post('/admin/user/delete/other-domain-name', data)
  }

  // 代理管理 代理列表 参数配置
  static apiParamsConfirmOp(data) {
    return Fetch.post('/admin/user/delete/other-domain-name', data)
  }

  // 系统管理--登录
  static login(data) {
    return Fetch.postlogin('/admin/user/login', data)
  }

  // 系统管理--登录(新)
  static newLogin(data) {
      return Fetch.postlogin('/admin/user/newlogin', data)
    }

    <<
    << << < HEAD
    // // 系统管理  架构树
    // static apiGetStructureTreeList(data) {
    //   return Fetch.post('/admin/user/structureTreeList', data)
    // }
    ===
    === =
    // 系统管理  架构树
    static apiGetStructureTreeList(data) {
      return Fetch.post('/admin/user/structureTreeList', data)
    } >>>
    >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133

  // 系统管理 人员管理 左侧结构
  static apiGetPeopleManagementList(data) {
    return Fetch.post('/admin/user/sys-role-all', data)
  }

  // 系统管理 人员管理 权限列表 添加人员
  static apiAddUserPeopleManagementList(data) {
    return Fetch.post('/admin/user/add/sys-user', data)
  }

  // 系统管理 人员管理 权限列表 编辑人员
  static apiEditUserPeopleManagementList(data) {
    return Fetch.post('/admin/user/edit/sys-user', data)
  }

  // 系统管理 人员管理 权限列表 人员开关
  static apiSwitchUserPeopleManagementList(data) {
    return Fetch.post('/admin/user/edit/sys-user-status', data)
  }

  // 系统管理 人员管理 权限列表 删除人员
  static apiDeleteUserPeopleManagement(data) {
    return Fetch.post('/admin/user/delete/sys-user', data)
  }

  // 系统管理 人员管理 权限列表 删除部门
  static apiDeletePeopleManagement(data) {
    return Fetch.post('/admin/user/delete/sys-role', data)
  }

  // 系统管理 人员管理 权限列表 添加子部门
  static apiAddPeopleManagementList(data) {
    return Fetch.post('/admin/user/add/sys-role', data)
  }

  // 系统管理 人员管理 权限列表 编辑子部门
  static apiEditPeopleManagementList(data) {
    return Fetch.post('/admin/user/edit/sys-role', data)
  }

  // 商务层级关系列表
  static apiGetBusinessRelationList(data) {
    return Fetch.post('/admin/user/contract/query-business-relation', data)
  }

  // 商务手续费返佣列表
  static apiGetBusinessRefundRecordList(data) {
    return Fetch.post('/admin/account/business-coin-market-commission-page', data)
  }

  // 商务手续费返佣列表 合计
  static apiGetBusinessRefundRecordSum(data) {
    // return Fetch.post('/admin/account/contract/queryCommissionSum', data);
    return Fetch.post('/admin/account/business-coin-market-commission-total', data)
  }

  // 代理商列表  商务返佣参数设置 查询
  static apiGetRebateConfig(data) {
    return Fetch.post('/admin/user/contract/agent/getMaxCommissionPercent', data)
  }

  // 代理商列表  商务返佣参数设置 设置
  static apiSetRebateConfig(data) {
    return Fetch.post('/admin/user/contract/agent/setMaxCommissionPercent', data)
  }

  // 代理商列表  代理商级别 获取
  static apiGetAgentLevel(data) {
    return Fetch.post('/admin/user/contract/agent/init', data)
  }

  // 代理商列表  代理返佣参数设置 查询
  static apiGetAgentRebateConfig(data) {
    return Fetch.post('/admin/user/contract/agent/getAgentMaxCommissionPercent', data)
  }

  // 代理商列表  代理返佣参数设置 设置
  static apiSetAgentRebateConfig(data) {
    return Fetch.post('/admin/user/contract/agent/setAgentMaxCommissionPercent', data)
  }

  // 财务管理/充币记录 获取链
  static apiGetRechargeChainName(data) {
    return Fetch.post('/admin/account/coin/chain-list', data)
  }

  // 系统管理 人员管理 模糊搜索
  static apiPeopleManagementSearch(data) {
    return Fetch.post('/admin/user/keyword-search', data)
  }

  // 高频配置 查询
  static apiGetHighFrequencyConfig(data) {
    return Fetch.post('/user/monitorUserActions/queryRiskSet', data)
  }

  // 高频配置 编辑
  static apiEditHighFrequencyConfig(data) {
    return Fetch.post('/user/monitorUserActions/setRiskSetParam', data)
  }

  // 高频监控 列表
  static apiGetHighFrequencyMonitorList(data) {
    return Fetch.post('/user/monitorUserActions/queryHighFreqMonitorInfoList', data)
  }

  // 高频监控 一键移出
  static apiHighFrequencyMonitorRemoveAll(data) {
    return Fetch.post('/user/monitorUserActions/updateAllStatus', data)
  }

  // 高频监控 移出监控
  static apiHighFrequencyMonitorRemove(data) {
    return Fetch.post('/user/monitorUserActions/updateStatus', data)
  }

  // 币支付管理/充币记录 合计
  static apiGetRechargePayTotal(data) {
    return Fetch.post('/admin/account/payment/deposit/sum', data)
  }

  // 合约管理/交易管理/合约用户列表 列表
  static getContractUserList(data) {
    return Fetch.post('/admin/account/contract/user', data)
  }

  // 高频配置 币种管理/免实名提币管理 查询
  static apiGetRealNameFreeExtract(data) {
    return Fetch.post('/admin/user/query-withdraw-info', data)
  }

  // 高频配置 币种管理/免实名提币管理 编辑
  static apiEditRealNameFreeExtract(data) {
    return Fetch.post('/admin/user/set-withdraw', data)
  }

  // 合约管理/交易管理/合约用户列表 合计
  static apiGetContractUserTotal(data) {
    return Fetch.post('/admin/account/contract/user/statis', data)
  }

  // 运营管理/单点登录白名单管理 列表
  static getSsoWhiteListList(data) {
    return Fetch.post('/admin/user/sso_whiteList_info_page', data)
  }

  // 运营管理/单点登录白名单管理 添加
  static addSsoWhiteList(data) {
    return Fetch.post('/admin/user/add/sso_whiteList_info', data)
  }

  // 运营管理/单点登录白名单管理 编辑
  static editSsoWhiteList(data) {
    return Fetch.post('/admin/user/edit/sso_whiteList_info', data)
  }

  // 运营管理/单点登录白名单管理 删除
  static deleteSsoWhiteList(data) {
    return Fetch.post('/admin/user/delete/sso_whiteList_info', data)
  }

  // 合约管理/交易管理/合约币种 一键撤单
  static coinContractAllCancel(data) {
    return Fetch.post('/contract/cancel/all/trust', data)
  }
  // 合约管理/交易管理/合约币种 一键平仓
  static coinContractAllClose(data) {
    return Fetch.post('/contract/all/order', data)
  }

  // 币种管理/交易对管理 一键删除K线
  static pairsOnekeyDelete(data) {
    return Fetch.post('/market/delete/kLine/collect', data)
  }

  // 币种管理/交易对管理 一键拉取K线
  static pairsOnekeyPull(data) {
    return Fetch.post('/admin/robot/history-Lists', data)
  }

  // 币种管理/交易对管理 一键更新K线
  static pairsOnekeyUpdate(data) {
    return Fetch.post('/market/kLine/reload/redis', data)
  }

  // 财务管理/充币记录 通知钱包重新归集
  static apiRechargeMessage(data) {
    return Fetch.post('/wallet/user/recollect', data)
  }

  // 合约管理 交易所管理 合约币种 一键拉取K线
  static contractOnekeyPull(data) {
    return Fetch.post('/admin/robot/contract/history-Lists', data)
  }

  // 币种管理/K线列表 状态审核
  static apiCheckKlineList(data) {
    return Fetch.post('/market/updateKLineCheckInfo', data)
  }

  // 用户管理 用户列表 详情 出入金列表
  static apiGetInOutGoldList(data) {
    return Fetch.post('/admin/account/query/statistics', data)
  }

  // 用户管理 检测初审通过
  static checkAmountWithHot(data) {
    return Fetch.post('/admin/account/checkAmountWithHot', data)
  }

  // 商户接单配置(列表)
  static apiGetMerchantsList(data) {
    return Fetch.post('/admin/user/otc/query/order-list', data)
  }

  // 商户限额配置编辑保存
  static getEditSave(data) {
    return Fetch.post('/admin/user/otc/detail/CashWithdrawalLimit', data)
  }

  // 商户接单配置(修改状态)
  static editMerchantsStatus(data) {
    return Fetch.post('/admin/user/otc/change/status', data)
  }

  // 商户接单配置(配置详情页)
  static getConfigDetail(data) {
    return Fetch.post('/admin/user/otc/detail/channel-advertiser', data)
  }

  // 商户接单配置(返回当前商户未添加的所有承兑商)
  static noAddMerchantsAdvertiser(data) {
    return Fetch.post('/admin/user/otc/get-all-advertiser', data)
  }

  // 商户接单配置(添加渠道或承兑商)
  static addMerchants(data) {
    return Fetch.post('/admin/user/otc/add/channel-advertiser', data)
  }

  // 商户接单配置(返回当前商户未添加的所有渠道)
  static noAddMerchantsChannel(data) {
    return Fetch.post('/admin/user/otc/get-all-channel', data)
  }

  // 商户接单配置(删除渠道或承兑商)
  static deleteMerchants(data) {
    return Fetch.post('/admin/user/otc/delete/channel-advertiser', data)
  }

  // 商户接单配置(删除渠道或承兑商)
  static apiGetKlineListPages(data) {
    return Fetch.post('/market/KLineCheckInfoList', data)
  }

  // 币种管理/K线列表 状态审核
  static apiSaveEditKline(data) {
    return Fetch.post('/market/saveKLineCheckInfo', data)
  }

  // 币种管理/K线列表 状态审核
  static apiGetKlineInfo(data) {
    return Fetch.post('/market/getKLineInfo', data)
  }

  static apiSendEmail(data) {
    return Fetch.post('/user/pay/phone-or-email/code', data)
  }

  static editAcceptanceupdate(data) {
    return Fetch.post('/admin/user/pay/edit/advertiser', data)
  }

  // 承兑商管理--- 代理商列表
  static getAcceptanceTransRecord(data) {
    return Fetch.post('/admin/user/pay/advertiser/list', data)
  }

  // 合约管理/订单管理/普通委托账单 一键撤销
  static apiGeneralEntrustContractOneKeyRepeal(data) {
    return Fetch.post('/admin/contract/cancel/trust-by-uids', data)
  }

  // 法币管理/承兑商与商户管理/承兑商代理关系

  // 承兑商管理（承兑商关系) 层级 table
  static findAcceptanceChild(data) {
    return Fetch.post('/admin/user/pay/get-top-advertiser', data)
  }

  // 承兑商管理-代理商关系表格展开列表
  static getAcceptanceUserRatesOnly(data) {
    return Fetch.post('/admin/user/pay/advertiser/get-down-user-rates', data)
  }

  // 承兑商管理 -代理商关系--修改收益(新版)
  static updateDownAcceptanceRates(data) {
    return Fetch.post('/admin/user/pay/rate/advertiser', data)
  }

  // 法币管理/承兑商与商户管理/承兑商设置

  // 法币 - 匹配权重- 列表
  static getUserGetMerchantInfo(data) {
    return Fetch.post('/admin/user/getMerchantInfo', data)
  }

  // 承兑商管理（代理商管理）---代理商创建
  static acceptanceCreateAgent(data) {
    return Fetch.post('/admin/user/pay/add/advertiser', data)
  }

  // 承兑商管理---是否允许开设代理
  static activeAcceptanceSwitchMerchant(data) {
    return Fetch.post('/coin/pay/admin/user/pay/create/advertiser/switch', data)
  }

  // 法币 - 匹配权重- 修改
  static getUserUpdateMerchantInfo(data) {
    return Fetch.post('/admin/user/updateMerchantInfo', data)
  }

  static getPayQueryInfo(data) {
    return Fetch.post('/admin/account/pay/query/info', data)
  }

  // 法币管理/承兑商与商户管理/渠道管理  // 创建渠道
  static createAcceptanceChannel(data) {
    return Fetch.post('/admin/user/pay/create/channel', data)
  }

  // 法币管理/承兑商与商户管理/渠道管理  // 列表
  static getAcceptanceChannelList(data) {
    return Fetch.post('/admin/user/pay/query/channel-list', data)
  }

  // // 财务管理/热钱包提币管理 删除
  // static apiDelHotWalletExtract(data) {
  //   return Fetch.post('/account/withdrawconfig/del', data)
  // }

  // 财务管理/热钱包提币管理 列表
  static apiGetHotWalletExtractList(data) {
    return Fetch.post('/account/withdrawconfig/find', data)
  }

  // 财务管理/热钱包提币管理 添加
  static apiAddHotWalletExtract(data) {
    return Fetch.post('/account/withdrawconfig/add', data)
  }

  // 财务管理/热钱包提币管理 编辑
  static apiEditHotWalletExtract(data) {
    return Fetch.post('/account/withdrawconfig/edit', data)
  }

  // 财务管理/热钱包提币管理 查看余额
  static apiHotWalletExtractCheckChain(data) {
    return Fetch.post('/wallet/user/gethot', data)
  }

  // 财务管理/热钱包提币管理 查看余额
  static apiHotWalletExtractCheckDetail(data) {
    return Fetch.post('/wallet/user/gethotdetail', data)
  }

  // 财务管理/热钱包提币管理 获取链和币
  static apiGetChainCoinList(data) {
    return Fetch.post('/account/withdrawconfig/getchaincoin', data)
  }

  // 财务管理/财务数据统计列表
  static getFinancialStatisticsList(data) {
    return Fetch.post('/admin/account/pay/deposit/query/recharge/statistics', data)
  }

  // 合约管理/交易管理/合约账单 导出excel
  static apiBillContractListExport(data) {
    return Fetch.postExcel('/admin/account/contract-user-bill-export', data)
  }

  // 合约管理/仓位管理/平仓记录 导出excel
  static apiCloseContractListExport(data) {
    return Fetch.postExcel('/admin/account/close-position-entrust-export', data)
  }

  // 代理管理/手动发放代理名额设置 列表
  static apiGetAgentPlacesConfigsList(data) {
    return Fetch.post('/user/grant/agent/quota/page', data)
  }

  // 代理管理/手动发放代理名额设置 列表
  static apiAddAgentPlacesConfigsList(data) {
    return Fetch.post('/user/issuingAgentQuota', data)
  }

  // 代理管理/手动发放代理名额设置 详情
  static apiGetAgentPlacesConfigsDetalsById(data) {
    return Fetch.post('/user/grant/agent/quota/list', data)
  }

  // 代理与商务可直接设置返佣比例参数设置 获取
  static apiGetBusinessAgentParams(data) {
    return Fetch.post('/admin/user/contract/agent/getDirectAgentMaxCommissionPercent', data)
  }

  // 代理与商务可直接设置返佣比例参数设置 获取
  static apiSetBusinessAgentParams(data) {
    return Fetch.post('/admin/user/contract/agent/setDirectAgentMaxCommissionPercent', data)
  }

  // 财务管理/财务数据统计列表 合计
  static apiGetFinancialStatisticsSum(data) {
    return Fetch.post('/admin/account/pay/deposit/query/recharge/statistics/sum', data)
  }

  // 用户管理/用户列表 语言列表
  static apiGetLanguageList(data) {
    return Fetch.post('/admin/user/language/list', data)
  }

  // 用户管理/用户列表详情 语言列表  修改
  static apiUpdateLanguage(data) {
    return Fetch.post('/admin/user/update/language', data)
  }

  // 财务管理/特殊调账管理 批量上传特殊调账模板下载
  static apiSpreconDownLoadDefaultExcel(data) {
    return Fetch.postExcel('/admin/account/special-reconciliation-excel/download', data)
  }

  // 财务管理/特殊调账管理 查询资产
  static apiSpreconGetAccount(data) {
    return Fetch.post('/admin/account/user-account-count', data)
  }

  // 财务管理/特殊调账管理 批量审核
  static apiSpreconBatchCheck(data) {
    return Fetch.post('/admin/account/audit/special-reconciliation-batch', data)
  }

  // 财务管理/特殊调账管理 审核按钮是否隐藏
  static apiSpreconCheckBtnIsShow(data) {
    return Fetch.post('/admin/account/special-reconciliation/switch', data)
  }

  // 运营管理/短信发送记录 列表
  static apiGetMsgSendRecordList(data) {
    return Fetch.post('/admin/user/message/record/list', data)
  }

  // 合约管理/交易管理/合约账单 合约账单统计
  static getBillContractTotal(data) {
    return Fetch.post('/admin/account/contract-user-bill-total', data)
  }

  // 代理管理/代理端权限管理 列表
  static apiGetAgentPermissionConfigsList(data) {
    return Fetch.post('/admin/user/proxyAuthority/page', data)
  }

  // 代理管理/代理端权限管理 添加
  static apiAddAgentPermissionConfigs(data) {
    return Fetch.post('/admin/user/proxyAuthority/add', data)
  }

  // 代理管理/代理端权限管理 编辑
  static apiEditAgentPermissionConfigs(data) {
    return Fetch.post('/admin/user/proxyAuthority/update', data)
  }

  // 代理管理/代理端权限管理 删除
  static apiDelAgentPermissionConfigs(data) {
    return Fetch.post('/admin/user/proxyAuthority/delete', data)
  }

  // 币汇 币种
  static apiGetCoinForexList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryForexCoinList', data) ===
      === =
      return Fetch.post('/forex/background/queryForexCoinList', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/交易报表 列表
  static getCoinForexDealListList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryLiquidateBackground', data) ===
      === =
      return Fetch.post('/forex/background/queryLiquidateBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/交易报表 快速导出excel
  static getCoinForexDealListExport(data) {
    <<
    << << < HEAD
    return Fetch.postExcel('/forex/admin/downloadLiquidateBackground', data) ===
      === =
      return Fetch.postExcel('/forex/background/downloadLiquidateBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/交易报表 列表
  static getCoinForexEntrustListList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryOrderBackground', data) ===
      === =
      return Fetch.post('/forex/background/queryOrderBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/交易报表 快速导出excel
  static getCoinForexEntrustListExport(data) {
    <<
    << << < HEAD
    return Fetch.postExcel('/forex/admin/downloadOrderBackground', data) ===
      === =
      return Fetch.postExcel('/forex/background/downloadOrderBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/未平仓报表 列表
  static getCoinForexNotCloseListList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryNoLiquidateBackground', data) ===
      === =
      return Fetch.post('/forex/background/queryNoLiquidateBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/币汇交易管理/未平仓报表 快速导出excel
  static getCoinForexNotCloseListExport(data) {
    <<
    << << < HEAD
    return Fetch.postExcel('/forex/admin/downloadNoLiquidateBackground', data) ===
      === =
      return Fetch.postExcel('/forex/background/downloadNoLiquidateBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/机器人管理/币汇机器人 列表
  static getCoinForexRobotListList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryRobotBackground', data) ===
      === =
      return Fetch.post('/forex/background/queryRobotBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/机器人管理/币汇机器人 保存
  static apiSaveCoinForexRobotList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/saveRobotBackground', data) ===
      === =
      return Fetch.post('/forex/background/saveRobotBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/财务管理/汇率查询 列表
  static getCoinForexRateList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/selectForexDealCoinBackground', data) ===
      === =
      return Fetch.post('/forex/background/selectForexDealCoinBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/财务管理/汇率查询 保存
  static apiSaveCoinForexRate(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/saveForexDealCoinBackground', data) ===
      === =
      return Fetch.post('/forex/background/saveForexDealCoinBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/交易对设置管理/币汇交易对设置 列表
  static getCoinForexPairsConfigsList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryForexCoinList', data) ===
      === =
      return Fetch.post('/forex/background/queryForexCoinList', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/财务管理/汇率查询 保存
  static apiEditCoinForexPairsConfigs(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/updateForexCoin', data) ===
      === =
      return Fetch.post('/forex/background/updateForexCoin', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/财务管理/汇率查询 保存
  static apiCoinForexPairsConfigsSwitch(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/updateTradeAndHeadBlock', data) ===
      === =
      return Fetch.post('/forex/background/updateTradeAndHeadBlock', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/财务管理/币汇流水 列表
  static getCoinForexAccountList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryForexFlowList', data) ===
      === =
      return Fetch.post('/forex/background/queryForexFlowList', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/交易管理/净值监控 列表
  static getCoinForexNetWorthList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryNetWorthBackground', data) ===
      === =
      return Fetch.post('/forex/background/queryNetWorthBackground', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/交易品种设置/隔夜费设置 列表
  static getCoinForexPairsNightFeeList(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/queryForexCoinRateList', data) ===
      === =
      return Fetch.post('/forex/background/queryForexCoinRateList', data) >>>
        >>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
  }

  // 币汇管理/交易品种设置/隔夜费设置 添加/编辑
  static apiEditCoinForexPairsNightFee(data) {
    <<
    << << < HEAD
    return Fetch.post('/forex/admin/updateForexCoinRateBatch', data)
  }

  // 合约管理/风控管理/用户监控列表 列表
  static getContractUserMonitorList(data) {
    return Fetch.post('/user/risk/query', data)
  }

  // 合约管理/风控管理/用户监控列表 列表
  // static getContractUserMonitorList(data) {
  //   return Fetch.post('/admin/user/list', data)
  // }

  // 合约管理/风控管理/用户监控列表 列表
  static apiGetearningsRecordTotal(data) {
      return Fetch.post('/admin/account/contract/profit/dayDetailStat', data)
    }


    ===
    === =
    return Fetch.post('/forex/background/updateForexCoinRateBatch', data)
} >>>
>>> > 48 d9482aef0fe4d3bd232ea4bf2e0c5cd12e8133
}
