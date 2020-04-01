import { Action as ReduxAction } from 'redux';

export enum ActionTypes {
  SetIsLoaded = 'SetIsLoaded',
  SetIsLoading = 'SetIsLoading',
  SetError = 'SetError',
}

export interface Action<T extends ActionTypes = ActionTypes, P = null> extends ReduxAction<T> {
  payload: P;
}

export type SetIsLoadedAction = Action<ActionTypes.SetIsLoaded, boolean>;

export type SetIsLoadingAction = Action<ActionTypes.SetIsLoading, boolean>;

export type SetErrorAction = Action<ActionTypes.SetError, string | null>;

export type ApiActions = SetIsLoadedAction
| SetIsLoadingAction
| SetErrorAction;
