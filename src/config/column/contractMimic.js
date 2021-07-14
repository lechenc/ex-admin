import Store from '@/store';

const getRecordMimicCol = [
  {
    label: '序号',
    prop: 'id',
  },
  {
    label: '领取人UID',
    prop: 'uid',
  },
  {
    label: '领取人类型',
    prop: 'userType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '普通用户',
        val: 1,
      },
      {
        text: '分析师',
        val: 41,
      },
    ],
  },
  {
    label: '领取类型',
    prop: 'receiveType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '开通获得',
        val: 0,
      },
      {
        text: '手动领取',
        val: 1,
      },
    ],
  },
  {
    label: '奖励币种',
    prop: 'coinMarket',
  },
  {
    label: '领取数量',
    prop: 'receiveAmount',
  },
  { type: 'fixedValue', label: '领取状态', val: '已领取' },
  {
    label: '领取时间',
    prop: 'createTime',
  },
];

const getRecordMimicConfig = [
  {
    type: 'date_rank',
    label: '领取时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '序号',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '领取人UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '领取人类型',
    prop: 'userType',
    value: '',
    list: [
      {
        label: '普通用户',
        value: 1,
      },
      {
        label: '分析师',
        value: 41,
      },
    ],
  },

  {
    type: 'select',
    label: '奖励币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const columnMimicCol = [
  {
    label: '序号',
    prop: 'id',
  },
  {
    label: '奖励币种',
    prop: 'coinMarket',
  },
  {
    label: '开通模拟账户自动赠送金额',
    prop: 'openAutoAmount',
  },
  {
    label: '账号总价值低于多少金额可领取模拟金',
    prop: 'lowAmount',
  },
  {
    label: '每日每次可领取金额',
    prop: 'todayReceiveAmount',
  },

  {
    label: '每日模拟金领取开关',
    prop: 'receiveSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '关闭',
        val: 0,
      },
      {
        text: '开启',
        val: 1,
      },
    ],
  },

  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 270,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'text',
      },
      {
        label: '一键撤单',
        fn: 'cancel',
        type: 'text',
      },
      {
        label: '一键平仓',
        fn: 'close',
        type: 'text',
      },
      {
        label: '一键清空',
        fn: 'empty',
        type: 'text',
      },
    ],
  },
];

const columnMimicConfig = [
  // {
  //   type: 'date_rank',
  //   label: '领取时间',
  //   prop: 'startTime',
  //   prop2: 'endTime',
  //   value: '',
  // },
  {
    type: 'text',
    label: '序号',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '模拟币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const userlistMimicConfig = [
  {
    type: 'date_rank',
    label: '开通时间',
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
    list: [
      {
        label: '普通用户',
        value: 1,
      },
      {
        label: '分析师',
        value: 41,
      },
    ],
  },

  {
    type: 'text',
    label: '手机号',
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
    label: '证件号码',
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
    label: '实名状态',
    prop: 'verifiedAudit',
    value: '',
    list: [
      {
        label: '高级待审核',
        value: 0,
      },
      {
        label: '初级认证成功',
        value: 1,
      },
      {
        label: '高级认证失败',
        value: 2,
      },
      {
        label: '未认证',
        value: 3,
      },
      {
        label: '高级认证成功',
        value: 4,
      },
    ],
  },

  {
    type: 'select',
    label: '禁领开关',
    prop: 'receiveSwitch',
    value: '',
    list: [
      {
        label: '开启',
        value: 1,
      },
      {
        label: '关闭',
        value: 0,
      },
    ],
  },
];
const userlistMimicCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '普通用户',
        val: 1,
      },
      {
        text: '分析师',
        val: 41,
      },
    ],
  },
  {
    label: '手机',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
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
    filters: [
      {
        text: '高级待审核',
        val: 0,
      },
      {
        text: '初级认证成功',
        val: 1,
      },
      {
        text: '高级认证失败',
        val: 2,
      },
      {
        text: '未认证',
        val: 3,
      },
      {
        text: '高级认证成功',
        val: 4,
      },
    ],
  },

  {
    label: '注册IP',
    prop: 'registerIp',
  },
  {
    label: '开通时间',
    prop: 'openMockTime',
  },
  {
    label: '累计领取次数',
    prop: 'receiveCount',
  },
  {
    label: '累计领取金额',
    prop: 'receiveAmount',
  },
  {
    label: '当前总资产',
    prop: 'totalAmount',
  },
  {
    label: '禁领开关',
    prop: 'receiveSwitch',
    type: 'switch',
    fn: 'receiveSwitch',
  },
];

