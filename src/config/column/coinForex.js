// 币汇管理/币汇交易管理/交易报表
const coinForexDealListCol = [
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: '交易账户',
    prop: 'uid',
  },
  {
    label: '产品',
    prop: 'symbolKey',
  },

  // {
  //   label: '买或卖',
  //   prop: 'direction',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [
  //     {
  //       val: 1,
  //       text: '买',
  //     },
  //     {
  //       val: 0,
  //       text: '卖',
  //     },
  //   ],
  // },
  {
    label: '买或卖',
    prop: 'directionString',
  },
  {
    label: '盈亏',
    prop: 'profitLossString',
  },
  {
    label: '开仓时间',
    prop: 'openTime',
  },
  {
    label: '开仓价格',
    prop: 'openPriceString',
  },
  {
    label: '平仓价格',
    prop: 'closePriceString',
  },

  {
    label: '平仓类型',
    prop: 'typeString',
  },

  {
    label: '平仓时间',
    prop: 'closeTime',
  },
];

const coinForexDealListConfig = [
  {
    type: 'date_rank',
    label: '平仓时间',
    prop: 'closeStartTime',
    prop2: 'closeEndTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
  },
  {
    type: 'select',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '平仓类型',
    prop: 'type',
    value: '',
    list: [{ label: '正常平仓', value: 0 }, { label: '爆仓', value: 1 }],
  },
];

// 币汇管理/币汇交易管理/委托报表
const coinForexEntrustListCol = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '交易账户',
    prop: 'uid',
  },
  {
    label: '交易产品',
    prop: 'symbolKey',
  },
  {
    label: '交易量',
    prop: 'handNum',
  },

  // {
  //   label: '委托类型',
  //   prop: 'dealType',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [
  //     //  0：市价开仓  1：限价开仓
  //     {
  //       val: '0',
  //       text: '市价开仓',
  //     },
  //     {
  //       val: '1',
  //       text: '限价开仓',
  //     },
  //   ],
  // },
  {
    label: '委托类型',
    prop: 'dealTypeString',
  },
  {
    label: '委托价格',
    prop: 'priceString',
  },
  {
    label: '委托时间',
    prop: 'orderTime',
  },
  {
    label: '委托期限',
    prop: 'termValidityTime',
  },
];

const coinForexEntrustListConfig = [
  {
    type: 'date_rank',
    label: '委托时间',
    prop: 'orderStartTime',
    prop2: 'orderEndTime',
    value: '',
  },

  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
  },
  {
    type: 'select',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '委托类型',
    prop: 'dealType',
    value: '',
    list: [{ label: '市价开仓', value: 0 }, { label: '限价开仓', value: 1 }],
  },
];

// 币汇管理/币汇交易管理/未平仓报表
const coinForexNotCloseListCol = [
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: '交易账户',
    prop: 'uid',
  },
  {
    label: '交易产品',
    prop: 'symbolKey',
  },
  // {
  //   label: '买或卖',
  //   prop: 'direction',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [
  //     {
  //       val: 1,
  //       text: '买',
  //     },
  //     {
  //       val: 0,
  //       text: '卖',
  //     },
  //   ],
  // },

  {
    label: '买或卖',
    prop: 'directionString',
  },

  {
    label: '交易量',
    prop: 'holdVolString',
  },

  {
    label: '开仓时间',
    prop: 'openTime',
  },
  {
    label: '开仓价格',
    prop: 'openPriceString',
  },
];

const coinForexNotCloseListConfig = [
  {
    type: 'date_rank',
    label: '开仓时间',
    prop: 'openStartTime',
    prop2: 'openEndTime',
    value: '',
  },

  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
  },
  {
    type: 'select',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '买或卖',
    prop: 'dealDirection',
    value: '',
    list: [{ label: '卖', value: 0 }, { label: '买', value: 1 }],
  },
];

// 币汇管理/机器人管理/币汇机器人
const coinForexRobotListCol = [
  {
    label: '机器人ID',
    prop: 'id',
  },
  {
    label: '交易产品',
    prop: 'symbolKey',
  },
  // {
  //   label: '成交价浮动率',
  //   prop: 'currentFloatRate',
  // },
  {
    label: '最新成交最小张数',
    prop: 'minVol',
  },

  {
    label: '最新成交最大张数',
    prop: 'maxVol',
  },

  // {
  //   label: '下单委托深度取值比例',
  //   prop: 'orderBuyRatio',
  // },
  // {
  //   label: '深度参数',
  //   prop: 'depthVol',
  // },
  {
    label: '创建时间',
    prop: 'created',
  },
  {
    label: '更新时间',
    prop: 'updated',
  },
  {
    label: '启动状态',
    prop: 'enable',
    width: '120',
    type: 'switch',
    fn: 'trswitch',
    alias: 'trswitch',
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

// 币汇管理/机器人管理/币汇机器人
const coinForexRobotListColNoBtn = [
  {
    label: '机器人ID',
    prop: 'id',
  },
  {
    label: '交易产品',
    prop: 'symbolKey',
  },
  {
    label: '成交价浮动率',
    prop: 'currentFloatRate',
  },
  {
    label: '最新成交最小张数',
    prop: 'minVol',
  },

  {
    label: '最新成交最大张数',
    prop: 'maxVol',
  },

  {
    label: '下单委托深度取值比例',
    prop: 'openTime',
  },
  {
    label: '深度参数',
    prop: 'depthVol',
  },
  {
    label: '创建时间',
    prop: 'created',
  },
  {
    label: '更新时间',
    prop: 'updated',
  },
];

const coinForexRobotListConfig = [
  {
    type: 'select',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: [],
  },
];

// 币汇管理/财务管理/汇率查询
const coinForexRateCol = [
  {
    label: '资产',
    prop: 'name',
  },
  {
    label: '入金汇率',
    prop: 'rateIn',
  },
  
  {
    label: '出金汇率',
    prop: 'rateOut',
  },

  {
    label: '创建时间',
    prop: 'created',
  },

  {
    label: '更新时间',
    prop: 'updated',
  },
  
  {
    label: '手动配置开关',
    prop: 'enable',
    width: '120',
    type: 'switch',
    fn: 'trswitch',
    alias: 'trswitch',
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

const coinForexRateColNoBtn = [
  {
    label: '资产',
    prop: 'name',
  },
  {
    label: '入金汇率',
    prop: 'rateIn',
  },
  
  {
    label: '出金汇率',
    prop: 'rateOut',
  },

  {
    label: '创建时间',
    prop: 'created',
  },

  {
    label: '更新时间',
    prop: 'updated',
  },
];

const coinForexRateConfig = [
  
  {
    type: 'text',
    label: '资产',
    prop: 'name',
    value: '',
  },
];

export {
  coinForexRateCol,
  coinForexRateColNoBtn,
  coinForexRateConfig,
  coinForexDealListCol,
  coinForexDealListConfig,
  coinForexEntrustListCol,
  coinForexEntrustListConfig,
  coinForexNotCloseListCol,
  coinForexNotCloseListConfig,
  coinForexRobotListConfig,
  coinForexRobotListColNoBtn,
  coinForexRobotListCol,
  
};
