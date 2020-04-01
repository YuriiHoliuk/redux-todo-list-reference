import {
  SetErrorAction,
  SetIsLoadedAction,
  SetIsLoadingAction,
  ActionTypes,
} from './actionTypes';

export const startLoading = (): SetIsLoadingAction => ({
  type: ActionTypes.SetIsLoading,
  payload: true,
});

export const stopLoading = (): SetIsLoadingAction => ({
  type: ActionTypes.SetIsLoading,
  payload: false,
});

export const setIsLoaded = (): SetIsLoadedAction => ({
  type: ActionTypes.SetIsLoaded,
  payload: true,
});

export const setError = (error: string | null): SetErrorAction => ({
  type: ActionTypes.SetError,
  payload: error,
});
