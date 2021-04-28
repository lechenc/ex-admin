<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-11-30 20:51:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
  <div class="dialogueRecord-container">
    <el-row class="sac-row">
      <el-col :span="4">
        <el-button size="medium" type="primary" plain @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>

    <div class="container-middle">
      <div class="dialog">
        <div class="info">
          <div class="l-info">
            <span class="line1">订单总额</span>
            <span class="line2">{{ row.money }}</span>
          </div>
          <div class="l-info">
            <span class="line1">{{ (row.payTime || row.createTime) | typeTime }}</span>
            <span class="line2">订单状态：{{ row.tradeStatus | orderStatus }}</span>
          </div>
        </div>

        <div class="room">
          <div class="header">聊天记录</div>
          <div id="chat">
            <div class="talk">
              <div
                v-for="(item, index) in talkList"
                :key="index"
                :class="item.label == 1 ? 'leftline' : item.label == 2 ? 'rightline' : 'middleLine'"
              >
                <div class="txt-line">
                  <div class="tip-name">{{ item.adminAccount || item.toName }}</div>
                  <!-- <div class="tip-name">{{ item.adminAccount || item.fromName  }}</div> -->
                  <div class="inner-txt" v-if="item.type == 1 || item.type == 3">{{ item.content }}</div>
                  <div class="inner-txt" v-else-if="item.type == 2"><img :src="item.content" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="sendBox">
          <el-input type="text" v-model="words" class="inputword">
            <el-upload
              :action="$img_api"
              multiple
              name="file"
              :data="{ type: 'exchange' }"
              :on-success="uploadZh"
              slot="append"
              :before-upload="onBeforeUpload"
              :on-error="uploadError"
              :limit="1"
              :on-exceed="exceed"
              ref="upzh"
              >+</el-upload
            >
          </el-input>

          <el-button type="primary" size="medium" @click="sendMsg('')" class="btnsend" :loading="btnLoading">发送</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import $api from '@/api/api';
import utils from '@/utils/util';
import activePage from '@/mixin/keepPage';
import { parseTime } from '@/utils/index';

