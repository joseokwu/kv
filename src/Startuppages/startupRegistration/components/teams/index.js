import React, { useState, useEffect } from 'react';
import {
  HeaderTeam,
  ImageWrapper,
  InputWrapper,
  FormWrapper,

} from './teams.styled';
import { updateFounderProfile } from '../../../../services/startup';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomSelect } from '../../../../Startupcomponents/select/customSelect';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import { useActivity } from '../../../../hooks/useBusiness';
import { TeamModal, EducationModal } from './teamModal';
import { Select } from 'antd';

import 'antd/dist/antd.css';
import { team } from './../../../../services/startUpReg';
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast';
import { CoFounder } from './coFounder';
import {
  LargeModal,
  WorkExperience,
  Education,
  SkillTab,
} from '../../../../Startupcomponents';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { upload } from '../../../../services/utils';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import moment from 'moment';


const { Option } = Select

export const TeamProfile = () => {
  const { stateAuth } = useAuth();
  const [disImg, setImg] = useState(null);
  const [logoUploading, setLogoUploading] = useState(false);
  const [show, setShow] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express']
  const [dob, setDob] = useState(moment(stateAuth?.user?.team?.dob) ?? '')
  const [loading, setLoading] = useState(false)
  const [nextLoading, setNextLoading] = useState(false)
  const [opts, setOpts] = useState('')
  const [phone, setPhone] = useState(
    stateAuth?.user?.team?.mobile_number ?? ''
  );
  const [socialMedia, setSocialmedia] = useState({
  
    website: stateAuth?.user?.team?.socialMedia?.website
      ?? '',
    linkedIn: stateAuth?.user?.team?.socialMedia?.linkedIn
      ?? '',
    twitter: stateAuth?.user?.team?.socialMedia?.twitter
      ?? '',
  });
  const [country, setCountry] = useState(stateAuth?.user?.team?.country ?? '');

  const dateFormat = 'YYYY-MM-DD';
  const [inVal , setVal] = useState('');
  const [editIndex, setEditIndex] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(stateAuth?.user?.team?.avatar ?? null);

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
  const [skillSet, setSkill] = useState(stateAuth?.user?.team?.skills ?? []);
  const onChangeImage = async (e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append('dir', 'kv');
    formData.append('ref', stateAuth.user?.userId);
    formData.append('type', 'image');
    formData.append(0, files[0]);
    try {
      console.log('uploaded');
      setLogoUploading(true);
      const response = await upload(formData);
      console.log(response);
      setAvatar(response?.path);
      setLogoUploading(false);
    } catch (error) {
      console.log(error);
      setLogoUploading(false);
      toast.error(error?.response?.data?.message ?? 'Unable to upload image');
    }
  }

  const onChangeMedia = (e) => {
    setSocialmedia({ ...socialMedia, [e.target.name]: e.target.value });
  };

  const handleChange = (e) =>{
   
    setVal(e.target.value);
  }  

  const handleKey = (e) =>{
    if(e.keyCode === 32 && e.target.value !== ''){
      console.log(inVal);
      setVal('');
      setSkill([...skillSet, inVal]);
    }
  }

  const onDelete = (value) =>{
    setSkill(skillSet.filter(item => item !== value))
  }

  let colors = []

  for (let i = 0; i < 20; i++) {
    let value2 = Math.floor(Math.random() * 237897).toString()

    if (value2.length === 6) {
      colors.push(value2)
    }
  }

  const back = () => {
    changePath(path - 1)
  }


  const children = []
  for (let i = 0; i < skill.length; i++) {
    children.push(<Option key={i}>{skill[i]}</Option>)
  }



  const onSubmit = async (value) => {
    try {
      const team = {
        type: 'team',
        accType: 'startup',
        values: {
          ...value,
          skills: skillSet,
          avatar: avatar,
          experience: experience,
          education: education,
          socialMedia,
          dob:dob,
          mobile_number:phone,
          country:country
        },
        userId: stateAuth?.user?.userId,
      };
      console.log(team);
      if (opts === 'next') {
        setOpts(true)
        let result = await updateFounderProfile(team)

        if (result?.success) {
          toast.success('Team' + '    ' + result?.message)
          setOpts(false)
          return changePath(path + 1)
        }
      }
      setLoading(true)
      let result = await updateFounderProfile(team)

      if (!result?.success) {
        toast.error(result?.message || 'There was an error in updating team')
        setLoading(false)
        return
      }
      toast.success('Team' + '' + result?.message)
      setLoading(false);
      history.push('/startup/dashboard');
      return
    } catch (err) {
      setLoading(false)
      toast.error(err?.res?.data?.message || 'There was an error updating team')
    }
    
  };

 
  const formik = useFormik({
    initialValues: {
      briefIntroduction: stateAuth?.user?.team?.briefIntroduction ?? '',
      firstName: stateAuth?.user?.team?.firstName ?? '',
      lastName: stateAuth?.user?.team?.lastName ?? '',
      email: stateAuth?.user?.team?.email ?? '',
      state: stateAuth?.user?.team?.state ?? '',
      city: stateAuth?.user?.team?.city ?? '',
     
      isCofounder:true
    },
    // validationSchema: Yup.object({
    //   briefIntroduction: Yup.string().required('Required'),
    //   firstName: Yup.string().required('Required'),
    //   lastName: Yup.string().required('Required'),
    //   email: Yup.string().required('Required'),
    //   state: Yup.string().required('Required'),
    //   city: Yup.string().required('Required'),
    //   dob: Yup.string().required('Required'),
    //   skills: Yup.string().required('Required'),
    //   linkedIn: Yup.string().required('Required'),
    //   twitter: Yup.string().required('Required'),
    //   website: Yup.string().required('Required'),
    // }),
    onSubmit: (value) => onSubmit(value),
  });

  const handleWorkDetails = ({
    from,
    companyName,
    location,
    position,
    responsibility,
    startDate,
    endDate,
    schoolName,
    course,
    degree,
    activities,
    eduStartDate,
    eduEndDate,
    founder,
  }) => {
    if (from === 'workExperience') {
      setWorkExperience({
        companyName,
        location,
        position,
        responsibility,
        startDate,
        endDate,
        isPresentWorking:false
      });
      setIsEditing(false);
    } else if (from === 'education') {
      setEducation({
        schoolName,
        course,
        degreeType:degree,
        activities,
        startDate:eduStartDate,
        endDate:eduEndDate,
        isPresent:false
      });
      setIsEditing(false);
    }
  }

  useEffect(() =>{
    if(stateAuth?.user?.team){
      setWorkExperience(stateAuth?.user?.team?.experience, 'server');
      setEducation(stateAuth?.user?.team?.education, 'server');
    }
   

  },[])

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
        <LargeModal id="cofounder" title="" closeModal={setShowModal}>
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
        <p className="text-nowrap">Let’s you introduce your Co-Founder(s)</p>
      </HeaderTeam>

      <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
        <FormWrapper height="70%">
          <div className="div">
            <span>Founder</span>
            <p>A brief profile of founders</p>
          </div>

          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <ImageWrapper>
              {avatar === null ? (
                logoUploading ? (
                  <CircularLoader color={'#000'} />
                ) : (
                  <UserOutlined />
                )
              ) : (
                <img
                  className=''
                  src={avatar}
                  style={{
                    borderRadius: '70px',
                    width: '90px',
                    height: '90px',
                  }}
                  alt=""
                />
              )}
            </ImageWrapper>

            <InputWrapper for="found">
              <input type="file" onChange={onChangeImage} id="found" hidden />
              <PlusOutlined style={{ color: '#ffffff' }} />
            </InputWrapper>
          </div>

          <div className="row my-5">
            <div className="form-group col-12">
              <div className="d-flex justify-content-between">
                <label>Brief Introduction *</label>
                <label style={{ color: '#828282' }}>10 words at most</label>
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.briefIntroduction}
                // onBlur={formik.handleBlur}
                type="text"
                name="briefIntroduction"
                placeholder="Enter a brief bio about yourself"
                className="form-control ps-3"
              />
              {formik.touched.briefIntroduction &&
              formik.errors.briefIntroduction ? (
                <label className="error">
                  {formik.errors.briefIntroduction}
                </label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>First Name *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                // onBlur={formik.handleBlur}
                type="text"
                name="firstName"
                placeholder="Enter first name"
                className="form-control ps-3"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <label className="error">{formik.errors.firstName}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Last Name *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                // onBlur={formik.handleBlur}
                type="text"
                name="lastName"
                placeholder="Enter last name"
                className="form-control ps-3"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <label className="error">{formik.errors.lastName}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Email *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                // onBlur={formik.handleBlur}
                type="text"
                name="email"
                placeholder="Enter email address"
                className="form-control ps-3"
              />
              {formik.touched.email && formik.errors.email ? (
                <label className="error">{formik.errors.email}</label>
              ) : null}
            </div>
            <div className="form-group  col-lg-6 col-12">
              <label>Date of Birth *</label>
              <DatePicker
                id="dob"
                name="dob"
                className="custs p-2 py-4"
                style={{ padding: '15px' }}
                defaultValue={moment(stateAuth?.user?.team?.dob) ?? moment()}
              format={dateFormat}
              onChange={(date,dateString) => setDob(dateString)}  
              />
             
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>Country *</label>
              {/* <input
                onChange={formik.handleChange}
                value={formik.values.country}
                onBlur={formik.handleBlur}
                type='text'
                name='country'
                placeholder='Enter your country'
                className='form-control ps-3'
              /> */}
              <CountryDropdown
                id="country"
                type="text"
                name="country"
                className="form-control px-5 py-1 country-bg"
                preferredCountries={['ng']}
                value={country}
                handleChange={(e) => setCountry(e.target.value)}
              ></CountryDropdown>
             
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>State *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.state}
                // onBlur={formik.handleBlur}
                type="text"
                name="state"
                placeholder="Enter your state"
                className="form-control ps-3"
              />
              {formik.touched.state && formik.errors.state ? (
                <label className="error">{formik.errors.state}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>City *</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.city}
                // onBlur={formik.handleBlur}
                type="text"
                name="city"
                placeholder="Enter your city"
                className="form-control ps-3"
              />
              {formik.touched.city && formik.errors.city ? (
                <label className="error">{formik.errors.city}</label>
              ) : null}
            </div>
            <div className="form-group  col-lg-6 col-12">
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name="mobile_number"
                countryCallingCodeEditable={true}
                className="custs w-lg-50 ps-3 py-2"
                value={
                  stateAuth?.user?.team?.contactInfo?.mobile_number ?? phone
                }
                // onBlur={formik.handleBlur}
                onChange={setPhone}
                MaxLength={17}
              />
              {formik.touched.mobile_number && !phone ? (
                <label className="error">Required</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height="80%">
          <div className="div">
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
              )
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

        <FormWrapper height="70%">
          <div className="div">
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
              )
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

        <FormWrapper height="70%">
          <div className="div">
            <span>Skills</span>
          </div>
          <hr />

          <div className="form-group">
            <div>
              <label>What are your skills*</label>
            </div>
            <input
                onChange={handleChange}
                style={{ width: '100%', outline: 'none', color: 'purple' }}
                value={inVal}
                type='text'
                placeholder='Enter your skills'
                className="py-2 px-3"
                // className='form-control ps-3'
                // onBlur={formik.handleBlur}
                onKeyDown={handleKey}
              />
              {formik.touched.skills && formik.errors.skills ? (
                <label className="error">{formik.errors.skills}</label>
              ) : null}
            {
              skillSet.length > 0 && skillSet.map((item, i) =>(
                <SkillTab key={i} skill={item}
                  onClick={() => onDelete(item)}
                 />
              ))
            }
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Web & Social Media</span>
          </div>
          <div className="row">
            <div className="form-group col-lg-6 col-12">
              <label>LinkedIn*</label>
              <input
                onChange={onChangeMedia}
                value={socialMedia?.linkedIn}
                // onBlur={formik.handleBlur}
                type='text'
                name='linkedIn'
                placeholder='Enter Linkdin link'
                className='form-control ps-3'
              />
              {formik.touched.linkedIn && formik.errors.linkedIn ? (
                <label className="error">{formik.errors.linkedIn}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Twitter*</label>
              <input
                onChange={onChangeMedia}
                value={socialMedia?.twitter}
                // onBlur={formik.handleBlur}
                type='text'
                name='twitter'
                placeholder='Enter Twitter link'
                className='form-control ps-3'
              />
              {formik.touched.twitter && formik.errors.twitter ? (
                <label className="error">{formik.errors.twitter}</label>
              ) : null}
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Website*</label>
              <input
                onChange={onChangeMedia}
                value={socialMedia?.website}
                // onBlur={formik.handleBlur}
                type='text'
                name='website'
                placeholder='Enter website'
                className='form-control ps-3'
              />
              {formik.touched.website && formik.errors.website ? (
                <label className="error">{formik.errors.website}</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>


        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Invite Team Members</span>
            <p className="pt-3">Key team members</p>
          </div>

          <div className="form-group mt-5 mb-4">
            <label>
              Invite a team member that can benefit from knight venture
            </label>
            <input
              type="text"
              className="form-control my-2 ps-3"
              placeholder="Enter email address"
            />
          </div>
          <div className="my-3 mx-3">
            <CustomButton background="#031298"> Invite </CustomButton>
          </div>
        </FormWrapper>

        <div className="row ">
          <div className="col-3">
            <CustomButton className="" background="#D0D0D1" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-end">
            <CustomButton
              type="button"
              disabled={loading}
              className="mx-2"
              background="#00ADEF"
              onClick={() => formik.handleSubmit()}
            >
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <CustomButton
              type="submit"
              disabled={nextLoading}
              onClick={() => setOpts('next')}
              background="#2E3192"
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
