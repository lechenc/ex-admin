/*
 * @Author: your name
 * @Date: 2020-04-10 10:23:24
 * @LastEditTime: 2020-12-30 12:18:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\user.js
 */

//  实名审核
const examineCol = [
  {
    label: "单号",
    prop: "id",
  },
  {
    label: "UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "姓名",
    prop: "realName",
  },
  // {
  //   label: "证件类型",
  //   prop: "certificateType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "身份证", val: 1 }, { text: "护照", val: 2 }],
  // },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  {
    label: "头像页",
    prop: "cardFrontUrl",
    type: "img",
  },
  {
    label: "国徽页",
    prop: "cardBackUrl",
    type: "img",
  },
  {
    label: "手持证件",
    prop: "antiMoneyUrl",
    type: "img",
  },
  {
    label: "录制视频",
    prop: "videoUrl",
    type: "video",
  },
  {
    label: "验证码",
    prop: "verificationCode",
  },
  {
    label: "提交时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type: "time",
  },
  {
    label: "审核人",
    prop: "auditUserName",
  },
  {
    label: "审核人IP",
    prop: "auditUserIp",
  },
  {
    label: "状态",
    prop: "auditStatus",
    width: "110",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0, type: "info" },
      { text: "审核通过", val: 1, type: "success" },
      { text: "审核不通过", val: 2, type: "warning" },
    ],
  },
  {
    label: "驳回原因",
    prop: "auditRemark",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "180",
    btnGroup: [
      {
        label: "审核通过",
        fn: "checkPass",
        type: "primary",
        alias: "pass",
        noIsClick:true
      },
      {
        label: "拒绝",
        fn: "checkOut",
        type: "danger",
        alias: "refuse",
        noIsClick:true
      },
    ],
    // btnGroup: [
    //   {
    //     label: "审核通过",
    //     fn: "checkPass",
    //     isPop: false,
    //     filter_key: "auditStatus",
    //     filter_status: 0,
    //     type: "danger",
    //     alias: "pass",
    //     // confirm_txt: "确认审核通过吗？"
    //   },
    //   {
    //     label: "拒绝",
    //     fn: "checkOut",
    //     isPop: false,
    //     filter_key: "auditStatus",
    //     filter_status: 0,
    //     type: "danger",
    //     alias: "refuse",
    //     // confirm_txt: "确认拒绝吗？"
    //   },
    // ],
  },
];

const examineColNoBtn = [
  {
    label: "单号",
    prop: "id",
  },
  {
    label: "UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "姓名",
    prop: "realName",
  },
  // {
  //   label: "证件类型",
  //   prop: "certificateType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "身份证", val: 1 }, { text: "护照", val: 2 }],
  // },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  {
    label: "头像页",
    prop: "cardFrontUrl",
    type: "img",
  },
  {
    label: "国徽页",
    prop: "cardBackUrl",
    type: "img",
  },
  {
    label: "手持证件",
    prop: "antiMoneyUrl",
    type: "img",
  },
  {
    label: "录制视频",
    prop: "videoUrl",
    prop2: 'videoUrl',
    type: "video",
  },
  {
    label: "验证码",
    prop: "verificationCode",
  },
  {
    label: "提交时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type: "time",
  },
  {
    label: "审核人",
    prop: "auditUserName",
  },
  {
    label: "审核人IP",
    prop: "auditUserIp",
  },
  {
    label: "状态",
    prop: "auditStatus",
    width: "110",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0, type: "info" },
      { text: "审核通过", val: 1, type: "success" },
      { text: "审核不通过", val: 2, type: "warning" },
    ],
  },
  {
    label: "驳回原因",
    prop: "auditRemark",
  },
];

//  实名审核 搜索
const examineConfig = [
  {
    type: "date_rank",
    label: "提交时间",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    type: "number",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
    subType:"uid"
  },
  {
    type: "number",
    label: "手机",
    prop: "phone",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "邮箱",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "姓名",
    prop: "realName",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "number",
    label: "证件号码",
    prop: "cardNo",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "邀请码",
    prop: "inviteCode",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "审核状态",
    prop: "auditStatus",
    value: "",
    list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }],
  },
  {
    type: "select",
    label: "登录状态",
    prop: "userLoginStatus",
    value: "",
    list: [{ label: "禁止", value: 0 }, { label: "允许", value: 1 }],
  },
];

