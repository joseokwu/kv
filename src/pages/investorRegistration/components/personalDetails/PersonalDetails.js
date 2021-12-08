import React from "react";
import imageRep from "../../../../assets/icons/avatar.svg";
import add from "../../../../assets/icons/addFile.svg";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import {
  Badge,
  PhoneInput,
  RowOption,
  TextField,
  Button,
} from "../../../../components";
import { useHistory } from "react-router";

export const PersonalDetails = () => {
  const hearOption = [
    "news",
    "social media",
    "internet search",
    "referral from startup",
    "referral from investor",
  ];

  const { push } = useHistory();

  return (
    <div className="register-form-wrap">
      <h3>Personal Details</h3>
      <p>Let’s get to know you</p>

      <div className="form-dp mb-4 bg-white">
        <span className="image-placeholder">
          <img src={imageRep} alt="placeholder" />
        </span>

        <span className="add-dp">
          <input type="file" id="dp" />
          <img src={add} alt="add" />
        </span>
      </div>

      <FormCard title="Personal Information">
        <div className="row">
          <section className="col-12 mb-4">
            <TextField
              label="Brief Introduction*"
              required={true}
              placeholder="Enter brief bio about you"
              className="edit_input"
            />
          </section>
          <section className="col-md-6 mb-4">
            <TextField
              label="First Name*"
              required={true}
              placeholder="Enter first name"
              className="edit_input"
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label="Last Name*"
              required={true}
              placeholder="Enter last name"
              className="edit_input"
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label="Email*"
              required={true}
              placeholder="Enter email"
              type="email"
              className="edit_input"
            />
          </section>

          <section className="col-md-6 mb-4">
            <TextField
              label="Date of Birth*"
              required={true}
              placeholder="Enter email"
              type="date"
              className="edit_input"
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Contact Info">
        <div className="row mb-4">
          <section className="col-12 mb-4">
            <TextField
              label="Registered Address"
              required={true}
              placeholder="Enter your registered address"
              className="edit_input"
            />
          </section>

          <section className="col-lg-4 mb-4">
            <TextField
              label="Country"
              required={true}
              placeholder="Enter your country"
              className="edit_input"
            />
          </section>

          <section className="col-lg-4 mb-4">
            <TextField
              label="State"
              required={true}
              placeholder="Enter your state"
              className="edit_input"
            />
          </section>

          <section className="col-lg-4 mb-4">
            <TextField
              label="City"
              required={true}
              placeholder="Enter your city"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <PhoneInput />
          </section>
          <section className="col-lg-6 mb-4">
            <TextField
              label="Company Email*"
              required={true}
              placeholder="E.g. info@knight.ventures"
              className="edit_input"
              type="email"
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Web & Social Media">
        <div className="row mb-4">
          <section className="col-lg-6 mb-4">
            <TextField
              label="Profile Link*"
              required={true}
              placeholder="Enter linkedin link"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Website*"
              required={true}
              placeholder="Enter website"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="LinkedIn*"
              required={true}
              placeholder="Enter linkedin link"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Twitter*"
              required={true}
              placeholder="Enter twitter link"
              className="edit_input"
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Referral">
        <div className="row mb-4">
          <section className="col-12 mb-4">
            <TextField
              label="Referral"
              required={true}
              placeholder="Select a user in knight ventures"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <p className="mb-3">How did you hear about Knight Venture?</p>
            <div>
              <RowOption options={hearOption} />
            </div>
          </section>
        </div>
      </FormCard>

      <section
        className="d-flex align-items-center justify-content-end my-4"
        style={{ columnGap: 9 }}
      >
        <Button label="Save" variant="secondary" />
        <Button
          label="Next"
          onClick={() => {
            push("#investor");
          }}
        />
      </section>
    </div>
  );
};
