import { createFileRoute } from '@tanstack/react-router'
import { FormFieldSpan, FormMain, Title } from '../../components'

const AssignorForm = () => {
  return (
    <FormMain>
      <Title>Payable Register</Title>
      <FormFieldSpan>
        <label>Name</label>
        <input name="name" placeholder="Type your name" type="text" />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>E-mail</label>
        <input name="email" placeholder="Type your e-mail" type="email" />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Phone</label>
        <input name="phone" placeholder="Type your phone" type="tel" />{' '}
        {/* TODO: check the business rules to see if tel need to be checked */}
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Document</label>
        <input name="document" placeholder="Type your document" type="text" />
      </FormFieldSpan>

      <input
        type="button"
        value="Register"
        onClick={(e) => alert('Registered')}
      />
    </FormMain>
  )
}

export const Route = createFileRoute('/assignor/')({
  component: AssignorForm,
})
