/*
 * @Author: cws
 * @Date: 2020-04-08 15:58:33
 * @LastEditTime: 2020-12-18 15:40:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\financial.js
 */
import Store from '@/store';
// 财务管理 -- 充币记录
const rechargeCol = [
  {
    label: '订单号',
    prop: 'id',
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
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '到账数量',
    prop: 'amount',
  },
  {
    label: 'FROM地址',
    prop: 'fromAddress',
  },
  {
    label: 'TO地址',
    prop: 'toAddress',
  },
  {
    label: '充币TXID',
    prop: 'txId',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '充币待确认', val: 6 }],
  },
  {
    label: '充币时间',
    prop: 'createTime',
  },
  {
    label: '归集状态',
    prop: 'collectStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未归集', val: 0 }, { text: '已归集', val: 1 }, { text: '归集失败', val: 2 }],
  },
  {
    label: '归集TXID',
    prop: 'collectTxId',
  },
  {
    label: '归集时间',
    prop: 'confirmTime',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '重新调用钱包去归集',
        fn: 'message',
        filter_type: 'array',
        filter_key: 'collectStatus',
        filter_status: ['1'],
        type: 'success',
        alias: 'message',
      },
    ],
  },
];

const rechargeColNoBtn = [
  {
    label: '订单号',
    prop: 'id',
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
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '到账数量',
    prop: 'amount',
  },
  {
    label: 'FROM地址',
    prop: 'fromAddress',
  },
  {
    label: 'TO地址',
    prop: 'toAddress',
  },
  {
    label: '充币TXID',
    prop: 'txId',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '充币待确认', val: 6 }],
  },
  {
    label: '充币时间',
    prop: 'createTime',
  },
  {
    label: '归集状态',
    prop: 'collectStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未归集', val: 0 }, { text: '已归集', val: 1 }, { text: '归集失败', val: 2 }],
  },
  {
    label: '归集TXID',
    prop: 'collectTxId',
  },
  {
    label: '归集时间',
    prop: 'confirmTime',
  },
];

// 财务管理 -- 充币记录 搜索
const rechargeConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'id',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
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
    label: '充币状态',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '失败', value: 2 }, { label: '充币待确认', value: 6 }],
  },
  {
    type: 'text',
    label: '充币txid',
    prop: 'txId',
    value: '',
  },
  {
    type: 'select',
    label: '归集状态',
    prop: 'collectStatus',
    value: '',
    list: [{ label: '未归集', value: 0 }, { label: '已归集', value: 1 }, { label: '归集失败', value: 2 }],
  },
  {
    type: 'text',
    label: '归集txid',
    prop: 'collectTxId',
    value: '',
  },
  {
    type: 'text',
    label: 'FROM地址',
    prop: 'fromAddress',
    value: '',
  },
  {
    type: 'text',
    label: 'TO地址',
    prop: 'toAddress',
    value: '',
  },
  {
    type: 'select',
    label: '链名称',
    prop: 'chainName',
    value: '',
    list: [],
  },
];

// 财务管理 -- 币币资金流水
const turnoverCol = [
  {
    label: '时间',
    prop: 'id',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '手机号',
    prop: 'coinName',
  },
  {
    label: '邮箱号',
    prop: 'amount',
  },
  {
    label: '用户类型',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }],
  },
  {
    label: '币种',
    prop: 'toAddr',
  },
  {
    label: '类型',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }],
  },
  {
    label: '可用资产变化',
    prop: 'toAddr',
  },
  {
    label: '可用资产余额',
    prop: 'toAddr',
  },
  {
    label: '冻结资产变化',
    prop: 'toAddr',
  },
  {
    label: '冻结资产余额',
    prop: 'toAddr',
  },
  {
    label: '订单号',
    prop: 'toAddr',
  },
];

// 财务管理 -- 币币资金流水 搜索
const turnoverConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    subType: 'uid',
  },
  {
    type: 'text',
    label: '手机号',
    prop: 'id',
    value: '',
  },
  {
    label: '邮箱号',
    prop: 'coinId',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    label: '订单号',
    prop: 'coinId',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '失败', value: 2 }],
  },
];

