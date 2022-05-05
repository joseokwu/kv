import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormCard from "../../../../mentorComponents/formCard/FormCard";
import { Button, TextArea } from "../../../../mentorComponents/index";
import imageRep from "../../../../assets/icons/circleTimes.svg";
import searchSm from "../../../../assets/icons/searchSm.svg";
import "./consulting.css";
import { SkillTab } from "../../../../Startupcomponents";
import { useAuth } from "../../../../hooks";

const Consulting = () => {
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
        stateAuth.mentorData.consultantOffering.areaofService.indexOf(
          inVal.trim()
        ) !== -1
      )
        return;
      setVal("");
      updateMentorProfileState("consultantOffering", {
        areaofService: [
          ...stateAuth.mentorData.consultantOffering.areaofService,
          inVal,
        ],
      });
    }
  };

  const onDelete = (value) => {
    updateMentorProfileState("consultantOffering", {
      areaofService:
        stateAuth.mentorData.consultantOffering.areaofService.filter(
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
      push("#assistant_info");
    }
    setLoading(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      areaofService:
        stateAuth?.mentorData?.consultantOffering?.areaofService ?? [],
      serviceDescription:
        stateAuth?.mentorData?.consultantOffering?.serviceDescription ?? "",
      promotion: stateAuth?.mentorData?.consultantOffering?.promotion ?? "",
    },
    validationSchema: Yup.object({
      areaofService: Yup.array().min(1).required("This is required"),
      serviceDescription: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
      promotion: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Numbers or special characters not allowed")
        .required("This field is required"),
    }),
    onSubmit: () => handleSubmit(),
  });

  const handleChange = (e, prefix = "") => {
    const { name, value } = e.target;
    if (prefix !== "") {
      updateMentorProfileState("consultantOffering", {
        [prefix]: {
          ...stateAuth?.mentorData?.consultantOffering[prefix],
          [name]: value,
        },
      });
      formik.handleChange(e);
      return;
    }

    updateMentorProfileState("consultantOffering", {
      [name]: value,
    });
    formik.handleChange(e);
  };
  return (
    <form className="mentor_details_form_wrap" onSubmit={formik.handleSubmit}>
      <h3>Consultant Offerings</h3>
      <p>This will help us personalise your preferences</p>

      <FormCard>
        <section className="col-md-12 mb-4">
          <label>{"What are your areas of service?"}</label>
          <input
            onChange={handleChangeVal}
            style={{ width: "100%", outline: "none", color: "purple" }}
            value={inVal}
            type="text"
            placeholder="Enter your skills and press the space button to add "
            className="py-2 px-3 mb-1"
            onKeyDown={handleKey}
          />

          {stateAuth?.mentorData?.consultantOffering?.areaofService &&
            stateAuth?.mentorData?.consultantOffering?.areaofService.map(
              (item, i) => (
                <SkillTab key={i} skill={item} onClick={() => onDelete(item)} />
              )
            )}
          {formik.errors.areaofService ? (
            <label className="error">{formik.errors.areaofService}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Write a short description of your service"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            name="serviceDescription"
            onChange={handleChange}
            value={formik.values.serviceDescription}
          />
          {formik.touched.serviceDescription &&
          formik.errors.serviceDescription ? (
            <label className="error">{formik.errors.serviceDescription}</label>
          ) : null}
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={
              "If any, what is your offer / promotion for the Knight Ventures community?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
            value={formik.values.promotion}
            name="promotion"
            onChange={handleChange}
          />
          {formik.touched.promotion && formik.errors.promotion ? (
            <label className="error">{formik.errors.promotion}</label>
          ) : null}
        </section>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between mt-5">
        <button
          className="back-btn"
          onClick={() => {
            push("#area_of_interest");
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" type="submit" />
          <Button
            label="Next"
            onClick={() => {
              push("#assistant_info");
            }}
          />
        </div>
      </section>
    </form>
  );
};

export default Consulting;
