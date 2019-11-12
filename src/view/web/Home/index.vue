<template>
  <div class="home">
    <div class="head">
      <div class="w1100" style="width:1100px">
        <div class="logo">
          <a href="#">
            <img src="@/assets/images/pc_index/logo.png" height="80px" />
          </a>
        </div>
        <ul class="xl_nav">
          <li>
            <a class="zhuce">
              <img src="@/assets/images/pc_index/xl_ico1.png" />会员注册
            </a>
          </li>
          <li>
            <a class="guanwang">
              <img src="@/assets/images/pc_index/xl_ico2.png" />进入官网
            </a>
          </li>
          <li>
            <router-link :to="{path:'/Dns'}">
              <img src="@/assets/images/pc_index/xl_ico3.png" />DNS防劫持
            </router-link>
          </li>
          <li>
            <a class="kaijiangwang" target="_blank">
              <img src="@/assets/images/pc_index/xl_ico4.png" />开奖直播
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="xl_bo">
      <div class="banner-content" style="width: 100%; text-align: center;">
        <a class="guanwang" target="_blank">
          <img src="@/assets/images/pc_index/hengfu1.gif?v=21" class="width100" />
        </a>
        <a class="guanwang" target="_blank">
          <img src="@/assets/images/pc_index/hengfu2.gif?v=22" class="width100" />
        </a>
      </div>
      <div class="xl_cs">
        <h2>
          <a href="#" onclick="window.location.reload()">重新检测</a>
          <b class="webname">幸运彩票线路入口</b>
          <i>请选择最快的线路进入网站</i>
        </h2>
        <ul id="network_line">
          <li v-for="num in ranNum" :key="num">
            <a href="javascript:void(0)" class="roadlink">立即进入</a>
            <span class="tp1">线路1</span>
            <span class="tp2 speed">{{num}} ms</span>
          </li>
        </ul>
      </div>
      <div class="xl_dl">
        <table border="0" cellspacing="1" cellpadding="0">
          <tr>
            <td rowspan="2" class="white">
              <img src="@/assets/images/pc_index/xl_ico9.png" />
              <p>常用网银</p>
            </td>
            <td>
              <a target="_blank" href="http://www.icbc.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico10.png" />
                <span>工商银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.boc.cn/">
                <img src="@/assets/images/pc_index/xl_ico11.png" />
                <span>中国银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.ccb.com/">
                <img src="@/assets/images/pc_index/xl_ico12.png" />
                <span>建设银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.abchina.com/">
                <img src="@/assets/images/pc_index/xl_ico13.png" />
                <span>农业银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.psbc.com/">
                <img src="@/assets/images/pc_index/xl_ico14.png" />
                <span>邮政储蓄</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.cmbc.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico15.png" />
                <span>民生银行</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="http://www.cmbchina.com/">
                <img src="@/assets/images/pc_index/xl_ico16.png" />
                <span>招商银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.cebbank.com/">
                <img src="@/assets/images/pc_index/xl_ico17.png" />
                <span>光大银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.cib.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico18.png" />
                <span>兴业银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.hxb.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico19.png" />
                <span>华夏银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.bankcomm.com/">
                <img src="@/assets/images/pc_index/xl_ico20.png" />
                <span>交通银行</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.cgbchina.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico21.png" />
                <span>广发银行</span>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div class="xl_dl">
        <table border="0" cellspacing="1" cellpadding="0">
          <tr>
            <td rowspan="2" class="white">
              <img src="@/assets/images/pc_index/xl_ico22.png" />
              <p>常用网址</p>
            </td>
            <td>
              <a target="_blank" href="https://www.baidu.com/">
                <img src="@/assets/images/pc_index/xl_ico23.png" />
                <span>百度</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.qq.com/">
                <img src="@/assets/images/pc_index/xl_ico24.png" />
                <span>腾讯QQ</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.ifeng.com/">
                <img src="@/assets/images/pc_index/xl_ico25.png" />
                <span>凤凰网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.sohu.com/">
                <img src="@/assets/images/pc_index/xl_ico26.png" />
                <span>搜狐</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.163.com/">
                <img src="@/assets/images/pc_index/xl_ico27.png" />
                <span>网易</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.taobao.com/">
                <img src="@/assets/images/pc_index/xl_ico28.png" />
                <span>淘宝网</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://www.youku.com/">
                <img src="@/assets/images/pc_index/xl_ico29.png" />
                <span>优酷</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.jd.com/">
                <img src="@/assets/images/pc_index/xl_ico30.png" />
                <span>京东商城</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.12306.cn/">
                <img src="@/assets/images/pc_index/xl_ico31.png" />
                <span>12306</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.ctrip.com/">
                <img src="@/assets/images/pc_index/xl_ico32.png" />
                <span>携程网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.4399.com/">
                <img src="@/assets/images/pc_index/xl_ico33.png" />
                <span>4399小游戏</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.58.com/">
                <img src="@/assets/images/pc_index/xl_ico34.png" />
                <span>58同城</span>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div class="xl_dl">
        <table border="0" cellspacing="1" cellpadding="0">
          <tr>
            <td rowspan="2" class="white">
              <img src="@/assets/images/pc_index/xl_ico35.png" />
              <p>常用资讯</p>
            </td>
            <td>
              <a target="_blank" href="https://news.sina.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico36.png" />
                <span>新浪新闻</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://news.ifeng.com/">
                <img src="@/assets/images/pc_index/xl_ico25.png" />
                <span>凤凰资讯</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://news.qq.com/">
                <img src="@/assets/images/pc_index/xl_ico24.png" />
                <span>腾讯新闻</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://news.sohu.com/">
                <img src="@/assets/images/pc_index/xl_ico26.png" />
                <span>搜狐新闻</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://news.163.com/">
                <img src="@/assets/images/pc_index/xl_ico27.png" />
                <span>网易新闻</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://news.baidu.com/">
                <img src="@/assets/images/pc_index/xl_ico23.png" />
                <span>百度新闻</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="http://www.zaobao.com/">
                <img src="@/assets/images/pc_index/xl_ico37.png" />
                <span>联合早报</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.people.com.cn/">
                <img src="@/assets/images/pc_index/xl_ico38.png" />
                <span>人民网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.china.com/">
                <img src="@/assets/images/pc_index/xl_ico39.png" />
                <span>中华网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.cctv.com/">
                <img src="@/assets/images/pc_index/xl_ico40.png" />
                <span>CCTV新闻</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.xinhuanet.com/">
                <img src="@/assets/images/pc_index/xl_ico41.png" />
                <span>新华网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.huanqiu.com/">
                <img src="@/assets/images/pc_index/xl_ico42.png" />
                <span>环球时报</span>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div class="xl_dl">
        <table border="0" cellspacing="1" cellpadding="0">
          <tr>
            <td rowspan="2" class="white">
              <img src="@/assets/images/pc_index/xl_ico43.png" />
              <p>视频网站</p>
            </td>
            <td>
              <a target="_blank" href="https://www.iqiyi.com/">
                <img src="@/assets/images/pc_index/xl_ico44.png" />
                <span>爱奇艺</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://www.youku.com/">
                <img src="@/assets/images/pc_index/xl_ico29.png" />
                <span>优酷</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.kankan.com/">
                <img src="@/assets/images/pc_index/xl_ico45.png" />
                <span>天天看看</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.le.com/">
                <img src="@/assets/images/pc_index/xl_ico46.png" />
                <span>乐视网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.pptv.com/">
                <img src="@/assets/images/pc_index/xl_ico47.png" />
                <span>PPTV</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.pps.tv/">
                <img src="@/assets/images/pc_index/xl_ico48.png" />
                <span>PPS</span>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://tv.sohu.com/">
                <img src="@/assets/images/pc_index/xl_ico49.png" />
                <span>搜狐视频</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="https://v.qq.com/">
                <img src="@/assets/images/pc_index/xl_ico50.png" />
                <span>腾讯视频</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.tudou.com/">
                <img src="@/assets/images/pc_index/xl_ico51.png" />
                <span>土豆网</span>
              </a>
            </td>
            <td>
              <a target="_blank" href="http://www.baofeng.com/">
                <img src="@/assets/images/pc_index/xl_ico52.png" />
                <span>暴风影音</span>
              </a>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="xl_foot">
        <p>
          Copyright © 2010-2017
          <b class="webname"></b> All Rights Reserved
        </p>
      </div>
    </div>
    <div class="kf1" v-if="isShow1">
      <div class="kf1-1">
        <p>下载手机APP</p>
        <canvas id="app1"></canvas>
      </div>
      <a href="javascript:void(0)" @click="onIsShow1">
        <img src="@/assets/images/pc_index/close.png" />
      </a>
    </div>
    <div class="kf2" v-if="isShow2">
      <div class="kf2-1">
        <p>下载手机APP</p>
        <canvas id="app2"></canvas>
      </div>
      <a href="javascript:void(0)" @click="onIsShow2">
        <img src="@/assets/images/pc_index/close1.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isShow1: true,
      isShow2: true,
      ranNum: [30, 31, 32, 33]
    };
  },
  mounted() {
    this.qrcode();
    this.onRanNum();
  },
  methods: {
    onIsShow1() {
      this.isShow1 = false;
    },
    onIsShow2() {
      this.isShow2 = false;
    },
    qrcode() {
      var QRCode = require("qrcode");
      var canvas = document.getElementById("app1");
      var canvas = document.getElementById("app2");

      QRCode.toCanvas(app1, "sample text", function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
      QRCode.toCanvas(app2, "sample text", function(error) {
        if (error) console.error(error);
        console.log("success!");
      });
    },
    onRanNum() {
      for (let i = 0; i < this.ranNum.length; i++) {
        this.ranNum[i] = parseInt(Math.random() * (200 - 30) + 30);
      }
      this.ranNum.push();
    }
  }
};
</script>

