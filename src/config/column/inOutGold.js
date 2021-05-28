const inOutGoldInfoCol = [
  {
    label: 'UID',
    prop: 'uid',
  },

  {
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '币币入金',
    prop: 'coinIn',
  },
  {
    label: '法币入金',
    prop: 'otcIn',
  },
  {
    label: '合约入金',
    prop: 'contractIn',
  },
  {
    label: '币币出金',
    prop: 'coinOut',
  },
  {
    label: '法币出金',
    prop: 'otcOut',
  },
  {
    label: '合约出金',
    prop: 'contractOut',
  },
  {
    label: '合计',
    prop: 'totalInOut',
  },
];

const inOutGoldInfoConfig = [
  {
    type: 'onlyNumber',
    label: '用户UID查询',
    prop: 'uid',
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
];

const coinInOutGoldCol = [
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
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '出入金类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币入金', val: '1' }, { text: '币币出金', val: '2' }],
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '充币', val: '0' },
      { text: '法币划转至币币', val: '11' },
      { text: '锁仓自动释放', val: '19' },
      { text: '锁仓手动释放可用金额', val: '20' },
      { text: '返佣', val: '40' },
      { text: '普通用户手续费返佣', val: '101' },
      { text: '代理商手续费返佣', val: '102' },
      { text: '代理商团队长模式的返佣', val: '103' },
      { text: '特殊调账+', val: '60' },
      { text: '特殊调账-', val: '61' },
      { text: '标仓周奖励', val: '15' },
      { text: '标仓季度奖励', val: '16' },
      // { text: 'OTC划转至币币', val: '11O' },
      { text: '合约划转至币币', val: '51' },
      { text: '领取红包', val: '107' },
      { text: '过期红包退还金额', val: '108' },
      { text: '提币成功', val: '2' },
      { text: '币币交易手续费', val: '81' },
      { text: '币币划转至OTC', val: '10' },
      { text: '币币划转至合约', val: '50' },
      { text: '发送红包', val: '106' },
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

const coinInOutGoldConfig = [
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
    type: 'select',
    label: '出入金类型',
    prop: 'type',
    value: '',
    list: [{ label: '币币入金', value: '1' }, { label: '币币出金', value: '2' }],
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
      { label: '法币划转至币币', value: '11' },
      { label: '锁仓自动释放', value: '19' },
      { label: '锁仓手动释放可用金额', value: '20' },
      { label: '返佣', value: '40' },
      { label: '普通用户手续费返佣', value: '101' },
      { label: '代理商手续费返佣', value: '102' },
      { label: '代理商团队长模式的返佣', value: '103' },
      { label: '特殊调账+', value: '60' },
      { label: '特殊调账-', value: '61' },
      { label: '标仓周奖励', value: '15' },
      { label: '标仓季度奖励', value: '16' },
      // { label: 'OTC划转至币币', value: '11O' },
      { label: '合约划转至币币', value: '51' },
      { label: '领取红包', value: '107' },
      { label: '过期红包退还金额', value: '108' },
      { label: '提币成功', value: '2' },
      { label: '币币交易手续费', value: '81' },
      { label: '币币划转至OTC', value: '10' },
      { label: '币币划转至合约', value: '50' },
      { label: '发送红包', value: '106' },
    ],
  },
];

const fiatCoinInOutGoldCol = [
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
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '出入金类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '法币入金', val: '1' }, { text: '法币出金', val: '2' }],
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '法币买入', val: '36' },
      { text: '申诉买家赢，法币买入', val: '37' },
      { text: '法币交易返佣', val: '40' },
      { text: '法币卖出', val: '32' },
      { text: '法币交易手续费', val: '82' },
      { text: '划出至币币', val: '11' },
      { text: '划出至合约', val: '52' },
      { text: '币币划入', val: '10' },
      { text: '合约划入', val: '53' },
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

const fiatCoinInOutGoldConfig = [
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
    type: 'select_labelBold',
    label: '出入金类型',
    prop: 'type',
    value: '',
    list: [{ label: '法币入金', value: '1' }, { label: '法币出金', value: '2' }],
  },

  {
    type: 'select_labelBold',
    label: '类型',
    prop: 'optType',
    value: '',
    list: [
      { label: '法币买入', value: '36' },
      { label: '申诉买家赢，法币买入', value: '37' },
      { label: '法币交易返佣', value: '40' },
      { label: '法币卖出', value: '32' },
      { label: '法币交易手续费', value: '82' },
      { label: '划出至币币', value: '11' },
      { label: '划出至合约', value: '52' },
      { label: '币币划入', value: '10' },
      { label: '合约划入', value: '53' },
    ],
  },

  {
    type: 'select',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: [],
  },
];

const contractInOutGoldCol = [
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
    label: '币种',
    prop: 'coinName',
  },
  {
    label: '出入金类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '合约入金', val: '1' }, { text: '合约出金', val: '2' }],
  },
  {
    label: '类型',
    prop: 'optType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '币币划入合约', val: '50' }, { text: '法币划入合约', val: '52' }, { text: '合约交易手续费', val: '96' }, { text: '合约交易资金费率', val: '94' }, { text: '划出至币币', val: '51' }, { text: '划出至法币', val: '53' }],
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

const contractInOutGoldConfig = [
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
    type: 'select',
    label: '出入金类型',
    prop: 'type',
    value: '',
    list: [{ label: '合约入金', value: '1' }, { label: '合约出金', value: '2' }],
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
    list: [{ label: '币币划入合约', value: '50' }, { label: '法币划入合约', value: '52' }, { label: '合约交易手续费', value: '96' }, { label: '合约交易资金费率', value: '94' }, { label: '划出至币币', value: '51' }, { label: '划出至法币', value: '53' }],
  },
];

export { inOutGoldInfoCol, inOutGoldInfoConfig, coinInOutGoldCol, coinInOutGoldConfig, fiatCoinInOutGoldCol, fiatCoinInOutGoldConfig, contractInOutGoldCol, contractInOutGoldConfig };
