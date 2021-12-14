<!--
 * @Author: your name
 * @Date: 2020-04-07 19:20:24
 * @LastEditTime: 2020-12-28 10:48:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\alphawallet-bg\src\components\search\b-search.vue
 -->

<template>
  <div class="search-container">
    <el-collapse value="filter">
      <el-collapse-item title="查询条件" name="filter">
        <div class="search-item-box">
          <div v-for="config in configs" :key="config.prop">
            <!-- 选择框 -->
            <div v-if="config.type === 'select'">
              <div>{{ config.label }}</div>
              <el-select
                v-model="config.value"
                :multiple="config.multiple"
                class="text-input"
                :clearable="!config.isClear"
                :placeholder="config.placeHolder"
                :size="sizeDiy"
              >
                <el-option
                  v-for="(item, i) in config.list"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>

            <!-- 选择框 带搜索功能 -->
            <div v-if="config.type === 'select_search'">
              <div>{{ config.label }}</div>
              <el-select
                v-model="config.value"
                class="text-input"
                filterable
                :clearable="!config.isClear"
                :placeholder="config.placeHolder"
                :size="sizeDiy"
              >
                <el-option
                  v-for="(item, i) in config.list"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>

            <!-- 选择框 label加粗 -->
            <div v-if="config.type === 'select_labelBold'">
              <div class="label_bold">{{ config.label }}</div>
              <el-select
                v-model="config.value"
                class="text-input"
                :clearable="!config.isClear"
                :placeholder="config.placeHolder"
                :size="sizeDiy"
              >
                <el-option
                  v-for="(item, i) in config.list"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <!-- 输入框 -->
            <div v-if="(config.type === 'text' && !config.subType) || !config.type">
              <div :style="{ minWidth: config.minWidth || '115px' }">{{ config.label }}</div>
              <el-input
                v-model="config.value"
                class="text-input"
                :placeholder="config.placeholder || '请输入内容'"
                :size="sizeDiy"
              />
            </div>

            <!-- 输入框number -->
            <div v-if="config.type == 'number'">
              <div>{{ config.label }}</div>
              <el-input
                v-model="config.value"
                class="text-input"
                type="number"
                :placeholder="config.placeholder || '请输入内容'"
                :size="sizeDiy"
              />
            </div>

            <!-- 输入框 只能输入数字 -->
            <div v-if="config.type === 'onlyNumber'">
              <div>{{ config.label }}</div>
              <el-input
                v-if="config.lengthLimited"
                :maxlength="config.digits ? config.digits : 9"
                v-model="config.value"
                class="text-input"
                type="text"
                :placeholder="config.placeholder || '请输入内容'"
                :size="sizeDiy"
                @input="config.value = config.value.replace(/[^\d]/g, '')"
              />
              <el-input
                v-else
                v-model="config.value"
                class="text-input"
                type="text"
                :placeholder="config.placeholder || '请输入内容'"
                :size="sizeDiy"
                @input="config.value = config.value.replace(/[^\d]/g, '')"
              />
            </div>

            <!-- 输入框 区间 -->
            <div v-if="config.type === 'text_rank'">
              <div>{{ config.label }}</div>
              <el-input
                v-model="config.value[0]"
                class="text-input"
                :placeholder="config.placeholder || '请输入最小值'"
                :size="sizeDiy"
                @change="handleMinChange(config.value[0], config.value[1])"
              />
              <span style="line-height: 30px">&nbsp;~&nbsp;</span>
              <el-input
                v-model="config.value[1]"
                class="text-input"
                :placeholder="config.placeholder || '请输入最大值'"
                :size="sizeDiy"
                @change="handleMaxChange(config.value[0], config.value[1])"
              />
            </div>

            <!-- 输入框 区间 只能数字 -->
            <div v-if="config.type === 'text_rank_number'">
              <div>{{ config.label }}</div>
              <el-input
                v-model="config.value[0]"
                type="text"
                class="text-input"
                :placeholder="config.placeholder || '请输入最小值'"
                :size="sizeDiy"
                @input="config.value[0] = config.value[0].replace(/[^\d]/g, '')"
                @change="handleMinChange(config.value[0], config.value[1])"
              />
              <span style="line-height: 30px">&nbsp;~&nbsp;</span>
              <el-input
                v-model="config.value[1]"
                type="text"
                class="text-input"
                :placeholder="config.placeholder || '请输入最大值'"
                :size="sizeDiy"
                @input="config.value[1] = config.value[1].replace(/[^\d]/g, '')"
                @change="handleMaxChange(config.value[0], config.value[1])"
              />
            </div>

            <div v-if="config.type === 'text' && config.subType === 'uid'">
              <div :style="{ minWidth: config.minWidth || '115px' }">{{ config.label }}</div>
              <el-input
                v-model="config.value"
                class="text-input"
                :maxlength="9"
                :placeholder="config.placeholder || '请输入内容'"
                :size="sizeDiy"
              />
            </div>
            <!-- 日期选择 pc端或者横屏用这个 -->
            <div v-if="config.type === 'date_rank' && (isDeskTop || (!isDeskTop && isOrientation))">
              <div>{{ config.label }}</div>
              <template>
                <div class="block">
                  <!-- <span class="demonstration">默认</span> -->
                  <el-date-picker
                    v-model="config.value"
                    :disabled="dateRankDisabled"
                    :size="sizeDiy"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    :picker-options="$util.datePickerOptions({ disabledDate: 'all' })"
                    :default-time="['00:00:00', '23:59:59']"
                  />
                </div>
              </template>
            </div>

            <!-- 日期选择 pc端或者横屏用这个  带秒数的 -->
            <div
              v-if="config.type === 'date_rank_sec' && (isDeskTop || (!isDeskTop && isOrientation))"
            >
              <div>{{ config.label }}</div>
              <template>
                <div class="block">
                  <!-- <span class="demonstration">默认</span> -->
                  <el-date-picker
                    v-model="config.value"
                    :disabled="dateRankDisabled"
                    :size="sizeDiy"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    :picker-options="$util.datePickerOptions({ disabledDate: 'all' })"
                    :default-time="['00:00:00', '23:59:59']"
                  />
                </div>
              </template>
            </div>

            <!-- 日期选择 移动端并且竖屏用这个 -->
            <div
              v-if="config.type === 'date_rank' && !isDeskTop && !isOrientation"
              class="mobile-time"
            >
              <div>{{ config.label }}</div>
              <template>
                <div class="time-panel">
                  <el-date-picker
                    v-model="config.value[0]"
                    :disabled="dateRankDisabled"
                    type="date"
                    :size="sizeDiy"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    placeholder="开始日期"
                    :picker-options="pickerOptionsStart(config.value)"
                    class="box-date-picker"
                    @focus="forbid"
                  />
                  <el-date-picker
                    v-model="config.value[1]"
                    :disabled="dateRankDisabled"
                    type="date"
                    :size="sizeDiy"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    placeholder="结束日期"
                    :picker-options="pickerOptionsEnd(config.value)"
                    class="box-date-picker"
                    @focus="forbid"
                  />
                </div>
              </template>
            </div>

            <!-- 日期选择 月份选择器 -->
            <div v-if="config.type === 'date_month'">
              <div>{{ config.label }}</div>
              <template>
                <div class="block">
                  <el-date-picker
                    v-model="config.value"
                    value-format="yyyy-MM"
                    :disabled="dateMonthDisabled"
                    :size="sizeDiy"
                    type="month"
                    placeholder="选择月"
                  />
                </div>
              </template>
            </div>

            <!-- 特殊情况下的  日期选择 最多选到2020年7月1日  pc端或者横屏用这个 -->
            <div
              v-if="config.type === 'date_rank_s' && (isDeskTop || (!isDeskTop && isOrientation))"
            >
              <div>{{ config.label }}</div>
              <template>
                <div class="block">
                  <!-- <span class="demonstration">默认</span> -->
                  <el-date-picker
                    v-model="config.value"
                    :size="sizeDiy"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    :picker-options="$util.datePickerOptions_s({ disabledDate: 'all' })"
                    :default-time="['00:00:00', '23:59:59']"
                  />
                </div>
              </template>
            </div>
            <!-- 特殊情况下的  日期选择 最多选到2020年7月1日  移动端并且竖屏用这个 -->
            <div
              v-if="config.type === 'date_rank_s' && !isDeskTop && !isOrientation"
              class="mobile-time"
            >
              <div>{{ config.label }}</div>
              <template>
                <div class="time-panel">
                  <el-date-picker
                    v-model="config.value[0]"
                    type="date"
                    :size="sizeDiy"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    placeholder="开始日期"
                    :picker-options="pickerOptionsStart_s(config.value)"
                    class="box-date-picker"
                    @focus="forbid"
                  />
                  <el-date-picker
                    v-model="config.value[1]"
                    type="date"
                    :size="sizeDiy"
                    value-format="yyyy/MM/dd HH:mm:ss"
                    placeholder="结束日期"
                    :picker-options="pickerOptionsEnd(config.value)"
                    class="box-date-picker"
                    @focus="forbid"
                  />
                </div>
              </template>
            </div>

            <!-- 选择框改变时改变table -->
            <div v-if="config.type === 'selectChange'">
              <div>{{ config.label }}</div>
              <el-select
                v-model="config.value"
                class="text-input"
                :placeholder="config.placeHolder"
                :size="sizeDiy"
                @change="selectChange"
              >
                <el-option
                  v-for="(item, i) in config.list"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </div>
        <div class="search-footer">
          <el-button v-if="setWindControl" type="primary" :size="sizeDiy" @click="doWindControl">
            {{ windControlText }}
          </el-button>
          <el-button
            v-if="calTotal"
            plain
            :size="sizeDiy"
            :loading="calLoading"
            @click="doCalTotal"
          >
            {{ calText }}
          </el-button>
          <!-- 快速导出excel -->
          <el-button
            v-if="calIsShowFastExcel"
            v-loading.fullscreen.lock="calLoadingFastExcel"
            plain
            :size="sizeDiy"
            element-loading-text="拉取中"
            @click="doCalFastExcel"
          >
            {{ calTextFastExcel }}
          </el-button>
          <!-- 预估统计 -->
          <el-button
            v-if="estimate"
            plain
            :size="sizeDiy"
            :loading="calLoading"
            @click="doEstimate"
          >
            预估统计
          </el-button>
          <el-button
            v-if="statistics"
            plain
            :size="sizeDiy"
            :loading="calLoading"
            @click="doEstimate"
          >
            统计
          </el-button>

          <el-button type="primary" :size="sizeDiy" @click="doSearch">查询</el-button>
          <el-button v-if="!noReset" :size="sizeDiy" @click="reset">重置</el-button>
          <!--  <el-button :size="sizeDiy" style="margin: 0 10px"  @click="doExportExcel" v-if="exportExcel">
            导出Excel
          </el-button>  -->
          <el-dropdown
            v-if="exportExcel"
            ref="export2excel"
            :size="sizeDiy"
            trigger="click"
            class="export2excel"
            @click.native.stop
          >
            <el-button plain :loading="excelLoading">
              导出Excel<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-if="exportExcelCurrentPageIsShow"
                @click.native.stop="doExportExcel(0)"
                >当前页</el-dropdown-item
              >
              <el-dropdown-item @click.native.stop="doExportExcel(1)">
                当前查询条件
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-button v-if="isParent" :size="sizeDiy" @click="toParent">定位（查父级）</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
// import utils from '@/utils/util'
export default {
  name: 'BSearch',
  props: {
    configs: {
      type: Array,
      default() {
        return []
      }
    },
    exportExcel: {
      type: Boolean,
      default: false
    },
    isParent: {
      type: Boolean,
      default: false
    },
    noReset: {
      type: Boolean,
      default: false
    },
    calTotal: {
      type: Boolean,
      default: false
    },
    setWindControl: {
      type: Boolean,
      default: false
    },
    windControlText: {
      type: String,
      default: '提币风控参数设置'
    },
    // 合计按钮 按钮文案
    calText: {
      type: String,
      default: '合计数量'
    },
    // 合计按钮 按钮Loading
    calLoading: {
      type: Boolean,
      default: false
    },

    // 快速导出excel  显示
    calIsShowFastExcel: {
      type: Boolean,
      default: false
    },
    // 快速导出excel  按钮文案
    calTextFastExcel: {
      type: String,
      default: '快速导出excel'
    },
    // 快速导出excel  按钮Loading
    calLoadingFastExcel: {
      type: Boolean,
      default: false
    },

    statistics: {
      type: Boolean,
      default: false
    },
    estimate: {
      type: Boolean,
      default: false
    },

    excelLoading: {
      type: Boolean,
      default: false
    },
    // 日期 时间选择器禁用状态
    dateRankDisabled: {
      type: Boolean,
      default: false
    },
    // 月份 时间选择器禁用状态
    dateMonthDisabled: {
      type: Boolean,
      default: false
    },
    // 导出表格 当前页是否显示
    exportExcelCurrentPageIsShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOrientation: false
    }
  },
  computed: {
    sizeDiy() {
      return this.$store.state.app.device === 'mobile' ? 'mini' : 'small'
    },
    isDeskTop() {
      return this.$store.state.app.device !== 'mobile'
    }
  },
  mounted() {
    window.addEventListener('resize', this.renderResize, false)
  },
  destroyed() {
    window.removeEventListener('resize', this.renderResize, false)
  },
  methods: {
    selectChange(val) {
      this.$emit('selectChange', val)
    },
    checkSearchVal(val) {
      val = (val + '').replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d\d\d).*$/, '$1$2.$3')
    },
    renderResize() {
      // 判断横竖屏
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight
      if (width > height) {
        this.isOrientation = true
      } else {
        this.isOrientation = false
      }
    },
    forbid() {
      document.activeElement.blur()
      this.$nextTick(() => {
        const inputTime = document.querySelectorAll('.el-date-editor .el-range-input')
        inputTime.forEach((item) => {
          item.addEventListener('focus', () => {
            document.activeElement.blur()
          })
        })
      })
    },

    pickerOptionsStart_s(val) {
      // const endDateVal = val[1]
      return {
        // disabledDate(date) {
        //   if (endDateVal) {
        //     const timeNow = new Date(val[1]).getTime()
        //     return date.getTime() > timeNow
        //   }
        //   // const curDate = new Date()
        //   // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
        //   const overT = new Date()
        //   overT.setHours(23)
        //   overT.setMinutes(59)
        //   overT.setSeconds(59)
        //   return +date > +overT
        // },
        disabledDate(date) {
          const seven = 1593532800000 // 2020年7月1日的时间戳
          return date < seven
        }
      }
    },

    pickerOptionsStart(val) {
      const endDateVal = val[1]
      return {
        disabledDate(date) {
          if (endDateVal) {
            const timeNow = new Date(val[1]).getTime()
            return date.getTime() > timeNow
          }
          // const curDate = new Date()
          // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
          const overT = new Date()
          overT.setHours(23)
          overT.setMinutes(59)
          overT.setSeconds(59)
          return +date > +overT
        }
      }
    },
    pickerOptionsEnd(val) {
      const beginDateVal = val[0]
      return {
        disabledDate(date) {
          if (beginDateVal) {
            // const curDate = new Date()
            // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
            const overT = new Date()
            overT.setHours(23)
            overT.setMinutes(59)
            overT.setSeconds(59)

            const timeNow = new Date(val[0]).getTime()
            return date.getTime() < timeNow || +date > +overT
          }
          // const curDate = new Date()
          // 不设置日期为23：59：59那么默认的可能是其他时间，导致当天不能可选
          const overT = new Date()
          overT.setHours(23)
          overT.setMinutes(59)
          overT.setSeconds(59)
          return +date > +overT
        }
      }
    },
    doSearch() {
      const query = this.getQuery()
      this.$emit('do-search', query)
    },
    getQuery() {
      const query = {}
      const config = this.configs
      for (const item of config) {
        if (item && item.value != null && item.value === item.value && item.value !== '') {
          if (item.type === 'date_rank') {
            // pc和移动端的时间区间双框
            query[item.prop] = item.value[0]
            if (!this.isDeskTop) {
              let overT = new Date(item.value[1]) || ''
              if (overT) {
                overT.setHours(23)
                overT.setMinutes(59)
                overT.setSeconds(59)
                overT = this.$util.dateFormat(overT, 'YYYY/MM/DD HH:mm:ss')
              }
              query[item.prop2] = overT || item.value[1]
            } else {
              let overT = new Date(item.value[1]) || ''
              if (overT) {
                overT.setHours(23)
                overT.setMinutes(59)
                overT.setSeconds(59)
                overT = this.$util.dateFormat(overT, 'YYYY/MM/DD HH:mm:ss')
              }
              query[item.prop2] = overT || item.value[1]
            }
          } else if (item.type === 'date_rank_s' || item.type === 'date_rank_sec') {
            // 区间双框
            if (item.value[0] !== '') {
              query[item.prop] = item.value[0]
            }
            if (item.value[1] !== '') {
              query[item.prop2] = item.value[1]
            }
          } else if (item.type === 'text_rank' || item.type === 'text_rank_number') {
            // 区间双框
            if (item.value[0] !== '') {
              query[item.prop] = item.value[0]
            }
            if (item.value[1] !== '') {
              query[item.prop2] = item.value[1]
            }
            // query[item.prop] = item.value[0];
            // query[item.prop2] = item.value[1];
          } else {
            // 非空字符值
            if (item.value !== '') {
              query[item.prop] = item.value
            }
          }
        }
      }
      return query
    },
    reset() {
      this.$emit('do-reset')
    },
    doExportExcel(val) {
      const query = this.getQuery()
      this.$emit('do-exportExcel', { num: val, query: query })
    },
    toParent() {
      const query = this.getQuery()
      this.$emit('do-parent', query)
    },
    doWindControl() {
      const query = this.getQuery()
      this.$emit('do-wind-control', query)
    },
    doCalTotal() {
      const query = this.getQuery()
      this.$emit('do-calTotal', query)
    },
    // 快速导出excel
    doCalFastExcel() {
      const query = this.getQuery()
      this.$emit('do-calFast-excel', query)
    },
    doEstimate() {
      const query = this.getQuery()
      this.$emit('do-estimate', query)
    },
    validateCom(value) {
      const one = Number(value)
      if (one < -1000000) {
        this.$message.error(`输入值必须大于${-1000000}`)
      } else if (one > 1000000000000000000) {
        this.$message.error(`输入值必须小于${1000000000000000000}`)
      }
    },
    validateMin(val1, val2) {
      if (!val1 || !val2) return
      const one = Number(val1)
      const max = Number(val2)
      if (one > max) {
        this.$message.error('输入值不得大于最大值')
      }
    },
    validateMax(val1, val2) {
      if (!val1 || !val2) return
      const one = Number(val2)
      const min = Number(val1)
      if (one < min) {
        this.$message.error('输入值不得小于最小值')
      }
    },
    handleMinChange(val1, val2) {
      this.validateCom(val1)
      this.validateMax(val1, val2)
    },
    handleMaxChange(val1, val2) {
      this.validateCom(val2)
      this.validateMax(val1, val2)
    }
  }
}
</script>
<style lang="scss">
.search-container {
  padding: 0 10px;
  border-radius: 8px;
  box-shadow: 1px 2px 6px #ccc;
  background-color: #fff;
  .search-item-box {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    // float: left;
    > div {
      width: auto;
      > div {
        margin-left: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        > div {
          &:nth-child(1) {
            min-width: 115px;
            color: #606266;
            text-align: right;
            font-size: 14px;
            line-height: 32px;
            padding-right: 10px;
            box-sizing: border-box;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .label_bold {
    font-weight: 900;
  }
  .el-dropdown {
    margin: 0 10px;
  }
  .export2excel {
    .el-button {
      padding: 9px 15px !important;
    }
  }
  .el-collapse {
    width: 100%;
  }
  .search-footer {
    display: flex;
    justify-content: flex-end;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 98%;
  }
}
@media screen and(max-width: 750px) {
  .search-container {
    padding: 0 10px;
    border-radius: 8px;
    box-shadow: 1px 2px 6px #ccc;
    background-color: #fff;
    .search-item-box {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      > div {
        width: 100%;
        // &:nth-child(1) {
        //   width: 100%;
        // }
        > div {
          .el-input,
          .el-select {
            width: 100%;
          }
          &.mobile-time {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: row;
            flex-wrap: nowrap;
            .time-panel {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              flex-direction: column;
              flex-wrap: wrap;
              > div {
                width: 100%;
                margin-bottom: 5px;
              }
            }
          }
        }
      }
    }
    .search-footer {
      margin-top: 10px;
      padding: 5px 10px 10px 30px;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      justify-content: flex-start;
    }
  }
}

/*横屏 css*/
// @media screen and (orientation: landscape) {
//   .el-picker-panel.el-date-picker.el-popper {
//     // top: 19px !important;
//   }
// }
</style>
