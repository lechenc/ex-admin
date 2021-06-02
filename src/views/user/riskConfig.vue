<!--
 * @Author: your name
 * @Date: 2020-04-27 14:50:11
 * @LastEditTime: 2020-09-01 15:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\src\views\financial\recharge.vue
 -->

<template>
<div class="registRestric-container">
    <el-form :model="form" ref="form" :rules="rules" label-width="160px" size="medium">
        <el-card class="box-card">
            <div class="box-card-con">
                <H5>风控参数配置</H5>
                <el-form-item label="每日注册人数上限" prop="registeredCount" :label-width="labelWidth">
                    <el-input style="width: 55%;" type="number" placeholder="请输入" v-model="form.registeredCount" @input="checkVal('registeredCount')" :disabled="!isModify"></el-input>
                </el-form-item>

                <el-form-item label="是否开启注册" :label-width="labelWidth">
                    <el-switch v-model="isRegisterSwitch" :disabled="!isModify" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </el-form-item>

                <div v-if="isCURDAuth">
                    <div class="middle" v-if="!isModify">
                        <el-button type="primary" size="medium" @click="isModify = true">编辑</el-button>
                    </div>
                    <div class="middle" v-if="isModify">
                        <el-button type="primary" plain size="medium" @click="isModify = false">取消</el-button>
                        <el-button type="primary" size="medium" @click="confirmSend()" :loading="btnLoading">提交修改</el-button>
                    </div>
                </div>
            </div>
        </el-card>
    </el-form>
</div>
</template>

<script>
import $api from '@/api/api';
export default {
    name: 'RegistRestric',
    data() {
        return {
            isCURDAuth: true, // 是否有增删改查权限
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
        };
    },
    methods: {
        // getlist
        async getList() {
            if (this.listLoading) return;
            const query_data = {
                // coinName: this.coinName,
            };
            this.listLoading = true;
            const res = await $api.getUserRconfig(query_data);
            if (res) {
                let {
                    registeredSwift,
                    registeredCount
                } = res.data.data;
                this.form = {
                    registeredCount: registeredCount,
                };
                this.isRegisterSwitch = !!registeredSwift;
            }
            this.listLoading = false;
        },
        // 控制输入的范围
        checkVal(val) {
            if (this.form[val] < 0) {
                this.form[val] = 0;
            }
        },
        // 保存页面修改
        async confirmSend(ggCode) {
            this.$refs['form'].validate(async valid => {
                if (valid) {
                    const {
                        registeredCount
                    } = this.form;
                    let params = {
                        registeredSwift: this.isRegisterSwitch ? 1 : 0,
                        registeredCount: registeredCount,
                    };
                    this.btnLoading = true;
                    const res = await $api.getUserRUpdate(params);
                    if (res) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success',
                        });
                        this.getList();
                        this.isModify = false;
                    }
                    this.btnLoading = false;
                }
            });
        },
    },
    mounted() {
        let authObj = this.$util.getAuthority('RegistRestric', [], []);
        this.isCURDAuth = authObj.isModify;

        this.getList();
    },
};
</script>

<style lang="scss">
.registRestric-container {
    padding: 4px 10px 10px 10px;

    h4 {
        margin: 10px 0;
        font-size: 18px;
    }

    .box-card {
        margin-bottom: 20px;

        .box-card-con {
            h5 {
                font-size: 16px;
            }

            h5::before {
                content: '';
                border-left: 5px solid #03a7f0;
                margin-right: 10px;
            }

            .con-line {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;

                .panel {
                    >span {
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
}
</style>
