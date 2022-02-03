import React from "react";
import { useHistory } from "react-router-dom";
import "./companyOverview.css";
import imageRep from "../../../../assets/icons/image.svg";
import add from "../../../../assets/icons/addFile.svg";
import {
  Button,
  TextField,
  Select,
  PhoneInput,
  TextArea,
} from "../../../../components/index";
import FormCard from "../formCard/FormCard";

const CompanyOverview = () => {
  const { push } = useHistory();
  return (
    <div className="register-form-wrap">
      <h3>Company Overview</h3>
      <p>Fill in partner details</p>
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

      <section
        className="d-flex align-items-center justify-content-end my-4"
        style={{ columnGap: 9 }}
      >
        <Button label="Save" variant="secondary" />
        <Button
          label="Next"
          onClick={() => {
            push("#offerings");
          }}
        />
      </section>
    </div>
  );
};

export default CompanyOverview;
