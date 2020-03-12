import { Reducer } from 'redux';
import { RootState } from '../types';
import { TodosSortBy } from '../constants';
import { Actions, ActionTypes } from './actionTypes';

const initialState: RootState = {
  isLoaded: false,
  isLoading: false,
  todos: [],
  users: [],
  error: null,
  sortBy: TodosSortBy.Title,
};

export const rootReducer: Reducer<RootState, Actions> = (state = initialState, action) => {
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

    case ActionTypes.SetUsers: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case ActionTypes.SetTodos: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case ActionTypes.SetSortBy: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    case ActionTypes.DeleteTodo: {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    }

    default:
      return state;
  }
};
