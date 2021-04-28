/*
 * @Author: your name
 * @Date: 2020-04-09 10:01:18
 * @LastEditTime: 2020-12-28 10:52:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\symbol.js
 */

// import $api from '@/api/api';
import Store from '@/store';

const assetManageListCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      { text: '手续费账号', val: 101 },
      { text: '成本账号', val: 102 },
      { text: '支出账号', val: 103 },
      { text: '星球充值账号', val: 105 },
      { text: '合约账号', val: 106 },
      { text: '合约体验金账号', val: 107 },
    ],
  },
  {
    label: '更新时间',
    prop: 'updateTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const assetManageListColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      { text: '手续费账号', val: 101 },
      { text: '成本账号', val: 102 },
      { text: '支出账号', val: 103 },
      { text: '星球充值账号', val: 105 },
      { text: '合约账号', val: 106 },
      { text: '合约体验金账号', val: 107 },
    ],
  },
  {
    label: '更新时间',
    prop: 'updateTime',
  },
];

const assetManageListConfig = [
  {
    type:'number',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeholder: '请输入',
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'userType',
    value: '',
    list: [

      { label: '手续费账号', value: 101 },
      { label: '成本账号', value: 102 },
      { label: '支出账号', value: 103 },
      { label: '星球充值账号', value: 105 },
      { label: '合约账号', value: 106 },
      { label: '合约体验金账号', value: 107 },
    ],
  },
];

const transferRecordCol = [
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '数量（金额）',
    prop: 'amount',
  },
  {
    label: '划出账号',
    prop: 'fromUid',
  },
  {
    label: '划出账号类型',
    prop: 'fromUserTypeName',
  },
  {
    label: '接收账号',
    prop: 'toUid',
  },
  {
    label: '接收账号类型',
    prop: 'toUserTypeName',
  },
  // {
  //   label: '划出账号类型',
  //   prop: 'fromUserType',
  //   type: "filter",
  //   show_type: "text",
  //   width:100,
  //   filters: [
  //     { text: "收益账号", val: 101 },
  //     { text: "成本账号", val: 102 },
  //     { text: "支出账号", val: 103 },
  //   ]
  // },
  // {
  //   label: '接收账号类型',
  //   prop: 'toUserType',
  //   type: "filter",
  //   show_type: "text",
  //   width:100,
  //   filters: [
  //     { text: "收益账号", val: 101 },
  //     { text: "成本账号", val: 102 },
  //     { text: "支出账号", val: 103 },
  //   ]
  // },
  {
    label: '操作人',
    prop: 'operateUsername',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const transferRecordColNoBtn = [
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '数量（金额）',
    prop: 'amount',
  },
  {
    label: '划出账号',
    prop: 'fromUid',
  },
  {
    label: '划出账号类型',
    prop: 'fromUserTypeName',
  },
  {
    label: '接收账号',
    prop: 'toUid',
  },
  {
    label: '接收账号类型',
    prop: 'toUserTypeName',
  },
  // {
  //   label: '划出账号类型',
  //   prop: 'fromUserType',
  //   type: "filter",
  //   show_type: "text",
  //   width:100,
  //   filters: [
  //     { text: "收益账号", val: 101 },
  //     { text: "成本账号", val: 102 },
  //     { text: "支出账号", val: 103 },
  //   ]
  // },
  // {
  //   label: '接收账号类型',
  //   prop: 'toUserType',
  //   type: "filter",
  //   show_type: "text",
  //   width:100,
  //   filters: [
  //     { text: "收益账号", val: 101 },
  //     { text: "成本账号", val: 102 },
  //     { text: "支出账号", val: 103 },
  //   ]
  // },
  {
    label: '操作人',
    prop: 'operateUsername',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
];

const transferRecordConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeholder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'id',
    value: '',
    placeholder: '请输入',
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
    label: '划出账号类型',
    prop: 'fromUserType',
    value: '',
    list: [
      { label: '手续费账号', value: 101 },
      { label: '成本账号', value: 102 },
      { label: '支出账号', value: 103 },
      { label: '子支出账号', value: 104 },
    ],
  },
  {
    type: 'select',
    label: '接收账号类型',
    prop: 'toUserType',
    value: '',
    list: [
      { label: '手续费账号', value: 101 },
      { label: '成本账号', value: 102 },
      { label: '支出账号', value: 103 },
      { label: '子支出账号', value: 104 },
    ],
  },
];

const earnAccountCol = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '累计收益',
    prop: 'totalProfit',
  },
  {
    label: '总销账',
    prop: 'totalWriteOff',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 310,
    btnGroup: [
      {
        label: '收益记录',
        fn: 'earnEdit',
        type: 'primary',
        alias: 'earnEdit',
      },
      {
        label: '划转记录',
        fn: 'transferEdit',
        type: 'primary',
        alias: 'transferEdit',
      },
      {
        label: '销账记录',
        fn: 'writeoffEdit',
        type: 'primary',
        alias: 'writeoffEdit',
      },
    ],
  },
];

const earnAccountColNoBtn = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '累计收益',
    prop: 'totalProfit',
  },
  {
    label: '总销账',
    prop: 'totalWriteOff',
  },
];

const earnAccountConfig = [];

const earnRecordCol = [];

const earnRecordColNoBtn = [];

const earnRecordConfig = [];