export default {
  name: 'DialogueRecordPay',
  components: {},
  mixins: [activePage],
  data() {
    return {
      listLoading: false, // 表格loading
      btnLoading: false,
      talkList: [], //委托列表
      words: '', //发送的字符
      orderId: '',
      row: '',
      current_page: 1, // 当前页码
      pageSize: 10, // 当前每页显示页码数
      total: 0, // 总条数
      pages: 0, // 总页数
    };
  },
  filters: {
    typeTime(v) {
      if (!v) return '';
      return parseTime(v);
    },
    orderStatus(val) {
      let txt = '';
      switch (val) {
        case 1:
          txt = '未付款';
          break;
        case 2:
          txt = '已付款(等待放行)';
          break;
        case 3:
          txt = '已完成';
          break;
        case 4:
          txt = '用户取消';
          break;
        case 5:
          txt = '申诉中';
          break;
        case 6:
          txt = '申诉后完成交易';
          break;
        case 7:
          txt = '申诉后取消交易';
          break;
        case 8:
          txt = '支付超时取消';
          break;
      }
      return txt;
    },
  },
  methods: {
    onBeforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 8;
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 8 MB！');
      }
    },
    exceed(file, fileList) {
      this.$message.error('单次只能选择一张图片进行上传！');
    },
    uploadZh(response, file, fileList) {
      this.words = '';
      this.words = response.data[0].url;
      this.$refs.upzh.handleRemove(file);
      this.sendMsg('pic');
    },
    uploadError() {
      this.$message.error('图片上传失败');
    },
    async sendMsg(val) {
      const params = {
        orderId: this.orderId,
        fromUID: this.buyUid,
        toUID: this.sellUid,
        content: this.words,
        type: val ? 2 : 1,
      };
      this.btnLoading = true;
      const res = await $api.otcSendMessage(params);
      if (res) {
        this.$message({ message: '发送成功', type: 'success' });
        this.words = '';
        this.getList();
      }
      this.btnLoading = false;
    },
    // getlist
    async getList() {
      if (this.listLoading) return;
      const query_data = {
        orderId: this.orderId,
      };
      this.listLoading = true;
      const res = await $api.getOtccChatRecords(query_data);
      if (res) {
        this.talkList = this.dealDataFunc(res.data.data);
      }
      this.listLoading = false;
    },
    dealDataFunc(list) {
      // 处理规则：
      // fromUid == this.sellUid则是卖方到买方，否则是买房到卖方
      // （左侧是 广告商 卖方，右侧是 商户 买方） label:等于1  left    2 right    3 middle
      list.forEach(v => {
        if (v.type == 1 || v.type == 2) {
          if (v.fromUid == this.buyUid) {
            v.label = 1;
          }
          if (v.fromUid == this.sellUid) {
            v.label = 2;
          }
        } else if (v.type == 3) {
          v.label = 3;
        }
      });
      return list;
    }
  },
  updated() {
    let ele = document.getElementById('chat');
    ele.scrollTop = ele.scrollHeight;
  },
    deactivated(){
    localStorage.removeItem('dialogueRow')
  },
  activated() {
    if (this.isInTags()) {
      return;
    }
    this.talkList = []; //委托列表
    this.words = ''; //发送的字符
    this.orderId = '';

    this.row = JSON.parse(localStorage.getItem('dialogueRow'));
    this.orderId = this.row.recordId;
    this.sellUid = this.row.advertUid;
    this.buyUid = this.row.uid;
    this.getList();
  }
};
</script>
<style scope lang="scss">
.dialogueRecord-container {
  padding: 4px 10px 10px 10px;
  .container-top {
    margin: 10px 0;
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
  .sac-row {
    margin-bottom: 20px;
    .el-col {
      margin-top: 20px;
    }
  }
  .container-middle {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog {
      min-width: 1000px;
      .info {
        width: 100%;
        margin-bottom: 5px;
        padding: 5px;
        border: 1px solid #4390ff;
        border-radius: 15px;
        box-sizing: border-box;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .l-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .line1 {
            font-size: 15px;
            font-weight: 400;
            color: #4390ff;
            margin-bottom: 4px;
          }
          .line2 {
            font-size: 20px;
            font-weight: 500;
            color: #4390ff;
          }
        }
      }

      .room {
        max-width: 1000px;
        min-width: 350px;
        background: #ffffff;
        border: 1px solid #4390ff;
        border-radius: 15px;
        height: 70%;
        min-height: 500px;
        .header {
          height: 60px;
          line-height: 60px;
          font-size: 28px;
          font-weight: 500;
          color: #333;
          text-align: center;
          border-bottom: 1px solid #4390ff;
        }
        #chat {
          height: calc(100% - 70px);
          height: 430px;
          overflow-x: none;
          overflow-y: scroll;
          background: #fff;
          padding: 10px 0 0 0;
          border-radius: 10px;
          box-sizing: border-box;
          .talk {
            margin: 10px;
            .middleLine,
            .rightline,
            .leftline {
              width: 100%;
              margin-bottom: 25px;
              .txt-line {
                width: 100%;
                position: relative;
                .tip-name {
                  position: absolute;
                  top: -18px;
                }
                .inner-txt {
                  max-width: 70%;
                  display: inline-block;
                  padding: 5px 10px;
                  border: 1px solid #4390ff;
                  border-radius: 15px;
                  line-height: 25px;
                  font-size: 18px;
                  font-weight: 400;
                  color: #333;
                  word-wrap: break-word;
                  word-break: normal;
                  img {
                    width: 45px;
                    height: 45px;
                  }
                }
              }
            }
            .rightline .txt-line {
              text-align: right;
              .tip-name {
                right: 5px;
              }
            }
            .leftline .txt-line {
              text-align: left;
              .tip-name {
                left: 5px;
              }
            }
            .middleLine .txt-line {
              text-align: center;
              .inner-txt {
                border: none;
                color: #666;
                background: #eee;
              }
              .tip-name {
                visibility: hidden;
              }
            }
          }
        }
      }
      .sendBox {
        max-width: 1000px;
        min-width: 350px;
        height: 50px;
        padding: 0 5px;
        line-height: 50px;
        border-radius: 15px;
        margin-top: 5px;
        border: 1px solid #4390ff;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .inputword {
          width: 87%;
          height: 30px;
          border-radius: 15px;
          // text-indent: 12px;
          outline: none;
        }
        .btnsend {
          width: 9%;
          margin-left: 2%;
        }
      }
    }

    .upload-wrap {
      width: 400px;
      margin: 0 auto;
      display: flex;
      margin-bottom: 20px;
      justify-content: center;
      .space {
        width: 50px;
        height: 1px;
        display: inline-block;
      }
    }
    .el-input-group__append {
      .el-upload-list {
        .el-upload-list__item {
          margin-top: 0;
          .el-upload-list__item-name {
            display: none;
          }
          .el-upload-list__item-status-label {
            display: none;
          }
        }
      }
    }
  }
}

@media screen and(max-width: 750px) {
  .dialog {
    min-width: 350px !important;
    .sendBox {
      .inputword {
        width: 72% !important;
      }
      .btnsend {
        width: auto !important;
        margin-left: 4% !important;
      }
    }
  }
}
</style>
