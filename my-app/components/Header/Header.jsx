import {Navbar, Container, Nav, Button} from 'react-bootstrap';

import css from './Header.module.scss';

import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" className={css.navbarContainer}>
            <Container>
                <Navbar.Brand href="/">
                    <img/>
                    Delta
                </Navbar.Brand>

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