// 财务管理 -- 提币记录
const extractCol = [
  {
    label: '订单号',
    prop: 'id',
    width: 200,
  },
  {
    label: 'from UID',
    prop: 'uid',
    width: 100,
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '提币数量',
    prop: 'amount',
    width: 200,
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'realAmount',
    width: 200,
  },
  {
    label: 'from 地址',
    prop: 'fromAddress',
    width: 140,
  },
  {
    label: 'to 地址',
    prop: 'toAddress',
    width: 140,
  },
  {
    label: 'to UID',
    prop: 'toUid',
    width: 140,
  },
  {
    label: '链类型',
    prop: 'chainName',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '初步审核成功', val: 3 }, { text: '初步审核失败', val: 4 }],
  },
  {
    label: '提币时间',
    prop: 'createTime',
    width: 200,
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
    width: 200,
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },
  {
    label: '复审时间',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 270,
    btnGroup: [
      {
        label: '初审',
        fn: 'preReview',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 0,
        type: 'success',
        alias: 'preReview',
      },
      {
        label: '复审',
        fn: 'nextReview',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'success',
        alias: 'nextReview',
      },
      {
        label: '初审驳回',
        fn: 'preReject',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 0,
        type: 'danger',
        alias: 'preReject',
        // confirm_txt: "确认驳回吗？"
      },
      {
        label: '复审驳回',
        fn: 'nextReject',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'danger',
        alias: 'nextReject',
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

// 财务管理 -- 提币记录
const extractColNoBtn = [
  {
    label: '订单号',
    prop: 'id',
    width: 200,
  },
  {
    label: 'from UID',
    prop: 'uid',
    width: 100,
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '提币数量',
    prop: 'amount',
    width: 200,
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'realAmount',
    width: 200,
  },
  {
    label: 'from 地址',
    prop: 'fromAddress',
    width: 140,
  },
  {
    label: 'to 地址',
    prop: 'toAddress',
    width: 140,
  },
  {
    label: 'to UID',
    prop: 'toUid',
    width: 140,
  },
  {
    label: '链类型',
    prop: 'chainName',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '初步审核成功', val: 3 }, { text: '初步审核失败', val: 4 }],
  },
  {
    label: '提币时间',
    prop: 'createTime',
    width: 200,
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
    width: 200,
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },
  {
    label: '复审时间',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },
];

// 财务管理 -- 提币记录 搜索
const extractConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: 'from UID',
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
    type: 'onlyNumber',
    label: 'to UID',
    prop: 'toUid',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: "text",
  //   label: "订单号",
  //   prop: "id",
  //   value: "",
  //   placeHolder: "请输入订单号",
  // },
  {
    type: 'text',
    label: 'from 地址',
    prop: 'fromAddress',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: 'to 地址',
    prop: 'toAddress',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '失败', value: 2 }, { label: '初步审核成功', value: 3 }, { label: '初步审核失败', value: 4 }],
  },
  {
    type: 'select',
    label: '链类型',
    prop: 'chainName',
    value: '',
    list: [],
  },
];

// 财务管理 -- 提币记录
const extractForeignCol = [
  {
    label: '订单号',
    prop: 'id',
    width: 200,
  },
  {
    label: 'UID',
    prop: 'uid',
    width: 100,
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '提币数量',
    prop: 'amount',
    width: 200,
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'realAmount',
    width: 200,
  },
  {
    label: '提币地址',
    prop: 'toAddress',
    width: 140,
  },
  {
    label: 'TXID',
    prop: 'txId',
    width: 200,
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '初步审核成功', val: 3 }, { text: '初步审核失败', val: 4 }],
  },
  // { label: '无类型', value: 0 },{ label: '热钱包类型', value: 1 },{ label: '冷钱包类型', value: 2 }
  {
    label: '提币类型',
    prop: 'isAuto',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '无类型', val: 0 },{ text: '热钱包类型', val: 1 },{ text: '冷钱包类型', val: 2 }],
  },
  {
    label: '提币时间',
    prop: 'createTime',
    width: 200,
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
    width: 200,
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },
  {
    label: '复审时间',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 420,
    btnGroup: [
      {
        label: '初审',
        fn: 'preReview',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 0,
        type: 'success',
        alias: 'preReview',
      },
      {
        label: '复审',
        fn: 'nextReview',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'success',
        alias: 'nextReview',
      },
      {
        label: '初审驳回',
        fn: 'preReject',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 0,
        type: 'danger',
        alias: 'preReject',
        // confirm_txt: "确认驳回吗？"
      },
      {
        label: '复审驳回',
        fn: 'nextReject',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'danger',
        alias: 'nextReject',
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
      {
        label: '查看该用户出入金明细',
        fn: 'inOutGoldList',
        type: 'primary',
        alias: 'inOutGoldList',
      },
    ],
  },
];

