import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import {
  Button,
  TextField,
  TextArea,
  Select,
} from "../../../../mentorComponents/index";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import imageRep from "../../../../assets/icons/plus.svg";
import "./workExperience.css";
import { useActivity } from "../../../../hooks/useBusiness";
import { postMentorProfile } from "../../../../services/mentor";
import { useFormik } from "formik";
import { useAuth } from "../../../../hooks/useAuth";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import { sectors } from "../../../../utils/utils";

const WorkExperience = () => {
  const { goBack, push } = useHistory();
  const { stateAuth, updateMentorProfileState, updateMentorInfo } = useAuth();
  const {
    changePath,
    state: { path },
  } = useActivity();

  const back = () => {
    changePath(path - 1);
  };

  const next = () => {
    changePath(path + 1);
  };

  const [loading, setLoading] = useState(false);
  const [opts, setOpts] = useState("");
  const [nextloading, setNextLoading] = useState(false);
  const [startDate, setStartDate] = useState();
  const [data, setData] = useState(
    stateAuth?.mentorData?.workExperience[0] ?? ""
  );

  useEffect(() => {
    setData(stateAuth?.mentorData?.workExperience[0]);
  }, [stateAuth?.mentorData?.workExperience[0]]);

  const onSubmit = async () => {
    updateMentorProfileState("workExperience", [data]);
    setLoading(true);
    const uploaded = await updateMentorInfo();

    if (uploaded) {
      toast.success("Saved Successfully");
    } else {
      toast.error("Something went wrong");
    }
    if (uploaded) {
      push("#area_of_interest");
    }
    setLoading(false);
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
      currentFounder: Yup.string().required("This is required"),
      industry: Yup.string().required("This field is required"),
      companyName: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      achievements: Yup.string().required("This field is required"),
      position: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      start: Yup.string().required("This field is required"),
      end: Yup.string().required("This field is required"),
      amountRaised: Yup.string().required("This field is required"),
    }),
    onSubmit: (value) => onSubmit(),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });

    formik.handleChange(e);
  };

  const onNotCurrent = () => {
    handleChange({ target: { name: "position", value: "N/A" } });
    handleChange({ target: { name: "start", value: "N/A" } });
    handleChange({ target: { name: "end", value: "N/A" } });
    handleChange({ target: { name: "amountRaised", value: "N/A" } });
  };

  const onCurrent = () => {
    handleChange({
      target: {
        name: "position",
        value: data?.position ?? "",
      },
    });
    handleChange({
      target: {
        name: "start",
        value: data?.start ?? "",
      },
    });
    handleChange({
      target: {
        name: "end",
        value: data?.end ?? "",
      },
    });
    handleChange({
      target: {
        name: "amountRaised",
        value: data?.amountRaised ?? "",
      },
    });
  };

  return (
    <div className="mentor_details_form_wrap">
      <h3>Work Experience</h3>
      <p>You are required to add a current experence.</p>

      <form onSubmit={formik.handleSubmit}>
        <FormCard>
          <div className="mb-4">
            <p className="offer-text pt-2 pb-2">
              Are you a past or current founder of a company?
            </p>
            <section className="free-choice">
              <button
                className="yes-btn"
                type="button"
                style={
                  formik.values.currentFounder === "Yes"
                    ? {
                        color: "#2e3192",
                        background: "#dcebff",
                      }
                    : {}
                }
                onClick={() => {
                  onCurrent();
                  handleChange({
                    target: { name: "currentFounder", value: "Yes" },
                  });
                }}
              >
                Yes
              </button>
              <button
                className="no-btn"
                type="button"
                style={
                  formik.values.currentFounder === "No"
                    ? {
                        color: "#2e3192",
                        background: "#dcebff",
                      }
                    : {}
                }
                onClick={() => {
                  onNotCurrent();
                  handleChange({
                    target: { name: "currentFounder", value: "No" },
                  });
                }}
              >
                No
              </button>
            </section>
            {formik.errors.currentFounder ? (
              <label className="error">{formik.errors.currentFounder}</label>
            ) : null}
          </div>

          <div className="row">
            <section className="col-md-12 mb-4">
              <Select
                label={"Industry"}
                options={sectors}
                name="industry"
                onChange={handleChange}
                value={formik.values.industry}
              />
              {formik.touched.industry && formik.errors.industry ? (
                <label className="error">{formik.errors.industry}</label>
              ) : null}
            </section>

            {formik.values.currentFounder === "Yes" && (
              <>
                <section className="col-md-12 mb-4">
                  <TextArea
                    label={"Position*"}
                    placeholder={"Ex. Managing Director"}
                    required={true}
                    rows={"1"}
                    name="position"
                    value={formik.values.position}
                    onChange={handleChange}
                  />
                  {formik.touched.position && formik.errors.position ? (
                    <label className="error">{formik.errors.position}</label>
                  ) : null}
                </section>
                <section className="col-md-6 mb-4">
                  <label>Start Date*</label>
                  <TextField
                    // label={'Start Date*'}
                    type={"date"}
                    placeholder={"dd/mm/yy"}
                    required={true}
                    name="start"
                    value={formik.values.start}
                    onChange={handleChange}
                  />
                  {formik.touched.start && formik.errors.start ? (
                    <label className="error">{formik.errors.start}</label>
                  ) : null}
                </section>
                <section className="col-md-6 mb-4">
                  <label>End Date*</label>
                  <TextField
                    // label={'End Date*'}
                    type="date"
                    placeholder={"dd/mm/yy"}
                    required={true}
                    name="end"
                    value={formik.values.end}
                    onChange={handleChange}
                  />
                  {formik.touched.end && formik.errors.end ? (
                    <label className="error">{formik.errors.end}</label>
                  ) : null}
                </section>
              </>
            )}

            <section className="col-md-12 mb-4">
              <TextArea
                label={"Company Name*"}
                placeholder={"Enter company name"}
                rows={"1"}
                required={true}
                name="companyName"
                value={formik.values.companyName}
                onChange={handleChange}
              />
              {formik.touched.companyName && formik.errors.companyName ? (
                <label className="error">{formik.errors.companyName}</label>
              ) : null}
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={"What are your top  achievements?"}
                placeholder={"e.g I was made a managing director...."}
                rows={"6"}
                name="achievements"
                onChange={handleChange}
                value={formik.values.achievements}
              />
              {formik.touched.achievements && formik.errors.achievements ? (
                <label className="error">{formik.errors.achievements}</label>
              ) : null}
            </section>

            {formik.values.currentFounder === "Yes" && (
              <div className="mb-4">
                <p className="offer-text pt-2 pb-2">
                  Have you ever been among the first set of employees in a
                  company that was valued or exited at $5M?
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
            )}
          </div>
        </FormCard>

        {/* <section className="col-md-12 mb-4">
          <p className="add_another_experience">
            <img className="mr-2" src={imageRep} alt="plus" />
            Add Another Experience
          </p>
        </section> */}

        <section className="d-flex align-items-center justify-content-between mt-5">
          <button
            style={{ background: "#c4c4c4" }}
            className="back-btn"
            onClick={() => {
              updateMentorProfileState("workExperience", [data]);
              push("#personal_details");
            }}
          >
            Go Back
          </button>

          <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
            <Button
              type="submit"
              label={loading ? <CircularLoader /> : "Save"}
              disabled={loading}
              variant="secondary"
            />

            <Button
              label={"Next"}
              background="#2E3192"
              type="button"
              disabled={nextloading}
              onClick={() => {
                push("#area_of_interest");
              }}
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default WorkExperience;
