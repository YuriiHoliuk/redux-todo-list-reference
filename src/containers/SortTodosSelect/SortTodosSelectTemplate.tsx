import React, { FC, useCallback } from 'react';
import { TodosSortBy } from '../../constants';
import { RootState } from '../../types';

export interface Props extends Pick<RootState, 'isLoaded' | 'sortBy'> {
  setSortBy: (sortBy: TodosSortBy) => void;
}

export const SortTodosSelectTemplate: FC<Props> = ({ sortBy, setSortBy, isLoaded }) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as TodosSortBy);
  }, [setSortBy]);

  return (
    <select
      name="sortBy"
      value={sortBy}
      onChange={handleChange}
      disabled={!isLoaded}
    >
      {Object.values(TodosSortBy).map((name) => (
        <option
          key={name}
          value={name}
        >
          {name}
        </option>
      ))}
    </select>
  );
};
