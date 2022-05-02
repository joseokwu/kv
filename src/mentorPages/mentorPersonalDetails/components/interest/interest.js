import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { Button, TextArea, Select } from "../../../../mentorComponents/index";
import imageRep from "../../../../assets/icons/blackPlus.svg";
import "./interest.css";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";
import { sectors, kvRoles, founderType } from "../../../../utils/utils";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";

const Interest = () => {
  const { goBack, push } = useHistory();

  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

  const [inVal, setVal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeVal = (e) => {
    setVal(e.target.value);
  };

  const handleKey = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      if (
        inVal.trim() === "" ||
        stateAuth.mentorData.areaOfInterest.skills.indexOf(inVal.trim()) !== -1
      )
        return;
      setVal("");
      updateMentorProfileState("areaOfInterest", {
        skills: [...stateAuth.mentorData.areaOfInterest.skills, inVal],
      });
    }
  };

  const onDelete = (value) => {
    updateMentorProfileState("areaOfInterest", {
      skills: stateAuth.mentorData.areaOfInterest.skills.filter(
        (item) => item !== value
      ),
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    const uploaded = await updateMentorInfo();

    if (uploaded) {
      toast.success("Saved Successfully");
    } else {
      toast.error("Something went wrong");
    }
    if (uploaded) {
      push("#consulting");
    }
    setLoading(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      industryExpertise:
        stateAuth?.mentorData?.areaOfInterest?.industryExpertise ?? "",
      skills: stateAuth?.mentorData?.areaOfInterest?.skills ?? [],
      roleInKv: stateAuth?.mentorData?.areaOfInterest?.roleInKv ?? "",
      mentorType: stateAuth?.mentorData?.areaOfInterest?.mentorType ?? "",
      roleAsFounder: stateAuth?.mentorData?.areaOfInterest?.roleAsFounder ?? "",
      mentorExperience:
        stateAuth?.mentorData?.areaOfInterest?.mentorExperience ?? "",
      growthInStartup:
        stateAuth?.mentorData?.areaOfInterest?.growthInStartup ?? "",
      companyInterest:
        stateAuth?.mentorData?.areaOfInterest?.companyInterest ?? "",
      criterion: stateAuth?.mentorData?.areaOfInterest?.criterion ?? "",
      additionalInfo:
        stateAuth?.mentorData?.areaOfInterest?.additionalInfo ?? "",
    },

    validationSchema: Yup.object({
      industryExpertise: Yup.string().required("This field is required"),
      skills: Yup.array().min(1).required("This is required"),
      roleInKv: Yup.string().required("This field is required"),
      mentorType: Yup.string().required("This field is required"),
      roleAsFounder: Yup.string().required("This field is required"),
      mentorExperience: Yup.string().required("This field is required"),
      growthInStartup: Yup.string().required("This field is required"),
      companyInterest: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      criterion: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      additionalInfo: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
    }),

    onSubmit: () => handleSubmit(),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateMentorProfileState("areaOfInterest", {
        [prefix]: {
          ...stateAuth?.mentorData?.areaOfInterest[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }

    updateMentorProfileState("areaOfInterest", {
      [name]: value,
    });
    formik.handleChange(e);
  };

  return (
    <form className="mentor_details_form_wrap" onSubmit={formik.handleSubmit}>
      <h3>Area of Interest </h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>

      <FormCard>
        <div className="row">
          <section className="col-md-12 mb-4">
            <Select
              label={"What industries do you have expertise in?"}
              name="industryExpertise"
              onChange={handleChange}
              options={sectors}
              value={formik.values.industryExpertise}
            />
            {formik.touched.industryExpertise &&
            formik.errors.industryExpertise ? (
              <label className="error">{formik.errors.industryExpertise}</label>
            ) : null}
          </section>

          <section className="col-md-12 mb-4">
            <label>{"Please list your skills or areas of expertise"}</label>
            <input
              onChange={handleChangeVal}
              style={{ width: "100%", outline: "none", color: "purple" }}
              value={inVal}
              type="text"
              placeholder="Enter your skills and press the space button to add "
              className="py-2 px-3 mb-1"
              // className='form-control ps-3'
              onKeyDown={handleKey}
            />

            {stateAuth?.mentorData?.areaOfInterest?.skills &&
              stateAuth?.mentorData?.areaOfInterest?.skills.map((item, i) => (
                <SkillTab key={i} skill={item} onClick={() => onDelete(item)} />
              ))}
            {formik.errors.skills ? (
              <label className="error">{formik.errors.skills}</label>
            ) : null}
          </section>

          <section className="col-md-12 mb-4">
            <Select
              label={
                "What role would you like to play within the Knight Ventures Network?"
              }
              name="roleInKv"
              onChange={handleChange}
              value={formik.values.roleInKv}
              options={kvRoles}
            />
            {formik.touched.roleInKv && formik.errors.roleInKv ? (
              <label className="error">{formik.errors.roleInKv}</label>
            ) : null}
          </section>
        </div>
      </FormCard>

      <FormCard>
        <section className="col-md-12 mb-4">
          <p className="gender_title mb-3">
            What mentor type would you prefer?
          </p>
          <section className="gender_choice">
            <button
              className="col-md-6 male_btn"
              type="button"
              style={
                formik.values.mentorType === "Regular mentor"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() =>
                handleChange({
                  target: { name: "mentorType", value: "Regular mentor" },
                })
              }
            >
              Regular mentor - Dedicated office hours{" "}
            </button>
            <button
              className="col-md-5 pl-2 female_btn"
              type="button"
              style={
                formik.values.mentorType === "Directory listing"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() =>
                handleChange({
                  target: { name: "mentorType", value: "Directory listing" },
                })
              }
            >
              Directory listing - By approval{" "}
            </button>
          </section>
        </section>

        <section className="col-md-12 mb-4">
          <Select
            label={"What founder type roles are you interested in?"}
            name="roleAsFounder"
            onChange={handleChange}
            value={formik.values.roleAsFounder}
            options={founderType}
          />
          {formik.touched.roleAsFounder && formik.errors.roleAsFounder ? (
            <label className="error">{formik.errors.roleAsFounder}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "In clear terms, please share your mentoring experience, and how that would come to bear as a Mentor in the Knight Ventures network?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            name="mentorExperience"
            onChange={handleChange}
            value={formik.values.mentorExperience}
          />
          {formik.touched.mentorExperience && formik.errors.mentorExperience ? (
            <label className="error">{formik.errors.mentorExperience}</label>
          ) : null}
        </section>

        <div className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you worked in growth marketing with Startups or Tech Companies?
          </p>
          <section className="free-choice">
            <button
              type="button"
              className="yes-btn"
              style={
                formik.values.growthInStartup === "Yes"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() =>
                handleChange({
                  target: { name: "growthInStartup", value: "Yes" },
                })
              }
            >
              Yes
            </button>
            <button
              type="button"
              className="no-btn"
              style={
                formik.values.growthInStartup === "No"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() =>
                handleChange({
                  target: { name: "growthInStartup", value: "No" },
                })
              }
            >
              No
            </button>
          </section>
        </div>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "Are you interested in joining a company at a particular stage?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            name="companyInterest"
            onChange={handleChange}
            value={formik.values.companyInterest}
          />
          {formik.touched.companyInterest && formik.errors.companyInterest ? (
            <label className="error">{formik.errors.companyInterest}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "What is your most important criterion in selecting a company to join?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            name="criterion"
            onChange={handleChange}
            value={formik.values.criterion}
          />
          {formik.touched.criterion && formik.errors.criterion ? (
            <label className="error">{formik.errors.criterion}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Please include any additional information"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            name="additionalInfo"
            onChange={handleChange}
            value={formik.values.additionalInfo}
          />
          {formik.touched.additionalInfo && formik.errors.additionalInfo ? (
            <label className="error">{formik.errors.additionalInfo}</label>
          ) : null}
        </section>
      </FormCard>

      {/* <FormCard>
        <section className="upload_resume text-center mb-4">
          <button type="button">
            <img className="mr-2" src={imageRep} alt={"upload_resume"} /> Upload
            Resume
          </button>
        </section>

        <section className="text-center mb-4">
          <p>Drag and drop file here</p>
        </section>

        <section className="upload_resume_size text-center mb-4">
          <p>File must be less than 5mb</p>
        </section>
      </FormCard> */}

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          type="button"
          onClick={() => {
            push("#work_experience");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button
            label={loading ? <CircularLoader /> : "Save"}
            variant="secondary"
            type="submit"
          />
          <Button
            label="Next"
            type="button"
            onClick={() => {
              push("#consulting");
            }}
          />
        </div>
      </section>
    </form>
  );
};

export default Interest;
