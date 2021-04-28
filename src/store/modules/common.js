/*
 * @Author: your name
 * @Date: 2020-05-18 18:56:31
 * @LastEditTime: 2020-12-22 17:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\store\modules\common.js
 */
import $api from '@/api/api';

const getDefaultState = () => {
  return {
    coinlist: [],
    fiatcoinlist: [],
    symbollist: [],
    symbollistContract: [],
    workorderlist: [],
    symbolMimiclistContract: [],
    symbolMimicListAnalyst:[],
    symbolMimicListAnalystAll:[],
  };
};

const state = getDefaultState();

const mutations = {
  SET_COINLIST: (state, list) => {
    state.coinlist = list;
  },
  SET_SYMBOLLIST: (state, list) => {
    state.symbollist = list;
  },
  SET_SYMBOLLISTCONTRACT: (state, list) => {
    state.symbollistContract = list;
  },
  SET_FIATCOINLIST: (state, list) => {
    state.fiatcoinlist = list;
  },
  SET_WORKORDERLIST: (state, list) => {
    state.workorderlist = list;
  },
  SET_SYMBOLMIMICLISTCONTRACT: (state, list) => {
    state.symbolMimiclistContract = list;
  },
  SET_SYMBOLMIMICLISTANALYST: (state, list) => {
    state.symbolMimicListAnalyst = list;
  },
  SET_SYMBOLMIMICLISTANALYSTALL: (state, list) => {
    state.symbolMimicListAnalystAll = list;
  },
};

const actions = {
  // get coinlist
  getCoinList({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getCoinList({ pageNum: 1, pageSize: 100 })
        .then(res => {
          const list = res.data.data.map(v => {
            return { label: v['coinName'], value: v['coinId'] ,decimalPlaces: v['decimalPlaces'] };
          });
          commit('SET_COINLIST', list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  getFiatCoinList({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getFiatCoinListNEW({ pageNum: 1, pageSize: 100 })
        .then(res => {
          const list = res.data.data.map(v => {
            return { label: v['coinName'], value: v['coinId'] };
          });
          commit('SET_FIATCOINLIST', list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // get symbollist
  getSymbolList({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getSymbolList({ pageNum: 1, pageSize: 100 })
        .then(res => {
          const list = res.data.data.records.map(v => {
            return { label: v['coinMarket'], value: v['coinMarketId'] };
          });
          commit('SET_SYMBOLLIST', list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get symbollist
  getSymbolListContract({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getContractcoinSymbolList({})
        .then(res => {
          const list = res.data.data.map(v => {
            return { label: v['coinMarket'], value: v['coinId'], marketCoinName: v['marketCoinName'], marketId: v['marketId'] };
          });
          commit('SET_SYMBOLLISTCONTRACT', list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get symbollistmock 模拟交易对 暂时只要mockType=2的
  getsymbolMimiclistContract({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getContractcoinSymbolListMimic({})
        .then(res => {
          let arr = [];
          res.data.data.forEach(v => {
            if (v.mockType == 2) {
              arr.push(v);
            }
          });
          const _list = arr.map(v => {
            return { label: v['coinMarket'], value: v['coinId'] };
          });

          commit('SET_SYMBOLMIMICLISTCONTRACT', _list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get symbollistmock 模拟交易对 (分析师专用) 暂时只要mockType=1的
  getSymbolMimicListAnalyst({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getAnalystCoinSymbolListMimic({})
        .then(res => {
          let arr = [];
          res.data.data.forEach(v => {
            if (v.mockType == 1) {
              arr.push(v);
            }
          });
          const _list = arr.map(v => {
            return { label: v['coinMarket'], value: v['coinId'] };
          });

          commit('SET_SYMBOLMIMICLISTANALYST', _list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get symbollistmock 模拟交易对 所有
  getSymbolMimicListAnalystAll({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .getAnalystCoinSymbolListMimic({})
        .then(res => {
          const _list = res.data.data.map(v => {
            return { label: v['coinMarket'], value: v['coinMarket'] };
          });

          commit('SET_SYMBOLMIMICLISTANALYSTALL', _list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  setTagsList(state, payload) {
    let arr = [];
    payload.forEach((val, idx) => {
      arr.push(val.routeName);
    });
    state.tagsList = arr;
  },
  getWorkOrderList({ commit, state }) {
    return new Promise((resolve, reject) => {
      $api
        .workTypeList({ pageNum: 1, pageSize: 100 })
        .then(res => {
          const list = res.data.data.map(v => {
            return { label: v['name'], value: v['id'] };
          });
          commit('SET_WORKORDERLIST', list);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
