/*
 * @Author: cws
 * @Date: 2020-04-08 15:58:33
 * @LastEditTime: 2020-08-05 20:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\financial.js
 */

// 前台管理 -- 公告管理 -- table
const noticeCol = [
  {
    label: '中文标题',
    prop: 'title',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '中文链接',
    prop: 'url',
  },
  {
    label: '英文链接',
    prop: 'englishLink',
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

// 前台管理 -- 公告管理 -- table
const noticeColNoBtn = [
  {
    label: '中文标题',
    prop: 'title',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '中文链接',
    prop: 'url',
  },
  {
    label: '英文链接',
    prop: 'englishLink',
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
];

// 前台管理 -- 公告管理 -- 搜索栏
const noticeConfig = [
  {
    type: 'text',
    label: '标题',
    prop: 'title',
  },
];

// 前台管理 -- 公告管理 -- 详情
const noticeDetailCol = [
  {
    label: '币种',
    prop: 'symbol',
  },
  {
    label: '持币数量',
    prop: 'amount',
  },
  {
    label: '收币地址',
    prop: 'address',
  },
];

// 前台管理 -- 弹窗公告 -- table
const popupNoticeCol = [
  {
    label: '中文标题',
    prop: 'title',
  },
  {
    label: '中文内容',
    prop: 'content',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '英文内容',
    prop: 'englishContent',
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

// 前台管理 -- 弹窗公告 -- table
const popupNoticeColNoBtn = [
  {
    label: '中文标题',
    prop: 'title',
  },
  {
    label: '中文内容',
    prop: 'content',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '英文内容',
    prop: 'englishContent',
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
];

// 前台管理 -- 弹窗公告 -- 搜索栏
const popupNoticeConfig = [
  {
    type: 'text',
    label: '标题',
    prop: 'title',
  },
  {
    type: 'select',
    label: '公告类型',
    prop: 'type',
    value: 1,
    list: [{ label: '普通弹窗公告', value: 1 }, { label: '维护公告', value: 2 }],
    isClear: true,
  },
];

// 前台管理 -- banner管理 -- table
const bannerCol = [
  {
    label: '名称',
    prop: 'bannerName',
    width: '200',
  },
  {
    label: '代理是否可见',
    prop: 'isProxyVisible',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: true }, { text: '否', val: false }],
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img',
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img',
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'ios', val: 1 }, { text: '安卓', val: 2 }, { text: 'pc,h5', val: 3 }],
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '生效时间',
    prop: 'effectTime',
    width: '200',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: '200',
  },
  {
    label: '上架',
    prop: 'bannerStatus',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delete',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const bannerColNoBtn = [
  {
    label: '名称',
    prop: 'bannerName',
    width: '200',
  },
  {
    label: '代理是否可见',
    prop: 'isProxyVisible',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '是', val: true }, { text: '否', val: false }],
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img',
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img',
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'ios', val: 1 }, { text: '安卓', val: 2 }, { text: 'pc,h5', val: 3 }],
  },
  {
    label: '排序',
    prop: 'weight',
  },
  {
    label: '生效时间',
    prop: 'effectTime',
    width: '200',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: '200',
  },
];

// 前台管理 -- banner管理 -- 搜索栏
const bannerConfig = [
  {
    label: '标题',
    prop: 'bannerName',
    type: 'text',
  },
];

// 前台管理 -- 邀请海报管理 -- table
const posterCol = [
  {
    label: '类型',
    prop: 'bannerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通海报', val: 1 }, { text: '会员海报', val: 2 }],
  },
  {
    label: '名称',
    prop: 'bannerName',
    width: '200',
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img',
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img',
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'ios', val: 1 }, { text: '安卓', val: 2 }, { text: 'pc,h5', val: 3 }],
  },
  {
    label: '排序',
    prop: 'weight',
  },

  {
    label: '创建时间',
    prop: 'createTime',
    width: '200',
  },
  {
    label: '更新时间',
    prop: 'effectTime',
    width: '200',
  },
  {
    label: '上架',
    prop: 'bannerStatus',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delete',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

// 前台管理 -- 邀请海报管理无权限 -- table
const posterColNoBtn = [
  {
    label: '类型',
    prop: 'bannerType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '普通海报', val: 1 }, { text: '会员海报', val: 2 }],
  },
  {
    label: '名称',
    prop: 'bannerName',
    width: '200',
  },
  {
    label: '中文图片',
    prop: 'imgUrl',
    type: 'img',
  },
  {
    label: '英文图片',
    prop: 'imgUrlEn',
    type: 'img',
  },
  {
    label: '客户端',
    prop: 'deviceType',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: 'ios', val: 1 }, { text: '安卓', val: 2 }, { text: 'pc,h5', val: 3 }],
  },
  {
    label: '排序',
    prop: 'weight',
  },

  {
    label: '创建时间',
    prop: 'createTime',
    width: '200',
  },
  {
    label: '更新时间',
    prop: 'effectTime',
    width: '200',
  },
];

