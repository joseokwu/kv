import React, { useState } from 'react'
import { Button, Modal, TextField } from '../../../components'
import edit from '../../../assets/icons/edit.svg'
import twitter from '../../../assets/images/profileTwitter.svg'
import linkedIn from '../../../assets/images/profileLinkedIn.svg'
import location from '../../../assets/icons/locationSm.svg'
import phone from '../../../assets/icons/phoneSm.svg'
import web from '../../../assets/icons/webSm.svg'
import banner from '../../../assets/images/investorBanner.png'
import investor from '../../../assets/images/investorProfileImg.png'
import closedEye from '../../../assets/icons/eye-closed.svg'
import { useAuth } from '../../../hooks'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { DatePicker } from 'antd'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

export const InvestorDetails = ({ data }) => {
  const { stateAuth } = useAuth()

  return (
    <section className="profile-info">
      <div
        className="profile-banner"
        style={{
          background: '#00ADEF',
          borderRadius: '20px 20px 0px 0px',
        }}
      >
      </div>

      <div className="profile-contact-info">
        <Modal title="Edit  Intro" id="investDetailsModal">
          <EditInvestorDetails />
        </Modal>
        <span className="edit-info">
          <img
            src={edit}
            alt="edit"
            data-toggle="modal"
            data-target="#investDetailsModal"
            role="button"
          />
        </span>
        <span className="profile-image">
          <img
            src={stateAuth?.investorData?.profile?.avatar}
            alt="sample company"
          />
        </span>

        <article className="row">
          <div className="col-lg-12">
            <h1 className="profile-name">{stateAuth?.username}</h1>
          </div>

          <div className="col-lg-12 d-flex justify-content-between mb-3">
            <div className="">
              <p style={{ color: '#3E3E3E', textDecoration: 'none' }}>
                {data?.profile?.email}
              </p>
            </div>

            <div>
              <span>
                <a
                  href={`${data?.profile?.socialMedia?.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter" className="mr-3" />
                </a>
                <a
                  href={`${data?.profile?.socialMedia?.linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="linkedIn" />
                </a>
              </span>
            </div>
          </div>

          {/* <div className="mb-3 d-flex justify-content-between"> */}
          <div className="row mb-3">
            <div className="col-lg-4 mb-2">
              <p>
                <img className="pe-1" src={location} alt="location" />{' '}
                {data?.profile?.address}
              </p>
            </div>

            <div className="col-lg-4 mb-2">
              <a
                className="text-decoration-none text-black"
                href={`${data?.profile?.socialMedia?.website}`}
                target={'_blank'}
                rel="noreferrer"
              >
                <img className="pe-1" src={web} alt="web" />
                {data?.profile?.socialMedia?.website}
              </a>
            </div>

            <div className="col-lg-4 text-right  mb-2">
              <a className="text-decoration-none text-black" href={`${data?.profile?.socialMedia?.profile}`}>
                {`https://www.knight.venture/${stateAuth?.firstname}${stateAuth?.lastname}`}
              </a>
            </div>
          </div>

          {/* </div> */}

          <div className="profile-bio pb-5">
            <p>{stateAuth?.investorData?.profile?.briefIntroduction}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

const EditInvestorDetails = () => {
  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()

  const onFinish = async () => {
    updateInvestorInfo()
  }

  const handleSocialInput = (e, name) => {
    const { value } = e.target
    console.log(name, value)
    updateInvestorProfileData('profile', {
      socialMedia: {
        ...stateAuth?.investorData?.profile.socialMedia,
        [name]: value,
      },
    })
  }

  const handleMobileInput = (value) => {
    updateInvestorProfileData('profile', {
      mobile_number: value,
    })
  }

  const [country, setCountry] = useState(
    stateAuth?.investorData?.profile?.country ?? '',
  )
  const [region, setRegion] = useState(
    stateAuth?.investorData?.profile?.state ?? '',
  )

  const handleCountry = (value) => {
    updateInvestorProfileData('profile', {
      ...stateAuth?.investorData?.profile?.country,
      country: value,
    })
    setCountry(value)
    console.log(value)
  }

  const handleChangeState = (value) => {
    updateInvestorProfileData('profile', {
      ...stateAuth?.investorData?.profile?.state,
      state: value,
    })
    setRegion(value)
    console.log(value)
  }

  const handleDateInput = (value) => {
    updateInvestorProfileData('profile', {
      dob: value,
    })
  }

  const dateFormat = 'YYYY-MM-DD'

  const letterOnly = (e) => {
    const charCode = e.charCode || e.which
    const keyValue = String.fromCharCode(charCode)
    const isValid = new RegExp(/^[a-zA-Z,.\s]*$/).test(keyValue)
    if (!isValid) {
      e.preventDefault()
      return
    }
  }

  return (
    <div className="px-4">
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
        <section className="row">
          <div className="col-12 mb-4">
            {/* <TextField
              label={
                <div className="flex-align justify-content-between">
                  <p>Brief Introduction*</p>
                  <p style={{ color: "gray" }}>10 characters at most</p>
                </div>
              }
              className="edit-input"
            /> */}

            <TextField
              label="Brief Introduction"
              id={'briefIntroduction'}
              name={'briefIntroduction'}
              onKeyPress={letterOnly}
              type={'text'}
              value={stateAuth?.investorData?.profile?.briefIntroduction}
              required={true}
              placeholder={'Enter brief bio about you'}
              className={'edit_input'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  briefIntroduction: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="First Name*"
              placeholder="Enter first name"
              className="edit-input"
            /> */}
            <TextField
              label="First Name"
              id={'firstName'}
              name={'firstName'}
              onKeyPress={letterOnly}
              type={'text'}
              value={stateAuth?.firstname}
              disabled
              placeholder={'Enter first name'}
              className={'edit_input text-black'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="Last Name*"
              placeholder="Enter last name"
              className="edit-input"
            /> */}
            <TextField
              label="Last Name"
              id={'lastName'}
              name={'lastName'}
              onKeyPress={letterOnly}
              type={'text'}
              value={stateAuth?.lastname}
              disabled
              placeholder={'Enter last name'}
              className={'edit_input text-black'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* <TextField
              type="email"
              label="Email*"
              placeholder="Enter email address"
              className="edit-input"
            /> */}
            <TextField
              label="Email"
              id={'email'}
              name={'email'}
              value={stateAuth?.email}
              disabled
              placeholder={'Enter email'}
              type={'email'}
              className={'edit_input text-black'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* <TextField
              type="date"
              label={
                <div className="flex-align">
                  <p>Date of Birth*</p>{" "}
                  <p className="vis-style ml-2">
                    Not visible to public{" "}
                    <i>
                      <img src={closedEye} alt="eye" />
                    </i>
                  </p>
                </div>
              }
              placeholder="Enter email address"
              className="edit-input"
            /> */}
            <label>
              <span style={{ color: 'red' }}>* </span>Date of Birth
              <span className="vis-style ml-3">
                Not visible to public{' '}
                <i>
                  <img src={closedEye} alt="eye" />
                </i>
              </span>
            </label>
            <DatePicker
              // label="Date of Birth"
              style={{ border: 'none', background: '#f8f8f8' }}
              id={'dob'}
              name={'dob'}
              required={true}
              defaultValue={
                stateAuth?.investorData?.profile?.dob !== null
                  ? moment(stateAuth?.investorData?.profile?.dob)
                  : moment()
              }
              placeholder="yyyy-mm-dd"
              className={'edit_input py-2'}
              format={dateFormat}
              onChange={(_, dateString) => handleDateInput(dateString)}
            />
          </div>
          <div className="col-12 mb-4">
            {/* <TextField
              label="Permanent Address"
              placeholder="Enter your permanent address"
              className="edit-input"
            /> */}
            <TextField
              label="Registered Address"
              id={'address'}
              name={'address'}
              type={'text'}
              required={true}
              placeholder={'Enter your registered address'}
              className={'edit_input'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  address: e.target.value,
                })
              }
              value={stateAuth?.investorData?.profile?.address}
            />
          </div>
          <div className="col-lg-4 mb-4">
            {/* <TextField
              label="Country"
              placeholder="Enter your country"
              className="edit-input"
            /> */}
            <label style={{ fontSize: '16px' }}>
              <span style={{ color: 'red' }}>* </span>Country
            </label>
            <CountryDropdown
              id={'country'}
              name={'country'}
              className="form-control ps-3 py-1 investor-country"
              value={country}
              onChange={(value) => handleCountry(value)}
            />
          </div>
          <div className="col-lg-4 mb-4">
            {/* <TextField
              label="State"
              placeholder="Enter your state"
              className="edit-input"
            /> */}
            <label style={{ fontSize: '16px' }}>
              <span style={{ color: 'red' }}>* </span>State
            </label>
            <RegionDropdown
              id={'state'}
              name={'state'}
              country={country}
              value={region}
              onChange={(value) => handleChangeState(value)}
              className="form-control ps-3"
            />
          </div>
          <div className="col-lg-4 mb-4">
            {/* <TextField
              label="City"
              placeholder="Enter your city"
              className="edit-input"
            /> */}
            <TextField
              label="City"
              id={'city'}
              name={'city'}
              type={'text'}
              onKeyPress={letterOnly}
              required={true}
              value={stateAuth?.investorData?.profile?.city}
              placeholder={'Enter your city'}
              className={'edit_input'}
              onChange={(e) =>
                updateInvestorProfileData('profile', {
                  city: e.target.value,
                })
              }
            />
          </div>
          <div className="col-lg-12 mb-4">
            {/* <PhoneInput label="Mobile Number" /> */}
            <label style={{ fontSize: '16px' }}>
              <span style={{ color: 'red' }}>* </span>Mobile Number
            </label>
            <PhoneInput
              id={'mobileNumber'}
              international
              name={'mobileNumber'}
              className={'in-reg-no py-1'}
              countryCallingCodeEditable={true}
              placeholder={'+234 000 0000 000'}
              maxLength={17}
              value={stateAuth?.investorData?.profile?.mobile_number}
              onChange={(e) => handleMobileInput(e)}
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="Linkedin*"
              placeholder="Enter Linkdin link"
              className="edit-input"
            /> */}
            <TextField
              label="LinkedIn"
              id={'linkedIn'}
              name={'linkedIn'}
              type={'text'}
              value={stateAuth?.investorData?.profile.socialMedia?.linkedIn}
              required={true}
              placeholder={'Enter linkedin link'}
              className={'edit_input'}
              onChange={(e) => handleSocialInput(e, 'linkedIn')}
            />
          </div>

          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="Twitter*"
              placeholder="Enter Twitter link"
              className="edit-input"
            /> */}
            <TextField
              label="Twitter"
              id={'twitter'}
              name={'twitter'}
              type={'url'}
              value={stateAuth?.investorData?.profile.socialMedia?.twitter}
              required={true}
              placeholder={'Enter twitter link'}
              className={'edit_input'}
              onChange={(e) => handleSocialInput(e, 'twitter')}
            />
          </div>

          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="Profile Link*"
              placeholder="www.knightventure/michealsmith"
              className="edit-input"
            /> */}
            <TextField
              label="Profile Link"
              id={'profileLink'}
              name={'profileLink'}
              type={'url'}
              // value={stateAuth?.investorData?.profile.socialMedia?.profileLink}
              value={`https://www.knight.venture/${stateAuth?.firstname}${stateAuth?.lastname}`}
              disabled
              placeholder={'Enter linkedin link'}
              className={'edit_input text-black'}
              // onChange={(e) =>  handleSocialInput(e , 'profileLink')}
            />
          </div>

          <div className="col-lg-6 mb-4">
            {/* <TextField
              label="Website*"
              placeholder="Enter website"
              className="edit-input"
            /> */}
            <TextField
              label="Website"
              id={'website'}
              name={'website'}
              type={'url'}
              required={true}
              placeholder={'Enter website'}
              value={stateAuth?.investorData?.profile.socialMedia?.website}
              className={'edit_input'}
              onChange={(e) => handleSocialInput(e, 'website')}
            />
          </div>

          <div className="col-12 text-right">
            <Button label="Save" type={'submit'} />
          </div>
        </section>
      </Form>
    </div>
  )
}
