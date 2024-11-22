import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Assignor } from '../../client/types/Assignor'
import { HTTPClient } from '../../client/HTTPClient'
import { FormFieldSpan, FormMain, Title } from '..'


type AssignorData = Assignor | Omit<Assignor, "id">

type AssignorFormProps = { action: 'create' | 'update', assignor?: AssignorData }

const AssignorForm = ({ action, assignor }: AssignorFormProps) => {

    const assignorHttpClient = new HTTPClient<AssignorData>('/integration/assignor')
    const navigate = useNavigate()


    const [formAssignor, setAssignor] = useState<AssignorData>(assignor || {
        name: '',
        phone: '',
        email: '',
        document: ''
    })

    useEffect(() => {
        if (assignor) {
            setAssignor((_old) => assignor)
        }
    }, [assignor])

    const mutation = useMutation({
        mutationFn: (p: AssignorData) => {
            const assignorHasId = !!("id" in p)
            const isUpdate = action === 'update' && assignorHasId

            // TODO: check how to throw error in a mutation and assert both isUpdate or isCreate can't be false at the same time
            if (isUpdate) {
                return assignorHttpClient.patch(p.id, p)
            } else {
                return assignorHttpClient.post(p)
            }

        },
        onSuccess: () => {
            navigate({ to: '/payable/list' })
        },
    })

    return (
        <FormMain>
            <Title>Assignor {action === 'create' ? 'Register' : 'Edit'}</Title>
            {
                "id" in formAssignor &&
                <FormFieldSpan>
                    <label>ID:</label>
                    <input
                        name="id"
                        placeholder="ID"
                        type="string"
                        min="0"
                        value={formAssignor.id}
                        disabled
                        readOnly
                    />
                </FormFieldSpan>
            }
            <FormFieldSpan>
                <label>Name</label>
                <input
                    name="name"
                    placeholder="Type the name"
                    type="input"
                    value={formAssignor.name}
                    onChange={(e) =>
                        setAssignor((p) => ({ ...p, name: e.target.value }))
                    }
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>E-mail</label>
                <input
                    name="email"
                    placeholder="Type the e-mail"
                    type="email"
                    value={formAssignor.email}
                    onChange={(e) =>
                        setAssignor((p) => ({ ...p, email: e.target.value }))
                    }
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Phone</label>
                <input
                    name="phone"
                    placeholder="Type the phone number"
                    type="tel"
                    value={formAssignor.name}
                    onChange={(e) =>
                        setAssignor((p) => ({ ...p, phone: e.target.value }))
                    }
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Document</label>
                <input
                    name="document"
                    placeholder="Type the name"
                    type="input"
                    value={formAssignor.name}
                    onChange={(e) =>
                        setAssignor((p) => ({ ...p, name: e.target.value }))
                    }
                />
            </FormFieldSpan>

            <input
                type="button"
                value="Register"
                onClick={() => {
                    mutation.mutate(formAssignor)
                }}
            />
        </FormMain>
    )
}

export default AssignorForm