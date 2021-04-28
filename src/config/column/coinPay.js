/*
 * @Author: your name
 * @Date: 2020-11-19 18:05:45
 * @LastEditTime: 2020-12-02 12:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\config\column\coinPay.js
 */
const appealCol = [
  {
    label: '交易类型',
    prop: 'appealTradeType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      {
        val: '0',
        text: '普通交易',
      },
      {
        val: '1',
        text: '商户交易',
      },
      {
        val: '2',
        text: '支付订单',
      },
      {
        val: '3',
        text: '商户入金订单',
      },
    ],
  },
  // {
  //   label: '广告类型',
  //   prop: 'appealTradeType',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [{ val: '0', text: '普通交易' }, { val: '1', text: '商户交易' }, { val: '2', text: '支付订单' }],
  // },
  {
    label: '订单号',
    prop: 'tradeId',
  },
  {
    label: '买方UID',
    prop: 'uid',
  },
  {
    label: '卖方UID',
    prop: 'targetUid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
  },
  {
    label: '兑人民币汇率',
    prop: 'cny',
  },
  {
    label: '交易数量',
    prop: 'amount',
  },
  {
    label: '总金额',
    prop: 'money',
  },
  // {
  //   label: '折算人民币数量',
  //   prop: 'money',
  // },
  {
    label: '状态',
    prop: 'appealStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '申诉中',
        val: '0',
      },
      {
        text: '已处理',
        val: '1',
      },
      {
        text: '取消',
        val: '3',
      },
    ],
  },
  // {
  //   label: '申诉口令',
  //   prop: 'recdId',
  //   type: 'textPair',
  //   arr: ['masterCode', 'slaveCode'],
  //   width: 160,
  // },
  {
    label: '买家口令',
    prop: 'slaveCode',
  },
  {
    label: '卖家口令',
    prop: 'masterCode',
  },
  {
    label: '申诉时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '处理时间',
    prop: 'auditTime',
    type: 'time',
  },
  {
    label: '处理人',
    prop: 'auditUserName',
  },
  {
    label: '处理人IP',
    prop: 'auditIp',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 170,
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
      {
        label: '判诀',
        fn: 'judgment',
        isPop: false,
        filter_key: 'appealStatus',
        filter_status: 0,
        type: 'success',
        alias: 'judgment',
      },
      // {
      //   label: "修改金额",
      //   fn: "edit",
      //   isPop: false,
      //   filter_key: "appealStatus",
      //   filter_status: 0,
      //   type: "danger",
      //   alias: "edit",
      // },
    ],
  },
];

const appealColNoBtn = [
  {
    label: '交易类型',
    prop: 'appealTradeType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      {
        val: '0',
        text: '普通交易',
      },
      {
        val: '1',
        text: '商户交易',
      },
      {
        val: '2',
        text: '支付订单',
      },
      {
        val: '2',
        text: '支付订单',
      },
      {
        val: '3',
        text: '商户入金订单',
      },
    ],
  },
  // {
  //   label: '广告类型',
  //   prop: 'appealTradeType',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 100,
  //   filters: [{ val: '0', text: '普通交易' }, { val: '1', text: '商户交易' }, { val: '2', text: '支付订单' }],
  // },
  {
    label: '订单号',
    prop: 'tradeId',
  },
  {
    label: '买方UID',
    prop: 'uid',
  },
  {
    label: '卖方UID',
    prop: 'targetUid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
  },
  {
    label: '兑人民币汇率',
    prop: 'cny',
  },
  {
    label: '交易数量',
    prop: 'amount',
  },
  {
    label: '总金额',
    prop: 'money',
  },
  // {
  //   label: '折算人民币数量',
  //   prop: 'money',
  // },
  {
    label: '状态',
    prop: 'appealStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '申诉中',
        val: '0',
      },
      {
        text: '已处理',
        val: '1',
      },
      {
        text: '取消',
        val: '3',
      },
    ],
  },
  // {
  //   label: '申诉口令',
  //   prop: 'recdId',
  //   type: 'textPair',
  //   arr: ['masterCode', 'slaveCode'],
  //   width: 160,
  // },
  {
    label: '买家口令',
    prop: 'slaveCode',
  },
  {
    label: '卖家口令',
    prop: 'masterCode',
  },
  {
    label: '申诉时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '处理时间',
    prop: 'auditTime',
    type: 'time',
  },
  {
    label: '处理人',
    prop: 'auditUserName',
  },
  {
    label: '处理人IP',
    prop: 'auditIp',
  },
];

const appealConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'tradeId',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: 'select',
  //   label: '交易类型',
  //   prop: 'appealTradeType',
  //   value: '',
  //   list: [{ value: '0', label: '普通交易' }, { value: '1', label: '商户交易' }, { value: '2', label: '支付订单' }],
  // },
  // {
  //   type: 'select',
  //   label: '广告类型',
  //   prop: 'appealTradeType',
  //   value: '',
  //   list: [{ value: '0', label: '普通交易' }, { value: '1', label: '商户交易' }, { value: '2', label: '支付订单' }],
  // },
  {
    type: 'select',
    label: '申诉状态',
    prop: 'appealStatus',
    value: '',
    list: [
      {
        label: '申诉中',
        value: '0',
      },
      {
        label: '已处理',
        value: '1',
      },
      {
        label: '取消',
        value: '3',
      },
    ],
  },
];

const appealDetailCol = [
  {
    label: '广告商UID',
    prop: 'advertUid',
  },
  {
    label: '交易类型',
    prop: 'appealTradeType',
    type: 'filter',
    show_type: 'text',
    width: 140,
    filters: [
      {
        val: '0',
        text: '普通交易',
      },
      {
        val: '1',
        text: '商户交易',
      },
      {
        val: '2',
        text: '支付订单',
      },
    ],
  },
  {
    label: '买方UID',
    prop: 'uid',
  },
  {
    label: '卖方UID',
    prop: 'targetUid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  // {
  //   label: '交易价格(CNY)',
  //   prop: 'price',
  // },
  {
    label: '交易数量',
    prop: 'amount',
  },
  {
    label: '兑人民币汇率',
    prop: 'cny',
  },
  {
    label: '折算人民币数量',
    width: 190,
    prop: 'money',
  },
  // {
  //   label: '总金额',
  //   prop: 'money',
  // },
  {
    label: '状态',
    prop: 'appealStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '申诉中',
        val: '0',
      },
      {
        text: '已处理',
        val: '1',
      },
      {
        text: '取消',
        val: '3',
      },
    ],
  },
  // {
  //   label: '申诉口令',
  //   prop: 'recdId',
  //   type: 'textPair',
  //   arr: ['masterCode', 'slaveCode'],
  //   width: 160,
  // },
  // {
  //   label: '申诉口令',
  //   prop: 'masterCode',
  // },
  {
    label: '买家口令',
    prop: 'slaveCode',
  },
  {
    label: '卖家口令',
    prop: 'masterCode',
  },
  {
    label: '申诉时间',
    prop: 'createTime',
    type: 'time',
  },
];

