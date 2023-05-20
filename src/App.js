import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import ErrorPage from './routes/ErrorPage';
import MainPage from './routes/MainPage';

function App() {
  let navigate = useNavigate();

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
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>직원 정보</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>
      </Routes>
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
