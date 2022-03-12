import React from 'react'
import {
  Modal,
  TextField,
  TextArea,
  Select,
  PhoneInput,
  Button,
} from '../../../../mentorComponents'
import edit from '../../../../assets/icons/edit.svg'
import mentorPic from '../../../../assets/images/mentorPic.svg'
import twitter from '../../../../assets/images/profileTwitter.svg'
import linkedIn from '../../../../assets/images/profileLinkedIn.svg'
import location from '../../../../assets/icons/locationSm.svg'
import web from '../../../../assets/icons/webSm.svg'
import './details.css'


const Details = ({data}) => {
  return (
    <section className="mentor_profile_info">
      <div className="mentor_profile_banner"></div>

      <div className="mentor_profile_contact_info">
        <Modal title="Edit Intro" id="mentorProfileEditModal">
          <ProfileInfo data={data} />
        </Modal>
        <span className="edit-info">
          <img
            src={edit}
            alt={'edit'}
            data-toggle={'modal'}
            data-target={'#mentorProfileEditModal'}
            role={'button'}
          />
        </span>
        <span className="profile-image">
          <img src={mentorPic} alt={'mentor profile pic'} />
        </span>

        <article>
          <h1 className="mb-0 profile-name">{ data?.name }</h1>

          <div className="d-flex align-items-center justify-content-between mb-0">
            <span className="d-flex align-items-center profile-bio">
              <p> { data?.email} </p>
            </span>
            <span className="text-right">
              <img src={twitter} alt="twitter" className="mr-3" />
              <img src={linkedIn} alt="linkedIn" />
              <p className="mentor_profile_site mt-2">
                { data?.url }
              </p>
            </span>
          </div>

          <div className="d-flex align-items-center web-phone-local mb-3">
            <p>
              <img src={location} alt="location" /> { data?.location }
            </p>
            <a href="https://www.michealsmith.com">
              <img src={web} alt="web" />
              { data?.url }
            </a>
          </div>

          <div className="profile-bio pb-5">
            <p>
             { data?.bio }
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Details

const ProfileInfo = () => {
  return (
    <div className="px-4">
      <section className="mb-4">
        <TextArea
          label={'Brief Introduction*'}
          placeholder={'Enter brief bio about you'}
          required={true}
          rows={1}
        />
      </section>

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
          <TextField label={'Designation'} placeholder={'Engr'} />
        </section>
        <section className="col-md-6 mb-4">
          <Select label={'Gender'} placeholder={'Male'} />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={'Email*'}
            placeholder={'Michealsmith@gmail.com'}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <PhoneInput label="Mobile Number" />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={'Permanent Address'}
            placeholder={'Enter your permanent address'}
            required={true}
            rows={1}
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

        <section className="col-md-6 mb-4">
          <TextField
            label={'LinkedIn*'}
            placeholder={'Enter Linkdin link'}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={'Twitter*'}
            placeholder={'Enter Twitter link'}
            required={true}
          />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={'Angelist'}
            placeholder={'www.knightventure/michealsmith'}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField label={'Crunchbase'} placeholder={'Enter website'} />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={'Whatsapp'}
            placeholder={'www.knightventure/michealsmith'}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField label={'Website/Blog'} placeholder={'Enter website'} />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={'Skype Id*'}
            placeholder={'www.knightventure/michealsmith'}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={'Google Meet*'}
            placeholder={'Enter website'}
            required={true}
          />
        </section>

        <section className="text-right mb-3">
          <Button label="Save" />
        </section>
      </div>
    </div>
  )
}
