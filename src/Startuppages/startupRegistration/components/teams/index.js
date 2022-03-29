import React, { useState } from 'react';
import {
  HeaderTeam,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
  BntWrap,
} from './teams.styled';

import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomSelect } from '../../../../Startupcomponents/select/customSelect';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import { useActivity } from '../../../../hooks/useBusiness';
import { TeamModal, EducationModal } from './teamModal';
import { Select } from 'antd';
import { Tag } from '../../../../Startupcomponents/tag/Tag';
import 'antd/dist/antd.css';
import { team } from './../../../../services/startUpReg';
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast';
import { CoFounder } from './coFounder';
import { LargeModal, WorkExperience } from '../../../../Startupcomponents';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

const { Option } = Select;

export const TeamProfile = () => {
  const { stateAuth } = useAuth();
  const [disImg, setImg] = useState(null);

  const [show, setShow] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express'];
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(
    stateAuth?.user?.team?.contactInfo?.phoneNumber
  );
  const [socialMedia, setSocialMedia] = useState({});
  const [editIndex, setEditIndex] = useState();

  const {
    changePath,
    setWorkExperience,
    state: { path, workExperience },
  } = useActivity();

  const onChangeImage = (e) => {
    const { files } = e.target;

    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]));
    }
  };
  let colors = [];

  for (let i = 0; i < 20; i++) {
    let value2 = Math.floor(Math.random() * 237897).toString();

    if (value2.length === 6) {
      colors.push(value2);
    }
  }

  const back = () => {
    changePath(path - 1);
  };

  const next = () => {
    changePath(path + 1);
  };

  const children = [];
  for (let i = 0; i < skill.length; i++) {
    children.push(<Option key={i}>{skill[i]}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function btn(e) {
    e.preventDefault();
  }

  const onSubmit = (value) => {
    setLoading(true);
    team(value).then((res) => {
      if (res?.message) {
        console.log(res);
        toast.success(res?.message);
        setLoading(false);
        next();
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      avatar: '',
      briefIntroduction: '',
      firstName: '',
      lastName: '',
      email: '',
      dob: startDate,
      country: '',
      state: '',
      city: '',
      // mobile_number: phone,
      skills: [],
      experience: [],
      education: [],
      linkedIn: '',
      twitter: '',
      website: '',
    },
    validateOnBlur: true,
    onSubmit: (value) => onSubmit(value),
  });
  const handleWorkDetails = ({
    title,
    location,
    position,
    description,
    startDate,
    endDate,
  }) => {
    setWorkExperience({
      title,
      location,
      position,
      description,
      startDate,
      endDate,
    });
  };

  return (
    <>
      {console.log(workExperience)}
      {show ? (
        <TeamModal
          handleClose={setShow}
          handleWorkDetails={handleWorkDetails}
          editIndex={editIndex}
          workExperience={workExperience}
        />
      ) : (
        <span></span>
      )}
      {showEducation ? (
        <EducationModal handleClose={setShowEducation} />
      ) : (
        <span></span>
      )}
      {showModal ? (
        <LargeModal id='cofounder' title='' closeModal={setShowModal}>
          <CoFounder />
        </LargeModal>
      ) : (
        <span></span>
      )}

      <HeaderTeam>
        <h5> Team</h5>
        <p className='text-nowrap'>Let’s you introduce your Co-Founder(s)</p>
      </HeaderTeam>

      <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
        <FormWrapper height='70%'>
          <div className='div'>
            <span>Founder</span>
            <p>A brief profile of founders</p>
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

            <InputWrapper for='found'>
              <input type='file' onChange={onChangeImage} id='found' hidden />
              <PlusOutlined style={{ color: '#ffffff' }} />
            </InputWrapper>
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
            <div className='form-group  col-12 '>
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name='mobile_number'
                countryCallingCodeEditable={true}
                className='custs w-lg-50 ps-3'
                value={
                  stateAuth?.user?.team?.contactInfo?.mobile_number
                    ? stateAuth?.user?.team?.contactInfo?.mobile_number
                    : phone
                }
                onChange={setPhone}
                MaxLength={17}
              />
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height='80%'>
          <div className='div'>
            <span>Work Experience</span>
          </div>
          <hr />
          {workExperience.length > 0 &&
            workExperience.map((item, index) => {
              return (
                <WorkExperience
                  key={index}
                  {...item}
                  showTeamModal={() => setShow(true)}
                  setEditIndex={setEditIndex}
                  id={index}
                />
              );
            })}

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
          </div>
        </FormWrapper>

        <FormWrapper height='70%'>
          <div className='div'>
            <span>Education</span>
          </div>
          <hr />
          <span
            onClick={() => setShowEducation(true)}
            style={{
              color: '#120297',
              borderBottom: '1px solid #120297',
              fontWeight: '600',
            }}
          >
            Add Education +{' '}
          </span>
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
              style={{ width: '100%', color: 'red' }}
              placeholder='Please click to select'
              onChange={handleChange}
              className='skiil-select'
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

        <FormWrapper height='70%'>
          <div className='div border-bottom pb-2'>
            <span>Co-Founders</span>
            <p className='pt-3'>Create a profile for your Co-Founders</p>
          </div>

          <div className='mt-4'>
            <label>Do you have Co-Founders?*</label>

            <div className='d-flex'>
              <BntWrap>
                <button className='me-3' onClick={btn}>
                  Yes
                </button>
                <button className='' onClick={btn}>
                  No
                </button>
              </BntWrap>
            </div>

            <div className='sold'>
              <div className='d-flex justify-content-center'>
                <div
                  className=''
                  data-target='#cofounder'
                  onClick={() => setShowModal(true)}
                >
                  <Tag
                    name='+ Add Co-founder'
                    color='#4F4F4F'
                    bg='rgba(183, 218, 231, 0.5'
                    padding='8px 14px'
                  />
                </div>
              </div>
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height='70%'>
          <div className='div border-bottom pb-3'>
            <span>Invite Team Members</span>
            <p className='pt-3'>Key team members</p>
          </div>

          <div className='form-group mt-5 mb-4'>
            <label>
              Invite a team member that can benefit from knight venture
            </label>
            <input
              type='text'
              className='form-control my-2 ps-3'
              placeholder='Enter email address'
            />
          </div>
          <div className='my-3 mx-3'>
            <CustomButton background='#031298'> Invite </CustomButton>
          </div>
        </FormWrapper>

        <div className='row '>
          <div className='col-3'>
            <CustomButton className='' background='#D0D0D1' onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className='col-9 d-flex justify-content-end'>
            <CustomButton className='mx-2' background='#00ADEF'>
              Save
            </CustomButton>
            <CustomButton type='submit' disabled={loading} background='#2E3192'>
              {loading ? <CircularLoader /> : 'Next'}
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  );
};
