import { createFileRoute } from '@tanstack/react-router'
import { FormFieldSpan, FormMain, Title } from '../../components'

const Login = () => {
  return (
    <FormMain>
      <Title>Login</Title>
      <FormFieldSpan>
        <label>Login:</label>
        <input name="value" placeholder="Type the login" type="text" />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Password</label>
        <input
          name="password"
          placeholder="Type the password"
          type="password"
        />
      </FormFieldSpan>

      <input type="button" value="Login" onClick={(_) => alert('Logged in!')} />
    </FormMain>
  )
}

export const Route = createFileRoute('/login/')({
  component: Login,
})
