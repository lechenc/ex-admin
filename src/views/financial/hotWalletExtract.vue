<template>
  <div class="hotWalletExtract-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div v-if="isCURDAuth" class="container-btn">
      <el-button type="primary" size="medium" @click="addChain">添加</el-button>
    </div>
    <div>
      <Btable :list-loading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <!-- 添加 编辑 -->
    <el-dialog :title="formName" width="500px" :visible.sync="dialogFormVisible">
      <el-form
        ref="chainForm"
        :model="chainForm"
        :rules="chainForm.status ? rules : rules1"
        :validate-on-rule-change="false"
      >
        <el-form-item label="链名称" :label-width="formLabelWidth" prop="chain">
          <el-select v-model="chainForm.chain" placeholder="请选择" @change="chainChange">
            <el-option
              v-for="(item, idx) in chainList"
              :key="idx"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="币种" :label-width="formLabelWidth" prop="coin">
          <el-select v-model="chainForm.coin" placeholder="请选择">
            <el-option
              v-for="(item, idx) in coinList"
              :key="idx"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="单笔限额" :label-width="formLabelWidth" prop="maxAutoWithdraw">
          <el-input
            v-model="chainForm.maxAutoWithdraw"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('maxAutoWithdraw')"
          />
        </el-form-item>
        <el-form-item label="单日限额" :label-width="formLabelWidth" prop="maxDailyAutoWithdraw">
          <el-input
            v-model="chainForm.maxDailyAutoWithdraw"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('maxDailyAutoWithdraw')"
          />
        </el-form-item>

        <el-form-item label="热钱包启用开关" :label-width="formLabelWidth">
          <el-switch v-model="chainForm.status" active-color="#13ce66" inactive-color="#ff4949" />
        </el-form-item>

        <el-form-item label="白天热钱包启用时间" :label-width="formLabelWidth" prop="dayTime">
          <el-time-picker
            v-model="chainForm.dayTime"
            is-range
            value-format="HH:mm"
            format="HH:mm"
            :disabled="!chainForm.status"
            range-separator="至"
            start-placeholder="选择开始时间"
            end-placeholder="选择结束时间"
            placeholder="选择时间范围"
          />
        </el-form-item>
        <el-form-item label="夜间热钱包启用时间" :label-width="formLabelWidth" prop="nightTime">
          <el-time-picker
            v-model="chainForm.nightTime"
            is-range
            value-format="HH:mm"
            format="HH:mm"
            :disabled="!chainForm.status"
            range-separator="至"
            start-placeholder="选择开始时间"
            end-placeholder="选择结束时间"
            placeholder="选择时间范围"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间可使用提币次数"
          :label-width="formLabelWidth"
          prop="nightNumber"
        >
          <el-input
            v-model="chainForm.nightNumber"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('nightNumber')"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间单次可提币限额"
          :label-width="formLabelWidth"
          prop="nightSingleLimit"
        >
          <el-input
            v-model="chainForm.nightSingleLimit"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('nightSingleLimit')"
          />
        </el-form-item>
        <el-form-item
          label="每个用户夜间可使用提币总额"
          :label-width="formLabelWidth"
          prop="nightSum"
        >
          <el-input
            v-model="chainForm.nightSum"
            placeholder="请输入"
            autocomplete="off"
            type="number"
            @input="checkVal('nightSum')"
          />
        </el-form-item>

        <el-form-item label="谷歌验证码" :label-width="formLabelWidth" prop="googleCode">
          <el-input
            v-model="chainForm.googleCode"
            placeholder="请输入"
            class="my-mumber-input"
            autocomplete="off"
            type="text"
            @input="checkVal3('chainForm', 'googleCode')"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="btnLoading" @click="confirmOp">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogSetVisible" width="650px" title="查看余额">
      <el-row style="margin-bottom: 22px">
        <el-col :span="6">
          链类型名称: <span style="color: #4390ff">{{ protocol }}</span>
        </el-col>
        <el-col :span="6">
          币种名称: <span style="color: #4390ff">{{ coinKey }}</span>
        </el-col>
      </el-row>
      <Btable :list-loading="setListLoading" :data="setlist" :configs="setConfigs" />
    </el-dialog>
  </div>
</template>

<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
// import iconPage from '@/components/icon-page'
import {
  hotWalletExtractCol,
  hotWalletExtractColNoBtn,
  hotWalletExtractSetCol
} from '@/config/column/financial'
import { parseTime } from '@/utils/index'
import $api from '@/api/api'

