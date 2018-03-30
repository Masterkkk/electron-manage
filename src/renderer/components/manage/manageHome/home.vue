<template>
    <div>
        <head-top></head-top>
        <section class="data_section">
            <header class="chart-title">数据统计</header>
            <el-row :gutter="20" class="chart-head">
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head blue-head">今日数据：</div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">新增商户 <span>335</span></div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">新增订单 <span>310</span></div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">新增会员 <span>274</span></div></el-col>
            </el-row>
            <el-row :gutter="20" class="chart-head">
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head blue-head">总数据：</div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">商户数量 <span>500</span></div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">订单数量 <span>1200</span></div></el-col>
                <el-col :xs="24" :sm="12" :md="6" :lg="6"><div class="grid-content data-head">会员数量 <span>274</span></div></el-col>
            </el-row>
        </section>
        <chart></chart>
    </div>
</template>

<script>
    import headTop from '../../common/headTop'
    import chart from '../../common/chart'
    export default {
        data(){
            return {}
        },
        components: {
            headTop,
            chart
        }
    }
</script>  

<style lang="less">
    @import '../../../style/mixin';
    .data_section{
        padding: 20px;
        .chart-title{
            font-size: 30px;
            text-align: center;
        }
        .chart-head{
            margin: 10px 0;
            font-size: 18px;
            .data-head{
                text-align: center;
                border-radius: 4px;
            }
            .blue-head{
                background-color: #079df2;
                color: #fff;
            }
        }
    }
</style>