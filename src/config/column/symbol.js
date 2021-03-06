/*
 * @Author: your name
 * @Date: 2020-04-09 10:01:18
 * @LastEditTime: 2022-03-16 12:44:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\symbol.js
 */

// import $api from '@/api/api';
import Store from '@/store'

const coinCol = [
  {
    label: '币种icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '币种简称',
    prop: 'coinName'
  },
  {
    label: '最小转出额',
    prop: 'tranOutSingleMinAmount'
  },
  {
    label: '币种小数位',
    prop: 'decimalPlaces'
  },
  {
    label: '排序',
    prop: 'position'
  },
  {
    label: '转出手续费',
    prop: 'tranOutFee'
  },
  {
    label: '所属链',
    prop: 'chainName'
  },
  {
    label: '热门',
    prop: 'hot',
    type: 'switch',
    fn: 'trhot',
    alias: 'trhot'
  },
  {
    label: '上架币币',
    prop: 'isTrade',
    type: 'switch',
    fn: 'switchTrade',
    alias: 'trputon'
  },
  {
    label: '充币',
    prop: 'isDeposit',
    type: 'switch',
    fn: 'switchDeposit',
    alias: 'trfill'
  },
  {
    label: '提币',
    prop: 'isWithdraw',
    type: 'switch',
    fn: 'switchWithdraw',
    alias: 'trdraw'
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

const coinColNoBtn = [
  {
    label: '币种icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '币种简称',
    prop: 'coinName'
  },
  {
    label: '最小转出额',
    prop: 'tranOutSingleMinAmount'
  },
  {
    label: '币种小数位',
    prop: 'decimalPlaces'
  },
  {
    label: '排序',
    prop: 'position'
  },
  {
    label: '转出手续费',
    prop: 'tranOutFee'
  },
  {
    label: '所属链',
    prop: 'chainName'
  }
]

const coinConfig = [
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: Store.state.common.coinlist
  }
]

// 交易对
const symbolCol = [
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '初始价',
    prop: 'initPrice'
  },
  {
    label: '撮合引擎类型',
    prop: 'mainStream',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [
      { text: '平台币', val: 0 },
      { text: '主流币1', val: 1 },
      { text: '主流币2', val: 2 },
      { text: '主流币3', val: 3 }
    ]
  },
  {
    label: '下单档位',
    prop: 'gears'
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision'
  },
  {
    label: '数量小数位',
    prop: 'amountPrecision'
  },
  {
    label: '买入费率',
    prop: 'exRateBuy'
  },
  {
    label: '卖出费率',
    prop: 'exRateSell'
  },
  {
    label: '最小下单量',
    prop: 'minTradeLimit'
  },
  {
    label: '最大下单量',
    prop: 'maxTradeLimit'
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '下单',
    prop: 'onDealing',
    type: 'switch',
    fn: 'switchCoinOrder',
    alias: 'trorder'
  },
  {
    label: '排序',
    prop: 'sortNo'
  },
  {
    label: '分区排序',
    prop: 'partitionSort'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },

      {
        label: '一键删除K线',
        fn: 'onekeyDelete',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyDelete'
      },

      {
        label: '一键拉取K线',
        fn: 'onekeyPull',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyPull'
      },

      {
        label: '一键更新K线',
        fn: 'onekeyUpdate',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyUpdate'
      }
    ]
  }
]

const symbolColNoBtn = [
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '初始价',
    prop: 'initPrice'
  },
  {
    label: '撮合引擎类型',
    prop: 'mainStream',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [
      { text: '平台币类', val: 0 },
      { text: '主流币类', val: 1 },
      { text: '非主流币类', val: 2 }
    ]
  },
  {
    label: '下单档位',
    prop: 'gears'
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision'
  },
  {
    label: '数量小数位',
    prop: 'amountPrecision'
  },
  {
    label: '买入费率',
    prop: 'exRateBuy'
  },
  {
    label: '卖出费率',
    prop: 'exRateSell'
  },
  {
    label: '最小下单量',
    prop: 'minTradeLimit'
  },
  {
    label: '最大下单量',
    prop: 'maxTradeLimit'
  },
  {
    label: '排序',
    prop: 'sortNo'
  },
  {
    label: '分区排序',
    prop: 'partitionSort'
  }
]

