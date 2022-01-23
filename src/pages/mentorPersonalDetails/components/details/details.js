import React from 'react'
import { useHistory } from 'react-router-dom'
import imageRep from '../../../../assets/icons/mentorDetails.svg'
import add from '../../../../assets/icons/addFile.svg'
import {
  Button,
  TextField,
  PhoneInput,
  TextArea,
} from '../../../../components/index'
import './details.css'
import FormCard from '../../../../components/formCard/FormCard'

const Details = () => {
  const { goBack, push } = useHistory()

  return (
    <div className="mentor_details_form_wrap">
      <h3>Personal Details</h3>
      <p>Let’s get to know you</p>
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
            <TextField
              label={'First Name*'}
              placeholder={'Micheal'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label={'Last Name*'}
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
            <TextField label={'Designation'} placeholder={'Ex. Engr'} />
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
            <TextField
              label={'LinkedIn*'}
              placeholder={'Enter LinkdIn link'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField label={'Twitter'} placeholder={'Enter Twitter link'} />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label={'Angelist'}
              placeholder={'Enter Angelist link'}
              wid
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label={'Crunchbase'}
              placeholder={'Enter Crunchbase link'}
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label={'Whatsapp*'}
              placeholder={'Enter Whatsapp number'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label={'Website'}
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
            <TextField
              label={'Skype Id*'}
              placeholder={'www.knightventure/michealsmith'}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label={'Zoom Link*'}
              placeholder={'Enter Zoom Link'}
              required={true}
            />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label={'Country'} placeholder={'Enter your country'} />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label={'State'} placeholder={'Enter your state'} />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label={'City'} placeholder={'Enter your city'} />
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
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push('#work_experience')
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default Details
