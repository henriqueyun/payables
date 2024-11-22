
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '../components'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(<Title>Welcome to Payables by Bank.me</Title>)
}
