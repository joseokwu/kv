import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
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
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import CountryDropdown from "country-dropdown-with-flags-for-react";

const AssistantInfo = () => {
  const { goBack, push } = useHistory();

  const [loading, setLoading] = useState(false);
  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

  const [country, setCountry] = useState({
    country: stateAuth?.mentorData?.assistantInfo?.assistantCountry ?? "",
  });

  const handleSubmit = async () => {
    setLoading(true);

    const uploaded = await updateMentorInfo(true);

    if (uploaded) {
      toast.success("Submitted Successfully");
    } else {
      toast.error("Something went wrong");
    }
    if (uploaded) {
      push("/mentor/dashboard");
    }
    setLoading(false);
  };

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
        stateAuth?.mentorData?.assistantInfo?.assistantCountry ?? "Nigeria",
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
    onSubmit: (values) => handleSubmit(),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateMentorProfileState("assistantInfo", {
        [prefix]: {
          ...stateAuth?.mentorData?.assistantInfo[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }

    updateMentorProfileState("assistantInfo", {
      [name]: value,
    });
    formik.handleChange(e);
  };

  return (
    <form className="mentor_details_form_wrap" onSubmit={formik.handleSubmit}>
      <h3>Assistant Info</h3>
      <p>This will help us personalise your preferences</p>
      <FormCard>
        <div className="personal_info">
          <h4>Provide your assistant’s contact info</h4>
        </div>

        <div className="row">
          <section className="col-md-6 mb-4">
            <label>First Name*</label>
            <TextField
              placeholder={"Micheal"}
              required={true}
              name="assistantFirstname"
              onChange={handleChange}
              value={formik.values.assistantFirstname}
            />
            {formik.touched.assistantFirstname &&
            formik.errors.assistantFirstname ? (
              <label className="error">
                {formik.errors.assistantFirstname}
              </label>
            ) : null}
          </section>
          <section className="col-md-6 mb-4">
            <label>Last Name*</label>
            <TextField
              placeholder={"Smith"}
              required={true}
              name="assistantLastname"
              onChange={handleChange}
              value={formik.values.assistantLastname}
            />
            {formik.touched.assistantLastname &&
            formik.errors.assistantLastname ? (
              <label className="error">{formik.errors.assistantLastname}</label>
            ) : null}
          </section>

          <section className="col-md-4 mb-4">
            <label>Country</label>
            <CountryDropdown
              id="country"
              type="text"
              name="country"
              className="form-control px-5 py-1 country-bg"
              preferredCountries={["ng"]}
              value={country.country}
              // value={formik.values.country}
              handleChange={(e) => {
                setCountry({ ...country, country: e.target.value });
                handleChange({
                  target: { name: "assistantCountry", value: e.target.value },
                });
              }}
            ></CountryDropdown>
            {formik.touched.assistantCountry &&
            formik.errors.assistantCountry ? (
              <label className="error">{formik.errors.assistantCountry}</label>
            ) : null}
          </section>
          <section className="col-md-4 mb-4">
            <label>State</label>
            <TextField
              // label={'State'}
              placeholder={"Enter your state"}
              name="assistantState"
              onChange={handleChange}
              value={formik.values.assistantState}
            />
            {formik.touched.assistantState && formik.errors.assistantState ? (
              <label className="error">{formik.errors.assistantState}</label>
            ) : null}
          </section>
          <section className="col-md-4 mb-4">
            <label>City</label>
            <TextField
              // label={'City'}
              placeholder={"Enter your city"}
              name="assistantCity"
              onChange={handleChange}
              value={formik.values.assistantCity}
            />
            {formik.touched.assistantCity && formik.errors.assistantCity ? (
              <label className="error">{formik.errors.assistantCity}</label>
            ) : null}
          </section>

          <section className="col-md-12 mb-4">
            <TextArea
              label={"Address*"}
              placeholder={"Enter your permanent address"}
              required={true}
              rows={"1"}
              onChange={handleChange}
              name="assistantAddress"
              value={formik.values.assistantAddress}
            />
            {formik.touched.assistantAddress &&
            formik.errors.assistantAddress ? (
              <label className="error">{formik.errors.assistantAddress}</label>
            ) : null}
          </section>

          <section className="col-md-6 mb-4">
            <label className="mb-3">Email*</label>
            <TextField
              placeholder={"Michealsmith@gmail.com"}
              type="email"
              required={true}
              onChange={handleChange}
              name="assistantEmail"
              value={formik.values.assistantEmail}
            />
            {formik.errors.assistantEmail ? (
              <label className="error">{formik.errors.assistantEmail}</label>
            ) : null}
          </section>
          <section className="col-md-6 mb-4">
            <PhoneInput
              label="Mobile Number"
              name="assistantPhone"
              value={formik.values.assistantPhone}
              onChange={(e) =>
                handleChange({
                  target: { name: "assistantPhone", value: e.id },
                })
              }
            />
            {formik.errors.assistantPhone ? (
              <label className="error">{formik.errors.assistantPhone}</label>
            ) : null}
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          onClick={() => {
            push("#consulting");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button
            label={loading ? <CircularLoader /> : "Submit"}
            type="submit"
          />
        </div>
      </section>
    </form>
  );
};

export default AssistantInfo;
