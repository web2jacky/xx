const fs = require('fs');
const path = require('path');

const argList = require('./getArgList')();

const apiHost = argList.apiHost || 'http://172.30.44.85:8080/';
const cdnUrl = argList.cdnUrl || 'https://bjtzeshop.com/';

module.exports = {
  setAll: function() {
    console.log('开始构建setting配置');
    this.setSetting();
  },
  setSetting: function() {
    let val = `// 前端开关配置，勿修改!!!由client/index根据客户参数自动生成!!!\n\n`;
    val += `export default  {\n`;
    val += `apiHost:'${apiHost}',\n`;
    val += `cdnUrl:'${cdnUrl}',\n}`;

    fs.writeFileSync(path.resolve(__dirname, '../src/settings.js'), val);
  }
};
