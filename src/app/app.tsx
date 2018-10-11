import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

// Pages
import HomePage from 'pages/home-page';

export default hot(module)(() => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
));
