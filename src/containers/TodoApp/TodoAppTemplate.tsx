import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from '../../components/TodoList';
import { sortTodos } from '../../utils';
import { SortTodosSelect } from '../SortTodosSelect';
import { TodosSortBy } from '../../constants';

export interface Props {
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
  sortBy: TodosSortBy;
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
    <>
      <Link to="/">
        Home
      </Link>
      <SortTodosSelect />
      <TodoList
        todos={sortedTodos}
        deleteTodo={deleteTodo}
      />
    </>
  );
});
