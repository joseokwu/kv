import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { Button, TextArea, Select } from "../../../../mentorComponents/index";
import imageRep from "../../../../assets/icons/blackPlus.svg";
import "./interest.css";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";
import { useFormik } from "formik";

const Interest = () => {
  const { goBack, push } = useHistory();

  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

  const [inVal, setVal] = useState("");

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
      skills: Yup.array().length(1).required("This is required"),
      roleInKv: Yup.string().required("This field is required"),
      mentorType: Yup.string().required("This field is required"),
      roleAsFounder: Yup.string().required("This field is required"),
      mentorExperience: Yup.string().required("This field is required"),
      growthInStartup: Yup.string().required("This field is required"),
      companyInterest: Yup.string().required("This field is required"),
      criterion: Yup.string().required("This field is required"),
      additionalInfo: Yup.string().required("This field is required"),
    }),
  });
  return (
    <div className="mentor_details_form_wrap">
      <h3>Area of Interest </h3>
      <p>
        This will help us provide startups personalised for your preferences
      </p>

      <FormCard>
        <div className="row">
          <section className="col-md-12 mb-4">
            <Select label={"What industries do you have expertise in?"} />
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
          </section>

          <section className="col-md-12 mb-4">
            <Select
              label={
                "What role(s) would you like to play within the Knight Ventures Network?"
              }
            />
          </section>
        </div>
      </FormCard>

      <FormCard>
        <section className="col-md-12 mb-4">
          <p className="gender_title mb-3">
            What mentor type would you prefer?
          </p>
          <section className="gender_choice">
            <button className="col-md-6 male_btn">
              Regular mentor - Dedicated office hours{" "}
            </button>
            <button className="col-md-5 pl-2 female_btn">
              Directory listing - By approval{" "}
            </button>
          </section>
        </section>

        <section className="col-md-12 mb-4">
          <Select label={"What founder type roles are you interested in?"} />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "In clear terms, please share your mentoring experience, and how that would come to bear as a Mentor in the Knight Ventures network?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section>

        <div className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you worked in growth marketing with Startups or Tech Companies?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "Are you interested in joining a company at a particular stage?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "What is your most important criterion in selecting a company to join?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Please include any additional information"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section>
      </FormCard>

      <FormCard>
        <section className="upload_resume text-center mb-4">
          <button>
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
          <Button label="Save" variant="secondary" />
          <Button
            label="Next"
            onClick={() => {
              push("#consulting");
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Interest;
