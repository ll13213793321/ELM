
四季是首循环播放的歌 2019/7/2 10:09:13
<template>
  <div id="app">
    <div id="header">
      <p id="header_p">登录</p>
      <a @click="back()">
        <img src="../../../static/imgs/back.png" alt />
      </a>
    </div>
    <div id="middle">
      <div class="middle">
        <input type="text" class="inp" placeholder="账号" v-model="username" />
      </div>
      <div class="middle">
        <input type="text" class="inp" v-if="show==true" placeholder="密码" v-model="password" />
        <input type="password" class="inp" v-else placeholder="密码" v-model="password" />
        <el-switch v-model="show" active-color="green" inactive-color="lightgray"></el-switch>
      </div>
      <div class="middle">
        <input type="text" class="inp" placeholder="验证码" v-model="captcha_code" />
        <img :src="code" alt />
        <div id="changeCode">
          <p>看不清</p>
          <a @click="check_code()">换一张</a>
        </div>
      </div>
    </div>
    <div>
      <p class="tip">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
    <div id="footer">
      <button id="login" @click="login()">登录</button>
    </div>
    <div id="footer_span">
      <router-link to="/resetPw">
        <span>重置密码?</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      show: true,
      code: "",
      username: "",
      password: "",
      captcha_code: ""
    };
  },
  created() {
    this.check_code();
  },
  methods: {
    back() {
      this.$router.push({
        name: "city"
      });
    },
    check_code() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {}
      }).then(res => {
        this.code = res.data.code;
        console.log(res.data);
      });
    },
    login() {
      console.log("------");
      if (this.username == "") {
        alert("请输入手机号/邮箱/用户名");
        return;
      } else if (this.password == "") {
        alert("请输入密码");
        return;

      } else if (this.captcha_code == "") {
        alert("请输入验证码");
        return;

      } else {
      }

      this.$store.commit("getName", this.username);
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.captcha_code
        }
      }).then(res => {
        this.$store.commit("getid", res.data.user_id);
        console.log(res.data);

        localStorage.username = res.data.username;
        this.$router.push({
          name: "city"
        });
      });
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: relative;
}
#header img {
  width: 0.2rem;
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
}
#header_p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
#middle {
  margin-top: 0.2rem;
  background-color: white;
}
.middle {
  width: 100%;
  height: 0.5rem;
  border: 0.01rem solid lightgray;
  border-top: none;
}
.inp {
  width: 60%;
  height: 0.5rem;
  text-indent: 1em;
  font-size: 0.15rem;
}
#changeCode {
  width: 0.5rem;
  height: 0.5rem;
  float: right;
  font-size: 0.15rem;
  margin-right: 0.1rem;
  line-height: 0.25rem;
}
#changeCode > a {
  color: #3b95e9;
}
.middle > img {
  height: 0.3rem;
}
.tip {
  width: 90%;
  height: 0.2rem;
  margin: 0.1rem auto;
  line-height: 0.2rem;
  font-size: 0.13rem;
  color: red;
}
#footer {
  width: 90%;
  height: 0.5rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  overflow: hidden;
}
#login {
  width: 100%;
  height: 0.5rem;
  background-color: #4cd964;
  outline: none;
  border: none;
  font-size: 0.2rem;
  color: white;
}
#footer_span {
  width: 90%;
  height: 0.5rem;
  margin: 0 auto;
  line-height: 0.5rem;
  font-size: 0.15rem;
}
#footer_span span {
  float: right;
  color: #3b95e9;
}
</style>