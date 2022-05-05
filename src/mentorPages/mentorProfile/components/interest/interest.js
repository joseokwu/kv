import React, { useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import edit from "../../../../assets/icons/edit.svg";
import {
  Modal,
  Tag,
  Select,
  TextArea,
  Button,
} from "../../../../mentorComponents";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";
import { sectors, kvRoles, founderType } from "../../../../utils/utils";
import { Form } from "antd";
import "./interest.css";

const MentorInterest = ({ data }) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt={"edit"}
          data-toggle="modal"
          data-target="#editInterestModal"
          role="button"
        />
        <Modal title="Area of Interest" id="editInterestModal">
          <EditMentorInterest />
        </Modal>
      </span>

      <div>
        <section className="mentor_consulting mb-2">
          <p className="partner-cat-header mb-3">Area of Interest</p>
          <p className="mentor_availability_question mb-3">
            What kind of time commitment are you willing to make as a mentor?
          </p>
          {[data?.roleInKv]?.map((item, i) => (
            <button key={i} className="interest_btn mt-1 mr-2">
              {" "}
              {item}{" "}
            </button>
          ))}

          <p className="mentor_service mt-4">Area of expertise</p>
        </section>

        <section>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            {data?.skills?.map((item, i) => (
              <Tag
                key={i}
                name={item}
                color={
                  item === "Engineering" || item === "Cyber Security"
                    ? "#40439A"
                    : item === "Career"
                    ? "#E31937"
                    : "#ACACAC"
                }
              />
            ))}
          </span>
        </section>
      </div>
    </section>
  );
};

export default MentorInterest;

const EditMentorInterest = () => {
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
      companyInterest: Yup.string().required("This field is required"),
      criterion: Yup.string().required("This field is required"),
      additionalInfo: Yup.string().required("This field is required"),
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
    <form className="px-4 pb-4" onSubmit={formik.handleSubmit}>
      <section className="mentor_consult_modal mb-4">
        <Select
          label={"What are your top industries of expertise?"}
          placeholder={"Choose option"}
          name="industryExpertise"
          onChange={handleChange}
          options={sectors}
          value={formik.values.industryExpertise}
        />
        {formik.touched.industryExpertise && formik.errors.industryExpertise ? (
          <label className="error">{formik.errors.industryExpertise}</label>
        ) : null}
      </section>

      <section className=" mb-4">
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

      <section className="mentor_consult_modal mb-4">
        <Select
          label={
            "What role(s) would you like to play within the Knight Ventures Network?"
          }
          placeholder={"Choose option"}
          name="roleInKv"
          onChange={handleChange}
          value={formik.values.roleInKv}
          options={kvRoles}
        />
        {formik.touched.roleInKv && formik.errors.roleInKv ? (
          <label className="error">{formik.errors.roleInKv}</label>
        ) : null}
      </section>

      <section className="mentor_availabilty">
        <p className="mentor_availability_question mb-4">
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
                    fontSize: 13,
                  }
                : { fontSize: 13 }
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
                    fontSize: 13,
                  }
                : { fontSize: 13 }
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

      <section className="mentor_consult_modal mb-4 mt-4">
        <Select
          label={"What founder type roles are you interested in?"}
          placeholder={"Choose option"}
          name="roleAsFounder"
          onChange={handleChange}
          value={formik.values.roleAsFounder}
          options={founderType}
        />
        {formik.touched.roleAsFounder && formik.errors.roleAsFounder ? (
          <label className="error">{formik.errors.roleAsFounder}</label>
        ) : null}
      </section>

      <section className="mentor_consult_modal mb-4">
        <Select
          label={
            "What kind of time commitment are you willing to make as a mentor?"
          }
          placeholder={"Choose option"}
          name="roleAsFounder"
          onChange={handleChange}
          value={formik.values.roleAsFounder}
          options={founderType}
        />
        {formik.touched.roleAsFounder && formik.errors.roleAsFounder ? (
          <label className="error">{formik.errors.roleAsFounder}</label>
        ) : null}
      </section>

      <div className="row">
        <section className="col-md-12 mb-4">
          <TextArea
            className="mb-0"
            label={
              "In three sentences or less, tell us why you want to mentor with Knight Ventures and what experience you have with mentoring (being mentored included.)"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
            name="mentorExperience"
            onChange={handleChange}
            value={formik.values.mentorExperience}
          />
          {formik.touched.mentorExperience && formik.errors.mentorExperience ? (
            <label className="error">{formik.errors.mentorExperience}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you been one of the first 10 employees of a company that has
            been valued or exited at $5m or more?
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
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            className="mb-0"
            label={
              "Are you interested in joining a company at a particular stage?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
            name="companyInterest"
            onChange={handleChange}
            value={formik.values.companyInterest}
          />
          {formik.touched.companyInterest && formik.errors.companyInterest ? (
            <label className="error">{formik.errors.companyInterest}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-5">
          <TextArea
            className="mb-0"
            label={
              "​​What do you care most about when selecting a company to join?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
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
            className="mb-0"
            label={"Please list any notes you want us to know"}
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
            name="additionalInfo"
            onChange={handleChange}
            value={formik.values.additionalInfo}
          />
          {formik.touched.additionalInfo && formik.errors.additionalInfo ? (
            <label className="error">{formik.errors.additionalInfo}</label>
          ) : null}
          <hr className="mt-4" />
        </section>

        {/* <section className="mentor_interest_btn text-right col-md-12">
          <button className=" btn_change mr-2">Change</button>
          <button className="btn_del">Delete</button>
        </section> */}
      </div>

      <Form.Item>
        <div className=" text-right mb-4 mt-3">
          <Button label="Save" loading={loading} />
        </div>
      </Form.Item>
    </form>
  );
};
