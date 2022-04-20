import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import { toast } from "react-toastify";
import { updateMentorProfile } from "../../../../services/mentor";
import { useFormik } from "formik";
import { useAuth } from "../../../../hooks/useAuth";
import { CircularLoader } from "../../../../mentorComponents/CircluarLoader/CircularLoader";
import { sectors } from "../../../../utils/utils";

const WorkExperience = () => {
  const { goBack, push } = useHistory();
  const { stateAuth, updateMentorReg } = useAuth();
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

  const onSubmit = async (value) => {
    try {
      const workexperience = {
        type: "workExperience",
        accType: "mentor",
        values: {
          ...value,
        },
        userId: stateAuth?.user?.userId,
      };
      console.log(workexperience);
      if (opts === "next") {
        setOpts(true);
        let result = await updateMentorProfile(workexperience);

        if (result?.success) {
          toast.success("Work experience" + "" + result?.message);
          setOpts(false);
          return changePath(path + 1);
        }
      }
      setLoading(true);
      let result = await updateMentorProfile(workexperience);

      if (!result?.success) {
        toast.error(result?.message || "There was an error in work experience");
        setLoading(false);
        return;
      }
      toast.success("Work experience" + " " + result?.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(
        err?.response?.data?.message ||
          "There was an error in updating work experience"
      );
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentFounder:
        stateAuth?.mentorData?.workExperience?.currentFounder ?? "No",
      industry: stateAuth?.mentorData?.workExperience?.industry ?? "",
      companyName: stateAuth?.mentorData?.workExperience?.industry ?? "",
      achievements: stateAuth?.mentorData?.workExperience?.achievements ?? "",
      position: stateAuth?.mentorData?.workExperience?.position ?? "N/A",
      start: stateAuth?.mentorData?.workExperience?.start ?? "N/A",
      end: stateAuth?.mentorData?.workExperience?.end ?? "N/A",
      amountRaised:
        stateAuth?.mentorData?.workExperience?.amountRaised ?? "N/A",
    },
    onSubmit: (value) => onSubmit(value),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateMentorReg("workExperience", {
        [prefix]: {
          ...stateAuth?.mentorData?.workExperience[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }

    updateMentorReg("workExperience", {
      [name]: value,
    });
    formik.handleChange(e);
  };

  const onNotCurrent = () => {
    handleChange({ target: { name: "position", value: "N/A" } });
    handleChange({ target: { name: "start", value: "N/A" } });
    handleChange({ target: { name: "end", value: "N/A" } });
    handleChange({ target: { name: "amountRaised", value: "N/A" } });
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
                style={
                  formik.values.currentFounder === "Yes"
                    ? {
                        color: "#2e3192",
                        background: "#dcebff",
                      }
                    : {}
                }
                onClick={() => {
                  handleChange({
                    target: { name: "currentFounder", value: "Yes" },
                  });
                }}
              >
                Yes
              </button>
              <button
                className="no-btn"
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
          </div>

          <div className="row">
            <section className="col-md-12 mb-4">
              <Select
                label={"Industry"}
                options={sectors}
                name="industry"
                onChange={handleChange}
              />
            </section>

            {stateAuth?.mentorData?.workExperience?.currentFounder ===
              "Yes" && (
              <>
                <section className="col-md-12 mb-4">
                  <TextArea
                    label={"Position*"}
                    placeholder={"Ex. Managing Director"}
                    required={true}
                    rows={"1"}
                    name="position"
                    onChange={handleChange}
                  />
                </section>
                <section className="col-md-6 mb-4">
                  <label>Start Date*</label>
                  <TextField
                    // label={'Start Date*'}
                    type={"date"}
                    placeholder={"dd/mm/yy"}
                    required={true}
                    name="start"
                    onChange={handleChange}
                  />
                </section>
                <section className="col-md-6 mb-4">
                  <label>End Date*</label>
                  <TextField
                    // label={'End Date*'}
                    type="date"
                    placeholder={"dd/mm/yy"}
                    required={true}
                    name="end"
                    onChange={handleChange}
                  />
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
                onChange={handleChange}
              />
            </section>

            <section className="col-md-12 mb-4">
              <TextArea
                label={"What are your top  achievements?"}
                placeholder={"e.g I was made a managing director...."}
                rows={"6"}
                name="achievements"
                onChange={handleChange}
              />
            </section>

            {stateAuth?.mentorData?.workExperience?.currentFounder ===
              "Yes" && (
              <div className="mb-4">
                <p className="offer-text pt-2 pb-2">
                  Have you ever been among the first set of employees in a
                  company that was valued or exited at $5M?
                </p>
                <section className="free-choice">
                  <button
                    className="yes-btn"
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
            onClick={back}
          >
            Go Back
          </button>

          <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
            <Button
              type="submit"
              // onClick={() => push('/mentor/dashboard')}
              label="Save"
              disabled={loading}
              variant="secondary"
            >
              {loading ? <CircularLoader /> : "Save"}
            </Button>

            <Button
              label="Next"
              background="#2E3192"
              type="submit"
              disabled={nextloading}
              onClick={() => {
                setOpts("next");
              }}
            >
              {nextloading ? <CircularLoader /> : "Next"}
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default WorkExperience;
