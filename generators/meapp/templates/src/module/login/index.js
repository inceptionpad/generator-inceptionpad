const $ = require('jquery');
const PubSub = require('pubsub-js');
const Log = require('../../component/log/index');
const Counter = require('../../component/counter/index');
const React = require('react');
const ReactDom = require('react-dom');

$(function() {
  let $wrap = $('#mod-login');
  bindEvent($wrap);
  initCounter({value: 666}, $wrap.find('.j_counter')[0]);
});

// 绑定模块内事件，单独抽离成函数，职责分明
function bindEvent($wrap) {
  $wrap.find('#j_login').on('click', (e) => {
    e.preventDefault();
    Log('login submit');
    let email = $wrap.find('[type="email"]').val();
    PubSub.publish('loginAction', email);
    $wrap.find('[type="email"]').val('');
    $wrap.find('[type="password"]').val('');
  });
}

// 初始化counter，单独抽离成函数，职责分明
function initCounter(data, container) {
  ReactDom.render(<Counter {...data}/>, container);
}
