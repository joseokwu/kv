import React from 'react'
import './createAssignment.css'
import {
  TextArea,
  TextField,
  Select,
  AuthButton,
} from '../../../../mentorComponents'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars'
import compLogo from '../../../../assets/images/compLogo.svg'
import Upload from '../../../../mentorComponents/upload'
import left from '../../../../assets/icons/chervonLeft.svg'
import { useHistory } from 'react-router-dom'

export const MentorCreateAssignment = ({ history }) => {
  const { goBack } = history
  const onFileChange = (files) => {
    console.log(files)
  }

  const { push } = useHistory()
  return (
    <div className="assignment_main">
      <section
        className="d-flex align-items-center mb-5"
        role="button"
        onClick={goBack}
      >
        <img src={left} alt="left" style={{ transform: 'rotate(180deg)' }} />
        <span className="ml-2 bread-start">Go Back</span>
      </section>

      <div className="col-lg-12 create_assignment_form mb-4 p-5">
        <section className="">
          <h3>Create Assignment</h3>
        </section>

        <section className="col-lg-12 mb-4 mt-4">
          <Select
            label={'Programs'}
            placeholder={'Select'}
            options={['Technology']}
          />
        </section>

        <section className="col-lg-12 mb-4">
          <TextArea label={'Topic'} placeholder={''} rows={3} />
        </section>

        <section className="col-lg-12 mb-4">
          <TextArea label={'Description'} placeholder={''} rows={3} />
        </section>

        <section className="col-lg-12 mb-4">
          <Upload onFileChange={(files) => onFileChange(files)} />
        </section>

        <div className="row col-lg-12">
        <section className="col-lg-6 mb-4">
          <TextField
            type={'date'}
            label={'Deadline (day)'}
            placeholder={'Thursday 17th Oct 2021'}
          />
        </section>

          <section className="col-lg-6 mb-4">
            <label htmlFor="">Deadline Time</label>
            <TimePickerComponent className="mt-1 py-1 px-3"
              placeholder={'00 : 00 : 00'}
            ></TimePickerComponent>
          </section>
        </div>

        <section className="">
          <div className="col-lg-12">
            <p>Startups</p>
          </div>
        </section>

        <section className="row col-lg-12 justify-content-between mb-5">
          <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className=" col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="col-lg-3 mt-4">
            <img src={compLogo} alt="company logo" />
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
        </section>
      </div>
      <div className="text-right">
        <AuthButton label="Create" onClick={() => push()} />
      </div>
    </div>
  )
}
