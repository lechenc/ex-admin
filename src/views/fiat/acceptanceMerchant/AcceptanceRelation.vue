<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-11-27 14:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="acceptanceRelation-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
   
    <div class="container-middle">
      <el-table :data="list" height="100%" style="width: 100%; height: 100%" row-key="uid" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" size="mini" class="new-table" ref="tablenow" :indent="45">
        <el-table-column prop="uid" label="编号" width="auto" min-width="290"></el-table-column>

        <el-table-column prop="inRate" label="出售返佣费率" align="center" width="140">
          <template scope="scope">
            {{ scope.row['inRate'] + '%' }}
          </template>
        </el-table-column>

        <el-table-column prop="amount" label="持币量" align="center"></el-table-column>

        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button plain type="primary" size="mini" @click="editRow(scope.row, 'panel')" v-if="btnArr.includes('edit')">修改收益</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="container-root">
      <p class="currentTotal-class">
        <span>承兑商代理持币总量 :&nbsp;{{ this.amountSum ? this.amountSum : 0 }}</span>
      </p>
    </div>

    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogEditVisible" width="550px" title="修改收益">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="出售返佣费率" prop="inRate" :label-width="formalWidth">
          <el-input type="number" placeholder="请输入" v-model="form.inRate" @input="checkVal('inRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogEditVisible = false">取消</el-button>
        <el-button type="primary" :loading="btnLoading" @click.stop="confirmEdit">确定</el-button>
      </div>
    </el-dialog>

    <!-- 关系弹窗 -->
    <el-dialog :title="title" :visible.sync="showDialogParent" width="1250px" class="query-parent-dialog">
      <el-table size="mini" :data="queryParentList" row-key="uid" lazy :load="queryParentLoad" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" height="500px" class="new-table" :indent="35">
        <el-table-column prop="uid" label="编号" min-width="360"></el-table-column>
        <el-table-column prop="inRate" label="转入返佣费率" width="125" align="center">
          <template scope="scope">
            {{ scope.row['inRate'] + '%' }}
          </template>
        </el-table-column>

        <el-table-column prop="amount" label="持币量" align="center"></el-table-column>

        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button plain type="primary" size="mini" @click="editRow(scope.row, 'top')" v-if="btnArr.includes('edit')">修改收益</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <!-- 设置弹窗 -->
    <el-dialog :visible.sync="dialogSetVisible" width="650px" title="修改收益">
      <el-form :model="setForm" ref="setForm" :rules="setRules">
        <el-form-item label="商户可扣手续费TP最大负数值：" prop="aaa" :label-width="labelWidth">
          <el-input type="text" placeholder="请输入" v-model="setForm.aaa">
            <div slot="prepend">-</div>
            <div slot="append">TP</div>
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogSetVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmSet" :loading="setBtnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script >
import Precision from '@/utils/number-precision';

import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';

