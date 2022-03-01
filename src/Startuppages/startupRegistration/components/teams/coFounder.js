import React, { useState } from 'react'
import { ImageWrapper, CoInputWrapper, FormWrapper } from './teams.styled'
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import { useActivity } from '../../../../hooks/useBusiness'
import DatePicker from 'react-datepicker'
import PhoneInput from 'react-phone-number-input'
import { Select } from 'antd'
import { TeamModal, EducationModal } from './teamModal'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { CircularLoader } from '../../../../Startupcomponents/CircluarLoader/CircularLoader'
import { toast } from 'react-hot-toast'
import { team } from './../../../../services/startUpReg'

const { Option } = Select

export const CoFounder = () => {
  const [disImg, setImg] = useState(null)
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express']
  const [startDate, setStartDate] = useState(new Date())
  const [phone, setPhone] = useState()
  const [show, setShow] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const [loading, setLoading] = useState(false)
  const onChangeImage = (e) => {
    const { files } = e.target

    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]))
    }
  }

  const children = []
  for (let i = 0; i < skill.length; i++) {
    children.push(<Option key={i}>{skill[i]}</Option>)
  }

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  const {
    changePath,
    state: { path },
  } = useActivity()

  const back = () => {
    changePath(path - 1)
  }

  const save = () => {
    changePath(path + 0)
  }

  const onSubmit = (value) => {
    setLoading(true)
    team(value).then((res) => {
      if (res?.message) {
        console.log(res)
        toast.success(res?.message)
        setLoading(false)
        save()
      }
    })
  }

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
    },
    validateOnBlur: true,
    onSubmit: (value) => onSubmit(value),
  })

  return (
    <div className="px-3">
      {show ? <TeamModal handleClose={setShow} /> : <span></span>}
      {showEducation ? (
        <EducationModal handleClose={setShowEducation} />
      ) : (
        <span></span>
      )}

      <form style={{ marginBottom: '4rem' }} onSubmit={formik.handleSubmit}>
        <FormWrapper height="70%">
          <div className="div">
            <span>Co-Founder</span>
            <p>A brief profile of co-founders</p>
          </div>

          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
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

            <CoInputWrapper for="found">
              <input type="file" onChange={onChangeImage} id="found" hidden />
              <PlusOutlined style={{ color: '#ffffff' }} />
            </CoInputWrapper>
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
                placeholder="Enter a brief bio about yourself"
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
                placeholderText="yyyy-mm-dd"
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
            <div className="form-group col-6 ">
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name="phone"
                countryCallingCodeEditable={true}
                className="custs w-lg-50 ps-1"
                value={phone}
                onChange={setPhone}
                placeholder="0000 00000 0000"
              />
            </div>
          </div>
        </FormWrapper>
        <FormWrapper height="80%">
          <div className="div">
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
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div">
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
                name="linkedIn"
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

        <div className="row mx-5 mb-5">
          <div className="col-3">
            <CustomButton className="" background="#D0D0D1" onClick={back}>
              Back
            </CustomButton>
          </div>
          <div className="col-9 d-flex justify-content-end">
            {/* <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton> */}
            <CustomButton type="submit" disabled={loading} background="#00ADEF">
              {loading ? <CircularLoader /> : 'Save'}
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  )
}
