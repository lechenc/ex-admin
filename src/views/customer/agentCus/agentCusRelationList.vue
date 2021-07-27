<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-10-17 18:51:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="agentList-container">
    <div class="container-top">
      <!-- <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" @do-parent="queryParent" :isParent="true" /> -->
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn">
      <el-button type="primary" size="medium" @click="goPageNext" v-if="btnArr.includes('agentRevenue')">返佣记录</el-button>
    </div>
    <div class="container-middle">
      <el-table
        :data="list"
        height="100%"
        style="width: 100%; height: 100%"
        row-key="uid"
        border
        lazy
        :load="load"
        :tree-props="{ children:'children', hasChildren: 'hasChildren' }"
        size="mini"
        class="new-table"
        ref="tablenow"
        :indent="45"
      >
        <!-- children: 'children', -->
        <el-table-column prop="uid" label="编号" width="auto" min-width="290"></el-table-column>
        <!-- <el-table-column prop="" label="用户名称" align="center" width="140"></el-table-column>
        <el-table-column align="center" prop="account" label="账号" width="180"> </el-table-column> -->
        <el-table-column prop="bankBuyRate" label="银行卡购买收益" align="center" width="140"></el-table-column>
        <el-table-column prop="aliPayBuyRate" label="支付宝购买收益" align="center" width="140"></el-table-column>
        <el-table-column prop="weChatBuyRate" label="微信购买收益" align="center" width="140"></el-table-column>
        <el-table-column prop="bankSellRate" label="银行卡出售收益" align="center" width="140"></el-table-column>
        <el-table-column prop="aliPaySellRate" label="支付宝出售收益" align="center" width="140"></el-table-column>
        <el-table-column prop="weChatSellRate" label="微信出售收益" align="center" width="140"></el-table-column>
        <el-table-column prop="advertiser" label="是否广告商" align="center" width="140">
          <template slot-scope="scope">
            {{ scope.row['advertiser'] | textFilter }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button plain type="primary" size="mini" @click="editRow(scope.row, 'panel')" v-if="btnArr.includes('edit')">修改收益</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- v-if="scope.row['advertiser'] == 1" -->
    <!-- <div class="container-footer">
      <div>
        <span>共{{ pages }}页</span>/<span>{{ total }}条数据</span>
      </div>
      <el-pagination
        background
        @size-change="pageSizeChange"
        @current-change="goPage"
        layout="total,sizes, prev, pager, next, jumper"
        :current-page="current_page"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div> -->

    <!-- 表格勾选弹窗 -->
    <!-- <TableCheckBox :visible.sync="dialogCheckVisible" @handler="getCheckData" @close="closeCheckDialog" :curItem="currItem"></TableCheckBox> -->
    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogEditVisible" width="550px" title="修改收益">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="银行卡购买收益" prop="bankBuyRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.bankBuyRate" @input="checkVal('bankBuyRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="银行卡出售收益" prop="bankSellRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.bankSellRate" @input="checkVal('bankSellRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="支付宝购买收益" prop="aliPayBuyRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.aliPayBuyRate" @input="checkVal('aliPayBuyRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="支付宝出售收益" prop="aliPaySellRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.aliPaySellRate" @input="checkVal('aliPaySellRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="微信购买收益" prop="weChatBuyRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.weChatBuyRate" @input="checkVal('weChatBuyRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="微信出售收益" prop="weChatSellRate" :label-width="formalWidth">
          <el-input type="text" placeholder="请输入" v-model="form.weChatSellRate" @input="checkVal('weChatSellRate')">
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
      <el-table
        size="mini"
        :data="queryParentList"
        row-key="uid"
        lazy
        :load="queryParentLoad"
        :tree-props="{children:'children', hasChildren: 'hasChildren' }"
        height="500px"
        class="new-table"
        :indent="35"
      >
        <el-table-column prop="uid" label="编号" min-width="360"></el-table-column>
        <el-table-column prop="bankBuyRate" label="银行卡购买收益" width="125" align="center"></el-table-column>
        <el-table-column prop="aliPayBuyRate" label="支付宝购买收益" width="125" align="center"></el-table-column>
        <el-table-column prop="weChatBuyRate" label="微信购买收益" width="125" align="center"></el-table-column>
        <el-table-column prop="bankSellRate" label="银行卡出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="aliPaySellRate" label="支付宝出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="weChatSellRate" label="微信出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="advertiser" label="是否广告商" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row['advertiser'] | textFilter }}
          </template>
        </el-table-column>
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
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { agentListConfig } from '@/config/column/fiat';
import TableCheckBox from '@/components/fiat/tableCheckBox';
import $api from '@/api/api';
import utils from '@/utils/util';
import Precision from '@/utils/number-precision';

export default {
  name: 'AgentCusRelationList',
  components: {
    Btable,
    Bsearch,
    TableCheckBox,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 修改收益提交loading
      setBtnLoading: false, // 设置提交loading
      btnArr: [], // 配置的按钮
      listLoading: false, // 表格loading
      list: [], // 列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 5000, // 当前每页显示页码数
      labelWidth: '110px',
      // total: 0, // 总条数
      // pages: 0, // 总页数

      // 分页数据
      page: 1,
      size: 10,
      total: 0,
      lazyTreeNodeMap: new Map(),

      dialogCheckVisible: false, // 是否显示迁移勾选表格
      dialogEditVisible: false, // 是否显示修改弹出框
      title: '修改收益',
      currItem: {},
      showDialogParent: false, // 弹出定位（查父级）弹出框
      queryParentList: [], // 弹出定位（查父级）弹出框内的数据列表
      formalWidth: '140px',

      oldLine:{},

      form: {
        uid: '',
        parentUID: '',
        bankBuyRate: '',
        aliPayBuyRate: '',
        weChatBuyRate: '',
        bankSellRate: '',
        aliPaySellRate: '',
        weChatSellRate: '',
      },
      rules: {
        bankBuyRate: [{ required: true, message: '必填', trigger: 'blur' }],
        aliPayBuyRate: [{ required: true, message: '必填', trigger: 'blur' }],
        weChatBuyRate: [{ required: true, message: '必填', trigger: 'blur' }],
        bankSellRate: [{ required: true, message: '必填', trigger: 'blur' }],
        aliPaySellRate: [{ required: true, message: '必填', trigger: 'blur' }],
        weChatSellRate: [{ required: true, message: '必填', trigger: 'blur' }],
      },

      // 费率列表
      cashList: [{ label: 'a', value: '1' }, { label: 'a', value: '1' }],
      dialogSetVisible: false, // 显示设置弹框
      setForm: {
        aaa: '',
      },
      setRules: {
        aaa: [{ required: true, message: '必填', trigger: 'blur' }],
      },
      isEditPanel: 'panel', // panel页面中央区table表格   btn 页顶“修改平台”  top修改搜索弹出框
      mainId: 0,
      dom: null,
    };
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
          bankBuyRate: this.delPercent(row.bankBuyRate),
          aliPayBuyRate: this.delPercent(row.aliPayBuyRate),
          weChatBuyRate: this.delPercent(row.weChatBuyRate),
          bankSellRate: this.delPercent(row.bankSellRate),
          aliPaySellRate: this.delPercent(row.aliPaySellRate),
          weChatSellRate: this.delPercent(row.weChatSellRate),
        };
      });
    },
    // 设置
    goPageNext() {
      this.$router.push({ path: '/fiat/agentRevenue' });
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
          bankBuyRate: this.delPercent(firstRow.bankBuyRate),
          aliPayBuyRate: this.delPercent(firstRow.aliPayBuyRate),
          weChatBuyRate: this.delPercent(firstRow.weChatBuyRate),
          bankSellRate: this.delPercent(firstRow.bankSellRate),
          aliPaySellRate: this.delPercent(firstRow.aliPaySellRate),
          weChatSellRate: this.delPercent(firstRow.weChatSellRate),
        };
      });
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1;
      }
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
      this.searchCofig.forEach(v => {
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
        list.forEach(v => {
          if (v.subUserSize > 0) {
            v.hasChildren = true;
          } else {
            v.hasChildren = false;
          }
          v.bankBuyRate = this.numToPercent(v.bankBuyRate);
          v.aliPayBuyRate = this.numToPercent(v.aliPayBuyRate);
          v.weChatBuyRate = this.numToPercent(v.weChatBuyRate);
          v.bankSellRate = this.numToPercent(v.bankSellRate);
          v.aliPaySellRate = this.numToPercent(v.aliPaySellRate);
          v.weChatSellRate = this.numToPercent(v.weChatSellRate);
        });
      } else {
        list = [];
      }
      return list;
    },
    // 关闭表格勾选弹出框
    // closeCheckDialog() {
    //   this.dialogCheckVisible = false;
    // },
    // 迁移弹出框勾选后隐藏
    // getCheckData(data) {
    //   this.getList();
    //   this.dialogCheckVisible = false;
    // },
    // // 打开迁移弹出框
    // openDialogCheck(data) {
    //   this.currItem = data;
    //   this.dialogCheckVisible = true;
    // },
    async getData(id) {
      let list = []
      const res = await $api.findInviteChildNEW({ uid: id, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        list = this.dealChildren(res.data.data || []);
      } else {
        list = []
      }
      return list
    },
    // 主菜单加载子级数据
    async load(tree, treeNode, resolve) {
      let id = tree.uid;
      const res = await $api.findInviteChildNEW({ uid: id, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
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
        };
        const res = await $api.getCurrentUserRatesOnly(query_data);
        if (res) {
          let tmpList = this.dealChildren(res.data.data || []);
          this.queryParentList = [];
          setTimeout(() => {
            this.queryParentList = tmpList;
          }, 10);
          setTimeout(() => {
            // 默认展开树表结构的根节点及一级目录，一级目录以下的数据需要通过懒加载来获取
            const htmlDialog = document.getElementsByClassName('query-parent-dialog')
            htmlDialog[0].getElementsByClassName('el-table__expand-icon')[0].click();
          }, 300);
          this.showDialogParent = true;
        }
      }else{
        const query_data = {
          pageNum: this.current_page,
          pageSize: this.pageSize,
        };
        Object.assign(query_data, this.search_params_obj);
        const res = await $api.findInviteChildNEW(query_data);
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
      const res = await $api.findInviteChildNEW({ uid: tree.uid, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        let list = this.dealChildren(res.data.data || []);
        resolve(list);
      }
    },
    // 修改收益提交
    confirmEdit() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { uid, parentUID, bankBuyRate, aliPayBuyRate, weChatBuyRate, bankSellRate, aliPaySellRate, weChatSellRate } = this.form;
          const params = {
            uid: +uid,
            parentUID: +parentUID,
            bankBuyRate: this.percentToNum(bankBuyRate),
            aliPayBuyRate: this.percentToNum(aliPayBuyRate),
            weChatBuyRate: this.percentToNum(weChatBuyRate),
            bankSellRate: this.percentToNum(bankSellRate),
            aliPaySellRate: this.percentToNum(aliPaySellRate),
            weChatSellRate: this.percentToNum(weChatSellRate),
          };
          this.btnLoading = true;
          //编辑
          const res = this.isEditPanel == 'btn' ? await $api.setUpdatePlatformUserRates(params) : await $api.updateDownUserRates(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogEditVisible = false;
            if (this.isEditPanel == 'panel') {
              // this.getList();// 
              const arr = await this.getData(parentUID)
              this.$set(this.$refs.tablenow.store.states.lazyTreeNodeMap, parentUID, arr)
            }else if(this.isEditPanel == 'btn'){
              this.getList();
            } else if (this.isEditPanel == 'top') {
              this.queryParent();
            }
          }
          this.btnLoading = false;
        }
      });
    },
    // 修改设置提交
    // confirmSet() {
    //   this.$refs['setForm'].validate(async valid => {
    //     if (valid) {
    //       const { aaa } = this.setForm;
    //       const params = {
    //         aaa,
    //       };
    //       this.setBtnLoading = true;
    //       // 新增 编辑
    //       const res = await $api.warehouseAddBlack(params);
    //       if (res) {
    //         this.$message({ message: '设置TP成功', type: 'success' });
    //         this.dialogSetVisible = false;
    //       }
    //       this.setBtnLoading = false;
    //     }
    //   });
    // },
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
      // Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      let res = await $api.findInviteChildNEW(query_data);
      if (res) {
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
      // this.form[val] = this.form[val] > 100 ? 100 : this.form[val];
      this.form[val] = (this.form[val] + '').replace(/\%/, '');
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 去除百分比符号
    delPercent(val) {
      if ((val + '').indexOf('%') !== -1) {
        return val.replace(/\%/, '');
      } else {
        return val;
      }
    },
    // 百分比转为数值
    percentToNum(val) {
      if ((val + '').indexOf('%') !== -1) {
        val = val.replace(/\%/, '');
      } else {
      }
      // return this.$util.accDiv(val, 100);
      return Precision.divide(val, 100);
    },
    // 数字转为百分比
    numToPercent(val) {
      // return this.$util.accMul(val, 100) + '%';
      return Precision.times(val, 100) + '%';
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('AgentList', [], []);
    this.btnArr = authObj.btnArr || [] || [];

    this.searchCofig = this.$util.clone(agentListConfig);
    this.getList();
  },
  // destroyed() {
  //   this.dom.removeEventListener('scroll');
  // },
};
</script>
<style scope lang="scss">
.agentList-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
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
}
</style>
