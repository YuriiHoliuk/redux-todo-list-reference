import { createSelector } from 'reselect';
import { RootState } from '../../types';
import { prepareTodos } from '../../utils';
import { selectUsers } from '../users';

const selectTodosState = (state: RootState) => state.todosState;

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos,
);

export const selectSortBy = createSelector(
  selectTodosState,
  (state) => state.sortBy,
);

export const selectTodosWithUsers = createSelector(
  selectTodos,
  selectUsers,
  (todos, users) => {
    return users.length
      ? prepareTodos(todos, users)
      : [];
  },
);

export const selectTodoById = createSelector(
  selectTodosWithUsers,
  (_state: RootState, id: number) => id,
  (todos, id) => todos.find((todo) => todo.id === id) as Todo,
);
