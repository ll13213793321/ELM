<template>
  <div id="app">
    <div id="header">
      <p id="header_p">商家详情</p>
      <a>
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
    </div>
    <div id="content">
      <ul class="content_top">
        <p>活动与属性</p>
        <li v-if="shopArr. supports[0]">
          <span class="jian">{{shopArr. supports[0].icon_name}}</span>
          <span>{{shopArr. supports[0].description}}</span>
        </li>
        <li v-if="shopArr. supports[1]">
          <span class="bao">{{shopArr. supports[1].icon_name}}</span>
          <span>{{shopArr. supports[1].description}}</span>
        </li>
        <li v-if="shopArr. supports[2]">
          <span class="zhun">{{shopArr. supports[2].icon_name}}</span>
          <span>{{shopArr. supports[2].description}}</span>
        </li>
        <li v-if="shopArr. supports[3]">
          <span class="piao">{{shopArr. supports[3].icon_name}}</span>
          <span>{{shopArr. supports[3].description}}</span>
        </li>
      </ul>
      <ul class="content_center">
        <router-link to="/safeNotice">
          <p>
            <span>食品监督安全公示</span>
            <span>企业认证详情</span>
            <span>></span>
          </p>
        </router-link>
        <img
          src="../../../static/imgs/icon_xiaolian-mian.png"
          alt
        >
        <li class="li_p">
          <h2>
            <span>监督检查结果：</span>
            <span class="result">良好</span>
          </h2>
          <h2>检查日期：</h2>
        </li>
      </ul>
      <ul class="content_bottom">
        <p>商家信息</p>
        <li>{{shopArr.name}}</li>
        <li>地址：{{shopArr.address}}</li>
        <li>营业时间：[{{shopArr.opening_hours[0]}}]</li>
        <li>
          营业执照
          <span>></span>
        </li>
        <li>
          餐饮服务许可证
          <span>></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopIntr",
  data() {
    return {
      id: "",
      shopArr: {}
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getShopMessage() {
      this.$http({
        url: "https://elm.cangdu.org/shopping/restaurant/" + this.id,
        method: "get"
      }).then(res => {
        this.shopArr = res.data;
      });
    }
  },
  created() {
    this.id = this.$store.state.shopXinxi.id;
    this.getShopMessage();
  }
};
</script>
<style scoped>
#header {
  width: 3.75rem;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
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
  font-weight: bold;
}
#content {
  width: 3.75rem;
  margin-top: 0.6rem;
}
#content > ul {
  width: 3.75rem;
  margin-top: 0.1rem;
  background-color: white;
}
#content p {
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-weight: bold;
  border-bottom: 0.01rem solid lightgray;
  text-indent: 1.5em;
  position: relative;
  color: black;
}
#content p > span {
  font-weight: bold;
}
#content p > span:nth-child(2) {
  font-size: 0.17rem;
  color: gray;
  position: absolute;
  right: 0.3rem;
  top: 0;
}
#content p > span:last-child {
  position: absolute;
  right: 0.1rem;
  top: 0;
  color: gray;
}
.li_p > h2 {
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.content_center {
  overflow: hidden;
}
.content_center > img {
  width: 0.8rem;
  float: left;
  margin-left: 0.3rem;
}
.content_center > li {
  float: left;
}
#content li {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  color: gray;
  text-indent: 2em;
}
.content_bottom > li {
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 0.01rem solid lightgray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content_top li > span:first-child {
  color: white;
  border-radius: 0.05rem;
}
.jian {
  background-color: red;
}
.bao,
.piao {
  background-color: gray;
}
.zhun {
  background-color: #3190e8;
}
.result {
  color: red;
}
.content_bottom span {
  float: right;
  margin-right: 0.1rem;
}
</style>
