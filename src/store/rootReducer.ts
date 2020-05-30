import { Reducer, combineReducers } from 'redux';
import { RootState } from '../types';
import { Actions } from './actionTypes';
import { todosReducer } from './todos/reducer';
import { usersReducer } from './users/reducer';
import { apiReducer } from './api/reducer';

export const rootReducer: Reducer<RootState, Actions> = combineReducers({
  todosState: todosReducer,
  usersState: usersReducer,
  apiState: apiReducer,
});
