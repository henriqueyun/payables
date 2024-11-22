import { Link, Outlet, createRootRouteWithContext, redirect, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AppMain } from '../components'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthContext, useAuth } from '../context/AuthContext'
import { MainMenu, Navbar, NavLogotypeComponent, NavMenu, NavMenuItem, NavUserMenu, NavUserMenuItem } from '../components/Nav'


export const Route = createRootRouteWithContext<{ queryClient: QueryClient, auth: AuthContext }>()({
  component: RootComponent,
})

function RootComponent() {
  const { isAuthenticated, signOut } = useAuth()
  const navigator = useNavigate()
  return (
    <>
      <Navbar>
        <MainMenu>
          <Link to="/">
            <NavLogotypeComponent />
          </Link>
          {isAuthenticated() &&
            <NavMenu>
              <NavMenuItem>
                <Link to='/payable/list'>List</Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link to='/payable/create'>New Payable</Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link to='/assignor/create'>New Assignor</Link>
              </NavMenuItem>
            </NavMenu>
          }
        </MainMenu>
        {isAuthenticated() &&
          <NavUserMenu>
            <NavUserMenuItem onClick={(_) => {
              signOut()
              navigator({ to: '/login'})
            }}>
              <Link>Exit</Link>
            </NavUserMenuItem>
          </NavUserMenu>
        }
      </Navbar >
      <AppMain>
        <Outlet />
      </AppMain>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
