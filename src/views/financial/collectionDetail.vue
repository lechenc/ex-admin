<template>
  <div class="collectionDetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card>
      <div class="setting-form">
        <el-form :model="formInfo" ref="formInfo">
          <el-form-item label="币种" :label-width="formLabelWidth">{{ coinName }}</el-form-item>
          <el-form-item label="CFO地址" :label-width="formLabelWidth">{{ detailRow.address || '' }}</el-form-item>
           <el-form-item label="CFO余额" :label-width="formLabelWidth">{{ detailRow.balance || 0 }}</el-form-item>
          <el-form-item label="手续费地址" :label-width="formLabelWidth">{{ detailRow.handlingfeeaddress || '' }}</el-form-item>
          <el-form-item label="手续费余额" :label-width="formLabelWidth">{{ detailRow.feeBalance || 0 }}</el-form-item>
          <el-form-item label="余额通知数值" :label-width="formLabelWidth">{{ detailRow.noticeMin || '' }}</el-form-item>
          <el-form-item label="余额手机号码" :label-width="formLabelWidth">{{ detailRow.phone || '' }}</el-form-item>
          <!--
					<el-form-item label="余额通知数值" :label-width="formLabelWidth">
            <el-input v-model="formInfo.noticeMin"> <div slot="prepend">低于</div></el-input>
          </el-form-item>
          <el-form-item label="余额手机号码" :label-width="formLabelWidth">
            <el-input v-model="formInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="" :label-width="formLabelWidth">
            <el-button>取消</el-button>
            <el-button type="primary" @click="confirmInfo">确定</el-button>
          </el-form-item>
					-->
        </el-form>

        <h3>归集管理</h3>
        <el-form>
          <!--  <el-form-item label="归集管理" :label-width="formLabelWidth" class="t-form-item">
					</el-form-item>
					<-->

          <!-- 	<template v-for="item in colletWayList">
						<el-form-item :label="item.name" :label-width="formLabelWidth">
							<div>
								<el-select v-model="item.defalut_value" placeholder="请选择活动区域">
									<el-option v-for="(tmp, key) in areaList" :key="key" :label="tmp.name" :value="tmp.value"></el-option>
								</el-select>
							</div>
						</el-form-item>
					</template>-->
          <el-form-item label="默认归集方式" :label-width="formLabelWidth">
            <!--  <el-select v-model="formValue.defalut_type" placeholder="请选择活动区域">
                <el-option v-for="(item, idx) in selectAddrList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>   -->
            <el-button type="info">{{ detailRow.address || '' }}</el-button>
            <el-button round plain size="small" type="primary" @click="updateInfo(-1)">修改</el-button>
          </el-form-item>
          <!--  <el-form-item label="归集方式" :label-width="formLabelWidth" v-for="(el, index) in formValue.type" :key="index"> -->
          <el-form-item label="归集方式" :label-width="formLabelWidth" v-for="(el, index) in addrList" :key="index">
            <div>
              <!--   <el-select v-model="formValue.type[index]" placeholder="请选择活动区域" @change="changeCollectOption(val, index)">
                <el-option v-for="(item, idx) in selectAddrList" :key="idx" :label="item.label" :value="item.value"></el-option>
              </el-select>  -->
              <el-button type="info" size="medium">{{ el.address }}</el-button>
              <el-button round plain type="primary" size="small" @click.stop="showAddrDialog(el)">被归集地址明细</el-button>
              <el-button round plain type="danger" size="small" @click.stop="delCollec(el)">删除归集方式</el-button>
              <el-button round plain type="danger" size="small" @click.stop="updateInfo(index)">修改归集方式</el-button>
            </div>
            <div>
              <el-form-item label="余额" :label-width="formLabelWidth">{{ el.balance }}</el-form-item>
              <el-form-item label="余额通知数值" :label-width="formLabelWidth">{{ el.noticeMin }}</el-form-item>
              <el-form-item label="余额手机号码" :label-width="formLabelWidth">{{ el.phone }}</el-form-item>
              <!--		<el-form-item label="余额通知数值" :label-width="formLabelWidth">
                <el-input v-model="el.noticeMin">
                  <div slot="prepend">低于</div>
                </el-input>
              </el-form-item>
              <el-form-item label="余额手机号码" :label-width="formLabelWidth">
                <el-input v-model="el.phone"></el-input>
              </el-form-item> -->
            </div>
          </el-form-item>

          <el-form-item label="" :label-width="formLabelWidth">
            <el-button @click.stop="addCollect" type="success">+新增归集方式</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <!-- 查看归集地址明细 -->
    <collection-addr-detail-dialog
      :visible.sync="show_addr_detail_modal"
      :dataObj="current_obj"
      @close="closeAddrDialog"
    ></collection-addr-detail-dialog>

    <!-- 添加 编辑 归集地址-->
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="formInfo" ref="formInfo" :rules="rules">
        <div v-if="isAddNoUpdata">
          <el-form-item label="归集地址" :label-width="formLabelWidth">
            <el-select v-model="formInfo.address" placeholder="请选择归集地址" @change="changeCollectOption">
              <el-option v-for="(item, idx) in selectAddrList" :key="idx" :label="item.address" :value="item.address"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div v-else>
          <el-form-item label="归集地址" :label-width="formLabelWidth" v-if="isDefaultAddr && addrList.length > 0">
            <el-select v-model="formInfo.address" placeholder="请选择归集地址" @change="changeCollectOption">
              <el-option v-for="(item, idx) in addrList" :key="idx" :label="item.address" :value="item.address"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="余额通知数值" :label-width="formLabelWidth">
            <el-input v-model="formInfo.noticeMin">
              <div slot="prepend">低于</div>
            </el-input>
          </el-form-item>
          <el-form-item label="余额手机号码" :label-width="formLabelWidth">
            <el-input v-model="formInfo.phone"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmAddr" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Btable from '@/components/table/b-table';
