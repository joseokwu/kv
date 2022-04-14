import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  TextField,
  TextArea,
  Select,
} from '../../../../mentorComponents/index'
import FormCard from '../../../../mentorComponents/formCard/FormCard'
import imageRep from '../../../../assets/icons/plus.svg'
import './workExperience.css'
import { useActivity } from '../../../../hooks/useBusiness'
import { toast } from 'react-toastify'
import { updateMentorProfile } from '../../../../services/mentor'
import { useFormik } from 'formik'
import { useAuth } from '../../../../hooks/useAuth'
import { CircularLoader } from '../../../../mentorComponents/CircluarLoader/CircularLoader'


const WorkExperience = () => {
  const { goBack, push } = useHistory()
  const { stateAuth } = useAuth()
  const {
    changePath,
    state: { path },
  } = useActivity()

  const back = () => {
    changePath(path - 1)
  }

  const next = () => {
    changePath(path + 1)
  }

  const [currentFounder, setCurrentFounder] = useState()
  const [loading, setLoading] = useState(false)
  const [opts, setOpts] = useState('')
  const [nextloading, setNextLoading] = useState(false)
  const [startDate, setStartDate] = useState()

  const onSubmit = async (value) => {
    try {
      const workexperience = {
        type: 'workExperience',
        accType: 'mentor',
        values:{
          ...value,
        },
        userId: stateAuth?.user?.userId,
      }
      console.log(workexperience)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateMentorProfile(workexperience)

        if(result?.success) {
          toast.success('Work experience' + '' + result?.message)
          setOpts(false)
          return changePath(path + 1)
        }
      }
      setLoading(true)
      let result = await updateMentorProfile(workexperience)

      if (!result?.success) {
        toast.error(result?.message || 'There was an error in work experience')
        setLoading(false)
        return
      }
      toast.success('Work experience' + ' ' + result?.message)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      toast.error(
        err?.response?.data?.message ||
          'There was an error in updating work experience',
      )
    }
  }

  const formik = useFormik ({
    initialValues: {

    },
    onSubmit: (value) => onSubmit(value),
  })



  return (
    <div className="mentor_details_form_wrap">
      <h3>Work Experience</h3>
      <p>You are required to add a current experence.</p>

    <form onSubmit={formik.handleSubmit}>
      <FormCard>
        <div className="mb-4">
          <p className="offer-text pt-2 pb-2">
            Are you a past or current founder of a company?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>

        <div className="row">
          <section className="col-md-12 mb-4">
            <Select label={'Industry'} />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'Company Name*'}
              placeholder={'Enter company name'}
              rows={'1'}
              required={true}
            />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'What are your top  achievements?'}
              placeholder={'e.g I was made a managing director....'}
              rows={'6'}
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="mb-4 mt-5">
          <p className="offer-text pt-2">
            Are you a past or current founder of a company?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>

        <div className="row">
          <section className="col-md-12 mb-4">
            <Select label={'Industry'} />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'Position*'}
              placeholder={'Ex. Managing Director'}
              required={true}
              rows={'1'}
            />
          </section>

          <section className="col-md-6 mb-4">
            <label>Start Date*</label>
            <TextField
              // label={'Start Date*'}
              type={'date'}
              placeholder={'dd/mm/yy'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <label>End Date*</label>
            <TextField
              // label={'End Date*'}
              placeholder={'dd/mm/yy'}
              required={true}
            />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'Company Name*'}
              placeholder={'Enter company name'}
              rows={'1'}
              required={true}
            />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={'What are your top  professional achievements?'}
              placeholder={'e.g I was made a managing director....'}
              rows={'6'}
            />
          </section>

          <div className="mb-4">
            <p className="offer-text pt-2 pb-2">
              Have you ever been among the first set of employees in a company
              that was valued or exited at $5M?
            </p>
            <section className="free-choice">
              <button className="yes-btn">Yes</button>
              <button className="no-btn">No</button>
            </section>
          </div>
        </div>
      </FormCard>

      <section className="col-md-12 mb-4">
        <p className="add_another_experience">
          <img className="mr-2" src={imageRep} alt="plus" />
          Add Another Experience
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          style={{ background: '#c4c4c4' }}
          className="back-btn"
          onClick={back}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button
            type="submit"
            // onClick={() => push('/mentor/dashboard')}
            label="Save"
            disabled={loading}
            variant="secondary"
          >
            {loading ? <CircularLoader /> : 'Save'}
          </Button>

          <Button
            label="Next"
            background="#2E3192"
            type="submit"
            disabled={nextloading}
            onClick={() => {
              setOpts('next')
            }}
          >
            {nextloading ? <CircularLoader /> : 'Next'}
          </Button>
        </div>
      </section>
      </form>
    </div>
    
  )
}

export default WorkExperience
