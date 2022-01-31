import { useState } from 'react'
import {
  HeaderTeam,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
  BntWrap,
} from './teams.styled'

import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { CustomSelect } from '../../../../components/select/customSelect'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CustomButton } from '../../../../components/button/button.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import { TeamModal, EducationModal } from './teamModal'
import { Select } from 'antd'
import { Tag } from '../../../../components/tag/Tag'
import 'antd/dist/antd.css'
const { Option } = Select

export const TeamProfile = () => {
  const [disImg, setImg] = useState(null)

  const [show, setShow] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const skill = ['Java', 'C++', 'Ruby', 'Javascript', 'HTML', 'CSS', 'Express']
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

  const next = () => {
    changePath(path + 1)
  }

  const onSubmit = (value) => {}
  const children = []
  for (let i = 0; i < skill.length; i++) {
    children.push(<Option key={i}>{skill[i]}</Option>)
  }

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <>
      {show ? <TeamModal handleClose={setShow} /> : <span></span>}
      {showEducation ? (
        <EducationModal handleClose={setShowEducation} />
      ) : (
        <span></span>
      )}
      <HeaderTeam>
        <h5> Team</h5>
        <p className="text-nowrap">Let’s you introduce your Co-Founder(s)</p>
      </HeaderTeam>

      <form style={{ marginBottom: '4rem' }}>
        <FormWrapper height="70%">
          <div className="div">
            <span>Founder</span>
            <p>A brief profile of founders</p>
          </div>

          <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <ImageWrapper>
              <img
                className=""
                src={disImg}
                style={{ borderRadius: '70px', width: '90px', height: '90px' }}
                alt=""
              />
            </ImageWrapper>

            <InputWrapper for="found">
              <input type="file" onChange={onChangeImage} id="found" hidden />
              <PlusOutlined />
            </InputWrapper>
          </div>

          <div className="row my-3">
            <div className="form-group col-12">
              <div className="d-flex justify-content-between">
                <label>Brief Introduction *</label>
                <label style={{ color: '#828282' }}>10 words at most</label>
              </div>
              <input
                type="text"
                name="bio"
                placeholder="Enter a brief bio about yourself"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>First Name *</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter first name"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter last name"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email address"
                className="form-control"
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
                type="text"
                name="country"
                placeholder="Enter your country"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>State *</label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                className="form-control"
              />
            </div>
            <div className="form-group  col-12 ">
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name="phone"
                countryCallingCodeEditable={true}
                className="custs w-lg-50"
                value={phone}
                onChange={setPhone}
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
              <label>What are your skills *</label>
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
          <div className="div">
            <span>Web & Social Media</span>
          </div>

          <hr />

          <div className="row">
            <div className="form-group col-lg-6 col-12">
              <label>Linkedin *</label>
              <input
                type="text"
                name="linkedin"
                placeholder="Enter Linkdin link"
                className="form-control"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Twitter *</label>
              <input
                type="text"
                name="twitter"
                placeholder="Enter Twitter link"
                className="form-control"
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Website *</label>
              <input
                type="text"
                name="website"
                placeholder="Enter website"
                className="form-control"
              />
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div">
            <span>Co-Founders</span>
            <p>Create a profile for your co-founders</p>
          </div>
          <hr />

          <div>
            <label>Do you have a co-founder</label>

            <div className="d-flex">
              <BntWrap>
                <button className="me-3">Yes</button>
                <button className="">No</button>
              </BntWrap>
            </div>

            <div className="sold">
              <Tag
                name="+ Add Co-founder"
                color="#4F4F4F"
                bg="rgba(183, 218, 231, 0.5
                "
                padding="8px 14px"
              />
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div">
            <span>Invite Team Members</span>
            <p>Key team members</p>
          </div>
          <hr />

          <div className="form-group my-2">
            <label>
              Invite a team member that can benefit from knight venture
            </label>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Team member"
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
          <div className="col-9 d-flex justify-content-lg-end">
            <CustomButton className="mx-4" background="#00ADEF">
              Save
            </CustomButton>
            <CustomButton
              onClick={next}
              style={{ marginLeft: '0.5rem', marginRight: '7rem' }}
              background="#2E3192"
            >
              Next
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}
