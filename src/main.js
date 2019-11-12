import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "./helpers/Axios";
import local from "./helpers/local";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import VueFullpage from "vue-fullpage.js";
Vue.use(VueFullpage);
import "./assets/styles/reset.less";
import "./assets/styles/common.less";
import "animate.css";

// 通过beforeEach钩子来判断用户是否登陆过 有无token
// const whiteList = ["/admin/user", "/admin/administrator", "/admin/Home"]; // 不重定向白名单

// router.beforeEach((to, from, next) => {
//   let token = local.get("token");
//   console.log(token);
//   // 判断是否有登录过
//   if (token) {
//     next(); // 如果匹配到正确跳转
//   } else {
//     if (whiteList.indexOf(to.path) == -1) {
//       next();
//     } else {
//       // 还没有登录过 则跳转到登录界面
//       next("/admin/login");
//     }
//   }
// });

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  async created() {
    // 处理错误请求;
    axios.cbError = e => {
      this.$message({
        message: "服务器开小差了，请刷新页面试试？",
        type: "error"
      });
    };
    axios.timerOut = e => {
      this.$message({
        message: "网络连接超时，请刷新页面试试？",
        type: "error"
      });
    };
  }
});
