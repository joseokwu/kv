import React, { useState } from 'react'
import { useActivity } from '../../hooks/useBusiness'
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import { TeamMemberModal, EducationModal } from './teamMemberModal'
import {
  HeaderTeam,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
  TeamMemberWrapper,
} from './teamMember.styled'
import { DatePicker } from 'antd'
import PhoneInput from 'react-phone-number-input'
import { Tag } from '../../Startupcomponents'
import { CustomButton } from '../../Startupcomponents/button/button.styled'
import { toast } from 'react-hot-toast'
import { useHistory } from 'react-router'
import { useAuth } from '../../hooks/useAuth'
import { WorkExperience, Education } from '../../Startupcomponents'

const { Option } = Select

export const StartupTeamMember = () => {
  const { stateAuth } = useAuth()
  const [disImg, setImg] = useState(null)
  const [show, setShow] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [nextLoading, setNextLoading] = useState(false)
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express']
  const [startDate, setStartDate] = useState(new Date())
  const [phone, setPhone] = useState(stateAuth?.user?.teamMember?.mobile_number)
  const [teamMemberInfo, setTeamMemberInfo] = useState({
    avatar: stateAuth?.user?.teamMember?.avatar ?? '',
    briefIntroduction: stateAuth?.user?.teamMember?.briefIntroduction ?? '',
    firstName: stateAuth?.user?.teamMember?.firstName ?? '',
    lastName: stateAuth?.user?.teamMember?.lastName ?? '',
    email: stateAuth?.user?.teamMember?.email ?? '',
    country: stateAuth?.user?.teamMember?.country ?? '',
    state: stateAuth?.user?.teamMember?.state ?? '',
    city: stateAuth?.user?.teamMember?.city ?? '',
  })
  const [editIndex, setEditIndex] = useState()
  const [isEditing, setIsEditing] = useState(false)
  const {
    changePath,
    setWorkExperience,
    setEducation,
    state: { path, workExperience, education },
  } = useActivity()

  const onChange = (e) => {
    setTeamMemberInfo({ ...teamMemberInfo, [e.target.name] : e.target.value })
  }

  const onChangeImage = (e) => {
    const { files } = e.target

    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]))
    }
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

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  const onSubmit = async (value) => {
    try {
      const teamMember = {
        type: 'teamMember',
        accType: 'startup',
        values: {
          ...value,
          experience: workExperience,
          education: education,
        },
        userId: stateAuth?.user?.teamMemberInfo?.userId,
      }
      console.log(teamMember)
    } catch (err) {
      setLoading(false)
      toast.error(
        err?.res?.data?.message || 'There was an error updating team member',
      )
    }
  }

  // const formik = useFormik({
  //   initialValues: {
  //     avatar: '',
  //     briefIntroduction: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     dob: startDate,
  //     country: '',
  //     state: '',
  //     city: '',
  //     skills: [],
  //   },
  const formik = useFormik({
    initialValues: {
      avatar: stateAuth?.user?.teamMember?.avatar ?? '',
      briefIntroduction: stateAuth?.user?.teamMember?.briefIntroduction ?? '',
      firstName: stateAuth?.user?.teamMember?.firstName ?? '',
      lastName: stateAuth?.user?.teamMember?.lastName ?? '',
      email: stateAuth?.user?.teamMember?.email ?? '',
      dob: startDate,
      country: stateAuth?.user?.teamMember?.country ?? '',
      state: stateAuth?.user?.teamMember?.state ?? '',
      city: stateAuth?.user?.teamMember?.city ?? '',
      skills: [],
    },
    validateOnBlur: true,
    onSubmit: (value) => onSubmit(value),
  })
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
  }) => {
    if (from === 'workExperience') {
      setWorkExperience({
        title,
        location,
        position,
        description,
        startDate,
        endDate,
      })
      setIsEditing(false)
    } else if (from === 'education') {
      setEducation({
        school,
        course,
        degree,
        activities,
        eduStartDate,
        eduEndDate,
      })
      setIsEditing(false)
    }
  }

  return (
    <>
      <TeamMemberWrapper>
        <div className="mt-5">
          {show ? (
            <TeamMemberModal
              handleClose={setShow}
              handleWorkDetails={handleWorkDetails}
              editIndex={editIndex}
              workExperience={workExperience}
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
          <HeaderTeam>
            <h5>Team Member</h5>
            <p className="text-nowrap">
              A brief profile about you as team member of the startup
            </p>
          </HeaderTeam>

          <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
            <FormWrapper height="70%">
              <div
                style={{
                  //   marginTop: '10px',
                  marginLeft: '10px',
                  position: 'relative',
                }}
              >
                <ImageWrapper>
                  {disImg === null ? (
                    <UserOutlined />
                  ) : (
                    <img
                      className=""
                      src={disImg}
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
                  <input
                    type="file"
                    onChange={onChangeImage}
                    id="found"
                    hidden
                  />
                  <PlusOutlined style={{ color: '#ffffff' }} />
                </InputWrapper>
              </div>

              <div className="row my-3">
                <div className="form-group col-12">
                  <div className="d-flex justify-content-between">
                    <label>Brief Introduction *</label>
                    <label style={{ color: '#828282' }}>10 words at most</label>
                  </div>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.briefIntroduction}
                    type="text"
                    name="briefIntroduction"
                    placeholder="Enter brief bio about your"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-6 col-12">
                  <label>First Name *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-6 col-12">
                  <label>Last Name *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-6 col-12">
                  <label>Email *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="text"
                    name="email"
                    placeholder="Enter email address"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group  col-lg-6 col-12">
                  <label>Date of Birth *</label>
                  <DatePicker
                    className="custs p-2"
                    style={{ padding: '15px' }}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="form-group col-lg-4 col-12">
                  <label>Country *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    type="text"
                    name="country"
                    placeholder="Enter your country"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-4 col-12">
                  <label>State *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    type="text"
                    name="state"
                    placeholder="Enter your state"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-4 col-12">
                  <label>City *</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group  col-6 ">
                  <label>Mobile Number *</label>
                  <PhoneInput
                    international
                    name="mobile_number"
                    countryCallingCodeEditable={true}
                    className="custs w-lg-50 ps-3"
                    value={
                      stateAuth?.user?.teamMember?.mobile_number
                        ? stateAuth?.user?.teamMember?.mobile_number
                        : phone
                    }
                    onChange={setPhone}
                    MaxLength={17}
                  />
                </div>
              </div>
            </FormWrapper>
            <FormWrapper height="80%">
              <div className="div">
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
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '60%', color: 'red' }}
                  placeholder="Please select"
                  onChange={handleChange}
                >
                  {children}
                </Select>
              </div>
            </FormWrapper>

            <FormWrapper height="70%">
              <div className="div border-bottom pb-3">
                <span>Web & Social Media</span>
              </div>
              <div className="row">
                <div className="form-group col-lg-6 col-12">
                  <label>Linkedin*</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.linkedIn}
                    type="text"
                    name="linkedin"
                    placeholder="Enter Linkdin link"
                    className="form-control ps-3"
                  />
                </div>
                <div className="form-group col-lg-6 col-12">
                  <label>Twitter*</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.twitter}
                    type="text"
                    name="twitter"
                    placeholder="Enter Twitter link"
                    className="form-control ps-3"
                  />
                </div>

                <div className="form-group col-lg-6 col-12">
                  <label>Website*</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.website}
                    type="text"
                    name="website"
                    placeholder="Enter website"
                    className="form-control ps-3"
                  />
                </div>
              </div>
            </FormWrapper>

            <div className="row">
              <div className="col-3">
                <CustomButton
                  className="mx-5 px-3"
                  background="#D0D0D1"
                  onClick={back}
                >
                  Go Back
                </CustomButton>
              </div>
              <div className="col-9 d-flex justify-content-end">
                <CustomButton
                  type="submit"
                  onClick={(e) => {
                    onSubmit(e)
                  }}
                  className="mx-4"
                  background="#00ADEF"
                >
                  Save
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </TeamMemberWrapper>
    </>
  )
}