//  广告商审核
const advertiseCol = [
  {
    label: "UID",
    prop: "uid",
  },
  {
    label: "姓名",
    prop: "realName",
  },
 

  {
    label: '保证金',
    arr:['amount','coinName'],
    type:'textArr',
    join:'',
  },

  


  {
    label: "申请类型",
    prop: "auditType",
    type: "filter",
    show_type: "text",
    width:'140',
    filters: [{ text: "取消广告商", val: 1 }, { text: "成为广告商", val: 2 }],
  },  
  {
    label: "提交时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核人",
    prop: "auditUserName",
  },
  {
    label: "审核人IP",
    prop: "auditIp",
  },  
  {
    label: "状态",
    prop: "auditStatus",
    width: "110",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0, type: "info" },
      { text: "审核通过", val: 1, type: "success" },
      { text: "审核不通过", val: 2, type: "warning" },
    ],
  },
  {
    label: "驳回原因",
    prop: "auditComment",
    width:'160'
  },
  // {
  //   label: "是否实名",
  //   prop: "isRealName",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "未实名", val: 0 }, { text: "已实名", val: 1 }],
  // },
  // {
  //   label: "审核人",
  //   prop: "antiMoneyUrl",
  // },
  // {
  //   label: "审核人IP",
  //   prop: "createTime",
  //   type: "time",
  // },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "180",
    btnGroup: [
      {
        label: "审核通过",
        fn: "pass",
        type: "success",
        alias: "pass",
        noIsClick:true
      },
      {
        label: "拒绝",
        fn: "refuse",
        type: "danger",
        alias: "refuse",
        noIsClick:true
      },
    ],
  },
];

const advertiseColNoBtn = [
  {
    label: "UID",
    prop: "uid",
  },
  {
    label: "姓名",
    prop: "realName",
  },
  {
    label: "保证金",
    prop: "amount",
    type:'textArrKeyValue',
    arr:['amount','coinName']
  },
  {
    label: "申请类型",
    prop: "auditType",
    type: "filter",
    show_type: "text",
    width:'140',
    filters: [{ text: "取消广告商", val: 1 }, { text: "成为广告商", val: 2 }],
  },  
  {
    label: "提交时间",
    prop: "createTime",
    type: "time",
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核人",
    prop: "auditUserName",
  },
  {
    label: "审核人IP",
    prop: "auditIp",
  },  
  {
    label: "状态",
    prop: "auditStatus",
    width: "110",
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待审核", val: 0, type: "info" },
      { text: "审核通过", val: 1, type: "success" },
      { text: "审核不通过", val: 2, type: "warning" },
    ],
  },
  {
    label: "驳回原因",
    prop: "auditComment",
    width:'160'
  }
];

// 广告商审核 搜索
const advertiseConfig = [
  {
    type: "date_rank",
    label: "提交时间",
    prop: "createStartTime",
    prop2: "createEndTime",
    value: "",
  },
  {
    type: "date_rank",
    label: "审核时间",
    prop: "auditStartTime",
    prop2: "auditEndTime",
    value: "",
  },
  {
    type: "text",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
    subType:"uid"
  },
  {
    type: "select",
    label: "申请类型",
    prop: "auditType",
    value: "",
    list: [{ label: "取消广告商", value: 1 }, { label: "成为广告商", value: 2 }],
  },
  {
    type: "select",
    label: "审核状态",
    prop: "auditStatus",
    value: "",
    list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }]
  },  
  {
    type: "text",
    label: "姓名",
    prop: "realName",
    value: "",
    placeHolder: "请输入",
  },
];

