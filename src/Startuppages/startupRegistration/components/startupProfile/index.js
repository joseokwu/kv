import React, { useState } from 'react'
import {
  HeaderStartup,
  ImageWrapper,
  InputWrapper,
  FormWrapper,
} from './startup.styled'
import './style.css'
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
import { useActivity } from '../../../../hooks/useBusiness';
import { updateFounderProfile } from '../../../../services/startup';
import { CircularLoader } from './../../../../Startupcomponents/CircluarLoader/CircularLoader';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../../../../hooks/useAuth';


export const StartupProfile = () => {

  const {
    changePath,
    state: { path },
  } = useActivity()
  const  { stateAuth } = useAuth();
  const [disImg, setImg] = useState(null)
  const [opts , setOpts] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [loading, setLoading] = useState(false);
  const [nextloading, setNextLoading] = useState(false);
  const [phone, setPhone] = useState(stateAuth?.user?.startUpProfile?.contactInfo?.phoneNumber)
  const [contacts, setContacts] = useState({
      registeredAddress:stateAuth?.user?.startUpProfile?.contactInfo?.registeredAddress ?stateAuth?.user?.startUpProfile?.contactInfo?.registeredAddress :'',
      country:stateAuth?.user?.startUpProfile?.contactInfo?.country ? stateAuth?.user?.startUpProfile?.contactInfo?.country : '',
      state:stateAuth?.user?.startUpProfile?.contactInfo?.state ? stateAuth?.user?.startUpProfile?.contactInfo?.state : '',
      city:stateAuth?.user?.startUpProfile?.contactInfo?.city ? stateAuth?.user?.startUpProfile?.contactInfo?.city : '',
      companyEmail:stateAuth?.user?.startUpProfile?.contactInfo?.companyEmail ? stateAuth?.user?.startUpProfile?.contactInfo?.companyEmail : '',
  })
 const [socialMedia , setSocialmedia] = useState({
  profileHandle:stateAuth?.user?.startUpProfile?.socialMedia?.profileHandle ? stateAuth?.user?.startUpProfile?.socialMedia?.profileHandle : '',
  companyWebsite:stateAuth?.user?.startUpProfile?.socialMedia?.companyWebsite ? stateAuth?.user?.startUpProfile?.socialMedia?.companyWebsite : "",
  linkedInHandle:stateAuth?.user?.startUpProfile?.socialMedia?.linkedInHandle ? stateAuth?.user?.startUpProfile?.socialMedia?.linkedInHandle : "",
  twitterHandle:stateAuth?.user?.startUpProfile?.socialMedia ? stateAuth?.user?.startUpProfile?.socialMedia?.twitterHandle : ""
 }) 
  const history = useHistory();

  const onChangeImage = (e) => {
    const { files } = e.target
    
    if (files && files[0]) {
      setImg(URL.createObjectURL(files[0]))
    }
  }

  const onChange = (e) =>{
    setContacts({...contacts , [e.target.name] : e.target.value })
    
  }
 // console.log(stateAuth?.user?.startUpProfile)
  const onChangeMedia = (e) =>{
    setSocialmedia({...socialMedia , [e.target.name]: e.target.value })
  }
  const next = () => {
    changePath(path + 1)
  }

  const onSubmit = async(value) => {
    
    let lastIndex ;
    let inputs = document.getElementsByTagName('input');
    lastIndex = inputs.length;
      console.log(inputs[lastIndex - 1])
   
      try{
        
        const startupProfile = {
          type:"startUpProfile",
          accType:"startup",
          values:{
            ...value,
            contactInfo:{
              ...contacts,
              phoneNumber:phone
            },
           socialMedia
          },
          userId:stateAuth?.user?.userId
        }
        console.log(startupProfile)
        if(opts === 'next'){
          setOpts(true)
          let result = await updateFounderProfile(startupProfile)
         
        if(result?.success){
          toast.success('Profile' + " " + result?.message)
          setOpts(false);
          return changePath(path + 1)
        }
        }
        setLoading(true);
        let result = await updateFounderProfile(startupProfile)
         
        if(!result?.success){
           toast.error( result?.message || 'There was an error in updating profile')
           setLoading(false);
           return ;
          }
          toast.success('Profile' + " " + result?.message)
          setLoading(false);
          return ;
      }catch(err){
        setLoading(false);
        toast.error(err?.response?.data?.message || 'There was an error in updating profile')
      }
    
    
  }

  const formik = useFormik({
    initialValues: {
      logo:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current",
      startupName:stateAuth?.user?.businessname ? stateAuth?.user?.businessname : '',
      elevatorPitch:stateAuth?.user?.startUpProfile?.elevatorPitch ? stateAuth?.user?.startUpProfile?.elevatorPitch : '',
      brand:stateAuth?.user?.startUpProfile ? stateAuth?.user?.startUpProfile?.brand : '',
      yearFounded: startDate,
      registrationNumber:stateAuth?.user?.startUpProfile?.registrationNumber ? stateAuth?.user?.startUpProfile?.registrationNumber : '',
      companySize:stateAuth?.user?.startUpProfile?.companySize ? stateAuth?.user?.startUpProfile?.companySize : 'Select-size',
      businessSector:stateAuth?.user?.startUpProfile?.businessSector ? stateAuth?.user?.startUpProfile?.businessSector : 'Select-sector',
      startupStage:stateAuth?.user?.startUpProfile?.startupStage ? stateAuth?.user?.startUpProfile?.startupStage : 'Select-stage',
      acceleratorName:stateAuth?.user?.startUpProfile?.acceleratorName ? stateAuth?.user?.startUpProfile?.acceleratorName : ''
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
                name="elevatorPitch"
                placeholder="One line pitch 150 words maximum"
                value={formik.values.elevatorPitch}
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
                name="startupName"
                disabled={formik.values.startupName !== ''}
                placeholder="Entity Name As Per Registration"
                value={formik.values.startupName}
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
                name="registrationNumber"
                placeholder="1234567890"
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
                className="form-control ps-3"
              />
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Company Size *</label>
              <div>
              <select
              name={'companySize'}
              value={formik.values.companySize}
              onChange={formik.handleChange}
              className="sel"
              >
                  {
                    optionsNumb.map((item, i) =>(
                      <option key={i} value={item.value} > { item.label} </option>
                    ))
                  }
              </select>
              </div>
              
            </div>

            <div className="form-group col-lg-6 col-12">
              <label>Which sector does your business operate in?*</label>
              <div>
              <select
              name={'businessSector'}
              value={formik.values.businessSector}
              onChange={formik.handleChange}
              className="sel"
              >
                  {
                    options.map((item, i) =>(
                      <option key={i} value={item.value} > { item.label} </option>
                    ))
                  }
              </select>
              </div>

            </div>

            <div className="form-group col-lg-6 col-12">
              <label>What stage is your business in *</label>
              <select
              name={'startupStage'}
              value={formik.values.startupStage}
              onChange={formik.handleChange}
              className="sel"
              >
                  {
                    stage.map((item, i) =>(
                      <option key={i} value={item.value} > { item.label} </option>
                    ))
                  }
              </select>
             
            </div>

            <div className="form-group col-12">
              <label>
                Enter the name of Accelerator /incubator in case you've worked
                with any{' '}
              </label>
              <input
                type="text"
                name="acceleratorName"
                placeholder="Enter Accelerator name"
                value={formik.values.acceleratorName}
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
                name="registeredAddress"
                placeholder="Enter your registered address"
                value={contacts.registeredAddress}
                onChange={onChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>Country *</label>
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={contacts.country}
                onChange={onChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>State *</label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                value={contacts.state}
                onChange={onChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-4 col-12">
              <label>City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={contacts.city}
                onChange={onChange}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group  col-lg-6 col-12 ">
              <label>Mobile Number *</label>
              <PhoneInput
                international
                name="phoneNumber"
                countryCallingCodeEditable={true}
                className="custs ps-3"
                value={stateAuth?.user?.startUpProfile?.contactInfo?.phoneNumber ? stateAuth?.user?.startUpProfile?.contactInfo?.phoneNumber : phone}
                onChange={setPhone}
                MaxLength={17}

              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Company Email *</label>
              <input
                type="text"
                name="companyEmail"
                placeholder="Enter your email"
                value={contacts.companyEmail}
                onChange={onChange}
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
                value={socialMedia.profileHandle}
                onChange={onChangeMedia}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Website *</label>
              <input
                type="text"
                name="companyWebsite"
                placeholder="Enter your startup website"
                value={socialMedia.companyWebsite}
                onChange={onChangeMedia}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Linkedin *</label>
              <input
                type="text"
                name="linkedInHandle"
                placeholder="Enter your Linkedin profile name"
                value={socialMedia.linkedInHandle}
                onChange={onChangeMedia}
                className="form-control ps-3"
              />
            </div>
            <div className="form-group col-lg-6 col-12">
              <label>Twitter *</label>
              <input
                type="text"
                name="twitterHandle"
                placeholder="Enter your Twitter profile name"
                value={socialMedia.twitterHandle}
                onChange={onChangeMedia}
                className="form-control ps-3"
              />
            </div>
          </div>
          <div className="d-flex my-4 justify-content-end">
            <div>
              <CustomButton 
              type='submit'
              disabled={loading}
               background="#06ADEF">
               { loading ? <CircularLoader /> : 'Save' }
               </CustomButton>
            </div>
            <div className="mx-2">
              <CustomButton type='submit'
                disabled={nextloading}
                onClick={() => setOpts('next')}
                background="#2E3192">
                { nextloading ? <CircularLoader /> : 'Next' }
              </CustomButton>
            </div>
          </div>
        </FormWrapper>
      
      </form>
    </>
  )
}
