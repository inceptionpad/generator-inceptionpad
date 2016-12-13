require('./index.less');
// https://npm.taobao.org/package/refetch
const Refetch = require('refetch');
const $ = require('jquery');
let Tpl = require('./index.html');

$(function() {
  let $wrap = $('#mod-user');
  getUserInfo($wrap);
  bindEvent($wrap);
});

// 异步fetch数据并使用前端模板渲染
function getUserInfo($wrap) {
  Refetch['jsonp']('https://api.github.com/users/Lingyucoder').then((response, xhr) => {
    $wrap.html(Tpl(response.data));
  });
}

// 使用delegate进行事件绑定，这样重新refresh dom时进不需要重新绑定事件了
function bindEvent($wrap) {
  $wrap.delegate('.j_search', 'click', (e) => {
    let company = $(e.currentTarget).html();
    window.open(`https://www.baidu.com/s?wd=${company}`);
  });
}
