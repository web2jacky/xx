<template>
  <div id="Login" :style="`background-image:url(${bgList[random]})`">
    <el-card class="loginBox">
      <p slot="header">欢迎登陆</p>
      <el-form
        ref="login"
        :model="form"
        :rules="rules"
        label-width="auto"
        @keydown.enter.native="handleSubmit"
        :hide-required-asterisk="true"
      >
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="0" class="last_item">
          <el-button @click="handleSubmit" type="primary" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import local from "../../../helpers/local.js";
export default {
  name: "Login",
  data() {
    return {
      bgList: [
        require("../../../assets/images/admin/1.jpg"),
        require("../../../assets/images/admin/2.jpg"),
        require("../../../assets/images/admin/3.jpg")
      ],
      random: 1,
      loading: false,
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    local.remove("token");
    this.random = Math.floor(Math.random() * 3);
  },
  methods: {
    async handleSubmit() {
      this.$refs.login.validate(async valid => {
        if (valid) {
          this.loading = true;
          let req = {
            userName: this.form.username,
            password: this.form.password
          };
          let { data } = await this.$http.post("api/login", {
            ...req
          });
          this.loading = false;
          if (data.code != 200) {
            this.$Message.error(data.message);
          } else {
            this.setLoginState(data);
            this.$notify({
              type: "success",
              title: "欢迎回来",
              desc: this.form.username
            });
            this.$router.push("/admin/user");
          }
        }
      });
    },
    setLoginState(data) {
      local.set("userId", this.form.username);
      local.set("token", data.token);
    }
  }
};
</script>
<style lang="less" scoped>
#Login {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  position: relative;
  .loginBox {
    position: absolute;
    right: 160px;
    top: 50%;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
    width: 300px;
    label {
      i {
        font-size: 20px;
      }
    }
    .last_item {
      text-align: center;
      margin-bottom: 0;
    }
  }
}
</style>
