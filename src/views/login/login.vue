// 登录弹窗模块
<template>
  <el-form class="login-container"
           :model="form"
           status-icon
           :rules="rules"
           ref="form"
           label-width="100px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item class="username"
                  label="用户名"
                  label-width="80px"
                  prop="username">
      <el-input type="input"
                v-model="form.username"
                autocomplete="off"
                placeholder="请输入账号" ref="getname"></el-input>
    </el-form-item>
    <el-form-item class="password"
                  label="密码"
                  label-width="80px"
                  prop="password">
      <el-input type="password"
                v-model="form.password"
                autocomplete="off"
                placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item class="login_submit">
      <el-button class="login_submit"
                 type="primary"
                 @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from 'mockjs'
import { getMenu } from '../../api/data'
export default {
  name: 'login',
  data () {
    return {
      form: {

      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度不能小于3位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      },
    }
  },
  methods: {
    login () {
      getMenu(this.form).then(({ data: res }) => {

        if (res.code === 20000) {
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu', res.data.menu)
          this.$store.commit('setToken', res.data.token)
          this.$store.commit('addMenu', this.$router)
          this.$store.commit('checkLogin', this.$refs.getname.value)
          this.$router.push({name: 'home'})
        } else {
          this.$message.warning(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scroped>
.login-container {
  width: 350px;
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: white;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_submit {
  margin: 10px auto 0px auto;
}
</style>