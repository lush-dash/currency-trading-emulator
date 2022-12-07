import { CLOSE_MODAL, OPEN_MODAL } from '../types';

export default function currencyResultReducer(state = false, action) {
  const { type } = action;
  switch (type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
}
