import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  NotFound,
  Private,
  Home,
  Public,
  Login
} from './views'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={Private}>
        <IndexRoute component={Home} />
      </Route>
      <Route component={Public}>
        <Route path="login" component={Login} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)
