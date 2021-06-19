/*
 * @Author: your name
 * @Date: 2020-12-02 18:21:13
 * @LastEditTime: 2020-12-25 18:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\config\column\contractAgent.js
 */

const agentsListsCol = [
  {
    label: '代理商UID',
    prop: 'uid',
  },
  {
    label: '上级代理UID',
    prop: 'upperUid',
  },
  {
    label: '类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '商务', val: 31 }, { text: '代理', val: 32 }],
  },
  {
    label: '级别',
    prop: 'userGrade',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },

  {
    label: '登录名',
    prop: 'username',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },

  {
    label: '手续费返佣比例',
    prop: 'commissionPercent',
  },

  {
    label: '团队长返佣比例',
    prop: 'packPercent',
  },
  {
    label: '结算后加入保证金比例',
    prop: 'bondPercent',
  },
  {
    label: '是否本人手续费返佣',
    prop: 'selfCommission',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }],
  },
  {
    label: '手续费返佣结算时间',
    prop: 'feeDelayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'feeDelayDay',
  },
  {
    label: '团队长返佣结算时间',
    prop: 'delayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'delayDay',
  },

  {
    label: '可释放保证金',
    prop: 'amount',
  },
  {
    label: '设置保证金额度',
    prop: 'bondLimit',
  },
  {
    label: '代理总盈利阀值',
    prop: 'profitMargin',
    type: 'noneShowLine',
  },
  {
    label: '用户可盈利阈值',
    prop: 'userProfitMargin',
    type: 'noneShowLine',
  },

  {
    label: '返佣开关',
    prop: 'commissionSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '关闭', val: 0 }, { text: '开启', val: 1 }],
  },
  {
    label: '登录开关',
    prop: 'loginSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '关闭', val: 0 }, { text: '开启', val: 1 }],
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 260,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        filter_type: 'array',
        filter_key: 'userGrade',
        filter_status: ['1'],
        type: 'primary',
        alias: 'edit1',
      },
      {
        label: '编辑',
        fn: 'edit',
        filter_type: 'arrayExcept',
        filter_key: 'userGrade',
        filter_status: ['1'],
        type: 'primary',
        alias: 'edit2',
      },

      {
        label: '释放保证金',
        fn: 'releaseMoney',
        type: 'primary',
        alias: 'releaseMoney',
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

const agentsListsColNoBtn = [
  {
    label: '代理商UID',
    prop: 'uid',
  },
  {
    label: '上级代理UID',
    prop: 'upperUid',
  },
  {
    label: '类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '商务', val: 31 }, { text: '代理', val: 32 }],
  },
  {
    label: '级别',
    prop: 'userGrade',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },

  {
    label: '登录名',
    prop: 'username',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  
  {
    label: '手续费返佣比例',
    prop: 'commissionPercent',
  },

  {
    label: '团队长返佣比例',
    prop: 'packPercent',
  },
  {
    label: '结算后加入保证金比例',
    prop: 'bondPercent',
  },
  {
    label: '是否本人手续费返佣',
    prop: 'selfCommission',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '否', val: 0 }, { text: '是', val: 1 }],
  },
  {
    label: '手续费返佣结算时间',
    prop: 'feeDelayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'feeDelayDay',
  },
  {
    label: '团队长返佣结算时间',
    prop: 'delayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'delayDay',
  },

  {
    label: '可释放保证金',
    prop: 'amount',
  },
  {
    label: '设置保证金额度',
    prop: 'bondLimit',
  },
  {
    label: '代理总盈利阀值',
    prop: 'profitMargin',
    type: 'noneShowLine',
  },
  {
    label: '用户可盈利阈值',
    prop: 'userProfitMargin',
    type: 'noneShowLine',
  },

  {
    label: '返佣开关',
    prop: 'commissionSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '关闭', val: 0 }, { text: '开启', val: 1 }],
  },
  {
    label: '登录开关',
    prop: 'loginSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '关闭', val: 0 }, { text: '开启', val: 1 }],
  },
];

