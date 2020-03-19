import { ThunkDispatch } from 'redux-thunk';
import {
  SetTodosAction,
  SetErrorAction,
  SetIsLoadedAction,
  SetIsLoadingAction,
  SetSortByAction,
  SetUsersAction,
  DeleteTodoAction,
  ActionTypes,
  Actions,
} from './actionTypes';
import { TodosSortBy } from '../constants';
import { RootState } from '../types';
import { loadTodos, loadUsers } from '../utils';

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

// action creator(thunk creator)
export const loadData = () => {
  // thunk
  return (dispatch: ThunkDispatch<RootState, unknown, Actions>) => {
    dispatch(startLoading());

    Promise.all([loadTodos(), loadUsers()])
      .then(([todosFromServer, users]) => {
        dispatch(setUsers(users));
        dispatch(setTodos(todosFromServer));
        dispatch(setIsLoaded());
        dispatch(setError(null));
      })
      .catch((serverError) => dispatch(setError(serverError.message)))
      .finally(() => dispatch(stopLoading()));
  };
};
