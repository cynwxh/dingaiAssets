<template>
  <el-container>
    <div class="loginbox">
      <div class="left-logo"></div>
      <div class="right-form">登录
        <el-form :model="login" :rules="rules" ref="loginForm" class="demo-login" size="100px">
          <el-form-item prop="user">
            <el-input v-model="login.user" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="login.pass" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-container>
</template>

<script>
import axios from "axios";
import { postLogin } from "@/api";
export default {
  name: "Login",
  data() {
    return {
      login: {
        user: "",
        pass: ""
      },
      rules: {
        user: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/main");
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       postLogin(this.login)
    //         .then(res => {
    //           console.log(res);
    //           if (res.data.code == 200) {
    //             this.$store.commit("save_token", res.data.data.token);
    //             this.$router.push("/main");
    //           } else {
    //             this.$message.error(res.data.msg);
    //           }
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     } else {
    //       this.$message.error("提交失败");
    //       return false;
    //     }
    //   });
    }
  }
};
</script>
}
</script>
<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.jpg") center center / cover;
  justify-content: center;
  align-items: center;
  .loginbox {
    display: flex;
    .left-logo {
      width: 300px;
      height: 200px;
      margin-right: 20px;
      background: url("../../assets/img/logo.png") center center / cover;
      border-right: 1px solid #fff;
    }
    .right-form {
      width: 300px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      .el-form {
        margin-top: 10px;
      }
      .el-button.btn {
        width: 100%;
      }
    }
  }
}
</style>
