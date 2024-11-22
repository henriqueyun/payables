import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Payable } from '../../client/types/Payable'
import { HTTPClient } from '../../client/HTTPClient'
import { BlankListItem, List, ListDivider, ListItem, ListItemActions, Title } from '../../components'
import dayjs from 'dayjs'

const PayableList = () => {
  const client = new HTTPClient<Payable>('/integration/payable')

  const { isPending, error, data } = useQuery({
    queryKey: ['payables'],
    queryFn: client.getAll,
    initialData: [],
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: client.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payables'] })
    },
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Title>List</Title>
      <List>
        {!data.length &&
          <BlankListItem>
            <span>
              <strong>No payables data found</strong>
            </span>
          </BlankListItem>
        }
        {data?.map((p) => (
          <ListItem key={p.id}>
            <span>
              <strong>Value ($)</strong> {p.value}
            </span>
            <span>
              <strong>Emission Date</strong> {dayjs(p.emissionDate).format('DD/MM/YYYY')}
            </span>
            <span>
              <strong>Assignor</strong> {p.assignor}
            </span>
            <ListItemActions>
              <Link to={`/payable/details/${p.id}`}>Details</Link>
              <Link to={`/payable/update/${p.id}`}>Edit</Link>
              <Link onClick={() => mutation.mutate(p.id)}>Delete</Link>
            </ListItemActions>
            <ListDivider />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export const Route = createFileRoute('/payable/list')({
  component: PayableList,
})
