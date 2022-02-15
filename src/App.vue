<template>
    <el-container class="main-container">
        <el-aside class="left">
            <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                :router="true"
                background-color="#545c64"
                text-color="#fff"
            >
                <el-menu-item :index="item.path" v-for="(item,index) in menus" :key="index">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
                <router-view v-show="$route.name"></router-view>
                <!-- 子应用渲染区，用于挂载子应用路由触发的组件 -->
                <div v-show="!$route.name" id="frame"></div>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
        };
        return {
            menus: [
                {
                    key: "VueMicroApp",
                    title: "Vue 用户",
                    path: "/vue/user",
                },
                {
                    key: "VueMicroAppList",
                    title: "Vue 列表页",
                    path: "/vue/about",
                },
            ],
            tableData: Array(20).fill(item),
        };
    },
    watch:{
        $route(){
            console.log(this.$route)
        }
    }
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
.main-container{
    width: 100%;
    height: 100vh;
}
.left {
    width: 200px !important;
    height: 100%;
    background-color: #545c64;
}
.el-menu-vertical-demo .is-active {
    background: #89baeb !important;
    color: #fff !important;
}
.el-menu-vertical-demo .el-menu-item:hover {
    background: #89baeb !important;
}
.el-header {
    background-color: #000;
    color: #fff;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
