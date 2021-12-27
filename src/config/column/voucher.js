const voucherListCol = [
  {
    label: '体验金券ID',
    prop: 'id',
  },
  {
    label: '体验金券名称',
    prop: 'experienceName',
  },
  {
    label: '关联副标题',
    prop: 'experienceSubtitle',
  },
  {
    label: '资产类型',
    prop: 'assetsType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'USDT永续合约', val: 1 }],
  },
  {
    label: '合约交易对',
    prop: 'coinMarket',
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '全仓', val: 0 }, { text: '逐仓', val: 1 }],
  },
  {
    label: '委托类型',
    prop: 'entrustType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '市价', val: 0 }],
  },
  {
    label: '最高杠杆倍数',
    prop: 'leverage',
  },
  {
    label: '面值',
    prop: 'faceValue',
  },
  {
    label: '资产币种',
    prop: 'marketIdmy',
  },
 

  {
    label: '有效期',
    width: 310,
    arr: ['effectiveStartTime', 'effectiveEndTime'],
    type: 'textArr',
    join: '至',
  },


  {
    label: '创建时间',
    prop: 'createTime',
    width: 180,
  },
  {
    label: '启用',
    prop: 'status',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 240,
    btnGroup: [
      {
        label: '批量发券',
        fn: 'batchGrant',
        type: 'primary',
        alias: 'batchGrant',
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'del',
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const voucherListColNoBtn = [
  {
    label: '体验金券ID',
    prop: 'id',
  },
  {
    label: '体验金券名称',
    prop: 'experienceName',
  },
  {
    label: '关联副标题',
    prop: 'experienceSubtitle',
  },
  {
    label: '资产类型',
    prop: 'assetsType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'USDT永续合约', val: 1 }],
  },
  {
    label: '合约交易对',
    prop: 'coinMarket',
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '全仓', val: 0 }, { text: '逐仓', val: 1 }],
  },
  {
    label: '委托类型',
    prop: 'entrustType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '市价', val: 0 }],
  },
  {
    label: '最高杠杆倍数',
    prop: 'leverage',
  },
  {
    label: '面值',
    prop: 'faceValue',
  },
  {
    label: '资产币种',
    prop: 'marketIdmy',
  },
  {
    label: '有效期',
    width: 310,
    arr: ['effectiveStartTime', 'effectiveEndTime'],
    type: 'textArr',
    join: '至',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: 180,
  },
];

const voucherListConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '体验金券名称',
    prop: 'experienceName',
    value: '',
  },
];

const voucherActivityCol = [
  {
    label: '活动ID',
    prop: 'id',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },
  {
    label: '活动类型',
    prop: 'activityType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '注册', val: 0 }, { text: '净入金', val: 1 }, { text: '邀请', val: 2 }, { text: '抽奖', val: 3 }, { text: '实名认证', val: 4 }, { text: '净入金和开仓交易额', val: 5 }, { text: '新手操作指引', val: 6 }],
  },
  {
    label: '触发条件 - 关联送券副标题 - 送券数量',
    type: 'labelArr',
    typeDetail: 'stringlistMore',
    prop: 'activityVOList',
    arrValue: ['触发条件', '关联送券副标题', '送券数量'],
    arrProp: ['triggerCondition', 'experienceSubtitle', 'couponNumber'],
    width: 620,
  },
  {
    label: '发放模式',
    prop: 'grantMode',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手动模式', val: 0 }, { text: '自动模式', val: 1 }],
  },
  {
    label: '发券频率(h)',
    prop: 'grantDay',
  },
  {
    label: '总成本限制(USDT)',
    prop: 'amountLimit',
  },

  {
    label: '活动任务有效时间',
    width: 310,
    arr: ['effectiveStartTime', 'effectiveEndTime'],
    type: 'textArr',
    join: '至',
  },

  {
    label: '创建时间',
    prop: 'createTime',
    width: 180,
  },
  {
    label: '启用',
    prop: 'status',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 220,
    btnGroup: [
      {
        label: '发奖',
        fn: 'preReview',
        isPop: false,
        filter_key: 'activityType',
        filter_status: 0,
        type: 'success',
        alias: 'preReview',
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
        noIsClick: true,
      },
      {
        label: '删除',
        fn: 'del',
        type: 'primary',
        alias: 'del',
        noIsClick: true,
      },
    ],
  },
];

const voucherActivityColNoBtn = [
  {
    label: '活动ID',
    prop: 'id',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },
  {
    label: '活动类型',
    prop: 'activityType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '注册', val: 0 }, { text: '净入金', val: 1 }, { text: '邀请', val: 2 }, { text: '抽奖', val: 3 }, { text: '实名认证', val: 4 }, { text: '净入金和开仓交易额', val: 5 }, { text: '新手操作指引', val: 6 }],
  },
  {
    label: '触发条件 - 关联送券副标题 - 送券数量',
    type: 'labelArr',
    typeDetail: 'stringlistMore',
    prop: 'activityVOList',
    arrValue: ['触发条件', '关联送券副标题', '送券数量'],
    arrProp: ['triggerCondition', 'experienceName', 'couponNumber'],
    width: 620,
  },
  {
    label: '发放模式',
    prop: 'grantMode',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手动模式', val: 0 }, { text: '自动模式', val: 1 }],
  },
  {
    label: '发券频率（h）',
    prop: 'grantDay',
  },
  {
    label: '总成本限制(USDT)',
    prop: 'amountLimit',
  },

  {
    label: '活动任务有效时间',
    width: 310,
    arr: ['effectiveStartTime', 'effectiveEndTime'],
    type: 'textArr',
    join: '至',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: 180,
  },
];

const voucherActivityConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '活动名称',
    prop: 'activityName',
    value: '',
  },
];

const voucherDataCol = [
  {
    label: '使用总券数',
    prop: 'useCouponTotal',
  },
  {
    label: '亏算总券数',
    prop: 'lossCouponTotal',
  },
  {
    label: '盈利总券数',
    prop: 'profitCouponTotal',
  },
  {
    label: '失效总券数',
    prop: 'invalidCouponTotal',
  },
  {
    label: '发放总人数',
    prop: 'gainUserTotal',
  },
  {
    label: '使用总人数',
    prop: 'useUserTotal',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '合约多仓盈亏（USDT）',
    prop: 'longWarehouseProfit',
  },
  {
    label: '合约空仓盈亏（USDT）',
    prop: 'shortWarehouseProfit',
  },
  {
    label: '合约统计盈亏（USDT）',
    prop: 'warehouseProfit',
  },
  {
    label: '所属时间',
    prop: 'createDate',
  },
];

const voucherDataConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '合约币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const voucherExperienceCol = [
  {
    label: '账户',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  // {
  //   label: '当前可用USDT',
  //   prop: 'balance',
  // },
  {
    label: '累计发放（张）',
    prop: 'giveCouponTotal',
  },
  {
    label: '累计发放（USDT）',
    prop: 'giveUsdtTotal',
  },
  {
    label: '累计回收（张）',
    prop: 'recoveryCouponTotal',
  },
  {
    label: '累计回收（USDT）',
    prop: 'recoveryUsdtTotal',
  },
  {
    label: '当前持仓金额',
    prop: 'currentWarehouseAmount',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 410,
    btnGroup: [
      {
        label: '发放记录',
        fn: 'grant',
        type: 'primary',
        alias: 'grant',
      },
      {
        label: '成交记录',
        fn: 'deal',
        type: 'primary',
        alias: 'deal',
      },
      {
        label: '持仓记录',
        fn: 'position',
        type: 'primary',
        alias: 'position',
      },
    ],
  },
];

const voucherGrantCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '体验金券ID',
    prop: 'experienceId',
  },
  {
    label: '体验金券面值',
    prop: 'faceValue',
  },
  {
    label: '数量',
    prop: 'couponNumber',
  },
  {
    label: '体验金币种',
    prop: 'coinMarket',
  },
  {
    label: '券状态',
    prop: 'status',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未使用', val: 0 }, { text: '已使用', val: 1 }, { text: '已失效', val: 2 }],
  },
  {
    label: '发放时间',
    prop: 'createTime',
  },
  {
    label: '使用时间',
    prop: 'useTime',
  },
  {
    label: '失效时间',
    prop: 'effectiveEndTime',
  },
];

const voucherGrantConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
  },
  {
    type: 'text',
    label: '体验金券ID',
    prop: 'experienceId',
    value: '',
  },
  {
    type: 'select',
    label: '券状态',
    prop: 'status',
    value: '',
    list: [{ label: '未使用', value: 0 }, { label: '已使用', value: 1 }, { label: '已失效', value: 2 }],
  },
];

const voucherVipUserListCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '领取类型',
    prop: 'receiveType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手动发放', val: 0 }, { text: '自动发放', val: 1 }],
  },
  {
    label: '发放名额数量',
    prop: 'count',
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
    width: 160,
    btnGroup: [
      {
        label: '详情',
        fn: 'details',
        type: 'primary',
        alias: 'details',
      },
    ],
  },
];

const voucherVipUserListColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '领取类型',
    prop: 'receiveType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手动发放', val: 0 }, { text: '自动发放', val: 1 }],
  },
  {
    label: '发放名额数量',
    prop: 'count',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },

  {
    label: '更新时间',
    prop: 'updateTime',
  },
];

const voucherVipUserListConfig = [
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '领取类型',
    prop: 'receiveType',
    value: '',
    list: [
      {
        label: '自动发放',
        value: 1,
      },
      {
        label: '手动发放',
        value: 0,
      },
    ],
  },
];

const voucherVipUserDetailsCol = [
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

export {
  voucherVipUserDetailsCol,
  voucherListCol,
  voucherListColNoBtn,
  voucherListConfig,
  voucherActivityCol,
  voucherActivityColNoBtn,
  voucherActivityConfig,
  voucherDataCol,
  voucherDataConfig,
  voucherExperienceCol,
  voucherGrantCol,
  voucherGrantConfig,
  voucherVipUserListCol,
  voucherVipUserListColNoBtn,
  voucherVipUserListConfig,
};