const agentsListsConfig = [
  // {
  //   type: 'text',
  //   label: '商务UID',
  //   prop: 'businessUid',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'text',
    label: '代理商UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '上级代理商UID',
    prop: 'upperUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'usertype',
    value: '',
    list: [{ label: '商务', value: 31 }, { label: '代理', value: 32 }],
  },
  {
    type: 'select',
    label: '级别',
    prop: 'userGrade',
    value: '',
    //  1 一级代理商， 2 二级代理商
    list: [{ label: '一级', value: 1 }, { label: '二级', value: 2 }, { label: '三级', value: 3 }],
  },
  {
    type: 'select',
    label: '返佣开关',
    prop: 'commissionSwitch',
    value: '',
    list: [{ label: '关闭', value: 0 }, { label: '开启', value: 1 }],
  },
  {
    type: 'select',
    label: '限制登录开关',
    prop: 'loginSwitch',
    value: '',
    list: [{ label: '关闭', value: 0 }, { label: '开启', value: 1 }],
  },
  // {
  //   type: 'select',
  //   label: '限制提币开关',
  //   prop: 'withdrawSwitch',
  //   value: '',
  //   list: [{ label: '关闭', value: 0 }, { label: '开启', value: 1 }],
  // },
  {
    type: 'select',
    label: '是否本人手续费返佣',
    prop: 'selfCommission',
    value: '',
    list: [{ label: '否', value: 0 }, { label: '是', value: 1 }],
  },
];

const agentsListsConfigCol = [
  {
    label: '代理商级别',
    prop: 'level',
  },
  {
    label: '代理模式',
    prop: 'agentMode',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手续费模式', val: 1 }, { text: '团队长模式', val: 2 }],
  },
  {
    label: '等级模式',
    prop: 'levelMode',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '固定模式', val: 1 }, { text: '升级模式', val: 2 }],
  },
  {
    label: '手续费返佣比例',
    prop: 'feeCommission',
  },
  {
    label: '返佣结算时间',
    prop: 'delayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }],
    prop2: 'delayDay',
  },
  {
    label: '添加时间',
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
    width: 160,
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
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const agentsListsConfigConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'select',
    label: '等级模式',
    prop: 'levelMode',
    value: '',
    list: [{ label: '固定模式', value: 1 }, { label: '升级模式', value: 2 }],
  },
  {
    type: 'select',
    label: '代理模式',
    prop: 'agentMode',
    value: '',
    list: [{ label: '手续费模式', value: 1 }, { label: '团队长模式', value: 2 }],
  },
];

const agentsListsDetailAssets = [
  {
    label: '币种',
    prop: 'id',
  },
  {
    label: '可用',
    prop: 'coinMarket',
  },
  {
    label: '待结算',
    prop: 'maximumLeverage',
  },
  {
    label: '历史总返佣',
    prop: 'maximumLeverage',
  },
];

const agentsListsDetailTeam = [
  {
    label: 'UID',
    prop: 'id',
  },
  {
    label: '手机',
    prop: 'id',
  },
  {
    label: '邮箱',
    prop: 'coinMarket',
  },
  {
    label: '登录IP',
    prop: 'maximumLeverage',
  },
  {
    label: '注册IP',
    prop: 'maximumLeverage',
  },
  {
    label: '注册时间',
    prop: 'maximumLeverage',
  },
];

const businessListsCol = [
  {
    label: '商务UID',
    prop: 'uid',
  },
  {
    label: '商务级别',
    prop: 'level',
  },
  {
    label: '上级商务UID',
    prop: 'upperUid',
  },
  {
    label: '登录名',
    prop: 'username',
  },
  {
    label: '是否本人手续费返佣',
    prop: 'selfCommission',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: 1 }, { text: '否', val: 1 }],
  },

  {
    label: '手续费比例',
    prop: 'commissionPercent',
  },
  {
    label: '手续费返佣结算时间',
    prop: 'feeDelayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'feeDelayDay',
  },

  {
    label: '更新时间',
    prop: 'updateTime',
  },

  {
    label: '登录开关',
    prop: 'loginSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '开启', val: 1 }, { text: '关闭', val: 0 }],
  },
  {
    label: '返佣开关',
    prop: 'commissionSwitch',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '开启', val: 1 }, { text: '关闭', val: 0 }],
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
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const businessListsColNoBtn = [
  {
    label: '商务UID',
    prop: 'uid',
  },
  {
    label: '商务级别',
    prop: 'level',
  },
  {
    label: '上级商务UID',
    prop: 'upperUid',
  },
  {
    label: '登录名',
    prop: 'username',
  },
  {
    label: '是否本人手续费返佣',
    prop: 'selfCommission',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: 1 }, { text: '否', val: 1 }],
  },

  {
    label: '手续费比例',
    prop: 'commissionPercent',
  },
  {
    label: '手续费返佣结算时间',
    prop: 'feeDelayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }, { text: '日', val: 3 }],
    prop2: 'feeDelayDay',
  },

  {
    label: '更新时间',
    prop: 'updateTime',
  },
];

