import React, { FC, useCallback } from 'react';
import { UserItem } from '../UserItem';

interface Props extends Pick<TodoWithUser, 'id' | 'title' | 'completed' | 'user'> {
  onDelete: (id: number) => void;
}

export const TodoItem: FC<Props> = (props) => {
  const {
    id,
    title,
    completed,
    user,
    onDelete,
  } = props;

  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  return (
    <li>
      <p>{title}</p>
      <span>{completed ? '✅' : '🚫'}</span>

      <UserItem
        name={user.name}
        email={user.email}
      />

      <button
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
