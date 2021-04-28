// 交易类型
import Vue from "vue";

export const transactionConfig = [
  {
    value: "1",
    label: "全部",
  },
  {
    value: "2",
    label: "充币",
  },
  {
    value: "3",
    label: "提币",
  },
  {
    value: "4",
    label: "站内互转",
  },
  {
    value: "5",
    label: "红包",
  },
  {
    value: "6",
    label: "划转",
  },
];

export const transactionCol = [
  {
    val: "1",
    text: "全部",
  },
  {
    val: "2",
    text: "充币",
  },
  {
    val: "3",
    text: "提币",
  },
  {
    val: "4",
    text: "站内互转",
  },
  {
    val: "5",
    text: "红包",
  },
  {
    val: "6",
    text: "划转",
  },
];

// 告警情况
export const alarmConditionType = [
  {
    value: 0,
    label: "审核告警",
  },
  {
    value: 1,
    label: "上链告警",
  },
  {
    value: 2,
    label: "到账延迟",
  },
];

// 转账记录查询 -- 状态
export const transferQueryStatusConfig = [
  {
    value: "0",
    label: "失败",
  },
  {
    value: "1",
    label: "成功",
  },
  {
    value: "2",
    label: "待审核",
  },
  {
    value: "3",
    label: "审核不通过",
  },
  {
    value: "4",
    label: "审核通过",
  },
  {
    value: "5",
    label: "处理中",
  },
  {
    value: "6",
    label: "已支付",
  },
  {
    value: "7",
    label: "已发送",
  },
];

// 转账记录查询 -- 状态
export const transferQueryStatusCol = [
  {
    val: "0",
    text: "失败",
  },
  {
    val: "1",
    text: "成功",
  },
  {
    val: "2",
    text: "待审核",
  },
  {
    val: "3",
    text: "审核不通过",
  },
  {
    val: "4",
    text: "审核通过",
  },
  {
    val: "5",
    text: "处理中",
  },
  {
    val: "6",
    text: "已支付",
  },
  {
    val: "7",
    text: "已发送",
  },
];

// 身份证审核
export const identityType = [
  {
    value: "1",
    label: "待审核",
  },
  {
    value: "2",
    label: "已审核",
  },
  {
    value: "3",
    label: "审核不通过",
  },
  {
    value: "4",
    label: "审核通过",
  },
];

// 应用类型
export const applicationType = [
  {
    value: "0",
    label: "游戏",
  },
  {
    value: "1",
    label: "社交",
  },
  {
    value: "2",
    label: "电商",
  },
  {
    value: "3",
    label: "平台",
  },
  {
    value: "4",
    label: "媒体",
  },
  {
    value: "5",
    label: "其它",
  },
];

export const fundTypes = {
  in: "充币",
  cool: "冷钱包",
  out: "CFO提币",
  to_cfo: "CFO充值",
  fee: "充值归拢费",
  manual: "手动打币",
};
// 支付渠道
export const payTypes = {
  1: "银行卡",
  2: "支付宝",
  3: "微信",
  4: "宝转卡",
};
// 交易广告状态
export const matchResultMap = {
  0: "待审核",
  1: "匹配中",
  2: "匹配成功",
  3: "匹配失败",
  4: "匹配中断",
  5: "IP不匹配",
  6: "审核失败",
  9: "发起中",
  10: "发起中断",
  11: "封锁冻结",
};
// 用户类型  1-普通用户  20-商户  100-系统用户
export const userTypes = {
  "1": "普通用户",
  "20": "商户",
  "100": "系统用户",
};
