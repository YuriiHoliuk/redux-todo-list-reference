import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from '../store';
import { TodoApp } from '../containers/TodoApp';
import { Home } from '../components/Home';

export const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/todos" component={TodoApp} exact />
        <Route path="/todos/:id" component={TodoApp} exact />
      </Switch>
    </Router>
  </Provider>
);
