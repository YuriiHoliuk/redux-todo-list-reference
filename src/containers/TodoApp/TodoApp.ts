import { connect } from 'react-redux';
import { TodoAppTemplate, Props } from './TodoAppTemplate';
import { RootState } from '../../types';
import { prepareTodos } from '../../utils';
import {
  startLoading,
  stopLoading,
  setIsLoaded,
  setError,
  setTodos,
  setUsers,
  deleteTodo,
} from '../../store';

type StateProps = Pick<Props, 'isLoaded' | 'isLoading' | 'error' | 'sortBy' | 'todos'>;

type ActionsNames = 'setTodos' | 'setUsers' | 'startLoading'
| 'stopLoading' | 'setIsLoaded' | 'setError' | 'deleteTodo';

type DispatchProps = Pick<Props, ActionsNames>;

const mapStateToProps = (state: RootState) => {
  return {
    isLoaded: state.isLoaded,
    isLoading: state.isLoading,
    sortBy: state.sortBy,
    error: state.error,
    todos: state.users.length
      ? prepareTodos(state.todos, state.users)
      : [],
  };
};

const mapDispatchToProps = {
  startLoading,
  stopLoading,
  setIsLoaded,
  setError,
  setTodos,
  setUsers,
  deleteTodo,
};

export const TodoApp = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoAppTemplate);
