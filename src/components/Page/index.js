import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from 'src/containers/Home';
import Walk from 'src/containers/Walk';
import Account from 'src/components/Account';
import Profile from 'src/containers/Profile';
import WalksToCome from 'src/containers/WalksToCome';
import MyHikes from 'src/containers/MyHikes';
import AboutUs from 'src/components/AboutUs';

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
      <Route path="/my_hikes">
        <MyHikes />
      </Route>
      <Route path="/about_us">
        <AboutUs />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Page;
