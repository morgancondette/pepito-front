import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Pages
import HomePage from 'pages/home-page';
import GalleryPage from 'pages/gallery-page';

export default hot(module)(() => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/gallery" component={GalleryPage} />
    </Switch>
  </BrowserRouter>
));