// 财务管理 -- 提币记录
const extractForeignColNoBtn = [
  {
    label: '订单号',
    prop: 'id',
    width: 200,
  },
  {
    label: 'UID',
    prop: 'uid',
    width: 100,
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '提币数量',
    prop: 'amount',
    width: 200,
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'realAmount',
    width: 200,
  },
  {
    label: '提币地址',
    prop: 'toAddress',
    width: 140,
  },
  {
    label: 'TXID',
    prop: 'txId',
    width: 200,
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '失败', val: 2 }, { text: '初步审核成功', val: 3 }, { text: '初步审核失败', val: 4 }],
  },
  {
    label: '提币类型',
    prop: 'isAuto',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '无类型', val: 0 },{ text: '热钱包类型', val: 1 },{ text: '冷钱包类型', val: 2 }],
  },
  {
    label: '提币时间',
    prop: 'createTime',
    width: 200,
  },
  {
    label: '初审时间',
    prop: 'firstAuditTime',
    width: 200,
  },
  {
    label: '初审人',
    prop: 'firstAuditUserName',
  },
  {
    label: '复审时间',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '复审人',
    prop: 'reviewAuditUserName',
  },
];

// 财务管理 -- 提币记录 搜索
const extractForeignConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    subType: 'uid',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  // {
  //   type: "text",
  //   label: "订单号",
  //   prop: "id",
  //   value: "",
  //   placeHolder: "请输入订单号",
  // },
  {
    type: 'text',
    label: '提币地址',
    prop: 'toAddress',
    value: '',
    placeHolder: '请输入提币地址',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '失败', value: 2 }, { label: '初步审核成功', value: 3 }, { label: '初步审核失败', value: 4 }],
  },
  {
    type: 'select',
    label: '链名称',
    prop: 'chainName',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '提币类型',
    prop: 'isAuto',
    value: '',
    list: [{ label: '无类型', value: 0 },{ label: '热钱包类型', value: 1 },{ label: '冷钱包类型', value: 2 } ],
  },
];

// 财务管理 -- 划转记录
const transferCol = [
  {
    label: '订单号',
    prop: 'orderNo',
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
    label: '划转数量',
    prop: 'amount',
    type: 'removeMinus', //去除负号
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'dealAmount',
    type: 'removeMinus', //去除负号
  },
  {
    label: 'FROM账户',
    prop: 'fromType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币', val: 1 }, { text: '法币', val: 2 }, { text: '理财', val: 3 }, { text: '币汇', val: 4 }, { text: '合约', val: 5 }],
  },
  {
    label: 'TO账户',
    prop: 'toType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币', val: 1 }, { text: '法币', val: 2 }, { text: '理财', val: 3 }, { text: '币汇', val: 4 }, { text: '合约', val: 5 }],
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0, type: 'info' }, { text: '成功', val: 1, type: 'success' }, { text: '失败', val: 2, type: 'warning' }, { text: '初步审核成功', val: 3, type: 'success' }, { text: '初步审核失败', val: 4, type: 'warning' }, { text: '划转待确认', val: 5, type: 'warning' }],
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];

// 财务管理 -- 划转记录 搜索
const transferConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderNo',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
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
    label: 'FROM账号',
    prop: 'fromType',
    value: '',
    list: [{ label: '币币', value: '1' }, { label: '法币', value: '2' }, { label: '理财', value: '3' }, { label: '币汇', value: '4' }, { label: '合约', value: '5' }],
  },
  {
    type: 'select',
    label: 'TO账号',
    prop: 'toType',
    value: '',
    list: [{ label: '币币', value: '1' }, { label: '法币', value: '2' }, { label: '理财', value: '3' }, { label: '币汇', value: '4' }, { label: '合约', value: '5' }],
  },
];

// 财务管理 -- 特殊调账管理
const spreconCol = [
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
    filters: [{ text: '币币', val: 1 }, { text: '法币', val: 2 }, { text: '理财', val: 3 }, { text: '币汇', val: 4 }, { text: '合约', val: 5 }],
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
    label: '状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '驳回', val: 2 }],
  },
  {
    label: '申请时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '审核时间',
    prop: 'auditTime',
    type: 'time',
  },
  {
    label: '审核人',
    prop: 'auditName',
  },
  {
    label: '审核人IP',
    prop: 'auditIp',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '240',
    btnGroup: [
      {
        label: '审核通过',
        fn: 'checkPass',
        filter_key: 'status',
        filter_status: 0,
        isPop: false,
        type: 'success',
        alias: 'pass',
      },
      {
        label: '驳回',
        fn: 'checkOut',
        filter_key: 'status',
        filter_status: 0,
        isPop: false,
        type: 'danger',
        alias: 'refuse',
      },
      {
        label: '详情',
        fn: 'viewDetail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const spreconColNoBtn = [
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
    filters: [{ text: '币币', val: 1 }, { text: '法币', val: 2 }, { text: '理财', val: 3 }, { text: '币汇', val: 4 }, { text: '合约', val: 5 }],
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
    label: '状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '成功', val: 1 }, { text: '驳回', val: 2 }],
  },
  {
    label: '申请时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '审核时间',
    prop: 'auditTime',
    type: 'time',
  },
  {
    label: '审核人',
    prop: 'auditName',
  },
  {
    label: '审核人IP',
    prop: 'auditIp',
  },
];

// 财务管理 -- 特殊调账管理 搜索
const spreconConfig = [
  {
    type: 'text',
    label: '订单号',
    prop: 'orderNo',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
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
    label: '状态',
    prop: 'status',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '成功', value: 1 }, { label: '驳回', value: 2 }],
  },
  {
    type: 'select',
    label: '资金账户类型',
    prop: 'accountType',
    value: '',
    list: [{ label: '币币', value: 1 }, { label: '法币', value: 2 }, { label: '理财', value: 3 }, { label: '币汇', value: 4 }, { label: '合约', value: 5 }],
  },
];

