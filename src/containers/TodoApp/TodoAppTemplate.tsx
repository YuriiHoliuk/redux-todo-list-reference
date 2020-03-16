import React, { FC, useMemo } from 'react';
import { RootState } from '../../types';
import { TodoList } from '../../components/TodoList';
import { sortTodos } from '../../utils';

export interface Props extends Pick<RootState, 'isLoaded' | 'isLoading' | 'error' | 'sortBy'> {
  todos: TodoWithUser[];
  loadData: () => void;
  deleteTodo: (id: number) => void;
}

export const TodoAppTemplate: FC<Props> = React.memo((props) => {
  const {
    isLoaded,
    isLoading,
    error,
    sortBy,
    todos,
    loadData,
    deleteTodo,
  } = props;

  const sortedTodos = useMemo<TodoWithUser[]>(() => sortTodos(todos, sortBy), [sortBy, todos]);

  if (error) {
    return (
      <p>
        {error}
      </p>
    );
  }

  if (isLoading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  if (!isLoaded) {
    return (
      <button
        type="button"
        onClick={loadData}
      >
        Load data
      </button>
    );
  }

  return (
    <TodoList
      todos={sortedTodos}
      deleteTodo={deleteTodo}
    />
  );
});
