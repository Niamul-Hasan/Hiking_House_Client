import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {

    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><span
                    style={{ color: 'teal' }}
                >HIKING HOUSE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {user && <Nav.Link as={Link} to="/manageIn">Manage</Nav.Link>}
                        {user && <Nav.Link as={Link} to="/add">Add</Nav.Link>}
                        {user && <Nav.Link as={Link} to="/selected">MyItem</Nav.Link>}
                        {user && <Nav.Link><FaRegUserCircle /><span className='text-success ps-2'>{user.email}
                        </span></Nav.Link>}
                        {user ? <Nav.Link onClick={() => signOut(auth)}>
                            <span style={{ color: 'orange', fontWeight: 'bolder' }}>SignOut</span>
                        </Nav.Link>
                            : <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;