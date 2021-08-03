const userCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '手机（账号）',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  // {
  //   label: "企业类型",
  //   prop: "userEnterprise",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "非企业号", val: 0 }, { text: "企业号", val: 1 }],
  // },
  // {
  //   label: "卖出佣金费率",
  //   prop: "inviteRateDtoList",
  //   type:"labelArr",
  //   label1:"payTypeName",
  //   label2:"saleFee",
  // },
  // {
  //   label: "购买佣金费率",
  //   prop: "tt",
  // },
  {
    label: '注册时间',
    prop: 'registTimeStamp',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 200,
    btnGroup: [
      {
        label: '查看/编辑',
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
    label: '手机（账号）',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  // {
  //   label: "企业类型",
  //   prop: "userEnterprise",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "非企业号", val: 0 }, { text: "企业号", val: 1 }],
  // },
  // {
  //   label: "卖出佣金费率",
  //   prop: "inviteRateDtoList",
  //   type:"labelArr",
  //   label1:"payTypeName",
  //   label2:"saleFee",
  // },
  // {
  //   label: "购买佣金费率",
  //   prop: "tt",
  // },
  {
    label: '注册时间',
    prop: 'registTimeStamp',
    type: 'time',
  },
];

const userConfig = [
  {
    type: 'date_rank',
    label: '注册时间',
    prop: 'startDate',
    prop2: 'endDate',
    value: '',
  },
  {
    type: 'text',
    label: '手机（账户）',
    prop: 'account',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid',
  },
  // {
  //   type: "select",
  //   label: "企业类型",
  //   prop: "userEnterprise",
  //   value: "",
  //   list: [{ label: "非企业号", value: 0 }, { label: "企业号", value: 1 }],
  // },
  {
    type: 'text',
    label: '邮箱',
    prop: 'email',
    value: '',
    placeHolder: '请输入',
  },
];

const inviteCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'gg',
  },
  {
    label: '买入佣金费率',
    prop: 'tt',
  },
  {
    label: '卖出佣金费率',
    prop: 'time',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 200,
    btnGroup: [
      {
        label: '修改',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
      {
        label: '迁移',
        fn: 'move',
        type: 'primary',
        alias: 'move',
      },
    ],
  },
];

const inviteColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'gg',
  },
  {
    label: '买入佣金费率',
    prop: 'tt',
  },
  {
    label: '卖出佣金费率',
    prop: 'time',
    type: 'time',
  },
];

const invitationCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '手机',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '用户类型',
    prop: 'qyType',
    type: 'filter',
    show_type: 'text',
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: '兑入佣金比',
    prop: 'gg',
  },
  {
    label: '兑出佣金比',
    prop: 'tt',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 200,
    btnGroup: [
      {
        label: '迁移',
        fn: 'move',
        type: 'primary',
        alias: 'move',
      },
    ],
  },
];

const invitationColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '手机',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '用户类型',
    prop: 'qyType',
    type: 'filter',
    show_type: 'text',
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: '兑入佣金比',
    prop: 'gg',
  },
  {
    label: '兑出佣金比',
    prop: 'tt',
  },
];

const invitationConfig = [
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '用户编号',
    prop: 'nickName',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: "text",
  //   label: "邮箱",
  //   prop: "account",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  // {
  //   type: "select",
  //   label: "支付方式",
  //   prop: "auditStatus",
  //   value: "",
  //   list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  // },
];

