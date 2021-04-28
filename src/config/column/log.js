/*
 * @Author: your name
 * @Date: 2020-07-24 16:47:13
 * @LastEditTime: 2020-07-24 17:20:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\config\column\log.js
 */ 
// 操作日志 表格项
const oplogCol = [
  {
    label: "操作人员",
    prop: "account",
  },
  {
    label: "角色",
    prop: "roleName",
  },
  {
    label: "内容",
    prop: "content",
  },
  {
    label: "请求地址",
    prop: "requestAddress",
  },
  {
    label: "IP",
    prop: "userIp",
  },
  {
    label: "时间",
    prop: "createTime",
    type:"time"
  }
];

// 操作日志 搜索栏
const oplogConfig = [
  {
    type: "date_rank",
    label: "时间",
    prop: "startTime",
    prop2: "endTime",
    value: ""
  },
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: ''
  }
]


// 路径配置 表格项
const configPathCol = [
  {
    label: "路径名称",
    prop: "account",
  },
  {
    label: "路径地址",
    prop: "roleName",
  },
  {
    label: "时间",
    prop: "roleName",
    type:"time"
  }
]

// 路径配置 表格项
const configPathColNoBtn = [

]

// 路径配置 搜索栏
const configPathConfig = [
  {
    type: 'text',
    label: '路径名称',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '路径地址',
    prop: 'account',
    value: ''
  }, 
]

export {
  configPathCol, configPathColNoBtn, configPathConfig,
  oplogCol,
  oplogConfig,
  
}
