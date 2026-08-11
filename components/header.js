import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import styles from './header.module.css'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useMe from '../utility/login-utility'
import { HiOutlineMenu } from "react-icons/hi";
import ThemeToggle from './theme-switch'
import { useContext } from 'react'
import { AppThemeContext } from '../context/useTheme'

export default function Header() {
      const { data: me, isLoading, isError } = useMe()
      const queryClient = useQueryClient()
      const { toggleTheme } = useContext(AppThemeContext);
      const logoutMutation = useMutation({
          mutationFn: async () => {
              const res = await fetch('/api/auth/logout', {
                  method: 'POST',
                  credentials: 'include',
              })
              if (!res.ok) throw new Error('Logout failed')
              return res.json()
          },
          onSuccess: () => {
              queryClient.setQueryData(['me'], null)
          }
      })

      const handleLogout = async (e) => {
          e?.preventDefault()
          logoutMutation.mutate()
      }

    return (    
        <Navbar expand="lg" variant='dark' className={styles.navbar}>
            <Container>
                <Navbar.Brand>
                    <Link href="/" className={styles.homeButton}>
                        Lucid Web Dream
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <HiOutlineMenu size={28} />
                 </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                            <Nav.Link as={Link} href="/projects" className={styles.projectsButton}>Projects</Nav.Link>
                            <Nav.Link  as={Link} href="/blog"className={styles.projectsButton}>Blog</Nav.Link>
                        <Nav.Link onClick={toggleTheme}>
                        <ThemeToggle />
                        </Nav.Link>
                        {me ? (
                            <Nav.Link href="#" onClick={handleLogout} className={styles.projectsButton}>
                                Logout
                            </Nav.Link>
                        ) : null}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}