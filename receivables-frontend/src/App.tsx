import styled from 'styled-components'
import PayableForm from './Payable/PayableForm'
import Nav from './Nav'
import AssignorForm from './Assignor/AssignorForm'
import Login from './Auth/Login'

const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <>
      <Nav />
      <AppMain>
        <Login />
      </AppMain>
    </>
  )
}

export default App
