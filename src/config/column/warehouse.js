const userCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '入标时间',
    prop: 'createTime',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '合伙人类型',
    prop: 'partnerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '原始合伙人', val: 1 }, { text: '合伙人', val: 2 }, { text: '超级合伙人', val: 3 }, { text: '非合伙人', val: 0 }],
  },
  {
    label: '合伙人徽章',
    prop: 'emblem',
  },
  {
    label: '当前持币',
    prop: 'amount',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  // {
  //   label: "团队总分",
  //   prop: "teamPoint",
  // },
  {
    label: '自身总分',
    prop: 'totalOneselfScore',
  },
  {
    label: '当前星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '无限代查看权限',
    prop: 'withoutLimit',
    width: 120,
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trstart',
  },
  // {
  //   label: '团队人数',
  //   prop: 'stat33us12',
  // },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '140',
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
    label: '入标时间',
    prop: 'createTime',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '合伙人类型',
    prop: 'partnerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '原始合伙人', val: 1 }, { text: '合伙人', val: 2 }, { text: '超级合伙人', val: 3 }, { text: '非合伙人', val: 0 }],
  },
  {
    label: '合伙人徽章',
    prop: 'emblem',
  },
  {
    label: '当前持币',
    prop: 'amount',
  },
  {
    label: '邀请人UID',
    prop: 'inviterUid',
  },
  // {
  //   label: "团队总分",
  //   prop: "teamPoint",
  // },
  {
    label: '自身总分',
    prop: 'totalOneselfScore',
  },
  {
    label: '当前星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
];

const userConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '查询条件',
    prop: 'queryCriteria',
    value: '',
    placeholder: '请输入UID',
  },
  {
    type: 'select',
    label: '持币排序',
    prop: 'amountSort',
    value: '',
    list: [{ label: '不排序', value: 0 }, { label: '从高至低', value: 1 }, { label: '从低至高', value: 2 }],
  },
  {
    type: 'select',
    label: '星级查询',
    prop: 'starLevel',
    value: '',
    list: [
      { label: '一星级', value: 1 },
      { label: '二星级', value: 2 },
      { label: '三星级', value: 3 },
      { label: '四星级', value: 4 },
      { label: '五星级', value: 5 },
      { label: '六星级', value: 6 },
      { label: '七星级', value: 7 },
      { label: '八星级', value: 8 },
      { label: '零星级', value: 0 },
    ],
  },
  {
    type: 'select',
    label: '合伙人类型',
    prop: 'partnerType',
    value: '',
    list: [{ label: '原始合伙人', value: 1 }, { label: '合伙人', value: 2 }, { label: '超级合伙人', value: 3 }, { label: '非合伙人', value: 0 }],
  },
];

const userDetail1Col = [
  {
    label: '获奖类型',
    prop: 'rewardsType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '周奖励', val: 1 }, { text: '季度奖励', val: 2 }],
  },
  {
    label: '获奖时间',
    prop: 'startTime',
    arr: ['startTime', 'endTime'],
    width: 300,
    type: 'range',
  },
  {
    label: '获奖级别',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '获奖阶段',
    prop: 'stage',
  },
  {
    label: '获奖状态',
    prop: 'recordStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未发放', val: 0 }, { text: '已发放', val: 1 }],
  },
  {
    label: '考核（分/次数）',
    prop: 'examinePoint',
  },
  {
    label: '目标（分/次数）',
    prop: 'targetPoint',
  },
  {
    label: '实发奖励',
    prop: 'realityBonus',
  },
];

const userDetail2Col = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '持仓数量',
    prop: 'amount',
  },
  {
    label: '星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '自身总积分',
    prop: 'totalPoint',
  },
  {
    label: '团体总积分',
    prop: 'teamPoint',
  },
  {
    label: '周结算奖金',
    prop: 'totalWeek',
  },
  {
    label: '季度结算总奖金',
    prop: 'totalQuarter',
  },
  {
    label: '上级昵称',
    prop: 'parentNickName',
  },
  {
    label: '上级UID',
    prop: 'parentUid',
  },
  {
    label: '下级数量',
    prop: 'subUserNum',
  },
  {
    label: '注册时间',
    prop: 'createTime',
  },
];

const accountCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '分红账号', val: 1 }, { text: '周薪账号', val: 2 }],
  },
  {
    label: '变动类型',
    prop: 'recordType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '分红奖励', val: 2 }, { text: '周薪奖励', val: 1 }, { text: '特殊调账', val: 3 }],
  },
  {
    label: '变动数量',
    prop: 'amount',
  },
  {
    label: '余额',
    prop: 'amountAfterChange',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '奖励订单号',
    prop: 'id',
  },
];

const accountColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '分红账号', val: 1 }, { text: '周薪账号', val: 2 }],
  },
  {
    label: '变动类型',
    prop: 'recordType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '分红奖励', val: 2 }, { text: '周薪奖励', val: 1 }, { text: '特殊调账', val: 3 }],
  },
  {
    label: '变动数量',
    prop: 'amount',
  },
  {
    label: '余额',
    prop: 'amountAfterChange',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '奖励订单号',
    prop: 'id',
  },
];

const accountConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
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
    label: '账号类型',
    prop: 'userType',
    value: '',
    list: [{ label: '分红账号', value: 1 }, { label: '周薪账号', value: 2 }],
  },
  {
    type: 'select',
    label: '变动类型',
    prop: 'recordType',
    value: '',
    list: [{ label: '分红奖励', value: 2 }, { label: '周薪奖励', value: 1 }, { label: '特殊调账', value: 3 }],
  },
];

const rewardCol = [
  {
    label: '奖励订单号',
    prop: 'id',
  },
  {
    label: '奖励类型',
    prop: 'rewardsType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '周薪奖励', val: 1 }, { text: '分红奖励', val: 2 }],
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  {
    label: '统计时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '应发奖励总数',
    prop: 'bonus',
  },
  {
    label: '应发奖励时间',
    prop: 'shouldTime',
    type: 'time',
  },
  {
    label: '获奖人数',
    prop: 'userNum',
  },
  {
    label: '发放状态',
    prop: 'settlementStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已发放', val: 1 }, { text: '未发放', val: 0 }],
  },
  {
    label: '实发奖励',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
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
      {
        label: '编辑',
        fn: 'edit',
        isPop: false,
        filter_key: ['rewardsType', 'settlementStatus'],
        filter_status: [1, 0],
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];

const rewardColNoBtn = [
  {
    label: '奖励订单号',
    prop: 'id',
  },
  {
    label: '奖励类型',
    prop: 'rewardsType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '周薪奖励', val: 1 }, { text: '分红奖励', val: 2 }],
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  {
    label: '统计时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '应发奖励总数',
    prop: 'bonus',
  },
  {
    label: '应发奖励时间',
    prop: 'shouldTime',
    type: 'time',
  },
  {
    label: '获奖人数',
    prop: 'userNum',
  },
  {
    label: '发放状态',
    prop: 'settlementStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已发放', val: 1 }, { text: '未发放', val: 0 }],
  },
  {
    label: '实发奖励',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
  },
];

const rewardConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
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
    type: 'select',
    label: '奖励类型',
    prop: 'rewardsType',
    value: '',
    list: [{ label: '周薪奖励', value: 1 }, { label: '分红奖励', value: 2 }],
  },
  {
    type: 'select',
    label: '发放状态',
    prop: 'settlementStatus',
    value: '',
    list: [{ label: '未发放', value: 0 }, { label: '已发放', value: 1 }],
  },
];

const weeklyCol = [
  {
    label: '奖励订单号',
    prop: 'settlementId',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  {
    label: '获奖阶段',
    prop: 'stage',
  },
  {
    label: '考核（分/次数）',
    prop: 'examinePoint',
    width: 180,
  },
  {
    label: '目标（分/次数）',
    prop: 'targetPoint',
    width: 180,
  },
  {
    label: '奖励对应星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '奖励数量',
    prop: 'bonus',
  },
  {
    label: '发放状态',
    prop: 'recordStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未发放', val: 0 }, { text: '已发放', val: 1 }],
  },
  {
    label: '实发奖励数量',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '140',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        isPop: false,
        filter_key: 'recordStatus',
        filter_status: 0,
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];