// 前台管理 -- 邀请海报管理 -- 搜索栏
const posterConfig = [
  {
    label: '名称',
    prop: 'bannerName',
    type: 'text',
  },
];

// 前台管理 -- 帮助中心 -- 搜索栏
const helpConfig = [
  {
    label: '标题',
    prop: 'chineseTitle',
    type: 'text',
  },
];

// 前台管理 -- 帮助中心
const helpCol = [
  {
    label: '栏目名称',
    prop: 'chineseSubjectName',
  },
  {
    label: '中文标题',
    prop: 'chineseTitle',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '中文链接',
    prop: 'url',
  },
  {
    label: '英文链接',
    prop: 'englishLink',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
  {
    label: '上架',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const helpColNoBtn = [
  {
    label: '栏目名称',
    prop: 'chineseSubjectName',
  },
  {
    label: '中文标题',
    prop: 'chineseTitle',
  },
  {
    label: '英文标题',
    prop: 'englishTitle',
  },
  {
    label: '中文链接',
    prop: 'url',
  },
  {
    label: '英文链接',
    prop: 'englishLink',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
];

// 前台管理 -- 栏目 -- 搜索栏
const columnConfig = [
  {
    label: '标题',
    prop: 'chineseSubjectName',
    type: 'text',
  },
];

// 前台管理 -- 栏目
const columnCol = [
  {
    label: '栏目中文名称',
    prop: 'chineseSubjectName',
  },
  {
    label: '栏目英文名称',
    prop: 'englishSubjectName',
  },
  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '创建时间',
    prop: 'createTime',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'delRow',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const columnColNoBtn = [
  {
    label: '栏目中文名称',
    prop: 'chineseSubjectName',
  },
  {
    label: '栏目英文名称',
    prop: 'englishSubjectName',
  },
  {
    label: 'icon',
    prop: 'iconUrl',
    type: 'img',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
];

// 运营管理 -- 单点登录白名单管理
const ssoWhiteListCol = [
  {
    label: '单点类型',
    prop: 'ssoType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [{ text: 'IOS', val: 1 }, { text: '安卓', val: 2 }, { text: 'PC', val: 3 }],
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: 'UID',
    prop: 'uid',
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
    label: '开关',
    prop: 'status',
    type: 'switch',
    fn: 'trputon',
    alias: 'trputon',
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
        alias: 'edit',
      },
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const ssoWhiteListColNoBtn = [
  {
    label: '单点类型',
    prop: 'ssoType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [{ text: 'IOS', val: 1 }, { text: '安卓', val: 2 }, { text: 'PC', val: 3 }],
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: 'UID',
    prop: 'uid',
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

// 运营管理/短信发送记录
const msgSendRecordCol = [
  {
    label: '发送平台',
    prop: 'platformName',
  },

  {
    label: '发送类型',
    prop: 'messageType',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [{ text: '短信', val: 1 }, { text: '邮件', val: 2 }],
  },

  {
    label: '用户UID',
    prop: 'uid',
  },

  {
    label: '区号',
    prop: 'phoneAreaCode',
    type: 'noneShowValue',
    showValue: '无',
  },
  {
    label: '手机号码',
    prop: 'phone',
    type: 'noneShowValue',
    showValue: '无',
  },
  {
    label: '邮箱号码',
    prop: 'email',
    type: 'noneShowValue',
    showValue: '无',
  },

  {
    label: '发送时间',
    prop: 'createTime',
  },
  {
    label: '回执时间',
    prop: 'syncTime',
  },
  {
    label: '回执状态',
    prop: 'syncResult',
    type: 'filter',
    show_type: 'text',
    // 1.PC 2.IOS 3.Android
    filters: [{ text: '成功', val: true }, { text: '失败', val: false }],
  },
  {
    label: '发送内容',
    prop: 'content',
    type: 'textType',
    width: '450',
  },
];

// 运营管理/短信发送记录
const msgSendRecordConfig = [
  {
    type: 'date_rank',
    label: '时间',
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
    type: 'select',
    label: '发送类型',
    prop: 'messageType',
    value: 1,
    // ： 1短信 2邮件
    list: [{ label: '短信', value: 1 }, { label: '邮件', value: 2 }],
  },
  {
    type: 'text',
    label: '发送号码',
    prop: 'keyWord',
    value: '',
    placeHolder: '请输入手机号或邮箱号码',
  },
  {
    type: 'select',
    label: '回执状态',
    prop: 'syncResult',
    value: '',
    // ： 1短信 2邮件
    list: [{ label: '成功', value: true }, { label: '失败', value: false }],
  },
  {
    type: 'select',
    label: '发送平台',
    prop: 'platform',
    value: '',
    list: [{ label: '摩杜云', value: '1' }, { label: '美联软通', value: '2' }, { label: '网易网盾', value: '3' }],
  },
];

export {
  msgSendRecordCol,
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
  bannerCol,
  bannerColNoBtn,
  bannerConfig,
  noticeCol,
  noticeColNoBtn,
  noticeConfig,
  noticeDetailCol,
  popupNoticeCol,
  popupNoticeColNoBtn,
  popupNoticeConfig,
};
