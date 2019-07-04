<template>
  <div id="app">
    <div id="header">
      <p id="header_p">{{title1}}</p>
      <router-link to="/home">
        <img src="../../../static/imgs/back.png">
      </router-link>
    </div>
    <div class="center_div">
      <ul @click="showFL()">分类</ul>
      <ul @click="showPX()">排序</ul>
      <ul @click="showSX()">筛选</ul>
    </div>
    <div class="content">
      <ul>
        <li
          class="buttom_li"
          v-for="(v,i) in shoplist1"
          :key="i"
        >
          <router-link to="/shopDetial">
            <div
              class="li_div"
              @click="setMessage(v)"
            >
              <img
                :src="'https://elm.cangdu.org/img/'+v.image_path"
                class="buttom_img"
              >
              <div id="content">
                <p class="p_top">
                  <span class="p_top_span">品牌</span>
                  <span>{{v.name}}</span>
                  <ul>
                    <li
                      v-for="(value,key) in v.supports"
                      :key="key"
                    >{{value.icon_name}}</li>
                  </ul>
                </p>
                <p class="p_center">
                  <span>
                     <van-rate
                      v-model="v.rating"
                      allow-half
                      void-icon="star"
                      void-color="#eee"
                      :size="12"
                      :gutter="1"
                    />
                  </span>
                  <span>{{v.rating}}</span>
                  <span>月售{{v.recent_order_num}}单</span>
                  <ul>
                    <li>{{v.delivery_mode.text}}</li>
                    <li>{{v.supports[1].name}}</li>
                  </ul>
                </p>
                <p class="p_buttom">
                  <span>￥{{v.float_minimum_order_amount}}起送/</span>
                  <span>{{v.piecewise_agent_fee.tips}}</span>
                  <ul>
                    <li>{{v.distance}}/</li>
                    <li>{{v.order_lead_time}}</li>
                  </ul>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="Feilei"
      v-if="showF==true"
    >
      <p class="Fleft">
        <ul
          :key="i"
          v-for="(v,i) in foodClass"
        >
          <a :href="'#ul'+i">
            <li :class="{bc:showb,bc2:i==showb2}" @click="changeBc(i)">
              <span>{{v.name}}</span>
              <span>{{v.count}}</span>
              <span>></span>
            </li>
          </a>
        </ul>
      </p>
      <p class="Fright">
        <ul
          :key="i"
          v-for="(v,i) in foodClass"
          :id="'ul'+i"
        >
          <li
            :key="key"
            v-for="(value,key) in v.sub_categories"
          >
            <span>{{value.name}}</span>
            <span>{{value.count}}</span>
          </li>
        </ul>
      </p>
    </div>
    <div
      class="Paixu"
      v-if="showP==true"
    >
      <ul>
        <li @click="getShop(4)">
          <img
            src="../../../static/imgs/paixu.png"
            alt=""
          >
          <span>智能排序</span>
        </li>
        <li @click="getShop(5)">
          <img
            src="../../../static/imgs/juli.png"
            alt=""
          >
          <span>距离最近</span>
        </li>
        <li @click="getShop(6)">
          <img
            src="../../../static/imgs/re.png"
            alt=""
          >
          <span>销量最高</span>
        </li>
        <li @click="getShop(1)">
          <img
            src="../../../static/imgs/jiage.png"
            alt=""
          >
          <span>起送价最低</span>
        </li>
        <li @click="getShop(2)">
          <img
            src="../../../static/imgs/zhong.png"
            alt=""
          >
          <span>配送速度最快</span>
        </li>
        <li @click="getShop(3)">
          <img
            src="../../../static/imgs/wujiaoxing.png"
            alt=""
          >
          <span>评分最高</span>
        </li>
      </ul>
    </div>
    <div
      class="Shaixuan"
      v-if="showS==true"
    >
      <div class="S_top">
        <p>配送方式</p>
        <p>
          <img
            src="../../../static/imgs/fengniao.png"
            alt=""
          >
          <span>蜂鸟专送</span>
        </p>
        <p>商家属性(可以多选)</p>
        <ul>
          <li>
            <span>品</span>
            <span>品牌商家</span>
          </li>
          <li>
            <span>保</span>
            <span>外卖保</span>
          </li>
          <li>
            <span>准</span>
            <span>准时达</span>
          </li>
          <li>
            <span>新</span>
            <span>新店</span>
          </li>
          <li>
            <span>付</span>
            <span>在线支付</span>
          </li>
          <li>
            <span>票</span>
            <span>开发票</span>
          </li>
        </ul>
      </div>
      <div class="S_bottom">
        <button>清空</button>
        <button>确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Loading } from 'element-ui';