const businessListsConfig = [
  {
    type: 'onlyNumber',
    label: '商务UID',
    prop: 'businessUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '商务UID',
    prop: 'upperUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '商务级别',
    prop: 'commissionLevel',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '是否本人手续费',
    prop: 'selfCommission',
    value: '',
    list: [{ label: '是', value: 1 }, { label: '否', value: 0 }],
  },
  {
    type: 'select',
    label: '返佣模式',
    prop: 'commissionSwitch',
    value: '',
    list: [{ label: 'ALPEX模式', value: 1 }, { label: 'CPT模式', value: 0 }],
  },
  {
    type: 'select',
    label: '登录开关',
    prop: 'loginSwitch',
    value: '',
    list: [{ label: '开启', value: 1 }, { label: '关闭', value: 0 }],
  },
  {
    type: 'select',
    label: '返佣开关',
    prop: 'commissionSwitch1',
    value: '',
    list: [{ label: '关闭', value: 0 }, { label: '开启', value: 1 }],
  },
];

const businessListsConfigCol = [
  {
    label: '商务级别',
    prop: 'level',
  },
  {
    label: '代理模式',
    prop: 'agentMode',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '手续费模式', val: 1 }],
  },
  {
    label: '手续费返佣比例',
    prop: 'feeCommission',
  },
  {
    label: '返佣结算时间',
    prop: 'delayUnit',
    type: 'textAndfilter',
    show_type: 'text',
    filters: [{ text: '周', val: 1 }, { text: '月', val: 2 }],
    prop2: 'delayDay',
  },
  {
    label: '添加时间',
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
    width: 160,
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
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const businessListsConfigConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
];

const businessDetailAssets = [
  {
    label: '币种',
    prop: 'id',
  },
  {
    label: '可用',
    prop: 'coinMarket',
  },
  {
    label: '冻结',
    prop: 'coinMarket',
  },
  {
    label: '待结算',
    prop: 'maximumLeverage',
  },
  {
    label: '历史总返佣',
    prop: 'maximumLeverage',
  },
];

const businessDetailTeam = [
  {
    label: '代理商UID',
    prop: 'id',
  },
  {
    label: '等级级别',
    prop: 'priceType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '限价', val: 1, type: '' }, { text: '市价', val: 2, type: 'warning' }],
  },
  {
    label: '手续费返佣比例',
    prop: 'id',
  },
  {
    label: '登录IP',
    prop: 'maximumLeverage',
  },
  {
    label: '注册IP',
    prop: 'maximumLeverage',
  },
  {
    label: '注册时间',
    prop: 'maximumLeverage',
  },
];

const businessFinancialFlowCol = [
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '商务UID',
    prop: 'uid',
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '提币待审核', val: 1 }, { text: '提币成功', val: 2 }, { text: '提币失败', val: 3 }, { text: '合约返佣', val: 88 }, { text: '队长返佣', val: 95 }],
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
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '可用余额', val: 1 }, { text: '冻结金额', val: 2 }],
  },
];

const businessFinancialFlowConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '商务UID',
    prop: 'businessUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType',
    value: '',
    list: [{ label: '提币待审核', value: 1 }, { label: '提币成功', value: 2 }, { label: '提币失败', value: 3 }, { label: '合约返佣', value: 88 }, { label: '队长返佣', value: 95 }],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
    placeHolder: '请输入',
  },
];

const agentFinancialFlowCol = [
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '订单号',
    prop: 'orderId',
  },
  {
    label: '代理UID',
    prop: 'uid',
  },
  // {
  //   label: '是否商务',
  //   prop: 'amountType1',
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '是', val: 1 }, { text: '否', val: 0 }],
  // },

  {
    label: '用户类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '普通用户', val: 1 },
      { text: '后台管理员用户', val: 2 },
      { text: '机器人', val: 3 },
      { text: 'CPT用户', val: 4 },
      { text: '系统用户', val: 100 },
      { text: '收益账号', val: 101 },
      { text: '成本账号', val: 102 },
      { text: '支出账号', val: 103 },
      { text: '支出子账号', val: 104 },
      { text: '收入账号', val: 105 },
      { text: '合约收益账号', val: 106 },
      { text: 'TP商户账号', val: 20 },
      { text: '顶级代理商账号', val: 21 },
      { text: '代理商账号', val: 22 },
      { text: '平台商户账号', val: 23 },
      { text: '顶级承兑商', val: 24 },
      { text: '承兑商代理', val: 25 },
      { text: '商务端', val: 31 },
      { text: '商务代理', val: 32 },
      { text: '分析师', val: 41 },
    ],
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [
      // { text: '合约返佣', val: 88 },
      { text: '充币', val: 0 },
      { text: '提币待审核', val: 1 },
      { text: '提币成功', val: 2 },
      { text: '提币失败', val: 3 },

      { text: '买下单', val: 4 },
      { text: '卖下单', val: 5 },
      { text: '买成交', val: 6 },
      { text: '卖成交', val: 7 },
      { text: '买撤单', val: 8 },
      { text: '卖撤单', val: 9 },
      { text: '锁仓手动释放可用金额', val: 20 },
      { text: '锁仓冻结金额', val: 21 },
      { text: '锁仓手动释放冻结金额', val: 23 },
      { text: '广告下架', val: 39 },

      { text: '合约返佣', val: 88 },
      { text: '合约返佣结算', val: 95 },
      { text: '普通用户手续费返佣', val: 101 },
      { text: '币币划转至合约', val: 50 },
      { text: '合约划转至钱包', val: 51 },
      { text: '法币划转至合约', val: 52 },
      { text: '合约划转至法币', val: 53 },
      { text: '钱包划转至法币', val: 10 },
      { text: '法币划转至钱包', val: 11 },
      { text: '发送红包', val: '106' },
      { text: '领取红包', val: '107' },
      { text: '过期红包退还', val: '108' },
      { text: '补充保证金', val: '109' },
      { text: '释放保证金', val: '110' },
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
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '可用余额', val: 1 }, { text: '冻结金额', val: 2 }],
  },
];

const agentFinancialFlowConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '代理UID',
    prop: 'agentUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType',
    value: '',
    list: [
      { label: '充币', value: 0 },
      { label: '提币待审核', value: 1 },
      { label: '提币成功', value: 2 },
      { label: '提币失败', value: 3 },

      { label: '买下单', value: 4 },
      { label: '卖下单', value: 5 },
      { label: '买成交', value: 6 },
      { label: '卖成交', value: 7 },
      { label: '买撤单', value: 8 },
      { label: '卖撤单', value: 9 },
      { label: '锁仓手动释放可用金额', value: 20 },
      { label: '锁仓冻结金额', value: 21 },
      { label: '锁仓手动释放冻结金额', value: 23 },
      { label: '广告下架', value: 39 },

      { label: '合约返佣', value: 88 },
      { label: '合约返佣结算', value: 95 },
      { label: '普通用户手续费返佣', value: 101 },
      { label: '币币划转至合约', value: 50 },
      { label: '合约划转至钱包', value: 51 },
      { label: '法币划转至合约', value: 52 },
      { label: '合约划转至法币', value: 53 },
      { label: '钱包划转至法币', value: 10 },
      { label: '法币划转至钱包', value: 11 },
      { label: '发送红包', value: '106' },
      { label: '领取红包', value: '107' },
      { label: '过期红包退还', value: '108' },
      { label: '补充保证金', value: '109' },
      { label: '释放保证金', value: '110' },
    ],
  },
  {
    type: 'text',
    label: '订单号',
    prop: 'orderId',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: 'selectChange',
  //   label: '资金类型',
  //   prop: 'balanceType',
  //   value: 1,
  //   list: [{ label: '可用余额', value: 1 }, { label: '准可用余额', value: 2 }],
  // },
];

const teamAssetsCol = [
  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '可用',
    prop: 'amount',
  },
  {
    label: '冻结',
    prop: 'frozenAmount',
  },
  {
    label: '待结算',
    prop: 'waitAmount',
  },
  {
    label: '保证金',
    prop: 'expandAmount',
  },
  {
    label: '历史总返佣',
    prop: 'returnSumAmount',
  },

  {
    label: '下面整条链的合约盈亏总合计',
    prop: 'allStat',
  },
  {
    label: '下面整条链的手续费合计',
    prop: 'commissionStat',
  },
  //11
  {
    label: '自身获得手续费合计',
    prop: 'myselfStat',
  },
  // {
  //   label: '下面整条链团队长合计',
  //   prop: 'captainStats',
  // },
  {
    label: '自身获得团队长合计',
    prop: 'captainStat',
  },
  {
    label: '下面整条链合约净入金合计',
    prop: 'inOutStat',
  },
];

const teamInfoCol = [
  {
    label: '序号',
    type: 'index',
    width: 80,
  },

  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '是否入金',
    prop: 'positionType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: 0 }, { text: '否', val: 1 }],
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
    label: '注册IP',
    prop: 'registerIp',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
  },
];

const teamInfoColBusiness = [
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '等级级别',
    prop: 'level',
  },
  {
    label: '手续费返佣比例',
    prop: 'feeCommission',
  },
  {
    label: '注册IP',
    prop: 'registerIp',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
  },
];

