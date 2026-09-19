import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const handleLogin = () => {
    console.log('Hello from login');
    // Implement login logic here
  };

  const handleRegister = () => {
    console.log('Hello from register');
    // Implement register logic here
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/' style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/watchList'>
              Watch List
            </NavLink>
          </Nav>
          <NavLink className='nav-link' to='/login'>
            <Button
              variant='outline-info'
              className='me-2'
              onClick={handleLogin}
            >
              Login
            </Button>
          </NavLink>
          <NavLink className='nav-link' to='/register'>
            <Button
              variant='outline-info'
              className='me-2'
              onClick={handleRegister}
            >
              Register
            </Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