const weeklyColNoBtn = [
  {
    label: '奖励订单号',
    prop: 'settlementId',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  {
    label: '获奖阶段',
    prop: 'stage',
  },
  {
    label: '考核（分/次数）',
    prop: 'examinePoint',
    width: 180,
  },
  {
    label: '目标（分/次数）',
    prop: 'targetPoint',
    width: 180,
  },
  {
    label: '奖励对应星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '奖励数量',
    prop: 'bonus',
  },
  {
    label: '发放状态',
    prop: 'recordStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '未发放', val: 0 }, { text: '已发放', val: 1 }],
  },
  {
    label: '实发奖励数量',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
  },
];

const weeklyConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号/UID/姓名',
    prop: 'queryCriteria',
    value: '',
  },
  {
    type: 'select',
    label: '星级查询',
    prop: 'starLevel',
    value: '',
    list: [
      { label: '一星级', value: 1 },
      { label: '二星级', value: 2 },
      { label: '三星级', value: 3 },
      { label: '四星级', value: 4 },
      { label: '五星级', value: 5 },
      { label: '六星级', value: 6 },
      { label: '七星级', value: 7 },
      { label: '八星级', value: 8 },
      { label: '零星级', value: 0 },
    ],
  },
  {
    type: 'text',
    label: '获奖次数(合计)',
    prop: 'count',
    value: '',
    placeholder: '请输入',
  },
  {
    type: 'select',
    label: '发放类型',
    prop: 'recordStatus',
    value: '',
    list: [{ label: '已发放', value: 1 }, { label: '未发放', value: 0 }],
  },
];

const distributionCol = [
  {
    label: '奖励订单号',
    prop: 'settlementId',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  // {
  //   label: "季度考核目标",
  //   prop: "uid232",
  // },
  // {
  //   label: "考核结果",
  //   prop: "uid232",
  // },
  {
    label: '奖励对应星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '奖励数量',
    prop: 'bonus',
  },
  {
    label: '奖励占比',
    prop: 'bonusPercent',
  },
  {
    label: '发放状态',
    prop: 'recordStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已发放', val: 1 }, { text: '未发放', val: 0 }],
  },
  {
    label: '实发奖励',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
  },
];

const distributionColNoBtn = [
  {
    label: '奖励订单号',
    prop: 'settlementId',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '时间周期',
    prop: 'cycleTime',
    width: 200,
  },
  // {
  //   label: "季度考核目标",
  //   prop: "uid232",
  // },
  // {
  //   label: "考核结果",
  //   prop: "uid232",
  // },
  {
    label: '奖励对应星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '奖励数量',
    prop: 'bonus',
  },
  {
    label: '奖励占比',
    prop: 'bonusPercent',
  },
  {
    label: '发放状态',
    prop: 'recordStatus',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '已发放', val: 1 }, { text: '未发放', val: 0 }],
  },
  {
    label: '实发奖励',
    prop: 'realityBonus',
  },
  {
    label: '实际发放时间',
    prop: 'realityTime',
    type: 'time',
  },
];

const distributionConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '订单号/UID/姓名',
    prop: 'queryCriteria',
    value: '',
  },
  {
    type: 'select',
    label: '星级查询',
    prop: 'starLevel',
    value: '',
    list: [
      { label: '一星级', value: 1 },
      { label: '二星级', value: 2 },
      { label: '三星级', value: 3 },
      { label: '四星级', value: 4 },
      { label: '五星级', value: 5 },
      { label: '六星级', value: 6 },
      { label: '七星级', value: 7 },
      { label: '八星级', value: 8 },
      { label: '零星级', value: 0 },
    ],
  },
  {
    type: 'select',
    label: '发放状态',
    prop: 'recordStatus',
    value: '',
    list: [{ label: '已发放', value: 1 }, { label: '未发放', value: 0 }],
  },
];

const integralCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '合伙人类型',
    prop: 'partnerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '原始合伙人', val: 1 }, { text: '合伙人', val: 2 }, { text: '超级合伙人', val: 3 }, { text: '非合伙人', val: 0 }],
  },
  {
    label: '合伙人徽章',
    prop: 'emblem',
  },
  {
    label: '循环积分余额',
    prop: 'cyclePoint',
    oldProp: "emblemOld",
    type: 'positiveColor',
    width: 120,
  },
  {
    label: '循环积分余额-下级贡献',
    prop: 'cycleGivePoint',
    width: 180,
  },
  {
    label: '应用积分余额',
    prop: 'applicationPoint',
  },
  {
    label: '开户积分余额',
    prop: 'openAccountPoint',
  },
  // {
  //   label: '永久积分余额',
  //   prop:'emblem',
  //   propArr: ['cyclePoint','permanentPoint'],
  //   type:"sumPositive",
  // },
  {
    label: '永久积分余额',
    prop: 'permanentPoint',
  },
  {
    label: '永久积分余额-下级贡献',
    prop: 'permanentGivePoint',
    width: 180,
  },
  {
    label: '当前持币',
    prop: 'amount',
  },
  {
    label: '当前总分',
    prop: 'totalOneselfScore',
  },
  // {
  //   label: '团队总分',
  //   prop: 'teamPoint',
  // },
  {
    label: '当前星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '120',
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

const integralColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '合伙人类型',
    prop: 'partnerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '原始合伙人', val: 1 }, { text: '合伙人', val: 2 }, { text: '超级合伙人', val: 3 }, { text: '非合伙人', val: 0 }],
  },
  {
    label: '循环积分余额',
    prop: 'cyclePoint',
  },
  {
    label: '应用积分余额',
    prop: 'applicationPoint',
  },
  {
    label: '开户积分余额',
    prop: 'openAccountPoint',
  },
  {
    label: '永久积分余额',
    prop: 'permanentPoint',
  },
  {
    label: '当前持币',
    prop: 'amount',
  },
  {
    label: '当前总分',
    prop: 'totalOneselfScore',
  },
  // {
  //   label: '团队总分',
  //   prop: 'teamPoint',
  // },
  {
    label: '当前星级',
    prop: 'starLevel',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '一星级', val: 1 },
      { text: '二星级', val: 2 },
      { text: '三星级', val: 3 },
      { text: '四星级', val: 4 },
      { text: '五星级', val: 5 },
      { text: '六星级', val: 6 },
      { text: '七星级', val: 7 },
      { text: '八星级', val: 8 },
      { text: '零星级', val: 0 },
    ],
  },
];

const integralConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
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
    label: '合伙人类型',
    prop: 'partnerType',
    value: '',
    list: [{ label: '原始合伙人', value: 1 }, { label: '合伙人', value: 2 }, { label: '超级合伙人', value: 3 }, { label: '非合伙人', value: 0 }],
  },
  // {
  //   type: "select",
  //   label: "积分类型",
  //   prop: "userEnterprise",
  //   value: "",
  //   list: [{ label: "循环积分", value: 0 }, { label: "应用积分", value: 1 }, { label: "开户积分", value: 2 }, { label: "永久积分", value: 2 }],
  // },
];

const integralDetailCol = [
  {
    label: '来源昵称',
    prop: 'fromName',
  },
  {
    label: '来源UID',
    prop: 'fromUID',
  },
  {
    label: '目标昵称',
    prop: 'toName',
  },
  {
    label: '目标UID',
    prop: 'toUID',
  },
  {
    label: '积分变动类型',
    prop: 'pointType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '奖励循环积分', val: 1 },
      { text: '扣除循环积分', val: 2 },
      { text: '奖励永久积分', val: 3 },
      { text: '扣除永久积分', val: 4 },
      { text: '奖励应用积分', val: 5 },
      { text: '扣除应用用积分', val: 6 },
      { text: '奖励开户积分', val: 7 },
      { text: '扣除开户用积分', val: 8 },
    ],
  },
  {
    label: '变动积分',
    prop: 'point',
  },
  {
    label: '变动前积分',
    prop: 'beforePoint',
  },
  {
    label: '变动后积分',
    prop: 'afterPoint',
  },
  {
    label: '更新时间',
    prop: 'createTime',
    type: 'time',
  },
];

