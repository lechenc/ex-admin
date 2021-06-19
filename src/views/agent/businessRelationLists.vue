<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-11-27 14:11:23
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
    <div class="container-middle">
      <el-table v-loading="loading" :data="list" height="100%" style="width: 100%; height: 100%" row-key="userId" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" size="mini" class="new-table" ref="tablenow" :indent="45">
        <el-table-column prop="businessUid" label="商务UID" width="auto" min-width="290"></el-table-column>
        <el-table-column label="用户类型" width="auto" min-width="290">
          <template slot-scope="scope">
            {{ scope.row['businessType'] | businessTypeFilter }}
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="auto" min-width="290"></el-table-column>
        <el-table-column prop="feeCommission" label="手续费返佣比例" align="center" width="150"> </el-table-column>
        <el-table-column prop="packPercent" label="团队长打包比例" align="center" width="150"> </el-table-column>
        <el-table-column prop="availableBalance" label="可用" align="center" width="150"> </el-table-column>
        <el-table-column prop="waitAmount" label="待结算" align="center" width="150"> </el-table-column>
        <el-table-column prop="ensureAmount" label="保证金" align="center" width="140"> </el-table-column>
        <el-table-column v-if="btnArr.includes('edit')" fixed="right" align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button plain type="primary" size="mini" @click="editRow(scope.row, 'panel')">编辑费率</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogEditVisible" width="550px" title="修改返佣费率">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="法币充值返佣费率" prop="legalInRate" :label-width="formalWidth">
          <el-input type="number" placeholder="请输入" v-model="form.legalInRate" @input="checkVal('legalInRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="法币提现返佣费率" prop="legalOutRate" :label-width="formalWidth">
          <el-input type="number" placeholder="请输入" v-model="form.legalOutRate" @input="checkVal('legalOutRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="币币充值返佣费率" prop="inRate" :label-width="formalWidth">
          <el-input type="number" placeholder="请输入" v-model="form.inRate" @input="checkVal('inRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <el-form-item label="币币提现返佣费率" prop="outRate" :label-width="formalWidth">
          <el-input type="number" placeholder="请输入" v-model="form.outRate" @input="checkVal('outRate')">
            <div slot="append" class="gcode">%</div>
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="支付宝购买收益" prop="aliPayBuyRate" :label-width="formalWidth">
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
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="inner-footer">
        <!-- <el-button @click.stop="dialogEditVisible = false">取消</el-button> -->
        <el-button type="primary" :loading="btnLoading" @click.stop="confirmEdit" style="marginLeft='50px'">提交</el-button>
      </div>
    </el-dialog>

    <!-- 关系弹窗 -->
    <el-dialog :title="title" :visible.sync="showDialogParent" width="1250px" class="query-parent-dialog">
      <el-table size="mini" :data="queryParentList" row-key="uid" lazy :load="queryParentLoad" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" height="500px" class="new-table" :indent="35">
        <el-table-column prop="uid" label="编号" width="auto" min-width="290">
          <template scope="scope">
            {{ scope.row['uid'] }}
          </template>
        </el-table-column>
        <el-table-column prop="legalInRate" label="法币充值返佣费率" width="140" align="center">
          <template scope="scope">
            {{ scope.row['legalInRate'] + '%' }}
          </template>
        </el-table-column>
        <el-table-column prop="legalOutRate" label="法币提现返佣费率" width="140" align="center">
          <template scope="scope">
            {{ scope.row['legalOutRate'] + '%' }}
          </template>
        </el-table-column>
        <el-table-column prop="inRate" label="币币充值返佣费率" width="140" align="center">
          <template scope="scope">
            {{ scope.row['inRate'] + '%' }}
          </template>
        </el-table-column>
        <el-table-column prop="outRate" label="币币提现返佣费率" width="140" align="center">
          <template scope="scope">
            {{ scope.row['outRate'] + '%' }}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="weChatBuyRate" label="微信购买收益" width="125" align="center"></el-table-column>
        <el-table-column prop="bankSellRate" label="银行卡出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="aliPaySellRate" label="支付宝出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="weChatSellRate" label="微信出售收益" width="125" align="center"></el-table-column>
        <el-table-column prop="advertiser" label="是否广告商" width="100" align="center">
          <template slot-scope="scope">
            {{ scope.row['advertiser'] | textFilter }}
          </template>
        </el-table-column> -->
        <el-table-column align="center" label="操作" width="120">
          <template slot-scope="scope">
            <el-button plain type="primary" size="mini" @click="editRow(scope.row, 'top')" v-if="btnArr.includes('edit')">修改收益</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <!-- 设置弹窗 -->
    <!-- <el-dialog :visible.sync="dialogSetVisible" width="650px" title="修改收益">
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
    </el-dialog> -->

    <!-- 编辑费率 -->
    <el-dialog title="编辑费率" width="500px" :visible.sync="dialogFormVisible">
      <el-form :model="editForm" ref="editForm" :rules="rules">
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="商务UID" :label-width="formLabelWidth">
              <el-input type="text" v-model="editForm.businessUid" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="手续费返佣比例" :label-width="formLabelWidth" prop="feeCommission">
              <el-input type="text" v-model="editForm.feeCommission" placeholder="请输入" @input="checkVal('feeCommission', 'not')">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="团队长返佣比例" :label-width="formLabelWidth" prop="packPercent">
              <el-input type="text" v-model="editForm.packPercent" placeholder="请输入" @input="checkVal('packPercent', 'not')">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="21">
            <el-form-item label="管理员谷歌" :label-width="formLabelWidth" prop="googleCode">
              <el-input type="text" v-model="editForm.googleCode" placeholder="请输入" @input="checkVal('googleCode')"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script >
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import $api from '@/api/api';
import { businessRelationListsConfig } from '@/config/column/contractAgent';
import mMd5 from '@/utils/module_md5';
import Precision from '@/utils/number-precision';
export default {
  name: 'BusinessLists',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      loading: false,
      form: {},
      editForm: {},
      formLabelWidth: '150px',
      amountSum: 0,
      dialogFormVisible: false,
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

      oldLine: {},

      rules: {
        businessUid: [{ required: true, message: '必填', trigger: 'blur' }],
        feeCommission: [{ required: true, message: '必填', trigger: 'blur' }],
        packPercent: [{ required: true, message: '必填', trigger: 'blur' }],
        googleCode: [{ required: true, message: '必填', trigger: 'blur' }],
      },

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

  methods: {
    confirmOp() {
      this.$refs['editForm'].validate(async (valid) => {
        if (valid) {
          const { userId, feeCommission, packPercent, googleCode,inviterUid,businessType } = this.editForm;
          const params = {
            commissionPercent: feeCommission + '%',
            packPercent: packPercent + '%',
            userId: userId,
            needCheckGoogleCode: true,
            googleCode,
            userType:businessType
          };

          this.btnLoading = true;
          const res = await $api.editRate(params);
          if (res) {
            this.$message({ message: '编辑成功', type: 'success' });
            this.dialogFormVisible = false;
            if (inviterUid==0) {
              this.getList(1);
            } else {
              this.load(this.tree, this.treeNode, this.resolve);
            }
          }
          this.btnLoading = false;
        }
      });
    },
    // 修改收益
    editRow(row) {
      // this.isEditPanel = val;
      // // 核查是不是根节点
      // if (this.mainId === row.uid) {
      //   this.isEditPanel = 'btn';
      //   this.changeIndexData();
      //   return;
      // }
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.resetFields();
        const { businessUid, userId, feeCommission, packPercent,inviterUid ,businessType} = row;
        this.editForm = {
          inviterUid,
          businessUid,
          userId,
          feeCommission: feeCommission.split('%').join(''),
          packPercent: packPercent.split('%').join(''),
          businessType
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
          outRate: firstRow.outRate,
          legalInRate: firstRow.legalInRate,
          legalOutRate: firstRow.legalOutRate,
          // inRate: this.delPercent(firstRow.inRate),
          // outRate: this.delPercent(firstRow.outRate)
          // weChatBuyRate: this.delPercent(firstRow.weChatBuyRate),
          // bankSellRate: this.delPercent(firstRow.bankSellRate),
          // aliPaySellRate: this.delPercent(firstRow.aliPaySellRate),
          // weChatSellRate: this.delPercent(firstRow.weChatSellRate)
        };
      });
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      // this.getList('search');
      if (!this.search_params_obj.businessUid && (this.search_params_obj.type == 0 || this.search_params_obj.type == 2)) {
        return this.$message.error('必须输入UID才能定位');
      }
      if (!this.search_params_obj.type && this.search_params_obj.type != 0 && this.search_params_obj.type != 1) {
        return this.$message.error('必须选择层级关系');
      }
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.searchCofig[1].value = 1;
      this.getList(1);
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
          if (v.subUserSize > 0) {
            v.hasChildren = true;
          } else {
            v.hasChildren = false;
          }
          v.inRate = this.numToPercent(v.inRate);
          v.outRate = this.numToPercent(v.outRate);
          v.legalInRate = this.numToPercent(v.legalInRate);
          v.legalOutRate = this.numToPercent(v.legalOutRate);
          // v.weChatBuyRate = this.numToPercent(v.weChatBuyRate)
          // v.bankSellRate = this.numToPercent(v.bankSellRate)
          // v.aliPaySellRate = this.numToPercent(v.aliPaySellRate)
          // v.weChatSellRate = this.numToPercent(v.weChatSellRate)
        });
      } else {
        list = [];
      }
      return list;
    },

    async getData(id) {
      let list = [];
      const res = await $api.findInviteChildNEW({ uid: id, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
      if (res) {
        list = this.dealChildren(res.data.data || []);
      } else {
        list = [];
      }
      return list;
    },
    async load(tree, treeNode, resolve) {
      try {
        const res = await $api.apiGetBusinessRelationList({
          businessUid: tree.businessUid,
          type: 2,
        });
        this.tree = tree;
        this.treeNode = treeNode;
        this.resolve = resolve;
        const { list } = res.data.data;
        list.forEach((v) => {
          v['hasChildren'] = v['haveLower'];
        });
        resolve(list);
      } catch (error) {
        console.log('error');
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
        const res = await $api.getCurrentUserRatesOnly(query_data);
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
        const res = await $api.getCurrentUserRatesOnly(query_data);
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
      const res = await $api.getCurrentUserRatesOnly({ uid: tree.uid, direction: 2, pageNum: this.current_page, pageSize: this.pageSize });
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
          const { uid, parentUID, outRate, inRate, legalOutRate, legalInRate } = this.form;
          const params = {
            merchantUid: uid,
            outRate: this.delPercent(outRate),
            inRate: this.delPercent(inRate),
            legalInRate: this.delPercent(legalInRate),
            legalOutRate: this.delPercent(legalOutRate),
          };

          this.btnLoading = true;
          // 编辑
          // const res = this.isEditPanel == 'btn' ? await $api.setUpdatePlatformUserRates(params) : await $api.updateDownUserRates(params)
          const res = await $api.updateDownUserRates(params);
          if (res) {
            this.$message({ message: '修改成功', type: 'success' });
            this.dialogEditVisible = false;
            if (this.isEditPanel == 'panel') {
              // this.getList();//
              // const arr = await this.getData(parentUID)
              // console.log('this',this)
              // this.$set((this.$refs.tablenow as any).store.states.lazyTreeNodeMap, parentUID, arr)
              this.getList();
            } else if (this.isEditPanel == 'btn') {
              this.getList();
            } else if (this.isEditPanel == 'top') {
              this.queryParent();
            }
          }
          this.btnLoading = false;
        }
      });
    },

    // getlist 获取首页表格数据
    async getList(type) {
      try {
        if (this.loading) return;
        // if (this.search_params_obj.direction && !this.search_params_obj.uid) {
        //   this.$message({ message: '必须输入UID才能定位', type: 'danger' });
        //   return;
        // }
        const query_data = {
          type,
        };
        Object.assign(query_data, this.search_params_obj);
        this.loading = true;
        let res = await $api.apiGetBusinessRelationList(query_data);
        if (res) {
          const { list } = res.data.data;
          list.forEach((v) => {
            v['hasChildren'] = v['haveLower'];
          });
          this.list = list;
        } else {
          this.list = [];
        }
        this.loading = false;
      } catch (error) {
        console.log('error', error);
      }
    },

    // 对输入值的范围进行限制
    checkVal(val, not) {
      this.editForm[val] = (this.editForm[val] + '').replace(/[^\d]/g, '');
      if (not) {
        this.editForm[val] = this.editForm[val] > 100 ? 100 : this.editForm[val];
      }
    },

    // 去除百分比符号
    delPercent(val) {
      // if ((val + '').indexOf('%') !== -1) {
      //   return (val + '').replace(/\%/, '')
      // } else {
      //   return val
      // }
      return val + '%';
      // return Precision.times(val, 100) + '%'
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

  computed: {},
  filters: {
    textFilter(val) {
      if (val === 0) {
        return '不是';
      } else if (val === 1) {
        return '是';
      }
    },
    businessTypeFilter(val) {
      if (val === 31) {
        return '商务';
      } else if (val === 32) {
        return '商务代理';
      } else {
        return '';
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('BusinessRelationLists', [], []);
    this.btnArr = authObj.btnArr || [];
    this.searchCofig = this.$util.clone(businessRelationListsConfig);
    this.getList(1);
  },
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
  .container-root {
    // margin-top: px;
    font-size: 14px;
    // font-family: ;
    .currentTotal-class {
    }
    .total-class {
    }
    span {
      margin: 30px 30px 30px 0;
    }
  }
  .el-button--medium {
    margin-right: 210px;
  }
}
</style>
