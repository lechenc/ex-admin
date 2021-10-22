<template>
  <div class="userdetail-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div class="box-card-con">
        <H3>用户信息</H3>
        <div>
          <div>UID ：{{ current_row.uid }}</div>
          <!--		<div>用户类型：{{ current_row.uid | userType }}</div> **** -->
          <div>手机：{{ current_row.phone }}</div>
          <div>邮箱：{{ current_row.email }}</div>
          <div>实名状态：{{ current_row.userVerifiedStatus | userCheckStatus }}</div>
          <div>姓名：{{ current_row.realName }}</div>
          <div>证件类型：{{ current_row.certificateName }}</div>
          <div>证件号码：{{ current_row.cardNo }}</div>
          <div>上级邀请人：{{ current_row.inviterUid }}</div>
          <div>邀请码：{{ current_row.inviteCode }}</div>
          <div>注册时间：{{ current_row.registerTime }}</div>
          <div>最后登录IP：{{ current_row.loginIp }}</div>
          <div>直推邀请下级人数：{{ current_row.sonCount }}</div>
          <div>所有总人数：{{ current_row.allSonCount }}</div>
          <div>国家区号：{{ current_row.phoneAreaCode }}</div>
          <div>昵称：{{ current_row.nickName }}</div>
        </div>
        <h3>用户状态</h3>
        <div v-if="!isModify">
          <div>
            登录状态：<span>
              <el-switch
                v-model="is_login"
                :disabled="true"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleUpdate('is_login')"
              ></el-switch>
            </span>
          </div>
          <div>
            交易状态：<span>
              <el-switch
                v-model="is_exchange"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleUpdate('is_exchange')"
              ></el-switch>
            </span>
          </div>
          <div>
            法币状态：<span>
              <el-switch
                v-model="is_c2c"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleUpdate('is_c2c')"
              ></el-switch>
            </span>
          </div>
          <div>
            提币状态：<span>
              <el-switch
                v-model="is_draw"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleUpdate('is_draw')"
              ></el-switch>
            </span>
          </div>
          <div>
            广告状态：<span>
              <el-switch
                v-model="is_advertise"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949"
                @click.native="handleUpdate('is_advertise')"
              ></el-switch>
            </span>
          </div>

          <div>
            语言状态：<span>
              <el-radio-group v-model="language" @change="languageChange">
                <el-radio :label="item.value" v-for="(item, index) in languageList" :key="index">{{
                  item.label
                }}</el-radio>
              </el-radio-group>
            </span>
          </div>
        </div>
        <div v-else>
          <div>
            登录状态：<span>{{ is_login | boolDiy }}</span>
          </div>
          <div>
            交易状态：<span>{{ is_exchange | boolDiy }}</span>
          </div>
          <div>
            法币状态：<span>{{ is_c2c | boolDiy }}</span>
          </div>
          <div>
            提币状态：<span>{{ is_draw | boolDiy }}</span>
          </div>
          <div>
            广告状态：<span>{{ is_advertise | boolDiy }}</span>
          </div>

          <div>
            语言状态：<span>{{ language }}</span>
          </div>
        </div>
      </div>
    </el-card>
    <el-row class="btn-row">
      <el-button v-if="btnArr.includes('resetGoogleCode')" @click="resetGoogleCode" type="primary"
        >重置谷歌秘钥</el-button
      >
      <el-tooltip effect="dark" placement="top-end">
        <div slot="content">{{resetKYCTextObj[1].hint}}</div>
        <span>
          <el-button
            v-if="btnArr.includes('resetKYC')"
            :disabled="current_row.userVerifiedStatus != 1"
            @click="resetKYC(1)"
            type="primary"
            >{{resetKYCTextObj[1].btnText}}</el-button
          >
        </span>
      </el-tooltip>

      <el-tooltip effect="dark" placement="top-end">
        <div slot="content">{{resetKYCTextObj[2].hint}}</div>
        <span>
          <el-button
            v-if="btnArr.includes('resetKYC')"
            :disabled="current_row.userVerifiedStatus != 1"
            @click="resetKYC(2)"
            type="primary"
            >{{resetKYCTextObj[2].btnText}}</el-button
          >
        </span>
      </el-tooltip>

      <el-tooltip effect="dark" placement="top-end">
        <div slot="content">{{resetKYCTextObj[3].hint}}</div>
        <span>
          <el-button
            v-if="btnArr.includes('resetKYC')"
            :disabled="current_row.userVerifiedStatus != 4"
            @click="resetKYC(3)"
            type="primary"
            >{{resetKYCTextObj[3].btnText}}</el-button
          >
        </span>
      </el-tooltip>

      <el-tooltip effect="dark" placement="top-end">
        <div slot="content">{{resetKYCTextObj[4].hint}}</div>
        <span>
          <el-button
            v-if="btnArr.includes('resetKYC')"
            :disabled="current_row.userVerifiedStatus != 4"
            @click="resetKYC(4)"
            type="primary"
            >{{resetKYCTextObj[4].btnText}}</el-button
          >
        </span>
      </el-tooltip>
    </el-row>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户资产" name="assets">
        <template>
          <el-table :data="assetsList" style="width: 100%; text-align: center" border>
            <el-table-column prop="coinName" label="币种" />
            <el-table-column label="币币">
              <el-table-column prop="tradeAmount" label="可用" />
              <el-table-column prop="tradeFrozenAmount" label="冻结" />
            </el-table-column>
            <el-table-column label="法币">
              <el-table-column prop="otcAmount" label="可用" />
              <el-table-column prop="otcFrozenAmount" label="冻结" />
            </el-table-column>
            <!--   <el-table-column label="币汇">
              <el-table-column prop="bava" label="可用" />
              <el-table-column prop="bdre" label="冻结" />
            </el-table-column>
            <el-table-column label="理财">
              <el-table-column prop="lava" label="可用" />
              <el-table-column prop="ldre" label="冻结" />
            </el-table-column>  -->
            <el-table-column label="充币地址" width="470px" prop="coinAddressList">
              <template slot-scope="scope">
                <div class="qrimg-wraper">
                  <div v-if="scope.row['coinAddressList'].length">
                    <div class="colline">
                      <div v-for="(item, ixx) in scope.row['coinAddressList']" :key="ixx">
                        <span class="label">{{ item.chainName }}：&nbsp;</span>
                        <el-popover placement="top-start" width="200" trigger="hover">
                          <div style="width: 150px; height: 150px">
                            <vue-qr
                              :text="item.address"
                              :margin="0"
                              colorDark="#000"
                              colorLight="#fff"
                              :size="150"
                            ></vue-qr>
                          </div>
                          <el-button size="small" slot="reference" style="margin-right: 8px"
                            ><span>{{ item.address }}</span></el-button
                          >
                        </el-popover>
                        <el-button
                          plain
                          size="small"
                          v-clipboard:copy="item.address"
                          v-clipboard:success="onCopy"
                          v-clipboard:error="onError"
                          >复制</el-button
                        >
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <el-button
                      @click="search(scope.row['coinName'])"
                      plain
                      size="medium"
                      type="primary"
                    >
                      查询
                    </el-button>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="container-footer">
            <el-pagination
              background
              @current-change="goAssetsPage"
              layout="total, prev, pager, next, jumper"
              :current-page="assets_curr_page"
              :page-size="pageSize"
              :total="assets_total"
            >
            </el-pagination>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="邀请明细" name="share">
        <el-table :data="inviteList" style="width: 100%" border>
          <el-table-column type="index" label="序号" width="70px" />
          <el-table-column prop="uid" label="UID" />
          <el-table-column prop="phone" label="手机" />
          <el-table-column prop="email" label="邮箱" />
          <el-table-column prop="userVerifiedStatus" label="实名状态">
            <template scope="scope">
              {{ userVerifiedStatusObj[scope.row.userVerifiedStatus] }}
            </template>
          </el-table-column>
          <el-table-column prop="inGold" label="入金状态">
            <template scope="scope">
              {{ inGoldObj[scope.row.inGold] }}
            </template>
          </el-table-column>
          <el-table-column prop="loginIp" label="登录IP" />
          <el-table-column prop="registerIp" label="注册IP" />
          <el-table-column prop="registerTime" label="注册时间" />
        </el-table>
        <div class="container-footer">
          <el-pagination
            background
            @current-change="goInvitePage"
            layout="total, prev, pager, next, jumper"
            :current-page="invite_curr_page"
            :page-size="pageSize"
            :total="invite_total"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-card v-if="btnArr.includes('inOutGoldList')" style="margin-bottom: 40px">
      <H3>用户出入金统计</H3>
      <Btable
        :headColor="true"
        :listLoading="inOutGoldListLoading"
        :data="inOutGoldList"
        :configs="inOutGoldConfigs"
      />
    </el-card>
    <el-card style="margin-bottom: 40px">
      <H3>法币收款方式</H3>
      <Btable
        :listLoading="otcListLoading"
        :data="otcList"
        :configs="otcConfigs"
        @do-handle="doHandle"
      />
    </el-card>
  </div>