export default {
  name: 'CoinWhiteList',
  components: {
    Btable,
    Bsearch
    // iconPage
  },

  filters: {
    typeTime(v) {
      if (!v) return ''
      return parseTime(v)
    }
  },
  data() {
    return {
      isCURDAuth: true, // 是否有增删改查权限
      btnLoading: false, // 提交loading
      btnLoading2: false,
      listLoading: false, // 表格loading
      list: [], // 委托列表
      configs: [], // 委托列表列配置
      searchCofig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pageSize: this.$pageSize, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
      dialogFormVisible: false,
      chainForm: {
        id: '',
        coin: '',
        chain: '',
        maxAutoWithdraw: '',
        maxDailyAutoWithdraw: '',
        status: false,
        googleCode: '',
        dayTime: '', // 白天热钱包启用时间
        nightTime: '', // 夜间热钱包启用时间
        nightNumber: '', // 每个用户夜间可使用提币次数
        nightSingleLimit: '', // 每个用户夜间单次可提币限额
        nightSum: '' // 每个用户夜间可使用提币总额
      },

      rules: {
        chain: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        coin: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        maxAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        maxDailyAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        googleCode: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        dayTime: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ], // 白天热钱包启用时间
        nightTime: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ], // 夜间热钱包启用时间
        nightNumber: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ], // 每个用户夜间可使用提币次数
        nightSingleLimit: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ], // 每个用户夜间单次可提币限额
        nightSum: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ]
      },
      rules1: {
        chain: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        coin: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        maxAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        maxDailyAutoWithdraw: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        googleCode: [
          {
            required: true,
            message: '必填',
            trigger: 'blur'
          }
        ],
        dayTime: [
          {
            required: false,
            message: '必填',
            trigger: 'blur'
          }
        ], // 白天热钱包启用时间
        nightTime: [
          {
            required: false,
            message: '必填',
            trigger: 'blur'
          }
        ], // 夜间热钱包启用时间
        nightNumber: [
          {
            required: false,
            message: '必填',
            trigger: 'blur'
          }
        ], // 每个用户夜间可使用提币次数
        nightSingleLimit: [
          {
            required: false,
            message: '必填',
            trigger: 'blur'
          }
        ], // 每个用户夜间单次可提币限额
        nightSum: [
          {
            required: false,
            message: '必填',
            trigger: 'blur'
          }
        ]
      },
      formName: '',
      formLabelWidth: '125px',
      labelWidth: '125px',
      decimalReg: /^(\-)*(\d+)\.(\d\d\d\d\d\d).*$/,
      dialogSetVisible: false,
      setListLoading: false,
      setConfigs: [],
      setlist: [],
      coinKey: '',
      protocol: '',
      chainList: [],
      chainCoinObj: {}
    }
  },
  computed: {
    coinList() {
      if (!this.chainForm.chain || !this.chainCoinObj[this.chainForm.chain]) {
        return []
      } else {
        const arr = this.chainCoinObj[this.chainForm.chain].map(v => {
          return {
            label: v.coinName,
            value: v.coinId
          }
        })
        return arr
      }
    }
  },
  async mounted() {
    const authObj = this.$util.getAuthority(
      'HotWalletExtract',
      hotWalletExtractCol,
      hotWalletExtractColNoBtn
    )
    this.configs = authObj.val
    this.isCURDAuth = authObj.isAdd
    this.setConfigs = hotWalletExtractSetCol
    this.getList()
  },
  methods: {
    chainChange(val) {
      this.chainForm.coin = ''
    },

    checkVal3(obj, val) {
      this[obj][val] = (this[obj][val] + '').replace(/[^\d]/g, '')
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      // if (val === 'singleMaxAmount' || val === 'dayMaxAmount') {
      //   this.chainForm[val] = (this.chainForm[val] + '').replace(this.decimalReg, '$1$2.$3');
      // }
      if (this.chainForm[val] < 0) {
        this.chainForm[val] = 0
      }
    },

    // 根据币种限制小数位
    changeDecimal(val) {
      this.chainForm.singleMaxAmount = ''
      this.chainForm.dayMaxAmount = ''
      const decimal = this.coinList.filter(v => v['label'] == val)[0].decimalPlaces

      const arr = []
      for (let i = 0; i < decimal; i++) {
        arr.push('\\d')
      }
      const s1 = '/^(\\-)*(\\d+)\\.('
      const s2 = arr.join('')
      const s3 = ').*$/'

      const reg = s1.concat(s2, s3)
      this.decimalReg = eval(reg)
    },
    // 表格操作
    async doHandle(data) {
      const { fn, row } = data
      // 编辑币种
      if (fn === 'edit') {
        this.formName = '编辑'
        this.dialogFormVisible = true
        this.getChainCoin()
        this.$nextTick(() => {
          this.$refs['chainForm'].resetFields()
          const { id, coin, chain, maxAutoWithdraw, maxDailyAutoWithdraw, status } = row
          this.chainForm = {
            id,
            coin,
            chain,
            maxAutoWithdraw,
            maxDailyAutoWithdraw,
            status: !!status,
            googleCode: ''
          }
        })
      }
      if (fn === 'checkBalance') {
        const { chain: protocol, coin: coinKey } = row
        this.dialogSetVisible = true
        const firstRequest = $api.apiHotWalletExtractCheckChain({
          protocol: row.chain
        })
        this.setlist = []
        this.protocol = protocol
        this.coinKey = coinKey
        const request = $api.apiHotWalletExtractCheckDetail
        firstRequest.then(res => {
          const { data } = res.data
          if (data instanceof Array) {
            data.forEach((address, idx) => {
              this.setlist.push({ address })
              request({ protocol, coinKey, address }).then(responent => {
                const item = responent.data.data
                this.$set(this.setlist, idx, {
                  ...this.setlist[idx],
                  ...item,
                  amountTip: '待添加字段',
                  totalAddress: '待添加字段'
                })
              })
            })
          }
        })
      }
      // if (fn === 'delete') {
      //   this.$confirm('确定删除？', '温馨提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //   })
      //     .then(async () => {
      //       const params = {
      //         id: row.id,
      //       };
      //       const res = await $api.apiDelHotWalletExtract(params);
      //       if (res) {
      //         this.$message({ type: 'success', message: '通过操作成功!' });
      //         this.getList();
      //       }
      //     })
      //     .catch(() => {});
      // }
    },
    // 添加链类型
    addChain() {
      this.formName = '添加'
      this.dialogFormVisible = true
      this.getChainCoin()
      this.$nextTick(() => {
        this.$refs['chainForm'].resetFields()
        this.chainForm = {
          id: '',
          coin: '',
          chain: '',
          maxAutoWithdraw: '',
          maxDailyAutoWithdraw: '',
          status: false,
          googleCode: ''
        }
      })
    },
    // 提交
    confirmOp() {
      this.$refs['chainForm'].validate(async valid => {
        if (valid) {
          const {
            id,
            coin,
            chain,
            maxAutoWithdraw,
            maxDailyAutoWithdraw,
            status,
            googleCode,
            dayTime,
            nightTime,
            nightNumber,
            nightSingleLimit,
            nightSum
          } = this.chainForm
          if (status) {
            const dayEnd = dayTime[1].split(':')[0]
            const nightSt = nightTime[0].split(':')[0]
            if (dayEnd > nightSt) {
              this.$message.error('白天热钱包启用时间和夜间启用时间不得重复交叉')
              return
            }
          }
          const params = {
            coin,
            chain,
            maxAutoWithdraw,
            maxDailyAutoWithdraw,
            status: status ? 1 : 0,
            googleCode,
            dayTime,
            nightTime,
            nightNumber,
            nightSingleLimit,
            nightSum
          }

          this.btnLoading = true
          // 新增 编辑
          // console.log('id', id);
          const res = !id
            ? await $api.apiAddHotWalletExtract({ ...params })
            : await $api.apiEditHotWalletExtract({ ...params, id })
          if (res) {
            const txt = !id ? '新增成功' : '编辑成功'
            this.$message({ message: txt, type: 'success' })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      // if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
      //   this.search_params_obj.flag = 1;
      // }
      this.getList()
    },
    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach(v => {
        v['value'] = ''
      })
      this.getList()
    },
    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },
    // getlist
    async getList() {
      if (this.listLoading) return
      const query_data = {}
      Object.assign(query_data, this.search_params_obj)
      this.listLoading = true
      const res = await $api.apiGetHotWalletExtractList(query_data)
      // console.log('res', res);
      if (res) {
        this.list = res.data.data.map(item => {
          return { ...item, isStatus: Boolean(item.status) }
        })
        this.listLoading = false
      } else {
        this.listLoading = false
      }
    },

    async getChainCoin() {
      const res = await $api.apiGetChainCoinList({})
      if (res) {
        this.chainCoinObj = res.data.data
        for (const key in this.chainCoinObj) {
          this.chainList.push({
            label: key,
            value: key
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hotWalletExtract-container {
  padding: 4px 20px 10px 20px;

  .container-top {
    margin: 10px 0;
  }

  .container-btn {
    margin: 20px 0;
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

  // icon
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
}

/deep/ .el-dialog__body {
  max-height: 600px;
  overflow: auto;
  .el-date-editor {
    width: 100%;
  }
  .el-form-item {
    display: flex;
    align-items: center;
    .el-form-item__label {
      flex-shrink: 0;
    }
    .el-form-item__content {
      width: 100%;
      margin-left: 0 !important;
    }
  }
}
</style>
