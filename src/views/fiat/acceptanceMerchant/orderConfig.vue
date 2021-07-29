<template>
  <div class="advanced-container">
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
import { advancedCol, advancedColNoBtn, advancedConfig } from '@/config/column/fiat';
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
    };
  },
  methods: {
      
  },
};
</script>
<style scope lang="scss">
.advanced-container {
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
