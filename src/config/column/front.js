/*
 * @Author: cws
 * @Date: 2020-04-08 15:58:33
 * @LastEditTime: 2022-01-25 14:11:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\financial.js
 */

import Vue from 'vue'
let vm = new Vue()

// 前台管理 -- 公告管理 -- table
const noticeCol = [
  {
    label: '中文标题',
    prop: 'title'
  },
  {
    label: '英文标题',
    prop: 'englishTitle'
  },
  {
    label: '中文链接',
    prop: 'url'
  },
  {
    label: '英文链接',
    prop: 'englishLink'
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '编辑',
        fn: 'editRow',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

// 前台管理 -- 公告管理 -- table
const noticeColNoBtn = [
  {
    label: '中文标题',
    prop: 'title'
  },
  {
    label: '英文标题',
    prop: 'englishTitle'
  },
  {
    label: '中文链接',
    prop: 'url'
  },
  {
    label: '英文链接',
    prop: 'englishLink'
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
]

// 前台管理 -- 公告管理 -- 搜索栏
const noticeConfig = [
  {
    type: 'text',
    label: '标题',
    prop: 'title'
  }
]

// 前台管理 -- 公告管理 -- 详情
const noticeDetailCol = [
  {
    label: '币种',
    prop: 'symbol'
  },
  {
    label: '持币数量',
    prop: 'amount'
  },
  {
    label: '收币地址',
    prop: 'address'
  }
]

// 前台管理 -- 弹窗公告 -- table
const popupNoticeCol = [
  {
    label: '中文标题',
    prop: 'title'
  },
  {
    label: '中文内容',
    prop: 'content'
  },
  {
    label: '英文标题',
    prop: 'englishTitle'
  },
  {
    label: '英文内容',
    prop: 'englishContent'
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '编辑',
        fn: 'editRow',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

// 前台管理 -- 弹窗公告 -- table
const popupNoticeColNoBtn = [
  {
    label: '中文标题',
    prop: 'title'
  },
  {
    label: '中文内容',
    prop: 'content'
  },
  {
    label: '英文标题',
    prop: 'englishTitle'
  },
  {
    label: '英文内容',
    prop: 'englishContent'
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
]

// 前台管理 -- 弹窗公告 -- 搜索栏
const popupNoticeConfig = [
  {
    type: 'text',
    label: '标题',
    prop: 'title'
  },
  {
    type: 'select',
    label: '公告类型',
    prop: 'type',
    value: 1,
    list: [
      {
        label: '普通弹窗公告',
        value: 1
      },
      {
        label: '维护公告',
        value: 2
      }
    ],
    isClear: true
  }
]

// 前台管理 -- banner管理 -- table
const bannerCol = [
  {
    label: '名称',
    prop: 'bannerName',
    width: '200'
  },
  {
    label: '代理是否可见',
    prop: 'isProxyVisible',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: true
      },
      {
        text: '否',
        val: false
      }
    ]
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img'
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img'
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: 'ios',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'pc,h5',
        val: 3
      }
    ]
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '生效时间',
    prop: 'effectTime',
    width: '200'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: '200'
  },
  {
    label: '上架',
    prop: 'bannerStatus',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 180,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delete',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const bannerColNoBtn = [
  {
    label: '名称',
    prop: 'bannerName',
    width: '200'
  },
  {
    label: '代理是否可见',
    prop: 'isProxyVisible',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: true
      },
      {
        text: '否',
        val: false
      }
    ]
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img'
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img'
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: 'ios',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'pc,h5',
        val: 3
      }
    ]
  },
  {
    label: '排序',
    prop: 'weight'
  },
  {
    label: '生效时间',
    prop: 'effectTime',
    width: '200'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: '200'
  }
]

// 前台管理 -- banner管理 -- 搜索栏
const bannerConfig = [
  {
    label: '标题',
    prop: 'bannerName',
    type: 'text'
  }
]

