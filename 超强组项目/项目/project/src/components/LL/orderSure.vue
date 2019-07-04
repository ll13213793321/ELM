<template>
  <div id="app">
    <div id="head">
      <router-link to="/shopDetial">
        <img src="../../../static/imgs/back.png">
      </router-link>
      <p>确认订单</p>
      <router-link to="/login">
        <span class="btns">登录|注册</span>
      </router-link>
    </div>
    <div class="address">
      <router-link to="/orderAddress">
        <p>
          <img
            src="../../../static/imgs/dwei.png"
            alt
          >
          <span>请添加一个收货地址</span>
          <img
            src="../../../static/imgs/iconfontjiantou2.png"
            alt
          >
        </p>
      </router-link>
    </div>
    <div class="content">
      <ul class="time">
        <li>送达时间</li>
        <li>
          <span>尽快送达|</span>
          <span>预计23:09</span>
        </li>
        <li>蜂鸟专送</li>
      </ul>
      <ul class="type">
        <li>
          <span>支付方式</span>
          <span>在线支付</span>
          <img
            src="../../../static/imgs/iconfontjiantou2.png"
            alt
          >
        </li>
        <li>
          <span>红包</span>
          <span>暂时只在饿了么APP中支持</span>
        </li>
      </ul>
      <ul class="shopFood">
        <p>
          <span>
            <img
              :src="'https://elm.cangdu.org/img/'+shopMessage.image_path"
              alt=""
            >
          </span>
          <span>{{shopMessage.name}}</span>
        </p>
        <li
          v-for="(v,i) in shopArr"
          :key="i"
        >
          <p
            v-for="(value,key) in v.foods"
            :key="key"
            v-if="value.is_featured>0"
          >
            <span>{{value.name}}</span>
            <span>x{{value.is_featured}}</span>
            <span>￥{{value.specfoods[0].price}}</span>
          </p>
        </li>
        <span class="all">
          <span>订单￥{{allPrice}}</span>
          <span>待支付</span>
          <span>￥{{allPrice}}</span>
        </span>
      </ul>
      <ul class="others">
        <router-link to="/orderAddMessage">
          <li>
            <span>订单备注</span>
            <span>口味丶偏好等</span>
            <img
              src="../../../static/imgs/iconfontjiantou2.png"
              alt
            >
          </li>
        </router-link>
        <router-link to="/tickets">
          <li>
            <span>发票抬头</span>
            <span>不需要发票</span>
            <img
              src="../../../static/imgs/iconfontjiantou2.png"
              alt
            >
          </li>
        </router-link>
      </ul>
    </div>
    <div class="footer">
      <p>待支付￥{{allPrice}}</p>
      <p>
        <router-link :to="'/order?allPrice='+this.allPrice+'&nowTime='+this.nowTime+'&name='+this.name">
          <span
            class="sure"
            @click="getTime()"
          >确认下单</span>
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderSure",
  data() {
    return {
      shopArr: {},
      shopMessage: {},
      allPrice: "",
      nowTime: "",
      name: ""
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getTime() {
      const myDate = new Date();
      this.nowTime = myDate.toLocaleString();
    }
  },
  created() {
    this.shopArr = this.$store.state.AllshopArr;
    this.shopMessage = this.$store.state.shopXinxi;
    this.allPrice = this.$route.query.allPrice;
    this.name = this.$store.state.shopXinxi.name;
  }
};
</script>
<style scoped>
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
}
#head > p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
.btns {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.address {
  width: 3.75rem;
  height: 1rem;
  margin-top: 0.5rem;
  border-bottom: 0.02rem dashed lightblue;
  position: relative;
}
.address p {
  width: 3.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  position: absolute;
  left: 0.12rem;
  top: 0.25rem;
  color: black;
  font-size: 0.17rem;
}
.address span {
  margin-left: 0.3rem;
  font-weight: bold;
}
.address img {
  width: 0.25rem;
  position: absolute;
  top: 0.12rem;
}
.address img:last-child {
  right: 0;
}
.content > ul {
  width: 3.75rem;
  background-color: white;
  margin-top: 0.1rem;
}
.time {
  position: relative;
  height: 1.2rem;
}
.time > li:first-child {
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.22rem;
  font-weight: bold;
  text-indent: 1em;
}
.time > li:nth-child(2) {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.18rem;
  color: #3190e8;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
.time > li:nth-child(2) > span {
  font-weight: bold;
}
.time > li:last-child {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.1rem;
  padding: 0.05rem;
  background-color: #3190e8;
  color: white;
  border-radius: 0.1rem;
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
}
.type > li {
  width: 3.75rem;
  height: 0.5rem;
  border-bottom: 0.01rem solid lightgray;
  position: relative;
  font-size: 0.15rem;
  color: gray;
  line-height: 0.5rem;
}
.type img {
  width: 0.2rem;
  position: absolute;
  right: 0.15rem;
  top: 0.18rem;
}
.type > li:first-child > span:first-child {
  font-size: 0.2rem;
  color: gray;
  margin-left: 0.15rem;
}
.type > li:first-child > span:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.02rem;
}
.type > li:last-child > span:first-child {
  margin-left: 0.15rem;
}
.type > li:last-child > span:nth-child(2) {
  position: absolute;
  right: 0.2rem;
  top: 0.02rem;
}
.shopFood {
  width: 3.75rem;
}
.shopFood > p {
  height: 0.6rem;
  border-bottom: 0.01rem solid lightgray;
  font-size: 0.23rem;
  position: relative;
}
.shopFood > p > span:nth-child(1) {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.1rem;
}
.shopFood img {
  width: 0.4rem;
}
.shopFood > p > span:nth-child(2) {
  position: absolute;
  top: 0.15rem;
  left: 0.6rem;
  font-weight: bold;
}
.shopFood > li > p {
  height: 0.4rem;
  font-size: 0.15rem;
  line-height: 0.4rem;
  color: gray;
  position: relative;
}
.shopFood > li span:first-child {
  margin-left: 0.1rem;
}
.shopFood > li span:nth-child(2) {
  position: absolute;
  right: 0.85rem;
  top: 0.02rem;
  color: red;
}
.shopFood > li span:last-child {
  position: absolute;
  right: 0.15rem;
  top: 0.02rem;
}
.all {
  display: inline-block;
  width: 3.75rem;
  height: 0.7rem;
  border-top: 0.01rem solid lightgray;
  font-size: 0.15rem;
  color: gray;
  position: relative;
}
.all > span:first-child {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.all > span:nth-child(2) {
  position: absolute;
  top: 0.1rem;
  right: 0.55rem;
  color: red;
}
.all > span:last-child {
  position: absolute;
  right: 0.45rem;
  bottom: 0.1rem;
  color: red;
}
.others li {
  width: 3.75rem;
  height: 0.5rem;
  position: relative;
  font-size: 0.15rem;
  line-height: 0.5rem;
}
.others img {
  width: 0.2rem;
  position: absolute;
  right: 0.15rem;
  top: 0.18rem;
}
.others li:first-child > span:first-child {
  font-size: 0.2rem;
  color: gray;
  margin-left: 0.15rem;
}
.others li:first-child > span:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.02rem;
  color: gray;
}
.others li:nth-child(2) > span:first-child {
  margin-left: 0.15rem;
  color: gray;
}
.others li:nth-child(2) > span:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.02rem;
  color: gray;
}
.footer {
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: black;
}
.footer p {
  height: 0.5rem;
  line-height: 0.5rem;
  float: left;
  color: white;
  font-size: 0.18rem;
}
.footer p:first-child {
  width: 2.4rem;
  text-indent: 1em;
}
.sure {
  display: inline-block;
  width: 1.35rem;
  line-height: 0.5rem;
  background-color: green;
  text-align: center;
  color: white;
}
</style>
