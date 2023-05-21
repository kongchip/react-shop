import { Nav } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';

function AboutPage() {
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

export default AboutPage;
