import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import "./experience.css";
import edit from "../../../../assets/icons/edit.svg";
import {
  Button,
  Modal,
  TextArea,
  TextField,
  Select,
} from "../../../../mentorComponents";
import { Form } from "antd";
import { useFormik } from "formik";
import { sectors } from "../../../../utils/utils";
import { useAuth } from "../../../../hooks";

const Experience = ({ data }) => {
  return (
    <div className="profile-offering">
      <h2>Experience</h2>
      <section className="text-right pb-0">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editMentorExperience"
          role="button"
        />
        <Modal title="Experience" id="editMentorExperience">
          <EditExperience />
        </Modal>
      </section>

      {data?.length > 0 &&
        data?.map((d, i) => {
          return (
            <ExperienceContent
              title={d?.position}
              sub={d?.companyName}
              date={`${new Date(d?.start).getFullYear()} - ${new Date(
                d?.end
              ).getFullYear()}`}
              activity={d?.activity}
              industry={d?.industry}
              i={i}
              key={i}
              length={data?.length}
            />
          );
        })}
    </div>
  );
};

export default Experience;

const ExperienceContent = ({
  title,
  i,
  length,
  head,
  sub,
  date,
  activity,
  industry,
}) => {
  return (
    <section
      className={`profile-offer-content ${
        i === length - 1 ? "pb-0 border-0" : ""
      }`}
    >
      <h3>{title}</h3>
      <p className="mentor_experience_head">{head}</p>
      <p className="mentor_experience_sub mt-2">{sub}</p>
      <p className="mentor_experience_date mt-2">{date}</p>
      <ul>
        {/* {activity.map((item, i) => (
          <li key={i} className="mt-3">
            {item}
          </li>
        ))} */}

        <button type="button"> {industry} </button>
      </ul>
    </section>
  );
};

const EditExperience = () => {
  const [loader, setLoader] = useState(false);

  const { push } = useHistory();

  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();

  const [data, setData] = useState({});

  const onSubmit = async () => {
    updateMentorProfileState("workExperience", [data]);
    setLoader(true);
    const uploaded = await updateMentorInfo();

    if (uploaded) {
      toast.success("Saved Successfully");
    } else {
      toast.error("Something went wrong");
    }

    setLoader(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentFounder: data?.currentFounder ?? "No",
      industry: data?.industry ?? "",
      companyName: data?.companyName ?? "",
      achievements: data?.achievements ?? "",
      position: data?.position ?? "N/A",
      start: data?.start ?? "N/A",
      end: data?.end ?? "N/A",
      amountRaised: data?.amountRaised ?? "N/A",
    },
    validationSchema: Yup.object({
      // currentFounder: Yup.string().required("This is required"),
      industry: Yup.string().required("This field is required"),
      companyName: Yup.string().required("This field is required"),
      achievements: Yup.string().required("This field is required"),
      position: Yup.string().required("This field is required"),
      start: Yup.string().required("This field is required"),
      end: Yup.string().required("This field is required"),
      amountRaised: Yup.string().required("This field is required"),
    }),
    onSubmit: () => onSubmit(),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });

    formik.handleChange(e);
  };

  useEffect(() => {
    setData(stateAuth?.mentorData?.workExperience[0]);
  }, [stateAuth?.mentorData?.workExperience[0]]);

  return (
    <form className="px-4 pb-4" onSubmit={formik.handleSubmit}>
      <section className="mentor_consult_modal mb-4">
        <Select
          label={"Industry"}
          placeholder={"Choose option"}
          options={sectors}
          name="industry"
          value={formik.values?.industry}
          onChange={formik.handleChange}
        />
        {formik.errors.industry ? (
          <label className="error">{formik.errors.industry}</label>
        ) : null}
      </section>

      <div className="row">
        <section className="col-md-12 mb-4">
          <TextArea
            label={"Position*"}
            placeholder={"Ex. Managing Director"}
            rows={"1"}
            name="position"
            value={formik.values?.position}
            onChange={formik.handleChange}
          />
          {formik.errors.position ? (
            <label className="error">{formik.errors.position}</label>
          ) : null}
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={"Start Date*"}
            placeholder={"dd/mm/yy"}
            type="date"
            required={true}
            name="start"
            value={formik.values?.start}
            onChange={formik.handleChange}
          />
          {formik.errors.start ? (
            <label className="error">{formik.errors.start}</label>
          ) : null}
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={"End Date*"}
            placeholder={"dd/mm/yy"}
            type="date"
            required={true}
            name="end"
            value={formik.values?.end}
            onChange={formik.handleChange}
          />
          {formik.errors.end ? (
            <label className="error">{formik.errors.end}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Company Name*"}
            placeholder={"Enter company name"}
            rows={"1"}
            required={true}
            name="companyName"
            value={formik.values?.companyName}
            onChange={formik.handleChange}
          />
          {formik.errors.companyName ? (
            <label className="error">{formik.errors.companyName}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"What are your top 3-5 professional achievements?"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            required={true}
            name="achievements"
            value={formik.values?.achievements}
            onChange={formik.handleChange}
          />
          {formik.errors.achievements ? (
            <label className="error">{formik.errors.achievements}</label>
          ) : null}
        </section>

        {/* <section className="col-md-12 mb-4">
          <Select
            label={"What are your top areas or industries of expertise?"}
            placeholder={"Choose option"}
          />
        </section> */}

        <div className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you been one of the first 10 employees of a company that has
            been valued or exited at $5m or more?
          </p>
          <section className="free-choice">
            <button
              className="yes-btn"
              type="button"
              style={
                formik.values.amountRaised === "Yes"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() => {
                handleChange({
                  target: { name: "amountRaised", value: "Yes" },
                });
              }}
            >
              Yes
            </button>
            <button
              className="no-btn"
              type="button"
              style={
                formik.values.amountRaised === "No"
                  ? {
                      color: "#2e3192",
                      background: "#dcebff",
                    }
                  : {}
              }
              onClick={() => {
                handleChange({
                  target: { name: "amountRaised", value: "No" },
                });
              }}
            >
              No
            </button>
          </section>
          {formik.errors.amountRaised ? (
            <label className="error">{formik.errors.amountRaised}</label>
          ) : null}
        </div>
      </div>

      {/* <Form.Item> */}
      <div className=" text-right mb-4 mt-3">
        <Button label="Save" loading={loader} />
      </div>
      {/* </Form.Item> */}
    </form>
  );
};
