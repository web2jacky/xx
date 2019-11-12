<template>
  <el-container class="Home">
    <el-header>
      <div class="logo">客户多域名管理系统</div>
      <div>
        <span @click="$router.push('/admin/login')" class="loginOut">退出登录</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#409EFF"
          router
        >
          <el-menu-item index="/admin/user">
            <i class="el-icon-s-check"></i>
            <span slot="title">客户设置</span>
          </el-menu-item>
          <el-menu-item index="/admin/administrator">
            <i class="el-icon-s-custom"></i>
            <span slot="title">管理员设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="main">
        <el-main>
          <transition name="move" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.move-enter-active,
.move-leave-active {
  transition: opacity 0.5s;
}
.move-enter,
.move-leave {
  opacity: 0;
}
.Home {
  width: 100%;
  height: 100%;
  .el-header {
    background: #242f42;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    .logo {
      font-size: 20px;
    }
    .loginOut {
      font-size: 14px;
      cursor: pointer;
    }
  }
  .el-aside {
    background: #324157;
    .el-menu {
      border-right: none;
    }
  }
  .main {
    background: #f3f3f3;
  }
}
</style>