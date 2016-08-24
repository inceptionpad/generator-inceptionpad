import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import App from './page/app'
import Home from './page/home'
import List from './page/list'
import Detail from './page/detail'
import './index.less';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/list" component={List}/>
      <Route path="/detail/:title" component={Detail}/>
      <IndexRedirect to="/home" />
    </Route>
  </Router>
), document.getElementById('app'))
