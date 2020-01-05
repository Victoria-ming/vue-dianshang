<template>
    <div class="page">
       <div class="van-hairline--surround">
           <div class="van-hairline--surround header--tit">
           </div>
           <h4 class="header_tit_txt" id="login-title">帐号登录</h4>
       </div>
        <van-cell-group>
        <van-field v-model="phone" label="" placeholder="请输入手机号" clearable v-if="num==1"/>
          <tt class="countrycode-value" :class="{animation : isAnimation}">+86
                <van-icon name="arrow" class="arrow" v-if="num==1"/>
          </tt>
         <van-field v-model="value" placeholder="邮箱/手机号码/小米ID" clearable v-if="num==0"/>
        <van-cell-group v-if="num==1">
            <van-field v-model="sms" center clearable placeholder="请输入收到的验证码"><van-button slot="button" type="default">获取验证码</van-button></van-field>
        </van-cell-group>
               <van-field v-model="password" placeholder="密码"  v-if="num==0" type="password" v-show="t==false"/>
               <van-field v-model="password" placeholder="密码"  v-show="t==true" />
               <van-icon name="eye" v-if="num==0" @click="hanled2()" :class="{eyeclor: isEyeclor}"/>
         </van-cell-group>
         <van-button round type="info" @click="login">立即登录/注册</van-button>
         <van-button round type="info1" @click="hanled" v-if="num==1">用户名密码登录</van-button>
         <van-button round type="info1" @click="hanled1" v-if="num==0">手机短信登录/注册</van-button>
        <van-row type="flex" justify="space-between" style="margin-top:20px">
                   <van-col span="5"></van-col>
                   <van-col span="10" style="font-size:16px;color: rgba(0,0,0,.4);text-align: center" v-if="num==1">收不到验证码？</van-col>
                    <van-col span="11" style="font-size:16px;color: rgba(0,0,0,.4)" v-if="num==0">立即注册 | 忘记密码</van-col>
                   <van-col span="5"></van-col>
         </van-row>
         <div class="van-hairline--top">
           <h4 class="txt-otherLogin">其他登录方式</h4>
           <p  class="quick-type">
             <a  class=" icon-qq"></a>
             <a  class=" icon-wx"></a>
             </p>
         </div>
         <div class="van-hairline--top"></div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      value: '',
      sms: '',
      password: '',
      num: 0,
      isAnimation: false,
      t: false,
      isEyeclor: false
    }
  },

  methods: {
    hanled () {
      this.num = 0
      this.isAnimation = !this.isAnimation
    },
    hanled1 () {
      this.num = 1
      this.isAnimation = !this.isAnimation
    },
    hanled2 () {
      this.t = !this.t
      this.isEyeclor = !this.isEyeclor
    },
    login () {
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.page {
   height: 100%;
    text-align: left;
    background: #fff;
    padding: 25px 25px 25px 25px;

}
.van-hairline--surround{
   width: 374px;
   height: 127px;
   .header--tit {
       position: absolute;
       left: 50%;
       top: 20%;
       transform:translate(-50%,-50%);
       width: 48px;
       height: 48px;
       background-color:#ff6700;

   }
     .header_tit_txt {
      position: absolute;
       left: 50%;
       top: 40%;
       transform:translate(-50%,-50%);
    font-size: 21px;
    color: #000;
    font-weight: normal;

      }
}
.animation{
    position: relative;
    animation-name: fade-in;
    animation-timing-function: ease-in-out;
    animation-duration: .5s;
}
@keyframes fade-in{
  0% {
    left: -100%;
}

100% {
    left: 0;
}
}
.van-field__label {
  display: block;
    width: 54px !important;
}
.van-cell--center{
  border-bottom: 0.01739rem solid #ebedf0;
  }
.countrycode-value{
    position: absolute;
   top: 10px;
   left: 15px;
  font-size: 20px;
  color: #000;
  .arrow {
    position: absolute;
    top: 1px;
    left: 30px;
  }
}
.van-field{
  height: 53px;
  border-bottom: 0.01739rem solid #ebedf0;
}
.van-icon-eye {
  position: absolute;
  top: 71px;
  right: 11px;
 font-size: 20px;

}
.eyeclor{
  color: #ff6700;
}
.van-button {
  border: none;
  height: 32px;
  .van-button__text {
    display: block;
    line-height: 32px;
    color: #2ea5e5;

}
}

.van-button--info {
  width: 365px;
  height: 50px;

  font-size: 20px;
   border-radius: 6px;
  overflow: hidden;
  background-color: #ff6700;
   .van-button__text{
     color: #fff!important;
   }
}
.van-button--info1{
   width: 365px;
  height: 50px;
  border: 1px solid #d3d3d3;
   border-radius: 6px;
    color: #f10000;
    font-size: 20px;
    background: #fff;
     .van-button__text{
     color: #000!important;
   }
}
.van-hairline--top{
  margin-top: 75px;
  border-top: 1px solid rgba(0,0,0,.1);
  .txt-otherLogin{
    color: rgba(0,0,0,.2);
    width: 1.9rem;
    margin: -.20rem auto 0;
    background: #fff;
    text-align: center;
    font-size: 12px;
}
}
 .quick-type{
    text-align: center;
    margin: .25rem 0 .12rem;
    .icon-qq {
      background: url('../../public/img/下载.png') no-repeat;
       background-size: 100% auto;
     }
     .icon-wx{
       background: url('../../public/img/下载 (1).png')no-repeat;
       background-size: 100% auto;
     }
    a {
    display: inline-block;
    width: 48px;
    height: 49px;
    font-size: .12rem;
    margin: 0 20px 0;
    color: rgba(0,0,0,.4);
}
}
.policy_tip {
    text-align: center;
    font-size: 13px;
    color: rgba(0,0,0,.3);
    margin-top: .15rem;
    a {
    color: #4a90e2;

}
}

</style>
