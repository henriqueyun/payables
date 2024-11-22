import { createFileRoute, redirect } from '@tanstack/react-router'
import PayableForm from '../../components/PayableForm'

const PayableCreate = () => {
  return <PayableForm action="create" />
}

export const Route = createFileRoute('/payable/create')({
  component: PayableCreate,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',
      })
    }
  },
})
