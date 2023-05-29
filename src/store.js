import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice.js';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    upAmount(state, action) {
      // let findId = state.findIndex((a) => a.id === action.payload);
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export let { upAmount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
