import React, { useState } from "react";
import { RowOption, Select, TextField, Button } from "../../../../components";
import FormCard from "../../../partnerRegisteration/components/formCard/FormCard";
import { addInvestorProfile } from "../../../../services/investor";
import { useFormik } from "formik";
import { useHistory } from "react-router";

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

  const [taxOutsideEligible, setTaxOutsideEligible] = useState("");
  const [selectedInvestorType, setSelectedInvestorType] = useState("");

  const taxOutside = (input) => {
    switch (input) {
      case "yes":
        return true;
      case "no":
        return false;
      default:
        return "";
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nationality: "",
      taxResidentOutsideNigeria: taxOutside(taxOutsideEligible),
      individualHaving: "",
      bankName: "",
      bankBranch: "",
      bankAccountNumber: "",
      bankAccountType: "",
      InvestorType: selectedInvestorType,
    },

    onSubmit: (values) => addInvestorProfile(values),
  });

  console.log("formik.values", formik.values);

  const { push } = useHistory();
  return (
    <form className="register-form-wrap" onSubmit={formik.handleSubmit}>
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
              name="nationality"
              onChange={formik.handleChange}
            />
          </section>
          <section className="col-12 mb-4">
            <p
              className="mb-2"
              style={{ color: "black", fontSize: 12, lineHeight: "13px" }}
            >
              Are you a Tax resident any other country other than Nigeria
            </p>
            <RowOption
              options={["yes", "no"]}
              getSelected={(e) => {
                console.log("e", e);
                setTaxOutsideEligible(e);
              }}
            />
          </section>

          <section className="col-12 mb-4">
            <TextField
              label="Taxation Number*"
              required={true}
              placeholder="Enter Tax Number"
              className="edit_input"
              name="taxNumber"
              type="number"
              onChange={formik.handleChange}
            />
          </section>

          <section className="col-12 mb-4">
            <Select
              placeholder="Choose option"
              label="I am an individual having"
              className="edit_input"
              name="individualHaving"
              onChange={formik.handleChange}
            />
          </section>
        </div>
      </FormCard>

      <FormCard title="Bank Details">
        <div className="row">
          <section className="col-lg-6 mb-4">
            <TextField
              placeholder="Choose bank"
              label="Bank Name"
              className="edit_input"
              name="bankName"
              onChange={formik.handleChange}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              placeholder="Choose bank branch"
              label="Bank Branch"
              className="edit_input"
              name="bankBranch"
              onChange={formik.handleChange}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Number"
              required={true}
              placeholder="Enter your account"
              className="edit_input"
              name="bankAccountNumber"
              onChange={formik.handleChange}
            />
          </section>

          <section className="col-lg-6 mb-4">
            <TextField
              label="Account Type"
              required={true}
              placeholder="Enter your account type"
              className="edit_input"
              name="bankAccountType"
              onChange={formik.handleChange}
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <div className="row">
          <p
            className="mb-3"
            style={{ color: "black", fontSize: 12, lineHeight: "13px" }}
          >
            Investor Type*
          </p>
          <RowOption
            options={investorTypes}
            getSelected={(e) => {
              setSelectedInvestorType(e);
            }}
          />
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          className="back-btn"
          type="button"
          onClick={() => {
            push("#details");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" type="submit" />
          <Button
            label="Next"
            type="button"
            onClick={() => {
              push("#investor2");
            }}
          />
        </div>
      </section>
    </form>
  );
};
