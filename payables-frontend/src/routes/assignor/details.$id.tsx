import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Assignor } from '../../client/types/Assignor'
import { HTTPClient } from '../../client/HTTPClient'
import AssignorDetails from '../../components/AssignorDetails'

const AssignorInfo = () => {
  const { id } = Route.useParams()
  const assignorHttpClient = new HTTPClient<Assignor>('/integration/assignor')

  const { data, isPending, error } = useQuery({
    queryFn: async () => await assignorHttpClient.get(id),
    queryKey: ['assignor-details'],
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has ocurred:' + error.message

  return <AssignorDetails assignor={data} />
}

export const Route = createFileRoute('/assignor/details/$id')({
  component: AssignorInfo,
})
