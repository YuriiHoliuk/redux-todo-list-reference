import { connect } from 'react-redux';
import { TodoAppTemplate, Props } from './TodoAppTemplate';
import { RootState } from '../../types';
import {
  loadData,
  deleteTodo,
  selectSortBy,
  selectTodosWithUsers,
  selectIsLoading,
  selectIsLoaded,
  selectError,
} from '../../store';

type StateProps = Pick<Props, 'isLoaded' | 'isLoading' | 'error' | 'sortBy' | 'todos'>;

type DispatchProps = Pick<Props, 'loadData' | 'deleteTodo'>;

const mapStateToProps = (state: RootState) => {
  return {
    isLoaded: selectIsLoaded(state),
    isLoading: selectIsLoading(state),
    sortBy: selectSortBy(state),
    error: selectError(state),
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
