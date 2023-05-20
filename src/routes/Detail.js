import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail(props) {
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let productId = props.shoes.find((x) => x.id == id);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, []);
  return (
    <div>
      <div className="container">
        {alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
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