const refundRecordCol = [
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '用户UID(from)',
    prop: 'uid',
  },
  // {
  //   label: '商务UID',
  //   prop: 'businessUid',
  // },
  {
    label: '代理商UID(to)',
    prop: 'agentUid',
  },
  {
    label: '返佣类型',
    prop: 'orderType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约返佣', val: 1 }, { text: '币币返佣', val: 2 }],
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '手续费类型',
    prop: 'positionDirection',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '开仓手续费', val: 10 }, { text: '平仓手续费', val: 11 }],
  },
  // {
  //   label: '成交价格',
  //   prop: 'positionAmount',
  // },
  {
    label: '成交数量',
    prop: 'positionAmount',
  },
  {
    label: '手续费金额',
    prop: 'originAmount',
  },
  // {
  //   label: '手续费金额',
  //   prop: 'amount',
  // },
  {
    label: '代理商返佣金额',
    width: 130,
    prop: 'amount',
  },
  // {
  //   label: '代理结算状态',
  //   prop: 'agentGrantStatus',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '已结算', val: 1 }, { text: '待结算', val: 0 }],
  // },
  // {
  //   label: '商务返佣金额',
  //   prop: 'businessAmount',
  // },
  // {
  //   label: '商务结算状态',
  //   prop: 'businessGrantStatus',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '已结算', val: 1 }, { text: '待结算', val: 0 }],
  // },
  // {
  //   label: '平台获得金额',
  //   prop: 'platformAmount',
  // },
  {
    label: '结算状态',
    prop: 'grantStatus',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已结算', val: 1 }, { text: '未结算', val: 0 }],
  },
  {
    label: '仓位ID',
    prop: 'relateRecdId',
  },
];

const refundRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '用户UID(from)',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '代理商UID(to)',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: 'text',
  //   label: '商务UID',
  //   prop: 'businessUid',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'relateRecdId',
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
  // {
  //   type: 'select',
  //   label: '仓位方向',
  //   prop: 'positionDirection',
  //   value: '',
  //   list: [{ label: '多仓', value: 1 }, { label: '空仓', value: 2 }],
  // },
  // {
  //   type: 'select',
  //   label: '操作类型',
  //   prop: 'type',
  //   value: '',
  //   list: [
  //     // { label: '爆仓平空', value: 1 },
  //     // { label: '爆仓平多', value: 2 },
  //     // { label: '平空', value: 3 },
  //     // { label: '平多', value: 4 },
  //     // { label: '开空', value: 5 },
  //     // { label: '开多', value: 6 },
  //     // { label: '币币转入合约账户', value: 7 },
  //     // { label: '合约账户转出币币账户', value: 8 },
  //     // { label: '资金费用', value: 9 },
  //     { label: '开仓手续费', value: 10 },
  //     { label: '平仓手续费', value: 11 },
  //     // { label: '法币转入合约账户', value: 12 },
  //     // { label: '合约账户转入法币账户', value: 13 },
  //   ],
  // },
  {
    type: 'select',
    label: '返佣类型',
    prop: 'orderType',
    value: '',
    list: [{ label: '合约返佣', value: 1 }, { label: '币币返佣', value: 2 }],
    //, { label: '现货返佣', value: 2 }
  },
  // {
  //   type: 'select',
  //   label: '代理结算状态',
  //   prop: 'agentGrantStatus',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  // },
  // {
  //   type: 'select',
  //   label: '平台结算状态',
  //   prop: 'platformGrantStatus',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  // },
  // {
  //   type: 'select',
  //   label: '商务结算状态',
  //   prop: 'businessGrantStatus',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  // },
  {
    type: 'select',
    label: '结算状态',
    prop: 'isReward',
    value: '',
    list: [{ label: '未结算', value: 0 }, { label: '已结算', value: 1 }],
  },
];

