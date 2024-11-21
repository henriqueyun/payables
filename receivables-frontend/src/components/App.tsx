import styled from 'styled-components'
import Nav from '../components/Nav'

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
      </AppMain>
    </>
  )
}

export default App