//  支付方式审核
const payCol = [
  {
    label: "账号UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "证件姓名",
    prop: "realName",
  },
  {
    label: "收款姓名",
    prop: "userName",
  },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  // {
  //   label: "支付方式类型",
  //   prop: "payName",
  // },
  {
    label: "支付方式类型",
    prop: "payType",
    type: "filter",
    show_type: "text",
    filters: [{ text: "银行卡", val: 1 }, { text: "支付宝", val: 2 }, { text: "微信", val: 3 }],
  },
  {
    label: "账号",
    prop: "num",
  },
  {
    label: "二维码",
    prop: "qrcode",
    type:"img",
    // fn:'showqr'
  },
  {
    label: "银行名称",
    prop: "bankName",
  },
  {
    label: "支行名称",
    prop: "bankBranch",
  },
  // {
  //   label: "证件号码",
  //   prop: "certificateName",
  // },
  // {
  //   label: "支付宝",
  //   prop: "alipayList",
  //   type:'labelArr',
  //   typeDetail:'numlist',
  //   label1:"num"
  // },
  {
    label: "提交时间",
    prop: "createTime",
    type:"time"
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核状态",
    prop: "auditStatus",
    type: "filter",
    show_type: "text",
    width:130,
    filters: [{ text: "待审核", val: 0 }, { text: "审核成功", val: 1 }, { text: "审核失败", val: 2 }],
  },
  {
    label: "驳回原因",
    prop: "auditComment",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "180",
    btnGroup: [
      {
        label: "审核",
        fn: "pass",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
        type: "success",
        alias: "pass",
      },
      {
        label: "详情",
        fn: "detail",
        type: "primary",
        alias: "detail",
      }
    ]
  }
];

const payColNoBtn = [
  {
    label: "账号UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "证件姓名",
    prop: "realName",
  },
  {
    label: "收款姓名",
    prop: "userName",
  },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  // {
  //   label: "支付方式类型",
  //   prop: "payName",
  // },
  {
    label: "支付方式类型",
    prop: "payType",
    type: "filter",
    show_type: "text",
    filters: [{ text: "银行卡", val: 1 }, { text: "支付宝", val: 2 }, { text: "微信", val: 3 }],
  },
  {
    label: "账号",
    prop: "num",
  },
  {
    label: "二维码",
    prop: "qrcode",
    type:"img",
    // fn:'showqr'
  },
  {
    label: "银行名称",
    prop: "bankName",
  },
  {
    label: "支行名称",
    prop: "bankBranch",
  },
  {
    label: "提交时间",
    prop: "createTime",
    type:"time"
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核状态",
    prop: "auditStatus",
    type: "filter",
    show_type: "text",
    width:130,
    filters: [{ text: "待审核", val: 0 }, { text: "审核成功", val: 1 }, { text: "审核失败", val: 2 }],
  },
  {
    label: "驳回原因",
    prop: "auditComment",
  },
];

// 支付方式
const payColConfig = [
  // {
  //   type: "text",
  //   label: "输入账户",
  //   prop: "phoneOrEmail",
  //   value: "",
  //   placeHolder: "请输入",
  // },
  {
    type: "text",
    label: "UID",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "姓名",
    prop: "realName",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "审核状态",
    prop: "auditStatus",
    value: "",
    list: [{ label: "待审核", value: 0 }, { label: "审核成功", value: 1 }, { label: "审核失败", value: 2 }],
  }
];

//  支付方式-审核详情页面-审核
const paySubPageCol = [
  {
    label: "账号UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "姓名",
    prop: "realName",
  },
  {
    label: "收款姓名",
    prop: "userName",
  },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  // {
  //   label: "支付方式类型",
  //   prop: "payName",
  // },
  {
    label: "支付方式类型",
    prop: "payType",
    type: "filter",
    show_type: "text",
    filters: [{ text: "银行卡", val: 1 }, { text: "支付宝", val: 2 }, { text: "微信", val: 3 }],
  },
  {
    label: "账号",
    prop: "num",
  },
  {
    label: "二维码",
    prop: "qrcode",
    type:"img",
    // fn:'showqr'
  },
  {
    label: "银行名称",
    prop: "bankName",
  },
  {
    label: "支行名称",
    prop: "bankBranch",
  },
  {
    label: "提交时间",
    prop: "createTime",
    type:"time"
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核状态",
    prop: "auditStatus",
    type: "filter",
    show_type: "text",
    width:130,
    filters: [{ text: "待审核", val: 0 }, { text: "审核成功", val: 1 }, { text: "审核失败", val: 2 }],
  },
  // {
  //   label: "姓名",
  //   prop: "userName",
  // },
  // {
  //   label: "账户/银行卡信息",
  //   prop: "num",
  // },
  // {
  //   label: "银行名称",
  //   prop: "bankName",
  // },
  // {
  //   label: "支行信息",
  //   prop: "bankBranch",
  // },
  // {
  //   label: "收款码",
  //   prop: "qrcode",
  //   type: "img",
  // },
  // {
  //   label: "QrCode",
  //   prop: "analysisQrCode",
  //   type: "qrimg",
  //   fn: "showqr",
  // },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: 290,
    btnGroup: [
      {
        label: "通过",
        fn: "pass",
        type: "success",
        alias: "pass",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
      },
      {
        label: "拒绝",
        fn: "refuse",
        type: "danger",
        alias: "refuse",
        isPop: false,
        filter_key: "auditStatus",
        filter_status: 0,
      },
      // {
      //   label: "保存userid",
      //   fn: "preReject",
      //   isPop: false,
      //   filter_key: "tradeStatus",
      //   filter_status: 0,
      //   type: "danger",
      //   // confirm_txt: "确认驳回吗？"
      // },
      // {
      //   label: "修改userid",
      //   fn: "nextReject",
      //   isPop: false,
      //   filter_key: "tradeStatus",
      //   filter_status: 3,
      //   type: "danger",
      // },
    ]
  }
];

