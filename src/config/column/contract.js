/*
 * @Author: your name
 * @Date: 2020-04-09 10:01:18
 * @LastEditTime: 2020-12-22 18:01:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\symbol.js
 */

// import $api from '@/api/api';
import Store from '@/store';
const coinContractCol = [
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
    width:'200',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
      {
        label: '一键撤单',
        fn: 'allCancel',
        type: 'primary',
        alias: 'allCancel',
      },
      {
        label: '一键平仓',
        fn: 'allClose',
        type: 'primary',
        alias: 'allClose',
      },

      {
        label: '一键删除K线',
        fn: 'onekeyDelete',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT','CNHT'],
        type: 'primary',
        alias: 'onekeyDelete',
      },

      {
        label: '一键拉取K线',
        fn: 'onekeyPull',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT','CNHT'],
        type: 'primary',
        alias: 'onekeyPull',
      },

      
      {
        label: '一键更新K线',
        fn: 'onekeyUpdate',
        filter_type: 'filter_indexOf_Except',
        filter_key: 'coinMarket',
        filter_status: ['ALPT','CNHT'],
        type: 'primary',
        alias: 'onekeyUpdate',
      },

      
    ],
  },
];

const coinContractColNoBtn = [
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

const coinContractConfig = [];

const billContractCol = [
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
  },
  {
    label: '金额',
    prop: 'amount',
    type: 'myShowHide',
    filters: 'type',
    filtersValue: [18, 19],
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
        text: '开空手续费',
        val: 5,
      },
      {
        text: '开多手续费',
        val: 6,
      },
      {
        text: '币币转入合约',
        val: 7,
      },
      {
        text: '合约转出币币',
        val: 8,
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
        text: '法币转入合约',
        val: 12,
      },
      {
        text: '合约转出法币',
        val: 13,
      },
      {
        text: '合约划转',
        val: 15,
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

const billContractConfig = [
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
    prop: 'coinId',
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
        label: '开空手续费',
        value: 5,
      },
      {
        label: '开多手续费',
        value: 6,
      },
      {
        label: '币币转入合约',
        value: 7,
      },
      {
        label: '合约转出币币',
        value: 8,
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
        label: '法币转入合约',
        value: 12,
      },
      {
        label: '合约转出法币 ',
        value: 13,
      },
      {
        label: '合约划转',
        value: 15,
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

const generalEntrustContractCol = [
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '委托单号',
    prop: 'entrustNo',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '委托方向',
    prop: 'type',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '买',
        val: 1,
      },
      {
        text: '卖',
        val: 2,
      },
    ],
  },
  {
    label: '委托量（张）',
    prop: 'entrustAmount',
  },
  {
    label: '成交量（张）',
    prop: 'dealAmount',
  },
  {
    label: '委托价',
    prop: 'entrustPrice',
  },
  {
    label: '触发价',
    prop: 'triggerPrice',
  },
  {
    label: '委托保证金',
    prop: 'entrustDeposit',
  },
  {
    label: '委托状态',
    prop: 'status',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '待交易',
        val: 0,
      },
      {
        text: '成交',
        val: 1,
      },
      {
        text: '部分成交',
        val: 2,
      },
      {
        text: '撤销中',
        val: 3,
      },
      {
        text: '已撤销',
        val: 4,
      },
    ],
  },
  {
    label: '委托价类型',
    prop: 'priceType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '限价开仓',
        val: 1,
      },
      {
        text: '市价开仓',
        val: 2,
      },
      {
        text: '限价平仓',
        val: 3,
      },
      {
        text: '市价平仓',
        val: 4,
      },
    ],
  },
  {
    label: '杠杆倍数',
    prop: 'leverTimes',
  },
  {
    label: '平仓类型',
    prop: 'closePositionsType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常开仓单',
        val: 0,
      },
      {
        text: '系统强平',
        val: 1,
      },
      {
        text: '用戶手动限价平仓',
        val: 2,
      },
      {
        text: '用户手动市价平仓',
        val: 3,
      },
      {
        text: '系统强减',
        val: 4,
      },
      {
        text: '用户市价全平',
        val: 5,
      },
    ],
  },
  {
    label: '仓位',
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
    label: '体验券ID',
    prop: 'experienceId',
  },
  {
    label: '是否是体验券',
    prop: 'isExperience',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '本金券（含券）',
        val: 1,
      },
      {
        text: '本金',
        val: 0,
      },
    ],
  },
];

