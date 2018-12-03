import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from "history/createMemoryHistory";


import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createHistory({ forceRefresh: true });

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.push('/links');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.push('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
    const pathName = history.location.pathname;

    window.bh = history;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);

    if (isUnauthenticatedPage && isAuthenticated) {
        history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.push('/');
    }
}

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/login" exact component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);