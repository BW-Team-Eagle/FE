import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import InGamePage from './pages/in-game';
import Layout from './components/layout/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/game'>
            <InGamePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