const refundRecordNewCol = [
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '用户UID(from)',
    prop: 'uid',
  },
  // {
  //   label: 'From',
  //   prop: 'uid',
  // },
  {
    label: '用户UID(to)',
    prop: 'toUid',
  },
  // {
  //   label: '一级返佣UID',
  //   prop: 'businessUid',
  // },
  // {
  //   label: '二级返佣UID',
  //   prop: 'agentUid',
  // },
  {
    label: '返佣类型',
    prop: 'orderType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约返佣', val: 1 }],
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '手续费类型',
    prop: 'positionDirection',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '开仓手续费', val: 10 }, { text: '平仓手续费', val: 11 }],
  },
  // {
  //   label: '操作类型',
  //   prop: 'type',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [
  //     // { text: '爆仓平空', val: 1 },
  //     // { text: '爆仓平多', val: 2 },
  //     { text: '平空', val: 3 },
  //     { text: '平多', val: 4 },
  //     { text: '开空', val: 5 },
  //     { text: '开多', val: 6 },
  //     // { text: '币币转入合约账户', val: 7 },
  //     // { text: '合约账户转出币币账户', val: 8 },
  //     // { text: '资金费用', val: 9 },
  //     // { text: '开仓手续费', val: 10 },
  //     // { text: '平仓手续费', val: 11 },
  //     // { text: '法币转入合约账户', val: 12 },
  //     // { text: '合约账户转入法币账户', val: 13 },
  //   ],
  // },
  // {
  //   label: '成交价格',
  //   prop: 'positionAmount',
  // },
  {
    label: '成交数量',
    prop: 'positionAmount',
  },
  {
    label: '手续费金额',
    prop: 'originAmount',
  },
  // {
  //   label: '手续费金额',
  //   prop: 'amount',
  // },
  {
    label: '返佣金额',
    prop: 'amount',
  },

  // {
  //   label: '一级返佣金额',
  //   prop: 'agentAmount',
  // },
  // {
  //   label: '二级返佣金额',
  //   prop: 'businessAmount',
  // },

  // {
  //   label: '平台获得金额',
  //   prop: 'platformAmount',
  // },
  // {
  //   label: '平台结算状态',
  //   prop: 'platformGrantStatus',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '已结算', val: 1 }, { text: '待结算', val: 0 }],
  // },
  {
    label: '仓位ID',
    prop: 'relateRecdId',
  },
];

const refundRecordNewConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '用户UID(from)',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '用户UID(to)',
    prop: 'agentId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'relateRecdId',
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
  // {
  //   type: 'select',
  //   label: '仓位方向',
  //   prop: 'positionDirection',
  //   value: '',
  //   list: [{ label: '多仓', value: 1 }, { label: '空仓', value: 2 }],
  // },
  // {
  //   type: 'select',
  //   label: '操作类型',
  //   prop: 'type',
  //   value: '',
  //   list: [
  //     // { label: '爆仓平空', value: 1 },
  //     // { label: '爆仓平多', value: 2 },
  //     { label: '平空', value: 3 },
  //     { label: '平多', value: 4 },
  //     { label: '开空', value: 5 },
  //     { label: '开多', value: 6 },
  //     // { label: '币币转入合约账户', value: 7 },
  //     // { label: '合约账户转出币币账户', value: 8 },
  //     // { label: '资金费用', value: 9 },
  //     // { label: '开仓手续费', value: 10 },
  //     // { label: '平仓手续费', value: 11 },
  //     // { label: '法币转入合约账户', value: 12 },
  //     // { label: '合约账户转入法币账户', value: 13 },
  //   ],
  // },
  {
    type: 'select',
    label: '返佣类型',
    prop: 'orderType',
    value: '',
    list: [{ label: '合约返佣', value: 1 }, { label: '币币返佣', value: 2 }],
  },
  // {
  //   type: 'select',
  //   label: '用户结算状态',
  //   prop: 'agentGrantStatus',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  // },
  // {
  //   type: 'select',
  //   label: '平台结算状态',
  //   prop: 'platformGrantStatus',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  // },
];

const apportionRecordCol = [
  {
    label: '用户UID(from)',
    prop: 'uid',
  },
  {
    label: '代理商UID(to)',
    prop: 'agentUid',
  },
  // {
  //   label: '商务UID',
  //   prop: 'businessUid',
  // },
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
    label: '杠杆倍数',
    prop: 'leverTimes',
  },
  // {
  //   label: '平仓价',
  //   prop: 'closePrice',
  // },
  {
    label: '已实现盈亏',
    prop: 'originAmount',
  },

  {
    label: '平仓方向',
    prop: 'closePositionDirection',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '平多', val: 1 }, { text: '平空', val: 2 }],
  },
  // {
  //   label: '平仓类型',
  //   prop: 'closePosition',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '系统强平', val: 1 }, { text: '用户手动平仓', val: 2 }],
  // },
  {
    label: '仓位类型',
    prop: 'closePositionType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '逐仓', val: 1 }, { text: '全仓', val: 0 }],
  },
  {
    label: '代理商获得金额',
    prop: 'amount',
  },
  // {
  //   label: '结算状态',
  //   prop: 'reward',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '已结算', val: 1 }, { text: '未结算', val: 0 }],
  // },
  // {
  //   label: '商务获得金额',
  //   prop: 'businessEarning',
  // },
  // {
  //   label: '商务结算状态',
  //   prop: 'businessReward',
  //   width: 120,
  //   type: 'filter',
  //   show_type: 'text',
  //   filters: [{ text: '已结算', val: 1 }, { text: '未结算', val: 0 }],
  // },

  // {
  //   label: '平台获得金额',
  //   prop: 'originAmount',
  // },

  {
    label: '结算状态',
    prop: 'grantStatus',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已结算', val: 1 }, { text: '未结算', val: 0 }],
  },
  // {
  //   label: '订单号',
  //   prop: 'relateRecdId'
  // }
];

const apportionRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '用户UID(from)',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '代理商UID(to)',
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
  // {
  //   type: 'select',
  //   label: '平仓类型',
  //   prop: 'closePosition',
  //   value: '',
  //   list: [{ label: '系统强平', value: 1 }, { label: '用戶手动平仓', value: 2 }],
  // },

  // {
  //   type: 'select',
  //   label: '平仓方向',
  //   prop: 'positionDirection',
  //   value: '',
  //   list: [{ label: '多仓', value: 1 }, { label: '空仓', value: 2 }],
  // },
  // {
  //   type: 'select',
  //   label: '仓位类型',
  //   prop: 'positionType',
  //   value: '',
  //   list: [{ label: '逐仓', value: 1 }, { label: '全仓', value: 0 }],
  // },
  {
    type: 'select',
    label: '结算状态',
    prop: 'isReward',
    value: '',
    list: [{ label: '已结算', value: 1 }, { label: '未结算', value: 0 }],
  },

  {
    type: 'onlyNumber',
    label: '仓位ID',
    prop: 'positionId',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: 'select',
  //   label: '平台结算状态',
  //   prop: 'platformIsReward',
  //   value: '',
  //   list: [{ label: '已结算', value: 1 }, { label: '未结算', value: 0 }],
  // },
];

// 代理层级关系
const agentLevelConfig = [
  {
    type: 'text',
    label: '代理UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
];

// const agentLevelCol = [
//   {
//     label: 'UID',
//     prop: 'fromUserId',
//   },
//   {
//     label: 'UID',
//     prop: 'fromUserId',
//   },
// ]

const userMonitorCol = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '用户可盈利阀值(USDT)',
    prop: 'profitMargin',
  },
  {
    label: '用户当期盈亏(USDT)',
    prop: 'profitAndLoss',
  },
  {
    label: '用户合约资产(USDT)',
    prop: 'contractAmount',
  },
  {
    label: '代理待结算(USDT)',
    prop: 'agentSettlement',
  },
  {
    label: '代理保证金',
    prop: 'amountExpand',
  },
  {
    label: '代理下方总有效用户(交易)',
    prop: 'tradeUserNum',
  },
  {
    label: '代理下方总用户',
    prop: 'userNum',
  },
  {
    label: '团队长返佣比例',
    prop: 'packagePercent',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 160,
    btnGroup: [
      {
        label: '补充保证金',
        fn: 'supple',
        type: 'text',
        alias: 'supple',
      },
      {
        label: '移出监控',
        fn: 'remove',
        type: 'text',
        alias: 'remove',
      },
    ],
  },
];

const userMonitorColNoBtn = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '用户可盈利阀值(USDT)',
    prop: 'profitMargin',
  },
  {
    label: '用户当期盈亏(USDT)',
    prop: 'profitAndLoss',
  },
  {
    label: '用户合约资产(USDT)',
    prop: 'contractAmount',
  },
  {
    label: '代理待结算(USDT)',
    prop: 'agentSettlement',
  },
  {
    label: '代理保证金',
    prop: 'amountExpand',
  },
  {
    label: '代理下方总有效用户(交易)',
    prop: 'tradeUserNum',
  },
  {
    label: '代理下方总用户',
    prop: 'userNum',
  },
  {
    label: '团队长返佣比例',
    prop: 'packagePercent',
  },
];

const userMonitorConfig = [
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
    prop: 'agentUID',
    value: '',
    placeHolder: '请输入',
  },
];

const agentMonitorCol = [
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '总盈利阀值(USDT)',
    prop: 'profitMargin',
  },
  {
    label: '保证金(USDT)',
    prop: 'amountExpand',
  },
  {
    label: '待结算(USDT)',
    prop: 'agentSettlement',
  },
  {
    label: '代理下方总盈亏(USDT)',
    prop: 'profitAndLoss',
  },
  {
    label: '代理下方总有效用户(交易)',
    prop: 'tradeUserNum',
  },
  {
    label: '代理下方总用户',
    prop: 'userNum',
  },
  {
    label: '团队长返佣比例',
    prop: 'packagePercent',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 120,
    btnGroup: [
      {
        label: '补充保证金',
        fn: 'supple',
        type: 'text',
        alias: 'supple',
      },
    ],
  },
];

