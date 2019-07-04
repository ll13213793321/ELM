<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>订单列表</p>
    </div>
    <div id="content">
      <div
        v-for="(a,b) in shoplist"
        :key="b"
        v-if="a.name==name"
      >
        <img :src="'https://elm.cangdu.org/img/'+shopMe.image_path">
        <ul>
          <li class="head_c">
            <p>
              <span>{{name}}></span>
              <span>支付超时</span>
            </p>
            <span>{{nowTime}}</span>
          </li>
          <li>
            <p
              v-for="(v,i) in shopArr"
              :key="i"
            >
              <span
                v-for="(value,key) in v.foods"
                :key="key"
                v-if="value.is_featured>0"
              >{{value.name}}</span>
            </p>
          </li>
          <li>
            <span>￥{{allPrice}}</span>
          </li>
          <li>
            <router-link to="/shopDetial">
            <span>再来一单</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="footer">
      <router-link
        to="/home"
        class="all"
      >
        <img
          src="../../../static/imgs/homeF.png"
          class="imgs"
        >
        <p>外卖</p>
      </router-link>
      <router-link
        to="/search"
        class="all"
      >
        <img
          src="../../../static/imgs/searchF.png"
          class="imgs"
        >
        <p>搜索</p>
      </router-link>
      <router-link
        to="/order"
        class="all"
      >
        <img
          src="../../../static/imgs/orderT.png"
          class="imgs"
        >
        <p>订单</p>
      </router-link>
      <router-link
        to="/me"
        class="all"
      >
        <img
          src="../../../static/imgs/meF.png"
          class="imgs"
        >
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      name: "",
      nowTime: "",
      allPrice: "",
      shopArr: {},
      shopMe: {},
      name: "",
      shoplist:{}
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    shopList() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude,
        method: "get"
      }).then(res => {
        this.shoplist = res.data;
      });
    },
  },
  created() {
    this.nowTime = this.$route.query.nowTime;
    this.allPrice = this.$route.query.allPrice;
    this.name = this.$route.query.name;
    this.shopArr = this.$store.state.AllshopArr;
    this.shopMe = this.$store.state.shopXinxi;
    this.shopList();
  }
};
</script>
<style scoped>
#app {
  width: 3.75rem;
  height: 100vh;
  background-color: white;
  position: relative;
}
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
#footer {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
.all {
  width: 25%;
  height: 0.3rem;
  text-align: center;
  font-size: 0.15rem;
  color: gray;
}
.imgs {
  width: 0.2rem;
}
#content {
  margin-top: 0.6rem;
}
#content li {
  border-bottom: 0.01rem solid rgb(241, 234, 234);
}
#content span {
  color: gray;
}
#content > div {
  margin: 0.1rem;
  overflow: hidden;
}
#content img {
  width: 0.5rem;
}
#content ul {
  width: 2.95rem;
  float: right;
  position: relative;
}
#content ul > li:last-child {
  height: 0.3rem;
  border: none;
  line-height: 0.3rem;
  margin-top: 0.1rem;
}
#content ul > li:nth-child(3) {
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 0.1rem;
}
#content ul > li:nth-child(2) {
  border: none;
}
#content ul > li:nth-child(2) > p > span {
  display: inline-block;
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.12rem;
}
#content ul > li:nth-child(3) > span {
  float: right;
}
#content ul > li:last-child  span {
  font-size: 0.15rem;
  float: right;
  padding: 0.005rem;
  border: 0.01rem solid rgb(158, 183, 228);
  border-radius: 0.05rem;
}
.head_c {
  height: 0.7rem;
}
.head_c > p {
  height: 0.45rem;
  line-height: 0.45rem;
}
.head_c span {
  display: inline-block;
  font-size: 0.15rem;
}
.head_c span:first-child {
  font-size: 0.2rem;
}
.head_c > p > span:nth-child(2) {
  float: right;
  font-size: 0.15rem;
}
</style>
