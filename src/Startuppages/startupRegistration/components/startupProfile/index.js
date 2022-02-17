import React, { useState } from 'react'
import {
  HeaderStartup,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
} from './startup.styled';
import './style.css';
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CustomSelect } from '../../../../Startupcomponents/select/customSelect'
import { stage, optionsNumb, options } from '../../../../constants/domiData'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import { TextField } from '../../../../Startupcomponents'

export const StartupProfile = () => {
  const [disImg, setImg] = useState(null)

  const [startDate, setStartDate] = useState(new Date())

  const [phone, setPhone] = useState()

  const {
    changePath,
    state: { path },
  } = useActivity()

  const onChangeImage = (e) => {
    const { files } = e.target

    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]))
    }
  }

  const next = () => {
    changePath(path + 1)
  }

  const onSubmit = (value) => {}

  const formik = useFormik({
    initialValues: {
      startupname: '',
      brand: '',
      elevatorpitch: '',
      yearFounded: startDate,
      regNumber: '',
      companySize: 'Select-size',
      sector: 'Select-sector',
      stage: 'Select-stage',
      acceleratornames: '',
      address: '',
      country: '',
      state: '',
      city: '',
      email: '',
      phone: phone,
      profileHandle: '',
      website: '',
      linkedin: '',
      twitter: '',
    },
    validateOnBlur: true,
    onSubmit: (value) => onSubmit(value),
  })

  return (
    <>
      <HeaderStartup>
        <h5> Startup Profile</h5>
        <p>Let's get to know your startup</p>
      </HeaderStartup>

      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <ImageWrapper>
          {disImg === null ? (
            <UserOutlined />
          ) : (
            <img
              className=""
              src={disImg}
              style={{ borderRadius: '70px', width: '90px', height: '90px' }}
              alt=""
            />
          )}
        </ImageWrapper>

        <InputWrapper for="dp">
          <input type="file" onChange={onChangeImage} id="dp" hidden />
          <PlusOutlined style={{color: 'white'}} />
        </InputWrapper>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper className="pe-5">
          <div className="div border-bottom pb-3">
            <span className="">Startup profile</span>
          </div>

          <div className="row">
            <div className="form-group col-12">
              <label>Elevator Pitch *</label>
              <textarea
                name="elevatorpitch"
                placeholder="One line pitch 150 words maximum"
                value={formik.values.elevatorpitch}
                onChange={formik.handleChange}
                rows="4"
                cols="4"
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Startup *</label>
              <input
                type="text"
                name="startupname"
                placeholder="Entity Name As Per Registration"
                value={formik.values.startupname}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Brand *</label>
              <input
                type="text"
                name="brand"
                placeholder="eg; Knight Ventures"
                value={formik.values.brand}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Year Founded *</label>
              <DatePicker
                className="date-input col-lg-12 ps-3 py-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Registration Number *</label>
              <input
                type="text"
                name="regNumber"
                placeholder="1234567890"
                value={formik.values.regNumber}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Company Size *</label>
              <CustomSelect
                options={optionsNumb}
                value={formik.values.companySize}
                onChange={(value) =>
                  formik.setFieldValue('companySize', value.value)
                }
                className="cust"
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Which sector does your business operate in?*</label>
              <CustomSelect
                options={options}
                value={formik.values.sector}
                onChange={(value) =>
                  formik.setFieldValue('sector', value.value)
                }
                className="cust"
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>What stage is your business in *</label>
              <CustomSelect
                options={stage}
                value={formik.values.stage}
                onChange={(value) => formik.setFieldValue('stage', value.value)}
                className="cust"
              />
            </div>

            <div className="form-group col-12">
              <label>
                Enter the name of Accelerator /incubator in case you've worked
                with any{' '}
              </label>
              <input
                type="text"
                name="acceleratornames"
                placeholder="Enter Accelerator name"
                value={formik.values.acceleratornames}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Contact info</span>
          </div>

          <div className="row mt-4">
            <div className="form-group col-12">
              <label>Registered Address </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your registered address"
                value={formik.values.address}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>Country *</label>
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={formik.values.country}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>State *</label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                value={formik.values.state}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formik.values.city}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group  col-lg-6 col-12 ">
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name="phone"
                countryCallingCodeEditable={true}
                className="custs ps-3"
                value={phone}
                onChange={setPhone}
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Company Email *</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Web & Social Media</span>
          </div>

          <div className="row mt-4">
            <div className="form-group col-lg-6 col-12">
              <label>What should be your startup profile handle </label>
              <input
                type="text"
                name="profileHandle"
                placeholder="Enter your startup profile handle"
                value={formik.values.profileHandle}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Website *</label>
              <input
                type="text"
                name="website"
                placeholder="Enter your startup website"
                value={formik.values.website}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Linkedin *</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Enter your Linkedin profile name"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Twitter *</label>
              <input
                type="text"
                name="twitter"
                placeholder="Enter your Twitter profile name"
                value={formik.values.twitter}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>
          </div>
          <div className="d-flex my-4 justify-content-end">
            <div>
              <CustomButton background="#06ADEF">Save</CustomButton>
            </div>
            <div className="mx-2">
              <CustomButton onClick={next} background="#2E3192">
                Next
              </CustomButton>
            </div>
          </div>
        </FormWrapper>
      </form>
    </>
  )
}
