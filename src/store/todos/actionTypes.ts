import { Action as ReduxAction } from 'redux';
import { TodosSortBy } from '../../constants';

export enum ActionTypes {
  SetTodos = 'SetTodos',
  SetSortBy = 'SetSortBy',
  DeleteTodo = 'DeleteTodo',
}

export interface Action<T extends ActionTypes = ActionTypes, P = null> extends ReduxAction<T> {
  payload: P;
}

export type SetTodosAction = Action<ActionTypes.SetTodos, Todo[]>;

export type SetSortByAction = Action<ActionTypes.SetSortBy, TodosSortBy>;

export type DeleteTodoAction = Action<ActionTypes.DeleteTodo, number>;

export type TodosActions = SetTodosAction
| SetSortByAction
| DeleteTodoAction;