const generalEntrustContractConfig = [
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
    type: 'onlyNumber',
    label: '委托单号',
    prop: 'entrustNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '委托方向',
    prop: 'type',
    value: '',
    list: [
      {
        label: '买',
        value: 1,
      },
      {
        label: '卖',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '平仓类型',
    prop: 'closePositionsType',
    value: '',
    list: [
      {
        label: '正常开仓单',
        value: 0,
      },
      {
        label: '系统强平',
        value: 1,
      },
      {
        label: '用戶手动限价平仓',
        value: 2,
      },
      {
        label: '用户手动市价平仓',
        value: 3,
      },
      {
        label: '系统强减',
        value: 4,
      },
    ],
  },
  {
    type: 'select',
    label: '委托状态',
    prop: 'status',
    value: '',
    list: [
      {
        label: '待交易',
        value: 0,
      },
      {
        label: '成交',
        value: 1,
      },
      {
        label: '部分成交',
        value: 2,
      },
      {
        label: '撤销中',
        value: 3,
      },
      {
        label: '已撤销',
        value: 4,
      },
    ],
  },
  {
    type: 'select',
    label: '委托价类型',
    prop: 'priceType',
    value: '',
    list: [
      {
        label: '限价开仓',
        value: 1,
      },
      {
        label: '市价开仓',
        value: 2,
      },
      {
        label: '限价平仓',
        value: 3,
      },
      {
        label: '市价平仓',
        value: 4,
      },
    ],
  },
  {
    type: 'select',
    label: '资金类型',
    prop: 'isExperience',
    value: '',
    width: 150,
    list: [
      {
        label: '本金',
        value: 0,
      },
      {
        label: '本金券（含券）',
        value: 1,
      },
    ],
  },
];

const planEntrustContractCol = [
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '委托单号',
    prop: 'entrustNo',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },

  {
    label: '止盈止损类型',
    prop: 'isStop',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '不是',
        val: 0,
      },
      {
        text: '止盈',
        val: 1,
      },
      {
        text: '止损',
        val: 2,
      },
    ],
  },

  {
    label: '委托方向',
    prop: 'type',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '买',
        val: 1,
      },
      {
        text: '卖',
        val: 2,
      },
    ],
  },

  {
    label: '委托量',
    prop: 'entrustAmount',
  },
  {
    label: '委托价',
    prop: 'entrustPrice',
  },
  {
    label: '触发价',
    prop: 'triggerPrice',
  },
  {
    label: '委托状态',
    prop: 'isTrigger',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '待触发',
        val: 0,
      },
      {
        text: '已触发',
        val: 1,
      },
      {
        text: '已撤销',
        val: 2,
      },
      {
        text: '失败',
        val: 3,
      },
    ],
  },
  {
    label: '委托价类型',
    prop: 'priceType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '计划限价开仓',
        val: 5,
      },
      {
        text: '计划限价平仓',
        val: 6,
      },
      {
        text: '计划市价开仓',
        val: 7,
      },
      {
        text: '计划市价平仓',
        val: 8,
      },
    ],
  },
  {
    label: '杠杆倍数',
    prop: 'leverTimes',
  },
  {
    label: '平仓类型',
    prop: 'closePositionsType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常开仓单',
        val: 0,
      },
      {
        text: '系统强平',
        val: 1,
      },
      {
        text: '用戶手动限价平仓',
        val: 2,
      },
      {
        text: '用户手动市价平仓',
        val: 3,
      },
      {
        text: '系统强减',
        val: 4,
      },
      {
        text: '用户市价全平',
        val: 5,
      },
    ],
  },
  {
    label: '仓位',
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
];

