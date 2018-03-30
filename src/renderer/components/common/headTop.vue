<template>
    <div class="header_container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="handleCommand">
			<img :src="imgUrl" :onerror="errImg" class="avator">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="index">管理菜单</el-dropdown-item>
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</template>

<script>
	import { mapActions,mapState } from 'vuex'
    export default {
        data(){
            return {
                imgUrl: 'http://localhost:8080/static/img/test2.jpg',
				errImg: 'this.src="' + require('../../assets/img/test2.jpg') + '"'
            }
        },
		created: function(){
			console.log(this.isLogin);
		},
        computed: {
			...mapState(['isLogin']),
		},
		methods: {
			...mapActions(['outAction']),
			handleCommand(command){
				if(command == 'home'){
					this.$router.push('/manage');
				}else if(command == 'index'){
					this.$router.push('/');
				}else{
					// this.$options.methods.logOut();
					this.logOut();
					console.log(this.isLogin);
				}
			},
			logOut(){
				console.log(this.isLogin);
				// this.outAction();
				// this.$router.push('/');
			}
		}
    }
</script>

<style lang="less">
    @import '../../style/mixin';
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 37px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>