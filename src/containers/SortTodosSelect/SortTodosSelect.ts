import { connect, MapStateToProps } from 'react-redux';
import {
  setSortBy,
} from '../../store';
import { SortTodosSelectTemplate, Props } from './SortTodosSelectTemplate';
import { RootState } from '../../types';

type StateProps = Pick<Props, 'sortBy' | 'isLoaded'>;

type DispatchProps = Pick<Props, 'setSortBy'>;

const mapStateToProps: MapStateToProps<StateProps, {}, RootState> = (state: RootState) => {
  return {
    sortBy: state.sortBy,
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = {
  setSortBy,
};

export const SortTodosSelect = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(SortTodosSelectTemplate);
