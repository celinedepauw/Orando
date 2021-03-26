import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home2 from 'src/containers/Home2';
import Walk from 'src/containers/Walk';
import Account from 'src/components/Account';
import Profile from 'src/containers/Profile';
import WalksToCome from 'src/containers/WalksToCome';

const Page = () => (
  <div className="page">
    <Switch>
      <Route path="/walks/:id">
        <Walk />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/incoming_walks">
        <WalksToCome />
      </Route>
      <Route path="/">
        <Home2 />
      </Route>
    </Switch>
  </div>
);

export default Page;
