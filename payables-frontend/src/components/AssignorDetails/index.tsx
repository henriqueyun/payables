import { Assignor } from '../../client/types/Assignor'
import { FormFieldSpan, FormMain, Subtitle, Title } from '..'


const AssignorDetails = ({ assignor }: { assignor: Assignor }) => {
    return (
        <FormMain>
            <Title>Assignor Details</Title>
            <FormFieldSpan>
                <label>ID:</label>
                <input
                    name="id"
                    type="string"
                    min="0"
                    value={assignor.id}
                    disabled
                    readOnly
                />
            </FormFieldSpan>
            <FormFieldSpan>
                <label>Name</label>
                <input
                    name="name"
                    type="input"
                    value={assignor.name}
                    disabled
                    readOnly
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>E-mail</label>
                <input
                    name="email"
                    type="email"
                    value={assignor.email}
                    disabled
                    readOnly
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Phone</label>
                <input
                    name="phone"
                    type="tel"
                    value={assignor.phone}
                    disabled
                    readOnly
                />
            </FormFieldSpan>

            <FormFieldSpan>
                <label>Document</label>
                <input
                    name="document"
                    placeholder="Type the name"
                    type="input"
                    value={assignor.document}
                    disabled
                    readOnly
                />
            </FormFieldSpan>
        </FormMain>
    )
}

export default AssignorDetails