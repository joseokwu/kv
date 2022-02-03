import React from "react";
import { RowOption, Select, TextField, Button } from "../../../../Startupcomponents";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { useHistory } from "react-router-dom";

export const InvestorDetails = () => {
  const investorTypes = [
    "angel investor",
    "corporation",
    "VC Fund",
    "PE Fund",
    "CXO",
    "business owner",
    "VC / PE Professional",
    "family office",
    "startup founder",
    "angel network",
    "accelerator/incubator",
  ];

  const { push } = useHistory();
  return (
    <div className="register-form-wrap">
      <h3>Investor Details</h3>
      <p>Create a profile for your investment</p>

      <FormCard>
        <div className="row">
          <section className="col-12 mb-4">
            <TextField
              label="Nationality*"
              required={true}
              placeholder="Enter your nationality"
              className="edit_input"
            />
          </section>
          <section className="col-12 mb-4">
            <p className="mb-3">
              Are you a Tax resident any other country other than Nigeria
            </p>
            <RowOption options={["yes", "no"]} />
          </section>

          <section className="col-12 mb-4">
            <TextField
              label="Taxation Number*"
              required={true}
              placeholder="Enter Tax Number"
              className="edit_input"
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              placeholder="Choose option"
              label="I am an individual having"
              className="edit_input"
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Bant Details">
        <div className="row">
          <section className="col-lg-6 mb-4">
            <Select
              placeholder="Choose bank"
              label="Bank Name"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <Select
              placeholder="Choose bank branch"
              label="Bank Branch"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Number"
              required={true}
              placeholder="Enter your account"
              className="edit_input"
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Type"
              required={true}
              placeholder="Enter your account type"
              className="edit_input"
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <p className="mb-3">Investor Type*</p>
          <RowOption options={investorTypes} />
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          className="back-btn"
          onClick={() => {
            push("#details");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push("#investor2");
            }}
          />
        </div>
      </section>
    </div>
  );
};
