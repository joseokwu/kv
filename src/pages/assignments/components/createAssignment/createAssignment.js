import React from 'react'
import './createAssignment.css'
import { TextArea, TextField, Select } from '../../../../components'
import compLogo from '../../../../assets/images/compLogo.svg';

export const CreateAssignment = () => {
  return (
    <div className="assignment-main">
      <div className="col-lg-12 px-4 create_assignment_form mb-4">
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
          <TextField
            label={'Deadline (day)'}
            placeholder={'Thursday 17th Oct 2021'}
          />
        </section>

        <div className="row">
          <section className="col-lg-6 mb-4">
            <Select label={'Start time'} placeholder={'Time'} />
          </section>

          <section className="col-lg-6 mb-4">
            <Select label={'End time'} placeholder={'Time'} />
          </section>
        </div>

        <section className="">
          <div>
            <p>Startups</p>
          </div>
        </section>

        <section className="d-flex justify-content-between">
          <div className="mt-4">
            <img src={compLogo} alt="company logo"/>
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="mt-4">
            <img src={compLogo} alt="company logo"/>
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="mt-4">
            <img src={compLogo} alt="company logo"/>
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
          <div className="mt-4">
            <img src={compLogo} alt="company logo"/>
            <h2 className="pt-2">Yebox Technology</h2>
          </div>
        </section>
      </div>
    </div>
  )
}