const advertiseRecordCol = [
  {
    label: '广告商UID',
    prop: 'uid',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 170,
    filters: [{ val: 1, text: '在线出售' }, { val: 2, text: '在线求购' }],
    // filters: [{ val: 1, text: '在线出售' }, { val: 2, text: '在线求购' }, { val: 3, text: '抢单在线出售' }, { val: 4, text: '抢单在线购买' }],
  },
  {
    label: '交易币种',
    prop: 'coinName',
  },
  {
    label: '定价方式',
    prop: 'pricingMethod',
    type: 'filter',
    show_type: 'text',
    width: 130,
    filters: [{ val: 1, text: '固定定价' }, { val: 0, text: '浮动定价' }, { val: 2, text: '市场定价' }],
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
    width: '170',
  },
  {
    label: '初始总量',
    prop: 'totalStock',
    width: '170',
  },
  {
    label: '冻结存量',
    prop: 'lockedStock',
    width: '170',
  },
  {
    label: '已成交的数量',
    prop: 'dealAmount',
    width: '170',
  },
  {
    label: '剩余数量',
    prop: 'remainAmount',
    width: '170',
  },
  {
    label: '最大交易额',
    prop: 'maxTradeAmount',
  },
  {
    label: '最小交易额',
    prop: 'minTradeAmount',
  },
  {
    label: '支付方式',
    prop: 'payList',
    type: 'labelArr',
    typeDetail: 'stringlist',
  },
  {
    label: '广告单号',
    prop: 'id',
  },
  {
    label: '上/下架时间',
    prop: 'onshelfTime',
    type: 'time',
  },
  {
    label: '是否上架',
    prop: 'isOnshelf',
    type: 'switch',
    fn: 'switchAd',
    alias: 'trputon',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 200,
    btnGroup: [
      {
        label: '查看/编辑',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const advertiseRecordColNoBtn = [
  {
    label: '广告商UID',
    prop: 'uid',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 170,
    filters: [{ val: 1, text: '在线出售' }, { val: 2, text: '在线求购' }],
  },
  {
    label: '交易币种',
    prop: 'coinName',
  },
  {
    label: '定价方式',
    prop: 'pricingMethod',
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 1, text: '固定定价' }, { val: 0, text: '浮动定价' }, { val: 2, text: '市场定价' }],
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
    width: '170',
  },
  {
    label: '初始总量',
    prop: 'totalStock',
    width: '170',
  },
  {
    label: '冻结存量',
    prop: 'lockedStock',
    width: '170',
  },
  {
    label: '已成交的数量',
    prop: 'dealAmount',
    width: '170',
  },
  {
    label: '剩余数量',
    prop: 'remainAmount',
    width: '170',
  },
  {
    label: '最大交易额',
    prop: 'maxTradeAmount',
  },
  {
    label: '最小交易额',
    prop: 'minTradeAmount',
  },
  {
    label: '支付方式',
    prop: 'payList',
    type: 'labelArr',
    typeDetail: 'stringlist',
  },
  {
    label: '广告单号',
    prop: 'id',
  },
  {
    label: '上/下架时间',
    prop: 'onshelfTime',
    type: 'time',
  },
];

const advertiseRecordConfig = [
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
    label: '广告类型',
    prop: 'advertType',
    value: '',
    list: [{ label: '在线出售', value: 1 }, { label: '在线求购', value: 2 }],
  },
  {
    type: 'select',
    label: '币种',
    prop: 'coinName',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '是否上架',
    prop: 'isOnshelf',
    value: '',
    list: [{ label: '上架', value: 1 }, { label: '下架', value: 0 }],
  },
  {
    type: 'select',
    label: '价格类型',
    prop: 'pricingMethod',
    value: '',
    list: [{ label: '固定定价', value: 1 }, { label: '浮动定价', value: 0 }, { label: '市场定价', value: 2 }],
  },
  {
    type: 'select',
    label: '剩余数量排序',
    prop: 'remainOrder',
    value: '',
    list: [{ label: '正序', value: 'ASC' }, { label: '倒序', value: 'DESC' }],
  },
];

const infoCol = [
  {
    label: '广告商UID',
    prop: 'uid',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 170,
    filters: [{ val: 1, text: '在线出售' }, { val: 2, text: '在线求购' }],
  },
  {
    label: '交易币种',
    prop: 'coinName',
  },
  {
    label: '定价方式',
    prop: 'pricingMethod',
    type: 'filter',
    show_type: 'text',
    filters: [{ val: 1, text: '固定定价' }, { val: 0, text: '浮动定价' }, { val: 2, text: '市场定价' }],
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
    width: '170',
  },
  {
    label: '初始总量',
    prop: 'totalStock',
    width: '170',
  },
  {
    label: '冻结存量',
    prop: 'lockedStock',
    width: '170',
  },
  {
    label: '已成交的数量',
    prop: 'dealAmount',
    width: '170',
  },
  {
    label: '剩余数量',
    prop: 'remainAmount',
    width: '170',
  },
  {
    label: '最大交易额',
    prop: 'maxTradeAmount',
  },
  {
    label: '最小交易额',
    prop: 'minTradeAmount',
  },
  {
    label: '支付方式',
    prop: 'payList',
    type: 'labelArr',
    typeDetail: 'stringlist',
  },
  {
    label: '广告单号',
    prop: 'id',
  },
  {
    label: '上/下架时间',
    prop: 'onshelfTime',
    type: 'time',
  },
  {
    label: '是否上架',
    prop: 'isOnshelf',
    type: 'switch',
    fn: 'switchAd',
    alias: 'trputon',
  },
];

const dealCol = [
  {
    label: '订单号',
    prop: 'recordId',
    width: '180',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 170,
    filters: [
      { val: '1', text: '在线出售' },
      { val: '2', text: '在线求购' },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
      // { val: '6', text: '匹配在线购买' },
    ],
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
  },
  {
    label: '交易方UID',
    prop: 'uid',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '交易价格(CNY)',
    prop: 'price',
    width: '170',
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
  //   label: '收款人',
  //   prop: 'bankUserName',
  // },
  // {
  //   label: '收款类型',
  //   prop: 'payType',
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '银行卡', val: 1 }, { text: '支付宝', val: 2 }, { text: '微信', val: 3 }, { text: '宝转卡', val: 4 }],
  // },
  // {
  //   label: '收款信息',
  //   prop: 'payInfo',
  // },
  // {
  //   label: '收款账号',
  //   prop: 'bankCardId',
  // },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '法币交易', val: 0 }, { text: '匹配下单', val: 1 }, { text: '抢单', val: 2 }, { text: '手动录单', val: 3 }],
  },
  {
    label: '手续费',
    prop: 'fee',
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
    label: '确认放行时间',
    prop: 'letgoTime',
    type: 'time',
  },
];

const appealCol = [
  {
    label: '交易类型',
    prop: 'appealTradeType',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [
      { text: '普通交易订单', val: 0 },
      { text: 'tp商户交易订单', val: 1 },
      { text: '币富通自选订单', val: 2 },
      { text: '收银台兑入单', val: 3 },
      { text: '商户批量兑出单', val: 4 },
      { text: '币富通一键购买单', val: 5 },
      { text: '币富通一键出售单', val: 6 },
      { text: '商户币币批量出金', val: 7 },
      { text: '用户币币手动入金', val: 8 },
    ],
  },
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
  
  {
    label: '买家口令',
    prop: 'slaveCode',
  },
  {
    label: '卖家口令',
    prop: 'masterCode',
  },
  {
    label: '确认付款时间',
    prop: 'payTime',
  },
  {
    label: '申诉时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '判决时间',
    prop: 'auditTime',
    type: 'time',
  },

  {
    label: '判决人',
    prop: 'auditUserName',
  },
  {
    label: '判决人IP',
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
      { text: '普通交易订单', val: 0 },
      { text: 'tp商户交易订单', val: 1 },
      { text: '币富通自选订单', val: 2 },
      { text: '收银台兑入单', val: 3 },
      { text: '商户批量兑出单', val: 4 },
      { text: '币富通一键购买单', val: 5 },
      { text: '币富通一键出售单', val: 6 },
      { text: '商户币币批量出金', val: 7 },
      { text: '用户币币手动入金', val: 8 },
    ],
  },
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
 
  {
    label: '买家口令',
    prop: 'slaveCode',
  },
  {
    label: '卖家口令',
    prop: 'masterCode',
  },
  {
    label: '确认付款时间',
    prop: 'payTime',
  },
  {
    label: '申诉时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '判决时间',
    prop: 'auditTime',
    type: 'time',
  },

  {
    label: '判决人',
    prop: 'auditUserName',
  },
  {
    label: '判决人IP',
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
  {
    type: 'select',
    label: '交易类型',
    prop: 'appealTradeType',
    value: '',
    list: [
      { label: '普通交易订单', value: 0 },
      { label: 'tp商户交易订单', value: 1 },
      { label: '币富通自选订单', value: 2 },
      { label: '收银台兑入单', value: 3 },
      { label: '商户批量兑出单', value: 4 },
      { label: '币富通一键购买单', value: 5 },
      { label: '币富通一键出售单', value: 6 },
      { label: '商户币币批量出金', value: 7 },
      { label: '用户币币手动入金', value: 8 },
    ],
  },
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
    label: '买方UID',
    prop: 'uid',
  },
  {
    label: '卖方UID',
    prop: 'targetUid',
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
    width: 100,
    prop: 'money',
  },
  // {
  //   label: '总金额',
  //   prop: 'money',
  // },
  {
    label: '收款人名称',
    prop: 'bankUserName',
  },
  {
    label: '银行卡号',
    prop: 'bankCardId',
  },
  {
    label: '银行名称',
    prop: 'bankName',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
  },
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
  {
    label: '订单交易类型',
    prop: 'appealTradeType',
    type: 'filter',
    show_type: 'text',
    width: 140,
    filters: [{ val: '0', text: '普通交易' }, { val: '1', text: '商户交易' }],
  },
  {
    label: '币种',
    prop: 'coinName',
  },

  
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