const integralDetailColNoBtn = [
  {
    label: '来源昵称',
    prop: 'fromName',
  },
  {
    label: '来源UID',
    prop: 'fromUID',
  },
  {
    label: '目标昵称',
    prop: 'toName',
  },
  {
    label: '目标UID',
    prop: 'toUID',
  },
  {
    label: '积分变动类型',
    prop: 'pointType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '奖励循环积分', val: 1 },
      { text: '扣除循环积分', val: 2 },
      { text: '奖励永久积分', val: 3 },
      { text: '扣除永久积分', val: 4 },
      { text: '奖励应用积分', val: 5 },
      { text: '扣除应用用积分', val: 6 },
      { text: '奖励开户积分', val: 7 },
      { text: '扣除开户用积分', val: 8 },
    ],
  },
  {
    label: '变动积分',
    prop: 'point',
  },
  {
    label: '变动前积分',
    prop: 'beforePoint',
  },
  {
    label: '变动后积分',
    prop: 'afterPoint',
  },
  {
    label: '更新时间',
    prop: 'createTime',
    type: 'time',
  },
];

const integralDetailConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: 'UID/姓名',
    prop: 'queryCriteria',
    value: '',
  },
  {
    type: 'select',
    label: '积分类型',
    prop: 'pointType',
    value: '',
    list: [
      { label: '奖励循环积分', value: 1 },
      { label: '扣除循环积分', value: 2 },
      { label: '奖励永久积分', value: 3 },
      { label: '扣除永久积分', value: 4 },
      { label: '奖励应用积分', value: 5 },
      { label: '扣除应用用积分', value: 6 },
      { label: '奖励开户积分', value: 7 },
      { label: '扣除开户用积分', value: 8 },
    ],
  },
];

const permanentCol = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '积分类型',
    prop: 'pointType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '奖励循环积分', val: 1 },
      { text: '扣除循环积分', val: 2 },
      { text: '奖励永久积分', val: 3 },
      { text: '扣除永久积分', val: 4 },
      { text: '奖励应用积分', val: 5 },
      { text: '扣除应用用积分', val: 6 },
      { text: '奖励开户积分', val: 7 },
      { text: '扣除开户用积分', val: 8 },
    ],
  },
  {
    label: '添加数量',
    prop: 'point',
  },
  {
    label: '添加时间',
    prop: 'creatTime',
    type: 'time',
  },
  {
    label: '添加人',
    prop: 'systemUser',
  },
];

const permanentColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '姓名',
    prop: 'realName',
  },
  {
    label: '积分类型',
    prop: 'pointType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '奖励循环积分', val: 1 },
      { text: '扣除循环积分', val: 2 },
      { text: '奖励永久积分', val: 3 },
      { text: '扣除永久积分', val: 4 },
      { text: '奖励应用积分', val: 5 },
      { text: '扣除应用用积分', val: 6 },
      { text: '奖励开户积分', val: 7 },
      { text: '扣除开户用积分', val: 8 },
    ],
  },
  {
    label: '添加数量',
    prop: 'point',
  },
  {
    label: '添加时间',
    prop: 'creatTime',
    type: 'time',
  },
  {
    label: '添加人',
    prop: 'systemUser',
  },
];

const permanentConfig = [
  {
    type: 'date_rank',
    label: '日期选择',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: 'UID/姓名',
    prop: 'queryCriteria',
    value: '',
  },
  // {
  //   type: "select",
  //   label: "积分类型",
  //   prop: "userEnterprise",
  //   value: "",
  //   list: [{ label: "循环积分", value: 0 }, { label: "应用积分", value: 1 }, { label: "开户积分", value: 2 }, { label: "永久积分", value: 2 }],
  // },
];