const planEntrustContractConfig = [
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
    type: 'onlyNumber',
    label: '委托单号',
    prop: 'entrustNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '委托方向',
    prop: 'type',
    value: '',
    list: [
      {
        label: '买',
        value: 1,
      },
      {
        label: '卖',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '平仓类型',
    prop: 'closePositionsType',
    value: '',
    list: [
      {
        label: '正常开仓单',
        value: 0,
      },
      {
        label: '系统强平',
        value: 1,
      },
      {
        label: '用戶手动限价平仓',
        value: 2,
      },
      {
        label: '用户手动市价平仓',
        value: 3,
      },
      {
        label: '系统强减',
        value: 4,
      },
    ],
  },
  {
    type: 'select',
    label: '委托状态',
    prop: 'status',
    value: '',
    list: [
      {
        label: '待触发',
        value: 0,
      },
      {
        label: '已触发',
        value: 1,
      },
      {
        label: '已撤销',
        value: 2,
      },
      {
        label: '失败',
        value: 3,
      },
    ],
  },
  {
    type: 'select',
    label: '委托价类型',
    prop: 'priceType',
    value: '',
    list: [
      {
        label: '计划限价开仓',
        value: 5,
      },
      {
        label: '计划限价平仓',
        value: 6,
      },
      {
        label: '计划市价开仓',
        value: 7,
      },
      {
        label: '计划市价平仓',
        value: 8,
      },
    ],
  },
  {
    type: 'select',
    label: '是否计划止盈止损单',
    prop: 'isStop',
    value: '',
    list: [
      {
        label: '不是',
        value: 0,
      },
      {
        label: '是止盈',
        value: 1,
      },
      {
        label: '是止损',
        value: 2,
      },
    ],
  },
];

const dealContractCol = [
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  // {
  //   label: '代理商UID',
  //   prop: 'uid',
  // },
  // {
  //   label: '仓位ID',
  //   prop: 'a100',
  // },
  {
    label: '成交单号',
    prop: 'dealNo',
  },

  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '委托单号',
    prop: 'entrustNo',
  },
  {
    label: '委托价',
    prop: 'entrustPrice',
  },
  {
    label: '对手委托单号',
    prop: 'targetEntrustNo',
  },
  // {
  //   label: '交易账户UID',
  //   prop: 'uid',
  // },
  {
    label: '对手UID',
    prop: 'targetUid',
  },
  {
    label: '成交方向',
    prop: 'direction',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '买成交',
        val: 1,
      },
      {
        text: '卖成交',
        val: 2,
      },
    ],
  },
  {
    label: '资金类型',
    prop: 'isExperience',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '本金券（含券）',
        val: 1,
      },
      {
        text: '本金',
        val: 0,
      },
    ],
  },
  {
    label: '成交价',
    prop: 'dealPrice',
  },
  {
    label: '成交量',
    prop: 'amount',
  },
  {
    label: '买方手续费',
    prop: 'buyHandlingFee',
  },
  {
    label: '卖方手续费',
    prop: 'sellHandlingFee',
  },
];

const dealContractConfig = [
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
  // {
  //   type: 'text',
  //   label: '代理商UID',
  //   prop: 'uid',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'onlyNumber',
    label: '对手UID',
    prop: 'targetUid',
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
    type: 'onlyNumber',
    label: '委托单号',
    prop: 'entrustNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '对手委托单号',
    prop: 'targetEntrustNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '成交号',
    prop: 'dealNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '成交方向',
    prop: 'direction',
    value: '',
    list: [
      {
        label: '买成交',
        value: 1,
      },
      {
        label: '卖成交',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '资金类型',
    prop: 'isExperience',
    value: '',
    list: [{ label: '本金', value: 0 }, { label: '本金券（含券）', value: 1 }],
  },
];

const positionContractCol = [
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '最上级代理商UID',
    prop: 'topAgentId',
    width: 140,
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
    type: 'getTimesCol',
    label: '维持保证金率',
    prop: 'maintenanceMarginRatio',
    prop2: '100',
    prop3: '%',
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
];

const positionContractConfig = [
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
    label: '最上级代理商UID',
    prop: 'topAgentId',
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
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'positionId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinId',
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
    list: [{ label: '本金', value: 0 }, { label: '本金券（含券）', value: 1 }],
  },
];

const closeContractCol = [
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '最上级代理商UID',
    prop: 'topAgentId',
    width: 140,
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
    type: 'getTimesCol',
    label: '维持保证金率',
    prop: 'maintenanceMargin',
    prop2: '100',
    prop3: '%',
  },
  {
    label: '是否体验券平仓',
    prop: 'experienceGoldFlag',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: true,
      },
      {
        text: '否',
        val: false,
      },
    ],
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
];

const closeContractConfig = [
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
    label: '最上级代理商UID',
    prop: 'topAgentId',
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

  {
    type: 'select',
    label: '是否体验券平仓',
    prop: 'isExperience',
    value: '',
    list: [
      {
        label: '是',
        value: 1,
      },
      {
        label: '否',
        value: 0,
      },
    ],
  },

  {
    type: 'text_rank',
    label: '已实现盈亏区间',
    prop: 'minPositionAveragePrice',
    prop2: 'maxPositionAveragePrice',
    value: [],
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '是否盈利',
    prop: 'isProfit',
    value: '',
    list: [
      {
        label: '是',
        value: 1,
      },
      {
        label: '否',
        value: 0,
      },
    ],
  },

  {
    type: 'select',
    label: '盈亏排序',
    prop: 'profitSort',
    value: '',
    list: [
      {
        label: '倒序',
        value: 1,
      },
      {
        label: '正序',
        value: 0,
      },
    ],
  },
];

