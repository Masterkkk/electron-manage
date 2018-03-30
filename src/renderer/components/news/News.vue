<template>
    <div class="container">
        <h4 class="info-title">用户信息</h4>
        <div class="close-button" @click="closePage">x</div>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/img/test2.jpg" class="image">
                    <div style="padding: 14px;">
                        <p><span>用户姓名：</span><span>{{userMsg.name}}</span></p>
                        <p><span>联系邮箱：</span><span>{{userMsg.email}}</span></p>
                        <p><span>职位：</span>{{userMsg.work}}</p>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'News',
        data(){
            return{
                userMsg: {
                    name: '康耀峰',
                    email: '13950169615@163.com',
                    work: '前端开发攻城狮',
                },
                currentDate: new Date()
            }
        },
        methods: {
            closePage(){
                console.log('关闭page');
                let closePage = document.getElementById('page');
                closePage.classList.add('slidePageLeft');
                function removeClass(){
                    console.log('动画结束');
                    closePage.classList.remove('slidePageLeft','openpage');
                }
                //closePage.addEventListener('webkitAnimationEnd',removeClass(),false);
                //用addEventListener监听css3动画的webkitAnimationEnd时，
                //若有多个动画，监听当前动画结束后，播放下一个动画，内部的函数会被重复执行。
                setTimeout(function(){
                    //closePage.removeEventListener('webkitAnimationEnd',removeClass(),false);
                    closePage.classList.remove('slidePageLeft','openpage');
                },1000);
                this.$options.methods.showDashBoard();
            },
            showDashBoard(){
                console.log('显示page');
                for(let i = 0;i < 3;i++){
                    document.getElementsByClassName('manage-col')[i].classList.add('fadeInForward-' + i);
                    document.getElementsByClassName('manage-col')[i].classList.remove('fadeOutback');                    
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .close-button{
        font-size:48px;
        width:46px; 
        height:46px; 
        position:absolute; 
        top:1.25em; 
        right:1.25em; 
        cursor:pointer; 
        border:1px solid white;
        line-height:.8em;
        text-align:center;
        color: #fff;
        z-index: 100;
    }
    .slidePageLeft{
        opacity:1;
        transform: rotateY(0) translateZ(0) ; 
        animation:slidePageLeft .8s ease-out 1 normal forwards;
    }
    @keyframes slidePageLeft{
        0%{left:0; transform: rotateY(0deg) translateZ(0) ; opacity:1}
        70%{opacity:1;}
        100%{opacity:0; left:-150%; transform: rotateY(0deg)}
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    .info-title{
        margin: 20px 0;
        text-align: center;
        font-size: 20px;
    }
</style>