import { transferQueryStatusCol,transferQueryStatusConfig, transactionCol,transactionConfig } from '@/utils/constants';



const searchCol = [
  {
    label: "appId",
    prop: "appId",
  },
  {
    label: "账号",
    prop: "phone",
    width: "150",
  },
  {
    label: "商户名称",
    prop: "name",
  },
  {
    label: "兑入手续费",
    prop: "feeRate",
  },
  {
    label: "商户余额",
    prop: "balance",
  },
  {
    label: "累计兑入(USDT)",
    prop: "inBalance",
  },
  {
    label: "累计兑出(USDT)",
    prop: "outBalance",
  },
  {
    label: "注册时间",
    prop: "createDate",
    type: "time",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "120",
    btnGroup: [
      {
        label: "查看/编辑",
        fn: "detail",
        type: "primary",
        alias: "detail",
      },
    ],
  },
];

const searchColNoBtn = [];

const searchConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "text",
    label: "appId",
    prop: "appId",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "账号/用户编号",
    prop: "name",
    value: "",
    placeHolder: "请输入",
  },
  // {
  //   type: "text",
  //   label: "商户名称",
  //   prop: "email",
  //   value: "",
  //   placeHolder: "请输入",
  // },
];

const transactionAdCol = [
  {
    label: "时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "交易类型",
    prop: "advType",
    type: "filter",
    show_type: "text",
    filters: [
      { val: "1", text: "在线出售" },
      { val: "2", text: "在线求购" },
      { val: "3", text: "抢单兑出" },
      { val: "4", text: "抢单兑入" },
      { val: "6", text: "派单兑出" },
      { val: "5", text: "派单兑入" },
    ],
  },
  {
    label: "appId",
    prop: "appId",
    width: "150",
  },
  {
    label: "商户名称",
    prop: "name",
    width: "200",
  },
  {
    label: "用户编码",
    prop: "userId",
  },
  {
    label: "币种",
    prop: "coinName",
  },
  {
    label: "价格",
    prop: "apiPrice",
  },
  {
    label: "数量",
    prop: "apiStock",
  },
  {
    label: "金额",
    prop: "apiAmount",
  },
  {
    label: "手续费",
    prop: "fee",
  },
  {
    label: "状态",
    prop: "matchResult",
    type: "filter",
    show_type: "filters",
    filters: "matchResultMap",
  },
  {
    label: "收银台IP",
    prop: "apiIp",
  },
  {
    label: "商户订单号",
    prop: "apiOrderId",
  },
];

const transactionAdColNoBtn = [];

const transactionAdConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "text",
    label: "appId",
    prop: "appId",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "商户名称",
    prop: "name",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "账号",
    prop: "phoneOrEmail",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "订单号",
    prop: "apiOrderId",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "类型",
    prop: "advType",
    value: "",
    list: [
      { value: "1", label: "在线出售" },
      { value: "2", label: "在线求购" },
      { vvalueal: "3", label: "抢单兑出" },
      { value: "4", label: "抢单兑入" },
      { value: "6", label: "派单兑出" },
      { value: "5", label: "派单兑入" },
    ],
  },
  {
    type: "select",
    label: "状态",
    prop: "matchResult",
    value: "",
    list: [
      { label: "待审核", value: 1 },
      { label: "匹配中", value: 1 },
      { label: "匹配成功", value: 2 },
      { label: "匹配失败", value: 3 },
      { label: "匹配中断", value: 4 },
      { label: "IP不匹配", value: 5 },
      { label: "审核失败", value: 6 },
      { label: "发起中", value: 9 },
      { label: "发起中断", value: 10 },
      { label: "封锁冻结", value: 11 },
    ],
  },
];

