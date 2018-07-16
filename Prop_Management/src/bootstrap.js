import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Signin}/>
          <Route path='/signup' component={Signup}/>
          </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
