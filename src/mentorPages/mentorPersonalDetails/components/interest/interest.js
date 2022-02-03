import React from 'react'
import { useHistory } from 'react-router-dom'
import FormCard from '../../../../mentorComponents/formCard/FormCard'
import { Button, TextArea, Select } from '../../../../mentorComponents/index'
import imageRep from '../../../../assets/icons/blackPlus.svg'
import './interest.css'

const Interest = () => {
  const { goBack, push } = useHistory()

  return (
    <div className="mentor_details_form_wrap">
      <h3>Area of Interest </h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>

      <FormCard>
        <div className="row">
          <section className="col-md-12 mb-4">
            <Select label={'What industries do you have expertise in?'} />
          </section>

          <section className="col-md-12 mb-4">
            <Select label={'Please list your skills or areas of expertise'} />
          </section>

          <section className="col-md-12 mb-4">
            <Select
              label={
                'What role(s) would you like to play within the Knight Ventures Network?'
              }
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <section className="col-md-12 mb-4">
          <p className="gender_title mb-3">
            What mentor type would you prefer?
          </p>
          <section className="gender_choice">
            <button className="col-md-6 male_btn">
              Regular mentor - Dedicated office hours{' '}
            </button>
            <button className="col-md-5 pl-2 female_btn">
              Directory listing - By approval{' '}
            </button>
          </section>
        </section>

        <section className="col-md-12 mb-4">
          <Select label={'What founder type roles are you interested in?'} />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              'In clear terms, please share your mentoring experience, and how that would come to bear as a Mentor in the Knight Ventures network?'
            }
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>

        <div className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you worked in growth marketing with Startups or Tech Companies?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              'Are you interested in joining a company at a particular stage?'
            }
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              'What is your most important criterion in selecting a company to join?'
            }
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={'Please include any additional information'}
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
          />
        </section>
      </FormCard>

      <FormCard>
        <section className="upload_resume text-center mb-4">
          <button>
            <img className="mr-2" src={imageRep} alt={'upload_resume'} /> Upload
            Resume
          </button>
        </section>

        <section className="text-center mb-4">
          <p>Drag and drop file here</p>
        </section>

        <section className="upload_resume_size text-center mb-4">
          <p>File must be less than 5mb</p>
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
              push('#consulting')
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default Interest
