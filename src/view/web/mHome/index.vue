<template>
  <div class="mHome">
    <header class="navbar">
      <button type="button" class="navbar-menu" id="nav" @click="onShowNav">
        <img src="@/assets/images/m_index/phonenav.png" />
      </button>
      <div class="logo">
        <img src="@/assets/images/m_index/logo.png" />
      </div>
      <a class="navbar-home">
        <img src="@/assets/images/m_index/homeicon.png" />
      </a>
    </header>
    <nav class="nav" :class="{ 'nav-opened': showNav }" id="nav">
      <div class="nav-inner">
        <button class="nav-close" id="nav-close" @click="onShowNav"></button>
        <ul class="nav-list">
          <li>
            <a class="guanwang">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</a>
          </li>
          <li>
            <a class="webname guanwang"></a>
          </li>
          <li>
            <a class="guanwang">会员注册</a>
          </li>
          <li>
            <a class="guanwang">免费试玩</a>
          </li>
          <li>
            <a class="kaijiangwang">开奖直播</a>
          </li>
          <li>
            <a class="support">客服中心</a>
          </li>
          <li>
            <router-link to="/Dns">DNS修改教程</router-link>
          </li>
          <li>
            <a class="applink">APP下载</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="scroll-down animated">
      <img src="@/assets/images/m_index/gobottom.png" alt />
    </div>
    <full-page :options="options" id="fullpage">
      <div class="section section1">
        <div class="fpsi11 animated">
          <img src="@/assets/images/m_index/page_1_text_1.png" alt />
        </div>
        <div class="fpsi12 animated">
          <img src="@/assets/images/m_index/page_1_text_2.png" alt />
        </div>
        <div class="fpsi13 animated">
          <img src="@/assets/images/m_index/page_1_text_3.png" alt />
        </div>
        <div class="fpsi14 animated">
          <img src="@/assets/images/m_index/bingo.png" alt />
        </div>
      </div>
      <div class="section section2">
        <div class="fpsi21 imgauto animated">
          <img src="@/assets/images/m_index/page_2_text_1.png" alt />
        </div>
        <div class="fpsi22 imgauto animated">
          <img src="@/assets/images/m_index/page_2_text_2.png" alt />
        </div>
        <div class="fpsi24 imgauto animated">
          <img src="@/assets/images/m_index/page_2_text_4.png" alt />
        </div>
        <div class="fpsi23 imgauto animated">
          <img src="@/assets/images/m_index/page_2_text_3.png" alt />
        </div>
      </div>
      <div class="section section3">
        <div class="fpsi31 imgauto animated">
          <img src="@/assets/images/m_index/page_3_text_1.png" alt />
        </div>
        <div class="fpsi32 imgauto animated">
          <img src="@/assets/images/m_index/page_3_text_2.png" alt />
        </div>
        <div class="fpsi33 imgauto animated">
          <img src="@/assets/images/m_index/page_3_text_3.png" alt />
        </div>
        <div class="fpsi35 imgauto animated">
          <img src="@/assets/images/m_index/page_3_text_4.png" alt />
        </div>
        <div class="ballbox">
          <div class="fpsi34 imgauto animated">
            <img src="@/assets/images/m_index/ball.png" class="animated pulse infinite" alt />
          </div>
          <ul class="scan-code animated">
            <li class="fpsa scan-iphone">
              <div class="downtitle">
                <img src="@/assets/images/m_index/downtitle.png" alt />
              </div>
              <a class="applink">
                <img src="@/assets/images/m_index/code.png" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </full-page>
    <footer class="footer">
      <div class="link-list">
        <dl id="linelist">
          <dt>
            <img src="@/assets/images/m_index/footer1.png" alt />
          </dt>
          <dd v-for="num in ranNum" :key="num">
            <a>
              <span class="line">线路1</span>
              <span class="time">
                <em>{{num}} ms</em>
              </span>
            </a>
          </dd>
        </dl>
      </div>

      <div class="copyright">CopyRight ©2019 幸运彩票</div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "mHome",
  data() {
    return {
      ranNum: [30, 31, 32, 33],
      showNav: false,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        beforeChange: function(prev, next) {
          console.log(1);
        },
        afterChange: function(prev, next) {
          console.log(1);
        }
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
      }
    };
  },
  created() {
    this.onRanNum();
  },
  methods: {
    onShowNav() {
      this.showNav = !this.showNav;
    },
    onRanNum() {
      for (let i = 0; i < this.ranNum.length; i++) {
        this.ranNum[i] = parseInt(Math.random() * (200 - 30) + 30);
      }
      this.ranNum.push();
    },
    afterLoad(anchorLink, afel) {
      if (afel.index == 0) {
        $(".fpsi11")
          .addClass("bounceInDown")
          .one("animationend", function() {
            $(this)
              .removeClass("bounceInDown")
              .addClass("infinite pulse delay-500ms");
          });
        $(".fpsi12").addClass("bounceInLeft delay-200ms");
        $(".fpsi13").addClass("bounceInRight delay-300ms");
        $(".fpsi14").addClass("bounceInUp delay-500ms");
      } else if (afel.index == 1) {
        $(".fpsi21").addClass("zoomInDown delay-200ms");
        //$('.fpsi22').addClass('zoomInLeft delay-400ms');
        $(".fpsi23").addClass("zoomInUp delay-600ms");
        $(".fpsi24").addClass("zoomInRight delay-300ms");
        $(".fpsi22")
          .addClass("zoomInLeft")
          .one("animationend", function() {
            $(this)
              .removeClass("zoomInLeft")
              .addClass("infinite jello delay-500ms");
          });
      } else if (afel.index == 2) {
        $(".fpsi31")
          .addClass("bounce")
          .one("animationend", function() {
            $(this)
              .removeClass("bounceInDown")
              .addClass("infinite pulse delay-500ms");
          });
        $(".fpsi32").addClass("bounceInLeft delay-200ms");
        $(".fpsi33").addClass("bounceInRight delay-500ms");
        $(".fpsi35").addClass("zoomInDown delay-600ms");
        $(".scan-code")
          .addClass("slideInUp faster delay-1s")
          .one("animationend", function() {
            $(".scan-code").addClass("scan-normal");
          });
        $(".scan-android").addClass("slideInRight faster delay-1s");
      }
      if (afel.index == 0) {
        $(".fpsi11").removeClass("infinite pulse delay-500ms");
      } else if (afel.index == 1) {
        $(".fpsi22").removeClass("infinite pulse delay-500ms");
      } else if (afel.index == 2) {
        $(".scan-code").removeClass("scan-normal");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.navbar,
.copyright,
.link-list dt {
  background-image: -webkit-linear-gradient(top, #fff, #7341c9);
  background-image: linear-gradient(to bottom, #fff, #7341c9);
}

.navbar {
  top: 0;
  background: #fff;
  height: 47px;
  border-bottom: 1px solid #54428d;
  width: 100%;
  position: relative;
  top: 0;
  z-index: 10;
}

.navbar .logo {
  padding-top: 6px;
  text-align: center;
}

.navbar .logo img {
  height: 35px;
  vertical-align: top;
}

.navbar-menu,
.navbar-home {
  position: absolute;
  width: 32px;
  background-repeat: no-repeat;
  background-size: contain;
}

.navbar-menu img,
.navbar-home img {
  width: 100%;
}

.navbar-menu {
  left: 16px;
  top: 12px;
}

.navbar-home {
  right: 16px;
  top: 8px;
}

.footer,
.download {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.copyright {
  line-height: 35px;
  font-size: 1.3rem;
  text-align: center;
  color: #fff;
}

.nav,
.mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
}

.nav {
  z-index: 1999;
  left: -100%;
  transition: 0.5s ease-in-out;
}

.nav-opened {
  left: 0;
}

.nav-inner {
  position: relative;
  width: 45%;
  height: 100%;
  overflow: auto;
  background-color: #3f65d0;
}

.nav-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: url(../../../assets/images/m_index/icon_close.png) no-repeat;
  background-size: contain;
}

.nav-list {
  margin-top: 10px;
  text-align: center;
}

.nav-list li {
  line-height: 3;
  // font-size: 1.7rem;
}

.nav-list a {
  color: #fff;
}

.nav-list a:active,
.link-list a:active {
  color: #ff2960;
}

.link-list::after {
  content: "";
  display: none;
  z-index: 1998;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.link-list {
  overflow: hidden;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
}

.link-list dl {
  height: 52px;
  margin-top: 10px;
  overflow: hidden;
}

.link-list dl.addlinks a {
  letter-spacing: 2px;
}

.link-list dl.addlinks a .line {
  font-size: 13px;
  padding-bottom: 2px;
}

.link-list dt,
.link-list dd {
  float: left;
  height: 50px;
  border-radius: 5px;
}

.link-list dt {
  width: 50px;
  padding-top: 6px;
  padding-bottom: 7px;
  font-size: 1.4rem;
  line-height: 1.25;
  color: #3f65d0;
  text-shadow: 1px 1px 0 #fff;
}

.link-list dt img {
  width: 70%;
}

.link-list dd {
  width: calc((100% - 90px) / 4);
  margin-left: 10px;
  font-size: 1.2rem;
  background-color: #fff;
}

.link-list a,
.link-list a span {
  display: block;
}

.link-list a {
  padding: 5px 0;
  color: #333;
}

.link-list a .line {
  margin-bottom: 2px;
  border-bottom: 1px solid #d9dbf4;
  line-height: 20px;
  font-size: 1rem;
  white-space: nowrap;
}

.link-list a .time {
  line-height: 1.25;
  font-size: 1.4rem;
  margin-top: -0.4rem;
}

.link-list a .time em {
  font-style: normal;
  font-size: 13px;
}

.link-list a .time b {
  font-weight: 400;
  font-size: 13px;
}

#fullpage .section {
  overflow: hidden;
  // padding-top: 95px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.fpsi11,
.fpsi21,
.fpsi31 {
  padding-top: 95px !important;
}
#fullpage .section1 {
  background-image: url(../../../assets/images/m_index/page1.png);
}

#fullpage .section2 {
  background-image: url(../../../assets/images/m_index/page2.png);
}

#fullpage .section3 {
  background-image: url(../../../assets/images/m_index/page3.png);
}

.imgauto img {
  width: 100%;
}
.fpsi11,
.fpsi12,
.fpsi13,
.fpsi14 {
  text-align: center;
}
.fpsi11 {
  width: 54.5%;
  margin: 0 auto;
}

.fpsi12 {
  width: 77%;
  margin: 3% auto;
}

.fpsi13,
.fpsi23 {
  width: 81%;
  margin: 0 auto;
}

.fpsi14 {
  width: 66%;
  margin: 1% auto;
}

.fpsi21 {
  width: 40%;
  margin: 3% auto;
}

.fpsi22 {
  width: 91.2%;
  margin: 3% auto;
}

.fpsi24 {
  width: 82.8%;
  margin: 2% auto;
}

.fpsi31 {
  width: 68.4%;
  margin: 0 auto;
}

.fpsi32 {
  width: 77.86%;
  margin: 3% auto;
}

.fpsi33 {
  width: 57%;
  margin: 0 auto;
}

.fpsi35 {
  width: 81.6%;
  margin: 2% auto;
}

.fpsi34 {
  width: 77.86%;
  margin-left: 13%;
}

.ballbox {
  position: relative;
}

.scan-code {
  margin-top: 10px;
  width: 40%;
  background: #fff;
  position: absolute;
  left: 30%;
  top: 0;
  transition: padding-left 0.5s, padding-right 0.5s;
}

.scan-code li {
  text-align: center;
}

.scan-code li .downtitle {
  background: #f81a6b;
  padding: 10px;
}

.scan-code li .downtitle img {
  width: 74%;
}

.scan-code a {
  display: block;
  padding: 10px;
}

.scan-code img {
  width: 100%;
}

.scroll-down {
  position: absolute;
  z-index: 1995;
  right: 15px;
  bottom: 180px;
  width: 13%;
  overflow: hidden;
  background-size: contain;
  -webkit-animation: hotAni ease 0.8s both infinite;
  animation: hotAni ease 0.8s both infinite;
}

.animated.delay-500ms {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

.download {
  padding: 0 2.2%;
  background: #fff;
  height: 35px;
  box-sizing: border-box;
  position: relative;
  position: absolute;
  left: 0;
  width: 100%;
}

.downloadlf {
  float: left;
}

.downloadlf img {
  width: 25px;
  margin-top: 5px;
  margin-left: 4px;
}

.downloadct {
  margin-left: 2%;
  float: left;
}

.downloadct h4 {
  line-height: 35px;
  font-size: 12px;
}

.downloadrt {
  padding-top: 5px;
  float: right;
}

.downloadrt a {
  background: #3ab733;
  color: #fff;
  border-radius: 8px;
  padding: 3px 10px;
  font-size: 16px;
  margin-right: 20px;
}

.closeapp {
  position: absolute;
  height: 25px;
  width: 25px;
  right: 2px;
  bottom: 15px;
  font-size: 1.2em;
  z-index: 10000;
}

.hot {
  display: block;
  position: absolute;
  top: -20px !important;
  right: 1px;
  width: 30%;
  -webkit-animation: hotAni2 ease 1s both infinite;
  animation: hotAni2 ease 1s both infinite;
}

@media screen and (min-width: 374px) {
  .scan-code {
    top: 0%;
  }

  .fpsi34 {
    padding-top: 30%;
  }
}

@media screen and (max-width: 321px) {
  #fullpage .section {
    padding-top: 75px;
  }
}

@-webkit-keyframes hotAni {
  50% {
    bottom: 170px;
  }
}

@keyframes hotAni {
  50% {
    bottom: 170px;
  }
}

@-webkit-keyframes hotAni2 {
  50% {
    top: -10px;
  }
}

@keyframes hotAni2 {
  50% {
    top: -10px;
  }
}
</style>