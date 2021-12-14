
const rateManageCol = [
  {
    label: "货币",
    prop: "account",
  },
  {
    label: "购买汇率",
    prop: "roleName",
  },
  {
    label: "出售汇率",
    prop: "content",
  },
  {
    label: "OMNI提币手续费",
    prop: "requestAddress",
  },
  {
    label: "ERC20提币手续费",
    prop: "userIp",
  },
  {
    label: "转账手续费",
    prop: "createTime",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 270,
    btnGroup: [     
      {
        label: "编辑",
        fn: "edit",
        type: "primary",
        alias: "edit"
      },
      {
        label: "购买汇差",
        fn: "buy",
        isPop: false,
        filter_key: "tradeStatus",
        filter_status: 0,
        type: "danger",
        alias:"buy"
      },
      {
        label: "出售汇差",
        fn: "sell",
        isPop: false,
        filter_key: "tradeStatus",
        filter_status: 3,
        type: "danger",
        alias:"sell"
      }
    ]
  }
];

const rateManageColNoBtn = [
 
];

// 成交记录
const authGroupCol = [
  {
    label: '分组名',
    prop: 'dealNo',
  },
  {
    label: '商户列表',
    prop: 'entrustNo',
    width: '300'
  },
  {
    label: '用户列表',
    prop: 'coinMarket',
    width: '300'
  },
  {
    label: '创建时间',
    prop: 'buyUid222',
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 270,
    btnGroup: [
      {
        label: "编辑",
        fn: "edit",
        type: "primary",
        alias: "edit"
      },
      {
        label: "删除",
        fn: "del",
        type: "danger",
        alias: "del"
      }
    ]
  }
]

const authGroupColNoBtn = [
 
];

const authGroupConfig = [
  {
    type: 'date_rank',
    label: '成交时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: "",
  },
  {
    type: 'text',
    label: '授权用户/商户',
    prop: 'buyUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '分组名称',
    prop: 'buyUid',
    value: '',
    placeHolder: '请输入',
  }
]

const revenueRecordsCol = [
  {
    label: '订单时间',
    prop: 'dealNo',
  },
  {
    label: '订单号',
    prop: 'entrustNo',
    width: '200'
  },
  {
    label: '操作类型',
    prop: 'coinMarket',
  },
  {
    label: '订单类型',
    prop: 'buyUid234234',
  },
  {
    label: '订单数量（USDT）',
    prop: 'buyUidaaa1',
  },
  {
    label: '收益比例',
    prop: 'buyUidaaa2',
  },
  {
    label: '收益数量（USDT）',
    prop: 'buyUidaaa3',
  },
  {
    label: '收益数量（TP）',
    prop: 'buyUidaaa4',
  },
  {
    label: '用户/商户名称',
    prop: 'buyUidaaa5',
  },
  {
    label: '用户/商户编号',
    prop: 'buyUidaaa6',
  },
  // {
  //   label: "客户端",
  //   prop: "deviceType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "ios", val: 1 }, { text: "安卓", val: 2 }, { text: "pc,h5", val: 3 }],
  // },
]

