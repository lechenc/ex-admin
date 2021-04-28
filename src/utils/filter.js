import Vue from 'vue';
import { userTypes } from './constants';

export const convertTransactionType = value => {
  switch (value) {
    case 1:
      return '全部';
      break;
    case 2:
      return '充币';
    case 3:
      return '提币';
    case 4:
      return '站内互转';
    case 5:
      return '红包';
    case 6:
      return '划转';
  }
  return '';
};
Vue.filter('convertTransactionType', convertTransactionType);

// 用户实名状态
export const userCheckStatus = value => {
  switch (value) {
    case 0:
      return '高级待审核';
      break;
    case 1:
      return '初级认证成功';
      break;
    case 2:
      return '高级认证失败';
      break;
    case 3:
      return '未认证';
      break;
    case 4:
      return '高级认证成功';
      break;
    default:
      return '';
      break;
  }
};
Vue.filter('userCheckStatus', userCheckStatus);

export const transferQueryStatusType = value => {
  switch (value) {
    case 0:
      return '失败';
    case 1:
      return '成功';
    case 2:
      return '待审核';
    case 3:
      return '审核不通过';
    case 4:
      return '审核通过';
    case 5:
      return '处理中';
    case 6:
      return '已支付';
    case 7:
      return '已发送';
  }
};
Vue.filter('transferQueryStatusType', transferQueryStatusType);
//1, 3  4 5 6
export const advTypeFilter = value => {
  switch (value) {
    case 1:
      return '在线出售';
    case 2:
      return '在线求购';
    case 3:
      return '抢单兑出';
    case 4:
      return '抢单兑入';
    case 5:
      return '派单兑入';
    case 6:
      return '派单兑出';
  }
};
Vue.filter('advTypeFilter', advTypeFilter);

export const payTypeFilter = value => {
  switch (value) {
    case 1:
      return '银行卡';
    case 2:
      return '支付宝';
    case 3:
      return '微信';
    case 4:
      return '宝转卡';
  }
};
Vue.filter('payTypeFilter', payTypeFilter);

export const matchResultMap = value => {
  switch (value) {
    case 0:
      return '待审核';
    case 1:
      return '匹配中';
    case 2:
      return '匹配成功';
    case 3:
      return '匹配失败';
    case 4:
      return '匹配中断';
    case 5:
      return 'IP不匹配';
    case 6:
      return '审核失败';
    case 9:
      return '发起中';
    case 10:
      return '发起中断';
    case 11:
      return '封锁冻结';
  }
};
Vue.filter('matchResultMap', matchResultMap);

export const userTypesFilter = value => {
  let v = '';
  for (let i in userTypes) {
    if (i == value) {
      v = userTypes[i];
    }
  }
  return v;
};
Vue.filter('userTypesFilter', userTypesFilter);

Vue.filter('optTypeFB', function(val) {
  //保留小数位，acc为保留几位小数位
  switch (val * 1) {
    case 0:
      return '创建订单';
      break;
    case 3:
      return '申诉买方赢，直接放币';
      break;
    case 4:
      return '申诉卖方赢，出售广告回滚卖家';
      break;
    case 11:
      return '成为商户';
      break;
    case 12:
      return '卖家取消订单';
      break;
    case 13:
      return '取消商家认证';
      break;
    case 14:
      return '钱包转账到法币';
      break;
    case 15:
      return '取消订单';
      break;
    case 16:
      return '完成交易';
      break;
    case 17:
      return '手续费';
      break;
    case 18:
      return '申诉买方赢，购买广告回滚卖家的币';
      break;
    case 19:
      return '解冻金额';
      break;
    case 20:
      return '法币转账到币币';
      break;
    case 21:
      return '承兑商折扣';
      break;
    case 22:
      return '直接折扣';
      break;
    case 23:
      return '间接折扣';
      break;
    case 24:
      return '鼓励金';
      break;
    case 25:
      return '币币转账到法币';
      break;
    case 26:
      return 'otc发起提币';
      break;
    case 27:
      return 'otc提币失败';
      break;
    case 28:
      return '激活订单';
      break;
    case 29:
      return '申诉修改金额';
      break;
    case 30:
      return '资产证明转入';
      break;
    case 31:
      return '资产证明转出';
      break;
    case 32:
      return '系统费率';
      break;
    case 33:
      return '佣金';
      break;
    case 34:
      return '批量代付创建';
      break;
    case 35:
      return '批量代付回退';
      break;
    case 36:
      return '批量代付金额';
      break;
    case 37:
      return '批量代付手续费';
      break;
    case 38:
      return '批量代付完成';
      break;
    case 39:
      return '码商违规操作';
      break;
    case 40:
      return '码商违规操作收入';
      break;
    case 41:
      return '币商反佣';
      break;
    default:
      return val;
  }
});

Vue.filter('optTypeBB', function(val) {
  //保留小数位，acc为保留几位小数位
  switch (val * 1) {
    case 1:
      return '提币成功';
      break;
    case 3:
      return '提币失败';
      break;
    case 4:
      return '提币';
      break;
    case 5:
      return '充币';
      break;
    case 7:
      return '发红包冻结金额';
      break;
    case 8:
      return '红包过期，解冻金额';
      break;
    case 9:
      return '领取红包';
      break;
    case 10:
      return '被领取红包';
      break;
    case 11:
      return '转账到法币';
      break;
    case 12:
      return '转账到其他钱包账号';
      break;
    case 13:
      return '转账-来自其他钱包账号';
      break;
    case 14:
      return '平台收取手续费';
      break;
    case 15:
      return '法币转钱包';
      break;
    case 16:
      return '码商违规操作';
      break;
    case 17:
      return '码商违规操作收入';
      break;
    case 18:
      return '币币交易';
      break;
    case 19:
      return '提币手续费';
      break;
    case 20:
      return '转账到其他钱包账号手续费';
      break;
    case 21:
      return '提币成功手续费';
      break;
    case 22:
      return '提币失败手续费';
      break;
    default:
      return data.optType;
  }
});