const serviceChargeContractCol = [
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
  // {
  //   label: "仓位方向",
  //   prop: "a81",
  //   width:100,
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "卖", val: 1 }, { text: "已启动", val: 2 }],
  // },
  {
    label: '张数',
    prop: 'positionAmount',
  },
  // {
  //   label: "方向",
  //   prop: "a82",
  //   width:100,
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "卖", val: 1 }, { text: "已启动", val: 2 }],
  // },
  {
    label: '手续费金额',
    prop: 'handlingFee',
  },
  {
    label: '类型',
    prop: 'type',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '开仓',
        val: 1,
      },
      {
        text: '平仓',
        val: 2,
      },
    ],
  },
  // {
  //   label: '币对',
  //   prop: 'a92',
  // },
  // {
  //   label: "仓位类型",
  //   prop: "a43",
  //   width:100,
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "卖", val: 1 }, { text: "已启动", val: 2 }],
  // },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];

const serviceChargeContractConfig = [
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
    type: 'onlyNumber',
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
    label: '类型',
    prop: 'type',
    value: '',
    list: [
      {
        label: '开仓',
        value: 1,
      },
      {
        label: '平仓',
        value: 2,
      },
    ],
  },
  // {
  //   type: 'select',
  //   label: '手续费类型',
  //   prop: 'b93',
  //   value: '',
  //   list: [
  //     // { label: '未付款', value: 1 },
  //     // { label: '已付款(等待放行)', value: 2 },
  //   ],
  // },
  // {
  //   type: 'select',
  //   label: '仓位类型',
  //   prop: 'b90',
  //   value: '',
  //   list: [
  //     // { label: '未付款', value: 1 },
  //     // { label: '已付款(等待放行)', value: 2 },
  //   ],
  // }
];

const treatyAssetsContractCol = [
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
  },
];

const treatyAssetsContractConfig = [
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
    prop: 'coinMarketId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '总资产排序',
    prop: 'totalBalanceSort',
    value: '',
    list: [
      {
        label: '倒序',
        value: 1,
      },
      {
        label: '正序',
        value: 0,
      },
    ],
  },
];

const flowRecordContractCol = [
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
      {
        text: '-',
        val: -1,
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
        text: '币币转入合约',
        val: 7,
      },
      {
        text: '合约转出币币',
        val: 8,
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
        text: '法币转入合约',
        val: 12,
      },
      {
        text: '合约转出法币 ',
        val: 13,
      },
      {
        text: '合约划转 ',
        val: 15,
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
    type: 'myShowHide',
    filters: 'type',
    filtersValue: [18, 19],
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

const flowRecordContractConfig = [
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
    prop: 'coinMarketId',
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
        label: '币币转入合约',
        value: 7,
      },
      {
        label: '合约转出币币',
        value: 8,
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
        label: '法币转入合约',
        value: 12,
      },
      {
        label: '合约转出法币',
        value: 13,
      },
      {
        label: '合约划转 ',
        value: 15,
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

const historicalContractCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'createTime',
  },
  {
    label: '币对',
    prop: 'a3',
  },
  {
    label: '总盈亏资产（USDT）',
    prop: 'a3',
  },
  {
    label: '多仓累计盈亏（USDT）',
    prop: 'a3',
  },
  {
    label: '空仓累计盈亏（USDT）',
    prop: 'a3',
  },
];

const historicalContractConfig = [
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
    type: 'text_rank',
    label: '盈亏价格区间',
    prop: 'minPrice',
    prop2: 'maxPrice',
    value: [],
    placeHolder: '请输入',
  },
];

