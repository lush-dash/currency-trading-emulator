import { configureStore } from '@reduxjs/toolkit';
import currentTabReducer from './reducers/currentTabReducer';
import ordersReducer from './reducers/ordersReducer';
import modalReducer from './reducers/modalReducer';
import preOrderReducer from './reducers/preOrderReducer';

export default configureStore({
  reducer: {
    currentTab: currentTabReducer,
    orders: ordersReducer,
    preOrder: preOrderReducer,
    modal: modalReducer,
  },
});
