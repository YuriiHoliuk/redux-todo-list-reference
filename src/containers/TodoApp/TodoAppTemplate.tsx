import React, { FC, useCallback, useMemo } from 'react';
import { RootState } from '../../types';
import { TodoList } from '../../components/TodoList';
import { loadTodos, loadUsers, sortTodos } from '../../utils';

export interface Props extends Pick<RootState, 'isLoaded' | 'isLoading' | 'error' | 'sortBy'> {
  todos: TodoWithUser[];
  setTodos: (todos: Todo[]) => void;
  setUsers: (todos: User[]) => void;
  startLoading: () => void;
  stopLoading: () => void;
  setIsLoaded: () => void;
  setError: (error: string | null) => void;
  deleteTodo: (id: number) => void;
}

export const TodoAppTemplate: FC<Props> = (props) => {
  const {
    isLoaded,
    isLoading,
    error,
    sortBy,
    todos,
    setTodos,
    setUsers,
    startLoading,
    stopLoading,
    setIsLoaded,
    setError,
    deleteTodo,
  } = props;

  const loadData = useCallback(() => {
    startLoading();

    Promise.all([loadTodos(), loadUsers()])
      .then(([todosFromServer, users]) => {
        setUsers(users);
        setTodos(todosFromServer);
        setIsLoaded();
        setError(null);
      })
      .catch((serverError) => setError(serverError.message))
      .finally(() => stopLoading());
  }, [setError, setIsLoaded, setTodos, setUsers, startLoading, stopLoading]);

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
};
