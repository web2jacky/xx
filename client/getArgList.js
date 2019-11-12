// 获取参数列表
module.exports = function getArgList() {
  let list = process.argv.slice(2);
  return list.reduce((a, b) => {
    let all = b.split('=');
    let key = all.splice(0, 1);
    let v = all.length > 1 ? all.join('=') : all.join('');
    a[key] = v;
    return a;
  }, {});
};