const coinFundsCol = [
  {
    label: '订单号',
    prop: 'relateRecdId',
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
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '充币',
        val: '0',
      },
      {
        text: '提币待审核',
        val: '1',
      },
      {
        text: '提币成功',
        val: '2',
      },
      {
        text: '提币失败',
        val: '3',
      },
      {
        text: '特殊调账',
        val: '14',
      },
      {
        text: '创建法币订单',
        val: '30',
      },
      {
        text: '取消法币订单',
        val: '31',
      },
      {
        text: '法币卖出',
        val: '32',
      },
      {
        text: '申诉买方赢，法币卖出',
        val: '33',
      },
      {
        text: '申诉卖方赢，取消法币订单',
        val: '34',
      },
      {
        text: '激活法币订单',
        val: '35',
      },
      {
        text: '法币买入',
        val: '36',
      },
      {
        text: '申诉买方赢，法币买入',
        val: '37',
      },
      {
        text: '返佣',
        val: '40',
      },
      {
        text: '划转待审核',
        val: '70',
      },
      {
        text: '划转成功',
        val: '71',
      },
      {
        text: '划转失败',
        val: '72',
      },
      {
        text: '提币待审核',
        val: '73',
      },
      {
        text: '划转手续费',
        val: '80',
      },
      {
        text: '提币手续费',
        val: '83',
      },
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
    filters: [
      {
        text: '可用余额',
        val: '1',
      },
      {
        text: '冻结金额',
        val: '2',
      },
    ],
  },
  {
    label: '时间',
    prop: 'createTime',
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
      {
        label: '充币',
        value: '0',
      },
      {
        label: '提币待审核',
        value: '1',
      },
      {
        label: '提币成功',
        value: '2',
      },
      {
        label: '提币失败',
        value: '3',
      },
      {
        label: '特殊调账',
        value: '14',
      },
      {
        label: '创建法币订单',
        value: '30',
      },
      {
        label: '取消法币订单',
        value: '31',
      },
      {
        label: '法币卖出',
        value: '32',
      },
      {
        label: '申诉买方赢，法币卖出',
        value: '33',
      },
      {
        label: '申诉卖方赢，取消法币订单',
        value: '34',
      },
      {
        label: '激活法币订单',
        value: '35',
      },
      {
        label: '法币买入',
        value: '36',
      },
      {
        label: '申诉买方赢，法币买入',
        value: '37',
      },
      {
        label: '返佣',
        value: '40',
      },
      {
        label: '划转待审核',
        value: '70',
      },
      {
        label: '划转成功',
        value: '71',
      },
      {
        label: '划转失败',
        value: '72',
      },
      {
        label: '提币待审核',
        value: '73',
      },
      {
        label: '划转手续费',
        value: '80',
      },
      {
        label: '提币手续费',
        value: '83',
      },
    ],
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
    label: 'UID',
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
    label: '提币地址',
    prop: 'toAddress',
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
    filters: [
      {
        text: '初审待审核',
        val: 0,
      },
      {
        text: '初审审核成功',
        val: 1,
      },
      {
        text: '初审审核失败',
        val: 2,
      },
      {
        text: '复审审核成功',
        val: 8,
      },
      {
        text: '复审审核失败',
        val: 9,
      },
    ],
  },
  // {
  //   label: "提币时间",
  //   prop: "reviewAuditTime",
  //   width: 200,
  // },
  {
    label: '审核时间(提币时间)',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '审核人',
    prop: 'reviewAuditUserName',
  },
  {
    label: '备注',
    prop: 'reviewRemark',
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
    label: 'UID',
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
    label: '提币地址',
    prop: 'toAddress',
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
    filters: [
      {
        text: '初审待审核',
        val: 0,
      },
      {
        text: '初审审核成功',
        val: 1,
      },
      {
        text: '初审审核失败',
        val: 2,
      },
      {
        text: '复审审核成功',
        val: 8,
      },
      {
        text: '复审审核失败',
        val: 9,
      },
    ],
  },
  // {
  //   label: "提币时间",
  //   prop: "reviewAuditTime",
  //   width: 200,
  // },
  {
    label: '审核时间(提币时间)',
    prop: 'reviewAuditTime',
    width: 200,
  },
  {
    label: '审核人',
    prop: 'reviewAuditUserName',
  },
  {
    label: '备注',
    prop: 'reviewRemark',
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
    prop: 'coinName',
    value: '',
    list: [],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'id',
    value: '',
    placeHolder: '请输入订单号',
  },
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
    list: [
      {
        label: '初审待审核',
        value: 0,
      },
      {
        label: '初审审核成功',
        value: 1,
      },
      {
        label: '初审审核失败',
        value: 2,
      },
      {
        label: '复审审核成功',
        value: 8,
      },
      {
        label: '复审审核失败',
        value: 9,
      },
    ],
  },
];

