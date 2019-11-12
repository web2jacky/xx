import Vue from "vue";
import Router from "vue-router";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("@/view/web/Home/index.vue")
    },
    {
      path: "/Dns",
      name: "Dns",
      component: () => import("@/view/web/Dns/index.vue")
    },
    {
      path: "/mHome",
      name: "mHome",
      component: () => import("@/view/web/mHome/index.vue")
    },
    {
      path: "/admin/login",
      name: "admin_login",
      component: () => import("@/view/admin/Login/index.vue")
    },
    {
      path: "/admin/Home",
      name: "admin_home",
      component: () => import("@/view/admin/Home/index.vue"),
      children: [
        {
          path: "/admin/user",
          name: "admin_user",
          component: () => import("@/view/admin/User/index.vue")
        },
        {
          path: "/admin/administrator",
          name: "admin_Administrator",
          component: () => import("@/view/admin/Administrator/index.vue")
        },
        {
          path: "/admin/*",
          name: "admin_NoFound",
          component: () => import("@/view/admin/NoFound/index.vue")
        }
      ]
    }
  ]
});
