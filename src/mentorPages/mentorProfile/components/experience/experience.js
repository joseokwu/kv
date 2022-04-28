import React, { useState } from 'react'
import './experience.css'
import edit from '../../../../assets/icons/edit.svg'
import {
  Button,
  Modal,
  TextArea,
  TextField,
  Select,
} from '../../../../mentorComponents'
import { Form } from 'antd'

const Experience = ({data}) => {
 
  return (
    <div className="profile-offering">
      <h2>Experience</h2>
      <section className="text-right pb-0">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editMentorExperience"
          role="button"
        />
        <Modal title="Experience" id="editMentorExperience">
          <EditExperience />
        </Modal>
      </section>

      {data?.experience.map((d, i) => {
        return (
          <ExperienceContent
            title={d.position}
            sub={d.companyName}
            date={`${new Date(d.start).getFullYear()} - ${new Date(d.end).getFullYear()}`}
            activity={d.activity}
            industry={d.industry}
            i={i}
            key={i}
            length={data.length}
          />
        )
      })}
    </div>
  )
}

export default Experience

const ExperienceContent = ({ title, i, length, head, sub, date , activity , industry }) => {
  return (
    <section
      className={`profile-offer-content ${
        i === length - 1 ? 'pb-0 border-0' : ''
      }`}
    >
      <h3>{title}</h3>
      <p className="mentor_experience_head">{head}</p>
      <p className="mentor_experience_sub mt-2">{sub}</p>
      <p className="mentor_experience_date mt-2">{date}</p>
      <ul>
        {
          activity.map((item, i) =>(
          <li key={i} className="mt-3">
            { item }
        </li>
          ))
        }
        
        <button type='button' > { industry} </button>
        
      </ul>
    </section>
  )
}

const EditExperience = () => {
  const [loader, setLoader] = useState(false)

  return (
    <div className="px-4 pb-4">
      <section className="mentor_consult_modal mb-4">
        <Select label={'Industry'} placeholder={'Choose option'} />
      </section>

      <div className="row">
        <section className="col-md-12 mb-4">
          <TextArea
            label={'Position*'}
            placeholder={'Ex. Managing Director'}
            rows={'1'}
          />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={'Start Date*'}
            placeholder={'dd/mm/yy'}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={'End Date*'}
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
            label={'What are your top 3-5 professional achievements?'}
            placeholder={'e.g I was made a managing director....'}
            rows={'6'}
            required={true}
          />
        </section>

        <section className="col-md-12 mb-4">
          <Select
            label={'What are your top areas or industries of expertise?'}
            placeholder={'Choose option'}
          />
        </section>

        <div className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you been one of the first 10 employees of a company that has
            been valued or exited at $5m or more?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>
      </div>

      <Form.Item>
        <div className=" text-right mb-4 mt-3">
          <Button label="Save" loading={loader} onClick={() => setLoader()} />
        </div>
      </Form.Item>
    </div>
  )
}
