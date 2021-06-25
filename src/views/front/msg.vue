<template>
  <div class="msg-container">
    <el-row class="item-box">
      <el-col :span="24">
        <h3>邮件开关</h3>
      </el-col>
      <el-col :span="24">
        <template>
          <el-radio-group v-model="email_radio">
            <el-radio :label="1" :disabled="disabled">魔杜卡</el-radio>
            <el-radio :label="2" :disabled="disabled">Umail</el-radio>
          </el-radio-group>
        </template>
      </el-col>
    </el-row>
    <el-row class="item-box">
      <el-col :span="24">
        <h3>短信开关</h3>
      </el-col>
      <el-col :span="24">
        <template>
          <el-radio-group v-model="msg_radio">
            <el-radio :label="1" :disabled="disabled">魔杜卡</el-radio>
            <el-radio :label="2" :disabled="disabled">美联</el-radio>
          </el-radio-group>
        </template>
      </el-col>
    </el-row>
    <el-row v-if="disabled">
      <el-button type="primary" @click="disabled = false">编辑</el-button>
    </el-row>
    <el-row v-else>
      <el-button @click="cnacel">取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </el-row>
  </div>
</template>

<script>
import $api from '@/api/api';
export default {
  name: 'Help',
  data() {
    return {
      email_radio: 1,
      msg_radio: 1,
      disabled: true,
      email_list: [],
      msg_list: []
    }
  },
  methods: {
    async getList() {
      const res = await $api.getSmsPlatform({})
      if (res) {
        const { emailSwitch, smsSwitch } = res.data.data
        this.email_radio = Number(emailSwitch)
        this.msg_radio = Number(smsSwitch)
      }
    },
    cnacel() {
      this.disabled = true
      this.getList()
    },
    async confirm() {
      const res = await $api.switchSmsPlatform({
        smsSwitch: this.msg_radio,
        emailSwitch: this.email_radio
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
