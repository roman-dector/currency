import { createReducer, on } from '@ngrx/store';

import { Currency } from 'shared/api';

import * as actions from './actions';

export const CUR_LIST_FEATURE_KEY = 'curList';

export type CurListState = {
  currencies: Currency[];
};

const initialState: CurListState = {
  currencies: [
    { name: 'USD', value: 0, gap: 0, visible: true },
    { name: 'EUR', value: 0, gap: 0, visible: true },
    { name: 'GBP', value: 0, gap: 0, visible: true },
    { name: 'CNY', value: 0, gap: 0, visible: false },
    { name: 'JPY', value: 0, gap: 0, visible: false },
    { name: 'TRY', value: 0, gap: 0, visible: false },
  ],
};

const reducer = createReducer(
  initialState,
  on(actions.getRatesSuccess, (state, { quotes }) => {
    let newCurs = Object.entries(quotes).map((e, idx) => {
      let name = e[0].slice(3);

      let value = e[1] ** -1;
      let gap = value - state.currencies[idx].value;

      return {
        name: name,
        value: value,
        gap: gap,
        visible: state.currencies[idx].visible,
      };
    });
    return {
      ...state,
      currencies: newCurs,
    };
  }),
  on(actions.toggleCurVisible, (state, { name, visible }) => {
    let newCurList = state.currencies.map((c) => {
      if (c.name === name) {
        return { ...c, visible };
      }
      return c;
    });
    return { ...state, currencies: newCurList };
  })
);

export default reducer;
