import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store';
import { useDispatch } from 'react-redux';

function Detail(props) {
  let { id } = useParams();
  let [sale, setSlae] = useState(true);
  let productId = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();

  console.log(productId);

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
            <img src={`https://codingapple1.github.io/shop/shoes${productId.id + 1}.jpg`} width="100%" />
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
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addItem({ id: productId.id, name: productId.title, count: 1 }));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabControl tab={tab} />
    </div>
  );
}

function TabControl(props) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 10);
    return () => {
      setFade('');
    };
  }, [props.tab]);

  return <div className={`start ${fade}`}>{[<div>버튼0 내용</div>, <div>버튼1 내용</div>, <div>버튼2 내용</div>][props.tab]}</div>;
}

export default Detail;
