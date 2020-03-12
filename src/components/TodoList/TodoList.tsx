import React, { FC } from 'react';
import { TodoItem } from '../TodoItem';

interface Props {
  todos: TodoWithUser[];
  deleteTodo: (id: number) => void;
}

export const TodoList: FC<Props> = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        user={todo.user}
        onDelete={deleteTodo}
      />
    ))}
  </ul>
);