const otcOrderCol = [
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    width: 80,
    filters: [{ val: '0', text: '普通法币交易' }, { val: '1', text: 'Tp订单交易' }],
  },
  {
    label: '订单号',
    prop: 'recordId',
    width: '100',
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '100',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 90,
    filters: [
      { val: '1', text: '在线出售' },
      { val: '2', text: '在线求购' },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
    width: '90',
  },
  {
    label: '用户UID',
    prop: 'uid',
    width: '90',
  },
  {
    label: '币种',
    prop: 'coinName',
    width: '90',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '100',
  },
  {
    label: '交易数量',
    prop: 'amount',
    width: '90',
  },
  {
    label: '总金额',
    prop: 'money',
    width: '90',
  },
  {
    label: '手续费',
    prop: 'fee',
    width: '90',
  },
  {
    label: '支付类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    width: 90,
    filters: [{ val: '1', text: '银行卡' }, { val: '2', text: '支付宝' }, { val: '3', text: '微信' }],
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    width: '100',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '下单时间',
    prop: 'createTime',
    type: 'time',
    width: '100',
  },
  {
    label: '支付时间',
    prop: 'payTime',
    type: 'time',
    width: '100',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
    type: 'time',
    width: '100',
  },
  {
    label: '收款人名称',
    prop: 'bankUserName',
    width: '100',
  },
  {
    label: '银行名称',
    prop: 'bankName',
    width: '100',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
    width: '100',
  },
  {
    label: '是否激活',
    prop: 'isActivation',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '0', text: '未激活' }, { val: '1', text: '激活' }],
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
    width: 80,
    filters: [{ val: '0', text: '普通法币交易' }, { val: '1', text: 'Tp订单交易' }],
  },
  {
    label: '订单号',
    prop: 'recordId',
    width: '100',
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '100',
  },
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 90,
    filters: [
      { val: '1', text: '在线出售' },
      { val: '2', text: '在线求购' },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
    width: '90',
  },
  {
    label: '用户UID',
    prop: 'uid',
    width: '90',
  },
  {
    label: '币种',
    prop: 'coinName',
    width: '90',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '100',
  },
  {
    label: '交易数量',
    prop: 'amount',
    width: '90',
  },
  {
    label: '总金额',
    prop: 'money',
    width: '90',
  },
  {
    label: '手续费',
    prop: 'fee',
    width: '90',
  },
  {
    label: '支付类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    width: 90,
    filters: [{ val: '1', text: '银行卡' }, { val: '2', text: '支付宝' }, { val: '3', text: '微信' }],
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    width: '100',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '下单时间',
    prop: 'createTime',
    type: 'time',
    width: '100',
  },
  {
    label: '支付时间',
    prop: 'payTime',
    type: 'time',
    width: '100',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
    type: 'time',
    width: '100',
  },
  {
    label: '收款人名称',
    prop: 'bankUserName',
    width: '100',
  },
  {
    label: '银行名称',
    prop: 'bankName',
    width: '100',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
    width: '100',
  },
  {
    label: '是否激活',
    prop: 'isActivation',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '0', text: '未激活' }, { val: '1', text: '激活' }],
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
    list: [{ label: '银行卡', value: 1 }, { label: '支付宝', value: 2 }, { label: '微信', value: 3 }],
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
    list: [{ label: '未付款', value: 1 }, { label: '已付款(等待放行)', value: 2 }, { label: '已完成', value: 3 }, { label: '用户取消', value: 4 }, { label: '申诉中', value: 5 }, { label: '申诉后完成交易', value: 6 }, { label: '申诉后取消交易', value: 7 }, { label: '支付超时取消', value: 8 }],
  },
  {
    type: 'select',
    label: '广告类型',
    prop: 'advertType',
    value: '',
    list: [
      { label: '在线出售', value: 1 },
      { label: '在线求购', value: 2 },
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

const otcOrderCustomerCol = [
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 60,
    filters: [
      { val: '1', text: '在线出售' },
      { val: '2', text: '在线求购' },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '平台订单号',
    prop: 'recordId',
    width: '80',
  },
  {
    label: '商户订单号',
    prop: 'apiOrderNo',
    width: '80',
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
    width: '95',
  },
  {
    label: '商户UID',
    prop: 'uid',
    width: '80',
  },
  {
    label: '币种',
    prop: 'coinName',
    width: '80',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '80',
  },
  {
    label: '交易数量',
    prop: 'amount',
    width: '90',
  },
  {
    label: '总金额',
    prop: 'money',
    width: '70',
  },
  {
    label: '手续费',
    prop: 'fee',
    width: '70',
  },
  {
    label: '下单时间',
    prop: 'createTime',
    type: 'time',
    width: '110',
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    width: '80',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '收款人名称',
    prop: 'bankUserName',
    width: '80',
  },
  {
    label: '卡号',
    prop: 'bankCardId',
    width: '100',
  },
  {
    label: '银行名称',
    prop: 'bankName',
    width: '90',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
    width: '90',
  },
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [{ val: '0', text: '普通法币交易' }, { val: '1', text: 'Tp订单交易' }],
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '180',
  },
  {
    label: '支付类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '1', text: '银行卡' }, { val: '2', text: '支付宝' }, { val: '3', text: '微信' }],
  },
  {
    label: '支付凭证',
    prop: 'paymentUrl',
    type: 'imgArr',
  },
  {
    label: '支付时间',
    prop: 'payTime',
    type: 'time',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
    type: 'time',
  },
  {
    label: '是否激活',
    prop: 'isActivation',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '0', text: '未激活' }, { val: '1', text: '激活' }],
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 240,
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
      {
        label: '回调',
        fn: 'callBack',
        type: 'primary',
        alias: 'callBack',
        noIsClick: true,
      },
    ],
  },
];