// 财务管理 -- 归集管理 表格
const collectionCol = [
  {
    label: '币种',
    prop: 'coinKey',
  },
  {
    label: '归集地址',
    prop: 'defaultcollectionaddress',
  },
  {
    label: '手续费地址',
    prop: 'handlingfeeaddress',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 110,
    btnGroup: [
      {
        label: '归集详情',
        fn: 'edit',
        alias: 'edit',
        type: 'primary',
      },
    ],
  },
];

const collectionColNoBtn = [
  {
    label: '币种',
    prop: 'coinKey',
  },
  {
    label: '归集地址',
    prop: 'defaultcollectionaddress',
  },
];

// 财务管理 -- 归集管理 被归集地址明细表格
const collectionDetailCol = [
  {
    label: '用户UID',
    prop: 'userId',
  },
  // {
  //   label: "用户类型",
  //   prop: "userType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  // },
  {
    label: '被归集地址',
    prop: 'address',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '删除',
        fn: 'del',
      },
    ],
  },
];

// 财务管理 -- 归集管理 - 添加地址 页头表单
const addAddrSearchConfig = [
  {
    type: 'text',
    label: '用户UID',
    prop: 'userId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '地址',
    prop: 'address',
    value: '',
    placeHolder: '请输入',
  },
];

// 财务管理 -- 归集管理 - 添加地址 表格
const addAddrCol = [
  {
    label: '用户UID',
    prop: 'userId',
  },
  // {
  //   label: "用户类型",
  //   prop: "userType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  // },
  {
    label: '地址',
    prop: 'address',
  },
];

