import { createFileRoute } from '@tanstack/react-router'
import AssignorForm from '../../components/AssignorForm'

const AssignorCreate = () => {
  return <AssignorForm action="create"></AssignorForm>
}

export const Route = createFileRoute('/assignor/create')({
  component: AssignorCreate,
})
