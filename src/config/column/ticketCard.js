const ticketCardListCol = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '点卡币种',
    prop: 'coinName',
  },
  {
    label: '点卡数量',
    prop: 'totalAmount',
  },
  {
    label: '可用数量',
    prop: 'count',
  },
  {
    label: '冻结数量',
    prop: 'usedAmount',
  },
  {
    label: '已用数量',
    prop: 'returnAmount',
  },
  {
    label: '回收数量',
    prop: 'returnAmount1',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '点卡回收',
        fn: 'recycle',
        type: 'text',
        alias: 'recycle',
      },
    ],
  },
];

const ticketCardListNoBtn = [
  {
    label: '用户UID',
    prop: 'uid',
  },
  {
    label: '点卡币种',
    prop: 'coinName',
  },
  {
    label: '点卡数量',
    prop: 'totalAmount',
  },
  {
    label: '可用数量',
    prop: 'count',
  },
  {
    label: '冻结数量',
    prop: 'usedAmount',
  },
  {
    label: '已用数量',
    prop: 'returnAmount',
  },
  {
    label: '回收数量',
    prop: 'returnAmount',
  },
];

const ticketCardListConfig = [
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
];

const presenterListCol = [
  {
    label: '序号ID',
    prop: 'uid',
  },
  {
    label: 'UID',
    prop: 'coinName',
  },
  {
    label: '点卡名称',
    prop: 'totalAmount',
  },
  {
    label: '点卡币种',
    prop: 'count',
  },
  {
    label: '点卡数量',
    prop: 'usedAmount',
  },
  {
    label: '赠送时间',
    prop: 'returnAmount',
  },
  {
    label: '订单号',
    prop: 'returnAmount1',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 160,
    btnGroup: [
      {
        label: '查看详情',
        fn: 'info',
        type: 'text',
        alias: 'info',
      },
      {
        label: '使用记录',
        fn: 'use',
        type: 'text',
        alias: 'use',
      },
    ],
  },
];
const presenterListNoBtn = [
  {
    label: '序号ID',
    prop: 'uid',
  },
  {
    label: 'UID',
    prop: 'coinName',
  },
  {
    label: '点卡名称',
    prop: 'totalAmount',
  },
  {
    label: '点卡币种',
    prop: 'count',
  },
  {
    label: '点卡数量',
    prop: 'usedAmount',
  },
  {
    label: '赠送时间',
    prop: 'returnAmount',
  },
  {
    label: '订单号',
    prop: 'returnAmount1',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 160,
    btnGroup: [
      {
        label: '查看详情',
        fn: 'info',
        type: 'text',
        alias: 'info',
      },
      {
        label: '使用记录',
        fn: 'use',
        type: 'text',
        alias: 'use',
      },
    ],
  },
];

const presenterListConfig = [
  {
    type: 'date_rank',
    label: '创建时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'onlyNumber',
    label: '序号ID',
    prop: 'id',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '点卡名称',
    prop: 'id1',
    value: '',
    placeHolder: '请输入',
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
    label: '订单号',
    prop: 'uid1',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '点卡币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const ticketCardUseListCol = [
  {
    label: '商品序号ID',
    prop: 'uid',
  },
  {
    label: 'UID',
    prop: 'coinName',
  },
  {
    label: '点卡名称',
    prop: 'totalAmount',
  },
  {
    label: '数量',
    prop: 'usedAmount',
  },

  

  {
    label: '类型',
    prop: 'receiveStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '赠送点卡',
        val: 0,
      },
      {
        text: '抵扣币币交易手续费',
        val: 1,
      },
      {
        text: '抵扣合约交易手续费',
        val: 2,
      },
    ],
  },

  {
    label: '时间',
    prop: 'returnAmount',
  },
  {
    label: '交易订单号',
    prop: 'returnAmount1',
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 100,
    btnGroup: [
      {
        label: '查看',
        fn: 'info',
        type: 'text',
        alias: 'info',
      },
    ],
  },
];

const ticketCardUseListNoBtn = [
    {
      label: '商品序号ID',
      prop: 'uid',
    },
    {
      label: 'UID',
      prop: 'coinName',
    },
    {
      label: '点卡名称',
      prop: 'totalAmount',
    },
    {
      label: '数量',
      prop: 'usedAmount',
    },
  
    
  
    {
      label: '类型',
      prop: 'receiveStatus',
      type: 'filter',
      show_type: 'text',
      filters: [
        {
          text: '赠送点卡',
          val: 0,
        },
        {
          text: '抵扣币币交易手续费',
          val: 1,
        },
        {
          text: '抵扣合约交易手续费',
          val: 2,
        },
      ],
    },
  
    {
      label: '时间',
      prop: 'returnAmount',
    },
    {
      label: '交易订单号',
      prop: 'returnAmount1',
    },
  
    {
      label: '操作',
      prop: 'action',
      type: 'action',
      width: 160,
      btnGroup: [
        {
          label: '查看详情',
          fn: 'info',
          type: 'text',
          alias: 'info',
        },
      ],
    },
  ];


const ticketCardUseListConfig = [
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
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
  },
  {
    type: 'text',
    label: '点卡名称',
    prop: 'id1',
    value: '',
    placeHolder: '请输入',
  },

  {
    type: 'select',
    label: '类型',
    prop: 'receiveStatus1',
    value: '',
    list: [
      {
        label: '赠送点卡',
        value: 0,
      },
      {
        label: '抵扣币币交易手续费',
        value: 1,
      },
      {
        label: '抵扣合约交易手续费',
        value: 2,
      },
    ],
  },
  {
    type: 'select',
    label: '状态',
    prop: 'receiveStatus',
    value: '',
    list: [
      {
        label: '已完成',
        value: 0,
      },
    ],
  },

  {
    type: 'onlyNumber',
    label: '交易订单号',
    prop: 'uid1',
    value: '',
    placeHolder: '请输入',
  },
];
export { ticketCardListCol, ticketCardListNoBtn, ticketCardListConfig, presenterListCol, presenterListNoBtn, presenterListConfig, ticketCardUseListCol, ticketCardUseListNoBtn, ticketCardUseListConfig };
