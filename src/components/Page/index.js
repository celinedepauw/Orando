import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from 'src/containers/Home';
import Walk from 'src/containers/Walk';

const Page = () => (
  <div className="page">
    <Switch>
      <Route path="/walks/:id">
        <Walk />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Page;