const coinFundsCol = [
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  // {
  //   label: "手机号",
  //   prop: "uid",
  // },  {
  //   label: "邮箱号",
  //   prop: "uid",
  // },  {
  //   label: "用户类型",
  //   prop: "uid",
  // },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'optType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '充币', val: '0' },
      { text: '提币待审核', val: '1' },
      { text: '提币成功', val: '2' },
      { text: '提币失败', val: '3' },
      { text: '买下单', val: '4' },
      { text: '卖下单', val: '5' },
      { text: '买成交', val: '6' },
      { text: '卖成交', val: '7' },
      { text: '买撤单', val: '8' },
      { text: '卖撤单', val: '9' },
      { text: '币币划至法币', val: '10' },
      { text: '法币划至币币', val: '11' },
      { text: '币币划转至币汇', val: '12' },
      { text: '币汇划转至币币', val: '13' },
      { text: '特殊调账', val: '14' },
      { text: '标仓周奖励', val: '15' },
      { text: '标仓季度奖励', val: '16' },
      { text: '机械人加钱', val: '17' },
      { text: '注册活动加币', val: '18' },
      { text: '锁仓自动释放可用金额', val: '19' },
      { text: '锁仓手动释放可用金额', val: '20' },
      { text: '锁仓冻结金额', val: '21' },
      { text: '锁仓自动释放冻结金额', val: '22' },
      { text: '锁仓手动释放冻结金额', val: '23' },
      { text: '锁仓账户支出', val: '24' },
      { text: '锁仓账户退还', val: '25' },
      { text: '抽奖活动获得', val: '26' },
      { text: '注册商家冻结资金', val: '27' },
      { text: '取消商家解冻资金', val: '28' },
      { text: '申请商家失败，解冻保证金', val: '29' },
      { text: '创建法币订单', val: '30' },
      { text: '取消法币订单', val: '31' },
      { text: '法币卖出', val: '32' },
      { text: '申诉买方赢，法币卖出', val: '33' },
      { text: '申诉卖方赢，取消法币订单', val: '34' },
      { text: '激活法币订单', val: '35' },
      { text: '法币买入', val: '36' },
      { text: '申诉买方赢，法币买入', val: '37' },
      { text: '创建广告', val: '38' },
      { text: '广告下架', val: '39' },
      { text: '返佣', val: '40' },
      { text: '升级信用额度,冻结资产', val: '41' },
      { text: '解冻信用额度，解冻资产', val: '42' },
      { text: '币币划转至合约', val: '50' },
      { text: '合约划转至币币', val: '51' },
      { text: '法币划转至合约', val: '52' },
      { text: '合约划转至法币', val: '53' },

      { text: '币支付待审核', val: '70' },
      { text: '币支付划转成功', val: '71' },
      { text: '币支付划转失败', val: '72' },
      { text: '币支付提币待审核', val: '73' },
      { text: '币支付提币成功', val: '74' },
      { text: '币支付提币失败', val: '75' },
      { text: '币支付充币', val: '76' },
      { text: '币支付商户提现待审核', val: '77' },
      { text: '币支付商户提现成功', val: '78' },
      { text: '币支付商户提现失败', val: '79' },

      { text: '活动支出', val: '100' },
      { text: '划转手续费', val: '80' },
      { text: '币币交易手续费', val: '81' },
      { text: '法币交易手续费', val: '82' },
      { text: '提币手续费', val: '83' },
      { text: '资产账户划转', val: '84' },
      { text: '收益账户销账', val: '85' },
      // { text: '普通用户手续费返佣', val: '86' },
      { text: '合约返佣', val: '88' },
      { text: '合约收益账户销账', val: '89' },
      {
        text: '资金费用',
        val: 94,
      },
      {
        text: '合约返佣结算',
        val: 95,
      },
      {
        text: '合约手续费',
        val: 96,
      },
      // {
      //   text: '平仓盈亏',
      //   val: 97,
      // },
      { text: '普通用户手续费返佣', val: '101' },
      // { text: '代理商手续费返佣', val: '102' },
      // { text: '代理商团队长模式的返佣', val: '103' },
      { text: '平台手续费返佣', val: '104' },
      { text: '平台团队长模式的返佣', val: '105' },
      { text: '发送红包', val: '106' },
      { text: '领取红包', val: '107' },
      { text: '过期红包退还', val: '108' },
      { text: '补充保证金', val: '109' },
      { text: '释放保证金', val: '110' },
      { text: '内部充币', val: '111' },
    ],
  },
  {
    label: '变动资产',
    prop: 'amount',
  },
  {
    label: '变动前资产',
    prop: 'beforeAmount',
  },
  {
    label: '变动后资产',
    prop: 'afterAmount',
  },
  {
    label: '操作资金类型',
    prop: 'amountType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '可用余额', val: '1' }, { text: '冻结金额', val: '2' }],
  },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const coinFundsConfig = [
  {
    type: 'date_rank_s',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    subType: 'uid',
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'relateRecdId',
    value: '',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType',
    value: '',
    list: [
      { label: '充币', value: '0' },
      { label: '提币待审核', value: '1' },
      { label: '提币成功', value: '2' },
      { label: '提币失败', value: '3' },
      { label: '买下单', value: '4' },
      { label: '卖下单', value: '5' },
      { label: '买成交', value: '6' },
      { label: '卖成交', value: '7' },
      { label: '买撤单', value: '8' },
      { label: '卖撤单', value: '9' },
      { label: '币币划至法币', value: '10' },
      { label: '法币划至币币', value: '11' },
      { label: '币币划转至币汇', value: '12' },
      { label: '币汇划转至币币', value: '13' },
      { label: '特殊调账', value: '14' },
      { label: '标仓周奖励', value: '15' },
      { label: '标仓季度奖励', value: '16' },
      { label: '机械人加钱', value: '17' },
      { label: '注册活动加币', value: '18' },
      { label: '锁仓自动释放可用金额', value: '19' },
      { label: '锁仓手动释放可用金额', value: '20' },
      { label: '锁仓冻结金额', value: '21' },
      { label: '锁仓自动释放冻结金额', value: '22' },
      { label: '锁仓手动释放冻结金额', value: '23' },
      { label: '锁仓账户支出', value: '24' },
      { label: '锁仓账户退还', value: '25' },
      { label: '抽奖活动获得', value: '26' },
      { label: '注册商家冻结资金', value: '27' },
      { label: '取消商家解冻资金', value: '28' },
      { label: '申请商家失败，解冻保证金', value: '29' },
      { label: '创建法币订单', value: '30' },
      { label: '取消法币订单', value: '31' },
      { label: '法币卖出', value: '32' },
      { label: '申诉买方赢，法币卖出', value: '33' },
      { label: '申诉卖方赢，取消法币订单', value: '34' },
      { label: '激活法币订单', value: '35' },
      { label: '法币买入', value: '36' },
      { label: '申诉买方赢，法币买入', value: '37' },
      { label: '创建广告', value: '38' },
      { label: '广告下架', value: '39' },
      { label: '返佣', value: '40' },
      { label: '升级信用额度,冻结资产', value: '41' },
      { label: '解冻信用额度，解冻资产', value: '42' },
      { label: '币币划转至合约', value: '50' },
      { label: '合约划转至币币', value: '51' },
      { label: '法币划转至合约', value: '52' },
      { label: '合约划转至法币', value: '53' },

      { label: '币支付待审核', value: '70' },
      { label: '币支付划转成功', value: '71' },
      { label: '币支付划转失败', value: '72' },
      { label: '币支付提币待审核', value: '73' },
      { label: '币支付提币成功', value: '74' },
      { label: '币支付提币失败', value: '75' },
      { label: '币支付充币', value: '76' },
      { label: '币支付商户提现待审核', value: '77' },
      { label: '币支付商户提现成功', value: '78' },
      { label: '币支付商户提现失败', value: '79' },

      { label: '活动支出', value: '100' },
      { label: '划转手续费', value: '80' },
      { label: '币币交易手续费', value: '81' },
      { label: '法币交易手续费', value: '82' },
      { label: '提币手续费', value: '83' },
      { label: '资产账户划转', value: '84' },
      { label: '收益账户销账', value: '85' },
      // { label: '普通用户手续费返佣', value: '86' },
      // { label: '合约返佣', value: '88' },
      // { label: '合约收益账户销账', value: '89' },
      // {
      //   label: '资金费用',
      //   value: '94',
      // },
      {
        label: '合约返佣结算',
        value: '95',
      },
      // {
      //   label: '合约手续费',
      //   value: '96',
      // },
      // {
      //   label: '平仓盈亏',
      //   value: 97,
      // },
      { label: '普通用户手续费返佣', value: '101' },
      // { label: '代理商手续费返佣', value: '102' },
      // { label: '代理商团队长模式的返佣', value: '103' },
      { label: '平台手续费返佣', value: '104' },
      { label: '平台团队长模式的返佣', value: '105' },
      { label: '发送红包', value: '106' },
      { label: '领取红包', value: '107' },
      { label: '过期红包退还', value: '108' },
      { label: '补充保证金', value: '109' },
      { label: '释放保证金', value: '110' },
      { label: '内部充币', value: '111' },
    ],
  },
];

