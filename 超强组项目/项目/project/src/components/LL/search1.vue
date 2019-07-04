<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>搜索</p>
    </div>
    <div class="content">
      <input
        type="text"
        placeholder="请输入小区/写字楼/学校等"
        v-model="keyword"
      >
      <button class="chioce" @click="search(),show=false">搜索</button>
    </div>
    <div>
      <ul>
        <li
          v-for="(v,i) in message"
          :key="i"
          id="buttom_search"
        >
          <router-link :to="'/addAddress?name='+v.name">
            <p
              v-html="v.name"
              class="search"
            ></p>
            <p
              v-html="v.address"
              class="search search_p"
            ></p>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="center" v-if="show==true">
      <p>找不到地址？</p>
      <p>尝试输入小区丶写字楼或者学校名</p>
      <p>详细地址(如门牌号码)可稍后输入哦</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      keyword: "",
      id: "",
      message:{},
      show:true
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    search() {
      if (this.keyword == "") {
        return;
      }
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.keyword;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.message = res.data;
        console.log(this.message);
      });
    }
  },
  created() {
    this.id = this.$store.state.id;
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
.content {
  width: 3.75rem;
  height: 0.6rem;
  background-color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
  position: relative;
}
.content > input {
  width: 2.5rem;
  height: 0.4rem;
  font-size: 0.15rem;
  text-indent: 1em;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  background-color: rgb(243, 243, 243);
  border-radius: 0.05rem;
}
.chioce {
  width: 0.8rem;
  height: 0.4rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.15rem;
  background-color: #3190e8;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  border: none;
  outline: none;
  border-radius: 0.05rem;
}
#center {
  position: absolute;
  left: 0;
  top: 40vh;
}
#center > p {
  width: 3.75rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  color: gray;
  font-size: 0.15rem;
}
#buttom_search {
  width: 100%;
  background-color: white;
  border: 0.01rem solid lightgray;
}
.search {
  width: 90%;
  line-height: 0.3rem;
  font-size: 0.15rem;
  margin: 0 auto;
  color: black;
}
.search_p {
  font-size: 0.1rem;
  color: gray;
}
</style>
