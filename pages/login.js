import { useState } from 'react'
import { Form, InputGroup, Button, Alert, Col, Row} from 'react-bootstrap'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Layout from '/components/layout'
import { useRouter } from 'next/router'
import styles from '../page-styles/login.module.scss'
async function loginRequest({ username, password }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(errText || 'Login failed')
  }
  try {
    return await res.json()
  } catch (err) {
    return null
  }
}

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const queryClient = useQueryClient()


  const mutation = useMutation(loginRequest, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['me'])
      router.push('/cms')
    },

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ username, password })
  }

  return (
    <Layout>
      <div className={styles.loginContainer}>
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }} className="mt-5">
      <Form onSubmit={handleSubmit}>
        <h1>My Super Cool Login Page</h1>
        <InputGroup  className="mb-3">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <Button type="submit" disabled={mutation.isLoading} className="mb-3">
          {mutation.isLoading ? 'Logging in…' : 'Login'}
        </Button>

        {mutation.isError && (
          <Alert variant="danger">{mutation.error?.message || 'Login error'}</Alert>
        )}

        {mutation.isSuccess && (
          <Alert variant="success">Login successful</Alert>
        )}
      </Form>
      </Col>
      </Row>
       </div>
    </Layout>
  )
}
