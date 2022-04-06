import React, { useState , useEffect } from 'react';
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
import {
  LargeModal,
  WorkExperience,
  Education,
} from '../../../../Startupcomponents';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { upload }  from '../../../../services/utils';

const { Option } = Select;

export const TeamProfile = () => {
  const { stateAuth } = useAuth();
  const [disImg, setImg] = useState(null);
  const [logoUploading , setLogoUploading] = useState(false);
  const [show, setShow] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express'];
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [opts, setOpts] = useState('');
  const [phone, setPhone] = useState(
    stateAuth?.user?.team?.founderInfo?.mobile_number
  );
  // const [contacts, setContacts] = useState({
  //   email: stateAuth?.user?.team?.founderInfo?.email,
  //   country: stateAuth?.user?.team?.founderInfo?.country,
  //   state: stateAuth?.user?.team?.founderInfo?.state,
  //   city: stateAuth?.user?.team?.founderInfo?.city,
  // })
  // const [socialMedia, setSocialMedia] = useState({
  //   linkedIn: stateAuth?.user?.team?.socialMedia?.linkedIn,
  //   twitter: stateAuth?.user?.team?.socialMedia?.twitter,
  //   website: stateAuth?.user?.team?.socialMedia?.website,
  // })

  const [socialMedia, setSocialMedia] = useState({});
  const [skillSet, setSkill] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [coFounder, setCoFounder] = useState('');
  const {
    changePath,
    setWorkExperience,
    setEducation,
    state: {
      path,
      experience,
      workExperienceCoFounder,
      education,
      educationCoFounder,
    },
  } = useActivity();



  const onChangeImage = async(e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "image");
    formData.append(0 , files[0])
    try {
      console.log('uploaded')
      setLogoUploading(true)
      const response = await upload(formData)
      console.log(response) 
      setAvatar(response?.path)
      setLogoUploading(false)

    } catch(error) {
      console.log(error)
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? 'Unable to upload image')
    }
  };

  // const onChange = (e) => {
  //   setContacts({ ...contacts, [e.target.name]: e.target.value })
  // }

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

  function handleChange(value, type) {
    console.log(type)
    value.map((item) =>{
      setSkill([skill[parseInt(item)], ...skillSet])
    })
  }


  function btn(e) {
    e.preventDefault();
  }

  const onSubmit = async (value) => {
    try {
      const team = {
        type: 'team',
        accType: 'startup',
        values: {
          ...value,
          skills:skillSet,
          avatar:avatar,
          experience: experience,
          education: education,
        },
        userId: stateAuth?.user?.userId,
      };
      console.log(team);
      // if (opts === 'next') {
      //   setOpts(true)
      //   let result = await updateFounderProfile(team)

      //   if (result?.success) {
      //     toast.success('Team' + '' + result?.message)
      //     setOpts(false)
      //     return changePath(path + 1)
      //   }
      // }
      // setLoading(true)
      // let result = await updateFounderProfile(team)

      // if (!result?.success) {
      //   toast.error(result?.message || 'There was an error in updating team')
      //   setLoading(false)
      //   return
      // }
      // toast.success('Team' + '' + result?.message)
      // setLoading(false)
      // return
    } catch (err) {
      setLoading(false);
      toast.error(
        err?.res?.data?.message || 'There was an error updating team'
      );
    }
    // setLoading(true)
    // team(value).then((res) => {
    //   if (res?.message) {
    //     console.log(res)
    //     toast.success(res?.message)
    //     setLoading(false)
    //     next()
    //   }
    // })
  };

  // const formik = useFormik({
  //   initialValues: {
  //     avatar:
  //       'https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current',
  //     briefIntroduction: stateAuth?.user?.team?.briefIntroduction,
  //     firstName: stateAuth?.user?.team?.firstName,
  //     lastName: stateAuth?.user?.team?.lastName,

  const formik = useFormik({
    initialValues: {
      briefIntroduction:stateAuth?.user?.team?.briefIntroduction  ?? '',
      firstName:stateAuth?.user?.team?.firstName ?? '',
      lastName:stateAuth?.user?.team?.lastName ?? '',
      email:stateAuth?.user?.team?.email ?? '',
      dob: startDate,
      country:stateAuth?.user?.team?.country ?? '',
      state: stateAuth?.user?.team?.state ?? '',
      city: stateAuth?.user?.team?.city ?? '',
      // mobile_number: phone,
      skills:[]
    },
    validateOnBlur: true,
    onSubmit: (value) => onSubmit(value),
  });

  const handleWorkDetails = ({
    from,
    title,
    location,
    position,
    description,
    startDate,
    endDate,
    school,
    course,
    degree,
    activities,
    eduStartDate,
    eduEndDate,
    founder,
  }) => {
    if (from === 'workExperience') {
      setWorkExperience({
        title,
        location,
        position,
        description,
        startDate,
        endDate,
        founder,
      });
      setIsEditing(false);
    } else if (from === 'education') {
      setEducation({
        school,
        course,
        degree,
        activities,
        eduStartDate,
        eduEndDate,
        founder,
      });
      setIsEditing(false);
    }
  };


  // useEffect(() =>{
  //   setWorkExperience(stateAuth?.user?.team?.experience);
  //   setEducation(stateAuth?.user?.team?.education);

  // },[])

  return (
    <>
      {show ? (
        <TeamModal
          handleClose={setShow}
          handleWorkDetails={handleWorkDetails}
          editIndex={editIndex}
          workExperience={experience}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <span></span>
      )}
      {showEducation ? (
        <EducationModal
          handleClose={setShowEducation}
          handleWorkDetails={handleWorkDetails}
          editIndex={editIndex}
          education={education}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <span></span>
      )}
      {showModal ? (
        <LargeModal id='cofounder' title='' closeModal={setShowModal}>
          <CoFounder
            handleClose={setShowModal}
            handleWorkDetails={handleWorkDetails}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            workExperienceCoFounder={workExperienceCoFounder}
            educationCoFounder={educationCoFounder}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
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
              {avatar === null ? (
             logoUploading ? <CircularLoader color={'#000'} /> :  <UserOutlined /> 
              ) : (
                <img
                  className=''
                  src={avatar}
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

          <div className='row my-5'>
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
            <div className='form-group  col-6 '>
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name='mobile_number'
                countryCallingCodeEditable={true}
                className='custs w-lg-50 ps-3'
                value={
                  stateAuth?.user?.team?.contactInfo?.mobile_number ?? phone
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
          {experience.length > 0 &&
            experience.map((item, index) => {
              return (
                <WorkExperience
                  key={index}
                  {...item}
                  showTeamModal={() => setShow(true)}
                  setEditIndex={setEditIndex}
                  setIsEditing={setIsEditing}
                  id={index}
                />
              );
            })}

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
          {education.length > 0 &&
            education.map((item, index) => {
              return (
                <Education
                  key={index}
                  {...item}
                  showEducationModal={() => setShowEducation(true)}
                  setEditIndex={setEditIndex}
                  setIsEditing={setIsEditing}
                  id={index}
                />
              );
            })}
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
              value={skillSet}
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
                <button
                  className={`me-3 ${coFounder === 'yes' && 'active'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCoFounder('yes');
                  }}
                >
                  Yes
                </button>
                <button
                  className={`me-3 ${coFounder === 'no' && 'active'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCoFounder('no');
                  }}
                >
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
            <CustomButton
              type='submit'
              disabled={loading}
              className='mx-2'
              background='#00ADEF'
            >
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <CustomButton
              type='submit'
              disabled={nextLoading}
              onClick={() => setOpts('next')}
              background='#2E3192'
            >
              {nextLoading ? <CircularLoader /> : 'Next'}
            </CustomButton>

            {/* <CustomButton className='mx-2' background='#00ADEF'>
              Save
            </CustomButton> */}
            {/* <CustomButton type='submit' disabled={loading} background='#2E3192'>
              {loading ? <CircularLoader /> : 'Next'}
            </CustomButton> */}
          </div>
        </div>
      </form>
    </>
  );
};