/*
 * @Author: cws
 * @Date: 2020-04-07 15:53:08
 * @LastEditTime: 2020-09-16 18:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\exchange.js
 */

import Store from '@/store';
// 委托记录
const orderCol = [
  {
    label: '委托号',
    prop: 'entrustNo',
    width: '200'
  },
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '委托类型',
    prop: 'priceType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '限价', val: 1, type: '' },
      { text: '市价', val: 2, type: 'warning' },
    ]
  },
  {
    label: '委托方向',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '买入', val: 1, type: 'success' },
      { text: '卖出', val: 2, type: 'danger' },
    ]
  },
  {
    label: '委托价',
    prop: 'price',
    width: '200'
  },
  {
    label: '委托量',
    prop: 'amount',
    width: '200'
  },
  {
    label: '成交均价',
    prop: 'averagePrice',
  },
  {
    label: '挂单金额',
    prop: 'onAmount',
  },
  {
    label: '成交量',
    prop: 'dealAmount',
  },
  {
    label: '委托状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '待成交', val: 0, type: '' },
      { text: '全部成交', val: 1, type: 'success' },
      { text: '部分成交', val: 2, type: 'info' },
      { text: '撤单中', val: 3, type: 'warning' },
      { text: '已撤单', val: 4, type: 'warning' },
    ]
  },
  {
    label: '委托时间',
    prop: 'createTime',
    type: 'time'
  },
]

// 委托记录查询 - search 配置
let orderCofig = [
  {
    type: 'date_rank',
    label: '委托时间',
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
    subType:"uid"
  },
  {
    type: 'text',
    label: '委托号',
    prop: 'entrustNo',
    value: '',
    placeHolder: '请输入委托号',
  },
  {
    type: 'select',
    label: '委托类型',
    prop: 'priceType',
    value: '',
    list: [
      { label: '限价', value: 1 },
      { label: '市价', value: 2 }
    ]
  },
  {
    type: 'select',
    label: '委托方向',
    prop: 'type',
    value: '',
    list: [
      { label: '买入', value: 1 },
      { label: '卖出', value: 2 }
    ]
  },
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: []
  },
  {
    type: 'select',
    label: '委托状态',
    prop: 'status',
    value: '',
    list: [
      { label: '待成交', value: 0 },
      { label: '全部成交', value: 1 },
      { label: '部分成交', value: 2 },
      { label: '撤单中', value: 3 },
      { label: '已撤单', value: 4 }
    ]
  },
  {
    type: 'text_rank',
    label: '委托价格区间',
    prop: 'minPrice',
    prop2: 'maxPrice',
    value: [],
    placeHolder: '请输入',
  },
]

// 委托记录--详情成交列表
const rowCol = [
  {
    label: '交易笔数',
    prop: 'ex',
  },
  {
    label: '账号类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '客户', val: 1 },
      { text: '操盘手', val: 2 },
    ]
  },
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: '对方账号',
    prop: 'phone',
  },
  {
    label: '成交价',
    prop: 'exPrice',
  },
  {
    label: '成交量',
    prop: 'amount',
  },
  {
    label: '成交额',
    prop: 'dealAmount',
  },
  {
    label: '手续费',
    prop: 'exFee',
  },
  {
    label: '成交时间',
    prop: 'createTime',
  },
]


// 成交记录
const tradeCol = [
  {
    label: '成交号',
    prop: 'dealNo',
    width: '200'
  },
  {
    label: '委托号',
    prop: 'entrustNo',
    width: '200'
  },
  {
    label: '交易对',
    prop: 'coinMarket',
  },
  {
    label: '买方UID',
    prop: 'buyUid',
  },
  {
    label: '卖方UID',
    prop: 'sellUid',
  },
  {
    label: '成交价',
    prop: 'dealPrice',
    width: '200'
  },
  {
    label: '成交量',
    prop: 'amount',
    width: '200'
  },
  {
    label: '成交额',
    prop: 'dealAmount',
    width: '200'
  },
  {
    label: '买方手续费',
    prop: 'buyFee',
  },
  {
    label: '卖方手续费',
    prop: 'sellFee',
  },
  {
    label: '成交时间',
    prop: 'createTime',
    type: 'time'
  },
]

const tradeConfig = [
  {
    type: 'date_rank',
    label: '成交时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: "",
  },
  {
    type: 'text',
    label: '买方UID',
    prop: 'buyUid',
    value: '',
    placeHolder: '请输入',
    subType:"uid"
  },
  {
    type: 'text',
    label: '卖方UID',
    prop: 'sellUid',
    value: '',
    placeHolder: '请输入',
    subType:"uid"
  },
  {
    type: 'text',
    label: '成交号',
    prop: 'dealNo',
    value: '',
    placeHolder: '请输入成交号',
  },
  {
    type: 'text',
    label: '委托号',
    prop: 'entrustNo',
    value: '',
    placeHolder: '请输入委托号',
  },
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: []
  }
]


const orderSwitchCol = [
  {
    label: "交易对",
    prop: "title",
  },
  {
    label: "操作时间",
    prop: "createTime",
  },
  {
    label: "下单开关状态",
    prop: "status",
    type: "switch",
    fn: "switchCoin",
    alias:"trputon"
  }
]
const orderSwitchColNoBtn = [
  {
    label: "交易对",
    prop: "title",
  },
  {
    label: "操作时间",
    prop: "createTime",
  }
]
const orderSwitchConfig = [
  {
    type: 'select',
    label: '委托类型',
    prop: 'priceType',
    value: '',
    list: [
    ]
  }
]


const marketAccountCol = [

]
const marketAccountNoBtn = [

]
const marketAccountCofig = [
  {
    type: "date_rank",
    label: "时间区间",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    label: 'UID',
    prop: 'uid',
    type:"text",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinName',
    value: '',
    list: []
  }
]

export {
  marketAccountCol, marketAccountNoBtn, marketAccountCofig,
  orderCol,
  orderCofig,
  rowCol,
  tradeCol,
  tradeConfig,
  orderSwitchCol, orderSwitchColNoBtn, orderSwitchConfig
}
