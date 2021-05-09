/*
 * @Author: your name
 * @Date: 2020-04-09 20:45:04
 * @LastEditTime: 2020-08-17 18:46:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\system.js
 */
//角色管理
const roleCol = [
  {
    label: '角色名称',
    prop: 'name',
  },
  {
    label: '用户数',
    prop: 'userNumber',
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '角色权限开关',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trroleauth',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '修改/授权',
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

const roleColNoBtn = [
  {
    label: '角色名称',
    prop: 'name',
  },
  {
    label: '用户数',
    prop: 'userNumber',
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
];

//  账号管理
const accountCol = [
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '角色',
    prop: 'roleName',
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
  // 隐藏，统一放在编辑页面来操作，因为为了安全必须需要有谷歌验证码才能修改用户信息
  // {
  //   label: '账号状态',
  //   prop: 'status',
  //   type: 'switch',
  //   fn: 'switchCoin'
  // },
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
        fn: 'delete',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

const accountColNoBtn = [
  {
    label: '账号',
    prop: 'account',
  },
  {
    label: '角色',
    prop: 'roleName',
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time',
  },
  // 隐藏，统一放在编辑页面来操作，因为为了安全必须需要有谷歌验证码才能修改用户信息
  // {
  //   label: '账号状态',
  //   prop: 'status',
  //   type: 'switch',
  //   fn: 'switchCoin'
  // },
];

const accountConfig = [
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: '',
    placeHolder: '请输入账号',
  },
];

// 修改密码
const pwdCol = [
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '修改',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];
const pwdNoBtn = [];

// 修改谷歌验证码
const gcodeCol = [
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '修改',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
      },
    ],
  },
];
const gcodeNoBtn = [];

// 操作日志 表格项
const logCol = [
  {
    label: '操作人员',
    prop: 'account',
  },
  {
    label: '角色',
    prop: 'roleName',
  },
  {
    label: '内容',
    prop: 'content',
  },
  {
    label: '请求地址',
    prop: 'requestAddress',
  },
  {
    label: 'IP',
    prop: 'userIp',
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail',
      },
    ],
  },
];

// 操作日志 搜索栏
const logConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: '',
  },
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: '',
  },
  {
    type: 'text',
    label: '角色',
    prop: 'roleName',
    value: '',
  },
  {
    type: 'text',
    label: '内容',
    prop: 'content',
    value: '',
  },
  {
    type: 'text',
    label: '请求地址',
    prop: 'requestAddress',
    value: '',
  },
  {
    type: 'text',
    label: 'IP',
    prop: 'userIp',
    value: '',
  },
];

// 路径配置 表格项
const configPathCol = [
  {
    label: '路径名称',
    prop: 'name',
  },
  // {
  //   label: "路径ID",
  //   prop: "id",
  // },
  {
    label: '请求路径',
    prop: 'requestUrl',
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 150,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'primary',
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

// 路径配置 表格项
const configPathColNoBtn = [
  {
    label: '路径名称',
    prop: 'name',
  },
  // {
  //   label: "路径ID",
  //   prop: "id",
  // },
  {
    label: '请求路径',
    prop: 'requestUrl',
  },
];

// 路径配置 搜索栏
const configPathConfig = [
  {
    type: 'text',
    label: '路径名称',
    prop: 'name',
    value: '',
  },
  {
    type: 'text',
    label: '请求路径',
    prop: 'requestUrl',
    value: '',
  },
];

//角色管理
const domainNameCol = [
  {
    label: '域名地址',
    prop: 'domainName',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '是否默认',
    prop: 'isDefault',
    type: 'switch',
    fn: 'trDefault',
    alias: 'trDefault',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '操作',
    prop: 'action',
    width: '240',
    type: 'action',
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
      {
        label: '删除',
        fn: 'del',
        type: 'danger',
        alias: 'del',
      },
    ],
  },
];

//角色管理
const domainNameColNoBtn = [
  {
    label: '域名地址',
    prop: 'domainName',
  },
  {
    label: '排序',
    prop: 'sort',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time',
  },
];

// 集团管理
const groupListCol = [
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
  {
    label: '可用状态',
    prop: 'status',
    type: 'switch',
    fn: 'switch',
    alias: 'trswitch',
  },
  {
    label: '操作',
    width: '180',
    prop: 'action',
    type: 'action',
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
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const groupListColNoBtn = [
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
];

const groupListConfig = [
  {
    type: 'select',
    label: '集团名称',
    prop: 'auditStatus',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '部门名称',
    prop: 'auditStatus1',
    value: '',
    list: [],
  },
];

// 部门管理
const branchListCol = [
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
  {
    label: '可用状态',
    prop: 'status',
    type: 'switch',
    fn: 'switch',
    alias: 'trswitch',
  },
  {
    label: '操作',
    width: '180',
    prop: 'action',
    type: 'action',
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
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const branchListColNoBtn = [
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
];

const branchListConfig = [
  {
    type: 'select',
    label: '部门名称',
    prop: 'auditStatus1',
    value: '',
    list: [],
  },
];

// 职位管理
const positionListCol = [
  {
    label: '职务名称',
    prop: 'account1',
  },
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
  {
    label: '可用状态',
    prop: 'status',
    type: 'switch',
    fn: 'switch',
    alias: 'trswitch',
  },
  {
    label: '操作',
    width: '180',
    prop: 'action',
    type: 'action',
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
        type: 'primary',
        alias: 'del',
      },
    ],
  },
];

const positionListColNoBtn = [
  {
    label: '职务名称',
    prop: 'account1',
  },
  {
    label: '集团名称',
    prop: 'account',
  },
  {
    label: '部门名称',
    prop: 'roleName',
  },
  {
    label: '部门人数',
    prop: 'content',
  },
  {
    label: '职位数量',
    prop: 'requestAddress',
  },

  {
    label: '时间',
    prop: 'createTime',
    type: 'time',
  },
  {
    label: '更新时间',
    prop: 'createTime1',
    type: 'time',
  },
];

const positionListConfig = [
  {
    type: 'select',
    label: '集团名称',
    prop: 'auditStatus',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '部门名称',
    prop: 'auditStatus1',
    value: '',
    list: [],
  },
  {
    type: 'select',
    label: '职位名称',
    prop: 'auditStatus2',
    value: '',
    list: [],
  },
];

export {
  positionListCol,
  positionListColNoBtn,
  positionListConfig,
  branchListCol,
  branchListColNoBtn,
  branchListConfig,
  groupListCol,
  groupListColNoBtn,
  groupListConfig,
  domainNameCol,
  domainNameColNoBtn,
  logCol,
  logConfig,
  roleCol,
  roleColNoBtn,
  accountCol,
  accountColNoBtn,
  accountConfig,
  pwdCol,
  pwdNoBtn,
  gcodeCol,
  gcodeNoBtn,
  configPathCol,
  configPathColNoBtn,
  configPathConfig,
};
