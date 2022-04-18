import React, { useState } from 'react';
import {
  ImageWrapper,
  CoInputWrapper,
  FormWrapper,
  HeaderModal,
  ModalForm,
} from './teams.styled';
import {
  SkillTab,
  WorkExperience,
  Education,
} from '../../../../Startupcomponents';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useActivity } from '../../../../hooks/useBusiness';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Select , DatePicker } from 'antd';
import { TeamModal, EducationModal } from './teamModal';
import { CustomButton } from '../../../../Startupcomponents/button/button.styled';
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast';
import { team } from './../../../../services/startUpReg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { upload } from "../../../../services/utils";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import moment from "moment";
import { useAuth } from "../../../../hooks/useAuth";


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
  const [skills , setSkills] = useState([])
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showEducation, setShowEducation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eduStartDate, setEduStartDate] = useState(new Date());
  const [eduEndDate, setEduEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [displayWorkExperience, setDisplayWorkExperience] = useState();
  const [displayEducation, setDisplayEducation] = useState();
  const { updateProfile, stateAuth , updateStartupInfo } = useAuth();
  const [localEducation, setLocalEducation] = useState([]);
  const [localExperience, setLocalExperience] = useState([]);
  const [dob , setDob] = useState(moment())
  const [inVal, setVal] = useState("");


  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };
  const handleKey = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      if (inVal.trim() === "" || stateAuth.startupData.team.skills.indexOf(inVal.trim()) !== -1) return;
      setVal(""); 
      setSkills([...skills, inVal]);
    }
  };

  const onDelete = (value) => {
    setSkills(skills.filter((item) => item !== value));
  };

  const onChangeImage = async(e) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("dir", "kv");
    formData.append("ref", stateAuth.user?.userId);
    formData.append("type", "image");
    formData.append(0, files[0]);
    try {
      console.log("uploaded");
      setLoading(true);
      const response = await upload(formData);
      console.log(response);
      setAvatar(response?.path);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message ?? "Unable to upload image");
    }
  };





  const {
    changePath,
    state: { path },
  } = useActivity();

  const back = () => {
    changePath(path - 1);
  };

  

 

  const onSubmit = () => {

    updateProfile("team", {

       coFounder:[...stateAuth?.startupData?.team.coFounder, {
      avatar:avatar,
      briefIntroduction: formik.getFieldProps('briefIntroduction').value,
      firstName: formik.getFieldProps('firstName').value,
      lastName: formik.getFieldProps('lastName').value,
      email: formik.getFieldProps('email').value,
      dob: dob,
      linkedIn: formik.getFieldProps('linkedIn').value,
      twitter: formik.getFieldProps('twitter').value,
      website: formik.getFieldProps('website').value,
      country: formik.getFieldProps('country').value,
      state: formik.getFieldProps('state').value,
      city: formik.getFieldProps('city').value,
      skills:skills,
      mobile_number: phone,
      education:localEducation,
      experience:localExperience,

        }]
      
    });

      handleClose(false)
  }



  const handleEduSubmit = () =>{
    setLocalEducation([...localEducation , {
      schoolName: eduFormik.getFieldProps('school').value,
        course: eduFormik.getFieldProps('course').value,
        degree: eduFormik.getFieldProps('degree').value,
        activities: eduFormik.getFieldProps('activities').value,
        startDate: eduStartDate,
        endDate: checked ? 'present' : eduEndDate
    }])
    
  }

  const eduFormik = useFormik({
    initialValues:{
      school: '',
      course: '',
      degree: '',
      activities: '',
    },
  
    
  })



  const workFormik = useFormik({
    initialValues:{
      title: '',
      location: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    },
    
  })

  const handleExpeSubmit = () =>{
   
    setLocalExperience([...localExperience , {
      title: workFormik.getFieldProps('title').value,
      location: workFormik.getFieldProps('location').value,
      position: workFormik.getFieldProps('position').value,
      description: workFormik.getFieldProps('description').value,
      startDate:startDate,
      endDate:checked ? 'present' : endDate

    }])
    
    workFormik.resetForm({
  values:{
    title: '',
    location: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
  }
    })
    
  }

  const formik = useFormik({
    initialValues: {
      briefIntroduction:'',
      firstName: '',
      lastName: '',
      email: '',
      dob: startDate,
      country: '',
      state: '',
      city: '',
      mobile_number:'',
      skills: [],
      linkedIn: '',
      twitter: '',
      website: '',
  
    },
       
  });

  return (
    <div className='px-3'>
      {show ? <TeamModal handleClose={setShow} /> : <span></span>}
      {showEducation ? (
        <EducationModal isLocal={true} handleClose={setShowEducation} />
      ) : (
        <span></span>
      )}

      <form style={{ marginBottom: '4rem' }} >
        <FormWrapper height='70%'>
          <div className='div'>
            <span>Co-Founder</span>
            <p>A brief profile of co-founders</p>
          </div>

          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <ImageWrapper>
              {avatar === null ? (
                loading ? (
                  <CircularLoader color={"#000"} />
                ) : (
                  <UserOutlined />
                )
              ) : (
                <img
                  className=""
                  src={avatar}
                  style={{
                    borderRadius: "70px",
                    width: "90px",
                    height: "90px",
                  }}
                  alt=""
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
                selected={dob}
                placeholderText='yyyy-mm-dd'
                onChange={(date) => setDob(date , "dob")}
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
                onChange={(value) => setPhone(value)}
                placeholder='0000 00000 0000'
                MaxLength={13}
              />
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height='80%'>
        
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
                    <label>Title<span style={{color: "red"}}>*</span></label>
                    <input
                      id='title'
                      name='title'
                      type='text'
                      className='form-control ps-3'
                      placeholder='CEO and Founder'
                      value={
                        workFormik.values.title
                      }
                      onBlur={workFormik.handleBlur}
                      onChange={workFormik.handleChange}
                    />
                    {workFormik.touched.title && workFormik.errors.title ? (
                      <label className='error'>{workFormik.errors.title}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Location<span style={{color: "red"}}>*</span></label>
                    <input
                      id='location'
                      name='location'
                      type='text'
                      className='form-control ps-3'
                      placeholder='United state of America'
                      value={
                     
                        workFormik.values.location
                      }
                      onBlur={workFormik.handleBlur}
                      onChange={workFormik.handleChange}
                    />
                    {workFormik.touched.location && workFormik.errors.location ? (
                      <label className='error'>{workFormik.errors.location}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Position<span style={{color: "red"}}>*</span></label>
                    <input
                      id='position'
                      name='position'
                      type='text'
                      className='form-control ps-3'
                      placeholder='United state of America'
                      value={
                        workFormik.values.position
                      }
                      onBlur={workFormik.handleBlur}
                      onChange={workFormik.handleChange}
                    />
                    {workFormik.touched.position && workFormik.errors.position ? (
                      <label className='error'>{workFormik.errors.position}</label>
                    ) : null}
                  </div>
        
                  <div className='col-12 form-group'>
                    <div className='d-flex justify-content-between'>
                      <label>Description<span style={{color: "red"}}>*</span></label>
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

                        workFormik.values.description
                      }
                      onBlur={workFormik.handleBlur}
                      onChange={workFormik.handleChange}
                    />
                    {workFormik.touched.description && workFormik.errors.description ? (
                      <label className='error'>
                        {workFormik.errors.description}
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
                    <label>Start Date<span style={{color: "red"}}>*</span></label>
                    <DatePicker
                      id='startDate'
                      name='startDate'
                      className='p-2'
                      style={{ padding: '15px' }}
                      selected={
                        
                        startDate
                      }
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  {!checked && (
                    <div className='col-6 form-group'>
                      <label>End Date<span style={{color: "red"}}>*</span></label>
                      <DatePicker
                        id='endDate'
                        name='endDate'
                        className='p-2'
                        style={{ padding: '15px' }}
                        selected={
                          endDate
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
                      background='#021098'
                      onClick={() => {
                        handleExpeSubmit()
                        setDisplayWorkExperience(true)
                      }}
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
              {localExperience.length > 0 &&
                localExperience.map((item, index) => {
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
              <form  >
                <ModalForm className='row'>
                  <div className='col-12 form-group'>
                    <label>School<span style={{color: "red"}}>*</span></label>
                    <input
                      id='school'
                      name='school'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter School name'
                      value={
                      
                        eduFormik.values.school
                      }
                      onBlur={eduFormik.handleBlur}
                      onChange={eduFormik.handleChange}
                    />
                    {eduFormik.touched.school && eduFormik.errors.school ? (
                      <label className='error'>{eduFormik.errors.school}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Degree<span style={{color: "red"}}>*</span></label>
                    <input
                      id='degree'
                      name='degree'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter Degree '
                      value={
                        
                        eduFormik.values.degree
                      }
                      onBlur={eduFormik.handleBlur}
                      onChange={eduFormik.handleChange}
                    />
                    {eduFormik.touched.degree && eduFormik.errors.degree ? (
                      <label className='error'>{eduFormik.errors.degree}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <label>Filed of study<span style={{color: "red"}}>*</span></label>
                    <input
                      id='course'
                      name='course'
                      type='text'
                      className='form-control ps-3'
                      placeholder='Enter filed of study'
                      value={
                        
                        eduFormik.values.course
                      }
                      onBlur={eduFormik.handleBlur}
                      onChange={eduFormik.handleChange}
                    />
                    {eduFormik.touched.course && eduFormik.errors.course ? (
                      <label className='error'>{eduFormik.errors.course}</label>
                    ) : null}
                  </div>
                  <div className='col-12 form-group'>
                    <div className='d-flex justify-content-between'>
                      <label>Activities and societies<span style={{color: "red"}}>*</span></label>
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
                      
                        eduFormik.values.activities
                      }
                      onBlur={eduFormik.handleBlur}
                      onChange={eduFormik.handleChange}
                    />
                    {eduFormik.touched.activities && eduFormik.errors.activities ? (
                      <label className='error'>
                        {eduFormik.errors.activities}
                      </label>
                    ) : null}
                  </div>

                  <div className='col-6 form-group'>
                    <label>Entry Date<span style={{color: "red"}}>*</span></label>
                    <DatePicker
                      id='eduStartDate'
                      name='eduStartDate'
                      className='p-2'
                      style={{ padding: '15px' }}
                      selected={
                        eduStartDate
                      }
                      onChange={(date) => setEduStartDate(date)}
                    />
                  </div>
                  <div className='col-6 form-group'>
                    <label>Graduation Date<span style={{color: "red"}}>*</span></label>
                    <DatePicker
                      id='eduEndDate'
                      name='eduEndDate'
                      className='p-2'
                      style={{ padding: '15px' }}
                      selected={
                         eduEndDate
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
                      type='button'
                      onClick={() =>{
                        handleEduSubmit();
                        setDisplayEducation(true)
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
              { localEducation  &&
                localEducation.map((item, index) => {
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
              <label>What are your skills<span style={{color: "red"}}>*</span></label>
            </div>
            <input
              onChange={handleChangeVal}
              style={{ width: "100%", outline: "none", color: "purple" }}
              value={inVal}
              type="text"
              placeholder="Enter your skills and press the space button to add "
              className="py-2 px-3"
              // className='form-control ps-3'
              onKeyDown={handleKey}
            />
              { skills &&
          skills.map((item, i) => (
                <SkillTab key={i} skill={item} onClick={() => onDelete(item)} />
              ))}
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
            <CustomButton type='button'
            onClick={onSubmit}
              background='#00ADEF'>
              {'Save'}
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};
