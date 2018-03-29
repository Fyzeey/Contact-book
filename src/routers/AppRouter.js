import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddPage from '../components/AddPage';
import Dashboard from "../components/Dashboard";
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/create" component={AddPage} />
        <Route component={NotFoundPage} />
      </Switch>  
    </div>
  </BrowserRouter>
);

export default AppRouter;