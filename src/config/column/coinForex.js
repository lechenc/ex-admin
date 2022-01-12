// 币汇管理/币汇交易管理/交易报表
const coinForexDealListCol = [
  {
    label: '订单号',
    prop: 'orderNo'
  },
  {
    label: '交易账户',
    prop: 'uid'
  },
  {
    label: '仓位ID',
    prop: 'positionsId'
  },
  {
    label: '交易产品',
    prop: 'symbolKey'
  },
  {
    label: '买或卖',
    prop: 'directionString'
  },
  {
    label: '交易手数',
    prop: 'numberString'
  },
  {
    label: '交易量',
    prop: 'holdVolString'
  },
  {
    label: '手续费',
    type: 'fixedValue', // 固定值
    val: '0'
  },
  {
    label: '过夜利息',
    prop: 'interestString'
  },
  {
    label: '盈亏',
    prop: 'profitLossString'
  },

  {
    label: '开仓时间',
    prop: 'openTime'
  },
  {
    label: '开仓价格',
    prop: 'openPriceString'
  },

  {
    label: '平仓时间',
    prop: 'closeTime'
  },

  {
    label: '平仓类型',
    prop: 'typeString'
  },

  {
    label: '平仓价格',
    prop: 'closePriceString'
  }
]

const coinForexDealListConfig = [
  {
    type: 'date_rank',
    label: '平仓时间',
    prop: 'closeStartTime',
    prop2: 'closeEndTime',
    value: ''
  },
  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: ''
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: ''
  },
  {
    type: 'text',
    label: '仓位ID',
    prop: 'positionId',
    value: ''
  },
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: []
  },
  {
    type: 'select',
    label: '平仓类型',
    prop: 'type',
    value: '',
    list: [{ label: '正常平仓', value: 0 }, { label: '爆仓', value: 1 }]
  }
  // {
  //   type: 'select',
  //   label: '买或卖',
  //   prop: 'dealDirection',
  //   value: '',
  //   list: [{ label: '卖', value: 0 }, { label: '买', value: 1 }]
  // }
]

// 币汇管理/币汇交易管理/委托报表
const coinForexEntrustListCol = [
  {
    label: '订单号',
    prop: 'orderId'
  },
  {
    label: '交易账户',
    prop: 'uid'
  },
  {
    label: '仓位ID',
    prop: 'positionsId'
  },
  {
    label: '交易产品',
    prop: 'symbolKey'
  },
  {
    label: '委托类型',
    prop: 'dealTypeString'
  },

  {
    label: '委托状态',
    prop: 'statusString'
  },

  {
    label: '委托价格',
    prop: 'priceString'
  },

  {
    label: '委托手数',
    prop: 'handNumString'
  },

  {
    label: '委托量',
    prop: 'totalNumString'
  },

  {
    label: '委托方向',
    prop: 'dealDirectionString'
  },

  {
    label: '止盈价格',
    prop: 'profitPriceString'
  },

  {
    label: '止损价格',
    prop: 'lossPriceString'
  },

  {
    label: '委托时间',
    prop: 'orderTime'
  },
  {
    label: '委托期限',
    prop: 'termValidityTime'
  }
]

const coinForexEntrustListConfig = [
  {
    type: 'date_rank',
    label: '委托时间',
    prop: 'orderStartTime',
    prop2: 'orderEndTime',
    value: ''
  },

  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: ''
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: ''
  },
  {
    type: 'text',
    label: '仓位ID',
    prop: 'positionId',
    value: ''
  },
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: []
  },
  {
    type: 'select',
    label: '委托类型',
    prop: 'dealType',
    value: '',
    list: [{ label: '市价开仓', value: 0 }, { label: '限价开仓', value: 1 }]
  },

  {
    type: 'select',
    label: '委托状态',
    prop: 'status',
    value: '',
    list: [
      {
        value: '0',
        label: '待成交'
      },
      {
        value: '1',
        label: '已成交'
      },
      {
        value: '2',
        label: '已删除'
      }
    ]
  },

  {
    type: 'select',
    label: '委托方向',
    prop: 'dealDirection',
    value: '',
    list: [{ label: '卖', value: 0 }, { label: '买', value: 1 }]
  }
]

