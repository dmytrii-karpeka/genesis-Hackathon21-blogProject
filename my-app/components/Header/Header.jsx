import {Navbar, Container, Nav, Button} from 'react-bootstrap';

import css from './Header.module.scss';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img/>
                    Delta
                </Navbar.Brand>
                <Nav
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="#">New Releases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Categories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Online</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Dropdown/>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/login">
                            <Button variant="primary">Sign In</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
