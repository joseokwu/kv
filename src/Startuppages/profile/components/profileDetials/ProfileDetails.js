import React from "react";
import edit from "../../../../assets/icons/edit.svg";
import sample from "../../../../assets/images/sampleCompany.png";
import twitter from "../../../../assets/images/profileTwitter.svg";
import linkedIn from "../../../../assets/images/profileLinkedIn.svg";
import location from "../../../../assets/icons/locationSm.svg";
import phone from "../../../../assets/icons/phoneSm.svg";
import web from "../../../../assets/icons/webSm.svg";
import {
  Modal,
  TextField,
  PhoneInput,
  Select,
  TextArea,
  Button,
} from "../../../../Startupcomponents";
import add from "../../../../assets/icons/addFile.svg";
import imageRep from "../../../../assets/icons/image.svg";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";

const ProfileDetails = () => {
  return (
    <section className="profile-info">
      <div className="profile-banner">
        <span className="edit-banner">
          <img src={edit} alt="edit" />
        </span>
      </div>

      <div className="profile-contact-info">
        <Modal title="Edit  Intro" id="profileEditModal">
          <EditProfileInfo />
        </Modal>
        <span className="edit-info">
          <img
            src={edit}
            alt="edit"
            data-toggle="modal"
            data-target="#profileEditModal"
            role="button"
          />
        </span>
        <span className="profile-image">
          <img src={sample} alt="sample company" />
        </span>

        <article>
          <h1 className="mb-4 profile-name">Digital Ocean</h1>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="d-flex align-items-center contact-name">
              <p>CONTACT : Winner Graceoooo</p>
              <p>Manager</p>
            </span>
            <span>
              <img src={twitter} alt="twitter" className="mr-3" />
              <img src={linkedIn} alt="linked in" />
            </span>
          </div>

          <div className="d-flex align-items-center web-phone-local mb-3">
            <p>
              <img src={location} alt="location" /> San francisco United State
            </p>
            <p>
              <img src={phone} alt="phone" /> +234 709 245 2345
            </p>
            <a href="https://www.michealsmith.com">
              <img src={web} alt="web" />
              www.michealsmith.com
            </a>
          </div>

          <div className="profile-bio pb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProfileDetails;

const EditProfileInfo = () => {
  return (
    <div>
      <FormCard>
        <div className="row mb-4">
          <section className="col-md-3">
            <div className="form-dp">
              <span className="image-placeholder">
                <img src={imageRep} alt="placeholder" />
                <p>
                  Company
                  <br />
                  logo
                </p>
              </span>

              <span className="add-dp">
                <input type="file" id="dp" />
                <img src={add} alt="add" />
              </span>
            </div>
          </section>
          <section className="col-md-9 pl-5">
            <TextArea
              label="Company Description"
              placeholder="250 characters at most"
            />
          </section>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <TextField
              label="Company Name"
              required={true}
              placeholder="Enter name of partner"
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label="Website"
              required={true}
              placeholder="Enter website URL"
            />
          </section>

          <section className="col-md-6 mb-4">
            <Select label="Categories" />
          </section>
          <section className="col-md-6 mb-4">
            <Select label="Industry" />
          </section>
          <section className="col-md-6 mb-4">
            <TextField label="Twitter" placeholder="Enter twitter URL" />
          </section>

          <section className="col-md-6 mb-4">
            <TextField label="Linkedin" placeholder="Enter Linkedin URL" />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="contact-title">
          <h4>Contact Info</h4>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <TextField
              label="Coordinator Name"
              placeholder="Enter contact person"
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label="Coordinator Name"
              placeholder="Enter contact person"
            />
          </section>
          <section className="col-md-6 mb-4">
            <PhoneInput label="Mobile Number" />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label="Email"
              placeholder="Enter email address"
              type="email"
              required={true}
            />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label="Country" placeholder="Enter partner country" />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label="State" placeholder="Enter partner state" />
          </section>
          <section className="col-md-4 mb-4">
            <TextField label="City" placeholder="Enter partner city" />
          </section>
        </div>
      </FormCard>
      <section className="text-right mb-3">
        <Button label="Save" />
      </section>
    </div>
  );
};
