import { createFileRoute, redirect } from '@tanstack/react-router'
import { Title } from '../components'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',

      })
    }
  },
})

function RouteComponent() {
  return <Title>Welcome to Payables by Bank.me</Title>
}