const lockManageCol = [
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'accountType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '币币账户', val: '1' },
      // { text: "提币待审核", val: "1" },
      // { text: "提币成功", val: "2" },
      // { text: "提币失败", val: "3" },
    ],
  },
  {
    label: '锁仓类型',
    prop: 'orderType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '星球算力冻结', val: '1' }, { text: '原始合伙人冻结', val: '2' }, { text: '私募冻结', val: '3' }],
  },
  {
    label: '锁仓时间类型',
    prop: 'lockType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '日锁仓', val: '1' }, { text: '月锁仓', val: '2' }],
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '锁仓数量',
    prop: 'lockAmount',
  },
  {
    label: '已释放数量',
    prop: 'releaseAmount',
  },
  {
    label: '状态',
    prop: 'orderStatus',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '释放中', val: '0' }, { text: '已经释放完成', val: '1' }],
  },
  {
    label: '冻结时间',
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
    width: '240',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        filter_key: 'orderStatus',
        filter_status: 0,
        isPop: false,
        type: 'primary',
        alias: 'edit',
      },
      {
        label: '解冻',
        fn: 'freeze',
        filter_key: 'orderStatus',
        filter_status: 0,
        isPop: false,
        type: 'danger',
        alias: 'freeze',
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

const lockManageColNoBtn = [
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'accountType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '币币账户', val: '1' },
      // { text: "提币待审核", val: "1" },
      // { text: "提币成功", val: "2" },
      // { text: "提币失败", val: "3" },
    ],
  },
  {
    label: '锁仓类型',
    prop: 'orderType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '星球算力冻结', val: '1' }, { text: '原始合伙人冻结', val: '2' }, { text: '私募冻结', val: '3' }],
  },
  {
    label: '锁仓时间类型',
    prop: 'lockType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '日锁仓', val: '1' }, { text: '月锁仓', val: '2' }],
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '锁仓数量',
    prop: 'lockAmount',
  },
  {
    label: '已释放数量',
    prop: 'releaseAmount',
  },
  {
    label: '状态',
    prop: 'orderStatus',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '释放中', val: '0' }, { text: '已经释放完成', val: '1' }],
  },
  {
    label: '冻结时间',
    prop: 'createTime',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
  },
];

const lockManageConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
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
    label: '状态',
    prop: 'status',
    value: '',
    list: [{ label: '释放中', value: 0 }, { label: '已释放完成', value: 1 }],
  },
  {
    type: 'select',
    label: '锁仓时间类型',
    prop: 'lockType',
    value: '',
    list: [{ label: '日锁仓', value: '1' }, { label: '月锁仓', value: '2' }],
  },
  {
    type: 'select',
    label: '锁仓类型',
    prop: 'orderType',
    value: '',
    list: [{ label: '星球算力冻结', value: 1 }, { label: '原始合伙人冻结', value: 2 }, { label: '私募冻结', value: 3 }],
  },
  // (目前只有币币)
  // {
  //   type: "select",
  //   label: "账户类型",
  //   prop: "accountType",
  //   value: "",
  //   list: [
  //     { label: "币币", value: 1 },
  //     { label: "法币", value: 2 },
  //     { label: "理财", value: 3 },
  //     { label: "币汇", value: 4 },
  //     { label: "合约", value: 5 },
  //   ],
  // },
];

const unfreezeManageCol = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '子订单号',
    prop: 'id',
    width: '190',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'accountType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '币币账户', val: '1' },
      // { text: "提币待审核", val: "1" },
      // { text: "提币成功", val: "2" },
      // { text: "提币失败", val: "3" },
    ],
  },
  {
    label: '锁仓类型',
    prop: 'orderType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '星球算力冻结', val: '1' }, { text: '原始合伙人冻结', val: '2' }, { text: '私募冻结', val: '3' }],
  },
  {
    label: '锁仓时间类型',
    prop: 'lockType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '日锁仓', val: '1' }, { text: '月锁仓', val: '2' }],
  },
  {
    label: '解冻方式',
    prop: 'detailsType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '自动释放', val: '1' }, { text: '手动释放', val: '2' }],
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '解冻数量',
    prop: 'amount',
  },
  {
    label: '剩余解冻数量',
    prop: 'remainingAmount',
  },
  {
    label: '解冻时间',
    prop: 'createTime',
    width: '160',
  },
  {
    label: '解冻原因',
    prop: 'remark',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '140',
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

const unfreezeManageColNoBtn = [
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '子订单号',
    prop: 'id',
    width: '190',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'accountType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '币币账户', val: '1' },
      // { text: "提币待审核", val: "1" },
      // { text: "提币成功", val: "2" },
      // { text: "提币失败", val: "3" },
    ],
  },
  {
    label: '锁仓类型',
    prop: 'orderType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '星球算力冻结', val: '1' }, { text: '原始合伙人冻结', val: '2' }, { text: '私募冻结', val: '3' }],
  },
  {
    label: '锁仓时间类型',
    prop: 'lockType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '日锁仓', val: '1' }, { text: '月锁仓', val: '2' }],
  },
  {
    label: '解冻方式',
    prop: 'detailsType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '自动释放', val: '1' }, { text: '手动释放', val: '2' }],
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '解冻数量',
    prop: 'amount',
  },
  {
    label: '剩余解冻数量',
    prop: 'remainingAmount',
  },
  {
    label: '解冻时间',
    prop: 'createTime',
    width: '160',
  },
  {
    label: '解冻原因',
    prop: 'remark',
  },
];

const unfreezeManageConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    label: '订单号',
    type: 'onlyNumber',
    prop: 'orderId',
    value: '',
  },
  {
    label: '子订单号',
    // subType: 'uid',
    prop: 'id',
    value: '',
  },
  {
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    type: 'onlyNumber',
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
    label: '释放状态',
    prop: 'detailsType',
    value: '',
    list: [{ label: '自动释放', value: 1 }, { label: '手动释放', value: 2 }],
  },
  {
    type: 'select',
    label: '锁仓时间类型',
    prop: 'lockType',
    value: '',
    list: [{ label: '日锁仓', value: '1' }, { label: '月锁仓', value: '2' }],
  },
  {
    type: 'select',
    label: '锁仓类型',
    prop: 'orderType',
    value: '',
    list: [{ label: '星球算力冻结', value: 1 }, { label: '原始合伙人冻结', value: 2 }, { label: '私募冻结', value: 3 }],
  },
  // (目前只有币币)
  // {
  //   type: "select",
  //   label: "账户类型",
  //   prop: "accountType",
  //   value: "",
  //   list: [
  //     { label: "币币", value: 1 },
  //     { label: "法币", value: 2 },
  //     { label: "理财", value: 3 },
  //     { label: "币汇", value: 4 },
  //     { label: "合约", value: 5 },
  //   ],
  // },
];