// 支付方式-审核详情页面-查看详情
const paySubPageColNoBtn = [
  {
    label: "账号UID",
    prop: "uid",
  },
  {
    label: "国籍",
    prop: "nationalityName",
  },
  {
    label: "姓名",
    prop: "realName",
  },
  {
    label: "收款姓名",
    prop: "userName",
  },
  {
    label: "证件类型",
    prop: "certificateName",
  },
  {
    label: "证件号码",
    prop: "cardNo",
  },
  // {
  //   label: "支付方式类型",
  //   prop: "payName",
  // },
  {
    label: "支付方式类型",
    prop: "payType",
    type: "filter",
    show_type: "text",
    filters: [{ text: "银行卡", val: 1 }, { text: "支付宝", val: 2 }, { text: "微信", val: 3 }],
  },
  {
    label: "账号",
    prop: "num",
  },
  {
    label: "二维码",
    prop: "qrcode",
    type:"img",
    // fn:'showqr'
  },
  {
    label: "银行名称",
    prop: "bankName",
  },
  {
    label: "支行名称",
    prop: "bankBranch",
  },
  {
    label: "提交时间",
    prop: "createTime",
    type:"time"
  },
  {
    label: "审核时间",
    prop: "auditTime",
    type:"time"
  },
  {
    label: "审核状态",
    prop: "auditStatus",
    type: "filter",
    show_type: "text",
    width:130,
    filters: [{ text: "待审核", val: 0 }, { text: "审核成功", val: 1 }, { text: "审核失败", val: 2 }],
  },
  {
    label: "备注",
    prop: "auditComment",
    width:200,
  },
  // {
  //   label: "支付方式",
  //   prop: "payType",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "银行卡", val: 1 }, { text: "支付宝", val: 2 }, { text: "微信", val: 3 }, { text: "宝转卡", val: 4 }],
  // },
  // {
  //   label: "姓名",
  //   prop: "userName",
  // },
  // {
  //   label: "账户/银行卡信息",
  //   prop: "num",
  // },
  // {
  //   label: "银行名称",
  //   prop: "bankName",
  // },
  // {
  //   label: "支行信息",
  //   prop: "bankBranch",
  // },
  // {
  //   label: "收款码",
  //   prop: "qrcode",
  //   type: "img",
  // },
  // // {
  // //   label: "QrCode",
  // //   prop: "analysisQrCode",
  // //   type: "qrimg",
  // //   fn: "showqr",
  // // },
  // {
  //   label: "状态",
  //   prop: "isShow",
  //   type: "filter",
  //   show_type: "text",
  //   filters: [{ text: "未使用", val: 0 }, { text: "使用中", val: 1 }],
  // },
  // {
  //   label: "审核人",
  //   prop: "auditName",
  // },
  // {
  //   label: "操作",
  //   prop: "action",
  //   type: "action",
  //   width: 290,
  //   btnGroup: [
  //     {
  //       label: "停止使用",
  //       fn: "close",
  //       isPop: false,
  //       filter_key: "isShow",
  //       filter_status: 1,
  //       type: "danger",
  //     },
  //     {
  //       label: "开启使用",
  //       fn: "open",
  //       isPop: false,
  //       filter_key: "isReview",
  //       filter_status: 2,
  //       type: "success",
  //     },
  //   ],
  // },
];

