import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { TodoItemPageTemplate } from './TodoItemPageTemplate';
import { RootState } from '../../types';
import { selectTodoById } from '../../store';

const mapStateToProps: MapStateToProps<
Todo, RouteComponentProps<{ id: string }>, RootState> = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return selectTodoById(state, Number(id));
};

export const TodoItemPage = connect(
  mapStateToProps,
)(TodoItemPageTemplate);