const otcOrderCol = [
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [
      {
        val: '0',
        text: '普通交易',
      },
      {
        val: '1',
        text: '商户交易',
      },
      {
        val: '2',
        text: '支付订单',
      },
    ],
  },
  {
    label: '订单号',
    prop: 'recordId',
    width: '180',
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '180',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      {
        val: '1',
        text: '在线出售',
      },
      {
        val: '2',
        text: '在线求购',
      },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
  },
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '140',
  },
  {
    label: '交易数量',
    prop: 'amount',
  },
  {
    label: '总金额',
    prop: 'money',
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '收款人',
    prop: 'bankUserName',
  },
  {
    label: '收款类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        val: '1',
        text: '银行卡',
      },
      {
        val: '2',
        text: '支付宝',
      },
      {
        val: '3',
        text: '微信',
      },
    ],
  },
  {
    label: '收款信息',
    prop: 'bankName',
  },
  {
    label: '收款账号',
    prop: 'bankCardId',
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '未付款',
        val: 1,
      },
      {
        text: '已付款(等待放行)',
        val: 2,
      },
      {
        text: '已完成',
        val: 3,
      },
      {
        text: '用户取消',
        val: 4,
      },
      {
        text: '申诉中',
        val: 5,
      },
      {
        text: '申诉后完成交易',
        val: 6,
      },
      {
        text: '申诉后取消交易',
        val: 7,
      },
      {
        text: '支付超时取消',
        val: 8,
      },
    ],
  },
  {
    label: '下单时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '确认付款时间',
    prop: 'payTime',
    type: 'time',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 200,
    btnGroup: [
      {
        label: '激活',
        fn: 'activation',
        type: 'primary',
        alias: 'activation',
      },
      {
        label: '对话记录',
        fn: 'dialog',
        type: 'primary',
        alias: 'dialog',
        noIsClick: true,
      },
    ],
  },
];

const otcOrderColNoBtn = [
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [
      {
        val: '0',
        text: '普通交易',
      },
      {
        val: '1',
        text: '商户交易',
      },
      {
        val: '2',
        text: '支付订单',
      },
    ],
  },
  {
    label: '订单号',
    prop: 'recordId',
    width: '180',
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '180',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [
      {
        val: '1',
        text: '在线出售',
      },
      {
        val: '2',
        text: '在线求购',
      },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
  },
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '140',
  },
  {
    label: '交易数量',
    prop: 'amount',
  },
  {
    label: '总金额',
    prop: 'money',
  },
  {
    label: '手续费',
    prop: 'fee',
  },
  {
    label: '收款人',
    prop: 'bankUserName',
  },
  {
    label: '收款类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        val: '1',
        text: '银行卡',
      },
      {
        val: '2',
        text: '支付宝',
      },
      {
        val: '3',
        text: '微信',
      },
    ],
  },
  {
    label: '收款信息',
    prop: 'bankName',
  },
  {
    label: '收款账号',
    prop: 'bankCardId',
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '未付款',
        val: 1,
      },
      {
        text: '已付款(等待放行)',
        val: 2,
      },
      {
        text: '已完成',
        val: 3,
      },
      {
        text: '用户取消',
        val: 4,
      },
      {
        text: '申诉中',
        val: 5,
      },
      {
        text: '申诉后完成交易',
        val: 6,
      },
      {
        text: '申诉后取消交易',
        val: 7,
      },
      {
        text: '超时取消',
        val: 8,
      },
    ],
  },
  {
    label: '下单时间',
    prop: 'createTime',
  },
  {
    label: '确认付款时间',
    prop: 'payTime',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
  },
];

const otcOrderConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '广告商UID',
    prop: 'advertUid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
  },
  {
    type: 'text',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
  },
  // {
  //   type: 'text',
  //   label: '收款人',
  //   prop: 'name',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'select',
    label: '收款类型',
    prop: 'payType',
    value: '',
    list: [
      {
        label: '银行卡',
        value: 1,
      },
    ],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'recordId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'tradeStatus',
    value: '',
    list: [
      {
        label: '未付款',
        value: 1,
      },
      {
        label: '已付款(等待放行)',
        value: 2,
      },
      {
        label: '已完成',
        value: 3,
      },
      {
        label: '用户取消',
        value: 4,
      },
      {
        label: '申诉中',
        value: 5,
      },
      {
        label: '申诉后完成交易',
        value: 6,
      },
      {
        label: '申诉后取消交易',
        value: 7,
      },
      {
        label: '超时取消',
        value: 8,
      },
    ],
  },
  {
    type: 'select',
    label: '广告类型',
    prop: 'advertType',
    value: '',
    list: [
      {
        label: '在线出售',
        value: 1,
      },
      {
        label: '在线求购',
        value: 2,
      },
      // { label: '抢单在线出售', value: 3 },
      // { label: '抢单在线购买', value: 4 },
      // { label: '匹配在线出售', value: 5 },
      // { label: '匹配在线购买', value: 6 },
    ],
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinName',
    value: '',
    list: [],
  },
  // {
  //   type: 'select',
  //   label: '交易类型',
  //   prop: 'tradeType',
  //   value: '',
  //   list: [{ label: '普通法币交易', value: 0 }, { label: 'Tp订单交易', value: 1 }],
  // },
];

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
    label: '充币数量',
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
    label: '充币状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '成功',
        val: 1,
      },
      {
        text: '充币确认中',
        val: 6,
      },
    ],
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
    filters: [
      {
        text: '未归集',
        val: 0,
      },
      {
        text: '已归集',
        val: 1,
      },
      {
        text: '归集失败',
        val: 2,
      },
    ],
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
    list: [
      {
        label: '成功',
        value: 1,
      },
      {
        label: '充币确认中',
        value: 6,
      },
    ],
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
    list: [
      {
        label: '未归集',
        value: 0,
      },
      {
        label: '已归集',
        value: 1,
      },
      {
        label: '归集失败',
        value: 2,
      },
    ],
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
];

const transferCol = [
  {
    label: '订单号',
    prop: 'orderNo',
  },
  {
    label: '订单类型',
    prop: 'transferType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '商户用户单',
        val: 1,
      },
      {
        text: '普通单',
        val: 2,
      },
    ],
  },
  {
    label: '划转类型',
    prop: 'transferDirection',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '转入',
        val: 1,
      },
      {
        text: '转出',
        val: 2,
      },
    ],
  },
  {
    label: '转出UID',
    prop: 'toUid',
  },
  {
    label: '转入UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '提币数量',
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
    label: '转出地址',
    prop: 'fromAddress',
  },
  {
    label: '转入地址',
    prop: 'toAddress',
  },
  {
    label: '状态',
    prop: 'tradeStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '转帐中',
        val: 0,
      },
      {
        text: '成功',
        val: 1,
      },
    ],
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '审核时间',
    prop: 'firstAuditTime',
  },
  {
    label: '审核人',
    prop: 'firstAuditUserName',
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
    label: '转入UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '转出UID',
    prop: 'toUid',
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
    type: 'text',
    label: '订单号',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '转入地址',
    prop: 'toAddress',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '转出地址',
    prop: 'fromAddress',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '划转类型',
    prop: 'transferDirection',
    value: '',
    list: [
      {
        label: '转入',
        value: '1',
      },
      {
        label: '转出',
        value: '2',
      },
    ],
  },
  {
    type: 'select',
    label: '状态',
    prop: 'tradeStatus',
    value: '',
    list: [
      {
        label: '转帐中',
        value: '0',
      },
      {
        label: '成功',
        value: '1',
      },
      // { label: "失败", value: "2" }
    ],
  },
];

