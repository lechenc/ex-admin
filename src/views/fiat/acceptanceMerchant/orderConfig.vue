<template>
  <div class="orderConfig-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" :excelLoading="excelLoading" :exportExcel="true" @do-exportExcel="exportExcel" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 配置弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="900px" :title="title" :close-on-click-modal="false" @close="handleClosed">
      <hr />
      <el-form :model="form" ref="form" :rules="rules">
        <el-row :span="24">
          <el-col :span="12">
            <el-form-item label="商户名称" :label-width="formLabelWidth" prop="userName">
              <el-input v-model="form.userName" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商户编号" :label-width="formLabelWidth" prop="uid">
              <el-input v-model="form.uid" autocomplete="off" placeholder="请输入" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 5.24 -->
        <div class="limit-box">
          <div class="header-limit">
            <div class="limit-box-h4">
              <h4>充值提现限额配置</h4>
            </div>
            <!-- <el-button type="primary" size="mini" :disabled="!fastNum" @click="fastTrade">{{advertType === 2 ? '编辑' : '保存'}}</el-button> -->
            <div class="limit-box-btn">
              <el-button type="primary" @click="handlerEditOrSave(advertType === 1 ? 1 : 2)">{{ advertType === 1 ? '编辑' : '保存' }}</el-button>
            </div>
          </div>
          <el-form ref="limitForm" :model="limitForm">
            <div class="main-limit">
              <div class="limit-box-recharge">
                <el-form-item label="充值单笔限额 :" :label-width="formLabelWidth">
                  <el-input v-model="limitForm.minLimit" style="width: 85px" placeholder="最小值" :disabled="!editOrSave" oninput="value=value.replace(/[^0-9.]/g,'')" @input="handlerVal(limitForm.minLimit, limitForm.maxLimit)"></el-input>-
                  <el-input v-model="limitForm.maxLimit" style="width: 85px" placeholder="最大值" :disabled="!editOrSave" oninput="value=value.replace(/[^0-9.]/g,'')" @input="handlerVal(limitForm.minLimit, limitForm.maxLimit)"></el-input>
                  <span>RMB</span>
                </el-form-item>
                <!-- oninput ="value=value.replace(/[^0-9.]/g,'')"   @input="checkVal('minLimit')"-->
              </div>
              <div class="limit-box-withdrow">
                <el-form-item label="提现单笔限额 :" :label-width="formLabelWidth">
                  <el-input v-model="limitForm.minLimitWithdrow" style="width: 85px" placeholder="最小值" :disabled="!editOrSave" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>-
                  <el-input v-model="limitForm.maxLimitWithdrow" style="width: 85px" placeholder="最大值" :disabled="!editOrSave" oninput="value=value.replace(/[^0-9.]/g,'')"></el-input>
                  <span>RMB</span>
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
        <div class="advanced_first" style="marginleft: 81px">
          <template>
            <el-row>
              <h4>充值授权配置</h4>
              <p>(配置成功后此商户的购买订单将分配给指定的渠道或者指定的承兑商)</p>
            </el-row>
          </template>
          <el-row type="flex" :span="10">
            <el-col :span="9">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="渠道授权配置" name="first"></el-tab-pane>
                <el-tab-pane label="承兑商授权配置" name="second"> </el-tab-pane>
              </el-tabs>
            </el-col>
            <!-- v-model -->
            <el-col :span="9">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <div class="btn" style="marginleft: 150px">
                  <el-button type="primary" v-model="activeName" name="first" @click="changeTopBtn">
                    {{ activeName === 'first' ? '添加渠道' : '添加承兑商' }}
                  </el-button>
                </div>
              </el-tabs>
            </el-col>
          </el-row>
          <!-- 充值列表 -->
          <template>
            <!-- 渠道 -->
            <el-table v-if="activeName === 'first'" :data="depositChannelList" border height="150" style="width: 100%">
              <el-table-column prop="channelAdvertiserName" label="渠道名称" v-if="activeName == 'first'" width="180"> </el-table-column>

              <el-table-column prop="channelAdvertiserUid" label="渠道编号" v-if="activeName == 'first'" width="180"> </el-table-column>

              <el-table-column prop="depositStatus" label="是否开启">
                <template slot-scope="scope">
                  <el-switch :value="scope.row.depositStatus" :active-value="1" :inactive-value="2" @input="changContractTypeTopAcc(scope.row)" />
                </template>
              </el-table-column>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRowTop1(scope.$index, depositChannelList)" type="text" size="small"> 删除 </el-button>
                </template>
              </el-table-column>
            </el-table>

            <!-- 承兑商 -->
            <el-table v-if="activeName === 'second'" :data="withdrawChannelList" border height="150" style="width: 100%">
              <el-table-column prop="channelAdvertiserName" label="承兑商昵称" v-if="activeName == 'second'" width="180"> </el-table-column>

              <el-table-column prop="channelAdvertiserUid" label="承兑商编码" v-if="activeName == 'second'" width="180"> </el-table-column>
              <el-table-column prop="depositStatus" label="是否开启">
                <template slot-scope="scope">
                  <el-switch :value="scope.row.depositStatus" :active-value="1" :inactive-value="2" @input="changContractTypeTopCheel(scope.row)" />
                </template>
              </el-table-column>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRowTop2(scope.$index, withdrawChannelList)" type="text" size="small"> 删除 </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="advanced_second" style="marginleft: 81px">
          <template>
            <el-row>
              <h4>提现授权配置</h4>
              <p>(配置成功后此商户的购买订单将分配给指定的渠道或者指定的承兑商)</p>
            </el-row>
          </template>
          <el-row type="flex" :span="10">
            <el-col :span="9">
              <el-tabs v-model="activeName_s" @tab-click="handleClick_s">
                <el-tab-pane label="渠道授权配置" name="three"> </el-tab-pane>
                <el-tab-pane label="承兑商授权配置" name="four"> </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :span="9">
              <el-tabs v-model="activeName_s" @tab-click="handleClick_s">
                <div class="btn" style="marginleft: 150px">
                  <el-button type="primary" v-model="activeName_s" name="three" @click="changeBottomBtn">
                    {{ activeName_s === 'three' ? '添加渠道' : '添加承兑商' }}
                  </el-button>
                </div>
              </el-tabs>
            </el-col>
          </el-row>
          <!-- 提现列表 -->
          <template>
            <!-- 渠道 -->
            <el-table v-if="activeName_s === 'three'" :data="depositAdvertiserList" border height="150" style="width: 100%">
              <el-table-column prop="channelAdvertiserName" label="渠道名称" v-if="activeName_s == 'three'" width="180"> </el-table-column>

              <el-table-column prop="channelAdvertiserUid" label="渠道编号" v-if="activeName_s == 'three'" width="180"> </el-table-column>

              <el-table-column prop="depositStatus" label="是否开启">
                <template slot-scope="scope">
                  <el-switch :active-value="1" :inactive-value="2" :value="scope.row.depositStatus" @input="changContractTypeAcc(scope.row)" />
                </template>
              </el-table-column>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRowTop3(scope.$index, depositAdvertiserList)" type="text" size="small"> 删除 </el-button>
                </template>
              </el-table-column>
            </el-table>

            <!-- 提现承兑商 -->
            <el-table v-if="activeName_s === 'four'" :data="withdrawAdvertiserList" border height="150" style="width: 100%">
              <el-table-column prop="channelAdvertiserName" label="承兑商昵称" v-if="activeName_s == 'four'" width="180"> </el-table-column>

              <el-table-column prop="channelAdvertiserUid" label="承兑商编码" v-if="activeName_s == 'four'" width="180"> </el-table-column>

              <el-table-column prop="depositStatus" label="是否开启">
                <template slot-scope="scope">
                  <el-switch :active-value="1" :inactive-value="2" :value="scope.row.depositStatus" @input="changContractTypeCheel(scope.row)" />
                </template>
              </el-table-column>
              <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRowTop4(scope.$index, withdrawAdvertiserList)" type="text" size="small"> 删除 </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </el-form>
    </el-dialog>
    <!-- 充值渠道 -->
    <el-dialog v-if="activeName === 'first' && btn_type === 1" :close-on-click-modal="false" title="添加渠道授权" :visible.sync="createVisible" width="800px" center>
      <template>
        <el-table height="250" :data="depositChannelList_Btn" tooltip-effect="dark" border style="margin: 30px auto; width: 600px" @selection-change="handleSelectionDepositChannelDeposit">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="渠道名称" prop="channelName" width="272"></el-table-column>
          <el-table-column prop="id" label="渠道编码" width="272"></el-table-column>
        </el-table>
      </template>
      <div class="advance_page">
        <icon-page :total="total1" :pages="pages1"></icon-page>
        <el-pagination background @size-change="pageSizeChange1" @current-change="goPage1" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page1" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize1" :total="total1"> </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false">取 消</el-button>
        <el-button type="primary" @click="createAgent(1)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 提现渠道 -->
    <el-dialog v-if="activeName_s === 'three' && btn_type === 2" :close-on-click-modal="false" title="添加渠道授权" :visible.sync="createVisible" width="800px" center>
      <template>
        <el-table height="250" :data="depositChannelList_Bottom" tooltip-effect="dark" border style="margin: 30px auto; width: 600px" @selection-change="handleSelectionDepositChannelBottom">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="渠道名称" prop="channelName" width="272"></el-table-column>
          <el-table-column prop="id" label="渠道编码" width="272"></el-table-column>
        </el-table>
      </template>
      <div class="advance_page">
        <icon-page :total="total3" :pages="pages3"></icon-page>
        <el-pagination background @size-change="pageSizeChange3" @current-change="goPage3" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize3" :total="total3"> </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false">取 消</el-button>
        <el-button type="primary" @click="createAgent(2)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 充值承兑商 -->
    <el-dialog v-if="activeName === 'second' && btn_type === 1" @close="depositClose(1)" :close-on-click-modal="false" title="添加承兑商授权" :visible.sync="createVisible" width="800px" center>
      <div class="search">
        <el-form :inline="true" :model="depositAdvertiseForm">
          <el-form-item>
            <el-input placeholder="请输入承兑商编码" v-model="depositAdvertiseForm.depositAcceptorCode"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="lookLower(1)">查下级</el-button>
          </el-form-item>
        </el-form>
      </div>
      <template>
        <el-table height="250" :data="withdrawChannelList_Btn" tooltip-effect="dark" border style="margin: 30px auto; width: 600px" @selection-change="handleSelectionDepositAdverTop">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="承兑商昵称" prop="advertiserName" width="272"></el-table-column>
          <el-table-column prop="advertiserUid" label="承兑商编码" width="272"></el-table-column>
        </el-table>
        <div class="accept_page" v-if="lookerPages_type === 1">
          <icon-page :total="total2" :pages="pages2"></icon-page>
          <el-pagination background @size-change="pageSizeChange2" @current-change="goPage2" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page2" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize2" :total="total2"> </el-pagination>
        </div>
        <div class="accept_page" v-if="lookerPages_type !== 1">
          <icon-page :total="total6" :pages="pages6"></icon-page>
          <el-pagination background @size-change="pageSizeChange6" @current-change="goPage6" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page6" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize6" :total="total6"> </el-pagination>
        </div>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button @click="comfirmFalse(1)">取 消</el-button>
        <el-button type="primary" @click="createAgent(3)">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 提现承兑商 -->
    <el-dialog v-if="activeName_s === 'four' && btn_type === 2" @close="depositClose(2)" :close-on-click-modal="false" title="添加承兑商授权" :visible.sync="createVisible" width="800px" center>
      <div class="search">
        <el-form :model="withdrawAdvertiseForm" :inline="true">
          <el-form-item>
            <el-input placeholder="请输入承兑商编码" v-model="withdrawAdvertiseForm.withdrawAcceptorCode"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="lookLower(2)">查下级</el-button>
          </el-form-item>
        </el-form>
      </div>
      <template>
        <el-table height="250" :data="withdrawChannelList_Bottom" tooltip-effect="dark" border style="margin: 30px auto; width: 600px" @selection-change="handleSelectionDepositAdverBottom">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="承兑商昵称" prop="advertiserName" width="272"></el-table-column>
          <el-table-column prop="advertiserUid" label="承兑商编码" width="272"></el-table-column>
        </el-table>
        <div class="accept_page" v-if="lookerPages_type === 1">
          <icon-page :total="total4" :pages="pages4"></icon-page>
          <el-pagination background @size-change="pageSizeChange4" @current-change="goPage4" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page4" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize4" :total="total4"> </el-pagination>
        </div>
        <div class="accept_page" v-if="lookerPages_type !== 1">
          <icon-page :total="total5" :pages="pages5"></icon-page>
          <el-pagination background @size-change="pageSizeChange5" @current-change="goPage5" layout="total,sizes, prev, pager, next, jumper" :current-page="current_page5" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize5" :total="total5"> </el-pagination>
        </div>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button @click="comfirmFalse(2)">取 消</el-button>
        <el-button type="primary" @click="createAgent(4)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { orderConfigCol, orderConfigColNoBtn, orderConfigConfig } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'OrderConfig',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      chargeMaximum: '', // 限额配置金额,,
      chargeMinimum: '',
      withdrawalMinimum: '',
      withdrawalMaximum: '',
      chargeLimit: '',
      withdrawalLimit: '',
      editOrSave: false, // 是否禁用,
      advertType: 1, // 1-编辑 2-保存,
      minLimit: '', // 最小限额,
      maxLimit: '', // 最大限额,
      lookerPages_type: 1,
      depositChannelList: [],
      depositAdvertiserList: [],
      withdrawChannelList: [],
      withdrawAdvertiserList: [],
      depositChannelList_Bottom: [], // 提现未添加的渠道列表,
      withdrawChannelList_Bottom: [], // 提现未添加的承兑商列表,
      depositChannelList_Btn: [], // 充值未添加的渠道列表,
      withdrawChannelList_Btn: [], // 充值未添加的承兑商列表,
      depositStatus: '',
      depositAcceptorCode: '', // 充值承兑商form,
      withdrawAcceptorCode: '', // 提现承兑商form,
      activeName: 'first', //,
      activeName_s: 'three',
      disabled: false,
      listLoading: false, // 表格loading,
      btnLoading: false,
      createVisible: false,
      calLoading: false,
      excelLoading: false, // 导出loadiing,
      list: [], //委托列表,
      dataList: [], // 用于导出的数据,
      configs: [], // 委托列表列配置,
      searchCofig: [], // 搜索框配置,
      search_params_obj: {}, // 搜索框对象
      current_page1: 1,
      pageSize1: 10, // 当前每页显示页码数,
      total1: 0, // 总条数,
      pages1: 0, // 总页数
      current_page2: 1,
      pageSize2: 10, // 当前每页显示页码数,
      total2: 0, // 总条数,
      pages2: 0, // 总页数
      current_page3: 1,
      pageSize3: 10, // 当前每页显示页码数,
      total3: 0, // 总条数,
      pages3: 0, // 总页数
      current_page4: 1,
      pageSize4: 10, // 当前每页显示页码数,
      total4: 0, // 总条数,
      pages4: 0, // 总页数
      current_page5: 1,
      pageSize5: 10, // 当前每页显示页码数,
      total5: 0, // 总条数,
      pages5: 0, // 总页数
      current_page6: 1,
      pageSize6: 10, // 当前每页显示页码数,
      total6: 0, // 总条数,
      pages6: 0, // 总页数
      current_page: 1, // 当前页码,
      pageSize: 10, // 当前每页显示页码数,
      total: 0, // 总条数,
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      assetsList: [], // 资产管理列表,
      isModify: false, // 是否禁用
      nowUid: 0,
      userName: '',
      userId: 0,
      title: '',
      valueif: false,
      dialogVisible: false, // 是否显示弹窗,
      labelWidth: '100px',
      btn_type: 1, // 1 充值 2 提现
      temp: '',
      // 1-充值渠道 2-提现渠道 3- 充值承兑商 4-提现承兑商,
      multipleSelection1: [],
      multipleSelection2: [],
      multipleSelection3: [],
      multipleSelection4: [],
      depositChannelArr: [],
      row: '',
      formLabelWidth: '150px',
      formRules: {},

      ruleForm: {},

      form: {
        userName: '',
        userId: '',
      },
      withdrawAdvertiseForm: {
        withdrawAcceptorCode: '',
      },
      depositAdvertiseForm: {
        depositAcceptorCode: '',
      },
      rules: {},
      limitForm: {
        minLimit: '',
        maxLimit: '',
      },
    };
  },
  watch: {
    createVisible(value) {
      if (value) {
        this.ruleForm = {};
      }
    },
  },
  methods: {
    depositClose(val) {
      if (val === 1) {
        this.depositAdvertiseForm.depositAcceptorCode = '';
      }
      if (val === 2) {
        this.withdrawAdvertiseForm.withdrawAcceptorCode = '';
      }
    },

    comfirmFalse(val) {
      if (val === 1) {
        this.depositAdvertiseForm.depositAcceptorCode = '';
        this.createVisible = false;
      }
      if (val === 2) {
        this.lookerPages_type = 1;
        this.withdrawAdvertiseForm.withdrawAcceptorCode = '';
        this.createVisible = false;
      }
    },
    pageSizeChange(val) {
      this.current_page = 1;
      this.pageSize = val;
      this.getList();
    },
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    pageSizeChange1(val) {
      this.current_page1 = 1;
      this.pageSize1 = val;
      this.changeTopBtn();
    },

    goPage1(val) {
      this.current_page1 = val;
      this.changeTopBtn();
    },

    // 充值承兑商
    pageSizeChange2(val) {
      this.current_page2 = 1;
      this.pageSize2 = val;
      this.changeTopBtn();
    },

    goPage2(val) {
      this.current_page2 = val;
      this.changeTopBtn();
    },

    // 提现渠道
    pageSizeChange3(val) {
      this.current_page3 = 1;
      this.pageSize3 = val;
      this.changeBottomBtn();
    },

    goPage3(val) {
      this.current_page3 = val;
      this.changeBottomBtn();
    },

    // 提现承兑商
    pageSizeChange4(val) {
      this.current_page4 = 1;
      this.pageSize4 = val;
      this.changeBottomBtn();
    },

    goPage4(val) {
      this.current_page4 = val;
      this.changeBottomBtn();
    },

    pageSizeChange5(val) {
      this.lookerPages_type = 2;
      this.current_page5 = 1;
      this.pageSize5 = val;
      if (this.lookerPages_type !== 1) {
        this.lookLower(2);
      }
    },

    goPage5(val) {
      this.lookerPages_type = 2;
      this.current_page5 = val;
      if (this.lookerPages_type !== 1) {
        this.lookLower(2);
      }
    },

    pageSizeChange6(val) {
      this.lookerPages_type = 3;
      this.current_page6 = 1;
      this.pageSize6 = val;
      if (this.lookerPages_type !== 1) {
        this.lookLower(1);
      }
    },

    goPage6(val) {
      this.lookerPages_type = 3;
      this.current_page6 = val;
      if (this.lookerPages_type !== 1) {
        this.lookLower(1);
      }
    },

    // 限额配置
    async handlerEditOrSave(val) {
      if (val === 1) {
        this.advertType = 2;
        this.editOrSave = !this.editOrSave;
      }
      if (val === 2) {
        let a = parseInt(this.limitForm.minLimit);
        let b = parseInt(this.limitForm.maxLimit);
        let c = parseInt(this.limitForm.minLimitWithdrow);
        let d = parseInt(this.limitForm.maxLimitWithdrow);
        console.log(111111111, a, b);
        if (a >= b || c >= d) {
          this.$message({
            type: 'warning',
            message: '限额最大值不大于最小值，请重新输入',
          });
          // this.limitForm.minLimit = ''
          // this.limitForm.maxLimit = ''
          return false;
        } else {
          console.log(this.limitForm.minLimit, this.limitForm.maxLimit);
          // 调用保存接口
          let params = {
            // userId: this.userId,
            userId: this.nowUid,
            chargeMaximum: parseInt(this.limitForm.maxLimit),
            chargeMinimum: parseInt(this.limitForm.minLimit),
            withdrawalMinimum: parseInt(this.limitForm.minLimitWithdrow),
            withdrawalMaximum: parseInt(this.limitForm.maxLimitWithdrow),
          };
          console.log(params);
          const saveResult = await $api.getEditSave(params);
          if (saveResult.data.code === 1) {
            this.$message({ type: 'success', message: '保存成功' });
            // this.toSave()
            // 保存完变为编辑状态
            this.advertType = 1;
            this.editOrSave = !this.editOrSave;
            this.dialogVisible = false;
            this.getList();
          } else {
            // this.$message.error('异常');
            return false;
          }
        }
      }
    },

    handleClosed() {
      this.advertType = 1;
      this.editOrSave = false;
    },

    handlerVal(val, haha) {
      // 去提交保存的时候比较val && haha
      console.log(val, haha);
    },

    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = this.form[val] > 100 ? 100 : this.form[val];
      this.form[val] = (this.form[val] + '').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },

    // 充值授权配置 -是否开启
    // 渠道
    async changContractTypeTopAcc(row) {
      this.$confirm('确定改变', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const statusParams = {
            type: 1,
            statusType: 1,
            userId: this.nowUid,
            list: [
              {
                channelAdvertiserUid: row.channelAdvertiserUid,
                status: row.depositStatus === 1 ? 2 : 1,
              },
            ],
          };
          const statusRes = await $api.editMerchantsStatus(statusParams);
          console.log(statusRes);
          this.getDetailList();
          this.$message({ type: 'success', message: '修改成功!' });
        })
        .catch(() => {
          this.$message({ type: 'info', message: '已取消修改！' });
        });
    },

    // 承兑商
    async changContractTypeTopCheel(row) {
      this.$confirm('确定改变', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const statusParams = {
            type: 2,
            statusType: 1,
            userId: this.nowUid,
            list: [
              {
                channelAdvertiserUid: row.channelAdvertiserUid,
                status: row.depositStatus === 1 ? 2 : 1,
              },
            ],
          };
          const statusRes = await $api.editMerchantsStatus(statusParams);
          console.log(statusRes);
          this.getDetailList();
          this.$message({ type: 'success', message: '修改成功!' });
        })
        .catch(() => {
          this.$message({ type: 'info', message: '已取消修改！' });
        });
    },

    // 提现授权配置 -是否开启
    async changContractTypeAcc(row) {
      this.$confirm('确定改变', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const statusParams = {
            type: 1,
            statusType: 2,
            userId: this.nowUid,
            list: [
              {
                channelAdvertiserUid: row.channelAdvertiserUid,
                status: row.depositStatus === 1 ? 2 : 1,
              },
            ],
          };
          const statusRes = await $api.editMerchantsStatus(statusParams);
          console.log(statusRes);
          this.getDetailList();
          this.$message({ type: 'success', message: '修改成功!' });
        })
        .catch(() => {
          this.$message({ type: 'info', message: '已取消修改！' });
        });
    },

    // 承兑商
    async changContractTypeCheel(row) {
      this.$confirm('确定改变', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const statusParams = {
            type: 2,
            statusType: 2,
            userId: this.nowUid,
            list: [
              {
                channelAdvertiserUid: row.channelAdvertiserUid,
                status: row.depositStatus === 1 ? 2 : 1,
              },
            ],
          };
          const statusRes = await $api.editMerchantsStatus(statusParams);
          console.log(statusRes);
          this.getDetailList();
          this.$message({ type: 'success', message: '修改成功!' });
        })
        .catch(() => {
          this.$message({ type: 'info', message: '已取消修改！' });
        });
    },

    // 添加承兑商查下级分页处理 1-充值 2-提现
    async lookGoPage(val) {
      if (val === 1) {
        this.current_page5 = val;
        this.lookLower(1);
        return false;
      }
      if (val === 2) {
        this.current_page6 = val;
        this.lookLower(2);
        return false;
      }
    },

    // 添加承兑商授权查下级
    // 1- 充值承兑商  2- 提现承兑商
    async lookLower(val) {
      if (val === 1) {
        this.lookerPages_type = 3;
        const lookParams = {
          statusType: 1,
          // userId: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page6,
          pageSize: this.pageSize6,
          channelAdvertiserUid: this.depositAdvertiseForm.depositAcceptorCode,
          // channelAdvertiserUid: null
        };
        const lookLowerRes = await $api.noAddMerchantsAdvertiser(lookParams);
        console.log(lookLowerRes);
        if (lookLowerRes) {
          const { total, current, pages } = lookLowerRes.data.data;
          this.total6 = total;
          this.pages6 = pages;
          this.current_page6 = current;
          this.withdrawChannelList_Btn = lookLowerRes.data.data.records;
          this.listLoading = false;
        } else {
          this.withdrawChannelList_Btn = [];
          return false;
        }
        // this.depositAdvertiseForm.depositAcceptorCode = ''
      }
      if (val === 2) {
        this.lookerPages_type = 2;
        const lookParams = {
          statusType: 2,
          // userId: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page5,
          pageSize: this.pageSize5,
          channelAdvertiserUid: this.withdrawAdvertiseForm.withdrawAcceptorCode,
          // 添加承兑商查下级的承兑商编码
        };
        const lookLowerRes = await $api.noAddMerchantsAdvertiser(lookParams);
        if (lookLowerRes) {
          const { total, current, pages } = lookLowerRes.data.data;
          this.total5 = total;
          this.pages5 = pages;
          this.current_page5 = current;
          this.withdrawChannelList_Bottom = lookLowerRes.data.data.records;
          this.listLoading = false;
        } else {
          this.withdrawChannelList_Bottom = [];
          return false;
        }
        // this.withdrawAdvertiseForm.withdrawAcceptorCode = ''
      }
    },

    // 充值导航栏
    handleClick(tab) {
      console.log('tab', tab);
      console.log('activeName', this.activeName);
    },

    // 提现导航栏
    handleClick_s(tab) {
      console.log('tab', tab);
      console.log('activeName_s', this.activeName_s);
    },

    // 充值承兑商单行选择
    async handleSelectionDepositAdverTop(val) {
      this.multipleSelection3 = val;
    },

    async handleSelectionDepositAdverBottom(val) {
      this.multipleSelection4 = val;
    },

    // 充值渠道
    async handleSelectionDepositChannelDeposit(val) {
      this.multipleSelection1 = val;
    },

    // 提现渠道
    async handleSelectionDepositChannelBottom(val) {
      this.multipleSelection2 = val;
    },

    onCopy() {
      this.$message.success('复制成功');
    },

    onError() {
      this.$message.success('复制失败');
    },

    countdownBtn(value) {
      this.disabled = value;
    },

    async codeclick() {
      try {
        let valid = true;
        this.$refs['ruleForm'].validateField(['email'], (errorMessage) => {
          if (errorMessage) {
            valid = false;
            return;
          }
        });
        if (!valid) return;
        if (this.disabled) {
          return;
        }
        this.disabled = true;
        let params = {
          phoneOrEmail: this.ruleForm.email,
          type: 1,
          smsType: 0,
        };
        const res = await $api.apiSendEmail(params);
        if (res) {
          this.$message.success('发送成功');
        }
      } catch (error) {
        console.log(error);
      }
    },

    // 配置操作
    async doHandle(data) {
      const { fn, row } = data;
      console.log(row);
      this.nowUid = row.uid;
      this.userId = row.userId;
      this.userName = row.userName;
      this.chargeMaximum = !row.chargeMaximum ? 0 : row.chargeMaximum;
      this.chargeMinimum = !row.chargeMinimum ? 0 : row.chargeMinimum;
      this.withdrawalMaximum = !row.withdrawalMaximum ? 0 : row.withdrawalMaximum;
      this.withdrawalMinimum = !row.withdrawalMinimum ? 0 : row.withdrawalMinimum;
      if (fn === 'configuration') {
        this.title = '商户接单配置';
        this.isModify = true;
        this.getDetailList();
        this.form = {
          uid: row.uid,
          userName: row.userName,
          userId: row.userId,
        };
        this.limitForm = {
          minLimit: this.chargeMinimum,
          maxLimit: this.chargeMaximum,
          minLimitWithdrow: this.withdrawalMinimum,
          maxLimitWithdrow: this.withdrawalMaximum,
        };
        this.dialogVisible = true;
      }
    },

    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },

    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
        v['value'] = '';
      });
      this.getList();
    },

    exportExcel(val) {
      this.search_params_obj = val.query;
      const num = val.num;
      utils.exportData.apply(this, [num]);
    },

    // 添加渠道与承兑商确认
    // 1- 充值渠道 2-提现渠道 3-充值承兑商 4-提现承兑商
    async createAgent(val) {
      let limitParams = {
        chargeMaximum: this.chargeMaximum,
        chargeMinimum: this.chargeMinimum,
        withdrawalMinimum: this.withdrawalMinimum,
        withdrawalMaximum: this.withdrawalMaximum,
      };

      if (val === 1) {
        const arr = this.multipleSelection1.map((v) => {
          return {
            channelAdvertiserUid: v.id,
            channelAdvertiserName: v.channelName,
          };
        });
        console.log(this.multipleSelection1);
        if (this.multipleSelection1.length === 0) {
          this.$message('您没有添加任何数据');
          return false;
        }
        const AddDepositParams = {
          statusType: 1,
          type: 1,
          list: arr,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
        };
        Object.assign(AddDepositParams, limitParams);
        const AddDepositRes = await $api.addMerchants(AddDepositParams);
        if (AddDepositRes) {
          this.getDetailList();
          this.createVisible = false;
        }
      }

      if (val === 3) {
        // this.depositAdvertiseForm.depositAcceptorCode = ''
        const arr = this.multipleSelection3.map((v) => {
          return {
            channelAdvertiserUid: v.advertiserUid,
            channelAdvertiserName: v.advertiserName,
          };
        });
        if (this.multipleSelection3.length === 0) {
          let temp = this.depositAdvertiseForm.depositAcceptorCode;
          this.$message('您没有添加任何数据');
          this.depositAdvertiseForm.depositAcceptorCode = temp;
          // this.lookerPages_type = 3
          return false;
        }
        const AddDepositParams = {
          statusType: 1,
          type: 2,
          list: arr,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          // userId: this.nowUid,
        };
        Object.assign(AddDepositParams, limitParams);
        const AddDepositRes = await $api.addMerchants(AddDepositParams);
        if (AddDepositRes) {
          this.getDetailList();
          this.createVisible = false;
        }
      }

      if (val === 2) {
        const arr = this.multipleSelection2.map((v) => {
          return {
            channelAdvertiserUid: v.id,
            channelAdvertiserName: v.channelName,
          };
        });
        if (this.multipleSelection2.length === 0) {
          this.$message('您没有添加任何数据');
          return false;
        }
        const AddDepositParams = {
          statusType: 2,
          list: arr,
          type: 1,
          // userId: this.nowUid,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
        };
        Object.assign(AddDepositParams, limitParams);
        const AddDepositRes = await $api.addMerchants(AddDepositParams);
        if (AddDepositRes) {
          this.getDetailList();
          this.createVisible = false;
        }
      }
      if (val === 4) {
        // this.withdrawAdvertiseForm.withdrawAcceptorCode = ''
        const arr = this.multipleSelection4.map((v) => {
          return {
            channelAdvertiserUid: v.advertiserUid,
            channelAdvertiserName: v.advertiserName,
          };
        });
        if (this.multipleSelection4.length === 0) {
          let variable = this.withdrawAdvertiseForm.withdrawAcceptorCode;
          this.$message('您没有添加任何数据');
          this.withdrawAdvertiseForm.withdrawAcceptorCode = variable;
          // this.lookerPages_type = 2
          return false;
        }
        const AddDepositParams = {
          statusType: 2,
          type: 2,
          list: arr,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          // userId: this.nowUid,
          // uid: this.nowUid,
          // userName: this.userName,
          // userId: this.userId,
        };
        Object.assign(AddDepositParams, limitParams);
        const AddDepositRes = await $api.addMerchants(AddDepositParams);
        if (AddDepositRes) {
          this.getDetailList();
          this.createVisible = false;
          this.lookerPages_type = 1;
        }
      }
    },

    // 首页数据查询getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getMerchantsList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        records.forEach((v) => {
          console.log(v.chargeMaximum, v.chargeMinimum);
          v['isCreateAgent'] = v['isCreateAgent'] ? 1 : 0;
        });
        this.list = records;
        this.dataList = records;
        
      }
      this.listLoading = false;
    },

    // 配置详情页充值授权数据查询
    async getDetailList() {
      if (this.listLoading) return;
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        userId: this.nowUid,
        statusType: 1,
      };
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
        userId: this.nowUid,
        statusType: 2,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);

      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);

      this.listLoading = true;
      const res = await $api.getConfigDetail(query_data);

      const resData = await $api.getConfigDetail(params);
      if (resData) {
        const { depositAdvertiserList, withdrawAdvertiserList } = resData.data.data;
        this.depositAdvertiserList = depositAdvertiserList;
        this.withdrawAdvertiserList = withdrawAdvertiserList;
        this.listLoading = false;
      }
      if (res) {
        const { depositChannelList, withdrawChannelList } = res.data.data;
        this.depositChannelList = depositChannelList;
        this.withdrawChannelList = withdrawChannelList;
        this.listLoading = false;
      }
    },

    // 充值-添加渠道或承兑商
    async changeTopBtn() {
      this.lookerPages_type = 1;
      this.createVisible = true;
      this.btn_type = 1;
      // 充值-添加渠道
      if (this.activeName === 'first') {
        const query_data = {
          statusType: 1,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page1,
          pageSize: this.pageSize1,
        };
        this.requiredParams(query_data);
        // Object.assign(query_data, this.search_params_obj)
        this.listLoading = true;
        const res = await $api.noAddMerchantsChannel(query_data);
        if (res) {
          const { total, current, pages } = res.data.data;
          this.total1 = total;
          this.pages1 = pages;
          this.current_page1 = current;
          this.depositChannelList_Btn = res.data.data.records;
          this.listLoading = false;
        }
        console.log(res.data.data);
      }
      // 充值-添加承兑商
      if (this.activeName === 'second') {
        const params = {
          statusType: 1,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page2,
          pageSize: this.pageSize2,
        };
        this.requiredParams(params);
        // Object.assign(query_data, this.search_params_obj)
        this.listLoading = true;
        const result = await $api.noAddMerchantsAdvertiser(params);
        console.log(result.data.data);
        if (result) {
          const { total, current, pages } = result.data.data;
          this.total2 = total;
          this.pages2 = pages;
          this.current_page2 = current;
          this.withdrawChannelList_Btn = result.data.data.records;
          this.listLoading = false;
        }
        console.log(this.withdrawChannelList_Btn);
      }
    },

    // 提现-添加渠道或承兑商
    async changeBottomBtn() {
      this.createVisible = true;
      this.btn_type = 2;
      // 提现-添加渠道
      if (this.activeName_s === 'three') {
        const query_data = {
          statusType: 2,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page3,
          pageSize: this.pageSize3,
        };
        this.requiredParams(query_data);
        // Object.assign(query_data, this.search_params_obj)
        this.listLoading = true;
        const res = await $api.noAddMerchantsChannel(query_data);
        if (res) {
          const { total, current, pages } = res.data.data;
          this.total3 = total;
          this.pages3 = pages;
          this.current_page3 = current;
          this.depositChannelList_Bottom = res.data.data.records;
          this.listLoading = false;
        }
      }
      // 提现-添加承兑商
      if (this.activeName_s === 'four') {
        const params = {
          statusType: 2,
          userName: this.userName,
          uid: this.nowUid,
          userId: this.userId,
          pageNum: this.current_page4,
          pageSize: this.pageSize4,
        };
        this.requiredParams(params);
        // Object.assign(query_data, this.search_params_obj)
        this.listLoading = true;
        const result = await $api.noAddMerchantsAdvertiser(params);
        if (result) {
          const { total, current, pages } = result.data.data;
          this.total4 = total;
          this.pages4 = pages;
          this.current_page4 = current;
          this.withdrawChannelList_Bottom = result.data.data.records;
          this.listLoading = false;
        }
      }
    },

    // 删除渠道或者承兑商
    deleteRowTop1(index, row) {
      const { channelAdvertiserName, channelAdvertiserUid, depositStatus } = row[index];
      console.log(row, channelAdvertiserName, channelAdvertiserUid, depositStatus);
      const deleteParams = {
        statusType: 1,
        type: 1,
        userId: this.nowUid,
        list: [
          {
            channelAdvertiserUid: channelAdvertiserUid,
          },
        ],
      };
      if (depositStatus === 1) {
        this.$message('开启状态下不能删除');
      } else {
        this.$confirm('确认删除吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const deleteRes = await $api.deleteMerchants(deleteParams);
            console.log(deleteRes, this.depositChannelList);
            this.depositChannelList.splice(index, 1);
            this.getDetailList();
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消!' });
          });
      }
    },

    deleteRowTop2(index, row) {
      const { channelAdvertiserName, channelAdvertiserUid, depositStatus } = row[index];
      console.log(channelAdvertiserName, channelAdvertiserUid, depositStatus);
      const deleteParams = {
        statusType: 1,
        type: 2,
        userId: this.nowUid,
        list: [
          {
            channelAdvertiserUid: channelAdvertiserUid,
          },
        ],
      };
      if (depositStatus === 1) {
        this.$message('开启状态下不能删除');
      } else {
        this.$confirm('确认删除吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const deleteRes = await $api.deleteMerchants(deleteParams);
            console.log(deleteRes, this.depositChannelList);
            this.depositChannelList.splice(index, 1);
            this.getDetailList();
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消!' });
          });
      }
    },

    deleteRowTop3(index, row) {
      const { channelAdvertiserName, channelAdvertiserUid, depositStatus } = row[index];
      console.log(row, channelAdvertiserName, channelAdvertiserUid, depositStatus);
      const deleteParams = {
        statusType: 2,
        type: 1,
        userId: this.nowUid,
        list: [
          {
            channelAdvertiserUid: channelAdvertiserUid,
          },
        ],
      };
      if (depositStatus === 1) {
        this.$message('开启状态下不能删除');
      } else {
        this.$confirm('确认删除吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const deleteRes = await $api.deleteMerchants(deleteParams);
            console.log(deleteRes, this.depositChannelList);
            this.depositChannelList.splice(index, 1);
            this.getDetailList();
          })
          .catch(() => {
            // this.$message({ type: 'info', message: '已取消!' })
          });
      }
    },

    deleteRowTop4(index, row) {
      const { channelAdvertiserName, channelAdvertiserUid, depositStatus } = row[index];
      console.log(row, channelAdvertiserName, channelAdvertiserUid, depositStatus);
      const deleteParams = {
        statusType: 2,
        type: 2,
        userId: this.nowUid,
        list: [
          {
            channelAdvertiserUid: channelAdvertiserUid,
          },
        ],
      };
      if (depositStatus === 1) {
        this.$message('开启状态下不能删除');
      } else {
        this.$confirm('确认删除吗?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const deleteRes = await $api.deleteMerchants(deleteParams);
            console.log(deleteRes, this.depositChannelList);
            this.depositChannelList.splice(index, 1);
            this.getDetailList();
          })
          .catch(() => {
            // this.$message({ type: 'info', message: '已取消!' })
          });
      }
    },

    async queryData(params) {
      this.excelLoading = true;
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      const res = await $api.getMerchantsList(params);
      this.excelLoading = false;
      if (res) {
        return res;
      }
    },

    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : (val + '').replace(/\//gi, '-');
    },

    requiredParams(params) {
      // if (this.$util.isEmptyObject(this.search_params_obj)) {
      //   let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
      //   let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
      //   params.endTime = nowV.replace(/\//gi, '-')
      //   params.startTime = befV.replace(/\//gi, '-')
      //   // 组件时间初始必须format格式
      //   this.searchCofig[0].value = [befV, nowV]
      // }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('Advanced', orderConfigCol, orderConfigColNoBtn);
    this.configs = authObj.val;

    this.searchCofig = this.$util.clone(orderConfigConfig);
    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');
    this.getList();
  },
};
</script>
<style scope lang="scss">
.orderConfig-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
  }
  .colline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;

      .label {
        width: 60px;
      }
    }
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    span {
      font-size: 12px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }
  .agent-table {
    .cell {
      text-align: center;
    }
  }
  .search-container {
    margin-bottom: 48px;
  }
  hr {
    margin-top: -30px;
    margin-bottom: 30px;
  }
  .el-input__inner {
    width: 90%;
  }
  .search {
    text-align: center;
  }
  .advance_page {
    text-align: center;
  }
  .accept_page {
    text-align: center;
  }
  .el-row {
    text-align: left;
  }
  .el-switch__core {
    margin-left: 0;
  }
  .limit-box {
    margin-left: 34px;
  }
  .limit-box .main-limit {
    display: flex;
    justify-content: space-between;
  }
  .limit-box h4 {
    margin-left: 46px;
  }
  .el-form-item--medium .el-form-item__label {
    line-height: 36px;
    font-weight: normal;
  }
  .limit-box .limit-box-withdrow {
    margin-right: 40px;
  }
  .header-limit {
    display: flex;
    justify-content: space-between;
  }
  .header-limit .limit-box-btn {
    margin-right: 262px;
    // margin-right: 460px;
  }
}
</style>