<style lang="less" scoped>
#qrcode {
  display: inline-block;
  img {
    width: 132px;
    height: 132px;
    background-color: #fff; //设置白色背景色
    padding: 6px; // 利用padding的特性，挤出白边
  }
}
.head {
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: relative;
  z-index: 9999;
}
.head div.w1100 {
  width: 1000px;
  margin: 0 auto;
}
.head div.w1100 div.logo {
  float: left;
}
.head div.w1100 ul.nav {
  float: right;
  padding-top: 2px;
}
.head div.w1100 ul.nav li {
  float: left;
  margin-left: 36px;
}
.head div.w1100 ul.nav li a {
  display: block;
  height: 76px;
  line-height: 76px;
  padding: 0 2px;
  color: #555;
  font-size: 16px;
}
.head div.w1100 ul.nav li a:hover,
.head div.w1100 ul.nav li a.on {
  border-bottom: #ff9c00 2px solid;
  color: #555;
}
.banner {
  width: 100%;
  height: 420px;
  overflow: hidden;
  position: relative;
  z-index: 1000;
}
.banner ul.slides {
  width: 100%;
  height: 420px;
}
.banner ul.slides li {
  display: none;
  position: absolute;
  width: 100%;
  height: 420px;
}
.banner ul.pagination {
  float: left;
}
.banner ul.pagination li {
  width: 12px;
  height: 12px;
  float: left;
  margin: 0 5px;
}
.banner ul.pagination li a {
  width: 12px;
  height: 12px;
  text-indent: -99em;
  background: rgba(0, 0, 0, 0.2);
  display: block;
  border-radius: 12px;
}
.banner ul.pagination li a.active {
  background: rgba(0, 0, 0, 0.5);
}
.banner a.prev {
  width: 16px;
  height: 23px;
  // background: url(../img/prev.png) no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -650px;
  margin-top: -8px;
}
.banner a.next {
  width: 16px;
  height: 23px;
  // background: url(../img/next.png) no-repeat;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-right: -650px;
  margin-top: -8px;
}
.lg_box {
  width: 240px;
  height: 294px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 54px;
  margin-left: -500px;
  border-radius: 10px;
  padding: 8px 20px;
}
.lg_box h2 {
  height: 53px;
  border-bottom: #d9d9d9 1px dashed;
  line-height: 53px;
}
.lg_box h2 b {
  color: #ed5d5d;
  font-size: 18px;
}
.lg_box h2 a {
  float: right;
  color: #14a7db;
  // background: url(../img/ico2.png) no-repeat left center;
  padding-left: 28px;
}
.lg_n {
  padding-top: 10px;
}
.lg_n li {
  width: 238px;
  height: 34px;
  background: #fff;
  border-radius: 5px;
  margin-top: 12px;
  position: relative;
}
.lg_n li img {
  float: left;
  margin: 7px 0 0 16px;
}
.lg_n li input {
  border: 0;
  outline: none;
  float: left;
  height: 34px;
  width: 160px;
  padding: 0 10px;
}
.lg_n li a {
  position: absolute;
  line-height: 34px;
  right: 10px;
  top: 0;
  font-size: 12px;
  color: #aaa;
}
.lg_n li a:hover {
  color: #14a7db;
}
.lg_btn {
  margin-top: 20px;
  height: 36px;
}
.lg_btn a {
  width: 115px;
  height: 36px;
  display: block;
  border-radius: 5px;
  text-align: center;
  line-height: 36px;
  color: #fff;
  font-size: 16px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.lg_btn a.dl {
  background: #73c83f;
  float: left;
  box-shadow: 0 2px 3px rgba(255, 178, 0, 0.4);
}
.lg_btn a.zc {
  background: #41b9e2;
  float: right;
  box-shadow: 0 2px 3px rgba(237, 93, 93, 0.4);
}
.lg_btn1 {
  margin-top: 12px;
  height: 36px;
}
.lg_btn1 a {
  width: 240px;
  height: 36px;
  display: block;
  border-radius: 5px;
  text-align: center;
  line-height: 36px;
  color: #fff;
  font-size: 16px;
  background: #ff9c00;
  box-shadow: 0 2px 3px rgba(20, 167, 219, 0.4);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}
.tjcz {
  width: 1040px;
  height: 250px;
  margin-top: 50px;
}
.tjcz li {
  width: 218px;
  height: 250px;
  background: #fffaf3;
  border-radius: 10px;
  float: left;
  margin: 0 20px;
  border: #f4c57a 1px solid;
}
.tjcz li div.img {
  width: 108px;
  height: 108px;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: block;
}
.tjcz li h2 {
  text-align: center;
  font-size: 18px;
  height: 44px;
  color: #555;
  line-height: 42px;
  margin-top: 8px;
}
.tjcz li h2 a {
  color: #666;
}
.tjcz li a.tz {
  width: 125px;
  height: 36px;
  display: block;
  border-radius: 36px;
  background: #ff9c00;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  text-align: center;
  line-height: 36px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-top: 8px;
}
.tjcz li:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.ys {
  width: 100%;
  height: 340px;
  background: #f8f8f8;
  padding: 40px 0;
  margin-top: 50px;
  border-top: #e8e8e8 1px solid;
}
.ys h2 {
  width: 1000px;
  text-align: center;
  font-size: 30px;
  color: #555;
  line-height: 40px;
}
.ys div {
  width: 1000px;
  text-align: center;
  color: #999;
  font-size: 18px;
  line-height: 40px;
  padding-top: 5px;
}
.ys ul {
  width: 1040px;
  height: 180px;
  padding-top: 15px;
}
.ys ul li {
  width: 220px;
  float: left;
  text-align: center;
  margin: 0 20px;
}
.ys ul li img {
  display: block;
  margin: 14px auto 0;
}
.ys ul li h3 {
  font-size: 18px;
  color: #666;
  margin-top: 18px;
  font-weight: 700;
}
.ys ul li p {
  color: #999;
  margin-top: 15px;
  line-height: 26px;
}
.tc {
  width: 100%;
  background: #ff9c00;
  padding: 40px 0;
}
.tc ul {
  width: 1000px;
  height: 60px;
}
.tc ul li {
  width: 306px;
  float: left;
  margin-right: 40px;
  color: #fff;
}
.tc ul li img {
  display: block;
  float: left;
  margin-right: 20px;
}
.tc ul li.mr {
  margin-right: 0;
}
.tc ul li h2 {
  font-size: 18px;
  line-height: 30px;
}
.tc ul li p {
  font-size: 12px;
  margin-top: 6px;
}
.ft {
  width: 100%;
  background: #f8f8f8;
}
.foot {
  width: 1000px;
  text-align: center;
  padding: 30px 0;
  line-height: 30px;
  color: #999;
}
.foot a {
  color: #666;
  margin: 0 15px;
}
.foot img {
  display: block;
  margin: 10px auto 0;
}
.bottom {
  width: 100%;
  height: 60px;
  background: #ed5d5d;
}
.bottom img {
  display: block;
  margin: 0 auto;
}
.zc_banner {
  width: 100%;
  // background: url(../img/zc_banner.jpg) no-repeat center top #f8f8f8;
  padding-top: 186px;
  padding-bottom: 40px;
}
.zc_box {
  width: 940px;
  min-height: 300px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 30px 60px;
}
.zc_box h2 {
  height: 62px;
  border-bottom: #d8d8d8 1px dashed;
  // background: url(../img/ico9.png) no-repeat left center;
  line-height: 62px;
}
.zc_box h2 span {
  float: right;
  color: #666;
}
.zc_box h2 span a {
  color: #ff7e00;
  text-decoration: underline;
}
.zc_box h2 b {
  margin-left: 36px;
  color: #666;
  font-size: 22px;
}
.zc_nr {
  padding-top: 35px;
}
.zc_dl {
  margin-top: 10px;
  height: 40px;
}
.zc_dl dt {
  width: 23%;
  float: left;
  line-height: 40px;
  text-align: right;
  color: #666;
}
.zc_dl dd {
  width: 76%;
  float: right;
}
.zc_dl dd input {
  width: 288px;
  height: 38px;
  background: #fdfdfd;
  border: #e8e8e8 1px solid;
  border-radius: 4px;
  padding: 0 10px;
  outline: none;
  float: left;
}
.zc_dl dd span {
  color: #ed5d5d;
  margin-left: 15px;
  float: left;
  line-height: 40px;
}
.zc_dl dd select {
  float: left;
  margin-right: 10px;
  background: #f8f8f8;
  border: #e8e8e8 1px solid;
  border-radius: 4px;
  height: 40px;
  width: 70px;
  padding-left: 10px;
  outline: none;
  color: #666;
  font-size: 16px;
}
.zc_dl dd select.mar {
  margin-right: 0;
}
.zc_dl dd img {
  float: left;
  margin-left: 15px;
  margin-top: 5px;
}
.zc_dl dd a {
  width: 310px;
  height: 40px;
  display: block;
  background: #ff9c00;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 2px 3px rgba(255, 156, 0, 0.4);
}
.dl_in {
  width: 358px;
  height: 42px;
  border: #e8e8e8 1px solid;
  background: #fdfdfd;
  border-radius: 4px;
  margin-top: 10px;
  position: relative;
}
.dl_in img {
  float: left;
  margin: 11px 0 0 12px;
}
.dl_in input {
  background: 0 0;
  border: none;
  outline: none;
  height: 42px;
  padding: 0 13px;
  width: 295px;
}
.dl_in img.yzm {
  position: absolute;
  right: 11px;
  top: 6px;
  margin-top: 0;
}
.dl_in a {
  position: absolute;
  right: 11px;
  line-height: 42px;
  font-size: 12px;
  color: #999;
}
.dl_tips {
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 360px;
  padding-top: 10px;
  color: #f24747;
}
.dl_a {
  width: 360px;
  margin-top: 20px;
}
.dl_a a {
  display: block;
  width: 360px;
  height: 44px;
  background: #ed5d5d;
  border-radius: 4px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 2px 3px rgba(237, 93, 93, 0.4);
}
.pw_banner {
  width: 100%;
  // background: url(../img/pw_banner.jpg) no-repeat center top #f8f8f8;
  padding-top: 186px;
  padding-bottom: 40px;
}
.dl_banner {
  width: 100%;
  // background: url(../img/dl_banner.jpg) no-repeat center top #faf9ff;
  padding-top: 186px;
  padding-bottom: 40px;
}
.yh_banner {
  width: 100%;
  // background: url(../img/yh_banner.jpg) no-repeat center top #f8f8f8;
  padding-top: 186px;
  padding-bottom: 40px;
}
.ab_banner {
  width: 100%;
  // background: url(../img/ab_banner.jpg) no-repeat center top #faf9ff;
  padding-top: 186px;
  padding-bottom: 40px;
}
.dl_tit {
  height: 62px;
  border-bottom: #d8d8d8 1px dashed;
  line-height: 62px;
}
.dl_tit a {
  width: 120px;
  height: 36px;
  display: block;
  float: left;
  margin-right: 15px;
  text-align: center;
  line-height: 36px;
  border-radius: 36px;
  color: #fff;
  margin-top: 9px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.dl_tit a.zc {
  background: #caa1ea;
  box-shadow: 0 2px 3px rgba(202, 161, 234, 0.4);
}
.dl_tit a.dl {
  background: #ff8585;
  box-shadow: 0 2px 3px rgba(255, 133, 133, 0.4);
}
.dl_con {
  padding-top: 5px;
}
.dl_con h3 {
  font-size: 16px;
  font-weight: 700;
  color: #ed5d5d;
  margin-top: 15px;
  line-height: 36px;
}
.dl_con p {
  line-height: 30px;
  color: #666;
  margin-top: 8px;
}
.dl_con p.fco {
  color: #ed5d5d;
}
.yh_tit {
  height: 62px;
  border-bottom: #d8d8d8 1px solid;
  line-height: 62px;
}
.yh_tit a {
  width: 120px;
  height: 36px;
  display: block;
  float: left;
  margin-right: 15px;
  text-align: center;
  line-height: 36px;
  border-radius: 36px;
  color: #666;
  margin-top: 9px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  background: #f8f8f8;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.yh_tit a:hover,
.yh_tit a.on {
  background: #ffb200;
  box-shadow: 0 2px 3px rgba(255, 178, 0, 0.4);
  color: #fff;
}
.yh_ls li {
  border-bottom: #d8d8d8 1px dashed;
  padding: 15px 0;
}
.yh_ls li h3 {
  font-size: 20px;
  font-weight: 700;
  color: #ed5d5d;
  line-height: 40px;
}
.yh_ls li h3 span {
  width: 28px;
  height: 28px;
  display: inline-block;
  float: left;
  background: #f1a322;
  border-radius: 28px;
  text-align: center;
  line-height: 28px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin: 7px 10px 0 0;
}
.yh_ls li div {
  margin-top: 8px;
}
.yh_ls li div p {
  color: #666;
  line-height: 26px;
  padding: 3px 0;
}
.yh_ls li div p em {
  color: #14a7db;
}
.yh_ls li div table {
  background: #e8e8e8;
  width: 100%;
  color: #666;
}
.yh_ls li div table td {
  background: #fff;
  text-align: center;
  height: 36px;
}
.ab_box {
  width: 1000px;
  min-height: 300px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
}
.ab_left {
  width: 230px;
  float: left;
}
.ab_left li {
  height: 58px;
  border-bottom: #ededed 1px solid;
  line-height: 58px;
}
.ab_left li a {
  height: 58px;
  display: block;
}
.ab_left li a img {
  float: left;
  margin: 17px 16px 0 60px;
}
.ab_left li a:hover,
.ab_left li a.on {
  background: #fcfcfc;
}
.ab_right {
  width: 769px;
  float: right;
  border-left: #e5e5e5 1px solid;
  min-height: 500px;
}
.ab_nr {
  padding: 20px 30px;
}
.ab_nr h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
  border-bottom: #e8e8e8 1px dashed;
  color: #666;
  height: 60px;
}
.ab_nr div {
  margin-top: 20px;
}
.ab_nr div p {
  margin-bottom: 15px;
  color: #666;
  line-height: 30px;
}
.pg_r {
  width: 130px;
  height: 383px;
  background: #f8f8f8;
  border-radius: 8px;
  position: fixed;
  left: 20px;
  z-index: 10000;
  top: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.pg_r a.pg_close {
  width: 26px;
  height: 26px;
  display: block;
  position: absolute;
  right: -10px;
  top: -10px;
  border-radius: 26px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.pg_rt {
  width: 130px;
  height: 60px;
  // background: url(../img/pg_r.png) no-repeat center center #ed5d5d;
  border-radius: 8px 8px 0 0;
}
.pg_r p {
  text-align: center;
  line-height: 30px;
  color: #333;
}
.pg_ewm {
  width: 104px;
  height: 104px;
  margin-top: 12px;
}
.pg_ewm img {
  width: 104px;
  height: 104px;
  display: block;
}
.pg_btn {
  width: 100px;
  margin-top: 10px;
}
.pg_btn a {
  width: 100px;
  height: 26px;
  display: block;
  border-radius: 26px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  margin-top: 5px;
}
.pg_btn a.sa1 {
  background: #ed5d5d;
}
.pg_btn a.sa2 {
  background: #14a7db;
}
.pg_btn a.sa3 {
  background: #ffb200;
}
.pg_btn a.sa4 {
  background: #a66ed4;
}
.pg_btn a.sa5 {
  background: #5cb95a;
}
.xl_nav {
  float: right;
  margin-top: 25px;
}
.xl_nav li {
  float: left;
  height: 30px;
  margin-left: 30px;
}
.xl_nav li a {
  display: block;
  line-height: 30px;
  font-size: 16px;
}
.xl_nav li a img {
  float: left;
  margin-right: 8px;
}
.xl_nav li a:hover {
  color: #ed5d5d;
}
.xl_bo {
  width: 100%;
  background: #f8f8f8;
  padding-top: 20px;
}
.xl_cs {
  width: 1098px;
  border: #e8e8e8 1px solid;
  background: #fff;
  overflow: hidden;
  margin: 16px auto;
}
.xl_cs h2 {
  height: 59px;
  border-bottom: #e8e8e8 1px solid;
  // background: url(../img/xl_ico6.png) no-repeat 20px center;
  line-height: 59px;
}
.xl_cs h2 b {
  font-size: 20px;
  color: #666;
  margin-left: 58px;
}
.xl_cs h2 i {
  font-size: 16px;
  color: #888;
  margin-left: 10px;
}
.xl_cs h2 a {
  float: right;
  height: 31px;
  background: #ed5d5d;
  border-radius: 31px;
  color: #fff;
  line-height: 31px;
  padding: 0 20px;
  margin-top: 14px;
  font-size: 16px;
  margin-right: 20px;
}
.xl_cs ul {
  width: 1068px;
  padding: 10px 0 20px;
}
.xl_cs ul li {
  width: 504px;
  height: 42px;
  float: left;
  margin: 10px 15px;
  overflow: hidden;
}
.xl_cs ul li span.tp1 {
  float: left;
  display: inline-block;
  background: #f8f8f8;
  height: 40px;
  line-height: 40px;
  border: #e8e8e8 1px solid;
  width: 98px;
  text-align: center;
  color: #666;
  border-radius: 20px 0 0 20px;
}
.xl_cs ul li span.tp2 {
  line-height: 40px;
  display: inline-block;
  float: left;
  padding-left: 20px;
  color: #888;
  width: 284px;
  border-top: #e8e8e8 1px solid;
  border-bottom: #e8e8e8 1px solid;
}
.xl_cs ul li span.tp2 em {
  margin-left: 20px;
  color: #5dad53;
}
.xl_cs ul li a {
  float: right;
  display: block;
  line-height: 40px;
  border: #f4caca 1px solid;
  background: #fff6f6;
  width: 98px;
  text-align: center;
  color: #ed5d5d;
  border-radius: 0 20px 20px 0;
}
.xl_cs ul li a:hover {
  background: #ed5d5d;
  color: #fff;
  border: #ed5d5d 1px solid;
}
.xl_dl {
  width: 1100px;
  margin-top: 20px;
  margin: 10px auto;
}
.xl_dl table {
  width: 100%;
  background: #e8e8e8;
}
.xl_dl table td {
  height: 64px;
  background: #fdfdfd;
  text-align: center;
  width: 154px;
}
.xl_dl table td.white {
  background: #fff;
  width: 170px;
}
.xl_dl table td.white p {
  margin-top: 6px;
  color: #666;
  font-size: 16px;
}
.xl_dl table td a {
  display: block;
  line-height: 64px;
  color: #5dad53;
  height: 64px;
}
.xl_dl table td a:hover {
  background: #fff;
}
.xl_dl table td a img {
  margin-right: 8px;
  float: left;
  margin-left: 20px;
  margin-top: 22px;
}
.xl_dl table td a span {
  display: inline-block;
  line-height: 64px;
  font-size: 16px;
  float: left;
  color: #666;
}
.xl_foot {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-top: #ed5d5d 2px solid;
  background: #fff;
  margin-top: 30px;
}
.xl_foot p {
  width: 1100px;
  text-align: center;
  color: #666;
  margin: 0 auto;
}
.kf1 {
  position: fixed;
  left: 0;
  top: 200px;
  text-align: center;
}
.kf1-1 {
  border: 1px solid #d41b11;
  text-align: center;
  padding-top: 10px;
  background-color: #fff;
}
.kf2-1 {
  background-color: #fff;
}
.kf2 {
  position: fixed;
  right: 0;
  top: 200px;
  text-align: center;
}
.kf2-1 {
  border: 1px solid #d41b11;
  text-align: center;
  width: 125px;
  background-color: #fff;
  // background: url(../images/fbg.png?v=2);
}
.kf2-1 .t {
  position: relative;
}
.kf2-1 .t .t0 {
  display: block;
  width: 100%;
  height: 96px;
}
.kf2-1 .t .t1 {
  font-size: 22px;
  color: #fff;
  padding-top: 42px;
  font-family: impact;
}
.kf2-1 .t .t1 a {
  color: #fff;
}
.kf2-1 .t .t2 {
  font-size: 22px;
  color: #fff;
  padding-top: 45px;
  font-family: impact;
}
.kf2-1 .t .t2 a {
  color: #fff;
}
.kf2-1 .t .t3 {
  font-size: 18px;
  color: #fff;
  padding-top: 48px;
  font-family: impact;
}
.home {
  text-align: center;
}
</style>