import { useState } from 'react'
import { Form, InputGroup, Button, Alert } from 'react-bootstrap'
import { useMutation } from '@tanstack/react-query'
import Layout from '/components/layout'
import { useRouter } from 'next/router'

async function loginRequest({ username, password }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(errText || 'Login failed')
  }
  return res.json()
}

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()


  const mutation = useMutation(loginRequest, {
    onSuccess: () => {
      router.push('/cms')
    },

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ username, password })
  }

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
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
    </Layout>
  )
}