const symbolConfig = [
  {
    type: 'select_search',
    label: '交易对',
    prop: 'coinMarketId',
    value: '',
    list: Store.state.common.symbollist
  }
]

const robotCol = [
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '用户名',
    prop: 'account'
  },
  {
    label: '用户名密码',
    prop: 'loginPassword'
  },
  {
    label: '单次挂单数量区间',
    prop: 'amountSection'
  },
  {
    label: '开始时间',
    prop: 'startTime',
    type: 'time'
  },
  {
    label: '结束时间',
    prop: 'endTime',
    type: 'time'
  },
  {
    label: '启动状态',
    prop: 'status',
    type: 'switch',
    fn: 'switchWithdraw',
    alias: 'trstart'
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

const robotColNoBtn = [
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '用户名',
    prop: 'account'
  },
  {
    label: '用户名密码',
    prop: 'loginPassword'
  },
  {
    label: '单次挂单数量区间',
    prop: 'amountSection'
  },
  {
    label: '开始时间',
    prop: 'startTime',
    type: 'time'
  },
  {
    label: '结束时间',
    prop: 'endTime',
    type: 'time'
  }
]

const robotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarketId',
    value: '',
    list: []
  }
]

const contractSymbolRobotCol = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '机器人UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '下单标记价浮动比例',
    prop: 'markFloatingRatio'
  },
  {
    label: '下单成交价浮动比例',
    prop: 'floatingRatio'
  },

  {
    label: '最新成交最小张数',
    prop: 'minSheets'
  },
  {
    label: '最新成交最大张数',
    prop: 'maxSheets'
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion'
  },

  // {
  //   label: '时间变化频次',
  //   arr:['minChangeTime','maxChangeTime'],
  //   type:'textArr',
  //   join:'~',
  // },
  // {
  //   label: '下单委托深度取值比例范围',
  //   arr:['minProportion','maxProportion'],
  //   type:'textArr',
  //   join:'~',
  // },

  {
    label: '深度参数',
    prop: 'depthParameter'
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }]
  },
  {
    label: '是否模拟',
    prop: 'isMock',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }]
  },
  {
    label: '模拟交易对',
    prop: 'mockCoinMarket'
  },

  {
    label: '是否正常',
    prop: 'isFormal',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '都关闭', val: 0 },
      { text: '正常打开', val: 1 },
      { text: '模拟盘打开', val: 2 },
      { text: '都打开', val: 3 }
    ]
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
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

const contractSymbolRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '机器人UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '下单标记价浮动比例',
    prop: 'markFloatingRatio'
  },
  {
    label: '下单成交价浮动比例',
    prop: 'floatingRatio'
  },

  {
    label: '最新成交最小张数',
    prop: 'minSheets'
  },
  {
    label: '最新成交最大张数',
    prop: 'maxSheets'
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion'
  },

  // {
  //   label: '时间变化频次',
  //   arr:['minChangeTime','maxChangeTime'],
  //   type:'textArr',
  //   join:'~',
  // },
  // {
  //   label: '下单委托深度取值比例范围',
  //   arr:['minProportion','maxProportion'],
  //   type:'textArr',
  //   join:'~',
  // },

  {
    label: '深度参数',
    prop: 'depthParameter'
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }]
  },
  {
    label: '是否模拟',
    prop: 'isMock',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }]
  },
  {
    label: '模拟交易对',
    prop: 'mockCoinMarket'
  },

  {
    label: '是否正常',
    prop: 'isFormal',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '都关闭', val: 0 },
      { text: '正常打开', val: 1 },
      { text: '模拟盘打开', val: 2 },
      { text: '都打开', val: 3 }
    ]
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

const contractSymbolRobotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: []
  }
]

const chainTypeCol = [
  {
    label: '链名称',
    prop: 'chainName'
  },
  {
    label: '相关币种',
    prop: 'coinName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 420,
    btnGroup: [
      {
        label: '一键同步区块高度',
        fn: 'onekeyStepBlockHeight',
        type: 'primary',
        alias: 'onekeyStepBlockHeight'
      },
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail'
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const chainTypeColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName'
  },
  {
    label: '相关币种',
    prop: 'coinName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

const plateAreaCol = [
  {
    label: '板块名称',
    prop: 'name'
  },
  {
    label: '板块描述',
    prop: 'desc'
  },
  {
    label: '英文描述',
    prop: 'descEn'
  },
  {
    label: '相关交易对-是否合约',
    prop: 'pairList',
    key1: 'coinMarket',
    key2: 'supportContract',
    type: 'valueArr'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 250,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del'
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail'
      }
    ]
  }
]

const plateAreaColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName'
  },
  {
    label: '相关币种',
    prop: 'coinName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

const coinWhiteListCol = [
  {
    label: '币种名称',
    prop: 'coinName'
  },
  {
    label: '单笔限额',
    prop: 'singleMaxAmount'
  },
  {
    label: '单日限额',
    prop: 'dayMaxAmount'
  },
  {
    label: 'UID',
    prop: 'uidList'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 180,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const coinWhiteListColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName'
  },
  {
    label: '相关币种',
    prop: 'coinName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

const contractRobotCol = [
  {
    label: 'ID',
    prop: 'uid'
  },
  {
    label: '机器人ID',
    prop: 'createTime'
  },
  {
    label: '币对',
    prop: 'a3'
  },
  {
    label: '下单委托深度取值比例（%）',
    prop: 'a3'
  },
  {
    label: '深度类型',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }]
  },
  {
    label: '创建时间',
    prop: 'positionAmount'
  },
  {
    label: '更新时间',
    prop: 'amount'
  },
  {
    label: '启动状态',
    prop: 'trstart',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart'
  }
]

const contractRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'uid'
  },
  {
    label: '机器人ID',
    prop: 'createTime'
  },
  {
    label: '币对',
    prop: 'a3'
  },
  {
    label: '下单委托深度取值比例（%）',
    prop: 'a3'
  },
  {
    label: '深度类型',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }]
  },
  {
    label: '创建时间',
    prop: 'positionAmount'
  },
  {
    label: '更新时间',
    prop: 'amount'
  }
]

const contractRobotConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinId',
    value: '',
    list: []
  }
]

const currencyRobotCol = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '机器人UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion'
  },
  {
    label: '深度参数',
    prop: 'depthParameter'
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }]
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
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

const currencyRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '机器人UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion'
  },
  {
    label: '深度参数',
    prop: 'depthParameter'
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }]
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

const currencyRobotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: []
  }
]

const klineListCol = [
  {
    label: 'K线类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币交易', val: 0 }, { text: '合约交易', val: 1 }]
  },
  {
    label: '交易对品种',
    prop: 'coinMarket'
  },
  {
    label: 'K线时间类型',
    prop: 'type',
    type: 'timeType',
    show_type: 'text',
    filters: [
      { text: '1min', val: 0 },
      { text: '5min', val: 1 },
      { text: '15min', val: 2 },
      { text: '30min', val: 3 },
      { text: '1h', val: 4 },
      { text: '4h', val: 5 },
      { text: '1d', val: 6 },
      { text: '1w', val: 7 },
      { text: '1m', val: 8 }
    ]
  },
  {
    label: '旧高开低收',
    arr: ['oldHigh', 'oldOpen', 'oldLow', 'oldClose'],
    type: 'textArr',
    join: ','
  },

  {
    label: '新高开低收',
    arr: ['newHigh', 'newOpen', 'newLow', 'newClose'],
    type: 'textArr',
    join: ','
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建人',
    prop: 'userName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },

  {
    label: '审核人',
    prop: 'checkUserName'
  },

  {
    label: '审核时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未处理', val: 0 }, { text: '已通过', val: 1 }, { text: '已驳回', val: 2 }]
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '130',
    btnGroup: [
      {
        label: '审核',
        fn: 'check',
        filter_type: 'array',
        filter_key: 'status',
        filter_status: ['0'],
        type: 'primary',
        alias: 'check'
      }
    ]
  }
]

