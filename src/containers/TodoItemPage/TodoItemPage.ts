import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { TodoItemPageTemplate } from './TodoItemPageTemplate';
import { RootState } from '../../types';

const mapStateToProps: MapStateToProps<
Todo, RouteComponentProps<{ id: string }>, RootState> = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return state.todos.find((todo) => todo.id === Number(id)) as Todo;
};

export const TodoItemPage = connect(
  mapStateToProps,
)(TodoItemPageTemplate);
