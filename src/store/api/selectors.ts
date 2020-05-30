import { createSelector } from 'reselect';
import { RootState } from '../../types';

const selectApiState = (state: RootState) => state.apiState;

export const selectIsLoading = createSelector(
  selectApiState,
  (state) => state.isLoading,
);

export const selectIsLoaded = createSelector(
  selectApiState,
  (state) => state.isLoaded,
);

export const selectError = createSelector(
  selectApiState,
  (state) => state.error,
);
