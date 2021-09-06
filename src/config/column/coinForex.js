// 币汇管理/币汇交易管理/交易报表
const coinForexDealListCol = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '交易账户',
    prop: 'uid',
  },
  {
    label: '产品',
    prop: 'symbolKey',
  },
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
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: '',
  },
  {
    type: 'onlyNumber',
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
    prop: 'tradeStatus',
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
    prop: 'handNumString',
  },
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
    prop: 'TermValidityTime',
  },
];

const coinForexEntrustListConfig = [
  {
    type: 'date_rank',
    label: '委托时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  
  {
    type: 'onlyNumber',
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

export { coinForexDealListCol, coinForexDealListConfig, coinForexEntrustListCol, coinForexEntrustListConfig };
