import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import InGamePage from './pages/in-game';
import Layout from './components/layout/layout';

const App = props => {
  console.log('app props', props);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact render={props => <LandingPage {...props} />} />
          <Route
            path='/register'
            render={props => <RegisterPage {...props} />}
          />
          <Route path='/login' render={props => <LoginPage {...props} />} />
          <Route path='/game' render={props => <InGamePage {...props} />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
