import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {
  let { id } = useParams();
  let [sale, setSlae] = useState(true);
  let productId = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {
      setSlae(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('숫자를 입력해 주세요');
    }
  }, [num]);

  return (
    <div>
      <div className="container">
        {sale == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <input
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
            <h4 className="pt-5">{productId.title}</h4>
            <p>{productId.content}</p>
            <p>{productId.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
