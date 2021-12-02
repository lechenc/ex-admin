<!--
 * @Author: your name
 * @Date: 2020-04-07 14:06:38
 * @LastEditTime: 2020-07-20 18:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\views\financial\assets.vue
 -->
<template>
  <div class="coinForexPairsConfigs-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>

    <!-- <div class="container-btn" v-if="btnArr.includes('add')">
      <el-button type="primary" size="medium" @click="addRobot">添加</el-button>
    </div> -->

    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>

    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
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

    <!-- 添加 编辑 -->
    <el-dialog width="600px" :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="robotForm" ref="robotForm" :rules="rules">
        <el-form-item label="交易品种" :label-width="formLabelWidth" prop="symbol">
          <el-select
            v-model="robotForm.symbol"
            placeholder=""
            wdith="20%"
            :disabled="!!robotForm.id"
          >
            <el-option
              v-for="(item, idx) in coinForexList"
              :key="idx"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="icon" :label-width="formLabelWidth" prop="iconUrl">
              <el-input
                size="small"
                v-model="robotForm.iconUrl"
                placeholder="只能上传jpg/png文件，且不超过2m"
              >
                <el-upload
                  :before-upload="beforeUpload"
                  :action="$img_api"
                  multiple
                  name="file"
                  :data="{ type: 'exchange' }"
                  :show-file-list="true"
                  :on-success="upload"
                  :on-error="uploadError"
                  slot="append"
                  :limit="1"
                  :on-exceed="exceed"
                  accept=".png,.jpg"
                  ref="coinel"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="中文名称" :label-width="formLabelWidth" prop="chineseName">
              <el-input v-model="robotForm.chineseName" autocomplete="off" type="text"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="24">
            <b-two-range-choose
              ref="twoChoose"
              :labelWidth="formLabelWidth"
              labelWords="持仓手数范围区间"
              :getVal1.sync="robotForm.minMove"
              :getVal2.sync="robotForm.maxMove"
              :isdisabled="false"
              :noMinus="true"
              @handler="getRangeVal"
            ></b-two-range-choose>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="建议点差" :label-width="formLabelWidth" prop="priceDiff">
              <el-input
                @input="checkVal('priceDiff')"
                v-model="robotForm.priceDiff"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="每手合约交易大小" :label-width="formLabelWidth" prop="minVol">
              <el-input
                @input="checkVal('minVol')"
                v-model="robotForm.minVol"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="挂单距离限制" :label-width="formLabelWidth" prop="dealDistance">
              <el-input
                @input="checkVal('dealDistance')"
                v-model="robotForm.dealDistance"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="价格小数位" :label-width="formLabelWidth" prop="decimalVol">
              <el-input
                @input="checkVal('decimalVol')"
                v-model="robotForm.decimalVol"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="排序" :label-width="formLabelWidth" prop="rank">
              <el-input
                @input="checkVal('rank')"
                v-model="robotForm.rank"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="杠杆倍数" :label-width="formLabelWidth" prop="multiple">
              <el-input
                @input="checkVal('multiple')"
                v-model="robotForm.multiple"
                autocomplete="off"
                type="number"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="强平保证金率" :label-width="formLabelWidth" prop="closeRate">
              <el-input
                @input="checkVal('closeRate')"
                v-model="robotForm.closeRate"
                autocomplete="off"
                type="number"
              >
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :span="8">
            <el-form-item label="是否上架" :label-width="formLabelWidth" prop="headblock">
              <el-switch
                v-model="robotForm.headblock"
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-col>

          <el-col :span="10">
            <el-form-item label="是否交易" :label-width="formLabelWidth" prop="trade">
              <el-switch v-model="robotForm.trade" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 上传导入K线-->
    <el-dialog width="600px" title="上传导入K线" :visible.sync="dialogImportKLineVisible">
      <el-form :model="importKLineForm" label-width="120px" ref="importKLineForm">
        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="日K线：">
              <el-input
                size="small"
                v-model="importKLineForm.importKLine1"
                placeholder="请上传.xls、xlsx、csv格式文件 ,非必填"
              >
                <el-upload
                  :before-upload="importKLineBeforeUpload"
                  :action="$forex_file_api"
                  multiple
                  name="file"
                  :data="{ time: 'one_day', symbol: this.curRow.symbol }"
                  :show-file-list="true"
                  :on-success="importKLineUpload"
                  :on-error="uploadError"
                  slot="append"
                  :limit="1"
                  accept=".xlsx,.xls,.csv"
                  ref="importKLine1"
                >
                  <el-button size="small" type="primary" @click="importKLineClk(1)"
                    >点击上传</el-button
                  >
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="周K线：">
              <el-input
                size="small"
                v-model="importKLineForm.importKLine2"
                placeholder="请上传.xls、xlsx、csv格式文件 ,非必填"
              >
                <el-upload
                  :before-upload="importKLineBeforeUpload"
                  :action="$forex_file_api"
                  multiple
                  name="file"
                  :limit="1"
                  :data="{ time: 'one_week', symbol: this.curRow.symbol }"
                  :show-file-list="true"
                  :on-success="importKLineUpload"
                  :on-error="uploadError"
                  slot="append"
                  accept=".xlsx,.xls,.csv"
                  ref="importKLine2"
                >
                  <el-button size="small" type="primary" @click="importKLineClk(2)"
                    >点击上传</el-button
                  >
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :span="24">
          <el-col :span="22">
            <el-form-item label="月K线：">
              <el-input
                size="small"
                v-model="importKLineForm.importKLine3"
                placeholder="请上传.xls、xlsx、csv格式文件 ,非必填"
              >
                <el-upload
                  :before-upload="importKLineBeforeUpload"
                  :action="$forex_file_api"
                  multiple
                  :limit="1"
                  name="file"
                  :data="{ time: 'one_month', symbol: this.curRow.symbol }"
                  :show-file-list="true"
                  :on-success="importKLineUpload"
                  :on-error="uploadError"
                  slot="append"
                  accept=".xlsx,.xls,.csv"
                  ref="importKLine3"
                >
                  <el-button size="small" type="primary" @click="importKLineClk(3)"
                    >点击上传</el-button
                  >
                </el-upload>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogImportKLineVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogImportKLineVisible = false">确 定</el-button>
        <!-- <el-button type="primary" @click="confirmOp" :loading="btnLoading">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search'
