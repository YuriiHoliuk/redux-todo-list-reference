import { Reducer } from 'redux';
import { TodosState } from '../../types';
import { TodosActions, ActionTypes } from './actionTypes';
import { TodosSortBy } from '../../constants';

const initialState: TodosState = {
  todos: [],
  sortBy: TodosSortBy.Title,
};

export const todosReducer: Reducer<TodosState, TodosActions> = (state = initialState, action) => {
  switch (action.type) {
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
