import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { TodoApp } from '../containers/TodoApp';
import { SortTodosSelect } from '../containers/SortTodosSelect';

export const App = () => (
  <Provider store={store}>
    <SortTodosSelect />
    <TodoApp />
  </Provider>
);