// 币汇管理/币汇交易管理/未平仓报表
const coinForexNotCloseListCol = [
  {
    label: '订单号',
    prop: 'orderNo'
  },
  {
    label: '交易账户',
    prop: 'uid'
  },
  {
    label: '仓位ID',
    prop: 'id'
  },
  {
    label: '交易产品',
    prop: 'symbolKey'
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
    prop: 'directionString'
  },

  {
    label: '交易量',
    prop: 'holdVolString'
  },

  {
    label: '交易手数',
    prop: 'handlerNumString'
  },

  {
    label: '开仓时间',
    prop: 'openTime'
  },
  {
    label: '开仓价格',
    prop: 'openPriceString'
  },

  {
    label: '手续费',
    type: 'fixedValue', // 固定值
    val: '0'
  },

  {
    label: '过夜利息',
    prop: 'interestString'
  },

  {
    label: '盈亏',
    prop: 'profitLossString'
  }
]

const coinForexNotCloseListConfig = [
  {
    type: 'date_rank',
    label: '开仓时间',
    prop: 'openStartTime',
    prop2: 'openEndTime',
    value: ''
  },

  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: ''
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: ''
  },
  {
    type: 'text',
    label: '仓位ID',
    prop: 'positionId',
    value: ''
  },
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: []
  },
  {
    type: 'select',
    label: '买或卖',
    prop: 'dealDirection',
    value: '',
    list: [{ label: '卖', value: 0 }, { label: '买', value: 1 }]
  }
]

// 币汇管理/机器人管理/币汇机器人
const coinForexRobotListCol = [
  {
    label: '机器人ID',
    prop: 'id'
  },
  {
    label: '交易产品',
    prop: 'symbolKey'
  },
  // {
  //   label: '成交价浮动率',
  //   prop: 'currentFloatRate',
  // },
  {
    label: '下单最小值',
    prop: 'minVol'
  },

  {
    label: '下单最大值',
    prop: 'maxVol'
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
    prop: 'created'
  },
  {
    label: '更新时间',
    prop: 'updated'
  },
  {
    label: '启动状态',
    prop: 'enable',
    width: '120',
    type: 'switch',
    fn: 'trswitch',
    alias: 'trswitch'
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
        alias: 'edit'
      }
    ]
  }
]

// 币汇管理/机器人管理/币汇机器人
const coinForexRobotListColNoBtn = [
  {
    label: '机器人ID',
    prop: 'id'
  },
  {
    label: '交易产品',
    prop: 'symbolKey'
  },
  {
    label: '下单最小值',
    prop: 'minVol'
  },

  {
    label: '下单最大值',
    prop: 'maxVol'
  },
  {
    label: '创建时间',
    prop: 'created'
  },
  {
    label: '更新时间',
    prop: 'updated'
  }
]

const coinForexRobotListConfig = [
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'foreignId',
    value: '',
    list: []
  }
]

// 币汇管理/财务管理/汇率查询
const coinForexRateCol = [
  {
    label: '资产',
    prop: 'name'
  },
  {
    label: '入金汇率',
    prop: 'rateIn'
  },

  {
    label: '出金汇率',
    prop: 'rateOut'
  },

  {
    label: '创建时间',
    prop: 'created'
  },

  {
    label: '更新时间',
    prop: 'updated'
  },

  // {
  //   label: '手动配置开关',
  //   prop: 'enable',
  //   width: '120',
  //   type: 'switch',
  //   fn: 'trswitch',
  //   alias: 'trswitch'
  // },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      }
    ]
  }
]

const coinForexRateColNoBtn = [
  {
    label: '资产',
    prop: 'name'
  },
  {
    label: '入金汇率',
    prop: 'rateIn'
  },

  {
    label: '出金汇率',
    prop: 'rateOut'
  },

  {
    label: '创建时间',
    prop: 'created'
  },

  {
    label: '更新时间',
    prop: 'updated'
  }
]