const revenueRecordsConfig = [
  {
    type: 'date_rank',
    label: '成交时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: "",
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'buyU2id1',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '代理商编号',
    prop: 'buyUid3',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '订单类型',
    prop: 'optTyp1e',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
]

const agentListConfig = [  
  {
    type: 'text',
    label: '用户UID',
    prop: 'buyUid3',
    value: '',
    placeHolder: '请输入',
  },  
  {
    type: 'select',
    label: '用户类型',
    prop: 'optType2',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '代理关系',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
]

const configPathCol = [
  {
    label: "路径名称",
    prop: "account3",
  },
  {
    label: "路径地址",
    prop: "roleName2",
  },
  {
    label: "时间",
    prop: "roleName1",
    type:"time"
  }
]

const configPathColNoBtn = [

]


const configPathConfig = [
  {
    type: 'text',
    label: '路径名称',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '路径地址',
    prop: 'accoun1t',
    value: ''
  }, 
]

const merchantListCol = [
  {
    label: "注册时间",
    prop: "account14",
  },
  {
    label: "代理商编号",
    prop: "roleName121",
  },
  {
    label: "代理商账号",
    prop: "roleName11",
  },
  {
    label: "商户名称",
    prop: "roleName9",
  },
  {
    label: "联系方式",
    prop: "roleName8",
  },
  {
    label: "USDT(ERC20)",
    prop: "roleName6",
  },  
  {
    label: "USDT(TRC20)",
    prop: "roleName7",
  },
  {
    label: "持币量",
    prop: "roleName5",
  },
  {
    label: "出售冻结",
    prop: "roleName4",
  },
  {
    label: "提币冻结",
    prop: "roleName3",
  },
  {
    label: "币种类型",
    prop: "roleName2",
  },
  {
    label: "结算类型",
    prop: "roleName2",
  },
  {
    label: "状态",
    prop: "roleName1",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 270,
    btnGroup: [     
      {
        label: "编辑",
        fn: "edit",
        type: "primary",
        alias: "edit"
      },
      {
        label: "锁定",
        fn: "lock",
        isPop: false,
        filter_key: "tradeStatus",
        filter_status: 0,
        type: "danger",
        alias:"lock"
      },
      {
        label: "激活",
        fn: "unlock",
        isPop: false,
        filter_key: "tradeStatus",
        filter_status: 3,
        type: "success",
        alias:"unlock"
      }
    ]
  }
]

const merchantListColNoBtn = [

]

const merchantListConfig = [
  {
    type: 'text',
    label: '关键字',
    prop: 'account',
    placeHolder:"名称/手机/邮箱/币商编号",
    width:'200',
    value: ''
  },
  {
    type: 'text',
    label: '所属代理',
    prop: 'accounsdfdt',
    value: ''
  },
  {
    type: 'select',
    label: '商户状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '结算类型',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  }
]

const merchantExamineCol = [
  {
    label: "商户UID",
    prop: "account146",
  },
  {
    label: "商户名称",
    prop: "roleName1231",
  },
  {
    label: "手机号",
    prop: "roleName117",
  },
  {
    label: "邮箱号",
    prop: "roleName256",
  },
  {
    label: "公司网址",
    prop: "roleName12",
  },
  {
    label: "提交时间",
    prop: "roleName1132",
  },
  {
    label: "审核时间",
    prop: "roleName23",
  },
  {
    label: "审核人",
    prop: "roleName11",
  },
  {
    label: "审核人IP",
    prop: "roleName2",
  },
  {
    label: "状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "原因",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 210,
    btnGroup: [     
      {
        label: "通过",
        fn: "pass",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "pass",
      },
      {
        label: "驳回",
        fn: "refuse",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "danger",
        alias: "refuse",
      }
    ]
  }
]

const merchantExamineColNoBtn = [

]

const merchantExamineConfig = [
  {
    type: 'date_rank',
    label: '提交时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: "",
  },
  {
    type: 'date_rank',
    label: '审核时间',
    prop: 'startTime12',
    prop2: 'endTime12',
    value: "",
  },
  {
    type: 'text',
    label: '商户UID',
    prop: 'account',
    value: ''
  },
  {
    type: 'select',
    label: '审核状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  }
]


const rechargeCustomCol = [
  {
    label: "订单号",
    prop: "account146",
  },
  {
    label: "充币数量",
    prop: "roleName1231",
  },
  {
    label: "手续费",
    prop: "roleName1132",
  },
  {
    label: "到账数量（USDT）",
    prop: "roleName23",
  },
  {
    label: "用户编号",
    prop: "roleName11",
  },
  {
    label: "用户UID",
    prop: "roleName2",
  },
  {
    label: "充值时间",
    prop: "roleName11",
  },
  {
    label: "订单状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "FORM地址",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "TO地址",
    prop: "roleName11",
    width:'200'
  },
  {
    label: "归拢地址",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "充值TXID",
    prop: "roleName11",
    width:'200'
  },
  {
    label: "归拢TXID",
    prop: "roleName11",
    width:'200'
  },
  {
    label: "归拢状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "归拢时间",
    prop: "roleName11",
  },
]

const rechargeCustomConfig = [
  {
    type: "date_rank",
    label: "添加时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: "date_rank",
    label: "归拢时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    width:'200',
    value: ''
  },
  {
    type: 'text',
    label: '商户编号',
    prop: 'account',
    value: ''
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '货币类型',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '归拢状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'text',
    label: '归拢TXID',
    prop: 'account',
    value: ''
  },
]

const withdrawCustomCol = [
  {
    label: "转账数量（USDT）",
    prop: "account146",
  },
  {
    label: "到账数量（USDT）",
    prop: "roleName1231",
  },
  {
    label: "手续费",
    prop: "roleName117",
  },
  {
    label: "币种",
    prop: "roleName256",
  },
  {
    label: "订单状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "用户编号",
    prop: "roleName1132",
  },
  {
    label: "用户名称",
    prop: "roleName23",
  },
  {
    label: "目标地址",
    prop: "roleName11",
  },
  {
    label: "钱包二维码",
    prop: "roleName2",
    type:"qrimg"
  },
  {
    label: "发起时间",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "审核备注",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "TXID",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "订单号",
    prop: "roleName2",
    width:'200'
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 210,
    btnGroup: [     
      {
        label: "审核",
        fn: "pass",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "pass",
      }
    ]
  }
]

const withdrawCustomColNoBtn = [

]

const withdrawCustomConfig = [
  {
    type: "date_rank",
    label: "添加时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '商户编号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '商户名称',
    prop: 'account',
    value: ''
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '用户类型',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  }
]

const transferCustomCol = [
  {
    label: "USDT数量",
    prop: "account146",
  },
  {
    label: "手续费",
    prop: "roleName1231",
  },
  {
    label: "状态",
    prop: "roleName117",
  },
  {
    label: "转账时间",
    prop: "roleName256",
  },
  {
    label: "用户编号",
    prop: "roleName11321232",
  },
  {
    label: "商户编号",
    prop: "roleName21231233",
  },
  {
    label: "FROM地址",
    prop: "roleName2sdf3",
  },
  {
    label: "TO地址",
    prop: "roleName11sfsdf",
  }
]

const transferCustomColNoBtn = [

]

const transferCustomConfig = [
  {
    type: "date_rank",
    label: "添加时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '商户编号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '用户名称',
    prop: 'account',
    value: ''
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  }
]

const payRecordListCol = [
  {
    label: "创建时间",
    prop: "account146",
  },
  {
    label: "商户编码",
    prop: "roleName1231",
  },
  {
    label: "商户用户UID",
    prop: "roleName117",
  },
  {
    label: "币种",
    prop: "roleName256",
  },
  {
    label: "订单数量",
    prop: "roleName11321232",
  },
  {
    label: "实际数量",
    prop: "roleName21231233",
  },
  {
    label: "手续费",
    prop: "roleName2sdf3",
  },
  {
    label: "商户到账数量",
    prop: "roleName11sfsdf",
  },
  {
    label: "收币地址",
    prop: "roleName21231233",
  },
  {
    label: "状态",
    prop: "roleName2sdf3",
  },
  {
    label: "TXID",
    prop: "roleName11sfsdf",
  },
  {
    label: "订单号",
    prop: "roleName2sdf3",
  },
  {
    label: "充币到账时间",
    prop: "roleName11sfsdf",
  },
  {
    label: "商户上传图片",
    prop: "roleName2sdf3",
    type:'img'
  },
  {
    label: "商户上传TXID",
    prop: "roleName11sfsdf",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 210,
    btnGroup: [
      {
        label: "补发回调",
        fn: "reissueFunc",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "reissueFunc",
      }
    ]
  }
]

const payRecordListColNoBtn = [

]

const payRecordListConfig = [
  {
    type: "date_rank",
    label: "创建时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'select',
    label: '状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'text',
    label: '充币地址',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: 'TXID',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '商户',
    placeHolder:"商户编码/名称",
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '用户',
    placeHolder:"用户UID",
    prop: 'account',
    value: ''
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'optType1',
    value: '',
    list: [],
  }
]

const payRecordAbnormalCol = [
  {
    label: "商户编码/名称",
    prop: "account146",
  },
  {
    label: "用户UID",
    prop: "roleName117",
  },
  {
    label: "币种",
    prop: "roleName256",
  },
  {
    label: "数量",
    prop: "roleName11321232",
  },
  {
    label: "手续费",
    prop: "roleName2sdf3",
  },
  {
    label: "商户到账数量",
    prop: "roleName11sfsdf",
  },
    {
    label: "状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "收币地址",
    prop: "roleName2sdf3",
  },
  {
    label: "TXID",
    prop: "roleName11sfsdf",
  },
  {
    label: "充值时间",
    prop: "roleName11sfsdf",
  },
  {
    label: "入账时间",
    prop: "roleName11sfsdf",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "入账",
        fn: "entry",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "entry",
      }
    ]
  }
]

const payRecordAbnormalColNoBtn = [

]

const payRecordAbnormalConfig = [
  {
    type: "date_rank",
    label: "创建时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'select',
    label: '状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'text',
    label: '充币地址',
    prop: 'account',
    value: ''
  },  
  {
    type: 'text',
    label: 'TXID',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '商户',
    placeHolder:"商户编码/名称",
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '用户',
    placeHolder:"用户UID",
    prop: 'account',
    value: ''
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'optType1',
    value: '',
    list: [],
  }
]

const sellListCol = [
  {
    label: "OTC订单号",
    prop: "account146",
  },
  {
    label: "商户订单号",
    prop: "account14856",
  },
  {
    label: "币种",
    prop: "conin",
  },
  {
    label: "订单金额（CNY）",
    prop: "account146",
  },
  {
    label: "USDT数量",
    prop: "roleName117",
  },
  {
    label: "手续费（USDT）",
    prop: "roleName256",
  },
  {
    label: "汇率",
    prop: "roleName11321232",
  },
  {
    label: "商户扣除数量（USDT）",
    prop: "roleName2sdf3",
  },
  {
    label: "状态",
    prop: "roleName11sfsdf",
  },
  {
    label: "付款凭证",
    prop: "roleName11sfsd213f",
  },
  {
    label: "收款人",
    prop: "role111df",
  },
  {
    label: "卡号",
    prop: "role22213f",
  },
  {
    label: "支行地址",
    prop: "rol333",
  },
  {
    label: "添加时间",
    prop: "role22213f",
  },
  {
    label: "确认付款时间",
    prop: "rol333",
  },
  {
    label: "确认收款时间",
    prop: "rol333",
  },
  {
    label: "币商编号",
    prop: "rol31233",
  },
  {
    label: "商户编号",
    prop: "rol3123133",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "判决",
        fn: "judgment",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "judgment",
      }
    ]
  }
]

