import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { Button, FormFieldSpan, FormMain, Title } from '../../components'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'

const Login = () => {

  const { signIn, isAuthenticated } = useAuth()
  const navigator = useNavigate()

  useEffect(() => {
    if (isAuthenticated()) {
      navigator({ to: '/'})
    }
  }, [isAuthenticated()])

  const signInAndRedirect = async () => {
    await signIn({ login, password })
  }
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <FormMain>
      <Title>Login</Title>
      <FormFieldSpan>
        <label>Login:</label>
        <input
          name="value"
          placeholder="Type the login"
          type="text"
          onChange={e => setLogin(_ => e.target.value)}
          value={login}
        />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Password</label>
        <input
          name="password"
          placeholder="Type the password"
          type="password"
          onChange={e => setPassword(_ => e.target.value)}
          value={password}
        />
      </FormFieldSpan>

      <Button type="button" onClick={async (_) => await signInAndRedirect()}>
        Login
      </Button>
    </FormMain>
  )
}

export const Route = createFileRoute('/login/')({
  component: Login,
  beforeLoad: ({ context, location }) => {
    if (context.auth.isAuthenticated()) {
      throw redirect({
        to: '/',
      })
    }
  }
})
