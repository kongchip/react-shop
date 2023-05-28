import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  // state 이름
  name: 'user',
  // state 값
  initialState: { name: 'kim', age: 20 },
  // state값 변경 함수 | state는 기존 state를 뜻함 필요하면 사용
  reducers: {
    changeName(state) {
      return 'kongchip' + state;
    },
    increase(state) {
      state.age += 1;
    },
  },
});
export let { changeName, increase } = user.actions;

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
