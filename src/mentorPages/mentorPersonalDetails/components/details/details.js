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
import { CircularLoader } from '../../../../mentorComponents/CircluarLoader/CircularLoader'
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
  const [nextloading, setNextLoading] = useState(false)
  const [logo, setLogo] = useState(
    stateAuth?.user?.personalDetail?.logo ?? null,
  )
  const [phone, setPhone] = useState(
    stateAuth?.user?.personalDetail?.contactInfo?.mobilenumber ?? '',
  )
  const [contacts, setContacts] = useState({
    // skypeid: stateAuth?.user?.personalDetail?.contactInfo?.skypeid ?? '',
    // googlemeet: stateAuth?.user?.personalDetail?.contactInfo?.googlemeet ?? '',
    country: stateAuth?.user?.personalDetail?.contactInfo?.country ?? '',
    // state: stateAuth?.user?.personalDetail?.contactInfo?.state ?? '',
    // city: stateAuth?.user?.personalDetail?.contactInfo?.city ?? '',
    // permanentAddress: stateAuth?.user?.personalDetail?.contactInfo?.permanentAddress ?? '',
  })

  // const [socialMedia, setSocialMedia] = useState({
  //   linkedin: stateAuth?.user?.personalDetail?.socialMedia?.linkedin ?? '',
  //   crunchbase: stateAuth?.user?.personalDetail?.socialMedia?.crunchbase ?? '',
  //   angelist: stateAuth?.user?.personalDetail?.socialMedia?.angelist ?? '',
  //   twitter: stateAuth?.user?.personalDetail?.socialMedia?.twitter ?? '',
  //   website: stateAuth?.user?.personalDetail?.socialMedia?.website ?? '',
  //   whatsapp: stateAuth?.user?.personalDetail?.socialMedia?.whatsapp ?? '',
  // })

  // const onChange = (e) => {
  //   setContacts({ ...contacts, [e.target.name]: e.target.value })
  // }

  // const onChangeMedia = (e) => {
  //   setSocialMedia({ ...socialMedia, [e.target.name]: e.target.value })
  // }

  const next = () => {
    changePath(path + 1)
  }

  const onSubmit = async (value) => {
    try {
      const personaldetail = {
        type: 'personalDetail',
        accType: 'mentor',
        values: {
          ...value,
          logo: logo,
          contactInfo: {
            ...contacts,
          },
          mobilenumber: phone,
          // socialMedia,
        },
        userId: stateAuth?.user?.userId,
      }
      console.log(personaldetail)
      if (opts === 'next') {
        setOpts(true)
        let result = await updateMentorProfile(personaldetail)

        if (result?.success) {
          toast.success('Personal details' + '' + result?.message)
          setOpts(false)
          return changePath(path + 1)
        }
      }
      setLoading(true)
      let result = await updateMentorProfile(personaldetail)

      if (!result?.success) {
        toast.error(result?.message || 'There was an error in personal details')
        setLoading(false)
        return
      }
      toast.success('Personal details' + ' ' + result?.message)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      toast.error(
        err?.response?.data?.message ||
          'There was an error in updating personal details',
      )
    }
  }

  const formik = useFormik({
    initialValues: {
      firstname: stateAuth?.user?.personalDetail?.firstname ?? '',
      lastname: stateAuth?.user?.personalDetail?.lastname ?? '',
      designation: stateAuth?.user?.personalDetail?.designation ?? '',
      email: stateAuth?.user?.personalDetail?.email ?? '',
      referral: stateAuth?.user?.personalDetail?.referral ?? '',
      from: stateAuth?.user?.personalDetail?.from ?? '',
      linkedin: stateAuth?.user?.personalDetail?.socialMedia?.linkedin ?? '',
      crunchbase:
        stateAuth?.user?.personalDetail?.socialMedia?.crunchbase ?? '',
      angelist: stateAuth?.user?.personalDetail?.socialMedia?.angelist ?? '',
      twitter: stateAuth?.user?.personalDetail?.socialMedia?.twitter ?? '',
      website: stateAuth?.user?.personalDetail?.socialMedia?.website ?? '',
      whatsapp: stateAuth?.user?.personalDetail?.socialMedia?.whatsapp ?? '',
      skypeid: stateAuth?.user?.personalDetail?.contactInfo?.skypeid ?? '',
      googlemeet:
        stateAuth?.user?.personalDetail?.contactInfo?.googlemeet ?? '',
      // country: stateAuth?.user?.personalDetail?.contactInfo?.country ?? '',
      state: stateAuth?.user?.personalDetail?.contactInfo?.state ?? '',
      city: stateAuth?.user?.personalDetail?.contactInfo?.city ?? '',
      permanentAddress:
        stateAuth?.user?.personalDetail?.contactInfo?.permanentAddress ?? '',
    },
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
                id="firstname"
                type="text"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                placeholder={'Micheal'}
                // required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Last Name*</label>
              <TextField
                // label={'Last Name*'}
                id="lastname"
                type="text"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                placeholder={'Smith'}
                // required={true}
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
                type="text"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                placeholder={'Ex. Engr'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                label={'Email*'}
                placeholder={'michealsmith@gmail.com'}
                // required={true}
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
                type="text"
                name="linkedin"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                placeholder={'Enter LinkdIn link'}
                // required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Twitter</label>
              <TextField
                // label={'Twitter'}
                type="text"
                name="twitter"
                value={formik.values.twitter}
                onChange={formik.handleChange}
                placeholder={'Enter Twitter link'}
              />
            </section>

            <section className="col-md-6 mb-4">
              <label>Angelist</label>
              <TextField
                // label={'Angelist'}
                type="text"
                name="angelist"
                value={formik.values.angelist}
                onChange={formik.handleChange}
                placeholder={'Enter Angelist link'}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Crunchbase</label>
              <TextField
                // label={'Crunchbase'}
                type="text"
                name="crunchbase"
                value={formik.values.crunchbase}
                onChange={formik.handleChange}
                placeholder={'Enter Crunchbase link'}
              />
            </section>

            <section className="col-md-6 mb-4">
              <label>Whatsapp*</label>
              <TextField
                // label={'Whatsapp*'}
                type="text"
                name="whatsapp"
                value={formik.values.whatsapp}
                onChange={formik.handleChange}
                placeholder={'Enter Whatsapp number'}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Website</label>
              <TextField
                // label={'Website'}
                type="text"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
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
                value={formik.values.skypeid}
                onChange={formik.handleChange}
                placeholder={'www.knightventure/michealsmith'}
                required={true}
              />
            </section>
            <section className="col-md-6 mb-4">
              <label>Google Meet*</label>
              <TextField
                // label={'Zoom Link*'}
                type="text"
                name="googlemeet"
                id="googlemeet"
                value={formik.values.googlemeet}
                onChange={formik.handleChange}
                placeholder={'Enter Google Meet Link'}
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
                // value={formik.values.country}
                handleChange={(e) =>
                  setContacts({ ...contacts, country: e.target.value })
                }
              ></CountryDropdown>
            </section>
            <section className="col-md-4 mb-4">
              <label>State</label>
              <TextField
                // label={'State'}
                name="state"
                id="state"
                type="text"
                value={formik.values.state}
                onChange={formik.handleChange}
                placeholder={'Enter your state'}
              />
            </section>
            <section className="col-md-4 mb-4">
              <label>City</label>
              <TextField
                // label={'City'}
                name="city"
                id="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
                placeholder={'Enter your city'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={'Permanent Address'}
                type="text"
                name="permanentAddress"
                value={formik.values.permanentAddress}
                onChange={formik.handleChange}
                placeholder={'Enter your permanent address'}
                rows={'1'}
              />
            </section>

            <section className="col-md-12 mb-4">
              <PhoneInput
                id="mobilenumber"
                name="mobilenumber"
                label="Mobile Number"
                onChange={setPhone}
                // value={phone}
              />
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
                id="referral"
                type="text"
                name="referral"
                value={formik.values.referral}
                onChange={formik.handleChange}
                label={'Knight Ventures Referral'}
                placeholder={'Select a user in knight ventures'}
                rows={'1'}
              />
            </section>

            <div className="col-md-12 mb-4">
              <p className="gender_title mb-3">
                How did you hear about Knight Ventures?
              </p>
              <TextArea
                id="from"
                type="text"
                name="from"
                value={formik.values.from}
                onChange={formik.handleChange}
                placeholder={'Ex. From an advert in the streets'}
                rows={'1'}
              />
              {/* <section className="gender_choice">
                <button className="col-md-3 male_btn">News</button>
                <button className="col-md-3 female_btn">Social Media</button>
                <button className="col-md-3 female_btn">Internet Search</button>
                <button className="col-md-3 female_btn">Social Media</button>
              </section> */}
            </div>
            {/* <div className="col-md-10 gender_choice">
              <button className="male_btn">Referral from Startup</button>
              <button className="female_btn">Referral from Investor</button>
            </div> */}
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
              type="submit"
              // onClick={() => push('/mentor/dashboard')}
              label="Save"
              disabled={loading}
              variant="secondary"
            >
              {loading ? <CircularLoader /> : 'Save'}
            </Button>

            <Button
              label="Next"
              type="submit"
              disabled={nextloading}
              onClick={() => {
                setOpts('next')
              }}
            >
              {nextloading ? <CircularLoader /> : 'Next'}
            </Button>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Details
