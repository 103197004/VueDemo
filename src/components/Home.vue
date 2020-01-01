<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="el-icon-platform-eleme" style="font-size:100px"></div>
      </el-col>
      <el-col :span="12" :offset="4">
        <h1 v-text="msg" />
      </el-col>
      <el-col :span="6">
        <div class="el-icon-user-solid" style="font-size:30px;line-height:80px">
          Admin
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-close" @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <span></span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="/home/system"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home/system">
            <i class="el-icon-menu"></i>
            <span slot="title">系统</span>
          </el-menu-item>
          <el-menu-item index="/home/list">
            <i class="el-icon-menu"></i>
            <span slot="title">列表</span>
          </el-menu-item>
          <el-menu-item index="/home/set">
            <i class="el-icon-document"></i>
            <span slot="title">设置</span>
          </el-menu-item>
          <el-menu-item index="/home/account">
            <i class="el-icon-setting"></i>
            <span slot="title">用户</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "智能大数据分析"
    }
  },methods: {
      logout: function () {
            console.log("out")
        }
    }
};
</script>

<style>
</style>