const sellListColNoBtn = [

]

const sellListConfig = [
  {
    type: "date_rank",
    label: "创建时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '用户编号',
    prop: 'account222',
    value: ''
  }, 
  {
    type: 'text',
    label: '商户编号',
    prop: 'account22342',
    value: ''
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'account2222',
    value: ''
  },
  {
    type: 'text',
    label: '付款人',
    prop: 'account22233',
    value: ''
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  }
]

const buyListCol = [
  {
    label: "OTC订单号",
    prop: "account146",
  },
  {
    label: "商户订单号",
    prop: "account147",
  },
  {
    label: "币种",
    prop: "roleName117",
  },
  {
    label: "订单金额（CNY）",
    prop: "roleName256",
  },
  {
    label: "汇率",
    prop: "roleName11321232",
  },
  {
    label: "订单数量",
    prop: "roleName2sdf3",
  },
  {
    label: "手续费",
    prop: "roleName11sfsdf",
  },
  {
    label: "到账数量",
    prop: "roleName11sfsd213f",
  },
  {
    label: "付款凭证",
    prop: "role111df",
  },
  {
    label: "商户编号",
    prop: "rol333",
  },
  {
    label: "币商编号",
    prop: "rol323",
  },
  {
    label: "收款人",
    prop: "rol33332",
  },
  {
    label: "收款账号",
    prop: "rol33234332",
  },
    {
    label: "收款账号类型",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "商户用户IP",
    prop: "role22213f",
  },
  {
    label: "创建时间",
    prop: "rol3ssdf33",
  },
  {
    label: "确认时间",
    prop: "rol333",
  },
  {
    label: "订单状态",
    prop: "tradeStatussf",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: "回调结果",
    prop: "rol31233",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      // {
      //   label: "判决",
      //   fn: "judgment",
      //   isPop: false,
      //   filter_key: "auditStatus",
      //   filter_status: 0,
      //   type: "success",
      //   alias: "judgment",
      // },
      {
        label: "补发回调",
        fn: "reissueFunc",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "reissueFunc",
      },      
      {
        label: "激活",
        fn: "activation",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "activation",
      }
    ]
  }
]

