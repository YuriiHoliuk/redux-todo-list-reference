import { connect, MapStateToProps } from 'react-redux';
import {
  setSortBy,
  selectSortBy,
  selectIsLoaded,
} from '../../store';
import { SortTodosSelectTemplate, Props } from './SortTodosSelectTemplate';
import { RootState } from '../../types';

type StateProps = Pick<Props, 'sortBy' | 'isLoaded'>;

type DispatchProps = Pick<Props, 'setSortBy'>;

const mapStateToProps: MapStateToProps<StateProps, {}, RootState> = (state: RootState) => {
  return {
    sortBy: selectSortBy(state),
    isLoaded: selectIsLoaded(state),
  };
};

const mapDispatchToProps = {
  setSortBy,
};

export const SortTodosSelect = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(SortTodosSelectTemplate);
