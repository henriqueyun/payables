import { createFileRoute, redirect } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import PayableForm from '../../components/PayableForm'
import { Payable } from '../../client/types/Payable'
import { HTTPClient } from '../../client/HTTPClient'

const PayableUpdate = () => {
  const { id } = Route.useParams()
  const payableHttpClient = new HTTPClient<Payable>('/integration/payable')

  const { data, isPending, error } = useQuery({
    queryFn: async () => await payableHttpClient.get(id),
    queryKey: ['payable-create']
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has ocurred:' + error.message
  
  return <PayableForm action="update" payable={data} />
}

export const Route = createFileRoute('/payable/update/$id')({
  component: PayableUpdate,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',

      })
    }
  },
})
