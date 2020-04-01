import { TodosSortBy } from '../constants';

export interface TodosState {
  todos: Todo[];
  sortBy: TodosSortBy;
}

export interface UsersState {
  users: User[];
}

export interface ApiState {
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  todosState: TodosState;
  usersState: UsersState;
  apiState: ApiState;
}
