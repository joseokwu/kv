import React, { useEffect, useState } from "react";
import { HeaderModal, ModalForm } from "./teams.styled";
import { ModalCus } from "../../../../Startupcomponents/modal/Modal";
import { DatePicker } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../../hooks/useAuth";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/locale/zh_CN";

export const TeamModal = ({
    handleClose,
    handleWorkDetails,
    editIndex,
    workExperience,
    isEditing,
    setIsEditing,
}) => {
    const [checked, setChecked] = useState(
        workExperience[editIndex]?.endDate === "present" ? true : false
    );
    const { updateProfile, stateAuth } = useAuth();

    const [startDate, setStartDate] = useState(
        new Date(workExperience[editIndex]?.startDate)?.toLocaleDateString(
            "zh-cn"
        ) || new Date().toLocaleDateString("zh-cn")
    );
    const [endDate, setEndDate] = useState(
        new Date(workExperience[editIndex]?.endDate)?.toLocaleDateString(
            "zh-cn"
        ) || new Date().toLocaleDateString("zh-cn")
    );

    console.log(workExperience[editIndex]);
    console.log(editIndex);

    useEffect(() => {
        setEndDate(new Date().toLocaleDateString("zh-cn"));
    }, [checked]);

    const onSubmit = (e, from) => {
        e.preventDefault();
        console.log("Old Experiences");

        if (isEditing) {
            const newList = [...stateAuth?.startupData?.team?.experience];
            console.log("start at", new Date(startDate));
            console.log("start at", startDate);

            newList[editIndex] = {
                index: editIndex,
                companyName: formik.getFieldProps("companyName").value,
                location: formik.getFieldProps("location").value,
                position: formik.getFieldProps("position").value,
                responsibility: formik.getFieldProps("responsibility").value,
                startDate: new Date(startDate).toISOString(),
                endDate: checked ? "present" : new Date(endDate).toISOString(),
                founder: true,
            };
            console.log(newList);
            updateProfile("team", { experience: newList });
        } else {
            updateProfile("team", {
                experience: [
                    ...stateAuth?.startupData?.team?.experience,
                    {
                        index: editIndex,
                        companyName: formik.getFieldProps("companyName").value,
                        location: formik.getFieldProps("location").value,
                        position: formik.getFieldProps("position").value,
                        responsibility:
                            formik.getFieldProps("responsibility").value,
                        startDate: new Date(startDate).toISOString(),
                        endDate: checked
                            ? "present"
                            : new Date(endDate).toISOString(),
                        founder: true,
                    },
                ],
            });
        }

        handleClose(false);
    };

    const formik = useFormik({
        initialValues: {
            companyName: isEditing
                ? workExperience[editIndex]?.companyName
                : "",
            location: isEditing ? workExperience[editIndex]?.location : "",
            position: isEditing ? workExperience[editIndex]?.position : "",
            responsibility: isEditing
                ? workExperience[editIndex]?.responsibility
                : "",
            startDate: isEditing ? workExperience[editIndex]?.startDate : "",
            endDate: isEditing ? workExperience[editIndex]?.endDate : "",
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required("Required"),
            location: Yup.string().required("Required"),
            position: Yup.string().required("Required"),
            responsibility: Yup.string().required("Required"),
        }),
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
                <form onSubmit={onSubmit}>
                    <ModalForm className="row">
                        <div className="col-12 form-group">
                            <label>
                                Company Name
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="title"
                                name="companyName"
                                type="text"
                                className="form-control ps-3"
                                placeholder="Knight Ventures"
                                required={true}
                                value={formik.values.companyName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.companyName &&
                            formik.errors.companyName ? (
                                <article className="error">
                                    {formik.errors.companyName}
                                </article>
                            ) : null}
                        </div>
                        <div className="col-12 form-group">
                            <label>
                                Position
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="title"
                                name="position"
                                type="text"
                                className="form-control ps-3"
                                placeholder="MD/CEO"
                                required={true}
                                value={formik.values.position}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.position &&
                            formik.errors.position ? (
                                <article className="error">
                                    {formik.errors.position}
                                </article>
                            ) : null}
                        </div>
                        <div className="col-12 form-group">
                            <label>
                                Location<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                className="form-control ps-3"
                                placeholder="United state of America"
                                value={formik.values.location}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                required={true}
                            />
                            {formik.touched.location &&
                            formik.errors.location ? (
                                <article className="error">
                                    {formik.errors.location}
                                </article>
                            ) : null}
                        </div>

                        <div className="col-12 form-group">
                            <div className="d-flex justify-content-between">
                                <label>
                                    Description
                                    <span style={{ color: "red" }}>*</span>
                                </label>
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
                                required={true}
                            />
                            {formik.touched.responsibility &&
                            formik.errors.responsibility ? (
                                <article className="error">
                                    {formik.errors.responsibility}
                                </article>
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
                            <label>
                                Start Date
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                className="date-input col-lg-12 ps-3 py-2"
                                style={{ padding: "15px" }}
                                // selected={startDate}
                                value={moment(startDate)}
                                onChange={(date, dateString) => {
                                    console.log(dateString);
                                    setStartDate(dateString);
                                }}
                                required={true}
                            />
                        </div>
                        {!checked && (
                            <div className="col-6 form-group">
                                <label>
                                    End Date
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <DatePicker
                                    id="endDate"
                                    name="endDate"
                                    className="date-input col-lg-12 ps-3 py-2"
                                    value={moment(endDate)}
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        setEndDate(dateString);
                                    }}
                                    required={true}
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
    isLocal = false,
    education,
    isEditing,
    setIsEditing,
}) => {
    const [checked, setChecked] = useState(
        education[editIndex]?.endDate === "present" ? true : false
    );
    const { updateProfile, stateAuth } = useAuth();

    const [startDate, setStartDate] = useState(
        new Date(education[editIndex]?.startDate)?.toLocaleDateString(
            "zh-cn"
        ) || new Date().toLocaleDateString("zh-cn")
    );
    const [endDate, setEndDate] = useState(
        new Date(education[editIndex]?.endDate)?.toLocaleDateString("zh-cn") ||
            new Date().toLocaleDateString("zh-cn")
    );

    useEffect(() => {
        setEndDate(new Date().toLocaleDateString("zh-cn"));
    }, [checked]);

    console.log(stateAuth?.startupData?.team?.education);

    const onSubmit = (e) => {
        console.log(education, "prev education");
        e.preventDefault();

        if (isEditing) {
            const newList = [...stateAuth?.startupData?.team?.education];
            newList[editIndex] = {
                index: editIndex,
                schoolName: formik.getFieldProps("schoolName").value,
                course: formik.getFieldProps("course").value,
                degreeType: formik.getFieldProps("degreeType").value,
                activities: formik.getFieldProps("activities").value,
                startDate: new Date(startDate).toISOString(),
                endDate: checked ? "present" : new Date(endDate).toISOString(),
                founder: true,
            };
            console.log(newList);
            updateProfile("team", { education: newList });
        } else {
            updateProfile("team", {
                education: [
                    ...stateAuth?.startupData?.team.education,
                    {
                        index: editIndex,
                        schoolName: formik.getFieldProps("schoolName").value,
                        course: formik.getFieldProps("course").value,
                        degreeType: formik.getFieldProps("degreeType").value,
                        activities: formik.getFieldProps("activities").value,
                        startDate: new Date(startDate).toISOString(),
                        endDate: checked
                            ? "present"
                            : new Date(endDate).toISOString(),
                        founder: true,
                    },
                ],
            });
        }

        handleClose(false);
    };

    const formik = useFormik({
        initialValues: {
            schoolName: isEditing ? education[editIndex]?.schoolName : "",
            course: isEditing ? education[editIndex]?.course : "",
            degreeType: isEditing ? education[editIndex]?.degreeType : "",
            activities: isEditing ? education[editIndex]?.activities : "",
            startDate: "",
            endDate: "",
        },
        validationSchema: Yup.object({
            schoolName: Yup.string().required("Required"),
            course: Yup.string().required("Required"),
            degreeType: Yup.string().required("Required"),
            activities: Yup.string().required("Required"),
            startDate: Yup.string().required("Required"),
            endDate: Yup.string().required("Required"),
        }),
        onSubmit: (value) => console.log(value),
    });

    console.log(formik.getFieldProps("course").value);

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
                <form onSubmit={onSubmit}>
                    <ModalForm className="row">
                        <div className="col-12 form-group">
                            <label>
                                School<span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="school"
                                name="schoolName"
                                type="text"
                                className="form-control ps-3"
                                placeholder="Enter School name"
                                value={formik.values.schoolName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                required={true}
                            />
                            {formik.touched.school && formik.errors.school ? (
                                <article className="error">
                                    {formik.errors.school}
                                </article>
                            ) : null}
                        </div>
                        <div className="col-12 form-group">
                            <label>
                                Degree
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="degreeType"
                                name="degreeType"
                                type="text"
                                className="form-control ps-3"
                                placeholder="Enter Degree"
                                value={formik.values.degreeType}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                required={true}
                            />
                            {formik.touched.degreeType &&
                            formik.errors.degreeType ? (
                                <article className="error">
                                    {formik.errors.degreeType}
                                </article>
                            ) : null}
                        </div>
                        <div className="col-12 form-group">
                            <label>
                                Field of study
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                                id="course"
                                name="course"
                                type="text"
                                className="form-control ps-3"
                                placeholder="Enter filed of study"
                                value={formik.values.course}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                required={true}
                            />
                            {formik.touched.course && formik.errors.course ? (
                                <article className="error">
                                    {formik.errors.course}
                                </article>
                            ) : null}
                        </div>
                        <div className="col-12 form-group">
                            <div className="d-flex justify-content-between">
                                <label>
                                    Activities and societies
                                    <span style={{ color: "red" }}>*</span>
                                </label>
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
                                required={true}
                            />
                            {formik.touched.activities &&
                            formik.errors.activities ? (
                                <article className="error">
                                    {formik.errors.activities}
                                </article>
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
                            <label>
                                Entry Date
                                <span style={{ color: "red" }}>*</span>
                            </label>
                            <DatePicker
                                id="startDate"
                                name="startDate"
                                className="date-input col-lg-12 ps-3 py-2"
                                required={true}
                                // style={{ padding: '15px' }}
                                value={moment(startDate)}
                                onChange={(date, dateString) => {
                                    console.log(dateString);
                                    setStartDate(dateString);
                                }}
                            />
                        </div>

                        {!checked && (
                            <div className="col-6 form-group">
                                <label>
                                    Graduation Date
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <DatePicker
                                    id="endDate"
                                    name="endDate"
                                    className="date-input col-lg-12 ps-3 py-2"
                                    required={true}
                                    // style={{ padding: '15px' }}
                                    value={moment(endDate)}
                                    onChange={(date, dateString) => {
                                        console.log(dateString);
                                        setEndDate(dateString);
                                    }}
                                />
                            </div>
                        )}

                        <div
                            className="col-12 d-flex justify-content-end"
                            style={{ marginTop: "2rem" }}
                        >
                            <CustomButton
                                type="button"
                                background="#021098"
                                onClick={(e) => onSubmit(e)}
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
