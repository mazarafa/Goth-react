import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page2 from './Page2';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/Page2" component={Page2} />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));
// registerServiceWorker();