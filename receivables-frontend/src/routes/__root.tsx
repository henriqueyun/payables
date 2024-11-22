import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AppMain } from '../components'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Nav from '../components/Nav'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Nav/>
      <AppMain>
        <Outlet />
      </AppMain>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
