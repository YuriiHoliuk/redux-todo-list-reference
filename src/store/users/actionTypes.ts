import { Action as ReduxAction } from 'redux';

export enum ActionTypes {
  SetUsers = 'SetUsers',
}

export interface Action<T extends ActionTypes = ActionTypes, P = null> extends ReduxAction<T> {
  payload: P;
}

export type SetUsersAction = Action<ActionTypes.SetUsers, User[]>;

export type UsersActions = SetUsersAction;
