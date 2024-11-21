import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import styled from 'styled-components'

export const Route = createRootRoute({
  component: RootComponent,
})

const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

function RootComponent() {
  return (
    <>
      {/* <div className="p-2 flex gap-2 text-lg"> */}
      {/* <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '} */}
      {/* <Link
          to="/payable"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Payable
        </Link>{' '}
        <Link
          to="/assignor"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Assignor
        </Link>{' '}
        <Link
          to="/login"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Login
        </Link>{' '} */}
      {/* </div>
      <hr /> */}
      <AppMain>
        <Outlet />
      </AppMain>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
