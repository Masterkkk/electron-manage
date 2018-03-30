<template>
    <div class="merchant">
        <head-top></head-top>
        <el-row>
            <el-col :span="24">
                <el-form :inline="true" class="form-merchant-search">
                    <el-form-item label="认证状态">
                        <el-select v-model="formInline.region" placeholder="认证状态">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="已认证" value="done"></el-option>
                        <el-option label="审核中" value="wait"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input v-model="formInline.contact" placeholder="联系人" class="contacts"></el-input>
                    </el-form-item>
                    <el-form-item label="商户编号">
                        <el-input v-model="formInline.merchant" placeholder="商户编号"></el-input>
                    </el-form-item>
                    <div class="block" style="display: inline-block;">
                        <span class="demonstration">创建时间：</span>
                        <el-date-picker
                            v-model="timeValue"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </div>
                    <el-form-item class="searchBtn">
                        <el-button type="primary" @click="onSearch">查询</el-button>
                        <router-link to="addMerchant">
                            <el-button type="primary" @click="addApprove">新增</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
            <!-- 列表 -->
            <el-card class="box-card show-merchant">
                <el-table
                    :data="merchantTable"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="number"
                        label="编号"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="merchantName"
                        label="商户名称"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="auditStatus"
                        label="审核状态">
                    </el-table-column>
                    <el-table-column
                        prop="applyTime"
                        label="时间">
                    </el-table-column>
                </el-table>
                <el-pagination
                    background
                    @current-change="changePage"
                    layout="prev, pager, next"
                    :page-size="10"
                    :total="total">
                </el-pagination>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    import headTop from '../../common/headTop'
    export default {
        data(){
            return {
                total: 100,
                timeValue: '',
                formInline: {
                    contact: '',
                    region: '',
                    merchant: ''
                },
                merchantTable: [{
                    number: '1234567',
                    merchantName: '厦门速煜信息技术有限公司',
                    auditStatus: '已认证',
                    applyTime: '2017-12-04-12:00'
                },{
                    number: '1234567',
                    merchantName: '厦门速煜信息技术有限公司',
                    auditStatus: '已认证',
                    applyTime: '2017-12-04-12:00'
                },{
                    number: '1234567',
                    merchantName: '厦门速煜信息技术有限公司',
                    auditStatus: '已认证',
                    applyTime: '2017-12-04-12:00'
                },{
                    number: '1234567',
                    merchantName: '厦门速煜信息技术有限公司',
                    auditStatus: '已认证',
                    applyTime: '2017-12-04-12:00'
                },{
                    number: '1234567',
                    merchantName: '厦门速煜信息技术有限公司',
                    auditStatus: '已认证',
                    applyTime: '2017-12-04-12:00'
                }]
            }
        },
        components: {
            headTop
        },
        methods: {
            onSearch(){
                console.log('查询');
                console.log('起始时间：' + this.timeValue[0]);
                console.log('终止时间：' + this.timeValue[1]);
            },
            addApprove(){
                console.log('新增');
            },
            changePage(val){
                console.log('当前页改变了' + val);
            }
        }
    }
</script>

<style lang="less">
    .merchant{
        .el-row{
            .form-merchant-search{
                margin-top: 10px;
                margin-left: 10px;
                .el-form-item__content,.contacts{
                    width: 150px;
                }
                .searchBtn{
                    .el-form-item__content{
                        width: 155px;
                    }
                }
            }
            .show-merchant{
                width: 85%;
                margin: 10px auto;
                .el-pagination{
                    width: 405px;
                    margin: 15px auto 0;
                }
            }
        }
    }
</style>