const contractRobotCol = [
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
    label: '成交价浮动比例',
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
    filters: [
      {
        text: '未启动',
        val: 1,
      },
      {
        text: '已启动',
        val: 2,
      },
    ],
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

const contractRobotColNoBtn = [
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
    label: '成交价浮动比例',
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
    filters: [
      {
        text: '未启动',
        val: 1,
      },
      {
        text: '已启动',
        val: 2,
      },
    ],
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

const contractRobotConfig = [
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const gearSettingCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '档位',
    prop: 'gear',
  },
  {
    label: '最高可用杠杆倍数',
    prop: 'maximumLeverage',
  },
  {
    label: '最小委托张数',
    prop: 'minPositionAmount',
  },
  {
    label: '最大委托张数',
    prop: 'maxPositionAmount',
  },
  {
    type: 'getTimesCol',
    label: '维持保证金率',
    prop: 'maintenanceMarginRatio',
    prop2: '100',
    prop3: '%',
  },
  {
    label: '最低初始保证金率',
    prop: 'minimumInitialMargin',
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
    label: '是否默认选择',
    prop: 'isDefault',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart',
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

const gearSettingConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const contractAccountConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '费用方式',
    prop: 'modeOfCost',
    value: '',
    list: [
      {
        label: '关闭',
        value: 0,
      },
      {
        label: '正常开启',
        value: 1,
      },
      {
        label: '多空均收',
        value: 2,
      },
    ],
  },
];

const contractAccountCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '基本利率',
    prop: 'basicInterestRate',
  },
  {
    label: '溢价利率区间',
    type: 'textDouble',
    prop: 'premiumRateMin',
    prop2: 'premiumRateMax',
  },
  {
    label: '资金利率区间',
    type: 'textDouble',
    prop: 'capitalInterestRateMin',
    prop2: 'capitalInterestRateMax',
  },
  {
    label: '触发费率时间',
    prop: 'triggerRateTime',
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
    label: '费用方式',
    prop: 'modeOfCost',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '关闭',
        val: 0,
      },
      {
        text: '正常开启',
        val: 1,
      },
      {
        text: '多空均收',
        val: 2,
      },
    ],
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

const contractFundRateConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
  
];

const contractFundRateCol = [
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

const riskLevelConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const riskLevelCol = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },

  {
    label: '风险梯度等级',
    prop: 'riskGradientLevel',
  },
  {
    label: '梯度价格区间',
    width: '150',
    prop: 'gradientPriceStart',
    prop2: 'gradientPriceEnd',
    type: 'textLineDouble',
  },
  {
    label: '平仓允许成交比例',
    prop: 'closePositionAllowRatio',
  },
  {
    label: '是否启用宕机机制',
    prop: 'downSwitch',
    width: '130',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '开',
        val: 1,
      },
      {
        text: '关',
        val: 0,
      },
    ],
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

const contractEstimateConfig = [
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'positionId',
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
    type: 'date_rank',
    label: '创建时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text_rank',
    label: '盈亏价格区间',
    prop: 'minPositionAveragePrice',
    prop2: 'maxPositionAveragePrice',
    value: [],
    placeHolder: '请输入',
  },
];

const contractEstimateCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
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
    type: 'judgeStrongPrice',
  },
  {
    label: '保证金率',
    prop: 'marginRatio',
  },
  {
    label: '可平数量',
    prop: 'flatAmount',
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
    label: '开仓价',
    prop: 'positionAveragePrice',
  },
  {
    label: '仓位方向',
    prop: 'positionDirection',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }],
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '全仓', val: 0 }, { text: '逐仓', val: 1 }],
  },
  {
    label: '未实现盈亏',
    prop: 'unRealizedProfitLoss',
  },
  {
    label: '仓位保证金',
    prop: 'fixedDeposit',
  },
  {
    label: '待平数量',
    prop: 'waitForFlatAmount',
  },
];

const contractResultCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentId',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
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
    type: 'judgeStrongPrice',
  },
  {
    label: '保证金率',
    prop: 'marginRatio',
  },
  {
    label: '可平数量',
    prop: 'flatAmount',
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
    label: '开仓价',
    prop: 'positionAveragePrice',
  },
  {
    label: '仓位方向',
    prop: 'positionDirection',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '多仓', val: 1 }, { text: '空仓', val: 2 }],
  },
  {
    label: '仓位类型',
    prop: 'positionType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '全仓', val: 0 }, { text: '逐仓', val: 1 }],
  },
  {
    label: '未实现盈亏',
    prop: 'unRealizedProfitLoss',
  },
  {
    label: '仓位保证金',
    prop: 'fixedDeposit',
  },
  {
    label: '待平数量',
    prop: 'waitForFlatAmount',
  },
  {
    label: '预估盈亏资产',
    prop: 'estimateRealizedProfitLoss',
  },
];

const contractResultConfig = [
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'positionId',
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
    type: 'date_rank',
    label: '创建时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text_rank',
    label: '盈亏价格区间',
    prop: 'minPositionAveragePrice',
    prop2: 'maxPositionAveragePrice',
    value: [],
    placeHolder: '请输入',
  },
];

const contractTacticsConfig = [
  {
    type: 'select',
    label: '币对',
    prop: 'coinMarket',
    value: '',
    list: [],
  },
];