// 前台管理 -- 邀请海报管理 -- table
const posterCol = [
  {
    label: '类型',
    prop: 'bannerType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '普通海报',
        val: 1
      },
      {
        text: '会员海报',
        val: 2
      }
    ]
  },
  {
    label: '名称',
    prop: 'bannerName',
    width: '200'
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img'
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img'
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: 'ios',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'pc,h5',
        val: 3
      }
    ]
  },
  {
    label: '排序',
    prop: 'weight'
  },

  {
    label: '创建时间',
    prop: 'createTime',
    width: '200'
  },
  {
    label: '更新时间',
    prop: 'effectTime',
    width: '200'
  },
  {
    label: '上架',
    prop: 'bannerStatus',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 180,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delete',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

// 前台管理 -- 邀请海报管理无权限 -- table
const posterColNoBtn = [
  {
    label: '类型',
    prop: 'bannerType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '普通海报',
        val: 1
      },
      {
        text: '会员海报',
        val: 2
      }
    ]
  },
  {
    label: '名称',
    prop: 'bannerName',
    width: '200'
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img'
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img'
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: 'ios',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'pc,h5',
        val: 3
      }
    ]
  },
  {
    label: '排序',
    prop: 'weight'
  },

  {
    label: '创建时间',
    prop: 'createTime',
    width: '200'
  },
  {
    label: '更新时间',
    prop: 'effectTime',
    width: '200'
  }
]

// 前台管理 -- 邀请海报管理 -- 搜索栏
const posterConfig = [
  {
    label: '名称',
    prop: 'bannerName',
    type: 'text'
  }
]

// 前台管理 -- 帮助中心 -- 搜索栏
const helpConfig = [
  {
    label: '标题',
    prop: 'chineseTitle',
    type: 'text'
  }
]

// 前台管理 -- 帮助中心
const helpCol = [
  {
    label: '栏目名称',
    prop: 'chineseSubjectName'
  },
  {
    label: '中文标题',
    prop: 'chineseTitle'
  },
  {
    label: '英文标题',
    prop: 'englishTitle'
  },
  {
    label: '中文链接',
    prop: 'url'
  },
  {
    label: '英文链接',
    prop: 'englishLink'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '编辑',
        fn: 'editRow',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const helpColNoBtn = [
  {
    label: 'UID',
    prop: 'uid',
    width: 100
  },
  {
    label: '姓名',
    prop: 'coinName'
  },
  {
    label: '首日充值金额（USDT）',
    prop: 'chainName'
  },
  {
    label: '首充时间',
    prop: 'amount',
    width: 200
  },
  {
    label: '奖励数量（USDT）',
    prop: 'fee'
  },
  {
    label: '用户累计开仓交易额USDT',
    prop: 'realAmount',
    width: 200
  },
  {
    label: '奖励到账金额USDT',
    prop: 'toAddress',
    width: 140
  }
]
// 运营管理 -- 运营活动
const activityCol = [
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '姓名',
    prop: 'username'
  },
  {
    label: '首日充值金额（USDT）',
    prop: 'netAmount'
  },
  {
    label: '首充时间',
    prop: 'firstRechargeTime'
    // width: 200
  },
  {
    label: '奖励数量（USDT）',
    prop: 'reward'
  },
  {
    label: '用户累计开仓交易额USDT',
    prop: 'cumulativeTradeAmount'
    // width: 200
  },
  {
    label: '奖励到账金额USDT',
    prop: 'rewardToAccount'
    // width: 200
  }
]

// 运营管理 -- 运营活动
const activityColNoBtn = [
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '姓名',
    prop: 'username'
  },
  {
    label: '首日充值金额（USDT）',
    prop: 'netAmount'
  },
  {
    label: '首充时间',
    prop: 'firstRechargeTime'
    // width: 200
  },
  {
    label: '奖励数量（USDT）',
    prop: 'reward'
  },
  {
    label: '用户累计开仓交易额USDT',
    prop: 'cumulativeTradeAmount'
    // width: 200
  },
  {
    label: '奖励到账金额USDT',
    prop: 'rewardToAccount'
    // width: 200
  }
]

