<!--
 * @Author: your name
 * @Date: 2020-07-03 11:51:54
 * @LastEditTime: 2020-07-23 18:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\components\warehouse\levelSet.vue
-->
<template>
  <div class="levelset-page">
    <div class="page-con">
      <el-button type="primary" size="medium" @click.stop="addFunc()" style="margin-bottom:20px;" :disabled="!isModify">+添加</el-button>
      <div class="header">
        <div class="one">星级</div>
        <div class="two">阶段</div>
        <div class="three">自己积分+下 3 代总积分（N）</div>
        <div class="four">周奖金</div>
      </div>
      <ul>
        <li class="con" v-for="(el, index) in levelList" :key="index">
          <div class="one">{{ el.starLevel }}星</div>
          <div class="two">{{ el.stage }}阶段</div>
          <div class="three">{{ el.minPoint }} ≤&nbsp; N &nbsp;< {{ el.maxPoint }}</div>
          <div class="four">{{ el.bonus }}</div>
          <div>
            <el-button round plain type="primary" size="small" :disabled="!isModify" @click.stop="delFunc(el)">删除</el-button>
            <el-button round plain type="danger" size="small" :disabled="!isModify" @click.stop="updateFunc(el)">编辑</el-button>
          </div>
        </li>
      </ul>
    </div>

    <!-- 添加 编辑 归集地址-->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="550px">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules">
        <el-form-item label="星级" :label-width="formLabelWidth" prop="starLevel">
          <el-select v-model="editForm.starLevel" placeholder="请选择星级">
            <el-option v-for="(item, idx) in starList" :key="idx" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阶段" :label-width="formLabelWidth" prop="stage">
          <el-input v-model="editForm.stage" type="number" placeholder="请输入阶段" @input="checkVal('stage')"></el-input>
        </el-form-item>

        <el-form-item label="积分" :label-width="formLabelWidth" :required="true">
          <el-col :span="9">
            <el-form-item prop="minPoint" :rules="editFormRules.minPoint">
              <el-input type="number" v-model="editForm.minPoint" @input="checkVal('minPoint')"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1" style="text-align:center;font-size:17px;">
            ~
          </el-col>
          <el-col :span="9">
            <el-form-item prop="maxPoint" :rules="editFormRules.maxPoint">
              <el-input type="number" v-model="editForm.maxPoint" @input="checkVal('maxPoint')"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="奖金" :label-width="formLabelWidth" prop="bonus">
          <el-input type="number" v-model="editForm.bonus" @input="checkVal('bonus')"> </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="conLoading" @click="confirmFunc">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import $api from '@/api/api';
export default {
  data() {
    return {
      levelList: [],
      title: '编辑奖励',
      dialogVisible: false, // 是否弹出弹窗
      conLoading:false, // 提交加载中
      curRow: {}, // 当前被点击的数据条目
      formLabelWidth: '80px',
      editForm: {
        id: '',
        starLevel: 0,
        stage: '',
        minPoint: 0,
        maxPoint: '',
        bonus: '',
      },
      editFormRules: {
        starLevel: [{ required: true, message: '必填' }],
        stage: [{ required: true, message: '必填' }],

        minPoint: [{ required: true, message: '必填' }],
        maxPoint: [{ required: true, message: '必填' }],

        bonus: [{ required: true, message: '必填' }],
      },
      starList: [
        { label: '一星级', value: 1 },
        { label: '二星级', value: 2 },
        { label: '三星级', value: 3 },
        { label: '四星级', value: 4 },
        { label: '五星级', value: 5 },
        { label: '六星级', value: 6 },
        { label: '七星级', value: 7 },
        { label: '八星级', value: 8 },
      ],
    };
  },
  props: {
    modify: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    isModify() {
      return this.modify;
    },
  },
  mounted() {
    this.getSettlement();
  },
  methods: {
    // 控制输入的范围
    checkVal(val) {
      if (this.editForm[val] < 0) {
        this.editForm[val] = 0;
      }
    },
    addFunc() {
      this.title = '添加';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.editForm = {
          id: '',
          starLevel: '',
          stage: '',
          minPoint: '',
          maxPoint: '',
          bonus: '',
        };
        this.$refs['editForm'].resetFields();
      });
    },
    updateFunc(row) {
      this.title = '编辑';
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.editForm = {
          id: row.id,
          starLevel: row.starLevel,
          stage: row.stage,
          minPoint: row.minPoint,
          maxPoint: row.maxPoint,
          bonus: row.bonus,
        };
        this.$refs['editForm'].resetFields();
      });
    },
    // 提交
    confirmFunc() {
      this.$refs['editForm'].validate(async valid => {
        if (valid) {
          const { id, ...prop } = this.editForm;
          const params = {
            ...prop,
          };
          this.conLoading = true;
          // 新增 编辑
          const res = id === '' ? await $api.warehouseAddRules(params) : await $api.warehouseUpdateRules({ id, ...prop });
          if (res) {
            this.$message({ message: res.data.message, type: 'success' });
            this.dialogVisible = false;
            this.getSettlement();
          }
          this.conLoading = false;
        }
      });
    },
    delFunc(row) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(async () => {
          let params = {
            id: row.id,
          };
          const res = await $api.warehouseDeleteRules(params);
          if (res) {
            this.$message({ message: '成功删除', type: 'success' });
            this.getSettlement();
          }
        })
        .catch(() => {});
    },
    // 获取周结算规则
    async getSettlement() {
      const res = await $api.warehouseRules({});
      if (res) {
        this.levelList = res.data.data;
      }
    },
  },
};
</script>
<style lang="scss">
.levelset-page {
  width: 100%;
  padding-left: 40px;
  .page-con {
    width: 900px;
  }
  .header {
    width: 100%;
    color: #333;
    > div {
      display: inline-block;
      text-align: center;
    }
    .one {
      width: 100px;
    }
    .two {
      width: 100px;
      text-align: center;
    }
    .three {
      width: 300px;
    }
    .four {
      width: 120px;
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li.con {
      color: #333;
      width: 100%;
      padding: 0;
      margin: 0 0 5px 0;
      > div {
        display: inline-block;
        text-align: center;
        height: 30px;
        font-size: 16px;
        color: #000;
      }
      .one {
        width: 100px;
        color: #fff;
        background: chocolate;
        line-height: 30px;
        border-radius: 5px;
      }
      .two {
        width: 100px;
        color: #fff;
        background: chocolate;
        line-height: 30px;
        border-radius: 5px;
      }
      .three {
        width: 300px;
      }
      .four {
        width: 120px;
      }
    }
  }
}
@media screen and(max-width: 750px) {
  .levelset-page {
    padding-left: 0;
    .page-con {
      width: calc(100vw - 40px);
      * {
        font-size: 12px !important;
      }
      .header {
        width: calc(100% - 60px) !important;
        margin-bottom: 10px;
        display: flex;
      }
      >ul {
        display: flex;
        flex-direction: column;
        li {
          display: flex;
          div:last-child {
            width: 70px;
            display: flex !important;
            padding-right: 10px;
            button {
              padding: 0 0 0 0;
              border-radius: 0;
              border: none;
              background: unset;
            }
          }
        }
      }
    }
  }
}
</style>