const otcOrderCustomerColNoBtn = [
  {
    label: '广告类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    width: 60,
    filters: [
      { val: '1', text: '在线出售' },
      { val: '2', text: '在线求购' },
      // { val: '3', text: '抢单在线出售' },
      // { val: '4', text: '抢单在线购买' },
      // { val: '5', text: '匹配在线出售' },
    ],
  },
  {
    label: '平台订单号',
    prop: 'recordId',
    width: '80',
  },
  {
    label: '商户订单号',
    prop: 'apiOrderNo',
    width: '80',
  },
  {
    label: '广告商UID',
    prop: 'advertUid',
    width: '95',
  },
  {
    label: '商户UID',
    prop: 'uid',
    width: '80',
  },
  {
    label: '币种',
    prop: 'coinName',
    width: '80',
  },
  {
    label: '交易价格(CNY）',
    prop: 'price',
    width: '80',
  },
  {
    label: '交易数量',
    prop: 'amount',
    width: '90',
  },
  {
    label: '总金额',
    prop: 'money',
    width: '70',
  },
  {
    label: '手续费',
    prop: 'fee',
    width: '70',
  },
  {
    label: '下单时间',
    prop: 'createTime',
    type: 'time',
    width: '110',
  },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    width: '80',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '收款人名称',
    prop: 'bankUserName',
    width: '80',
  },
  {
    label: '卡号',
    prop: 'bankCardId',
    width: '100',
  },
  {
    label: '银行名称',
    prop: 'bankName',
    width: '90',
  },
  {
    label: '支行名称',
    prop: 'bankBranch',
    width: '90',
  },
  {
    label: '交易类型',
    prop: 'tradeType',
    type: 'filter',
    show_type: 'text',
    width: 120,
    filters: [{ val: '0', text: '普通法币交易' }, { val: '1', text: 'Tp订单交易' }],
  },
  {
    label: '广告单号',
    prop: 'advertId',
    width: '180',
  },
  {
    label: '支付类型',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '1', text: '银行卡' }, { val: '2', text: '支付宝' }, { val: '3', text: '微信' }],
  },
  {
    label: '支付凭证',
    prop: 'paymentUrl',
    type: 'imgArr',
  },
  {
    label: '支付时间',
    prop: 'payTime',
    type: 'time',
  },
  {
    label: '放行时间',
    prop: 'letgoTime',
    type: 'time',
  },
  {
    label: '是否激活',
    prop: 'isActivation',
    type: 'filter',
    show_type: 'text',
    width: 100,
    filters: [{ val: '0', text: '未激活' }, { val: '1', text: '激活' }],
  },
];

const otcOrderCustomerConfig = [
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
    label: '商户UID',
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
    list: [{ label: '银行卡', value: 1 }, { label: '支付宝', value: 2 }, { label: '微信', value: 3 }],
  },
  {
    type: 'text',
    label: '平台订单号',
    prop: 'recordId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '商户订单号',
    prop: 'apiOrderNo',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '未付款', value: 1 }, { label: '已付款(等待放行)', value: 2 }, { label: '已完成', value: 3 }, { label: '用户取消', value: 4 }, { label: '申诉中', value: 5 }, { label: '申诉后完成交易', value: 6 }, { label: '申诉后取消交易', value: 7 }, { label: '支付超时取消', value: 8 }],
  },
  {
    type: 'select',
    label: '广告类型',
    prop: 'advertType',
    value: '',
    list: [
      { label: '在线出售', value: 1 },
      { label: '在线求购', value: 2 },
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
  {
    type: 'text',
    label: '收款人姓名',
    prop: 'bankUserName',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '银行卡号',
    prop: 'bankCardId',
    value: '',
    placeHolder: '请输入',
  },
];

const redeemCol = [
  // {
  //   label: "交易类型",
  //   prop: "uid",
  // },
  // {
  //   label: "商户UID",
  //   prop: "phone",
  // },
  {
    label: '商户名称',
    prop: 'makerName',
  },
  // {
  //   label: "出售方UID",
  //   prop: "bb",
  // },
  // {
  //   label: "订单金额(CNY)",
  //   prop: "money",
  // },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '价格/数量',

    arr: ['price', 'amount'],
    type: 'textArr',
    join: ',',
  },
  {
    label: '手续费(USDT)',
    prop: 'fee',
  },
  // {
  //   label: "商户到账数量(USDT)",
  //   prop: "ee",
  // },
  {
    label: '订单状态',
    prop: 'tradeStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未付款', val: 1 }, { text: '已付款(等待放行)', val: 2 }, { text: '已完成', val: 3 }, { text: '用户取消', val: 4 }, { text: '申诉中', val: 5 }, { text: '申诉后完成交易', val: 6 }, { text: '申诉后取消交易', val: 7 }, { text: '支付超时取消', val: 8 }],
  },
  {
    label: '商户单号/平台账号',
    prop: 'account',
  },
  // {
  //   label: "付款人",
  //   prop: "ee",
  // },
  // {
  //   label: "收款人",
  //   prop: "ee",
  // },
  // {
  //   label: "收款类型",
  //   prop: "qyType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [],
  //   // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  // },
  // {
  //   label: "账户信息",
  //   prop: "ee",
  // },
  // {
  //   label: "收款账号",
  //   prop: "ee",
  // },
  // {
  //   label: "下单时间",
  //   prop: "ee",
  //   type: "time",
  // },
  // {
  //   label: "付款时间",
  //   prop: "ee",
  //   type: "time",
  // },
  // {
  //   label: "确定放行时间",
  //   prop: "gg",
  //   type: "time",
  // },
  // {
  //   label: "是否自动放行",
  //   prop: "ee",
  // },
  // {
  //   label: "app userid/设备id",
  //   prop: "gg",
  // },
  // {
  //   label: "是否扣除返佣",
  //   prop: "gg",
  // },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
    btnGroup: [
      {
        label: '激活',
        fn: 'activation',
        type: 'success',
      },
    ],
  },
];

const redeemColNoBtn = [];

const redeemConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startDate',
    prop2: 'endDate',
    value: '',
  },
  {
    type: 'text',
    label: '商户名称',
    prop: 'account',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: "text",
  //   label: "UID",
  //   prop: "uid",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  // {
  //   type: "text",
  //   label: "付款人",
  //   prop: "uid",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  {
    type: 'select',
    label: '收款类型',
    prop: 'tradeStatus',
    value: '',
    list: [{ label: '未付款', value: 1 }, { label: '已付款(等待放行)', value: 2 }, { label: '已完成', value: 3 }, { label: '取消', value: 4 }, { label: '申述中', value: 5 }],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'recdId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'auditStatus',
    value: '',
    list: [{ label: '全部', value: '' }, { label: '未付款', value: '1' }, { label: '已付款(待放行)', value: '2' }, { label: '已完成', value: '3' }, { label: '已取消', value: '4' }, { label: '申述中', value: '5' }],
  },
  // {
  //   type: "select",
  //   label: "超时筛选",
  //   prop: "auditStatus",
  //   value: "",
  //   list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  // },
  // {
  //   type: "select",
  //   label: "是否自动放行",
  //   prop: "auditStatus",
  //   value: "",
  //   list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  // },
  // {
  //   type: "select",
  //   label: "交易类型",
  //   prop: "auditStatus",
  //   value: "",
  //   list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  // },
];

const cashOutCol = [
  {
    label: '交易类型',
    prop: 'uid',
  },
  {
    label: '商户名称',
    prop: 'phone',
  },
  {
    label: '商户UID',
    prop: 'phone',
  },
  {
    label: '购买方UID',
    prop: 'phone',
  },
  {
    label: '订单金额(CNY)',
    prop: 'cc',
  },
  {
    label: '手续费(USDT)',
    prop: 'ee',
  },
  {
    label: '价格/数量',
    prop: 'dd',
  },
  {
    label: '订单状态',
    prop: 'qyType',
    type: 'filter',
    show_type: 'text',
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: '订单号',
    prop: 'ee',
  },
  {
    label: '收款人',
    prop: 'ee',
  },
  {
    label: '收款账号',
    prop: 'ee',
  },
  {
    label: '收款账户信息',
    prop: 'ee',
  },
  {
    label: '收款账户类型',
    prop: 'qyType',
    type: 'filter',
    show_type: 'text',
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: '添加时间',
    prop: 'ee',
    type: 'time',
  },
  {
    label: '确认付款时间',
    prop: 'ee',
    type: 'time',
  },
  {
    label: '确定放行时间',
    prop: 'gg',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 290,
    btnGroup: [
      {
        label: '激活',
        fn: 'activation',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 0,
        type: 'success',
      },
      {
        label: '判决',
        fn: 'judgment',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'danger',
      },
      {
        label: '修改金额',
        fn: 'edit',
        isPop: false,
        filter_key: 'tradeStatus',
        filter_status: 3,
        type: 'danger',
      },
      {
        label: '扣除返佣',
        fn: 'rebate',
        type: 'primary',
      },
    ],
  },
];

const cashOutColNoBtn = [];

const cashOutConfig = [
  {
    type: 'date_rank',
    label: '添加时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '商户名称',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
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
    label: '收款人',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'auditStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '审核通过', value: 1 }, { label: '审核不通过', value: 2 }, { label: '未提交审核', value: 3 }],
  },
  {
    type: 'select',
    label: '超时筛选',
    prop: 'auditStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '审核通过', value: 1 }, { label: '审核不通过', value: 2 }, { label: '未提交审核', value: 3 }],
  },
  {
    type: 'select',
    label: '收款账户',
    prop: 'auditStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '审核通过', value: 1 }, { label: '审核不通过', value: 2 }, { label: '未提交审核', value: 3 }],
  },
];

const transactionCol = [
  {
    label: '时间',
    prop: 'uid',
    type: 'time',
  },
  {
    label: '商家UID',
    prop: 'phone',
  },
  {
    label: '交易方UID',
    prop: 'aa',
  },
  {
    label: '币种',
    prop: 'bb',
  },
  {
    label: '类型',
    prop: 'qyType',
    type: 'filter',
    show_type: 'text',
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: '价格',
    prop: 'cc',
  },
  {
    label: '数量',
    prop: 'dd',
  },
  {
    label: '金额',
    prop: 'ee',
  },
  {
    label: '手续费',
    prop: 'gg',
  },
  {
    label: '订单号',
    prop: 'ff',
  },
];

const transactionColNoBtn = [];

const transactionConfig = [
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
    prop: 'auditStatus',
    value: '',
    list: [],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'auditStatus',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '审核通过', value: 1 }, { label: '审核不通过', value: 2 }, { label: '未提交审核', value: 3 }],
  },
];

const fundsFlowCol = [
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
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱号',
    prop: 'email',
  },
  {
    label: '用户类型',
    prop: 'userTypeName',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'filters',
    filters: 'optTypeFB',
    width: 100,
  },
  {
    label: '可用资产变化',
    prop: 'balanceChange',
  },
  {
    label: '可用资产余额',
    prop: 'balance',
  },
  {
    label: '冻结资产变化',
    prop: 'frozenAmountChange',
  },
  {
    label: '冻结资产余额',
    prop: 'frozenAmount',
  },
  // {
  //   label: "资产证明变化",
  //   prop: "assetCertificationChange",
  // },
  // {
  //   label: "资产证明余额",
  //   prop: "assetCertification",
  // },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const fundsFlowColNoBtn = [
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
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱号',
    prop: 'email',
  },
  {
    label: '用户类型',
    prop: 'userTypeName',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'filters',
    filters: 'optTypeFB',
    width: 100,
  },
  {
    label: '可用资产变化',
    prop: 'balanceChange',
  },
  {
    label: '可用资产余额',
    prop: 'balance',
  },
  {
    label: '冻结资产变化',
    prop: 'frozenAmountChange',
  },
  {
    label: '冻结资产余额',
    prop: 'frozenAmount',
  },
  // {
  //   label: "资产证明变化",
  //   prop: "assetCertificationChange",
  // },
  // {
  //   label: "资产证明余额",
  //   prop: "assetCertification",
  // },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const fundsFlowConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startDate',
    prop2: 'endDate',
    value: '',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '账号',
    prop: 'phone',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: "text",
  //   label: "手机号",
  //   prop: "phone",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  {
    type: 'text',
    label: '邮箱号',
    prop: 'email',
    value: '',
    placeHolder: '请输入',
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
    prop: 'recdId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'userType',
    value: '',
    list: [{ label: '普通用户', value: 1 }, { label: '商户', value: 20 }, { label: '系统用户', value: 100 }],
  },
];

