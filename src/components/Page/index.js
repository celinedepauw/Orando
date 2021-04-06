import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Home2 from 'src/containers/Home2';
import Walk from 'src/containers/Walk';
import Area from 'src/containers/Area';
import Account from 'src/components/Account';
import Profile from 'src/containers/Profile';
import WalksToCome from 'src/containers/WalksToCome';
import MyHikes from 'src/containers/MyHikes';
import Authentification from 'src/containers/Authentification';
import AboutUs from 'src/components/AboutUs';
import Archived from 'src/containers/Archived';
import Participants from 'src/containers/Participants';
import Error from 'src/components/Error';

const Page = () => (
  <div className="page">
    <Switch>
      <Route path="/participants/walks/:id">
        <Participants />
      </Route>
      <Route path="/walks/:id">
        <Walk />
      </Route>
      <Route path="/areas/:id">
        <Area />
      </Route>
      <Route path="/authentication">
        <Authentification />
      </Route>
      <Route path="/archived_walks">
        <Archived />
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
      <Route exact path="/">
        <Home2 />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

export default Page;