// 运营管理 -- 运营活动 搜索
const activityConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'text',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    subType: 'uid'
  },
  {
    type: 'select',
    label: '奖励数量',
    prop: 'reward',
    value: '',
    multiple: true,
    list: [
      {
        label: 10,
        value: 10
      },
      {
        label: 30,
        value: 30
      },
      {
        label: 50,
        value: 50
      },
      {
        label: 100,
        value: 100
      },
      {
        label: 300,
        value: 300
      },
      {
        label: 500,
        value: 500
      },
      {
        label: 1000,
        value: 1000
      },
      {
        label: 2000,
        value: 2000
      }
    ]
  },
  {
    type: 'select',
    label: '到账奖励数量',
    prop: 'rewardToAccount',
    value: '',
    multiple: true,
    list: [
      {
        label: 10,
        value: 10
      },
      {
        label: 30,
        value: 30
      },
      {
        label: 50,
        value: 50
      },
      {
        label: 100,
        value: 100
      },
      {
        label: 300,
        value: 300
      },
      {
        label: 500,
        value: 500
      },
      {
        label: 1000,
        value: 1000
      },
      {
        label: 2000,
        value: 2000
      }
    ]
  }
]

// 前台管理 -- 栏目 -- 搜索栏
const columnConfig = [
  {
    label: '标题',
    prop: 'chineseSubjectName',
    type: 'text'
  }
]

// 前台管理 -- 栏目
const columnCol = [
  {
    label: '栏目中文名称',
    prop: 'chineseSubjectName'
  },
  {
    label: '栏目英文名称',
    prop: 'englishSubjectName'
  },
  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '编辑',
        fn: 'editRow',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const columnColNoBtn = [
  {
    label: '栏目中文名称',
    prop: 'chineseSubjectName'
  },
  {
    label: '栏目英文名称',
    prop: 'englishSubjectName'
  },
  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
]

// 运营管理 -- 单点登录白名单管理
const ssoWhiteListCol = [
  {
    label: '单点类型',
    prop: 'ssoType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: 'IOS',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'PC',
        val: 3
      }
    ]
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  },

  {
    label: '开关',
    prop: 'status',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon'
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 140,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit'
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del'
      }
    ]
  }
]

const ssoWhiteListColNoBtn = [
  {
    label: '单点类型',
    prop: 'ssoType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: 'IOS',
        val: 1
      },
      {
        text: '安卓',
        val: 2
      },
      {
        text: 'PC',
        val: 3
      }
    ]
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  }
]

// 运营管理/短信发送记录
const msgSendRecordCol = [
  {
    label: '发送平台',
    prop: 'platformName'
  },

  {
    label: '发送类型',
    prop: 'messageType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: '短信',
        val: 1
      },
      {
        text: '邮件',
        val: 2
      }
    ]
  },

  {
    label: '用户UID',
    prop: 'uid'
  },

  {
    label: '区号',
    prop: 'phoneAreaCode',
    type: 'noneShowValue',
    showValue: '无'
  },
  {
    label: '手机号码',
    prop: 'phone',
    type: 'noneShowValue',
    showValue: '无',
    width: '120'
  },
  {
    label: '邮箱号码',
    prop: 'email',
    type: 'noneShowValue',
    showValue: '无',
    width: '150'
  },

  {
    label: '发送时间',
    prop: 'createTime'
  },
  {
    label: '回执时间',
    prop: 'syncTime'
  },
  {
    label: '回执状态',
    prop: 'syncResult',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: '成功',
        val: true
      },
      {
        text: '失败',
        val: false
      }
    ]
  },
  {
    label: '发送内容',
    prop: 'content',
    type: 'textType',
    width: '450',
    alias: 'content'
  }
]

