import React, { useState } from 'react'
import { HeaderModal, ModalForm } from './teams.styled'
import { CustomModal } from '../../../../Startupcomponents/modal/Customodal'
import { ModalCus } from '../../../../Startupcomponents/modal/Modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'

export const TeamModal = ({ handleClose }) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <ModalCus closeModal={handleClose}>
      <div className="mx-5">
        <HeaderModal>Add Work Experience</HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form>
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>Title *</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="CEO and Founder"
              />
            </div>
            <div className="col-12 form-group">
              <label>Location *</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="United state of America"
              />
            </div>
            <div className="col-12 form-group">
              <label>Company Title *</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="gane@gmail.com"
              />
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Description *</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                cols="5"
                rows="5"
                className="form-control ps-3"
                placeholder="Tell us about your role"
              />
            </div>
            <div className="col-12 form-group">
              <input type="checkbox" />
              <span>I current work in this role</span>
            </div>
            <div className="col-6 form-group">
              <label>Start Date *</label>
              <DatePicker
                className="p-2"
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-6 form-group">
              <label>End Date*</label>
              <DatePicker
                className="p-2"
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-7 my-4">
              <span
                style={{
                  color: '#120297',
                  borderBottom: '1px solid #120297',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Add another work experience +
              </span>
            </div>
            <div
              className="col-4 d-flex justify-content-end"
              style={{ marginTop: '4rem' }}
            >
              <CustomButton
                onClick={() => handleClose(false)}
                background="#021098"
                style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  )
}

export const EducationModal = ({ handleClose }) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <ModalCus closeModal={handleClose}>
      <div className="mx-5">
        <HeaderModal>Add Education</HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form>
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>School*</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="Enter School name"
              />
            </div>
            <div className="col-12 form-group">
              <label>Degree*</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="Enter Degree "
              />
            </div>
            <div className="col-12 form-group">
              <label>Filed of study*</label>
              <input
                type="text"
                className="form-control ps-3"
                placeholder="Enter filed of study"
              />
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Activities and societies*</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                cols="5"
                rows="6"
                className="form-control ps-3"
                placeholder="Enter Activities and Societies"
              />
            </div>

            <div className="col-6 form-group">
              <label>Entry Date*</label>
              <DatePicker
                className="p-2"
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-6 form-group">
              <label>Graduation Date*</label>
              <DatePicker
                className="p-2"
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-6 my-4">
              <span
                style={{
                  color: '#120297',
                  borderBottom: '1px solid #120297',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Add another education +
              </span>
            </div>
            <div
              className="col-6 d-flex justify-content-end"
              style={{ marginTop: '4rem' }}
            >
              <CustomButton
                onClick={() => handleClose(false)}
                background="#021098"
                style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  )
}
