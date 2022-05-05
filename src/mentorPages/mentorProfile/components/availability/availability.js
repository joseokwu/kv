import React, { useState } from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import {
  Modal,
  TextArea,
  TextField,
  Select,
  Button,
  PhoneInput,
} from "../../../../mentorComponents";
import edit from "../../../../assets/icons/edit.svg";
import imageRep from "../../../../assets/icons/plus.svg";
import { Form } from "antd";
import "./availability.css";
import { useAuth } from "../../../../hooks";

const Availability = ({ data }) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt={"edit"}
          data-toggle="modal"
          data-target="#editAvailabilityModal"
          role="button"
        />
        <Modal title="Availability" id="editAvailabilityModal">
          <EditAvailability />
        </Modal>
      </span>

      <div>
        <section className="mentor_availabilty mb-5">
          <p className="partner-cat-header mb-3">Availability</p>
          <p className="mentor_availability_question mb-3">
            What mentor type would you prefer?
          </p>
          <button>{data?.mentorType}</button>
        </section>
      </div>
    </section>
  );
};

export default Availability;

const EditAvailability = () => {
  const [loader, setLoader] = useState(false);

  const [loading, setLoading] = useState(false);
  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

  const [country, setCountry] = useState({
    country: stateAuth?.mentorData?.assistantInfo?.assistantCountry ?? "",
  });

  const handleSubmit = async () => {
    setLoader(true);

    const uploaded = await updateMentorInfo(true);

    if (uploaded) {
      toast.success("Submitted Successfully");
    } else {
      toast.error("Something went wrong");
    }

    setLoader(false);
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
    <form className="px-4 pb-4" onSubmit={formik.handleSubmit}>
      {/* <section className="mentor_availabilty">
        <p className="mentor_availability_question mb-3">
          What mentor type would you prefer?
        </p>
        <button className="mr-3">
          Regular mentor - Dedicated office hours{" "}
        </button>
        <button>Directory listing - By approval </button>
      </section> */}

      <div className="row">
        {/* <section className="col-md-12 mb-4 mt-3">
          <p className="offer-text pt-2">
            Have you been a founder or one of the first 10 employees of a
            company that has been valued or exited at $100m or more?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </section> */}

        {/* <section className="col-md-12 mb-4 border-bottom">
          <TextArea
            className="mb-4"
            label={"Please list here any notes / things you want us to know"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section> */}

        <section className="col-md-6 mb-4">
          <TextField
            label={"Assistant First Name*"}
            placeholder={"Micheal"}
            required={true}
            name="assistantFirstname"
            onChange={handleChange}
            value={formik.values.assistantFirstname}
          />
          {formik.touched.assistantFirstname &&
          formik.errors.assistantFirstname ? (
            <label className="error">{formik.errors.assistantFirstname}</label>
          ) : null}
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={"Assistant Last Name*"}
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

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Assistant Email*"}
            placeholder={"Michealsmith@gmail.com"}
            rows={"1"}
            type="email"
            required={true}
            onChange={handleChange}
            name="assistantEmail"
            value={formik.values.assistantEmail}
          />
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
          {formik.touched.assistantCountry && formik.errors.assistantCountry ? (
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
        <section className="col-md-6 mb-4">
          <PhoneInput
            label={"Assistant Mobile Number*"}
            placeholder={"Enter Mobile number"}
            required={true}
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

        {/* <section className="col-md-12 mb-4">
          <TextArea
            label={'Availability Day*'}
            placeholder={'Michealsmith@gmail.com'}
            rows={'1'}
          />
          <label htmlFor={""}>Availability Day*</label>
          <input className="col-md-12 ant-input-borderless" type="date" />
        </section> */}
        {/* 
        <section className="col-md-6 mentor_consult_modal mb-4">
          <Select
            label={"Availability Start Timing*"}
            placeholder={"Choose option"}
          />
        </section> */}
        {/* <section className="col-md-6 mentor_consult_modal mb-4">
          <Select
            label={"Availability End Timing*"}
            placeholder={"Choose option"}
          />
        </section> */}

        {/* <section className="col-md-12 mb-4">
          <p className="add_another_experience">
            <img className="mr-2" src={imageRep} alt="plus" />
            Add Another availability
          </p>
        </section> */}
      </div>
      <Form.Item>
        <div className="text-right mb-4 mt-3">
          <Button label="Save" loading={loader} />
        </div>
      </Form.Item>
    </form>
  );
};
