import { Reducer } from 'redux';
import { UsersState } from '../../types';
import { UsersActions, ActionTypes } from './actionTypes';

const initialState: UsersState = {
  users: [],
};

export const usersReducer: Reducer<UsersState, UsersActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SetUsers: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default:
      return state;
  }
};