// 运营管理/短信发送记录
const msgSendRecordColNoBtn = [
  {
    label: '发送平台',
    prop: 'platformName'
  },

  {
    label: '发送类型',
    prop: 'messageType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: '短信',
        val: 1
      },
      {
        text: '邮件',
        val: 2
      }
    ]
  },

  {
    label: '用户UID',
    prop: 'uid'
  },

  {
    label: '区号',
    prop: 'phoneAreaCode',
    type: 'noneShowValue',
    showValue: '无'
  },
  {
    label: '手机号码',
    prop: 'phone',
    type: 'noneShowValue',
    showValue: '无',
    width: '120'
  },
  {
    label: '邮箱号码',
    prop: 'email',
    type: 'noneShowValue',
    showValue: '无',
    width: '150'
  },

  {
    label: '发送时间',
    prop: 'createTime'
  },
  {
    label: '回执时间',
    prop: 'syncTime'
  },
  {
    label: '回执状态',
    prop: 'syncResult',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [
      {
        text: '成功',
        val: true
      },
      {
        text: '失败',
        val: false
      }
    ]
  }
]

// 运营管理/短信发送记录
const msgSendRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'onlyNumber',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入'
  },
  {
    type: 'select',
    label: '发送类型',
    prop: 'messageType',
    value: 1,
    // ： 1短信 2邮件
    list: [
      {
        label: '短信',
        value: 1
      },
      {
        label: '邮件',
        value: 2
      }
    ]
  },
  {
    type: 'text',
    label: '发送号码',
    prop: 'keyWord',
    value: '',
    placeHolder: '请输入手机号或邮箱号码'
  },
  {
    type: 'select',
    label: '回执状态',
    prop: 'syncResult',
    value: '',
    // ： 1短信 2邮件
    list: [
      {
        label: '成功',
        value: true
      },
      {
        label: '失败',
        value: false
      }
    ]
  },
  {
    type: 'select',
    label: '发送平台',
    prop: 'platform',
    value: '',
    list: vm.$msgTypeArr
  }
]

// 运营管理 -- 运营活动二期
const activityPhaseTwoCol = [
  {
    label: 'UID',
    prop: 'uid'
  },
  {
    label: '累计充值金额',
    prop: 'inAmount'
  },
  {
    label: '累计提币金额',
    prop: 'outAmount'
  },
  {
    label: '累计净入金',
    prop: 'netAmount'
  },
  {
    label: '累计开仓交易额',
    prop: 'cumulativeTradeAmount'
  },
  {
    label: '应得奖励数量',
    prop: 'reward'
  },
  {
    label: '实际到账奖励数量',
    prop: 'rewardToAccount'
  },
  {
    label: '实名状态',
    prop: 'userVerifiedStatus',
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '高级待审核', val: 0, type: 'info' },
      { text: '初级认证成功', val: 1, type: 'success' },
      { text: '高级认证失败', val: 2, type: 'warning' },
      { text: '未认证', val: 3, type: 'primary' },
      { text: '高级认证成功', val: 4, type: 'success' }
    ]
  },
  {
    label: '用户违规标记',
    prop: 'isViolation',
    type: 'switch',
    fn: 'trsignBtn',
    alias: 'trsignBtn',
    width: '150'
  }
]

// 运营管理 -- 运营活动二期  搜索
const activityPhaseTwoConfig = [
  {
    type: 'onlyNumber',
    label: 'UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入',
    lengthLimited: 'uid', // 长度限制
    digits: '9' // 长度限制
  },
  {
    type: 'select',
    label: '用户违规标记',
    prop: 'isViolation',
    value: '',
    list: [
      { label: '全部', value: '' },
      { label: '是', value: true },
      { label: '否', value: false }
    ]
  },
  {
    type: 'select',
    label: '实名状态',
    prop: 'userVerifiedStatus',
    value: '',
    list: [
      { label: '未认证', value: 3 },
      { label: '初级认证成功', value: 1 },
      { label: '高级待审核', value: 0 },
      { label: '高级认证失败', value: 2 },
      { label: '高级认证成功', value: 4 }
    ]
  }
]

