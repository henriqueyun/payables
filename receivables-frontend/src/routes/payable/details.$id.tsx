import { createFileRoute, redirect } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Payable } from '../../client/types/Payable'
import { HTTPClient } from '../../client/HTTPClient'
import PayableDetails from '../../components/PayableDetails'

const PayableInfo = () => {
  const { id } = Route.useParams()
  const payableHttpClient = new HTTPClient<Payable>('/integration/payable')

  const { data, isPending, error } = useQuery({
    queryFn: async () => await payableHttpClient.get(id),
    queryKey: ['payable-details'],
  })

  if (isPending) return 'Loading...'
  if (error) return 'An error has ocurred:' + error.message

  return <PayableDetails payable={data} />
}

export const Route = createFileRoute('/payable/details/$id')({
  component: PayableInfo,
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',

      })
    }
  },
})
