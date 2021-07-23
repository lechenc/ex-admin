/*
 * @Author: your name
 * @Date: 2020-04-09 10:01:18
 * @LastEditTime: 2020-11-06 12:05:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\symbol.js
 */

// import $api from '@/api/api';
import Store from '@/store';

const coinCol = [
  {
    label: '币种icon',
    prop: 'iconUrl',
    type: 'img',
  },
  {
    label: '币种简称',
    prop: 'coinName',
  },
  {
    label: '最小转出额',
    prop: 'tranOutSingleMinAmount',
  },
  {
    label: '币种小数位',
    prop: 'decimalPlaces',
  },
  {
    label: '排序',
    prop: 'position',
  },
  {
    label: '转出手续费',
    prop: 'tranOutFee',
  },
  {
    label: '所属链',
    prop: 'chainName',
  },
  {
    label: '热门',
    prop: 'hot',
    type: 'switch',
    fn: 'trhot',
    alias: 'trhot',
  },
  {
    label: '上架币币',
    prop: 'isTrade',
    type: 'switch',
    fn: 'switchTrade',
    alias: 'trputon',
  },
  {
    label: '充币',
    prop: 'isDeposit',
    type: 'switch',
    fn: 'switchDeposit',
    alias: 'trfill',
  },
  {
    label: '提币',
    prop: 'isWithdraw',
    type: 'switch',
    fn: 'switchWithdraw',
    alias: 'trdraw',
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

const coinColNoBtn = [
  {
    label: '币种icon',
    prop: 'iconUrl',
    type: 'img',
  },
  {
    label: '币种简称',
    prop: 'coinName',
  },
  {
    label: '最小转出额',
    prop: 'tranOutSingleMinAmount',
  },
  {
    label: '币种小数位',
    prop: 'decimalPlaces',
  },
  {
    label: '排序',
    prop: 'position',
  },
  {
    label: '转出手续费',
    prop: 'tranOutFee',
  },
  {
    label: '所属链',
    prop: 'chainName',
  },
];

const coinConfig = [
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: Store.state.common.coinlist,
  },
];

// 交易对
const symbolCol = [
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '初始价',
    prop: 'initPrice',
  },
  {
    label: '撮合引擎类型',
    prop: 'mainStream',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '平台币', val: 0 }, { text: '主流币1', val: 1 }, { text: '主流币2', val: 2 }],
  },
  {
    label: '下单档位',
    prop: 'gears',
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision',
  },
  {
    label: '数量小数位',
    prop: 'amountPrecision',
  },
  {
    label: '买入费率',
    prop: 'exRateBuy',
  },
  {
    label: '卖出费率',
    prop: 'exRateSell',
  },
  {
    label: '最小下单量',
    prop: 'minTradeLimit',
  },
  {
    label: '最大下单量',
    prop: 'maxTradeLimit',
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
  },
  {
    label: '下单',
    prop: 'onDealing',
    type: 'switch',
    fn: 'switchCoinOrder',
    alias: 'trorder',
  },
  {
    label: '排序',
    prop: 'sortNo',
  },
  {
    label: '分区排序',
    prop: 'partitionSort',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '520',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },

      {
        label: '更多',
        filter_type: 'more',
        type: 'primary',
        alias: 'more',
      },

      {
        label: '一键删除K线',
        fn: 'onekeyDelete',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyDelete',
      },

      {
        label: '一键拉取K线',
        fn: 'onekeyPull',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyPull',
      },

      {
        label: '一键更新K线',
        fn: 'onekeyUpdate',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT', 'CNHT'],
        type: 'primary',
        alias: 'onekeyUpdate',
      },
    ],
  },
];

const symbolColNoBtn = [
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '初始价',
    prop: 'initPrice',
  },
  {
    label: '撮合引擎类型',
    prop: 'mainStream',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '平台币类', val: 0 }, { text: '主流币类', val: 1 }, { text: '非主流币类', val: 2 }],
  },
  {
    label: '下单档位',
    prop: 'gears',
  },
  {
    label: '价格小数位',
    prop: 'pricePrecision',
  },
  {
    label: '数量小数位',
    prop: 'amountPrecision',
  },
  {
    label: '买入费率',
    prop: 'exRateBuy',
  },
  {
    label: '卖出费率',
    prop: 'exRateSell',
  },
  {
    label: '最小下单量',
    prop: 'minTradeLimit',
  },
  {
    label: '最大下单量',
    prop: 'maxTradeLimit',
  },
  {
    label: '排序',
    prop: 'sortNo',
  },
  {
    label: '分区排序',
    prop: 'partitionSort',
  },
];

const symbolConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarketId',
    value: '',
    list: Store.state.common.symbollist,
  },
];

const robotCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '用户名',
    prop: 'account',
  },
  {
    label: '用户名密码',
    prop: 'loginPassword',
  },
  {
    label: '单次挂单数量区间',
    prop: 'amountSection',
  },
  {
    label: '开始时间',
    prop: 'startTime',
    type: 'time',
  },
  {
    label: '结束时间',
    prop: 'endTime',
    type: 'time',
  },
  {
    label: '启动状态',
    prop: 'status',
    type: 'switch',
    fn: 'switchWithdraw',
    alias: 'trstart',
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

const robotColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '用户名',
    prop: 'account',
  },
  {
    label: '用户名密码',
    prop: 'loginPassword',
  },
  {
    label: '单次挂单数量区间',
    prop: 'amountSection',
  },
  {
    label: '开始时间',
    prop: 'startTime',
    type: 'time',
  },
  {
    label: '结束时间',
    prop: 'endTime',
    type: 'time',
  },
];

const robotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarketId',
    value: '',
    list: [],
  },
];

const contractSymbolRobotCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '机器人UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '下单标记价浮动比例',
    prop: 'markFloatingRatio',
  },
  {
    label: '下单成交价浮动比例',
    prop: 'floatingRatio',
  },

  {
    label: '最新成交最小张数',
    prop: 'minSheets',
  },
  {
    label: '最新成交最大张数',
    prop: 'maxSheets',
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion',
  },
  {
    label: '深度参数',
    prop: 'depthParameter',
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }],
  },
  {
    label: '是否模拟',
    prop: 'isMock',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }],
  },
  {
    label: '模拟交易对',
    prop: 'mockCoinMarket',
  },

  {
    label: '是否正常',
    prop: 'isFormal',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '都关闭', val: 0 }, { text: '正常打开', val: 1 }, { text: '模拟盘打开', val: 2 }, { text: '都打开', val: 3 }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
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

const contractSymbolRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '机器人UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '下单标记价浮动比例',
    prop: 'markFloatingRatio',
  },
  {
    label: '下单成交价浮动比例',
    prop: 'floatingRatio',
  },

  {
    label: '最新成交最小张数',
    prop: 'minSheets',
  },
  {
    label: '最新成交最大张数',
    prop: 'maxSheets',
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion',
  },
  {
    label: '深度参数',
    prop: 'depthParameter',
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }],
  },
  {
    label: '是否模拟',
    prop: 'isMock',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }],
  },
  {
    label: '模拟交易对',
    prop: 'mockCoinMarket',
  },

  {
    label: '是否正常',
    prop: 'isFormal',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '都关闭', val: 0 }, { text: '正常打开', val: 1 }, { text: '模拟盘打开', val: 2 }, { text: '都打开', val: 3 }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const contractSymbolRobotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const chainTypeCol = [
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '相关币种',
    prop: 'coinName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
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
        alias: 'edit',
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const chainTypeColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '相关币种',
    prop: 'coinName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const plateAreaCol = [
  {
    label: '板块名称',
    prop: 'name',
  },
  {
    label: '板块描述',
    prop: 'desc',
  },
  {
    label: '英文描述',
    prop: 'descEn',
  },
  {
    label: '相关交易对-是否合约',
    prop: 'pairList',
    key1: 'coinMarket',
    key2: 'supportContract',
    type: 'valueArr',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del',
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const plateAreaColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '相关币种',
    prop: 'coinName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const coinWhiteListCol = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '单笔限额',
    prop: 'singleMaxAmount',
  },
  {
    label: '单日限额',
    prop: 'dayMaxAmount',
  },
  {
    label: 'UID',
    prop: 'uidList',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const coinWhiteListColNoBtn = [
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '相关币种',
    prop: 'coinName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const contractRobotCol = [
  {
    label: 'ID',
    prop: 'uid',
  },
  {
    label: '机器人ID',
    prop: 'createTime',
  },
  {
    label: '币对',
    prop: 'a3',
  },
  {
    label: '下单委托深度取值比例（%）',
    prop: 'a3',
  },
  {
    label: '深度类型',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }],
  },
  {
    label: '创建时间',
    prop: 'positionAmount',
  },
  {
    label: '更新时间',
    prop: 'amount',
  },
  {
    label: '启动状态',
    prop: 'trstart',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart',
  },
];

const contractRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'uid',
  },
  {
    label: '机器人ID',
    prop: 'createTime',
  },
  {
    label: '币对',
    prop: 'a3',
  },
  {
    label: '下单委托深度取值比例（%）',
    prop: 'a3',
  },
  {
    label: '深度类型',
    prop: 'positionDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }],
  },
  {
    label: '创建时间',
    prop: 'positionAmount',
  },
  {
    label: '更新时间',
    prop: 'amount',
  },
];

const contractRobotConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const currencyRobotCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '机器人UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion',
  },
  {
    label: '深度参数',
    prop: 'depthParameter',
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
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

const currencyRobotColNoBtn = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '机器人UID',
    prop: 'uid',
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '下单委托深度取值比例',
    prop: 'proportion',
  },
  {
    label: '深度参数',
    prop: 'depthParameter',
  },
  {
    label: '启动状态',
    prop: 'statusText',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未启动', val: 1 }, { text: '已启动', val: 2 }],
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const currencyRobotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

export {
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
};
