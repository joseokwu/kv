import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  PhoneInput,
  TextArea,
} from "../../../../mentorComponents/index";
import "./assistantInfo.css";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { useAuth } from "../../../../hooks";

const AssistantInfo = () => {
  const { goBack, push } = useHistory();

  const { stateAuth } = useAuth();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      assistantFirstname:
        stateAuth?.mentorData?.assistantInfo?.assistantFirstname ?? "",
      assistantLastname:
        stateAuth?.mentorData?.assistantInfo?.assistantLastname ?? "",
      assistantEmail:
        stateAuth?.mentorData?.assistantInfo?.assistantEmail ?? "",
      assistantPhone:
        stateAuth?.mentorData?.assistantInfo?.assistantPhone ?? "",
      assistantAddress:
        stateAuth?.mentorData?.assistantInfo?.assistantAddress ?? "",
      assistantCountry:
        stateAuth?.mentorData?.assistantInfo?.assistantCountry ?? "",
      assistantState:
        stateAuth?.mentorData?.assistantInfo?.assistantState ?? "",
      assistantCity: stateAuth?.mentorData?.assistantInfo?.assistantCity ?? "",
    },

    validationSchema: Yup.object({
      assistantFirstname: Yup.string().required("This field is required"),
      assistantLastname: Yup.string().required("This field is required"),
      assistantEmail: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      assistantPhone: Yup.string().required("This field is required"),
      assistantAddress: Yup.string().required("This field is required"),
      assistantCountry: Yup.string().required("This field is required"),
      assistantCity: Yup.string().required("This field is required"),
      assistantState: Yup.string().required("This field is required"),
    }),
  });

  return (
    <div className="mentor_details_form_wrap">
      <h3>Assistant Info</h3>
      <p>This will help us personalise your preferences</p>
      <FormCard>
        <div className="personal_info">
          <h4>Provide your assistant’s contact info</h4>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <label>First Name*</label>
            <TextField placeholder={"Micheal"} required={true} />
          </section>
          <section className="col-md-6 mb-4">
            <label>Last Name*</label>
            <TextField
              // label={'Last Name*'}
              placeholder={"Smith"}
              required={true}
            />
          </section>

          <section className="col-md-4 mb-4">
            <label>Country</label>
            <TextField
              // label={'Country'}
              placeholder={"Enter your country"}
            />
          </section>
          <section className="col-md-4 mb-4">
            <label>State</label>
            <TextField
              // label={'State'}
              placeholder={"Enter your state"}
            />
          </section>
          <section className="col-md-4 mb-4">
            <label>City</label>
            <TextField
              // label={'City'}
              placeholder={"Enter your city"}
            />
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={"Address*"}
              placeholder={"Enter your permanent address"}
              required={true}
              rows={"1"}
            />
          </section>

          <section className="col-md-6 mb-4">
            <label className="mb-3">Email*</label>
            <TextField
              // label={'Email*'}
              placeholder={"Michealsmith@gmail.com"}
              required={true}
            />
          </section>
          <section className="col-md-6 mb-4">
            <PhoneInput label="Mobile Number" />
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          onClick={() => {
            goBack();
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Submit" onClick={() => push("/mentor/dashboard")} />
        </div>
      </section>
    </div>
  );
};

export default AssistantInfo;
