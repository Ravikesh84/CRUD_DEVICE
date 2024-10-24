import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Layout = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Redirect to search results page with query
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Tech Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/admin/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main Content */}
            <div className="maindiv">
                <Outlet />
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white mt-4">
                <Container>
                    <div className="row py-4">
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/home" className="text-white">Home</Link></li>
                                <li><Link to="/admin/products" className="text-white">Products</Link></li>
                                <li><Link to="/about" className="text-white">About</Link></li>
                                <li><Link to="/contact" className="text-white">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Email: support@techstore.com</p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <div>
                                <FaFacebook className="me-2" />
                                <FaTwitter className="me-2" />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-3">
                        <p className="mb-0">© 2024 Tech Store. All Rights Reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Layout;