import Btable from '@/components/table/b-table'
import iconPage from '@/components/icon-page'
import {
  coinForexPairsConfigsCol,
  coinForexPairsConfigsColNoBtn,
  coinForexPairsConfigsConfig
} from '@/config/column/coinForex'
import $api from '@/api/api'
import BTwoRangeChoose from '@/components/b-two-range-choose'
import Precision from '@/utils/number-precision'
export default {
  name: 'CoinForexPairsConfigs',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoRangeChoose
  },
  data() {
    return {
      searchCofig: [], // 搜索框配置
      btnLoading: false, // 提交
      listLoading: false, // 表格loading
      list: [], //委托列表
      configs: [], // 委托列表列配置
      searchConfig: [], // 搜索框配置
      search_params_obj: {}, // 搜索框对象
      current_page: 1, // 当前页码
      pages: 0, // 总页数
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      toDay: '',
      ago: '',

      btnArr: [],
      formName: '',
      robotForm: {},
      rules: {
        symbol: [
          {
            required: true,
            message: '必选',
            trigger: 'blur'
          }
        ],

        iconUrl: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        chineseName: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        priceDiff: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        minVol: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        dealDistance: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        decimalVol: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        rank: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        multiple: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ],

        closeRate: [
          {
            required: true,
            message: '必填',
            trigger: 'change'
          }
        ]
      },
      formLabelWidth: '170px',
      userArr: [], // 主流币机器人列表
      coinForexList: [],
      dialogFormVisible: false,
      dialogImportKLineVisible: false,
      importKLineForm: {},
      importKLineBtnType: 1,
      curRow: {}
    }
  },

  methods: {
    // 上传导入K线 按钮type
    importKLineClk(type) {
      this.importKLineBtnType = type
    },
    // 上传导入K线
    importKLineUpload(response, file, fileList) {
      if (response.code != 1) {
        this.$message.error(response.message || '上传失败')
        this.$nextTick(() => {
          ;[(this.importKLineForm['importKLine' + this.importKLineBtnType] = '')]
          this.$refs['importKLine' + this.importKLineBtnType].clearFiles()
        })
        return
      } else {
        this.$message.success('上传成功')
      }

      this.$refs['importKLine' + this.importKLineBtnType].handleRemove(file)
      this.$refs['importKLine' + this.importKLineBtnType].clearFiles()
      // this.$refs.importKLineDay.clearFiles()
      // this.coinForm.iconUrl = response.result.urls[0];
    },

    // 上传导入K线 文件限制
    importKLineBeforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'xlsx' || testmsg === 'xls' || testmsg === 'csv'
      // const isLt2M = file.size / 1024 / 1024 < 2
      const isLt2M = true
      if (!extension) {
        this.$message({
          message: '上传文件只能是 xlsx、xls、csv格式!',
          type: 'error'
        })
      }
      // if (!isLt2M) {
      //   this.$message({
      //     message: '上传文件大小不能超过 2MB!',
      //     type: 'error'
      //   })
      // }
      if (extension && isLt2M) {
        this.importKLineForm['importKLine' + this.importKLineBtnType] = file.name
      }

      return extension && isLt2M
    },

    // 页容变化
    pageSizeChange(val) {
      this.current_page = 1
      this.pageSize = val
      this.getList()
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      if (this.robotForm[val] < 0) {
        this.robotForm[val] = 0
      }
    },
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      const extension = testmsg === 'jpg' || testmsg === 'png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!extension) {
        this.$message({
          message: '上传文件只能是 jpg、png格式!',
          type: 'error'
        })
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 2MB!',
          type: 'error'
        })
      }
      return extension && isLt2M
    },

    getRangeVal(val) {
      // val.valid
      // val.form
    },
    upload(response, file, fileList) {
      if (!response.data) {
        this.$message.error('图片上传失败')
        this.$refs.coinel.clearFiles()
        return
      }
      this.robotForm.iconUrl = response.data[0].url
      this.$refs.coinel.handleRemove(file)
      this.$refs.coinel.clearFiles()
      // this.coinForm.iconUrl = response.result.urls[0];
    },

    uploadError() {
      this.$message.error('上传失败')
      this.$nextTick(() => [(this.importKLineForm['importKLine' + this.importKLineBtnType] = '')])
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！')
    },

    // 添加交易对
    addRobot() {
      this.formName = '添加币汇交易对'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['robotForm'].resetFields()
        this.robotForm = {
          id: '',
          symbol: '',
          iconUrl: '',
          chineseName: '',
          minMove: '',
          maxMove: '',
          priceDiff: '',
          minVol: '',
          dealDistance: '',
          decimalVol: '',
          rank: '',
          multiple: '',
          closeRate: '',
          headblock: '',
          trade: ''
        }
      })
    },
    // 提交
    confirmOp() {
      if (!this.$refs['twoChoose'].validateValue()) {
        return
      }
      this.$refs['robotForm'].validate(async (valid) => {
        if (valid) {
          const { id, headblock, trade, ...prop } = this.robotForm

          const params = {
            headblock: headblock ? 'Y' : 'N',
            trade: trade ? 'Y' : 'N',
            ...prop
          }

          // 新增 编辑
          const res = !id
            ? await $api.apiEditCoinForexPairsConfigs(params)
            : await $api.apiEditCoinForexPairsConfigs({
                id,
                ...params
              })
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功'
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getList()
          }
          this.btnLoading = false
        }
      })
    },
    async doHandle(data) {
      const { fn, row } = data
      this.curRow = row

      if (fn === 'edit') {
        // this.getRobotUserArr();
        this.formName = '编辑币汇交易对'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['robotForm'].resetFields()
          const {
            id,
            symbol,
            iconUrl,
            chineseName,
            minMove,
            maxMove,
            priceDiff,
            minVol,
            dealDistance,
            decimalVol,
            rank,
            multiple,
            closeRate,
            headblock,
            trade
          } = row

          this.robotForm = {
            id,
            symbol,
            iconUrl,
            chineseName,
            minMove: minMove || '',
            maxMove: maxMove || '',
            priceDiff,
            minVol,
            dealDistance,
            decimalVol,
            rank,
            multiple,
            closeRate,
            headblock,
            trade
          }
        })
      }

      if (fn === 'trHeadblockSwitch' || fn === 'trTradeSwitch') {
        const { headblock, trade, id, symbol } = row
        if (fn === 'trHeadblockSwitch' && !!trade && !headblock) {
          this.$message.error('下架前请先关闭交易!')
          this.getList()
          return
        }
        let params = {
          headblock: headblock ? 'Y' : 'N',
          trade: trade ? 'Y' : 'N',
          id,
          symbol
        }
        this.listLoading = true
        const res = await $api.apiCoinForexPairsConfigsSwitch(params)
        if (res) {
          this.$message({ message: '切换成功', type: 'success' })
          this.getList()
        } else {
          this.getList()
        }
        this.listLoading = false
      }
      // 上传导入K线
      if (fn === 'importKLine') {
        this.dialogImportKLineVisible = true
        this.$nextTick(() => {
          this.importKLineForm = {
            importKLine1: '',
            importKLine2: '',
            importKLine3: ''
          }
        })
      }
    },
    doSearch(data) {
      this.current_page = 1
      this.search_params_obj = data
      if (!this.search_params_obj.startTime && !this.search_params_obj.endTime) {
        this.search_params_obj.flag = 1
      }
      this.getList()
    },
    doReset() {
      this.search_params_obj = {}
      this.searchCofig.forEach((v) => {
        v['value'] = ''
      })
      // this.searchCofig[0].value = [this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss'), this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')];
      this.getList()
    },

    // 分页
    goPage(val) {
      this.current_page = val
      this.getList()
    },

    async getList() {
      this.listLoading = true

      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.requiredParams(this.search_params_obj)
      Object.assign(params, this.search_params_obj)
      const res = await $api.getCoinForexPairsConfigsList(params)
      if (res) {
        const { records, current, total, pages } = res.data.data
        this.total = total
        this.pages = pages
        this.current_page = current
        this.list = records
        records.forEach((v) => {
          // y 是 n 否
          v['headblock'] = v['headblock'] === 'Y' ? true : false
          v['trade'] = v['trade'] === 'Y' ? true : false
        })
        this.list = records
      }
      this.listLoading = false
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-')
    },
    // 时间格式 YYYY-MM-DD
    requiredParams(params) {
      return
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss')
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss')
        this.searchCofig[0].value = [befV, nowV]
        params.endTime = nowV.replace(/\//gi, '-')
        params.startTime = befV.replace(/\//gi, '-')
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime)
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime)
      }
    },

    // 币汇产品
    async getCoinForexList() {
      this.$store.dispatch('common/getCoinForexList').then(() => {
        this.coinForexList = this.$store.state.common.coinForexList
        this.searchCofig[0]['list'] = this.coinForexList
      })
    }
  },
  mounted() {
    let authObj = this.$util.getAuthority(
      'CoinForexPairsConfigs',
      coinForexPairsConfigsCol,
      coinForexPairsConfigsColNoBtn
    )

    this.btnArr = authObj.btnArr || [] || []
    this.configs = authObj.val
    this.searchCofig = coinForexPairsConfigsConfig
    this.toDay = this.$util.diyTime('toDay')
    this.ago = this.$util.diyTime('ago')
    this.getCoinForexList()
    this.getList()
  }
}
</script>
<style lang="scss">
.coinForexPairsConfigs-container {
  .el-form-item__content {
    margin-left: 0;
  }
  .container-btn {
    margin: 20px 0;
  }

  padding: 4px 10px 10px 10px;
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notice-button {
    margin: 30px auto 10px;
  }

  .container-top {
    margin: 10px 0;
  }
  .container-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .foot-tip {
      font-size: 14px;
      color: #9a9a9a;
    }
  }
}
</style>
