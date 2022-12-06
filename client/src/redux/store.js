import { configureStore } from '@reduxjs/toolkit';
import currentTabReducer from './reducers/currentTabReducer';
import ordersReducer from './reducers/ordersReducer';

export default configureStore({
  reducer: {
    currentTab: currentTabReducer,
    orders: ordersReducer,
  },
});
