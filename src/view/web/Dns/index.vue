<template>
  <div class="dns">
    <div id="header" class="head">
      <div class="h_cont">
        <div class="logo">
          <a href="/">
            <img height="80px" src="@/assets/images/pc_dns/logo.png" />
          </a>
        </div>
        <div class="nav">
          <ul>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="/">线路检测</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('mainDiv')">修改路由</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('win10')">win10</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('win8')">win8/win8.1</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('win7')">win7</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('winxp')">winXP</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('dnsios')">苹果手机</a>
            </li>
            <li>
              <img src="@/assets/images/pc_dns/xl_ico3.png" />
              <a href="javascript:void(0)" @click="showChild('android')">安卓手机</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main" class="xl_bo">
      <div class="mainDiv" v-show="showChildFlag=='mainDiv'?true:false">
        <div id="tabs-3">
          <h1>手动修复路由器DNS教程</h1>
          <p>要怎么样手动修复路由器中DNS的地址？</p>
          <p>近日很多用户电脑遇到网络被劫持，要怎么办？</p>
          <p>
            今天天使就和大家一起以TP-Link路由器为例子，一步一步教大家如何手动修改路由器的DNS地址：
            <br />首先打开浏览器，在地址栏中输入：192.168.1.1 [如图]，然后按回车键确认打开。
            <br />
            <br />
            <img src="@/assets/images/pc_dns/L1.png" />
            <br />
            <br />
            <br />
            <br />
            <br />接下来在弹出的对话框中输入您路由器的用户名和密码，点击“确定”[如图]
            <br />
            <br />
            <img src="@/assets/images/pc_dns/L2.jpg" />
            <br />
            <br />
            <br />
            <br />
            <br />进入路由器设置界面后，然后我们再点击左侧“网络参数”展开更多设置，之后即可看到“WAN口设置”选项了，我们再点击左侧的WAN口设置，在WAN口设置界面底部还有一个“高级设置”入口，我们点击进入即可进入到路由器DNS设置界面了，如下图：
            <br />
            <br />
            <img src="@/assets/images/pc_dns/L3.jpg" />
            <br />
            <br />
            <img src="@/assets/images/pc_dns/L4.jpg" />
            <br />
            <br />
            <br />
            <br />最后，我们只需要勾选上“手动设置DNS服务器”，然后填写DNS服务器为8.8.8.8，备用DNS服务器为8.8.4.4，完成后点击底部的保存按钮即可[如图]。
            <br />
            <br />
            <img src="@/assets/images/pc_dns/L5.jpg" />
            <br />
          </p>
        </div>
      </div>
      <div class="win10" v-show="showChildFlag=='win10'?true:false">
        <h1>手工修复win10系统dns教程</h1>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-001.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-002.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-003.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-004.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-005.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-006.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows10-007.png" />
        </div>
        <div class="top"></div>
      </div>
      <div class="win8" v-show="showChildFlag=='win8'?true:false">
        <h1>手动修复windows 8.1 系统dns教程</h1>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_003.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_002.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_008.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_006.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_005.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_007.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows8_004.png" />
        </div>
        <div class="top"></div>
      </div>
      <div class="win7" v-show="showChildFlag=='win7'?true:false">
        <h1>手工修复win7系统dns教程</h1>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-001.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-002.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-003.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-004.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-005.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-006.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windows7-007.png" />
        </div>
        <div class="top"></div>
      </div>
      <div class="winxp" v-show="showChildFlag=='winxp'?true:false">
        <h1>手工修复windows XP系统dns教程</h1>
        <div>
          <img src="@/assets/images/pc_dns/dns-windowsXP-001.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windowsXP-002.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windowsXP-003.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windowsXP-004.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-windowsXP-005.png" />
        </div>
        <div class="top"></div>
      </div>
      <div class="dnsios" v-show="showChildFlag=='dnsios'?true:false">
        <h1>手动修复iOS苹果手机DNS教程</h1>
        <div>
          <p>
            当你在 iOS 设备的浏览器中输入某个网站地址时，设备将执行 DNS 查找操作来跳转至正确的网站。DNS 服务器负责处理该查找服务，它可以将数字 IP 地址转换成我们都熟悉的域名。虽然大多数互联网服务商会提供自己的
            DNS 服务器，但实话说，它们的速度并不敢恭维。因此你可以通过手动更改自己设备的 DNS 设置，来加快你访问网站的速度。今天我们来谈谈如何直接在 iOS
            设备上更改设置 DNS 。
          </p>
        </div>
        <div>
          <div>＃你必须连接到 Wi-Fi 网络，才可以更改设备的 DNS 设置。</div>
          <img src="@/assets/images/pc_dns/dns-ios-001.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-ios-002.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-ios-003.png" />
        </div>
        <div>
          <img src="@/assets/images/pc_dns/dns-ios-004.png" />
        </div>
        <div class="top"></div>
      </div>
      <div class="android" v-show="showChildFlag=='android'?true:false">
        <h1>手动修复安卓手机DNS教程</h1>
        <div class="content">
          <p>有的时候Android手机或平板电脑需要修改DNS服务器能正常上网，以及一些自己开发的应该需要在局域或者外网服务器有相同域名的解析问题，我们为了能正确访问服务器的域名就要修改DNS服务器地址。</p>
          <div>
            <img src="@/assets/images/pc_dns/dns-android-001.png" />
          </div>
          <div>
            <img src="@/assets/images/pc_dns/dns-android-002.png" />
          </div>
          <div>
            <img src="@/assets/images/pc_dns/dns-android-003.png" />
          </div>
          <div>
            <img src="@/assets/images/pc_dns/dns-android-004.png" />
          </div>
          <div>
            <img src="@/assets/images/pc_dns/dns-android-005.png" />
          </div>
          <div class="top"></div>
        </div>
      </div>
      <div id="footer">
        <p>Copyright © 2010-2017 幸运彩票 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dns",
  data() {
    return {
      showChildFlag: "mainDiv"
    };
  },
  created() {},
  methods: {
    showChild(val) {
      this.showChildFlag = val;
    }
  }
};
</script>

<style lang="less" scoped>
#header {
  // background-image: url(../img/nav_bg.jpg);
  box-shadow: 0px -24px 14px 21px black;
  height: 105px;
  width: 100%;
}

#header .h_cont {
  width: 80%;
  margin: 0 auto;
  height: 80px;
}

#header .h_cont .logo {
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}

#header .h_cont .nav {
  margin-left: 10px;
}

#header .h_cont .nav ul li {
  float: left;
  margin-top: 33px;
  height: 40px;
  width: auto;
  margin-left: 25px;
  display: block;
  line-height: 40px;
  text-align: right;
  position: relative;
}

#header .h_cont .nav ul li img {
  margin: 5px 5px 0 0;
  position: absolute;
  left: 0;
  top: 0;
}

#header .h_cont .nav ul li a {
  font: 14px 微软雅黑;
  color: #666;
  margin-left: 35px;
}

#header .h_cont .nav ul li a:hover {
  color: #ed5d5d;
  text-decoration: underline;
}

#main {
  width: 80%;
  margin: 20px auto;
  height: auto;
  clear: both;
  background: #f8f8f8;
}

h1 {
  font-size: 30px !important;
  font-weight: bolder !important;
  display: block;
  padding: 12px auto 24px;
  border-bottom: 1px solid #ccc;
}

p,
.content {
  line-height: 300%;
  font-size: 16px;
}

#footer {
  border-top: 2px solid #ddd;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  clear: both;
  padding: 30px 0 50px;
}

.hidden {
  display: none;
}
.show {
  display: block;
}
</style>