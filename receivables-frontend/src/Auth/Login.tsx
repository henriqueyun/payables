import { FormFieldSpan, FormMain, FormTitle } from "../components"

const Login = () => {
  return (
    <FormMain>
      <FormTitle>
        Login
      </FormTitle>
      <FormFieldSpan>
        <label>Login:</label>
        <input name="value" placeholder="Type the login" type="text" />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Password</label>
        <input name="password" placeholder="Type the password" type="password" />
      </FormFieldSpan>

      <input type="button" value="Login" onClick={(e) => alert('Logged in!')} />
    </FormMain>
  )
}

export default Login