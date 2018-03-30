<template>
    <div class="fillcontain">
        <el-row :gutter="10" class="home-content">
            <el-col :span="8" class="col1 manage-col">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24">
                            <router-link tag="div" to="/manage" class="grid-height bg-color111">
                                <span class="font-s">首页</span>
                            </router-link>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <div class="grid-height bg-color121" @click="show">
                                <i class="iconfont icon-suo"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-height bg-color122">
                                <i class="iconfont icon-iconceshi"></i>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-height bg-color131">
                                <i class="iconfont icon-bianjiqianbixieshuru2"></i>
                                <span class="font-s">笔记</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-height bg-color141">
                                <i class="iconfont icon-jisuanqi"></i>
                                <span class="font-s">统计</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8" class="manage-col col2">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24">
                            <router-link tag="div" to="/showMsg" class="grid-height bg-color211" @click.native="show">
                                <i class="iconfont icon-tongxunlu"></i>
                                <span class="font-s">记录</span>
                            </router-link>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <router-link tag="div" to="/news" class="grid-height bg-color141" @click.native="show">
                                <i class="iconfont icon-xinhao"></i>
                                <span class="font-s">信息</span>
                            </router-link>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <div class="grid-height bg-color211">
                                <i class="iconfont icon-rili"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-height bg-color232">
                                <i class="iconfont icon-huiyuan"></i>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-height bg-color241">
                                <i class="iconfont icon-renwu"></i>
                                <span class="font-s">任务</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8" class="manage-col col3">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24">
                            <router-link tag="div" to="/important" class="grid-height bg-color311"  @click.native="show">
                                <i class="iconfont icon-xingxing"></i>
                                <span class="font-s">重要事项</span>
                            </router-link>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <div class="grid-height bg-color121">
                                <i class="iconfont icon-naozhong"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-height bg-color131">
                                <i class="iconfont icon-zhaopianphotos11"></i>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-height bg-color331">
                                <i class="iconfont icon-guanliyuan"></i>
                                <span class="font-s">管理员</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <div class="grid-height bg-color131">
                                <i class="iconfont icon-shouye1"></i>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-height bg-color311">
                                <span class="font-s">简介</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <div class="page" id="page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return{
                screenWidth: document.body.clientWidth
            }
        },
        methods: {
            show(){
                this.$options.methods.fadeDashBoard();
                document.getElementById('page').classList.add('openpage');
            },
            fadeDashBoard(){
                for(let i = 0;i < 3;i++){
                    document.getElementsByClassName('manage-col')[i].classList.add('fadeOutback');
                    document.getElementsByClassName('manage-col')[i].classList.remove('fadeInForward-' + i);
                }
            }
        },
        mounted(){
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()
            }
        },
        watch:{
            screenWidth: function(sw){
                if(!this.timer){
                    this.screenWidth = sw
                    this.timer = true
                    let that = this
                    setTimeout(function(){
                        that.timer = false
                    },1000)
                }
                let fontS = document.getElementsByClassName('font-s');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../style/mixin';
    @import '../../assets/fonts/iconfont.css';
    @hh: 17vh;
    @lh16: 16vh;
    @iconfont: 10vh;
    @fontS: 4vh;
    @color111: #2FB1BE;
    @color121: #EF3A5B;
    @color122: #83A8C3;
    @color131: #385E82;
    @color141: #EBB741;
    @color211: #8BBA30;
    @color232: #85A9C3;
    @color241: #F2854C;
    @color311: #BEA881;
    @color331: #04ACAD;

    html,body{
        overflow: hidden;
    }
    .fillcontain{
        background-color: #EEEEEE;
    }
    .el-row {
        margin-bottom: 10px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        min-height: 36px;
        color: #fff;
        text-align: center;
    }
    .row-bg {
        padding: 10px 0;
        background: #f9fafc;
    }
    .grid-height{
        min-height:@hh;
        line-height: @lh16;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }
    .grid-height:hover{
        background-color: #fff;
    }
    .home-content{
        padding: 12vh 5%!important;
        
    }
    .bg-color111{
        background-color: @color111;
        &:hover{
            color: @color111;
        }
    }
    .bg-color121{
        background-color: @color121;
        &:hover{
            color: @color121;
        }
    }
    .bg-color122{
        background-color: @color122;
        &:hover{
            color: @color122;
        }
    }
    .bg-color131{
        background-color: @color131;
        &:hover{
            color: @color131;
        }
    }
    .bg-color141{
        background-color: @color141;
        &:hover{
            color: @color141;
        }
    }
    .bg-color211{
        background-color: @color211;
        &:hover{
            color: @color211;
        }
    }
    .bg-color232{
        background-color: @color232;
        &:hover{
            color: @color232;
        }
    }
    .bg-color241{
        background-color: @color241;
        &:hover{
            color: @color241;
        }
    }
    .bg-color311{
        background-color: @color311;
        &:hover{
            color: @color311;
        }
    }
    .bg-color331{
        background-color: @color331;
        &:hover{
            color: @color331;
        }
    }
    .iconfont,.font-s{
        vertical-align: middle;
    }
    .iconfont{
        font-size: @iconfont;
    }
    .font-s{
        font-size: @fontS;
    }
    .page{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #DFD4C1;
        opacity: 0;
        transform-origin: 100% 0%;
        transform: rotateY(-89deg) translateZ(20vw)
    }
    .openpage{ 
        animation: rotatePageInFromRight 1s cubic-bezier(.66,.04,.36,1.03) 1 normal forwards;
    }
    .slidePageLeft{
        opacity:1;
        transform: rotateY(0) translateZ(0) ; 
        animation:slidePageLeft .8s ease-out 1 normal forwards;
    }
    .fadeOutback{
        animation: fadeOutBack 0.3s ease-out 1 normal forwards;    
    }
    .fadeInForward-0,.fadeInForward-1,.fadeInForward-2{
        opacity:0;
        transform: translateZ(-20vw) scale(0.6);
        animation: fadeInForward .5s cubic-bezier(.03,.93,.43,.77) .4s normal forwards;
    }
    .fadeInForward-1{
        animation-delay: .65s;
    }
    .fadeInForward-2{
        animation-delay: .75s;
    }
    @keyframes fadeOutBack{
        0%{transform: translateX(-8vw) scale(1);opacity: 1;}
        70%{transform: translateZ(-20vw) scale(0.6);opacity: 0.5;}
        95%{transform: translateZ(-20vw) scale(0.6);opacity: 0.5;}
        100%{transform: translateZ(-20vw) scale(0);opacity: 0;}
    }
    @keyframes rotatePageInFromRight{
        0% {transform:rotateY(-90deg) translateZ(20vw);opacity:0}
        30%{opacity:1}
        100%{transform: rotateY(0deg) translateZ(0) ; opacity:1}
    }
    @keyframes slidePageLeft{
        0%{left:0; transform: rotateY(0deg) translateZ(0) ; opacity:1}
        70%{opacity:1;}
        100%{opacity:0; left:-150%; transform: rotateY(0deg)}
    }
    @keyframes fadeInForward{
        0%{transform: translateZ(-20vw) scale(0);opacity: 0;}
        100%{transform: translateZ(0) scale(1);opacity: 1;}
    }
</style>