const coinForexRateConfig = [
  {
    type: 'text',
    label: '资产',
    prop: 'name',
    value: ''
  }
]

// 币汇管理/交易对设置管理/币汇交易对设置
const coinForexPairsConfigsCol = [
  {
    label: 'ID',
    prop: 'id'
  },

  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '交易品种',
    prop: 'symbol'
  },
  {
    label: '中文名称',
    prop: 'chineseName'
  },

  {
    label: '每手合约交易大小',
    prop: 'minVol'
  },

  {
    label: '建议点差',
    prop: 'priceDiff'
  },

  {
    label: '持仓手数范围区间',
    arr: ['minMove', 'maxMove'],
    type: 'textArr',
    join: '-'
  },
  {
    label: '杠杆倍数',
    prop: 'multiple'
  },

  {
    label: '挂单距离限制',
    prop: 'dealDistance'
  },
  {
    label: '强平保证金率',
    prop: 'closeRate',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },

  {
    label: '价格小数位',
    prop: 'decimalVol'
  },

  {
    label: '排序',
    prop: 'rank'
  },

  {
    label: '上架',
    prop: 'headblock',
    width: '120',
    type: 'switch',
    fn: 'trHeadblockSwitch',
    alias: 'trHeadblockSwitch'
  },

  {
    label: '交易',
    prop: 'trade',
    width: '120',
    type: 'switch',
    fn: 'trTradeSwitch',
    alias: 'trTradeSwitch'
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '220',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },

      {
        label: '上传导入K线',
        fn: 'importKLine',
        type: 'primary',
        alias: 'importKLine'
      }
    ]
  }
]

const coinForexPairsConfigsColNoBtn = [
  {
    label: 'ID',
    prop: 'id'
  },

  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '交易品种',
    prop: 'symbol'
  },
  {
    label: '中文名称',
    prop: 'chineseName'
  },

  {
    label: '每手合约交易大小',
    prop: 'minVol'
  },

  {
    label: '建议点差',
    prop: 'priceDiff'
  },

  {
    label: '持仓手数范围区间',
    arr: ['minMove', 'maxMove'],
    type: 'textArr',
    join: '-'
  },
  {
    label: '杠杆倍数',
    prop: 'multiple'
  },

  {
    label: '挂单距离限制',
    prop: 'dealDistance'
  },
  {
    label: '强平保证金率',
    prop: 'closeRate',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },

  {
    label: '价格小数位',
    prop: 'decimalVol'
  },

  {
    label: '排序',
    prop: 'rank'
  }
]

const coinForexPairsConfigsConfig = [
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'forexId',
    value: '',
    list: []
  },
  {
    type: 'select',
    label: '是否上架',
    prop: 'headblock',
    value: '',
    list: [
      {
        label: '是',
        value: 'y'
      },
      {
        label: '否',
        value: 'n'
      }
    ]
  },

  {
    type: 'select',
    label: '是否开启交易',
    prop: 'trade',
    value: '',
    list: [
      {
        label: '是',
        value: 'y'
      },
      {
        label: '否',
        value: 'n'
      }
    ]
  }
]

// 币汇管理/财务管理/币汇流水 列表
const coinForexRecordCol = [
  {
    label: '时间',
    prop: 'created'
  },
  {
    label: '交易账户',
    prop: 'uid'
  },
  {
    label: '交易产品',
    prop: 'symbol'
  },
  {
    label: '类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      { text: '平仓', val: 1 },
      { text: '爆仓', val: 2 },
      { text: '币汇划入', val: 3 },
      { text: '币汇转出', val: 4 },
      { text: '手续费', val: 5 },
      { text: '隔夜费用', val: 6 }
    ]
  },

  {
    label: '变动前账户余额',
    prop: 'beforePrice'
  },

  {
    label: '变动金额',
    prop: 'changePrice'
  },

  {
    label: '变动后账户余额',
    prop: 'afterPrice'
  },

  {
    label: '订单号',
    prop: 'orderNo'
  }
]

const coinForexRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },

  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: ''
  },

  {
    type: 'select_search',
    label: '交易产品',
    prop: 'forexId',
    value: '',
    list: []
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderNo',
    value: ''
  },
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    value: '',
    // (1平仓 2 爆仓 3币汇划入 4币汇转出 5手续费 6隔夜费用)
    list: [
      { label: '平仓', value: 1 },
      { label: '爆仓', value: 2 },
      { label: '币汇划入', value: 3 },
      { label: '币汇转出', value: 4 },
      { label: '手续费', value: 5 },
      { label: '隔夜费用', value: 6 }
    ]
  }
]

// 币汇管理/财务管理/币汇流水 列表
const coinForexNetWorthCol = [
  {
    label: '交易账户',
    prop: 'uid'
  },
  // {
  //   label: '余额',
  //   prop: 'usable'
  // },

  {
    label: '净值',
    prop: 'total'
  },

  {
    label: '保证金比列',
    prop: 'rate'
  }
]

const coinForexNetWorthConfig = [
  {
    type: 'onlyNumber',
    label: '交易账户',
    prop: 'uid',
    value: ''
  }
]

// 币汇管理/交易品种设置/隔夜费设置
const coinForexPairsNightFeeCol = [
  {
    label: 'id',
    prop: 'id'
  },
  {
    label: '交易产品',
    prop: 'symbol'
  },

  {
    label: '多头隔夜费率',
    prop: 'doServiceCharge',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },

  {
    label: '空头隔夜费率',
    prop: 'koServiceCharge',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },
  {
    label: '触发费率时间',
    prop: 'beginTime'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },

  {
    label: '更新时间',
    prop: 'updateTime'
  },
  {
    label: '是否开启',
    prop: 'costType',
    type: 'filter',
    show_type: 'text',
    width: 140,
    filters: [
      {
        val: '0',
        text: '否'
      },
      {
        val: '1',
        text: '是'
      }
    ]
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '130',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      }
    ]
  }
]

// 币汇管理/交易品种设置/隔夜费设置
const coinForexPairsNightFeeColNoBtn = [
  {
    label: 'id',
    prop: 'id'
  },
  {
    label: '交易产品',
    prop: 'symbol'
  },

  {
    label: '多头隔夜费率',
    prop: 'doServiceCharge',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },

  {
    label: '空头隔夜费率',
    prop: 'koServiceCharge',
    type: 'afterJoin', // 结尾拼接一个
    join: '%',
    nothingValue: '0' // 没有值时显示
  },
  {
    label: '触发费率时间',
    prop: 'beginTime'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },

  {
    label: '更新时间',
    prop: 'updateTime'
  },
  {
    label: '是否开启',
    prop: 'costType',
    type: 'filter',
    show_type: 'text',
    width: 140,
    filters: [
      {
        val: '0',
        text: '否'
      },
      {
        val: '1',
        text: '是'
      }
    ]
  }
]

const coinForexPairsNightFeeConfig = [
  {
    type: 'select_search',
    label: '交易产品',
    prop: 'forexId',
    value: '',
    list: []
  },

  {
    type: 'select',
    label: '是否开启',
    prop: 'costType',
    value: '',
    list: [{ label: '否', value: 0 }, { label: '是', value: 1 }]
  }
]

// 币汇管理/财务管理/币汇账号 列表
const coinForexAccountCol = [
  {
    label: 'UID',
    prop: 'systemUid'
  },
  {
    label: '币种',
    prop: 'symbol'
  },
  {
    label: '平仓收益',
    prop: 'plstatistics'
  },

  {
    label: '隔夜费',
    prop: 'servicePriceStatistics'
  },

  {
    label: '划转手续费',
    prop: 'transferServicePriceStatistics'
  },

  {
    label: '返佣',
    prop: 'agentRebateStatistics'
  },

  {
    label: '当前可用',
    type: 'plusPropArr',
    propArr: [
      { sign: '+', propName: 'plstatistics' },
      { sign: '+', propName: 'servicePriceStatistics' },
      { sign: '+', propName: 'transferServicePriceStatistics' },
      { sign: '+', propName: 'agentRebateStatistics' }
    ]
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 250,
    btnGroup: [
      {
        label: '每日收益',
        fn: 'everydayEarning',
        type: 'primary'
      },

      {
        label: '账号流水',
        fn: 'accountEarning',
        type: 'primary'
      }
    ]
  }
]

