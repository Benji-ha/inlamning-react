import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/reducer.js';

const store = configureStore({
    reducer: {
      cards: cardReducer,
    }
  });
  
  export default store;
