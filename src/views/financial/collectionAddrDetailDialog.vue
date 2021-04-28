<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-08-05 18:37:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="collectionAddrDialog-container">
    <el-dialog class="addr-container" width="1000px" :title="title" :visible.sync="showDialog" @open="dialogOpen" :closeOnClickModal="false">
      <div class="container-top">
        <el-button type="primary" @click="addAddr" size="medium">添加地址</el-button>
      </div>
      <div>
        <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
      </div>
      <div class="container-footer">
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

      <el-dialog width="800px" :title="subTitle" :visible.sync="show_addr_form" append-to-body class="new-dialog" max-height="700px">
        <div class="setting-form">
          <div class="container-top">
            <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
          </div>
          <div>
            <Btable
              :listLoading="addrLoading"
              :data="addAddrList"
              :configs="addAddrCol"
              @do-handle="doAddrHandle"
              @select="getSelectRow"
              :selection="true"
            />
          </div>
          <div class="container-footer">
            <el-pagination
              background
              @current-change="goPageAddr"
              layout="total, prev, pager, next, jumper"
              :current-page="current_page_addr"
              :page-size="pageSize_addr"
              :total="total_addr"
            >
            </el-pagination>
          </div>
          <div class="footer">
            <el-button size="medium" type="primary" @click="cancel">取消</el-button>
            <el-button size="medium" type="primary" @click="confirm">确定</el-button>
          </div>
        </div>
      </el-dialog>
    </el-dialog>
  </div>
</template>
<script>
import $api from '@/api/api';
import { collectionDetailCol, addAddrSearchConfig, addAddrCol } from '@/config/column/financial';
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';

export default {
  components: {
    Bsearch,
    Btable,
  },
  props: {
    visible: {
      default: false,
      type: Boolean,
    },
    dataObj: {
      default: () => {},
      type: Object,
    },
    // type: {
    // 	type: Number,
    // 	default: 0,
    // },
  },
  computed: {
    showDialog: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('close', val);
      },
    },
  },
  data() {
    return {
      title: '被归集地址明细',
      subTitle: '添加地址',
      mainId: '',
      nextId: '',
      configs: [], // 明细表格col格式
      list: [], // 明细表格数据
      listLoading: false, // 是否加载完被归集地址明细
      show_addr_form: false, // 是否弹出添加地址表格
      addrLoading: false, // 是否加载完毕地址表格
      addAddrList: [], // 添加地址表格数据
      searchCofig: [], // 添加地址表格 页头筛选
      addAddrCol: [], // 添加地址表格 col格式
      userIdArr: '', // 勾选的地址的用户

      current_page_addr: 1, // 当前页码
      pageSize_addr: 20, // 当前每页显示页码数
      total_addr: 0, // 总条数
      search_params_obj: {},
      current_page: 1, // 当前页码
      pageSize: 20, // 当前每页显示页码数
      total: 0, // 总条数
    };
  },
  methods: {
    doSearch(data) {
      this.current_page_addr = 1;
      this.search_params_obj = data;
      this.getAddList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach(v => {
        v['value'] = '';
      });
      this.getAddList();
    },
    // 分页
    goPage(val) {
      this.current_page = val;
      this.getList();
    },
    // 分页
    goPageAddr(val) {
      this.current_page_addr = val;
      this.getAddList();
    },
    addAddr() {
      this.show_addr_form = true;
    },
    async doHandle(data) {
      const { fn, row } = data;
      if (fn === 'del') {
        this.$confirm(`确认删除?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
          .then(async () => {
            let params = {
              id: row.id,
            };
            const res = await $api.deleteUser(params);
            if (res) {
              this.$message({ message: '删除用户地址成功', type: 'success' });
              this.getList();
            }
          })
          .catch(() => {
            console.log('cancel');
          });
      }
    },
    doAddrHandle() {},
    // 添加勾选的用户地址
    async confirm() {
      const params = {
        tbWalletToAddressId: this.nextId,
        clientAppInfoId: this.mainId,
        tbWalletAddressInfoId: this.userIdArr,
      };
      const res = await $api.addAddressUser(params);
      if (res) {
        this.$message({ message: '新增用户地址成功', type: 'success' });
        this.show_addr_form = false;
        this.getList();
        this.getAddList();
      }
    },
    async getList() {
      this.listLoading = true;
      let params = {
        tbWalletToAddressId: this.nextId,
        clientAppInfoId: this.mainId,
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      const res = await $api.userPage(params);
      if (res) {
        const { records, current, total } = res.data.data;
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.listLoading = false;
      }
    },
    // 获取请求地址的数据
    async getAddList() {
      this.addrLoading = true;
      let params = {
        clientAppInfoId: this.mainId,
        pageNum: this.current_page_addr,
        pageSize: this.pageSize_addr,
      };
      Object.assign(params, this.search_params_obj);
      const res = await $api.addressUserList(params);
      if (res) {
        const { records, total, current } = res.data.data;
        this.addAddrList = records;
        this.current_page_addr = current;
        this.total_addr = total;
        this.addrLoading = false;
      }
    },
    cancel() {
      this.$emit('close');
    },
    dialogOpen() {
      this.mainId = this.dataObj.clientAppInfoId;
      this.nextId = this.dataObj.id;

      this.configs = collectionDetailCol;
      this.searchCofig = addAddrSearchConfig;
      // 根据传入的归集明细id获取被归集地址明细表格信息
      this.getList();
      this.addAddrCol = addAddrCol;
      // 添加地址弹出框的数据获取
      this.getAddList();
    },
    getSelectRow(val) {
      if (val && val.length > 0) {
        let tmp = [];
        val.forEach(v => {
          tmp.push(v.tbWalletAddressInfoId);
        });
        this.userIdArr = tmp.join(',');
      }
    },
  },
};
</script>
<style lang="scss">
.collectionAddrDialog-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 20px 0;
  }
  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
  }
}

.el-dialog__wrapper.new-dialog {
  .footer {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    button {
      padding: 10px 20px;
    }
    button:last-child {
      margin-left: 90px;
    }
  }
}
// }
</style>
