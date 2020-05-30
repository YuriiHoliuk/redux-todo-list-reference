import { SetUsersAction, ActionTypes } from './actionTypes';

export const setUsers = (users: User[]): SetUsersAction => ({
  type: ActionTypes.SetUsers,
  payload: users,
});
