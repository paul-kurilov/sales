import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/mainReducer';

const stringMiddleware = (store) => (next) => (action) => {  
  if (typeof action === 'string') { 
      return next({
          type: action
      })
  }
  return next(action) 
}


const store = configureStore({
  reducer: {
    workspace: mainReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;