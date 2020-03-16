import { connect } from 'react-redux';
import { TodoAppTemplate, Props } from './TodoAppTemplate';
import { RootState } from '../../types';
import {
  loadData,
  deleteTodo,
} from '../../store';
import { selectTodosWithUsers } from '../../store/selectors';

type StateProps = Pick<Props, 'isLoaded' | 'isLoading' | 'error' | 'sortBy' | 'todos'>;

type DispatchProps = Pick<Props, 'loadData' | 'deleteTodo'>;

const mapStateToProps = (state: RootState) => {
  return {
    isLoaded: state.isLoaded,
    isLoading: state.isLoading,
    sortBy: state.sortBy,
    error: state.error,
    todos: selectTodosWithUsers(state),
  };
};

const mapDispatchToProps = {
  loadData,
  deleteTodo,
};

export const TodoApp = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoAppTemplate);
