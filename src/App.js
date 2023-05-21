import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail';
import ErrorPage from './routes/ErrorPage';
import AboutPage from './routes/aboutPage';
import axios from 'axios';

function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let baseUrl = 'https://codingapple1.github.io/shop/data2.json';
  let [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  let countBtn = (e) => {
    setCount(count + 1);
    if (count === 1) {
      baseUrl = 'https://codingapple1.github.io/shop/data3.json';
      count++;
      setIsDisabled(true);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
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
                navigate('/about');
              }}
            >
              about
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
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
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
