/*
 * @Author: your name
 * @Date: 2020-05-12 14:35:53
 * @LastEditTime: 2020-12-25 11:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\config\column\app.js
 */

//  app管理 版本管理
const versionCol = [
  {
    label: "版本号",
    prop: "version"
  },
  {
    label: "客户端",
    prop: "deviceType",
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '安卓', val: 2 },
      { text: 'IOS', val: 1 },
    ]
  },
  {
    label: "下载链接",
    prop: "downloadUrl",
  },
  {
    label: "创建时间",
    prop: "createTime",
  },
  {
    label: "操作",
    prop: "action",
    type: "action",
    btnGroup: [
      {
        label: "编辑",
        fn: "edit",
        type:"primary",
        alias:"edit"
      },
    ],
  },
];

const versionColNoBtn = [
  {
    label: "版本号",
    prop: "version"
  },
  {
    label: "客户端",
    prop: "deviceType",
    type: 'filter',
    show_type: 'text',
    filters: [
      { text: '安卓', val: 2 },
      { text: 'IOS', val: 1 },
    ]
  },
  {
    label: "下载链接",
    prop: "downloadUrl",
  },
  {
    label: "创建时间",
    prop: "createTime"
  },
];



const localPackageCol = [
  {
    label: '版本号',
    prop: 'versionNumber',
  },
  {
    label: '名称',
    prop: 'keyIdArr',
    type:"labelArr",
    typeDetail: 'stringlist'
  },
  {
    label: '压缩包URL',
    prop: 'compressedPackageUrl',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
  {
    label: '是否灰度',
    prop: 'scaleStatus',
    type: 'switch',
    fn: 'trputon',
    alias:"trputon"
  },
  {
    label: '是否启用',
    prop: 'status',
    type: 'switch',
    fn: 'trstart',
    alias:"trstart"
  },
  {
    label: '是否登录展示',
    prop: 'onlineStatus',
    type: 'switch',
    fn: 'trlogin',
    alias:"trlogin",
    width:130,
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width:160,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type:"primary",
        alias:"edit"
      },
      {
        label: '删除',
        fn: 'del',
        type:"primary",
        alias:"del"
      },
    ]
  },
]

const localPackageColNoBtn = [
  {
    label: '版本号',
    prop: 'versionNumber',
  },
  {
    label: '名称',
    prop: 'keyIdArr',
    type:"labelArr",
    typeDetail: 'stringlist'
  },
  {
    label: '压缩包URL',
    prop: 'compressedPackageUrl',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
]

const localPackageConfig = [
]

const keyCol = [
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '名称',
    prop: 'keyName',
  },
  {
    label: 'key',
    prop: 'appKey',
  },
  {
    label: '英文名称',
    prop: 'englishKeyName',
  },
  {
    label: '白天icon',
    prop: 'iconUrl',
    type:"img"
  },
  {
    label: '黑天icon',
    prop: 'blackIconUrl',
    type:"img"
  },
  {
    label: 'Html URL',
    prop: 'htmlUrl',
  },
  {
    label: 'indexName',
    prop: 'indexName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
  {
    label: '首页是否启用',
    prop: 'status',
    type: 'switch',
    fn: 'trstart',
    alias:"trstart"
  },
  {
    label: '是否需要登录进入',
    prop: 'onlineStatus',
    type: 'switch',
    fn: 'trlogin',
    alias:"trlogin",
    width:160,
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width:160,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type:"primary",
        alias:"edit"
      },
      {
        label: '删除',
        fn: 'del',
        type:"primary",
        alias:"del"
      },
    ]
  }
]

const keyColNoBtn = [
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '名称',
    prop: 'keyName',
  },
  {
    label: 'key',
    prop: 'appKey',
  },
  {
    label: '英文名称',
    prop: 'englishKeyName',
  },
  {
    label: 'icon',
    prop: 'iconUrl',
    type:"img"
  },
  {
    label: 'Html URL',
    prop: 'htmlUrl',
  },
  {
    label: 'indexName',
    prop: 'indexName',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
]

const keyConfig = [
]


const grayScaleCol = [
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width:160,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type:"primary",
        alias:"edit"
      },
      {
        label: '删除',
        fn: 'del',
        type:"primary",
        alias:"del"
      },
    ]
  }
]

const grayScaleColNoBtn = [
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: 'UID',
    prop: 'uid',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
]

const grayScaleConfig = [
]

export {
  versionCol,
  versionColNoBtn,
  localPackageCol, localPackageColNoBtn, localPackageConfig,
  keyCol, keyColNoBtn, keyConfig,
  grayScaleCol, grayScaleColNoBtn, grayScaleConfig
}