const chargeWithdrawalCol = [
  {
    label: "商户UID",
    prop: "phone",
  },
  {
    label: "商户名称",
    prop: "nickName",
  },
  {
    label: "币种",
    prop: "coin_name",
  },
  {
    label: "数量",
    prop: "amount",
  },
  {
    label: "手续费",
    prop: "fee",
  },
  {
    label: "到账数量",
    prop: "sys_remark",
  },
  {
    label: "状态",
    prop: "status",
    type: "filter",
    show_type: "text",
    filters: transferQueryStatusCol
  },
  {
    label: "类型",
    prop: "type",
    type: "filter",
    show_type: "text",
    filters: transactionCol,
  },
  {
    label: "FORM",
    prop: "from_addr",
    width: "150",
  },
  {
    label: "TO",
    prop: "to_addr",
    width: "200",
  },
  {
    label: "订单号",
    prop: "id",
  },
  {
    label: "TXID",
    prop: "tx_id",
  },
  {
    label: "时间",
    prop: "create_time",
    type: "time",
  },
];

const chargeWithdrawalColNoBtn = [];

const chargeWithdrawalConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "text",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "商户名称",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "TXID",
    prop: "txId",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "币种",
    prop: "userType",
    value: "",
    list: [],
  },
  {
    type: "text",
    label: "地址",
    prop: "addr",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "单号",
    prop: "orderId",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "类型",
    prop: "type",
    value: "",
    list: transactionConfig,
  },
  {
    type: "select",
    label: "状态",
    prop: "status",
    value: "",
    list: transferQueryStatusConfig,
  },
];

const cardRecordCol = [
  {
    label: "时间",
    prop: "time",
    type: "time",
  },
  {
    label: "交易类型",
    prop: "userType",
    type: "filter",
    show_type: "text",
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: "商户UID",
    prop: "uid",
  },
  {
    label: "商户名称",
    prop: "uid",
  },
  {
    label: "用户编码",
    prop: "uid",
  },
  {
    label: "币商UID",
    prop: "uid",
  },
  {
    label: "币种",
    prop: "uid",
  },
  {
    label: "价格",
    prop: "uid",
  },
  {
    label: "数量",
    prop: "uid",
  },
  {
    label: "金额",
    prop: "uid",
  },
  {
    label: "手续费",
    prop: "uid",
  },
  {
    label: "状态",
    prop: "userType",
    type: "filter",
    show_type: "text",
    filters: [],
    // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  },
  {
    label: "商户单号",
    prop: "uid",
    width: "150",
  },
  {
    label: "平台单号",
    prop: "email",
    width: "200",
  },
];

const cardRecordColNoBtn = [];

const cardRecordConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    type: "text",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "商户名称",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "用户编码",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "币种",
    prop: "userType",
    value: "",
    list: [],
  },
  {
    type: "text",
    label: "订单号",
    prop: "phone",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "交易类型",
    prop: "userType",
    value: "",
    list: [{ label: "普通用户", value: 1 }, { label: "系统用户", value: 100 }, { label: "机器人", value: 3 }],
  },
  {
    type: "select",
    label: "状态",
    prop: "userType",
    value: "",
    list: [{ label: "普通用户", value: 1 }, { label: "系统用户", value: 100 }, { label: "机器人", value: 3 }],
  },
];


const fundsFlowCol = [
  {
    label: "时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "appId",
    prop: "appId",
  },
  {
    label: "商户名称",
    prop: "name",
  },
  {
    label: "用户编码",
    prop: "uid",
  },
  {
    label: "币种",
    prop: "coin_name",
  },
  {
    label: "类型",
    prop: "type_name",
  },
  // {
  //   label: "类型",
  //   prop: "userType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [],
  //   // filters: [{ text: "普通用户", val: 1 }, { text: "系统用户", val: 100 }, { text: "机器人", val: 3 }],
  // },
  {
    label: "可用资产变化",
    prop: "balanceChangeAmount",
  },
  {
    label: "可用资产余额",
    prop: "balance",
  },
  {
    label: "冻结资产变化",
    prop: "frozenAmountChange",
  },
  {
    label: "冻结资产余额",
    prop: "frozenAmount",
  },
  {
    label: "订单号",
    prop: "relateRecdId",
  },
];

