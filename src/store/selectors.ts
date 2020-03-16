import { createSelector } from 'reselect';
import { RootState } from '../types';
import { prepareTodos } from '../utils';

const selectTodos = (state: RootState) => state.todos;
const selectUsers = (state: RootState) => state.users;

export const selectTodosWithUsers = createSelector(
  selectTodos,
  selectUsers,
  (todos, users) => {
    return users.length
      ? prepareTodos(todos, users)
      : [];
  },
);
