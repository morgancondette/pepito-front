import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

// Pages
import Home from './pages/home';

export default hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
));