const fundsFlowColNoBtn = [];

const fundsFlowConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "text",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "商户名称",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "用户编码",
    prop: "nickName",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "币种",
    prop: "coinName",
    value: "",
    list: [],
  },
  {
    type: "text",
    label: "订单号",
    prop: "phone",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "类型",
    prop: "userType",
    value: "",
    list: [{ label: "普通用户", value: 1 }, { label: "系统用户", value: 100 }, { label: "机器人", value: 3 }],
  },
];


const groupAuthCol = [
  {
    label: "分组名",
    prop: "groupName",
  },
  {
    label: "商户列表",
    prop: "merchentNameList",
    width: 300,
  },
  {
    label: "币商列表",
    prop: "userNameList",
    width: 300,
  },
  {
    label: "创建时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "查看/编辑",
        fn: "edit",
        type: "primary",
        alias: "edit",
      },
      {
        label: "删除",
        fn: "del",
        type: "danger",
        alias: "del",
      },
    ],
  },
];

const groupAuthColNoBtn = [];

const groupAuthConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "text",
    label: "分组名称",
    prop: "groupName",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "账户",
    prop: "phone",
    value: "",
    placeHolder: "请输入",
  },

];

// appId: 25715
// appUserId: "1"
// foreverOrLimited: 2
// ip: "1.1.1.1"
const blacklistCol = [
  {
    label: "appId",
    prop: "appId",
  },
  {
    label: "用户编号",
    prop: "appUserId",
  },
  {
    label: "ip",
    prop: "ip",
  },
  {
    label: "交易类型",
    prop: "foreverOrLimited",
    type: "filter",
    show_type: "text",
    filters: [{ text: "24小时", val: 1 }, { text: "永久", val: 2 }],
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "120",
    btnGroup: [
      {
        label: "解封",
        fn: "unblock",
        type: "primary",
        alias:"unblock"
      },
    ],
  },
];

const blacklistColNoBtn = [];

const blacklistConfig = [
  {
    type: "text",
    label: "appId",
    prop: "appid",
    value: "",
  },
];

const whiteCol = [
  {
    label: "商户UID",
    prop: "uid",
  },
  {
    label: "商户名称",
    prop: "uid",
  },
  {
    label: "ip",
    prop: "uid",
  },
  {
    label: "添加时间",
    prop: "uid",
    type: "time",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "140",
    btnGroup: [
      {
        label: "编辑",
        fn: "edit",
        type: "primary",
      },
      {
        label: "删除",
        fn: "del",
        type: "danger",
      },
    ],
  },
];

const whiteColNoBtn = [];

const whiteConfig = [
  {
    type: "text",
    label: "商户UID",
    prop: "startTime",
    value: "",
  },
];

const merchantconfigs = [
  {
    label: "商户账号",
    prop: "phone",
  },
  {
    label: "商户用户编号",
    prop: "nickName",
    width: 400,
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "删除",
        fn: "del",
        type: "primary",
      },
    ],
  },
];

const dealerconfigs = [
  {
    label: "币商账户",
    prop: "account",
  },
  {
    label: "币商用户编号",
    prop: "nickName",
    width: 400,
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "删除",
        fn: "del",
        type: "primary",
      },
    ],
  },
];

export {
  searchCol,
  searchColNoBtn,
  searchConfig,
  transactionAdCol,
  transactionAdColNoBtn,
  transactionAdConfig,
  chargeWithdrawalCol,
  chargeWithdrawalColNoBtn,
  chargeWithdrawalConfig,
  cardRecordCol,
  cardRecordColNoBtn,
  cardRecordConfig,
  fundsFlowCol,
  fundsFlowColNoBtn,
  fundsFlowConfig,
  groupAuthCol,
  groupAuthColNoBtn,
  groupAuthConfig,
  blacklistCol,
  blacklistColNoBtn,
  blacklistConfig,
  whiteCol,
  whiteColNoBtn,
  whiteConfig,
  merchantconfigs,
  dealerconfigs,
};
