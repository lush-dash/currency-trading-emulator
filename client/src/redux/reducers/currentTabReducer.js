import { SET_TAB } from '../types';

export default function currencyResultReducer(state = '1', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TAB:
      return payload;
    default:
      return state;
  }
}
