import React, { useState } from "react";
import {
    ImageWrapper,
    CoInputWrapper,
    FormWrapper,
    HeaderModal,
    ModalForm,
} from "./teams.styled";
import {
    SkillTab,
    WorkExperience,
    Education,
} from "../../../../Startupcomponents";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useActivity } from "../../../../hooks/useBusiness";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Select, DatePicker, Form } from "antd";
import { TeamModal, EducationModal } from "./teamModal";
import { CustomButton } from "../../../../Startupcomponents/button/button.styled";
import { CircularLoader } from "../../../../Startupcomponents/CircluarLoader/CircularLoader";
import { toast } from "react-hot-toast";
import { team } from "./../../../../services/startUpReg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { upload } from "../../../../services/utils";
import {
    CountryDropdown,
    RegionDropdown,
    CountryRegionData,
} from "react-country-region-selector";
import { TextField } from "../../../../Startupcomponents";
import { TextareaCustom } from "../../../../components/textArea/cutstomTextarea";
import moment from "moment";
import { useAuth } from "../../../../hooks/useAuth";
import { letterOnly } from "../../../../utils/helpers";

const { Option } = Select;

export const CoFounder = ({
    handleClose,
    handleWorkDetails,
    editIndex,
    setEditIndex,
    workExperienceCoFounder,
    educationCoFounder,
    isEditing,
    setIsEditing,
}) => {
    const [country, setCountry] = useState("");
    const [skills, setSkills] = useState([]);
    const [phone, setPhone] = useState();
    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [showEducation, setShowEducation] = useState(false);
    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eduStartDate, setEduStartDate] = useState(new Date());
    const [eduEndDate, setEduEndDate] = useState(new Date());
    const [checked, setChecked] = useState(false);
    const [displayWorkExperience, setDisplayWorkExperience] = useState();
    const [displayEducation, setDisplayEducation] = useState();
    const { updateProfile, stateAuth, updateStartupInfo } = useAuth();
    const [localEducation, setLocalEducation] = useState([]);
    const [localExperience, setLocalExperience] = useState([]);
    const [dob, setDob] = useState(moment());
    const [inVal, setVal] = useState("");
    const [region, setRegion] = useState("");

    const [generalValues, setGeneralValues] = useState({
        avatar: avatar,
        briefIntroduction: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: dob,
        linkedIn: "",
        twitter: "",
        website: "",
        country: country,
        position: "",
        state: region,
        city: "",
        skills: skills,
        mobile_number: phone,
        education: localEducation,
        experience: localExperience,
    });

    const [currentEducationValues, setCurrentEducationValues] = useState({
        schoolName: "",
        course: "",
        degree: "",
        activities: "",
        startDate: "",
        endDate: checked ? "present" : "",
    });

    const [currentExperienceValues, setCurrentExperienceValues] = useState({
        companyName: "",
        location: "",
        position: "",
        responsibility: "",
        startDate: "",
        endDate: checked ? "present" : endDate,
    });

    const handleChangeVal = (e) => {
        setVal(e.target.value);
    };
    const handleKey = (e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            if (
                inVal.trim() === "" ||
                stateAuth.profileData?.startupRes.team.skills.indexOf(inVal.trim()) !== -1
            )
                return;
            setVal("");
            setSkills([...skills, inVal]);
        }
    };

    const onDelete = (value) => {
        setSkills(skills.filter((item) => item !== value));
    };

    const onChangeImage = async (e) => {
        const { files } = e.target;
        const formData = new FormData();
        formData.append("dir", "kv");
        formData.append("ref", stateAuth.user?.userId);
        formData.append("type", "image");
        formData.append(0, files[0]);
        try {
            console.log("uploaded");
            setLoading(true);
            const response = await upload(formData);
            console.log(response);
            setAvatar(response?.path);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error(
                error?.response?.data?.message ?? "Unable to upload image"
            );
        }
    };

    const handleChangeCountry = (value) => {
        setCountry(value);
    };

    const handleChangeState = (value) => {
        setRegion(value);
    };

    const {
        changePath,
        state: { path },
    } = useActivity();

    const back = () => {
        changePath(path - 1);
    };

    const onSubmit = () => {
        updateProfile("team", {
            coFounder: [
                ...stateAuth?.profileData?.startupRes?.team.coFounder,
                {
                    avatar: avatar,
                    briefIntroduction:
                        formik.getFieldProps("briefIntroduction").value,
                    firstName: formik.getFieldProps("firstName").value,
                    lastName: formik.getFieldProps("lastName").value,
                    email: formik.getFieldProps("email").value,
                    dob: dob,
                    linkedIn: formik.getFieldProps("linkedIn").value,
                    twitter: formik.getFieldProps("twitter").value,
                    website: formik.getFieldProps("website").value,
                    country: country,
                    position: formik.getFieldProps("position").value,
                    state: region,
                    city: formik.getFieldProps("city").value,
                    skills: skills,
                    mobile_number: phone,
                    education: localEducation,
                    experience: localExperience,
                },
            ],
        });

        handleClose(false);
    };

    const handleEduSubmit = () => {
        setLocalEducation([
            ...localEducation,
            {
                schoolName: eduFormik.getFieldProps("school").value,
                course: eduFormik.getFieldProps("course").value,
                degree: eduFormik.getFieldProps("degree").value,
                activities: eduFormik.getFieldProps("activities").value,
                startDate: eduStartDate,
                endDate: checked ? "present" : eduEndDate,
            },
        ]);
    };

    const eduFormik = useFormik({
        initialValues: {
            school: "",
            course: "",
            degree: "",
            activities: "",
        },
    });

    const workFormik = useFormik({
        initialValues: {
            companyName: "",
            location: "",
            position: "",
            responsibility: "",
            startDate: "",
            endDate: "",
        },
    });

    const handleExpeSubmit = () => {
        setLocalExperience([
            ...localExperience,
            {
                companyName: workFormik.getFieldProps("companyName").value,
                location: workFormik.getFieldProps("location").value,
                position: workFormik.getFieldProps("position").value,
                responsibility:
                    workFormik.getFieldProps("responsibility").value,
                startDate: startDate,
                endDate: checked ? "present" : endDate,
            },
        ]);

        workFormik.resetForm({
            values: {
                companyName: "",
                location: "",
                position: "",
                responsibility: "",
                startDate: "",
                endDate: "",
            },
        });
    };

    const formik = useFormik({
        initialValues: {
            briefIntroduction: "",
            firstName: "",
            lastName: "",
            email: "",
            dob: startDate,
            country: "",
            position: "",
            city: "",
            mobile_number: "",
            skills: [],
            linkedIn: "",
            twitter: "",
            website: "",
        },
    });

    return (
        <div className="px-3">
            {show ? <TeamModal handleClose={setShow} /> : <span></span>}
            {showEducation ? (
                <EducationModal isLocal={true} handleClose={setShowEducation} />
            ) : (
                <span></span>
            )}

            <Form.Provider>
                <Form
                    id="Cofounder-general"
                    name="Cofounder-general"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                        // handleExpeSubmit();
                        // setDisplayWorkExperience(true);
                    }}
                ></Form>
                <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                    <div className="div">
                        <span>Co-Founder</span>
                        <p
                            onClick={() =>
                                console.log(stateAuth.profileData?.startupRes.team)
                            }
                        >
                            A brief profile of co-founders
                        </p>
                    </div>

                    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                        <ImageWrapper>
                            {avatar === null ? (
                                loading ? (
                                    <CircularLoader color={"#000"} />
                                ) : (
                                    <UserOutlined />
                                )
                            ) : (
                                <img
                                    className=""
                                    src={avatar}
                                    style={{
                                        borderRadius: "70px",
                                        width: "90px",
                                        height: "90px",
                                    }}
                                    alt=""
                                />
                            )}
                        </ImageWrapper>

                        <CoInputWrapper for="found">
                            <input
                                type="file"
                                onChange={onChangeImage}
                                id="found"
                                hidden
                            />
                            <PlusOutlined style={{ color: "#ffffff" }} />
                        </CoInputWrapper>
                    </div>

                    <div className="row my-3 mt-4">
                        <div className="form-group col-12">
                            <div className="d-flex justify-content-between">
                                <label>Brief Introduction *</label>
                                <label style={{ color: "#828282" }}>
                                    10 words at most
                                </label>
                            </div>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.briefIntroduction}
                                type="text"
                                name="briefIntroduction"
                                placeholder="Enter a brief bio about yourself"
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <TextField
                                label="First Name"
                                name={"firstName"}
                                // onChange={(e) =>
                                //     updateProfile("startUpProfile", {
                                //         brand: e.target.value,
                                //     })
                                // }
                                // value={
                                //     stateAuth?.profileData?.startupRes?.startUpProfile
                                //         ?.brand
                                // }
                                required={true}
                                placeholder="eg; Knight Ventures"
                            />
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                type="text"
                                name="firstName"
                                placeholder="Enter first name"
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <label>Last Name *</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                type="text"
                                name="lastName"
                                placeholder="Enter last name"
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <label>Email *</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                type="text"
                                name="email"
                                placeholder="Enter email address"
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group  col-lg-6 col-12">
                            <label>Date of Birth *</label>
                            <DatePicker
                                className="custs p-2"
                                style={{ padding: "15px" }}
                                selected={dob}
                                placeholderText="yyyy-mm-dd"
                                onChange={(date) => setDob(date, "dob")}
                            />
                        </div>
                        <div className="form-group col-lg-4 col-12">
                            <label>Country *</label>
                            <CountryDropdown
                                className="form-control px-5 py-1 country-bg"
                                value={country}
                                onChange={(value) => handleChangeCountry(value)}
                            ></CountryDropdown>
                        </div>
                        <div className="form-group col-lg-4 col-12">
                            <label>State *</label>
                            <RegionDropdown
                                name="state"
                                country={country}
                                value={region}
                                onChange={(value) => handleChangeState(value)}
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group col-lg-4 col-12">
                            <label>City *</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                type="text"
                                name="city"
                                placeholder="Enter your city"
                                className="form-control ps-3"
                            />
                        </div>
                        <div className="form-group col-6 ">
                            <label>Mobile Number *</label>
                            <PhoneInput
                                international
                                name="phone"
                                countryCallingCodeEditable={true}
                                className="custs w-lg-50 ps-1"
                                value={phone}
                                onChange={(value) => setPhone(value)}
                                placeholder="0000 00000 0000"
                                MaxLength={17}
                            />
                        </div>

                        <div className="form-group col-lg-4 col-12">
                            <label>
                                Position at{" "}
                                <em>{stateAuth?.user?.businessname}</em>*
                            </label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.position}
                                type="text"
                                name="position"
                                placeholder="Enter your position"
                                className="form-control ps-3"
                            />
                        </div>
                    </div>
                </FormWrapper>
                <Form
                    name="Cofounder-Experience"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                        // handleExpeSubmit();
                        // setDisplayWorkExperience(true);
                    }}
                >
                    <FormWrapper height="80%" style={{ padding: "0 0 1rem 0" }}>
                        {!displayWorkExperience ? (
                            <div>
                                <HeaderModal>
                                    {" "}
                                    {"Add Work Experience"}
                                </HeaderModal>
                                <hr style={{ background: "#323232" }} />
                                <ModalForm className="row">
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Company Name"
                                            name={"companyName"}
                                            value={
                                                currentExperienceValues.companyName
                                            }
                                            placeholder="e.g. Knight Ventures"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Location"
                                            name={"location"}
                                            value={
                                                currentExperienceValues.location
                                            }
                                            placeholder="e.g. United state of America"
                                            required={true}
                                        />
                                    </div>

                                    <div className="col-12 form-group">
                                        <TextareaCustom
                                            name={"responsibility"}
                                            label={"Description"}
                                            value={
                                                currentExperienceValues.responsibility
                                            }
                                            min={10}
                                            maxLength={50}
                                            onKeyPress={letterOnly}
                                            placeholder="Tell us about your role"
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() =>
                                                setChecked(!checked)
                                            }
                                        />
                                        <span>I current work in this role</span>
                                    </div>
                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="startDate"
                                            label="Start Date"
                                            initialValue={
                                                currentExperienceValues.startDate
                                                    ? moment(
                                                          currentExperienceValues.startDate
                                                      )
                                                    : undefined
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please select the day you started",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                id="startDate"
                                                name="startDate"
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                selected={startDate}
                                                onChange={(date) =>
                                                    setStartDate(date)
                                                }
                                            />
                                        </Form.Item>
                                    </div>
                                    {!checked && (
                                        <div className="col-6 form-group">
                                            <Form.Item
                                                name="endDate"
                                                label="End Date"
                                                initialValue={
                                                    currentExperienceValues.endDate
                                                        ? moment(
                                                              currentExperienceValues.endDate
                                                          )
                                                        : undefined
                                                }
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please select the day you left",
                                                    },
                                                ]}
                                            >
                                                <DatePicker
                                                    id="endDate"
                                                    name="endDate"
                                                    className="p-2"
                                                    style={{ padding: "15px" }}
                                                    selected={endDate}
                                                    onChange={(date) =>
                                                        setEndDate(date)
                                                    }
                                                />
                                            </Form.Item>
                                        </div>
                                    )}

                                    <div
                                        className="col-12 d-flex justify-content-between"
                                        style={{ marginTop: "4rem" }}
                                    >
                                        {displayWorkExperience === false && (
                                            <CustomButton
                                                background="#D0D0D1"
                                                onClick={() =>
                                                    setDisplayWorkExperience(
                                                        true
                                                    )
                                                }
                                            >
                                                Cancel
                                            </CustomButton>
                                        )}

                                        <CustomButton
                                            type="submit"
                                            background="#021098"
                                            // onClick={() => {

                                            // }}
                                            style={{
                                                marginLeft:
                                                    displayWorkExperience
                                                        ? "7rem"
                                                        : "0rem",
                                            }}
                                        >
                                            Save
                                        </CustomButton>
                                    </div>
                                </ModalForm>
                            </div>
                        ) : (
                            <div>
                                <HeaderModal>Work Experience</HeaderModal>
                                <hr style={{ background: "#323232" }} />
                                {localExperience.length > 0 &&
                                    localExperience.map((item, index) => {
                                        return (
                                            <WorkExperience
                                                key={index}
                                                {...item}
                                                showTeamModal={() =>
                                                    setDisplayWorkExperience(
                                                        false
                                                    )
                                                }
                                                setEditIndex={setEditIndex}
                                                setIsEditing={setIsEditing}
                                                id={index}
                                            />
                                        );
                                    })}
                                <div className="col-7 my-4 px-0">
                                    <span
                                        style={{
                                            color: "#120297",
                                            borderBottom: "1px solid #120297",
                                            fontWeight: "600",
                                            marginTop: "10px",
                                        }}
                                        onClick={() =>
                                            setDisplayWorkExperience(false)
                                        }
                                    >
                                        Add another work experience +
                                    </span>
                                </div>
                            </div>
                        )}
                    </FormWrapper>
                </Form>

                <Form
                    name="Cofounder-Education"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={(values) => {
                        console.log(values);
                        // handleEduSubmit();
                        // setDisplayEducation(true);
                    }}
                >
                    <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                        {!displayEducation ? (
                            <div>
                                <HeaderModal>
                                    {isEditing
                                        ? "Edit Education"
                                        : "Add Education"}
                                </HeaderModal>
                                <hr style={{ background: "#323232" }} />
                                <ModalForm className="row">
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="School"
                                            name={"school"}
                                            value={
                                                currentEducationValues.school
                                            }
                                            placeholder="Enter School name"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Degree"
                                            name={"degree"}
                                            value={
                                                currentEducationValues.degree
                                            }
                                            placeholder="Enter Degree"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextField
                                            label="Field of study"
                                            name={"course"}
                                            value={
                                                currentEducationValues.course
                                            }
                                            placeholder="Enter filed of study"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-12 form-group">
                                        <TextareaCustom
                                            name={"activities"}
                                            label={"Activities and societies"}
                                            value={
                                                currentEducationValues.activities
                                            }
                                            min={10}
                                            maxLength={50}
                                            onKeyPress={letterOnly}
                                            placeholder="Enter Activities and Societies"
                                        />
                                    </div>

                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="eduStartDate"
                                            label="Entry Date"
                                            initialValue={
                                                currentEducationValues.eduStartDate
                                                    ? moment(
                                                          currentEducationValues.eduStartDate
                                                      )
                                                    : undefined
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please select the day you started",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                id="eduStartDate"
                                                name="eduStartDate"
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                selected={startDate}
                                                onChange={(date) =>
                                                    setEduStartDate(date)
                                                }
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="col-6 form-group">
                                        <Form.Item
                                            name="eduEndDate"
                                            label="Graduation Date"
                                            initialValue={
                                                currentEducationValues.eduEndDate
                                                    ? moment(
                                                          currentEducationValues.eduEndDate
                                                      )
                                                    : undefined
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please select the day you started",
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                id="eduEndDate"
                                                name="eduEndDate"
                                                className="p-2"
                                                style={{ padding: "15px" }}
                                                selected={startDate}
                                                onChange={(date) =>
                                                    setEduEndDate(date)
                                                }
                                            />
                                        </Form.Item>
                                    </div>

                                    <div
                                        className="col-12 d-flex justify-content-between"
                                        style={{ marginTop: "4rem" }}
                                    >
                                        {displayEducation === false && (
                                            <CustomButton
                                                background="#D0D0D1"
                                                onClick={() =>
                                                    setDisplayEducation(true)
                                                }
                                            >
                                                Cancel
                                            </CustomButton>
                                        )}
                                        <CustomButton
                                            type="submit"
                                            background="#021098"
                                            style={{
                                                marginLeft: displayEducation
                                                    ? "7rem"
                                                    : "0rem",
                                            }}
                                        >
                                            Save
                                        </CustomButton>
                                    </div>
                                </ModalForm>
                            </div>
                        ) : (
                            <div className="mx-5">
                                <HeaderModal>Education</HeaderModal>
                                <hr style={{ background: "#323232" }} />
                                {localEducation &&
                                    localEducation.map((item, index) => {
                                        return (
                                            <Education
                                                key={index}
                                                {...item}
                                                showEducationModal={() =>
                                                    setDisplayEducation(false)
                                                }
                                                setEditIndex={setEditIndex}
                                                setIsEditing={setIsEditing}
                                                id={index}
                                            />
                                        );
                                    })}
                                <div className="col-6 my-4">
                                    <span
                                        style={{
                                            color: "#120297",
                                            borderBottom: "1px solid #120297",
                                            fontWeight: "600",
                                            marginTop: "10px",
                                        }}
                                        onClick={() =>
                                            setDisplayEducation(false)
                                        }
                                    >
                                        Add another education +
                                    </span>
                                </div>
                            </div>
                        )}
                    </FormWrapper>
                </Form>

                <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                    <div className="div">
                        <span>Skills</span>
                    </div>
                    <hr />

                    <div className="form-group">
                        <div>
                            <label>
                                What are your skills
                                <span style={{ color: "red" }}>*</span>
                            </label>
                        </div>
                        <input
                            onChange={handleChangeVal}
                            style={{
                                width: "100%",
                                outline: "none",
                                color: "purple",
                            }}
                            value={inVal}
                            type="text"
                            placeholder="Enter your skills and press the space button to add "
                            className="py-2 px-3"
                            // className='form-control ps-3'
                            onKeyDown={handleKey}
                        />
                        {skills &&
                            skills.map((item, i) => (
                                <SkillTab
                                    key={i}
                                    skill={item}
                                    onClick={() => onDelete(item)}
                                />
                            ))}
                    </div>
                </FormWrapper>

                <FormWrapper height="70%" style={{ padding: "0 0 1rem 0" }}>
                    <div className="div border-bottom pb-3">
                        <span>Web & Social Media</span>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6 col-12">
                            <TextField
                                label="Linkedin"
                                name={"linkedInHandle"}
                                value={
                                    stateAuth?.profileData?.startupRes?.startUpProfile
                                        ?.contactInfo?.linkedInHandle
                                }
                                required={true}
                                type={"url"}
                                placeholder="Enter your Linkedin link"
                            />
                        </div>
                        <div className="form-group col-lg-6 col-12">
                            <label>Twitter*</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.twitter}
                                type="text"
                                name="twitter"
                                placeholder="Enter Twitter link"
                                className="form-control ps-3"
                            />
                        </div>

                        <div className="form-group col-lg-6 col-12">
                            <label>Website*</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.website}
                                type="text"
                                name="website"
                                placeholder="Enter website"
                                className="form-control ps-3"
                            />
                        </div>
                    </div>
                </FormWrapper>

                <div className="row mb-5">
                    <div className="col-3">
                        <CustomButton
                            className=""
                            background="#D0D0D1"
                            onClick={back}
                        >
                            Back
                        </CustomButton>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        {/* <CustomButton className="mx-2" background="#00ADEF">
              Save
            </CustomButton> */}
                        <CustomButton
                            type="submit"
                            onClick={onSubmit}
                            background="#00ADEF"
                        >
                            {"Save"}
                        </CustomButton>
                    </div>
                </div>
            </Form.Provider>
        </div>
    );
};
