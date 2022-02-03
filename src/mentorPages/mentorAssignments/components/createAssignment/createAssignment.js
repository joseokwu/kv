import React from 'react'
import './createAssignment.css'
import {
  TextArea,
  TextField,
  Select,
  AuthButton,
} from '../../../../mentorComponents'
import compLogo from '../../../../assets/images/compLogo.svg'
import Upload from '../../../../mentorComponents/upload'
import left from '../../../../assets/icons/chervonLeft.svg'
import { useHistory } from 'react-router-dom'

export const CreateAssignment = ({ history }) => {
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
          <Select label={'Programs'} placeholder={'Select'} />
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

        <section className="col-lg-12 mb-4">
          <TextField
            label={'Deadline (day)'}
            placeholder={'Thursday 17th Oct 2021'}
          />
        </section>

        <div className="row col-lg-12">
          <section className="col-lg-6 mb-4">
            <Select label={'Start time'} placeholder={'Time'} />
          </section>

          <section className="col-lg-6 mb-4">
            <Select label={'End time'} placeholder={'Time'} />
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
        <AuthButton label="Save" onClick={() => push('/assignments/view')} />
      </div>
    </div>
  )
}
