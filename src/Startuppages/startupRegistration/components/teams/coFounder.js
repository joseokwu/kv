import React, { useState } from 'react';
import {
  ImageWrapper,
  CoInputWrapper,
  FormWrapper,
  HeaderModal,
  ModalForm,
} from './teams.styled';
import {
  LargeModal,
  WorkExperience,
  Education,
} from '../../../../Startupcomponents';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useActivity } from '../../../../hooks/useBusiness';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-number-input';
import { Select } from 'antd';
import { TeamModal, EducationModal } from './teamModal';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast';
import { team } from './../../../../services/startUpReg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const { Option } = Select;

export const CoFounder = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  setEditIndex,
  workExperienceCoFounder,
  educationCoFounder,
  isEditing,
  setIsEditing,
}) => {
  const [disImg, setImg] = useState(null);
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express'];
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eduStartDate, setEduStartDate] = useState(new Date());
  const [eduEndDate, setEduEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [displayWorkExperience, setDisplayWorkExperience] = useState();
  const [displayEducation, setDisplayEducation] = useState();

  const onChangeImage = (e) => {
    const { files } = e.target;

    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]));
    }
  };

  const children = [];
  for (let i = 0; i < skill.length; i++) {
    children.push(<Option key={i}>{skill[i]}</Option>);
  }

  function handleChange(value) {
    // console.log(`selected ${value}`);
  }

  const {
    changePath,
    state: { path },
  } = useActivity();

  const back = () => {
    changePath(path - 1);
  };

  const save = () => {
    changePath(path + 0);
  };

  const onSubmit = (e, from) => {
    e.preventDefault();
    handleWorkDetails({
      from,
      title: formik.getFieldProps('title').value,
      location: formik.getFieldProps('location').value,
      position: formik.getFieldProps('position').value,
      description: formik.getFieldProps('description').value,
      startDate: startDate,
      endDate: checked ? 'present' : endDate,
      school: formik.getFieldProps('school').value,
      course: formik.getFieldProps('course').value,
      degree: formik.getFieldProps('degree').value,
      activities: formik.getFieldProps('activities').value,
      eduStartDate: eduStartDate,
      eduEndDate: checked ? 'present' : eduEndDate,
      founder: false,
    });
    formik.resetForm({
      values: {
        title: '',
        location: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        school: '',
        course: '',
        degree: '',
        activities: '',
        eduStartDate: '',
        eduEndDate: '',
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      briefIntroduction: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: startDate,
      country: '',
      state: '',
      city: '',
      mobile_number: phone,
      skills: [],
      experience: [],
      education: [],
      linkedIn: '',
      twitter: '',
      website: '',
      title: '',
      location: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
      school: '',
      course: '',
      degree: '',
      activities: '',
      eduStartDate: '',
      eduEndDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
      position: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      startDate: Yup.string().required('Required'),
      endDate: Yup.string().required('Required'),
      school: Yup.string().required('Required'),
      course: Yup.string().required('Required'),
      degree: Yup.string().required('Required'),
      activities: Yup.string().required('Required'),
      eduStartDate: Yup.string().required('Required'),
      eduEndDate: Yup.string().required('Required'),
    }),
    onSubmit: (value) => onSubmit(value),
  });

  return (
    <div className='px-3'>
      {show ? <TeamModal handleClose={setShow} /> : <span></span>}
      {showEducation ? (
        <EducationModal handleClose={setShowEducation} />
      ) : (
        <span></span>
      )}

      <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
        <FormWrapper height='70%'>
          <div className='div'>
            <span>Co-Founder</span>
            <p>A brief profile of co-founders</p>
          </div>

          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <ImageWrapper>
              {disImg === null ? (
                <UserOutlined />
              ) : (
                <img
                  className=''
                  src={disImg}
                  style={{
                    borderRadius: '70px',
                    width: '90px',
                    height: '90px',
                  }}
                  alt=''
                />
              )}
            </ImageWrapper>

            <CoInputWrapper for='found'>
              <input type='file' onChange={onChangeImage} id='found' hidden />
              <PlusOutlined style={{ color: '#ffffff' }} />
            </CoInputWrapper>
          </div>

          <div className='row my-3'>
            <div className='form-group col-12'>
              <div className='d-flex justify-content-between'>
                <label>Brief Introduction *</label>
                <label style={{ color: '#828282' }}>10 words at most</label>
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.briefIntroduction}
                type='text'
                name='briefIntroduction'
                placeholder='Enter a brief bio about yourself'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-6 col-12'>
              <label>First Name *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type='text'
                name='firstName'
                placeholder='Enter first name'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-6 col-12'>
              <label>Last Name *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type='text'
                name='lastName'
                placeholder='Enter last name'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-6 col-12'>
              <label>Email *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                type='text'
                name='email'
                placeholder='Enter email address'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group  col-lg-6 col-12'>
              <label>Date of Birth *</label>
              <DatePicker
                className='custs p-2'
                style={{ padding: '15px' }}
                selected={startDate}
                placeholderText='yyyy-mm-dd'
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className='form-group col-lg-4 col-12'>
              <label>Country *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.country}
                type='text'
                name='country'
                placeholder='Enter your country'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-4 col-12'>
              <label>State *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.state}
                type='text'
                name='state'
                placeholder='Enter your state'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-4 col-12'>
              <label>City *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.city}
                type='text'
                name='city'
                placeholder='Enter your city'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-6 '>
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name='phone'
                countryCallingCodeEditable={true}
                className='custs w-lg-50 ps-1'
                value={phone}
                onChange={setPhone}
                placeholder='0000 00000 0000'
              />
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height='80%'>
          {/* <div className="div">
            <span>Work Experience</span>
          </div>
          <hr />
          <div>
            <span
              onClick={() => setShow(true)}
              style={{
                color: '#120297',
                borderBottom: '1px solid #120297',
                fontWeight: '600',
                cursor: ' pointer',
              }}
            >
              Add work experience +{' '}
            </span>
          </div> */}
          {!displayWorkExperience ? (
            <div className='mx-5'>
              <HeaderModal>
                {' '}
                {isEditing ? 'Edit Work Experience' : 'Add Work Experience'}
              </HeaderModal>
              <hr style={{ background: '#323232' }} />
              <form>
                <ModalForm className='row'>
                  <div className='col-12 form-group'>
                    <label>Title *</label>
                    <input
                      id='title'
                      name='title'
                      type='text'
                      className='form-control ps-3'
                      placeholder='CEO and Founder'
                      value={
                        workExperienceCoFounder[editIndex]?.title ||
                        formik.values.title
                      }
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
                        workExperienceCoFounder[editIndex]?.location ||
                        formik.values.location
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
                        workExperienceCoFounder[editIndex]?.position ||
                        formik.values.position
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
                        workExperienceCoFounder[editIndex]?.description ||
                        formik.values.description
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <label className='error'>
                        {formik.errors.description}
                      </label>
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
                      selected={
                        workExperienceCoFounder[editIndex]?.startDate ||
                        startDate
                      }
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
                        selected={
                          workExperienceCoFounder[editIndex]?.endDate || endDate
                        }
                        onChange={(date) => setEndDate(date)}
                      />
                    </div>
                  )}

                  <div
                    className='col-12 d-flex justify-content-between'
                    style={{ marginTop: '4rem' }}
                  >
                    {displayWorkExperience === false && (
                      <CustomButton
                        background='#D0D0D1'
                        onClick={() => setDisplayWorkExperience(true)}
                      >
                        Cancel
                      </CustomButton>
                    )}

                    <CustomButton
                      type='button'
                      onClick={(e) => {
                        onSubmit(e, 'workExperience');
                        setDisplayWorkExperience(true);
                      }}
                      background='#021098'
                      style={{
                        marginLeft: displayWorkExperience ? '7rem' : '0rem',
                      }}
                    >
                      Save
                    </CustomButton>
                  </div>
                </ModalForm>
              </form>
            </div>
          ) : (
            <div className='mx-5'>
              <HeaderModal>Work Experience</HeaderModal>
              <hr style={{ background: '#323232' }} />
              {workExperienceCoFounder.length > 0 &&
                workExperienceCoFounder.map((item, index) => {
                  return (
                    <WorkExperience
                      key={index}
                      {...item}
                      showTeamModal={() => setDisplayWorkExperience(false)}
                      setEditIndex={setEditIndex}
                      setIsEditing={setIsEditing}
                      id={index}
                    />
                  );
                })}
              <div className='col-7 my-4'>
                <span
                  style={{
                    color: '#120297',
                    borderBottom: '1px solid #120297',
                    fontWeight: '600',
                    marginTop: '10px',
                  }}
                  onClick={() => setDisplayWorkExperience(false)}
                >
                  Add another work experience +
                </span>
              </div>
            </div>
          )}
        </FormWrapper>

        <FormWrapper height='70%'>
          {!displayEducation ? (
            <div className='mx-5'>
              <HeaderModal>
                {isEditing ? 'Edit Education' : 'Add Education'}
              </HeaderModal>
              <hr style={{ background: '#323232' }} />
              <form>
                <ModalForm className='row'>
                  <div className='col-12 form-group'>
                    <label>School*</label>
                    <input
                      id='school'
                      name='school'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter School name'
                      value={
                        educationCoFounder[editIndex]?.school ||
                        formik.values.school
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.school && formik.errors.school ? (
                      <label className='error'>{formik.errors.school}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Degree*</label>
                    <input
                      id='degree'
                      name='degree'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter Degree '
                      value={
                        educationCoFounder[editIndex]?.degree ||
                        formik.values.degree
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.degree && formik.errors.degree ? (
                      <label className='error'>{formik.errors.degree}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Filed of study*</label>
                    <input
                      id='course'
                      name='course'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter filed of study'
                      value={
                        educationCoFounder[editIndex]?.course ||
                        formik.values.course
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.course && formik.errors.course ? (
                      <label className='error'>{formik.errors.course}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <div className='d-flex justify-content-between'>
                      <label>Activities and societies*</label>
                      <label style={{ color: '#828282' }}>
                        50 characters at most
                      </label>
                    </div>

                    <textarea
                      id='activities'
                      name='activities'
                      cols='5'
                      rows='6'
                      className='form-control ps-3'
                      placeholder='Enter Activities and Societies'
                      value={
                        educationCoFounder[editIndex]?.activities ||
                        formik.values.activities
                      }
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.activities && formik.errors.activities ? (
                      <label className='error'>
                        {formik.errors.activities}
                      </label>
                    ) : null}
                  </div>

                  <div className='col-6 form-group'>
                    <label>Entry Date*</label>
                    <DatePicker
                      id='eduStartDate'
                      name='eduStartDate'
                      className='p-2'
                      style={{ padding: '15px' }}
                      selected={
                        educationCoFounder[editIndex]?.eduStartDate ||
                        eduStartDate
                      }
                      onChange={(date) => setEduStartDate(date)}
                    />
                  </div>
                  <div className='col-6 form-group'>
                    <label>Graduation Date*</label>
                    <DatePicker
                      id='eduEndDate'
                      name='eduEndDate'
                      className='p-2'
                      style={{ padding: '15px' }}
                      selected={
                        educationCoFounder[editIndex]?.eduEndDate || eduEndDate
                      }
                      onChange={(date) => setEduEndDate(date)}
                    />
                  </div>

                  <div
                    className='col-12 d-flex justify-content-between'
                    style={{ marginTop: '4rem' }}
                  >
                    {displayEducation === false && (
                      <CustomButton
                        background='#D0D0D1'
                        onClick={() => setDisplayEducation(true)}
                      >
                        Cancel
                      </CustomButton>
                    )}
                    <CustomButton
                      onClick={(e) => {
                        onSubmit(e, 'education');
                        setDisplayEducation(true);
                      }}
                      background='#021098'
                      style={{
                        marginLeft: displayEducation ? '7rem' : '0rem',
                      }}
                    >
                      Save
                    </CustomButton>
                  </div>
                </ModalForm>
              </form>
            </div>
          ) : (
            <div className='mx-5'>
              <HeaderModal>Education</HeaderModal>
              <hr style={{ background: '#323232' }} />
              {educationCoFounder.length > 0 &&
                educationCoFounder.map((item, index) => {
                  return (
                    <Education
                      key={index}
                      {...item}
                      showEducationModal={() => setDisplayEducation(false)}
                      setEditIndex={setEditIndex}
                      setIsEditing={setIsEditing}
                      id={index}
                    />
                  );
                })}
              <div className='col-6 my-4'>
                <span
                  style={{
                    color: '#120297',
                    borderBottom: '1px solid #120297',
                    fontWeight: '600',
                    marginTop: '10px',
                  }}
                  onClick={() => setDisplayEducation(false)}
                >
                  Add another education +
                </span>
              </div>
            </div>
          )}
        </FormWrapper>

        <FormWrapper height='70%'>
          <div className='div'>
            <span>Skills</span>
          </div>
          <hr />

          <div className='form-group'>
            <div>
              <label>What are your skills*</label>
            </div>
            <Select
              mode='multiple'
              allowClear
              style={{ width: '60%', color: 'red' }}
              placeholder='Please select'
              onChange={handleChange}
            >
              {children}
            </Select>
          </div>
        </FormWrapper>

        <FormWrapper height='70%'>
          <div className='div border-bottom pb-3'>
            <span>Web & Social Media</span>
          </div>
          <div className='row'>
            <div className='form-group col-lg-6 col-12'>
              <label>Linkedin*</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.linkedIn}
                type='text'
                name='linkedIn'
                placeholder='Enter Linkdin link'
                className='form-control ps-3'
              />
            </div>
            <div className='form-group col-lg-6 col-12'>
              <label>Twitter*</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.twitter}
                type='text'
                name='twitter'
                placeholder='Enter Twitter link'
                className='form-control ps-3'
              />
            </div>

            <div className='form-group col-lg-6 col-12'>
              <label>Website*</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.website}
                type='text'
                name='website'
                placeholder='Enter website'
                className='form-control ps-3'
              />
            </div>
          </div>
        </FormWrapper>

        <div className='row mx-5 mb-5'>
          <div className='col-3'>
            <CustomButton className='' background='#D0D0D1' onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className='col-9 d-flex justify-content-end'>
            {/* <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton> */}
            <CustomButton type='submit' disabled={loading} background='#00ADEF'>
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};
