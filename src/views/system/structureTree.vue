<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-01 15:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="structureTree-container">
    <el-card class="box-card">
      <div class="tree" @mousedown.stop="move">
        <div class="tree-content">
          <tree-item :tree-data="treeData" :tree-first="true" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import $api from '@/api/api';
import TreeItem from '@/components/TreeItem';
export default {
  name: 'RiskConfig',
  components: {
    TreeItem,
  },
  data() {
    return {
      btnArr: [],
      btnLoading: false, // 提交
      isModify: false, // 是否可以修改(控制页面内是否修改操作)
      listLoading: false, // 表格loading
      labelWidth: '140px',

      isRegisterSwitch: false, // 是否开启

      form: {
        registeredSwift: false,
        registeredCount: '',
      },
      rules: {},
      treeData: [],
    };
  },
  methods: {
    // getlist
    async getList() {
      const res = await $api.apiGetStructureTreeList({});
      if (res) {
        this.treeData = res.data.data;
      }
    },
    // 拖拽移动
    move(e) {
      const odiv = e.currentTarget; // 获取元素
      console.log(odiv);

      // 算出鼠标相对元素的位置
      const disX = e.clientX - odiv.offsetLeft;
      const disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.clientX - disX;
        const top = e.clientY - disY;

        // 绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;

        // 移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
  mounted() {
    let authObj = this.$util.getAuthority('RiskList', [], []);
    this.btnArr = authObj.btnArr;

    this.getList();
  },
};
</script>

<style lang="scss">
.structureTree-container {
  padding: 4px 10px 10px 10px;
  width: 100%;
  .tree {
    background: #fff;
    min-height: calc(100vh - 110px);
    position: relative;
    &-content {
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  h4 {
    margin: 10px 0;
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }

  h5::before {
    content: '';
    border-left: 5px solid #03a7f0;
    margin-right: 10px;
  }

  .box-card {
    margin-bottom: 20px;
    overflow: scroll;
    .box-card-con {
      .con-line {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .panel {
          > span {
            display: inline-block;
            min-width: 120px;
            margin-right: 10px;
            text-align: right;
          }
        }
      }

      .middle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .dot {
        margin: 0 10px;
        text-align: center;
        color: #9fa19f;
      }

      p {
        color: #9fa19f;
        font-size: 15px;
      }
    }

    .box-card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;

      span {
        color: #000;
        font-weight: 600;
      }
    }
  }

  .tree-content {
  }
}
</style>