const coinForexAccountConfig = [
  {
    type: 'select_search',
    label: '币种',
    prop: 'symbol',
    value: '',
    list: [{ label: 'USD', value: 1 }]
  }
]

// 币汇管理/财务管理/每日收益 列表
const coinForeEverydayEarningCol = [
  {
    label: 'UID',
    prop: 'systemUid'
  },
  {
    label: '币种',
    prop: 'symbol'
  },
  {
    label: '平仓收益',
    prop: 'plstatistics'
  },

  {
    label: '隔夜费',
    prop: 'servicePriceStatistics'
  },

  {
    label: '划转手续费',
    prop: 'transferServicePriceStatistics'
  },

  {
    label: '返佣',
    prop: 'agentRebateStatistics'
  },
  {
    label: '当前可用',
    type: 'plusPropArr',
    propArr: [
      { sign: '+', propName: 'plstatistics' },
      { sign: '+', propName: 'servicePriceStatistics' },
      { sign: '+', propName: 'transferServicePriceStatistics' },
      { sign: '+', propName: 'agentRebateStatistics' }
    ]
  },
]

const coinForeEverydayEarningConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  }
]

// 币汇管理/财务管理/账号流水 列表
const coinForeAccountEarningCol = [
  {
    label: '时间',
    prop: 'created'
  },
  {
    label: 'UID',
    prop: 'systemUid'
  },
  {
    label: '交易品种',
    prop: 'symbol'
  },

  {
    label: '类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '平仓',
        val: 1
      },
      {
        text: '爆仓',
        val: 2
      },
      {
        text: '币汇划入',
        val: 3
      },
      {
        text: '币汇转出',
        val: 4
      },
      {
        text: '手续费',
        val: 5
      },
      {
        text: '隔夜费用',
        val: 6
      },
      {
        text: '点差代理返佣',
        val: 7
      }
    ]
  },

  {
    label: '变动前账户余额',
    prop: 'beforePrice'
  },

  {
    label: '变动金额',
    prop: 'changePrice'
  },

  {
    label: '变动后账户余额',
    prop: 'afterPrice'
  },

  {
    label: '订单号',
    prop: 'orderNo'
  }
]

const coinForeAccountEarningConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'systemUid',
    value: '',
    placeHolder: '请输入'
  },
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    value: '',
    list: [
      {
        label: '平仓',
        value: 1
      },
      {
        label: '爆仓',
        value: 2
      },
      {
        label: '币汇划入',
        value: 3
      },
      {
        label: '币汇转出',
        value: 4
      },
      {
        label: '手续费',
        value: 5
      },
      {
        label: '隔夜费用',
        value: 6
      },
      {
        label: '点差代理返佣',
        value: 7
      }
    ]
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'uniquelyIdentifies',
    value: '',
    placeHolder: '请输入'
  }
]

export {
  coinForeAccountEarningCol,
  coinForeAccountEarningConfig,
  coinForeEverydayEarningCol,
  coinForeEverydayEarningConfig,
  coinForexAccountCol,
  coinForexAccountConfig,
  coinForexPairsNightFeeCol,
  coinForexPairsNightFeeColNoBtn,
  coinForexPairsNightFeeConfig,
  coinForexNetWorthCol,
  coinForexNetWorthConfig,
  coinForexRecordCol,
  coinForexRecordConfig,
  coinForexPairsConfigsCol,
  coinForexPairsConfigsColNoBtn,
  coinForexPairsConfigsConfig,
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
  coinForexRobotListCol
}
