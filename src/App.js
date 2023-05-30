import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { useEffect, useState, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import AboutPage from './routes/aboutPage';
import axios from 'axios';
import { useQuery } from 'react-query';

import Cart from './routes/Cart';
import Detail from './routes/Detail';

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  let navigate = useNavigate();
  let baseUrl = 'https://codingapple1.github.io/shop/data2.json';

  let result = useQuery('작명', () =>
    axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    })
  );

  console.log(result);

  let countBtn = (e) => {
    setCount(count + 1);
    if (count === 1) {
      baseUrl = 'https://codingapple1.github.io/shop/data3.json';
      count++;
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  let lookItem = localStorage.getItem('watched');
  lookItem = JSON.parse(lookItem);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}
            >
              about
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              cart
            </Nav.Link>
          </Nav>
        </Container>
        <Nav className="ms-auto">
          {result.isLoading && '로딩중'}
          {result.isError && '에러'}
          {result.data && result.data.name + '님'}
        </Nav>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-container">
                <div className="main-bg" />
                <div className="lookItem">
                  <div className="look-item-h1">최근 본 상품</div>
                  {lookItem.map((a, i) => {
                    return <Item lookItem={lookItem[i]} key={i} shoes={shoes[lookItem[i]]} />;
                  })}
                </div>
              </div>
              <div className="App">
                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Card shoes={shoes[i]} i={i} key={i} />;
                    })}
                  </div>
                  <button
                    disabled={isDisabled}
                    onClick={() => {
                      axios
                        .get(baseUrl)
                        .then((res) => {
                          let copy = [...shoes, ...res.data];
                          setShoes(copy);
                          countBtn();
                        })
                        .catch(() => {
                          console.log('서버 연결 실패');
                        });
                    }}
                  >
                    더 보기
                  </button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="member" element={<div>직원 정보</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        navigate(`/detail/${props.i}`);
      }}
    >
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function Item(props) {
  return (
    <div className="container-item">
      <div>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'} width="50%" />
        {props.shoes.title}
      </div>
    </div>
  );
}

export default App;
