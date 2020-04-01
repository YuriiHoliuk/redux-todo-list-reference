import { UsersActions } from './users/actionTypes';
import { TodosActions } from './todos/actionTypes';
import { ApiActions } from './api/actionTypes';

export type Actions = UsersActions | TodosActions | ApiActions;
