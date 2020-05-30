import { createSelector } from 'reselect';
import { RootState } from '../../types';

const selectUsersState = (state: RootState) => state.usersState;

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users,
);
