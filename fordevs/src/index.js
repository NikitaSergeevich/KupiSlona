import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import Building from './Building';
import '../css/App.css'

const history = createBrowserHistory();

ReactDOM.render(
  <div>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/status" component={Building}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

export default history;
