<template>
  <div class="msg-container">
    <el-row class="item-box">
      <el-col :span="24">
        <h3>模拟盘开关展示</h3>
      </el-col>
      <el-col :span="24">
        <template>
          <el-radio-group v-model="radio">
            <el-radio :label="1" :disabled="disabled">开</el-radio>
            <el-radio :label="0" :disabled="disabled">关</el-radio>
          </el-radio-group>
        </template>
      </el-col>
    </el-row>
    <el-row class="item-box" v-if="!disabled">
      <el-col :span="6">
        <div style="margin: 10px 0;">谷歌验证码</div>
        <el-input v-model="google_code" placeholder="请输入谷歌验证码"></el-input>
      </el-col>
    </el-row>
    <el-row v-if="disabled">
      <el-button type="primary" @click="edit">编辑</el-button>
    </el-row>
    <el-row v-else>
      <el-button @click="cnacel">取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </el-row>
  </div>
</template>

<script>
import $api from '@/api/api'
export default {
  name: 'Help',
  data() {
    return {
      radio: 0,
      disabled: true,
      google_code: ''
    }
  },
  methods: {
    async getList() {
      const res = await $api.getMoniSwitch({})
      if (res) {
        const { paramValue } = res.data.data
        this.radio = Number(paramValue)
      }
    },
    edit() {
      this.disabled = false
      this.google_code = ''
    },
    cnacel() {
      this.disabled = true
      this.getList()
    },
    async confirm() {
      if (!this.google_code) {
        this.$message({ message: '请输入谷歌验证码', type: 'error' })
        return
      }

      const res = await $api.setMoniSwitch({
        analogShowSwitch: this.radio,
        googleVerify: this.google_code
      })
      if (res) {
        this.$message({ message: '修改成功', type: 'success' })
        this.disabled = true
        this.getList()
      }
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
  .msg-container {
    padding: 50px 20px;
    .item-box {
      margin-bottom: 50px;
    }
  }
</style>