const klineListColNoBtn = [
  {
    label: 'K线类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币交易', val: 0 }, { text: '合约交易', val: 1 }]
  },
  {
    label: '交易对品种',
    prop: 'coinMarket'
  },
  {
    label: 'K线时间类型',
    prop: 'type',
    type: 'timeType',
    show_type: 'text',
    filters: [
      { text: '1min', val: 0 },
      { text: '5min', val: 1 },
      { text: '15min', val: 2 },
      { text: '30min', val: 3 },
      { text: '1h', val: 4 },
      { text: '4h', val: 5 },
      { text: '1d', val: 6 },
      { text: '1w', val: 7 },
      { text: '1m', val: 8 }
    ]
  },
  {
    label: '旧高开低收',
    arr: ['oldHigh', 'oldOpen', 'oldLow', 'oldClose'],
    type: 'textArr',
    join: ','
  },

  {
    label: '新高开低收',
    arr: ['newHigh', 'newOpen', 'newLow', 'newClose'],
    type: 'textArr',
    join: ','
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建人',
    prop: 'userName'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },

  {
    label: '审核人',
    prop: 'checkUserName'
  },

  {
    label: '审核时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未处理', val: 0 }, { text: '已通过', val: 1 }, { text: '已驳回', val: 2 }]
  }
]

const klineListConfig = [
  {
    type: 'date_rank',
    label: '创建时间',
    prop: 'createTimeStart',
    prop2: 'createTimeEnd',
    value: ''
  },
  {
    type: 'date_rank',
    label: '更新时间',
    prop: 'dealTimeStart',
    prop2: 'dealTimeEnd',
    value: ''
  },
  {
    type: 'select',
    label: 'K线类型',
    prop: 'type',
    value: '',
    list: [{ label: '币币交易', value: 0 }, { label: '合约交易', value: 1 }]
  },
  {
    type: 'select',
    label: '交易对品种',
    prop: 'coinMarket',
    value: '',
    list: []
  },

  {
    type: 'select',
    label: 'K线时间类型',
    // (0 1min,1 5min; 2 15min; 3 30min; 4 1h; 5 4h; 6 1d; 7 1w; 8 1m )
    prop: 'timeType',
    value: '',
    list: [
      { label: '1min', value: 0 },
      { label: '5min', value: 1 },
      { label: '15min', value: 2 },
      { label: '30min', value: 3 },
      { label: '1h', value: 4 },
      { label: '4h', value: 5 },
      { label: '1d', value: 6 },
      { label: '1w', value: 7 },
      { label: '1m', value: 8 }
    ]
  },

  {
    type: 'text',
    label: '创建人',
    prop: 'userName',
    value: ''
  },
  {
    type: 'text',
    label: '审核人',
    prop: 'checkUserName',
    value: ''
  },

  {
    type: 'select',
    label: '状态',
    prop: 'status',
    // (0 未处理 1 已通过 2 已驳回)
    value: '',
    list: [
      { label: '未处理', value: 0 },
      { label: '已通过', value: 1 },
      { label: '已驳回', value: 2 }
    ]
  }
]

const tradeMarketCol = [
  {
    type: 'date_rank_s',
    label: '更新时间',
    prop: 'updateTimeStart',
    prop2: 'updateTimeEnd'
  },
  {
    type: 'select',
    label: '交易类型',
    prop: 'coinType',
    value: '',
    list: []
  },
  {
    type: 'select',
    prop: 'coinMarket',
    label: '交易对',
    value: '',
    list: []
  }
]

