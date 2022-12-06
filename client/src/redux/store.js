import { configureStore } from '@reduxjs/toolkit';
import currentTabReducer from './reducers/currentTabReducer';

export default configureStore({
  reducer: {
    currentTab: currentTabReducer,
  },
});
