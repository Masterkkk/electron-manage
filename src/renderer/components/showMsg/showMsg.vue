<template>
    <div>
        <div>
            <h4>{{$route.meta.title}}</h4>
            <p v-for="(item,index) in $route.meta.content" key="index">{{item}}</p>
        </div>
        <div class="close-button" @click="closePage">x</div>
    </div>
</template>

<script>
    export default {
        name: 'showMsg',
        data(){
            return {

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
</style>