import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Payable } from '../../client/types/Payable'
import { Assignor } from '../../client/types/Assignor'
import { HTTPClient } from '../../client/HTTPClient'
import { Button, FormFieldSpan, FormMain, Title } from '..'


type PayableData = Payable | Omit<Payable, "id">

type PayableFormProps = { action: 'create' | 'update', payable?: PayableData }

const PayableForm = ({ action, payable }: PayableFormProps) => {


    const payableHttpClient = new HTTPClient<PayableData>('/integration/payable')
    const assignorHttpClient = new HTTPClient<Assignor>('/integration/assignor')
    const navigate = useNavigate()


    const [formPayable, setPayable] = useState<PayableData>(payable || {
        value: 0,
        emissionDate: new Date(),
        assignor: ''
    })

    useEffect(() => {
        if (payable) {
            setPayable((_) => payable)
        }
    }, [payable])

    const mutation = useMutation({
        mutationFn: (p: PayableData) => {
            const payableHasId = !!("id" in p)
            const isUpdate = action === 'update' && payableHasId

            // TODO: also check how to throw error in a mutation and assert both isUpdate or isCreate can't be false at the same time
            if (isUpdate) {
                return payableHttpClient.patch(p.id, p)
            } else {
                return payableHttpClient.post(p)
            }

        },
        onSuccess: () => {
            navigate({ to: '/payable/list' })
        },
    })

    const { data, isPending, error } = useQuery({
        queryKey: [`assignor-${action}${"id" in formPayable && `-${formPayable.id}`}`],
        queryFn: assignorHttpClient.getAll,
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <FormMain>
            <Title>Payable {action === 'create' ? 'Register' : 'Edit'}</Title>
            {
                "id" in formPayable &&
                <FormFieldSpan>
                    <label>ID:</label>
                    <input
                        name="id"
                        placeholder="ID"
                        type="string"
                        min="0"
                        value={formPayable.id}
                        disabled
                        readOnly
                    />
                </FormFieldSpan>
            }
            <FormFieldSpan>
                <label>Value</label>
                <input
                    name="value"
                    placeholder="Type the value"
                    type="number"
                    min="0"
                    value={formPayable.value}
                    onChange={(e) =>
                        setPayable((p) => ({ ...p, value: +e.target.value }))
                    }
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Emission Date</label>
                <input
                    name="emission_date"
                    placeholder="dd-mm-yyyy"
                    type="date"
                    value={dayjs(formPayable.emissionDate).format('YYYY-MM-DD')}
                    onChange={(e) =>
                        setPayable((p) => {
                            const [year, month, day] = e.target.value.split(
                                '-',
                            ) as unknown as number[]
                            return { ...p, emissionDate: new Date(year, month - 1, day) }
                        })
                    }
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Assignor</label>
                <select
                    name="assignor"
                    value={formPayable.assignor || ''}
                    onChange={(e) =>
                        setPayable((p) => ({ ...p, assignor: e.target.value }))
                    }
                >
                    <option>Select an assignor</option>
                    {data?.map((assignor: Assignor) => (
                        <option key={assignor.id} data-value={assignor.id}>
                            {assignor.id}
                        </option>
                    ))}
                </select>
            </FormFieldSpan>

            <Button
                type="button"
                onClick={() => {
                    mutation.mutate(formPayable)
                }}
            >
                Save
            </Button>
        </FormMain>
    )
}

export default PayableForm