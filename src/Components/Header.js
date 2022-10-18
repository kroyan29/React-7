/* eslint-disable react/jsx-no-undef */
import { Routes, Route, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
// import './App.css';
import logo from '../Components/React-icon.svg.png'

import About from '../Pages/About'
import Home from '../Pages/Home'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

function Header() {
    return (
        <>
           
            <Navbar CollapseOnSelect className="navbar navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} height="30"
                        width="30" className='d-inline-block align-top' alt='logo'/>
                </Navbar.Brand>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
                        
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form className="form-row align-items-center">
                                <FormControl type="text"
                                    placheholder="Search"
                                className="mr-sm-2" />

                                <div className='col-auto my-1'>
                                    <Button variant="outline-info">Search</Button>
                                </div>
                            </Form>
                       
                            </Navbar.Collapse>
                    
                    </Navbar.Toggle>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
        </>
    )
}
export default Header;