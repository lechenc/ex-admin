const lotteryListCol = [
  {
    label: '活动ID',
    prop: 'id',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },

  {
    label: '活动任务有效时间',
    width: 310,
    arr: ['startTime', 'endTime'],
    type: 'textArr',
    join: '至',
  },

  {
    label: '抽奖机会总数',
    prop: 'totalRaffle',
  },
  {
    label: '已发放机会数',
    prop: 'sendRaffle',
  },
  {
    label: '已用机会数',
    prop: 'useRaffle',
  },
  // {
  //   label: '抽奖机会发放时间',
  //   prop: 'grantRaffleTime',
  //   width: 160,
  // },
  {
    label: '抽奖机会截止时间',
    prop: 'luckDrawEndTime',
    width: 160,
  },
  // {
  //   label: '奖励发放时间（实时）',
  //   prop: 'grantPrizeTime',
  //   width: 160,
  // },
  {
    label: '活动状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    width: 110,
    filters: [{ val: '1', text: '未开始' }, { val: '2', text: '进行中' }, { val: '3', text: '抽奖中' }, { val: '4', text: '待发奖' }, { val: '5', text: '已结束' }],
  },
  // {
  //   label: '剩余抽奖卷数量',
  //   prop: 'remainingRaffle',
  //   width: 140,
  // },
  // {
  //   label: '奖励自动发放时间',
  //   prop: 'grantPrizeTime',
  //   width: 160,
  // },
  {
    label: '上架开关',
    prop: 'activityStatus',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon',
  },
  {
    label: '抽奖开关',
    prop: 'playStatus',
    type: 'switch',
    fn: 'trdraw',
    alias: 'trdraw',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: 160,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    width: 160,
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

const lotteryListColNoBtn = [
  {
    label: '活动ID',
    prop: 'id',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },
  {
    label: '活动任务有效时间',
    width: 310,
    arr: ['startTime', 'endTime'],
    type: 'textArr',
    join: '至',
  },
  {
    label: '抽奖机会总数',
    prop: 'totalRaffle',
  },
  {
    label: '已发放机会数',
    prop: 'sendRaffle',
  },
  {
    label: '已用机会数',
    prop: 'useRaffle',
  },
  // {
  //   label: '抽奖机会发放时间',
  //   prop: 'grantRaffleTime',
  //   width: 160,
  // },
  {
    label: '抽奖机会截止时间',
    prop: 'luckDrawEndTime',
    width: 160,
  },
  // {
  //   label: '奖励发放时间（实时）',
  //   prop: 'grantPrizeTime',
  //   width: 160,
  // },
  {
    label: '活动状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    width: 110,
    filters: [{ val: '1', text: '未开始' }, { val: '2', text: '进行中' }, { val: '3', text: '抽奖中' }, { val: '4', text: '待发奖' }, { val: '5', text: '已结束' }],
  },
  // {
  //   label: '剩余抽奖卷数量',
  //   prop: 'remainingRaffle',
  //   width: 140,
  // },
  // {
  //   label: '奖励自动发放时间',
  //   prop: 'grantPrizeTime',
  //   width: 160,
  // },
  {
    label: '创建时间',
    prop: 'createTime',
    width: 160,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    width: 160,
  },
];

const lotteryListConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '活动ID',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'select',
    label: '上架开关',
    prop: 'activityStatus',
    value: '',
    list: [{ label: '下架', value: 0 }, { label: '上架', value: 1 }],
  },
  {
    type: 'select',
    label: '抽奖开关',
    prop: 'playStatus',
    value: '',
    list: [{ label: '不可抽奖', value: 0 }, { label: '可抽奖', value: 1 }],
  },
];

