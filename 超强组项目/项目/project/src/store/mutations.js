export default {
  getMessage(state, v) {
    state.shopXinxi = v;
  },
  getMessage1(state, value) {
    state.Allgeohash = value;
  },
  getMessage2(state, v) {
    state.AllshopArr = v;
  },
  getMessage4(state, v) {
    state.id = v;
  },
  //用户名
  getName(state, a) {
    state.username = a;
  },
  //用户头像
  getimg(state, a) {
    state.imageUrl = a;
  },
  //红包id
  getid(state, a) {
    state.userid = a;
  },
  //红包数量
  getnum(state, a) {
    state.num = a;
  },
  getgeo(state, a) {
    state.geo = a;
  },
}
