import { Reducer } from 'redux';
import { ApiState } from '../../types';
import { ApiActions, ActionTypes } from './actionTypes';

const initialState: ApiState = {
  isLoaded: false,
  isLoading: false,
  error: null,
};

export const apiReducer: Reducer<ApiState, ApiActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SetIsLoading: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case ActionTypes.SetIsLoaded: {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    default:
      return state;
  }
};
