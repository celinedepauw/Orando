import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Home2 from 'src/containers/Home2';
import Walk from 'src/containers/Walk';
import Area from 'src/containers/Area';
import Account from 'src/containers/Account';
import Profile from 'src/containers/Profile';
import WalksToCome from 'src/containers/WalksToCome';
import MyHikes from 'src/containers/MyHikes';
import Authentication from 'src/containers/Authentication';
import AboutUs from 'src/components/AboutUs';
import Archived from 'src/containers/Archived';
import Participants from 'src/containers/Participants';
import CreateWalk from 'src/containers/CreateWalk';
import Error from 'src/components/Error';
import HowOrandoWorks from 'src/components/HowOrandoWorks';
import SignUp from 'src/containers/SignUp';
import EditWalk from 'src/components/EditWalk';

const Page = () => (
  <div className="page">
    <Switch>
      <Route exact path="/participants/walks/:id">
        <Participants />
      </Route>
      <Route exact path="/walks/:id">
        <Walk />
      </Route>
      <Route exact path="/areas/:id">
        <Area />
      </Route>
      <Route exact path="/register">
        <SignUp />
      </Route>
      <Route exact path="/authentication">
        <Authentication />
      </Route>
      <Route exact path="/archived_walks">
        <Archived />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/incoming_walks">
        <WalksToCome />
      </Route>
      <Route exact path="/my_hikes/:id">
        <MyHikes />
      </Route>
      <Route exact path="/my_hikes/">
        <MyHikes />
      </Route>
      <Route exact path="/create">
        <CreateWalk />
      </Route>
      <Route exact path="/edit">
        <EditWalk />
      </Route>
      <Route exact path="/how_works">
        <HowOrandoWorks />
      </Route>
      <Route exact path="/about_us">
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