//  兑出订单审核
const redeemOrderCol = [
  {
    label: "订单号",
    prop: "id",
  },
  {
    label: "币商编号",
    prop: "uid",
  },
  {
    label: "商户名称",
    prop: "nationalityName",
  },
  {
    label: "订单金额（CNY）",
    prop: "realName",
  },
  {
    label: "手续费（USDT）",
    prop: "certificateType",
  },
  {
    label: "价格/数量",
    prop: "cardNo",
  },
  {
    label: "交易类型",
    prop: "cardFrontUrl",
    type: "img",
  },
  {
    label: "订单状态",
    prop: "cardBackUrl",
    type: "filter",
    show_type: "text",
    filters: [{ text: "待审核", val: 0, type: "info" }, { text: "审核通过", val: 1, type: "success" }],
  },
  {
    label: "收款人",
    prop: "antiMoneyUrl",
    type: "img",
  },
  {
    label: "收款账号",
    prop: "createTime",
    type: "time",
  },
  {
    label: "收款账户信息",
    prop: "updateTime",
    type: "time",
  },
  {
    label: "收款账户类型",
    prop: "auditUserName",
  },
  {
    label: "添加时间",
    prop: "auditUserIp",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "180",
    btnGroup: [
      {
        label: "审核",
        fn: "checkPass",
        type: "primary",
      },
    ],
  },
];

const redeemOrderNoBtn = [];

//  兑出订单
const redeemOrderConfig = [
  {
    type: "date_rank",
    label: "添加时间",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    type: "text",
    label: "币商码",
    prop: "uid",
    value: "",
    placeHolder: "请输入",
    subType:"uid"
  },
  {
    type: "text",
    label: "商户码",
    prop: "phone",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "收款人",
    prop: "email",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "订单号",
    prop: "realName",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "text",
    label: "收款人",
    prop: "cardNo",
    value: "",
    placeHolder: "请输入",
  },
  {
    type: "select",
    label: "状态",
    prop: "auditStatus",
    value: "",
    list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  },
  {
    type: "select",
    label: "收款账户",
    prop: "userLoginStatus",
    value: "",
    list: [{ label: "禁止", value: 0 }, { label: "允许", value: 1 }],
  },
];

//  商户
const merchantCol = [
  {
    label: "商户名称",
    prop: "name",
  },
  {
    label: "手机号码",
    prop: "phone",
  },
  {
    label: "邮箱",
    prop: "email",
  },
  // {
  //   label: "公司网址",
  //   prop: "realName",
  // },
  {
    label: "邀请人",
    prop: "certificateType",
  },
  {
    label: "状态",
    prop: "status",
    type: "filter",
    show_type: "text",
    filters: [{ text: "待审核", val: 0 }, { text: "审核通过", val: 1 }, { text: "审核不通过", val: 2 }, { text: "未提交审核", val: 3 }],
  },
  {
    label: "注册时间",
    prop: "createTime",
  },
  // {
  //   label: "审核意见",
  //   prop: "certificateType",
  // },
  {
    label: "操作",
    prop: "action",
    type: "action",
    width: "180",
    btnGroup: [
      {
        label: "审核",
        fn: "pass",
        type: "primary",
        isPop: false,
        filter_key: "status",
        filter_status: 0,
      },
      {
        label: "重发邮件",
        fn: "email",
        type: "primary",
        isPop: false,
        filter_key: "status",
        filter_status: 100,
      },
    ],
  },
];

const merchantColNoBtn = [];

// 商户审核
const merchantColConfig = [
  {
    type: "date_rank",
    label: "添加时间",
    prop: "startDate",
    prop2: "endDate",
    value: "",
  },
  {
    type: "select",
    label: "状态",
    prop: "status",
    value: "",
    list: [{ label: "待审核", value: 0 }, { label: "审核通过", value: 1 }, { label: "审核不通过", value: 2 }, { label: "未提交审核", value: 3 }],
  },
];

export {
  examineCol,
  examineColNoBtn,
  examineConfig,
  advertiseConfig,
  advertiseCol,
  advertiseColNoBtn,
  redeemOrderCol,
  redeemOrderNoBtn,
  redeemOrderConfig,
  payCol,
  payColNoBtn,
  payColConfig,
  paySubPageCol,
  paySubPageColNoBtn,
  merchantCol,
  merchantColNoBtn,
  merchantColConfig,
};
