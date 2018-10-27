import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Pages
import HomePage from 'pages/home-page';

export default hot(module)(() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:name" component={HomePage} />
    </Switch>
  </BrowserRouter>
));
