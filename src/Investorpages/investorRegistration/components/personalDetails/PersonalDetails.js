import React, { useState } from 'react'
import imageRep from '../../../../assets/icons/avatar.svg'
import add from '../../../../assets/icons/addFile.svg'
import FormCard from '../../../partnerRegisteration/components/formCard/FormCard'
import {
  RowOption,
  TextField,
  Button,
} from '../../../../components'
import { useHistory } from 'react-router-dom'
import { Input, Form, Select } from 'antd'
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast'
import { useAuth } from '../../../../hooks/useAuth'
import { upload } from '../../../../services/utils'
import { CircularLoader } from '../../../../components/CircluarLoader/CircularLoader'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import moment from 'moment'
import './PersonalDetails.css'

export const PersonalDetails = () => {
  const hearOption = [
    'news',
    'social media',
    'internet search',
    'referral from startup',
    'referral from investor',
  ]

  const { updateInvestorProfileData, stateAuth, updateInvestorInfo } = useAuth()
  const { push } = useHistory()
  // const { changePath, state: { path }, } = useActivity();
  // const [loading, setLoading] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false)
  // const [nextLoading, setNextLoading] = useState(false);
  const [avatar, setAvatar] = useState(
    stateAuth?.investorData?.profile?.avatar ?? imageRep,
  )

  const onFinish = async (values) => {
    updateInvestorInfo()
   // console.log(values)
  }

  console.log(stateAuth)

  const onChangeImage = async (e) => {
    const { files } = e.target
    const formData = new FormData()
    formData.append('dir', 'kv')
    formData.append('ref', stateAuth.user?.userId)
    formData.append('type', 'image')
    formData.append(0, files[0])
    try {
      setLogoUploading(true)
      const response = await upload(formData)
      setAvatar(response?.path)
      updateInvestorProfileData('profile', {
        avatar: response?.path,
      })
      setLogoUploading(false)
    } catch (error) {
      setLogoUploading(false)
      toast.error(error?.response?.data?.message ?? 'Unable to upload image')
    }
  }

  const handleSocialInput = (e , name) =>{

    const {  value } = e.target;
    console.log(name, value)
    updateInvestorProfileData('profile', {
      socialMedia :{
        ...stateAuth?.investorData?.profile.socialMedia,
        [name]:value
      }
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
  };

  const dateFormat = "YYYY-MM-DD";

  //console.log(stateAuth);

  const letterOnly = (e) => {
    const charCode = e.charCode || e.which;
    const keyValue = String.fromCharCode(charCode);
    const isValid = new RegExp(/^[a-zA-Z\s]*$/).test(keyValue);
    if (!isValid) {
      e.preventDefault();
      return;
    }
  }


  return (
    <div className="register-form-wrap">
      <h3 style={{color: "#2e3192"}}>Personal Details</h3>
      <p>Let’s get to know you</p>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
        <div className="form-dp mb-4 bg-white">
          {logoUploading ? (
            <CircularLoader color={'#000'} />
          ) : (
            <span className={avatar === imageRep ? '' : 'image-placeholder'}>
              <img src={avatar} alt="placeholder" />
            </span>
          )}
          <span className="add-dp">
            <input type="file" id="dp" onChange={onChangeImage} />
            <img src={add} alt="add" />
          </span>
        </div>
        <FormCard title="Personal Information">
          <div className="row">
            <section className="col-12 mb-4">
              {/* <label>
                Brief Introduction<span style={{ color: 'red' }}>*</span>
              </label> */}
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
            </section>
            <section className="col-md-6 mb-4">
              {/* <label>
                First Name<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="First Name"
                id={'firstName'}
                name={'firstName'}
                onKeyPress={letterOnly}
                type={'text'}
                value={stateAuth?.investorData?.profile?.firstName}
                required={true}
                placeholder={'Enter first name'}
                className={'edit_input'}
                onChange={(e) =>
                  updateInvestorProfileData('profile', {
                    firstName: e.target.value,
                  })
                }
              />
            </section>

            <section className="col-md-6 mb-4">
              {/* <label>
                Last Name<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Last Name"
                id={'lastName'}
                name={'lastName'}
                onKeyPress={letterOnly}
                type={'text'}
                value={stateAuth?.investorData?.profile?.lastName}
                required={true}
                placeholder={'Enter last name'}
                className={'edit_input'}
                onChange={(e) =>
                  updateInvestorProfileData('profile', {
                    lastName: e.target.value,
                  })
                }
              />
            </section>

            <section className="col-md-6 mb-4">
              {/* <label>
                Email<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Email"
                id={'email'}
                name={'email'}
                value={stateAuth?.investorData?.profile?.email}
                required={true}
                placeholder={'Enter email'}
                type={'email'}
                className={'edit_input'}
                onChange={(e) =>
                  updateInvestorProfileData('profile', {
                    email: e.target.value,
                  })
                }
              />
            </section>

            <section className="col-md-6 mb-4">
              <label>
              <span style={{ color: 'red' }}>*</span>Date of Birth
              </label>
              <DatePicker
                // label="Date of Birth"
                style={{border: 'none', background: '#f8f8f8'}}
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
            </section>
          </div>
        </FormCard>

        <FormCard title="Contact Info">
          <div className="row mb-4">
            <section className="col-12 mb-4">
              {/* <label>
                Registered Address<span style={{ color: 'red' }}>*</span>
              </label> */}
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
            </section>

            <section className="col-lg-4 mb-4">
              <label style={{fontSize: '16px'}}>
              <span style={{ color: 'red' }}>* </span>Country
              </label>
              {/* <TextField
              label="Country"
              required={true}
              placeholder="Enter your country"
              className="edit_input"
            /> */}
              <CountryDropdown
                id={'country'}
                name={'country'}
                className="form-control ps-3 py-1 investor-country"
                value={country}
                onChange={(value) => handleCountry(value)}
              />
            </section>

            <section className="col-lg-4 mb-4">
              <label style={{fontSize: '16px'}}>
              <span style={{ color: 'red' }}>* </span>State
              </label>
              {/* <TextField
              label="State"
              required={true}
              placeholder="Enter your state"
              className="edit_input"
            /> */}
              <RegionDropdown
                id={"state"}
                name={"state"}
                country={country}
                value={region}
                onChange={(value) => handleChangeState(value)}
                className="form-control ps-3"
              />
            </section>

            <section className="col-lg-4 mb-4">
              {/* <label>
                City<span style={{ color: 'red' }}>*</span>
              </label> */}
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
            </section>

            <section className="col-lg-6 mb-4">
              <label style={{fontSize: '16px'}}>
              <span style={{ color: 'red' }}>* </span>Mobile Number
              </label>
              <PhoneInput
                id={'mobileNumber'}
                international
                name={'mobileNumber'}
                className={'in-reg-no py-1'}
                countryCallingCodeEditable={true}
                placeholder={"+234 000 0000 000"}
                maxLength={17}
                value={
                  stateAuth?.investorData?.profile?.mobile_number
                }
                onChange={(e) => handleMobileInput(e)}
              />
            </section>
            <section className="col-lg-6 mb-4">
              {/* <label>
                Company Email<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Company Email"
                id={'companyEmail'}
                name={'companyEmail'}
                value={stateAuth?.investorData?.profile?.companyEmail}
                required={true}
                placeholder={'E.g. info@knight.ventures'}
                className={'edit_input'}
                type={'email'}
                onChange={(e) =>
                  updateInvestorProfileData('profile', {
                    companyEmail: e.target.value,
                  })
                }
              />
            </section>
          </div>
        </FormCard>

        <FormCard title="Web & Social Media">
          <div className="row mb-4">
            <section className="col-lg-6 mb-4">
              {/* <label>
                Profile Link<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Profile Link"
                id={'profileLink'}
                name={'profileLink'}
                type={'text'}
                // value={stateAuth?.investorData?.profile.socialMedia?.profileLink}
                value={`https://www.knight.venture/${stateAuth?.firstname}${stateAuth?.lastname}`}
                disabled
                placeholder={'Enter linkedin link'}
                className={'edit_input'}
                // onChange={(e) =>  handleSocialInput(e , 'profileLink')}
              />
            </section>

            <section className="col-lg-6 mb-4">
              {/* <label>
                Website<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Website"
                id={'website'}
                name={'website'}
                type={'text'}
                required={true}
                placeholder={'Enter website'}
                value={stateAuth?.investorData?.profile.socialMedia?.website}
                className={'edit_input'}
                onChange={(e) =>  handleSocialInput(e , 'website')}
              />
            </section>

            <section className="col-lg-6 mb-4">
              {/* <label>
                LinkedIn<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="LinkedIn"
                id={'linkedIn'}
                name={'linkedIn'}
                type={'text'}
                value={stateAuth?.investorData?.profile.socialMedia?.linkedIn}
                required={true}
                placeholder={'Enter linkedin link'} 
                className={'edit_input'}
                onChange={(e) =>  handleSocialInput(e , 'linkedIn')}
                
              />
            </section>

            <section className="col-lg-6 mb-4">
              {/* <label>
                Twitter<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Twitter"
                id={'twitter'}
                name={'twitter'}
                type={'text'}
                value={stateAuth?.investorData?.profile.socialMedia?.twitter}
                required={true}
                placeholder={'Enter twitter link'}
                className={'edit_input'}
                onChange={(e) =>  handleSocialInput(e , 'twitter')}
              />
            </section>
          </div>
        </FormCard>

        <FormCard title="Referral">
          <div className="row mb-4">
            <section className="col-12 mb-4">
              {/* <label>
                Referral<span style={{ color: 'red' }}>*</span>
              </label> */}
              <TextField
                label="Referral"
                id={'referral'}
                name={'referral'}
                type={'text'}
                onKeyPress={letterOnly}
                value={stateAuth?.investorData?.profile.referral}
                required={true}
                placeholder="Enter a user in knight ventures"
                className="edit_input"
                onChange={(e) =>
                  updateInvestorProfileData('profile', {
                    referral: e.target.value,
                  })
                }
              />
            </section>
  
            <section className="col-12 mb-4">
              <p className="mb-3">How did you hear about Knight Venture?</p>
              <div>  
                <RowOption
                currentSelected={stateAuth?.investorData?.profile?.howDidYouAboutUs}
                getSelected={(value) => updateInvestorProfileData('profile', {
                  howDidYouAboutUs: value,
                  }) }
                 options={hearOption} />
              </div>
            </section>
          </div>
        </FormCard>

        <section
          className="d-flex align-items-center justify-content-end my-4"
          style={{ columnGap: 9 }}
        >
          <Button type={'submit'} label={'Save'} variant="secondary" />
          <Button
            type={"submit"}
            label={'Next'}
            variant="primary"
            // disabled={nextLoading}
            onClick={() => {
              push('#investor')
            }}
          />
          {/* <Button
          label={nextLoading ? <CircularLoader /> : "Next"} 
          variant="primary"
          disabled={nextLoading}
          onClick={() => changePath(2)}
          type="button"
        /> */}
        </section>
      </Form>
    </div>
  )
}
