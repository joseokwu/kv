import React, { useState, useEffect } from 'react'
import {
  HeaderTeam,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
  BntWrap,
} from './teams.styled'
import { updateFounderProfile } from '../../../../services/startup'
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { DatePicker } from 'antd'
import 'react-datepicker/dist/react-datepicker.css'
// import { CustomSelect } from "../../../../Startupcomponents/select/customSelect";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import { TeamModal, EducationModal } from './teamModal'
import { Select } from 'antd'

import 'antd/dist/antd.css'
// import { team } from "./../../../../services/startUpReg";
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader'
import { toast } from 'react-hot-toast'
import { CoFounder } from './coFounder'
import {
  LargeModal,
  WorkExperience,
  Education,
  SkillTab,
  Tag,
  RandomCard,
} from '../../../../Startupcomponents'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth';
import { upload } from '../../../../services/utils'
// import CountryDropdown from 'country-dropdown-with-flags-for-react'
import moment from 'moment'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const { Option } = Select

export const TeamProfile = () => {
  const { updateProfile, stateAuth, updateStartupInfo } = useAuth()
  // const [disImg, setImg] = useState(null);
  const [logoUploading, setLogoUploading] = useState(false)
  const [show, setShow] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express']
  const [dob, setDob] = useState(moment(stateAuth?.user?.team?.dob) ?? '')
  const [loading, setLoading] = useState(false)
  const [coFounder, setCoFounder] = useState('no')
  const [phone, setPhone] = useState(stateAuth?.user?.team?.mobile_number ?? '')
 
  const [country, setCountry] = useState(stateAuth?.startupData?.team?.country ?? '');
  const [region , setRegion] = useState(stateAuth?.startupData?.team?.state ?? '');

  const gender = [
    { label: '--Select-gender--', value: '' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  const dateFormat = 'YYYY-MM-DD'
  const [inVal, setVal] = useState('')
  const [editIndex, setEditIndex] = useState()
  const [isEditing, setIsEditing] = useState(false)
  const [avatar, setAvatar] = useState(stateAuth?.startupData?.team?.avatar ?? null)
 // console.log(stateAuth?.startupData?.team?.city)
  const {
    changePath,
    setWorkExperience,
    removeWorkExperience,
    removeEducation,
    editWorkExperience,
    setEducation,
    editEducation,
    state: {
      path,
      experience,
      workExperienceCoFounder,
      education,
      educationCoFounder,
    },
  } = useActivity()
  //const [skillSet, setSkill] = useState(stateAuth?.user?.team?.skills ?? []);
  const onChangeImage = async (e) => {
    const { files } = e.target
    const formData = new FormData()
    formData.append('dir', 'kv')
    formData.append('ref', stateAuth.user?.userId)
    formData.append('type', 'image')
    formData.append(0, files[0])
    try {
      console.log('uploaded')
      setLogoUploading(true)
      const response = await upload(formData)
      console.log(response)
      updateProfile('team', { avatar:response?.path })
      setAvatar(response?.path)
      setLogoUploading(false)
    } catch (error) {
      console.log(error)
      setLogoUploading(false)
      toast.error(error?.response?.data?.message ?? 'Unable to upload image')
    }
  }



  const formik = useFormik({
    initialValues: {
      briefIntroduction: stateAuth?.startupData?.team?.briefIntroduction ?? '',
      firstName: stateAuth?.startupData?.team?.firstName ?? '',
      lastName: stateAuth?.startupData?.team?.lastName ?? '',
      email: stateAuth?.startupData?.team?.email ?? '',
      state: stateAuth?.startupData?.team?.state ?? '',
      city: stateAuth?.startupData?.team?.city ?? '',
      dob: stateAuth?.startupData?.team?.dob ?? moment(),
      country: stateAuth?.startupData?.team?.country,
      gender: stateAuth?.startupData?.team?.gender ?? '',
      website: stateAuth?.startupData?.team?.socialMedia?.website,
      linkedIn: stateAuth?.startupData?.team?.socialMedia?.linkedIn ?? '',
      twitter: stateAuth?.startupData?.team?.socialMedia?.twitter ?? '',
      isCofounder: true,
    },

    onSubmit: (value) => onSubmit(value),
  })

  //console.log(stateAuth)

  const handleChange = (e, prefix = '') => {
    const { name, value } = e.target
    if (prefix !== '') {
      updateProfile('team', {
        [prefix]: {
          ...stateAuth?.startupData?.team[prefix],
          [name]: value,
        },
      })
      formik.handleChange(e)
      return
    }
    updateProfile('team', { [name]: value })
    formik.handleChange(e)
  }

  const handleChangeCountry = (value) => {
    updateProfile('team', { country: value })
    setCountry(value)
    console.log(value)
  }

  const handleChangeState = (value) => {
    updateProfile('team', { state: value })
    setRegion(value)
    console.log(value)
  }

  const handlePhoneInput = (value) => {
  
    updateProfile('team', {
      mobile_number: value,
    })
  
  }
  const handleChangeVal = (e) => {
    setVal(e.target.value)
  }
  const handleDateInput = (value) => {
    updateProfile('team', {
      dob: value,
    })
    formik.setFieldValue('dob', value.value)
  }

  const handleKey = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault()
      if (
        inVal.trim() === '' ||
        stateAuth.startupData.team.skills.indexOf(inVal.trim()) !== -1
      )
        return
      setVal('')
      updateProfile('team', {
        skills: [...stateAuth.startupData.team.skills, inVal],
      })
    }
  }

  const onDelete = (value) => {
    updateProfile('team', {
      skills: stateAuth.startupData.team.skills.filter(
        (item) => item !== value,
      ),
    })
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
    // if(stateAuth?.startupData?.team?.experience.length < 0 &&
    //   stateAuth?.startupData?.team?.education.length < 0 && stateAuth?.startupData?.team?.coFounder.length < 0
    //   ){
    //     toast.error('All fields are required');
    //     console.log('heyyy')
    //     return ;
    //   }
    console.log('heyyy', value)
    updateStartupInfo()
  }

  const handleWorkDetails = ({
    index,
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
        isPresentWorking: false,
      })
      setIsEditing(false)
    } else if (from === 'education') {
      setEducation({
        schoolName,
        course,
        degree,
        activities,
        startDate: eduStartDate,
        endDate: eduEndDate,
        isPresent: false,
      })
      setIsEditing(false)
    } else if (from === 'workExperienceEdit') {
      editWorkExperience({
        data: {
          companyName,
          location,
          position,
          responsibility,
          startDate,
          endDate,
          isPresentWorking: false,
        },
        index,
      })
      setIsEditing(false)
    } else if (from === 'educationEdit') {
      editEducation({
        data: {
          schoolName,
          course,
          degreeType: degree,
          activities,
          startDate: eduStartDate,
          endDate: eduEndDate,
          isPresent: false,
        },
        index,
      })
    }
  }

  useEffect(() => {
    if (stateAuth?.startupData?.team?.coFounder.length > 0) {
      setCoFounder('yes')
    }
  }, [])



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
        <h5 style={{ color: '#2E3192' }}>Team</h5>
        <p className="text-nowrap">Let’s you introduce your Founder(s)</p>
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
                  className=""
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
                <label>
                  Brief Introduction<span style={{ color: 'red' }}>*</span>
                </label>
                <label style={{ color: '#828282' }}>10 words at most</label>
              </div>
              <input
                onChange={handleChange}
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
              <label>
                First Name<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
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
              <label>
                Last Name<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
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
              <label>
                Email<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
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
              <label>
                Date of Birth<span style={{ color: 'red' }}>*</span>
              </label>
              <DatePicker
                id="dob"
                name="dob"
                className="custs p-2 py-4"
                style={{ padding: '15px' }}
                defaultValue={
                  moment(stateAuth?.startupData?.team?.dob) ?? moment()
                }
                format={dateFormat}
                onChange={handleDateInput}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <label className="error">{formik.errors.dob}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                Country<span style={{ color: 'red' }}>*</span>
              </label>

              <CountryDropdown
              
                className="form-control px-5 py-1 country-bg"
                value={country}
                onChange={(value) => handleChangeCountry(value)}

              ></CountryDropdown>
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                State<span style={{ color: 'red' }}>*</span>
              </label>
    
                <RegionDropdown
                 name="state"
                country={country}
                value={region}
                onChange={(value) => handleChangeState(value)}
                className="form-control ps-3"
                 /> 


              {formik.touched.state && formik.errors.state ? (
                <label className="error">{formik.errors.state}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>
                City<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
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
              <label>
                Mobile Number<span style={{ color: 'red' }}>*</span>
              </label>
              <PhoneInput
                international
                name="mobile_number"
                countryCallingCodeEditable={true}
                className="custs w-lg-50 ps-3 py-2"
                value={stateAuth?.startupData?.team?.mobile_number ?? ''}
                onBlur={formik.handleBlur}
                onChange={handlePhoneInput}
                MaxLength={17}
              />
              {formik.touched.mobile_number && formik.errors.mobile_number ? (
                <label className="error">{formik.errors.mobile_number}</label>
              ) : null}
            </div>
            <div className="form-group  col-lg-6 col-12">
              <label>
                Gender<span style={{ color: 'red' }}>*</span>
              </label>
              <select
                className="cust mx-3 px-2 py-2 extra"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={handleChange}
              >
                {gender.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  )
                })}
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <label className="error">{formik.errors.gender}</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height="80%">
          <div className="div">
            <span>Work Experience</span>
          </div>
          <hr />
          {stateAuth?.startupData?.team?.experience &&
            stateAuth?.startupData?.team?.experience.map((item, index) => {
              return (
                <WorkExperience
                  key={index}
                  {...item}
                  removeWorkExperience={removeWorkExperience}
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
          {stateAuth?.startupData?.team?.education &&
            stateAuth?.startupData?.team?.education.length > 0 &&
            stateAuth?.startupData?.team?.education.map((item, index) => {
              return (
                <Education
                  key={index}
                  {...item}
                  removeEducation={removeEducation}
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
              <label>
                What are your skills<span style={{ color: 'red' }}>*</span>
              </label>
              <p className="py-2">
                Please press the space button to add your skill
              </p>
            </div>
            <input
              onChange={handleChangeVal}
              style={{ width: '100%', outline: 'none', color: 'purple' }}
              value={inVal}
              type="text"
              placeholder="Enter your skills and press the space button to add "
              className="py-2 px-3"
              // className='form-control ps-3'
              onKeyDown={handleKey}
            />

            {stateAuth?.startupData?.team?.skills &&
              stateAuth?.startupData?.team?.skills.map((item, i) => (
                <SkillTab key={i} skill={item} onClick={() => onDelete(item)} />
              ))}
          </div>
        </FormWrapper>
        <FormWrapper height="70%">
          <div className="div border-bottom pb-2">
            <span>Co-Founders</span>
            <p className="pt-3">Create a profile for your Co-Founders</p>
          </div>

          <div className="mt-4">
            <label>Do you have Co-Founders?*</label>

            <div className="d-flex">
              <BntWrap>
                <button
                  type="button"
                  className={`me-3 ${
                    coFounder.normalize() === 'yes' ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setCoFounder('yes')
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`me-3 ${
                    coFounder.normalize() === 'no' ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setCoFounder('no')
                  }}
                >
                  No
                </button>
              </BntWrap>
            </div>

            {coFounder === 'no' ? (
              <span />
            ) : (
              <div className="sold">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <div className="row">
                      {stateAuth?.startupData?.team?.coFounder &&
                      stateAuth?.startupData?.team?.coFounder.length > 0 ? (
                        stateAuth?.startupData?.team?.coFounder.map(
                          (item, i) => (
                            <div className="col-6" key={i}>
                              <RandomCard
                                img={item.avatar}
                                name={item.firstName}
                              />
                            </div>
                          ),
                        )
                      ) : (
                        <span />
                      )}
                    </div>

                    <div className="mt-2">
                      <Tag
                        name="+ Add Co-founder"
                        color="#4F4F4F"
                        bg="rgba(183, 218, 231, 0.5"
                        padding="8px 14px"
                        data-target="#cofounder"
                        onClick={() => setShowModal(true)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Web & Social Media</span>
          </div>
          <div className="row">
            <div className="form-group col-lg-6 col-12">
              <label>
                LinkedIn<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={(e) => handleChange(e, 'socialMedia')}
                value={formik.values.linkedIn}
                // onBlur={formik.handleBlur}
                type="text"
                name="linkedIn"
                placeholder="Enter Linkdin link"
                className="form-control ps-3"
              />
              {formik.touched.linkedIn && formik.errors.linkedIn ? (
                <label className="error">{formik.errors.linkedIn}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>
                Twitter<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={(e) => handleChange(e, 'socialMedia')}
                value={formik.values.twitter}
                // onBlur={formik.handleBlur}
                type="text"
                name="twitter"
                placeholder="Enter Twitter link"
                className="form-control ps-3"
              />
              {formik.touched.twitter && formik.errors.twitter ? (
                <label className="error">{formik.errors.twitter}</label>
              ) : null}
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>
                Website<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                onChange={(e) => handleChange(e, 'socialMedia')}
                value={formik.values.website}
                type="text"
                name="website"
                placeholder="Enter website"
                className="form-control ps-3"
              />
              {formik.touched.website && formik.errors.website ? (
                <label className="error">{formik.errors.website}</label>
              ) : null}
            </div>
          </div>
        </FormWrapper>

        <div className="row ">
          <div className="col-3">
            <CustomButton className="" background="#808080" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-end">
            <CustomButton type="submit" className="mx-2" background="#00ADEF">
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
            <CustomButton
              type="button"
              onClick={() => changePath(path + 1)}
              background="#2E3192"
            >
              Next
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
  )
}
