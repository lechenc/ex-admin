/*
 * @Author: your name
 * @Date: 2020-04-09 20:45:04
 * @LastEditTime: 2022-03-08 10:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\system.js
 */
//角色管理
const roleCol = [
  {
    label: '角色名称',
    prop: 'name'
  },
  {
    label: '用户数',
    prop: 'userNumber'
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '角色权限开关',
    prop: 'status',
    type: 'switch',
    fn: 'switchCoin',
    alias: 'trroleauth'
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

const roleColNoBtn = [
  {
    label: '角色名称',
    prop: 'name'
  },
  {
    label: '用户数',
    prop: 'userNumber'
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time'
  }
]

//  账号管理
const accountCol = [
  {
    label: '账号',
    prop: 'account'
  },
  {
    label: '角色',
    prop: 'roleName'
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '账号状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '开启', val: 1 }, { text: '关闭', val: 0 }]
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

const accountColNoBtn = [
  {
    label: '账号',
    prop: 'account'
  },
  {
    label: '角色',
    prop: 'roleName'
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '账号状态',
    prop: 'status',
    type: 'filter',
    show_type: 'text',
    width: '120',
    filters: [{ text: '开启', val: 1 }, { text: '关闭', val: 0 }]
  }
  // 隐藏，统一放在编辑页面来操作，因为为了安全必须需要有谷歌验证码才能修改用户信息
  // {
  //   label: '账号状态',
  //   prop: 'status',
  //   type: 'switch',
  //   fn: 'switchCoin'
  // },
]

const accountConfig = [
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: '',
    placeHolder: '请输入账号'
  }
]

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
        alias: 'edit'
      }
    ]
  }
]
const pwdNoBtn = []

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
        alias: 'edit'
      }
    ]
  }
]
const gcodeNoBtn = []

// 操作日志 表格项
const logCol = [
  {
    label: '操作人员',
    prop: 'account'
  },
  {
    label: '角色',
    prop: 'roleName'
  },
  {
    label: '内容',
    prop: 'content'
  },
  {
    label: '请求地址',
    prop: 'requestAddress'
  },
  {
    label: 'IP',
    prop: 'userIp'
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'time'
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
        alias: 'detail'
      }
    ]
  }
]

// 操作日志 搜索栏
const logConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    type: 'text',
    label: '账号',
    prop: 'account',
    value: ''
  },
  {
    type: 'text',
    label: '角色',
    prop: 'roleName',
    value: ''
  },
  {
    type: 'text',
    label: '内容',
    prop: 'content',
    value: ''
  },
  {
    type: 'text',
    label: '请求地址',
    prop: 'requestAddress',
    value: ''
  },
  {
    type: 'text',
    label: 'IP',
    prop: 'userIp',
    value: ''
  }
]

