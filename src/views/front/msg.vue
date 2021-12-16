<template>
  <div class="msg-container">
    <el-form
      :model="form"
      ref="form"
      label-width="80px"
      :rules="rules"
      style="width: 90%; padding-left: 15px"
    >
      <el-row class="item-box">
        <el-col :span="24">
          <h3>邮件开关</h3>
        </el-col>
        <el-col :span="24">
          <template>
            <el-radio-group v-model="form.email_radio">
              <el-radio
                v-for="(item, index) in $emailTypeArr"
                :key="index"
                :label="item.value"
                :disabled="disabled"
              >
                {{ item.label }}
              </el-radio>
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
            <el-radio-group v-model="form.msg_radio">
              <el-radio
                v-for="(item, index) in $msgTypeArr"
                :key="index"
                :label="item.value"
                :disabled="disabled"
              >
                {{ item.label }}
              </el-radio>
            </el-radio-group>
          </template>
        </el-col>
      </el-row>

      <el-row class="item-box">
        <el-col :span="24">
          <h3>是否默认使用网易云普通验证码通道</h3>
        </el-col>
        <el-col :span="24">
          <template>
            <el-radio-group v-model="form.wySms_radio">
              <el-radio :label="0" :disabled="disabled">是</el-radio>
              <el-radio :label="1" :disabled="disabled">否</el-radio>
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
    </el-form>
  </div>
</template>

<script>
import $api from '@/api/api'
export default {
  name: 'Help',
  data() {
    return {
      disabled: true,
      email_list: [],
      msg_list: [],
      rules: {},
      form: {
        email_radio: 1,
        msg_radio: 1,
        wySms_radio: 0
      }
    }
  },
  methods: {
    async getList() {
      const res = await $api.getSmsPlatform({})
      if (res) {
        const { emailSwitch, smsSwitch, wySmsSwitch } = res.data.data
        this.form = {
          email_radio: Number(emailSwitch),
          msg_radio: Number(smsSwitch),
          wySms_radio: Number(wySmsSwitch)
        }
      }
    },
    cnacel() {
      this.disabled = true
      this.getList()
    },
    async confirm() {
      const { msg_radio, email_radio, wySms_radio } = this.form
      const res = await $api.switchSmsPlatform({
        smsSwitch: msg_radio,
        emailSwitch: email_radio,
        wySmsSwitch: wySms_radio
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
