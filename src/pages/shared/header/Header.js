import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Leftsidenav from '../leftsidenav/Leftsidenav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  
  const {user,logOut}=useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    return (
        <div>
    <Navbar expand="lg" className="bg-body-tertiary mb-4" >
      <Container>
        <Navbar.Brand><Link to='/'>Dragon-news</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">All News</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
              {
                user?.uid ? 
                <>
                <span className='me-2'>{user?.displayName}</span>
                <Button onClick={handleLogout} variant="light">Log Out</Button>
                </>
                : 
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              {/* {user?.displayName} */}
            </>
            <Link to='/profile'>
              {user?.photoURL ?
              <Image style={{height:"30px"}} roundedCircle src={user?.photoURL
              }></Image>  
              :
              <FaUser></FaUser>
            }
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <Leftsidenav></Leftsidenav>
        </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;