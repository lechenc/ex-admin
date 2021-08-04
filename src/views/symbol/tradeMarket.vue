<template>
  <div id="tradeMarket">
    <Search :configs="formConfig" @do-search="handlerSeach" :calTotal="true" @do-calTotal="doCalTotal" @do-reset="reset"/>
    <el-row style="margin: 20px;">
      <el-button type="primary" @click="add">添加交易对</el-button>
    </el-row>
    <b-table :configs="tableConfig" :data="tableData" :listLoading="loading" @do-handle="doHandle"/>
    <el-pagination background @size-change="pageSizeChange" @current-change="goPage" layout="total,sizes, prev, pager, next, jumper" :current-page="pageSize.currentPage" :page-sizes="[10, 50, 100, 200]" :page-size="pageSize.pageSize" :total="totals"> </el-pagination>

    <el-dialog :visible.sync="flag" title="添加交易对">
      <el-form :model="addForm" label-width="120px" :rules="rules" ref="addForm">
        <el-form-item label="交易对类型" prop="coinType">
          <el-select v-model="addForm.coinType" @change="handlerChange">
            <el-option v-for="(item, idx) in coinTypeArr" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="交易对" prop="coinMarket">
          <el-select v-model="addForm.coinMarket">
            <el-option v-for="(item, idx) in coinMarket" :key="idx + '-el-option'" :label="item.label" :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="24h成交额上限" prop="turnoverUpper">
          <el-input v-model="addForm.turnoverUpper"/>
        </el-form-item>
        <el-form-item label="24h成交额下限" prop="turnoverLower">
          <el-input v-model="addForm.turnoverLower"/>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" size="mini" @click="flag = false">取消</el-button>
        <el-button type="primary" size="mini" @click="enterAdd">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="total.flag" title="统计数据">
     <div style="font-size: 22px;margin-bottom: 22px;">24h成交额下限($): {{total.turnoverUpper}}</div>
     <div style="font-size: 22px;margin-bottom: 22px;">24h成交额上限($): {{total.turnoverLower}}</div>
    </el-dialog>

    <el-dialog :visible.sync="edit" title="编辑交易对类型">
      <el-form :model="editForm" label-width="120px" ref="edit" :rules="editRules">
        <el-form-item label="交易对" prop="coinMarket">
          <el-select v-model="editForm.coinMarket" disabled>
            <el-option v-for="(item, idx) in coinMarket" :key="idx + '-el-option-edit'" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="24h成交额上限" prop="turnoverUpper">
          <el-input v-model="editForm.turnoverUpper"/>
        </el-form-item>
        <el-form-item label="24h成交额下限" prop="turnoverLower">
          <el-input v-model="editForm.turnoverLower"/>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button type="primary" size="mini" @click="edit = false">取消</el-button>
        <el-button type="primary" size="mini" @click="enterEdit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Search from '../../components/search/b-search';
import bTable from '../../components/table/b-table';
import { tradeMarketCol, tradeMarketColNoBtn, tradeMarketColTable } from '../../config/column/symbol';
import $api from '@/api/api';