const assetManageCol = [
  // {
  //   label: "UID",
  //   prop: "uid",
  // },
  {
    label: '币种',
    prop: 'coinId',
    type: 'filter',
    show_type: 'text',
    filters: [],
  },
  {
    label: '资产证明',
    prop: 'amount',
  },
  {
    label: '状态',
    prop: 'auditStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '审核通过', val: 1 }, { text: '审核失败', val: 2 }, { text: '资产证明已释放', val: 3 }],
  },
  {
    label: '资产操作类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '充值资产证明', val: 1 }, { text: '申请取出', val: 2 }],
  },
  {
    label: '申请时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '原因',
    prop: 'auditComment',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 150,
    btnGroup: [
      {
        label: '通过',
        fn: 'pass',
        type: 'success',
        alias: 'pass',
      },
      {
        label: '驳回',
        fn: 'refuse',
        type: 'danger',
        alias: 'refuse',
      },
      {
        label: '释放资产证明',
        fn: 'edit',
        isPop: false,
        filter_key: 'auditStatus',
        filter_status: 1,
        type: 'success',
      },
    ],
  },
];

const assetManageColNoBtn = [
  {
    label: '币种',
    prop: 'coinId',
    type: 'filter',
    show_type: 'text',
    filters: [],
  },
  {
    label: '资产证明',
    prop: 'amount',
  },
  {
    label: '状态',
    prop: 'auditStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '待审核', val: 0 }, { text: '审核通过', val: 1 }, { text: '审核失败', val: 2 }, { text: '资产证明已释放', val: 3 }],
  },
  {
    label: '资产操作类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '充值资产证明', val: 1 }, { text: '申请取出', val: 2 }],
  },
  {
    label: '申请时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '原因',
    prop: 'auditComment',
  },
];

const assetManageConfig = [
  // {
  //   type: "date_rank",
  //   label: "时间",
  //   prop: "startTime",
  //   prop2: "endTime",
  //   value: "",
  // },
  // {
  //   type: "text",
  //   label: "UID",
  //   prop: "uid",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  {
    type: 'text',
    label: '账户',
    prop: 'phone',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    value: '',
    list: [{ label: '待审核', value: 0 }, { label: '审核通过', value: 1 }, { label: '审核失败', value: 2 }, { label: '资产证明已释放', value: 3 }],
  },
  {
    type: 'select',
    label: '资产操作类型',
    prop: 'optType',
    value: '',
    list: [{ label: '充值资产证明', value: 1 }, { label: '申请取出', value: 2 }],
  },
];

const otcGlobalCol = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '广告费率',
    prop: 'fee',
  },
  {
    label: '单笔交易最小限额',
    prop: 'singleMinAmount',
    width: '160',
  },
  {
    label: '单笔交易最大限额',
    prop: 'singleMaxAmount',
    width: '160',
  },
  {
    label: '订单付款时间',
    prop: 'payTimeout',
  },
  {
    label: '放行时间',
    prop: 'releaseTime',
  },
  {
    label: '订单日取消上限',
    prop: 'dailyCancellationQuantity',
    width: '140',
  },
  {
    label: '排序',
    prop: 'position',
  },
  {
    label: '小数位',
    prop: 'decimalPlaces',
  },
  {
    label: '保证金数量',
    prop: 'depositAmount',
  },
  {
    label: '保证金退还天数',
    prop: 'depositDay',
    width: '140',
  },
  {
    label: '是否开启TP交易',
    prop: 'isTp',
    type: 'switch',
    fn: 'trdraw',
    alias: 'trdraw',
    width: '150',
  },
  {
    label: '是否开启法币交易',
    prop: 'isOtc',
    type: 'switch',
    fn: 'trstart',
    alias: 'trstart',
    width: '150',
  },
  {
    label: '是否启用保证金',
    prop: 'isOtcDeposit',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon',
    width: '150',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 130,
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

const otcGlobalColNoBtn = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '广告费率',
    prop: 'fee',
  },
  {
    label: '单笔交易最小限额',
    prop: 'singleMinAmount',
    width: '160',
  },
  {
    label: '单笔交易最大限额',
    prop: 'singleMaxAmount',
    width: '160',
  },
  {
    label: '订单付款时间',
    prop: 'payTimeout',
  },
  {
    label: '排序',
    prop: 'position',
  },
  {
    label: '小数位',
    prop: 'decimalPlaces',
  },
  {
    label: '放行时间',
    prop: 'releaseTime',
  },
  {
    label: '订单日取消上限',
    prop: 'dailyCancellationQuantity',
    width: '140',
  },
  {
    label: '保证金数量',
    prop: 'depositAmount',
  },
  {
    label: '保证金退还天数',
    prop: 'depositDay',
    width: '140',
  },
];

const otcBailCol = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '数量',
    prop: 'deposit',
  },
  // {
  //   label: "状态",
  //   prop: "status",
  // },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'success',
        alias: 'edit',
      },
    ],
  },
];

const otcBailColNoBtn = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '数量',
    prop: 'deposit',
  },
];

const paymentMethodCol = [
  {
    label: '收款方式',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '银行卡', val: 1 }, { text: '支付宝', val: 2 }, { text: '微信', val: 3 }],
  },
  {
    label: '上限数量',
    prop: 'limitNum',
  },
  {
    label: '状态',
    prop: 'status',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon',
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

const paymentMethodColNoBtn = [
  {
    label: '收款方式',
    prop: 'payType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '银行卡', val: 1 }, { text: '支付宝', val: 2 }, { text: '微信', val: 3 }],
  },
  {
    label: '上限数量',
    prop: 'limitNum',
  },
];

const agentRevenueCol = [
  {
    label: 'UID',
    prop: 'uid',
    width: '110',
  },
  {
    label: '订单时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '订单号',
    prop: 'recordId',
  },
  {
    label: '订单类型',
    prop: 'advertType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '在线出售', val: 1 }, { text: '在线求购', val: 2 }, { text: '抢单在线出售', val: 3 }, { text: '抢单在线购买', val: 4 }, { text: '匹配在线出售', val: 5 }, { text: '匹配在线购买', val: 6 }],
  },
  {
    label: '订单数量（USDT）',
    prop: 'originAmount',
  },
  {
    label: '收益比例',
    prop: 'rate',
  },
  {
    label: '收益数量（USDT）',
    prop: 'amount',
  },
];

const agentRevenueConfig = [
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
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '订单类型',
    prop: 'advertType',
    value: '',
    list: [{ label: '在线出售', value: 1 }, { label: '在线求购', value: 2 }],
  },
];

const agentListConfig = [
  {
    type: 'text',
    label: '广告商UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '代理关系',
    prop: 'direction',
    value: '',
    list: [{ label: '查上级', value: 1 }, { label: '查下级', value: 2 }],
  },
];

const customerAccountCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通用户', val: 1 }, { text: '商户总账', val: 20 }],
  },
  {
    label: '用户名称',
    prop: 'merchantName',
  },
  {
    label: '法币交易状态',
    prop: 'userOtcStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '失效', val: 0 }, { text: '有效', val: 1 }],
  },
  // {
  //   label: '商户总支出手续费',
  //   prop: 'feeSum',
  // },
  {
    label: 'USDT资产',
    prop: 'amount',
  },
  {
    label: '可用USDT资产',
    prop: 'realAmount',
  },
  {
    label: '冻结USDT资产',
    prop: 'frozenAmount',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 220,
    btnGroup: [
      {
        label: '锁定',
        fn: 'lock',
        isPop: false,
        filter_key: 'userOtcStatus',
        filter_status: 1,
        type: 'danger',
        alias: 'lock',
      },
      {
        label: '激活',
        fn: 'activation',
        isPop: false,
        filter_key: 'userOtcStatus',
        filter_status: 0,
        type: 'success',
        alias: 'activation',
      },
      {
        label: '流水查询',
        fn: 'detail',
        isPop: false,
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const customerAccountColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通用户', val: 1 }, { text: '商户总账', val: 20 }],
  },
  {
    label: '用户名称',
    prop: 'merchantName',
  },
  {
    label: '法币交易状态',
    prop: 'userOtcStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '失效', val: 0 }, { text: '有效', val: 1 }],
  },
  // {
  //   label: '商户总支出手续费',
  //   prop: 'feeSum',
  // },
  {
    label: 'USDT资产',
    prop: 'amount',
  },
  {
    label: '可用USDT资产',
    prop: 'realAmount',
  },
  {
    label: '冻结USDT资产',
    prop: 'frozenAmount',
  },
];

const customerFlowCol = [
  {
    label: '时间',
    prop: 'createTime',
    width: 190,
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
    type: 'filter',
    width: 150,
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
      { text: '钱包划转至OTC', val: '10' },
      { text: 'OTC划转至钱包', val: '11' },
      { text: '钱包划转至币汇', val: '12' },
      { text: '币汇划转至钱包', val: '13' },
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
      { text: '活动支出', val: '100' },
      { text: '划转手续费', val: '80' },
      { text: '币币交易手续费', val: '81' },
      { text: '法币交易手续费', val: '82' },
      { text: '提币手续费', val: '83' },
      { text: '资产账户划转', val: '84' },
      { text: '收益账户销账', val: '85' },
      { text: '收入账号手动充值', val: '86' },
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
    label: '资金类型',
    prop: 'amountType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '可用余额', val: 1 }, { text: '冻结金额', val: 2 }],
  },
  {
    label: '订单号',
    prop: 'relateRecdId',
  },
];

const customerFlowConfig = [
  {
    type: 'date_rank',
    label: '创建时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '资金类型',
    prop: 'amountType',
    value: '',
    list: [{ label: '可用余额', value: 1 }, { label: '冻结金额', value: 2 }],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'relateRecdId',
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
      { label: '钱包划转至OTC', value: '10' },
      { label: 'OTC划转至钱包', value: '11' },
      { label: '钱包划转至币汇', value: '12' },
      { label: '币汇划转至钱包', value: '13' },
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
      { label: '活动支出', value: '100' },
      { label: '划转手续费', value: '80' },
      { label: '币币交易手续费', value: '81' },
      { label: '法币交易手续费', value: '82' },
      { label: '提币手续费', value: '83' },
      { label: '资产账户划转', value: '84' },
      { label: '收益账户销账', value: '85' },
      { label: '收入账号手动充值', value: '86' },
    ],
  },
];

const matchWeightCol = [
  {
    label: '用户名称',
    prop: 'merchantName',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通用户', val: 0 }, { text: '广告商', val: 1 }],
  },
  {
    label: '支付方式限制次数',
    prop: 'payCount',
  },
  {
    label: '匹配权重值',
    prop: 'weight',
  },
  {
    label: '会员等级',
    prop: 'gradeg',
  },
  {
    label: '信用额度',
    prop: 'creditLimit',
  },
  {
    label: '授权额度',
    prop: 'authorizationLimit',
  },
  {
    label: '每日总额度',
    prop: 'total',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 220,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
      {
        label: '解冻信用额度',
        fn: 'freeze',
        isPop: false,
        filter_key: 'isCanFreeze',
        filter_status: 1,
        type: 'success',
        alias: 'freeze',
      },
    ],
  },
];

const matchWeightColNoBtn = [
  {
    label: '用户名称',
    prop: 'merchantName',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通用户', val: 0 }, { text: '广告商', val: 1 }],
  },
  {
    label: '支付方式限制次数',
    prop: 'payCount',
  },
  {
    label: '匹配权重值',
    prop: 'weight',
  },
  {
    label: '会员等级',
    prop: 'gradeg',
  },
  {
    label: '信用额度',
    prop: 'creditLimit',
  },
  {
    label: '授权额度',
    prop: 'authorizationLimit',
  },
  {
    label: '每日总额度',
    prop: 'total',
  },
];

