
<template>
  <el-table v-loading="listLoading" :data="data" element-loading-text="Loading" border fit highlight-current-row :max-height="maxHeight" :header-cell-style="headClass" size="medium" @selection-change="selectRow" class="new-table" v-bind="$attrs">
    <template v-if="selection"> <el-table-column type="selection" width="55"> </el-table-column></template>
    <template v-for="config in configs">
      <!-- 普通文字渲染 -->
      <el-table-column aaa="1231" v-if="!config.type" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120"> </el-table-column>

      <!-- 特殊情况,其他列某些值的,此值隐藏为-符号   -->
      <el-table-column v-if="config.type === 'myShowHide'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="getHave(config.filtersValue, scope.row[config.filters])">-</span>
          <span v-else>{{ scope.row[config.prop] }}</span>
        </template>
      </el-table-column>

      <!-- 序号 -->
      <el-table-column v-if="config.type == 'index'" type="index" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120"> </el-table-column>

      <!-- 没有值显示- -->

      <el-table-column v-if="config.type === 'noneShowLine'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="90">
        <template slot-scope="scope">
          <span v-if="!scope.row[config.prop]">-</span>
          <span v-else>{{ scope.row[config.prop] }}</span>
        </template>
      </el-table-column>

      <!-- 固定值 -->
      <el-table-column v-if="config.type === 'fixedValue'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        {{ config.val }}
      </el-table-column>

      <!-- 去除负号 -->
      <el-table-column v-if="config.type === 'removeMinus'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span>
            {{ (scope.row[config.prop] + '').replace(/[-]/g, '') }}
          </span>
        </template>
      </el-table-column>

      <!-- 绝对值 -->
      <el-table-column v-if="config.type === 'joint'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="scope.row[config.prop]"> {{ scope.row[config.prop] + config.jointValue }} </span>
          <span v-else> - </span>
        </template>
      </el-table-column>

      <!-- 最多保留8位小数 -->
      <el-table-column v-if="config.type == 'onlyEightDecimals'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span> {{ roundFun(scope.row[config.prop], 8) }}</span>
        </template>
      </el-table-column>

      <!-- 减一个其他值 -->
      <el-table-column v-if="config.type == 'minusOthersNumber'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="config.othersNumber"> {{ getMinus(scope.row[config.prop], config.othersNumber) }} </span>
          <span v-else-if="config.prop2">
            {{ getMinus(scope.row[config.prop], scope.row[config.prop2]) }}
          </span>
        </template>
      </el-table-column>

      <!-- 加一个其他值 -->
      <el-table-column v-if="config.type == 'plusOthersNumber'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="config.othersNumber"> {{ getPlus(scope.row[config.prop], config.othersNumber) }} </span>
          <span v-else-if="config.prop2"> {{ getPlus(scope.row[config.prop], scope.row[config.prop2]) }} </span>
        </template>
      </el-table-column>

      <!-- 乘一个其他值  并且再拼接一个值-->
      <el-table-column v-if="config.type == 'getTimesCol'" :key="config.label" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="!scope.row[config.prop]"> {{ scope.row[config.prop] }} </span>
          <span v-else> {{ getTimes(scope.row[config.prop], '100') + '%' }} </span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'textColor'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="90">
        <template slot-scope="scope">
          <!-- <span class="td-color" :style="{color:(parseInt(2) == 0 ? '#4379FF': parseInt(2) == 2 ?'#000' : '#EABF40')}">{{ (scope.row[config.prop] / 1000) }}</span> -->
          <span class="td-color" :style="{ color: parseInt(scope.row[config.prop2]) == 0 ? '#4379FF' : parseInt(scope.row[config.prop2]) == 2 ? '#000' : '#EABF40' }">{{ (scope.row[config.prop] / 60 / 60).toFixed(2) + '小时' }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'textColorTwo'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="90">
        <template slot-scope="scope">
          <span class="td-color" :style="{ color: '#4379FF' }">{{ (scope.row[config.prop] / 60 / 60).toFixed(2) + '小时' }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'textAndfilter'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="config.show_type === 'text'">{{ scope.row[config.prop] | textFilter(config.filters) }}</span>
          <span>+</span>
          <span>{{ scope.row[config.prop2] }}</span>
        </template>
      </el-table-column>

      <!--  结尾 % -->
      <el-table-column v-if="config.type === 'afterPercent'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="scope.row[config.prop] == '--'">{{ scope.row[config.prop] }}</span>
          <span v-else>{{ scope.row[config.prop] }}%</span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'textOneColor'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="90">
        <template slot-scope="scope">
          <span class="td-color" :style="{ color: parseInt(scope.row[config.prop2]) == 0 ? '#000' : '#4DA4FF' }">{{ scope.row[config.prop] }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'positiveColor'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="90">
        <template slot-scope="scope">
          <span class="td-color" :style="{ color: parseInt(scope.row[config.oldProp]) > 0 ? '#EABF40' : '#000' }">{{ scope.row[config.prop] }}</span>
        </template>
      </el-table-column>

      <!-- 显示一个数组 -->
      <el-table-column v-if="config.type === 'valueArr'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span class="valueArr" v-for="(item, ixx) in scope.row[config.prop]" :key="ixx"> {{ item[config.key1] }} {{ item[config.key2] ? '(是)' : '(否)' }} </span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'textArr'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <div>
            <span v-for="(item, ixx) in config.arr" :key="ixx"
              >{{ scope.row[item] }} <span style="margin-right: 5px" v-if="ixx != config.arr.length - 1"> {{ config.join }}</span>
            </span>
          </div>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'sumPositive'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="parseInt(scope.row[config.prop]) > 0">{{ scope.row[config.propArr[0]] + scope.row[config.propArr[1]] }}</span>
          <span v-else>{{ scope.row[config.propArr[1]] }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'labelArr'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="130">
        <template slot-scope="scope">
          <div class="colline" v-if="config.typeDetail === 'numlist'">
            <span v-for="(item, idx) in scope.row[config.prop]" :key="idx">
              {{ item[config.label1] }}
            </span>
          </div>
          <div class="colline" v-else-if="config.typeDetail === 'stringlist'">
            <span v-for="(item, idx) in scope.row[config.prop]" :key="idx">
              {{ item }}
            </span>
          </div>
          <div class="colline" v-else-if="config.typeDetail === 'stringlistMore'">
            <span v-for="(item, idx) in scope.row[config.prop]" :key="idx"> {{ item[config.arrProp[0]] }} - {{ item[config.arrProp[1]] }} - {{ item[config.arrProp[2]] }} </span>
          </div>

          <!-- 能根据逗号拆分为数组后跳转 -->
          <div class="colline" v-else-if="config.typeDetail === 'dotStrList'">
            <template v-if="(scope.row[config.prop] + '').indexOf(',') > 0">
              <el-button style="margin-bottom: 4px" plain @click="doHandleLine($event, scope.row, config.fn, item)" v-for="(item, idx) in (scope.row[config.prop] + '').split(',')" :key="idx" type="primary">
                {{ item }}
              </el-button>
            </template>
            <template v-else-if="scope.row[config.prop]">
              <el-button plain @click="doHandleLine($event, scope.row, config.fn, scope.row[config.prop])" type="primary">
                {{ scope.row[config.prop] }}
              </el-button>
            </template>
            <template v-else> </template>
          </div>
          <!-- 能根据逗号拆分为数组后不跳转 -->
          <div class="colline" v-else-if="config.typeDetail === 'dotStrListNoClick'">
            <template v-if="(scope.row[config.prop] + '').indexOf(',') > 0">
              <span style="margin-bottom: 4px" v-for="(item, idx) in (scope.row[config.prop] + '').split(',')" :key="idx">
                {{ item }}
              </span>
            </template>
            <template v-else-if="scope.row[config.prop]">
              {{ scope.row[config.prop] }}
            </template>
          </div>
          <div class="colline" v-else>
            <span v-for="(item, ix) in scope.row[config.prop]" :key="ix"> {{ item[config.label1] }}: {{ Math.floor(item[config.label2] * 10000) / 100 }}% </span>
          </div>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'range'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="130">
        <template slot-scope="scope">
          <div>
            <span>{{ scope.row[config.arr[0]] }}</span> - <span>{{ scope.row[config.arr[1]] }}</span>
          </div>
        </template>
      </el-table-column>

      <!-- 时间 -->
      <el-table-column v-if="config.type === 'time'" :key="config.prop" :prop="config.prop" :label="config.label" :width="config.width ? config.width : 200">
        <template slot-scope="scope">
          <span v-if="/[-:/]/g.test(scope.row[config.prop])">{{ scope.row[config.prop] }}</span>
          <span v-else-if="!config.tag">{{ scope.row[config.prop] | typeTime }}</span>
          <span v-else>{{ scope.row[config.prop] | typeDate }}</span>
        </template>
      </el-table-column>

      <!-- 图片 -->
      <el-table-column v-if="config.type === 'img'" :key="config.prop" :label="config.label">
        <template slot-scope="scope">
          <div class="img-wraper">
            <img v-if="scope.row[config.prop]" title="单击大图预览" @click="viewImg(scope.row[config.prop])" :width="'30px'" :height="'30px'" :src="scope.row[config.prop]" alt="" />
            <span v-else>无</span>
          </div>
        </template>
      </el-table-column>

      <!-- 视频 -->
      <el-table-column v-if="config.type === 'video'" :key="config.prop2" :label="config.label">
        <template slot-scope="scope">
          <div class="img-wraper">
            <span class="video-txt" v-if="scope.row[config.prop]" @click="viewVideo(scope.row[config.prop])">播放视频</span>
            <span v-else>无</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column v-if="config.type === 'imgArr'" :key="config.prop" :label="config.label">
        <template slot-scope="scope">
          <div class="colline" v-if="(scope.row[config.prop] + '').indexOf(',') > 0">
            <img v-for="(item, idx) in scope.row[config.prop].split(',')" :key="idx" title="单击大图预览" @click="viewImg(scope.row[config.prop].split(',')[idx])" :width="'34px'" :height="'34px'" style="margin-bottom: 4px" :src="scope.row[config.prop].split(',')[idx]" alt="" />
          </div>
          <div class="img-wraper" v-else>
            <img v-if="scope.row[config.prop]" title="单击大图预览" @click="viewImg(scope.row[config.prop])" :width="'30px'" :height="'30px'" :src="scope.row[config.prop]" alt="" />
            <span v-else>无</span>
          </div>
        </template>
      </el-table-column>

      <!-- qrcode图 特定 -->
      <el-table-column v-if="config.type === 'qrimg'" :key="config.prop" :label="config.label" :width="config.width ? config.width : '210px'">
        <template slot-scope="scope">
          <div class="qrimg-wraper">
            <p v-if="scope.row.payType && (scope.row.payType == 1 || scope.row.payType == 4)">无</p>
            <div v-else>
              <p @click="doHandle($event, scope.row, config.fn)" style="color: #409eff; cursor: pointer; user-select: none" v-if="scope.row[config.prop]" class="rowLine">
                <span style="min-width: 90px; margin-right: 4px">{{ scope.row[config.prop] }}</span>
                <img style="width: 20px; position: relative; margin-right: 3px" src="../../assets/QR_code.png" alt="" />
                <span style="min-width: 50px">验证二维码</span>
              </p>
              <p v-else>识别错误</p>
            </div>
          </div>
        </template>
      </el-table-column>

      <!-- 特殊情况,其他列某些值的,此值隐藏为-符号 过滤类型   -->
      <el-table-column v-if="config.type === 'filter_myShowHide'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''" :minWidth="120">
        <template slot-scope="scope">
          <span v-if="getHave(config.filtersValue, scope.row[config.filtersProp])">-</span>
          <span v-else>{{ scope.row[config.prop] | textFilter(config.filters) }}</span>
        </template>
      </el-table-column>

      <!-- 过滤 -->
      <el-table-column v-if="config.type === 'filter'" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''">
        <template slot-scope="scope">
          <span v-if="config.show_type === 'text'">{{ scope.row[config.prop] | textFilter(config.filters) }}</span>
          <el-tag v-else-if="config.show_type === 'tag' && config.prop" :type="scope.row[config.prop] | typeFilter(config.filters)">{{ scope.row[config.prop] | textFilter(config.filters) }}</el-tag>
          <span v-if="config.show_type === 'textColorLine'" :style="{ color: scope.row[config.prop] == 1 && scope.row[config.other] != 3 ? '#C5012F' : '#000' }">{{ scope.row[config.prop] | textFilter(config.filters) }}</span>
          <span v-if="config.show_type === 'filters' && config.filters === 'optTypeFB'">{{ scope.row[config.prop] | optTypeFB }}</span>
          <span v-if="config.show_type === 'filters' && config.filters === 'matchResultMap'">{{ scope.row[config.prop] | matchResultMap }}</span>
        </template>
      </el-table-column>

      <!-- 开关 -->
      <el-table-column v-if="config.type === 'switch' && actionShow" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''">
        <template slot-scope="scope">
          <el-switch v-model="scope.row[config.prop]" active-color="#13ce66" inactive-color="#ff4949" :disabled="scope.row['disabled'] ? scope.row['disabled'] : false" @change="doHandle($event, scope.row, config.fn)"> </el-switch>
        </template>
      </el-table-column>

      <!-- 开关  特定情况下显示-->
      <el-table-column v-if="config.type === 'switchIndexOf' && actionShow" :key="config.prop" :label="config.label" :width="config.width ? config.width : ''">
        <template slot-scope="scope">
          <el-switch v-if="indexOfFn(scope.row)" v-model="scope.row[config.prop]" active-color="#13ce66" inactive-color="#ff4949" :disabled="scope.row['disabled'] ? scope.row['disabled'] : false" @change="doHandle($event, scope.row, config.fn)"> </el-switch>
        </template>
      </el-table-column>

      <!-- 操作按钮 -->
      <el-table-column fixed="right" v-if="config.type === 'action' && actionShow" :key="config.prop" :label="config.label" :width="isDeskTop ? config.width : '120px'">
        <template slot-scope="scope">
          <span v-for="(btn, i) in config.btnGroup" :key="i + 't`t'">
            <template v-if="btn.type == 'noVisible'"> </template>

            <el-button v-else-if="!btn.filter_key && !btn.type" type="text" size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            <!--常用于得到数据后遍历后确定不可点击，并且noIsClick为false或不存在,否则就还是可以点击-->
            <el-button v-else-if="!btn.filter_key && !btn.filter_type && btn.type && !btn.other_filter && !btn.out" :type="btn.type" plain size="small" :disabled="scope.row.isclick && btn.noIsClick" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>

            <!--常用于特定值下出现的按钮-->
            <template v-else-if="btn.filter_key && !btn.filter_type && !$util.isArray(btn.filter_key) && !btn.isPop && !btn.out && scope.row[btn.filter_key] == btn.filter_status">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!--常用于特定值下出现的按钮 非这个-->
            <template v-else-if="btn.filter_key && !$util.isArray(btn.filter_key) && !btn.isPop && btn.out && scope.row[btn.filter_key] != btn.filter_status">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <template v-else-if="btn.filter_key && $util.isArray(btn.filter_key) && !btn.isPop && !btn.out && scope.row[btn.filter_key[0]] == btn.filter_status[0] && scope.row[btn.filter_key[1]] == btn.filter_status[1]">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!-- 根据table列表某些字段的值显示 -->

            <template v-else-if="btn.filter_type == 'array' && btn.filter_status.includes(scope.row[btn.filter_key] + '')">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!-- 根据table列表某些字段的值不显示 -->

            <template v-else-if="btn.filter_type == 'arrayExcept' && !btn.filter_status.includes(scope.row[btn.filter_key] + '')">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!-- // 根据一个传入的值判断是否展示 -->
            <template v-else-if="btn.filter_type == 'filter_label' && filter_type_value == scope.row[btn.filter_key] + ''">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <template
              v-else-if="
                !btn.filter_key &&
                btn.other_filter &&
                !btn.out &&
                ((btn.filter_status.length == 3 && scope.row[btn.other_filter[0]] == btn.filter_status[0] && (scope.row[btn.other_filter[1]] == btn.filter_status[1] || scope.row[btn.other_filter[2]] == btn.filter_status[2])) ||
                  (btn.filter_status.length == 2 && scope.row[btn.other_filter[0]] == btn.filter_status[0] && scope.row[btn.other_filter[1]] == btn.filter_status[1]))
              "
            >
              <el-button slot="reference" :type="btn.type" plain size="mini" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!-- 包含哪个值不显示 除了包含那些值的显示-->

            <template v-else-if="btn.filter_type == 'filter_indexOf_Except' && indexOfExceptFn(scope.row, btn)">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <!-- 包含那些值的显示 -->
            <template v-else-if="btn.filter_type == 'filter_indexOf' && indexOfFn(scope.row, btn)">
              <el-button slot="reference" :type="btn.type" plain size="small" @click="doHandle($event, scope.row, btn['fn'])">{{ btn.label }}</el-button>
            </template>

            <el-popconfirm v-else-if="btn.filter_key && scope.row[btn.filter_key] == btn.filter_status && btn.isPop && !btn.out" :title="btn['confirm_txt']" @onConfirm="doHandle($event, scope.row, btn['fn'])">
              <el-button slot="reference" :type="btn.type" size="mini">{{ btn.label }}</el-button>
            </el-popconfirm>
          </span>

          <template v-if="actionMoreShow">
            <el-dropdown type="primary" class="more_dropdown">
              <el-button type="primary" plain> {{ actionMoreText }}<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :divided="index != 0" v-for="(item, index) in moreArr" :key="index">
                  <el-button v-if="!item.filter_type || !item.filter_status || indexOfExceptFn(scope.row, item)" plain type="primary" @click="doHandle($event, scope.row, item['fn'])">{{ item.label }}</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
import Precision from '@/utils/number-precision';
import { parseTime, isArray } from '@/utils/index';
import { number } from 'echarts/lib/export';
export default {
  name: 'b-table',
  props: {
    // 操作按钮是否显示

    actionMoreShow: {
      type: Boolean,
      default: false,
    },
    actionMoreText: {
      type: String,
      default: '更多',
    },

    moreArr: {
      type: Array,
      default: () => {
        return [];
      },
    },

    actionShow: {
      type: Boolean,
      default: true,
    },
    listLoading: {
      type: Boolean,
      default: false,
    },
    redIsshow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: [],
    },
    filter_type_value: {
      type: String,
      default: '',
    },
    configs: {
      type: Array,
      default: [],
    },
    // 是否可以多选框勾选条目
    selection: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: String,
      default: '530px',
    },
    // 表单头部颜色
    headColor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDeskTop() {
      return this.$store.state.app.device !== 'mobile';
    },
    getPlus() {
      return (n1, n2) => {
        return Precision.plus(n1, n2);
      };
    },
    // 包含哪个值不显示 除了包含那些值的显示
    indexOfExceptFn() {
      return (row, btn) => {
        return btn.filter_status.every((v) => {
          return row[btn.filter_key].indexOf(v) < 0;
        });
      };
    },

    // 包含那些值的显示
    indexOfFn() {
      return (row, btn) => {
        return btn.filter_status.some((v) => {
          return row[btn.filter_key].indexOf(v) != -1;
        });
      };
    },

    getMinus() {
      return (n1, n2) => {
        return Precision.minus(n1, n2);
      };
    },

    getTimes() {
      return (n1, n2) => {
        return Precision.times(n1, n2);
      };
    },

    getPlusSum() {
      return (row, arr, others) => {
        if (!arr) return '无';
        var sum = arr.reduce((prev, cur) => {
          return Precision.plus(prev, row[cur]);
        }, 0);
        if (others) {
          sum = Precision.plus(sum, others);
        }
        return sum;
      };
    },
  },
  filters: {
    textFilter(v, arr) {
      const o = arr.find((item) => {
        return item.val == v;
      });
      return !o ? '' : o['text'];
    },
    typeFilter(v, arr) {
      const o = arr.filter((item) => {
        return item.val == v;
      });
      if (!o.length) {
        return '';
      } else {
        return o[0]['type'];
      }
    },
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
    typeDate(v) {
      if (!v) return '';
      return parseTime(v).slice(0, 10);
    },
  },
  data() {
    return {
      myarr: [],
    };
  },
  methods: {
    //是否有某些值
    getHave(val, typeValue) {
      let msg = val.some((v) => {
        return v == typeValue;
      });
      return msg;
    },
    // 处理科学计数法
    getFullNum(num) {
      //处理非数字
      if (isNaN(num)) {
        return num;
      }

      //处理不需要转换的数字
      var str = '' + num;
      if (!/e/i.test(str)) {
        return num;
      }

      return num.toFixed(18).replace(/\.?0+$/, '');
    },

    //保留几位小数
    roundFun(value, n) {
      return this.getFullNum(Math.round(value * Math.pow(10, n)) / Math.pow(10, n));
    },
    viewImg(url, name) {
      name = name ? name : '';
      this.$store.dispatch('app/setViewerImages', [url]);
      this.$store.dispatch('app/showSingleViewerImages', true);
      // this.$store.dispatch("app/setSingleViewerTitle", `${name} Banner图`);
    },
    viewVideo(url) {
      if (!url) {
        this.$message.error('视频地址不存在，无法播放');
        return;
      }
      // 防止视频未关闭刷新页面后两次url相同不弹出视频框bug
      if (this.$store.state.app.video == url) {
        this.$store.dispatch('app/setViewerVideo', '');
        this.$nextTick(() => {
          this.$store.dispatch('app/setViewerVideo', url);
        }, 200);
      } else {
        this.$store.dispatch('app/setViewerVideo', url);
      }
    },
    // "操作"列按钮操作
    doHandle(e, item, fn) {
      const obj = {
        row: item,
        fn: fn,
      };

      this.$emit('do-handle', obj);
    },
    // （"非操作列"行内）按钮操作
    doHandleLine(e, item, fn, curData) {
      const obj = {
        row: item,
        fn: fn,
        curData: curData,
      };
      this.$emit('do-handle', obj);
    },
    headClass({ row, column, rowIndex, columnIndex }) {
      if (this.headColor) {
        let color = this.configs[columnIndex].headColor;
        return `color :${color}`;
      }
      return 'background: #f5f7fa';
    },
    // 勾选条目
    selectRow(val) {
      if (!this.selection) return;
      this.$emit('select', val);
    },
    copy() {
      this.$message.success('复制成功');
    },
  },
};
</script>
<style lang="scss">
.el-table.new-table {
  border-radius: 8px;
  box-shadow: 1px 2px 6px #ccc;
  thead {
    th.is-leaf {
      background: #ffffff !important;
      font-size: 15px;
      font-weight: 600;
    }
  }
  .el-dropdown-menu {
    justify-content: center !important;
  }

  .more_dropdown {
    margin-left: 5px;
    .el-button-group {
      display: flex;
    }
  }
  .valueArr {
    &::after {
      content: ';';
      font-family: 'iconfont';
      display: inline-block;
    }
    &:last-child {
      &::after {
        content: '';
        font-family: 'iconfont';
        display: inline-block;
      }
    }
  }
  .el-table__row {
    td {
      color: #000;
      font-weight: 500;
      font-size: 14px;
      button {
        font-size: 14px;
      }
    }
  }
  .cell {
    text-align: center;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    > span {
      margin-left: 6px !important;
    }
    span.video-txt {
      color: #409eff;
      cursor: pointer;
    }
    .el-tag.el-tag--info {
      margin-right: 6px;
    }
  }
}

.el-pagination {
  button {
    background: #fff !important;
  }
  .el-pager {
    li.number {
      background: #ffffff !important;
    }
    li.number.active {
      background-color: #409eff !important;
      color: #fff !important;
    }
  }
}
.colline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rowLine {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span:first-child {
    margin-right: 4px;
  }
}
.td-color {
}
@media screen and(max-width: 750px) {
  .el-table.new-table {
    border-radius: 8px;
    box-shadow: 1px 2px 6px #ccc;
    .cell {
      // text-align: center;
      // display: flex;
      flex-direction: column;
      // justify-content: center;
      // align-items: center;
      > span {
        margin: 5px !important;
      }
      .el-tag.el-tag--info {
        margin-right: 6px;
      }
    }
  }
}
</style>