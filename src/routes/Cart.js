import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../store/userSlice';
import { upAmount } from './../store.js';
function Cart() {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h6>{state.user.name}의 장바구니</h6>
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
              <td>
                <button
                  onClick={() => {
                    dispatch(upAmount(i));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
