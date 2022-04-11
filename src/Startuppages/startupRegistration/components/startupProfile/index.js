import React, { useState, useMemo } from 'react'
import {
  HeaderStartup,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
} from './startup.styled'
import './style.css'
import { UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { DatePicker } from 'antd'
import 'react-datepicker/dist/react-datepicker.css'
import { CustomSelect } from '../../../../Startupcomponents/select/customSelect'
import { stage, optionsNumb, options } from '../../../../constants/domiData'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CustomButton } from '../../../../Startupcomponents/button/button.styled'
import { useActivity } from '../../../../hooks/useBusiness'
import { updateFounderProfile } from '../../../../services/startup'
import { CircularLoader } from './../../../../Startupcomponents/CircluarLoader/CircularLoader'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router-dom'
import { useAuth } from './../../../../hooks/useAuth'
import { upload } from '../../../../services/utils'
import CountryDropdown from 'country-dropdown-with-flags-for-react'
import moment from 'moment';


export const StartupProfile = () => {
  const {
    changePath,
    state: { path },
  } = useActivity()
  //const initialDate = useMemo(() => moment().format("YYYY-DD-YY"), []);
  const dateFormat = 'YYYY-MM-DD';
  const { stateAuth } = useAuth()
  const [disImg, setImg] = useState(null)
  const [logo, setLogo] = useState(
    stateAuth?.user?.startUpProfile?.logo ?? null,
  )
  const [logoUploading, setLogoUploading] = useState(false)
  const [opts, setOpts] = useState('')
 // const dte = new Date(stateAuth?.user?.startUpProfile?.yearFounded);
  const [startDate, setStartDate] = useState(moment(stateAuth?.user?.startUpProfile?.yearFounded) ?? '')
  const [loading, setLoading] = useState(false)
  const [nextloading, setNextLoading] = useState(false)
  const [phone, setPhone] = useState(
    stateAuth?.user?.startUpProfile?.contactInfo?.phoneNumber ?? '',
  )
  const [contacts, setContacts] = useState({
    registeredAddress:
      stateAuth?.user?.startUpProfile?.contactInfo?.registeredAddress ?? '',
    country: stateAuth?.user?.startUpProfile?.contactInfo?.country ?? '',
    state: stateAuth?.user?.startUpProfile?.contactInfo?.state ?? '',
    city: stateAuth?.user?.startUpProfile?.contactInfo?.city ?? '',
    companyEmail:
      stateAuth?.user?.startUpProfile?.contactInfo?.companyEmail ?? '',
  })
  const [socialMedia, setSocialmedia] = useState({
    profileHandle:
      stateAuth?.user?.startUpProfile?.socialMedia?.profileHandle ?? '',
    companyWebsite:
      stateAuth?.user?.startUpProfile?.socialMedia?.companyWebsite ?? '',
    linkedInHandle:
      stateAuth?.user?.startUpProfile?.socialMedia?.linkedInHandle ?? '',
    twitterHandle: stateAuth?.user?.startUpProfile?.socialMedia?.twitterHandle ?? '',
  })

  const history = useHistory()

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
      setLogo(response?.path)
      setLogoUploading(false)
    } catch (error) {
      console.log(error)
      setLogoUploading(false)
      toast.error(error?.response?.data?.message ?? 'Unable to upload image')
    }
  }         

  const onChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value })
  }
  // console.log(stateAuth?.user?.startUpProfile)
  const onChangeMedia = (e) => {
    setSocialmedia({ ...socialMedia, [e.target.name]: e.target.value })
  }
  const next = () => {
    changePath(path + 1)
  }

  const onSubmit = async (value) => {
    try {
      const startupProfile = {
        type: 'startUpProfile',
        accType: 'startup',
        values: {
          ...value,
          logo: logo,
          yearFounded:startDate,
          contactInfo: {
            ...contacts,
            phoneNumber: phone,
          },
          socialMedia,
        },
        userId: stateAuth?.user?.userId,
      }
      console.log(startupProfile)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateFounderProfile(startupProfile)

        if (result?.success) {
          toast.success('Profile' + ' ' + result?.message)
          setOpts(false)
          return changePath(path + 1)
        }
      }
      setLoading(true)
      let result = await updateFounderProfile(startupProfile)

      if (!result?.success) {
        toast.error(result?.message || 'There was an error in updating profile')
        setLoading(false)
        return
      }
      toast.success('Profile' + ' ' + result?.message)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      toast.error(
        err?.response?.data?.message ||
          'There was an error in updating profile',
      )
    }
  }

  const formik = useFormik({
    initialValues: {
      startupName: stateAuth?.user?.businessname ?? '',
      elevatorPitch: stateAuth?.user?.startUpProfile?.elevatorPitch ?? '',
      brand: stateAuth?.user?.startUpProfile?.brand ?? '',
      registrationNumber:
        stateAuth?.user?.startUpProfile?.registrationNumber ?? '',
      companySize: stateAuth?.user?.startUpProfile?.companySize ?? '',
      businessSector: stateAuth?.user?.startUpProfile?.businessSector ?? '',
      startupStage: stateAuth?.user?.startUpProfile?.startupStage ?? '',
      acceleratorName: stateAuth?.user?.startUpProfile?.acceleratorName ?? '',
    },
 
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
          {logo === null ? (
            logoUploading ? (
              <CircularLoader color={'#000'} />
            ) : (
              <UserOutlined />
            )
          ) : (
            <img
              className=""
              src={logo}
              style={{ borderRadius: '70px', width: '90px', height: '90px' }}
              alt=""
            />
          )}
        </ImageWrapper>

        <InputWrapper for="dp">
          <input type="file" onChange={onChangeImage} id="dp" hidden />
          <PlusOutlined style={{ color: 'white' }} />
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
                id="elevatorPitch"
                name="elevatorPitch"
                placeholder="One line pitch 150 words maximum"
                value={formik.values.elevatorPitch}
                onChange={formik.handleChange}

                rows="4"
                cols="4"
                className="form-control"
              ></textarea>
              {formik.touched.elevatorPitch && formik.errors.elevatorPitch ? (
                <label className="error">{formik.errors.elevatorPitch}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Startup *</label>
              <input
                id="startupName"
                type="text"
                name="startupName"
                disabled={formik.values.startupName !== ''}
                placeholder="Entity Name As Per Registration"
                value={formik.values.startupName}
                onChange={formik.handleChange}
             
                className="form-control ps-3"
              />
              {formik.touched.startupName && formik.errors.startupName ? (
                <label className="error">{formik.errors.startupName}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Brand *</label>
              <input
                id="brand"
                type="text"
                name="brand"
                placeholder="eg; Knight Ventures"
                value={formik.values.brand}
                onChange={formik.handleChange}
               
                className="form-control ps-3"
              />
              {formik.touched.brand && formik.errors.brand ? (
                <label className="error">{formik.errors.brand}</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Year Founded *</label>
              <DatePicker
                id="yearFounded"
                name="yearFounded"
                defaultValue={moment(stateAuth?.user?.startUpProfile?.yearFounded) ?? moment()}
              format={dateFormat}
              onChange={(date,dateString) => setStartDate(dateString)}
              
              />

            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Registration Number *</label>
              <input
                id="registrationNumber"
                type="text"
                name="registrationNumber"
                placeholder="1234567890"
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
 
                className="form-control ps-3"
              />
              {formik.touched.registrationNumber &&
              formik.errors.registrationNumber ? (
                <label className="error">
                  {formik.errors.registrationNumber}
                </label>
              ) : null}
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Company Size *</label>
              <div>
                <input
                  id={'companySize'}
                  name={'companySize'}
                  value={formik.values.companySize}
                  onChange={formik.handleChange}
                
                  className="sel ps-3 pe-3"
                  placeholder="Enter company size"
                />
                {formik.touched.companySize && formik.errors.companySize ? (
                  <label className="error">{formik.errors.companySize}</label>
                ) : null}
                {/* {optionsNumb.map((item, i) => (
                    <option key={i} value={item.value}>
                      {' '}
                      {item.label}{' '}
                    </option>
                  ))} */}
                {/* </input> */}
              </div>
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Which sector does your business operate in?*</label>
              <div>
                <input
                  id={'businessSector'}
                  name={'businessSector'}
                  value={formik.values.businessSector}
                  onChange={formik.handleChange}
               
                  className="sel ps-3 pe-3"
                  placeholder="Enter Business Sector"
                />
                {formik.touched.businessSector &&
                formik.errors.businessSector ? (
                  <label className="error">
                    {formik.errors.businessSector}
                  </label>
                ) : null}
                {/* {options.map((item, i) => (
                    <option key={i} value={item.value}>
                      {' '}
                      {item.label}{' '}
                    </option>
                  ))} */}
                {/* </input> */}
              </div>
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>What stage is your business in *</label>
              <input
                id={'startupStage'}
                name={'startupStage'}
                value={formik.values.startupStage}
                onChange={formik.handleChange}
              
                className="sel ps-3 pe-3"
                placeholder="Enter Business Stage"
              />
              {formik.touched.startupStage && formik.errors.startupStage ? (
                <label className="error">{formik.errors.startupStage}</label>
              ) : null}
              {/* {stage.map((item, i) => (
                  <option key={i} value={item.value}>
                    {' '}
                    {item.label}{' '}
                  </option>
                ))} */}
              {/* </select> */}
            </div>

            <div className="form-group col-12">
              <label>
                Enter the name of Accelerator /incubator in case you've worked
                with any{' '}
              </label>
              <input
                id="acceleratorName"
                type="text"
                name="acceleratorName"
                placeholder="Enter Accelerator name"
                value={formik.values.acceleratorName}
                onChange={formik.handleChange}
              
                className="form-control ps-3"
              />
              {/* {formik.touched.acceleratorName &&
              formik.errors.acceleratorName ? (
                <label className='error'>{formik.errors.acceleratorName}</label>
              ) : null} */}
            </div>
          </div>
        </FormWrapper>

        <FormWrapper height="70%">
          <div className="div border-bottom pb-3">
            <span>Contact info</span>
          </div>

          <div className="row mt-4">
            <div className="form-group col-12">
              <label>Registered Address * </label>
              <input
                id="registeredAddress"
                type="text"
                name="registeredAddress"
                placeholder="Enter your registered address"
                value={contacts.registeredAddress}
                onChange={onChange}
                className="form-control ps-3"
              />
              {formik.touched.registeredAddress &&
              !contacts.registeredAddress ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>Country *</label>
              {/* <input
                id='country'
                type='text'
                name='country'
                placeholder='Enter your country'
                value={contacts.country}
                onChange={onChange}
                onBlur={formik.handleBlur}
                className='form-control ps-3'
              /> */}
              {/* <CountryDropdown classes='form-control ps-3 py-1 country-bg' value={contacts.country} onChange={onChange} onBlur={formik.handleBlur} /> */}
              <CountryDropdown
                id="country"
                type="text"
                name="country"
                className="form-control px-5 py-1 country-bg"
                preferredCountries={['ng']}
                value={contacts.country}
                handleChange={(e) => setContacts({...contacts, country:e.target.value})}
             
              ></CountryDropdown>
              {formik.touched.country && !contacts.country ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>State *</label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="Enter your state"
                value={contacts.state}
                onChange={onChange}
         
                className="form-control ps-3"
              />
              {formik.touched.state && !contacts.state ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>City *</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="Enter your city"
                value={contacts.city}
                onChange={onChange}
           
                className="form-control ps-3"
              />
              {formik.touched.city && !contacts.city ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group  col-lg-6 col-12 ">
              <label>Mobile Number *</label>
              <PhoneInput
                id="phoneNumber"
                international
                name="phoneNumber"
                countryCallingCodeEditable={true}
                className="custs ps-3 py-2"
                value={phone}
                onChange={setPhone}
                MaxLength={17}
                
              />
              {formik.touched.phoneNumber && !phone ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Company Email *</label>
              <input
                id="companyEmail"
                type="text"
                name="companyEmail"
                placeholder="Enter your email"
                value={contacts.companyEmail}
                onChange={onChange}
              
                className="form-control ps-3"
              />
              {formik.touched.companyEmail && !contacts.companyEmail ? (
                <label className="error">Required</label>
              ) : null}
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
                id="profileHandle"
                type="text"
                name="profileHandle"
                placeholder="Enter your startup profile handle"
                value={socialMedia.profileHandle}
                onChange={onChangeMedia}
                // onBlur={formik.handleBlur}
                className="form-control ps-3"
              />
              {/* {formik.touched.profileHandle && !socialMedia.profileHandle ? (
                <label className='error'>Required</label>
              ) : null} */}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Website *</label>
              <input
                id="companyWebsite"
                type="text"
                name="companyWebsite"
                placeholder="Enter your startup website"
                value={socialMedia.companyWebsite}
                onChange={onChangeMedia}
            
                className="form-control ps-3"
              />
              {formik.touched.companyWebsite && !socialMedia.companyWebsite ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Linkedin *</label>
              <input
                id="linkedInHandle"
                type="text"
                name="linkedInHandle"
                placeholder="Enter your Linkedin profile name"
                value={socialMedia.linkedInHandle}
                onChange={onChangeMedia}
                
                className="form-control ps-3"
              />
              {formik.touched.linkedInHandle && !socialMedia.linkedInHandle ? (
                <label className="error">Required</label>
              ) : null}
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Twitter *</label>
              <input
                id="twitterHandle"
                type="text"
                name="twitterHandle"
                placeholder="Enter your Twitter profile name"
                value={socialMedia.twitterHandle}
                onChange={onChangeMedia}
                className="form-control ps-3"
              />
              {formik.touched.twitterHandle && !socialMedia.twitterHandle ? (
                <label className="error">Required</label>
              ) : null}
            </div>
          </div>
          <div className="d-flex my-4 justify-content-end">
            <div>
              <CustomButton
                type="submit"
                disabled={loading}
                background="#06ADEF"
              >
                {loading ? <CircularLoader /> : 'Save'}
              </CustomButton>
            </div>
            <div className="mx-2">
              <CustomButton
                type="submit"
                disabled={nextloading}
                onClick={() => {setOpts('next')}}
                background="#2E3192"
              >
                {nextloading ? <CircularLoader /> : 'Next'}
              </CustomButton>
            </div>
          </div>
        </FormWrapper>
      </form>
    </>
  )
}