import collectionAddrDetailDialog from '@/views/financial/collectionAddrDetailDialog';
import { collectionCol } from '@/config/column/financial';
import $api from '@/api/api';
import activePage from '@/mixin/keepPage';
import resizer from '@/mixin/resizer';

export default {
  name: 'CollectionDetail',
  components: {
    Btable,
    collectionAddrDetailDialog,
  },
  mixins: [activePage, resizer],
  data() {
    return {
      btnLoading: false, // 提交loadding
      coinName: '',
      addrList: [], // 归集地址
      defaultAddrList: [], // 默认归集地址
      selectAddrList: [], // selsect全部归集地址
      curRow: null, // 点击的列表条目
      detailRow: {}, // 详情数据
      listId: 0, // 列表页传入的id
      show_addr_detail_modal: false, //  是否展示归集地址详情
      activeName: 'assets',
      isAddNoUpdata: true, // 弹出修改框，判断是新增，还是编辑，新增则有地址下拉框
      isDefaultAddr: false, // 是否是默认归集地址（反之是普通归集地址）
      dialogFormVisible: false,
      formName: '添加归集地址',
      // formLabelWidth: '120px',
      formInfo: {
        id: 0,
        address: '',
        noticeMin: '',
        phone: '',
      },

      formValue: {
        // id: "",
        // num: "",
        // phone: "",
        // type: ["1", "2"],
        // defalut_type: "1",
      },
      // 被点击的归集对象
      current_obj: {},
      rules: {},
    };
  },
  computed:{
    formLabelWidth(){
      return this.isDeskTop ? '125px' : 'auto';
    }
  },
  methods: {
    closeAddrDialog() {
      this.show_addr_detail_modal = false;
    },
    showAddrDialog(val) {
      this.current_obj = val;
      this.show_addr_detail_modal = true;
    },
    // 删除归集条目
    async delCollec(val) {
      this.$confirm(`确认删除?`, '提示', { confirmButtonText: '确定', cancelButtonText: '取消' })
        .then(async () => {
          const params = {
            id: val.id,
          };
          const res = await $api.deleteAddress(params);
          if (res) {
            this.$message({ type: 'success', message: '删除归集方式成功!' });
            this.getCollectInfo();
          }
        })
        .catch(() => {
          //console.log('cancel');
        });
    },
    // 新增归集条目（这里的新增其实并不是真正意义的新增，只是把已有的更改状态，划分为归集或者默认归集）
    async addCollect() {
      // this.formValue.type.push("3");
      if (this.selectAddrList.length > 0) {
        this.formName = '添加归集地址';
        this.isAddNoUpdata = true;
        this.dialogFormVisible = true;
        this.curRow = null;
        this.$nextTick(() => {
          this.formInfo = {
            id: 0,
            address: '',
            noticeMin: '',
            phone: '',
          };
          // this.formInfo.id = this.selectAddrList[0].id;
          this.$refs['formInfo'].resetFields();
        });
      } else {
        this.$message({ type: 'danger', message: '归集列表为空，不可新建归集方式!' });
      }
    },
    // 修改归集条目的信息
    async updateInfo(num) {
      if (num == -1) {
        // 默认归集地址的条目
        this.curRow = this.detailRow;
        this.isDefaultAddr = true;
      } else {
        // 归集地址里的条目
        this.curRow = this.addrList[num];
        this.isDefaultAddr = false;
      }
      this.formName = '修改归集地址信息';
      this.isAddNoUpdata = false;
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs['formInfo'].resetFields();
        this.formInfo = {
          id: this.curRow.id,
          address: this.curRow.address,
          noticeMin: this.curRow.noticeMin,
          phone: this.curRow.phone,
        };
      });
    },
    changeCollectOption(val) {
      // 修改一定有this.curRow可不传val，但是新增没有，就传入val来使用
      if (!this.curRow) {
        this.formInfo.address = val;
      } else {
        this.editType();
      }
    },
    // 提交
    async confirmAddr() {
      // 新增的只有下拉框，没有其他字段，所以只用更改类型
      if (!this.curRow) {
        // 新增
        if (!this.formInfo.address) {
          this.$message({ type: 'danger', message: '尚未勾选归集方式!' });
          return;
        }
        // 只可新增归集，不可新增默认归集，所以直接传1
        const params = {
          id: this.selectAddrList.filter(v => v.address == this.formInfo.address)[0].id,
          type: 1,
        };
        this.btnLoading = true;
        const res = await $api.updateAddress(params);
        if (res) {
          this.$message({ type: 'success', message: '新增归集方式成功!' });
          this.dialogFormVisible = false;
          this.getCollectInfo();
        }
        this.btnLoading = false;
      } else {
        // 修改
        this.editInfo();
      }
    },
    // 归集类型修改
    async editType(val) {
      // 1 设置为归集地址；2修改默认归集地址
      let params = {
        type: this.isDefaultAddr ? 2 : 1,
      };
      // 默认归集方式切换下拉框条目要判断是否是 归集方式addrList数组 内的条目
      if (this.isDefaultAddr) {
        const tmp = this.addrList.filter(v => v.address == this.formInfo.address);
        if (tmp && tmp.length > 0) {
          params.id = tmp[0].id;
          params.clientAppInfoId = this.listId;
        } else {
          this.$message({ type: 'danger', message: '切换归集条目失败!' });
        }
      } else {
        params.id = this.curRow.id;
      }
      const res = await $api.updateAddress(params);
      if (res) {
        this.$message({ type: 'success', message: '切换归集条目成功!' });
      }
    },
    // 归集信息(不涉及类型)修改
    async editInfo() {
      const { noticeMin, phone } = this.formInfo;
      const params = {
        id: this.curRow.id,
        noticeMin: noticeMin,
        phone: noticeMin,
      };
      const res = await $api.updateCollect(params);
      if (res) {
        this.$message({ type: 'success', message: '修改操作成功!' });
        this.dialogFormVisible = false;
        this.getCollectInfo();
      }
    },
    // 归集地址信息 并行获取
    async getCollectInfo() {
      // puxg mock
      // 多选框select参数获取
      const paramsSelectList = {
        clientAppInfoId: this.listId,
      };
      // 归集地址列表
      const paramsAddr = {
        clientAppInfoId: this.listId,
        notionalPoolingState: 2,
      };
      // 默认归集地址列表
      const paramsDefaultAddr = {
        clientAppInfoId: this.listId,
        defaultNotionalPoolingState: 2,
      };
      const [resList, resAddr, resDefault] = await Promise.all([
        $api.getAddressListById(paramsSelectList),
        $api.getAddressListById(paramsAddr),
        $api.getAddressListById(paramsDefaultAddr),
      ]);
      if (resDefault) {
        // this.detailRow = resDefault.data.data && resDefault.data.data.length > 0 ? resDefault.data.data[0] : {};
        this.defaultAddrList = resDefault.data.data;
      }
      if (resList) {
        this.selectAddrList = resList.data.data;
      }
      if (resAddr) {
        this.addrList = resAddr.data.data;
      }
    },
    // getDetail
    async getListDetail() {
      const query_data = {
        clientAppInfoId: this.listId,
      };
      const res = await $api.getAddress(query_data);
      if (res) {
        this.detailRow = (res.data && res.data.data) || {};
      }
    },
  },
  // mounted() {
  //   this.listId = this.$route.query.id;
  //   this.coinName = this.$route.query.coinName;
  //   this.getListDetail();
  //   this.getCollectInfo();
  // },
  activated() {
    if (this.isInTags()) {
      return;
    }

    this.coinName = '';
    this.addrList = []; // 归集地址
    this.defaultAddrList = []; // 默认归集地址
    this.selectAddrList = []; // selsect全部归集地址
    this.curRow = null; // 点击的列表条目
    this.detailRow = {}; // 详情数据

    this.listId = this.$route.query.id;
    this.coinName = this.$route.query.coinName;
    this.getListDetail();
    this.getCollectInfo();
  },
};
</script>

<style lang="scss">
.collectionDetail-container {
  padding: 4px 10px 10px 10px;
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
  }
  h3::before {
    content: '';
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-btn {
    margin: 20px 0;
  }
}
</style>
