import {Navbar, Container, Nav, Button, Image} from 'react-bootstrap';

import css from './Header.module.scss';

const Header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" className={css.navbarContainer}>
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.deltafaucet.com/themes/custom/delta_theme/logo.svg"
                         width="140"
                         height="35"
                         className="d-inline-block align-top"
                         alt="Delta app logo"/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item className={css.navItem}>
                        <Nav.Link href="#profile">Username</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={2} href="#profile">
                            <Image src="https://via.placeholder.com/35"
                                   width="35"
                                   height="35"
                                   className="d-inline-block align-top"
                                   alt="Profile" roundedCircle/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {/*<Nav>*/}
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link href="/login">*/}
                    {/*        <Button variant="primary">Sign In</Button>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}
                {/*</Nav>*/}
            </Container>
        </Navbar>
    )
}

export default Header;
