import { SET_PRE_ORDER } from '../types';

export default function ordersReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PRE_ORDER:
      return payload;
    default:
      return state;
  }
}
