<!--
 * @Author: your name
 * @Date: 2020-04-27 17:15:29
 * @LastEditTime: 2020-12-17 23:20:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\user\examine.vue
 -->
<template>
  <div class="examine-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination
        background
        @current-change="goPage"
        layout="total, prev, pager, next, jumper"
        :current-page="current_page"
        :page-size="pageSize"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 驳回通过弹窗 -->
    <el-dialog :visible.sync="rejectVisible" width="500px" title="驳回">
      <el-form :model="rejectForm" ref="rejectForm" :rules="rejectRules">
        <el-form-item label="驳回理由" prop="mark">
          <el-input maxlength='100' type="textarea" rows='5' placeholder="请输入驳回理由" v-model="rejectForm.mark"></el-input> </el-form-item
      ></el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="rejectVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmReject" :loading="btnLoading">驳回</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { examineCol, examineColNoBtn, examineConfig } from '@/config/column/check';
import $api from '@/api/api';
import { formatTime } from '../../utils';

export default {
  name: 'Examine',
  components: {
    Btable,
    Bsearch,
    iconPage,
  },
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false, // 提交loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      toDay: '',
      ago: '',
      row: {}, // 当前操作的数据
      rejectVisible: false, // 是否显示驳回弹出框
      rejectForm: {
        mark: '',
      },
      rejectRules: {
        mark: [{ required: true, message: '必填', trigger: 'blur' },{ min: 1, max: 256, message: '长度在 1 到 256 个字符', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.row = row;
      // 审核状态 1是成功，2是失败
      if (fn === 'checkOut') {
        // 驳回
        this.rejectVisible = true;
        this.$nextTick(() => {
          this.$refs['rejectForm'].resetFields();
        });
      } else {
        // 通过
        this.$confirm('确定通过？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
              auditStatus: 1,
            };
            const res = await $api.updateAuditVerified(params);
            if (res) {
              this.$message({ type: 'success', message: '通过操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            // this.$message({ type: "info", message: "已取消删除" });
          });
      }
    },
    async confirmReject() {
      if (!this.rejectForm.mark) {
        this.$message({ type: 'error', message: '驳回理由必填' });
        return;
      }
      const params = {
        id: this.row.id,
        auditStatus: 2,
        auditOpinion: this.rejectForm.mark,
      };
      this.btnLoading = true;
      const res = await $api.updateAuditVerified(params);
      if (res) {
        this.$message({ type: 'success', message: '驳回操作成功!' });
        this.rejectVisible = false;
        this.getList();
      }
      this.btnLoading = false;
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
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
      const query_data = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(query_data);
      Object.assign(query_data, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.auditVerifinedList(query_data);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 只有处于待审核状态的才能点击审核操作
        records.forEach(v => {
          v['isclick'] = parseInt(v['auditStatus']) === 0 ? false : true;
        });
        this.total = total;
        this.pages = pages;
        this.current_page = current;
        this.list = records;
      }
      this.listLoading = false;
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
        // 组件时间初始必须format格式
        this.searchCofig[0].value = [befV, nowV];
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
  },

  mounted() {
    let authObj = this.$util.getAuthority('Examine', examineCol, examineColNoBtn);
    this.configs = authObj.val;

    // 初始化今天，之前的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.searchCofig = this.$util.clone(examineConfig);

    this.getList();
  },
};
</script>

<style lang="scss">
  // require('vue-video-player/node_modules/video.js/dist/video-js.css')
.examine-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