const analystMimicListConfig = [
  {
    type: 'onlyNumber',
    label: '分析师UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'text',
    label: '手机号',
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
    label: '关联实盘用户UID',
    prop: 'relevanceUid',
    value: '',
    placeHolder: '请输入关联实盘用户UID',
    minWidth: '125px'
  },
  {
    type: 'select',
    label: '限制登录开关',
    prop: 'loginSwitch',
    value: '',
    list: [
      {
        label: '关闭',
        value: 1,
      },
      {
        label: '开启',
        value: 0,
      },
    ],
  },
];

const analystMimicListCol = [
  {
    label: '分析师UID',
    prop: 'uid',
  },
  {
    label: '关联的实盘用户UID',
    prop: 'relevanceUid'
  },
  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '登录开关',
    prop: 'loginSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '开',
        val: 0,
      },
      {
        text: '关',
        val: 1,
      },
    ],
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
        type: 'text',
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'text',
      },
    ],
  },
];

const analystMimicListColNoBtn = [
  {
    label: '分析师UID',
    prop: 'uid',
  },
  {
    label: '关联的实盘用户UID',
    prop: 'relevanceUid'
  },
  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '登录开关',
    prop: 'loginSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '开',
        val: 0,
      },
      {
        text: '关',
        val: 1,
      },
    ],
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
        type: 'text',
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'text',
      },
    ],
  },
];

const analystMimicDetailCol = [
  {
    label: '币种',
    prop: 'coinMarket',
  },
  {
    label: '当前账户权益',
    prop: 'totalBalance',
  },
  {
    label: '委托占用保证金金额(USDT)',
    prop: 'entrustedDepositBalance',
  },
  {
    label: '多仓占用保证金金额(USDT)',
    prop: 'muchPositionDepositBalance',
  },
  {
    label: '空仓占用保证金金额(USDT)',
    prop: 'shortPositionDepositBalance',
  },
  {
    label: '历史总盈亏',
    prop: 'totalProfitAndLoss',
  },
  {
    label: '历史总调账',
    prop: 'totalAccountAdjustment',
  },
];

const positionContractMockConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'text',
    prop: 'agentId',
    value: '',
    type: 'text',
    label: '仓位ID',
    prop: 'positionId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [
      // { label: '未付款', value: 1 },
      // { label: '已付款(等待放行)', value: 2 },
    ],
  },
  {
    type: 'select',
    label: '仓位方向',
    prop: 'positionDirection',
    value: '',
    list: [
      {
        label: '多仓',
        value: 1,
      },
      {
        label: '空仓',
        value: 2,
      },
    ],
  },
  {
    type: 'text_rank',
    label: '盈亏率区间',
    prop: 'minRateReturn',
    prop2: 'maxRateReturn',
    value: [],
    placeHolder: '请输入',
  },
  {
    type: 'text_rank',
    label: '盈亏区间',
    prop: 'minPositionAveragePrice',
    prop2: 'maxPositionAveragePrice',
    value: [],
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '资金类型',
    prop: 'isExperience',
    value: '',
    list: [{ label: '本金', value: 0 }],
  },
];

const positionContractMockCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '仓位ID',
    prop: 'positionId',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '预估强平价格',
    prop: 'strongPrice',
  },
  {
    label: '保证金率',
    prop: 'marginRatio',
  },
  {
    label: '盈亏率',
    prop: 'rateReturn',
  },
  {
    label: '可平数量',
    prop: 'flatAmount',
  },
  {
    label: '待平数量',
    prop: 'waitForFlatAmount',
  },
  {
    label: '杠杆倍数',
    prop: 'leverage',
  },
  {
    label: '持仓数量',
    prop: 'positionAmount',
  },
  {
    label: '券持仓数量',
    prop: 'experienceGoldNumber',
  },
  {
    label: '开仓价',
    prop: 'positionAveragePrice',
  },
  {
    label: '未实现盈亏',
    prop: 'unRealizedProfitLoss',
  },
  {
    label: '仓位方向',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '多仓',
        val: 1,
      },
      {
        text: '空仓',
        val: 2,
      },
    ],
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '全仓',
        val: 0,
      },
      {
        text: '逐仓',
        val: 1,
      },
    ],
  },
  {
    label: '资金类型',
    prop: 'isExperience',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '本金',
        val: 0,
      },
      {
        text: '本金券（含券）',
        val: 1,
      },
    ],
  },
  {
    label: '仓位保证金',
    prop: 'fixedDeposit',
  },
  {
    label: '仓位保证金（券）',
    prop: 'experienceGold',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];
const closeContractMockCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '仓位ID',
    prop: 'positionId',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '杠杆倍数',
    prop: 'leverTimes',
  },
  {
    label: '平仓数量',
    prop: 'closeAmount',
  },
  {
    label: '开仓价',
    prop: 'positionAveragePrice',
  },
  {
    label: '平仓价',
    prop: 'closePrice',
  },
  // {
  //   label: '开仓价',
  //   prop: 'positionAveragePrice',
  // },
  // {
  //   label: '平仓委托价',
  //   prop: 'entrustPrice'
  // },
  {
    label: '已实现盈亏（USDT）',
    prop: 'realizedProfitLoss',
  },

  {
    label: '平仓方向',
    prop: 'closePositionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '平多',
        val: 1,
      },
      {
        text: '平空',
        val: 2,
      },
    ],
  },
  {
    label: '平仓类型',
    prop: 'closePosition',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '系统强平',
        val: 1,
      },
      {
        text: '用戶手动平仓',
        val: 2,
      },
    ],
  },
  {
    label: '仓位类型',
    prop: 'closePositionType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '全仓',
        val: 0,
      },
      {
        text: '逐仓',
        val: 1,
      },
    ],
  },

  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
];
const closeContractMockConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '平仓类型',
    prop: 'closePosition',
    value: '',
    list: [
      {
        label: '系统强平',
        value: 1,
      },
      {
        label: '用戶手动平仓',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '平仓方向',
    prop: 'closePositionDirection',
    value: '',
    list: [
      {
        label: '平多',
        value: 1,
      },
      {
        label: '平空',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '仓位类型',
    prop: 'positionType',
    value: '',
    list: [
      {
        label: '全仓',
        value: 0,
      },
      {
        label: '逐仓',
        value: 1,
      },
    ],
  },
  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'positionId',
    value: '',
    placeHolder: '请输入',
  },
];

const flowRecordContractMimicConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
  // {
  //   type: 'text',
  //   label: '订单号',
  //   prop: 'b251',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'select',
    label: '仓位方向',
    prop: 'positionDirection',
    value: '',
    list: [
      {
        label: '多仓',
        value: 1,
      },
      {
        label: '空仓',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    value: '',
    list: [
      {
        label: '爆仓平空',
        value: 1,
      },
      {
        label: '爆仓平多',
        value: 2,
      },
      {
        label: '平空',
        value: 3,
      },
      {
        label: '平多',
        value: 4,
      },
      {
        label: '开空手续费',
        value: 5,
      },
      {
        label: '开多手续费',
        value: 6,
      },

      {
        label: '资金费用',
        value: 9,
      },
      {
        label: '开仓手续费',
        value: 10,
      },
      {
        label: '平仓手续费',
        value: 11,
      },
      {
        label: '特殊调账',
        value: 14,
      },
      {
        label: '领取模拟金',
        value: 16,
      },
      {
        label: '赠送模拟金',
        value: 17,
      },
      {
        label: '开多',
        value: 18,
      },
      {
        label: '开空',
        value: 19,
      },
    ],
  },
];
const flowRecordContractMimicCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '币对',
    prop: 'coinMarketName',
  },
  {
    label: '仓位方向',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '多仓',
        val: 1,
      },
      {
        text: '空仓',
        val: 2,
      },
    ],
  },
  {
    label: '操作类型',
    prop: 'type',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '爆仓平空',
        val: 1,
      },
      {
        text: '爆仓平多',
        val: 2,
      },
      {
        text: '平空',
        val: 3,
      },
      {
        text: '平多',
        val: 4,
      },
      {
        text: '开空手续费',
        val: 5,
      },
      {
        text: '开多手续费',
        val: 6,
      },

      {
        text: '资金费用',
        val: 9,
      },
      {
        text: '开仓手续费',
        val: 10,
      },
      {
        text: '平仓手续费',
        val: 11,
      },
      {
        text: '特殊调账',
        val: 14,
      },
      {
        text: '领取模拟金',
        val: 16,
      },
      {
        text: '赠送模拟金',
        val: 17,
      },
      {
        text: '开多',
        val: 18,
      },
      {
        text: '开空',
        val: 19,
      },
    ],
  },
  {
    label: '变动张数',
    prop: 'positionAmount',
  },
  {
    label: '变动金额',
    prop: 'amount',
  },
  // {
  //   label: '变动前合约保证金',
  //   prop: 'beforeTotalAmount'
  // },
  // {
  //   label: '变动后合约保证金',
  //   prop: 'afterTotalAmount'
  // },
  // {
  //   label: "操作资金类型",
  //   prop: "a83",
  //   width:100,
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "卖", val: 1 }, { text: "已启动", val: 2 }],
  // },
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
];

