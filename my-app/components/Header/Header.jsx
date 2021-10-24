import Link from 'next/link';
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
                    <Link href="/profile">
                        <div className={css.profileLink}>
                            <Image src="https://via.placeholder.com/35"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-top"
                                    alt="Profile" roundedCircle/>
                        </div>
                    </Link>
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