const matchWeightConfig = [
  {
    type: 'text',
    label: '用户名称',
    prop: 'merchantName',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
];

const rateManageCol = [
  {
    label: '货币',
    prop: 'coinName',
  },
  {
    label: '购买汇率',
    prop: 'currentBuyFee',
  },
  {
    label: '出售汇率',
    prop: 'currentSellFee',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 220,
    btnGroup: [
      {
        label: '购买汇差',
        fn: 'buy',
        type: 'primary',
        alias: 'buy',
      },
      {
        label: '出售汇差',
        fn: 'sell',
        type: 'primary',
        alias: 'sell',
      },
    ],
  },
];

const rateManageColNoBtn = [
  {
    label: '货币',
    prop: 'coinName',
  },
  {
    label: '购买汇率',
    prop: 'currentBuyFee',
  },
  {
    label: '出售汇率',
    prop: 'currentSellFee',
  },
];

const levelSettingCol = [
  {
    label: '等级ID',
    prop: 'memberLevel',
  },
  {
    label: '等级名称',
    prop: 'levelName',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  // {
  //   label: '额度要求',
  //   prop: 'currentSellFee',
  //   type:"range",
  //   arr:['minCreditLimit','maxCreditLimit']
  // },
  {
    label: '额度要求',
    prop: 'amount',
    width: 220,
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 220,
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

const levelSettingColNoBtn = [
  {
    label: '等级ID',
    prop: 'memberLevel',
  },
  {
    label: '等级名称',
    prop: 'levelName',
  },
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '额度要求',
    prop: 'amount',
    width: 220,
  },
];

const orderConfigCol = [
  {
    label: '商户名称',
    prop: 'userName',
  },
  {
    label: '商户编号',
    prop: 'uid',
  },
  {
    label: 'userId',
    prop: 'userId',
    type: 'myIsShow',
  },
  {
    label: '充值渠道授权',
    prop: 'despositChannel',
    width: 200,
  },
  {
    label: '充值承兑商授权',
    prop: 'despositAdvertiser',
    width: 200,
  },
  {
    label: '提现渠道授权',
    prop: 'withdrawChannel',
  },
  {
    label: '提现承兑商授权',
    prop: 'withdrawAdvertiser',
    width: 200,
  },
  {
    label: '充值单笔限额',
    arr: ['chargeMinimum', 'chargeMaximum'],
    type: 'textArr',
    join: '~',
  },
  {
    label: '提现单笔限额',
    arr: ['withdrawalMinimum', 'withdrawalMaximum'],
    type: 'textArr',
    join: '~',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '200',
    btnGroup: [
      {
        label: '配置',
        fn: 'configuration',
        type: 'primary',
        alias: 'configuration',
      },
    ],
  },
];

const orderConfigColNoBtn = [
  {
    label: '商户名称',
    prop: 'userName',
  },
  {
    label: '商户编号',
    prop: 'uid',
  },
  {
    label: 'userId',
    prop: 'userId',
    type: 'myIsShow',
  },
  {
    label: '充值渠道授权',
    prop: 'despositChannel',
    width: 200,
  },
  {
    label: '充值承兑商授权',
    prop: 'despositAdvertiser',
    width: 200,
  },
  {
    label: '提现渠道授权',
    prop: 'withdrawChannel',
  },
  {
    label: '提现承兑商授权',
    prop: 'withdrawAdvertiser',
    width: 200,
  },
  {
    label: '充值单笔限额',
    arr: ['chargeMinimum', 'chargeMaximum'],
    type: 'textArr',
    join: '~',
  },
  {
    label: '提现单笔限额',
    arr: ['withdrawalMinimum', 'withdrawalMaximum'],
    type: 'textArr',
    join: '~',
  },
];

// 商户接单配置
const orderConfigConfig = [
  {
    label: '商户名称',
    prop: 'userName',
    placeHolder: '请输入商户名称',
  },
  {
    label: '商户编号',
    prop: 'userId',
    placeHolder: '请输入商户编号',
  },
];

// 承兑商列表
const acceptanceCol = [
  {
    label: '序号',
    type: 'index',
    width: '120',
  },
  {
    label: '注册时间',
    prop: 'createTime',
    width: 150,
  },
  {
    label: '上级代理商编号',
    prop: 'upperUid',
  },
  {
    label: '代理商编号',
    prop: 'uid',
  },

  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱号',
    prop: 'email',
  },
  {
    label: '出售返佣费率',
    prop: 'rewardInRate',
  },

  {
    label: '邀请码',
    prop: 'inviteCode',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '250',
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
    ],
  },
];

const acceptanceColNoBtn = [
  {
    label: '注册时间',
    prop: 'createTime',
    width: 150,
  },
  {
    label: '上级代理商编号',
    prop: 'upperUid',
  },
  {
    label: '代理商编号',
    prop: 'uid',
  },

  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '邮箱号',
    prop: 'email',
  },
  {
    label: '转入返佣费率',
    prop: 'rewardInRate',
  },
  {
    label: '下级承兑商数',
    prop: 'subsetMerchantCount',
  },
  {
    label: '邀请码',
    prop: 'inviteCode',
  },
];

const acceptanceConfig = [
  // {
  //   label: '代理商名称',
  //   prop: 'name'
  // },
  {
    label: '邮箱号',
    prop: 'email',
  },
  {
    type: 'onlyNumber',
    label: '代理商编号',
    prop: 'uid',
  },
  {
    type: 'onlyNumber',
    label: '上级代理商编号',
    prop: 'upperUid',
  },
  {
    type: 'select',
    label: '代理商状态',
    prop: 'isTrade',
    value: '',
    list: [{ label: '已锁定', value: 0 }, { label: '正常', value: 1 }],
  },
];

// 承兑商关系
const agentListRelationConfig = [
  {
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入'
  },
  {
    type: 'select',
    label: '代理关系',
    prop: 'direction',
    value: '',
    list: [
      { label: '查上级', value: 1 },
      { label: '查下级', value: 2 }
    ]
  }
]

export {
  agentListRelationConfig,
  acceptanceCol,
  acceptanceColNoBtn,
  acceptanceConfig,
  orderConfigCol,
  orderConfigColNoBtn,
  orderConfigConfig,
  levelSettingCol,
  levelSettingColNoBtn,
  rateManageCol,
  rateManageColNoBtn,
  matchWeightCol,
  matchWeightColNoBtn,
  matchWeightConfig,
  customerFlowCol,
  customerFlowConfig,
  customerAccountCol,
  customerAccountColNoBtn,
  agentListConfig,
  agentRevenueCol,
  agentRevenueConfig,
  userCol,
  userColNoBtn,
  userConfig,
  inviteCol,
  invitationCol,
  invitationColNoBtn,
  invitationConfig,
  advertiseRecordCol,
  advertiseRecordColNoBtn,
  advertiseRecordConfig,
  infoCol,
  dealCol,
  appealCol,
  appealColNoBtn,
  appealConfig,
  appealDetailCol,
  otcOrderCol,
  otcOrderColNoBtn,
  otcOrderConfig,
  redeemCol,
  redeemColNoBtn,
  redeemConfig,
  cashOutCol,
  cashOutColNoBtn,
  cashOutConfig,
  transactionCol,
  transactionColNoBtn,
  transactionConfig,
  fundsFlowCol,
  fundsFlowColNoBtn,
  fundsFlowConfig,
  assetManageCol,
  assetManageColNoBtn,
  assetManageConfig,
  otcGlobalCol,
  otcGlobalColNoBtn,
  otcBailCol,
  otcBailColNoBtn,
  paymentMethodCol,
  paymentMethodColNoBtn,
  otcOrderCustomerCol,
  otcOrderCustomerColNoBtn,
  otcOrderCustomerConfig,
};
