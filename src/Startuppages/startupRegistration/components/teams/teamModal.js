import React, { useState } from "react";
import { HeaderModal, ModalForm } from "./teams.styled";
import { CustomModal } from "../../../../Startupcomponents/modal/Customodal";
import { ModalCus } from "../../../../Startupcomponents/modal/Modal";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useActivity } from "../../../../hooks/useBusiness";

export const TeamModal = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  workExperience,
  isEditing,
  setIsEditing,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const onSubmit = (e, from) => {
    console.log(workExperience, "Old Experiences");
    e.preventDefault();
    handleWorkDetails({
      index: editIndex,
      from,
      companyName: formik.getFieldProps("companyName").value,
      location: formik.getFieldProps("location").value,
      position: formik.getFieldProps("position").value,
      responsibility: formik.getFieldProps("responsibility").value,
      startDate: startDate.toISOString(),
      endDate: checked ? "present" : endDate.toISOString(),
      founder: true,
    });
    handleClose(false);
  };

  const formik = useFormik({
    initialValues: {
      companyName: isEditing ? workExperience[editIndex]?.companyName : "",
      location: isEditing ? workExperience[editIndex]?.location : "",
      position: isEditing ? workExperience[editIndex]?.position : "",
      responsibility: isEditing ? workExperience[editIndex]?.responsibility : "",
      startDate: "",
      endDate: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      position: Yup.string().required("Required"),
      responsibility: Yup.string().required("Required"),
      startDate: Yup.string().required("Required"),
      endDate: Yup.string().required("Required"),
    }),
    onSubmit: (values) => console.log("df"),
  });

  return (
    <ModalCus
      closeModal={() => {
        setIsEditing(false);
        handleClose();
      }}
    >
      <div className="mx-2">
        <HeaderModal>
          {isEditing ? "Edit Work Experience" : "Add Work Experience"}
        </HeaderModal>
        <hr style={{ background: "#323232" }} />
        <form
          onSubmit={(e) =>
            onSubmit(e, isEditing ? "workExperienceEdit" : "workExperience")
          }
        >
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>Title<span style={{color: "red"}}>*</span></label>
              <input
                id="title"
                name="companyName"
                type="text"
                className="form-control ps-3"
                placeholder="CEO and Founder"
              
                value={formik.values.companyName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title ? (
                <article className="error">{formik.errors.title}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Location<span style={{color: "red"}}>*</span></label>
              <input
                id="location"
                name="location"
                type="text"
                className="form-control ps-3"
                placeholder="United state of America"
               
                value={formik.values.location}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <article className="error">{formik.errors.location}</article>
              ) : null}
            </div>

            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Description<span style={{color: "red"}}>*</span></label>
                <label style={{ color: "#828282" }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                id="description"
                name="responsibility"
                cols="5"
                rows="5"
                className="form-control ps-3"
                placeholder="Tell us about your role"
              
                value={formik.values.responsibility}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description ? (
                <article className="error">{formik.errors.description}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I currently work in this role</span>
            </div>
            <div className="col-6 form-group">
              <label>Start Date<span style={{color: "red"}}>*</span></label>
              <DatePicker
                id="startDate"
                name="startDate"
                className="date-input col-lg-12 ps-3 py-2"
                style={{ padding: "15px" }}
               
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {!checked && (
              <div className="col-6 form-group">
                <label>End Date<span style={{color: "red"}}>*</span></label>
                <DatePicker
                  id="endDate"
                  name="endDate"
                  className="date-input col-lg-12 ps-3 py-2"
                 
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            )}

            <div
              className="col-12 d-flex justify-content-end"
              style={{ marginTop: "4rem" }}
            >
              <CustomButton
                type="submit"
                background="#021098"
                // style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  );
};

export const EducationModal = ({
  handleClose,
  handleWorkDetails,
  editIndex,
  education,
  isEditing,
  setIsEditing,
}) => {
  const [eduStartDate, setEduStartDate] = useState(new Date());
  const [eduEndDate, setEduEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const onSubmit = (e, from) => {
    console.log(education, 'prev education');
    e.preventDefault();
    handleWorkDetails({
      index: editIndex,
      from,
      schoolName: formik.getFieldProps("schoolName").value,
      course: formik.getFieldProps("course").value,
      degree: formik.getFieldProps("degree").value,
      activities: formik.getFieldProps("activities").value,
      eduStartDate: eduStartDate.toISOString(),
      eduEndDate: checked ? "present" : eduEndDate.toISOString(),
      founder: true,
    });
    handleClose(false);
  };

  const formik = useFormik({
    initialValues: {
      schoolName: isEditing ? education[editIndex]?.schoolName : "",
      course: isEditing ? education[editIndex]?.course : "",
      degree: isEditing ? education[editIndex]?.degree : "",
      activities: isEditing ? education[editIndex]?.activities : "",
      eduStartDate: "",
      eduEndDate: "",
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required("Required"),
      course: Yup.string().required("Required"),
      degree: Yup.string().required("Required"),
      activities: Yup.string().required("Required"),
      eduStartDate: Yup.string().required("Required"),
      eduEndDate: Yup.string().required("Required"),
    }),
    onSubmit: (value) => console.log(value),
  });

  return (
    <ModalCus
      closeModal={() => {
        setIsEditing(false);
        handleClose();
      }}
    >
      <div className="mx-2">
        <HeaderModal>
          {isEditing ? "Edit Education" : "Add Education"}
        </HeaderModal>
        <hr style={{ background: "#323232" }} />
        <form onSubmit={(e) => onSubmit(e, isEditing ? "educationEdit" : "education")}>
          <ModalForm className="row">
            <div className="col-12 form-group">
              <label>School<span style={{color: "red"}}>*</span></label>
              <input
                id="school"
                name="schoolName"
                type="text"
                className="form-control ps-3"
                placeholder="Enter School name"
                value={formik.values.schoolName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.school && formik.errors.school ? (
                <article className="error">{formik.errors.school}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Degree<span style={{color: "red"}}>*</span></label>
              <input
                id="degree"
                name="degree"
                type="text"
                className="form-control ps-3"
                placeholder="Enter Degree "
                value={ formik.values.degree}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.degree && formik.errors.degree ? (
                <article className="error">{formik.errors.degree}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <label>Field of study<span style={{color: "red"}}>*</span></label>
              <input
                id="course"
                name="course"
                type="text"
                className="form-control ps-3"
                placeholder="Enter filed of study"
                value={formik.values.course}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.course && formik.errors.course ? (
                <article className="error">{formik.errors.course}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <div className="d-flex justify-content-between">
                <label>Activities and societies<span style={{color: "red"}}>*</span></label>
                <label style={{ color: "#828282" }}>
                  50 characters at most
                </label>
              </div>

              <textarea
                id="activities"
                name="activities"
                cols="5"
                rows="6"
                className="form-control ps-3"
                placeholder="Enter Activities and Societies"
                value={formik.values.activities}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.activities && formik.errors.activities ? (
                <article className="error">{formik.errors.activities}</article>
              ) : null}
            </div>
            <div className="col-12 form-group">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I currently school here.</span>
            </div>

            <div className="col-6 form-group">
              <label>Entry Date<span style={{color: "red"}}>*</span></label>
              <DatePicker
                id="eduStartDate"
                name="eduStartDate"
                className="date-input col-lg-12 ps-3 py-2"
                // style={{ padding: '15px' }}
                selected={eduStartDate}
                onChange={(date) => setEduStartDate(date)}
              />
            </div>

            {!checked && (
              <div className="col-6 form-group">
                <label>Graduation Date<span style={{color: "red"}}>*</span></label>
                <DatePicker
                  id="eduEndDate"
                  name="eduEndDate"
                  className="date-input col-lg-12 ps-3 py-2"
                  // style={{ padding: '15px' }}
                  selected={eduEndDate}
                  onChange={(date) => setEduEndDate(date)}
                />
              </div>
            )}

            <div
              className="col-12 d-flex justify-content-end"
              style={{ marginTop: "2rem" }}
            >
              <CustomButton
                type="submit"
                background="#021098"
                // style={{ marginLeft: '7rem' }}
              >
                Save
              </CustomButton>
            </div>
          </ModalForm>
        </form>
      </div>
    </ModalCus>
  );
};
