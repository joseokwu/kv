import React from 'react'
import { useHistory } from 'react-router-dom'
import FormCard from '../../../../components/formCard/FormCard'
import { Button, TextArea } from '../../../../components/index'
import imageRep from '../../../../assets/icons/circleTimes.svg'
import searchSm from '../../../../assets/icons/searchSm.svg'
import './consulting.css'

const Consulting = () => {
  const { goBack, push } = useHistory()

  return (
    <div className="mentor_details_form_wrap">
      <h3>Consultant Offerings</h3>
      <p>This will help us personalise your preferences</p>

      <FormCard>
        <section className="col-md-12 mb-4">
          <TextArea
            label={'What are your areas of service?'}
            placeholder={'Search'}
            rows={'1'}
            img={searchSm}
          />
        </section>

        <section className="col-md-4 mb-4">
          <button className="health_btn">
            Health care <img className="pl-2" src={imageRep} alt="delete" />
          </button>
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={'Write a short description of your service'}
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              'If any, what is your offer / promotion for the Knight Ventures community?'
            }
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>
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
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push('#assistant_info')
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default Consulting