const blackCol = [
  {
    label: '用户id',
    prop: 'userId',
  },
  {
    label: '注册账号',
    prop: 'account',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    type: 'time',
  },
  {
    label: '原因',
    prop: 'reason',
  },
  {
    label: '限制类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '无法获得周奖', val: 2 }, { text: '无法获得分红', val: 3 }, { text: '无法获得周奖和分红', val: 4 }],
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: '120',
    btnGroup: [
      {
        label: '移出黑名单',
        fn: 'move',
        type: 'primary',
        alias: 'move',
      },
    ],
  },
];

const blackColNoBtn = [
  {
    label: '用户id',
    prop: 'userId',
  },
  {
    label: '注册账号',
    prop: 'account',
  },
  {
    label: '注册时间',
    prop: 'registerTime',
    type: 'time',
  },
  {
    label: '原因',
    prop: 'reason',
  },
  {
    label: '限制类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '无法获得周奖', val: 2 }, { text: '无法获得分红', val: 3 }, { text: '无法获得周奖和分红', val: 4 }],
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
];

const blackConfig = [];

const newStatisticsCol = [
  // {
  //   label: "ID",
  //   prop: "userId",
  // },
  {
    label: '时间',
    prop: 'time',
    type: 'time',
  },
  {
    label: '日加入限额',
    prop: 'limit',
  },
  {
    label: '新加入标仓人数',
    prop: 'currentDayRegisterUserNum',
  },
  {
    label: '新加入占总用户比例',
    prop: 'percent',
  },
  {
    label: '当前标仓总人数',
    prop: 'currentTotalUser',
  },
];

const newStatisticsColNoBtn = [
  {
    label: '时间',
    prop: 'time',
    type: 'time',
  },
  {
    label: '日加入限额',
    prop: 'limit',
  },
  {
    label: '新加入标仓人数',
    prop: 'currentDayRegisterUserNum',
  },
  {
    label: '新加入占总用户比例',
    prop: 'percent',
  },
  {
    label: '当前标仓总人数',
    prop: 'currentTotalUser',
  },
];

const assetsCol = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '标仓', val: 1 }, { text: '普通用户', val: 2 }],
  },
  {
    label: '变动前金额',
    prop: 'beforeAmount',
  },
  {
    label: '变动金额',
    prop: 'amount',
  },
  {
    label: '变动后金额',
    prop: 'afterAmount',
  },
  {
    label: '时间',
    prop: 'timeStamp',
    type: 'time',
  },
];

const assetsColNoBtn = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '标仓', val: 1 }, { text: '普通用户', val: 2 }],
  },
  {
    label: '变动前金额',
    prop: 'beforeAmount',
  },
  {
    label: '变动金额',
    prop: 'amount',
  },
  {
    label: '变动后金额',
    prop: 'afterAmount',
  },
  {
    label: '时间',
    prop: 'timeStamp',
    type: 'time',
  },
];

const assetsConfig = [
  // {
  //   type: "date_rank",
  //   label: "日期选择",
  //   prop: "startTime",
  //   prop2: "endTime",
  //   value: "",
  // },
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    value: '',
    list: [{ label: '标仓', value: 1 }, { label: '普通用户', value: 2 }],
  },
];

export {
  newStatisticsCol,
  newStatisticsColNoBtn,
  userCol,
  userColNoBtn,
  userConfig,
  userDetail1Col,
  userDetail2Col,
  accountCol,
  accountColNoBtn,
  accountConfig,
  rewardCol,
  rewardColNoBtn,
  rewardConfig,
  weeklyCol,
  weeklyColNoBtn,
  weeklyConfig,
  distributionCol,
  distributionColNoBtn,
  distributionConfig,
  integralCol,
  integralColNoBtn,
  integralConfig,
  integralDetailCol,
  integralDetailColNoBtn,
  integralDetailConfig,
  permanentCol,
  permanentColNoBtn,
  permanentConfig,
  blackCol,
  blackColNoBtn,
  blackConfig,
  assetsCol,
  assetsColNoBtn,
  assetsConfig,
};
