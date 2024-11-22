import dayjs from 'dayjs'
import { Payable } from '../../client/types/Payable'
import { FormActions, FormFieldSpan, FormMain, Subtitle, Title } from '..'
import { Link } from '@tanstack/react-router'


const PayableDetails = ({ payable }: { payable: Payable }) => {
    return (
        <FormMain>
            <Title>Payable</Title>
            <Subtitle>Details</Subtitle>
            {
                "id" in payable &&
                <FormFieldSpan>
                    <label>ID:</label>
                    <input
                        name="id"
                        placeholder="ID"
                        type="string"
                        min="0"
                        value={payable.id}
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
                    value={payable.value}
                    disabled
                    readOnly
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Emission Date</label>
                <input
                    name="emission_date"
                    placeholder="dd-mm-yyyy"
                    type="date"
                    value={dayjs(payable.emissionDate).format('YYYY-MM-DD')}
                    disabled
                    readOnly
                />
            </FormFieldSpan>

            <Subtitle>Assignor</Subtitle>
            <FormFieldSpan>
                <label>Assignor</label>
                <input
                    name="assignor"
                    type="input"
                    value={payable.assignor}
                    disabled
                    readOnly
                />
                <FormActions>
                    <Link to={`/assignor/details/${payable.assignor}`}>Details</Link>
                </FormActions>
            </FormFieldSpan>
        </FormMain>
    )
}

export default PayableDetails