const redPacketListCol = [
  {
    label: '红包序号ID',
    prop: 'id',
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
    label: '币种数量',
    prop: 'totalAmount',
  },
  {
    label: '红包个数',
    prop: 'count',
  },
  {
    label: '领取数量',
    prop: 'usedAmount',
  },
  {
    label: '退回数量',
    prop: 'returnAmount',
  },
  {
    label: '红包领取状态',
    prop: 'receiveStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '未领取',
        val: 0,
      },
      {
        text: '部分领取',
        val: 1,
      },
      {
        text: '全部领取',
        val: 2,
      },
    ],
  },
  {
    label: '红包生效状态',
    prop: 'invalidStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '生效中',
        val: 0,
      },
      {
        text: '已失效',
        val: 1,
      },
    ],
  },
  {
    label: '红包创建时间',
    prop: 'createTime',
  },
  {
    label: '红包失效时间',
    prop: 'invalidTime',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '查看领取详情',
        fn: 'info',
        type: 'text',
        alias: 'info',
      },
    ],
  },
];
const redPacketListNoBtn = [
  {
    label: '红包序号ID',
    prop: 'id',
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
    label: '币种数量',
    prop: 'totalAmount',
  },
  {
    label: '红包个数',
    prop: 'count',
  },
  {
    label: '领取数量',
    prop: 'usedAmount',
  },
  {
    label: '退回数量',
    prop: 'returnAmount',
  },
  {
    label: '红包领取状态',
    prop: 'receiveStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '未领取',
        val: 0,
      },
      {
        text: '部分领取',
        val: 1,
      },
      {
        text: '全部领取',
        val: 2,
      },
    ],
  },
  {
    label: '红包生效状态',
    prop: 'invalidStatus',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '生效中',
        val: 0,
      },
      {
        text: '已失效',
        val: 1,
      },
    ],
  },
  {
    label: '红包创建时间',
    prop: 'createTime',
  },
  {
    label: '红包失效时间',
    prop: 'invalidTime',
  },
];
const redPacketListTableCol = [
  {
    label: '领取用户手机号',
    prop: 'receivePhone',
  },
  {
    label: '领取用户邮箱',
    prop: 'receiveEmail',
  },
  {
    label: '领取用户UID',
    prop: 'uid',
  },
  {
    label: '领取币种',
    prop: 'coinName',
  },
  {
    label: '领取数量',
    prop: 'amount',
  },
  {
    label: '领取时间',
    prop: 'createTime',
  },
];

const redPacketListConfig = [
  {
    type: 'date_rank',
    label: '创建时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },

  {
    type: 'onlyNumber',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select_search',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },

  {
    type: 'select',
    label: '领取状态',
    prop: 'receiveStatus',
    value: '',
    list: [
      // 0-未领取 1-部分领取 2全部领取
      {
        label: '未领取',
        value: 0,
      },
      {
        label: '部分领取',
        value: 1,
      },
      {
        label: '全部领取',
        value: 2,
      },
    ],
  },

  {
    type: 'select',
    label: '红包状态',
    prop: 'invalidStatus',
    value: '',
    list: [
      // 0-生效中 1-已失效
      {
        label: '生效中',
        value: 0,
      },
      {
        label: '已失效',
        value: 1,
      },
    ],
  },
];

const redPacketCoinCol = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '红包最小额',
    prop: 'minAmount',
  },
  {
    label: '红包最大额',
    prop: 'maxAmount',
  },
  {
    label: '固定限制额',
    prop: 'fixAmount',
  },

  {
    label: '币种启用开关',
    prop: 'status',
    type: 'switch',
    fn: 'status',
    alias: 'trstatus',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
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

const redPacketCoinNoBtn = [
  {
    label: '币种名称',
    prop: 'coinName',
  },
  {
    label: '红包最小额',
    prop: 'minAmount',
  },
  {
    label: '红包最大额',
    prop: 'maxAmount',
  },
  {
    label: '固定限制额',
    prop: 'fixAmount',
  },
];

const redPacketCoinConfig = [
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const redPacketSubjectCol = [
  {
    label: '主题名称',
    prop: 'themeName',
  },
  {
    label: '主题文案',
    prop: 'themeContent',
  },
  {
    label: '主题图片',
    prop: 'themeImgUrl',
    type: 'img',
  },

  {
    label: '主题启用开关',
    prop: 'themeStatus',
    type: 'switch',
    fn: 'status',
    alias: 'trstatus',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
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

const redPacketSubjectNoBtn = [
  {
    label: '主题名称',
    prop: 'themeName',
  },
  {
    label: '主题文案',
    prop: 'themeContent',
  },
  {
    label: '主题图片',
    prop: 'themeImgUrl',
    type: 'img',
  },

  
];

const redPacketSubjectConfig = [
  {
    type: 'text',
    label: '主题名称',
    prop: 'themeName',
    value: '',
    placeHolder: '请输入',
  },
];

export { redPacketListCol, redPacketListTableCol, redPacketListNoBtn, redPacketListConfig, redPacketCoinCol, redPacketCoinNoBtn, redPacketCoinConfig, redPacketSubjectCol,redPacketSubjectNoBtn, redPacketSubjectConfig };