const accountMimicListConfig = [
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'orderNo',
    value: '',
    placeHolder: '请输入',
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
    label: '币对',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '状态',
    prop: 'tradeStatus',
    value: '',
    list: [
      {
        label: '成功',
        value: 1,
      },
      {
        label: '失败',
        value: 2,
      },
      {
        label: '待审核',
        value: 0,
      },
    ],
  },
  {
    type: 'select',
    label: '账号类型',
    prop: 'accountType',
    value: '',
    list: [
      {
        label: '分析师实盘合约账户',
        value: 7,
      },
      {
        label: '全部',
        value: '',
      },
    ],
  },
];
const accountMimicListCol = [
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: 'UID',
    prop: 'uid',
  },

  {
    label: '账户类型',
    prop: 'accountType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '分析师实盘合约账户',
        val: 7,
      },
    ],
  },
  {
    label: '币对',
    prop: 'coinName',
  },

  {
    label: '数量',
    prop: 'amount',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '成功',
        val: 1,
      },
      {
        text: '失败',
        val: 2,
      },
      {
        text: '待审核',
        val: 0,
      },
    ],
  },
  {
    label: '申请时间',
    prop: 'applyTime',
  },
  {
    label: '审核时间',
    prop: 'auditTime',
  },
  {
    label: '审核人',
    prop: 'auditUserName',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 270,
    btnGroup: [
      {
        label: '审核通过',
        fn: 'pass',
        type: 'primary',
        noIsClick: true,
      },
      {
        label: '驳回',
        fn: 'cancel',
        type: 'danger',
        noIsClick: true,
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'info',
      },
    ],
  },
];

const billContractMimicCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '仓位ID',
    prop: 'positionId',
    type: 'myShowHide',
    filters: 'type',
    filtersValue: [14,16, 17],
  },
  {
    label: '仓位方向',
    prop: 'positionDirection',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '多仓',
        val: 1,
      },
      {
        text: '空仓',
        val: 2,
      },
    ],
  },
  {
    label: '数量（张）',
    prop: 'positionAmount',
    type: 'myShowHide',
    filters: 'type',
    filtersValue: [16, 17],
  },
  {
    label: '金额',
    prop: 'amount',
  },
  {
    label: '类型',
    prop: 'type',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '爆仓平空',
        val: 1,
      },
      {
        text: '爆仓平多',
        val: 2,
      },
      {
        text: '平空',
        val: 3,
      },
      {
        text: '平多',
        val: 4,
      },
      {
        text: '开空',
        val: 5,
      },
      {
        text: '开多',
        val: 6,
      },

      {
        text: '资金费用',
        val: 9,
      },
      {
        text: '开仓手续费',
        val: 10,
      },
      {
        text: '平仓手续费',
        val: 11,
      },
      {
        text: '特殊调账',
        val: 14,
      },
      {
        text: '领取模拟金',
        val: 16,
      },
      {
        text: '赠送模拟金',
        val: 17,
      },
    ],
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '全仓',
        val: 0,
      },
      {
        text: '逐仓',
        val: 1,
      },
    ],
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];

const billContractMimcConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '仓位ID',
    prop: 'positionId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [
      // { label: '未付款', value: 1 },
      // { label: '已付款(等待放行)', value: 2 },
      // { label: '已完成', value: 3 },
      // { label: '取消', value: 4 },
      // { label: '申述中', value: 5 },
    ],
  },
  {
    type: 'select',
    label: '仓位方向',
    prop: 'positionDirection',
    value: '',
    list: [
      {
        label: '多仓',
        value: 1,
      },
      {
        label: '空仓',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    value: '',
    list: [
      {
        label: '爆仓平空',
        value: 1,
      },
      {
        label: '爆仓平多',
        value: 2,
      },
      {
        label: '平空',
        value: 3,
      },
      {
        label: '平多',
        value: 4,
      },
      {
        label: '开空',
        value: 5,
      },
      {
        label: '开多',
        value: 6,
      },

      {
        label: '资金费用',
        value: 9,
      },
      {
        label: '开仓手续费',
        value: 10,
      },
      {
        label: '平仓手续费',
        value: 11,
      },
      {
        label: '特殊调账',
        value: 14,
      },
      {
        label: '领取模拟金',
        value: 16,
      },
      {
        label: '赠送模拟金',
        value: 17,
      },
    ],
  },
  {
    type: 'select',
    label: '仓位类型',
    prop: 'positionType',
    value: '',
    list: [
      {
        label: '全仓',
        value: 0,
      },
      {
        label: '逐仓',
        value: 1,
      },
    ],
  },
];

const contractFundRateMimicCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '日期',
    prop: 'numberOfPeriods',
    type: 'time',
  },
  {
    label: '预计资金费率',
    prop: 'estimatedCapitalRate',
  },
  {
    label: '实际资金费率',
    prop: 'actualCapitalRate',
  },
  {
    label: '合计费用金额',
    prop: 'totalCostAmount',
  },
  {
    label: '多头费用金额',
    prop: 'longChargeAmount',
  },
  {
    label: '空头费用金额',
    prop: 'shortChargeAmount',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 160,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];

const contractFundRateMimicConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
];

const treatyAssetsContractMimicCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '币对',
    prop: 'coinMarketName',
  },
  {
    label: '总资产（USDT）',
    prop: 'totalBalance',
  },
  {
    label: '委托累加占用保证金金额（USDT）',
    prop: 'entrustedDepositBalance',
  },
  {
    label: '多仓累加占用保证金金额（USDT）',
    prop: 'muchPositionDepositBalance',
  },
  {
    label: '空仓占用保证金金额（USDT）',
    prop: 'shortPositionDepositBalance',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];

const treatyAssetsContractMimicConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const coinContractMimicCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '初始价',
    prop: 'initPrice',
  },
  {
    label: '计价币',
    prop: 'marketCoinName',
  },
  {
    label: '基础币',
    prop: 'baseCoinName',
  },
  {
    label: '合约面值',
    prop: 'faceValue',
  },
  // {
  //   label: 'Maker费率',
  //   prop: 'makerFee',
  // },
  {
    label: '手续费率',
    prop: 'takerFee',
  },
  // {
  //   label: '杠杆倍数',
  //   width: '180',
  //   prop: 'lever'
  // },
  // {
  //   label: '单个用户最大持仓张数（多仓）',
  //   prop: 'maxLongPosition',
  // },
  // {
  //   label: '单个用户最大持仓张数（空仓）',
  //   prop: 'maxShortPosition',
  // },
  // {
  //   label: '单笔下单数量限制（开仓）',
  //   prop: 'quantityLimitOpenPosition',
  // },
  // {
  //   label: '单笔下单数量限制（平仓）',
  //   prop: 'quantityLimitClosePosition',
  // },
  {
    label: '委托价格浮动限制',
    prop: 'priceFloatingLimit',
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision',
  },
  {
    label: '市价委托对应档位',
    prop: 'gears',
  },
  {
    label: '排序',
    prop: 'sortNo',
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon',
  },
  {
    label: '交易',
    prop: 'onDealing',
    type: 'switch',
    fn: 'trtrade',
    alias: 'trtrade',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];

const coinContractMimicColNoBtn = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '初始价',
    prop: 'initPrice',
  },
  {
    label: '计价币',
    prop: 'marketCoinName',
  },
  {
    label: '基础币',
    prop: 'baseCoinName',
  },
  {
    label: '合约面值',
    prop: 'faceValue',
  },
  // {
  //   label: 'Maker费率',
  //   prop: 'makerFee',
  // },
  {
    label: '手续费率',
    prop: 'takerFee',
  },
  // {
  //   label: '杠杆倍数',
  //   width: '180',
  //   prop: 'lever'
  // },
  // {
  //   label: '单个用户最大持仓张数（多仓）',
  //   prop: 'maxLongPosition',
  // },
  // {
  //   label: '单个用户最大持仓张数（空仓）',
  //   prop: 'maxShortPosition',
  // },
  // {
  //   label: '单笔下单数量限制（开仓）',
  //   prop: 'quantityLimitOpenPosition',
  // },
  // {
  //   label: '单笔下单数量限制（平仓）',
  //   prop: 'quantityLimitClosePosition',
  // },
  {
    label: '委托价格浮动限制',
    prop: 'priceFloatingLimit',
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision',
  },
  {
    label: '市价委托对应档位',
    prop: 'gears',
  },
  {
    label: '排序',
    prop: 'sortNo',
  },
  
];




export {
  coinContractMimicCol,
  coinContractMimicColNoBtn,
  treatyAssetsContractMimicCol,
  treatyAssetsContractMimicConfig,
  contractFundRateMimicConfig,
  contractFundRateMimicCol,
  billContractMimcConfig,
  billContractMimicCol,
  accountMimicListCol,
  accountMimicListConfig,
  flowRecordContractMimicCol,
  flowRecordContractMimicConfig,
  closeContractMockCol,
  closeContractMockConfig,
  positionContractMockConfig,
  positionContractMockCol,
  getRecordMimicCol,
  getRecordMimicConfig,
  columnMimicCol,
  columnMimicConfig,
  userlistMimicConfig,
  userlistMimicCol,
  analystMimicListConfig,
  analystMimicListColNoBtn,
  analystMimicListCol,
  analystMimicDetailCol,
};
