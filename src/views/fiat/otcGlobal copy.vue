<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-02 15:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="otcGlobal-container">
    <div class="container-top">
      <div class="line">OTC币种参数设置 <span>在币种设置界面开启可法币交易，即可在此页面显示对应币种</span></div>
    </div>
    <div class="container-btn" v-if="isCURDAuth">
      <el-button type="primary" size="medium" @click="addOtc">添加</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <!--
    <div class="container-footer">
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
    </div>
    -->

    <!-- 修改弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="800px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <div class="header">
          <div class="info">基本信息</div>
          <div class="coin">
            <el-form-item label="币种排序" :label-width="labelWidth">
              <el-input type="number" placeholder="请输入" v-model="form.position" style="width: 340px;"> </el-input>
            </el-form-item>
          </div>
        </div>
        <el-card class="box-card">
          <div class="box-card-con">
            <H3>Marker广告商参数设置</H3>
            <el-form-item label="Marker费率" :label-width="labelWidth">
              <el-col :span="12"> <el-input type="text" size="medium" placeholder="请输入" v-model="form.otcFee"> </el-input> </el-col>
            </el-form-item>
            <el-form-item label="Marker数量限额" :label-width="labelWidth">
              <el-col :span="10">
                <el-input type="text" size="medium" placeholder="请输入" v-model="form.advOtcMin">
                  <div slot="append" class="gcode">{{ form.coinName }}</div>
                </el-input>
              </el-col>
              <el-col :span="1" style="text-align: center;">
                ~
              </el-col>
              <el-col :span="10">
                <el-input type="text" size="medium" placeholder="请输入" v-model="form.advOtcMax">
                  <div slot="append" class="gcode">{{ form.coinName }}</div>
                </el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="Marker单笔交易限额" :label-width="labelWidth">
              <el-col :span="10">
                <el-input type="text" size="medium" placeholder="请输入" v-model="form.advOtcSingleMin">
                  <div slot="append" class="gcode">{{ form.coinName }}</div>
                </el-input>
              </el-col>
              <el-col :span="1" style="text-align: center;">
                ~
              </el-col>
              <el-col :span="10">
                <el-input type="text" size="medium" placeholder="请输入" v-model="form.advOtcSingleMax">
                  <div slot="append" class="gcode">{{ form.coinName }}</div>
                </el-input>
              </el-col>
            </el-form-item>
          </div>
        </el-card>
      </el-form>

      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import { otcGlobalCol, otcGlobalColNoBtn } from '@/config/column/fiat';
import $api from '@/api/api';
import utils from '@/utils/util';

export default {
  name: 'FiatOtcGlobal',
  components: {
    Btable,
    Bsearch,
  },
  data() {
    return {
      isCURDAuth: true, // 权限：是否能增删改查
      listLoading: false, // 表格loading
      list: [], //委托列表
      dataList: [], // 用于导出的数据
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      coinList: [],
      dialogVisible: false, // 是否显示弹出框
      labelWidth: '150px',
      title: 'OTC交易币种参数设置',
      // 修改弹出框内的表单
      form: {
        advOtcMax: 0,
        advOtcMin: 0,
        advOtcSingleMax: 0,
        advOtcSingleMin: 0,
        coinId: 0,
        coinName: '',
        otcFee: '',
        position: 0,
      },
      rules: {},
    };
  },
  methods: {
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      if (fn === 'edit') {
        this.dialogVisible = true;
        this.$nextTick(() => {
          const { advOtcMax, advOtcMin, advOtcSingleMax, advOtcSingleMin, coinId, coinName, otcFee, position } = row;
          this.form = {
            advOtcMax: advOtcMax,
            advOtcMin: advOtcMin,
            advOtcSingleMax: advOtcSingleMax,
            advOtcSingleMin: advOtcSingleMin,
            coinId: coinId,
            coinName: coinName,
            otcFee: otcFee,
            position: position,
          };
          this.$refs['form'].resetFields();
        });
      }
    },
    // 提交修改表单
    confirmDialog() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const { coinName, otcFee, ...repo } = this.form;
          let params = {
            otcFee: otcFee,
            ...repo,
          };
          const res = await $api.otcCoinGlobalSet(params);
          if (res) {
            this.$message({ message: '提交成功', type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
        }
      });
    },
    addOtc() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.form = {
          advOtcMax: 0,
          advOtcMin: 0,
          advOtcSingleMax: 0,
          advOtcSingleMin: 0,
          coinId: 0,
          coinName: '',
          otcFee: '',
          position: 0,
        };
      });
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
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {};
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.otcCoinGlobalSetList(query_data);
      if (res) {
        let tmp = res.data.result;
        // if (tmp && tmp.length > 0) {
        //   tmp.forEach(v => {
        //     v.otcFee1 = v.otcFee;
        //   });
        // }
        this.list = tmp;
        this.dataList = tmp;
        this.listLoading = false;
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : this.$util.dateFormat(val, 'YYYY-MM-DD hh:mm:ss');
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('FiatOtcGlobal', otcGlobalCol, otcGlobalColNoBtn);
    this.configs = authObj.val;

    this.$store.dispatch('common/getFiatCoinList').then(() => {
      this.coinList = this.$store.state.common.fiatcoinlist;
    });
    this.getList();
  },
};
</script>
<style scope lang="scss">
.otcGlobal-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 15px 0;
    .line {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      span {
        font-size: 16px;
        color: #606266;
      }
    }
    .line::before {
      content: '';
      border-left: 5px solid #03a7f0;
      margin-right: 10px;
    }
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
  .container-btn {
    margin: 20px 0;
  }
  .header {
    .info {
      display: inline-block;
      font-size: 14px;
      color: #606266;
      font-weight: 600;
      margin-right: 150px;
    }
    .info::before {
      content: '';
      margin-right: 15px;
      border-left: 3px solid #03a7f0;
    }
    .coin {
      display: inline-block;
      font-size: 14px;
      .position {
        display: inline-block;
        font-size: 14px;
      }
    }
  }
}
</style>
