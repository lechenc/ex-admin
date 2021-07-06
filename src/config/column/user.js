/*
 * @Author: your name
 * @Date: 2020-04-10 10:23:24
 * @LastEditTime: 2020-09-28 18:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\user.js
 */

const userCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '普通用户', val: 1 },
      { text: '系统用户', val: 100 },
      { text: '机器人', val: 3 },
      { text: '分析师', val: 41 },
      { val: 2, text: '后台管理员用户' },
      { val: 101, text: '收益账号' },
      { val: 102, text: '成本账号' },
      { val: 103, text: '支出账号' },
      { val: 104, text: '支出子账号' },
      { val: 105, text: '收入账号' },
      { val: 106, text: '合约收益账号' },
      { val: 20, text: 'TP商户账号' },
      { val: 21, text: '顶级代理商账号' },
      { val: 22, text: '代理商账号' },
      { val: 23, text: '平台商户账号' },
      { val: 24, text: '顶级广告商' },
      { val: 25, text: '广告商代理' },
      { val: 31, text: '商务' },
      { val: 32, text: '代理' },
    ],
  },
  {
    //1 ios 2安卓 3 pc 10 用户迁移
    label: '注册来源',
    prop: 'registAppId',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: 'ios', val: 1 }, { text: '安卓', val: 2 }, { text: 'pc', val: 3 }, { text: '用户迁移', val: 10 }],
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '证件类型',
    prop: 'certificateName',
  },
  {
    label: '证件号码',
    prop: 'cardNo',
    width: '200',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '头像页',
    prop: 'cardFrontUrl',
    type: 'img',
  },
  {
    label: '国徽页',
    prop: 'cardBackUrl',
    type: 'img',
  },
  // {
  //   label: '手持证件页',
  //   prop: 'antiMoneyUrl',
  //   type: 'img',
  // },
  {
    label: '录制视频',
    prop: 'videoUrl',
    type: 'video',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  {
    label: '邀请码',
    prop: 'inviteCode',
  },
  {
    label: '邀请下级人数',
    prop: 'sonCount',
    prop2: 'sonColor',
    type: 'textOneColor',
  },
  {
    label: '设备号',
    prop: 'deviceToken',
    width: 150,
  },
  {
    label: '版本号',
    prop: 'loginVersionNum',
    width: 110,
  },
  {
    label: '注册IP',
    prop: 'registerIp',
    width: 130,
  },
  {
    label: '登录IP',
    prop: 'loginIp',
    width: 150,
  },
  {
    label: '用户上次使用时长',
    prop: 'userUsedTime',
    prop2: 'timeColor',
    width: 150,
    type: 'textColor',
  },
  {
    label: '用户累计使用时长',
    prop: 'userActiveTime',
    prop2: 'timeColor',
    width: 150,
    type: 'textColor',
  },
  {
    label: '实名认证来源',
    prop: 'verifiedSource',
    type: 'filter_myShowHide',
    filtersProp: 'userVerifiedStatus',
    filtersValue: [0, 1, 3],
    filters: [{ text: '平台', val: 1 }, { text: '阿里', val: 2 }],
  },
  {
    label: '实名审核状态',
    prop: 'userVerifiedStatus',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '高级待审核', val: 0, type: 'info' }, { text: '初级认证成功', val: 1, type: 'success' }, { text: '高级认证失败', val: 2, type: 'warning' }, { text: '未认证', val: 3, type: 'primary' }, { text: '高级认证成功', val: 4, type: 'success' }],
  },
  {
    label: '登录状态',
    prop: 'userLoginStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 0, type: 'success' }, { text: '失效', val: 1, type: 'warning' }],
  },
  {
    label: '交易状态',
    prop: 'userTradeStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '法币状态',
    prop: 'userOtcStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '提币状态',
    prop: 'userWithdrawStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    width: '100',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '120',
    btnGroup: [
      {
        label: '查看/编辑',
        fn: 'viewDetail',
        type: 'primary',
        alias: 'detail',
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'noVisible', // 表示不可见
        alias: 'edit',
      },
    ],
  },
];

const userColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '普通用户', val: 1 },
      { text: '系统用户', val: 100 },
      { text: '机器人', val: 3 },
      { text: '分析师', val: 41 },
      { val: 2, text: '后台管理员用户' },
      { val: 101, text: '收益账号' },
      { val: 102, text: '成本账号' },
      { val: 103, text: '支出账号' },
      { val: 104, text: '支出子账号' },
      { val: 105, text: '收入账号' },
      { val: 106, text: '合约收益账号' },
      { val: 20, text: 'TP商户账号' },
      { val: 21, text: '顶级代理商账号' },
      { val: 22, text: '代理商账号' },
      { val: 23, text: '平台商户账号' },
      { val: 24, text: '顶级广告商' },
      { val: 25, text: '广告商代理' },
      { val: 31, text: '商务' },
      { val: 32, text: '代理' },
    ],
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '证件类型',
    prop: 'certificateName',
  },
  {
    label: '证件号码',
    prop: 'cardNo',
    width: '200',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '头像页',
    prop: 'cardFrontUrl',
    type: 'img',
  },
  {
    label: '国徽页',
    prop: 'cardBackUrl',
    type: 'img',
  },
  // {
  //   label: '手持证件页',
  //   prop: 'antiMoneyUrl',
  //   type: 'img',
  // },
  {
    label: '录制视频',
    prop: 'videoUrl',
    type: 'video',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  {
    label: '邀请码',
    prop: 'inviteCode',
  },
  {
    label: '邀请下级人数',
    prop: 'sonCount',
    prop2: 'sonColor',
    type: 'textOneColor',
  },
  {
    label: '设备号',
    prop: 'deviceToken',
    width: 150,
  },
  {
    label: '版本号',
    prop: 'loginVersionNum',
    width: 110,
  },
  {
    label: '注册IP',
    prop: 'registerIp',
    width: 130,
  },
  {
    label: '登录IP',
    prop: 'loginIp',
    width: 150,
  },
  {
    label: '用户上次使用时长',
    prop: 'userUsedTime',
    prop2: 'timeColor',
    width: 150,
    type: 'textColor',
  },
  {
    label: '用户累计使用时长',
    prop: 'userActiveTime',
    prop2: 'timeColor',
    width: 150,
    type: 'textColor',
  },

  {
    label: '实名认证来源',
    prop: 'verifiedSource',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '平台', val: 1 }, { text: '阿里', val: 2 }],
  },

  {
    label: '实名审核状态',
    prop: 'userVerifiedStatus',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '高级待审核', val: 0, type: 'info' }, { text: '初级认证成功', val: 1, type: 'success' }, { text: '高级认证失败', val: 2, type: 'warning' }, { text: '未认证', val: 3, type: 'primary' }, { text: '高级认证成功', val: 4, type: 'success' }],
  },
  {
    label: '登录状态',
    prop: 'userLoginStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 0, type: 'success' }, { text: '失效', val: 1, type: 'warning' }],
  },
  {
    label: '交易状态',
    prop: 'userTradeStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '法币状态',
    prop: 'userOtcStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '提币状态',
    prop: 'userWithdrawStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '正常', val: 1, type: 'success' }, { text: '失效', val: 0, type: 'warning' }],
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    width: '100',
  },
];

