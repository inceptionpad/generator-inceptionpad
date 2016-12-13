const $ = require('jquery');
require('bootstrap/js/tooltip');
const PubSub = require('pubsub-js');
const Log = require('../../component/log/index');
const Counter = require('../../component/counter/index');
const React = require('react');
const ReactDom = require('react-dom');

$(function() {
  let $wrap = $('#mod-article');
  bindEvent($wrap);
  initCounter({value: 777}, $wrap.find('.j_counter')[0]);
});

// 绑定模块内事件，单独抽离成函数，职责分明
function bindEvent($wrap) {
  $wrap.find('[data-toggle="tooltip"]').tooltip();
  PubSub.subscribe('loginAction', (msg, data) => {
    Log(data);
    let $el = $wrap.find('#j_printLogin');
    $el.append('<p>' + data + '</p>');
  });
}

// 初始化counter，单独抽离成函数，职责分明
function initCounter(data, container) {
  ReactDom.render(<Counter {...data}/>, container);
}