const buyListColNoBtn = [

]

const buyListConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '币商编号',
    prop: 'account1',
    value: ''
  },  
  {
    type: 'text',
    label: '商户编号',
    prop: 'account2',
    value: ''
  },
  {
    type: 'text',
    label: 'OTC订单号',
    prop: 'account1332',
    value: ''
  },
  {
    type: 'select',
    label: '订单状态',
    prop: 'optType1',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select',
    label: '订单类型',
    prop: 'optType13',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'optType1',
    value: '',
    list: [],
  },
  {
    type: 'text',
    label: '收款人',
    prop: 'acc1332',
    value: ''
  },
  {
    type: 'select',
    label: '收款账户类型',
    prop: 'optType1312312',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
]

const agentCusListCol = [
  {
    label: "注册时间",
    prop: "account146",
  },
  {
    label: "所属代理商",
    prop: "account147",
  },
  {
    label: "商户编号",
    prop: "roleName117",
  },
  {
    label: "商户名称",
    prop: "roleName256",
  },
  {
    label: "手机",
    prop: "roleName11321232",
  },
  {
    label: "邮箱",
    prop: "roleName2sdf3",
  },
  {
    label: "充值手续费",
    prop: "roleName11sfsdf",
  },
  {
    label: "提现手续费",
    prop: "roleName11sfsd213f",
  },
  {
    label: "下级商户数",
    prop: "role111df",
  },
  {
    label: "币种类型",
    prop: "rol333",
  },
  {
    label: "持币量",
    prop: "rol323",
  },
  {
    label: "邀请码",
    prop: "rol33332",
  },
    {
    label: "状态",
    prop: "tradeStatus",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0 },
      { text: "成功", val: 1 },
    ],
  },
  {
    label: '是否允许开设代理',
    prop: 'isTp',
    type: 'switch',
    fn: 'trdraw',
    alias: 'trdraw',
    width: '150',
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      // {
      //   label: "判决",
      //   fn: "judgment",
      //   isPop: false,
      //   filter_key: "auditStatus",
      //   filter_status: 0,
      //   type: "success",
      //   alias: "judgment",
      // },
      {
        label: "锁定",
        fn: "lock",
        isPop: false,
        filter_key: "auditStatus2",
        filter_status: 0,
        type: "danger",
        alias: "reissueFunc",
      },      
      {
        label: "激活",
        fn: "unlock",
        isPop: false,
        filter_key: "auditStatus3",
        filter_status: 0,
        type: "success",
        alias: "unlock",
      },
      {
        label: "编辑",
        fn: "edit",
        isPop: false,
        type: "primary",
        alias: "edit",
      }, 
    ]
  }
]

