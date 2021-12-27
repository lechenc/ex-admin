/*
 * @Author: your name
 * @Date: 2020-05-12 14:35:53
 * @LastEditTime: 2020-09-28 10:54:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\config\column\app.js
 */
//  app管理 版本管理
const chargeStatisticCol = [
  {
    label: '币种',
    prop: 'coinName'
  },
  {
    label: '法币返佣手续费',
    prop: 'platformEarnings'
  },
  {
    label: '法币手续费',
    prop: 'otcFee'
  },
  {
    label: '币币交易手续费',
    prop: 'tradFee'
  },
  {
    label: '提币手续费',
    prop: 'withdrawFee'
  },
  {
    label: '划转手续费',
    prop: 'transferFee'
  },
  {
    label: '手续费总计',
    prop: 'totalFee'
  },
  {
    label: '所属时间（天）',
    prop: 'statisticalTime',
    type: 'time',
    tag: 'noHour'
  }
]

const chargeStatisticNoBtn = []

const chargeStatisticConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinName',
    value: '',
    list: []
  }
]

const exchangeStatisticCol = [
  {
    label: '交易对',
    prop: 'coinMarket'
  },
  {
    label: '交易额',
    prop: 'turnover'
  },
  {
    label: '均价',
    prop: 'averagePrice'
  },
  {
    label: '时间',
    prop: 'statisticalTime',
    type: 'time',
    tag: 'noHour'
  }
]

const exchangeStatisticNoBtn = []

const exchangeStatisticConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'select',
    label: '交易对',
    prop: 'coinMarket',
    value: '',
    list: []
  }
]

const assetsCol1 = [
  {
    label: '币种',
    prop: 'coinName'
  },

  {
    label: '币币总资产',
    prop: 'sumAmount'
  },
  {
    label: '币币可用资产',
    prop: 'amount'
  },
  {
    label: '币币冻结资产',
    prop: 'frozenAmount'
  },
  {
    label: '法币总资产',
    prop: 'otcSumAmount'
  },
  {
    label: '法币可用资产',
    prop: 'otcAmount'
  },
  {
    label: '法币冻结资产',
    prop: 'otcFrozenAmount'
  }
  // {
  //   label: '总资产',
  //   prop: 'allAmount'
  // },
  // {
  //   label: '币对',
  //   prop: 'comparison'
  // },
  // {
  //   label: '合约总资产',
  //   prop: 'contractAmount'
  // },
  // {
  //   label: '委托占用保证金金额（USDT）',
  //   prop: 'entrustGuarantee'
  //   // width: 130
  // },
  // {
  //   label: '多仓占用保证金金额（USDT）',
  //   prop: 'LongPositionsGuarantee'
  // },
  // {
  //   label: '空仓占用保证金金额（USDT）',
  //   prop: 'emptyPositionsGuarantee'
  // }
]

const assetsCol2 = [
  {
    label: '币种',
    prop: 'coinName'
  },
  {
    label: '统计前金额',
    prop: 'beforeAmount'
  },
  {
    label: '金额',
    prop: 'amount'
  },
  {
    label: '统计后金额',
    prop: 'afterAmount'
  },
  {
    label: '创建日期',
    prop: 'createTime'
  }
  // {
  //   label: '总资产',
  //   prop: 'allAmount'
  // },
  // {
  //   label: '币对',
  //   prop: 'comparison'
  // },
  // {
  //   label: '合约总资产',
  //   prop: 'contractAmount'
  // },
  // {
  //   label: '委托占用保证金金额（USDT）',
  //   prop: 'entrustGuarantee'
  // },
  // {
  //   label: '多仓占用保证金金额（USDT）',
  //   prop: 'LongPositionsGuarantee'
  // },
  // {
  //   label: '空仓占用保证金金额（USDT）',
  //   prop: 'emptyPositionsGuarantee'
  // }
]

const assetsColNoBtn = []

const assetsConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'select_search',
    label: '币种',
    prop: 'coinId',
    value: '',
    list: []
  }
]

export {
  chargeStatisticCol,
  chargeStatisticNoBtn,
  chargeStatisticConfig,
  exchangeStatisticCol,
  exchangeStatisticNoBtn,
  exchangeStatisticConfig,
  assetsCol1,
  assetsCol2,
  assetsColNoBtn,
  assetsConfig
}