import { agentListRelationConfig } from '@/config/column/fiat'
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'AgentRelationList',
  components: {
    Btable,
    Bsearch,
  },
  filters: {
    textFilter(val) {
      if (val == 0) {
        return '不是';
      } else if (val == 1) {
        return '是';
      }
    },
  },
  data() {
    return {
      amountSum: 0,
      isCURDAuth: true,
      btnLoading: false,
      setBtnLoading: false,
      btnArr: [],
      listLoading: false,
      list: [],
      dataList: [],
      configs: [],
      searchCofig: [],
      search_params_obj: {},
      current_page: 1,
      pageSize: 5000,
      labelWidth: '110px',

      page: 1,
      size: 10,
      total: 0,
      lazyTreeNodeMap: new Map(),
      dialogCheckVisible: false,
      dialogEditVisible: false,
      title: '修改收益',
      currItem: {},
      showDialogParent: false,
      queryParentList: [],
      formalWidth: '140px',
      oldLine: {},
      form: {
        uid: '',
        parentUID: '',
        inRate: '',
      },
      rules: {
        inRate: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      dialogSetVisible: false,
      setForm: {
        aaa: '',
      },
      setRules: {
        aaa: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      isEditPanel: 'panel',
      mainId: 0,
      dom: null,
    };
  },
  methods: {
    // 修改收益
    editRow(row, val) {
      this.isEditPanel = val; // false修改弹出框的table : true修改面板区的table
      // 核查是不是根节点
      if (this.mainId == row.uid) {
        this.isEditPanel = 'btn';
        this.changeIndexData();
        return;
      }

      this.dialogEditVisible = true;
      this.$nextTick(() => {
        this.$refs.form.resetFields();
        this.form = {
          uid: row.uid,
          parentUID: +row.parentUID,
          inRate: row.inRate,
          // outRate: row.outRate
          // inRate: this.delPercent(row.inRate),
          // outRate: this.delPercent(row.outRate)
          // weChatBuyRate: this.delPercent(row.weChatBuyRate),
          // bankSellRate: this.delPercent(row.bankSellRate),
          // aliPaySellRate: this.delPercent(row.aliPaySellRate),
          // weChatSellRate: this.delPercent(row.weChatSellRate)
        };
      });
    },

    

    changeIndexData() {
      const firstRow = (this.list && this.list[0]) || [];
      if (!firstRow || firstRow.length == 0) {
        this.$message({ message: '暂无数据', type: 'error' });
        return;
      }
      this.isEditPanel = 'btn';
      this.dialogEditVisible = true;
      this.$nextTick(() => {
        this.$refs.form.resetFields();
        this.form = {
          uid: firstRow.uid,
          parentUID: +firstRow.parentUID,
          inRate: firstRow.inRate,
        };
      });
    },

    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      // this.getList('search');
      if (!this.search_params_obj.uid) {
        this.$message({ message: '必须输入UID才能定位', type: 'error' });
        return;
      }
      if (!this.search_params_obj.direction) {
        this.$message({ message: '必须选择代理关系才能定位', type: 'error' });
        return;
      }
      // 查上级
      if (this.search_params_obj && this.search_params_obj.direction == 1) {
        this.title = '上级关系';
        this.queryParent();
      }
      // 查下级
      if (this.search_params_obj && this.search_params_obj.direction == 2) {
        this.title = '下级关系';
        this.queryParent();
      }
    },

    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.getList();
    },

    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },

    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },

    // 数据处理
    dealChildren(val) {
      let list = val;
      if (list && list.length > 0) {
        list.forEach((v) => {
          v.hasChildren = true;
          if (v.parentUID != 0) {
            if (v.subUserSize > 0) {
              v.hasChildren = true;
            } else {
              v.hasChildren = false;
            }
          }
          v.inRate = this.numToPercent(v.inRate);
        });
      } else {
        list = [];
      }
      return list;
    },

    async getData(id) {
      let list = [];
      const res = await $api.findAcceptanceChild({ uid: id, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        list = this.dealChildren(res.data.data || []);
      } else {
        list = [];
      }
      return list;
    },

    // 主菜单加载子级数据
    async load(tree, treeNode, resolve) {
      let id = tree.uid;
      const res = await $api.getAcceptanceUserRatesOnly({ uid: id, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        const list = this.dealChildren(res.data.data || []);
        resolve(list);
      } else {
        resolve([]);
      }
    },

    // 点击定位（查父级）
    async queryParent(data) {
      // 查下级
      if (this.search_params_obj && this.search_params_obj.direction == 2) {
        const query_data = {
          uid: this.search_params_obj.uid,
          direction: 2,
        };
        const res = await $api.getAcceptanceUserRatesOnly(query_data);
        if (res) {
          let tmpList = this.dealChildren(res.data.data || []);
          this.queryParentList = [];
          setTimeout(() => {
            this.queryParentList = tmpList;
          }, 10);
          setTimeout(() => {
            // 默认展开树表结构的根节点及一级目录，一级目录以下的数据需要通过懒加载来获取
            const htmlDialog = document.getElementsByClassName('query-parent-dialog')[0];
            htmlDialog.getElementsByClassName('el-table__expand-icon')[0].click();
          }, 300);
          this.showDialogParent = true;
        }
      } else {
        const query_data = {
          pageNum: this.current_page,
          pageSize: this.pageSize,
        };
        Object.assign(query_data, this.search_params_obj);
        const res = await $api.getAcceptanceUserRatesOnly(query_data);
        if (res) {
          let tmpList = this.dealChildren(res.data.data || []);
          this.queryParentList = [];
          setTimeout(() => {
            this.queryParentList = tmpList;
          }, 100);
          this.showDialogParent = true;
        }
      }
    },

    // 定位(查父级)弹出框---加载子级请求数据
    async queryParentLoad(tree, treeNode, resolve) {
      const res = await $api.getAcceptanceUserRatesOnly({ uid: tree.uid, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        let list = this.dealChildren(res.data.data || []);
        resolve(list);
      }
    },

    // 修改收益提交
    confirmEdit() {
      // debugger
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const { uid, parentUID, inRate } = this.form;
          const params = {
            uid: uid,
            legalRewardInRate: this.delPercent(inRate),
          };
          this.btnLoading = true;
          // 编辑

          const res = await $api.updateDownAcceptanceRates(params);
          this.btnLoading = false;
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogEditVisible = false;
            if (this.isEditPanel == 'panel') {
              this.getList();
            } else if (this.isEditPanel == 'btn') {
              this.getList();
            } else if (this.isEditPanel == 'top') {
              this.queryParent();
            }
          } else {
            this.$message.error(res.data.data.message);
          }
        }
      });
    },

    // getlist 获取首页表格数据
    async getList(str) {
      if (this.listLoading) return;
      if (this.search_params_obj.direction && !this.search_params_obj.uid) {
        this.$message({ message: '必须输入UID才能定位', type: 'danger' });
        return;
      }
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };

      this.listLoading = true;
      let res = await $api.findAcceptanceChild(query_data);
      if (res) {
        const { amountSum } = res.data.data[0];
        this.amountSum = utils.cutOutNumber(amountSum, 4);
        let list = [];
        if (str && str === 'search' && res.result.userId) {
          list = [res.result];

          if (res.result.list && res.result.list.length > 0) {
            list[0].hasChildren = true;
          }
        } else if (str && str === 'scroll') {
        } else {
          list = this.dealChildren(res.data.data || []);
          this.mainId = list && list[0].uid;
          this.list = [];
          setTimeout(() => {
            this.list = list;
          }, 100);
        }
      }
      this.listLoading = false;
    },

    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = this.form[val] > 100 ? 100 : this.form[val];

      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },

    // 去除百分比符号
    delPercent(val) {
      return val + '%';
    },

    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = (val + '').replace(/\%/, '');
        return val;
      } else {
        // return Precision.divide(val, 100)
      }
    },

    // 数字转为百分比
    numToPercent(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = (val + '').replace(/\%/, '');
        return val;
      } else {
        return Precision.divide(val, 100);
      }
    },
  },

  mounted() {
    let authObj = this.$util.getAuthority('AcceptanceRelation', [], [])
    this.btnArr = authObj.btnArr || []
    

    this.searchCofig = this.$util.clone(agentListRelationConfig)
    this.getList()
    
  }
};
</script>
<style scope lang="scss">
.acceptanceRelation-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }

  .container-middle {
    width: 100%;
    height: auto;
    height: 500px;
    // min-height: 100px;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
  .container-root {
    // margin-top: -36px;
    font-size: 14px;
    // font-family: ;
    .currentTotal-class {

    }
    .total-class {

    }
    span {
      margin: 30px 30px 30px 0;
      min-width: 300px;
    }
  }
}
</style>