const agentCusListColNoBtn = [

]

const agentCusListConfig = [
  {
    type: 'text',
    label: '关键字',
    placeHolder:'名称/手机/邮箱/币商编号',
    prop: 'acc1332',
    value: ''
  },
  {
    type: 'select',
    label: '代理商状态',
    prop: 'optType1312312',
    value: '',
    list: [{ label: 'aaa', value: 1 }, { label: 'bbb', value: 2 }],
  },
]

export {
  rateManageCol, rateManageColNoBtn,
  authGroupCol, authGroupColNoBtn, authGroupConfig,
  revenueRecordsCol, revenueRecordsConfig,
  agentListConfig,
  merchantListCol, merchantListColNoBtn, merchantListConfig,
  merchantExamineConfig, merchantExamineCol, merchantExamineColNoBtn,
  agentCusListCol, agentCusListColNoBtn, agentCusListConfig,
  rechargeCustomCol, rechargeCustomConfig,
  withdrawCustomCol,withdrawCustomColNoBtn, withdrawCustomConfig,
  transferCustomCol,transferCustomColNoBtn, transferCustomConfig,
  payRecordListCol, payRecordListColNoBtn, payRecordListConfig,
  payRecordAbnormalCol, payRecordAbnormalColNoBtn, payRecordAbnormalConfig,
  sellListCol,sellListColNoBtn, sellListConfig,
  buyListCol,buyListColNoBtn, buyListConfig
}
