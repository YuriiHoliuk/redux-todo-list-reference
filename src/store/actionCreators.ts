import {
  SetTodosAction,
  SetErrorAction,
  SetIsLoadedAction,
  SetIsLoadingAction,
  SetSortByAction,
  SetUsersAction,
  DeleteTodoAction,
  ActionTypes,
} from './actionTypes';
import { TodosSortBy } from '../constants';

export const startLoading = (): SetIsLoadingAction => ({
  type: ActionTypes.SetIsLoading,
  payload: true,
});

export const stopLoading = (): SetIsLoadingAction => ({
  type: ActionTypes.SetIsLoading,
  payload: false,
});

export const setIsLoaded = (): SetIsLoadedAction => ({
  type: ActionTypes.SetIsLoaded,
  payload: true,
});

export const setTodos = (todos: Todo[]): SetTodosAction => ({
  type: ActionTypes.SetTodos,
  payload: todos,
});

export const setUsers = (users: User[]): SetUsersAction => ({
  type: ActionTypes.SetUsers,
  payload: users,
});

export const setSortBy = (sortBy: TodosSortBy): SetSortByAction => ({
  type: ActionTypes.SetSortBy,
  payload: sortBy,
});

export const setError = (error: string | null): SetErrorAction => ({
  type: ActionTypes.SetError,
  payload: error,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.DeleteTodo,
  payload: id,
});
