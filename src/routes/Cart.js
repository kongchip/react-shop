import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from './../store.js';

function Cart() {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.user.age);
  return (
    <div>
      <h6>
        {state.user.name}
        {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>
              <button
                onClick={() => {
                  dispatch(changeName());
                }}
              >
                버튼임
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
