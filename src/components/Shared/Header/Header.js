import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const navigate = useNavigate();

    const loginNavigate = () => {
        // navigate('/login');
        console.log("click")
    }
    return (
        <div>
            <Navbar className="nav-bar"collapseOnSelect expand="lg" scrolling dark>
                <Container>
                    <Navbar.Brand href="/"><Link to="/" style={{textDecoration:'none',color:'black'}}><b>GoHome</b></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="/"><Link to="/" style={{textDecoration:'none',color:'grey'}}>Home</Link></Nav.Link>
                            <Nav.Link href="/destination"><Link to="/destination" style={{textDecoration:'none',color:'grey'}}>Destination</Link></Nav.Link>
                            <Nav.Link href="/blog"><Link to="/blog" style={{textDecoration:'none',color:'grey'}}>Blog</Link></Nav.Link>
                            <Nav.Link href="/contact"><Link to="/contact" style={{textDecoration:'none',color:'grey'}}>Contact</Link></Nav.Link>
                            <Nav.Link href="/login"><Link to="/login" style={{textDecoration:'none',color:'grey'}}><Button variant="primary">Login</Button></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;