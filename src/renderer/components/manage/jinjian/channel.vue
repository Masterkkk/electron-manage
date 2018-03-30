<template>
    <div class="channel">
        <head-top></head-top>
        <el-card class="box-card card1">
            <div slot="header" class="clearfix">
                <span>联系信息</span>
            </div>
            <div class="text item">
                渠道编号：<span class="txt">00001543</span>
            </div>
            <div class="text item">
                联系人：<span class="txt">王大宝</span>
            </div>
            <div class="text item">
                手机号码：<span class="txt">13124079958</span>
            </div>
            <div class="text item">
                电子邮箱：<span class="txt">dabao@163.com</span>
            </div>
            <img v-if="auditStatus == 1" src="../../../assets/img/approve.png" class="image status">
            <img v-else src="../../../assets/img/audit.png" class="image status">
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商户信息</span>
            </div>
            <div class="text item">
                渠道名称：<span class="txt">厦门速煜信息技术有限公司</span>
            </div>
            <div class="text item">
                省份地址：<span class="txt">福建省 厦门市</span>
            </div>
            <div class="text item">
                联系地址：<span class="txt">厦门市思明区七星西路178号七星大厦601</span>
            </div>
            <div class="text item">
                经营类目：<span class="txt">企业-网络虚拟服务-软件/建站/技术开发-软件/建站/技术开发</span>
            </div>
            <div class="text item">
                客服电话：<span class="txt">13860464300</span>
            </div>
        </el-card>

        <el-card class="box-card card3">
            <div slot="header" class="clearfix">
                <span>营业执照信息</span>
            </div>
            <div class="text item">
                负责人身份证号码：<span class="txt">350525163654584565</span>
            </div>
            <div class="text item">
                <span style="vertical-align: top;">身份证照片：</span><span class="txt"><img src="../../../assets/img/test2.jpg" alt="身份证" class="idCard"></span>
                            <span class="txt"><img src="../../../assets/img/test2.jpg" alt="身份证" class="idCard"></span>
            </div>
            <div class="text item">
                营业执照注册号：<span class="txt">91350212349383332A</span>
            </div>
            <div class="text item">
                营业执照有效期：<span class="txt">2016年04月-2056年-04月</span>
            </div>
            <div class="text item">
                <span style="vertical-align: top;">营业范围：</span><el-input type="textarea" v-model="txtInfo"></el-input>
            </div>
            <div class="text item">
                客服电话：<span class="txt">13860464300</span>
            </div>
            <div class="text item">
                <span style="vertical-align: top;">营业执照：</span>
                <span class="txt"><img src="../../../assets/img/test2.jpg" alt="营业执照" class="license"></span>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>结算信息</span>
            </div>
            <div class="text item">
                结算账户类型：<span class="txt">工商个体户</span>
            </div>
            <div class="text item">
                结算户名：<span class="txt">厦门速煜信息技术有限公司</span>
            </div>
            <div class="text item">
                结算银行：<span class="txt">展商银行股份有限公司厦门镇海支行</span>
            </div>
            <div class="text item">
                结算账号：<span class="txt">12123123123123</span>
            </div>
        </el-card>

        <el-card class="box-card">
          <el-table
            :data="payType"
            stripe
            style="width: 100%;">
            <el-table-column
                prop="typeName"
                label="支付类型"
                width="180">
            </el-table-column>
            <el-table-column
                prop="fee"
                label="费率"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                label="激活状态">
            </el-table-column>
        </el-table>
        </el-card>
    </div>
</template>

<script>
    import headTop from '../../common/headTop'
    export default {
        data(){
            return {
                auditStatus: 1,
                txtInfo: '软件开发；动画、漫画设计、制作；互联网信息服务（不含药品信息服务和网吧）；保健食品零售；酒、饮料及茶叶零售；预包装食品零售；散装食品零售；乳制品（含婴幼儿配方奶粉）零售；乳制品（不含婴幼儿配方奶粉）零售；图书、报刊零售；电子出版物零售；信息系统集成服务；信息技术咨询服务；数据处理和存储服务；文化、艺术活动策划；会议及展览服务；提供企业营销策划服务；广告的设计、制作、代理、发布；互联网接入及相关服务（不含网吧）；其他互联网服务（不含需经许可审批的项目）；节能技术推广服务；经营各类商品和技术的进出口（不另附进出口商品目录），但国家限定公司经营或禁止进出口的商品及技术除外；贸易代理；其他贸易经纪与代理；互联网销售；果品零售；蔬菜零售；肉、禽、蛋零售；化妆品及卫生用品零售；其他日用品零售；珠宝首饰零售；旅客票务代理；化妆品及卫生用品批发；其他未列明批发业（不含需经许可审批的经营项目）',
                payType: [{
                    typeName: '微信-扫码支付',
                    fee: '2.2%',
                    status: '已激活'
                },{
                    typeName: '微信-刷卡支付',
                    fee: '2.2%',
                    status: '未激活'
                },{
                    typeName: '微信-公众号支付',
                    fee: '2.2%',
                    status: '已激活'
                },{
                    typeName: '微信-APP支付',
                    fee: '2.2%',
                    status: '已激活'
                },{
                    typeName: '支付宝-扫码支付',
                    fee: '2.2%',
                    status: '已激活'
                },{
                    typeName: '支付宝-刷卡支付',
                    fee: '2.2%',
                    status: '已激活'
                },{
                    typeName: '支付宝-js支付',
                    fee: '2.2%',
                    status: '已激活'
                }]
            }
        },
        components: {
            headTop
        }
    }
</script>

<style lang="less">
    .channel{
        .box-card {
            margin: 20px auto;
            width: 80%;
            .text {
                font-size: 14px;
                .txt{
                    display: inline-block;
                    margin-left: 20px;
                }
            }

            .item {
                margin-bottom: 18px;
            }

            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }
            .clearfix:after {
                clear: both
            }
        }
        .card1{
            .el-card__body{
                position: relative;
                .status{
                    position: absolute;
                    top: 50px;
                    right: 20px;
                }
            }
        }
        .card3{
            .text{
                .el-textarea{
                    width: 70%;
                    margin-left: 50px;
                    .el-textarea__inner{
                        height: 200px;
                    }
                }
                .txt{
                    .idCard{
                        width: 100px;
                    }
                    .license{
                        width: 150px;
                    }
                }
            }
        }
    }
</style>