// 路径配置 表格项
const configPathCol = [
  {
    label: '路径名称',
    prop: 'name'
  },
  // {
  //   label: "路径ID",
  //   prop: "id",
  // },
  {
    label: '请求路径',
    prop: 'requestUrl'
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
        alias: 'primary'
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

// 路径配置 表格项
const configPathColNoBtn = [
  {
    label: '路径名称',
    prop: 'name'
  },
  // {
  //   label: "路径ID",
  //   prop: "id",
  // },
  {
    label: '请求路径',
    prop: 'requestUrl'
  }
]

// 路径配置 搜索栏
const configPathConfig = [
  {
    type: 'text',
    label: '路径名称',
    prop: 'name',
    value: ''
  },
  {
    type: 'text',
    label: '请求路径',
    prop: 'requestUrl',
    value: ''
  }
]

//域名管理
const domainNameCol = [
  {
    label: '域名地址',
    prop: 'domainName'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '是否默认',
    prop: 'isDefault',
    type: 'switch',
    fn: 'trDefault',
    alias: 'trDefault'
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
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
        alias: 'edit'
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail'
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

//域名管理
const domainNameColNoBtn = [
  {
    label: '域名地址',
    prop: 'domainName'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  }
]

//固定域名管理
const domainNameFixedCol = [
  {
    label: '固定域名地址',
    prop: 'domainName'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '是否默认',
    prop: 'isDefault',
    type: 'switch',
    fn: 'trDefault',
    alias: 'trDefault'
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
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
        alias: 'edit'
      },
      {
        label: '详情',
        fn: 'detail',
        type: 'primary',
        alias: 'detail'
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

//固定域名管理
const domainNameFixedColNoBtn = [
  {
    label: '固定域名地址',
    prop: 'domainName'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'time'
  }
]

// 集团管理
const peopleManagementCol = [
  {
    label: '账号',
    prop: 'account'
  },
  {
    label: '职务',
    prop: 'jobName'
  },
  {
    label: '部门',
    prop: 'deptName'
  },
  {
    label: '级别',
    prop: 'isOwer',
    type: 'filter',
    show_type: 'textColorLine',
    width: '120',
    filters: [{ text: '普通成员', val: 0 }, { text: '部门负责人', val: 1 }]
  },
  {
    label: '备注',
    prop: 'name'
  },

  {
    label: '添加时间',
    prop: 'createTime',
    type: 'time'
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'time'
  },
  {
    label: '可用状态',
    prop: 'status',
    type: 'switch',
    fn: 'switch',
    alias: 'trswitch'
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
        type: 'primary'
      },
      {
        label: '删除',
        fn: 'del',
        type: 'primary'
      }
    ]
  }
]

const peopleManagementConfig = [
  {
    type: 'text',
    label: '搜索部门',
    prop: 'name',
    value: '',
    width: '350px'
  }
]

// 系统管理/IP地址管理
const ipAddressCol = [
  {
    label: 'IP地址',
    prop: 'ip'
  },

  {
    label: '名单类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '白名单', val: 1 }, { text: '黑名单', val: 2 }]
  },

  {
    label: '启用/禁用',
    prop: 'enable',
    type: 'filter_switch',
    fn: 'trable',
    alias: 'trable',
    width: '150',
    filter_key: 'property', // property值 为1时禁用
    filter_status: 1
  },

  {
    label: 'IP类型',
    prop: 'property',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '内部', val: 1 }, { text: '外部', val: 2 }]
  },

  {
    label: '备注',
    prop: 'remark'
  },

  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width: 240,
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type: 'primary',
        alias: 'edit',
        // property值  除了1显示
        filter_type: 'arrayExcept',
        filter_key: 'property',
        filter_status: ['1'],
      },

      {
        label: '删除',
        fn: 'delete',
        type: 'danger',
        alias: 'delete',
        // property值  除了1显示
        filter_type: 'arrayExcept',
        filter_key: 'property',
        filter_status: ['1']
      }
    ]
  }
]

// 系统管理/IP地址管理
const ipAddressColNoBtn = [
  {
    label: 'IP地址',
    prop: 'ip'
  },

  {
    label: '名单类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '白名单', val: 1 }, { text: '黑名单', val: 2 }]
  },

  {
    label: '启用/禁用',
    prop: 'enable',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '启用', val: true }, { text: '禁用', val: false }]
  },

  {
    label: 'IP类型',
    prop: 'type',
    type: 'filter',
    show_type: 'text',
    filters: [{ text: '内部', val: 1 }, { text: '外部', val: 2 }]
  },

  {
    label: '备注',
    prop: 'remark'
  }
]


//域名管理
const domainNameFailListsCol = [
  {
    label: '域名地址',
    prop: 'domainAddress'
  },
  {
    label: '用户IP地址',
    prop: 'userIpAddress'
  },
  {
    label: '设备型号',
    prop: 'deviceModel'
  },
  {
    label: '操作系统',
    prop: 'operatingSystem'
  },
  {
    label: '运营商',
    prop: 'operator'
  },
  {
    label: '失败记录时间',
    prop: 'created',
  },
  // {
  //   label: '操作',
  //   prop: 'action',
  //   width: '240',
  //   type: 'action',
  //   btnGroup: [
  //     {
  //       label: '编辑',
  //       fn: 'edit',
  //       type: 'primary',
  //       alias: 'edit'
  //     },
  //     {
  //       label: '详情',
  //       fn: 'detail',
  //       type: 'primary',
  //       alias: 'detail'
  //     },
  //     {
  //       label: '删除',
  //       fn: 'del',
  //       type: 'danger',
  //       alias: 'del'
  //     }
  //   ]
  // }
]

//固定域名管理
const domainNameFailListsConfig = [
  {
    type: 'date_rank',
    label: '时间',
    prop: 'startTime',
    prop2: 'endTime',
    value: ''
  },
  {
    label: '域名地址',
    prop: 'domainAddress'
  },
  {
    label: '用户IP地址',
    prop: 'userIpAddress'
  },
  {
    label: '运营商',
    prop: 'operator'
  },
]

export {
  domainNameFailListsCol,
  domainNameFailListsConfig,
  ipAddressCol,
  ipAddressColNoBtn,
  domainNameFixedCol,
  domainNameFixedColNoBtn,
  peopleManagementCol,
  peopleManagementConfig,
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
  configPathConfig
}