const springFestivalMysteryBoxCol = [
  {
    label: '盲盒ID',
    prop: 'boxId'
  },
  
  {
    label: '盲盒种类',
    prop: 'boxType',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '邀新充值盲盒',
        val: 0
      },
      {
        text: '邀新交易盲盒',
        val: 1
      },
      {
        text: '充值盲盒',
        val: 2
      },
      {
        text: '幸运盲盒',
        val: 3
      },
      {
        text: '交易盲盒',
        val: 4
      },
      {
        text: '惊喜盲盒',
        val: 5
      }
    ]
  },
  {
    label: '用户UID',
    prop: 'uid'
  },
  {
    label: '盲盒获取方式',
    prop: 'isManual',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '系统发放',
        val: 0
      },
      {
        text: '手动发放',
        val: 1
      }
    ]
  },
  {
    label: '盲盒状态',
    prop: 'isEnable',
    width: 100,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '已开启',
        val: 1
      },
      {
        text: '未开启',
        val: 0
      }
    ]
  },
  {
    label: '内含币种',
    prop: 'tokenSymbol'
  },
  {
    label: '币数量',
    prop: 'tokenAmount'
  },
  {
    label: '等U价值',
    prop: 'usdtAmount'
  },
  {
    label: '盲盒发放时间',
    prop: 'createTime'
  },

  {
    label: '盲盒开启时间',
    prop: 'openTime'
  },
  {
    label: '盲盒过期时间',
    prop: 'effectiveTime'
  },

  {
    label: '备注',
    prop: 'manualRemarks'
  }
]

const springFestivalMysteryBoxConfig = [
  {
    type: 'date_rank',
    label: '盲盒开启时间',
    prop: 'enableTimeS',
    prop2: 'enableTimeE',
    value: ''
  },

  {
    type: 'date_rank',
    label: '盲盒发放时间',
    prop: 'createTimeS',
    prop2: 'createTimeE',
    value: ''
  },

  {
    type: 'select',
    label: '盲盒种类',
    prop: 'boxType',
    value: '',
    list: [
      {
        label: '邀新充值盲盒',
        value: 0
      },
      {
        label: '邀新交易盲盒',
        value: 1
      },
      {
        label: '充值盲盒',
        value: 2
      },
      {
        label: '幸运盲盒',
        value: 3
      },
      {
        label: '交易盲盒',
        value: 4
      },
      {
        label: '惊喜盲盒',
        value: 5
      }
    ]
  },
  {
    type: 'select',
    label: '等U价值',
    prop: 'usdtAmount',
    value: '',
    list: []
  },

  {
    type: 'select',
    label: '盲盒开启状态',
    prop: 'isEnable',
    value: '',
    list: [
      {
        label: '未开启',
        value: 0
      },
      {
        label: '已开启',
        value: 1
      }
    ]
  },

  {
    type: 'select',
    label: '盲盒有效状态',
    prop: 'isEffective',
    value: '',
    list: [
      {
        label: '有效',
        value: 0
      },
      {
        label: '失效',
        value: 1
      }
    ]
  },

  {
    type: 'onlyNumber',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入'
  },

  {
    type: 'onlyNumber',
    label: '盲盒ID',
    prop: 'boxId',
    value: '',
    placeHolder: '请输入'
  },

  {
    type: 'select',
    label: '盲盒获取方式',
    prop: 'isManual',
    value: '',
    list: [
      {
        label: '系统发放',
        value: 0
      },
      {
        label: '手动发放',
        value: 1
      }
    ]
  }
]