const contractTacticsCol = [
  {
    label: 'id',
    prop: 'id',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '多仓开仓滑点',
    prop: 'longPositionOpenPositionPoint',
  },
  {
    label: '空仓开仓滑点',
    prop: 'shortPositionOpenPositionPoint',
  },
  {
    label: '多仓平仓滑点',
    prop: 'longPositionClosePositionPoint',
  },
  {
    label: '空仓平仓滑点',
    prop: 'shortPositionClosePositionPoint',
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

const accountContractCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '当前可用',
    prop: 'balance',
    type: 'plusOthersNumber',
    othersNumber: '70000',
  },
  {
    label: '累计划入',
    prop: 'totalTransferIn',
  },
  // {
  //   label: '累计盈利',
  //   prop: 'totalProfit',
  // },

  {
    type: 'plusOthersNumber',
    label: '累计盈亏',
    prop:"totalProfit",
    prop2:"totalLoss",
  },

  {
    label: '累计手续费返佣',
    type: 'minusOthersNumber',
    prop: 'totalCommission',
    othersNumber: '70000',
  },
  // {
  //   label: '累计亏损',
  //   prop: 'totalLoss',
  // },
  {
    label: '累计销账',
    prop: 'totalWriteOff',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 450,
    btnGroup: [
      {
        label: '销账',
        fn: 'destroy',
        type: 'primary',
        alias: 'destroy',
      },
      {
        label: '收益记录',
        fn: 'earningsRecord',
        type: 'primary',
        alias: 'earningsRecord',
      },
      {
        label: '划转记录',
        fn: 'transferRecord',
        type: 'primary',
        alias: 'transferRecord',
      },
      {
        label: '销账记录',
        fn: 'destroyBill',
        type: 'primary',
        alias: 'destroyBill',
      },
      {
        label: '收益流水',
        fn: 'earningsFlow',
        type: 'primary',
        alias: 'earningsFlow',
      },
    ],
  },
];

const destroyBillConfig = [
  {
    type: 'select',
    label: '币种类型',
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

const destroyBillCol = [
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: '币种',
    prop: 'coinMarket',
  },
  {
    label: '数量',
    prop: 'longPositionOpenPositionPoint',
  },
  {
    label: '时间',
    prop: 'shortPositionOpenPositionPoint',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 120,
    btnGroup: [
      {
        label: '查看详情',
        fn: 'details',
        type: 'primary',
        alias: 'details',
      },
    ],
  },
];

const earningsRecordConfig = [
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

const earningsRecordCol = [
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '开仓手续费',
    prop: 'openFee',
  },
  {
    label: '平仓手续费',
    prop: 'closeFee',
  },
  {
    label: '爆仓平多',
    prop: 'explosiveWarehousesLong',
  },
  {
    label: '爆仓平空',
    prop: 'explosiveWarehousesShort',
  },
  {
    label: '平多',
    prop: 'closeLong',
  },
  {
    label: '平空',
    prop: 'closeShort',
  },
  {
    label: '返佣',
    prop: 'commission',
  },
  {
    label: '资金费用',
    prop: 'assetFee',
  },
  {
    label: '盈亏合计',
    prop: 'total',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
];
const earningsFlowCol = [
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'optType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '资产账户之间的划转',
        val: 84,
      },
      {
        text: '返佣',
        val: 88,
      },
      {
        text: '销账',
        val: 89,
      },
      {
        text: '爆仓平多',
        val: 90,
      },
      {
        text: '爆仓平空',
        val: 91,
      },
      {
        text: '平多',
        val: 92,
      },
      {
        text: '平空',
        val: 93,
      },
      {
        text: '资金费用',
        val: 94,
      },
      {
        text: '分红分摊金额',
        val: 95,
      },
      // {
      //   text: '合约手续费',
      //   val: 96,
      // },
      // {
      //   text: '平仓盈亏',
      //   val: 97,
      // },
      {
        text: '普通用户手续费返佣',
        val: 101,
      },
      {
        text: '代理商手续费返佣',
        val: 102,
      },
      {
        text: '代理商团队长模式的返佣',
        val: 103,
      },
      {
        text: '平台手续费返佣',
        val: 104,
      },
      {
        text: '平台团队长模式的返佣',
        val: 105,
      },
    ],
  },
  {
    label: '变动资产金额',
    prop: 'amount',
  },
  {
    label: '变动前可用金额',
    prop: 'beforeAmount',
  },
  {
    label: '变动后可用金额',
    prop: 'afterAmount',
  },
  {
    label: '仓位Id',
    prop: 'relateRecdId',
  },
];
const earningsFlowConfig = [
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType',
    value: '',
    list: [
      {
        label: '资产账户之间的划转',
        value: 84,
      },
      {
        label: '返佣',
        value: 88,
      },
      {
        label: '销账',
        value: 89,
      },
      {
        label: '爆仓平多',
        value: 90,
      },
      {
        label: '爆仓平空',
        value: 91,
      },
      {
        label: '平多',
        value: 92,
      },
      {
        label: '平空',
        value: 93,
      },
      {
        label: '资金费用',
        value: 94,
      },
      {
        label: '分红分摊金额',
        value: 95,
      },
      // {
      //   label: '合约手续费',
      //   value: 96,
      // },
      // {
      //   label: '平仓盈亏',
      //   value: 97,
      // },
      {
        label: '普通用户手续费返佣',
        value: 101,
      },
      {
        label: '代理商手续费返佣',
        value: 102,
      },
      {
        label: '代理商团队长模式的返佣',
        value: 103,
      },
      {
        label: '平台手续费返佣',
        value: 104,
      },
      {
        label: '平台团队长模式的返佣',
        value: 105,
      },
    ],
  },
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '仓位Id',
    prop: 'relateRecdId',
    value: '',
    placeHolder: '请输入',
  },
];

const agentTransferCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '币币转入合约账户',
        val: 7,
      },
      {
        text: '合约账户转出币币账户',
        val: 8,
      },
      {
        text: '法币转入合约账户',
        val: 12,
      },
      {
        text: '合约账户转入法币账户',
        val: 13,
      },
    ],
  },

  {
    label: '金额',
    prop: 'amount',
  },
];

const agentTransferfig = [
  {
    type: 'text',
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
    label: '类型',
    prop: 'type',
    value: '',
    // 7币币转入合约账户 8：合约账户转出币币账户 12 法币转入合约账户 13 合约账户转入法币账户
    list: [
      {
        label: '币币转入合约账户',
        value: 7,
      },
      {
        label: '合约账户转出币币账户',
        value: 8,
      },
      {
        label: '法币转入合约账户',
        value: 12,
      },
      {
        label: '合约账户转入法币账户',
        value: 13,
      },
    ],
  },

  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
];

const apiKeyConfigCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '备注',
    prop: 'destext',
  },
  {
    label: 'API Key',
    prop: 'appKey',
  },
  {
    label: 'Secret Key',
    prop: 'appSecret',
  },

  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
  {
    label: '开关',
    prop: 'isShow',
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
        label: '删除',
        fn: 'del',
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const apiKeyConfigColNoBtn = [
  {
    label: '备注',
    prop: 'destext',
  },
  {
    label: 'API Key',
    prop: 'appKey',
  },
  {
    label: 'Secret Key',
    prop: 'appSecret',
  },

  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time',
  },
];

const apiKeyConfigConfig = [];

const highFrequencyMonitorCol = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '上级代理商UID',
    prop: 'agentId',
  },
  {
    label: '最上一级代理商UID',
    prop: 'topAgentId',
  },
  {
    label: '该用户单位时间内已实现盈亏',
    prop: 'realizedProfitLossInATime',
  },
  {
    label: '该用户累计已实现盈亏',
    prop: 'realizedProfitLossTotal',
  },
  {
    label: '单位时间内开仓次数',
    prop: 'openPositionInATime',
  },
  {
    label: '单位时间内平仓次数',
    prop: 'closePositionInATime',
  },
  {
    label: '用户累计入金金额',
    prop: 'depositTotal',
  },
  {
    label: '进入监控时间',
    prop: 'createTime',
  },
  {
    label: '移出监控时间',
    prop: 'updateTime',
  },
  {
    label: '监控状态',
    prop: 'monitorType',
    // 1,监控中) (2,已移出
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '监控中', val: 1 }, { text: '已移出', val: 2 }],
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 120,
    btnGroup: [
      {
        label: '移出监控',
        fn: 'remove',
        filter_type: 'array',
        filter_key: 'monitorType',
        filter_status: ['1'],
        type: 'primary',
        alias: 'remove',
      },
    ],
  },
];

const highFrequencyMonitorColNoBtn = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '上级代理商UID',
    prop: 'agentId',
  },
  {
    label: '最上一级代理商UID',
    prop: 'topAgentId',
  },
  {
    label: '该用户单位时间内已实现盈亏',
    prop: 'realizedProfitLossInATime',
  },
  {
    label: '该用户累计已实现盈亏',
    prop: 'realizedProfitLossTotal',
  },
  {
    label: '单位时间内开仓次数',
    prop: 'openPositionInATime',
  },
  {
    label: '单位时间内平仓次数',
    prop: 'closePositionInATime',
  },
  {
    label: '用户累计入金金额',
    prop: 'depositTotal',
  },
  {
    label: '进入监控时间',
    prop: 'createTime',
  },
  {
    label: '移出监控时间',
    prop: 'updateTime',
  },
  {
    label: '监控状态',
    prop: 'monitorType',
    // 1,监控中) (2,已移出
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '监控中', val: 1 }, { text: '已移出', val: 2 }],
  },
];