const contractTransferCol = [
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '来源币种',
    prop: 'coinName',
  },
  {
    type: 'joint',
    jointValue: 'USDT',
    label: '目标币种',
    prop: 'toCoinName',
  },
  {
    label: '划转数量',
    prop: 'amount',
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '到账数量',
    prop: 'dealAmount',
  },
  {
    label: 'FORM账户',
    prop: 'fromType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币', val: '1' }, { text: '法币', val: '2' }, { text: '合约', val: '5' }],
  },
  {
    label: 'TO账户',
    prop: 'toType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币', val: '1' }, { text: '法币', val: '2' }, { text: '合约', val: '5' }],
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: '0' }, { text: '成功', val: '1' }, { text: '失败', val: '2' }],
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
];

const contractTransferConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'id',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
  },
  {
    type: 'select',
    label: '来源币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: 'FORM账号',
    prop: 'accountType',
    value: '',
    list: [{ label: '币币', value: 1 }, { label: '法币', value: 2 }, { label: '合约', value: 5 }],
  },
  {
    type: 'select',
    label: 'TO账号',
    prop: 'toAccountType',
    value: '',
    list: [{ label: '币币', value: 1 }, { label: '法币', value: 2 }, { label: '合约', value: 5 }],
  },
];

const hotWalletExtractCol = [
  {
    label: '链类型名称',
    prop: 'chain',
  },
  {
    label: '币种名称',
    prop: 'coin',
  },
  {
    label: '单笔限额',
    prop: 'maxAutoWithdraw',
  },
  {
    label: '单日限额',
    prop: 'maxDailyAutoWithdraw',
  },
  {
    type: 'switch',
    prop: 'isStatus',
    label: '热钱包启用开关',
    alias: 'trswitch',
    disabled: true,
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
        label: '查看余额',
        fn: 'checkBalance',
        type: 'primary',
        alias: 'checkBalance',
      },
    ],
  },
];

const hotWalletExtractColNoBtn = [
  {
    label: '链类型名称',
    prop: 'chain',
  },
  {
    label: '币种名称',
    prop: 'coin',
  },
  {
    label: '单笔限额',
    prop: 'maxAutoWithdraw',
  },
  {
    label: '单日限额',
    prop: 'maxDailyAutoWithdraw',
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

const hotWalletExtractSetCol = [
  {
    label: '热钱包地址',
    prop: 'address',
  },
  {
    label: '当前余额',
    prop: 'amount',
  },
  {
    label: '累计热提币',
    prop: 'totalWithdraw',
  },
];

// 财务管理 -- 财务数据统计列表
const financialStatisticsCol = [
  {
    label: '时间',
    prop: 'timeStr',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '链名称',
    prop: 'chainName',
  },
  {
    label: '充币数量',
    prop: 'depositAmount',
  },
  {
    label: '冷钱包提币数量',
    prop: 'coldWithdrawAmount',
  },
  {
    label: '热钱包提币数量',
    prop: 'hotWithdrawAmount',
  },
  
  {
    label: '净充币数量',
    prop: 'pureDepositAmount',
  },
  {
    label: '总提币数量',
    prop: 'totalWithdrawAmount',
  },

  {
    label: '归集消耗手续费',
    prop: 'collectCostFeeAmount',
  },
  {
    label: '归集冷钱包数量',
    prop: 'coldCollectAmount',
  },
  {
    label: '待归集数量',
    prop: 'waitCollectAmount',
  },
  {
    label: '总待归集数量',
    prop: 'totalWaitCollectAmount',
  },
];

// 财务管理 -- 财务数据统计列表 搜索
const financialStatisticsConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '时间周期',
    prop: 'searchType',
    value: 1,
    list: [{ label: '日', value: 1 }, { label: '月', value: 2 }],
  },
  
  {
    type: 'date_month',
    label: '月份',
    prop: 'searchMonth',
    value: '',
  },
  
  {
    type: 'select',
    label: '链名称',
    prop: 'chainName',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinName',
    value: '',
    list: [],
  },
];

export {
  financialStatisticsCol,
  financialStatisticsConfig,
  hotWalletExtractSetCol,
  hotWalletExtractCol,
  hotWalletExtractColNoBtn,
  rechargeCol,
  rechargeColNoBtn,
  rechargeConfig,
  extractCol,
  extractColNoBtn,
  extractConfig,
  transferCol,
  transferConfig,
  spreconCol,
  spreconColNoBtn,
  spreconConfig,
  collectionCol,
  collectionColNoBtn,
  collectionDetailCol,
  addAddrSearchConfig,
  addAddrCol,
  turnoverCol,
  turnoverConfig,
  coinFundsCol,
  coinFundsConfig,
  extractForeignCol,
  extractForeignColNoBtn,
  extractForeignConfig,
  lockManageCol,
  lockManageColNoBtn,
  lockManageConfig,
  unfreezeManageCol,
  unfreezeManageColNoBtn,
  unfreezeManageConfig,
  contractTransferCol,
  contractTransferConfig,
};
