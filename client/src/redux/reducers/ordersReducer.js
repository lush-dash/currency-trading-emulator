import { ADD_ORDER } from '../types';

export default function ordersReducer(state = [], action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case ADD_ORDER:
      newState = [...state];
      newState.push(payload);
      return newState;
    default:
      return state;
  }
}
