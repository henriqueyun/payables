import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Payable } from '../../client/types/Payable'
import { HTTPClient } from '../../client/HTTPClient'
import { Title } from '../../components'
import styled from 'styled-components'
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

  const PayableList = styled.ul`
    display: flex;
    height: 600px;
    gap: 32px;
    flex-flow: column nowrap;
    overflow-y: scroll;
    border: 4px solid dimgrey;
    border-radius: 5px;
    padding: 16px;
    @media (max-size: 500px) {
      border-color: 1px solid #0a36b0d9;
      max-width: 300px;
    }
  `

  const PayableItem = styled.li`
    border: 3px solid #0a36b0d9;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
    width: 75%;
    padding: 16px;
    margin: 0 auto;
  `

  const PayableItemActions = styled.span`
    display: flex;
    gap: 8px;
  `

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Title>Payables List</Title>
      <PayableList>
        {data?.map((p) => (
          <PayableItem key={p.id}>
            <span>
              <strong>Value</strong> {p.value}
            </span>
            <span>
              <strong>Emission Date</strong>{' '}
              {dayjs(p.emissionDate).format('DD/MM/YYYY')}
            </span>
            <span>
              <strong>Assignor</strong> {p.assignor}
            </span>
            <PayableItemActions>
              <Link to={`/payable/details/${p.id}`}>Details</Link>
              <Link to={`/payable/update/${p.id}`}>Edit</Link>
              <Link onClick={() => mutation.mutate(p.id)}>Erase</Link>
            </PayableItemActions>
          </PayableItem>
        ))}
      </PayableList>
    </>
  )
}

export const Route = createFileRoute('/payable/list')({
  component: PayableList,
})