const costAccountCol = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '总划入',
    prop: 'totalIn',
  },
  {
    label: '总充币',
    prop: 'totalRecharge',
  },
  {
    label: '总调出',
    prop: 'totalSpecialExpend',
  },
  {
    label: '总调入',
    prop: 'totalSpecialIncome',
  },
  {
    label: '充币地址',
    prop: 'coinAddress',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '160px',
    btnGroup: [
      {
        label: '划转记录',
        fn: 'transferEdit',
        type: 'primary',
        alias: 'transferEdit',
      },
    ],
  },
];

const costAccountColNoBtn = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '总划入',
    prop: 'totalIn',
  },
  {
    label: '总充币',
    prop: 'totalRecharge',
  },
  {
    label: '总调出',
    prop: 'totalSpecialExpend',
  },
  {
    label: '总调入',
    prop: 'totalSpecialIncome',
  },
  {
    label: '充币地址',
    prop: 'coinAddress',
  },
];

const costAccountConfig = [];

const expenseAcountCol = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '总划入',
    prop: 'totalIn',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '160px',
    btnGroup: [
      {
        label: '划转记录',
        fn: 'transferEdit',
        type: 'primary',
        alias: 'transferEdit',
      },
    ],
  },
];

const expenseAcountColNoBtn = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '总划入',
    prop: 'totalIn',
  },
];

const expenseAcountConfig = [];

const sonAcountCol = [
  {
    label: '账号名称',
    prop: 'realName',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 190,
    btnGroup: [
      {
        label: '编辑',
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

const sonAcountColNoBtn = [
  {
    label: '账号名称',
    prop: 'realName',
  },
];

const sonAcountConfig = [
  {
    label: '账号名称',
    prop: 'realName',
    value: '',
    placeholder: '请输入',
  },
];

const sonAcountDetailCol = [
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
    prop: 'amount',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  {
    label: '总划入',
    prop: 'totalIn',
  },
  {
    label: '总使用',
    prop: 'totalUse',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '160px',
    btnGroup: [
      {
        label: '使用流水',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const sonAcountDetailConfig = [];

const writeoffRecordCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '数量',
    prop: 'amount',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const writeoffRecordColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '数量',
    prop: 'amount',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
];

const writeoffRecordConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeholder: '请输入',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const runRecordCol = [
  {
    label: '时间',
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
    label: '数量',
    prop: 'amount',
  },
  // {
  //   label: '活动类型',
  //   prop: 'toUserType',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [{ text: '注册实名加币糖果活动', val: 18 }],
  // },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const runRecordColNoBtn = [
  {
    label: '时间',
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
    label: '数量',
    prop: 'amount',
  },
  // {
  //   label: '活动类型',
  //   prop: 'toUserType',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [{ text: '注册实名加币糖果活动', val: 18 }],
  // },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const runRecordConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeholder: '请输入',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'relateRecdId',
    value: '',
    placeholder: '请输入',
  },
  // {
  //   type: 'select',
  //   label: '活动类型',
  //   prop: 'optType',
  //   value: '',
  //   list: [{ label: '注册实名加币糖果活动', value: 18 }],
  // }
];

const revenueAccountCol = [
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
    prop: 'amount',
  },
  {
    label: '累计自动充值',
    prop: 'totalRecharge',
  },
  {
    label: '累计手动充值',
    prop: 'totalRechargeIncome',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  // {
  //   label: '累计充值',
  //   prop: 'uid4',
  // },
  {
    label: '充币地址',
    prop: 'coinAddress',
    type: 'labelArr',
    typeDetail: 'dotStrList',
    fn: 'transferIn',
    width: '440px',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 380,
    btnGroup: [
      {
        label: '手动充值记录',
        fn: 'manualEdit',
        type: 'primary',
        alias: 'manualEdit',
      },
      {
        label: '划转记录',
        fn: 'transferEdit',
        type: 'primary',
        alias: 'transferEdit',
      },
      {
        label: '自动充值记录',
        fn: 'autoEdit',
        type: 'primary',
        alias: 'autoEdit',
      },
    ],
  },
];

const revenueAccountColNoBtn = [
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
    prop: 'amount',
  },
  {
    label: '累计自动充值',
    prop: 'totalRecharge',
  },
  {
    label: '累计手动充值',
    prop: 'totalRechargeIncome',
  },
  {
    label: '总转出',
    prop: 'totalOut',
  },
  // {
  //   label: '累计充值',
  //   prop: 'uid4',
  // },
  {
    label: '充币地址',
    prop: 'coinAddress',
  },
];

const revenueAccountConfig = [];

const manualRechargeCol = [
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '数量（金额）',
    prop: 'amount',
  },
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const manualRechargeColNoBtn = [];

const manualRechargeConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];
export {
  assetManageListCol,
  assetManageListColNoBtn,
  assetManageListConfig,
  transferRecordCol,
  transferRecordColNoBtn,
  transferRecordConfig,
  earnAccountCol,
  earnAccountColNoBtn,
  earnAccountConfig,
  earnRecordCol,
  earnRecordColNoBtn,
  earnRecordConfig,
  costAccountCol,
  costAccountColNoBtn,
  costAccountConfig,
  expenseAcountCol,
  expenseAcountColNoBtn,
  expenseAcountConfig,
  sonAcountCol,
  sonAcountColNoBtn,
  sonAcountConfig,
  sonAcountDetailCol,
  sonAcountDetailConfig,
  runRecordCol,
  runRecordColNoBtn,
  runRecordConfig,
  writeoffRecordCol,
  writeoffRecordColNoBtn,
  writeoffRecordConfig,
  revenueAccountCol,
  revenueAccountColNoBtn,
  revenueAccountConfig,
  manualRechargeCol,
  manualRechargeColNoBtn,
  manualRechargeConfig,
};
