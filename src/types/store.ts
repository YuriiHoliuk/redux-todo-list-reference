import { TodosSortBy } from '../constants';

export interface RootState {
  isLoaded: boolean;
  isLoading: boolean;
  todos: Todo[];
  users: User[];
  error: string | null;
  sortBy: TodosSortBy;
}
