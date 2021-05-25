<template>
  <div class="voucherActivity-container">
    <div class="container-top">
      <Bsearch :configs="searchCofig" @do-search="doSearch" @do-reset="doReset" />
    </div>
    <div class="container-btn" v-if="true">
      <el-button type="primary" size="medium" @click="addLine">创建活动</el-button>
    </div>
    <div>
      <Btable :listLoading="listLoading" :data="list" :configs="configs" @do-handle="doHandle" />
    </div>
    <div class="container-footer">
      <icon-page :total="total" :pages="pages"></icon-page>
      <el-pagination background @current-change="goPage" layout="total, prev, pager, next, jumper" :current-page="current_page" :page-size="pageSize" :total="total"> </el-pagination>
    </div>

    <!-- 添加编辑弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="1010px" :title="title">
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item label="活动名称" prop="activityName" :label-width="labelWidth">
          <el-input style="width: 250px" type="text" placeholder="请输入" v-model="form.activityName" maxlength="20"> </el-input>
        </el-form-item>

        <el-row>
          <el-col :span="10">
            <el-form-item label="活动类型" prop="activityType" :label-width="labelWidth">
              <el-select @change="typeChange" v-model="form.activityType" placeholder="请选择" style="width: 250px">
                <el-option v-for="(item, index) in activityTypeList" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col v-if="voucherParametersShow" :span="10">
            <el-form-item label="条件类型" prop="activityType" :label-width="labelWidth">
              <el-select @change="voucherParametersChange" v-model="form.voucherParameters" placeholder="请选择" style="width: 250px">
                <el-option v-for="(item, index) in voucherParametersList" :key="index" :label="item.conditionName" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <div>
          <el-row>
            <div class="con" v-for="(el, index) in selectList" :key="index">
              <el-col :span="10">
                <el-form-item label="触发条件一" :required="true" :label-width="labelWidth">
                  <el-select v-model="el.triggerId" placeholder="请选择" style="width: 290px" :disabled="!!(form.activityType === '')">
                    <el-option v-for="(item, index) in showTriggerArrList(el.triggerId)" :key="index" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="7" v-if="!showCheckbox">
                <el-form-item label="关联送券副标题" :required="true" :label-width="labelWidth">
                  <el-select v-model="el.experienceId" placeholder="请选择" style="width: 180px">
                    <el-option v-for="(item, index) in experienceArr" :key="index" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col v-else>
                <el-form-item label="关联送券副标题" :required="true" :label-width="labelWidth">
                  <el-checkbox-group v-model="el.relationIds">
                    <el-checkbox v-for="(item, index) in experienceArr" :label="item.value" :key="index">{{ item.label }}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item :required="form.activityType != 6" label="送券数量" :label-width="labelWidth">
                  <el-input :disabled="form.activityType == 6" type="number" placeholder="正整数" :value="el.couponNumber" @input="(e) => (el.couponNumber = isNumber(e))"> </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="1">
                <el-button style="margin-left: 20px; margin-top: 5px" round plain type="danger" size="small" :disabled="!!(form.activityType === '')" @click.stop="delKeyIdList(index)">删除</el-button>
              </el-col>
            </div>
          </el-row>
          <el-row>
            <div>
              <div class="middle">
                <el-button id="addKeyIdBtn" type="primary" size="medium" @click="addKeyIdList" :disabled="!!(form.activityType === '')">+添加</el-button>
              </div>
            </div>
          </el-row>
        </div>

        <el-form-item label="发放模式" prop="grantMode" :label-width="labelWidth">
          <el-select v-model="form.grantMode" placeholder="请选择" style="width: 250px" :disabled="true">
            <el-option v-for="(item, index) in grantModeArr" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发券频率" prop="grantDay" :label-width="labelWidth">
          <el-input :disabled="form.grantMode == 0 || form.activityType == 1 || form.activityType == 4" style="width: 250px" type="number" placeholder="请输入1到24的正整数" v-model="form.grantDay" @input="checkVal2('grantDay')"> </el-input>
        </el-form-item>
        <el-form-item label="总成本限制" prop="amountLimit" :label-width="labelWidth">
          <el-input style="width: 250px" type="number" placeholder="请输入正整数" v-model="form.amountLimit" @input="checkVal('amountLimit')"> </el-input>
        </el-form-item>
        <!-- <el-form-item label="总人数限制" prop="numberLimit" :label-width="labelWidth">
          <el-input style="width: 250px" type="number" placeholder="请输入正整数" v-model="form.numberLimit" @input="checkVal('numberLimit')"> </el-input>
        </el-form-item> -->

        <b-two-date-timer ref="twoTimer" :labelWidth="labelWidth" labelWords="活动有效期" :date1.sync="form.effectiveStartTime" :date2.sync="form.effectiveEndTime"></b-two-date-timer>
        <el-form-item label="启用" prop="status" :label-width="labelWidth">
          <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click.stop="confirmOp" :loading="btnLoading">确定</el-button>
      </div>
    </el-dialog>

    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogPrizeVisible" width="550px" title="发奖">
      <el-form :model="formPrize" ref="formPrize" :rules="rulesPrize">
        <el-form-item label="用户UID" :label-width="labelWidth" prop="uid">
          <el-input type="textarea" :rows="5" placeholder="请输入用户UID（用 ，隔开）" v-model="formPrize.uid" @input="checkValPrize('uid')"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="inner-footer">
        <el-button @click.stop="dialogPrizeVisible = false" style="margin-right: 10px">取消</el-button>
        <el-button type="primary" @click.stop="confirmPrizeDialog" :loading="prizeLoading">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Bsearch from '@/components/search/b-search';
