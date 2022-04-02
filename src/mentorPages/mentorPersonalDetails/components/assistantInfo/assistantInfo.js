import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  TextField,
  PhoneInput,
  TextArea,
} from '../../../../mentorComponents/index'
import './assistantInfo.css'
import FormCard from '../../../../mentorComponents/formCard/FormCard'

const AssistantInfo = () => {
  const { goBack, push } = useHistory()

  return (
    <div className="mentor_details_form_wrap">
      <h3>Assistant Info</h3>
      <p>This will help us personalise your preferences</p>
      <FormCard>
        <div className="personal_info">
          <h4>Provide your assistant’s contact info</h4>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
          <label>First Name*</label>
            <TextField
              // label={'First Name*'}
              placeholder={'Micheal'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
          <label>Last Name*</label>
            <TextField
              // label={'Last Name*'}
              placeholder={'Smith'}
              required={true}
            />
          </section>

          <section className="col-md-4 mb-4">
          <label>Country</label>
            <TextField 
              // label={'Country'} 
              placeholder={'Enter your country'} 
            />
          </section>
          <section className="col-md-4 mb-4">
          <label>State</label>
            <TextField 
              // label={'State'} 
              placeholder={'Enter your state'} 
            />
          </section>
          <section className="col-md-4 mb-4">
          <label>City</label>
            <TextField 
              // label={'City'} 
              placeholder={'Enter your city'} 
            />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'Address*'}
              placeholder={'Enter your permanent address'}
              required={true}
              rows={'1'}
            />
          </section>

          <section className="col-md-6 mb-4">
          <label className="mb-3">Email*</label>
            <TextField
              // label={'Email*'}
              placeholder={'Michealsmith@gmail.com'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <PhoneInput label="Mobile Number" />
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          onClick={() => {
            goBack()
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
         
          <Button
            label="Submit"
            onClick={() => push('/mentor/dashboard')}
          />
        </div>
      </section>
    </div>
  )
}

export default AssistantInfo
