import React, { useState } from 'react'
import { HeaderModal, ModalForm } from './teams.styled'
import { CustomModal } from '../../../../Startupcomponents/modal/Customodal'
import { ModalCus } from '../../../../Startupcomponents/modal/Modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useActivity } from '../../../../hooks/useBusiness'

export const TeamModal = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  workExperience,
  isEditing,
  setIsEditing,
}) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [checked, setChecked] = useState(false)

  const onSubmit = (e, from) => {
    e.preventDefault()
    handleWorkDetails({
      from,
      companyName: formik.getFieldProps('companyName').value,
      location: formik.getFieldProps('location').value,
      position: formik.getFieldProps('position').value,
      responsibility: formik.getFieldProps('responsibility').value,
      startDate: startDate.toISOString(),
      endDate: checked ? 'present' : endDate.toISOString(),
      founder: true,
    })
    handleClose(false)
  }

  const formik = useFormik({
    initialValues: {
      companyName: '',
      location: '',
      position: '',
      responsibility: '',
      startDate: '',
      endDate: '',
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      responsibility: Yup.string().required('Required'),
      startDate: Yup.string().required('Required'),
      endDate: Yup.string().required('Required'),
    }),
    onSubmit: (values) => console.log('df'),
  })

  return (
    <ModalCus
      closeModal={() => {
        setIsEditing(false)
        handleClose()
      }}
    >
      <div className="mx-5">
        <HeaderModal>
          {isEditing ? 'Edit Work Experience' : 'Add Work Experience'}
        </HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form onSubmit={(e) => onSubmit(e, 'workExperience')}>
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>Title *</label>
              <input
                id="title"
                name="companyName"
                type="text"
                className="form-control ps-3"
                placeholder="CEO and Founder"
                value={
                  isEditing
                    ? workExperience[editIndex]?.companyName
                    : formik.values.companyName
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title ? (
                <label className="error">{formik.errors.title}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Location *</label>
              <input
                id="location"
                name="location"
                type="text"
                className="form-control ps-3"
                placeholder="United state of America"
                value={
                  isEditing
                    ? workExperience[editIndex]?.location
                    : formik.values.location
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <label className="error">{formik.errors.location}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Company Title *</label>
              <input
                id="position"
                name="position"
                type="text"
                className="form-control ps-3"
                placeholder="gane@gmail.com"
                value={
                  isEditing
                    ? workExperience[editIndex]?.position
                    : formik.values.position
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.position && formik.errors.position ? (
                <label className="error">{formik.errors.position}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Description *</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                id="description"
                name="responsibility"
                cols="5"
                rows="5"
                className="form-control ps-3"
                placeholder="Tell us about your role"
                value={
                  isEditing
                    ? workExperience[editIndex]?.responsibility
                    : formik.values.responsibility
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description ? (
                <label className="error">{formik.errors.description}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I current work in this role</span>
            </div>
            <div className="col-6 form-group">
              <label>Start Date *</label>
              <DatePicker
                id="startDate"
                name="startDate"
                className="p-2"
                style={{ padding: '15px' }}
                selected={
                  isEditing ? workExperience[editIndex]?.startDate : startDate
                }
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {!checked && (
              <div className="col-6 form-group">
                <label>End Date*</label>
                <DatePicker
                  id="endDate"
                  name="endDate"
                  className="p-2"
                  style={{ padding: '15px' }}
                  selected={
                    isEditing ? workExperience[editIndex]?.endDate : endDate
                  }
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            )}

            <div
              className="col-12 d-flex justify-content-end"
              style={{ marginTop: '4rem' }}
            >
              <CustomButton
                type="submit"
                background="#021098"
                // style={{ marginLeft: '7rem' }}
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

export const EducationModal = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  education,
  isEditing,
  setIsEditing,
}) => {
  const [eduStartDate, setEduStartDate] = useState(new Date())
  const [eduEndDate, setEduEndDate] = useState(new Date())
  const [checked, setChecked] = useState(false)

  const onSubmit = (e, from) => {
    e.preventDefault()
    handleWorkDetails({
      from,
      schoolName: formik.getFieldProps('schoolName').value,
      course: formik.getFieldProps('course').value,
      degree: formik.getFieldProps('degree').value,
      activities: formik.getFieldProps('activities').value,
      eduStartDate: eduStartDate.toISOString(),
      eduEndDate: checked ? 'present' : eduEndDate.toISOString(),
      founder: true,
    })
    handleClose(false)
  }

  const formik = useFormik({
    initialValues: {
      schoolName: '',
      course: '',
      degree: '',
      activities: '',
      eduStartDate: '',
      eduEndDate: '',
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required('Required'),
      course: Yup.string().required('Required'),
      degree: Yup.string().required('Required'),
      activities: Yup.string().required('Required'),
      eduStartDate: Yup.string().required('Required'),
      eduEndDate: Yup.string().required('Required'),
    }),
    onSubmit: (values) => console.log('df'),
  })

  return (
    <ModalCus
      closeModal={() => {
        setIsEditing(false)
        handleClose()
      }}
    >
      <div className="mx-5">
        <HeaderModal>
          {isEditing ? 'Edit Education' : 'Add Education'}
        </HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form onSubmit={(e) => onSubmit(e, 'education')}>
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>School*</label>
              <input
                id="school"
                name="schoolName"
                type="text"
                className="form-control ps-3"
                placeholder="Enter School name"
                value={
                  isEditing
                    ? education[editIndex]?.schoolName
                    : formik.values.schoolName
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.school && formik.errors.school ? (
                <label className="error">{formik.errors.school}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Degree*</label>
              <input
                id="degree"
                name="degree"
                type="text"
                className="form-control ps-3"
                placeholder="Enter Degree "
                value={
                  isEditing
                    ? education[editIndex]?.degree
                    : formik.values.degree
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.degree && formik.errors.degree ? (
                <label className="error">{formik.errors.degree}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Field of study*</label>
              <input
                id="course"
                name="course"
                type="text"
                className="form-control ps-3"
                placeholder="Enter filed of study"
                value={
                  isEditing
                    ? education[editIndex]?.course
                    : formik.values.course
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.course && formik.errors.course ? (
                <label className="error">{formik.errors.course}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Activities and societies*</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                id="activities"
                name="activities"
                cols="5"
                rows="6"
                className="form-control ps-3"
                placeholder="Enter Activities and Societies"
                value={
                  isEditing
                    ? education[editIndex]?.activities
                    : formik.values.activities
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.activities && formik.errors.activities ? (
                <label className="error">{formik.errors.activities}</label>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I current school here.</span>
            </div>

            <div className="col-6 form-group">
              <label>Entry Date*</label>
              <DatePicker
                id="eduStartDate"
                name="eduStartDate"
                className="p-2"
                style={{ padding: '15px' }}
                selected={
                  isEditing ? education[editIndex]?.eduStartDate : eduStartDate
                }
                onChange={(date) => setEduStartDate(date)}
              />
            </div>

            {!checked && (
              <div className="col-6 form-group">
                <label>Graduation Date*</label>
                <DatePicker
                  id="eduEndDate"
                  name="eduEndDate"
                  className="p-2"
                  style={{ padding: '15px' }}
                  selected={
                    isEditing ? education[editIndex]?.eduEndDate : eduEndDate
                  }
                  onChange={(date) => setEduEndDate(date)}
                />
              </div>
            )}

            <div
              className="col-12 d-flex justify-content-end"
              style={{ marginTop: '2rem' }}
            >
              <CustomButton
                type="submit"
                background="#021098"
                // style={{ marginLeft: '7rem' }}
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
