import React, { useState } from 'react';
import { HeaderModal, ModalForm } from './teams.styled';
import { CustomModal } from '../../../../Startupcomponents/modal/Customodal';
import { ModalCus } from '../../../../Startupcomponents/modal/Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const TeamModal = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  workExperience,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleWorkDetails({
      title: formik.getFieldProps('title').value,
      location: formik.getFieldProps('location').value,
      position: formik.getFieldProps('position').value,
      description: formik.getFieldProps('description').value,
      startDate: startDate,
      endDate: checked ? 'present' : endDate,
    });
    handleClose(false);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      location: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      startDate: Yup.string().required('Required'),
      endDate: Yup.string().required('Required'),
    }),
    onSubmit: (values) => console.log('df'),
  });

  return (
    <ModalCus closeModal={handleClose}>
      <div className='mx-5'>
        <HeaderModal>Add Work Experience</HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form onSubmit={onSubmit}>
          <ModalForm className='row'>
            <div className='col-12 form-group'>
              <label>Title *</label>
              <input
                id='title'
                name='title'
                type='text'
                className='form-control ps-3'
                placeholder='CEO and Founder'
                value={workExperience[editIndex]?.title || formik.values.title}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title ? (
                <label className='error'>{formik.errors.title}</label>
              ) : null}
            </div>
            <div className='col-12 form-group'>
              <label>Location *</label>
              <input
                id='location'
                name='location'
                type='text'
                className='form-control ps-3'
                placeholder='United state of America'
                value={
                  workExperience[editIndex]?.location || formik.values.location
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <label className='error'>{formik.errors.location}</label>
              ) : null}
            </div>
            <div className='col-12 form-group'>
              <label>Company Title *</label>
              <input
                id='position'
                name='position'
                type='text'
                className='form-control ps-3'
                placeholder='gane@gmail.com'
                value={
                  workExperience[editIndex]?.position || formik.values.position
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.position && formik.errors.position ? (
                <label className='error'>{formik.errors.position}</label>
              ) : null}
            </div>
            <div className='col-12 form-group'>
              <div className='d-flex justify-content-between'>
                <label>Description *</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                id='description'
                name='description'
                cols='5'
                rows='5'
                className='form-control ps-3'
                placeholder='Tell us about your role'
                value={
                  workExperience[editIndex]?.description ||
                  formik.values.description
                }
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description ? (
                <label className='error'>{formik.errors.description}</label>
              ) : null}
            </div>
            <div className='col-12 form-group'>
              <input
                type='checkbox'
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I current work in this role</span>
            </div>
            <div className='col-6 form-group'>
              <label>Start Date *</label>
              <DatePicker
                id='startDate'
                name='startDate'
                className='p-2'
                style={{ padding: '15px' }}
                selected={workExperience[editIndex]?.startDate || startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {!checked && (
              <div className='col-6 form-group'>
                <label>End Date*</label>
                <DatePicker
                  id='endDate'
                  name='endDate'
                  className='p-2'
                  style={{ padding: '15px' }}
                  selected={workExperience[editIndex]?.endDate || endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            )}
            <div className='col-7 my-4'>
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
              className='col-4 d-flex justify-content-end'
              style={{ marginTop: '4rem' }}
            >
              <CustomButton
                type='submit'
                background='#021098'
                style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  );
};

export const EducationModal = ({ handleClose }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <ModalCus closeModal={handleClose}>
      <div className='mx-5'>
        <HeaderModal>Add Education</HeaderModal>
        <hr style={{ background: '#323232' }} />
        <form>
          <ModalForm className='row'>
            <div className='col-12 form-group'>
              <label>School*</label>
              <input
                type='text'
                className='form-control ps-3'
                placeholder='Enter School name'
              />
            </div>
            <div className='col-12 form-group'>
              <label>Degree*</label>
              <input
                type='text'
                className='form-control ps-3'
                placeholder='Enter Degree '
              />
            </div>
            <div className='col-12 form-group'>
              <label>Filed of study*</label>
              <input
                type='text'
                className='form-control ps-3'
                placeholder='Enter filed of study'
              />
            </div>
            <div className='col-12 form-group'>
              <div className='d-flex justify-content-between'>
                <label>Activities and societies*</label>
                <label style={{ color: '#828282' }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                cols='5'
                rows='6'
                className='form-control ps-3'
                placeholder='Enter Activities and Societies'
              />
            </div>

            <div className='col-6 form-group'>
              <label>Entry Date*</label>
              <DatePicker
                className='p-2'
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='col-6 form-group'>
              <label>Graduation Date*</label>
              <DatePicker
                className='p-2'
                style={{ padding: '15px' }}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='col-6 my-4'>
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
              className='col-6 d-flex justify-content-end'
              style={{ marginTop: '4rem' }}
            >
              <CustomButton
                onClick={() => handleClose(false)}
                background='#021098'
                style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  );
};