let loadingInstance;
export default {
  name: "foodClass",
  data() {
    return {
      title1: "",
      title2: "",
      shoplist1: [],
      showb:true,
      showb2:"",
      latitude1: "latitude",
      longitude1: "longitude",
      foodClass: [],
      showF: false,
      showP: false,
      showS: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getShop(a) {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.latitude1 +
          "&longitude=" +
          this.longitude1 +
          "&order_by=" +
          a,
        method: "get"
      }).then(res => {
        loadingInstance.close();
        this.shoplist1 = res.data;
      });
    },
    shopClass() {
      this.$http({
        url: "https://elm.cangdu.org/shopping/v2/restaurant/category",
        method: "get"
      }).then(res => {
        this.foodClass = res.data;
        console.log(res.data);
      });
    },
    showFL() {
      this.showF = !this.showF;
      this.showP = false;
      this.showS = false;
    },
    showPX() {
      this.showF = false;
      this.showP = !this.showP;
      this.showS = false;
    },
    showSX() {
      this.showF = false;
      this.showP = false;
      this.showS = !this.showS;
    },
    setMessage(v) {
      this.$store.commit("getMessage", v);
    },
    changeBc(i){
      this.showb=false;
      this.showb2=i;
    }
  },
  created() {
     loadingInstance = Loading.service({
      spinner:"el-icon-loading",
      text:"加载中"
      });
    this.title1 = this.$route.query.title;
    this.getShop(4);
    this.shopClass();
  }
};
</script>
<style scoped>
#app {
  width: 3.75rem;
  height: 100vh;
  position: relative;
}
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
#Class {
  width: 3.75rem;
  height: 0.5rem;
  background-color: white;
  position: fixed;
  top: 0.5rem;
  left: 0;
  display: flex;
  z-index: 5;
}
.Class_ul {
  width: 1.35rem;
  height: 0.4rem;
  margin-top: 0.03rem;
  float: left;
}
.Class_ul:nth-child(2) {
  border-left: 0.01rem solid lightgray;
  border-right: 0.01rem solid lightgray;
}
.el-input__inner {
  width: 100%;
  height: 0.4rem;
  border: none;
  text-align: center;
  font-size: 0.15rem;
  color: black;
}
.content {
  width: 3.75rem;
  margin-top: 1rem;
  padding-top: 0.1rem;
  background-color: white;
}
.buttom_li {
  width: 3.75rem;
  border-bottom: 0.01rem solid lightgray;
}
.li_div {
  width: 3.65rem;
  margin: 0.1rem auto;
  overflow: hidden;
}
.buttom_img {
  width: 0.7rem;
}
#content {
  width: 2.9rem;
  float: right;
}
.p_top,
.p_center,
.p_buttom {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.p_top > span {
  color: black;
  font-size: 0.15rem;
  font-weight: bold;
}
.p_top_span {
  background-color: goldenrod;
}
.p_top > ul,
.p_center > ul,
.p_buttom > ul {
  float: right;
  display: flex;
}
.p_top > ul > li {
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.12rem;
  color: gray;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
}

.p_center > span {
  font-size: 0.12rem;
  display: inline-block;
  line-height: 0.15rem;
  color: gray;
  color: orangered;
}
.p_center > span:first-child {
  width: 0.75rem;
}
.p_center > span:nth-child(3) {
  color: gray;
}
.p_center > ul > li {
  text-align: center;
  height: 0.15rem;
  line-height: 0.15rem;
  font-size: 0.12rem;
  color: white;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
  border-radius: 0.005rem;
}
.p_center > ul > li:first-child {
  background-color: #3190e8;
}
.p_center > ul > li:last-child {
  color: #3190e8;
}
.p_buttom > span,
.p_buttom > ul > li {
  width: 0.5rem;
  font-size: 0.12rem;
  color: gray;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.p_buttom > ul{
  margin-top: 0.03rem;
}
.center_div {
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  left: 0;
  top: 0.5rem;
  z-index: 2000;
  background-color: white;
  border-bottom: 0.01rem solid lightgray;
}
.center_div > ul {
  width: 1.25rem;
  height: 0.4rem;
  font-size: 0.15rem;
  text-align: center;
  line-height: 0.4rem;
  float: left;
  margin-top: 0.05rem;
  box-sizing: border-box;
}
.center_div > ul:nth-child(2) {
  border-left: 0.01rem solid lightgray;
  border-right: 0.01rem solid lightgray;
}
.Feilei {
  width: 3.75rem;
  height: 4.59rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: rgb(236, 233, 233);
  z-index: 1000;
}
.Feilei > p {
  width: 1.875rem;
  height: 4.59rem;
  float: left;
}
.Feilei > p:last-child {
  background-color: white;
  overflow: hidden;
}
.Feilei > p:last-child > ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Feilei li {
  width: 1.675rem;
  height: 0.3rem;
  padding: 0.1rem;
  line-height: 0.3rem;
  font-size: 0.12rem;
  color: black;
  position: relative;
  border-bottom: 0.01rem solid white;
}
.Feilei > p:last-child li {
  border-bottom: 0.01rem solid lightgray;
}
.Feilei > p span:last-child {
  position: absolute;
  right: 0.1rem;
}
.bc{
  background-color: rgb(241, 238, 238);
}
.bc2{
  background-color: white;
}
.Feilei > p:first-child span:nth-child(2) {
  position: absolute;
  right: 0.3rem;
  top: 0.15rem;
  display: inline-block;
  height: 0.2rem;
  line-height: 0.2rem;
  padding: 0 0.05rem;
  background-color: rgb(173, 170, 170);
  color: white;
  border-radius: 0.1rem;
}
.Paixu {
  width: 3.75rem;
  height: 3.2rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: white;
}
.Paixu img {
  width: 0.2rem;
  position: absolute;
  top: 0.18rem;
}
.Paixu li {
  height: 0.53rem;
  line-height: 0.54rem;
  font-size: 0.15rem;
  padding: 0 0.1rem;
  color: black;
  position: relative;
}
.Paixu span {
  display: inline-block;
  width: 3.5rem;
  margin-left: 0.4rem;
  border-top: 0.005rem solid lightgray;
}
.Shaixuan {
  width: 3.75rem;
  padding: 0 0.1rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color: white;
}
.S_top {
  height: 2.2rem;
}
.Shaixuan span {
  display: inline-block;
  font-size: 0.12rem;
}
.Shaixuan img {
  width: 0.15rem;
  height: 0.15rem;
  line-height: 0.15rem;
  position: absolute;
  top: 0.08rem;
  left: 0.1rem;
}
.Shaixuan li > span:first-child {
  width: 0.25rem;
  height: 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  position: absolute;
  font-size: 0.15rem;
  color: gray;
  top: 0.08rem;
  left: 0.1rem;
  border: 0.005rem solid lightgray;
  border-radius: 0.03rem;
}
.Shaixuan p {
  width: 3.75rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.12rem;
  position: relative;
}
.Shaixuan p:nth-of-type(2) {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.03rem;
  border: 0.005rem solid lightgray;
}
.Shaixuan ul {
  width: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.Shaixuan li {
  width: 1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.12rem;
  border: 0.005rem solid lightgray;
  position: relative;
  margin-bottom: 0.05rem;
  border-radius: 0.03rem;
}
.Shaixuan li > span:last-child,
.Shaixuan p > span {
  margin-left: 0.4rem;
  font-size: 0.12rem;
}
.Shaixuan li:nth-child(1) > span:first-child,
.Shaixuan li:nth-child(3) > span:first-child {
  color: #3190e8;
  border-color: #3190e8;
}
.Shaixuan li:nth-child(4) > span:first-child,
.Shaixuan li:nth-child(5) > span:first-child {
  color: red;
  border-color: red;
}
.S_bottom {
  width: 3.75rem;
  height: 0.6rem;
  background-color: rgb(228, 220, 220);
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-around;
}
.S_bottom > button {
  width: 1.8rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.05rem;
  font-size: 0.2rem;
  background-color: white;
  border-radius: 0.03rem;
  outline: none;
  border: none;
}
.S_bottom > button:last-child {
  color: white;
  background-color: green;
}
</style>