const userConfig = [
  {
    type: 'date_rank',
    label: '注册时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'userType',
    value: '',
    list: [
      { label: '普通用户', value: 1 },
      { label: '系统用户', value: 100 },
      { label: '机器人', value: 3 },
      { label: '分析师', value: 41 },
      { value: 2, label: '后台管理员用户' },
      { value: 101, label: '收益账号' },
      { value: 102, label: '成本账号' },
      { value: 103, label: '支出账号' },
      { value: 104, label: '支出子账号' },
      { value: 105, label: '收入账号' },
      { value: 106, label: '合约收益账号' },
      { value: 20, label: 'TP商户账号' },
      { value: 21, label: '顶级代理商账号' },
      { value: 22, label: '代理商账号' },
      { value: 23, label: '平台商户账号' },
      { value: 24, label: '顶级广告商' },
      { value: 25, label: '广告商代理' },
      { value: 31, label: '商务' },
      { value: 32, label: '代理' },
    ],
  },
  {
    type: 'text',
    label: '手机',
    prop: 'phone',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '邮箱',
    prop: 'email',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '姓名',
    prop: 'realName',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '身份证号码',
    prop: 'cardNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '邀请码',
    prop: 'inviteCode',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '实名审核状态',
    prop: 'verifiedAudit',
    value: '',
    list: [{ label: '高级待审核', value: 0 }, { label: '初级认证成功', value: 1 }, { label: '高级认证失败', value: 2 }, { label: '未认证', value: 3 }, { label: '高级认证成功', value: 4 }],
  },

  {
    type: 'select',
    label: '登录状态',
    prop: 'userLoginStatus',
    value: '',
    list: [{ label: '正常', value: 0 }, { label: '失效', value: 1 }],
  },
  {
    type: 'select',
    label: '提币状态',
    prop: 'userWithdrawStatus',
    value: '',
    list: [{ label: '正常', value: 1 }, { label: '失效', value: 0 }],
  },
  {
    type: 'text',
    label: '设备号',
    prop: 'deviceToken',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '版本号',
    prop: 'loginVersionNum',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '登录IP',
    prop: 'loginIp',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '注册IP',
    prop: 'registerIp',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '交易状态',
    prop: 'userTradeStatus',
    value: '',
    list: [{ label: '正常', value: 1 }, { label: '失效', value: 0 }],
  },
  {
    type: 'select',
    label: '法币状态',
    prop: 'userOtcStatus',
    value: '',
    list: [{ label: '正常', value: 1 }, { label: '失效', value: 0 }],
  },
];

const userColOtcList = [
  {
    label: '支付方式',
    prop: 'payTypeName',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '账号',
    prop: 'num',
  },
  {
    label: '银行名称',
    prop: 'bankName',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
  },
  {
    label: '二维码',
    prop: 'qrCode',
    type: 'img',
  },
  {
    label: '是否启用',
    prop: 'isShow',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启用', val: 0 }, { text: '启用', val: 1 }],
  },
  // {
  //     label: "操作",
  //     prop: "action",
  //     type: "action",
  //     width: 290,
  //     btnGroup: [
  //       {
  //         label: "立即停用",
  //         fn: "close",
  //         isPop: false,
  //         filter_key: "isShow",
  //         filter_status: 1,
  //         type: "danger",
  //       },
  //       {
  //         label: "立即启用",
  //         fn: "open",
  //         isPop: false,
  //         filter_key: "isReview",
  //         filter_status: 0,
  //         type: "success",
  //       },
  //     ],
  //   }
];

const userColInOutGoldList = [
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '币币入金',
    prop: 'coinIn',
  },
  {
    label: '法币入金',
    prop: 'otcIn',
  },
  {
    label: '合约入金',
    prop: 'contractIn',
  },
  {
    label: '币币出金',
    prop: 'coinOut',
  },
  {
    label: '法币出金',
    prop: 'otcOut',
  },
  {
    label: '合约出金',
    prop: 'contractOut',
  },
  {
    label: '出入金合计数量',
    prop: 'totalInOut',
  },
];

const validatedUserlistCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 1, text: '普通用户' }, { val: 20, text: 'TP商户账号' }, { val: 21, text: '顶级代理商账号' }, { val: 22, text: '代理商账号' }, { val: 24, text: '顶级广告商' }, { val: 25, text: '广告商代理' }, { val: 31, text: '商务端' }, { val: 32, text: '代理' }],
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  {
    label: '邀请码',
    prop: 'inviteCode',
  },
  {
    label: '邀请下级人数',
    prop: 'sonCount',
  },

  {
    label: '实名状态',
    prop: 'userVerifiedStatus',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [{ text: '高级待审核', val: 0, type: 'info' }, { text: '初级认证成功', val: 1, type: 'success' }, { text: '高级认证失败', val: 2, type: 'warning' }, { text: '未认证', val: 3, type: 'primary' }, { text: '高级认证成功', val: 4, type: 'success' }],
  },
  {
    label: '入金状态',
    prop: 'depositStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '初级', val: 1 }, { text: '中级', val: 2 }, { text: '高级', val: 3 }, { text: '超级', val: 4 }],
  },
  {
    label: '是否尊贵会员',
    prop: 'userFlag',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: 1 }, { text: '否', val: 0 }],
  },
  {
    label: '当前资产',
    prop: 'amount',
    width: '100',
  },
  {
    label: '7天资产动向',
    prop: 'sevenDaysAmount',
    width: '100',
  },
  {
    label: '15天资产动向',
    prop: 'fifteenDaysAmount',
    width: '100',
  },
  {
    label: '30天资产动向',
    prop: 'thirtyDaysAmount',
    width: '100',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    type: 'time',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '120',
    btnGroup: [
      {
        label: '查看详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const validatedUserlistColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 1, text: '普通用户' }, { val: 20, text: 'TP商户账号' }, { val: 21, text: '顶级代理商账号' }, { val: 22, text: '代理商账号' }, { val: 24, text: '顶级广告商' }, { val: 25, text: '广告商代理' }, { val: 31, text: '商务端' }, { val: 32, text: '代理' }],
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  {
    label: '邀请码',
    prop: 'inviteCode',
  },
  {
    label: '邀请下级人数',
    prop: 'sonCount',
  },

  {
    label: '实名状态',
    prop: 'userVerifiedStatus',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [{ text: '高级待审核', val: 0, type: 'info' }, { text: '初级认证成功', val: 1, type: 'success' }, { text: '高级认证失败', val: 2, type: 'warning' }, { text: '未认证', val: 3, type: 'primary' }, { text: '高级认证成功', val: 4, type: 'success' }],
  },
  {
    label: '入金状态',
    prop: 'depositStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '初级', val: 1 }, { text: '中级', val: 2 }, { text: '高级', val: 3 }, { text: '超级', val: 4 }],
  },
  {
    label: '是否尊贵会员',
    prop: 'userFlag',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: 1 }, { text: '否', val: 0 }],
  },
  {
    label: '当前资产',
    prop: 'amount',
    width: '100',
  },
  {
    label: '7天资产动向',
    prop: 'sevenDaysAmount',
    width: '100',
  },
  {
    label: '15天资产动向',
    prop: 'fifteenDaysAmount',
    width: '100',
  },
  {
    label: '30天资产动向',
    prop: 'thirtyDaysAmount',
    width: '100',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    type: 'time',
  },
];