const lotteryRecordCol = [
  {
    label: '中奖记录ID',
    prop: 'id',
  },
  {
    label: '活动ID',
    prop: 'activityId',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },
  {
    label: '获奖人UID',
    prop: 'uid',
  },
  {
    label: '获奖人类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '1', text: '标记用户' }, { val: '2', text: '普通用户' }],
  },
  {
    label: '当前机会剩余数',
    prop: 'retainChance',
  },
  {
    label: '奖励类型',
    prop: 'prizeType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '1', text: '币币奖品' }, { val: '2', text: '体验金奖励' }, { val: '3', text: '其他' }],
  },
  {
    label: '奖励名称',
    prop: 'prizeName',
  },
  {
    label: '内容描述',
    prop: 'prizeDescribe',
  },
  // {
  //   label: '发奖状态',
  //   prop: 'status',
  //   type: 'filter',
  //   show_type: 'text',
  //   width: 150,
  //   filters: [{ val: '0', text: '待发放' }, { val: '1', text: '已发放' }],
  // },
  {
    label: '获奖时间',
    prop: 'lotteryTime',
    type: 'time',
  },
  {
    label: '使用状态',
    prop: 'useStatus',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '0', text: '未使用' }, { val: '1', text: '已使用' }, { val: '2', text: '已过期' }, { val: '3', text: '使用中' }],
  },
  {
    label: '使用时间',
    prop: 'useTime',
    type: 'time',
  },
  {
    label: '失效时间',
    prop: 'invalidTime',
    type: 'time',
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
        isPop: false,
        filter_key: 'prizeType',
        filter_status: 2,
        out: true,
        type: 'success',
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

const lotteryRecordColNoBtn = [
  {
    label: '中奖记录ID',
    prop: 'id',
  },
  {
    label: '活动ID',
    prop: 'activityId',
  },
  {
    label: '活动名称',
    prop: 'activityName',
  },
  {
    label: '获奖人UID',
    prop: 'uid',
  },
  {
    label: '获奖人类型',
    prop: 'userType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '1', text: '标记用户' }, { val: '2', text: '普通用户' }],
  },
  {
    label: '当前机会剩余数',
    prop: 'retainChance',
  },
  {
    label: '奖励类型',
    prop: 'prizeType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '1', text: '币币奖品' }, { val: '2', text: '体验金奖励' }, { val: '3', text: '其他' }],
  },
  {
    label: '奖励名称',
    prop: 'prizeName',
  },
  {
    label: '内容描述',
    prop: 'prizeDescribe',
  },
  {
    label: '获奖时间',
    prop: 'lotteryTime',
    type: 'time',
  },
  {
    label: '使用状态',
    prop: 'useStatus',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: '0', text: '未使用' }, { val: '1', text: '已使用' }, { val: '2', text: '已过期' }, { val: '3', text: '使用中' }],
  },
  {
    label: '使用时间',
    prop: 'useTime',
    type: 'time',
  },
  {
    label: '失效时间',
    prop: 'invalidTime',
    type: 'time',
  },
];

const lotteryRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '活动ID',
    prop: 'activityId',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'onlyNumber',
    label: '获奖人UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  // {
  //   type: 'select',
  //   label: '发奖状态',
  //   prop: 'status',
  //   value: '',
  //   list: [{ label: '待发放', value: 0 }, { label: '已发奖', value: 1 }],
  //   // { val: '0', text: '待发放' }, { val: '1', text: '已发放' }, { val: '2', text: '不发放' }
  // },
  {
    type: 'select',
    label: '使用状态',
    prop: 'useStatus',
    value: '',
    list: [{ label: '未使用', value: 0 }, { label: '已使用', value: 1 }, { value: 2, label: '已过期' }, { value: 3, label: '使用中' }],
  },
  {
    type: 'text',
    label: '奖励名称',
    prop: 'prizeName',
    value: '',
    placeHolder: '请输入',
  },
];

const lotteryParamsCol = [
  {
    label: '奖品编号',
    prop: 'id',
  },
  {
    label: '奖励类型',
    prop: 'prizeType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: 1, text: '币种奖品' }, { val: 2, text: '体验金券奖品' }, { val: 3, text: '其他奖品' }],
  },
  {
    label: '奖励名称',
    prop: 'prizeName',
  },
  {
    label: '奖励logo',
    prop: 'prizeLogo',
    type: 'img',
  },
  {
    label: '奖励数量',
    prop: 'amount',
  },
  {
    label: '体验金编号',
    prop: 'relationExperienceId',
  },
  {
    label: '奖励内容',
    prop: 'prizeDescribe',
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
    width: 210,
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
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

const lotteryParamsColNoBtn = [
  {
    label: '奖品编号',
    prop: 'id',
  },
  {
    label: '奖励类型',
    prop: 'prizeType',
    type: 'filter',
    show_type: 'text',
    width: 150,
    filters: [{ val: 1, text: '币种奖品' }, { val: 2, text: '体验金券奖品' }, { val: 3, text: '其他奖品' }],
  },
  {
    label: '奖励名称',
    prop: 'prizeName',
  },
  {
    label: '奖励logo',
    prop: 'prizeLogo',
    type: 'img',
  },
  {
    label: '奖励数量',
    prop: 'amount',
  },
  {
    label: '体验金编号',
    prop: 'relationExperienceId',
  },
  {
    label: '奖励内容',
    prop: 'prizeDescribe',
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

const lotteryParamsConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  // {
  //   type: 'text',
  //   label: '支出UID',
  //   prop: 'uid',
  //   value: '',
  //   placeHolder: '请输入',
  // },
  {
    type: 'onlyNumber',
    label: '奖品编号',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },
];
export { lotteryListCol, lotteryListColNoBtn, lotteryListConfig, lotteryRecordCol, lotteryRecordColNoBtn, lotteryRecordConfig, lotteryParamsCol, lotteryParamsColNoBtn, lotteryParamsConfig };
