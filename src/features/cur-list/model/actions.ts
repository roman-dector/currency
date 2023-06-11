import { createAction, props } from '@ngrx/store';
import { Quotes } from 'shared/api';
import * as types from './types';

export const getRatesSuccess = createAction(
  types.GET_RATES_SUCCESS,
  props<{ quotes: Quotes }>()
);

export const toggleCurVisible = createAction(
  types.TOGGLE_CUR_VISIBLE,
  props<{ name: string; visible: boolean }>()
);