const springFestivalActivityUsersCol = [
  {
    label: '用户UID',
    prop: 'uid'
  },
  {
    label: '上级用户UID',
    prop: 'inviteUid'
  },
  {
    label: '用户充值金额',
    prop: 'inAmount'
  },
  {
    label: '自身是否获得邀新充值盲盒',
    prop: 'rechargeBox',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: 1
      },
      {
        text: '否',
        val: 0
      }
    ]
  },
  {
    label: '上级是否获得邀新充值盲盒',
    prop: 'inviteRechargeBox',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: 1
      },
      {
        text: '否',
        val: 0
      }
    ]
  },

  {
    label: '用户现货交易金额',
    prop: 'cumulativeTradeAmount'
  },
  {
    label: '自身是否获得邀新交易盲盒',
    prop: 'tradeBox',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: 1
      },
      {
        text: '否',
        val: 0
      }
    ]
  },
  {
    label: '上级是否获得邀新交易盲盒',
    prop: 'inviteTradeBox',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '是',
        val: 1
      },
      {
        text: '否',
        val: 0
      }
    ]
  },
  {
    label: '用户净充值金额',
    prop: 'netAmount'
  },

  {
    label: '用户合约交易额',
    prop: 'contractCumulativeTradeAmount'
  }
]

const springFestivalActivityUsersConfig = [
  {
    type: 'onlyNumber',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入'
  },

  {
    type: 'onlyNumber',
    label: '上级用户UID',
    prop: 'inviteUid',
    value: '',
    placeHolder: '请输入'
  }
]

const springFestivalLuckyHashCol = [
  {
    label: '用户UID',
    prop: 'uid'
  },
  {
    label: '单双数字',
    prop: 'singleDouble',
    width: 150,
    type: 'filter',
    show_type: 'text',
    filters: [
      {
        text: '单',
        val: 1
      },
      {
        text: '双',
        val: 2
      }
    ]
  },

  {
    label: '充值到账日期',
    prop: 'arrivalTime'
  },
  {
    label: 'Txid',
    prop: 'blockHash'
  }
]

const springFestivalLuckyHashConfig = [
  {
    type: 'date_rank',
    label: '充值到账日期',
    prop: 'arrivalStartTime',
    prop2: 'arrivalEndTime',
    value: ''
  },
  {
    type: 'onlyNumber',
    label: '用户UID',
    prop: 'uid',
    value: '',
    placeHolder: '请输入'
  },

  {
    type: 'text',
    label: 'Txid',
    prop: 'blockHash',
    value: '',
    placeHolder: '请输入'
  },
  {
    type: 'select',
    label: '单双数字',
    prop: 'singleDouble',
    value: '',
    list: [
      {
        label: '单',
        value: 1
      },
      {
        label: '双',
        value: 2
      }
    ]
  }
]

const springFestivalOverviewCol = [
]

export {
  springFestivalOverviewCol,
  springFestivalLuckyHashCol,
  springFestivalLuckyHashConfig,
  springFestivalActivityUsersCol,
  springFestivalActivityUsersConfig,
  springFestivalMysteryBoxConfig,
  springFestivalMysteryBoxCol,
  activityPhaseTwoCol,
  activityPhaseTwoConfig,
  msgSendRecordCol,
  msgSendRecordColNoBtn,
  msgSendRecordConfig,
  ssoWhiteListCol,
  ssoWhiteListColNoBtn,
  posterCol,
  posterColNoBtn,
  posterConfig,
  columnConfig,
  columnCol,
  columnColNoBtn,
  helpConfig,
  helpCol,
  helpColNoBtn,
  activityConfig,
  activityCol,
  activityColNoBtn,
  bannerCol,
  bannerColNoBtn,
  bannerConfig,
  noticeCol,
  noticeColNoBtn,
  noticeConfig,
  noticeDetailCol,
  popupNoticeCol,
  popupNoticeColNoBtn,
  popupNoticeConfig
}
