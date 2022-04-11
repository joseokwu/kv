import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import imageRep from '../../../../assets/icons/mentorDetails.svg'
import add from '../../../../assets/icons/addFile.svg'
import {
  Button,
  TextField,
  PhoneInput,
  TextArea,
} from '../../../../mentorComponents/index'
import './details.css'
import FormCard from '../../../../mentorComponents/formCard/FormCard'
import { useAuth } from '../../../../hooks/useAuth'
import { upload } from '../../../../services/utils'
import CountryDropdown from 'country-dropdown-with-flags-for-react'
import { useFormik } from 'formik'
import { updateMentorProfile } from '../../../../services/mentor'
import { useActivity } from '../../../../hooks/useBusiness'
import { toast } from 'react-toastify'

const Details = () => {
  const {
    changePath,
    state: { path },
  } = useActivity()
  const { goBack, push } = useHistory()
  const { stateAuth } = useAuth()
  const [opts, setOpts] = useState('')
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState(
    stateAuth?.user?.personalDetail?.logo ?? null,
  )
  const [phone, setPhone] = useState(
    stateAuth?.user?.personalDetail?.contactInfo?.mobilenumber ?? '',
  )
  const [contacts, setContacts] = useState({
    skypeid: stateAuth?.user?.personalDetail?.contactInfo?.skypeid ?? '',
    googlemeet: stateAuth?.user?.personalDetail?.contactInfo?.googlemeet ?? '',
    country: stateAuth?.user?.personalDetail?.contactInfo?.country ?? '',
    state: stateAuth?.user?.personalDetail?.contactInfo?.state ?? '',
    city: stateAuth?.user?.personalDetail?.contactInfo?.city ?? '',
    permanentAddress:
      stateAuth?.user?.personalDetail?.contactInfo?.permanentAddress ?? '',
  })

  const [socialMedia, setSocialmedia] = useState({
    linkedin: stateAuth?.user?.personalDetail?.socialMedia?.linkedin ?? '',
    crunchbase: stateAuth?.user?.personalDetail?.socialMedia?.crunchbase ?? '',
    angelist: stateAuth?.user?.personalDetail?.socialMedia?.angelist ?? '',
    twitter: stateAuth?.user?.personalDetail?.socialMedia?.twitter ?? '',
    website: stateAuth?.user?.personalDetail?.socialMedia?.website ?? '',
  })

  const onChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value })
  }

  const onChangeMedia = (e) => {
    setSocialmedia({ ...socialMedia, [e.target.name]: e.target.value })
  }

  const onSubmit = async (value) => {
    try {
      const personalDetail = {
        type: 'personalDetail',
        accType: 'mentor',
        values: {
          ...value,
          logo: logo,
          contactInfo: {
            ...contacts,
            mobilenumber: phone,
          },
          socialMedia,
        },
        userId: stateAuth?.user?.userId,
      }
      console.log(personalDetail)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateMentorProfile(personalDetail)

        if (result?.success) {
          toast.success('Profile' + '' + result?.message)
          setOpts(false)
          return changePath(path + 1)
        }
      }
      setLoading(true)
      let result = await updateMentorProfile(personalDetail)

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
    initialValues: {},
    onSubmit: (value) => onSubmit(value),
  })

  return (
    <div className="mentor_details_form_wrap">
      <h3>Personal Details</h3>
      <p>Let’s get to know you</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mb-4">
          <section className="col-md">
            <div className="form-dp">
              <span className="image-placeholder">
                <img src={imageRep} alt="placeholder" />
              </span>

              <span className="add-dp">
                <input type="file" id="dp" />
                <img src={add} alt="add" />
              </span>
            </div>
          </section>
        </div>

        <FormCard>
          <div className="personal_info">
            <h4>Personal Infomation</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>First Name*</label>
              <TextField
                // label={'First Name*'}
                placeholder={'Micheal'}
                required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Last Name*</label>
              <TextField
                // label={'Last Name*'}
                placeholder={'Smith'}
                required={true}
              />
            </section>

            <section className="col-md-6 mb-4">
              <p className="gender_title mb-3">Gender</p>
              <section className="gender_choice">
                <button className="male_btn">Male</button>
                <button className="female_btn">Female</button>
              </section>
            </section>

            <section className="col-md-6 mb-4">
              <label>Designation</label>
              <TextField
                // label={'Designation'}
                placeholder={'Ex. Engr'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={'Email*'}
                placeholder={'michealsmith@gmail.com'}
                required={true}
                rows={'1'}
              />
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Social Media</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>LinkedIn*</label>
              <TextField
                // label={'LinkedIn*'}
                placeholder={'Enter LinkdIn link'}
                required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Twitter</label>
              <TextField
                // label={'Twitter'}
                placeholder={'Enter Twitter link'}
              />
            </section>

            <section className="col-md-6 mb-4">
              <label>Angelist</label>
              <TextField
                // label={'Angelist'}
                placeholder={'Enter Angelist link'}
                wid
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Crunchbase</label>
              <TextField
                // label={'Crunchbase'}
                placeholder={'Enter Crunchbase link'}
              />
            </section>

            <section className="col-md-6 mb-4">
              <label>Whatsapp*</label>
              <TextField
                // label={'Whatsapp*'}
                placeholder={'Enter Whatsapp number'}
                required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Website</label>
              <TextField
                // label={'Website'}
                placeholder={'Enter Webiste link'}
                wid
              />
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Contact Info</h4>
          </div>

          <div className="row">
            <section className="col-md-6 mb-4">
              <label>Skype Id*</label>
              <TextField
                // label={'Skype Id*'}
                type="text"
                name="skypeid"
                id="skypeid"
                value={socialMedia.skypeid}
                onChange={onChangeMedia}
                placeholder={'www.knightventure/michealsmith'}
                required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Zoom Link*</label>
              <TextField
                // label={'Zoom Link*'}
                type="text"
                name="skypeid"
                id="skypeid"
                value={socialMedia.skypeid}
                onChange={onChangeMedia}
                placeholder={'Enter Zoom Link'}
                required={true}
              />
            </section>
            <section className="col-md-4 mb-4">
              <label>Country</label>
              {/* <TextField
                // label={'Country'}
                placeholder={'Enter your country'}
              /> */}
               <CountryDropdown
                id="country"
                type="text"
                name="country"
                className="form-control px-5 py-1 country-bg"
                preferredCountries={['ng']}
                value={contacts.country}
                handleChange={(e) => setContacts({...contacts, country:e.target.value})}
             
              ></CountryDropdown>
            </section>
            <section className="col-md-4 mb-4">
              <label>State</label>
              <TextField
                // label={'State'}
                placeholder={'Enter your state'}
              />
            </section>
            <section className="col-md-4 mb-4">
              <label>City</label>
              <TextField
                // label={'City'}
                placeholder={'Enter your city'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={'Permanent Address'}
                placeholder={'Enter your permanent address'}
                rows={'1'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <PhoneInput label="Mobile Number" />
            </section>
          </div>
        </FormCard>

        <FormCard>
          <div className="personal_info">
            <h4>Referral</h4>
          </div>

          <div className="row">
            <section className="col-md-12 mb-4">
              <TextArea
                label={'Knight Ventures Referral'}
                placeholder={'Select a user in knight ventures'}
                rows={'1'}
              />
            </section>

            <div className="col-md-11 mb-4">
              <p className="gender_title mb-3">
                How did you hear about Knight Ventures?
              </p>
              <section className="gender_choice">
                <button className="col-md-3 male_btn">News</button>
                <button className="col-md-3 female_btn">Social Media</button>
                <button className="col-md-3 female_btn">Internet Search</button>
                <button className="col-md-3 female_btn">Social Media</button>
              </section>
            </div>
            <div className="col-md-10 gender_choice">
              <button className="male_btn">Referral from Startup</button>
              <button className="female_btn">Referral from Investor</button>
            </div>
          </div>
        </FormCard>

        <section className="d-flex align-items-center justify-content-between">
          {/* <button
          className="back-btn"
          onClick={() => {
            goBack()
          }}
        >
          Go Back
        </button> */}

          <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
            <Button
              onClick={() => push('/mentor/dashboard')}
              label="Save"
              variant="secondary"
            />
            <Button
              label="Next"
              onClick={() => {
                push('#work_experience')
              }}
            />
          </div>
        </section>
      </form>
    </div>
  )
}

export default Details
