import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  // state 이름
  name: 'user',
  // state 값
  initialState: { name: 'kim', age: 20 },
  // state값 변경 함수 | state는 기존 state를 뜻함 필요하면 사용
  reducers: {
    changeName(state) {
      state.name = 'kongchip';
    },
  },
});
export let { changeName } = user.actions;

export default user;
