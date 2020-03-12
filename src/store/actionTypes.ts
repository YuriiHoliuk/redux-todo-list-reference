import { Action as ReduxAction } from 'redux';
import { TodosSortBy } from '../constants';

export enum ActionTypes {
  SetTodos = 'SetTodos',
  SetUsers = 'SetUsers',
  SetIsLoaded = 'SetIsLoaded',
  SetIsLoading = 'SetIsLoading',
  SetError = 'SetError',
  SetSortBy = 'SetSortBy',
  DeleteTodo = 'DeleteTodo',
}

export interface Action<T extends ActionTypes = ActionTypes, P = null> extends ReduxAction<T> {
  payload: P;
}

export type SetTodosAction = Action<ActionTypes.SetTodos, Todo[]>;

export type SetUsersAction = Action<ActionTypes.SetUsers, User[]>;

export type SetIsLoadedAction = Action<ActionTypes.SetIsLoaded, boolean>;

export type SetIsLoadingAction = Action<ActionTypes.SetIsLoading, boolean>;

export type SetErrorAction = Action<ActionTypes.SetError, string | null>;

export type SetSortByAction = Action<ActionTypes.SetSortBy, TodosSortBy>;

export type DeleteTodoAction = Action<ActionTypes.DeleteTodo, number>;

export type Actions = SetTodosAction
| SetUsersAction
| SetIsLoadedAction
| SetIsLoadingAction
| SetErrorAction
| SetSortByAction
| DeleteTodoAction;
