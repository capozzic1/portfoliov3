import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <Navbar expand="lg" className={styles.navbar} variant="light">
            <Container>
                <Navbar.Brand>
                    <Link href="/">
                        <a className={styles.homeButton}>Lucid Web Dream</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href="/projects" passHref>
                            <Nav.Link  className={styles.projectsButton}>Projects</Nav.Link>
                        </Link>
                        <Link href="/blog" passHref>
                            <Nav.Link className={styles.projectsButton}>Blog</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}