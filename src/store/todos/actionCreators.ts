import { ThunkDispatch } from 'redux-thunk';
import {
  SetTodosAction,
  SetSortByAction,
  DeleteTodoAction,
  ActionTypes,
} from './actionTypes';
import { TodosSortBy } from '../../constants';
import { RootState } from '../../types';
import { loadTodos, loadUsers } from '../../utils';
import { setUsers } from '../users';
import {
  setError,
  setIsLoaded,
  startLoading,
  stopLoading,
} from '../api';
import { Actions } from '../actionTypes';

export const setTodos = (todos: Todo[]): SetTodosAction => ({
  type: ActionTypes.SetTodos,
  payload: todos,
});

export const setSortBy = (sortBy: TodosSortBy): SetSortByAction => ({
  type: ActionTypes.SetSortBy,
  payload: sortBy,
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
