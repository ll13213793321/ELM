<template>
  <div id="mydiscount">

    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img
        @click="back()"
        id="headImg"
        src="../../../static/imgs1/back.png"
        alt=""
      >
      <p id="headP">我的优惠</p>
    </div>
    <div id="title">
      <router-link to="/mydiscount1">
        <p
          id="p1"
          @click="changeCL()"
        >
          <span :class="{p1:showP==true}">红包</span>
        </p>
      </router-link>

      <router-link to="mydiscount2">
        <p
          id="p2"
          @click="changeCR()"
        >
          <span :class="
          {p1:showP==false}">商家代金券</span>
        </p>
      </router-link>
    </div>
    <router-view></router-view>

  </div>

</template>
<script>
export default {
  name: "mydiscount",

  data() {
    return {
      showP: true
    };
  },
  created() {},
  methods: {
    changeCL() {
      this.showP = true;
    },
    changeCR() {
      this.showP = false;
    },
    user() {
      const name = localStorage.name;
    },
    back() {
      this.$router.push({
        name: "me"
      });
    }
  }
};
</script>
<style scoped>
#mydiscount {
  background-color: #f5f5f5;
  height: 100vh;
}

#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#headImg {
  margin-top: 0.1rem;
  width: 0.1rem;
  float: left;
  margin-left: 0.1rem;
}
#headP {
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#title {
  background-color: white;
  height: 0.47rem;
  display: flex;
}
#p1,
#p2 {
  width: 50vw;
  text-align: center;
  font-size: 0.2rem;
  /* height: 0.45rem; */
  line-height: 0.47rem;
  /* color: #3190e8; */
}
#p1 > span,#p2>span {
  padding: 0.05rem;
}
.p1 {
  color: #3190e8;
  border-bottom: 0.02rem solid #3190e8;
}
</style>
