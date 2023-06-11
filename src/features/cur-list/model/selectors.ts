import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CUR_LIST_FEATURE_KEY, CurListState } from './reducer';

const curListState = createFeatureSelector<CurListState>(CUR_LIST_FEATURE_KEY);

export const getCurrencies = createSelector(
  curListState,
  (state: CurListState) => state.currencies
);
