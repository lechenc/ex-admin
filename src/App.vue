
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
#nprogress .bar {
  background: #f0ad4e !important; //自定义颜色
  height: 3px !important;
}
.centerDialog {
  display: flex;
  justify-content: center;
  .el-button {
    padding: 12px 40px;
  }
}
.agentRebate-dialog {
  .el-dialog__body {
    padding-left: 40px;
    padding-right: 40px;
  }
  .el-row {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-dialog__footer {
    display: flex;
    justify-content: center;
  }
}
</style>