const validatedUserlistConfig = [
  {
    type: 'date_rank',
    label: '注册时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '用户类型',
    prop: 'userType',
    value: '',
    list: [{ label: '普通用户', value: 1 }, { value: 20, label: 'TP商户账号' }, { value: 21, label: '顶级代理商账号' }, { value: 22, label: '代理商账号' }, { value: 24, label: '顶级广告商' }, { value: 25, label: '广告商代理' }, { value: 31, label: '商务端' }, { value: 32, label: '代理' }],
  },

  {
    type: 'select',
    label: '实名状态',
    prop: 'verifiedAudit',
    value: '',
    list: [{ label: '高级待审核', value: 0 }, { label: '初级认证成功', value: 1 }, { label: '高级认证失败', value: 2 }, { label: '未认证', value: 3 }, { label: '高级认证成功', value: 4 }],
  },
  {
    type: 'onlyNumber',
    label: '手机',
    prop: 'phone',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '邮箱',
    prop: 'email',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '姓名',
    prop: 'realName',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '证据号码',
    prop: 'cardNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '邀请码',
    prop: 'inviteCode',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '入金状态',
    prop: 'depositStatus',
    value: '',
    list: [{ label: '初级', value: 1 }, { label: '中级', value: 2 }, { label: '高级', value: 3 }, { label: '超级', value: 4 }],
  },
  {
    type: 'text_rank_number',
    label: '当前资产',
    prop: 'amountMin',
    prop2: 'amountMax',
    value: [],
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '资产排序',
    prop: 'sort',
    value: '',
    list: [{ label: '正序', value: 1 }, { label: '倒序', value: 2 }],
  },
  {
    type: 'select',
    label: '是否尊贵会员',
    prop: 'userFlag',
    value: '',
    list: [{ label: '是', value: 1 }, { label: '否', value: 0 }],
  },
];

const validatedUserAccountCol = [
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '总充币',
    prop: 'rechargeAmount',
  },
  {
    label: '总提币',
    prop: 'withdrawAmount',
  },
  {
    label: '空投',
    prop: 'airdropAmount',
  },
  {
    label: '买入数量',
    prop: 'buyQuantity',
  },
  {
    label: '卖出数量',
    prop: 'sellQuantity',
  },
  {
    label: '买入金额',
    prop: 'buyAmount',
  },
  {
    label: '卖出金额',
    prop: 'sellAmount',
  },
  {
    label: '总数量',
    prop: 'totalQuantity',
  },
  {
    label: '盈亏',
    prop: 'totalAmount',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '120',
    btnGroup: [
      {
        label: '成交记录',
        fn: 'record',
        type: 'primary',
      },
    ],
  },
];

const validatedVipUserCol = [
  {
    label: '序号',
    type: 'index',
    width: 80,
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'eamil',
  },
  {
    label: '实名状态',
    prop: 'verifiedStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未认证', val: 0 }, { text: '已认证', val: 1 }],
  },
  {
    label: '入金状态',
    prop: 'inGoldCountStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }],
  },
  {
    label: '登录IP',
    prop: 'loginIp',
  },
  {
    label: '注册IP',
    prop: 'registeredIp',
  },
  {
    label: '注册时间',
    prop: 'registeredTime',
  },
];

const moveRelationshipCol = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '需迁移的UID',
    prop: 'changeUid',
  },
  {
    label: '原上级的UID',
    prop: 'formerParentUid',
  },
  {
    label: '迁移至的UID',
    prop: 'laterParentUid',
  },
  {
    label: '状态',
    prop: 'auditStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '待初审' }, { val: 1, text: '待复审' }, { val: 2, text: '初审驳回' }, { val: 3, text: '复审通过' }, { val: 4, text: '复审驳回' }],
  },
  {
    label: '提交时间',
    prop: 'createTime',
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },

  {
    label: '复审时间',
    prop: 'reviewAuditTime',
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '240',
    btnGroup: [
      {
        label: '初审',
        fn: 'firstTrial',
        filter_type: 'array',
        filter_key: 'auditStatus',
        filter_status: ['0'],
        type: 'success',
        alias: 'firstTrial',
      },

      {
        label: '复审',
        fn: 'recheck',
        filter_type: 'array',
        filter_key: 'auditStatus',
        filter_status: ['1'],
        type: 'success',
        alias: 'recheck',
      },
      {
        label: '查看详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const moveRelationshipColNoBtn = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '需迁移的UID',
    prop: 'changeUid',
  },
  {
    label: '原上级的UID',
    prop: 'formerParentUid',
  },
  {
    label: '迁移至的UID',
    prop: 'laterParentUid',
  },
  {
    label: '状态',
    prop: 'auditStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '待初审' }, { val: 1, text: '待复审' }, { val: 2, text: '初审驳回' }, { val: 3, text: '复审通过' }, { val: 4, text: '复审驳回' }],
  },
  {
    label: '提交时间',
    prop: 'createTime',
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },

  {
    label: '复审时间',
    prop: 'reviewAuditTime',
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },
];

const moveRelationshipConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startCreateTime',
    prop2: 'endCreateTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'orderId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '需迁移的UID',
    prop: 'changeUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '原上级的UID',
    prop: 'formerParentUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '迁移至的UID',
    prop: 'laterParentUid',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '状态',
    prop: 'auditStatus',
    value: '',
    list: [{ value: 0, label: '待初审' }, { value: 1, label: '待复审' }, { value: 2, label: '初审驳回' }, { value: 3, label: '复审通过' }, { value: 4, label: '复审驳回' }],
  },
];