export default {
  name: 'TradeMarket',
  components: {
    Search,
    bTable
  },
  data() {
    const validate = (name, str) => {
      return [
        { required: true, message: '请' + (str || '输入') + name, trigger: 'blur' }
      ]
    }
    const validator = ({field}, value, callback) => {
      
      if (field === 'turnoverUpper' && this.addForm['turnoverLower']) {
        if (isNaN(+this.addForm['turnoverUpper'])) {
          callback(new Error('请输入数字'))
        } else if (+this.addForm['turnoverUpper'] < +this.addForm['turnoverLower']) {
          callback(new Error('下限值不能超过上限值'))
        } else {
          callback()
        }
      } else if (field === 'turnoverLower') {
        if (isNaN(+this.addForm['turnoverLower'])) {
          callback(new Error('请输入数字'))
        } else if (+this.addForm['turnoverUpper'] < +this.addForm['turnoverLower']) {
          callback(new Error('下限值不能超过上限值'))
        } else {
          callback()
        }
      }
    }
    const editValidator = ({field}, value, callback) => {
      
      if (field === 'turnoverUpper' && this.editForm['turnoverLower']) {
        if (isNaN(+this.editForm['turnoverUpper'])) {
          callback(new Error('请输入数字'))
        } else if (+this.editForm['turnoverUpper'] < +this.editForm['turnoverLower']) {
          callback(new Error('下限值不能超过上限值'))
        } else {
          callback()
        }
      } else if (field === 'turnoverLower') {
        if (isNaN(+this.editForm['turnoverLower'])) {
          callback(new Error('请输入数字'))
        } else if (+this.editForm['turnoverUpper'] < +this.editForm['turnoverLower']) {
          callback(new Error('下限值不能超过上限值'))
        } else {
          callback()
        }
      }
    }
    return {
      model: {},
      formConfig: [],
      tableConfig: tradeMarketColTable,
      tableData: [],
      loading: false,
      coinMarket: [],
      flag: false,
      addForm: {
        coinType: '',
        coinMarket: '',
        turnoverUpper: '',
        turnoverLower: ''
      },
      coinTypeArr: [
        {
          label: '合约',
          value: 0
        },
        {
          label: '币币',
          value: 1
        }
      ],
      total: {
        flag: false,
        turnoverUpper: '',
        turnoverLower: ''
      },
      rules: {
        coinType: validate('交易类型', '选择'),
        coinMarket: validate('交易对', '选择'),
        turnoverUpper: [
          { required: true, message: '请输入上限值', trigger: 'blur' },
          { validator: validator, trigger: 'blur' }
        ],
        turnoverLower: [
          { required: true, message: '请输入下限值', trigger: 'blur' },
          { validator: validator, trigger: 'blur' }
        ]
      },
      editRules: {
        coinMarket: validate('交易对', '选择'),
        turnoverUpper: [
          { required: true, message: '请输入上限值', trigger: 'blur' },
          { validator: editValidator, trigger: 'blur' }
        ],
        turnoverLower: [
          { required: true, message: '请输入下限值', trigger: 'blur' },
          { validator: editValidator, trigger: 'blur' }
        ]
      },
      edit: false,
      editForm: {
        coinType: '',
        turnoverUpper: '',
        turnoverLower: ''
      },
      totals: 1,
      pageSize: {
        currentPage: 1,
        pageSize: 10
      },
      params: {},
      coin: []
    }
  },
  watch: {
    flag(val) {
      if (!val) {
        for (let i in this.addForm) {
          this.addForm[i] = ''
        }
      }
    }
  },
  methods: {
    handlerSeach(val) {
      this.params = val
      this.currentPage = 1
      this.getQueryList()
    },
    async doCalTotal(val) {
      const res = await $api.getTotalStatistics(val)
      const { turnoverLower, turnoverUpper } = res.data.data
      const flag = true
      this.total = { turnoverLower, turnoverUpper, flag }
    },
    add() {
      this.flag = true
    },
    async getQueryList() {
      const params = {...this.params, ...this.pageSize}
      const res = await $api.getQueryList(params)
      if (res) {
        const { records, total, currentPage, size } = res.data.data
        this.pageSize = { currentPage, pageSize: size }
        this.total = total
        this.tableData = records
      }
    },
    enterEdit() {
      this.$refs.edit.validate(async (valid) => {
        if (valid) {
          const res = await $api.setTurnoverUpdate({...this.editForm})
          if (res.data.code === 1) {
            this.$message.success('修改成功')
            this.edit = false
          }
        }
      })
    },
    enterAdd() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          const res = await $api.setTurnoverAdd(this.addForm);
          if (res.data.code === 1) {
            this.$message.success('添加成功')
            this.flag = false
          }
        }
      })
    },
    doHandle(val) {
      const { fn ,row } = val
      if (fn === 'edit') {
        this.edit = true
        this.editForm = {...this.editForm, ...row}
      }
    },
    handlerChange(val) {
      this.coinMarket = this.coin[val]
      this.addForm.coinMarket = ''
    },
    pageSizeChange(val) {
      this.pageSize.pageSize = val
      this.getQueryList()
    },
    goPage(val) {
      this.pageSize.currentPage = val
      this.getQueryList()
    },
    reset() {
      // for (let i in )
      this.param = {}
      this.pageSize.currentPage = 1
      this.pageSize.pageSize = 10
    }
  },
  mounted() {
    const authObj = this.$util.getAuthority('TradeMarket',tradeMarketCol ,tradeMarketColNoBtn)
    this.formConfig = authObj.val
    this.$store.dispatch('common/getSymbolList').then(() => {
      const coin1 = this.$store.state.common.symbollist.map(item => ({...item, value: item.label}))
      this.coin[1] = coin1
    });
    this.$store.dispatch('common/getSymbolListContract').then(() => {
      const coin2 = this.$store.state.common.symbollistContract.map(item => ({...item, value: item.label}))
      this.coin[0] = coin2
    })
    this.formConfig[1]['list'] = this.coinTypeArr;
    this.getQueryList()
    this.$watch(
      function() {
        return this.formConfig[1].value
      },
      function(newVal, oldValue) {
        if (newVal === 1) {
          this.formConfig[2].list = this.coin[0]
        } else {
          this.formConfig[2].list = this.coin[1]
        }
      }
    )
  }
}
</script>