const agentMonitorColNoBtn = [
  {
    label: '代理商UID',
    prop: 'agentUid',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '总盈利阀值(USDT)',
    prop: 'profitMargin',
  },
  {
    label: '保证金(USDT)',
    prop: 'amountExpand',
  },
  {
    label: '待结算(USDT)',
    prop: 'agentSettlement',
  },
  {
    label: '代理下方总盈亏(USDT)',
    prop: 'profitAndLoss',
  },
  {
    label: '代理下方总有效用户(交易)',
    prop: 'tradeUserNum',
  },
  {
    label: '代理下方总用户',
    prop: 'userNum',
  },
  {
    label: '团队长返佣比例',
    prop: 'packagePercent',
  },
];

const agentMonitorConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '代理商UID',
    prop: 'agentUID',
    value: '',
    placeHolder: '请输入',
  },
];

const earnestMoneyListCol = [
  {
    label: '时间',
    prop: 'createTime',
  },
  {
    label: '订单号',
    prop: 'id',
  },
  {
    label: '代理UID',
    prop: 'uid',
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '补充保证金',
        val: 2,
      },
      {
        text: '释放保证金',
        val: 3,
      },
      {
        text: '结算保证金',
        val: 1,
      },
    ],
  },

  {
    label: '变动保证金',
    prop: 'amount',
  },
  {
    label: '变动前保证金',
    prop: 'beforeAmount',
  },
  {
    label: '变动后保证金',
    prop: 'afterAmount',
  },
];

const earnestMoneyListConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '代理UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '类型',
    prop: 'optType',
    value: '',
    // 1：待审核，2：已完成，3：已驳回
    list: [
      {
        label: '补充保证金',
        value: 2,
      },
      {
        label: '释放保证金',
        value: 3,
      },
      {
        label: '结算保证金',
        value: 1,
      },
    ],
  },
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'relateRecdId',
    value: '',
    placeHolder: '请输入',
  },
];

// 商务层级关系
const businessRelationListsConfig = [
  {
    type: 'onlyNumber',
    label: '商务UID',
    prop: 'businessUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '商务关系',
    prop: 'type',
    value: 1,
    list: [{ label: '查上级', value: 0 }, { label: '当前级别', value: 1 }, { label: '查下级', value: 2 }],
  },
];

// 商务手续费返佣记录
const businessRefundRecordCol = [
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '商务UID',
    prop: 'businessUid',
  },
  {
    label: '返佣类型',
    prop: 'orderType',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约返佣', val: 1 }, { text: '币币返佣', val: 2 }],
  },
  {
    label: '币对',
    prop: 'coinMarket',
  },
  {
    label: '成交数量',
    prop: 'positionAmount',
  },
  {
    label: '手续费金额',
    prop: 'originFeeAmountSum',
  },
  {
    label: '商务返佣金额',
    width: 130,
    prop: 'commissionAmount',
  },
  {
    label: '结算状态',
    prop: 'businessGrantStatus',
    width: 120,
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已结算', val: 1 }, { text: '待结算', val: 0 }],
  },
  {
    label: '订单号',
    prop: 'orderNumber',
  },
];

const businessRefundRecordConfig = [
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
    label: '商务UID',
    prop: 'toUid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '订单号',
    prop: 'orderNumber',
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
    label: '返佣类型',
    prop: 'orderType',
    value: '',
    list: [{ label: '合约返佣', value: 1 }, { label: '币币返佣', value: 2 }],
  },
  {
    type: 'select',
    label: '结算状态',
    prop: 'isReward',
    value: '',
    list: [ { label: '已结算', value: 1 }, { label: '待结算', value: 0 }],
  },
];

export {
  businessRefundRecordConfig,
  businessRefundRecordCol,
  businessRelationListsConfig,
  earnestMoneyListConfig,
  earnestMoneyListCol,
  agentMonitorConfig,
  agentMonitorCol,
  agentMonitorColNoBtn,
  userMonitorConfig,
  userMonitorColNoBtn,
  userMonitorCol,
  apportionRecordCol,
  apportionRecordConfig,
  agentsListsCol,
  agentsListsColNoBtn,
  agentsListsConfig,
  agentsListsConfigCol,
  agentsListsConfigConfig,
  agentsListsDetailAssets,
  agentsListsDetailTeam,
  businessListsCol,
  businessListsColNoBtn,
  businessListsConfig,
  businessListsConfigCol,
  businessListsConfigConfig,
  businessDetailAssets,
  businessDetailTeam,
  refundRecordCol,
  refundRecordConfig,
  businessFinancialFlowCol,
  businessFinancialFlowConfig,
  agentFinancialFlowCol,
  agentFinancialFlowConfig,
  teamAssetsCol,
  teamInfoCol,
  teamInfoColBusiness,
  refundRecordNewCol,
  refundRecordNewConfig,
  agentLevelConfig,
};