const riskListCol = [
  // {
  //   label: '异常设备号',
  //   prop: 'devNo',
  // },
  // {
  //   label: '异常注册IP',
  //   prop: 'registerIp',
  // },
  // {
  //   label: '异常登录IP',
  //   prop: 'loginIp',
  // },
  // {
  //   label: '迁移至的UID',
  //   prop: 'laterParentUid',
  // },
  {
    label: '异常类型',
    prop: 'limitType',
    width: 160,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '异常设备' }, { val: 1, text: '异常注册IP' }, { val: 2, text: '异常登录' }],
  },

  {
    label: '异常数据',
    prop: 'serialNumber',
  },
  {
    label: '当前状态',
    prop: 'disposeStatus',
    width: 160,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '待处理' }, { val: 1, text: '已按异常处理' }, { val: 2, text: '已按正常处理' }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '处理时间',
    prop: 'disposeTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        filter_type: 'array',
        label: '编辑',
        filter_key: 'disposeStatus',
        filter_status: ['0'],
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },

      {
        label: '查看详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const riskListColNoBtn = [
  // {
  //   label: '异常设备号',
  //   prop: 'devNo',
  // },
  // {
  //   label: '异常注册IP',
  //   prop: 'registerIp',
  // },
  // {
  //   label: '异常登录IP',
  //   prop: 'loginIp',
  // },
  // {
  //   label: '迁移至的UID',
  //   prop: 'laterParentUid',
  // },
  {
    label: '异常类型',
    prop: 'limitType',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '异常设备' }, { val: 1, text: '异常注册IP' }, { val: 2, text: '异常登录' }],
  },
  {
    label: '异常数据',
    prop: 'serialNumber',
  },
  {
    label: '当前状态',
    prop: 'disposeStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '待处理' }, { val: 1, text: '已按异常处理' }, { val: 2, text: '已按正常处理' }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '处理时间',
    prop: 'disposeTime',
  },
];

const riskListConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '异常类型',
    prop: 'limitType',
    value: '',

    list: [{ value: 0, label: '异常设备' }, { value: 1, label: '异常注册IP' }, { value: 2, label: '异常登录' }],
  },

  {
    type: 'select',
    label: '当前状态',
    prop: 'disposeStatus',
    value: '',
    // 0=待处理,1=异常处理,2=正常处理
    list: [{ value: 0, label: '待处理' }, { value: 1, label: '已按异常处理' }, { value: 2, label: '已按正常处理' }],
  },
];

export {
  riskListCol,
  riskListColNoBtn,
  riskListConfig,
  moveRelationshipCol,
  moveRelationshipColNoBtn,
  moveRelationshipConfig,
  userCol,
  userColNoBtn,
  userConfig,
  userColOtcList,
  userColInOutGoldList,
  validatedUserlistCol,
  validatedUserlistColNoBtn,
  validatedUserlistConfig,
  validatedUserAccountCol,
  validatedVipUserCol,
};