const highFrequencyMonitorConfig = [
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
    label: '上级代理商UID',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '最上一级代理商',
    prop: 'topAgentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '监控状态',
    prop: 'monitorType',
    // 1,监控中) (2,已移出
    value: '',
    list: [{ label: '监控中', value: 1 }, { label: '已移出', value: 2 }],
  },
];


const contractUserListCol = [
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
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '商务UID',
    prop: 'businessUid',
  },
  
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '开通合约时间',
    prop: 'usdtTradeTime',
  },
  
  
  {
    label: '累计合约净入金',
    prop: 'inAmount',
    
  },
  {
    label: '累计合约交易盈亏',
    prop: 'profitAmount',
  },
  {
    label: '累计合约交易手续费',
    prop: 'totalFeeAmount',
  },
  {
    label: '累计贡献代理返佣手续费',
    prop: 'agentFeeAmount',
  },
  {
    label: '累计贡献商务手续费',
    prop: 'bussinessFeeAmount',
  },
  {
    label: '累计贡献平台手续费',
    prop: 'platformFeeAmount',
  },
  
  {
    label: '累计使用APP时长',
    prop: 'appUsedTime',
    width: 150,
    type: 'textColorTwo',
  },
  {
    label: '累计直推邀请人数',
    prop: 'invite',
  },
  {
    label: '累计开仓次数',
    prop: 'openNum',
  },
  {
    label: '累计平仓次数',
    prop: 'unwindNum',
  },
  {
    label: '累计爆仓次数',
    prop: 'blastNum',
  },
];

const contractUserListConfig = [
  {
    type: 'date_rank',
    label: '创建时间',
    prop: 'createStartTime',
    prop2: 'createEndTime',
    value: '',
  },
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
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '商务UID',
    prop: 'businessUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'type',
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
    type: 'select',
    label: '累计合约净入金排序 ',
    prop: 'inAmountSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },

  {
    type: 'select',
    label: '累计合约交易手续费排序',
    prop: 'feeSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },

  {
    type: 'select',
    label: '累计合约交易盈亏排序',
    prop: 'profitSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },

  {
    type: 'select',
    label: '累计爆仓次数排序',
    prop: 'blastSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },

  {
    type: 'select',
    label: '累计平仓次数排序',
    prop: 'unwindSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },

  {
    type: 'select',
    label: '累计开仓次数排序',
    prop: 'openSort',
    value: '',
    list: [
      { label: '正序', value: 1 },
      { label: '倒序', value: 2 },
    ],
  },
];


export {
  contractUserListConfig,
  contractUserListCol,
  highFrequencyMonitorConfig,
  highFrequencyMonitorColNoBtn,
  highFrequencyMonitorCol,
  apiKeyConfigCol,
  apiKeyConfigColNoBtn,
  apiKeyConfigConfig,
  agentTransferfig,
  agentTransferCol,
  contractResultConfig,
  contractResultCol,
  earningsFlowCol,
  earningsFlowConfig,
  earningsRecordConfig,
  earningsRecordCol,
  destroyBillCol,
  destroyBillConfig,
  accountContractCol,
  contractTacticsCol,
  contractTacticsConfig,
  contractEstimateConfig,
  contractEstimateCol,
  riskLevelCol,
  riskLevelConfig,
  contractFundRateCol,
  contractFundRateConfig,
  contractAccountCol,
  contractAccountConfig,
  gearSettingCol,
  gearSettingConfig,
  coinContractCol,
  coinContractColNoBtn,
  coinContractConfig,
  billContractCol,
  billContractConfig,
  generalEntrustContractCol,
  generalEntrustContractConfig,
  planEntrustContractCol,
  planEntrustContractConfig,
  dealContractCol,
  dealContractConfig,
  positionContractCol,
  positionContractConfig,
  closeContractCol,
  closeContractConfig,
  serviceChargeContractCol,
  serviceChargeContractConfig,
  treatyAssetsContractCol,
  treatyAssetsContractConfig,
  flowRecordContractCol,
  flowRecordContractConfig,
  historicalContractCol,
  historicalContractConfig,
  contractRobotCol,
  contractRobotColNoBtn,
  contractRobotConfig,
};
