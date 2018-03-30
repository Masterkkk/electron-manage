<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="3" style="min-height: 100%; background-color: #324057;">
                <el-menu :default-active="defaultActive" class="el-menu-dark" text-color="#bfcbd9" style="min-height: 100%;" background-color="#324057" router>
                    <el-menu-item index="manage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="tab1">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span>进件首页</span>
                        </template>
                        <el-menu-item index="channel" class="child-menu">渠道进件</el-menu-item>
                        <el-menu-item index="merchant" class="child-menu">商户进件</el-menu-item>
                    </el-submenu>
                    <el-submenu index="tab2">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>导航二</span>
                        </template>
                        <el-menu-item index="adminList" class="child-menu">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="tab3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>导航三</span>
                        </template>
                        <el-menu-item index="adminSet" class="child-menu">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="tab4">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addShop" class="child-menu">添加商铺</el-menu-item>
						<el-menu-item index="addGoods" class="child-menu">添加商品</el-menu-item>
					</el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="21" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        computed: {
			defaultActive: function(){
                console.log(this.$route.path.replace('/', ''));
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>

<style lang="less" scoped>
    @import '../../style/mixin';
    .el-menu-dark{
        overflow: hidden;
    }
</style>