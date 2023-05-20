import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import ErrorPage from './routes/ErrorPage';

function App() {
  let navigate = useNavigate();
  let [shoes] = useState(data);

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
                      return <Card shoes={shoes[i]} i={i} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />}>
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

function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h4>회사 정보 페이지</h4>
      <Nav>
        <Nav.Link
          onClick={() => {
            navigate('member');
          }}
        >
          member
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            navigate('location');
          }}
        >
          location
        </Nav.Link>
      </Nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
