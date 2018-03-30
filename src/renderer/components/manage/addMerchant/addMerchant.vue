<template>
    <div class="add-merchant">
        <head-top></head-top>
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>联系人信息</span>
                </div>
                <div class="text item">
                    <el-form-item label="联系人" prop="addName">
                        <el-input v-model="addForm.addName" auto-complete="off" placeholder="联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="addPhone">
                        <el-input v-model="addForm.addPhone" auto-complete="off" placeholder="手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮箱" prop="addEmail">
                        <el-input v-model="addForm.addEmail" auto-complete="off" placeholder="电子邮箱"></el-input>
                    </el-form-item>
                </div>
            </el-card>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>经营信息</span>
                </div>
                <div class="text item">
                    <el-form-item label="商户简称" prop="shortMerchantName">
                        <el-input v-model="addForm.shortMerchantName" auto-complete="off" placeholder="商户简称"></el-input>
                    </el-form-item>
                    <el-form-item label="商户类型" prop="merchantType">
                        <el-select v-model="addForm.merchantType" placeholder="商户类型">
                            <el-option label="企业" value="qiye"></el-option>
                            <el-option label="个体工商户" value="geti"></el-option>
                            <el-option label="事业单位" value="shiye"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="经营类目" prop="manageType">
                        <el-select v-model="addForm.manageType.business" placeholder="行业">
                            <el-option label="餐饮" value="business_1"></el-option>
                            <el-option label="零售" value="business_2"></el-option>
                            <el-option label="金融" value="business_3"></el-option>
                            <el-option label="教育" value="business_4"></el-option>
                        </el-select>
                        <el-select v-model="addForm.manageType.business2" placeholder="经营类目">
                            <el-option label="中餐" value="business2_1"></el-option>
                            <el-option label="西餐" value="business2_2"></el-option>
                            <el-option label="其他" value="business2_3"></el-option>
                        </el-select>
                        <el-select v-model="addForm.manageType.business3" placeholder="经营类目">
                            <el-option label="川菜" value="business3_1"></el-option>
                            <el-option label="粤菜" value="business3_2"></el-option>
                            <el-option label="闽菜" value="business3_3"></el-option>
                            <el-option label="湘菜" value="business3_4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="客服电话" prop="servicePhone">
                        <el-input v-model="addForm.servicePhone" auto-complete="off" placeholder="客服电话"></el-input>
                    </el-form-item>

                     <el-form-item size="large">
                        <el-button type="primary" @click="addMerchant">立即创建</el-button>
                    </el-form-item>
                </div>
            </el-card>
        </el-form>
    </div>
</template>

<script>
    import headTop from '../../common/headTop'
    export default {
        data(){
            return {
                addForm: {
                    addName: '',
                    addPhone: '',
                    addEmail: '',
                    shortMerchantName: '',
                    merchantType: '',
                    manageType: {
                        business: '',
                        business2: '',
                        business3: '',
                    },
                    servicePhone: ''
                }
            }
        },
        components: {
            headTop
        },
        methods: {
            addMerchant(){
                console.log('创建商户');
                console.log(this.addForm.manageType);
                console.log(this.addForm.merchantType);
            }
        }
    }
</script>

<style lang="less">
    .add-merchant{
        .el-form{
            width: 85%;
            margin: 15px auto;
            .box-card{
                margin-top: 15px;
            }
        }
    }
</style>