</template>

<script>
import vueQr from 'vue-qr'
import $api from '@/api/api'
import activePage from '@/mixin/keepPage'
import Btable from '@/components/table/b-table'
import { userCol, userColNoBtn, userColOtcList, userColInOutGoldList } from '@/config/column/user'

export default {
  components: {
    vueQr,
    Btable
  },
  name: 'UserlistDetail',
  mixins: [activePage],
  data() {
    return {
      resetKYCTextObj:{
        1: {
          hint:'此按钮仅在用户初级实名通过情况下可操作。未实名，审核中或是高级认证成功状态下无法使用',
          btnText:'重置初级KYC保留旧数据'
        },
        2: {
          hint:'此按钮仅在用户初级实名通过情况下可操作。未实名，审核中或是高级认证成功状态下无法使用',
          btnText:'重置初级KYC并抹掉旧数据'
        },
        3: {
          hint:'此按钮仅在用户高级实名通过情况下可操作。未实名，审核中或是初级认证成功状态下无法使用',
          btnText:'重置高级KYC后用户将降为初级KYC'
        },
        4: {
          hint:'此按钮仅在用户高级实名通过情况下可操作。未实名，审核中或是初级认证成功状态下无法使用',
          btnText:'完全重置高级和初级KYC至未实名状态'
        },
      },
      inGoldObj: {
        1: '是',
        0: '否'
      },
      userVerifiedStatusObj: {
        0: '高级待审核',
        1: '初级认证成功',
        2: '高级认证失败',
        3: '未认证',
        4: '高级认证成功'
      },
      listLoading: false, // 表格loading
      otcListLoading: false, // 法币收款方式loading
      inOutGoldListLoading: false, // 出入金表格loading

      activeName: 'assets',
      otcConfigs: [], // 法币收款方式配置
      inOutGoldConfigs: [], // 出入金配置
      isModify: false, // 是否可以修改
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      current_row: {}, // 查看详情的条目
      otcList: [], // 法币收款方式列表
      inOutGoldList: [], // 出入金列表
      is_login: false, // 登录状态
      is_exchange: false, // 交易状态
      is_c2c: false, // 法币状态
      is_draw: false, // 提币状态
      is_advertise: false, // 广告状态
      // 状态键值对象：1-是用户登录状态,3-是用户OTC状态,2-是用户交易状态,4-用户可提币状态
      operareObj: {
        is_login: 1,
        is_exchange: 2,
        is_c2c: 3,
        is_draw: 4,
        is_advertise: 5
      },
      nowUserId: 0, // 详情页面的用户id
      assetsList: [], // 用户资产数组
      assets_curr_page: 0, //  用户资产页码
      assets_total: 0, //用户资产总数
      inviteList: [], // 邀请明细数组
      invite_curr_page: 0, //  邀请明细页码
      invite_total: 0, //邀请明细总数
      btnArr: [],
      language: '', // 语言状态
      languageList: []
    }
  },
  filters: {
    userType(val) {},
    boolDiy(val) {
      if (val) {
        return '是'
      } else {
        return '否'
      }
    }
  },
  methods: {
    // 查询用户资产的充币地址
    search(coinName) {
      let index = this.assetsList.findIndex((v) => {
        return v.coinName == coinName
      })
      this.assetsList[index].coinAddressList.push({
        address: '1BJVitDfrqdQEGoEw33do5utu8h87dtK19',
        chainName: 'omni'
      })
    },
    resetGoogleCode() {
      if (!this.current_row.googleVerify) {
        this.$message.error('未绑定谷歌秘钥')
      } else {
        this.$router.push({
          path: '/user/resetUserGoogleCode',
          query: {
            id: this.$route.query.id
          }
        })
      }
    },
    resetKYC(type) {
      this.$confirm('确定重置状态?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        showClose: false
      })
        .then(async () => {
          const res = await $api.resetUserKYC({
            userId: this.nowUserId,
            buttonType: type
          })
          if (res) {
            this.$message.success('重置成功')
          }
        })
        .catch((error) => {
          return error
        })
    },

    onCopy() {
      this.$message.success('复制成功')
    },
    onError() {
      this.$message.success('复制失败')
    },
    languageChange(val) {
      this.$confirm(`确认更改语言状态?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async () => {
          let parmas = {
            userId: this.nowUserId,
            language: val
          }
          const res = await $api.apiUpdateLanguage(parmas)
          if (res) {
            this.$message({
              message: '更新成功',
              type: 'success'
            })
            this.getDetail(this.$route.query.id)
          } else {
            this.$message({
              message: '更新失败',
              type: 'danger'
            })
            this.getDetail(this.$route.query.id)
          }
        })
        .catch(() => {
          this.getDetail(this.$route.query.id)
        })
    },
    handleUpdate(type) {
      const beforeStatus = this[type]
      this.$confirm(`确认更改状态?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async () => {
          let params = null
          if (type == 'is_login') {
            params = {
              userId: this.current_row.userId,
              operate: this.operareObj[type],
              status: !!this[type] ? 1 : 0
            }
          } else {
            params = {
              userId: this.current_row.userId,
              operate: this.operareObj[type],
              status: !!this[type] ? 0 : 1
            }
          }

          const res = await $api.updateOperateStatus(params)
          if (res) {
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            this[type] = !beforeStatus
          } else {
            this.$message({
              message: '更新失败',
              type: 'danger'
            })
          }
        })
        .catch(() => {})
    },
    // 法币收款方式表格操作按钮
    async doHandle(data) {
      const { fn, row } = data
      let params = {
        userId: row.userId,
        payId: row.recdId
      }
      if (fn === 'open') {
        // 开启使用
        params.status = 1
      } else if (fn === 'close') {
        // 停止使用
        params.status = 2
      }
      // else if (fn === 'showqr') {
      //   this.verify(row);
      //   return;
      // }
      const res = await $api.updatePayStatus(params)
      if (res) {
        this.$message({ type: 'success', message: fn === 'open' ? '开启成功' : '停止使用操作成功' })
        this.getDetail()
      } else {
      }
    },
    handleClick(tab, event) {},
    goInvitePage(val) {
      this.invite_curr_page = val
      this.getInviteList()
    },
    goAssetsPage(val) {
      this.assets_curr_page = val
      this.getAssetsList()
    },
    // 获取用户资产数据
    async getAssetsList() {
      const params = {
        userId: this.nowUserId
      }
      const res = await $api.accountQuery(params)
      if (res) {
        let tmp = res.data.data
        // tmp.forEach(v => {
        //   v.coinAddressList = v.coinAddressList && v.coinAddressList.length > 0 ? v.coinAddressList.join(',') : '';
        // });
        this.assetsList = tmp
      }
    },
    // 获取邀请明细数据
    async getInviteList() {
      const params = {
        pageNum: this.invite_curr_page,
        pageSize: this.pageSize,
        userId: this.nowUserId
      }
      const res = await $api.getInviteList(params)
      if (res) {
        const { records, total, current } = res.data.data
        this.invite_total = total
        this.invite_curr_page = current
        this.inviteList = records
      }
    },
    async getDetail(_id) {
      if (this.listLoading) return
      const params = {
        uid: _id,
        pageNum: this.current_page,
        pageSize: this.pageSize
      }
      this.listLoading = true
      const res = await $api.getUserList(params)
      if (res) {
        const { records } = res.data.data
        if (records && records.length > 0) {
          this.current_row = records[0]
          this.is_login = !this.current_row.userLoginStatus // 登录状态
          this.is_exchange = !!this.current_row.userTradeStatus // 交易状态
          this.is_c2c = !!this.current_row.userOtcStatus // 法币状态
          this.is_draw = !!this.current_row.userWithdrawStatus // 提币状态
          this.is_advertise = !!this.current_row.isPublishAdv // 广告状态
          this.nowUserId = this.current_row.userId
          this.language = this.current_row.language // 语言状态
          this.getInviteList()
          this.getAssetsList()
          this.getInOutGoldListFunc(this.nowUserId)
        }
      }
      this.listLoading = false
    },
    // 获取 法币收款方式表格
    async getOtcBindListFunc(_id) {
      if (this.otcListLoading) return
      const params = {
        uid: _id
      }
      this.otcListLoading = true
      const res = await $api.getOtcBindList(params)
      if (res) {
        const records = res.data.data
        if (records && records.length > 0) {
          this.otcList = records
        }
      }
      this.otcListLoading = false
    },

    // 获取 出入金数据表格
    async getInOutGoldListFunc(_id) {
      if (this.inOutGoldListLoading) return
      const params = _id
        ? {
            userId: _id
          }
        : {
            uid: this.$route.query.id
          }
      this.inOutGoldListLoading = true
      const res = await $api.apiGetInOutGoldList(params)
      if (res) {
        const records = res.data.data
        if (records && records.length > 0) {
          this.inOutGoldList = records
        }
      }
      this.inOutGoldListLoading = false
    },

    async getLanguageList() {
      const res = await $api.apiGetLanguageList({})
      if (res) {
        let list = res.data.data
        this.languageList = list.map((v) => {
          return {
            value: v.code,
            label: v.label
          }
        })
      }
    }
  },
  // mounted() {
  //   this.getDetail(this.$route.query.id);
  // },
  activated() {
    if (this.isInTags()) {
      return
    }
    this.activeName = 'assets'
    this.current_page = 1 // 当前页码
    this.pageSize = 10 // 当前每页显示页码数
    this.current_row = {} // 查看详情的条目
    this.is_login = false // 登录状态
    this.is_exchange = false // 交易状态
    this.is_c2c = false // 法币状态
    this.is_draw = false // 提币状态
    this.assetsList = [] // 用户资产数组
    this.assets_curr_page = 0 //  用户资产页码
    this.assets_total = 0 //用户资产总数
    this.inviteList = [] // 邀请明细数组
    this.invite_curr_page = 0 //  邀请明细页码
    this.invite_total = 0 //邀请明细总数

    // 根据是否有编辑权限来决定是否可编辑切换
    let authObj = this.$util.getAuthority('UserList', userCol, userColNoBtn)
    this.btnArr = authObj.btnArr || [] || []
    if (!authObj.isModify) {
      this.isModify = true
    } else {
      this.isModify = false
    }
    this.otcConfigs = userColOtcList
    this.inOutGoldConfigs = userColInOutGoldList
    this.getDetail(this.$route.query.id)
    this.getOtcBindListFunc(this.$route.query.id)
    this.getLanguageList()
  }
}
</script>

<style lang="scss">
.userdetail-container {
  padding: 4px 10px 10px 10px;

  .container-top {
    margin: 10px 0;
  }

  .container-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;

    span {
      font-size: 13px;
      color: #606266;
      height: 28px;
      line-height: 28px;
    }
  }

  .colline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;

      .label {
        width: 60px;
      }
    }
  }

  .sac-row {
    margin-bottom: 20px;

    .el-col {
      margin-top: 20px;
    }
  }

  .btn-row {
    .el-button {
      margin-bottom: 20px;
      margin-left: 0;
      margin-right: 10px;
    }
  }

  .box-card {
    margin-bottom: 20px;

    .box-card-con {
      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > div {
          min-width: 300px;
          margin-right: 40px;
          font-size: 18px;
          line-height: 40px;
        }
      }
    }
  }
}

.el-table td,
.el-table th {
  text-align: center;
}

.el-switch.is-disabled {
  opacity: 1;
}

.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}
</style>