const userCol = [
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
      {
        text: '普通用户',
        val: 1,
      },
      {
        text: '商户代理',
        val: 22,
      },
      {
        text: '商户',
        val: 23,
      },
    ],
  },
  {
    label: '用户名',
    prop: 'userName',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '唯一识别码',
    prop: 'uniqueCode',
  },
  {
    label: '登录状态',
    prop: 'userLoginStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '法币状态',
    prop: 'userOtcStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '提币状态',
    prop: 'userWithdrawStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    width: '100',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '220',
    btnGroup: [
      {
        label: '查看详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const userColNoBtn = [
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
      {
        text: '普通用户',
        val: 1,
      },
      {
        text: '商户代理',
        val: 22,
      },
      {
        text: '商户',
        val: 23,
      },
    ],
  },
  {
    label: '用户名',
    prop: 'userName',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '手机',
    prop: 'phone',
    width: '150',
  },
  {
    label: '邮箱',
    prop: 'email',
    width: '200',
  },
  {
    label: '唯一识别码',
    prop: 'uniqueCode',
  },
  {
    label: '登录状态',
    prop: 'userLoginStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '法币状态',
    prop: 'userOtcStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '提币状态',
    prop: 'userWithdrawStatus',
    width: 90,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '正常',
        val: 1,
        type: 'success',
      },
      {
        text: '失效',
        val: 0,
        type: 'warning',
      },
    ],
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    width: '100',
  },
];

const userConfig = [
  {
    type: 'date_rank',
    label: '注册时间',
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
    label: '用户类型',
    prop: 'userType',
    value: '',
    list: [
      {
        label: '普通用户',
        value: 1,
      },
      {
        label: '商户代理',
        value: 22,
      },
      {
        label: '商户',
        value: 23,
      },
    ],
  },
  {
    type: 'text',
    label: '手机',
    prop: 'phone',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '邮箱',
    prop: 'email',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '可登录状态',
    prop: 'userLoginStatus',
    value: '',
    list: [
      {
        label: '正常',
        value: 1,
      },
      {
        label: '失效',
        value: 0,
      },
    ],
  },
];

const userColOtcList = [
  {
    label: '支付方式',
    prop: 'payType',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '银行卡',
        val: 1,
      },
      {
        text: '支付宝',
        val: 2,
      },
      {
        text: '微信',
        val: 3,
      },
    ],
  },
  {
    label: '姓名',
    prop: 'userName',
  },
  {
    label: '卡号',
    prop: 'num',
  },
  {
    label: '银行名称',
    prop: 'bankName',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
  },
  // {
  //   label: "二维码",
  //   prop: "qrCode",
  //   type:'img'
  // },
  // {
  //   label: "是否启用",
  //   prop: "isShow",
  //   width:100,
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "未启用", val: 0 }, { text: "启用", val: 1 }],
  // },
  // {
  //     label: "操作",
  //     prop: "action",
  //     type: "action",
  //     width: 290,
  //     btnGroup: [
  //       {
  //         label: "立即停用",
  //         fn: "close",
  //         isPop: false,
  //         filter_key: "isShow",
  //         filter_status: 1,
  //         type: "danger",
  //       },
  //       {
  //         label: "立即启用",
  //         fn: "open",
  //         isPop: false,
  //         filter_key: "isReview",
  //         filter_status: 0,
  //         type: "success",
  //       },
  //     ],
  //   }
];
export { appealCol, appealColNoBtn, appealConfig, appealDetailCol, coinFundsCol, coinFundsConfig, extractCol, extractColNoBtn, extractConfig, otcOrderCol, otcOrderColNoBtn, otcOrderConfig, rechargeCol, rechargeConfig, transferCol, transferConfig, userCol, userColNoBtn, userConfig, userColOtcList };