import Btable from '@/components/table/b-table';
import iconPage from '@/components/icon-page';
import { voucherActivityCol, voucherActivityColNoBtn, voucherActivityConfig } from '@/config/column/voucher';
import $api from '@/api/api';
import utils from '@/utils/util';
import BTwoDateTimer from '@/components/b-two-date-timer';

export default {
  name: 'VoucherActivity',
  components: {
    Btable,
    Bsearch,
    iconPage,
    BTwoDateTimer,
  },
  data() {
    const checkGetDay = (rule, value, callback) => {
      if (value == '') {
        callback();
        return;
      }
      let tmp = parseInt(value);
      if (!/^(([1-9])|(1\d)|(2[0-4]))$/.test(tmp)) {
        return callback(new Error(rule.message));
      }
      callback();
    };
    return {
      showCheckbox: false,
      isCURDAuth: true, // 权限：是否能增删改查
      btnLoading: false, // 提交loading
      prizeLoading: false, // 发奖loading
      listLoading: false, // 表格loading
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
      voucherParametersList: [],
      voucherParametersShow: false, // activityTypeList 为 1 ,2 的时候显示
      selectList: [], // 具体存放触发条件，体验金名称，送券数量的数组，来源于activityVOList

      title: '',
      labelWidth: '110px',
      dialogVisible: false, // 是否显示弹窗
      form: {
        id: '',
        activityName: '',
        activityType: '',
        grantMode: '',
        grantDay: '',
        amountLimit: '',
        effectiveStartTime: '',
        effectiveEndTime: '',
        status: false,
        activityVOList: [],
        voucherParameters: '',
      },
      rules: {
        activityName: [{ required: true, message: '必填' }],
        activityType: [{ required: true, message: '必填' }],
        grantMode: [{ required: true, message: '必填' }],
        grantDay: [
          { required: false, message: '必填', trigger: 'blur' },
          {
            validator: checkGetDay,
            message: '请输入1到24的正整数',
            trigger: 'blur',
          },
        ],
        amountLimit: [{ required: true, message: '必填' }],
      },
      curRow: {}, // 当前选定行数据
      activityTypeList: [
        { label: '注册', value: 0 },
        { label: '净划入', value: 1 },
        { label: '邀请', value: 2 },
        { label: '实名认证', value: 4 },
        { label: '净入金和开仓交易额', value: 5 },
        { label: '新手操作指引', value: 6 },
      ],

      grantModeArr: [
        { label: '手动模式', value: 0 },
        { label: '自动模式', value: 1 },
      ],
      triggerArrNow: [], // 当前对应活动类型的触发条件
      triggerArrAll: [], // 所有的触发条件
      triggerArrAllNew: [],
      triggerArrAllOld: [],
      experienceArr: [], // 所有体验券

      dialogPrizeVisible: false, // 是否弹出发奖弹窗
      formPrize: {
        uid: '',
      },
      rulesPrize: {
        uid: [{ required: true, message: '必填' }],
      },
    };
  },
  watch: {
    'form.activityType': {
      async handler(newVal, oldVal) {
        // 两个都存在才能选择
        if (newVal === '') {
          return;
        }

        if (newVal == 5) {
          this.voucherParametersShow = false;
          this.form.voucherParameters = '';
          this.triggerArrAll = this.triggerArrAllNew;
          this.triggerArrNow = this.triggerArrAll;
          this.form.grantMode = newVal == 0 ? 0 : 1;
          // 净转入 状态 发放频率设置为0
          this.form.grantDay = '';
          this.showCheckbox = false;
        } else if (newVal == 1 || newVal == 2) {
          // 获取 邀请 和 净划入 type1 ,2  的触发条件
          this.voucherParametersShow = true;
          this.showCheckbox = false;
          this.triggerArrNow = []
          let params = {
            activityType: newVal,
          };
          // 净转入 状态 发放频率设置为0
          if (newVal == 1 ) {
            this.form.grantDay = 0;
          }else{
            this.form.grantDay = '';
          }
          this.form.grantMode = newVal == 0 ? 0 : 1;
          const res = await $api.getSpecialTriggerCondition(params);
          if (res) {
            let list = res.data.data;
            this.voucherParametersList = list;
          }
        } else {
          this.voucherParametersShow = false;
          this.form.voucherParameters = '';
          if (newVal == 6) {
            this.showCheckbox = true;
          } else {
            this.showCheckbox = false;
          }
          this.triggerArrAll = this.triggerArrAllOld;
          let tmp = [];
          this.triggerArrAll.forEach((v) => {
            if (v.activityType == newVal) {
              tmp.push(v);
            }
          });
          this.triggerArrNow = tmp;
          // 注册是手动发放，其他都是自动发放
          this.form.grantMode = newVal == 0 ? 0 : 1;
          // 净转入 状态 发放频率设置为0
          if (newVal == 1 || newVal == 4) {
            this.form.grantDay = 0;
          }
        }
      },
      // immediate: true,
    },
    'form.grantMode': {
      async handler(newVal, oldVal) {
        if (newVal || newVal == 0) {
          this.rules.grantDay[0].required = !newVal || newVal == 0 ? false : true;
          if (newVal == 0) {
            this.form.grantDay = '';
          }
        }
      },
      // immediate: true,
    },
  },
  computed: {
    showTriggerArrList() {
      return (val) => {
        //讲option的显示数据进行深拷贝
        if (!this.triggerArrNow || this.triggerArrNow.length <= 0) return [];
        let newList = JSON.parse(JSON.stringify(this.triggerArrNow));
        console.log('newList', newList);
        //处理selectList数据，返回一个新数组arr
        //arr数组就相当于所有Select选中的数据集合（没有选中的为''，不影响判断），只要在这个集合里面，其他的下拉框就不应该有这个选项
        const arr = this.selectList.map((item) => {
          //将其格式{value：'NewYork'}变成['NewYork'],方便使用indexOf进行判断 triggerId:0, experienceId:0,
          return (item = item.triggerId);
        });
        //过滤出newList里面需要显示的数据
        newList = newList.filter((item) => {
          //当前下拉框的选中的数据需要显示
          //val就是当前下拉框选中的值
          if (val == item.value) {
            return item;
          } else {
            //再判断在arr这个数组中是不是有这个数据，如果不在，说明是需要显示的
            if (arr.indexOf(item.value) == -1) {
              return item;
            }
          }
        });
        console.log('newList', newList);
        return newList;
      };
    },
    showExperienceArrList() {
      return (val) => {
        if (!this.experienceArr || this.experienceArr.length <= 0) return;
        let newList = JSON.parse(JSON.stringify(this.experienceArr));
        const arr = this.selectList.map((item) => {
          return (item = item.experienceId);
        });
        newList = newList.filter((item) => {
          if (val == item.value) {
            return item;
          } else {
            if (arr.indexOf(item.value) == -1) {
              return item;
            }
          }
        });
        //返回Options显示数据
        return newList;
      };
    },
  },
  methods: {
    async voucherParametersChange(val) {
      if (val) {
        let params = {
          id: val,
        };
        const res = await $api.getSpecialTriggerById(params);
        let list = res.data.data;
        if (list.length) {
          this.triggerArrNow = list.map((v) => {
            return { label: v.triggerCondition, value: v.id, activityType: v.activityType };
          });
          this.$nextTick(() => {
            document.getElementById('addKeyIdBtn').click();
          });
        }
      }
    },
    typeChange(val) {
      this.selectList = [];
      if (val != 1 && val != 2) {
        this.$nextTick(() => {
          document.getElementById('addKeyIdBtn').click();
        });
      }
    },
    delKeyIdList(index) {
      this.selectList.splice(index, 1);
    },
    addKeyIdList() {
      // if (this.selectList.length >= this.experienceArr.length) {
      //   this.$message.error('已无更多送券选项，不能再添加了');
      // } else
      if (this.selectList.length >= this.triggerArrNow.length) {
        this.$message.error('已无更多触发选项，不能再添加了');
      } else {
        this.selectList.push({ triggerId: '', experienceId: '', couponNumber: '', relationIds: [] });
      }
    },

    // 获取所有触发条件
    async getAllTriggerCondition() {
      const res = await $api.getAllTriggerCondition({});
      if (res.data) {
        let tmp = res.data.data;
        this.triggerArrAllOld = tmp.map((v) => {
          return { label: v.triggerCondition, value: v.id, activityType: v.activityType };
        });
        this.triggerArrAll = JSON.parse(JSON.stringify(this.triggerArrAllOld));
      }
    },
    // 获取 净入金和开仓交易额 type5 的触发条件
    async getAllTriggerConditionNew() {
      const res = await $api.getAllTriggerConditionNew({});
      if (res.data) {
        let tmp = res.data.data;
        this.triggerArrAllNew = tmp.map((v) => {
          return { label: v.content, value: v.id, activityType: 5 };
        });
      }
    },
    // 获取所有体验券
    async getAllExperience() {
      const res = await $api.getAllExperienceNew({});
      if (res.data) {
        let tmp = res.data.data;

        this.experienceArr = tmp.map((v) => {
          return { label: v.experienceSubtitle, value: v.id };
        });
      }
    },
    async doHandle(data) {
      const { fn, row } = data;
      this.curRow = row;
      if (fn === 'edit') {
        this.title = '编辑活动';
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs['form'].resetFields();
          this.form = {
            id: row.id,
            activityName: row.activityName,
            activityType: row.activityType,
            grantMode: row.grantMode,
            grantDay: row.grantDay,
            amountLimit: row.amountLimit,
            effectiveStartTime: (row.effectiveStartTime + '').replace(/\-/g, '/'),
            effectiveEndTime: (row.effectiveEndTime + '').replace(/\-/g, '/'),
            status: row.status,
            activityVOList: row.activityVOList,
          };

          // 已选的重置
          this.selectList = [];
          if (row.activityType == 5) {
            row.activityVOList.forEach((v) => {
              this.selectList.push({
                triggerId: v.conditionId,
                experienceId: v.experienceId,
                couponNumber: v.couponNumber,
              });
            });
          } else if (row.activityType == 6) {
            if (row.activityVOList.length > 0) {
              let arr = [];
              row.activityVOList.forEach((v) => {
                arr.push(v.experienceId);
              });
              this.selectList.push({
                triggerId: row.activityVOList[0].triggerId,
                relationIds: arr,
              });
            } else {
              this.selectList = [];
            }
          } else {
            row.activityVOList.forEach((v) => {
              this.selectList.push({
                triggerId: v.triggerId,
                experienceId: v.experienceId,
                couponNumber: v.couponNumber,
              });
            });
          }
        });
      }
      if (fn === 'del') {
        this.$confirm('确定删除？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            const params = {
              id: row.id,
            };
            const res = await $api.deleteActivity(params);
            if (res) {
              this.$message({ type: 'success', message: '删除操作成功!' });
              this.getList();
            }
          })
          .catch(() => {
            this.$message({ type: 'info', message: '已取消删除' });
          });
      }
      // 启用
      if (fn === 'trstart') {
        let params = {
          id: row.id,
          status: row.status ? 1 : 0,
        };
        const res = await $api.changeActivityStatus(params);
        if (res) {
          this.$message({ type: 'success', message: '操作成功!' });
          this.getList();
        } else {
          this.getList();
        }
      }
      // activityType为0 才能发奖
      if (fn === 'preReview') {
        this.dialogPrizeVisible = true;
        this.$nextTick(() => {
          this.$refs['formPrize'].resetFields();
          this.formPrize = {
            uid: '',
          };
        });
      }
    },
    doSearch(data) {
      this.current_page = 1;
      this.search_params_obj = data;
      this.getList();
    },
    doReset() {
      this.search_params_obj = {};
      this.searchCofig.forEach((v) => {
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
    addLine() {
      this.title = '添加活动';
      this.dialogVisible = true;
      this.showCheckbox = false;
      this.$nextTick(() => {
        this.$refs['form'].resetFields();
        this.$refs['twoTimer'].resetValue();
        this.form = {
          id: '',
          activityName: '',
          activityType: '',
          grantMode: '',
          grantDay: '',
          amountLimit: '',
          effectiveStartTime: '',
          effectiveEndTime: '',
          status: false,
          activityVOList: [],
        };
        this.selectList = [{ triggerId: '', experienceId: '', couponNumber: '', relationIds: [] }];
      });
    },
    // 提交发奖
    confirmPrizeDialog() {
      this.$refs['formPrize'].validate(async (valid) => {
        if (valid) {
          const { uid } = this.formPrize;
          let params = {
            activityId: this.curRow.id,
            list: uid.split(','),
          };
          let tmp = [];
          params.list.forEach((v) => {
            tmp.push({ uid: +v });
          });

          params.list = tmp;
          this.prizeLoading = true;
          const res = await $api.setGrantExperience(params);
          if (res) {
            this.$message({ type: 'success', message: '操作成功!' });
            this.dialogPrizeVisible = false;
            this.getList();
          }
          this.prizeLoading = false;
        }
      });
    },
    // 提交（新建，编辑）
    confirmOp() {
      if (!this.form.effectiveStartTime || !this.form.effectiveEndTime) {
        this.$refs['twoTimer'].valiteValue();
        return;
      }
      if (!this.selectList.length) {
        this.$message({ message: '触发条件条目行必填', type: 'error' });
        return;
      } else {
        if (this.showCheckbox) {
          let isError = false;
          this.selectList.forEach((v) => {
            if (!v.triggerId || !v.relationIds.length) {
              this.$message({ message: '触发条件条目行必须填写完整', type: 'error' });
              isError = true;
            }
          });
          if (isError) return;
        } else {
          let isError = false;
          this.selectList.forEach((v) => {
            if (!v.triggerId || !v.experienceId || !v.couponNumber) {
              this.$message({ message: '触发条件条目行必须填写完整', type: 'error' });
              isError = true;
            }
          });
          if (isError) return;
        }
      }
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          const {
            id,
            // activityName,
            // activityType,
            // grantMode,
            // grantDay,
            // amountLimit,
            effectiveStartTime,
            effectiveEndTime,
            status,
            activityVOList,
            ...repo
          } = this.form;
          // 需求说要添加一个触发id的字段
          let relationTriggerId = [];
          // 获取key列表
          let putArr = [];

          if (this.showCheckbox) {
            this.selectList.forEach((v) => {
              if (v.triggerId) {
                relationTriggerId.push(v.triggerId);
                putArr.push({
                  triggerId: v.triggerId,
                  relationIds: v.relationIds.join(),
                });
              }
            });
          } else {
            this.selectList.forEach((v) => {
              if (v.triggerId || v.experienceId) {
                relationTriggerId.push(v.triggerId);
                putArr.push({
                  triggerId: v.triggerId,
                  experienceId: v.experienceId,
                  couponNumber: v.couponNumber,
                });
              }
            });
          }

          // 统计这个额外属性
          if (relationTriggerId.length > 1) {
            relationTriggerId = relationTriggerId.join(',');
          } else if (relationTriggerId.length == 1) {
            relationTriggerId = relationTriggerId[0] + '';
          } else {
            relationTriggerId = '';
          }

          let params = {
            effectiveStartTime: this.formatTime(effectiveStartTime),
            effectiveEndTime: this.formatTime(effectiveEndTime),
            status: status ? 1 : 0,
            activityVOList: putArr,
            relationTriggerId: relationTriggerId,
            ...repo,
          };
          if (this.form.activityType == 5) {
            params.relationConditionId = relationTriggerId;
          }

          !id ? Object.assign(params) : Object.assign(params, { id });
          this.btnLoading = true;
          // 新增 编辑
          const res = !id ? await $api.createActivity(params) : await $api.editActivity(params);
          if (res) {
            let txt = !id ? '添加成功' : '编辑成功';
            this.$message({ message: txt, type: 'success' });
            this.dialogVisible = false;
            this.getList();
          }
          this.btnLoading = false;
        }
      });
    },
    // 数据列表
    async getList() {
      if (this.listLoading) return;
      const params = {
        pageNum: this.current_page,
        pageSize: this.pageSize,
      };
      this.requiredParams(params);
      Object.assign(params, this.search_params_obj);
      this.listLoading = true;
      const res = await $api.getActivityList(params);
      if (res) {
        const { records, total, current, pages } = res.data.data;
        // 需求：开启状态，编辑按钮不可点击
        records.forEach((v) => {
          v['status'] = v['status'] ? true : false;
          v['isclick'] = v['status'] ? true : false;
        });
        //         // 任务字符串转数组
        // let tmpTask = (taskId && taskId.split(',')) || [];
        // this.taskList = tmpTask.map(v => {
        //   return { value: +v };
        // });
        this.list = records;
        this.total = total;
        this.current_page = current;
        this.pages = pages;
      }
      this.listLoading = false;
    },
    requiredParams(params) {
      if (this.$util.isEmptyObject(this.search_params_obj)) {
        let befV = this.$util.dateFormat(this.ago, 'YYYY/MM/DD HH:mm:ss');
        let nowV = this.$util.dateFormat(this.toDay, 'YYYY/MM/DD HH:mm:ss');
        this.searchCofig[0].value = [befV, nowV];
        params.endTime = nowV.replace(/\//gi, '-');
        params.startTime = befV.replace(/\//gi, '-');
      }
      if (this.search_params_obj.startTime) {
        this.search_params_obj.endTime = this.formatTime(this.search_params_obj.endTime);
        this.search_params_obj.startTime = this.formatTime(this.search_params_obj.startTime);
      }
    },
    formatTime(val) {
      return ~(val + '').indexOf('-') ? val : val.replace(/\//gi, '-');
    },
    isNumber(val) {
      val = val.replace(/[^0-9]/gi, '');
      // 此处还可以限制位数以及大小
      if (val == '') {
        val = '';
      } else if (val < 1) {
        val = 1;
      }
      return val;
    },
    // 对输入值的范围进行限制
    checkVal2(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] < 0) {
        this.form[val] = 0;
      }
    },
    // 对输入值的范围进行限制
    checkVal(val) {
      this.form[val] = (this.form[val] + '').replace(/[^\d]/g, '');
      if (this.form[val] == '') {
        this.form[val] = '';
      } else if (this.form[val] < 1) {
        this.form[val] = 1;
      }
    },
    // 对输入值的范围进行限制
    checkValPrize(val) {
      this.formPrize[val] = (this.formPrize[val] + '').replace(/[^\d,]/g, '');
      if (this.formPrize[val] < 0) {
        this.formPrize[val] = 0;
      }
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('VoucherActivity', voucherActivityCol, voucherActivityColNoBtn);
    this.configs = authObj.val;
    this.isCURDAuth = authObj.isAdd;

    this.searchCofig = this.$util.clone(voucherActivityConfig);
    // this.$store.dispatch('common/getSymbolListContract').then(() => {
    //   this.keyIdNowList = this.$store.state.common.symbollistContract;
    // });
    // 初始化今天，和昨天的时间
    this.toDay = this.$util.diyTime('toDay');
    this.ago = this.$util.diyTime('ago');

    this.getList();
    this.getAllTriggerCondition();
    this.getAllTriggerConditionNew();
    this.getAllExperience();
  },
};
</script>
<style lang="scss">
.voucherActivity-container {
  padding: 4px 10px 10px 10px;
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

  .con {
    width: 100%;
  }
  .middle {
    padding: 2px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 16px;
    color: #304156;
    cursor: pointer;
    user-select: none;
  }
}
</style>
