import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import PayableForm from '../../components/PayableForm'
import { Payable } from '../../client/types/Payable'
import { HTTPClient } from '../../client/HTTPClient'

const PayableCreate = () => {
  const { id } = Route.useParams()
  const payableHttpClient = new HTTPClient<Payable>('/integration/payable')

  const { data, isPending, error } = useQuery({
    queryFn: async () => await payableHttpClient.get(id),
    queryKey: ['payable']
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has ocurred:' + error.message
  
  return <PayableForm action="update" payable={data} />
}

export const Route = createFileRoute('/payable/update/$id')({
  component: PayableCreate,
})
