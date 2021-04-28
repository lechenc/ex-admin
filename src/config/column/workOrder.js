/*
 * @Author: your name
 * @Date: 2020-04-09 10:01:18
 * @LastEditTime: 2020-12-26 11:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\config\column\symbol.js
 */

// import $api from '@/api/api';
import Store from '@/store';

const workOrderListCol = [
  {
    label: '工单号',
    prop: 'id',
  },
  {
    label: '工单类型',
    prop: 'workType',
  },
  {
    label: '工单标题',
    prop: 'title',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '紧急程度',
    prop: 'degreeUrgency',
    type: "filter",
    show_type: "textColorLine",
    other:"status",
    width:100,
    filters: [
      { text: "非常紧急", val: 1},
      { text: "很紧急", val: 2 },
      { text: "一般紧急", val: 3 },
      { text: "不紧急", val: 4 },
    ]
  },
  {
    label: '发起人账号',
    prop: 'fromAccount',
  },
  {
    label: '接收人账号',
    prop: 'toAccount',
  },
  {
    label: '处理人账号',
    prop: 'handleAccount',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
  {
    label: '工单状态',
    prop: 'status',
    width:100,
    type: "filter",
    show_type: "text",
    filters: [    
      { text: "待处理", val: 1 },
      { text: "处理中", val: 2 },
      { text: "处理完成", val: 3 },
      { text: "已驳回", val: 4 }
    ]
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    width:"160px",
    btnGroup: [
      {
        label: "编辑",
        fn: "edit",
        isPop: false,
        filter_key: false,
        filter_status: [1,"",""],
        other_filter:["status","fromAccount","toAccount"],
        type: "primary",
        alias:"edit"
      },
      {
        label: "编辑",
        fn: "edit",
        isPop: false,
        filter_key: false,
        filter_status: [2,""],
        other_filter:["status","toAccount"],
        type: "primary",
        alias:"edit"
      },
      {
        label: '详情',
        fn: 'detail',
        type:"primary",
        alias:"detail",
      },
    ]
  },
]

const workOrderListColNoBtn = [
  {
    label: '工单号',
    prop: 'id',
  },
  {
    label: '工单类型',
    prop: 'workType',
  },
  {
    label: '工单标题',
    prop: 'title',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '紧急程度',
    prop: 'degreeUrgency',
    type: "filter",
    show_type: "textColorLine",
    other:"status",
    width:100,
    filters: [
      { text: "非常紧急", val: 1},
      { text: "很紧急", val: 2 },
      { text: "一般紧急", val: 3 },
      { text: "不紧急", val: 4 },
    ]
  },
  {
    label: '发起人账号',
    prop: 'fromAccount',
  },
  {
    label: '接收人账号',
    prop: 'toAccount',
  },
  {
    label: '处理人账号',
    prop: 'handleAccount',
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type:"time"
  },
  {
    label: '工单状态',
    prop: 'status',
    width:100,
    type: "filter",
    show_type: "text",
    filters: [
      { text: "待处理", val: 1 },
      { text: "处理中", val: 2 },
      { text: "处理完成", val: 3 },
      { text: "已驳回", val: 4 }
    ]
  }
]

const workOrderListConfig = [
  {
    type: "date_rank",
    label: "创建日期",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    type: "text",
    label: "工单号",
    prop: "id",
    value: "",
    placeholder: "请输入",
  },
  {
    type: "text",
    label: '发起人账号',
    prop: "fromAccount",
    value: "",
    placeholder: "请输入",
  },
  {
    type: "text",
    label: '接收人账号',
    prop: "toAccount",
    value: "",
    placeholder: "请输入",
  },
  {
    type: "text",
    label: '处理人账号',
    prop: "handleAccount",
    value: "",
    placeholder: "请输入",
  },
  {
    type: "select",
    label: "工单类型",
    prop: "workType",
    value: "",
    list: []
  },
  {
    type: "select",
    label: "紧急程度",
    prop: "degreeUrgency",
    value: "",
    list: [
      { label: "非常紧急", value: 1 },
      { label: "很紧急", value: 2 },
      { label: "一般紧急", value: 3 },
      { label: "不紧急", value: 4 },
    ]
  },
  {
    type: "select",
    label: "状态",
    prop: "status",
    value: "",
    list: [
      { label: "待处理", value: 1 },
      { label: "处理中", value: 2 },
      { label: "处理完成", value: 3 },
      { label: "已驳回", value: 4 },
    ]
  }
]

const workOrderTypeCol = [
  {
    label: '工单类型',
    prop: 'name',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  },
  {
    label: '操作',
    prop: 'action',
    type: 'action',
    btnGroup: [
      {
        label: '编辑',
        fn: 'edit',
        type:"primary",
        alias:"edit"
      }
    ]
  },
]

const workOrderTypeColNoBtn = [
  {
    label: '工单类型',
    prop: 'name',
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type:"time"
  }
]

const workOrderTypeConfig = [

]


const loadCoinCol = [
  {
    label: '币种名称',
    prop: 'chineseDesc',
  },
  {
    label: '英文简称',
    prop: 'coinName',
  },
  {
    label: '发行价格',
    prop: 'issuePrice',
  },
  {
    label: '当前价格',
    prop: 'currentPrice',
  },
  {
    label: '是否首次发币',
    prop: 'isFirstIssue',
    show_type: "text",
    type: "filter",
    width:100,
    filters: [
      { text: "不是", val: 0},
      { text: "是", val: 1 },
    ]
  },
  {
    label: '是否ERC20',
    prop: 'isErc20',
    type: "filter",
    show_type: "text",
    width:100,
    filters: [
      { text: "不是", val: 0},
      { text: "是", val: 1 },
    ]
  },
  {
    label: '期望开通交易对',
    prop: 'coinMarket',
  },
  {
    label: '对接人手机号',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '跟进状态',
    prop: 'status',
    type: "filter",
    show_type: "text",
    other:"status",
    width:100,
    filters: [
      { text: "待处理", val: 0},
      { text: "处理中", val: 1 },
      { text: "处理完成", val: 2 },
    ]
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
    width:"160px",
    btnGroup: [
      {
        label: "编辑",
        fn: "edit",
        isPop: false,
        filter_key: "status",
        out:true,
        filter_status: 2,
        type: "success",
        alias:"edit"
      },
      {
        label: '详情',
        fn: 'detail',
        type:"primary",
        alias:"detail",
      },
    ]
  },
]

const loadCoinColNoBtn = [
  {
    label: '币种名称',
    prop: 'chineseDesc',
  },
  {
    label: '英文简称',
    prop: 'coinName',
  },
  {
    label: '发行价格',
    prop: 'issuePrice',
  },
  {
    label: '当前价格',
    prop: 'currentPrice',
  },
  {
    label: '是否首次发币',
    prop: 'isFirstIssue',
    show_type: "text",
    type: "filter",
    width:100,
    filters: [
      { text: "不是", val: 0},
      { text: "是", val: 1 },
    ]
  },
  {
    label: '是否ERC20',
    prop: 'isErc20',
    type: "filter",
    show_type: "text",
    width:100,
    filters: [
      { text: "不是", val: 0},
      { text: "是", val: 1 },
    ]
  },
  {
    label: '期望开通交易对',
    prop: 'coinMarket',
  },
  {
    label: '对接人手机号',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
  {
    label: '跟进状态',
    prop: 'status',
    type: "filter",
    show_type: "text",
    other:"status",
    width:100,
    filters: [
      { text: "待处理", val: 0},
      { text: "处理中", val: 1 },
      { text: "处理完成", val: 2 },
    ]
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

const loadCoinConfig = [
  {
    type: "date_rank",
    label: "创建时间",
    prop: "startTime",
    prop2: "endTime",
    value: "",
  },
  {
    type: "text",
    label: "英文简称",
    prop: "coinName",
    value: "",
    placeholder: "请输入",
  },
  {
    type: "select",
    label: "是否首次法币",
    prop: "isFirstIssue",
    value: "",
    list: [
      { label: "不是", value: 0 },
      { label: "是", value: 1 },
    ]
  },
  {
    type: "select",
    label: "是否ERC20",
    prop: "isErc20",
    value: "",
    list: [
      { label: "不是", value: 0 },
      { label: "是", value: 1 },
    ]
  }
]

export {
  workOrderListCol, workOrderListColNoBtn, workOrderListConfig,
  workOrderTypeCol, workOrderTypeColNoBtn, workOrderTypeConfig,
  loadCoinCol,loadCoinColNoBtn, loadCoinConfig
}