const tradeMarketColTable = [
  {
    label: '序号',
    prop: 'id'
  },
  {
    label: '交易对类型',
    prop: 'coinType',
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 0, text: '合约' }, { val: 1, text: '币币' }]
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '24h成交额下限',
    prop: 'turnoverLower'
  },
  {
    label: '24h成交额上线限',
    prop: 'turnoverUpper'
  },
  {
    label: '占比(%)',
    prop: 'proportion'
  },
  {
    label: '创建时间',
    prop: 'createTime'
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

const tradeMarketColNoBtn = tradeMarketCol

// 币种管理/事务管理/划转异常事务
const transferExceptionCol = [
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: 'ID',
    prop: 'id',
    width: '180'
  },
  {
    label: '事务类型',
    prop: 'transactionType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约订单', val: 1 }, { text: '划转', val: 2 }]
  },
  {
    label: '更新时间',
    prop: 'updateTime'
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '一键修复',
        fn: 'repair',
        type: 'primary',
        alias: 'repair'
      }
    ]
  }
]

const transferExceptionConfig = []

// 币种管理/事务管理/下单异常事务
const orderExceptionCol = [
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: 'ID',
    prop: 'id',
    width: '180'
  },
  {
    label: '事务类型',
    prop: 'transactionType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约订单', val: 1 }, { text: '划转', val: 2 }]
  },

  {
    label: '处理状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '未处理', val: 0 },
      { text: '业务执行完成', val: 1 },
      { text: '回滚成功', val: 2 }
    ]
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '一键修复',
        fn: 'repair',
        type: 'primary',
        alias: 'repair'
      }
    ]
  }
]

const orderExceptionConfig = []

// 币种管理/事务管理/消费异常事务
const consumptionExceptionCol = [
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: 'ID',
    prop: 'id',
    width: '180'
  },
  {
    label: '消息',
    prop: 'manage',
    width: '180'
  },
  {
    label: '事务类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    // 0订单消费失败，1订单下单失败，需资产回退, 2成交信息插入失败，3合约订单消费失败，4合约下单，资产回退 ，5合约发送清算失败
    filters: [
      { text: '订单消费失败', val: 0 },
      { text: '订单下单失败,需资产回退', val: 1 },
      { text: '成交信息插入失败', val: 2 },
      { text: '合约订单消费失败', val: 3 },
      { text: '合约下单，资产回退', val: 4 },
      { text: '合约发送清算失败', val: 5 }
    ]
  },
  {
    label: '更新时间',
    prop: 'updateTime'
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '一键修复',
        fn: 'repair',
        type: 'primary',
        alias: 'repair'
      }
    ]
  }
]

const consumptionExceptionConfig = []

export {
  consumptionExceptionCol,
  consumptionExceptionConfig,
  orderExceptionConfig,
  orderExceptionCol,
  transferExceptionConfig,
  transferExceptionCol,
  klineListCol,
  klineListColNoBtn,
  klineListConfig,
  plateAreaColNoBtn,
  plateAreaCol,
  coinWhiteListCol,
  coinWhiteListColNoBtn,
  coinCol,
  coinColNoBtn,
  coinConfig,
  symbolCol,
  symbolColNoBtn,
  symbolConfig,
  robotCol,
  robotColNoBtn,
  robotConfig,
  contractSymbolRobotCol,
  contractSymbolRobotColNoBtn,
  contractSymbolRobotConfig,
  chainTypeCol,
  chainTypeColNoBtn,
  contractRobotCol,
  contractRobotColNoBtn,
  contractRobotConfig,
  currencyRobotCol,
  currencyRobotColNoBtn,
  currencyRobotConfig,
  tradeMarketCol,
  tradeMarketColNoBtn,
  tradeMarketColTable
}
