import { FormFieldSpan, FormMain, FormTitle } from "../components"

const PayableForm = () => {
  return (
    <FormMain>
      <FormTitle>
        Payable Register
      </FormTitle>
      <FormFieldSpan>
        <label>Value</label>
        <input name="value" placeholder="Type the value" type="text" />
      </FormFieldSpan>

      <FormFieldSpan>
        <label>Emission Date</label>
        <input name="emission_date" placeholder="Type the emission date" type="text" />
      </FormFieldSpan>


      <FormFieldSpan>
        <label>Assignor</label>
        <input name="assignor" placeholder="Type the assignor identification" type="text" /> {/* TODO: change it to a combobox listing assignors */}
      </FormFieldSpan>

      <input type="button" value="Register" onClick={(e) => alert('Registered')} />
    </FormMain>
  )
}

export default PayableForm