import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import styles from './header.module.css'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useMe from '../utility/login-utility'

export default function Header() {
      const { data: me, isLoading, isError } = useMe()
      const queryClient = useQueryClient()

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
      console.log(me)
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