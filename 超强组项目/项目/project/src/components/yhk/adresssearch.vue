<template>
    <div id="adresssearch">
         <div id="header">
      <p id="header_p">
        <strong>搜索地址</strong>
      </p>
      <a @click="back()">
        <img src="../../assets/back.png" alt>
      </a>
    </div>

    <div id="wrap">
     <input id="inp" type="text" placeholder="请输入小区/写字楼/学校等" v-model="keyword">
     <button @click="site()" id="btn">确认</button> 
    </div>
    


    <p id="txt">为了满足商家的送餐要求，建议您从列表中选择地址</p>
 <ul   @click="jump(v)" id="adress"   :key="i" v-for="(v,i) in datas" >
       <li>{{v.name}}</li>
       <li>{{v.address}}</li>
        
     </ul >
 
     <div v-if="show">
    <p class="p1">找不到地址？</p>
    <p class="p2">请尝试输入小区、写字楼或学校名</p>
    <p class="p3">详细地址（如门牌号）可稍后输入哦。</p>

</div>
    </div>
   
    
</template>



<script>
export default {
    data() {
        return {
            keyword:"",
            datas:"",
           show:true,
          
            
        }
    },
    created() {
      this. site();
        
    },
    methods: {
        back(){
           this.$router.go(-1);
        },
         site(){
       const api= "https://elm.cangdu.org/v1/pois?city_id="+this.userid+"&keyword="+this.keyword+"&type=search"
      this.$http({
        url:api,
        method:'get',

      }).then(res=>{
        console.log(res)
        this.datas=res.data
     
      })
      if (this.keyword!=0) {
           this.show=false;
        
      }
    },
    jump(v){
     
      this.$router.push({
       
        name:"addsite",
        query:{
         address:v.name
        }
      })
    }
    },
   
}
</script>




<style scoped>
#adresssearch{
  height: 120vh;
  background-color: #f5f5f5;
  position: relative;
}
#header {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: relative;
}
#header img {
  width: 0.17rem;
  position: absolute;
  left: 0.1rem;
  top: 0.06rem; 
}
#header_p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  float: right;
  text-align: center;
}
#wrap{
    height: 0.65rem;
    background-color: #fff;
}
#inp{
    width: 2.75rem;
    height: 0.4rem;
    margin-top: 0.06rem;
    margin-left: 0.13rem;
  border-radius: 0.05rem;
        background: #f2f2f2;
            border: 1px solid #ddd;
    font-size: 0.15rem;
    text-indent: 0.5em;

}
#btn{
    width: 0.7rem;
    height: 0.38rem;
    margin-left: 0.03   rem;
    margin-top: 0.06rem;
  border-radius: 0.04rem;
    background: #3199e8;
    border: #3190e8;
    font-size: 0.16rem;
        color: #fff;
}
#txt{
    height: 0.3rem;
    line-height: 0.3rem;
        color: #ff883f;
            background: #fff6e4;
            font-size: 0.15rem;
            text-align: center;
}
.p1{
        color: #969696;
    font-size: 0.16rem;
   padding-top: 1.45rem;
   margin-left: 1.4rem;
}
.p2{
        color: #969696;
    font-size: 0.16rem;
   padding-top: 0.05rem;
   margin-left: 0.65rem;
}
.p3{
        color: #969696;
    font-size: 0.16rem;
   padding-top: 0.05rem;
   margin-left: 0.48rem;
}
#adress{
  height: 0.4rem;
 
  margin-top: 0.15rem;

}
#adress li:nth-child(1){
  margin-top: 0.25rem;
   font-size: 0.15rem;
      color: #969696;
      text-indent: 0.6em; 
   
  
}
#adress li:nth-child(2){
  /* margin-top: 0.02rem; */
   font-size: 0.14rem;
       color: #969696;
      text-indent: 0.6em; 
     margin-bottom: 0.1rem;
}

</style>
